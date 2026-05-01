let i;
n.d(t, { A: () => x, j: () => N }), n(321073);
var l,
    s = n(17928),
    r = n(713402),
    a = n(228366),
    u = n(870391),
    o = n(427358),
    d = n(734057),
    c = n(290863),
    h = n(994500),
    A = n(309010),
    f = n(461213),
    g = n(287809),
    E = n(977997),
    I = n(562153),
    S = n(914853),
    _ = n(956753),
    T = n(406595),
    C = n(70191),
    m = n(240516),
    p = n(652215),
    N =
        (((l = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS"),
        (l.SUGGESTIONS = "SUGGESTIONS"),
        (l.SAME_ACTIVITY = "SAME_ACTIVITY"),
        (l.ACTIVITIES = "ACTIVITIES"),
        (l.IN_GAME = "IN_GAME"),
        (l.ONLINE = "ONLINE"),
        (l.OFFLINE = "OFFLINE"),
        l);
let M = new r.J(
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
function D(e, t) {
    return String(Math.floor(Math.max(0, Math.min(e, Number("9".repeat(t)))))).padStart(t, "0");
}
function v(e) {
    return D(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
}
let y = new Map();
function U() {
    let e = new Map();
    for (let t of u.A.getGroups())
        for (let n of t.userIds) {
            let i = e.get(n);
            null == i && ((i = []), e.set(n, i)), i.push(t.id);
        }
    y = e;
}
function O() {
    let e = f.A.getPrimaryActivity();
    i = e?.application_id;
}
function L(e) {
    return (
        e.type === p.$pd.PLAYING ||
        e.type === p.$pd.COMPETING ||
        e.type === p.$pd.WATCHING ||
        e.type === p.$pd.STREAMING
    );
}
function R(e) {
    let t = (function (e) {
        let t = g.default.getUser(e);
        if (null == t) return null;
        let n = h.A.getRelationshipType(e),
            l = n === p.eA$.PENDING_INCOMING || n === p.eA$.PENDING_OUTGOING,
            s = h.A.isFriend(e),
            r = c.A.getActivities(e),
            a = h.A.getNickname(e),
            u = o.A.getUserAffinity(e)?.communicationProbability ?? 0;
        return l
            ? (function (e) {
                  var t, n;
                  let { userId: i, user: l, activities: s, nickname: r, relationshipType: a } = e,
                      u = h.A.getSince(i),
                      o = null != u ? new Date(u).getTime() : 0;
                  return {
                      id: i,
                      userId: i,
                      user: l,
                      activities: s,
                      nickname: r,
                      relationshipType: a,
                      category: "FRIEND_REQUEST",
                      activityCategory: null,
                      groupIds: [],
                      sortKey:
                          ((t = Number.isFinite(o) ? o : 0),
                          (n = i),
                          `REQ\0${D(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13)}\0${n}`),
                  };
              })({ userId: e, user: t, activities: r, nickname: a, relationshipType: n })
            : s
              ? (function (e) {
                    let t,
                        n,
                        l,
                        s,
                        r,
                        a,
                        u,
                        o,
                        h,
                        { userId: g, user: _, activities: m, nickname: N, affinity: M } = e,
                        { category: D, displayActivities: U } =
                            ((t = f.A.getPrimaryActivity()),
                            (n = i),
                            (l = t?.name != null && null != n),
                            (s = c.A.getStatus(g)),
                            (r = E.A.getVoiceStateForUser(g)),
                            (a = r?.channelId != null),
                            (o = (u = m.filter(L)).filter(C.A)),
                            (h = u.filter((e) => e.application_id === n)),
                            l && h.length > 0
                                ? { category: "SAME_ACTIVITY", displayActivities: h }
                                : o.length > 0
                                  ? { category: "IN_GAME", displayActivities: o }
                                  : a
                                    ? { category: "ACTIVITIES", displayActivities: m }
                                    : s === p.clD.ONLINE || s === p.clD.IDLE || s === p.clD.DND
                                      ? { category: "ONLINE", displayActivities: u }
                                      : { category: "OFFLINE", displayActivities: u }),
                        O = "IN_GAME" === D ? (U[0]?.name ?? null) : null,
                        R = y.get(g) ?? [],
                        [w] = T.A.isFavorite(S.x.FRIENDS, g),
                        P = A.A.getVoiceChannelId() ?? A.A.getChannelId(),
                        G = null != P ? d.A.getChannel(P)?.guild_id : null,
                        x = c.A.getStatus(g),
                        F = x === p.clD.ONLINE,
                        V = U.some(L),
                        b = x === p.clD.DND || x === p.clD.IDLE,
                        H = I.Ay.getName(G, P, _);
                    return {
                        id: g,
                        userId: g,
                        user: _,
                        activities: U,
                        nickname: N,
                        category: "FRIEND",
                        activityCategory: w ? null : D,
                        groupIds: R,
                        sortKey: (function (e) {
                            let {
                                    isOnline: t,
                                    hasDisplayableActivity: n,
                                    isDndOrIdle: i,
                                    activityCategory: l,
                                    inGameActivityName: s,
                                    affinity: r,
                                    displayName: a,
                                    userId: u,
                                } = e,
                                o = t ? "0" : "1",
                                d = n ? "0" : "1",
                                c = i ? "0" : "1",
                                h = a.toLowerCase();
                            if ("IN_GAME" === l) {
                                let e,
                                    t = (e = s?.trim().toLowerCase() ?? "").length > 0 ? e : "￿";
                                return `FRD\0${o}\0${d}\0${c}\0${t}\0${v(r)}\0${h}\0${u}`;
                            }
                            return `FRD\0${o}\0${d}\0${c}\0${v(r)}\0${h}\0${u}`;
                        })({
                            isOnline: F,
                            hasDisplayableActivity: V,
                            isDndOrIdle: b,
                            activityCategory: D,
                            inGameActivityName: O,
                            affinity: M,
                            displayName: H,
                            userId: g,
                        }),
                    };
                })({ userId: e, user: t, activities: r, nickname: a, affinity: u })
              : (function (e) {
                    let { userId: t, user: n, activities: i, nickname: l, affinity: s } = e;
                    if (!(s > m.u.HIGH_AFFINITY_MINIMUM)) return null;
                    let r = E.A.getVoiceStateForUser(t),
                        a = r?.channelId,
                        u = null != a ? d.A.getChannel(a)?.guild_id : null,
                        o = i.length > 0 || null != a,
                        c = I.Ay.getName(u, a, n);
                    return {
                        id: t,
                        userId: t,
                        user: n,
                        activities: i,
                        nickname: l,
                        category: "SUGGESTION",
                        activityCategory: null,
                        groupIds: [],
                        sortKey: `SUG\0${o ? "0" : "1"}\0${v(s)}\0${c.toLowerCase()}\0${t}`,
                    };
                })({ userId: e, user: t, activities: r, nickname: a, affinity: u });
    })(e);
    return null == t ? M.delete(e) : M.set(e, t);
}
function w() {
    M.clear(), U(), O();
    let e = !1;
    for (let [t, n] of h.A.getMutableRelationships().entries())
        (n === p.eA$.PENDING_INCOMING || n === p.eA$.PENDING_OUTGOING) && (e = R(t) || e);
    for (let t of o.A.getUserAffinitiesMap().keys()) h.A.isFriend(t) || (e = R(t) || e);
    for (let t of h.A.getFriendIDs()) e = R(t) || e;
    return e;
}
class P extends s.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        this.waitFor(d.A, u.A, T.A, c.A, h.A, A.A, f.A, o.A, g.default, E.A), w();
    }
    getRows(e) {
        return [M.values(e), M.version];
    }
    getFriend(e) {
        return M.get(e);
    }
}
let G = (e) => (0, _.v$)(e, "FriendsWidgetFriendsStore"),
    x = new P(
        a.h,
        __OVERLAY__
            ? {}
            : {
                  POST_CONNECTION_OPEN: G(w),
                  OVERLAY_INITIALIZE: G(w),
                  CACHE_LOADED: G(w),
                  CACHE_LOADED_LAZY: G(w),
                  FRIENDS_LIST_POPOUT_MOUNTED: G(w),
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: G(function (e) {
                      return e.tab === S.x.FRIENDS && R(e.targetId);
                  }),
                  PRESENCE_UPDATES: G(function (e) {
                      let t = !1;
                      for (let n of e.updates) {
                          let e = n.user?.id;
                          null != e && (t = R(e) || t);
                      }
                      return t;
                  }),
                  PRESENCES_REPLACE: G(function (e) {
                      let t = !1;
                      for (let n of e.presences) {
                          let e = n.user?.id;
                          null != e && (t = R(e) || t);
                      }
                      return t;
                  }),
                  ACTIVITY_METADATA_UPDATE: G(function (e) {
                      return R(e.userId);
                  }),
                  VOICE_STATE_UPDATES: G(function (e) {
                      let t = !1;
                      for (let n of e.voiceStates) t = R(n.userId) || t;
                      return t;
                  }),
                  VOICE_CHANNEL_SELECT: G(function (e) {
                      O();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = R(e) || t;
                      return t;
                  }),
                  RELATIONSHIP_ADD: G(function (e) {
                      return R(e.relationship.id);
                  }),
                  RELATIONSHIP_REMOVE: G(function (e) {
                      return R(e.relationship.id);
                  }),
                  RELATIONSHIP_UPDATE: G(function (e) {
                      return R(e.relationship.id);
                  }),
                  RELATIONSHIP_PENDING_INCOMING_REMOVED: G(function (e) {
                      let t = !1;
                      for (let e of M.values("FRIEND_REQUESTS", !0))
                          e.relationshipType === p.eA$.PENDING_INCOMING && (t = R(e.userId) || t);
                      return t;
                  }),
                  CREATE_FRIEND_GROUP: G(function (e) {
                      return U(), !1;
                  }),
                  DELETE_FRIEND_GROUP: G(function (e) {
                      U();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = R(e) || t;
                      return t;
                  }),
                  ADD_USERS_TO_GROUP: G(function (e) {
                      U();
                      let t = !1;
                      for (let n of e.userIds) t = R(n) || t;
                      return t;
                  }),
                  REMOVE_USERS_FROM_GROUP: G(function (e) {
                      U();
                      let t = !1;
                      for (let n of e.userIds) t = R(n) || t;
                      return t;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: G(function (e) {
                      let t = !1;
                      for (let e of o.A.getUserAffinitiesMap().keys()) t = R(e) || t;
                      return t;
                  }),
                  USER_UPDATE: G(function (e) {
                      return R(e.user.id);
                  }),
                  CURRENT_USER_UPDATE: G(function (e) {
                      O();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = R(e) || t;
                      return t;
                  }),
                  LOGOUT: G(function () {
                      let e = M.size() > 0;
                      return M.clear(), (i = void 0), (y = new Map()), e;
                  }),
              },
    );
