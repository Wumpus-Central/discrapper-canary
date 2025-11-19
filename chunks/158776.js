n.d(t, {
    Z: () => ea,
    f: () => x,
}),
    n(539854),
    n(388685),
    n(642613),
    n(361932),
    n(187205),
    n(583741);
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
                  writable: !0,
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
    A = {},
    C = {};
function N(e, t) {
    let n = O[e];
    return null != n ? n[t] : null;
}
let R = (e) => {
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
function P(e, t) {
    return R(t) - R(e);
}
let D = (e) => +!!(0, u.Z)(e);
function w(e, t) {
    return D(t) - D(e);
}
function L(e, t) {
    var n, r;
    return (null != (n = t.created_at) ? n : 0) - (null != (r = e.created_at) ? r : 0);
}
function x(e, t) {
    return P(e, t) || w(e, t) || L(e, t);
}
function M(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === E.IIU.PLAYING ? n.push(r) : t.push(r);
    return n.length <= 1 ? e : [...t, [...n].sort(x)[0]].sort(x);
}
function j(e, t) {
    (I[e] = t), (T[e] = M(t));
}
function k(e) {
    delete I[e], delete T[e];
}
function U(e, t) {
    if (t === m.default.getId())
        return {
            visible: e,
            hidden: [],
        };
    let n = _.m.getConfig({ location: "presence_filtering" }).enabled
            ? e.map((e) => (0, p.FT)(e))
            : e.map((e) => (0, p.Jc)(e)),
        r = f.R.getCurrentConfig({ location: "presence_filtering" }, { autoTrackExposure: !1 });
    if (!r.filterGamePresence && !r.filterRichPresence)
        return {
            visible: n,
            hidden: [],
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
        hidden: a,
    };
}
function G(e) {
    if ((delete v[e], k(e), delete S[e], delete A[e], null == O[e])) return;
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
          j(e, n.activities),
          (S[e] = B(
              Object.values(t).flatMap((e) => {
                  var t;
                  return null != (t = e.hiddenActivities) ? t : [];
              }),
          )),
          null != n.clientStatus && (A[e] = n.clientStatus))
        : s().every(
                O[e],
                (e) => e.status === E.Skl.OFFLINE && (null == e.hiddenActivities || 0 === e.hiddenActivities.length),
            )
          ? delete O[e]
          : n.status === E.Skl.OFFLINE &&
            t.some((e) => null != e.hiddenActivities && e.hiddenActivities.length > 0) &&
            (S[e] = B(
                Object.values(t).flatMap((e) => {
                    var t;
                    return null != (t = e.hiddenActivities) ? t : [];
                }),
            ));
}
function B(e) {
    return 0 === e.length
        ? e
        : [
              ...new Map(
                  [...e].reverse().map((e) => {
                      var t;
                      return ["".concat(e.application_id, ":").concat(null == (t = e.party) ? void 0 : t.id), e];
                  }),
              ).values(),
          ];
}
function Z(e) {
    let t = O[e];
    if (null == t) return;
    let n = s().maxBy(Object.values(t), (e) => e.processedAtTimestamp);
    if (n.status !== E.Skl.OFFLINE || (null != n.hiddenActivities && n.hiddenActivities.length > 0)) {
        var r;
        (v[e] = n.status),
            j(e, n.activities),
            (S[e] = null != (r = n.hiddenActivities) ? r : []),
            null != n.clientStatus && (A[e] = n.clientStatus);
    }
}
function F(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: i,
        activities: o,
        hiddenActivities: s,
        processedAtTimestamp: l,
    } = e;
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
            processedAtTimestamp: l,
        };
    else {
        let { visible: e, hidden: c } = U(o.length > 1 ? [...o].sort(x) : o, n),
            d = B([...(null != s ? s : []), ...c]),
            f = u[t];
        (o = null != f && a()(f.activities, e) ? f.activities : e),
            (u[t] = {
                status: r,
                clientStatus: i,
                activities: o,
                hiddenActivities: d,
                processedAtTimestamp: l,
            });
    }
    return delete C[n], G(n), !0;
}
function V(e) {
    let {
        guildId: t,
        userId: n,
        status: r,
        clientStatus: i,
        activities: a,
        hiddenActivities: o,
        processedAtTimestamp: s,
    } = e;
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
            processedAtTimestamp: s,
        };
    else {
        let { visible: e, hidden: l } = U(a.length > 1 ? [...a].sort(x) : a, n),
            u = B([...(null != o ? o : []), ...l]);
        c[t] = {
            status: r,
            clientStatus: i,
            activities: e,
            hiddenActivities: u,
            processedAtTimestamp: s,
        };
    }
}
function H(e, t) {
    if (t === m.default.getId()) return !1;
    let n = O[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete O[t], G(t);
}
function Y(e) {
    for (let t of h.default.keys(O)) H(e, t);
}
function W() {
    return !0;
}
function K(e) {
    let { guilds: t, presences: n } = e,
        r = m.default.getId();
    (O = {}),
        (C = {}),
        (v = { [r]: v[r] }),
        (I = { [r]: I[r] }),
        (T = { [r]: T[r] }),
        (S = { [r]: S[r] }),
        (A = { [r]: {} });
    let i = new Set();
    t.forEach((e) => {
        e.presences.forEach((t) => {
            let {
                user: n,
                status: r,
                clientStatus: a,
                activities: o,
                hiddenActivities: s,
                processedAtTimestamp: l,
            } = t;
            V({
                guildId: e.id,
                userId: n.id,
                status: r,
                clientStatus: a,
                activities: o,
                hiddenActivities: s,
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
                activities: a,
                hiddenActivities: o,
                processedAtTimestamp: s,
            } = e;
            null != t &&
                (V({
                    guildId: E.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: a,
                    hiddenActivities: o,
                    processedAtTimestamp: s,
                }),
                i.add(t.id));
        }),
        i.delete(r),
        i.forEach(Z);
}
function z(e) {
    let { presences: t } = e;
    (O = t.presencesForGuilds),
        (v = t.statuses),
        (I = t.activities),
        (S = t.hiddenActivities),
        (C = t.activityMetadata);
}
function q(e) {
    let { presences: t } = e;
    Y(E.ME),
        t.forEach((e) => {
            let {
                user: t,
                status: n,
                clientStatus: r,
                activities: i,
                hiddenActivities: a,
                processedAtTimestamp: o,
            } = e;
            null != t &&
                F({
                    guildId: E.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: i,
                    hiddenActivities: a,
                    processedAtTimestamp: o,
                });
        });
}
function X(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: r, clientStatus: i, activities: a, hiddenActivities: o, processedAtTimestamp: s } = e;
        F({
            guildId: t.id,
            userId: n.id,
            status: r,
            clientStatus: i,
            activities: a,
            hiddenActivities: o,
            processedAtTimestamp: s,
        });
    });
}
function Q(e) {
    let { guild: t } = e;
    Y(t.id);
}
function J(e) {
    let { guildId: t, user: n } = e;
    return H(t, n.id);
}
function $(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let {
                guildId: t,
                user: n,
                status: r,
                clientStatus: i,
                activities: a,
                hiddenActivities: o,
                processedAtTimestamp: s,
            } = e;
            return F({
                guildId: null != t ? t : E.ME,
                userId: n.id,
                status: r,
                clientStatus: i,
                activities: a,
                hiddenActivities: o,
                processedAtTimestamp: s,
            });
        })
        .some((e) => e);
}
function ee(e) {
    let { guildId: t, members: n } = e;
    n.forEach((e) => {
        null != e.presence &&
            F({
                guildId: t,
                userId: e.user_id,
                status: e.presence.status,
                clientStatus: e.presence.clientStatus,
                activities: e.presence.activities,
                hiddenActivities: e.presence.hiddenActivities,
                processedAtTimestamp: e.presence.processedAtTimestamp,
            });
    });
}
function et(e) {
    let { guildId: t, addedMembers: n } = e;
    null == n ||
        n.forEach((e) => {
            null != e.presence &&
                F({
                    guildId: t,
                    userId: e.userId,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities,
                    hiddenActivities: e.presence.hiddenActivities,
                    processedAtTimestamp: e.presence.processedAtTimestamp,
                });
        });
}
function en(e) {
    let t = m.default.getId();
    if (v[t] === e.status && I[t] === e.activities && S[t] === e.hiddenActivities) return !1;
    (v[t] = e.status), j(t, [...e.activities].sort(x)), (S[t] = [...e.hiddenActivities].sort(x)), delete C[t];
}
function er(e) {
    let { userId: t, metadata: n } = e;
    return (C[t] = n), !1;
}
class ei extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(m.default, d.Z, g.default);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (v[m.default.getId()] = e), j(m.default.getId(), [...t].sort(x));
    }
    getStatus(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Skl.OFFLINE,
            a = g.default.getUser(e);
        if ((null != a && a.hasFlag(E.xW$.BOT_HTTP_INTERACTIONS) && (i = E.Skl.UNKNOWN), null == r))
            return null != (t = v[e]) ? t : i;
        let o = N(e, r);
        return null != (n = null == o ? void 0 : o.status) ? n : i;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) {
            var n;
            return null != (n = T[e]) ? n : y;
        }
        let r = N(e, t);
        return null == r || null == r.activities ? y : M(r.activities);
    }
    getUnfilteredActivities(e) {
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
        return null == i
            ? null != (n = S[e])
                ? n
                : y
            : null != (r = null == (t = N(e, i)) ? void 0 : t.hiddenActivities)
              ? r
              : y;
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== E.IIU.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of h.default.keys(T))
            for (let r of T[n])
                r.application_id === e &&
                    t.push({
                        userId: n,
                        activity: r,
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
        return C[e];
    }
    getUserIds() {
        return h.default.keys(I);
    }
    isMobileOnline(e) {
        let t = A[e];
        return null != t && t[E.X5t.MOBILE] === E.Skl.ONLINE && t[E.X5t.DESKTOP] !== E.Skl.ONLINE;
    }
    getClientStatus(e) {
        return A[e];
    }
    getState() {
        return {
            presencesForGuilds: O,
            statuses: v,
            activities: I,
            filteredActivities: T,
            hiddenActivities: S,
            activityMetadata: C,
            clientStatuses: A,
        };
    }
}
b(ei, "displayName", "PresenceStore");
let ea = new ei(c.Z, {
    CONNECTION_OPEN: W,
    CONNECTION_OPEN_SUPPLEMENTAL: K,
    OVERLAY_INITIALIZE: z,
    GUILD_CREATE: X,
    GUILD_DELETE: Q,
    GUILD_MEMBER_REMOVE: J,
    PRESENCE_UPDATES: $,
    PRESENCES_REPLACE: q,
    ACTIVITY_METADATA_UPDATE: er,
    THREAD_MEMBER_LIST_UPDATE: ee,
    THREAD_MEMBERS_UPDATE: et,
    SELF_PRESENCE_STORE_UPDATE: en,
});
