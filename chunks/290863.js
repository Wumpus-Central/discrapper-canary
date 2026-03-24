"use strict";
n.d(t, { A: () => J, m: () => b }), n(321073);
var r = n(812729),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(73153),
    u = n(682261),
    c = n(242919),
    d = n(661191),
    _ = n(961350),
    f = n(287809),
    p = n(652215);
let h = Object.freeze([]),
    m = {},
    E = {},
    g = {},
    A = {},
    I = {},
    T = {},
    S = {};
function y(e, t) {
    let n = m[e];
    return null != n ? n[t] : null;
}
let v = (e) => {
    switch (e.type) {
        case p.$pd.CUSTOM_STATUS:
            return 4;
        case p.$pd.COMPETING:
            return 3;
        case p.$pd.STREAMING:
            return 2;
        case p.$pd.PLAYING:
            return 1;
        default:
            return 0;
    }
};
function N(e, t) {
    return v(t) - v(e);
}
let C = (e) => +!!(0, u.A)(e);
function R(e, t) {
    return C(t) - C(e);
}
function O(e, t) {
    return (t.created_at ?? 0) - (e.created_at ?? 0);
}
function b(e, t) {
    return N(e, t) || R(e, t) || O(e, t);
}
function D(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === p.$pd.PLAYING ? n.push(r) : t.push(r);
    return n.length <= 1 ? e : [...t, [...n].sort(b)[0]].sort(b);
}
function L(e, t) {
    (g[e] = t), (A[e] = D(t));
}
function w(e) {
    delete g[e], delete A[e];
}
function M(e) {
    if ((delete E[e], w(e), delete I[e], delete T[e], null == m[e])) return;
    let t = Object.values(m[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                r = e.processedAtTimestamp,
                i = null != t.activities ? t.activities.length : 0,
                s = null != e.activities ? e.activities.length : 0;
            return n > r || (n === r && i > s) ? t : e;
        }, t[0]);
    n.status !== p.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((E[e] = n.status),
          L(e, n.activities),
          (I[e] = x(Object.values(t).flatMap((e) => e.hiddenActivities ?? []))),
          null != n.clientStatus && (T[e] = n.clientStatus))
        : a().every(
                m[e],
                (e) => e.status === p.clD.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length),
            )
          ? delete m[e]
          : n.status === p.clD.OFFLINE &&
            t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (I[e] = x(Object.values(t).flatMap((e) => e.hiddenActivities ?? [])));
}
function x(e) {
    return 0 === e.length
        ? e
        : [...new Map([...e].reverse().map((e) => [`${e.application_id}:${e.party?.id}`, e])).values()];
}
function P(e) {
    let t = m[e];
    if (null == t) return;
    let n = a().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    (n.status !== p.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) &&
        ((E[e] = n.status),
        L(e, n.activities),
        (I[e] = n.hiddenActivities ?? []),
        null != n.clientStatus && (T[e] = n.clientStatus));
}
function k(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: s,
        activities: a,
        hiddenActivities: o,
        processedAtTimestamp: l,
    } = e;
    if (n === _.default.getId()) return !1;
    let u = r === p.clD.OFFLINE && (null == o || 0 === o.length),
        c = m[n];
    if (null == c) {
        if (u) return !1;
        c = m[n] = {};
    }
    if (u) c[t] = { status: r, clientStatus: s, activities: h, hiddenActivities: h, processedAtTimestamp: l };
    else {
        let e = a.length > 1 ? [...a].sort(b) : a,
            n = x(o ?? []),
            u = c[t];
        (a = null != u && i()(u.activities, e) ? u.activities : e),
            (c[t] = { status: r, clientStatus: s, activities: a, hiddenActivities: n, processedAtTimestamp: l });
    }
    return delete S[n], M(n), !0;
}
function U(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: i,
        activities: s,
        hiddenActivities: a,
        processedAtTimestamp: o,
    } = e;
    if (n === _.default.getId()) return;
    let l = r === p.clD.OFFLINE && (null == a || 0 === a.length),
        u = m[n];
    if (null == u) {
        if (l) return;
        u = m[n] = {};
    }
    if (l) u[t] = { status: r, clientStatus: i, activities: h, hiddenActivities: h, processedAtTimestamp: o };
    else {
        let e = s.length > 1 ? [...s].sort(b) : s,
            n = x(a ?? []);
        u[t] = { status: r, clientStatus: i, activities: e, hiddenActivities: n, processedAtTimestamp: o };
    }
}
function G(e, t) {
    if (t === _.default.getId()) return !1;
    let n = m[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete m[t], M(t);
}
function F(e) {
    for (let t of d.default.keys(m)) G(e, t);
}
function V() {
    return !0;
}
function B(e) {
    let { guilds: t, presences: n } = e,
        r = _.default.getId();
    (m = {}),
        (S = {}),
        (E = { [r]: E[r] }),
        (g = { [r]: g[r] }),
        (A = { [r]: A[r] }),
        (I = { [r]: I[r] }),
        (T = { [r]: {} });
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
            U({
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
                (U({
                    guildId: p.ME,
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
        i.forEach(P);
}
function H(e) {
    let { presences: t } = e;
    (m = t.presencesForGuilds),
        (E = t.statuses),
        (g = t.activities),
        (I = t.hiddenActivities),
        (S = t.activityMetadata);
}
function j(e) {
    let { presences: t } = e;
    F(p.ME),
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
                k({
                    guildId: p.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: i,
                    hiddenActivities: s,
                    processedAtTimestamp: a,
                });
        });
}
function Y(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: r, clientStatus: i, activities: s, hiddenActivities: a, processedAtTimestamp: o } = e;
        k({
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
function W(e) {
    let { guild: t } = e;
    F(t.id);
}
function K(e) {
    let { guildId: t, user: n } = e;
    return G(t, n.id);
}
function $(e) {
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
            return k({
                guildId: t ?? p.ME,
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
function z(e) {
    let { guildId: t, members: n } = e;
    n.forEach((e) => {
        null != e.presence &&
            k({
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
function q(e) {
    let { guildId: t, addedMembers: n } = e;
    n?.forEach((e) => {
        null != e.presence &&
            k({
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
function Z(e) {
    let t = _.default.getId();
    if (E[t] === e.status && g[t] === e.activities && I[t] === e.hiddenActivities) return !1;
    (E[t] = e.status), L(t, [...e.activities].sort(b)), (I[t] = [...e.hiddenActivities].sort(b)), delete S[t];
}
function X(e) {
    let { userId: t, metadata: n } = e;
    return (S[t] = n), !1;
}
class Q extends o.Ay.Store {
    static displayName = "PresenceStore";
    initialize() {
        this.waitFor(_.default, c.A, f.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (E[_.default.getId()] = e), L(_.default.getId(), [...t].sort(b));
    }
    getStatus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.clD.OFFLINE,
            r = f.default.getUser(e);
        if ((null != r && r.hasFlag(p.nhx.BOT_HTTP_INTERACTIONS) && (n = p.clD.UNKNOWN), null == t)) return E[e] ?? n;
        let i = y(e, t);
        return i?.status ?? n;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return A[e] ?? h;
        let n = y(e, t);
        return null == n || null == n.activities ? h : D(n.activities);
    }
    getUnfilteredActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return g[e] ?? h;
        let n = y(e, t);
        return null == n || null == n.activities ? h : n.activities;
    }
    getHiddenActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == t ? (I[e] ?? h) : (y(e, t)?.hiddenActivities ?? h);
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== p.$pd.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of d.default.keys(A))
            for (let r of A[n]) r.application_id === e && t.push({ userId: n, activity: r });
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
        return S[e];
    }
    getUserIds() {
        return d.default.keys(g);
    }
    isMobileOnline(e) {
        let t = T[e];
        return (
            null != t &&
            t[p.xfJ.MOBILE] === p.clD.ONLINE &&
            t[p.xfJ.DESKTOP] !== p.clD.ONLINE &&
            t[p.xfJ.VR] !== p.clD.ONLINE
        );
    }
    isVROnline(e) {
        let t = T[e];
        return null != t && t[p.xfJ.VR] === p.clD.ONLINE;
    }
    getClientStatus(e) {
        return T[e];
    }
    getState() {
        return {
            presencesForGuilds: m,
            statuses: E,
            activities: g,
            filteredActivities: A,
            hiddenActivities: I,
            activityMetadata: S,
            clientStatuses: T,
        };
    }
}
let J = new Q(l.h, {
    CONNECTION_OPEN: V,
    CONNECTION_OPEN_SUPPLEMENTAL: B,
    OVERLAY_INITIALIZE: H,
    GUILD_CREATE: Y,
    GUILD_DELETE: W,
    GUILD_MEMBER_REMOVE: K,
    PRESENCE_UPDATES: $,
    PRESENCES_REPLACE: j,
    ACTIVITY_METADATA_UPDATE: X,
    THREAD_MEMBER_LIST_UPDATE: z,
    THREAD_MEMBERS_UPDATE: q,
    SELF_PRESENCE_STORE_UPDATE: Z,
});
