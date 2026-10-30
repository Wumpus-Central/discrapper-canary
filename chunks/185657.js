let i;
(n.d(t, { A: () => G, j: () => v }), n(321073));
var l,
    r = n(350835),
    s = n(17928),
    a = n(713402),
    o = n(73153),
    u = n(870391),
    d = n(427358),
    c = n(734057),
    h = n(290863),
    f = n(994500),
    g = n(309010),
    A = n(461213),
    p = n(287809),
    m = n(977997),
    E = n(562153),
    I = n(914853),
    S = n(956753),
    C = n(406595),
    _ = n(70191),
    N = n(240516),
    T = n(652215),
    v =
        (((l = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS"),
        (l.SUGGESTIONS = "SUGGESTIONS"),
        (l.SAME_ACTIVITY = "SAME_ACTIVITY"),
        (l.ACTIVITIES = "ACTIVITIES"),
        (l.IN_GAME = "IN_GAME"),
        (l.ONLINE = "ONLINE"),
        (l.OFFLINE = "OFFLINE"),
        l);
let y = new a.J(
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
function D(e) {
    return M(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
}
let R = new Map();
function O() {
    let e = new Map();
    for (let t of u.A.getGroups())
        for (let n of t.userIds) {
            let i = e.get(n);
            (null == i && ((i = []), e.set(n, i)), i.push(t.id));
        }
    R = e;
}
function x() {
    let e = A.A.getPrimaryActivity();
    i = e?.application_id;
}
function L(e) {
    return e.type === r.$.PLAYING || e.type === r.$.COMPETING || e.type === r.$.WATCHING || e.type === r.$.STREAMING;
}
function w(e) {
    let t = (function (e) {
        let t = p.default.getUser(e);
        if (null == t) return null;
        let n = f.A.getRelationshipType(e),
            l = n === T.eA$.PENDING_INCOMING || n === T.eA$.PENDING_OUTGOING,
            r = f.A.isFriend(e),
            s = h.A.getActivities(e),
            a = f.A.getNickname(e),
            o = d.A.getUserAffinity(e)?.communicationProbability ?? 0;
        return l
            ? (function (e) {
                  var t, n;
                  let { userId: i, user: l, activities: r, nickname: s, relationshipType: a } = e,
                      o = f.A.getSince(i),
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
                          `REQ\0${M(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13)}\0${n}`),
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
                        d,
                        { userId: f, user: p, activities: S, nickname: N, affinity: v } = e,
                        { category: y, displayActivities: M } =
                            ((t = A.A.getPrimaryActivity()),
                            (n = i),
                            (l = t?.name != null && null != n),
                            (r = h.A.getStatus(f)),
                            (s = m.A.getVoiceStateForUser(f)),
                            (a = s?.channelId != null),
                            (u = (o = S.filter(L)).filter(_.A)),
                            (d = o.filter((e) => e.application_id === n)),
                            l && d.length > 0
                                ? { category: "SAME_ACTIVITY", displayActivities: d }
                                : u.length > 0
                                  ? { category: "IN_GAME", displayActivities: u }
                                  : a
                                    ? { category: "ACTIVITIES", displayActivities: S }
                                    : r === T.clD.ONLINE || r === T.clD.IDLE || r === T.clD.DND
                                      ? { category: "ONLINE", displayActivities: o }
                                      : { category: "OFFLINE", displayActivities: o }),
                        O = "IN_GAME" === y ? (M[0]?.name ?? null) : null,
                        x = R.get(f) ?? [],
                        [w] = C.A.isFavorite(I.x.FRIENDS, f),
                        U = g.Ay.getVoiceChannelId() ?? g.Ay.getChannelId(),
                        P = null != U ? c.A.getChannel(U)?.guild_id : null,
                        b = h.A.getStatus(f),
                        G = b === T.clD.ONLINE,
                        F = M.some(L),
                        j = b === T.clD.DND || b === T.clD.IDLE,
                        k = E.Ay.getName(P, U, p);
                    return {
                        id: f,
                        userId: f,
                        user: p,
                        activities: M,
                        nickname: N,
                        category: "FRIEND",
                        activityCategory: w ? null : y,
                        groupIds: x,
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
                                return `FRD\0${u}\0${d}\0${c}\0${t}\0${D(s)}\0${h}\0${o}`;
                            }
                            return `FRD\0${u}\0${d}\0${c}\0${D(s)}\0${h}\0${o}`;
                        })({
                            isOnline: G,
                            hasDisplayableActivity: F,
                            isDndOrIdle: j,
                            activityCategory: y,
                            inGameActivityName: O,
                            affinity: v,
                            displayName: k,
                            userId: f,
                        }),
                    };
                })({ userId: e, user: t, activities: s, nickname: a, affinity: o })
              : (function (e) {
                    let { userId: t, user: n, activities: i, nickname: l, affinity: r } = e;
                    if (!(r > N.u.HIGH_AFFINITY_MINIMUM)) return null;
                    let s = m.A.getVoiceStateForUser(t),
                        a = s?.channelId,
                        o = null != a ? c.A.getChannel(a)?.guild_id : null,
                        u = i.length > 0 || null != a,
                        d = E.Ay.getName(o, a, n);
                    return {
                        id: t,
                        userId: t,
                        user: n,
                        activities: i,
                        nickname: l,
                        category: "SUGGESTION",
                        activityCategory: null,
                        groupIds: [],
                        sortKey: `SUG\0${u ? "0" : "1"}\0${D(r)}\0${d.toLowerCase()}\0${t}`,
                    };
                })({ userId: e, user: t, activities: s, nickname: a, affinity: o });
    })(e);
    return null == t ? y.delete(e) : y.set(e, t);
}
function U() {
    (y.clear(), O(), x());
    let e = !1;
    for (let [t, n] of f.A.getMutableRelationships().entries())
        (n === T.eA$.PENDING_INCOMING || n === T.eA$.PENDING_OUTGOING) && (e = w(t) || e);
    for (let t of d.A.getUserAffinitiesMap().keys()) f.A.isFriend(t) || (e = w(t) || e);
    for (let t of f.A.getFriendIDs()) e = w(t) || e;
    return e;
}
class P extends s.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        (this.waitFor(c.A, u.A, C.A, h.A, f.A, g.Ay, A.A, d.A, p.default, m.A), U());
    }
    getRows(e) {
        return [y.values(e), y.version];
    }
    getFriend(e) {
        return y.get(e);
    }
}
function b(e) {
    return (0, S.v$)(e, "FriendsWidgetFriendsStore");
}
let G = new P(
    o.h,
    __OVERLAY__
        ? {}
        : {
              POST_CONNECTION_OPEN: b(U),
              OVERLAY_INITIALIZE: b(U),
              CACHE_LOADED: b(U),
              CACHE_LOADED_LAZY: b(U),
              FRIENDS_LIST_POPOUT_MOUNTED: b(U),
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: b(function (e) {
                  return e.tab === I.x.FRIENDS && w(e.targetId);
              }),
              PRESENCE_UPDATES: b(function (e) {
                  let t = !1;
                  for (let n of e.updates) {
                      let e = n.user?.id;
                      null != e && (t = w(e) || t);
                  }
                  return t;
              }),
              PRESENCES_REPLACE: b(function (e) {
                  let t = !1;
                  for (let n of e.presences) {
                      let e = n.user?.id;
                      null != e && (t = w(e) || t);
                  }
                  return t;
              }),
              ACTIVITY_METADATA_UPDATE: b(function (e) {
                  return w(e.userId);
              }),
              VOICE_STATE_UPDATES: b(function (e) {
                  let t = !1;
                  for (let n of e.voiceStates) t = w(n.userId) || t;
                  return t;
              }),
              VOICE_CHANNEL_SELECT: b(function (e) {
                  x();
                  let t = !1;
                  for (let e of f.A.getFriendIDs()) t = w(e) || t;
                  return t;
              }),
              RELATIONSHIP_ADD: b(function (e) {
                  return w(e.relationship.id);
              }),
              RELATIONSHIP_REMOVE: b(function (e) {
                  return w(e.relationship.id);
              }),
              RELATIONSHIP_UPDATE: b(function (e) {
                  return w(e.relationship.id);
              }),
              RELATIONSHIP_PENDING_INCOMING_REMOVED: b(function (e) {
                  let t = !1;
                  for (let e of y.values("FRIEND_REQUESTS", !0))
                      e.relationshipType === T.eA$.PENDING_INCOMING && (t = w(e.userId) || t);
                  return t;
              }),
              CREATE_FRIEND_GROUP: b(function (e) {
                  return (O(), !1);
              }),
              DELETE_FRIEND_GROUP: b(function (e) {
                  O();
                  let t = !1;
                  for (let e of f.A.getFriendIDs()) t = w(e) || t;
                  return t;
              }),
              ADD_USERS_TO_GROUP: b(function (e) {
                  O();
                  let t = !1;
                  for (let n of e.userIds) t = w(n) || t;
                  return t;
              }),
              REMOVE_USERS_FROM_GROUP: b(function (e) {
                  O();
                  let t = !1;
                  for (let n of e.userIds) t = w(n) || t;
                  return t;
              }),
              LOAD_USER_AFFINITIES_V2_SUCCESS: b(function (e) {
                  let t = !1;
                  for (let e of d.A.getUserAffinitiesMap().keys()) t = w(e) || t;
                  return t;
              }),
              USER_UPDATE: b(function (e) {
                  return w(e.user.id);
              }),
              CURRENT_USER_UPDATE: b(function (e) {
                  x();
                  let t = !1;
                  for (let e of f.A.getFriendIDs()) t = w(e) || t;
                  return t;
              }),
              LOGOUT: b(function () {
                  let e = y.size() > 0;
                  return (y.clear(), (i = void 0), (R = new Map()), e);
              }),
          },
);
