let i;
(n.d(t, { A: () => b, j: () => T }), n(321073));
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
    C = n(287809),
    A = n(977997),
    p = n(562153),
    m = n(914853),
    E = n(956753),
    I = n(406595),
    S = n(70191),
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
let M = new s.J(
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
function v(e, t) {
    return String(Math.floor(Math.max(0, Math.min(e, Number("9".repeat(t)))))).padStart(t, "0");
}
function y(e) {
    return v(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
}
let L = new Map();
function x() {
    let e = new Map();
    for (let t of o.A.getGroups())
        for (let n of t.userIds) {
            let i = e.get(n);
            (null == i && ((i = []), e.set(n, i)), i.push(t.id));
        }
    L = e;
}
function R() {
    let e = g.A.getPrimaryActivity();
    i = e?.application_id;
}
function D(e) {
    return (
        e.type === N.$pd.PLAYING ||
        e.type === N.$pd.COMPETING ||
        e.type === N.$pd.WATCHING ||
        e.type === N.$pd.STREAMING
    );
}
function O(e) {
    let t = (function (e) {
        let t = C.default.getUser(e);
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
                          `REQ\0${v(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13)}\0${n}`),
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
                        { userId: C, user: E, activities: _, nickname: T, affinity: M } = e,
                        { category: v, displayActivities: x } =
                            ((t = g.A.getPrimaryActivity()),
                            (n = i),
                            (l = t?.name != null && null != n),
                            (r = c.A.getStatus(C)),
                            (s = A.A.getVoiceStateForUser(C)),
                            (a = s?.channelId != null),
                            (u = (o = _.filter(D)).filter(S.A)),
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
                        R = "IN_GAME" === v ? (x[0]?.name ?? null) : null,
                        O = L.get(C) ?? [],
                        [w] = I.A.isFavorite(m.x.FRIENDS, C),
                        U = f.Ay.getVoiceChannelId() ?? f.Ay.getChannelId(),
                        P = null != U ? d.A.getChannel(U)?.guild_id : null,
                        b = c.A.getStatus(C),
                        j = b === N.clD.ONLINE,
                        V = x.some(D),
                        F = b === N.clD.DND || b === N.clD.IDLE,
                        G = p.Ay.getName(P, U, E);
                    return {
                        id: C,
                        userId: C,
                        user: E,
                        activities: x,
                        nickname: T,
                        category: "FRIEND",
                        activityCategory: w ? null : v,
                        groupIds: O,
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
                                return `FRD\0${u}\0${d}\0${c}\0${t}\0${y(s)}\0${h}\0${o}`;
                            }
                            return `FRD\0${u}\0${d}\0${c}\0${y(s)}\0${h}\0${o}`;
                        })({
                            isOnline: j,
                            hasDisplayableActivity: V,
                            isDndOrIdle: F,
                            activityCategory: v,
                            inGameActivityName: R,
                            affinity: M,
                            displayName: G,
                            userId: C,
                        }),
                    };
                })({ userId: e, user: t, activities: s, nickname: a, affinity: o })
              : (function (e) {
                    let { userId: t, user: n, activities: i, nickname: l, affinity: r } = e;
                    if (!(r > _.u.HIGH_AFFINITY_MINIMUM)) return null;
                    let s = A.A.getVoiceStateForUser(t),
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
                        sortKey: `SUG\0${u ? "0" : "1"}\0${y(r)}\0${c.toLowerCase()}\0${t}`,
                    };
                })({ userId: e, user: t, activities: s, nickname: a, affinity: o });
    })(e);
    return null == t ? M.delete(e) : M.set(e, t);
}
function w() {
    (M.clear(), x(), R());
    let e = !1;
    for (let [t, n] of h.A.getMutableRelationships().entries())
        (n === N.eA$.PENDING_INCOMING || n === N.eA$.PENDING_OUTGOING) && (e = O(t) || e);
    for (let t of u.A.getUserAffinitiesMap().keys()) h.A.isFriend(t) || (e = O(t) || e);
    for (let t of h.A.getFriendIDs()) e = O(t) || e;
    return e;
}
class U extends r.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        (this.waitFor(d.A, o.A, I.A, c.A, h.A, f.Ay, g.A, u.A, C.default, A.A), w());
    }
    getRows(e) {
        return [M.values(e), M.version];
    }
    getFriend(e) {
        return M.get(e);
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
                  return e.tab === m.x.FRIENDS && O(e.targetId);
              }),
              PRESENCE_UPDATES: P(function (e) {
                  let t = !1;
                  for (let n of e.updates) {
                      let e = n.user?.id;
                      null != e && (t = O(e) || t);
                  }
                  return t;
              }),
              PRESENCES_REPLACE: P(function (e) {
                  let t = !1;
                  for (let n of e.presences) {
                      let e = n.user?.id;
                      null != e && (t = O(e) || t);
                  }
                  return t;
              }),
              ACTIVITY_METADATA_UPDATE: P(function (e) {
                  return O(e.userId);
              }),
              VOICE_STATE_UPDATES: P(function (e) {
                  let t = !1;
                  for (let n of e.voiceStates) t = O(n.userId) || t;
                  return t;
              }),
              VOICE_CHANNEL_SELECT: P(function (e) {
                  R();
                  let t = !1;
                  for (let e of h.A.getFriendIDs()) t = O(e) || t;
                  return t;
              }),
              RELATIONSHIP_ADD: P(function (e) {
                  return O(e.relationship.id);
              }),
              RELATIONSHIP_REMOVE: P(function (e) {
                  return O(e.relationship.id);
              }),
              RELATIONSHIP_UPDATE: P(function (e) {
                  return O(e.relationship.id);
              }),
              RELATIONSHIP_PENDING_INCOMING_REMOVED: P(function (e) {
                  let t = !1;
                  for (let e of M.values("FRIEND_REQUESTS", !0))
                      e.relationshipType === N.eA$.PENDING_INCOMING && (t = O(e.userId) || t);
                  return t;
              }),
              CREATE_FRIEND_GROUP: P(function (e) {
                  return (x(), !1);
              }),
              DELETE_FRIEND_GROUP: P(function (e) {
                  x();
                  let t = !1;
                  for (let e of h.A.getFriendIDs()) t = O(e) || t;
                  return t;
              }),
              ADD_USERS_TO_GROUP: P(function (e) {
                  x();
                  let t = !1;
                  for (let n of e.userIds) t = O(n) || t;
                  return t;
              }),
              REMOVE_USERS_FROM_GROUP: P(function (e) {
                  x();
                  let t = !1;
                  for (let n of e.userIds) t = O(n) || t;
                  return t;
              }),
              LOAD_USER_AFFINITIES_V2_SUCCESS: P(function (e) {
                  let t = !1;
                  for (let e of u.A.getUserAffinitiesMap().keys()) t = O(e) || t;
                  return t;
              }),
              USER_UPDATE: P(function (e) {
                  return O(e.user.id);
              }),
              CURRENT_USER_UPDATE: P(function (e) {
                  R();
                  let t = !1;
                  for (let e of h.A.getFriendIDs()) t = O(e) || t;
                  return t;
              }),
              LOGOUT: P(function () {
                  let e = M.size() > 0;
                  return (M.clear(), (i = void 0), (L = new Map()), e);
              }),
          },
);
