n.d(t, {
    Z: () => Q,
    f: () => R
}),
    n(47120),
    n(13667),
    n(390547),
    n(978209),
    n(230036),
    n(653041);
var r,
    i = n(348327),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    l = n(442837),
    c = n(570140),
    u = n(122810),
    d = n(709054),
    f = n(314897),
    p = n(594174),
    _ = n(981631);
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
    b = {},
    y = {},
    O = {};
function S(e, t) {
    let n = g[e];
    return null != n ? n[t] : null;
}
let I = (e) => {
    switch (e.type) {
        case _.IIU.CUSTOM_STATUS:
            return 4;
        case _.IIU.COMPETING:
            return 3;
        case _.IIU.STREAMING:
            return 2;
        case _.IIU.PLAYING:
            return 1;
        default:
            return 0;
    }
};
function T(e, t) {
    return I(t) - I(e);
}
let N = (e) => +!!(0, u.Z)(e);
function A(e, t) {
    return N(t) - N(e);
}
function C(e, t) {
    var n, r;
    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0);
}
function R(e, t) {
    return T(e, t) || A(e, t) || C(e, t);
}
function P(e) {
    if ((delete E[e], delete v[e], delete b[e], delete y[e], null == g[e])) return;
    let t = s().sortBy(g[e], (e) => -e.timestamp),
        [n] = t;
    n.status !== _.Skl.OFFLINE
        ? ((E[e] = n.status),
          (v[e] = n.activities),
          (b[e] = w(
              Object.values(t).flatMap((e) => {
                  var t;
                  return null !== (t = e.hiddenActivities) && void 0 !== t ? t : [];
              })
          )),
          null != n.clientStatus && (y[e] = n.clientStatus))
        : s().every(g[e], (e) => e.status === _.Skl.OFFLINE) && delete g[e];
}
function w(e) {
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
function D(e) {
    let t = g[e];
    if (null == t) return;
    let n = s().maxBy(Object.values(t), (e) => e.timestamp);
    n.status !== _.Skl.OFFLINE && ((E[e] = n.status), (v[e] = n.activities), (b[e] = n.hiddenActivities), null != n.clientStatus && (y[e] = n.clientStatus));
}
function x(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: a, hiddenActivities: s } = e;
    if (n === f.default.getId()) return !1;
    let l = g[n];
    if (null == l) {
        if (r === _.Skl.OFFLINE) return !1;
        l = g[n] = {};
    }
    if (r === _.Skl.OFFLINE)
        l[t] = {
            status: r,
            clientStatus: i,
            activities: m,
            hiddenActivities: m,
            timestamp: Date.now()
        };
    else {
        let e = a.length > 1 ? [...a].sort(R) : a,
            n = l[t];
        (a = null != n && o()(n.activities, e) ? n.activities : e),
            (l[t] = {
                status: r,
                clientStatus: i,
                activities: a,
                hiddenActivities: s,
                timestamp: Date.now()
            });
    }
    return delete O[n], P(n), !0;
}
function L(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: o, hiddenActivities: a, timestamp: s } = e;
    if (n === f.default.getId()) return;
    let l = g[n];
    if (null == l) {
        if (r === _.Skl.OFFLINE) return;
        l = g[n] = {};
    }
    if (r === _.Skl.OFFLINE)
        l[t] = {
            status: r,
            clientStatus: i,
            activities: m,
            hiddenActivities: m,
            timestamp: Date.now()
        };
    else {
        let e = o.length > 1 ? [...o].sort(R) : o;
        l[t] = {
            status: r,
            clientStatus: i,
            activities: e,
            hiddenActivities: a,
            timestamp: s
        };
    }
}
function M(e, t) {
    if (t === f.default.getId()) return !1;
    let n = g[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete g[t], P(t);
}
function k(e) {
    for (let t of d.default.keys(g)) M(e, t);
}
function j() {
    return !0;
}
function U(e) {
    let { guilds: t, presences: n } = e,
        r = f.default.getId();
    (g = {}), (O = {}), (E = { [r]: E[r] }), (v = { [r]: v[r] }), (b = { [r]: b[r] }), (y = { [r]: {} });
    let i = new Set(),
        o = Date.now();
    t.forEach((e) => {
        e.presences.forEach((t) => {
            let { user: n, status: r, clientStatus: a, activities: s, hiddenActivities: l } = t;
            L({
                guildId: e.id,
                userId: n.id,
                status: r,
                clientStatus: a,
                activities: s,
                hiddenActivities: l,
                timestamp: o
            }),
                i.add(n.id);
        });
    }),
        n.forEach((e) => {
            let { user: t, status: n, clientStatus: r, activities: a, hiddenActivities: s } = e;
            null != t &&
                (L({
                    guildId: _.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: a,
                    hiddenActivities: s,
                    timestamp: o
                }),
                i.add(t.id));
        }),
        i.delete(r),
        i.forEach(D);
}
function G(e) {
    let { presences: t } = e;
    (g = t.presencesForGuilds), (E = t.statuses), (v = t.activities), (b = t.hiddenActivities), (O = t.activityMetadata);
}
function B(e) {
    let { presences: t } = e;
    k(_.ME),
        t.forEach((e) => {
            let { user: t, status: n, clientStatus: r, activities: i, hiddenActivities: o } = e;
            null != t &&
                x({
                    guildId: _.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: i,
                    hiddenActivities: o
                });
        });
}
function Z(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: r, clientStatus: i, activities: o, hiddenActivities: a } = e;
        x({
            guildId: t.id,
            userId: n.id,
            status: r,
            clientStatus: i,
            activities: o,
            hiddenActivities: a
        });
    });
}
function F(e) {
    let { guild: t } = e;
    k(t.id);
}
function V(e) {
    let { guildId: t, user: n } = e;
    return M(t, n.id);
}
function H(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: r, clientStatus: i, activities: o, hiddenActivities: a } = e;
            return x({
                guildId: null != t ? t : _.ME,
                userId: n.id,
                status: r,
                clientStatus: i,
                activities: o,
                hiddenActivities: a
            });
        })
        .some((e) => e);
}
function W(e) {
    let { guildId: t, members: n } = e;
    n.forEach((e) => {
        null != e.presence &&
            x({
                guildId: t,
                userId: e.user_id,
                status: e.presence.status,
                clientStatus: e.presence.clientStatus,
                activities: e.presence.activities,
                hiddenActivities: e.presence.hiddenActivities
            });
    });
}
function Y(e) {
    let { guildId: t, addedMembers: n } = e;
    null == n ||
        n.forEach((e) => {
            null != e.presence &&
                x({
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
    (E[t] = e.status), (v[t] = [...e.activities].sort(R)), delete O[t];
}
function z(e) {
    let { userId: t, metadata: n } = e;
    return (O[t] = n), !1;
}
class q extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(f.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (E[f.default.getId()] = e), (v[f.default.getId()] = [...t].sort(R));
    }
    getStatus(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Skl.OFFLINE,
            o = p.default.getUser(e);
        if ((null != o && o.hasFlag(_.xW$.BOT_HTTP_INTERACTIONS) && (i = _.Skl.UNKNOWN), null == o ? void 0 : o.isClyde())) return _.Skl.ONLINE;
        if (null == r) return null !== (t = E[e]) && void 0 !== t ? t : i;
        let a = S(e, r);
        return null !== (n = null == a ? void 0 : a.status) && void 0 !== n ? n : i;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) {
            var n;
            return null !== (n = v[e]) && void 0 !== n ? n : m;
        }
        let r = S(e, t);
        return null == r || null == r.activities ? m : r.activities;
    }
    getHiddenActivities(e) {
        var t, n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == i ? (null !== (n = b[e]) && void 0 !== n ? n : m) : null !== (r = null === (t = S(e, i)) || void 0 === t ? void 0 : t.hiddenActivities) && void 0 !== r ? r : m;
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== _.IIU.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of d.default.keys(v))
            for (let r of v[n])
                r.application_id === e &&
                    t.push({
                        userId: n,
                        activity: r
                    });
        return t;
    }
    getApplicationActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this.findActivity(e, (e) => e.application_id === t, n, !0);
    }
    findActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        r = null != r && r;
        let i = this.getActivities(e, n);
        return r && (i = i.concat(this.getHiddenActivities(e, n))), i.find(t);
    }
    getActivityMetadata(e) {
        return O[e];
    }
    getUserIds() {
        return d.default.keys(v);
    }
    isMobileOnline(e) {
        let t = y[e];
        return null != t && t[_.X5t.MOBILE] === _.Skl.ONLINE && t[_.X5t.DESKTOP] !== _.Skl.ONLINE;
    }
    getClientStatus(e) {
        return y[e];
    }
    getState() {
        return {
            presencesForGuilds: g,
            statuses: E,
            activities: v,
            hiddenActivities: b,
            activityMetadata: O,
            clientStatuses: y
        };
    }
}
h(q, 'displayName', 'PresenceStore');
let Q = new q(c.Z, {
    CONNECTION_OPEN: j,
    CONNECTION_OPEN_SUPPLEMENTAL: U,
    OVERLAY_INITIALIZE: G,
    GUILD_CREATE: Z,
    GUILD_DELETE: F,
    GUILD_MEMBER_REMOVE: V,
    PRESENCE_UPDATES: H,
    PRESENCES_REPLACE: B,
    ACTIVITY_METADATA_UPDATE: z,
    THREAD_MEMBER_LIST_UPDATE: W,
    THREAD_MEMBERS_UPDATE: Y,
    SELF_PRESENCE_STORE_UPDATE: K
});
