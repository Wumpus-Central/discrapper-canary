let l;
n.d(t, {
    A: () => G,
    j: () => b,
}),
    n(321073),
    n(896048);
var r,
    i,
    s,
    a = n(311907),
    o = n(713402),
    u = n(73153),
    c = n(870391),
    d = n(21119),
    h = n(734057),
    g = n(290863),
    f = n(994500),
    p = n(309010),
    I = n(461213),
    m = n(287809),
    E = n(977997),
    A = n(562153),
    y = n(914853),
    S = n(956753),
    v = n(406595),
    O = n(652215),
    b =
        (((i = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS"),
        (i.SUGGESTIONS = "SUGGESTIONS"),
        (i.SAME_ACTIVITY = "SAME_ACTIVITY"),
        (i.ACTIVITIES = "ACTIVITIES"),
        (i.IN_GAME = "IN_GAME"),
        (i.ONLINE = "ONLINE"),
        (i.OFFLINE = "OFFLINE"),
        i);
let N = new o.J(
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

function T(e, t) {
    return String(Math.floor(Math.max(0, Math.min(e, Number("9".repeat(t)))))).padStart(t, "0");
}

function _(e) {
    return T(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
}
let C = new Map();

function x() {
    let e = new Map();
    for (let t of c.A.getGroups())
        for (let n of t.userIds) {
            let l = e.get(n);
            null == l && ((l = []), e.set(n, l)), l.push(t.id);
        }
    C = e;
}

function D() {
    let e = I.A.getPrimaryActivity();
    l = null == e ? void 0 : e.application_id;
}

function M(e) {
    return (
        e.type === O.$pd.PLAYING ||
        e.type === O.$pd.COMPETING ||
        e.type === O.$pd.WATCHING ||
        e.type === O.$pd.STREAMING
    );
}

function j(e) {
    return (e.type === O.$pd.PLAYING || e.type === O.$pd.COMPETING) && null != e.application_id;
}

function w(e) {
    let t = (function (e) {
        var t, n;
        let r = m.default.getUser(e);
        if (null == r) return null;
        let i = f.A.getRelationshipType(e),
            s = i === O.eA$.PENDING_INCOMING || i === O.eA$.PENDING_OUTGOING,
            a = f.A.isFriend(e),
            o = g.A.getActivities(e),
            u = f.A.getNickname(e),
            c = null != (t = null == (n = d.A.getUserAffinity(e)) ? void 0 : n.communicationProbability) ? t : 0;
        return s
            ? (function (e) {
                  var t, n;
                  let { userId: l, user: r, activities: i, nickname: s, relationshipType: a } = e,
                      o = f.A.getSince(l),
                      u = null != o ? new Date(o).getTime() : 0;
                  return {
                      id: l,
                      userId: l,
                      user: r,
                      activities: i,
                      nickname: s,
                      relationshipType: a,
                      category: "FRIEND_REQUEST",
                      activityCategory: null,
                      groupIds: [],
                      sortKey:
                          ((t = Number.isFinite(u) ? u : 0),
                          (n = l),
                          "REQ\0"
                              .concat(T(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13), "\0")
                              .concat(n)),
                  };
              })({
                  userId: e,
                  user: r,
                  activities: o,
                  nickname: u,
                  relationshipType: i,
              })
            : a
              ? (function (e) {
                    var t, n, r;
                    let i,
                        s,
                        a,
                        o,
                        u,
                        c,
                        d,
                        f,
                        m,
                        { userId: S, user: b, activities: N, nickname: T, affinity: x } = e,
                        { category: D, displayActivities: w } =
                            ((i = I.A.getPrimaryActivity()),
                            (s = l),
                            (a = (null == i ? void 0 : i.name) != null && null != s),
                            (o = g.A.getStatus(S)),
                            (c = (null == (u = E.A.getVoiceStateForUser(S)) ? void 0 : u.channelId) != null),
                            (f = (d = N.filter(M)).filter(j)),
                            (m = d.filter((e) => e.application_id === s)),
                            a && m.length > 0
                                ? {
                                      category: "SAME_ACTIVITY",
                                      displayActivities: m,
                                  }
                                : f.length > 0
                                  ? {
                                        category: "IN_GAME",
                                        displayActivities: f,
                                    }
                                  : c
                                    ? {
                                          category: "ACTIVITIES",
                                          displayActivities: N,
                                      }
                                    : o === O.clD.ONLINE || o === O.clD.IDLE || o === O.clD.DND
                                      ? {
                                            category: "ONLINE",
                                            displayActivities: d,
                                        }
                                      : {
                                            category: "OFFLINE",
                                            displayActivities: d,
                                        }),
                        P = null != (t = C.get(S)) ? t : [],
                        [R] = v.A.isFavorite(y.x.FRIENDS, S),
                        U = null != (n = p.A.getVoiceChannelId()) ? n : p.A.getChannelId(),
                        G = null != U ? (null == (r = h.A.getChannel(U)) ? void 0 : r.guild_id) : null,
                        L = g.A.getStatus(S),
                        k = L === O.clD.ONLINE,
                        F = w.some(M),
                        V = L === O.clD.DND || L === O.clD.IDLE,
                        H = A.Ay.getName(G, U, b);
                    return {
                        id: S,
                        userId: S,
                        user: b,
                        activities: w,
                        nickname: T,
                        category: "FRIEND",
                        activityCategory: R ? null : D,
                        groupIds: P,
                        sortKey: (function (e) {
                            let {
                                isOnline: t,
                                hasDisplayableActivity: n,
                                isDndOrIdle: l,
                                affinity: r,
                                displayName: i,
                                userId: s,
                            } = e;
                            return "FRD\0"
                                .concat(t ? "0" : "1", "\0")
                                .concat(n ? "0" : "1", "\0")
                                .concat(l ? "0" : "1", "\0")
                                .concat(_(r), "\0")
                                .concat(i.toLowerCase(), "\0")
                                .concat(s);
                        })({
                            isOnline: k,
                            hasDisplayableActivity: F,
                            isDndOrIdle: V,
                            affinity: x,
                            displayName: H,
                            userId: S,
                        }),
                    };
                })({
                    userId: e,
                    user: r,
                    activities: o,
                    nickname: u,
                    affinity: c,
                })
              : (function (e) {
                    var t;
                    let { userId: n, user: l, activities: r, nickname: i, affinity: s } = e;
                    if (!(s > 0.1634)) return null;
                    let a = E.A.getVoiceStateForUser(n),
                        o = null == a ? void 0 : a.channelId,
                        u = null != o ? (null == (t = h.A.getChannel(o)) ? void 0 : t.guild_id) : null,
                        c = r.length > 0 || null != o,
                        d = A.Ay.getName(u, o, l);
                    return {
                        id: n,
                        userId: n,
                        user: l,
                        activities: r,
                        nickname: i,
                        category: "SUGGESTION",
                        activityCategory: null,
                        groupIds: [],
                        sortKey: "SUG\0"
                            .concat(c ? "0" : "1", "\0")
                            .concat(_(s), "\0")
                            .concat(d.toLowerCase(), "\0")
                            .concat(n),
                    };
                })({
                    userId: e,
                    user: r,
                    activities: o,
                    nickname: u,
                    affinity: c,
                });
    })(e);
    return null == t ? N.delete(e) : N.set(e, t);
}

function P() {
    N.clear(), x(), D();
    let e = !1;
    for (let [t, n] of f.A.getMutableRelationships().entries())
        (n === O.eA$.PENDING_INCOMING || n === O.eA$.PENDING_OUTGOING) && (e = w(t) || e);
    for (let t of d.A.getUserAffinitiesMap().keys()) f.A.isFriend(t) || (e = w(t) || e);
    for (let t of f.A.getFriendIDs()) e = w(t) || e;
    return e;
}
class R extends (r = a.Ay.Store) {
    initialize() {
        this.waitFor(h.A, c.A, v.A, g.A, f.A, p.A, I.A, d.A, m.default, E.A), P();
    }
    getRows(e) {
        return [N.values(e), N.version];
    }
    getFriend(e) {
        return N.get(e);
    }
}
(s = "displayName") in R
    ? Object.defineProperty(R, s, {
          value: "FriendsWidgetFriendsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (R[s] = "FriendsWidgetFriendsStore");
let U = (e) => (0, S.v$)(e, "FriendsWidgetFriendsStore"),
    G = new R(
        u.h,
        __OVERLAY__
            ? {}
            : {
                  POST_CONNECTION_OPEN: U(P),
                  OVERLAY_INITIALIZE: U(P),
                  CACHE_LOADED: U(P),
                  CACHE_LOADED_LAZY: U(P),
                  FRIENDS_LIST_POPOUT_MOUNTED: U(P),
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: U(function (e) {
                      return e.tab === y.x.FRIENDS && w(e.targetId);
                  }),
                  PRESENCE_UPDATES: U(function (e) {
                      let t = !1;
                      for (let l of e.updates) {
                          var n;
                          let e = null == (n = l.user) ? void 0 : n.id;
                          null != e && (t = w(e) || t);
                      }
                      return t;
                  }),
                  PRESENCES_REPLACE: U(function (e) {
                      let t = !1;
                      for (let l of e.presences) {
                          var n;
                          let e = null == (n = l.user) ? void 0 : n.id;
                          null != e && (t = w(e) || t);
                      }
                      return t;
                  }),
                  ACTIVITY_METADATA_UPDATE: U(function (e) {
                      return w(e.userId);
                  }),
                  VOICE_STATE_UPDATES: U(function (e) {
                      let t = !1;
                      for (let n of e.voiceStates) t = w(n.userId) || t;
                      return t;
                  }),
                  VOICE_CHANNEL_SELECT: U(function (e) {
                      D();
                      let t = !1;
                      for (let e of f.A.getFriendIDs()) t = w(e) || t;
                      return t;
                  }),
                  RELATIONSHIP_ADD: U(function (e) {
                      return w(e.relationship.id);
                  }),
                  RELATIONSHIP_REMOVE: U(function (e) {
                      return w(e.relationship.id);
                  }),
                  RELATIONSHIP_UPDATE: U(function (e) {
                      return w(e.relationship.id);
                  }),
                  RELATIONSHIP_PENDING_INCOMING_REMOVED: U(function (e) {
                      let t = !1;
                      for (let e of N.values("FRIEND_REQUESTS", !0))
                          e.relationshipType === O.eA$.PENDING_INCOMING && (t = w(e.userId) || t);
                      return t;
                  }),
                  CREATE_FRIEND_GROUP: U(function (e) {
                      return x(), !1;
                  }),
                  DELETE_FRIEND_GROUP: U(function (e) {
                      x();
                      let t = !1;
                      for (let e of f.A.getFriendIDs()) t = w(e) || t;
                      return t;
                  }),
                  ADD_USERS_TO_GROUP: U(function (e) {
                      x();
                      let t = !1;
                      for (let n of e.userIds) t = w(n) || t;
                      return t;
                  }),
                  REMOVE_USERS_FROM_GROUP: U(function (e) {
                      x();
                      let t = !1;
                      for (let n of e.userIds) t = w(n) || t;
                      return t;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: U(function (e) {
                      let t = !1;
                      for (let e of d.A.getUserAffinitiesMap().keys()) t = w(e) || t;
                      return t;
                  }),
                  USER_UPDATE: U(function (e) {
                      return w(e.user.id);
                  }),
                  CURRENT_USER_UPDATE: U(function (e) {
                      D();
                      let t = !1;
                      for (let e of f.A.getFriendIDs()) t = w(e) || t;
                      return t;
                  }),
                  LOGOUT: U(function () {
                      let e = N.size() > 0;
                      return N.clear(), (l = void 0), (C = new Map()), e;
                  }),
              },
    );
