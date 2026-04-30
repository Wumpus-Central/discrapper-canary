"use strict";
n.d(t, { A: () => W });
var i = n(17928),
    r = n(713402),
    s = n(228366),
    a = n(427358),
    o = n(95701),
    l = n(734057),
    u = n(776096),
    c = n(576705),
    d = n(290863),
    _ = n(222823),
    f = n(994500),
    h = n(287809),
    p = n(914853),
    E = n(956753),
    m = n(652215);
let g = Number.MAX_SAFE_INTEGER,
    A = new r.J(
        (e) => [e.tab],
        (e) => e.sortKey,
    ),
    I = new Set(Object.values(p.x)),
    T = new Map(),
    S = !1;
function N(e, t, n) {
    return e < t ? t : e > n ? n : e;
}
function y(e, t) {
    return String(e).padStart(t, "0");
}
function C(e) {
    return Number.isFinite(e) ? Math.floor(N(e, 0, g)) : Date.now();
}
function v(e) {
    return e ? "0" : "1";
}
function O(e, t) {
    return `${e}:${t}`;
}
function R(e) {
    let t = T.get(e);
    return null == t && ((t = new Map()), T.set(e, t)), t;
}
function b(e) {
    return Array.from(R(e).values());
}
function D() {
    let e = u.A.affinities,
        t = 0;
    for (let n = 0; n < e.length; n += 1) {
        let i = e[n].score ?? 0;
        i > t && (t = i);
    }
    return t > 0 ? t : 1;
}
function L(e) {
    return { hasMention: _.Ay.getMentionCount(e) > 0, hasUnread: _.Ay.hasUnread(e) };
}
function w(e, t) {
    let n = l.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case p.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, o.ke)(n.type)) return !1;
            return c.A.can(m.xBc.READ_MESSAGE_HISTORY, n);
        case p.x.VOICE:
            if (!(0, o.ay)(n.type)) return !1;
            return c.A.can(m.xBc.VIEW_CHANNEL, n);
        case p.x.FRIENDS:
            return !1;
        default:
            return e;
    }
}
function M(e) {
    var t;
    let n,
        { tab: i, targetId: r, isOnline: s, affinityScore: a, hasMention: o, hasUnread: l, addedTimestampMs: u } = e,
        c = {
            rowId: O(i, r),
            tab: i,
            targetId: r,
            isOnline: s,
            affinityScore: a,
            hasMention: o,
            hasUnread: l,
            addedTimestampMs: u,
            sortKey: "",
        };
    return (
        (c.sortKey = [
            (t = c).tab,
            v(t.isOnline),
            y(Math.round((1 - N(t.affinityScore, 0, 1)) * 1e6), 7),
            v(t.hasMention),
            v(t.hasUnread),
            ((n = N(t.addedTimestampMs, 0, g)), y(g - n, 16)),
            t.rowId,
        ].join("\0")),
        c
    );
}
function P(e) {
    let { tab: t, targetId: n, addedTimestampMs: i, guildAffinityNormalizationMax: r, pruneInvalid: s } = e;
    if (t === p.x.FRIENDS) {
        if (null == h.default.getUser(n)) return { kind: "NOT_READY_YET" };
        if (!f.A.isFriend(n)) return s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
        let e = (function (e, t, n) {
            var i;
            if (e !== p.x.FRIENDS || null == h.default.getUser(t) || !f.A.isFriend(t)) return null;
            let r = (i = d.A.getStatus(t)) === m.clD.ONLINE || i === m.clD.IDLE || i === m.clD.DND,
                s = a.A.getUserAffinity(t)?.communicationProbability ?? 0,
                o = l.A.getDMFromUserId(t),
                { hasMention: u, hasUnread: c } = null != o ? L(o) : { hasMention: !1, hasUnread: !1 };
            return M({
                tab: e,
                targetId: t,
                isOnline: r,
                affinityScore: s,
                hasMention: u,
                hasUnread: c,
                addedTimestampMs: n,
            });
        })(t, n, i);
        return null == e ? (s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: e };
    }
    if (null == l.A.getChannel(n)) return { kind: "NOT_READY_YET" };
    if (!w(t, n)) return s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
    let c = (function (e, t, n, i) {
        if (!w(e, t)) return null;
        let r = l.A.getChannel(t);
        if (null == r) return null;
        let s = r.getGuildId() ?? null,
            a = N((null != s ? (u.A.getGuildAffinity(s)?.score ?? 0) : 0) / i, 0, 1),
            { hasMention: c, hasUnread: d } =
                (0, o.ke)(r.type) || r.isDM() || r.isMultiUserDM() || r.isPrivate()
                    ? L(t)
                    : { hasMention: !1, hasUnread: !1 };
        return M({
            tab: e,
            targetId: t,
            isOnline: !1,
            affinityScore: a,
            hasMention: c,
            hasUnread: d,
            addedTimestampMs: n,
        });
    })(t, n, i, r);
    return null == c ? (s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: c };
}
function x(e, t) {
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
function U(e) {
    let { pruneInvalid: t } = e,
        n = new Set(A.values().map((e) => e.rowId)),
        i = D(),
        r = !1;
    for (let e of I) {
        let s = R(e);
        for (let [a, o] of s.entries()) {
            let l = O(e, a),
                u = P({
                    tab: e,
                    targetId: a,
                    addedTimestampMs: o.addedTimestampMs,
                    guildAffinityNormalizationMax: i,
                    pruneInvalid: t,
                });
            switch ((n.delete(l), u.kind)) {
                case "BUILT": {
                    let e = u.row,
                        t = A.get(e.rowId);
                    (null == t || x(t, e)) && (r = A.set(e.rowId, e) || r);
                    break;
                }
                case "NOT_READY_YET":
                    r = A.delete(l) || r;
                    break;
                case "INVALID":
                    s.delete(a), (r = !0), (r = A.delete(l) || r);
                    break;
                default:
                    return u;
            }
        }
    }
    for (let e of n) r = A.delete(e) || r;
    return r;
}
function k(e, t) {
    let n = R(e).delete(t),
        i = A.delete(O(e, t));
    return n || i;
}
function G(e) {
    let { tab: t, targetId: n, pruneInvalid: i, guildAffinityNormalizationMax: r } = e,
        s = R(t),
        a = s.get(n),
        o = O(t, n);
    if (null == a) return A.delete(o);
    let l = P({
        tab: t,
        targetId: n,
        addedTimestampMs: a.addedTimestampMs,
        guildAffinityNormalizationMax: r,
        pruneInvalid: i,
    });
    switch (l.kind) {
        case "BUILT": {
            let e = l.row,
                t = A.get(e.rowId);
            return !!(null == t || x(t, e)) && A.set(e.rowId, e);
        }
        case "NOT_READY_YET":
            return A.delete(o);
        case "INVALID":
            return i && s.delete(n), A.delete(o);
        default:
            return l;
    }
}
function F(e, t) {
    let { pruneInvalid: n } = t,
        i = R(e);
    if (0 === i.size && 0 === A.values(e).length) return !1;
    let r = D(),
        s = !1,
        a = new Set();
    for (let t of i.keys())
        a.add(O(e, t)), (s = G({ tab: e, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: r }) || s);
    for (let t of A.values(e)) a.has(t.rowId) || (s = A.delete(t.rowId) || s);
    return s;
}
function V(e, t) {
    let { pruneInvalid: n } = t,
        i = R(p.x.FRIENDS);
    if (0 === i.size) return !1;
    let r = D(),
        s = !1;
    for (let t of i.keys())
        l.A.getDMFromUserId(t) === e &&
            (s = G({ tab: p.x.FRIENDS, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: r }) || s);
    return s;
}
function B(e) {
    let t = S,
        n = D(),
        i = !1;
    return (
        R(p.x.MESSAGES).has(e) &&
            (i = G({ tab: p.x.MESSAGES, targetId: e, pruneInvalid: t, guildAffinityNormalizationMax: n }) || i),
        (i = V(e, { pruneInvalid: t }) || i)
    );
}
function H() {
    return (S = !0), U({ pruneInvalid: !0 });
}
class j extends i.Ay.PersistedStore {
    static displayName = "OverlayFriendsWidgetFavoritesStore";
    static persistKey = "OverlayFriendsWidgetFavoritesStore";
    initialize(e) {
        this.waitFor(l.A, u.A, c.A, d.A, _.Ay, f.A, a.A, h.default),
            (function (e) {
                (T = new Map()), A.clear();
                for (let t of I)
                    (function (e, t) {
                        let n = (function (e, t) {
                                if (null == e) return [];
                                switch (t) {
                                    case p.x.FRIENDS:
                                        return e.friendsFavoriteTargetIds ?? [];
                                    case p.x.MESSAGES:
                                        return e.messagesFavoriteTargetIds ?? [];
                                    case p.x.VOICE:
                                        return e.voiceFavoriteTargetIds ?? [];
                                    default:
                                        return t;
                                }
                            })(e, t),
                            i = R(t),
                            r = 0;
                        for (let e of n) {
                            let t =
                                null == e || "string" != typeof e.targetId
                                    ? null
                                    : { targetId: e.targetId, addedTimestampMs: C(e.addedTimestampMs) };
                            null != t && (i.set(t.targetId, t), (r += 1));
                        }
                    })(e, t);
            })(e),
            U({ pruneInvalid: !1 });
    }
    getState() {
        return {
            friendsFavoriteTargetIds: b(p.x.FRIENDS),
            messagesFavoriteTargetIds: b(p.x.MESSAGES),
            voiceFavoriteTargetIds: b(p.x.VOICE),
        };
    }
    getFavoriteTargetIdsForTab(e) {
        return [A.values(e).map((e) => e.targetId), A.version];
    }
    isFavorite(e, t) {
        return [R(e).has(t), A.version];
    }
}
let Y = (e) => (0, E.v$)(e, "OverlayFriendsWidgetFavoritesStore"),
    W = new j(
        s.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: Y(function (e) {
                      let t = O(e.tab, e.targetId);
                      if (!e.isFavorite) {
                          let n = R(e.tab).delete(e.targetId),
                              i = A.delete(t);
                          return n || i;
                      }
                      let n = C(e.addedTimestampMs ?? R(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                          i = R(e.tab);
                      i.set(e.targetId, { targetId: e.targetId, addedTimestampMs: n });
                      let r = D(),
                          s = P({
                              tab: e.tab,
                              targetId: e.targetId,
                              addedTimestampMs: n,
                              guildAffinityNormalizationMax: r,
                              pruneInvalid: S,
                          });
                      switch (s.kind) {
                          case "BUILT": {
                              let e = s.row,
                                  t = A.get(e.rowId);
                              (null == t || x(t, e)) && A.set(e.rowId, e);
                              break;
                          }
                          case "NOT_READY_YET":
                              A.delete(t);
                              break;
                          case "INVALID":
                              i.delete(e.targetId), A.delete(t);
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
                      let t = R(p.x.FRIENDS);
                      if (0 === t.size) return !1;
                      let n = D(),
                          i = !1;
                      for (let r of e.updates) {
                          let e = r.user?.id;
                          null != e &&
                              t.has(e) &&
                              (i =
                                  G({
                                      tab: p.x.FRIENDS,
                                      targetId: e,
                                      pruneInvalid: S,
                                      guildAffinityNormalizationMax: n,
                                  }) || i);
                      }
                      return i;
                  }),
                  PRESENCES_REPLACE: Y(function (e) {
                      let t = R(p.x.FRIENDS);
                      if (0 === t.size) return !1;
                      let n = D(),
                          i = !1;
                      for (let r of e.presences) {
                          let e = r.user?.id;
                          null != e &&
                              t.has(e) &&
                              (i =
                                  G({
                                      tab: p.x.FRIENDS,
                                      targetId: e,
                                      pruneInvalid: S,
                                      guildAffinityNormalizationMax: n,
                                  }) || i);
                      }
                      return i;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: Y(function () {
                      return F(p.x.FRIENDS, { pruneInvalid: S });
                  }),
                  LOAD_GUILD_AFFINITIES_SUCCESS: Y(function () {
                      let e = S;
                      return F(p.x.MESSAGES, { pruneInvalid: e }) || F(p.x.VOICE, { pruneInvalid: e });
                  }),
                  MESSAGE_CREATE: Y((e) => B(e.channelId)),
                  MESSAGE_ACK: Y((e) => B(e.channelId)),
                  CHANNEL_ACK: Y((e) => B(e.channelId)),
                  CHANNEL_UPDATES: Y(function (e) {
                      let t = S,
                          n = D(),
                          i = !1,
                          r = R(p.x.MESSAGES),
                          s = R(p.x.VOICE);
                      for (let a of e.channels) {
                          let e = a?.id;
                          null != e &&
                              (r.has(e) &&
                                  (i =
                                      G({
                                          tab: p.x.MESSAGES,
                                          targetId: e,
                                          pruneInvalid: t,
                                          guildAffinityNormalizationMax: n,
                                      }) || i),
                              s.has(e) &&
                                  (i =
                                      G({
                                          tab: p.x.VOICE,
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
                          (n = k(p.x.MESSAGES, t) || n),
                          (n = k(p.x.VOICE, t) || n),
                          (n = V(t, { pruneInvalid: S }) || n)
                      );
                  }),
                  RELATIONSHIP_ADD: Y(function (e) {
                      let t = e.relationship?.id;
                      if (null == t || !R(p.x.FRIENDS).has(t)) return !1;
                      let n = D();
                      return G({ tab: p.x.FRIENDS, targetId: t, pruneInvalid: S, guildAffinityNormalizationMax: n });
                  }),
                  RELATIONSHIP_REMOVE: Y(function (e) {
                      let t = e.relationship?.id;
                      return null != t && k(p.x.FRIENDS, t);
                  }),
                  LOGOUT: Y(function () {
                      let e = A.size() > 0 || T.size > 0;
                      return A.clear(), (T = new Map()), (S = !1), e;
                  }),
              },
    );
