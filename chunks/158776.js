n.d(t, {
    Z: () => Q,
    f: () => O
}),
    n(47120),
    n(390547),
    n(653041);
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
    I = {},
    T = {};
function b(e, t) {
    let n = g[e];
    return null != n ? n[t] : null;
}
let S = (e) => {
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
function A(e, t) {
    return S(t) - S(e);
}
let N = (e) => ((0, c.Z)(e) ? 1 : 0);
function C(e, t) {
    return N(t) - N(e);
}
function R(e, t) {
    var n, i;
    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (i = e.created_at) && void 0 !== i ? i : 0);
}
function O(e, t) {
    return A(e, t) || C(e, t) || R(e, t);
}
function D(e) {
    if ((delete E[e], delete v[e], delete y[e], delete I[e], null == g[e])) return;
    let t = o().sortBy(g[e], (e) => -e.timestamp),
        [n] = t;
    n.status !== p.Skl.OFFLINE
        ? ((E[e] = n.status),
          (v[e] = n.activities),
          (y[e] = L(
              Object.values(t).flatMap((e) => {
                  var t;
                  return null !== (t = e.hiddenActivities) && void 0 !== t ? t : [];
              })
          )),
          null != n.clientStatus && (I[e] = n.clientStatus))
        : o().every(g[e], (e) => e.status === p.Skl.OFFLINE) && delete g[e];
}
function L(e) {
    return 0 === e.length
        ? e
        : [
              ...new Map(
                  [...e].reverse().map((e) => {
                      var t;
                      return [''.concat(e.application_id, ':').concat(null === (t = e.party) || void 0 === t ? void 0 : t.id), e];
                  })
              ).values()
          ];
}
function x(e) {
    let t = g[e];
    if (null == t) return;
    let n = o().maxBy(Object.values(t), (e) => e.timestamp);
    n.status !== p.Skl.OFFLINE && ((E[e] = n.status), (v[e] = n.activities), (y[e] = n.hiddenActivities), null != n.clientStatus && (I[e] = n.clientStatus));
}
function P(e) {
    let { guildId: t, userId: n, status: i, clientStatus: r, activities: s, hiddenActivities: o } = e;
    if (n === f.default.getId()) return !1;
    let l = g[n];
    if (null == l) {
        if (i === p.Skl.OFFLINE) return !1;
        l = g[n] = {};
    }
    if (i === p.Skl.OFFLINE)
        l[t] = {
            status: i,
            clientStatus: r,
            activities: m,
            hiddenActivities: m,
            timestamp: Date.now()
        };
    else {
        let e = s.length > 1 ? [...s].sort(O) : s,
            n = l[t];
        (s = null != n && a()(n.activities, e) ? n.activities : e),
            (l[t] = {
                status: i,
                clientStatus: r,
                activities: s,
                hiddenActivities: o,
                timestamp: Date.now()
            });
    }
    return delete T[n], D(n), !0;
}
function w(e) {
    let { guildId: t, userId: n, status: i, clientStatus: r, activities: a, hiddenActivities: s, timestamp: o } = e;
    if (n === f.default.getId()) return;
    let l = g[n];
    if (null == l) {
        if (i === p.Skl.OFFLINE) return;
        l = g[n] = {};
    }
    if (i === p.Skl.OFFLINE)
        l[t] = {
            status: i,
            clientStatus: r,
            activities: m,
            hiddenActivities: m,
            timestamp: Date.now()
        };
    else {
        let e = a.length > 1 ? [...a].sort(O) : a;
        l[t] = {
            status: i,
            clientStatus: r,
            activities: e,
            hiddenActivities: s,
            timestamp: o
        };
    }
}
function M(e, t) {
    if (t === f.default.getId()) return !1;
    let n = g[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete g[t], D(t);
}
function k(e) {
    for (let t of d.default.keys(g)) M(e, t);
}
function U() {
    return !0;
}
function G(e) {
    let { guilds: t, presences: n } = e,
        i = f.default.getId();
    (g = {}), (T = {}), (E = { [i]: E[i] }), (v = { [i]: v[i] }), (y = { [i]: y[i] }), (I = { [i]: {} });
    let r = new Set(),
        a = Date.now();
    t.forEach((e) => {
        e.presences.forEach((t) => {
            let { user: n, status: i, clientStatus: s, activities: o, hiddenActivities: l } = t;
            w({
                guildId: e.id,
                userId: n.id,
                status: i,
                clientStatus: s,
                activities: o,
                hiddenActivities: l,
                timestamp: a
            }),
                r.add(n.id);
        });
    }),
        n.forEach((e) => {
            let { user: t, status: n, clientStatus: i, activities: s, hiddenActivities: o } = e;
            null != t &&
                (w({
                    guildId: p.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: i,
                    activities: s,
                    hiddenActivities: o,
                    timestamp: a
                }),
                r.add(t.id));
        }),
        r.delete(i),
        r.forEach(x);
}
function B(e) {
    let { presences: t } = e;
    (g = t.presencesForGuilds), (E = t.statuses), (v = t.activities), (y = t.hiddenActivities), (T = t.activityMetadata);
}
function Z(e) {
    let { presences: t } = e;
    k(p.ME),
        t.forEach((e) => {
            let { user: t, status: n, clientStatus: i, activities: r, hiddenActivities: a } = e;
            null != t &&
                P({
                    guildId: p.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: i,
                    activities: r,
                    hiddenActivities: a
                });
        });
}
function F(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: i, clientStatus: r, activities: a, hiddenActivities: s } = e;
        P({
            guildId: t.id,
            userId: n.id,
            status: i,
            clientStatus: r,
            activities: a,
            hiddenActivities: s
        });
    });
}
function V(e) {
    let { guild: t } = e;
    k(t.id);
}
function j(e) {
    let { guildId: t, user: n } = e;
    return M(t, n.id);
}
function H(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: i, clientStatus: r, activities: a, hiddenActivities: s } = e;
            return P({
                guildId: null != t ? t : p.ME,
                userId: n.id,
                status: i,
                clientStatus: r,
                activities: a,
                hiddenActivities: s
            });
        })
        .some((e) => e);
}
function Y(e) {
    let { guildId: t, members: n } = e;
    n.forEach((e) => {
        null != e.presence &&
            P({
                guildId: t,
                userId: e.user_id,
                status: e.presence.status,
                clientStatus: e.presence.clientStatus,
                activities: e.presence.activities,
                hiddenActivities: e.presence.hiddenActivities
            });
    });
}
function W(e) {
    let { guildId: t, addedMembers: n } = e;
    null == n ||
        n.forEach((e) => {
            null != e.presence &&
                P({
                    guildId: t,
                    userId: e.userId,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities,
                    hiddenActivities: e.presence.hiddenActivities
                });
        });
}
function K(e) {
    let t = f.default.getId();
    if (E[t] === e.status && v[t] === e.activities) return !1;
    (E[t] = e.status), (v[t] = [...e.activities].sort(O)), delete T[t];
}
function z(e) {
    let { userId: t, metadata: n } = e;
    return (T[t] = n), !1;
}
class q extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(f.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (E[f.default.getId()] = e), (v[f.default.getId()] = [...t].sort(O));
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
    getHiddenActivities(e) {
        var t, n, i;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == r ? (null !== (n = y[e]) && void 0 !== n ? n : m) : null !== (i = null === (t = b(e, r)) || void 0 === t ? void 0 : t.hiddenActivities) && void 0 !== i ? i : m;
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
        return this.findActivity(e, (e) => e.application_id === t, n, !0);
    }
    findActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        i = null != i && i;
        let r = this.getActivities(e, n);
        return i && (r = r.concat(this.getHiddenActivities(e, n))), r.find(t);
    }
    getActivityMetadata(e) {
        return T[e];
    }
    getUserIds() {
        return d.default.keys(v);
    }
    isMobileOnline(e) {
        let t = I[e];
        return null != t && t[p.X5t.MOBILE] === p.Skl.ONLINE && t[p.X5t.DESKTOP] !== p.Skl.ONLINE;
    }
    getClientStatus(e) {
        return I[e];
    }
    getState() {
        return {
            presencesForGuilds: g,
            statuses: E,
            activities: v,
            hiddenActivities: y,
            activityMetadata: T,
            clientStatuses: I
        };
    }
}
h(q, 'displayName', 'PresenceStore');
let Q = new q(u.Z, {
    CONNECTION_OPEN: U,
    CONNECTION_OPEN_SUPPLEMENTAL: G,
    OVERLAY_INITIALIZE: B,
    GUILD_CREATE: F,
    GUILD_DELETE: V,
    GUILD_MEMBER_REMOVE: j,
    PRESENCE_UPDATES: H,
    PRESENCES_REPLACE: Z,
    ACTIVITY_METADATA_UPDATE: z,
    THREAD_MEMBER_LIST_UPDATE: Y,
    THREAD_MEMBERS_UPDATE: W,
    SELF_PRESENCE_STORE_UPDATE: K
});
