(n.d(t, { A: () => G, m: () => O }), n(321073));
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(350835),
    o = n(17928),
    d = n(73153),
    c = n(682261),
    u = n(935208),
    _ = n(280450),
    E = n(287809),
    A = n(652215);
let h = Object.freeze([]),
    f = {},
    I = {},
    p = {},
    T = {},
    m = {},
    g = {},
    S = {};
function N(e, t) {
    let n = f[e];
    return null != n ? n[t] : null;
}
function C(e) {
    switch (e.type) {
        case l.$.CUSTOM_STATUS:
            return 4;
        case l.$.COMPETING:
            return 3;
        case l.$.STREAMING:
            return 2;
        case l.$.PLAYING:
            return 1;
        default:
            return 0;
    }
}
function O(e, t) {
    var n, i;
    return (
        C(t) - C(e) ||
        ((n = t), +!!(0, c.A)(n) - ((i = e), +!!(0, c.A)(i))) ||
        (t.created_at ?? 0) - (e.created_at ?? 0)
    );
}
function R(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let i of e) i.type === l.$.PLAYING ? n.push(i) : t.push(i);
    return n.length <= 1 ? e : [...t, [...n].sort(O)[0]].sort(O);
}
function L(e, t) {
    ((p[e] = t), (T[e] = R(t)));
}
function y(e) {
    if ((delete I[e], delete p[e], delete T[e], delete m[e], delete g[e], null == f[e])) return;
    let t = Object.values(f[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                i = e.processedAtTimestamp,
                r = null != t.activities ? t.activities.length : 0,
                a = null != e.activities ? e.activities.length : 0;
            return n > i || (n === i && r > a) ? t : e;
        }, t[0]);
    n.status !== A.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((I[e] = n.status),
          L(e, n.activities),
          (m[e] = D(Object.values(t).flatMap((e) => e.hiddenActivities ?? []))),
          null != n.clientStatus && (g[e] = n.clientStatus))
        : s().every(
                f[e],
                (e) => e.status === A.clD.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length),
            )
          ? delete f[e]
          : t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (m[e] = D(Object.values(t).flatMap((e) => e.hiddenActivities ?? [])));
}
function D(e) {
    return 0 === e.length
        ? e
        : [...new Map([...e].reverse().map((e) => [`${e.application_id}:${e.party?.id}`, e])).values()];
}
function v(e) {
    let t = f[e];
    if (null == t) return;
    let n = s().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    (n.status !== A.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) &&
        ((I[e] = n.status),
        L(e, n.activities),
        (m[e] = n.hiddenActivities ?? []),
        null != n.clientStatus && (g[e] = n.clientStatus));
}
function b(e) {
    let {
        guildId: t,
        userId: n,
        status: i,
        clientStatus: a,
        activities: s,
        hiddenActivities: l,
        processedAtTimestamp: o,
    } = e;
    if (n === _.default.getId()) return !1;
    let d = i === A.clD.OFFLINE && (null == l || 0 === l.length),
        c = f[n];
    if (null == c) {
        if (d) return !1;
        c = f[n] = {};
    }
    if (d) c[t] = { status: i, clientStatus: a, activities: h, hiddenActivities: h, processedAtTimestamp: o };
    else {
        let e = s.length > 1 ? [...s].sort(O) : s,
            n = D(l ?? []),
            d = c[t];
        ((s = null != d && r()(d.activities, e) ? d.activities : e),
            (c[t] = { status: i, clientStatus: a, activities: s, hiddenActivities: n, processedAtTimestamp: o }));
    }
    return (delete S[n], y(n), !0);
}
function P(e) {
    let {
        guildId: t,
        userId: n,
        status: i,
        clientStatus: r,
        activities: a,
        hiddenActivities: s,
        processedAtTimestamp: l,
    } = e;
    if (n === _.default.getId()) return;
    let o = i === A.clD.OFFLINE && (null == s || 0 === s.length),
        d = f[n];
    if (null == d) {
        if (o) return;
        d = f[n] = {};
    }
    if (o) d[t] = { status: i, clientStatus: r, activities: h, hiddenActivities: h, processedAtTimestamp: l };
    else {
        let e = a.length > 1 ? [...a].sort(O) : a,
            n = D(s ?? []);
        d[t] = { status: i, clientStatus: r, activities: e, hiddenActivities: n, processedAtTimestamp: l };
    }
}
function M(e, t) {
    if (t === _.default.getId()) return !1;
    let n = f[t];
    if (null == n || null == n[e]) return !1;
    (delete n[e], 0 === Object.keys(n).length && delete f[t], y(t));
}
function U(e) {
    for (let t of u.default.keys(f)) M(e, t);
}
class w extends o.Ay.Store {
    static displayName = "PresenceStore";
    initialize() {
        this.waitFor(_.default, E.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        ((I[_.default.getId()] = e), L(_.default.getId(), [...t].sort(O)));
    }
    getStatus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A.clD.OFFLINE,
            i = E.default.getUser(e);
        if ((null != i && i.hasFlag(A.nhx.BOT_HTTP_INTERACTIONS) && (n = A.clD.UNKNOWN), null == t)) return I[e] ?? n;
        let r = N(e, t);
        return r?.status ?? n;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return T[e] ?? h;
        let n = N(e, t);
        return null == n || null == n.activities ? h : R(n.activities);
    }
    getUnfilteredActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return p[e] ?? h;
        let n = N(e, t);
        return null == n || null == n.activities ? h : n.activities;
    }
    getHiddenActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == t ? (m[e] ?? h) : (N(e, t)?.hiddenActivities ?? h);
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== l.$.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of u.default.keys(T))
            for (let i of T[n]) i.application_id === e && t.push({ userId: n, activity: i });
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
        return (i && (r = r.concat(this.getHiddenActivities(e, n))), r.find(t));
    }
    getActivityMetadata(e) {
        return S[e];
    }
    getUserIds() {
        return u.default.keys(p);
    }
    isMobileOnline(e) {
        let t = g[e];
        return (
            null != t &&
            t[A.xfJ.MOBILE] === A.clD.ONLINE &&
            t[A.xfJ.DESKTOP] !== A.clD.ONLINE &&
            t[A.xfJ.VR] !== A.clD.ONLINE
        );
    }
    isVROnline(e) {
        let t = g[e];
        return null != t && t[A.xfJ.VR] === A.clD.ONLINE;
    }
    getClientStatus(e) {
        return g[e];
    }
    getState() {
        return {
            presencesForGuilds: f,
            statuses: I,
            activities: p,
            filteredActivities: T,
            hiddenActivities: m,
            activityMetadata: S,
            clientStatuses: g,
        };
    }
}
let G = new w(d.h, {
    CONNECTION_OPEN: function () {
        return !0;
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = _.default.getId();
        ((f = {}),
            (S = {}),
            (I = { [i]: I[i] }),
            (p = { [i]: p[i] }),
            (T = { [i]: T[i] }),
            (m = { [i]: m[i] }),
            (g = { [i]: {} }));
        let r = new Set();
        (t.forEach((e) => {
            e.presences.forEach((t) => {
                let {
                    user: n,
                    status: i,
                    clientStatus: a,
                    activities: s,
                    hiddenActivities: l,
                    processedAtTimestamp: o,
                } = t;
                (P({
                    guildId: e.id,
                    userId: n.id,
                    status: i,
                    clientStatus: a,
                    activities: s,
                    hiddenActivities: l,
                    processedAtTimestamp: o,
                }),
                    r.add(n.id));
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
                    (P({
                        guildId: A.ME,
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
            r.forEach(v));
    },
    OVERLAY_INITIALIZE: function (e) {
        let { presences: t } = e;
        ((f = t.presencesForGuilds),
            (I = t.statuses),
            (p = t.activities),
            (m = t.hiddenActivities),
            (S = t.activityMetadata));
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
            b({
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
        U(t.id);
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
                return b({
                    guildId: t ?? A.ME,
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
        (U(A.ME),
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
                    b({
                        guildId: A.ME,
                        userId: t.id,
                        status: n,
                        clientStatus: i,
                        activities: r,
                        hiddenActivities: a,
                        processedAtTimestamp: s,
                    });
            }));
    },
    ACTIVITY_METADATA_UPDATE: function (e) {
        let { userId: t, metadata: n } = e;
        return ((S[t] = n), !1);
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
        let t = _.default.getId();
        if (I[t] === e.status && p[t] === e.activities && m[t] === e.hiddenActivities) return !1;
        ((I[t] = e.status), L(t, [...e.activities].sort(O)), (m[t] = [...e.hiddenActivities].sort(O)), delete S[t]);
    },
});
