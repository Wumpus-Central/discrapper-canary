let l;
n.d(t, { A: () => w, j: () => T }), n(321073);
var i,
    s = n(311907),
    r = n(713402),
    a = n(73153),
    u = n(870391),
    o = n(21119),
    d = n(734057),
    c = n(290863),
    h = n(994500),
    g = n(309010),
    I = n(461213),
    E = n(287809),
    A = n(977997),
    f = n(562153),
    m = n(914853),
    S = n(956753),
    p = n(406595),
    N = n(652215),
    T =
        (((i = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS"),
        (i.SUGGESTIONS = "SUGGESTIONS"),
        (i.SAME_ACTIVITY = "SAME_ACTIVITY"),
        (i.ACTIVITIES = "ACTIVITIES"),
        (i.IN_GAME = "IN_GAME"),
        (i.ONLINE = "ONLINE"),
        (i.OFFLINE = "OFFLINE"),
        i);
let _ = new r.J(
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
function C(e) {
    return y(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
}
let x = new Map();
function v() {
    let e = new Map();
    for (let t of u.A.getGroups())
        for (let n of t.userIds) {
            let l = e.get(n);
            null == l && ((l = []), e.set(n, l)), l.push(t.id);
        }
    x = e;
}
function M() {
    let e = I.A.getPrimaryActivity();
    l = e?.application_id;
}
function D(e) {
    return (
        e.type === N.$pd.PLAYING ||
        e.type === N.$pd.COMPETING ||
        e.type === N.$pd.WATCHING ||
        e.type === N.$pd.STREAMING
    );
}
function R(e) {
    return (e.type === N.$pd.PLAYING || e.type === N.$pd.COMPETING) && null != e.application_id;
}
function U(e) {
    let t = (function (e) {
        let t = E.default.getUser(e);
        if (null == t) return null;
        let n = h.A.getRelationshipType(e),
            i = n === N.eA$.PENDING_INCOMING || n === N.eA$.PENDING_OUTGOING,
            s = h.A.isFriend(e),
            r = c.A.getActivities(e),
            a = h.A.getNickname(e),
            u = o.A.getUserAffinity(e)?.communicationProbability ?? 0;
        return i
            ? (function (e) {
                  var t, n;
                  let { userId: l, user: i, activities: s, nickname: r, relationshipType: a } = e,
                      u = h.A.getSince(l),
                      o = null != u ? new Date(u).getTime() : 0;
                  return {
                      id: l,
                      userId: l,
                      user: i,
                      activities: s,
                      nickname: r,
                      relationshipType: a,
                      category: "FRIEND_REQUEST",
                      activityCategory: null,
                      groupIds: [],
                      sortKey:
                          ((t = Number.isFinite(o) ? o : 0),
                          (n = l),
                          `REQ\0${y(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13)}\0${n}`),
                  };
              })({ userId: e, user: t, activities: r, nickname: a, relationshipType: n })
            : s
              ? (function (e) {
                    let t,
                        n,
                        i,
                        s,
                        r,
                        a,
                        u,
                        o,
                        h,
                        { userId: E, user: S, activities: T, nickname: _, affinity: y } = e,
                        { category: v, displayActivities: M } =
                            ((t = I.A.getPrimaryActivity()),
                            (n = l),
                            (i = t?.name != null && null != n),
                            (s = c.A.getStatus(E)),
                            (r = A.A.getVoiceStateForUser(E)),
                            (a = r?.channelId != null),
                            (o = (u = T.filter(D)).filter(R)),
                            (h = u.filter((e) => e.application_id === n)),
                            i && h.length > 0
                                ? { category: "SAME_ACTIVITY", displayActivities: h }
                                : o.length > 0
                                  ? { category: "IN_GAME", displayActivities: o }
                                  : a
                                    ? { category: "ACTIVITIES", displayActivities: T }
                                    : s === N.clD.ONLINE || s === N.clD.IDLE || s === N.clD.DND
                                      ? { category: "ONLINE", displayActivities: u }
                                      : { category: "OFFLINE", displayActivities: u }),
                        U = x.get(E) ?? [],
                        [O] = p.A.isFavorite(m.x.FRIENDS, E),
                        G = g.A.getVoiceChannelId() ?? g.A.getChannelId(),
                        b = null != G ? d.A.getChannel(G)?.guild_id : null,
                        w = c.A.getStatus(E),
                        L = w === N.clD.ONLINE,
                        k = M.some(D),
                        F = w === N.clD.DND || w === N.clD.IDLE,
                        P = f.Ay.getName(b, G, S);
                    return {
                        id: E,
                        userId: E,
                        user: S,
                        activities: M,
                        nickname: _,
                        category: "FRIEND",
                        activityCategory: O ? null : v,
                        groupIds: U,
                        sortKey: (function (e) {
                            let {
                                isOnline: t,
                                hasDisplayableActivity: n,
                                isDndOrIdle: l,
                                affinity: i,
                                displayName: s,
                                userId: r,
                            } = e;
                            return `FRD\0${t ? "0" : "1"}\0${n ? "0" : "1"}\0${l ? "0" : "1"}\0${C(i)}\0${s.toLowerCase()}\0${r}`;
                        })({
                            isOnline: L,
                            hasDisplayableActivity: k,
                            isDndOrIdle: F,
                            affinity: y,
                            displayName: P,
                            userId: E,
                        }),
                    };
                })({ userId: e, user: t, activities: r, nickname: a, affinity: u })
              : (function (e) {
                    let { userId: t, user: n, activities: l, nickname: i, affinity: s } = e;
                    if (!(s > 0.1634)) return null;
                    let r = A.A.getVoiceStateForUser(t),
                        a = r?.channelId,
                        u = null != a ? d.A.getChannel(a)?.guild_id : null,
                        o = l.length > 0 || null != a,
                        c = f.Ay.getName(u, a, n);
                    return {
                        id: t,
                        userId: t,
                        user: n,
                        activities: l,
                        nickname: i,
                        category: "SUGGESTION",
                        activityCategory: null,
                        groupIds: [],
                        sortKey: `SUG\0${o ? "0" : "1"}\0${C(s)}\0${c.toLowerCase()}\0${t}`,
                    };
                })({ userId: e, user: t, activities: r, nickname: a, affinity: u });
    })(e);
    return null == t ? _.delete(e) : _.set(e, t);
}
function O() {
    _.clear(), v(), M();
    let e = !1;
    for (let [t, n] of h.A.getMutableRelationships().entries())
        (n === N.eA$.PENDING_INCOMING || n === N.eA$.PENDING_OUTGOING) && (e = U(t) || e);
    for (let t of o.A.getUserAffinitiesMap().keys()) h.A.isFriend(t) || (e = U(t) || e);
    for (let t of h.A.getFriendIDs()) e = U(t) || e;
    return e;
}
class G extends s.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        this.waitFor(d.A, u.A, p.A, c.A, h.A, g.A, I.A, o.A, E.default, A.A), O();
    }
    getRows(e) {
        return [_.values(e), _.version];
    }
    getFriend(e) {
        return _.get(e);
    }
}
let b = (e) => (0, S.v$)(e, "FriendsWidgetFriendsStore"),
    w = new G(
        a.h,
        __OVERLAY__
            ? {}
            : {
                  POST_CONNECTION_OPEN: b(O),
                  OVERLAY_INITIALIZE: b(O),
                  CACHE_LOADED: b(O),
                  CACHE_LOADED_LAZY: b(O),
                  FRIENDS_LIST_POPOUT_MOUNTED: b(O),
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: b(function (e) {
                      return e.tab === m.x.FRIENDS && U(e.targetId);
                  }),
                  PRESENCE_UPDATES: b(function (e) {
                      let t = !1;
                      for (let n of e.updates) {
                          let e = n.user?.id;
                          null != e && (t = U(e) || t);
                      }
                      return t;
                  }),
                  PRESENCES_REPLACE: b(function (e) {
                      let t = !1;
                      for (let n of e.presences) {
                          let e = n.user?.id;
                          null != e && (t = U(e) || t);
                      }
                      return t;
                  }),
                  ACTIVITY_METADATA_UPDATE: b(function (e) {
                      return U(e.userId);
                  }),
                  VOICE_STATE_UPDATES: b(function (e) {
                      let t = !1;
                      for (let n of e.voiceStates) t = U(n.userId) || t;
                      return t;
                  }),
                  VOICE_CHANNEL_SELECT: b(function (e) {
                      M();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = U(e) || t;
                      return t;
                  }),
                  RELATIONSHIP_ADD: b(function (e) {
                      return U(e.relationship.id);
                  }),
                  RELATIONSHIP_REMOVE: b(function (e) {
                      return U(e.relationship.id);
                  }),
                  RELATIONSHIP_UPDATE: b(function (e) {
                      return U(e.relationship.id);
                  }),
                  RELATIONSHIP_PENDING_INCOMING_REMOVED: b(function (e) {
                      let t = !1;
                      for (let e of _.values("FRIEND_REQUESTS", !0))
                          e.relationshipType === N.eA$.PENDING_INCOMING && (t = U(e.userId) || t);
                      return t;
                  }),
                  CREATE_FRIEND_GROUP: b(function (e) {
                      return v(), !1;
                  }),
                  DELETE_FRIEND_GROUP: b(function (e) {
                      v();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = U(e) || t;
                      return t;
                  }),
                  ADD_USERS_TO_GROUP: b(function (e) {
                      v();
                      let t = !1;
                      for (let n of e.userIds) t = U(n) || t;
                      return t;
                  }),
                  REMOVE_USERS_FROM_GROUP: b(function (e) {
                      v();
                      let t = !1;
                      for (let n of e.userIds) t = U(n) || t;
                      return t;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: b(function (e) {
                      let t = !1;
                      for (let e of o.A.getUserAffinitiesMap().keys()) t = U(e) || t;
                      return t;
                  }),
                  USER_UPDATE: b(function (e) {
                      return U(e.user.id);
                  }),
                  CURRENT_USER_UPDATE: b(function (e) {
                      M();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = U(e) || t;
                      return t;
                  }),
                  LOGOUT: b(function () {
                      let e = _.size() > 0;
                      return _.clear(), (l = void 0), (x = new Map()), e;
                  }),
              },
    );
