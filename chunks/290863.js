"use strict";
n.d(t, { A: () => ei, m: () => x }), n(321073);
var r = n(812729),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(73153),
    u = n(682261),
    c = n(242919),
    d = n(531181),
    _ = n(477394),
    f = n(847521),
    h = n(661191),
    p = n(961350),
    g = n(287809),
    E = n(652215);
let A = Object.freeze([]),
    I = {},
    T = {},
    y = {},
    S = {},
    v = {},
    C = {},
    b = {};
function N(e, t) {
    let n = I[e];
    return null != n ? n[t] : null;
}
let R = (e) => {
    switch (e.type) {
        case E.$pd.CUSTOM_STATUS:
            return 4;
        case E.$pd.COMPETING:
            return 3;
        case E.$pd.STREAMING:
            return 2;
        case E.$pd.PLAYING:
            return 1;
        default:
            return 0;
    }
};
function O(e, t) {
    return R(t) - R(e);
}
let D = (e) => +!!(0, u.A)(e);
function L(e, t) {
    return D(t) - D(e);
}
function w(e, t) {
    return (t.created_at ?? 0) - (e.created_at ?? 0);
}
function x(e, t) {
    return O(e, t) || L(e, t) || w(e, t);
}
function P(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === E.$pd.PLAYING ? n.push(r) : t.push(r);
    return n.length <= 1 ? e : [...t, [...n].sort(x)[0]].sort(x);
}
function M(e, t) {
    (y[e] = t), (S[e] = P(t));
}
function k(e) {
    delete y[e], delete S[e];
}
function U(e, t) {
    if (t === p.default.getId()) return { visible: e, hidden: [] };
    let n = _.a.getConfig({ location: "presence_filtering" }).enabled
            ? e.map((e) => (0, f.Dh)(e))
            : e.map((e) => (0, f.Ar)(e)),
        r = d.o.getCurrentConfig({ location: "presence_filtering" }, { autoTrackExposure: !1 });
    if (!r.filterGamePresence && !r.filterRichPresence) return { visible: n, hidden: [] };
    let i = [],
        a = [];
    for (let e of n) {
        if (e.type !== E.$pd.PLAYING) {
            i.push(e);
            continue;
        }
        let t = null != e.application_id && (0, u.A)(e);
        r.filterGamePresence ? t && a.push(e) : r.filterRichPresence && t ? a.push(e) : i.push(e);
    }
    return { visible: i, hidden: a };
}
function G(e) {
    if ((delete T[e], k(e), delete v[e], delete C[e], null == I[e])) return;
    let t = Object.values(I[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                r = e.processedAtTimestamp,
                i = null != t.activities ? t.activities.length : 0,
                a = null != e.activities ? e.activities.length : 0;
            return n > r || (n === r && i > a) ? t : e;
        }, t[0]);
    n.status !== E.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((T[e] = n.status),
          M(e, n.activities),
          (v[e] = F(Object.values(t).flatMap((e) => e.hiddenActivities ?? []))),
          null != n.clientStatus && (C[e] = n.clientStatus))
        : s().every(
                I[e],
                (e) => e.status === E.clD.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length),
            )
          ? delete I[e]
          : n.status === E.clD.OFFLINE &&
            t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (v[e] = F(Object.values(t).flatMap((e) => e.hiddenActivities ?? [])));
}
function F(e) {
    return 0 === e.length
        ? e
        : [...new Map([...e].reverse().map((e) => [`${e.application_id}:${e.party?.id}`, e])).values()];
}
function V(e) {
    let t = I[e];
    if (null == t) return;
    let n = s().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    (n.status !== E.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) &&
        ((T[e] = n.status),
        M(e, n.activities),
        (v[e] = n.hiddenActivities ?? []),
        null != n.clientStatus && (C[e] = n.clientStatus));
}
function B(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: a,
        activities: s,
        hiddenActivities: o,
        processedAtTimestamp: l,
    } = e;
    if (n === p.default.getId()) return !1;
    let u = r === E.clD.OFFLINE && (null == o || 0 === o.length),
        c = I[n];
    if (null == c) {
        if (u) return !1;
        c = I[n] = {};
    }
    if (u) c[t] = { status: r, clientStatus: a, activities: A, hiddenActivities: A, processedAtTimestamp: l };
    else {
        let { visible: e, hidden: u } = U(s.length > 1 ? [...s].sort(x) : s, n),
            d = F([...(o ?? []), ...u]),
            _ = c[t];
        (s = null != _ && i()(_.activities, e) ? _.activities : e),
            (c[t] = { status: r, clientStatus: a, activities: s, hiddenActivities: d, processedAtTimestamp: l });
    }
    return delete b[n], G(n), !0;
}
function j(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: i,
        activities: a,
        hiddenActivities: s,
        processedAtTimestamp: o,
    } = e;
    if (n === p.default.getId()) return;
    let l = r === E.clD.OFFLINE && (null == s || 0 === s.length),
        u = I[n];
    if (null == u) {
        if (l) return;
        u = I[n] = {};
    }
    if (l) u[t] = { status: r, clientStatus: i, activities: A, hiddenActivities: A, processedAtTimestamp: o };
    else {
        let { visible: e, hidden: l } = U(a.length > 1 ? [...a].sort(x) : a, n),
            c = F([...(s ?? []), ...l]);
        u[t] = { status: r, clientStatus: i, activities: e, hiddenActivities: c, processedAtTimestamp: o };
    }
}
function H(e, t) {
    if (t === p.default.getId()) return !1;
    let n = I[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete I[t], G(t);
}
function Y(e) {
    for (let t of h.default.keys(I)) H(e, t);
}
function W() {
    return !0;
}
function K(e) {
    let { guilds: t, presences: n } = e,
        r = p.default.getId();
    (I = {}),
        (b = {}),
        (T = { [r]: T[r] }),
        (y = { [r]: y[r] }),
        (S = { [r]: S[r] }),
        (v = { [r]: v[r] }),
        (C = { [r]: {} });
    let i = new Set();
    t.forEach((e) => {
        e.presences.forEach((t) => {
            let {
                user: n,
                status: r,
                clientStatus: a,
                activities: s,
                hiddenActivities: o,
                processedAtTimestamp: l,
            } = t;
            j({
                guildId: e.id,
                userId: n.id,
                status: r,
                clientStatus: a,
                activities: s,
                hiddenActivities: o,
                processedAtTimestamp: l,
            }),
                i.add(n.id);
        });
    }),
        n.forEach((e) => {
            let {
                user: t,
                status: n,
                clientStatus: r,
                activities: a,
                hiddenActivities: s,
                processedAtTimestamp: o,
            } = e;
            null != t &&
                (j({
                    guildId: E.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: a,
                    hiddenActivities: s,
                    processedAtTimestamp: o,
                }),
                i.add(t.id));
        }),
        i.delete(r),
        i.forEach(V);
}
function $(e) {
    let { presences: t } = e;
    (I = t.presencesForGuilds),
        (T = t.statuses),
        (y = t.activities),
        (v = t.hiddenActivities),
        (b = t.activityMetadata);
}
function z(e) {
    let { presences: t } = e;
    Y(E.ME),
        t.forEach((e) => {
            let {
                user: t,
                status: n,
                clientStatus: r,
                activities: i,
                hiddenActivities: a,
                processedAtTimestamp: s,
            } = e;
            null != t &&
                B({
                    guildId: E.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: i,
                    hiddenActivities: a,
                    processedAtTimestamp: s,
                });
        });
}
function q(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: r, clientStatus: i, activities: a, hiddenActivities: s, processedAtTimestamp: o } = e;
        B({
            guildId: t.id,
            userId: n.id,
            status: r,
            clientStatus: i,
            activities: a,
            hiddenActivities: s,
            processedAtTimestamp: o,
        });
    });
}
function X(e) {
    let { guild: t } = e;
    Y(t.id);
}
function Z(e) {
    let { guildId: t, user: n } = e;
    return H(t, n.id);
}
function Q(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let {
                guildId: t,
                user: n,
                status: r,
                clientStatus: i,
                activities: a,
                hiddenActivities: s,
                processedAtTimestamp: o,
            } = e;
            return B({
                guildId: t ?? E.ME,
                userId: n.id,
                status: r,
                clientStatus: i,
                activities: a,
                hiddenActivities: s,
                processedAtTimestamp: o,
            });
        })
        .some((e) => e);
}
function J(e) {
    let { guildId: t, members: n } = e;
    n.forEach((e) => {
        null != e.presence &&
            B({
                guildId: t,
                userId: e.user_id,
                status: e.presence.status,
                clientStatus: e.presence.clientStatus,
                activities: e.presence.activities,
                hiddenActivities: e.presence.hiddenActivities,
                processedAtTimestamp: e.presence.processedAtTimestamp,
            });
    });
}
function ee(e) {
    let { guildId: t, addedMembers: n } = e;
    n?.forEach((e) => {
        null != e.presence &&
            B({
                guildId: t,
                userId: e.userId,
                status: e.presence.status,
                clientStatus: e.presence.clientStatus,
                activities: e.presence.activities,
                hiddenActivities: e.presence.hiddenActivities,
                processedAtTimestamp: e.presence.processedAtTimestamp,
            });
    });
}
function et(e) {
    let t = p.default.getId();
    if (T[t] === e.status && y[t] === e.activities && v[t] === e.hiddenActivities) return !1;
    (T[t] = e.status), M(t, [...e.activities].sort(x)), (v[t] = [...e.hiddenActivities].sort(x)), delete b[t];
}
function en(e) {
    let { userId: t, metadata: n } = e;
    return (b[t] = n), !1;
}
class er extends o.Ay.Store {
    static displayName = "PresenceStore";
    initialize() {
        this.waitFor(p.default, c.A, g.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (T[p.default.getId()] = e), M(p.default.getId(), [...t].sort(x));
    }
    getStatus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.clD.OFFLINE,
            r = g.default.getUser(e);
        if ((null != r && r.hasFlag(E.nhx.BOT_HTTP_INTERACTIONS) && (n = E.clD.UNKNOWN), null == t)) return T[e] ?? n;
        let i = N(e, t);
        return i?.status ?? n;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return S[e] ?? A;
        let n = N(e, t);
        return null == n || null == n.activities ? A : P(n.activities);
    }
    getUnfilteredActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return y[e] ?? A;
        let n = N(e, t);
        return null == n || null == n.activities ? A : n.activities;
    }
    getHiddenActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == t ? (v[e] ?? A) : (N(e, t)?.hiddenActivities ?? A);
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== E.$pd.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of h.default.keys(S))
            for (let r of S[n]) r.application_id === e && t.push({ userId: n, activity: r });
        return t;
    }
    getApplicationActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this.findActivity(e, (e) => e.application_id === t, n, !0);
    }
    findActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        r = r ?? !1;
        let i = this.getActivities(e, n);
        return r && (i = i.concat(this.getHiddenActivities(e, n))), i.find(t);
    }
    getActivityMetadata(e) {
        return b[e];
    }
    getUserIds() {
        return h.default.keys(y);
    }
    isMobileOnline(e) {
        let t = C[e];
        return (
            null != t &&
            t[E.xfJ.MOBILE] === E.clD.ONLINE &&
            t[E.xfJ.DESKTOP] !== E.clD.ONLINE &&
            t[E.xfJ.VR] !== E.clD.ONLINE
        );
    }
    isVROnline(e) {
        let t = C[e];
        return null != t && t[E.xfJ.VR] === E.clD.ONLINE;
    }
    getClientStatus(e) {
        return C[e];
    }
    getState() {
        return {
            presencesForGuilds: I,
            statuses: T,
            activities: y,
            filteredActivities: S,
            hiddenActivities: v,
            activityMetadata: b,
            clientStatuses: C,
        };
    }
}
let ei = new er(l.h, {
    CONNECTION_OPEN: W,
    CONNECTION_OPEN_SUPPLEMENTAL: K,
    OVERLAY_INITIALIZE: $,
    GUILD_CREATE: q,
    GUILD_DELETE: X,
    GUILD_MEMBER_REMOVE: Z,
    PRESENCE_UPDATES: Q,
    PRESENCES_REPLACE: z,
    ACTIVITY_METADATA_UPDATE: en,
    THREAD_MEMBER_LIST_UPDATE: J,
    THREAD_MEMBERS_UPDATE: ee,
    SELF_PRESENCE_STORE_UPDATE: et,
});
