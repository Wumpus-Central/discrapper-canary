let i;
(n.d(t, { A: () => b, j: () => N }), n(321073));
var l,
    r = n(17928),
    s = n(713402),
    a = n(73153),
    o = n(870391),
    u = n(427358),
    d = n(734057),
    c = n(290863),
    h = n(994500),
    f = n(309010),
    g = n(461213),
    A = n(287809),
    p = n(977997),
    m = n(562153),
    I = n(914853),
    E = n(956753),
    S = n(406595),
    C = n(70191),
    _ = n(240516),
    T = n(652215),
    N =
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
            (null == i && ((i = []), e.set(n, i)), i.push(t.id));
        }
    D = e;
}
function O() {
    let e = g.A.getPrimaryActivity();
    i = e?.application_id;
}
function x(e) {
    return (
        e.type === T.$pd.PLAYING ||
        e.type === T.$pd.COMPETING ||
        e.type === T.$pd.WATCHING ||
        e.type === T.$pd.STREAMING
    );
}
function L(e) {
    let t = (function (e) {
        let t = A.default.getUser(e);
        if (null == t) return null;
        let n = h.A.getRelationshipType(e),
            l = n === T.eA$.PENDING_INCOMING || n === T.eA$.PENDING_OUTGOING,
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
                        { userId: A, user: E, activities: _, nickname: N, affinity: v } = e,
                        { category: y, displayActivities: R } =
                            ((t = g.A.getPrimaryActivity()),
                            (n = i),
                            (l = t?.name != null && null != n),
                            (r = c.A.getStatus(A)),
                            (s = p.A.getVoiceStateForUser(A)),
                            (a = s?.channelId != null),
                            (u = (o = _.filter(x)).filter(C.A)),
                            (h = o.filter((e) => e.application_id === n)),
                            l && h.length > 0
                                ? { category: "SAME_ACTIVITY", displayActivities: h }
                                : u.length > 0
                                  ? { category: "IN_GAME", displayActivities: u }
                                  : a
                                    ? { category: "ACTIVITIES", displayActivities: _ }
                                    : r === T.clD.ONLINE || r === T.clD.IDLE || r === T.clD.DND
                                      ? { category: "ONLINE", displayActivities: o }
                                      : { category: "OFFLINE", displayActivities: o }),
                        O = "IN_GAME" === y ? (R[0]?.name ?? null) : null,
                        L = D.get(A) ?? [],
                        [w] = S.A.isFavorite(I.x.FRIENDS, A),
                        U = f.Ay.getVoiceChannelId() ?? f.Ay.getChannelId(),
                        P = null != U ? d.A.getChannel(U)?.guild_id : null,
                        b = c.A.getStatus(A),
                        G = b === T.clD.ONLINE,
                        F = R.some(x),
                        j = b === T.clD.DND || b === T.clD.IDLE,
                        k = m.Ay.getName(P, U, E);
                    return {
                        id: A,
                        userId: A,
                        user: E,
                        activities: R,
                        nickname: N,
                        category: "FRIEND",
                        activityCategory: w ? null : y,
                        groupIds: L,
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
                            inGameActivityName: O,
                            affinity: v,
                            displayName: k,
                            userId: A,
                        }),
                    };
                })({ userId: e, user: t, activities: s, nickname: a, affinity: o })
              : (function (e) {
                    let { userId: t, user: n, activities: i, nickname: l, affinity: r } = e;
                    if (!(r > _.u.HIGH_AFFINITY_MINIMUM)) return null;
                    let s = p.A.getVoiceStateForUser(t),
                        a = s?.channelId,
                        o = null != a ? d.A.getChannel(a)?.guild_id : null,
                        u = i.length > 0 || null != a,
                        c = m.Ay.getName(o, a, n);
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
    (v.clear(), R(), O());
    let e = !1;
    for (let [t, n] of h.A.getMutableRelationships().entries())
        (n === T.eA$.PENDING_INCOMING || n === T.eA$.PENDING_OUTGOING) && (e = L(t) || e);
    for (let t of u.A.getUserAffinitiesMap().keys()) h.A.isFriend(t) || (e = L(t) || e);
    for (let t of h.A.getFriendIDs()) e = L(t) || e;
    return e;
}
class U extends r.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        (this.waitFor(d.A, o.A, S.A, c.A, h.A, f.Ay, g.A, u.A, A.default, p.A), w());
    }
    getRows(e) {
        return [v.values(e), v.version];
    }
    getFriend(e) {
        return v.get(e);
    }
}
function P(e) {
    return (0, E.v$)(e, "FriendsWidgetFriendsStore");
}
let b = new U(
    a.h,
    __OVERLAY__
        ? {}
        : {
              POST_CONNECTION_OPEN: P(w),
              OVERLAY_INITIALIZE: P(w),
              CACHE_LOADED: P(w),
              CACHE_LOADED_LAZY: P(w),
              FRIENDS_LIST_POPOUT_MOUNTED: P(w),
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: P(function (e) {
                  return e.tab === I.x.FRIENDS && L(e.targetId);
              }),
              PRESENCE_UPDATES: P(function (e) {
                  let t = !1;
                  for (let n of e.updates) {
                      let e = n.user?.id;
                      null != e && (t = L(e) || t);
                  }
                  return t;
              }),
              PRESENCES_REPLACE: P(function (e) {
                  let t = !1;
                  for (let n of e.presences) {
                      let e = n.user?.id;
                      null != e && (t = L(e) || t);
                  }
                  return t;
              }),
              ACTIVITY_METADATA_UPDATE: P(function (e) {
                  return L(e.userId);
              }),
              VOICE_STATE_UPDATES: P(function (e) {
                  let t = !1;
                  for (let n of e.voiceStates) t = L(n.userId) || t;
                  return t;
              }),
              VOICE_CHANNEL_SELECT: P(function (e) {
                  O();
                  let t = !1;
                  for (let e of h.A.getFriendIDs()) t = L(e) || t;
                  return t;
              }),
              RELATIONSHIP_ADD: P(function (e) {
                  return L(e.relationship.id);
              }),
              RELATIONSHIP_REMOVE: P(function (e) {
                  return L(e.relationship.id);
              }),
              RELATIONSHIP_UPDATE: P(function (e) {
                  return L(e.relationship.id);
              }),
              RELATIONSHIP_PENDING_INCOMING_REMOVED: P(function (e) {
                  let t = !1;
                  for (let e of v.values("FRIEND_REQUESTS", !0))
                      e.relationshipType === T.eA$.PENDING_INCOMING && (t = L(e.userId) || t);
                  return t;
              }),
              CREATE_FRIEND_GROUP: P(function (e) {
                  return (R(), !1);
              }),
              DELETE_FRIEND_GROUP: P(function (e) {
                  R();
                  let t = !1;
                  for (let e of h.A.getFriendIDs()) t = L(e) || t;
                  return t;
              }),
              ADD_USERS_TO_GROUP: P(function (e) {
                  R();
                  let t = !1;
                  for (let n of e.userIds) t = L(n) || t;
                  return t;
              }),
              REMOVE_USERS_FROM_GROUP: P(function (e) {
                  R();
                  let t = !1;
                  for (let n of e.userIds) t = L(n) || t;
                  return t;
              }),
              LOAD_USER_AFFINITIES_V2_SUCCESS: P(function (e) {
                  let t = !1;
                  for (let e of u.A.getUserAffinitiesMap().keys()) t = L(e) || t;
                  return t;
              }),
              USER_UPDATE: P(function (e) {
                  return L(e.user.id);
              }),
              CURRENT_USER_UPDATE: P(function (e) {
                  O();
                  let t = !1;
                  for (let e of h.A.getFriendIDs()) t = L(e) || t;
                  return t;
              }),
              LOGOUT: P(function () {
                  let e = v.size() > 0;
                  return (v.clear(), (i = void 0), (D = new Map()), e);
              }),
          },
);
