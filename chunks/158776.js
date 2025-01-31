n.d(t, { Z: () => z }), n(47120), n(653041);
var i,
    r = n(348327),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(122810),
    d = n(709054),
    f = n(314897),
    _ = n(594174),
    p = n(981631);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = Object.freeze([]),
    g = {},
    E = {},
    v = {},
    y = {},
    I = {};
function b(e, t) {
    let n = g[e];
    return null != n ? n[t] : null;
}
let T = (e) => {
    switch (e.type) {
        case p.IIU.CUSTOM_STATUS:
            return 4;
        case p.IIU.COMPETING:
            return 3;
        case p.IIU.STREAMING:
            return 2;
        case p.IIU.PLAYING:
            return 1;
        default:
            return 0;
    }
};
function S(e, t) {
    return T(t) - T(e);
}
let A = (e) => ((0, c.Z)(e) ? 1 : 0);
function N(e, t) {
    return A(t) - A(e);
}
function C(e, t) {
    var n, i;
    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (i = e.created_at) && void 0 !== i ? i : 0);
}
function R(e, t) {
    return S(e, t) || N(e, t) || C(e, t);
}
function O(e) {
    if ((delete E[e], delete v[e], delete y[e], null == g[e])) return;
    let [t] = o().sortBy(g[e], (e) => -e.timestamp);
    t.status !== p.Skl.OFFLINE ? ((E[e] = t.status), (v[e] = t.activities), null != t.clientStatus && (y[e] = t.clientStatus)) : o().every(g[e], (e) => e.status === p.Skl.OFFLINE) && delete g[e];
}
function D(e) {
    let t = g[e];
    if (null == t) return;
    let n = o().maxBy(Object.values(t), (e) => e.timestamp);
    n.status !== p.Skl.OFFLINE && ((E[e] = n.status), (v[e] = n.activities), null != n.clientStatus && (y[e] = n.clientStatus));
}
function x(e) {
    let { guildId: t, userId: n, status: i, clientStatus: r, activities: s } = e;
    if (n === f.default.getId()) return !1;
    let o = g[n];
    if (null == o) {
        if (i === p.Skl.OFFLINE) return !1;
        o = g[n] = {};
    }
    if (i === p.Skl.OFFLINE)
        o[t] = {
            status: i,
            clientStatus: r,
            activities: m,
            timestamp: Date.now()
        };
    else {
        let e = s.length > 1 ? [...s].sort(R) : s,
            n = o[t];
        (s = null != n && a()(n.activities, e) ? n.activities : e),
            (o[t] = {
                status: i,
                clientStatus: r,
                activities: s,
                timestamp: Date.now()
            });
    }
    return delete I[n], O(n), !0;
}
function L(e) {
    let { guildId: t, userId: n, status: i, clientStatus: r, activities: a, timestamp: s } = e;
    if (n === f.default.getId()) return;
    let o = g[n];
    if (null == o) {
        if (i === p.Skl.OFFLINE) return;
        o = g[n] = {};
    }
    if (i === p.Skl.OFFLINE)
        o[t] = {
            status: i,
            clientStatus: r,
            activities: m,
            timestamp: Date.now()
        };
    else {
        let e = a.length > 1 ? [...a].sort(R) : a;
        o[t] = {
            status: i,
            clientStatus: r,
            activities: e,
            timestamp: s
        };
    }
}
function P(e, t) {
    if (t === f.default.getId()) return !1;
    let n = g[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete g[t], O(t);
}
function w(e) {
    for (let t of d.default.keys(g)) P(e, t);
}
function M() {
    return !0;
}
function k(e) {
    let { guilds: t, presences: n } = e,
        i = f.default.getId();
    (g = {}), (I = {}), (E = { [i]: E[i] }), (v = { [i]: v[i] }), (y = { [i]: {} });
    let r = new Set(),
        a = Date.now();
    t.forEach((e) => {
        e.presences.forEach((t) => {
            let { user: n, status: i, clientStatus: s, activities: o } = t;
            L({
                guildId: e.id,
                userId: n.id,
                status: i,
                clientStatus: s,
                activities: o,
                timestamp: a
            }),
                r.add(n.id);
        });
    }),
        n.forEach((e) => {
            let { user: t, status: n, clientStatus: i, activities: s } = e;
            null != t &&
                (L({
                    guildId: p.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: i,
                    activities: s,
                    timestamp: a
                }),
                r.add(t.id));
        }),
        r.delete(i),
        r.forEach(D);
}
function U(e) {
    let { presences: t } = e;
    (g = t.presencesForGuilds), (E = t.statuses), (v = t.activities), (I = t.activityMetadata);
}
function G(e) {
    let { presences: t } = e;
    w(p.ME),
        t.forEach((e) => {
            let { user: t, status: n, clientStatus: i, activities: r } = e;
            null != t &&
                x({
                    guildId: p.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: i,
                    activities: r
                });
        });
}
function B(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: i, clientStatus: r, activities: a } = e;
        x({
            guildId: t.id,
            userId: n.id,
            status: i,
            clientStatus: r,
            activities: a
        });
    });
}
function Z(e) {
    let { guild: t } = e;
    w(t.id);
}
function F(e) {
    let { guildId: t, user: n } = e;
    return P(t, n.id);
}
function V(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: i, clientStatus: r, activities: a } = e;
            return x({
                guildId: null != t ? t : p.ME,
                userId: n.id,
                status: i,
                clientStatus: r,
                activities: a
            });
        })
        .some((e) => e);
}
function j(e) {
    let { guildId: t, members: n } = e;
    n.forEach((e) => {
        null != e.presence &&
            x({
                guildId: t,
                userId: e.user_id,
                status: e.presence.status,
                clientStatus: e.presence.clientStatus,
                activities: e.presence.activities
            });
    });
}
function H(e) {
    let { guildId: t, addedMembers: n } = e;
    null == n ||
        n.forEach((e) => {
            null != e.presence &&
                x({
                    guildId: t,
                    userId: e.userId,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities
                });
        });
}
function Y(e) {
    let t = f.default.getId();
    if (E[t] === e.status && v[t] === e.activities) return !1;
    (E[t] = e.status), (v[t] = e.activities), delete I[t];
}
function W(e) {
    let { userId: t, metadata: n } = e;
    return (I[t] = n), !1;
}
class K extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(f.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (E[f.default.getId()] = e), (v[f.default.getId()] = t);
    }
    getStatus(e) {
        var t, n;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.Skl.OFFLINE,
            a = _.default.getUser(e);
        if ((null != a && a.hasFlag(p.xW$.BOT_HTTP_INTERACTIONS) && (r = p.Skl.UNKNOWN), null == a ? void 0 : a.isClyde())) return p.Skl.ONLINE;
        if (null == i) return null !== (t = E[e]) && void 0 !== t ? t : r;
        let s = b(e, i);
        return null !== (n = null == s ? void 0 : s.status) && void 0 !== n ? n : r;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) {
            var n;
            return null !== (n = v[e]) && void 0 !== n ? n : m;
        }
        let i = b(e, t);
        return null == i || null == i.activities ? m : i.activities;
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== p.IIU.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of d.default.keys(v))
            for (let i of v[n])
                i.application_id === e &&
                    t.push({
                        userId: n,
                        activity: i
                    });
        return t;
    }
    getApplicationActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this.findActivity(e, (e) => e.application_id === t, n);
    }
    findActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this.getActivities(e, n).find(t);
    }
    getActivityMetadata(e) {
        return I[e];
    }
    getUserIds() {
        return d.default.keys(v);
    }
    isMobileOnline(e) {
        let t = y[e];
        return null != t && t[p.X5t.MOBILE] === p.Skl.ONLINE && t[p.X5t.DESKTOP] !== p.Skl.ONLINE;
    }
    getClientStatus(e) {
        return y[e];
    }
    getState() {
        return {
            presencesForGuilds: g,
            statuses: E,
            activities: v,
            activityMetadata: I,
            clientStatuses: y
        };
    }
}
h(K, 'displayName', 'PresenceStore');
let z = new K(u.Z, {
    CONNECTION_OPEN: M,
    CONNECTION_OPEN_SUPPLEMENTAL: k,
    OVERLAY_INITIALIZE: U,
    GUILD_CREATE: B,
    GUILD_DELETE: Z,
    GUILD_MEMBER_REMOVE: F,
    PRESENCE_UPDATES: V,
    PRESENCES_REPLACE: G,
    ACTIVITY_METADATA_UPDATE: W,
    THREAD_MEMBER_LIST_UPDATE: j,
    THREAD_MEMBERS_UPDATE: H,
    SELF_PRESENCE_STORE_UPDATE: Y
});
