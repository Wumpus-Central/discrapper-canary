"use strict";
n.d(t, { A: () => k, m: () => v }), n(321073);
var i = n(812729),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(228366),
    u = n(682261),
    c = n(935208),
    d = n(495544),
    _ = n(287809),
    h = n(652215);
let f = Object.freeze([]),
    p = {},
    E = {},
    m = {},
    g = {},
    A = {},
    I = {},
    T = {};
function S(e, t) {
    let n = p[e];
    return null != n ? n[t] : null;
}
let y = (e) => {
        switch (e.type) {
            case h.$pd.CUSTOM_STATUS:
                return 4;
            case h.$pd.COMPETING:
                return 3;
            case h.$pd.STREAMING:
                return 2;
            case h.$pd.PLAYING:
                return 1;
            default:
                return 0;
        }
    },
    N = (e) => +!!(0, u.A)(e);
function v(e, t) {
    return y(t) - y(e) || N(t) - N(e) || (t.created_at ?? 0) - (e.created_at ?? 0);
}
function C(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let i of e) i.type === h.$pd.PLAYING ? n.push(i) : t.push(i);
    return n.length <= 1 ? e : [...t, [...n].sort(v)[0]].sort(v);
}
function R(e, t) {
    (m[e] = t), (g[e] = C(t));
}
function O(e) {
    if ((delete E[e], delete m[e], delete g[e], delete A[e], delete I[e], null == p[e])) return;
    let t = Object.values(p[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                i = e.processedAtTimestamp,
                r = null != t.activities ? t.activities.length : 0,
                s = null != e.activities ? e.activities.length : 0;
            return n > i || (n === i && r > s) ? t : e;
        }, t[0]);
    n.status !== h.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((E[e] = n.status),
          R(e, n.activities),
          (A[e] = b(Object.values(t).flatMap((e) => e.hiddenActivities ?? []))),
          null != n.clientStatus && (I[e] = n.clientStatus))
        : a().every(
                p[e],
                (e) => e.status === h.clD.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length),
            )
          ? delete p[e]
          : t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (A[e] = b(Object.values(t).flatMap((e) => e.hiddenActivities ?? [])));
}
function b(e) {
    return 0 === e.length
        ? e
        : [...new Map([...e].reverse().map((e) => [`${e.application_id}:${e.party?.id}`, e])).values()];
}
function D(e) {
    let t = p[e];
    if (null == t) return;
    let n = a().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    (n.status !== h.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) &&
        ((E[e] = n.status),
        R(e, n.activities),
        (A[e] = n.hiddenActivities ?? []),
        null != n.clientStatus && (I[e] = n.clientStatus));
}
function L(e) {
    let {
        guildId: t,
        userId: n,
        status: i,
        clientStatus: s,
        activities: a,
        hiddenActivities: o,
        processedAtTimestamp: l,
    } = e;
    if (n === d.default.getId()) return !1;
    let u = i === h.clD.OFFLINE && (null == o || 0 === o.length),
        c = p[n];
    if (null == c) {
        if (u) return !1;
        c = p[n] = {};
    }
    if (u) c[t] = { status: i, clientStatus: s, activities: f, hiddenActivities: f, processedAtTimestamp: l };
    else {
        let e = a.length > 1 ? [...a].sort(v) : a,
            n = b(o ?? []),
            u = c[t];
        (a = null != u && r()(u.activities, e) ? u.activities : e),
            (c[t] = { status: i, clientStatus: s, activities: a, hiddenActivities: n, processedAtTimestamp: l });
    }
    return delete T[n], O(n), !0;
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
    if (n === d.default.getId()) return;
    let l = i === h.clD.OFFLINE && (null == a || 0 === a.length),
        u = p[n];
    if (null == u) {
        if (l) return;
        u = p[n] = {};
    }
    if (l) u[t] = { status: i, clientStatus: r, activities: f, hiddenActivities: f, processedAtTimestamp: o };
    else {
        let e = s.length > 1 ? [...s].sort(v) : s,
            n = b(a ?? []);
        u[t] = { status: i, clientStatus: r, activities: e, hiddenActivities: n, processedAtTimestamp: o };
    }
}
function M(e, t) {
    if (t === d.default.getId()) return !1;
    let n = p[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete p[t], O(t);
}
function P(e) {
    for (let t of c.default.keys(p)) M(e, t);
}
class x extends o.Ay.Store {
    static displayName = "PresenceStore";
    initialize() {
        this.waitFor(d.default, _.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (E[d.default.getId()] = e), R(d.default.getId(), [...t].sort(v));
    }
    getStatus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.clD.OFFLINE,
            i = _.default.getUser(e);
        if ((null != i && i.hasFlag(h.nhx.BOT_HTTP_INTERACTIONS) && (n = h.clD.UNKNOWN), null == t)) return E[e] ?? n;
        let r = S(e, t);
        return r?.status ?? n;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return g[e] ?? f;
        let n = S(e, t);
        return null == n || null == n.activities ? f : C(n.activities);
    }
    getUnfilteredActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return m[e] ?? f;
        let n = S(e, t);
        return null == n || null == n.activities ? f : n.activities;
    }
    getHiddenActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == t ? (A[e] ?? f) : (S(e, t)?.hiddenActivities ?? f);
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== h.$pd.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of c.default.keys(g))
            for (let i of g[n]) i.application_id === e && t.push({ userId: n, activity: i });
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
        return c.default.keys(m);
    }
    isMobileOnline(e) {
        let t = I[e];
        return (
            null != t &&
            t[h.xfJ.MOBILE] === h.clD.ONLINE &&
            t[h.xfJ.DESKTOP] !== h.clD.ONLINE &&
            t[h.xfJ.VR] !== h.clD.ONLINE
        );
    }
    isVROnline(e) {
        let t = I[e];
        return null != t && t[h.xfJ.VR] === h.clD.ONLINE;
    }
    getClientStatus(e) {
        return I[e];
    }
    getState() {
        return {
            presencesForGuilds: p,
            statuses: E,
            activities: m,
            filteredActivities: g,
            hiddenActivities: A,
            activityMetadata: T,
            clientStatuses: I,
        };
    }
}
let k = new x(l.h, {
    CONNECTION_OPEN: function () {
        return !0;
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = d.default.getId();
        (p = {}),
            (T = {}),
            (E = { [i]: E[i] }),
            (m = { [i]: m[i] }),
            (g = { [i]: g[i] }),
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
                        guildId: h.ME,
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
            r.forEach(D);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { presences: t } = e;
        (p = t.presencesForGuilds),
            (E = t.statuses),
            (m = t.activities),
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
            L({
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
                    activities: s,
                    hiddenActivities: a,
                    processedAtTimestamp: o,
                } = e;
                return L({
                    guildId: t ?? h.ME,
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
        P(h.ME),
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
                    L({
                        guildId: h.ME,
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
                L({
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
                L({
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
        let t = d.default.getId();
        if (E[t] === e.status && m[t] === e.activities && A[t] === e.hiddenActivities) return !1;
        (E[t] = e.status), R(t, [...e.activities].sort(v)), (A[t] = [...e.hiddenActivities].sort(v)), delete T[t];
    },
});
