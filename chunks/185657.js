let l;
n.d(t, { A: () => L, j: () => C }), n(321073);
var i,
    r = n(311907),
    s = n(713402),
    a = n(73153),
    u = n(870391),
    o = n(21119),
    d = n(734057),
    c = n(290863),
    h = n(994500),
    g = n(309010),
    I = n(461213),
    A = n(287809),
    f = n(977997),
    E = n(562153),
    m = n(914853),
    S = n(956753),
    p = n(406595),
    N = n(70191),
    T = n(240516),
    _ = n(652215),
    C =
        (((i = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS"),
        (i.SUGGESTIONS = "SUGGESTIONS"),
        (i.SAME_ACTIVITY = "SAME_ACTIVITY"),
        (i.ACTIVITIES = "ACTIVITIES"),
        (i.IN_GAME = "IN_GAME"),
        (i.ONLINE = "ONLINE"),
        (i.OFFLINE = "OFFLINE"),
        i);
let y = new s.J(
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
function x(e, t) {
    return String(Math.floor(Math.max(0, Math.min(e, Number("9".repeat(t)))))).padStart(t, "0");
}
function M(e) {
    return x(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
}
let v = new Map();
function D() {
    let e = new Map();
    for (let t of u.A.getGroups())
        for (let n of t.userIds) {
            let l = e.get(n);
            null == l && ((l = []), e.set(n, l)), l.push(t.id);
        }
    v = e;
}
function R() {
    let e = I.A.getPrimaryActivity();
    l = e?.application_id;
}
function U(e) {
    return (
        e.type === _.$pd.PLAYING ||
        e.type === _.$pd.COMPETING ||
        e.type === _.$pd.WATCHING ||
        e.type === _.$pd.STREAMING
    );
}
function O(e) {
    let t = (function (e) {
        let t = A.default.getUser(e);
        if (null == t) return null;
        let n = h.A.getRelationshipType(e),
            i = n === _.eA$.PENDING_INCOMING || n === _.eA$.PENDING_OUTGOING,
            r = h.A.isFriend(e),
            s = c.A.getActivities(e),
            a = h.A.getNickname(e),
            u = o.A.getUserAffinity(e)?.communicationProbability ?? 0;
        return i
            ? (function (e) {
                  var t, n;
                  let { userId: l, user: i, activities: r, nickname: s, relationshipType: a } = e,
                      u = h.A.getSince(l),
                      o = null != u ? new Date(u).getTime() : 0;
                  return {
                      id: l,
                      userId: l,
                      user: i,
                      activities: r,
                      nickname: s,
                      relationshipType: a,
                      category: "FRIEND_REQUEST",
                      activityCategory: null,
                      groupIds: [],
                      sortKey:
                          ((t = Number.isFinite(o) ? o : 0),
                          (n = l),
                          `REQ\0${x(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13)}\0${n}`),
                  };
              })({ userId: e, user: t, activities: s, nickname: a, relationshipType: n })
            : r
              ? (function (e) {
                    let t,
                        n,
                        i,
                        r,
                        s,
                        a,
                        u,
                        o,
                        h,
                        { userId: A, user: S, activities: T, nickname: C, affinity: y } = e,
                        { category: x, displayActivities: D } =
                            ((t = I.A.getPrimaryActivity()),
                            (n = l),
                            (i = t?.name != null && null != n),
                            (r = c.A.getStatus(A)),
                            (s = f.A.getVoiceStateForUser(A)),
                            (a = s?.channelId != null),
                            (o = (u = T.filter(U)).filter(N.A)),
                            (h = u.filter((e) => e.application_id === n)),
                            i && h.length > 0
                                ? { category: "SAME_ACTIVITY", displayActivities: h }
                                : o.length > 0
                                  ? { category: "IN_GAME", displayActivities: o }
                                  : a
                                    ? { category: "ACTIVITIES", displayActivities: T }
                                    : r === _.clD.ONLINE || r === _.clD.IDLE || r === _.clD.DND
                                      ? { category: "ONLINE", displayActivities: u }
                                      : { category: "OFFLINE", displayActivities: u }),
                        R = "IN_GAME" === x ? (D[0]?.name ?? null) : null,
                        O = v.get(A) ?? [],
                        [G] = p.A.isFavorite(m.x.FRIENDS, A),
                        w = g.A.getVoiceChannelId() ?? g.A.getChannelId(),
                        F = null != w ? d.A.getChannel(w)?.guild_id : null,
                        L = c.A.getStatus(A),
                        b = L === _.clD.ONLINE,
                        k = D.some(U),
                        P = L === _.clD.DND || L === _.clD.IDLE,
                        j = E.Ay.getName(F, w, S);
                    return {
                        id: A,
                        userId: A,
                        user: S,
                        activities: D,
                        nickname: C,
                        category: "FRIEND",
                        activityCategory: G ? null : x,
                        groupIds: O,
                        sortKey: (function (e) {
                            let {
                                    isOnline: t,
                                    hasDisplayableActivity: n,
                                    isDndOrIdle: l,
                                    activityCategory: i,
                                    inGameActivityName: r,
                                    affinity: s,
                                    displayName: a,
                                    userId: u,
                                } = e,
                                o = t ? "0" : "1",
                                d = n ? "0" : "1",
                                c = l ? "0" : "1",
                                h = a.toLowerCase();
                            if ("IN_GAME" === i) {
                                let e,
                                    t = (e = r?.trim().toLowerCase() ?? "").length > 0 ? e : "￿";
                                return `FRD\0${o}\0${d}\0${c}\0${t}\0${M(s)}\0${h}\0${u}`;
                            }
                            return `FRD\0${o}\0${d}\0${c}\0${M(s)}\0${h}\0${u}`;
                        })({
                            isOnline: b,
                            hasDisplayableActivity: k,
                            isDndOrIdle: P,
                            activityCategory: x,
                            inGameActivityName: R,
                            affinity: y,
                            displayName: j,
                            userId: A,
                        }),
                    };
                })({ userId: e, user: t, activities: s, nickname: a, affinity: u })
              : (function (e) {
                    let { userId: t, user: n, activities: l, nickname: i, affinity: r } = e;
                    if (!(r > T.u.HIGH_AFFINITY_MINIMUM)) return null;
                    let s = f.A.getVoiceStateForUser(t),
                        a = s?.channelId,
                        u = null != a ? d.A.getChannel(a)?.guild_id : null,
                        o = l.length > 0 || null != a,
                        c = E.Ay.getName(u, a, n);
                    return {
                        id: t,
                        userId: t,
                        user: n,
                        activities: l,
                        nickname: i,
                        category: "SUGGESTION",
                        activityCategory: null,
                        groupIds: [],
                        sortKey: `SUG\0${o ? "0" : "1"}\0${M(r)}\0${c.toLowerCase()}\0${t}`,
                    };
                })({ userId: e, user: t, activities: s, nickname: a, affinity: u });
    })(e);
    return null == t ? y.delete(e) : y.set(e, t);
}
function G() {
    y.clear(), D(), R();
    let e = !1;
    for (let [t, n] of h.A.getMutableRelationships().entries())
        (n === _.eA$.PENDING_INCOMING || n === _.eA$.PENDING_OUTGOING) && (e = O(t) || e);
    for (let t of o.A.getUserAffinitiesMap().keys()) h.A.isFriend(t) || (e = O(t) || e);
    for (let t of h.A.getFriendIDs()) e = O(t) || e;
    return e;
}
class w extends r.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        this.waitFor(d.A, u.A, p.A, c.A, h.A, g.A, I.A, o.A, A.default, f.A), G();
    }
    getRows(e) {
        return [y.values(e), y.version];
    }
    getFriend(e) {
        return y.get(e);
    }
}
let F = (e) => (0, S.v$)(e, "FriendsWidgetFriendsStore"),
    L = new w(
        a.h,
        __OVERLAY__
            ? {}
            : {
                  POST_CONNECTION_OPEN: F(G),
                  OVERLAY_INITIALIZE: F(G),
                  CACHE_LOADED: F(G),
                  CACHE_LOADED_LAZY: F(G),
                  FRIENDS_LIST_POPOUT_MOUNTED: F(G),
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: F(function (e) {
                      return e.tab === m.x.FRIENDS && O(e.targetId);
                  }),
                  PRESENCE_UPDATES: F(function (e) {
                      let t = !1;
                      for (let n of e.updates) {
                          let e = n.user?.id;
                          null != e && (t = O(e) || t);
                      }
                      return t;
                  }),
                  PRESENCES_REPLACE: F(function (e) {
                      let t = !1;
                      for (let n of e.presences) {
                          let e = n.user?.id;
                          null != e && (t = O(e) || t);
                      }
                      return t;
                  }),
                  ACTIVITY_METADATA_UPDATE: F(function (e) {
                      return O(e.userId);
                  }),
                  VOICE_STATE_UPDATES: F(function (e) {
                      let t = !1;
                      for (let n of e.voiceStates) t = O(n.userId) || t;
                      return t;
                  }),
                  VOICE_CHANNEL_SELECT: F(function (e) {
                      R();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = O(e) || t;
                      return t;
                  }),
                  RELATIONSHIP_ADD: F(function (e) {
                      return O(e.relationship.id);
                  }),
                  RELATIONSHIP_REMOVE: F(function (e) {
                      return O(e.relationship.id);
                  }),
                  RELATIONSHIP_UPDATE: F(function (e) {
                      return O(e.relationship.id);
                  }),
                  RELATIONSHIP_PENDING_INCOMING_REMOVED: F(function (e) {
                      let t = !1;
                      for (let e of y.values("FRIEND_REQUESTS", !0))
                          e.relationshipType === _.eA$.PENDING_INCOMING && (t = O(e.userId) || t);
                      return t;
                  }),
                  CREATE_FRIEND_GROUP: F(function (e) {
                      return D(), !1;
                  }),
                  DELETE_FRIEND_GROUP: F(function (e) {
                      D();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = O(e) || t;
                      return t;
                  }),
                  ADD_USERS_TO_GROUP: F(function (e) {
                      D();
                      let t = !1;
                      for (let n of e.userIds) t = O(n) || t;
                      return t;
                  }),
                  REMOVE_USERS_FROM_GROUP: F(function (e) {
                      D();
                      let t = !1;
                      for (let n of e.userIds) t = O(n) || t;
                      return t;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: F(function (e) {
                      let t = !1;
                      for (let e of o.A.getUserAffinitiesMap().keys()) t = O(e) || t;
                      return t;
                  }),
                  USER_UPDATE: F(function (e) {
                      return O(e.user.id);
                  }),
                  CURRENT_USER_UPDATE: F(function (e) {
                      R();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = O(e) || t;
                      return t;
                  }),
                  LOGOUT: F(function () {
                      let e = y.size() > 0;
                      return y.clear(), (l = void 0), (v = new Map()), e;
                  }),
              },
    );
