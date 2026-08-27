n.d(t, { A: () => W });
var i = n(17928),
    l = n(713402),
    r = n(228366),
    s = n(427358),
    a = n(95701),
    o = n(734057),
    u = n(776096),
    d = n(576705),
    c = n(290863),
    h = n(573163),
    g = n(994500),
    f = n(287809),
    A = n(914853),
    E = n(956753),
    p = n(652215);
let m = Number.MAX_SAFE_INTEGER,
    I = new l.J(
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
function v(e) {
    return Number.isFinite(e) ? Math.floor(N(e, 0, m)) : Date.now();
}
function y(e) {
    return e ? "0" : "1";
}
function M(e, t) {
    return `${e}:${t}`;
}
function D(e) {
    let t = C.get(e);
    return null == t && ((t = new Map()), C.set(e, t)), t;
}
function R(e) {
    return Array.from(D(e).values());
}
function x() {
    let e = u.A.affinities,
        t = 0;
    for (let n = 0; n < e.length; n += 1) {
        let i = e[n].score ?? 0;
        i > t && (t = i);
    }
    return t > 0 ? t : 1;
}
function O(e) {
    return { hasMention: h.Ay.getMentionCount(e) > 0, hasUnread: h.Ay.hasUnread(e) };
}
function U(e, t) {
    let n = o.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case A.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, a.ke)(n.type)) return !1;
            return d.A.can(p.xBc.READ_MESSAGE_HISTORY, n);
        case A.x.VOICE:
            if (!(0, a.ay)(n.type)) return !1;
            return d.A.can(p.xBc.VIEW_CHANNEL, n);
        case A.x.FRIENDS:
            return !1;
        default:
            return e;
    }
}
function w(e) {
    var t;
    let n,
        { tab: i, targetId: l, isOnline: r, affinityScore: s, hasMention: a, hasUnread: o, addedTimestampMs: u } = e,
        d = {
            rowId: M(i, l),
            tab: i,
            targetId: l,
            isOnline: r,
            affinityScore: s,
            hasMention: a,
            hasUnread: o,
            addedTimestampMs: u,
            sortKey: "",
        };
    return (
        (d.sortKey = [
            (t = d).tab,
            y(t.isOnline),
            T(Math.round((1 - N(t.affinityScore, 0, 1)) * 1e6), 7),
            y(t.hasMention),
            y(t.hasUnread),
            ((n = N(t.addedTimestampMs, 0, m)), T(m - n, 16)),
            t.rowId,
        ].join("\0")),
        d
    );
}
function P(e) {
    let { tab: t, targetId: n, addedTimestampMs: i, guildAffinityNormalizationMax: l, pruneInvalid: r } = e;
    if (t === A.x.FRIENDS) {
        if (null == f.default.getUser(n)) return { kind: "NOT_READY_YET" };
        if (!g.A.isFriend(n)) return r ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
        let e = (function (e, t, n) {
            var i;
            if (e !== A.x.FRIENDS || null == f.default.getUser(t) || !g.A.isFriend(t)) return null;
            let l = (i = c.A.getStatus(t)) === p.clD.ONLINE || i === p.clD.IDLE || i === p.clD.DND,
                r = s.A.getUserAffinity(t)?.communicationProbability ?? 0,
                a = o.A.getDMFromUserId(t),
                { hasMention: u, hasUnread: d } = null != a ? O(a) : { hasMention: !1, hasUnread: !1 };
            return w({
                tab: e,
                targetId: t,
                isOnline: l,
                affinityScore: r,
                hasMention: u,
                hasUnread: d,
                addedTimestampMs: n,
            });
        })(t, n, i);
        return null == e ? (r ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: e };
    }
    if (null == o.A.getChannel(n)) return { kind: "NOT_READY_YET" };
    if (!U(t, n)) return r ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
    let d = (function (e, t, n, i) {
        if (!U(e, t)) return null;
        let l = o.A.getChannel(t);
        if (null == l) return null;
        let r = l.getGuildId() ?? null,
            s = N((null != r ? (u.A.getGuildAffinity(r)?.score ?? 0) : 0) / i, 0, 1),
            { hasMention: d, hasUnread: c } =
                (0, a.ke)(l.type) || l.isDM() || l.isMultiUserDM() || l.isPrivate()
                    ? O(t)
                    : { hasMention: !1, hasUnread: !1 };
        return w({
            tab: e,
            targetId: t,
            isOnline: !1,
            affinityScore: s,
            hasMention: d,
            hasUnread: c,
            addedTimestampMs: n,
        });
    })(t, n, i, l);
    return null == d ? (r ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: d };
}
function L(e, t) {
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
        n = new Set(I.values().map((e) => e.rowId)),
        i = x(),
        l = !1;
    for (let e of S) {
        let r = D(e);
        for (let [s, a] of r.entries()) {
            let o = M(e, s),
                u = P({
                    tab: e,
                    targetId: s,
                    addedTimestampMs: a.addedTimestampMs,
                    guildAffinityNormalizationMax: i,
                    pruneInvalid: t,
                });
            switch ((n.delete(o), u.kind)) {
                case "BUILT": {
                    let e = u.row,
                        t = I.get(e.rowId);
                    (null == t || L(t, e)) && (l = I.set(e.rowId, e) || l);
                    break;
                }
                case "NOT_READY_YET":
                    l = I.delete(o) || l;
                    break;
                case "INVALID":
                    r.delete(s), (l = !0), (l = I.delete(o) || l);
                    break;
                default:
                    return u;
            }
        }
    }
    for (let e of n) l = I.delete(e) || l;
    return l;
}
function G(e, t) {
    let n = D(e).delete(t),
        i = I.delete(M(e, t));
    return n || i;
}
function F(e) {
    let { tab: t, targetId: n, pruneInvalid: i, guildAffinityNormalizationMax: l } = e,
        r = D(t),
        s = r.get(n),
        a = M(t, n);
    if (null == s) return I.delete(a);
    let o = P({
        tab: t,
        targetId: n,
        addedTimestampMs: s.addedTimestampMs,
        guildAffinityNormalizationMax: l,
        pruneInvalid: i,
    });
    switch (o.kind) {
        case "BUILT": {
            let e = o.row,
                t = I.get(e.rowId);
            return !!(null == t || L(t, e)) && I.set(e.rowId, e);
        }
        case "NOT_READY_YET":
            return I.delete(a);
        case "INVALID":
            return i && r.delete(n), I.delete(a);
        default:
            return o;
    }
}
function j(e, t) {
    let { pruneInvalid: n } = t,
        i = D(e);
    if (0 === i.size && 0 === I.values(e).length) return !1;
    let l = x(),
        r = !1,
        s = new Set();
    for (let t of i.keys())
        s.add(M(e, t)), (r = F({ tab: e, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: l }) || r);
    for (let t of I.values(e)) s.has(t.rowId) || (r = I.delete(t.rowId) || r);
    return r;
}
function V(e, t) {
    let { pruneInvalid: n } = t,
        i = D(A.x.FRIENDS);
    if (0 === i.size) return !1;
    let l = x(),
        r = !1;
    for (let t of i.keys())
        o.A.getDMFromUserId(t) === e &&
            (r = F({ tab: A.x.FRIENDS, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: l }) || r);
    return r;
}
function k(e) {
    let t = _,
        n = x(),
        i = !1;
    return (
        D(A.x.MESSAGES).has(e) &&
            (i = F({ tab: A.x.MESSAGES, targetId: e, pruneInvalid: t, guildAffinityNormalizationMax: n }) || i),
        (i = V(e, { pruneInvalid: t }) || i)
    );
}
function H() {
    return (_ = !0), b({ pruneInvalid: !0 });
}
class B extends i.Ay.PersistedStore {
    static displayName = "OverlayFriendsWidgetFavoritesStore";
    static persistKey = "OverlayFriendsWidgetFavoritesStore";
    initialize(e) {
        this.waitFor(o.A, u.A, d.A, c.A, h.Ay, g.A, s.A, f.default),
            (function (e) {
                (C = new Map()), I.clear();
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
            b({ pruneInvalid: !1 });
    }
    getState() {
        return {
            friendsFavoriteTargetIds: R(A.x.FRIENDS),
            messagesFavoriteTargetIds: R(A.x.MESSAGES),
            voiceFavoriteTargetIds: R(A.x.VOICE),
        };
    }
    getFavoriteTargetIdsForTab(e) {
        return [I.values(e).map((e) => e.targetId), I.version];
    }
    isFavorite(e, t) {
        return [D(e).has(t), I.version];
    }
}
function Y(e) {
    return (0, E.v$)(e, "OverlayFriendsWidgetFavoritesStore");
}
let W = new B(
    r.h,
    __OVERLAY__
        ? {}
        : {
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: Y(function (e) {
                  let t = M(e.tab, e.targetId);
                  if (!e.isFavorite) {
                      let n = D(e.tab).delete(e.targetId),
                          i = I.delete(t);
                      return n || i;
                  }
                  let n = v(e.addedTimestampMs ?? D(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                      i = D(e.tab);
                  i.set(e.targetId, { targetId: e.targetId, addedTimestampMs: n });
                  let l = x(),
                      r = P({
                          tab: e.tab,
                          targetId: e.targetId,
                          addedTimestampMs: n,
                          guildAffinityNormalizationMax: l,
                          pruneInvalid: _,
                      });
                  switch (r.kind) {
                      case "BUILT": {
                          let e = r.row,
                              t = I.get(e.rowId);
                          (null == t || L(t, e)) && I.set(e.rowId, e);
                          break;
                      }
                      case "NOT_READY_YET":
                          I.delete(t);
                          break;
                      case "INVALID":
                          i.delete(e.targetId), I.delete(t);
                          break;
                      default:
                          return r;
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
                  let n = x(),
                      i = !1;
                  for (let l of e.updates) {
                      let e = l.user?.id;
                      null != e &&
                          t.has(e) &&
                          (i =
                              F({ tab: A.x.FRIENDS, targetId: e, pruneInvalid: _, guildAffinityNormalizationMax: n }) ||
                              i);
                  }
                  return i;
              }),
              PRESENCES_REPLACE: Y(function (e) {
                  let t = D(A.x.FRIENDS);
                  if (0 === t.size) return !1;
                  let n = x(),
                      i = !1;
                  for (let l of e.presences) {
                      let e = l.user?.id;
                      null != e &&
                          t.has(e) &&
                          (i =
                              F({ tab: A.x.FRIENDS, targetId: e, pruneInvalid: _, guildAffinityNormalizationMax: n }) ||
                              i);
                  }
                  return i;
              }),
              LOAD_USER_AFFINITIES_V2_SUCCESS: Y(function () {
                  return j(A.x.FRIENDS, { pruneInvalid: _ });
              }),
              LOAD_GUILD_AFFINITIES_SUCCESS: Y(function () {
                  let e = _;
                  return j(A.x.MESSAGES, { pruneInvalid: e }) || j(A.x.VOICE, { pruneInvalid: e });
              }),
              MESSAGE_CREATE: Y((e) => k(e.channelId)),
              MESSAGE_ACK: Y((e) => k(e.channelId)),
              CHANNEL_ACK: Y((e) => k(e.channelId)),
              CHANNEL_UPDATES: Y(function (e) {
                  let t = _,
                      n = x(),
                      i = !1,
                      l = D(A.x.MESSAGES),
                      r = D(A.x.VOICE);
                  for (let s of e.channels) {
                      let e = s?.id;
                      null != e &&
                          (l.has(e) &&
                              (i =
                                  F({
                                      tab: A.x.MESSAGES,
                                      targetId: e,
                                      pruneInvalid: t,
                                      guildAffinityNormalizationMax: n,
                                  }) || i),
                          r.has(e) &&
                              (i =
                                  F({
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
                      (n = G(A.x.MESSAGES, t) || n), (n = G(A.x.VOICE, t) || n), (n = V(t, { pruneInvalid: _ }) || n)
                  );
              }),
              RELATIONSHIP_ADD: Y(function (e) {
                  let t = e.relationship?.id;
                  if (null == t || !D(A.x.FRIENDS).has(t)) return !1;
                  let n = x();
                  return F({ tab: A.x.FRIENDS, targetId: t, pruneInvalid: _, guildAffinityNormalizationMax: n });
              }),
              RELATIONSHIP_REMOVE: Y(function (e) {
                  let t = e.relationship?.id;
                  return null != t && G(A.x.FRIENDS, t);
              }),
              LOGOUT: Y(function () {
                  let e = I.size() > 0 || C.size > 0;
                  return I.clear(), (C = new Map()), (_ = !1), e;
              }),
          },
);
