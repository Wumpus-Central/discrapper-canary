"use strict";
n.d(t, { A: () => er, m: () => w }), n(321073);
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
    p = n(661191),
    h = n(961350),
    m = n(287809),
    g = n(652215);
let E = Object.freeze([]),
    A = {},
    I = {},
    T = {},
    y = {},
    S = {},
    v = {},
    C = {};
function b(e, t) {
    let n = A[e];
    return null != n ? n[t] : null;
}
let N = (e) => {
    switch (e.type) {
        case g.$pd.CUSTOM_STATUS:
            return 4;
        case g.$pd.COMPETING:
            return 3;
        case g.$pd.STREAMING:
            return 2;
        case g.$pd.PLAYING:
            return 1;
        default:
            return 0;
    }
};
function R(e, t) {
    return N(t) - N(e);
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
    for (let r of e) r.type === g.$pd.PLAYING ? n.push(r) : t.push(r);
    return n.length <= 1 ? e : [...t, [...n].sort(w)[0]].sort(w);
}
function P(e, t) {
    (T[e] = t), (y[e] = x(t));
}
function M(e) {
    delete T[e], delete y[e];
}
function k(e, t) {
    if (t === h.default.getId()) return { visible: e, hidden: [] };
    let n = _.a.getConfig({ location: "presence_filtering" }).enabled
            ? e.map((e) => (0, f.Dh)(e))
            : e.map((e) => (0, f.Ar)(e)),
        r = d.o.getCurrentConfig({ location: "presence_filtering" }, { autoTrackExposure: !1 });
    if (!r.filterGamePresence && !r.filterRichPresence) return { visible: n, hidden: [] };
    let i = [],
        a = [];
    for (let e of n) {
        if (e.type !== g.$pd.PLAYING) {
            i.push(e);
            continue;
        }
        let t = null != e.application_id && (0, u.A)(e);
        r.filterGamePresence ? t && a.push(e) : r.filterRichPresence && t ? a.push(e) : i.push(e);
    }
    return { visible: i, hidden: a };
}
function U(e) {
    if ((delete I[e], M(e), delete S[e], delete v[e], null == A[e])) return;
    let t = Object.values(A[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                r = e.processedAtTimestamp,
                i = null != t.activities ? t.activities.length : 0,
                a = null != e.activities ? e.activities.length : 0;
            return n > r || (n === r && i > a) ? t : e;
        }, t[0]);
    n.status !== g.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((I[e] = n.status),
          P(e, n.activities),
          (S[e] = G(Object.values(t).flatMap((e) => e.hiddenActivities ?? []))),
          null != n.clientStatus && (v[e] = n.clientStatus))
        : s().every(
                A[e],
                (e) => e.status === g.clD.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length),
            )
          ? delete A[e]
          : n.status === g.clD.OFFLINE &&
            t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (S[e] = G(Object.values(t).flatMap((e) => e.hiddenActivities ?? [])));
}
function G(e) {
    return 0 === e.length
        ? e
        : [...new Map([...e].reverse().map((e) => [`${e.application_id}:${e.party?.id}`, e])).values()];
}
function V(e) {
    let t = A[e];
    if (null == t) return;
    let n = s().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    (n.status !== g.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) &&
        ((I[e] = n.status),
        P(e, n.activities),
        (S[e] = n.hiddenActivities ?? []),
        null != n.clientStatus && (v[e] = n.clientStatus));
}
function F(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: a,
        activities: s,
        hiddenActivities: o,
        processedAtTimestamp: l,
    } = e;
    if (n === h.default.getId()) return !1;
    let u = r === g.clD.OFFLINE && (null == o || 0 === o.length),
        c = A[n];
    if (null == c) {
        if (u) return !1;
        c = A[n] = {};
    }
    if (u) c[t] = { status: r, clientStatus: a, activities: E, hiddenActivities: E, processedAtTimestamp: l };
    else {
        let { visible: e, hidden: u } = k(s.length > 1 ? [...s].sort(w) : s, n),
            d = G([...(o ?? []), ...u]),
            _ = c[t];
        (s = null != _ && i()(_.activities, e) ? _.activities : e),
            (c[t] = { status: r, clientStatus: a, activities: s, hiddenActivities: d, processedAtTimestamp: l });
    }
    return delete C[n], U(n), !0;
}
function B(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: i,
        activities: a,
        hiddenActivities: s,
        processedAtTimestamp: o,
    } = e;
    if (n === h.default.getId()) return;
    let l = r === g.clD.OFFLINE && (null == s || 0 === s.length),
        u = A[n];
    if (null == u) {
        if (l) return;
        u = A[n] = {};
    }
    if (l) u[t] = { status: r, clientStatus: i, activities: E, hiddenActivities: E, processedAtTimestamp: o };
    else {
        let { visible: e, hidden: l } = k(a.length > 1 ? [...a].sort(w) : a, n),
            c = G([...(s ?? []), ...l]);
        u[t] = { status: r, clientStatus: i, activities: e, hiddenActivities: c, processedAtTimestamp: o };
    }
}
function j(e, t) {
    if (t === h.default.getId()) return !1;
    let n = A[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete A[t], U(t);
}
function H(e) {
    for (let t of p.default.keys(A)) j(e, t);
}
function Y() {
    return !0;
}
function W(e) {
    let { guilds: t, presences: n } = e,
        r = h.default.getId();
    (A = {}),
        (C = {}),
        (I = { [r]: I[r] }),
        (T = { [r]: T[r] }),
        (y = { [r]: y[r] }),
        (S = { [r]: S[r] }),
        (v = { [r]: {} });
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
            B({
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
                (B({
                    guildId: g.ME,
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
function K(e) {
    let { presences: t } = e;
    (A = t.presencesForGuilds),
        (I = t.statuses),
        (T = t.activities),
        (S = t.hiddenActivities),
        (C = t.activityMetadata);
}
function z(e) {
    let { presences: t } = e;
    H(g.ME),
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
                F({
                    guildId: g.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: i,
                    hiddenActivities: a,
                    processedAtTimestamp: s,
                });
        });
}
function $(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: r, clientStatus: i, activities: a, hiddenActivities: s, processedAtTimestamp: o } = e;
        F({
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
function q(e) {
    let { guild: t } = e;
    H(t.id);
}
function Z(e) {
    let { guildId: t, user: n } = e;
    return j(t, n.id);
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
            return F({
                guildId: t ?? g.ME,
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
function X(e) {
    let { guildId: t, members: n } = e;
    n.forEach((e) => {
        null != e.presence &&
            F({
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
            F({
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
    if (I[t] === e.status && T[t] === e.activities && S[t] === e.hiddenActivities) return !1;
    (I[t] = e.status), P(t, [...e.activities].sort(w)), (S[t] = [...e.hiddenActivities].sort(w)), delete C[t];
}
function et(e) {
    let { userId: t, metadata: n } = e;
    return (C[t] = n), !1;
}
class en extends o.Ay.Store {
    static displayName = "PresenceStore";
    initialize() {
        this.waitFor(h.default, c.A, m.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (I[h.default.getId()] = e), P(h.default.getId(), [...t].sort(w));
    }
    getStatus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.clD.OFFLINE,
            r = m.default.getUser(e);
        if ((null != r && r.hasFlag(g.nhx.BOT_HTTP_INTERACTIONS) && (n = g.clD.UNKNOWN), null == t)) return I[e] ?? n;
        let i = b(e, t);
        return i?.status ?? n;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return y[e] ?? E;
        let n = b(e, t);
        return null == n || null == n.activities ? E : x(n.activities);
    }
    getUnfilteredActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return T[e] ?? E;
        let n = b(e, t);
        return null == n || null == n.activities ? E : n.activities;
    }
    getHiddenActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == t ? (S[e] ?? E) : (b(e, t)?.hiddenActivities ?? E);
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== g.$pd.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of p.default.keys(y))
            for (let r of y[n]) r.application_id === e && t.push({ userId: n, activity: r });
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
        return C[e];
    }
    getUserIds() {
        return p.default.keys(T);
    }
    isMobileOnline(e) {
        let t = v[e];
        return (
            null != t &&
            t[g.xfJ.MOBILE] === g.clD.ONLINE &&
            t[g.xfJ.DESKTOP] !== g.clD.ONLINE &&
            t[g.xfJ.VR] !== g.clD.ONLINE
        );
    }
    isVROnline(e) {
        let t = v[e];
        return null != t && t[g.xfJ.VR] === g.clD.ONLINE;
    }
    getClientStatus(e) {
        return v[e];
    }
    getState() {
        return {
            presencesForGuilds: A,
            statuses: I,
            activities: T,
            filteredActivities: y,
            hiddenActivities: S,
            activityMetadata: C,
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
    PRESENCE_UPDATES: Q,
    PRESENCES_REPLACE: z,
    ACTIVITY_METADATA_UPDATE: et,
    THREAD_MEMBER_LIST_UPDATE: X,
    THREAD_MEMBERS_UPDATE: J,
    SELF_PRESENCE_STORE_UPDATE: ee,
});
