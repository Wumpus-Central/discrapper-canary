var i = n(855986),
    r = n(713402),
    l = n(73153),
    s = n(812020),
    a = n(95701),
    o = n(734057),
    u = n(504047),
    d = n(576705),
    c = n(290863),
    h = n(218461),
    f = n(994500),
    g = n(287809),
    A = n(914853),
    p = n(956753),
    m = n(652215);
let I = Number.MAX_SAFE_INTEGER,
    E = new r.J(
        function (e) {
            return [e.tab];
        },
        function (e) {
            return e.sortKey;
        },
    ),
    S = new Set(Object.values(A.x)),
    C = new Map(),
    _ = !1;
function N(e, t, n) {
    return e < t ? t : e > n ? n : e;
}
function T(e, t) {
    return String(e).padStart(t, "0");
}
function y(e) {
    return Number.isFinite(e) ? Math.floor(N(e, 0, I)) : Date.now();
}
function v(e) {
    return e ? "0" : "1";
}
function M(e, t) {
    return `${e}:${t}`;
}
function D(e) {
    let t = C.get(e);
    return (null == t && ((t = new Map()), C.set(e, t)), t);
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
function P(e, t) {
    let n = o.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case A.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, a.ke)(n.type)) return !1;
            return d.A.can(m.xBc.READ_MESSAGE_HISTORY, n);
        case A.x.VOICE:
            if (!(0, a.ay)(n.type)) return !1;
            return d.A.can(m.xBc.VIEW_CHANNEL, n);
        case A.x.FRIENDS:
            return !1;
        default:
            return e;
    }
}
function L(e) {
    var t;
    let n,
        { tab: i, targetId: r, isOnline: l, affinityScore: s, hasMention: a, hasUnread: o, addedTimestampMs: u } = e,
        d = {
            rowId: M(i, r),
            tab: i,
            targetId: r,
            isOnline: l,
            affinityScore: s,
            hasMention: a,
            hasUnread: o,
            addedTimestampMs: u,
            sortKey: "",
        };
    return (
        (d.sortKey = [
            (t = d).tab,
            v(t.isOnline),
            T(Math.round((1 - N(t.affinityScore, 0, 1)) * 1e6), 7),
            v(t.hasMention),
            v(t.hasUnread),
            ((n = N(t.addedTimestampMs, 0, I)), T(I - n, 16)),
            t.rowId,
        ].join("\0")),
        d
    );
}
function U(e) {
    let { tab: t, targetId: n, addedTimestampMs: i, guildAffinityNormalizationMax: r, pruneInvalid: l } = e;
    if (t === A.x.FRIENDS) {
        if (null == g.default.getUser(n)) return { kind: "NOT_READY_YET" };
        if (!f.A.isFriend(n)) return l ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
        let e = (function (e, t, n) {
            var i;
            if (e !== A.x.FRIENDS || null == g.default.getUser(t) || !f.A.isFriend(t)) return null;
            let r = (i = c.A.getStatus(t)) === m.clD.ONLINE || i === m.clD.IDLE || i === m.clD.DND,
                l = s.A.getUserAffinity(t)?.communicationProbability ?? 0,
                a = o.A.getDMFromUserId(t),
                { hasMention: u, hasUnread: d } = null != a ? x(a) : { hasMention: !1, hasUnread: !1 };
            return L({
                tab: e,
                targetId: t,
                isOnline: r,
                affinityScore: l,
                hasMention: u,
                hasUnread: d,
                addedTimestampMs: n,
            });
        })(t, n, i);
        return null == e ? (l ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: e };
    }
    if (null == o.A.getChannel(n)) return { kind: "NOT_READY_YET" };
    if (!P(t, n)) return l ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
    let d = (function (e, t, n, i) {
        if (!P(e, t)) return null;
        let r = o.A.getChannel(t);
        if (null == r) return null;
        let l = r.getGuildId() ?? null,
            s = N((null != l ? (u.A.getGuildAffinity(l)?.score ?? 0) : 0) / i, 0, 1),
            { hasMention: d, hasUnread: c } =
                (0, a.ke)(r.type) || r.isDM() || r.isMultiUserDM() || r.isPrivate()
                    ? x(t)
                    : { hasMention: !1, hasUnread: !1 };
        return L({
            tab: e,
            targetId: t,
            isOnline: !1,
            affinityScore: s,
            hasMention: d,
            hasUnread: c,
            addedTimestampMs: n,
        });
    })(t, n, i, r);
    return null == d ? (l ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: d };
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
function b(e) {
    let { pruneInvalid: t } = e,
        n = new Set(E.values().map((e) => e.rowId)),
        i = O(),
        r = !1;
    for (let e of S) {
        let l = D(e);
        for (let [s, a] of l.entries()) {
            let o = M(e, s),
                u = U({
                    tab: e,
                    targetId: s,
                    addedTimestampMs: a.addedTimestampMs,
                    guildAffinityNormalizationMax: i,
                    pruneInvalid: t,
                });
            switch ((n.delete(o), u.kind)) {
                case "BUILT": {
                    let e = u.row,
                        t = E.get(e.rowId);
                    (null == t || w(t, e)) && (r = E.set(e.rowId, e) || r);
                    break;
                }
                case "NOT_READY_YET":
                    r = E.delete(o) || r;
                    break;
                case "INVALID":
                    (l.delete(s), (r = !0), (r = E.delete(o) || r));
                    break;
                default:
                    return u;
            }
        }
    }
    for (let e of n) r = E.delete(e) || r;
    return r;
}
function G(e, t) {
    let n = D(e).delete(t),
        i = E.delete(M(e, t));
    return n || i;
}
function F(e) {
    let { tab: t, targetId: n, pruneInvalid: i, guildAffinityNormalizationMax: r } = e,
        l = D(t),
        s = l.get(n),
        a = M(t, n);
    if (null == s) return E.delete(a);
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
                t = E.get(e.rowId);
            return !!(null == t || w(t, e)) && E.set(e.rowId, e);
        }
        case "NOT_READY_YET":
            return E.delete(a);
        case "INVALID":
            return (i && l.delete(n), E.delete(a));
        default:
            return o;
    }
}
function j(e, t) {
    let { pruneInvalid: n } = t,
        i = D(e);
    if (0 === i.size && 0 === E.values(e).length) return !1;
    let r = O(),
        l = !1,
        s = new Set();
    for (let t of i.keys())
        (s.add(M(e, t)), (l = F({ tab: e, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: r }) || l));
    for (let t of E.values(e)) s.has(t.rowId) || (l = E.delete(t.rowId) || l);
    return l;
}
function k(e, t) {
    let { pruneInvalid: n } = t,
        i = D(A.x.FRIENDS);
    if (0 === i.size) return !1;
    let r = O(),
        l = !1;
    for (let t of i.keys())
        o.A.getDMFromUserId(t) === e &&
            (l = F({ tab: A.x.FRIENDS, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: r }) || l);
    return l;
}
function V(e) {
    let t = _,
        n = O(),
        i = !1;
    return (
        D(A.x.MESSAGES).has(e) &&
            (i = F({ tab: A.x.MESSAGES, targetId: e, pruneInvalid: t, guildAffinityNormalizationMax: n }) || i),
        (i = k(e, { pruneInvalid: t }) || i)
    );
}
function H() {
    return ((_ = !0), b({ pruneInvalid: !0 }));
}
class B extends i.Ay.PersistedStore {
    static displayName = "OverlayFriendsWidgetFavoritesStore";
    static persistKey = "OverlayFriendsWidgetFavoritesStore";
    initialize(e) {
        (this.waitFor(o.A, u.A, d.A, c.A, h.Ay, f.A, s.A, g.default),
            (function (e) {
                ((C = new Map()), E.clear());
                for (let t of S)
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
                            r = 0;
                        for (let e of n) {
                            let t =
                                null == e || "string" != typeof e.targetId
                                    ? null
                                    : { targetId: e.targetId, addedTimestampMs: y(e.addedTimestampMs) };
                            null != t && (i.set(t.targetId, t), (r += 1));
                        }
                    })(e, t);
            })(e),
            b({ pruneInvalid: !1 }));
    }
    getState() {
        return {
            friendsFavoriteTargetIds: R(A.x.FRIENDS),
            messagesFavoriteTargetIds: R(A.x.MESSAGES),
            voiceFavoriteTargetIds: R(A.x.VOICE),
        };
    }
    getFavoriteTargetIdsForTab(e) {
        return [E.values(e).map((e) => e.targetId), E.version];
    }
    isFavorite(e, t) {
        return [D(e).has(t), E.version];
    }
}
function W(e) {
    return (0, p.v$)(e, "OverlayFriendsWidgetFavoritesStore");
}
let Y = new B(
    l.h,
    __OVERLAY__
        ? {}
        : {
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: W(function (e) {
                  let t = M(e.tab, e.targetId);
                  if (!e.isFavorite) {
                      let n = D(e.tab).delete(e.targetId),
                          i = E.delete(t);
                      return n || i;
                  }
                  let n = y(e.addedTimestampMs ?? D(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                      i = D(e.tab);
                  i.set(e.targetId, { targetId: e.targetId, addedTimestampMs: n });
                  let r = O(),
                      l = U({
                          tab: e.tab,
                          targetId: e.targetId,
                          addedTimestampMs: n,
                          guildAffinityNormalizationMax: r,
                          pruneInvalid: _,
                      });
                  switch (l.kind) {
                      case "BUILT": {
                          let e = l.row,
                              t = E.get(e.rowId);
                          (null == t || w(t, e)) && E.set(e.rowId, e);
                          break;
                      }
                      case "NOT_READY_YET":
                          E.delete(t);
                          break;
                      case "INVALID":
                          (i.delete(e.targetId), E.delete(t));
                          break;
                      default:
                          return l;
                  }
                  return !0;
              }),
              POST_CONNECTION_OPEN: W(H),
              OVERLAY_INITIALIZE: W(H),
              CACHE_LOADED: W(H),
              CACHE_LOADED_LAZY: W(H),
              FRIENDS_LIST_POPOUT_MOUNTED: W(H),
              PRESENCE_UPDATES: W(function (e) {
                  let t = D(A.x.FRIENDS);
                  if (0 === t.size) return !1;
                  let n = O(),
                      i = !1;
                  for (let r of e.updates) {
                      let e = r.user?.id;
                      null != e &&
                          t.has(e) &&
                          (i =
                              F({ tab: A.x.FRIENDS, targetId: e, pruneInvalid: _, guildAffinityNormalizationMax: n }) ||
                              i);
                  }
                  return i;
              }),
              PRESENCES_REPLACE: W(function (e) {
                  let t = D(A.x.FRIENDS);
                  if (0 === t.size) return !1;
                  let n = O(),
                      i = !1;
                  for (let r of e.presences) {
                      let e = r.user?.id;
                      null != e &&
                          t.has(e) &&
                          (i =
                              F({ tab: A.x.FRIENDS, targetId: e, pruneInvalid: _, guildAffinityNormalizationMax: n }) ||
                              i);
                  }
                  return i;
              }),
              LOAD_USER_AFFINITIES_V2_SUCCESS: W(function () {
                  return j(A.x.FRIENDS, { pruneInvalid: _ });
              }),
              LOAD_GUILD_AFFINITIES_SUCCESS: W(function () {
                  let e = _;
                  return j(A.x.MESSAGES, { pruneInvalid: e }) || j(A.x.VOICE, { pruneInvalid: e });
              }),
              MESSAGE_CREATE: W((e) => V(e.channelId)),
              MESSAGE_ACK: W((e) => V(e.channelId)),
              CHANNEL_ACK: W((e) => V(e.channelId)),
              CHANNEL_UPDATES: W(function (e) {
                  let t = _,
                      n = O(),
                      i = !1,
                      r = D(A.x.MESSAGES),
                      l = D(A.x.VOICE);
                  for (let s of e.channels) {
                      let e = s?.id;
                      null != e &&
                          (r.has(e) &&
                              (i =
                                  F({
                                      tab: A.x.MESSAGES,
                                      targetId: e,
                                      pruneInvalid: t,
                                      guildAffinityNormalizationMax: n,
                                  }) || i),
                          l.has(e) &&
                              (i =
                                  F({
                                      tab: A.x.VOICE,
                                      targetId: e,
                                      pruneInvalid: t,
                                      guildAffinityNormalizationMax: n,
                                  }) || i),
                          (i = k(e, { pruneInvalid: t }) || i));
                  }
                  return i;
              }),
              CHANNEL_DELETE: W(function (e) {
                  let t = e.channel?.id;
                  if (null == t) return !1;
                  let n = !1;
                  return (
                      (n = G(A.x.MESSAGES, t) || n), (n = G(A.x.VOICE, t) || n), (n = k(t, { pruneInvalid: _ }) || n)
                  );
              }),
              RELATIONSHIP_ADD: W(function (e) {
                  let t = e.relationship?.id;
                  if (null == t || !D(A.x.FRIENDS).has(t)) return !1;
                  let n = O();
                  return F({ tab: A.x.FRIENDS, targetId: t, pruneInvalid: _, guildAffinityNormalizationMax: n });
              }),
              RELATIONSHIP_REMOVE: W(function (e) {
                  let t = e.relationship?.id;
                  return null != t && G(A.x.FRIENDS, t);
              }),
              LOGOUT: W(function () {
                  let e = E.size() > 0 || C.size > 0;
                  return (E.clear(), (C = new Map()), (_ = !1), e);
              }),
          },
);
n.d(t, {}, { A: Y });
