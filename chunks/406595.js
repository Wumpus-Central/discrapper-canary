"use strict";
n.d(t, { A: () => Y });
var i = n(17928),
    r = n(713402),
    a = n(228366),
    s = n(427358),
    l = n(95701),
    o = n(734057),
    d = n(776096),
    c = n(576705),
    u = n(290863),
    _ = n(568548),
    E = n(994500),
    A = n(287809),
    h = n(914853),
    I = n(956753),
    f = n(652215);
let p = Number.MAX_SAFE_INTEGER,
    T = new r.J(
        function (e) {
            return [e.tab];
        },
        function (e) {
            return e.sortKey;
        },
    ),
    m = new Set(Object.values(h.x)),
    g = new Map(),
    S = !1;
function N(e, t, n) {
    return e < t ? t : e > n ? n : e;
}
function C(e, t) {
    return String(e).padStart(t, "0");
}
function O(e) {
    return Number.isFinite(e) ? Math.floor(N(e, 0, p)) : Date.now();
}
function R(e) {
    return e ? "0" : "1";
}
function L(e, t) {
    return `${e}:${t}`;
}
function D(e) {
    let t = g.get(e);
    return null == t && ((t = new Map()), g.set(e, t)), t;
}
function y(e) {
    return Array.from(D(e).values());
}
function v() {
    let e = d.A.affinities,
        t = 0;
    for (let n = 0; n < e.length; n += 1) {
        let i = e[n].score ?? 0;
        i > t && (t = i);
    }
    return t > 0 ? t : 1;
}
function b(e) {
    return { hasMention: _.Ay.getMentionCount(e) > 0, hasUnread: _.Ay.hasUnread(e) };
}
function M(e, t) {
    let n = o.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case h.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, l.ke)(n.type)) return !1;
            return c.A.can(f.xBc.READ_MESSAGE_HISTORY, n);
        case h.x.VOICE:
            if (!(0, l.ay)(n.type)) return !1;
            return c.A.can(f.xBc.VIEW_CHANNEL, n);
        case h.x.FRIENDS:
            return !1;
        default:
            return e;
    }
}
function P(e) {
    var t;
    let n,
        { tab: i, targetId: r, isOnline: a, affinityScore: s, hasMention: l, hasUnread: o, addedTimestampMs: d } = e,
        c = {
            rowId: L(i, r),
            tab: i,
            targetId: r,
            isOnline: a,
            affinityScore: s,
            hasMention: l,
            hasUnread: o,
            addedTimestampMs: d,
            sortKey: "",
        };
    return (
        (c.sortKey = [
            (t = c).tab,
            R(t.isOnline),
            C(Math.round((1 - N(t.affinityScore, 0, 1)) * 1e6), 7),
            R(t.hasMention),
            R(t.hasUnread),
            ((n = N(t.addedTimestampMs, 0, p)), C(p - n, 16)),
            t.rowId,
        ].join("\0")),
        c
    );
}
function U(e) {
    let { tab: t, targetId: n, addedTimestampMs: i, guildAffinityNormalizationMax: r, pruneInvalid: a } = e;
    if (t === h.x.FRIENDS) {
        if (null == A.default.getUser(n)) return { kind: "NOT_READY_YET" };
        if (!E.A.isFriend(n)) return a ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
        let e = (function (e, t, n) {
            var i;
            if (e !== h.x.FRIENDS || null == A.default.getUser(t) || !E.A.isFriend(t)) return null;
            let r = (i = u.A.getStatus(t)) === f.clD.ONLINE || i === f.clD.IDLE || i === f.clD.DND,
                a = s.A.getUserAffinity(t)?.communicationProbability ?? 0,
                l = o.A.getDMFromUserId(t),
                { hasMention: d, hasUnread: c } = null != l ? b(l) : { hasMention: !1, hasUnread: !1 };
            return P({
                tab: e,
                targetId: t,
                isOnline: r,
                affinityScore: a,
                hasMention: d,
                hasUnread: c,
                addedTimestampMs: n,
            });
        })(t, n, i);
        return null == e ? (a ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: e };
    }
    if (null == o.A.getChannel(n)) return { kind: "NOT_READY_YET" };
    if (!M(t, n)) return a ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
    let c = (function (e, t, n, i) {
        if (!M(e, t)) return null;
        let r = o.A.getChannel(t);
        if (null == r) return null;
        let a = r.getGuildId() ?? null,
            s = N((null != a ? (d.A.getGuildAffinity(a)?.score ?? 0) : 0) / i, 0, 1),
            { hasMention: c, hasUnread: u } =
                (0, l.ke)(r.type) || r.isDM() || r.isMultiUserDM() || r.isPrivate()
                    ? b(t)
                    : { hasMention: !1, hasUnread: !1 };
        return P({
            tab: e,
            targetId: t,
            isOnline: !1,
            affinityScore: s,
            hasMention: c,
            hasUnread: u,
            addedTimestampMs: n,
        });
    })(t, n, i, r);
    return null == c ? (a ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: c };
}
function w(e, t) {
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
        n = new Set(T.values().map((e) => e.rowId)),
        i = v(),
        r = !1;
    for (let e of m) {
        let a = D(e);
        for (let [s, l] of a.entries()) {
            let o = L(e, s),
                d = U({
                    tab: e,
                    targetId: s,
                    addedTimestampMs: l.addedTimestampMs,
                    guildAffinityNormalizationMax: i,
                    pruneInvalid: t,
                });
            switch ((n.delete(o), d.kind)) {
                case "BUILT": {
                    let e = d.row,
                        t = T.get(e.rowId);
                    (null == t || w(t, e)) && (r = T.set(e.rowId, e) || r);
                    break;
                }
                case "NOT_READY_YET":
                    r = T.delete(o) || r;
                    break;
                case "INVALID":
                    a.delete(s), (r = !0), (r = T.delete(o) || r);
                    break;
                default:
                    return d;
            }
        }
    }
    for (let e of n) r = T.delete(e) || r;
    return r;
}
function x(e, t) {
    let n = D(e).delete(t),
        i = T.delete(L(e, t));
    return n || i;
}
function k(e) {
    let { tab: t, targetId: n, pruneInvalid: i, guildAffinityNormalizationMax: r } = e,
        a = D(t),
        s = a.get(n),
        l = L(t, n);
    if (null == s) return T.delete(l);
    let o = U({
        tab: t,
        targetId: n,
        addedTimestampMs: s.addedTimestampMs,
        guildAffinityNormalizationMax: r,
        pruneInvalid: i,
    });
    switch (o.kind) {
        case "BUILT": {
            let e = o.row,
                t = T.get(e.rowId);
            return !!(null == t || w(t, e)) && T.set(e.rowId, e);
        }
        case "NOT_READY_YET":
            return T.delete(l);
        case "INVALID":
            return i && a.delete(n), T.delete(l);
        default:
            return o;
    }
}
function F(e, t) {
    let { pruneInvalid: n } = t,
        i = D(e);
    if (0 === i.size && 0 === T.values(e).length) return !1;
    let r = v(),
        a = !1,
        s = new Set();
    for (let t of i.keys())
        s.add(L(e, t)), (a = k({ tab: e, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: r }) || a);
    for (let t of T.values(e)) s.has(t.rowId) || (a = T.delete(t.rowId) || a);
    return a;
}
function V(e, t) {
    let { pruneInvalid: n } = t,
        i = D(h.x.FRIENDS);
    if (0 === i.size) return !1;
    let r = v(),
        a = !1;
    for (let t of i.keys())
        o.A.getDMFromUserId(t) === e &&
            (a = k({ tab: h.x.FRIENDS, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: r }) || a);
    return a;
}
function B(e) {
    let t = S,
        n = v(),
        i = !1;
    return (
        D(h.x.MESSAGES).has(e) &&
            (i = k({ tab: h.x.MESSAGES, targetId: e, pruneInvalid: t, guildAffinityNormalizationMax: n }) || i),
        (i = V(e, { pruneInvalid: t }) || i)
    );
}
function H() {
    return (S = !0), G({ pruneInvalid: !0 });
}
class j extends i.Ay.PersistedStore {
    static displayName = "OverlayFriendsWidgetFavoritesStore";
    static persistKey = "OverlayFriendsWidgetFavoritesStore";
    initialize(e) {
        this.waitFor(o.A, d.A, c.A, u.A, _.Ay, E.A, s.A, A.default),
            (function (e) {
                (g = new Map()), T.clear();
                for (let t of m)
                    (function (e, t) {
                        let n = (function (e, t) {
                                if (null == e) return [];
                                switch (t) {
                                    case h.x.FRIENDS:
                                        return e.friendsFavoriteTargetIds ?? [];
                                    case h.x.MESSAGES:
                                        return e.messagesFavoriteTargetIds ?? [];
                                    case h.x.VOICE:
                                        return e.voiceFavoriteTargetIds ?? [];
                                    default:
                                        return t;
                                }
                            })(e, t),
                            i = D(t),
                            r = 0;
                        for (let e of n) {
                            let t =
                                null == e || "string" != typeof e.targetId
                                    ? null
                                    : { targetId: e.targetId, addedTimestampMs: O(e.addedTimestampMs) };
                            null != t && (i.set(t.targetId, t), (r += 1));
                        }
                    })(e, t);
            })(e),
            G({ pruneInvalid: !1 });
    }
    getState() {
        return {
            friendsFavoriteTargetIds: y(h.x.FRIENDS),
            messagesFavoriteTargetIds: y(h.x.MESSAGES),
            voiceFavoriteTargetIds: y(h.x.VOICE),
        };
    }
    getFavoriteTargetIdsForTab(e) {
        return [T.values(e).map((e) => e.targetId), T.version];
    }
    isFavorite(e, t) {
        return [D(e).has(t), T.version];
    }
}
function W(e) {
    return (0, I.v$)(e, "OverlayFriendsWidgetFavoritesStore");
}
let Y = new j(
    a.h,
    __OVERLAY__
        ? {}
        : {
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: W(function (e) {
                  let t = L(e.tab, e.targetId);
                  if (!e.isFavorite) {
                      let n = D(e.tab).delete(e.targetId),
                          i = T.delete(t);
                      return n || i;
                  }
                  let n = O(e.addedTimestampMs ?? D(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                      i = D(e.tab);
                  i.set(e.targetId, { targetId: e.targetId, addedTimestampMs: n });
                  let r = v(),
                      a = U({
                          tab: e.tab,
                          targetId: e.targetId,
                          addedTimestampMs: n,
                          guildAffinityNormalizationMax: r,
                          pruneInvalid: S,
                      });
                  switch (a.kind) {
                      case "BUILT": {
                          let e = a.row,
                              t = T.get(e.rowId);
                          (null == t || w(t, e)) && T.set(e.rowId, e);
                          break;
                      }
                      case "NOT_READY_YET":
                          T.delete(t);
                          break;
                      case "INVALID":
                          i.delete(e.targetId), T.delete(t);
                          break;
                      default:
                          return a;
                  }
                  return !0;
              }),
              POST_CONNECTION_OPEN: W(H),
              OVERLAY_INITIALIZE: W(H),
              CACHE_LOADED: W(H),
              CACHE_LOADED_LAZY: W(H),
              FRIENDS_LIST_POPOUT_MOUNTED: W(H),
              PRESENCE_UPDATES: W(function (e) {
                  let t = D(h.x.FRIENDS);
                  if (0 === t.size) return !1;
                  let n = v(),
                      i = !1;
                  for (let r of e.updates) {
                      let e = r.user?.id;
                      null != e &&
                          t.has(e) &&
                          (i =
                              k({ tab: h.x.FRIENDS, targetId: e, pruneInvalid: S, guildAffinityNormalizationMax: n }) ||
                              i);
                  }
                  return i;
              }),
              PRESENCES_REPLACE: W(function (e) {
                  let t = D(h.x.FRIENDS);
                  if (0 === t.size) return !1;
                  let n = v(),
                      i = !1;
                  for (let r of e.presences) {
                      let e = r.user?.id;
                      null != e &&
                          t.has(e) &&
                          (i =
                              k({ tab: h.x.FRIENDS, targetId: e, pruneInvalid: S, guildAffinityNormalizationMax: n }) ||
                              i);
                  }
                  return i;
              }),
              LOAD_USER_AFFINITIES_V2_SUCCESS: W(function () {
                  return F(h.x.FRIENDS, { pruneInvalid: S });
              }),
              LOAD_GUILD_AFFINITIES_SUCCESS: W(function () {
                  let e = S;
                  return F(h.x.MESSAGES, { pruneInvalid: e }) || F(h.x.VOICE, { pruneInvalid: e });
              }),
              MESSAGE_CREATE: W((e) => B(e.channelId)),
              MESSAGE_ACK: W((e) => B(e.channelId)),
              CHANNEL_ACK: W((e) => B(e.channelId)),
              CHANNEL_UPDATES: W(function (e) {
                  let t = S,
                      n = v(),
                      i = !1,
                      r = D(h.x.MESSAGES),
                      a = D(h.x.VOICE);
                  for (let s of e.channels) {
                      let e = s?.id;
                      null != e &&
                          (r.has(e) &&
                              (i =
                                  k({
                                      tab: h.x.MESSAGES,
                                      targetId: e,
                                      pruneInvalid: t,
                                      guildAffinityNormalizationMax: n,
                                  }) || i),
                          a.has(e) &&
                              (i =
                                  k({
                                      tab: h.x.VOICE,
                                      targetId: e,
                                      pruneInvalid: t,
                                      guildAffinityNormalizationMax: n,
                                  }) || i),
                          (i = V(e, { pruneInvalid: t }) || i));
                  }
                  return i;
              }),
              CHANNEL_DELETE: W(function (e) {
                  let t = e.channel?.id;
                  if (null == t) return !1;
                  let n = !1;
                  return (
                      (n = x(h.x.MESSAGES, t) || n), (n = x(h.x.VOICE, t) || n), (n = V(t, { pruneInvalid: S }) || n)
                  );
              }),
              RELATIONSHIP_ADD: W(function (e) {
                  let t = e.relationship?.id;
                  if (null == t || !D(h.x.FRIENDS).has(t)) return !1;
                  let n = v();
                  return k({ tab: h.x.FRIENDS, targetId: t, pruneInvalid: S, guildAffinityNormalizationMax: n });
              }),
              RELATIONSHIP_REMOVE: W(function (e) {
                  let t = e.relationship?.id;
                  return null != t && x(h.x.FRIENDS, t);
              }),
              LOGOUT: W(function () {
                  let e = T.size() > 0 || g.size > 0;
                  return T.clear(), (g = new Map()), (S = !1), e;
              }),
          },
);
