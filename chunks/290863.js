"use strict";
n.d(t, { A: () => w, m: () => C }), n(321073);
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(228366),
    d = n(682261),
    c = n(935208),
    u = n(280450),
    _ = n(287809),
    E = n(652215);
let A = Object.freeze([]),
    h = {},
    I = {},
    f = {},
    p = {},
    T = {},
    m = {},
    g = {};
function S(e, t) {
    let n = h[e];
    return null != n ? n[t] : null;
}
function N(e) {
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
}
function C(e, t) {
    var n, i;
    return (
        N(t) - N(e) ||
        ((n = t), +!!(0, d.A)(n) - ((i = e), +!!(0, d.A)(i))) ||
        (t.created_at ?? 0) - (e.created_at ?? 0)
    );
}
function R(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let i of e) i.type === E.$pd.PLAYING ? n.push(i) : t.push(i);
    return n.length <= 1 ? e : [...t, [...n].sort(C)[0]].sort(C);
}
function O(e, t) {
    (f[e] = t), (p[e] = R(t));
}
function L(e) {
    if ((delete I[e], delete f[e], delete p[e], delete T[e], delete m[e], null == h[e])) return;
    let t = Object.values(h[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                i = e.processedAtTimestamp,
                r = null != t.activities ? t.activities.length : 0,
                a = null != e.activities ? e.activities.length : 0;
            return n > i || (n === i && r > a) ? t : e;
        }, t[0]);
    n.status !== E.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((I[e] = n.status),
          O(e, n.activities),
          (T[e] = y(Object.values(t).flatMap((e) => e.hiddenActivities ?? []))),
          null != n.clientStatus && (m[e] = n.clientStatus))
        : s().every(
                h[e],
                (e) => e.status === E.clD.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length),
            )
          ? delete h[e]
          : t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (T[e] = y(Object.values(t).flatMap((e) => e.hiddenActivities ?? [])));
}
function y(e) {
    return 0 === e.length
        ? e
        : [...new Map([...e].reverse().map((e) => [`${e.application_id}:${e.party?.id}`, e])).values()];
}
function D(e) {
    let t = h[e];
    if (null == t) return;
    let n = s().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    (n.status !== E.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) &&
        ((I[e] = n.status),
        O(e, n.activities),
        (T[e] = n.hiddenActivities ?? []),
        null != n.clientStatus && (m[e] = n.clientStatus));
}
function v(e) {
    let {
        guildId: t,
        userId: n,
        status: i,
        clientStatus: a,
        activities: s,
        hiddenActivities: l,
        processedAtTimestamp: o,
    } = e;
    if (n === u.default.getId()) return !1;
    let d = i === E.clD.OFFLINE && (null == l || 0 === l.length),
        c = h[n];
    if (null == c) {
        if (d) return !1;
        c = h[n] = {};
    }
    if (d) c[t] = { status: i, clientStatus: a, activities: A, hiddenActivities: A, processedAtTimestamp: o };
    else {
        let e = s.length > 1 ? [...s].sort(C) : s,
            n = y(l ?? []),
            d = c[t];
        (s = null != d && r()(d.activities, e) ? d.activities : e),
            (c[t] = { status: i, clientStatus: a, activities: s, hiddenActivities: n, processedAtTimestamp: o });
    }
    return delete g[n], L(n), !0;
}
function b(e) {
    let {
        guildId: t,
        userId: n,
        status: i,
        clientStatus: r,
        activities: a,
        hiddenActivities: s,
        processedAtTimestamp: l,
    } = e;
    if (n === u.default.getId()) return;
    let o = i === E.clD.OFFLINE && (null == s || 0 === s.length),
        d = h[n];
    if (null == d) {
        if (o) return;
        d = h[n] = {};
    }
    if (o) d[t] = { status: i, clientStatus: r, activities: A, hiddenActivities: A, processedAtTimestamp: l };
    else {
        let e = a.length > 1 ? [...a].sort(C) : a,
            n = y(s ?? []);
        d[t] = { status: i, clientStatus: r, activities: e, hiddenActivities: n, processedAtTimestamp: l };
    }
}
function M(e, t) {
    if (t === u.default.getId()) return !1;
    let n = h[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete h[t], L(t);
}
function P(e) {
    for (let t of c.default.keys(h)) M(e, t);
}
class U extends l.Ay.Store {
    static displayName = "PresenceStore";
    initialize() {
        this.waitFor(u.default, _.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (I[u.default.getId()] = e), O(u.default.getId(), [...t].sort(C));
    }
    getStatus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.clD.OFFLINE,
            i = _.default.getUser(e);
        if ((null != i && i.hasFlag(E.nhx.BOT_HTTP_INTERACTIONS) && (n = E.clD.UNKNOWN), null == t)) return I[e] ?? n;
        let r = S(e, t);
        return r?.status ?? n;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return p[e] ?? A;
        let n = S(e, t);
        return null == n || null == n.activities ? A : R(n.activities);
    }
    getUnfilteredActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return f[e] ?? A;
        let n = S(e, t);
        return null == n || null == n.activities ? A : n.activities;
    }
    getHiddenActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == t ? (T[e] ?? A) : (S(e, t)?.hiddenActivities ?? A);
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== E.$pd.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of c.default.keys(p))
            for (let i of p[n]) i.application_id === e && t.push({ userId: n, activity: i });
        return t;
    }
    getApplicationActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this.findActivity(e, (e) => e.application_id === t, n, !0);
    }
    findActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        i = i ?? !1;
        let r = this.getActivities(e, n);
        return i && (r = r.concat(this.getHiddenActivities(e, n))), r.find(t);
    }
    getActivityMetadata(e) {
        return g[e];
    }
    getUserIds() {
        return c.default.keys(f);
    }
    isMobileOnline(e) {
        let t = m[e];
        return (
            null != t &&
            t[E.xfJ.MOBILE] === E.clD.ONLINE &&
            t[E.xfJ.DESKTOP] !== E.clD.ONLINE &&
            t[E.xfJ.VR] !== E.clD.ONLINE
        );
    }
    isVROnline(e) {
        let t = m[e];
        return null != t && t[E.xfJ.VR] === E.clD.ONLINE;
    }
    getClientStatus(e) {
        return m[e];
    }
    getState() {
        return {
            presencesForGuilds: h,
            statuses: I,
            activities: f,
            filteredActivities: p,
            hiddenActivities: T,
            activityMetadata: g,
            clientStatuses: m,
        };
    }
}
let w = new U(o.h, {
    CONNECTION_OPEN: function () {
        return !0;
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = u.default.getId();
        (h = {}),
            (g = {}),
            (I = { [i]: I[i] }),
            (f = { [i]: f[i] }),
            (p = { [i]: p[i] }),
            (T = { [i]: T[i] }),
            (m = { [i]: {} });
        let r = new Set();
        t.forEach((e) => {
            e.presences.forEach((t) => {
                let {
                    user: n,
                    status: i,
                    clientStatus: a,
                    activities: s,
                    hiddenActivities: l,
                    processedAtTimestamp: o,
                } = t;
                b({
                    guildId: e.id,
                    userId: n.id,
                    status: i,
                    clientStatus: a,
                    activities: s,
                    hiddenActivities: l,
                    processedAtTimestamp: o,
                }),
                    r.add(n.id);
            });
        }),
            n.forEach((e) => {
                let {
                    user: t,
                    status: n,
                    clientStatus: i,
                    activities: a,
                    hiddenActivities: s,
                    processedAtTimestamp: l,
                } = e;
                null != t &&
                    (b({
                        guildId: E.ME,
                        userId: t.id,
                        status: n,
                        clientStatus: i,
                        activities: a,
                        hiddenActivities: s,
                        processedAtTimestamp: l,
                    }),
                    r.add(t.id));
            }),
            r.delete(i),
            r.forEach(D);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { presences: t } = e;
        (h = t.presencesForGuilds),
            (I = t.statuses),
            (f = t.activities),
            (T = t.hiddenActivities),
            (g = t.activityMetadata);
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        t.presences.forEach((e) => {
            let {
                user: n,
                status: i,
                clientStatus: r,
                activities: a,
                hiddenActivities: s,
                processedAtTimestamp: l,
            } = e;
            v({
                guildId: t.id,
                userId: n.id,
                status: i,
                clientStatus: r,
                activities: a,
                hiddenActivities: s,
                processedAtTimestamp: l,
            });
        });
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        P(t.id);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        return M(t, n.id);
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let {
                    guildId: t,
                    user: n,
                    status: i,
                    clientStatus: r,
                    activities: a,
                    hiddenActivities: s,
                    processedAtTimestamp: l,
                } = e;
                return v({
                    guildId: t ?? E.ME,
                    userId: n.id,
                    status: i,
                    clientStatus: r,
                    activities: a,
                    hiddenActivities: s,
                    processedAtTimestamp: l,
                });
            })
            .some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        P(E.ME),
            t.forEach((e) => {
                let {
                    user: t,
                    status: n,
                    clientStatus: i,
                    activities: r,
                    hiddenActivities: a,
                    processedAtTimestamp: s,
                } = e;
                null != t &&
                    v({
                        guildId: E.ME,
                        userId: t.id,
                        status: n,
                        clientStatus: i,
                        activities: r,
                        hiddenActivities: a,
                        processedAtTimestamp: s,
                    });
            });
    },
    ACTIVITY_METADATA_UPDATE: function (e) {
        let { userId: t, metadata: n } = e;
        return (g[t] = n), !1;
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        n.forEach((e) => {
            null != e.presence &&
                v({
                    guildId: t,
                    userId: e.user_id,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities,
                    hiddenActivities: e.presence.hiddenActivities,
                    processedAtTimestamp: e.presence.processedAtTimestamp,
                });
        });
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        n?.forEach((e) => {
            null != e.presence &&
                v({
                    guildId: t,
                    userId: e.userId,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities,
                    hiddenActivities: e.presence.hiddenActivities,
                    processedAtTimestamp: e.presence.processedAtTimestamp,
                });
        });
    },
    SELF_PRESENCE_STORE_UPDATE: function (e) {
        let t = u.default.getId();
        if (I[t] === e.status && f[t] === e.activities && T[t] === e.hiddenActivities) return !1;
        (I[t] = e.status), O(t, [...e.activities].sort(C)), (T[t] = [...e.hiddenActivities].sort(C)), delete g[t];
    },
});
