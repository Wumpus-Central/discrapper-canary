let i;
n(321073);
var r,
    l = n(350835),
    s = n(855986),
    a = n(713402),
    o = n(73153),
    u = n(870391),
    d = n(812020),
    c = n(734057),
    h = n(290863),
    f = n(994500),
    g = n(309010),
    A = n(894768),
    p = n(287809),
    m = n(977997),
    I = n(562153),
    E = n(914853),
    S = n(956753),
    C = n(406595),
    _ = n(70191),
    N = n(240516),
    T = n(652215),
    y =
        (((r = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS"),
        (r.SUGGESTIONS = "SUGGESTIONS"),
        (r.SAME_ACTIVITY = "SAME_ACTIVITY"),
        (r.ACTIVITIES = "ACTIVITIES"),
        (r.IN_GAME = "IN_GAME"),
        (r.ONLINE = "ONLINE"),
        (r.OFFLINE = "OFFLINE"),
        r);
let v = new a.J(
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
function P(e) {
    return e.type === l.$.PLAYING || e.type === l.$.COMPETING || e.type === l.$.WATCHING || e.type === l.$.STREAMING;
}
function L(e) {
    let t = (function (e) {
        let t = p.default.getUser(e);
        if (null == t) return null;
        let n = f.A.getRelationshipType(e),
            r = n === T.eA$.PENDING_INCOMING || n === T.eA$.PENDING_OUTGOING,
            l = f.A.isFriend(e),
            s = h.A.getActivities(e),
            a = f.A.getNickname(e),
            o = d.A.getUserAffinity(e)?.communicationProbability ?? 0;
        return r
            ? (function (e) {
                  var t, n;
                  let { userId: i, user: r, activities: l, nickname: s, relationshipType: a } = e,
                      o = f.A.getSince(i),
                      u = null != o ? new Date(o).getTime() : 0;
                  return {
                      id: i,
                      userId: i,
                      user: r,
                      activities: l,
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
            : l
              ? (function (e) {
                    let t,
                        n,
                        r,
                        l,
                        s,
                        a,
                        o,
                        u,
                        d,
                        { userId: f, user: p, activities: S, nickname: N, affinity: y } = e,
                        { category: v, displayActivities: M } =
                            ((t = A.A.getPrimaryActivity()),
                            (n = i),
                            (r = t?.name != null && null != n),
                            (l = h.A.getStatus(f)),
                            (s = m.A.getVoiceStateForUser(f)),
                            (a = s?.channelId != null),
                            (u = (o = S.filter(P)).filter(_.A)),
                            (d = o.filter((e) => e.application_id === n)),
                            r && d.length > 0
                                ? { category: "SAME_ACTIVITY", displayActivities: d }
                                : u.length > 0
                                  ? { category: "IN_GAME", displayActivities: u }
                                  : a
                                    ? { category: "ACTIVITIES", displayActivities: S }
                                    : l === T.clD.ONLINE || l === T.clD.IDLE || l === T.clD.DND
                                      ? { category: "ONLINE", displayActivities: o }
                                      : { category: "OFFLINE", displayActivities: o }),
                        O = "IN_GAME" === v ? (M[0]?.name ?? null) : null,
                        x = R.get(f) ?? [],
                        [L] = C.A.isFavorite(E.x.FRIENDS, f),
                        U = g.Ay.getVoiceChannelId() ?? g.Ay.getChannelId(),
                        w = null != U ? c.A.getChannel(U)?.guild_id : null,
                        b = h.A.getStatus(f),
                        G = b === T.clD.ONLINE,
                        F = M.some(P),
                        j = b === T.clD.DND || b === T.clD.IDLE,
                        k = I.Ay.getName(w, U, p);
                    return {
                        id: f,
                        userId: f,
                        user: p,
                        activities: M,
                        nickname: N,
                        category: "FRIEND",
                        activityCategory: L ? null : v,
                        groupIds: x,
                        sortKey: (function (e) {
                            let {
                                    isOnline: t,
                                    hasDisplayableActivity: n,
                                    isDndOrIdle: i,
                                    activityCategory: r,
                                    inGameActivityName: l,
                                    affinity: s,
                                    displayName: a,
                                    userId: o,
                                } = e,
                                u = t ? "0" : "1",
                                d = n ? "0" : "1",
                                c = i ? "0" : "1",
                                h = a.toLowerCase();
                            if ("IN_GAME" === r) {
                                let e,
                                    t = (e = l?.trim().toLowerCase() ?? "").length > 0 ? e : "\uFFFF";
                                return `FRD\0${u}\0${d}\0${c}\0${t}\0${D(s)}\0${h}\0${o}`;
                            }
                            return `FRD\0${u}\0${d}\0${c}\0${D(s)}\0${h}\0${o}`;
                        })({
                            isOnline: G,
                            hasDisplayableActivity: F,
                            isDndOrIdle: j,
                            activityCategory: v,
                            inGameActivityName: O,
                            affinity: y,
                            displayName: k,
                            userId: f,
                        }),
                    };
                })({ userId: e, user: t, activities: s, nickname: a, affinity: o })
              : (function (e) {
                    let { userId: t, user: n, activities: i, nickname: r, affinity: l } = e;
                    if (!(l > N.u.HIGH_AFFINITY_MINIMUM)) return null;
                    let s = m.A.getVoiceStateForUser(t),
                        a = s?.channelId,
                        o = null != a ? c.A.getChannel(a)?.guild_id : null,
                        u = i.length > 0 || null != a,
                        d = I.Ay.getName(o, a, n);
                    return {
                        id: t,
                        userId: t,
                        user: n,
                        activities: i,
                        nickname: r,
                        category: "SUGGESTION",
                        activityCategory: null,
                        groupIds: [],
                        sortKey: `SUG\0${u ? "0" : "1"}\0${D(l)}\0${d.toLowerCase()}\0${t}`,
                    };
                })({ userId: e, user: t, activities: s, nickname: a, affinity: o });
    })(e);
    return null == t ? v.delete(e) : v.set(e, t);
}
function U() {
    (v.clear(), O(), x());
    let e = !1;
    for (let [t, n] of f.A.getMutableRelationships().entries())
        (n === T.eA$.PENDING_INCOMING || n === T.eA$.PENDING_OUTGOING) && (e = L(t) || e);
    for (let t of d.A.getUserAffinitiesMap().keys()) f.A.isFriend(t) || (e = L(t) || e);
    for (let t of f.A.getFriendIDs()) e = L(t) || e;
    return e;
}
class w extends s.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        (this.waitFor(c.A, u.A, C.A, h.A, f.A, g.Ay, A.A, d.A, p.default, m.A), U());
    }
    getRows(e) {
        return [v.values(e), v.version];
    }
    getFriend(e) {
        return v.get(e);
    }
}
function b(e) {
    return (0, S.v$)(e, "FriendsWidgetFriendsStore");
}
let G = new w(
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
                  return e.tab === E.x.FRIENDS && L(e.targetId);
              }),
              PRESENCE_UPDATES: b(function (e) {
                  let t = !1;
                  for (let n of e.updates) {
                      let e = n.user?.id;
                      null != e && (t = L(e) || t);
                  }
                  return t;
              }),
              PRESENCES_REPLACE: b(function (e) {
                  let t = !1;
                  for (let n of e.presences) {
                      let e = n.user?.id;
                      null != e && (t = L(e) || t);
                  }
                  return t;
              }),
              ACTIVITY_METADATA_UPDATE: b(function (e) {
                  return L(e.userId);
              }),
              VOICE_STATE_UPDATES: b(function (e) {
                  let t = !1;
                  for (let n of e.voiceStates) t = L(n.userId) || t;
                  return t;
              }),
              VOICE_CHANNEL_SELECT: b(function (e) {
                  x();
                  let t = !1;
                  for (let e of f.A.getFriendIDs()) t = L(e) || t;
                  return t;
              }),
              RELATIONSHIP_ADD: b(function (e) {
                  return L(e.relationship.id);
              }),
              RELATIONSHIP_REMOVE: b(function (e) {
                  return L(e.relationship.id);
              }),
              RELATIONSHIP_UPDATE: b(function (e) {
                  return L(e.relationship.id);
              }),
              RELATIONSHIP_PENDING_INCOMING_REMOVED: b(function (e) {
                  let t = !1;
                  for (let e of v.values("FRIEND_REQUESTS", !0))
                      e.relationshipType === T.eA$.PENDING_INCOMING && (t = L(e.userId) || t);
                  return t;
              }),
              CREATE_FRIEND_GROUP: b(function (e) {
                  return (O(), !1);
              }),
              DELETE_FRIEND_GROUP: b(function (e) {
                  O();
                  let t = !1;
                  for (let e of f.A.getFriendIDs()) t = L(e) || t;
                  return t;
              }),
              ADD_USERS_TO_GROUP: b(function (e) {
                  O();
                  let t = !1;
                  for (let n of e.userIds) t = L(n) || t;
                  return t;
              }),
              REMOVE_USERS_FROM_GROUP: b(function (e) {
                  O();
                  let t = !1;
                  for (let n of e.userIds) t = L(n) || t;
                  return t;
              }),
              LOAD_USER_AFFINITIES_V2_SUCCESS: b(function (e) {
                  let t = !1;
                  for (let e of d.A.getUserAffinitiesMap().keys()) t = L(e) || t;
                  return t;
              }),
              USER_UPDATE: b(function (e) {
                  return L(e.user.id);
              }),
              CURRENT_USER_UPDATE: b(function (e) {
                  x();
                  let t = !1;
                  for (let e of f.A.getFriendIDs()) t = L(e) || t;
                  return t;
              }),
              LOGOUT: b(function () {
                  let e = v.size() > 0;
                  return (v.clear(), (i = void 0), (R = new Map()), e);
              }),
          },
);
n.d(t, {}, { A: G, j: y });
