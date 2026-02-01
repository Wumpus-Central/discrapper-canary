let r;
n.d(t, {
    A: () => V,
    j: () => M,
}),
    n(321073),
    n(896048);
var i,
    l,
    s,
    a = n(311907),
    u = n(713402),
    o = n(73153),
    d = n(870391),
    c = n(21119),
    h = n(734057),
    f = n(290863),
    g = n(994500),
    I = n(309010),
    A = n(461213),
    S = n(287809),
    E = n(977997),
    p = n(562153),
    y = n(914853),
    v = n(956753),
    _ = n(406595),
    O = n(672396),
    m = n(652215),
    M =
        (((l = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS"),
        (l.SUGGESTIONS = "SUGGESTIONS"),
        (l.SAME_ACTIVITY = "SAME_ACTIVITY"),
        (l.ACTIVITIES = "ACTIVITIES"),
        (l.IN_GAME = "IN_GAME"),
        (l.ONLINE = "ONLINE"),
        (l.OFFLINE = "OFFLINE"),
        l);
let T = new u.J(
    function (e) {
        if ("FRIEND_REQUEST" === e.category) return ["FRIEND_REQUESTS"];
        if ("SUGGESTION" === e.category) return ["SUGGESTIONS"];
        let t = [];
        for (let n of (null != e.activityCategory && t.push(e.activityCategory), e.groupIds))
            t.push("GROUP:".concat(n));
        return t;
    },
    function (e) {
        return e.sortKey;
    },
);

function N(e, t) {
    return String(Math.floor(Math.max(0, Math.min(e, Number("9".repeat(t)))))).padStart(t, "0");
}

function C(e) {
    return N(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
}
let D = new Map();

function w() {
    let e = new Map();
    for (let t of d.A.getGroups())
        for (let n of t.userIds) {
            let r = e.get(n);
            null == r && ((r = []), e.set(n, r)), r.push(t.id);
        }
    D = e;
}

function U() {
    let e = A.A.getPrimaryActivity();
    r = null == e ? void 0 : e.application_id;
}

function b(e) {
    return (
        e.type === m.$pd.PLAYING ||
        e.type === m.$pd.COMPETING ||
        e.type === m.$pd.WATCHING ||
        e.type === m.$pd.STREAMING
    );
}

function G(e) {
    return (e.type === m.$pd.PLAYING || e.type === m.$pd.COMPETING) && null != e.application_id;
}

function P(e) {
    let t = (function (e) {
        var t, n;
        let i = S.default.getUser(e);
        if (null == i) return null;
        let l = g.A.getRelationshipType(e),
            s = l === m.eA$.PENDING_INCOMING || l === m.eA$.PENDING_OUTGOING,
            a = g.A.isFriend(e),
            u = f.A.getActivities(e),
            o = g.A.getNickname(e),
            d = null != (t = null == (n = c.A.getUserAffinity(e)) ? void 0 : n.communicationProbability) ? t : 0;
        return s
            ? (function (e) {
                  var t, n;
                  let { userId: r, user: i, activities: l, nickname: s, relationshipType: a } = e,
                      u = g.A.getSince(r),
                      o = null != u ? new Date(u).getTime() : 0;
                  return {
                      id: r,
                      userId: r,
                      user: i,
                      activities: l,
                      nickname: s,
                      relationshipType: a,
                      category: "FRIEND_REQUEST",
                      activityCategory: null,
                      groupIds: [],
                      sortKey:
                          ((t = Number.isFinite(o) ? o : 0),
                          (n = r),
                          "REQ\0"
                              .concat(N(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13), "\0")
                              .concat(n)),
                  };
              })({
                  userId: e,
                  user: i,
                  activities: u,
                  nickname: o,
                  relationshipType: l,
              })
            : a
              ? (function (e) {
                    var t, n, i;
                    let l,
                        s,
                        a,
                        u,
                        o,
                        d,
                        c,
                        g,
                        S,
                        { userId: v, user: O, activities: M, nickname: T, affinity: N } = e,
                        { category: w, displayActivities: U } =
                            ((l = A.A.getPrimaryActivity()),
                            (s = r),
                            (a = (null == l ? void 0 : l.name) != null && null != s),
                            (u = f.A.getStatus(v)),
                            (d = (null == (o = E.A.getVoiceStateForUser(v)) ? void 0 : o.channelId) != null),
                            (g = (c = M.filter(b)).filter(G)),
                            (S = c.filter((e) => e.application_id === s)),
                            a && S.length > 0
                                ? {
                                      category: "SAME_ACTIVITY",
                                      displayActivities: S,
                                  }
                                : g.length > 0
                                  ? {
                                        category: "IN_GAME",
                                        displayActivities: g,
                                    }
                                  : d
                                    ? {
                                          category: "ACTIVITIES",
                                          displayActivities: M,
                                      }
                                    : u === m.clD.ONLINE || u === m.clD.IDLE || u === m.clD.DND
                                      ? {
                                            category: "ONLINE",
                                            displayActivities: c,
                                        }
                                      : {
                                            category: "OFFLINE",
                                            displayActivities: c,
                                        }),
                        P = null != (t = D.get(v)) ? t : [],
                        [R] = _.A.isFavorite(y.x.FRIENDS, v),
                        L = null != (n = I.A.getVoiceChannelId()) ? n : I.A.getChannelId(),
                        F = null != L ? (null == (i = h.A.getChannel(L)) ? void 0 : i.guild_id) : null,
                        V = f.A.getStatus(v),
                        x = V === m.clD.ONLINE,
                        j = U.some(b),
                        k = V === m.clD.DND || V === m.clD.IDLE,
                        W = p.Ay.getName(F, L, O);
                    return {
                        id: v,
                        userId: v,
                        user: O,
                        activities: U,
                        nickname: T,
                        category: "FRIEND",
                        activityCategory: R ? null : w,
                        groupIds: P,
                        sortKey: (function (e) {
                            let {
                                isOnline: t,
                                hasDisplayableActivity: n,
                                isDndOrIdle: r,
                                affinity: i,
                                displayName: l,
                                userId: s,
                            } = e;
                            return "FRD\0"
                                .concat(t ? "0" : "1", "\0")
                                .concat(n ? "0" : "1", "\0")
                                .concat(r ? "0" : "1", "\0")
                                .concat(C(i), "\0")
                                .concat(l.toLowerCase(), "\0")
                                .concat(s);
                        })({
                            isOnline: x,
                            hasDisplayableActivity: j,
                            isDndOrIdle: k,
                            affinity: N,
                            displayName: W,
                            userId: v,
                        }),
                    };
                })({
                    userId: e,
                    user: i,
                    activities: u,
                    nickname: o,
                    affinity: d,
                })
              : (function (e) {
                    var t;
                    let { userId: n, user: r, activities: i, nickname: l, affinity: s } = e;
                    if (!(s > 0.1634)) return null;
                    let a = E.A.getVoiceStateForUser(n),
                        u = null == a ? void 0 : a.channelId,
                        o = null != u ? (null == (t = h.A.getChannel(u)) ? void 0 : t.guild_id) : null,
                        d = i.length > 0 || null != u,
                        c = p.Ay.getName(o, u, r);
                    return {
                        id: n,
                        userId: n,
                        user: r,
                        activities: i,
                        nickname: l,
                        category: "SUGGESTION",
                        activityCategory: null,
                        groupIds: [],
                        sortKey: "SUG\0"
                            .concat(d ? "0" : "1", "\0")
                            .concat(C(s), "\0")
                            .concat(c.toLowerCase(), "\0")
                            .concat(n),
                    };
                })({
                    userId: e,
                    user: i,
                    activities: u,
                    nickname: o,
                    affinity: d,
                });
    })(e);
    return null == t ? T.delete(e) : T.set(e, t);
}

function R() {
    T.clear(), w(), U();
    let e = !1;
    for (let [t, n] of g.A.getMutableRelationships().entries())
        (n === m.eA$.PENDING_INCOMING || n === m.eA$.PENDING_OUTGOING) && (e = P(t) || e);
    for (let t of c.A.getUserAffinitiesMap().keys()) g.A.isFriend(t) || (e = P(t) || e);
    for (let t of g.A.getFriendIDs()) e = P(t) || e;
    return e;
}
class L extends (i = a.Ay.Store) {
    initialize() {
        this.waitFor(h.A, d.A, _.A, f.A, g.A, I.A, A.A, c.A, S.default, E.A), R();
    }
    getRows(e) {
        return [T.values(e), T.version];
    }
    getFriend(e) {
        return T.get(e);
    }
}
(s = "displayName") in L
    ? Object.defineProperty(L, s, {
          value: "FriendsWidgetFriendsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (L[s] = "FriendsWidgetFriendsStore");
let F = (e) => (0, v.R)(e, "FriendsWidgetFriendsStore"),
    V = new L(
        o.h,
        __OVERLAY__ || (!O.OX && !O.ed)
            ? {}
            : {
                  POST_CONNECTION_OPEN: F(R),
                  OVERLAY_INITIALIZE: F(R),
                  CACHE_LOADED: F(R),
                  CACHE_LOADED_LAZY: F(R),
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: F(function (e) {
                      return e.tab === y.x.FRIENDS && P(e.targetId);
                  }),
                  PRESENCE_UPDATES: F(function (e) {
                      let t = !1;
                      for (let r of e.updates) {
                          var n;
                          let e = null == (n = r.user) ? void 0 : n.id;
                          null != e && (t = P(e) || t);
                      }
                      return t;
                  }),
                  PRESENCES_REPLACE: F(function (e) {
                      let t = !1;
                      for (let r of e.presences) {
                          var n;
                          let e = null == (n = r.user) ? void 0 : n.id;
                          null != e && (t = P(e) || t);
                      }
                      return t;
                  }),
                  ACTIVITY_METADATA_UPDATE: F(function (e) {
                      return P(e.userId);
                  }),
                  VOICE_STATE_UPDATES: F(function (e) {
                      let t = !1;
                      for (let n of e.voiceStates) t = P(n.userId) || t;
                      return t;
                  }),
                  VOICE_CHANNEL_SELECT: F(function (e) {
                      U();
                      let t = !1;
                      for (let e of g.A.getFriendIDs()) t = P(e) || t;
                      return t;
                  }),
                  RELATIONSHIP_ADD: F(function (e) {
                      return P(e.relationship.id);
                  }),
                  RELATIONSHIP_REMOVE: F(function (e) {
                      return P(e.relationship.id);
                  }),
                  RELATIONSHIP_UPDATE: F(function (e) {
                      return P(e.relationship.id);
                  }),
                  RELATIONSHIP_PENDING_INCOMING_REMOVED: F(function (e) {
                      let t = !1;
                      for (let e of T.values("FRIEND_REQUESTS", !0))
                          e.relationshipType === m.eA$.PENDING_INCOMING && (t = P(e.userId) || t);
                      return t;
                  }),
                  CREATE_FRIEND_GROUP: F(function (e) {
                      return w(), !1;
                  }),
                  DELETE_FRIEND_GROUP: F(function (e) {
                      w();
                      let t = !1;
                      for (let e of g.A.getFriendIDs()) t = P(e) || t;
                      return t;
                  }),
                  ADD_USERS_TO_GROUP: F(function (e) {
                      w();
                      let t = !1;
                      for (let n of e.userIds) t = P(n) || t;
                      return t;
                  }),
                  REMOVE_USERS_FROM_GROUP: F(function (e) {
                      w();
                      let t = !1;
                      for (let n of e.userIds) t = P(n) || t;
                      return t;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: F(function (e) {
                      let t = !1;
                      for (let e of c.A.getUserAffinitiesMap().keys()) t = P(e) || t;
                      return t;
                  }),
                  USER_UPDATE: F(function (e) {
                      return P(e.user.id);
                  }),
                  CURRENT_USER_UPDATE: F(function (e) {
                      U();
                      let t = !1;
                      for (let e of g.A.getFriendIDs()) t = P(e) || t;
                      return t;
                  }),
                  LOGOUT: F(function () {
                      let e = T.size() > 0;
                      return T.clear(), (r = void 0), (D = new Map()), e;
                  }),
              },
    );
