let i;
n.d(t, { A: () => P, j: () => m }), n(321073);
var r,
    s = n(311907),
    l = n(713402),
    a = n(73153),
    u = n(870391),
    o = n(21119),
    d = n(734057),
    c = n(290863),
    h = n(994500),
    I = n(309010),
    g = n(461213),
    f = n(287809),
    A = n(977997),
    E = n(562153),
    S = n(914853),
    _ = n(956753),
    M = n(406595),
    p = n(70191),
    N = n(240516),
    T = n(652215),
    m =
        (((r = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS"),
        (r.SUGGESTIONS = "SUGGESTIONS"),
        (r.SAME_ACTIVITY = "SAME_ACTIVITY"),
        (r.ACTIVITIES = "ACTIVITIES"),
        (r.IN_GAME = "IN_GAME"),
        (r.ONLINE = "ONLINE"),
        (r.OFFLINE = "OFFLINE"),
        r);
let C = new l.J(
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
function y(e, t) {
    return String(Math.floor(Math.max(0, Math.min(e, Number("9".repeat(t)))))).padStart(t, "0");
}
function D(e) {
    return y(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
}
let U = new Map();
function O() {
    let e = new Map();
    for (let t of u.A.getGroups())
        for (let n of t.userIds) {
            let i = e.get(n);
            null == i && ((i = []), e.set(n, i)), i.push(t.id);
        }
    U = e;
}
function v() {
    let e = g.A.getPrimaryActivity();
    i = e?.application_id;
}
function G(e) {
    return (
        e.type === T.$pd.PLAYING ||
        e.type === T.$pd.COMPETING ||
        e.type === T.$pd.WATCHING ||
        e.type === T.$pd.STREAMING
    );
}
function R(e) {
    let t = (function (e) {
        let t = f.default.getUser(e);
        if (null == t) return null;
        let n = h.A.getRelationshipType(e),
            r = n === T.eA$.PENDING_INCOMING || n === T.eA$.PENDING_OUTGOING,
            s = h.A.isFriend(e),
            l = c.A.getActivities(e),
            a = h.A.getNickname(e),
            u = o.A.getUserAffinity(e)?.communicationProbability ?? 0;
        return r
            ? (function (e) {
                  var t, n;
                  let { userId: i, user: r, activities: s, nickname: l, relationshipType: a } = e,
                      u = h.A.getSince(i),
                      o = null != u ? new Date(u).getTime() : 0;
                  return {
                      id: i,
                      userId: i,
                      user: r,
                      activities: s,
                      nickname: l,
                      relationshipType: a,
                      category: "FRIEND_REQUEST",
                      activityCategory: null,
                      groupIds: [],
                      sortKey:
                          ((t = Number.isFinite(o) ? o : 0),
                          (n = i),
                          `REQ\0${y(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13)}\0${n}`),
                  };
              })({ userId: e, user: t, activities: l, nickname: a, relationshipType: n })
            : s
              ? (function (e) {
                    let t,
                        n,
                        r,
                        s,
                        l,
                        a,
                        u,
                        o,
                        h,
                        { userId: f, user: _, activities: N, nickname: m, affinity: C } = e,
                        { category: y, displayActivities: O } =
                            ((t = g.A.getPrimaryActivity()),
                            (n = i),
                            (r = t?.name != null && null != n),
                            (s = c.A.getStatus(f)),
                            (l = A.A.getVoiceStateForUser(f)),
                            (a = l?.channelId != null),
                            (o = (u = N.filter(G)).filter(p.A)),
                            (h = u.filter((e) => e.application_id === n)),
                            r && h.length > 0
                                ? { category: "SAME_ACTIVITY", displayActivities: h }
                                : o.length > 0
                                  ? { category: "IN_GAME", displayActivities: o }
                                  : a
                                    ? { category: "ACTIVITIES", displayActivities: N }
                                    : s === T.clD.ONLINE || s === T.clD.IDLE || s === T.clD.DND
                                      ? { category: "ONLINE", displayActivities: u }
                                      : { category: "OFFLINE", displayActivities: u }),
                        v = "IN_GAME" === y ? (O[0]?.name ?? null) : null,
                        R = U.get(f) ?? [],
                        [w] = M.A.isFavorite(S.x.FRIENDS, f),
                        L = I.A.getVoiceChannelId() ?? I.A.getChannelId(),
                        F = null != L ? d.A.getChannel(L)?.guild_id : null,
                        P = c.A.getStatus(f),
                        V = P === T.clD.ONLINE,
                        x = O.some(G),
                        b = P === T.clD.DND || P === T.clD.IDLE,
                        k = E.Ay.getName(F, L, _);
                    return {
                        id: f,
                        userId: f,
                        user: _,
                        activities: O,
                        nickname: m,
                        category: "FRIEND",
                        activityCategory: w ? null : y,
                        groupIds: R,
                        sortKey: (function (e) {
                            let {
                                    isOnline: t,
                                    hasDisplayableActivity: n,
                                    isDndOrIdle: i,
                                    activityCategory: r,
                                    inGameActivityName: s,
                                    affinity: l,
                                    displayName: a,
                                    userId: u,
                                } = e,
                                o = t ? "0" : "1",
                                d = n ? "0" : "1",
                                c = i ? "0" : "1",
                                h = a.toLowerCase();
                            if ("IN_GAME" === r) {
                                let e,
                                    t = (e = s?.trim().toLowerCase() ?? "").length > 0 ? e : "￿";
                                return `FRD\0${o}\0${d}\0${c}\0${t}\0${D(l)}\0${h}\0${u}`;
                            }
                            return `FRD\0${o}\0${d}\0${c}\0${D(l)}\0${h}\0${u}`;
                        })({
                            isOnline: V,
                            hasDisplayableActivity: x,
                            isDndOrIdle: b,
                            activityCategory: y,
                            inGameActivityName: v,
                            affinity: C,
                            displayName: k,
                            userId: f,
                        }),
                    };
                })({ userId: e, user: t, activities: l, nickname: a, affinity: u })
              : (function (e) {
                    let { userId: t, user: n, activities: i, nickname: r, affinity: s } = e;
                    if (!(s > N.u.HIGH_AFFINITY_MINIMUM)) return null;
                    let l = A.A.getVoiceStateForUser(t),
                        a = l?.channelId,
                        u = null != a ? d.A.getChannel(a)?.guild_id : null,
                        o = i.length > 0 || null != a,
                        c = E.Ay.getName(u, a, n);
                    return {
                        id: t,
                        userId: t,
                        user: n,
                        activities: i,
                        nickname: r,
                        category: "SUGGESTION",
                        activityCategory: null,
                        groupIds: [],
                        sortKey: `SUG\0${o ? "0" : "1"}\0${D(s)}\0${c.toLowerCase()}\0${t}`,
                    };
                })({ userId: e, user: t, activities: l, nickname: a, affinity: u });
    })(e);
    return null == t ? C.delete(e) : C.set(e, t);
}
function w() {
    C.clear(), O(), v();
    let e = !1;
    for (let [t, n] of h.A.getMutableRelationships().entries())
        (n === T.eA$.PENDING_INCOMING || n === T.eA$.PENDING_OUTGOING) && (e = R(t) || e);
    for (let t of o.A.getUserAffinitiesMap().keys()) h.A.isFriend(t) || (e = R(t) || e);
    for (let t of h.A.getFriendIDs()) e = R(t) || e;
    return e;
}
class L extends s.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        this.waitFor(d.A, u.A, M.A, c.A, h.A, I.A, g.A, o.A, f.default, A.A), w();
    }
    getRows(e) {
        return [C.values(e), C.version];
    }
    getFriend(e) {
        return C.get(e);
    }
}
let F = (e) => (0, _.v$)(e, "FriendsWidgetFriendsStore"),
    P = new L(
        a.h,
        __OVERLAY__
            ? {}
            : {
                  POST_CONNECTION_OPEN: F(w),
                  OVERLAY_INITIALIZE: F(w),
                  CACHE_LOADED: F(w),
                  CACHE_LOADED_LAZY: F(w),
                  FRIENDS_LIST_POPOUT_MOUNTED: F(w),
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: F(function (e) {
                      return e.tab === S.x.FRIENDS && R(e.targetId);
                  }),
                  PRESENCE_UPDATES: F(function (e) {
                      let t = !1;
                      for (let n of e.updates) {
                          let e = n.user?.id;
                          null != e && (t = R(e) || t);
                      }
                      return t;
                  }),
                  PRESENCES_REPLACE: F(function (e) {
                      let t = !1;
                      for (let n of e.presences) {
                          let e = n.user?.id;
                          null != e && (t = R(e) || t);
                      }
                      return t;
                  }),
                  ACTIVITY_METADATA_UPDATE: F(function (e) {
                      return R(e.userId);
                  }),
                  VOICE_STATE_UPDATES: F(function (e) {
                      let t = !1;
                      for (let n of e.voiceStates) t = R(n.userId) || t;
                      return t;
                  }),
                  VOICE_CHANNEL_SELECT: F(function (e) {
                      v();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = R(e) || t;
                      return t;
                  }),
                  RELATIONSHIP_ADD: F(function (e) {
                      return R(e.relationship.id);
                  }),
                  RELATIONSHIP_REMOVE: F(function (e) {
                      return R(e.relationship.id);
                  }),
                  RELATIONSHIP_UPDATE: F(function (e) {
                      return R(e.relationship.id);
                  }),
                  RELATIONSHIP_PENDING_INCOMING_REMOVED: F(function (e) {
                      let t = !1;
                      for (let e of C.values("FRIEND_REQUESTS", !0))
                          e.relationshipType === T.eA$.PENDING_INCOMING && (t = R(e.userId) || t);
                      return t;
                  }),
                  CREATE_FRIEND_GROUP: F(function (e) {
                      return O(), !1;
                  }),
                  DELETE_FRIEND_GROUP: F(function (e) {
                      O();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = R(e) || t;
                      return t;
                  }),
                  ADD_USERS_TO_GROUP: F(function (e) {
                      O();
                      let t = !1;
                      for (let n of e.userIds) t = R(n) || t;
                      return t;
                  }),
                  REMOVE_USERS_FROM_GROUP: F(function (e) {
                      O();
                      let t = !1;
                      for (let n of e.userIds) t = R(n) || t;
                      return t;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: F(function (e) {
                      let t = !1;
                      for (let e of o.A.getUserAffinitiesMap().keys()) t = R(e) || t;
                      return t;
                  }),
                  USER_UPDATE: F(function (e) {
                      return R(e.user.id);
                  }),
                  CURRENT_USER_UPDATE: F(function (e) {
                      v();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = R(e) || t;
                      return t;
                  }),
                  LOGOUT: F(function () {
                      let e = C.size() > 0;
                      return C.clear(), (i = void 0), (U = new Map()), e;
                  }),
              },
    );
