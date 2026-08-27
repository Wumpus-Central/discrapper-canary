let i;
n.d(t, { A: () => b, j: () => T }), n(321073);
var l,
    r = n(17928),
    s = n(713402),
    a = n(228366),
    o = n(870391),
    u = n(427358),
    d = n(734057),
    c = n(290863),
    h = n(994500),
    g = n(309010),
    f = n(461213),
    A = n(287809),
    E = n(977997),
    p = n(562153),
    m = n(914853),
    I = n(956753),
    S = n(406595),
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
let v = new s.J(
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
function M(e) {
    return y(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
}
let D = new Map();
function R() {
    let e = new Map();
    for (let t of o.A.getGroups())
        for (let n of t.userIds) {
            let i = e.get(n);
            null == i && ((i = []), e.set(n, i)), i.push(t.id);
        }
    D = e;
}
function x() {
    let e = f.A.getPrimaryActivity();
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
        let t = A.default.getUser(e);
        if (null == t) return null;
        let n = h.A.getRelationshipType(e),
            l = n === N.eA$.PENDING_INCOMING || n === N.eA$.PENDING_OUTGOING,
            r = h.A.isFriend(e),
            s = c.A.getActivities(e),
            a = h.A.getNickname(e),
            o = u.A.getUserAffinity(e)?.communicationProbability ?? 0;
        return l
            ? (function (e) {
                  var t, n;
                  let { userId: i, user: l, activities: r, nickname: s, relationshipType: a } = e,
                      o = h.A.getSince(i),
                      u = null != o ? new Date(o).getTime() : 0;
                  return {
                      id: i,
                      userId: i,
                      user: l,
                      activities: r,
                      nickname: s,
                      relationshipType: a,
                      category: "FRIEND_REQUEST",
                      activityCategory: null,
                      groupIds: [],
                      sortKey:
                          ((t = Number.isFinite(u) ? u : 0),
                          (n = i),
                          `REQ\0${y(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13)}\0${n}`),
                  };
              })({ userId: e, user: t, activities: s, nickname: a, relationshipType: n })
            : r
              ? (function (e) {
                    let t,
                        n,
                        l,
                        r,
                        s,
                        a,
                        o,
                        u,
                        h,
                        { userId: A, user: I, activities: _, nickname: T, affinity: v } = e,
                        { category: y, displayActivities: R } =
                            ((t = f.A.getPrimaryActivity()),
                            (n = i),
                            (l = t?.name != null && null != n),
                            (r = c.A.getStatus(A)),
                            (s = E.A.getVoiceStateForUser(A)),
                            (a = s?.channelId != null),
                            (u = (o = _.filter(O)).filter(C.A)),
                            (h = o.filter((e) => e.application_id === n)),
                            l && h.length > 0
                                ? { category: "SAME_ACTIVITY", displayActivities: h }
                                : u.length > 0
                                  ? { category: "IN_GAME", displayActivities: u }
                                  : a
                                    ? { category: "ACTIVITIES", displayActivities: _ }
                                    : r === N.clD.ONLINE || r === N.clD.IDLE || r === N.clD.DND
                                      ? { category: "ONLINE", displayActivities: o }
                                      : { category: "OFFLINE", displayActivities: o }),
                        x = "IN_GAME" === y ? (R[0]?.name ?? null) : null,
                        U = D.get(A) ?? [],
                        [w] = S.A.isFavorite(m.x.FRIENDS, A),
                        P = g.Ay.getVoiceChannelId() ?? g.Ay.getChannelId(),
                        L = null != P ? d.A.getChannel(P)?.guild_id : null,
                        b = c.A.getStatus(A),
                        G = b === N.clD.ONLINE,
                        F = R.some(O),
                        j = b === N.clD.DND || b === N.clD.IDLE,
                        V = p.Ay.getName(L, P, I);
                    return {
                        id: A,
                        userId: A,
                        user: I,
                        activities: R,
                        nickname: T,
                        category: "FRIEND",
                        activityCategory: w ? null : y,
                        groupIds: U,
                        sortKey: (function (e) {
                            let {
                                    isOnline: t,
                                    hasDisplayableActivity: n,
                                    isDndOrIdle: i,
                                    activityCategory: l,
                                    inGameActivityName: r,
                                    affinity: s,
                                    displayName: a,
                                    userId: o,
                                } = e,
                                u = t ? "0" : "1",
                                d = n ? "0" : "1",
                                c = i ? "0" : "1",
                                h = a.toLowerCase();
                            if ("IN_GAME" === l) {
                                let e,
                                    t = (e = r?.trim().toLowerCase() ?? "").length > 0 ? e : "\uFFFF";
                                return `FRD\0${u}\0${d}\0${c}\0${t}\0${M(s)}\0${h}\0${o}`;
                            }
                            return `FRD\0${u}\0${d}\0${c}\0${M(s)}\0${h}\0${o}`;
                        })({
                            isOnline: G,
                            hasDisplayableActivity: F,
                            isDndOrIdle: j,
                            activityCategory: y,
                            inGameActivityName: x,
                            affinity: v,
                            displayName: V,
                            userId: A,
                        }),
                    };
                })({ userId: e, user: t, activities: s, nickname: a, affinity: o })
              : (function (e) {
                    let { userId: t, user: n, activities: i, nickname: l, affinity: r } = e;
                    if (!(r > _.u.HIGH_AFFINITY_MINIMUM)) return null;
                    let s = E.A.getVoiceStateForUser(t),
                        a = s?.channelId,
                        o = null != a ? d.A.getChannel(a)?.guild_id : null,
                        u = i.length > 0 || null != a,
                        c = p.Ay.getName(o, a, n);
                    return {
                        id: t,
                        userId: t,
                        user: n,
                        activities: i,
                        nickname: l,
                        category: "SUGGESTION",
                        activityCategory: null,
                        groupIds: [],
                        sortKey: `SUG\0${u ? "0" : "1"}\0${M(r)}\0${c.toLowerCase()}\0${t}`,
                    };
                })({ userId: e, user: t, activities: s, nickname: a, affinity: o });
    })(e);
    return null == t ? v.delete(e) : v.set(e, t);
}
function w() {
    v.clear(), R(), x();
    let e = !1;
    for (let [t, n] of h.A.getMutableRelationships().entries())
        (n === N.eA$.PENDING_INCOMING || n === N.eA$.PENDING_OUTGOING) && (e = U(t) || e);
    for (let t of u.A.getUserAffinitiesMap().keys()) h.A.isFriend(t) || (e = U(t) || e);
    for (let t of h.A.getFriendIDs()) e = U(t) || e;
    return e;
}
class P extends r.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        this.waitFor(d.A, o.A, S.A, c.A, h.A, g.Ay, f.A, u.A, A.default, E.A), w();
    }
    getRows(e) {
        return [v.values(e), v.version];
    }
    getFriend(e) {
        return v.get(e);
    }
}
function L(e) {
    return (0, I.v$)(e, "FriendsWidgetFriendsStore");
}
let b = new P(
    a.h,
    __OVERLAY__
        ? {}
        : {
              POST_CONNECTION_OPEN: L(w),
              OVERLAY_INITIALIZE: L(w),
              CACHE_LOADED: L(w),
              CACHE_LOADED_LAZY: L(w),
              FRIENDS_LIST_POPOUT_MOUNTED: L(w),
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: L(function (e) {
                  return e.tab === m.x.FRIENDS && U(e.targetId);
              }),
              PRESENCE_UPDATES: L(function (e) {
                  let t = !1;
                  for (let n of e.updates) {
                      let e = n.user?.id;
                      null != e && (t = U(e) || t);
                  }
                  return t;
              }),
              PRESENCES_REPLACE: L(function (e) {
                  let t = !1;
                  for (let n of e.presences) {
                      let e = n.user?.id;
                      null != e && (t = U(e) || t);
                  }
                  return t;
              }),
              ACTIVITY_METADATA_UPDATE: L(function (e) {
                  return U(e.userId);
              }),
              VOICE_STATE_UPDATES: L(function (e) {
                  let t = !1;
                  for (let n of e.voiceStates) t = U(n.userId) || t;
                  return t;
              }),
              VOICE_CHANNEL_SELECT: L(function (e) {
                  x();
                  let t = !1;
                  for (let e of h.A.getFriendIDs()) t = U(e) || t;
                  return t;
              }),
              RELATIONSHIP_ADD: L(function (e) {
                  return U(e.relationship.id);
              }),
              RELATIONSHIP_REMOVE: L(function (e) {
                  return U(e.relationship.id);
              }),
              RELATIONSHIP_UPDATE: L(function (e) {
                  return U(e.relationship.id);
              }),
              RELATIONSHIP_PENDING_INCOMING_REMOVED: L(function (e) {
                  let t = !1;
                  for (let e of v.values("FRIEND_REQUESTS", !0))
                      e.relationshipType === N.eA$.PENDING_INCOMING && (t = U(e.userId) || t);
                  return t;
              }),
              CREATE_FRIEND_GROUP: L(function (e) {
                  return R(), !1;
              }),
              DELETE_FRIEND_GROUP: L(function (e) {
                  R();
                  let t = !1;
                  for (let e of h.A.getFriendIDs()) t = U(e) || t;
                  return t;
              }),
              ADD_USERS_TO_GROUP: L(function (e) {
                  R();
                  let t = !1;
                  for (let n of e.userIds) t = U(n) || t;
                  return t;
              }),
              REMOVE_USERS_FROM_GROUP: L(function (e) {
                  R();
                  let t = !1;
                  for (let n of e.userIds) t = U(n) || t;
                  return t;
              }),
              LOAD_USER_AFFINITIES_V2_SUCCESS: L(function (e) {
                  let t = !1;
                  for (let e of u.A.getUserAffinitiesMap().keys()) t = U(e) || t;
                  return t;
              }),
              USER_UPDATE: L(function (e) {
                  return U(e.user.id);
              }),
              CURRENT_USER_UPDATE: L(function (e) {
                  x();
                  let t = !1;
                  for (let e of h.A.getFriendIDs()) t = U(e) || t;
                  return t;
              }),
              LOGOUT: L(function () {
                  let e = v.size() > 0;
                  return v.clear(), (i = void 0), (D = new Map()), e;
              }),
          },
);
