(n.d(t, {
    Z: () => et,
    f: () => L
}),
    n(539854),
    n(388685),
    n(361932),
    n(187205),
    n(583741),
    n(642613));
var r,
    i = n(348327),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(122810),
    d = n(106301),
    f = n(920828),
    _ = n(355281),
    p = n(509003),
    h = n(709054),
    m = n(314897),
    g = n(594174),
    E = n(981631);
function b(e, t, n) {
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
let y = Object.freeze([]),
    O = {},
    v = {},
    I = {},
    T = {},
    S = {},
    A = {};
function N(e, t) {
    let n = O[e];
    return null != n ? n[t] : null;
}
let C = (e) => {
    switch (e.type) {
        case E.IIU.CUSTOM_STATUS:
            return 4;
        case E.IIU.COMPETING:
            return 3;
        case E.IIU.STREAMING:
            return 2;
        case E.IIU.PLAYING:
            return 1;
        default:
            return 0;
    }
};
function R(e, t) {
    return C(t) - C(e);
}
let P = (e) => +!!(0, u.Z)(e);
function w(e, t) {
    return P(t) - P(e);
}
function D(e, t) {
    var n, r;
    return (null != (n = t.created_at) ? n : 0) - (null != (r = e.created_at) ? r : 0);
}
function L(e, t) {
    return R(e, t) || w(e, t) || D(e, t);
}
function x(e, t) {
    if (t === m.default.getId())
        return {
            visible: e,
            hidden: []
        };
    let n = _.m.getCurrentConfig({ location: 'presence_filtering' }, { autoTrackExposure: !1 }).enabled ? e : e.map((e) => (0, p.Jc)(e)),
        r = f.R.getCurrentConfig({ location: 'presence_filtering' }, { autoTrackExposure: !1 });
    if (!r.filterGamePresence && !r.filterRichPresence)
        return {
            visible: n,
            hidden: []
        };
    let i = [],
        a = [];
    for (let e of n) {
        if (e.type !== E.IIU.PLAYING) {
            i.push(e);
            continue;
        }
        let t = null != e.application_id && (0, u.Z)(e);
        r.filterGamePresence ? t && a.push(e) : r.filterRichPresence && t ? a.push(e) : i.push(e);
    }
    return {
        visible: i,
        hidden: a
    };
}
function k(e) {
    if ((delete v[e], delete I[e], delete T[e], delete S[e], null == O[e])) return;
    let t = Object.values(O[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                r = e.processedAtTimestamp,
                i = null != t.activities ? t.activities.length : 0,
                a = null != e.activities ? e.activities.length : 0;
            return n > r || (n === r && i > a) ? t : e;
        }, t[0]);
    n.status !== E.Skl.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((v[e] = n.status),
          (I[e] = n.activities),
          (T[e] = M(
              Object.values(t).flatMap((e) => {
                  var t;
                  return null != (t = e.hiddenActivities) ? t : [];
              })
          )),
          null != n.clientStatus && (S[e] = n.clientStatus))
        : s().every(O[e], (e) => e.status === E.Skl.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length))
          ? delete O[e]
          : n.status === E.Skl.OFFLINE &&
            t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (T[e] = M(
                Object.values(t).flatMap((e) => {
                    var t;
                    return null != (t = e.hiddenActivities) ? t : [];
                })
            ));
}
function M(e) {
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
function j(e) {
    let t = O[e];
    if (null == t) return;
    let n = s().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    if (n.status !== E.Skl.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) {
        var r;
        ((v[e] = n.status), (I[e] = n.activities), (T[e] = null != (r = n.hiddenActivities) ? r : []), null != n.clientStatus && (S[e] = n.clientStatus));
    }
}
function U(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: o, hiddenActivities: s, processedAtTimestamp: l } = e;
    if (n === m.default.getId()) return !1;
    let c = r === E.Skl.OFFLINE && (null == s || 0 === s.length),
        u = O[n];
    if (null == u) {
        if (c) return !1;
        u = O[n] = {};
    }
    if (c)
        u[t] = {
            status: r,
            clientStatus: i,
            activities: y,
            hiddenActivities: y,
            processedAtTimestamp: l
        };
    else {
        let { visible: e, hidden: c } = x(o.length > 1 ? [...o].sort(L) : o, n),
            d = M([...(null != s ? s : []), ...c]),
            f = u[t];
        ((o = null != f && a()(f.activities, e) ? f.activities : e),
            (u[t] = {
                status: r,
                clientStatus: i,
                activities: o,
                hiddenActivities: d,
                processedAtTimestamp: l
            }));
    }
    return (delete A[n], k(n), !0);
}
function G(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
    if (n === m.default.getId()) return;
    let l = r === E.Skl.OFFLINE && (null == o || 0 === o.length),
        c = O[n];
    if (null == c) {
        if (l) return;
        c = O[n] = {};
    }
    if (l)
        c[t] = {
            status: r,
            clientStatus: i,
            activities: y,
            hiddenActivities: y,
            processedAtTimestamp: s
        };
    else {
        let { visible: e, hidden: l } = x(a.length > 1 ? [...a].sort(L) : a, n),
            u = M([...(null != o ? o : []), ...l]);
        c[t] = {
            status: r,
            clientStatus: i,
            activities: e,
            hiddenActivities: u,
            processedAtTimestamp: s
        };
    }
}
function B(e, t) {
    if (t === m.default.getId()) return !1;
    let n = O[t];
    if (null == n || null == n[e]) return !1;
    (delete n[e], 0 === Object.keys(n).length && delete O[t], k(t));
}
function V(e) {
    for (let t of h.default.keys(O)) B(e, t);
}
function F() {
    return !0;
}
function Z(e) {
    let { guilds: t, presences: n } = e,
        r = m.default.getId();
    ((O = {}), (A = {}), (v = { [r]: v[r] }), (I = { [r]: I[r] }), (T = { [r]: T[r] }), (S = { [r]: {} }));
    let i = new Set();
    (t.forEach((e) => {
        e.presences.forEach((t) => {
            let { user: n, status: r, clientStatus: a, activities: o, hiddenActivities: s, processedAtTimestamp: l } = t;
            (G({
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
                (G({
                    guildId: E.ME,
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
        i.forEach(j));
}
function H(e) {
    let { presences: t } = e;
    ((O = t.presencesForGuilds), (v = t.statuses), (I = t.activities), (T = t.hiddenActivities), (A = t.activityMetadata));
}
function Y(e) {
    let { presences: t } = e;
    (V(E.ME),
        t.forEach((e) => {
            let { user: t, status: n, clientStatus: r, activities: i, hiddenActivities: a, processedAtTimestamp: o } = e;
            null != t &&
                U({
                    guildId: E.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: i,
                    hiddenActivities: a,
                    processedAtTimestamp: o
                });
        }));
}
function W(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
        U({
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
function K(e) {
    let { guild: t } = e;
    V(t.id);
}
function z(e) {
    let { guildId: t, user: n } = e;
    return B(t, n.id);
}
function q(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
            return U({
                guildId: null != t ? t : E.ME,
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
function X(e) {
    let { guildId: t, members: n } = e;
    n.forEach((e) => {
        null != e.presence &&
            U({
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
function Q(e) {
    let { guildId: t, addedMembers: n } = e;
    null == n ||
        n.forEach((e) => {
            null != e.presence &&
                U({
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
function J(e) {
    let t = m.default.getId();
    if (v[t] === e.status && I[t] === e.activities && T[t] === e.hiddenActivities) return !1;
    ((v[t] = e.status), (I[t] = [...e.activities].sort(L)), (T[t] = [...e.hiddenActivities].sort(L)), delete A[t]);
}
function $(e) {
    let { userId: t, metadata: n } = e;
    return ((A[t] = n), !1);
}
class ee extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(m.default, d.Z);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        ((v[m.default.getId()] = e), (I[m.default.getId()] = [...t].sort(L)));
    }
    getStatus(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Skl.OFFLINE,
            a = g.default.getUser(e);
        if ((null != a && a.hasFlag(E.xW$.BOT_HTTP_INTERACTIONS) && (i = E.Skl.UNKNOWN), null == r)) return null != (t = v[e]) ? t : i;
        let o = N(e, r);
        return null != (n = null == o ? void 0 : o.status) ? n : i;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) {
            var n;
            return null != (n = I[e]) ? n : y;
        }
        let r = N(e, t);
        return null == r || null == r.activities ? y : r.activities;
    }
    getHiddenActivities(e) {
        var t, n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == i ? (null != (n = T[e]) ? n : y) : null != (r = null == (t = N(e, i)) ? void 0 : t.hiddenActivities) ? r : y;
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== E.IIU.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of h.default.keys(I))
            for (let r of I[n])
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
        return A[e];
    }
    getUserIds() {
        return h.default.keys(I);
    }
    isMobileOnline(e) {
        let t = S[e];
        return null != t && t[E.X5t.MOBILE] === E.Skl.ONLINE && t[E.X5t.DESKTOP] !== E.Skl.ONLINE;
    }
    getClientStatus(e) {
        return S[e];
    }
    getState() {
        return {
            presencesForGuilds: O,
            statuses: v,
            activities: I,
            hiddenActivities: T,
            activityMetadata: A,
            clientStatuses: S
        };
    }
}
b(ee, 'displayName', 'PresenceStore');
let et = new ee(c.Z, {
    CONNECTION_OPEN: F,
    CONNECTION_OPEN_SUPPLEMENTAL: Z,
    OVERLAY_INITIALIZE: H,
    GUILD_CREATE: W,
    GUILD_DELETE: K,
    GUILD_MEMBER_REMOVE: z,
    PRESENCE_UPDATES: q,
    PRESENCES_REPLACE: Y,
    ACTIVITY_METADATA_UPDATE: $,
    THREAD_MEMBER_LIST_UPDATE: X,
    THREAD_MEMBERS_UPDATE: Q,
    SELF_PRESENCE_STORE_UPDATE: J
});
