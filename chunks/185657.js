"use strict";
let i;
n.d(t, { A: () => U, j: () => C }), n(321073);
var r,
    s = n(17928),
    a = n(713402),
    o = n(228366),
    l = n(870391),
    u = n(427358),
    c = n(734057),
    d = n(290863),
    _ = n(994500),
    h = n(309010),
    f = n(461213),
    E = n(287809),
    p = n(977997),
    m = n(562153),
    g = n(914853),
    A = n(956753),
    I = n(406595),
    T = n(70191),
    S = n(240516),
    N = n(652215),
    C =
        (((r = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS"),
        (r.SUGGESTIONS = "SUGGESTIONS"),
        (r.SAME_ACTIVITY = "SAME_ACTIVITY"),
        (r.ACTIVITIES = "ACTIVITIES"),
        (r.IN_GAME = "IN_GAME"),
        (r.ONLINE = "ONLINE"),
        (r.OFFLINE = "OFFLINE"),
        r);
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
function O(e, t) {
    return String(Math.floor(Math.max(0, Math.min(e, Number("9".repeat(t)))))).padStart(t, "0");
}
function R(e) {
    return O(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
}
let v = new Map();
function b() {
    let e = new Map();
    for (let t of l.A.getGroups())
        for (let n of t.userIds) {
            let i = e.get(n);
            null == i && ((i = []), e.set(n, i)), i.push(t.id);
        }
    v = e;
}
function L() {
    let e = f.A.getPrimaryActivity();
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
function w(e) {
    let t = (function (e) {
        let t = E.default.getUser(e);
        if (null == t) return null;
        let n = _.A.getRelationshipType(e),
            r = n === N.eA$.PENDING_INCOMING || n === N.eA$.PENDING_OUTGOING,
            s = _.A.isFriend(e),
            a = d.A.getActivities(e),
            o = _.A.getNickname(e),
            l = u.A.getUserAffinity(e)?.communicationProbability ?? 0;
        return r
            ? (function (e) {
                  var t, n;
                  let { userId: i, user: r, activities: s, nickname: a, relationshipType: o } = e,
                      l = _.A.getSince(i),
                      u = null != l ? new Date(l).getTime() : 0;
                  return {
                      id: i,
                      userId: i,
                      user: r,
                      activities: s,
                      nickname: a,
                      relationshipType: o,
                      category: "FRIEND_REQUEST",
                      activityCategory: null,
                      groupIds: [],
                      sortKey:
                          ((t = Number.isFinite(u) ? u : 0),
                          (n = i),
                          `REQ\0${O(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13)}\0${n}`),
                  };
              })({ userId: e, user: t, activities: a, nickname: o, relationshipType: n })
            : s
              ? (function (e) {
                    let t,
                        n,
                        r,
                        s,
                        a,
                        o,
                        l,
                        u,
                        _,
                        { userId: E, user: A, activities: S, nickname: C, affinity: y } = e,
                        { category: O, displayActivities: b } =
                            ((t = f.A.getPrimaryActivity()),
                            (n = i),
                            (r = t?.name != null && null != n),
                            (s = d.A.getStatus(E)),
                            (a = p.A.getVoiceStateForUser(E)),
                            (o = a?.channelId != null),
                            (u = (l = S.filter(D)).filter(T.A)),
                            (_ = l.filter((e) => e.application_id === n)),
                            r && _.length > 0
                                ? { category: "SAME_ACTIVITY", displayActivities: _ }
                                : u.length > 0
                                  ? { category: "IN_GAME", displayActivities: u }
                                  : o
                                    ? { category: "ACTIVITIES", displayActivities: S }
                                    : s === N.clD.ONLINE || s === N.clD.IDLE || s === N.clD.DND
                                      ? { category: "ONLINE", displayActivities: l }
                                      : { category: "OFFLINE", displayActivities: l }),
                        L = "IN_GAME" === O ? (b[0]?.name ?? null) : null,
                        w = v.get(E) ?? [],
                        [P] = I.A.isFavorite(g.x.FRIENDS, E),
                        M = h.A.getVoiceChannelId() ?? h.A.getChannelId(),
                        x = null != M ? c.A.getChannel(M)?.guild_id : null,
                        U = d.A.getStatus(E),
                        k = U === N.clD.ONLINE,
                        G = b.some(D),
                        V = U === N.clD.DND || U === N.clD.IDLE,
                        F = m.Ay.getName(x, M, A);
                    return {
                        id: E,
                        userId: E,
                        user: A,
                        activities: b,
                        nickname: C,
                        category: "FRIEND",
                        activityCategory: P ? null : O,
                        groupIds: w,
                        sortKey: (function (e) {
                            let {
                                    isOnline: t,
                                    hasDisplayableActivity: n,
                                    isDndOrIdle: i,
                                    activityCategory: r,
                                    inGameActivityName: s,
                                    affinity: a,
                                    displayName: o,
                                    userId: l,
                                } = e,
                                u = t ? "0" : "1",
                                c = n ? "0" : "1",
                                d = i ? "0" : "1",
                                _ = o.toLowerCase();
                            if ("IN_GAME" === r) {
                                let e,
                                    t = (e = s?.trim().toLowerCase() ?? "").length > 0 ? e : "\uFFFF";
                                return `FRD\0${u}\0${c}\0${d}\0${t}\0${R(a)}\0${_}\0${l}`;
                            }
                            return `FRD\0${u}\0${c}\0${d}\0${R(a)}\0${_}\0${l}`;
                        })({
                            isOnline: k,
                            hasDisplayableActivity: G,
                            isDndOrIdle: V,
                            activityCategory: O,
                            inGameActivityName: L,
                            affinity: y,
                            displayName: F,
                            userId: E,
                        }),
                    };
                })({ userId: e, user: t, activities: a, nickname: o, affinity: l })
              : (function (e) {
                    let { userId: t, user: n, activities: i, nickname: r, affinity: s } = e;
                    if (!(s > S.u.HIGH_AFFINITY_MINIMUM)) return null;
                    let a = p.A.getVoiceStateForUser(t),
                        o = a?.channelId,
                        l = null != o ? c.A.getChannel(o)?.guild_id : null,
                        u = i.length > 0 || null != o,
                        d = m.Ay.getName(l, o, n);
                    return {
                        id: t,
                        userId: t,
                        user: n,
                        activities: i,
                        nickname: r,
                        category: "SUGGESTION",
                        activityCategory: null,
                        groupIds: [],
                        sortKey: `SUG\0${u ? "0" : "1"}\0${R(s)}\0${d.toLowerCase()}\0${t}`,
                    };
                })({ userId: e, user: t, activities: a, nickname: o, affinity: l });
    })(e);
    return null == t ? y.delete(e) : y.set(e, t);
}
function P() {
    y.clear(), b(), L();
    let e = !1;
    for (let [t, n] of _.A.getMutableRelationships().entries())
        (n === N.eA$.PENDING_INCOMING || n === N.eA$.PENDING_OUTGOING) && (e = w(t) || e);
    for (let t of u.A.getUserAffinitiesMap().keys()) _.A.isFriend(t) || (e = w(t) || e);
    for (let t of _.A.getFriendIDs()) e = w(t) || e;
    return e;
}
class M extends s.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        this.waitFor(c.A, l.A, I.A, d.A, _.A, h.A, f.A, u.A, E.default, p.A), P();
    }
    getRows(e) {
        return [y.values(e), y.version];
    }
    getFriend(e) {
        return y.get(e);
    }
}
function x(e) {
    return (0, A.v$)(e, "FriendsWidgetFriendsStore");
}
let U = new M(
    o.h,
    __OVERLAY__
        ? {}
        : {
              POST_CONNECTION_OPEN: x(P),
              OVERLAY_INITIALIZE: x(P),
              CACHE_LOADED: x(P),
              CACHE_LOADED_LAZY: x(P),
              FRIENDS_LIST_POPOUT_MOUNTED: x(P),
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: x(function (e) {
                  return e.tab === g.x.FRIENDS && w(e.targetId);
              }),
              PRESENCE_UPDATES: x(function (e) {
                  let t = !1;
                  for (let n of e.updates) {
                      let e = n.user?.id;
                      null != e && (t = w(e) || t);
                  }
                  return t;
              }),
              PRESENCES_REPLACE: x(function (e) {
                  let t = !1;
                  for (let n of e.presences) {
                      let e = n.user?.id;
                      null != e && (t = w(e) || t);
                  }
                  return t;
              }),
              ACTIVITY_METADATA_UPDATE: x(function (e) {
                  return w(e.userId);
              }),
              VOICE_STATE_UPDATES: x(function (e) {
                  let t = !1;
                  for (let n of e.voiceStates) t = w(n.userId) || t;
                  return t;
              }),
              VOICE_CHANNEL_SELECT: x(function (e) {
                  L();
                  let t = !1;
                  for (let e of _.A.getFriendIDs()) t = w(e) || t;
                  return t;
              }),
              RELATIONSHIP_ADD: x(function (e) {
                  return w(e.relationship.id);
              }),
              RELATIONSHIP_REMOVE: x(function (e) {
                  return w(e.relationship.id);
              }),
              RELATIONSHIP_UPDATE: x(function (e) {
                  return w(e.relationship.id);
              }),
              RELATIONSHIP_PENDING_INCOMING_REMOVED: x(function (e) {
                  let t = !1;
                  for (let e of y.values("FRIEND_REQUESTS", !0))
                      e.relationshipType === N.eA$.PENDING_INCOMING && (t = w(e.userId) || t);
                  return t;
              }),
              CREATE_FRIEND_GROUP: x(function (e) {
                  return b(), !1;
              }),
              DELETE_FRIEND_GROUP: x(function (e) {
                  b();
                  let t = !1;
                  for (let e of _.A.getFriendIDs()) t = w(e) || t;
                  return t;
              }),
              ADD_USERS_TO_GROUP: x(function (e) {
                  b();
                  let t = !1;
                  for (let n of e.userIds) t = w(n) || t;
                  return t;
              }),
              REMOVE_USERS_FROM_GROUP: x(function (e) {
                  b();
                  let t = !1;
                  for (let n of e.userIds) t = w(n) || t;
                  return t;
              }),
              LOAD_USER_AFFINITIES_V2_SUCCESS: x(function (e) {
                  let t = !1;
                  for (let e of u.A.getUserAffinitiesMap().keys()) t = w(e) || t;
                  return t;
              }),
              USER_UPDATE: x(function (e) {
                  return w(e.user.id);
              }),
              CURRENT_USER_UPDATE: x(function (e) {
                  L();
                  let t = !1;
                  for (let e of _.A.getFriendIDs()) t = w(e) || t;
                  return t;
              }),
              LOGOUT: x(function () {
                  let e = y.size() > 0;
                  return y.clear(), (i = void 0), (v = new Map()), e;
              }),
          },
);
