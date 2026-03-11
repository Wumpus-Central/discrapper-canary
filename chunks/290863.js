"use strict";
n.d(t, { A: () => en, m: () => L }), n(321073);
var r = n(812729),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(73153),
    u = n(682261),
    c = n(242919),
    d = n(477394),
    _ = n(847521),
    f = n(661191),
    p = n(961350),
    h = n(287809),
    m = n(652215);
let E = Object.freeze([]),
    g = {},
    A = {},
    I = {},
    T = {},
    S = {},
    y = {},
    v = {};
function N(e, t) {
    let n = g[e];
    return null != n ? n[t] : null;
}
let C = (e) => {
    switch (e.type) {
        case m.$pd.CUSTOM_STATUS:
            return 4;
        case m.$pd.COMPETING:
            return 3;
        case m.$pd.STREAMING:
            return 2;
        case m.$pd.PLAYING:
            return 1;
        default:
            return 0;
    }
};
function R(e, t) {
    return C(t) - C(e);
}
let O = (e) => +!!(0, u.A)(e);
function b(e, t) {
    return O(t) - O(e);
}
function D(e, t) {
    return (t.created_at ?? 0) - (e.created_at ?? 0);
}
function L(e, t) {
    return R(e, t) || b(e, t) || D(e, t);
}
function w(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === m.$pd.PLAYING ? n.push(r) : t.push(r);
    return n.length <= 1 ? e : [...t, [...n].sort(L)[0]].sort(L);
}
function M(e, t) {
    (I[e] = t), (T[e] = w(t));
}
function x(e) {
    delete I[e], delete T[e];
}
function P(e, t) {
    return t === p.default.getId()
        ? { visible: e, hidden: [] }
        : {
              visible: d.a.getConfig({ location: "presence_filtering" }).enabled
                  ? e.map((e) => (0, _.Dh)(e))
                  : e.map((e) => (0, _.Ar)(e)),
              hidden: [],
          };
}
function k(e) {
    if ((delete A[e], x(e), delete S[e], delete y[e], null == g[e])) return;
    let t = Object.values(g[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                r = e.processedAtTimestamp,
                i = null != t.activities ? t.activities.length : 0,
                s = null != e.activities ? e.activities.length : 0;
            return n > r || (n === r && i > s) ? t : e;
        }, t[0]);
    n.status !== m.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((A[e] = n.status),
          M(e, n.activities),
          (S[e] = U(Object.values(t).flatMap((e) => e.hiddenActivities ?? []))),
          null != n.clientStatus && (y[e] = n.clientStatus))
        : a().every(
                g[e],
                (e) => e.status === m.clD.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length),
            )
          ? delete g[e]
          : n.status === m.clD.OFFLINE &&
            t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (S[e] = U(Object.values(t).flatMap((e) => e.hiddenActivities ?? [])));
}
function U(e) {
    return 0 === e.length
        ? e
        : [...new Map([...e].reverse().map((e) => [`${e.application_id}:${e.party?.id}`, e])).values()];
}
function G(e) {
    let t = g[e];
    if (null == t) return;
    let n = a().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    (n.status !== m.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) &&
        ((A[e] = n.status),
        M(e, n.activities),
        (S[e] = n.hiddenActivities ?? []),
        null != n.clientStatus && (y[e] = n.clientStatus));
}
function F(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: s,
        activities: a,
        hiddenActivities: o,
        processedAtTimestamp: l,
    } = e;
    if (n === p.default.getId()) return !1;
    let u = r === m.clD.OFFLINE && (null == o || 0 === o.length),
        c = g[n];
    if (null == c) {
        if (u) return !1;
        c = g[n] = {};
    }
    if (u) c[t] = { status: r, clientStatus: s, activities: E, hiddenActivities: E, processedAtTimestamp: l };
    else {
        let { visible: e, hidden: u } = P(a.length > 1 ? [...a].sort(L) : a, n),
            d = U([...(o ?? []), ...u]),
            _ = c[t];
        (a = null != _ && i()(_.activities, e) ? _.activities : e),
            (c[t] = { status: r, clientStatus: s, activities: a, hiddenActivities: d, processedAtTimestamp: l });
    }
    return delete v[n], k(n), !0;
}
function V(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: i,
        activities: s,
        hiddenActivities: a,
        processedAtTimestamp: o,
    } = e;
    if (n === p.default.getId()) return;
    let l = r === m.clD.OFFLINE && (null == a || 0 === a.length),
        u = g[n];
    if (null == u) {
        if (l) return;
        u = g[n] = {};
    }
    if (l) u[t] = { status: r, clientStatus: i, activities: E, hiddenActivities: E, processedAtTimestamp: o };
    else {
        let { visible: e, hidden: l } = P(s.length > 1 ? [...s].sort(L) : s, n),
            c = U([...(a ?? []), ...l]);
        u[t] = { status: r, clientStatus: i, activities: e, hiddenActivities: c, processedAtTimestamp: o };
    }
}
function B(e, t) {
    if (t === p.default.getId()) return !1;
    let n = g[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete g[t], k(t);
}
function H(e) {
    for (let t of f.default.keys(g)) B(e, t);
}
function j() {
    return !0;
}
function Y(e) {
    let { guilds: t, presences: n } = e,
        r = p.default.getId();
    (g = {}),
        (v = {}),
        (A = { [r]: A[r] }),
        (I = { [r]: I[r] }),
        (T = { [r]: T[r] }),
        (S = { [r]: S[r] }),
        (y = { [r]: {} });
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
            V({
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
                (V({
                    guildId: m.ME,
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
        i.forEach(G);
}
function W(e) {
    let { presences: t } = e;
    (g = t.presencesForGuilds),
        (A = t.statuses),
        (I = t.activities),
        (S = t.hiddenActivities),
        (v = t.activityMetadata);
}
function K(e) {
    let { presences: t } = e;
    H(m.ME),
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
                F({
                    guildId: m.ME,
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
        F({
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
function z(e) {
    let { guild: t } = e;
    H(t.id);
}
function q(e) {
    let { guildId: t, user: n } = e;
    return B(t, n.id);
}
function Z(e) {
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
            return F({
                guildId: t ?? m.ME,
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
function Q(e) {
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
function J(e) {
    let t = p.default.getId();
    if (A[t] === e.status && I[t] === e.activities && S[t] === e.hiddenActivities) return !1;
    (A[t] = e.status), M(t, [...e.activities].sort(L)), (S[t] = [...e.hiddenActivities].sort(L)), delete v[t];
}
function ee(e) {
    let { userId: t, metadata: n } = e;
    return (v[t] = n), !1;
}
class et extends o.Ay.Store {
    static displayName = "PresenceStore";
    initialize() {
        this.waitFor(p.default, c.A, h.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (A[p.default.getId()] = e), M(p.default.getId(), [...t].sort(L));
    }
    getStatus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.clD.OFFLINE,
            r = h.default.getUser(e);
        if ((null != r && r.hasFlag(m.nhx.BOT_HTTP_INTERACTIONS) && (n = m.clD.UNKNOWN), null == t)) return A[e] ?? n;
        let i = N(e, t);
        return i?.status ?? n;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return T[e] ?? E;
        let n = N(e, t);
        return null == n || null == n.activities ? E : w(n.activities);
    }
    getUnfilteredActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return I[e] ?? E;
        let n = N(e, t);
        return null == n || null == n.activities ? E : n.activities;
    }
    getHiddenActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == t ? (S[e] ?? E) : (N(e, t)?.hiddenActivities ?? E);
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== m.$pd.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of f.default.keys(T))
            for (let r of T[n]) r.application_id === e && t.push({ userId: n, activity: r });
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
        return v[e];
    }
    getUserIds() {
        return f.default.keys(I);
    }
    isMobileOnline(e) {
        let t = y[e];
        return (
            null != t &&
            t[m.xfJ.MOBILE] === m.clD.ONLINE &&
            t[m.xfJ.DESKTOP] !== m.clD.ONLINE &&
            t[m.xfJ.VR] !== m.clD.ONLINE
        );
    }
    isVROnline(e) {
        let t = y[e];
        return null != t && t[m.xfJ.VR] === m.clD.ONLINE;
    }
    getClientStatus(e) {
        return y[e];
    }
    getState() {
        return {
            presencesForGuilds: g,
            statuses: A,
            activities: I,
            filteredActivities: T,
            hiddenActivities: S,
            activityMetadata: v,
            clientStatuses: y,
        };
    }
}
let en = new et(l.h, {
    CONNECTION_OPEN: j,
    CONNECTION_OPEN_SUPPLEMENTAL: Y,
    OVERLAY_INITIALIZE: W,
    GUILD_CREATE: $,
    GUILD_DELETE: z,
    GUILD_MEMBER_REMOVE: q,
    PRESENCE_UPDATES: Z,
    PRESENCES_REPLACE: K,
    ACTIVITY_METADATA_UPDATE: ee,
    THREAD_MEMBER_LIST_UPDATE: X,
    THREAD_MEMBERS_UPDATE: Q,
    SELF_PRESENCE_STORE_UPDATE: J,
});
