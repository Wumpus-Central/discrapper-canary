"use strict";
n.d(t, { A: () => er, m: () => w }), n(321073);
var r = n(812729),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(73153),
    u = n(682261),
    c = n(242919),
    d = n(531181),
    _ = n(477394),
    f = n(847521),
    p = n(661191),
    h = n(961350),
    m = n(287809),
    E = n(652215);
let g = Object.freeze([]),
    A = {},
    I = {},
    T = {},
    S = {},
    y = {},
    v = {},
    N = {};
function C(e, t) {
    let n = A[e];
    return null != n ? n[t] : null;
}
let b = (e) => {
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
function R(e, t) {
    return b(t) - b(e);
}
let O = (e) => +!!(0, u.A)(e);
function D(e, t) {
    return O(t) - O(e);
}
function L(e, t) {
    return (t.created_at ?? 0) - (e.created_at ?? 0);
}
function w(e, t) {
    return R(e, t) || D(e, t) || L(e, t);
}
function x(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === E.$pd.PLAYING ? n.push(r) : t.push(r);
    return n.length <= 1 ? e : [...t, [...n].sort(w)[0]].sort(w);
}
function M(e, t) {
    (T[e] = t), (S[e] = x(t));
}
function P(e) {
    delete T[e], delete S[e];
}
function k(e, t) {
    if (t === h.default.getId()) return { visible: e, hidden: [] };
    let n = _.a.getConfig({ location: "presence_filtering" }).enabled
            ? e.map((e) => (0, f.Dh)(e))
            : e.map((e) => (0, f.Ar)(e)),
        r = d.o.getCurrentConfig({ location: "presence_filtering" }, { autoTrackExposure: !1 });
    if (!r.filterGamePresence && !r.filterRichPresence) return { visible: n, hidden: [] };
    let i = [],
        s = [];
    for (let e of n) {
        if (e.type !== E.$pd.PLAYING) {
            i.push(e);
            continue;
        }
        let t = null != e.application_id && (0, u.A)(e);
        r.filterGamePresence ? t && s.push(e) : r.filterRichPresence && t ? s.push(e) : i.push(e);
    }
    return { visible: i, hidden: s };
}
function U(e) {
    if ((delete I[e], P(e), delete y[e], delete v[e], null == A[e])) return;
    let t = Object.values(A[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                r = e.processedAtTimestamp,
                i = null != t.activities ? t.activities.length : 0,
                s = null != e.activities ? e.activities.length : 0;
            return n > r || (n === r && i > s) ? t : e;
        }, t[0]);
    n.status !== E.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((I[e] = n.status),
          M(e, n.activities),
          (y[e] = G(Object.values(t).flatMap((e) => e.hiddenActivities ?? []))),
          null != n.clientStatus && (v[e] = n.clientStatus))
        : a().every(
                A[e],
                (e) => e.status === E.clD.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length),
            )
          ? delete A[e]
          : n.status === E.clD.OFFLINE &&
            t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (y[e] = G(Object.values(t).flatMap((e) => e.hiddenActivities ?? [])));
}
function G(e) {
    return 0 === e.length
        ? e
        : [...new Map([...e].reverse().map((e) => [`${e.application_id}:${e.party?.id}`, e])).values()];
}
function F(e) {
    let t = A[e];
    if (null == t) return;
    let n = a().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    (n.status !== E.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) &&
        ((I[e] = n.status),
        M(e, n.activities),
        (y[e] = n.hiddenActivities ?? []),
        null != n.clientStatus && (v[e] = n.clientStatus));
}
function V(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: s,
        activities: a,
        hiddenActivities: o,
        processedAtTimestamp: l,
    } = e;
    if (n === h.default.getId()) return !1;
    let u = r === E.clD.OFFLINE && (null == o || 0 === o.length),
        c = A[n];
    if (null == c) {
        if (u) return !1;
        c = A[n] = {};
    }
    if (u) c[t] = { status: r, clientStatus: s, activities: g, hiddenActivities: g, processedAtTimestamp: l };
    else {
        let { visible: e, hidden: u } = k(a.length > 1 ? [...a].sort(w) : a, n),
            d = G([...(o ?? []), ...u]),
            _ = c[t];
        (a = null != _ && i()(_.activities, e) ? _.activities : e),
            (c[t] = { status: r, clientStatus: s, activities: a, hiddenActivities: d, processedAtTimestamp: l });
    }
    return delete N[n], U(n), !0;
}
function B(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: i,
        activities: s,
        hiddenActivities: a,
        processedAtTimestamp: o,
    } = e;
    if (n === h.default.getId()) return;
    let l = r === E.clD.OFFLINE && (null == a || 0 === a.length),
        u = A[n];
    if (null == u) {
        if (l) return;
        u = A[n] = {};
    }
    if (l) u[t] = { status: r, clientStatus: i, activities: g, hiddenActivities: g, processedAtTimestamp: o };
    else {
        let { visible: e, hidden: l } = k(s.length > 1 ? [...s].sort(w) : s, n),
            c = G([...(a ?? []), ...l]);
        u[t] = { status: r, clientStatus: i, activities: e, hiddenActivities: c, processedAtTimestamp: o };
    }
}
function H(e, t) {
    if (t === h.default.getId()) return !1;
    let n = A[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete A[t], U(t);
}
function j(e) {
    for (let t of p.default.keys(A)) H(e, t);
}
function Y() {
    return !0;
}
function W(e) {
    let { guilds: t, presences: n } = e,
        r = h.default.getId();
    (A = {}),
        (N = {}),
        (I = { [r]: I[r] }),
        (T = { [r]: T[r] }),
        (S = { [r]: S[r] }),
        (y = { [r]: y[r] }),
        (v = { [r]: {} });
    let i = new Set();
    t.forEach((e) => {
        e.presences.forEach((t) => {
            let {
                user: n,
                status: r,
                clientStatus: s,
                activities: a,
                hiddenActivities: o,
                processedAtTimestamp: l,
            } = t;
            B({
                guildId: e.id,
                userId: n.id,
                status: r,
                clientStatus: s,
                activities: a,
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
                activities: s,
                hiddenActivities: a,
                processedAtTimestamp: o,
            } = e;
            null != t &&
                (B({
                    guildId: E.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: s,
                    hiddenActivities: a,
                    processedAtTimestamp: o,
                }),
                i.add(t.id));
        }),
        i.delete(r),
        i.forEach(F);
}
function K(e) {
    let { presences: t } = e;
    (A = t.presencesForGuilds),
        (I = t.statuses),
        (T = t.activities),
        (y = t.hiddenActivities),
        (N = t.activityMetadata);
}
function z(e) {
    let { presences: t } = e;
    j(E.ME),
        t.forEach((e) => {
            let {
                user: t,
                status: n,
                clientStatus: r,
                activities: i,
                hiddenActivities: s,
                processedAtTimestamp: a,
            } = e;
            null != t &&
                V({
                    guildId: E.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: i,
                    hiddenActivities: s,
                    processedAtTimestamp: a,
                });
        });
}
function $(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: r, clientStatus: i, activities: s, hiddenActivities: a, processedAtTimestamp: o } = e;
        V({
            guildId: t.id,
            userId: n.id,
            status: r,
            clientStatus: i,
            activities: s,
            hiddenActivities: a,
            processedAtTimestamp: o,
        });
    });
}
function q(e) {
    let { guild: t } = e;
    j(t.id);
}
function Z(e) {
    let { guildId: t, user: n } = e;
    return H(t, n.id);
}
function X(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let {
                guildId: t,
                user: n,
                status: r,
                clientStatus: i,
                activities: s,
                hiddenActivities: a,
                processedAtTimestamp: o,
            } = e;
            return V({
                guildId: t ?? E.ME,
                userId: n.id,
                status: r,
                clientStatus: i,
                activities: s,
                hiddenActivities: a,
                processedAtTimestamp: o,
            });
        })
        .some((e) => e);
}
function Q(e) {
    let { guildId: t, members: n } = e;
    n.forEach((e) => {
        null != e.presence &&
            V({
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
function J(e) {
    let { guildId: t, addedMembers: n } = e;
    n?.forEach((e) => {
        null != e.presence &&
            V({
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
function ee(e) {
    let t = h.default.getId();
    if (I[t] === e.status && T[t] === e.activities && y[t] === e.hiddenActivities) return !1;
    (I[t] = e.status), M(t, [...e.activities].sort(w)), (y[t] = [...e.hiddenActivities].sort(w)), delete N[t];
}
function et(e) {
    let { userId: t, metadata: n } = e;
    return (N[t] = n), !1;
}
class en extends o.Ay.Store {
    static displayName = "PresenceStore";
    initialize() {
        this.waitFor(h.default, c.A, m.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (I[h.default.getId()] = e), M(h.default.getId(), [...t].sort(w));
    }
    getStatus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.clD.OFFLINE,
            r = m.default.getUser(e);
        if ((null != r && r.hasFlag(E.nhx.BOT_HTTP_INTERACTIONS) && (n = E.clD.UNKNOWN), null == t)) return I[e] ?? n;
        let i = C(e, t);
        return i?.status ?? n;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return S[e] ?? g;
        let n = C(e, t);
        return null == n || null == n.activities ? g : x(n.activities);
    }
    getUnfilteredActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return T[e] ?? g;
        let n = C(e, t);
        return null == n || null == n.activities ? g : n.activities;
    }
    getHiddenActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == t ? (y[e] ?? g) : (C(e, t)?.hiddenActivities ?? g);
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== E.$pd.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of p.default.keys(S))
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
        return N[e];
    }
    getUserIds() {
        return p.default.keys(T);
    }
    isMobileOnline(e) {
        let t = v[e];
        return (
            null != t &&
            t[E.xfJ.MOBILE] === E.clD.ONLINE &&
            t[E.xfJ.DESKTOP] !== E.clD.ONLINE &&
            t[E.xfJ.VR] !== E.clD.ONLINE
        );
    }
    isVROnline(e) {
        let t = v[e];
        return null != t && t[E.xfJ.VR] === E.clD.ONLINE;
    }
    getClientStatus(e) {
        return v[e];
    }
    getState() {
        return {
            presencesForGuilds: A,
            statuses: I,
            activities: T,
            filteredActivities: S,
            hiddenActivities: y,
            activityMetadata: N,
            clientStatuses: v,
        };
    }
}
let er = new en(l.h, {
    CONNECTION_OPEN: Y,
    CONNECTION_OPEN_SUPPLEMENTAL: W,
    OVERLAY_INITIALIZE: K,
    GUILD_CREATE: $,
    GUILD_DELETE: q,
    GUILD_MEMBER_REMOVE: Z,
    PRESENCE_UPDATES: X,
    PRESENCES_REPLACE: z,
    ACTIVITY_METADATA_UPDATE: et,
    THREAD_MEMBER_LIST_UPDATE: Q,
    THREAD_MEMBERS_UPDATE: J,
    SELF_PRESENCE_STORE_UPDATE: ee,
});
