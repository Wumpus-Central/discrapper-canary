(n.d(t, {
    Z: () => Q,
    f: () => P
}),
    n(361932),
    n(187205),
    n(388685),
    n(583741),
    n(642613),
    n(539854));
var r,
    i = n(348327),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(122810),
    d = n(106301),
    _ = n(709054),
    f = n(314897),
    p = n(594174),
    h = n(981631);
function m(e, t, n) {
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
let g = Object.freeze([]),
    E = {},
    b = {},
    y = {},
    O = {},
    v = {},
    I = {};
function T(e, t) {
    let n = E[e];
    return null != n ? n[t] : null;
}
let S = (e) => {
    switch (e.type) {
        case h.IIU.CUSTOM_STATUS:
            return 4;
        case h.IIU.COMPETING:
            return 3;
        case h.IIU.STREAMING:
            return 2;
        case h.IIU.PLAYING:
            return 1;
        default:
            return 0;
    }
};
function A(e, t) {
    return S(t) - S(e);
}
let N = (e) => +!!(0, u.Z)(e);
function C(e, t) {
    return N(t) - N(e);
}
function R(e, t) {
    var n, r;
    return (null != (n = t.created_at) ? n : 0) - (null != (r = e.created_at) ? r : 0);
}
function P(e, t) {
    return A(e, t) || C(e, t) || R(e, t);
}
function w(e) {
    if ((delete b[e], delete y[e], delete O[e], delete v[e], null == E[e])) return;
    let t = Object.values(E[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                r = e.processedAtTimestamp,
                i = null != t.activities ? t.activities.length : 0,
                a = null != e.activities ? e.activities.length : 0;
            return n > r || (n === r && i > a) ? t : e;
        }, t[0]);
    n.status !== h.Skl.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((b[e] = n.status),
          (y[e] = n.activities),
          (O[e] = D(
              Object.values(t).flatMap((e) => {
                  var t;
                  return null != (t = e.hiddenActivities) ? t : [];
              })
          )),
          null != n.clientStatus && (v[e] = n.clientStatus))
        : s().every(E[e], (e) => e.status === h.Skl.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length))
          ? delete E[e]
          : n.status === h.Skl.OFFLINE &&
            t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (O[e] = D(
                Object.values(t).flatMap((e) => {
                    var t;
                    return null != (t = e.hiddenActivities) ? t : [];
                })
            ));
}
function D(e) {
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
function L(e) {
    let t = E[e];
    if (null == t) return;
    let n = s().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    if (n.status !== h.Skl.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) {
        var r;
        ((b[e] = n.status), (y[e] = n.activities), (O[e] = null != (r = n.hiddenActivities) ? r : []), null != n.clientStatus && (v[e] = n.clientStatus));
    }
}
function x(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: o, hiddenActivities: s, processedAtTimestamp: l } = e;
    if (n === f.default.getId()) return !1;
    let c = r === h.Skl.OFFLINE && (null == s || 0 === s.length),
        u = E[n];
    if (null == u) {
        if (c) return !1;
        u = E[n] = {};
    }
    if (c)
        u[t] = {
            status: r,
            clientStatus: i,
            activities: g,
            hiddenActivities: g,
            processedAtTimestamp: l
        };
    else {
        let e = o.length > 1 ? [...o].sort(P) : o,
            n = u[t];
        ((o = null != n && a()(n.activities, e) ? n.activities : e),
            (u[t] = {
                status: r,
                clientStatus: i,
                activities: o,
                hiddenActivities: s,
                processedAtTimestamp: l
            }));
    }
    return (delete I[n], w(n), !0);
}
function M(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
    if (n === f.default.getId()) return;
    let l = r === h.Skl.OFFLINE && (null == o || 0 === o.length),
        c = E[n];
    if (null == c) {
        if (l) return;
        c = E[n] = {};
    }
    if (l)
        c[t] = {
            status: r,
            clientStatus: i,
            activities: g,
            hiddenActivities: g,
            processedAtTimestamp: s
        };
    else {
        let e = a.length > 1 ? [...a].sort(P) : a;
        c[t] = {
            status: r,
            clientStatus: i,
            activities: e,
            hiddenActivities: o,
            processedAtTimestamp: s
        };
    }
}
function k(e, t) {
    if (t === f.default.getId()) return !1;
    let n = E[t];
    if (null == n || null == n[e]) return !1;
    (delete n[e], 0 === Object.keys(n).length && delete E[t], w(t));
}
function j(e) {
    for (let t of _.default.keys(E)) k(e, t);
}
function U() {
    return !0;
}
function G(e) {
    let { guilds: t, presences: n } = e,
        r = f.default.getId();
    ((E = {}), (I = {}), (b = { [r]: b[r] }), (y = { [r]: y[r] }), (O = { [r]: O[r] }), (v = { [r]: {} }));
    let i = new Set();
    (t.forEach((e) => {
        e.presences.forEach((t) => {
            let { user: n, status: r, clientStatus: a, activities: o, hiddenActivities: s, processedAtTimestamp: l } = t;
            (M({
                guildId: e.id,
                userId: n.id,
                status: r,
                clientStatus: a,
                activities: o,
                hiddenActivities: s,
                processedAtTimestamp: l
            }),
                i.add(n.id));
        });
    }),
        n.forEach((e) => {
            let { user: t, status: n, clientStatus: r, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
            null != t &&
                (M({
                    guildId: h.ME,
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
        i.forEach(L));
}
function B(e) {
    let { presences: t } = e;
    ((E = t.presencesForGuilds), (b = t.statuses), (y = t.activities), (O = t.hiddenActivities), (I = t.activityMetadata));
}
function V(e) {
    let { presences: t } = e;
    (j(h.ME),
        t.forEach((e) => {
            let { user: t, status: n, clientStatus: r, activities: i, hiddenActivities: a, processedAtTimestamp: o } = e;
            null != t &&
                x({
                    guildId: h.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: i,
                    hiddenActivities: a,
                    processedAtTimestamp: o
                });
        }));
}
function F(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
        x({
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
function Z(e) {
    let { guild: t } = e;
    j(t.id);
}
function H(e) {
    let { guildId: t, user: n } = e;
    return k(t, n.id);
}
function Y(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
            return x({
                guildId: null != t ? t : h.ME,
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
                hiddenActivities: e.presence.hiddenActivities,
                processedAtTimestamp: e.presence.processedAtTimestamp
            });
    });
}
function K(e) {
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
                    hiddenActivities: e.presence.hiddenActivities,
                    processedAtTimestamp: e.presence.processedAtTimestamp
                });
        });
}
function z(e) {
    let t = f.default.getId();
    if (b[t] === e.status && y[t] === e.activities && O[t] === e.hiddenActivities) return !1;
    ((b[t] = e.status), (y[t] = [...e.activities].sort(P)), (O[t] = [...e.hiddenActivities].sort(P)), delete I[t]);
}
function q(e) {
    let { userId: t, metadata: n } = e;
    return ((I[t] = n), !1);
}
class X extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(f.default, d.Z);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        ((b[f.default.getId()] = e), (y[f.default.getId()] = [...t].sort(P)));
    }
    getStatus(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.Skl.OFFLINE,
            a = p.default.getUser(e);
        if ((null != a && a.hasFlag(h.xW$.BOT_HTTP_INTERACTIONS) && (i = h.Skl.UNKNOWN), null == r)) return null != (t = b[e]) ? t : i;
        let o = T(e, r);
        return null != (n = null == o ? void 0 : o.status) ? n : i;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) {
            var n;
            return null != (n = y[e]) ? n : g;
        }
        let r = T(e, t);
        return null == r || null == r.activities ? g : r.activities;
    }
    getHiddenActivities(e) {
        var t, n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == i ? (null != (n = O[e]) ? n : g) : null != (r = null == (t = T(e, i)) ? void 0 : t.hiddenActivities) ? r : g;
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== h.IIU.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of _.default.keys(y))
            for (let r of y[n])
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
        return (r && (i = i.concat(this.getHiddenActivities(e, n))), i.find(t));
    }
    getActivityMetadata(e) {
        return I[e];
    }
    getUserIds() {
        return _.default.keys(y);
    }
    isMobileOnline(e) {
        let t = v[e];
        return null != t && t[h.X5t.MOBILE] === h.Skl.ONLINE && t[h.X5t.DESKTOP] !== h.Skl.ONLINE;
    }
    getClientStatus(e) {
        return v[e];
    }
    getState() {
        return {
            presencesForGuilds: E,
            statuses: b,
            activities: y,
            hiddenActivities: O,
            activityMetadata: I,
            clientStatuses: v
        };
    }
}
m(X, 'displayName', 'PresenceStore');
let Q = new X(c.Z, {
    CONNECTION_OPEN: U,
    CONNECTION_OPEN_SUPPLEMENTAL: G,
    OVERLAY_INITIALIZE: B,
    GUILD_CREATE: F,
    GUILD_DELETE: Z,
    GUILD_MEMBER_REMOVE: H,
    PRESENCE_UPDATES: Y,
    PRESENCES_REPLACE: V,
    ACTIVITY_METADATA_UPDATE: q,
    THREAD_MEMBER_LIST_UPDATE: W,
    THREAD_MEMBERS_UPDATE: K,
    SELF_PRESENCE_STORE_UPDATE: z
});
