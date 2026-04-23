"use strict";
n.d(t, { A: () => U, m: () => R }), n(321073);
var i = n(812729),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(228366),
    d = n(682261),
    _ = n(935208),
    u = n(495544),
    c = n(287809),
    E = n(652215);
let h = Object.freeze([]),
    m = {},
    f = {},
    g = {},
    p = {},
    A = {},
    I = {},
    T = {};
function S(e, t) {
    let n = m[e];
    return null != n ? n[t] : null;
}
let N = (e) => {
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
    },
    C = (e) => +!!(0, d.A)(e);
function R(e, t) {
    return N(t) - N(e) || C(t) - C(e) || (t.created_at ?? 0) - (e.created_at ?? 0);
}
function O(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let i of e) i.type === E.$pd.PLAYING ? n.push(i) : t.push(i);
    return n.length <= 1 ? e : [...t, [...n].sort(R)[0]].sort(R);
}
function y(e, t) {
    (g[e] = t), (p[e] = O(t));
}
function v(e) {
    if ((delete f[e], delete g[e], delete p[e], delete A[e], delete I[e], null == m[e])) return;
    let t = Object.values(m[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                i = e.processedAtTimestamp,
                r = null != t.activities ? t.activities.length : 0,
                s = null != e.activities ? e.activities.length : 0;
            return n > i || (n === i && r > s) ? t : e;
        }, t[0]);
    n.status !== E.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((f[e] = n.status),
          y(e, n.activities),
          (A[e] = D(Object.values(t).flatMap((e) => e.hiddenActivities ?? []))),
          null != n.clientStatus && (I[e] = n.clientStatus))
        : a().every(
                m[e],
                (e) => e.status === E.clD.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length),
            )
          ? delete m[e]
          : n.status === E.clD.OFFLINE &&
            t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (A[e] = D(Object.values(t).flatMap((e) => e.hiddenActivities ?? [])));
}
function D(e) {
    return 0 === e.length
        ? e
        : [...new Map([...e].reverse().map((e) => [`${e.application_id}:${e.party?.id}`, e])).values()];
}
function L(e) {
    let t = m[e];
    if (null == t) return;
    let n = a().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    (n.status !== E.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) &&
        ((f[e] = n.status),
        y(e, n.activities),
        (A[e] = n.hiddenActivities ?? []),
        null != n.clientStatus && (I[e] = n.clientStatus));
}
function b(e) {
    let {
        guildId: t,
        userId: n,
        status: i,
        clientStatus: s,
        activities: a,
        hiddenActivities: o,
        processedAtTimestamp: l,
    } = e;
    if (n === u.default.getId()) return !1;
    let d = i === E.clD.OFFLINE && (null == o || 0 === o.length),
        _ = m[n];
    if (null == _) {
        if (d) return !1;
        _ = m[n] = {};
    }
    if (d) _[t] = { status: i, clientStatus: s, activities: h, hiddenActivities: h, processedAtTimestamp: l };
    else {
        let e = a.length > 1 ? [...a].sort(R) : a,
            n = D(o ?? []),
            d = _[t];
        (a = null != d && r()(d.activities, e) ? d.activities : e),
            (_[t] = { status: i, clientStatus: s, activities: a, hiddenActivities: n, processedAtTimestamp: l });
    }
    return delete T[n], v(n), !0;
}
function w(e) {
    let {
        guildId: t,
        userId: n,
        status: i,
        clientStatus: r,
        activities: s,
        hiddenActivities: a,
        processedAtTimestamp: o,
    } = e;
    if (n === u.default.getId()) return;
    let l = i === E.clD.OFFLINE && (null == a || 0 === a.length),
        d = m[n];
    if (null == d) {
        if (l) return;
        d = m[n] = {};
    }
    if (l) d[t] = { status: i, clientStatus: r, activities: h, hiddenActivities: h, processedAtTimestamp: o };
    else {
        let e = s.length > 1 ? [...s].sort(R) : s,
            n = D(a ?? []);
        d[t] = { status: i, clientStatus: r, activities: e, hiddenActivities: n, processedAtTimestamp: o };
    }
}
function P(e, t) {
    if (t === u.default.getId()) return !1;
    let n = m[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete m[t], v(t);
}
function k(e) {
    for (let t of _.default.keys(m)) P(e, t);
}
class M extends o.Ay.Store {
    static displayName = "PresenceStore";
    initialize() {
        this.waitFor(u.default, c.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (f[u.default.getId()] = e), y(u.default.getId(), [...t].sort(R));
    }
    getStatus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.clD.OFFLINE,
            i = c.default.getUser(e);
        if ((null != i && i.hasFlag(E.nhx.BOT_HTTP_INTERACTIONS) && (n = E.clD.UNKNOWN), null == t)) return f[e] ?? n;
        let r = S(e, t);
        return r?.status ?? n;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return p[e] ?? h;
        let n = S(e, t);
        return null == n || null == n.activities ? h : O(n.activities);
    }
    getUnfilteredActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return g[e] ?? h;
        let n = S(e, t);
        return null == n || null == n.activities ? h : n.activities;
    }
    getHiddenActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == t ? (A[e] ?? h) : (S(e, t)?.hiddenActivities ?? h);
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== E.$pd.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of _.default.keys(p))
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
        return T[e];
    }
    getUserIds() {
        return _.default.keys(g);
    }
    isMobileOnline(e) {
        let t = I[e];
        return (
            null != t &&
            t[E.xfJ.MOBILE] === E.clD.ONLINE &&
            t[E.xfJ.DESKTOP] !== E.clD.ONLINE &&
            t[E.xfJ.VR] !== E.clD.ONLINE
        );
    }
    isVROnline(e) {
        let t = I[e];
        return null != t && t[E.xfJ.VR] === E.clD.ONLINE;
    }
    getClientStatus(e) {
        return I[e];
    }
    getState() {
        return {
            presencesForGuilds: m,
            statuses: f,
            activities: g,
            filteredActivities: p,
            hiddenActivities: A,
            activityMetadata: T,
            clientStatuses: I,
        };
    }
}
let U = new M(l.h, {
    CONNECTION_OPEN: function () {
        return !0;
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = u.default.getId();
        (m = {}),
            (T = {}),
            (f = { [i]: f[i] }),
            (g = { [i]: g[i] }),
            (p = { [i]: p[i] }),
            (A = { [i]: A[i] }),
            (I = { [i]: {} });
        let r = new Set();
        t.forEach((e) => {
            e.presences.forEach((t) => {
                let {
                    user: n,
                    status: i,
                    clientStatus: s,
                    activities: a,
                    hiddenActivities: o,
                    processedAtTimestamp: l,
                } = t;
                w({
                    guildId: e.id,
                    userId: n.id,
                    status: i,
                    clientStatus: s,
                    activities: a,
                    hiddenActivities: o,
                    processedAtTimestamp: l,
                }),
                    r.add(n.id);
            });
        }),
            n.forEach((e) => {
                let {
                    user: t,
                    status: n,
                    clientStatus: i,
                    activities: s,
                    hiddenActivities: a,
                    processedAtTimestamp: o,
                } = e;
                null != t &&
                    (w({
                        guildId: E.ME,
                        userId: t.id,
                        status: n,
                        clientStatus: i,
                        activities: s,
                        hiddenActivities: a,
                        processedAtTimestamp: o,
                    }),
                    r.add(t.id));
            }),
            r.delete(i),
            r.forEach(L);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { presences: t } = e;
        (m = t.presencesForGuilds),
            (f = t.statuses),
            (g = t.activities),
            (A = t.hiddenActivities),
            (T = t.activityMetadata);
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        t.presences.forEach((e) => {
            let {
                user: n,
                status: i,
                clientStatus: r,
                activities: s,
                hiddenActivities: a,
                processedAtTimestamp: o,
            } = e;
            b({
                guildId: t.id,
                userId: n.id,
                status: i,
                clientStatus: r,
                activities: s,
                hiddenActivities: a,
                processedAtTimestamp: o,
            });
        });
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        k(t.id);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        return P(t, n.id);
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
                    activities: s,
                    hiddenActivities: a,
                    processedAtTimestamp: o,
                } = e;
                return b({
                    guildId: t ?? E.ME,
                    userId: n.id,
                    status: i,
                    clientStatus: r,
                    activities: s,
                    hiddenActivities: a,
                    processedAtTimestamp: o,
                });
            })
            .some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        k(E.ME),
            t.forEach((e) => {
                let {
                    user: t,
                    status: n,
                    clientStatus: i,
                    activities: r,
                    hiddenActivities: s,
                    processedAtTimestamp: a,
                } = e;
                null != t &&
                    b({
                        guildId: E.ME,
                        userId: t.id,
                        status: n,
                        clientStatus: i,
                        activities: r,
                        hiddenActivities: s,
                        processedAtTimestamp: a,
                    });
            });
    },
    ACTIVITY_METADATA_UPDATE: function (e) {
        let { userId: t, metadata: n } = e;
        return (T[t] = n), !1;
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        n.forEach((e) => {
            null != e.presence &&
                b({
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
                b({
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
        if (f[t] === e.status && g[t] === e.activities && A[t] === e.hiddenActivities) return !1;
        (f[t] = e.status), y(t, [...e.activities].sort(R)), (A[t] = [...e.hiddenActivities].sort(R)), delete T[t];
    },
});
