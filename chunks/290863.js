"use strict";
n.d(t, { A: () => k, m: () => v }), n(321073);
var r = n(812729),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(73153),
    u = n(682261),
    c = n(661191),
    d = n(961350),
    _ = n(287809),
    f = n(652215);
let p = Object.freeze([]),
    h = {},
    E = {},
    m = {},
    g = {},
    A = {},
    I = {},
    T = {};
function S(e, t) {
    let n = h[e];
    return null != n ? n[t] : null;
}
let y = (e) => {
        switch (e.type) {
            case f.$pd.CUSTOM_STATUS:
                return 4;
            case f.$pd.COMPETING:
                return 3;
            case f.$pd.STREAMING:
                return 2;
            case f.$pd.PLAYING:
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
    for (let r of e) r.type === f.$pd.PLAYING ? n.push(r) : t.push(r);
    return n.length <= 1 ? e : [...t, [...n].sort(v)[0]].sort(v);
}
function O(e, t) {
    (m[e] = t), (g[e] = C(t));
}
function R(e) {
    if ((delete E[e], delete m[e], delete g[e], delete A[e], delete I[e], null == h[e])) return;
    let t = Object.values(h[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                r = e.processedAtTimestamp,
                i = null != t.activities ? t.activities.length : 0,
                s = null != e.activities ? e.activities.length : 0;
            return n > r || (n === r && i > s) ? t : e;
        }, t[0]);
    n.status !== f.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((E[e] = n.status),
          O(e, n.activities),
          (A[e] = b(Object.values(t).flatMap((e) => e.hiddenActivities ?? []))),
          null != n.clientStatus && (I[e] = n.clientStatus))
        : a().every(
                h[e],
                (e) => e.status === f.clD.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length),
            )
          ? delete h[e]
          : n.status === f.clD.OFFLINE &&
            t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (A[e] = b(Object.values(t).flatMap((e) => e.hiddenActivities ?? [])));
}
function b(e) {
    return 0 === e.length
        ? e
        : [...new Map([...e].reverse().map((e) => [`${e.application_id}:${e.party?.id}`, e])).values()];
}
function D(e) {
    let t = h[e];
    if (null == t) return;
    let n = a().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    (n.status !== f.clD.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) &&
        ((E[e] = n.status),
        O(e, n.activities),
        (A[e] = n.hiddenActivities ?? []),
        null != n.clientStatus && (I[e] = n.clientStatus));
}
function L(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: s,
        activities: a,
        hiddenActivities: o,
        processedAtTimestamp: l,
    } = e;
    if (n === d.default.getId()) return !1;
    let u = r === f.clD.OFFLINE && (null == o || 0 === o.length),
        c = h[n];
    if (null == c) {
        if (u) return !1;
        c = h[n] = {};
    }
    if (u) c[t] = { status: r, clientStatus: s, activities: p, hiddenActivities: p, processedAtTimestamp: l };
    else {
        let e = a.length > 1 ? [...a].sort(v) : a,
            n = b(o ?? []),
            u = c[t];
        (a = null != u && i()(u.activities, e) ? u.activities : e),
            (c[t] = { status: r, clientStatus: s, activities: a, hiddenActivities: n, processedAtTimestamp: l });
    }
    return delete T[n], R(n), !0;
}
function w(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: i,
        activities: s,
        hiddenActivities: a,
        processedAtTimestamp: o,
    } = e;
    if (n === d.default.getId()) return;
    let l = r === f.clD.OFFLINE && (null == a || 0 === a.length),
        u = h[n];
    if (null == u) {
        if (l) return;
        u = h[n] = {};
    }
    if (l) u[t] = { status: r, clientStatus: i, activities: p, hiddenActivities: p, processedAtTimestamp: o };
    else {
        let e = s.length > 1 ? [...s].sort(v) : s,
            n = b(a ?? []);
        u[t] = { status: r, clientStatus: i, activities: e, hiddenActivities: n, processedAtTimestamp: o };
    }
}
function M(e, t) {
    if (t === d.default.getId()) return !1;
    let n = h[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete h[t], R(t);
}
function P(e) {
    for (let t of c.default.keys(h)) M(e, t);
}
class x extends o.Ay.Store {
    static displayName = "PresenceStore";
    initialize() {
        this.waitFor(d.default, _.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (E[d.default.getId()] = e), O(d.default.getId(), [...t].sort(v));
    }
    getStatus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.clD.OFFLINE,
            r = _.default.getUser(e);
        if ((null != r && r.hasFlag(f.nhx.BOT_HTTP_INTERACTIONS) && (n = f.clD.UNKNOWN), null == t)) return E[e] ?? n;
        let i = S(e, t);
        return i?.status ?? n;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return g[e] ?? p;
        let n = S(e, t);
        return null == n || null == n.activities ? p : C(n.activities);
    }
    getUnfilteredActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) return m[e] ?? p;
        let n = S(e, t);
        return null == n || null == n.activities ? p : n.activities;
    }
    getHiddenActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == t ? (A[e] ?? p) : (S(e, t)?.hiddenActivities ?? p);
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== f.$pd.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of c.default.keys(g))
            for (let r of g[n]) r.application_id === e && t.push({ userId: n, activity: r });
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
        return T[e];
    }
    getUserIds() {
        return c.default.keys(m);
    }
    isMobileOnline(e) {
        let t = I[e];
        return (
            null != t &&
            t[f.xfJ.MOBILE] === f.clD.ONLINE &&
            t[f.xfJ.DESKTOP] !== f.clD.ONLINE &&
            t[f.xfJ.VR] !== f.clD.ONLINE
        );
    }
    isVROnline(e) {
        let t = I[e];
        return null != t && t[f.xfJ.VR] === f.clD.ONLINE;
    }
    getClientStatus(e) {
        return I[e];
    }
    getState() {
        return {
            presencesForGuilds: h,
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
            r = d.default.getId();
        (h = {}),
            (T = {}),
            (E = { [r]: E[r] }),
            (m = { [r]: m[r] }),
            (g = { [r]: g[r] }),
            (A = { [r]: A[r] }),
            (I = { [r]: {} });
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
                w({
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
                    (w({
                        guildId: f.ME,
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
            i.forEach(D);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { presences: t } = e;
        (h = t.presencesForGuilds),
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
                status: r,
                clientStatus: i,
                activities: s,
                hiddenActivities: a,
                processedAtTimestamp: o,
            } = e;
            L({
                guildId: t.id,
                userId: n.id,
                status: r,
                clientStatus: i,
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
                    status: r,
                    clientStatus: i,
                    activities: s,
                    hiddenActivities: a,
                    processedAtTimestamp: o,
                } = e;
                return L({
                    guildId: t ?? f.ME,
                    userId: n.id,
                    status: r,
                    clientStatus: i,
                    activities: s,
                    hiddenActivities: a,
                    processedAtTimestamp: o,
                });
            })
            .some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        P(f.ME),
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
                    L({
                        guildId: f.ME,
                        userId: t.id,
                        status: n,
                        clientStatus: r,
                        activities: i,
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
        (E[t] = e.status), O(t, [...e.activities].sort(v)), (A[t] = [...e.hiddenActivities].sort(v)), delete T[t];
    },
});
