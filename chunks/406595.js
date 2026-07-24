n.d(t, { A: () => W });
var i = n(17928),
    l = n(713402),
    s = n(228366),
    r = n(427358),
    a = n(95701),
    o = n(734057),
    u = n(776096),
    d = n(576705),
    c = n(290863),
    h = n(568548),
    g = n(994500),
    f = n(287809),
    A = n(914853),
    E = n(956753),
    I = n(652215);
let p = Number.MAX_SAFE_INTEGER,
    S = new l.J(
        function (e) {
            return [e.tab];
        },
        function (e) {
            return e.sortKey;
        },
    ),
    m = new Set(Object.values(A.x)),
    _ = new Map(),
    C = !1;
function N(e, t, n) {
    return e < t ? t : e > n ? n : e;
}
function T(e, t) {
    return String(e).padStart(t, "0");
}
function v(e) {
    return Number.isFinite(e) ? Math.floor(N(e, 0, p)) : Date.now();
}
function M(e) {
    return e ? "0" : "1";
}
function y(e, t) {
    return `${e}:${t}`;
}
function D(e) {
    let t = _.get(e);
    return null == t && ((t = new Map()), _.set(e, t)), t;
}
function R(e) {
    return Array.from(D(e).values());
}
function O() {
    let e = u.A.affinities,
        t = 0;
    for (let n = 0; n < e.length; n += 1) {
        let i = e[n].score ?? 0;
        i > t && (t = i);
    }
    return t > 0 ? t : 1;
}
function x(e) {
    return { hasMention: h.Ay.getMentionCount(e) > 0, hasUnread: h.Ay.hasUnread(e) };
}
function U(e, t) {
    let n = o.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case A.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, a.ke)(n.type)) return !1;
            return d.A.can(I.xBc.READ_MESSAGE_HISTORY, n);
        case A.x.VOICE:
            if (!(0, a.ay)(n.type)) return !1;
            return d.A.can(I.xBc.VIEW_CHANNEL, n);
        case A.x.FRIENDS:
            return !1;
        default:
            return e;
    }
}
function w(e) {
    var t;
    let n,
        { tab: i, targetId: l, isOnline: s, affinityScore: r, hasMention: a, hasUnread: o, addedTimestampMs: u } = e,
        d = {
            rowId: y(i, l),
            tab: i,
            targetId: l,
            isOnline: s,
            affinityScore: r,
            hasMention: a,
            hasUnread: o,
            addedTimestampMs: u,
            sortKey: "",
        };
    return (
        (d.sortKey = [
            (t = d).tab,
            M(t.isOnline),
            T(Math.round((1 - N(t.affinityScore, 0, 1)) * 1e6), 7),
            M(t.hasMention),
            M(t.hasUnread),
            ((n = N(t.addedTimestampMs, 0, p)), T(p - n, 16)),
            t.rowId,
        ].join("\0")),
        d
    );
}
function L(e) {
    let { tab: t, targetId: n, addedTimestampMs: i, guildAffinityNormalizationMax: l, pruneInvalid: s } = e;
    if (t === A.x.FRIENDS) {
        if (null == f.default.getUser(n)) return { kind: "NOT_READY_YET" };
        if (!g.A.isFriend(n)) return s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
        let e = (function (e, t, n) {
            var i;
            if (e !== A.x.FRIENDS || null == f.default.getUser(t) || !g.A.isFriend(t)) return null;
            let l = (i = c.A.getStatus(t)) === I.clD.ONLINE || i === I.clD.IDLE || i === I.clD.DND,
                s = r.A.getUserAffinity(t)?.communicationProbability ?? 0,
                a = o.A.getDMFromUserId(t),
                { hasMention: u, hasUnread: d } = null != a ? x(a) : { hasMention: !1, hasUnread: !1 };
            return w({
                tab: e,
                targetId: t,
                isOnline: l,
                affinityScore: s,
                hasMention: u,
                hasUnread: d,
                addedTimestampMs: n,
            });
        })(t, n, i);
        return null == e ? (s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: e };
    }
    if (null == o.A.getChannel(n)) return { kind: "NOT_READY_YET" };
    if (!U(t, n)) return s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
    let d = (function (e, t, n, i) {
        if (!U(e, t)) return null;
        let l = o.A.getChannel(t);
        if (null == l) return null;
        let s = l.getGuildId() ?? null,
            r = N((null != s ? (u.A.getGuildAffinity(s)?.score ?? 0) : 0) / i, 0, 1),
            { hasMention: d, hasUnread: c } =
                (0, a.ke)(l.type) || l.isDM() || l.isMultiUserDM() || l.isPrivate()
                    ? x(t)
                    : { hasMention: !1, hasUnread: !1 };
        return w({
            tab: e,
            targetId: t,
            isOnline: !1,
            affinityScore: r,
            hasMention: d,
            hasUnread: c,
            addedTimestampMs: n,
        });
    })(t, n, i, l);
    return null == d ? (s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: d };
}
function P(e, t) {
    return (
        e.rowId !== t.rowId ||
        e.tab !== t.tab ||
        e.targetId !== t.targetId ||
        e.isOnline !== t.isOnline ||
        e.affinityScore !== t.affinityScore ||
        e.hasMention !== t.hasMention ||
        e.hasUnread !== t.hasUnread ||
        e.addedTimestampMs !== t.addedTimestampMs ||
        e.sortKey !== t.sortKey
    );
}
function G(e) {
    let { pruneInvalid: t } = e,
        n = new Set(S.values().map((e) => e.rowId)),
        i = O(),
        l = !1;
    for (let e of m) {
        let s = D(e);
        for (let [r, a] of s.entries()) {
            let o = y(e, r),
                u = L({
                    tab: e,
                    targetId: r,
                    addedTimestampMs: a.addedTimestampMs,
                    guildAffinityNormalizationMax: i,
                    pruneInvalid: t,
                });
            switch ((n.delete(o), u.kind)) {
                case "BUILT": {
                    let e = u.row,
                        t = S.get(e.rowId);
                    (null == t || P(t, e)) && (l = S.set(e.rowId, e) || l);
                    break;
                }
                case "NOT_READY_YET":
                    l = S.delete(o) || l;
                    break;
                case "INVALID":
                    s.delete(r), (l = !0), (l = S.delete(o) || l);
                    break;
                default:
                    return u;
            }
        }
    }
    for (let e of n) l = S.delete(e) || l;
    return l;
}
function F(e, t) {
    let n = D(e).delete(t),
        i = S.delete(y(e, t));
    return n || i;
}
function b(e) {
    let { tab: t, targetId: n, pruneInvalid: i, guildAffinityNormalizationMax: l } = e,
        s = D(t),
        r = s.get(n),
        a = y(t, n);
    if (null == r) return S.delete(a);
    let o = L({
        tab: t,
        targetId: n,
        addedTimestampMs: r.addedTimestampMs,
        guildAffinityNormalizationMax: l,
        pruneInvalid: i,
    });
    switch (o.kind) {
        case "BUILT": {
            let e = o.row,
                t = S.get(e.rowId);
            return !!(null == t || P(t, e)) && S.set(e.rowId, e);
        }
        case "NOT_READY_YET":
            return S.delete(a);
        case "INVALID":
            return i && s.delete(n), S.delete(a);
        default:
            return o;
    }
}
function j(e, t) {
    let { pruneInvalid: n } = t,
        i = D(e);
    if (0 === i.size && 0 === S.values(e).length) return !1;
    let l = O(),
        s = !1,
        r = new Set();
    for (let t of i.keys())
        r.add(y(e, t)), (s = b({ tab: e, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: l }) || s);
    for (let t of S.values(e)) r.has(t.rowId) || (s = S.delete(t.rowId) || s);
    return s;
}
function V(e, t) {
    let { pruneInvalid: n } = t,
        i = D(A.x.FRIENDS);
    if (0 === i.size) return !1;
    let l = O(),
        s = !1;
    for (let t of i.keys())
        o.A.getDMFromUserId(t) === e &&
            (s = b({ tab: A.x.FRIENDS, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: l }) || s);
    return s;
}
function k(e) {
    let t = C,
        n = O(),
        i = !1;
    return (
        D(A.x.MESSAGES).has(e) &&
            (i = b({ tab: A.x.MESSAGES, targetId: e, pruneInvalid: t, guildAffinityNormalizationMax: n }) || i),
        (i = V(e, { pruneInvalid: t }) || i)
    );
}
function H() {
    return (C = !0), G({ pruneInvalid: !0 });
}
class B extends i.Ay.PersistedStore {
    static displayName = "OverlayFriendsWidgetFavoritesStore";
    static persistKey = "OverlayFriendsWidgetFavoritesStore";
    initialize(e) {
        this.waitFor(o.A, u.A, d.A, c.A, h.Ay, g.A, r.A, f.default),
            (function (e) {
                (_ = new Map()), S.clear();
                for (let t of m)
                    (function (e, t) {
                        let n = (function (e, t) {
                                if (null == e) return [];
                                switch (t) {
                                    case A.x.FRIENDS:
                                        return e.friendsFavoriteTargetIds ?? [];
                                    case A.x.MESSAGES:
                                        return e.messagesFavoriteTargetIds ?? [];
                                    case A.x.VOICE:
                                        return e.voiceFavoriteTargetIds ?? [];
                                    default:
                                        return t;
                                }
                            })(e, t),
                            i = D(t),
                            l = 0;
                        for (let e of n) {
                            let t =
                                null == e || "string" != typeof e.targetId
                                    ? null
                                    : { targetId: e.targetId, addedTimestampMs: v(e.addedTimestampMs) };
                            null != t && (i.set(t.targetId, t), (l += 1));
                        }
                    })(e, t);
            })(e),
            G({ pruneInvalid: !1 });
    }
    getState() {
        return {
            friendsFavoriteTargetIds: R(A.x.FRIENDS),
            messagesFavoriteTargetIds: R(A.x.MESSAGES),
            voiceFavoriteTargetIds: R(A.x.VOICE),
        };
    }
    getFavoriteTargetIdsForTab(e) {
        return [S.values(e).map((e) => e.targetId), S.version];
    }
    isFavorite(e, t) {
        return [D(e).has(t), S.version];
    }
}
function Y(e) {
    return (0, E.v$)(e, "OverlayFriendsWidgetFavoritesStore");
}
let W = new B(
    s.h,
    __OVERLAY__
        ? {}
        : {
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: Y(function (e) {
                  let t = y(e.tab, e.targetId);
                  if (!e.isFavorite) {
                      let n = D(e.tab).delete(e.targetId),
                          i = S.delete(t);
                      return n || i;
                  }
                  let n = v(e.addedTimestampMs ?? D(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                      i = D(e.tab);
                  i.set(e.targetId, { targetId: e.targetId, addedTimestampMs: n });
                  let l = O(),
                      s = L({
                          tab: e.tab,
                          targetId: e.targetId,
                          addedTimestampMs: n,
                          guildAffinityNormalizationMax: l,
                          pruneInvalid: C,
                      });
                  switch (s.kind) {
                      case "BUILT": {
                          let e = s.row,
                              t = S.get(e.rowId);
                          (null == t || P(t, e)) && S.set(e.rowId, e);
                          break;
                      }
                      case "NOT_READY_YET":
                          S.delete(t);
                          break;
                      case "INVALID":
                          i.delete(e.targetId), S.delete(t);
                          break;
                      default:
                          return s;
                  }
                  return !0;
              }),
              POST_CONNECTION_OPEN: Y(H),
              OVERLAY_INITIALIZE: Y(H),
              CACHE_LOADED: Y(H),
              CACHE_LOADED_LAZY: Y(H),
              FRIENDS_LIST_POPOUT_MOUNTED: Y(H),
              PRESENCE_UPDATES: Y(function (e) {
                  let t = D(A.x.FRIENDS);
                  if (0 === t.size) return !1;
                  let n = O(),
                      i = !1;
                  for (let l of e.updates) {
                      let e = l.user?.id;
                      null != e &&
                          t.has(e) &&
                          (i =
                              b({ tab: A.x.FRIENDS, targetId: e, pruneInvalid: C, guildAffinityNormalizationMax: n }) ||
                              i);
                  }
                  return i;
              }),
              PRESENCES_REPLACE: Y(function (e) {
                  let t = D(A.x.FRIENDS);
                  if (0 === t.size) return !1;
                  let n = O(),
                      i = !1;
                  for (let l of e.presences) {
                      let e = l.user?.id;
                      null != e &&
                          t.has(e) &&
                          (i =
                              b({ tab: A.x.FRIENDS, targetId: e, pruneInvalid: C, guildAffinityNormalizationMax: n }) ||
                              i);
                  }
                  return i;
              }),
              LOAD_USER_AFFINITIES_V2_SUCCESS: Y(function () {
                  return j(A.x.FRIENDS, { pruneInvalid: C });
              }),
              LOAD_GUILD_AFFINITIES_SUCCESS: Y(function () {
                  let e = C;
                  return j(A.x.MESSAGES, { pruneInvalid: e }) || j(A.x.VOICE, { pruneInvalid: e });
              }),
              MESSAGE_CREATE: Y((e) => k(e.channelId)),
              MESSAGE_ACK: Y((e) => k(e.channelId)),
              CHANNEL_ACK: Y((e) => k(e.channelId)),
              CHANNEL_UPDATES: Y(function (e) {
                  let t = C,
                      n = O(),
                      i = !1,
                      l = D(A.x.MESSAGES),
                      s = D(A.x.VOICE);
                  for (let r of e.channels) {
                      let e = r?.id;
                      null != e &&
                          (l.has(e) &&
                              (i =
                                  b({
                                      tab: A.x.MESSAGES,
                                      targetId: e,
                                      pruneInvalid: t,
                                      guildAffinityNormalizationMax: n,
                                  }) || i),
                          s.has(e) &&
                              (i =
                                  b({
                                      tab: A.x.VOICE,
                                      targetId: e,
                                      pruneInvalid: t,
                                      guildAffinityNormalizationMax: n,
                                  }) || i),
                          (i = V(e, { pruneInvalid: t }) || i));
                  }
                  return i;
              }),
              CHANNEL_DELETE: Y(function (e) {
                  let t = e.channel?.id;
                  if (null == t) return !1;
                  let n = !1;
                  return (
                      (n = F(A.x.MESSAGES, t) || n), (n = F(A.x.VOICE, t) || n), (n = V(t, { pruneInvalid: C }) || n)
                  );
              }),
              RELATIONSHIP_ADD: Y(function (e) {
                  let t = e.relationship?.id;
                  if (null == t || !D(A.x.FRIENDS).has(t)) return !1;
                  let n = O();
                  return b({ tab: A.x.FRIENDS, targetId: t, pruneInvalid: C, guildAffinityNormalizationMax: n });
              }),
              RELATIONSHIP_REMOVE: Y(function (e) {
                  let t = e.relationship?.id;
                  return null != t && F(A.x.FRIENDS, t);
              }),
              LOGOUT: Y(function () {
                  let e = S.size() > 0 || _.size > 0;
                  return S.clear(), (_ = new Map()), (C = !1), e;
              }),
          },
);
