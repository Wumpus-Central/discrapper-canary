"use strict";
let i;
n.d(t, { A: () => G, j: () => C }), n(321073);
var r,
    a = n(17928),
    s = n(713402),
    l = n(228366),
    o = n(870391),
    d = n(427358),
    c = n(734057),
    u = n(290863),
    _ = n(994500),
    E = n(309010),
    A = n(461213),
    h = n(287809),
    I = n(977997),
    f = n(562153),
    p = n(914853),
    T = n(956753),
    m = n(406595),
    g = n(70191),
    S = n(240516),
    N = n(652215),
    C =
        (((r = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS"),
        (r.SUGGESTIONS = "SUGGESTIONS"),
        (r.SAME_ACTIVITY = "SAME_ACTIVITY"),
        (r.ACTIVITIES = "ACTIVITIES"),
        (r.IN_GAME = "IN_GAME"),
        (r.ONLINE = "ONLINE"),
        (r.OFFLINE = "OFFLINE"),
        r);
let R = new s.J(
    function (e) {
        if ("FRIEND_REQUEST" === e.category) return ["FRIEND_REQUESTS"];
        if ("SUGGESTION" === e.category) return ["SUGGESTIONS"];
        let t = [];
        for (let n of (null != e.activityCategory && t.push(e.activityCategory), e.groupIds)) t.push(`GROUP:${n}`);
        return t;
    },
    function (e) {
        return e.sortKey;
    },
);
function O(e, t) {
    return String(Math.floor(Math.max(0, Math.min(e, Number("9".repeat(t)))))).padStart(t, "0");
}
function L(e) {
    return O(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
}
let y = new Map();
function D() {
    let e = new Map();
    for (let t of o.A.getGroups())
        for (let n of t.userIds) {
            let i = e.get(n);
            null == i && ((i = []), e.set(n, i)), i.push(t.id);
        }
    y = e;
}
function v() {
    let e = A.A.getPrimaryActivity();
    i = e?.application_id;
}
function b(e) {
    return (
        e.type === N.$pd.PLAYING ||
        e.type === N.$pd.COMPETING ||
        e.type === N.$pd.WATCHING ||
        e.type === N.$pd.STREAMING
    );
}
function M(e) {
    let t = (function (e) {
        let t = h.default.getUser(e);
        if (null == t) return null;
        let n = _.A.getRelationshipType(e),
            r = n === N.eA$.PENDING_INCOMING || n === N.eA$.PENDING_OUTGOING,
            a = _.A.isFriend(e),
            s = u.A.getActivities(e),
            l = _.A.getNickname(e),
            o = d.A.getUserAffinity(e)?.communicationProbability ?? 0;
        return r
            ? (function (e) {
                  var t, n;
                  let { userId: i, user: r, activities: a, nickname: s, relationshipType: l } = e,
                      o = _.A.getSince(i),
                      d = null != o ? new Date(o).getTime() : 0;
                  return {
                      id: i,
                      userId: i,
                      user: r,
                      activities: a,
                      nickname: s,
                      relationshipType: l,
                      category: "FRIEND_REQUEST",
                      activityCategory: null,
                      groupIds: [],
                      sortKey:
                          ((t = Number.isFinite(d) ? d : 0),
                          (n = i),
                          `REQ\0${O(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13)}\0${n}`),
                  };
              })({ userId: e, user: t, activities: s, nickname: l, relationshipType: n })
            : a
              ? (function (e) {
                    let t,
                        n,
                        r,
                        a,
                        s,
                        l,
                        o,
                        d,
                        _,
                        { userId: h, user: T, activities: S, nickname: C, affinity: R } = e,
                        { category: O, displayActivities: D } =
                            ((t = A.A.getPrimaryActivity()),
                            (n = i),
                            (r = t?.name != null && null != n),
                            (a = u.A.getStatus(h)),
                            (s = I.A.getVoiceStateForUser(h)),
                            (l = s?.channelId != null),
                            (d = (o = S.filter(b)).filter(g.A)),
                            (_ = o.filter((e) => e.application_id === n)),
                            r && _.length > 0
                                ? { category: "SAME_ACTIVITY", displayActivities: _ }
                                : d.length > 0
                                  ? { category: "IN_GAME", displayActivities: d }
                                  : l
                                    ? { category: "ACTIVITIES", displayActivities: S }
                                    : a === N.clD.ONLINE || a === N.clD.IDLE || a === N.clD.DND
                                      ? { category: "ONLINE", displayActivities: o }
                                      : { category: "OFFLINE", displayActivities: o }),
                        v = "IN_GAME" === O ? (D[0]?.name ?? null) : null,
                        M = y.get(h) ?? [],
                        [P] = m.A.isFavorite(p.x.FRIENDS, h),
                        U = E.Ay.getVoiceChannelId() ?? E.Ay.getChannelId(),
                        w = null != U ? c.A.getChannel(U)?.guild_id : null,
                        G = u.A.getStatus(h),
                        x = G === N.clD.ONLINE,
                        k = D.some(b),
                        F = G === N.clD.DND || G === N.clD.IDLE,
                        V = f.Ay.getName(w, U, T);
                    return {
                        id: h,
                        userId: h,
                        user: T,
                        activities: D,
                        nickname: C,
                        category: "FRIEND",
                        activityCategory: P ? null : O,
                        groupIds: M,
                        sortKey: (function (e) {
                            let {
                                    isOnline: t,
                                    hasDisplayableActivity: n,
                                    isDndOrIdle: i,
                                    activityCategory: r,
                                    inGameActivityName: a,
                                    affinity: s,
                                    displayName: l,
                                    userId: o,
                                } = e,
                                d = t ? "0" : "1",
                                c = n ? "0" : "1",
                                u = i ? "0" : "1",
                                _ = l.toLowerCase();
                            if ("IN_GAME" === r) {
                                let e,
                                    t = (e = a?.trim().toLowerCase() ?? "").length > 0 ? e : "\uFFFF";
                                return `FRD\0${d}\0${c}\0${u}\0${t}\0${L(s)}\0${_}\0${o}`;
                            }
                            return `FRD\0${d}\0${c}\0${u}\0${L(s)}\0${_}\0${o}`;
                        })({
                            isOnline: x,
                            hasDisplayableActivity: k,
                            isDndOrIdle: F,
                            activityCategory: O,
                            inGameActivityName: v,
                            affinity: R,
                            displayName: V,
                            userId: h,
                        }),
                    };
                })({ userId: e, user: t, activities: s, nickname: l, affinity: o })
              : (function (e) {
                    let { userId: t, user: n, activities: i, nickname: r, affinity: a } = e;
                    if (!(a > S.u.HIGH_AFFINITY_MINIMUM)) return null;
                    let s = I.A.getVoiceStateForUser(t),
                        l = s?.channelId,
                        o = null != l ? c.A.getChannel(l)?.guild_id : null,
                        d = i.length > 0 || null != l,
                        u = f.Ay.getName(o, l, n);
                    return {
                        id: t,
                        userId: t,
                        user: n,
                        activities: i,
                        nickname: r,
                        category: "SUGGESTION",
                        activityCategory: null,
                        groupIds: [],
                        sortKey: `SUG\0${d ? "0" : "1"}\0${L(a)}\0${u.toLowerCase()}\0${t}`,
                    };
                })({ userId: e, user: t, activities: s, nickname: l, affinity: o });
    })(e);
    return null == t ? R.delete(e) : R.set(e, t);
}
function P() {
    R.clear(), D(), v();
    let e = !1;
    for (let [t, n] of _.A.getMutableRelationships().entries())
        (n === N.eA$.PENDING_INCOMING || n === N.eA$.PENDING_OUTGOING) && (e = M(t) || e);
    for (let t of d.A.getUserAffinitiesMap().keys()) _.A.isFriend(t) || (e = M(t) || e);
    for (let t of _.A.getFriendIDs()) e = M(t) || e;
    return e;
}
class U extends a.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        this.waitFor(c.A, o.A, m.A, u.A, _.A, E.Ay, A.A, d.A, h.default, I.A), P();
    }
    getRows(e) {
        return [R.values(e), R.version];
    }
    getFriend(e) {
        return R.get(e);
    }
}
function w(e) {
    return (0, T.v$)(e, "FriendsWidgetFriendsStore");
}
let G = new U(
    l.h,
    __OVERLAY__
        ? {}
        : {
              POST_CONNECTION_OPEN: w(P),
              OVERLAY_INITIALIZE: w(P),
              CACHE_LOADED: w(P),
              CACHE_LOADED_LAZY: w(P),
              FRIENDS_LIST_POPOUT_MOUNTED: w(P),
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: w(function (e) {
                  return e.tab === p.x.FRIENDS && M(e.targetId);
              }),
              PRESENCE_UPDATES: w(function (e) {
                  let t = !1;
                  for (let n of e.updates) {
                      let e = n.user?.id;
                      null != e && (t = M(e) || t);
                  }
                  return t;
              }),
              PRESENCES_REPLACE: w(function (e) {
                  let t = !1;
                  for (let n of e.presences) {
                      let e = n.user?.id;
                      null != e && (t = M(e) || t);
                  }
                  return t;
              }),
              ACTIVITY_METADATA_UPDATE: w(function (e) {
                  return M(e.userId);
              }),
              VOICE_STATE_UPDATES: w(function (e) {
                  let t = !1;
                  for (let n of e.voiceStates) t = M(n.userId) || t;
                  return t;
              }),
              VOICE_CHANNEL_SELECT: w(function (e) {
                  v();
                  let t = !1;
                  for (let e of _.A.getFriendIDs()) t = M(e) || t;
                  return t;
              }),
              RELATIONSHIP_ADD: w(function (e) {
                  return M(e.relationship.id);
              }),
              RELATIONSHIP_REMOVE: w(function (e) {
                  return M(e.relationship.id);
              }),
              RELATIONSHIP_UPDATE: w(function (e) {
                  return M(e.relationship.id);
              }),
              RELATIONSHIP_PENDING_INCOMING_REMOVED: w(function (e) {
                  let t = !1;
                  for (let e of R.values("FRIEND_REQUESTS", !0))
                      e.relationshipType === N.eA$.PENDING_INCOMING && (t = M(e.userId) || t);
                  return t;
              }),
              CREATE_FRIEND_GROUP: w(function (e) {
                  return D(), !1;
              }),
              DELETE_FRIEND_GROUP: w(function (e) {
                  D();
                  let t = !1;
                  for (let e of _.A.getFriendIDs()) t = M(e) || t;
                  return t;
              }),
              ADD_USERS_TO_GROUP: w(function (e) {
                  D();
                  let t = !1;
                  for (let n of e.userIds) t = M(n) || t;
                  return t;
              }),
              REMOVE_USERS_FROM_GROUP: w(function (e) {
                  D();
                  let t = !1;
                  for (let n of e.userIds) t = M(n) || t;
                  return t;
              }),
              LOAD_USER_AFFINITIES_V2_SUCCESS: w(function (e) {
                  let t = !1;
                  for (let e of d.A.getUserAffinitiesMap().keys()) t = M(e) || t;
                  return t;
              }),
              USER_UPDATE: w(function (e) {
                  return M(e.user.id);
              }),
              CURRENT_USER_UPDATE: w(function (e) {
                  v();
                  let t = !1;
                  for (let e of _.A.getFriendIDs()) t = M(e) || t;
                  return t;
              }),
              LOGOUT: w(function () {
                  let e = R.size() > 0;
                  return R.clear(), (i = void 0), (y = new Map()), e;
              }),
          },
);
