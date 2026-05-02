let i;
n.d(t, { A: () => G, j: () => T }), n(321073);
var l,
    s = n(17928),
    r = n(713402),
    a = n(228366),
    o = n(870391),
    u = n(427358),
    d = n(734057),
    c = n(290863),
    h = n(994500),
    g = n(309010),
    A = n(461213),
    f = n(287809),
    E = n(977997),
    I = n(562153),
    S = n(914853),
    m = n(956753),
    p = n(406595),
    C = n(70191),
    _ = n(240516),
    N = n(652215),
    T =
        (((l = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS"),
        (l.SUGGESTIONS = "SUGGESTIONS"),
        (l.SAME_ACTIVITY = "SAME_ACTIVITY"),
        (l.ACTIVITIES = "ACTIVITIES"),
        (l.IN_GAME = "IN_GAME"),
        (l.ONLINE = "ONLINE"),
        (l.OFFLINE = "OFFLINE"),
        l);
let v = new r.J(
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
function M(e, t) {
    return String(Math.floor(Math.max(0, Math.min(e, Number("9".repeat(t)))))).padStart(t, "0");
}
function y(e) {
    return M(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
}
let D = new Map();
function x() {
    let e = new Map();
    for (let t of o.A.getGroups())
        for (let n of t.userIds) {
            let i = e.get(n);
            null == i && ((i = []), e.set(n, i)), i.push(t.id);
        }
    D = e;
}
function R() {
    let e = A.A.getPrimaryActivity();
    i = e?.application_id;
}
function O(e) {
    return (
        e.type === N.$pd.PLAYING ||
        e.type === N.$pd.COMPETING ||
        e.type === N.$pd.WATCHING ||
        e.type === N.$pd.STREAMING
    );
}
function U(e) {
    let t = (function (e) {
        let t = f.default.getUser(e);
        if (null == t) return null;
        let n = h.A.getRelationshipType(e),
            l = n === N.eA$.PENDING_INCOMING || n === N.eA$.PENDING_OUTGOING,
            s = h.A.isFriend(e),
            r = c.A.getActivities(e),
            a = h.A.getNickname(e),
            o = u.A.getUserAffinity(e)?.communicationProbability ?? 0;
        return l
            ? (function (e) {
                  var t, n;
                  let { userId: i, user: l, activities: s, nickname: r, relationshipType: a } = e,
                      o = h.A.getSince(i),
                      u = null != o ? new Date(o).getTime() : 0;
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
                          ((t = Number.isFinite(u) ? u : 0),
                          (n = i),
                          `REQ\0${M(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13)}\0${n}`),
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
                        o,
                        u,
                        h,
                        { userId: f, user: m, activities: _, nickname: T, affinity: v } = e,
                        { category: M, displayActivities: x } =
                            ((t = A.A.getPrimaryActivity()),
                            (n = i),
                            (l = t?.name != null && null != n),
                            (s = c.A.getStatus(f)),
                            (r = E.A.getVoiceStateForUser(f)),
                            (a = r?.channelId != null),
                            (u = (o = _.filter(O)).filter(C.A)),
                            (h = o.filter((e) => e.application_id === n)),
                            l && h.length > 0
                                ? { category: "SAME_ACTIVITY", displayActivities: h }
                                : u.length > 0
                                  ? { category: "IN_GAME", displayActivities: u }
                                  : a
                                    ? { category: "ACTIVITIES", displayActivities: _ }
                                    : s === N.clD.ONLINE || s === N.clD.IDLE || s === N.clD.DND
                                      ? { category: "ONLINE", displayActivities: o }
                                      : { category: "OFFLINE", displayActivities: o }),
                        R = "IN_GAME" === M ? (x[0]?.name ?? null) : null,
                        U = D.get(f) ?? [],
                        [L] = p.A.isFavorite(S.x.FRIENDS, f),
                        w = g.A.getVoiceChannelId() ?? g.A.getChannelId(),
                        P = null != w ? d.A.getChannel(w)?.guild_id : null,
                        G = c.A.getStatus(f),
                        j = G === N.clD.ONLINE,
                        b = x.some(O),
                        F = G === N.clD.DND || G === N.clD.IDLE,
                        V = I.Ay.getName(P, w, m);
                    return {
                        id: f,
                        userId: f,
                        user: m,
                        activities: x,
                        nickname: T,
                        category: "FRIEND",
                        activityCategory: L ? null : M,
                        groupIds: U,
                        sortKey: (function (e) {
                            let {
                                    isOnline: t,
                                    hasDisplayableActivity: n,
                                    isDndOrIdle: i,
                                    activityCategory: l,
                                    inGameActivityName: s,
                                    affinity: r,
                                    displayName: a,
                                    userId: o,
                                } = e,
                                u = t ? "0" : "1",
                                d = n ? "0" : "1",
                                c = i ? "0" : "1",
                                h = a.toLowerCase();
                            if ("IN_GAME" === l) {
                                let e,
                                    t = (e = s?.trim().toLowerCase() ?? "").length > 0 ? e : "￿";
                                return `FRD\0${u}\0${d}\0${c}\0${t}\0${y(r)}\0${h}\0${o}`;
                            }
                            return `FRD\0${u}\0${d}\0${c}\0${y(r)}\0${h}\0${o}`;
                        })({
                            isOnline: j,
                            hasDisplayableActivity: b,
                            isDndOrIdle: F,
                            activityCategory: M,
                            inGameActivityName: R,
                            affinity: v,
                            displayName: V,
                            userId: f,
                        }),
                    };
                })({ userId: e, user: t, activities: r, nickname: a, affinity: o })
              : (function (e) {
                    let { userId: t, user: n, activities: i, nickname: l, affinity: s } = e;
                    if (!(s > _.u.HIGH_AFFINITY_MINIMUM)) return null;
                    let r = E.A.getVoiceStateForUser(t),
                        a = r?.channelId,
                        o = null != a ? d.A.getChannel(a)?.guild_id : null,
                        u = i.length > 0 || null != a,
                        c = I.Ay.getName(o, a, n);
                    return {
                        id: t,
                        userId: t,
                        user: n,
                        activities: i,
                        nickname: l,
                        category: "SUGGESTION",
                        activityCategory: null,
                        groupIds: [],
                        sortKey: `SUG\0${u ? "0" : "1"}\0${y(s)}\0${c.toLowerCase()}\0${t}`,
                    };
                })({ userId: e, user: t, activities: r, nickname: a, affinity: o });
    })(e);
    return null == t ? v.delete(e) : v.set(e, t);
}
function L() {
    v.clear(), x(), R();
    let e = !1;
    for (let [t, n] of h.A.getMutableRelationships().entries())
        (n === N.eA$.PENDING_INCOMING || n === N.eA$.PENDING_OUTGOING) && (e = U(t) || e);
    for (let t of u.A.getUserAffinitiesMap().keys()) h.A.isFriend(t) || (e = U(t) || e);
    for (let t of h.A.getFriendIDs()) e = U(t) || e;
    return e;
}
class w extends s.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        this.waitFor(d.A, o.A, p.A, c.A, h.A, g.A, A.A, u.A, f.default, E.A), L();
    }
    getRows(e) {
        return [v.values(e), v.version];
    }
    getFriend(e) {
        return v.get(e);
    }
}
let P = (e) => (0, m.v$)(e, "FriendsWidgetFriendsStore"),
    G = new w(
        a.h,
        __OVERLAY__
            ? {}
            : {
                  POST_CONNECTION_OPEN: P(L),
                  OVERLAY_INITIALIZE: P(L),
                  CACHE_LOADED: P(L),
                  CACHE_LOADED_LAZY: P(L),
                  FRIENDS_LIST_POPOUT_MOUNTED: P(L),
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: P(function (e) {
                      return e.tab === S.x.FRIENDS && U(e.targetId);
                  }),
                  PRESENCE_UPDATES: P(function (e) {
                      let t = !1;
                      for (let n of e.updates) {
                          let e = n.user?.id;
                          null != e && (t = U(e) || t);
                      }
                      return t;
                  }),
                  PRESENCES_REPLACE: P(function (e) {
                      let t = !1;
                      for (let n of e.presences) {
                          let e = n.user?.id;
                          null != e && (t = U(e) || t);
                      }
                      return t;
                  }),
                  ACTIVITY_METADATA_UPDATE: P(function (e) {
                      return U(e.userId);
                  }),
                  VOICE_STATE_UPDATES: P(function (e) {
                      let t = !1;
                      for (let n of e.voiceStates) t = U(n.userId) || t;
                      return t;
                  }),
                  VOICE_CHANNEL_SELECT: P(function (e) {
                      R();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = U(e) || t;
                      return t;
                  }),
                  RELATIONSHIP_ADD: P(function (e) {
                      return U(e.relationship.id);
                  }),
                  RELATIONSHIP_REMOVE: P(function (e) {
                      return U(e.relationship.id);
                  }),
                  RELATIONSHIP_UPDATE: P(function (e) {
                      return U(e.relationship.id);
                  }),
                  RELATIONSHIP_PENDING_INCOMING_REMOVED: P(function (e) {
                      let t = !1;
                      for (let e of v.values("FRIEND_REQUESTS", !0))
                          e.relationshipType === N.eA$.PENDING_INCOMING && (t = U(e.userId) || t);
                      return t;
                  }),
                  CREATE_FRIEND_GROUP: P(function (e) {
                      return x(), !1;
                  }),
                  DELETE_FRIEND_GROUP: P(function (e) {
                      x();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = U(e) || t;
                      return t;
                  }),
                  ADD_USERS_TO_GROUP: P(function (e) {
                      x();
                      let t = !1;
                      for (let n of e.userIds) t = U(n) || t;
                      return t;
                  }),
                  REMOVE_USERS_FROM_GROUP: P(function (e) {
                      x();
                      let t = !1;
                      for (let n of e.userIds) t = U(n) || t;
                      return t;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: P(function (e) {
                      let t = !1;
                      for (let e of u.A.getUserAffinitiesMap().keys()) t = U(e) || t;
                      return t;
                  }),
                  USER_UPDATE: P(function (e) {
                      return U(e.user.id);
                  }),
                  CURRENT_USER_UPDATE: P(function (e) {
                      R();
                      let t = !1;
                      for (let e of h.A.getFriendIDs()) t = U(e) || t;
                      return t;
                  }),
                  LOGOUT: P(function () {
                      let e = v.size() > 0;
                      return v.clear(), (i = void 0), (D = new Map()), e;
                  }),
              },
    );
