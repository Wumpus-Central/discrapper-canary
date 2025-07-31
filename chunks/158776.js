(n.d(t, {
    Z: () => $,
    f: () => w
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
    _ = n(920828),
    f = n(709054),
    p = n(314897),
    h = n(594174),
    m = n(981631);
function g(e, t, n) {
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
let E = Object.freeze([]),
    b = {},
    y = {},
    O = {},
    v = {},
    I = {},
    T = {};
function S(e, t) {
    let n = b[e];
    return null != n ? n[t] : null;
}
let A = (e) => {
    switch (e.type) {
        case m.IIU.CUSTOM_STATUS:
            return 4;
        case m.IIU.COMPETING:
            return 3;
        case m.IIU.STREAMING:
            return 2;
        case m.IIU.PLAYING:
            return 1;
        default:
            return 0;
    }
};
function N(e, t) {
    return A(t) - A(e);
}
let C = (e) => +!!(0, u.Z)(e);
function R(e, t) {
    return C(t) - C(e);
}
function P(e, t) {
    var n, r;
    return (null != (n = t.created_at) ? n : 0) - (null != (r = e.created_at) ? r : 0);
}
function w(e, t) {
    return N(e, t) || R(e, t) || P(e, t);
}
function D(e, t) {
    if (t === p.default.getId())
        return {
            visible: e,
            hidden: []
        };
    let n = _.R.getCurrentConfig({ location: 'presence_filtering' }, { autoTrackExposure: !1 });
    if (!n.filterGamePresence && !n.filterRichPresence)
        return {
            visible: e,
            hidden: []
        };
    let r = [],
        i = [];
    for (let t of e) {
        if (t.type !== m.IIU.PLAYING) {
            r.push(t);
            continue;
        }
        let e = null != t.application_id && (0, u.Z)(t);
        n.filterGamePresence ? e && i.push(t) : n.filterRichPresence && e ? i.push(t) : r.push(t);
    }
    return {
        visible: r,
        hidden: i
    };
}
function L(e) {
    if ((delete y[e], delete O[e], delete v[e], delete I[e], null == b[e])) return;
    let t = Object.values(b[e]),
        n = t.reduce((e, t) => {
            let n = t.processedAtTimestamp,
                r = e.processedAtTimestamp,
                i = null != t.activities ? t.activities.length : 0,
                a = null != e.activities ? e.activities.length : 0;
            return n > r || (n === r && i > a) ? t : e;
        }, t[0]);
    n.status !== m.Skl.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)
        ? ((y[e] = n.status),
          (O[e] = n.activities),
          (v[e] = x(
              Object.values(t).flatMap((e) => {
                  var t;
                  return null != (t = e.hiddenActivities) ? t : [];
              })
          )),
          null != n.clientStatus && (I[e] = n.clientStatus))
        : s().every(b[e], (e) => e.status === m.Skl.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length))
          ? delete b[e]
          : n.status === m.Skl.OFFLINE &&
            t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (v[e] = x(
                Object.values(t).flatMap((e) => {
                    var t;
                    return null != (t = e.hiddenActivities) ? t : [];
                })
            ));
}
function x(e) {
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
function k(e) {
    let t = b[e];
    if (null == t) return;
    let n = s().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    if (n.status !== m.Skl.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) {
        var r;
        ((y[e] = n.status), (O[e] = n.activities), (v[e] = null != (r = n.hiddenActivities) ? r : []), null != n.clientStatus && (I[e] = n.clientStatus));
    }
}
function M(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: o, hiddenActivities: s, processedAtTimestamp: l } = e;
    if (n === p.default.getId()) return !1;
    let c = r === m.Skl.OFFLINE && (null == s || 0 === s.length),
        u = b[n];
    if (null == u) {
        if (c) return !1;
        u = b[n] = {};
    }
    if (c)
        u[t] = {
            status: r,
            clientStatus: i,
            activities: E,
            hiddenActivities: E,
            processedAtTimestamp: l
        };
    else {
        let { visible: e, hidden: c } = D(o.length > 1 ? [...o].sort(w) : o, n),
            d = x([...(null != s ? s : []), ...c]),
            _ = u[t];
        ((o = null != _ && a()(_.activities, e) ? _.activities : e),
            (u[t] = {
                status: r,
                clientStatus: i,
                activities: o,
                hiddenActivities: d,
                processedAtTimestamp: l
            }));
    }
    return (delete T[n], L(n), !0);
}
function j(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
    if (n === p.default.getId()) return;
    let l = r === m.Skl.OFFLINE && (null == o || 0 === o.length),
        c = b[n];
    if (null == c) {
        if (l) return;
        c = b[n] = {};
    }
    if (l)
        c[t] = {
            status: r,
            clientStatus: i,
            activities: E,
            hiddenActivities: E,
            processedAtTimestamp: s
        };
    else {
        let { visible: e, hidden: l } = D(a.length > 1 ? [...a].sort(w) : a, n),
            u = x([...(null != o ? o : []), ...l]);
        c[t] = {
            status: r,
            clientStatus: i,
            activities: e,
            hiddenActivities: u,
            processedAtTimestamp: s
        };
    }
}
function U(e, t) {
    if (t === p.default.getId()) return !1;
    let n = b[t];
    if (null == n || null == n[e]) return !1;
    (delete n[e], 0 === Object.keys(n).length && delete b[t], L(t));
}
function G(e) {
    for (let t of f.default.keys(b)) U(e, t);
}
function B() {
    return !0;
}
function V(e) {
    let { guilds: t, presences: n } = e,
        r = p.default.getId();
    ((b = {}), (T = {}), (y = { [r]: y[r] }), (O = { [r]: O[r] }), (v = { [r]: v[r] }), (I = { [r]: {} }));
    let i = new Set();
    (t.forEach((e) => {
        e.presences.forEach((t) => {
            let { user: n, status: r, clientStatus: a, activities: o, hiddenActivities: s, processedAtTimestamp: l } = t;
            (j({
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
                (j({
                    guildId: m.ME,
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
        i.forEach(k));
}
function F(e) {
    let { presences: t } = e;
    ((b = t.presencesForGuilds), (y = t.statuses), (O = t.activities), (v = t.hiddenActivities), (T = t.activityMetadata));
}
function Z(e) {
    let { presences: t } = e;
    (G(m.ME),
        t.forEach((e) => {
            let { user: t, status: n, clientStatus: r, activities: i, hiddenActivities: a, processedAtTimestamp: o } = e;
            null != t &&
                M({
                    guildId: m.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: i,
                    hiddenActivities: a,
                    processedAtTimestamp: o
                });
        }));
}
function H(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
        M({
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
function Y(e) {
    let { guild: t } = e;
    G(t.id);
}
function W(e) {
    let { guildId: t, user: n } = e;
    return U(t, n.id);
}
function K(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
            return M({
                guildId: null != t ? t : m.ME,
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
function z(e) {
    let { guildId: t, members: n } = e;
    n.forEach((e) => {
        null != e.presence &&
            M({
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
function q(e) {
    let { guildId: t, addedMembers: n } = e;
    null == n ||
        n.forEach((e) => {
            null != e.presence &&
                M({
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
function X(e) {
    let t = p.default.getId();
    if (y[t] === e.status && O[t] === e.activities && v[t] === e.hiddenActivities) return !1;
    ((y[t] = e.status), (O[t] = [...e.activities].sort(w)), (v[t] = [...e.hiddenActivities].sort(w)), delete T[t]);
}
function Q(e) {
    let { userId: t, metadata: n } = e;
    return ((T[t] = n), !1);
}
class J extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(p.default, d.Z);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        ((y[p.default.getId()] = e), (O[p.default.getId()] = [...t].sort(w)));
    }
    getStatus(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Skl.OFFLINE,
            a = h.default.getUser(e);
        if ((null != a && a.hasFlag(m.xW$.BOT_HTTP_INTERACTIONS) && (i = m.Skl.UNKNOWN), null == r)) return null != (t = y[e]) ? t : i;
        let o = S(e, r);
        return null != (n = null == o ? void 0 : o.status) ? n : i;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) {
            var n;
            return null != (n = O[e]) ? n : E;
        }
        let r = S(e, t);
        return null == r || null == r.activities ? E : r.activities;
    }
    getHiddenActivities(e) {
        var t, n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null == i ? (null != (n = v[e]) ? n : E) : null != (r = null == (t = S(e, i)) ? void 0 : t.hiddenActivities) ? r : E;
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== m.IIU.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of f.default.keys(O))
            for (let r of O[n])
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
        return T[e];
    }
    getUserIds() {
        return f.default.keys(O);
    }
    isMobileOnline(e) {
        let t = I[e];
        return null != t && t[m.X5t.MOBILE] === m.Skl.ONLINE && t[m.X5t.DESKTOP] !== m.Skl.ONLINE;
    }
    getClientStatus(e) {
        return I[e];
    }
    getState() {
        return {
            presencesForGuilds: b,
            statuses: y,
            activities: O,
            hiddenActivities: v,
            activityMetadata: T,
            clientStatuses: I
        };
    }
}
g(J, 'displayName', 'PresenceStore');
let $ = new J(c.Z, {
    CONNECTION_OPEN: B,
    CONNECTION_OPEN_SUPPLEMENTAL: V,
    OVERLAY_INITIALIZE: F,
    GUILD_CREATE: H,
    GUILD_DELETE: Y,
    GUILD_MEMBER_REMOVE: W,
    PRESENCE_UPDATES: K,
    PRESENCES_REPLACE: Z,
    ACTIVITY_METADATA_UPDATE: Q,
    THREAD_MEMBER_LIST_UPDATE: z,
    THREAD_MEMBERS_UPDATE: q,
    SELF_PRESENCE_STORE_UPDATE: X
});
