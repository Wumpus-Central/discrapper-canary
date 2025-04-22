n.d(t, {
    Z: () => Q,
    f: () => R
}),
    n(361932),
    n(187205),
    n(388685),
    n(583741),
    n(642613),
    n(539854);
var r,
    i = n(348327),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(122810),
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
    b = {},
    y = {},
    v = {},
    O = {};
function I(e, t) {
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
function T(e, t) {
    return S(t) - S(e);
}
let A = (e) => +!!(0, u.Z)(e);
function N(e, t) {
    return A(t) - A(e);
}
function C(e, t) {
    var n, r;
    return (null != (n = t.created_at) ? n : 0) - (null != (r = e.created_at) ? r : 0);
}
function R(e, t) {
    return T(e, t) || N(e, t) || C(e, t);
}
function P(e) {
    if ((delete E[e], delete b[e], delete y[e], delete v[e], null == g[e])) return;
    let t = Object.values(g[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                r = e.processedAtTimestamp,
                i = null != t.activities ? t.activities.length : 0,
                a = null != e.activities ? e.activities.length : 0;
            return n > r || (n === r && i > a) ? t : e;
        }, t[0]);
    n.status !== p.Skl.OFFLINE
        ? ((E[e] = n.status),
          (b[e] = n.activities),
          (y[e] = w(
              Object.values(t).flatMap((e) => {
                  var t;
                  return null != (t = e.hiddenActivities) ? t : [];
              })
          )),
          null != n.clientStatus && (v[e] = n.clientStatus))
        : s().every(g[e], (e) => e.status === p.Skl.OFFLINE) && delete g[e];
}
function w(e) {
    return 0 === e.length
        ? e
        : [
              ...new Map(
                  [...e].reverse().map((e) => {
                      var t;
                      return [''.concat(e.application_id, ':').concat(null == (t = e.party) ? void 0 : t.id), e];
                  })
              ).values()
          ];
}
function D(e) {
    let t = g[e];
    if (null == t) return;
    let n = s().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    n.status !== p.Skl.OFFLINE && ((E[e] = n.status), (b[e] = n.activities), (y[e] = n.hiddenActivities), null != n.clientStatus && (v[e] = n.clientStatus));
}
function L(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: o, hiddenActivities: s, processedAtTimestamp: l } = e;
    if (n === f.default.getId()) return !1;
    let c = g[n];
    if (null == c) {
        if (r === p.Skl.OFFLINE) return !1;
        c = g[n] = {};
    }
    if (r === p.Skl.OFFLINE)
        c[t] = {
            status: r,
            clientStatus: i,
            activities: m,
            hiddenActivities: m,
            processedAtTimestamp: l
        };
    else {
        let e = o.length > 1 ? [...o].sort(R) : o,
            n = c[t];
        (o = null != n && a()(n.activities, e) ? n.activities : e),
            (c[t] = {
                status: r,
                clientStatus: i,
                activities: o,
                hiddenActivities: s,
                processedAtTimestamp: l
            });
    }
    return delete O[n], P(n), !0;
}
function x(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
    if (n === f.default.getId()) return;
    let l = g[n];
    if (null == l) {
        if (r === p.Skl.OFFLINE) return;
        l = g[n] = {};
    }
    if (r === p.Skl.OFFLINE)
        l[t] = {
            status: r,
            clientStatus: i,
            activities: m,
            hiddenActivities: m,
            processedAtTimestamp: s
        };
    else {
        let e = a.length > 1 ? [...a].sort(R) : a;
        l[t] = {
            status: r,
            clientStatus: i,
            activities: e,
            hiddenActivities: o,
            processedAtTimestamp: s
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
    (g = {}), (O = {}), (E = { [r]: E[r] }), (b = { [r]: b[r] }), (y = { [r]: y[r] }), (v = { [r]: {} });
    let i = new Set();
    t.forEach((e) => {
        e.presences.forEach((t) => {
            let { user: n, status: r, clientStatus: a, activities: o, hiddenActivities: s, processedAtTimestamp: l } = t;
            x({
                guildId: e.id,
                userId: n.id,
                status: r,
                clientStatus: a,
                activities: o,
                hiddenActivities: s,
                processedAtTimestamp: l
            }),
                i.add(n.id);
        });
    }),
        n.forEach((e) => {
            let { user: t, status: n, clientStatus: r, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
            null != t &&
                (x({
                    guildId: p.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: a,
                    hiddenActivities: o,
                    processedAtTimestamp: s
                }),
                i.add(t.id));
        }),
        i.delete(r),
        i.forEach(D);
}
function G(e) {
    let { presences: t } = e;
    (g = t.presencesForGuilds), (E = t.statuses), (b = t.activities), (y = t.hiddenActivities), (O = t.activityMetadata);
}
function B(e) {
    let { presences: t } = e;
    k(p.ME),
        t.forEach((e) => {
            let { user: t, status: n, clientStatus: r, activities: i, hiddenActivities: a, processedAtTimestamp: o } = e;
            null != t &&
                L({
                    guildId: p.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: i,
                    hiddenActivities: a,
                    processedAtTimestamp: o
                });
        });
}
function V(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
        L({
            guildId: t.id,
            userId: n.id,
            status: r,
            clientStatus: i,
            activities: a,
            hiddenActivities: o,
            processedAtTimestamp: s
        });
    });
}
function F(e) {
    let { guild: t } = e;
    k(t.id);
}
function Z(e) {
    let { guildId: t, user: n } = e;
    return M(t, n.id);
}
function H(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
            return L({
                guildId: null != t ? t : p.ME,
                userId: n.id,
                status: r,
                clientStatus: i,
                activities: a,
                hiddenActivities: o,
                processedAtTimestamp: s
            });
        })
        .some((e) => e);
}
function Y(e) {
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
                processedAtTimestamp: e.presence.processedAtTimestamp
            });
    });
}
function W(e) {
    let { guildId: t, addedMembers: n } = e;
    null == n ||
        n.forEach((e) => {
            null != e.presence &&
                L({
                    guildId: t,
                    userId: e.userId,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities,
                    hiddenActivities: e.presence.hiddenActivities,
                    processedAtTimestamp: e.presence.processedAtTimestamp
                });
        });
}
function K(e) {
    let t = f.default.getId();
    if (E[t] === e.status && b[t] === e.activities && y[t] === e.hiddenActivities) return !1;
    (E[t] = e.status), (b[t] = [...e.activities].sort(R)), (y[t] = [...e.hiddenActivities].sort(R)), delete O[t];
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
        (E[f.default.getId()] = e), (b[f.default.getId()] = [...t].sort(R));
    }
    getStatus(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.Skl.OFFLINE,
            a = _.default.getUser(e);
        if ((null != a && a.hasFlag(p.xW$.BOT_HTTP_INTERACTIONS) && (i = p.Skl.UNKNOWN), null == a ? void 0 : a.isClyde())) return p.Skl.ONLINE;
        if (null == r) return null != (t = E[e]) ? t : i;
        let o = I(e, r);
        return null != (n = null == o ? void 0 : o.status) ? n : i;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) {
            var n;
            return null != (n = b[e]) ? n : m;
        }
        let r = I(e, t);
        return null == r || null == r.activities ? m : r.activities;
    }
    getHiddenActivities(e) {
        var t, n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == i ? (null != (n = y[e]) ? n : m) : null != (r = null == (t = I(e, i)) ? void 0 : t.hiddenActivities) ? r : m;
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== p.IIU.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of d.default.keys(b))
            for (let r of b[n])
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
        return d.default.keys(b);
    }
    isMobileOnline(e) {
        let t = v[e];
        return null != t && t[p.X5t.MOBILE] === p.Skl.ONLINE && t[p.X5t.DESKTOP] !== p.Skl.ONLINE;
    }
    getClientStatus(e) {
        return v[e];
    }
    getState() {
        return {
            presencesForGuilds: g,
            statuses: E,
            activities: b,
            hiddenActivities: y,
            activityMetadata: O,
            clientStatuses: v
        };
    }
}
h(q, 'displayName', 'PresenceStore');
let Q = new q(c.Z, {
    CONNECTION_OPEN: j,
    CONNECTION_OPEN_SUPPLEMENTAL: U,
    OVERLAY_INITIALIZE: G,
    GUILD_CREATE: V,
    GUILD_DELETE: F,
    GUILD_MEMBER_REMOVE: Z,
    PRESENCE_UPDATES: H,
    PRESENCES_REPLACE: B,
    ACTIVITY_METADATA_UPDATE: z,
    THREAD_MEMBER_LIST_UPDATE: Y,
    THREAD_MEMBERS_UPDATE: W,
    SELF_PRESENCE_STORE_UPDATE: K
});
