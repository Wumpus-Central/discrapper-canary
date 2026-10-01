n.d(t, { A: () => W });
var i = n(17928),
    l = n(713402),
    r = n(73153),
    s = n(427358),
    a = n(95701),
    o = n(734057),
    u = n(776096),
    d = n(576705),
    c = n(290863),
    h = n(573163),
    f = n(994500),
    g = n(287809),
    C = n(914853),
    A = n(956753),
    p = n(652215);
let m = Number.MAX_SAFE_INTEGER,
    E = new l.J(
        function (e) {
            return [e.tab];
        },
        function (e) {
            return e.sortKey;
        },
    ),
    I = new Set(Object.values(C.x)),
    S = new Map(),
    _ = !1;
function N(e, t, n) {
    return e < t ? t : e > n ? n : e;
}
function T(e, t) {
    return String(e).padStart(t, "0");
}
function M(e) {
    return Number.isFinite(e) ? Math.floor(N(e, 0, m)) : Date.now();
}
function v(e) {
    return e ? "0" : "1";
}
function y(e, t) {
    return `${e}:${t}`;
}
function L(e) {
    let t = S.get(e);
    return (null == t && ((t = new Map()), S.set(e, t)), t);
}
function x(e) {
    return Array.from(L(e).values());
}
function R() {
    let e = u.A.affinities,
        t = 0;
    for (let n = 0; n < e.length; n += 1) {
        let i = e[n].score ?? 0;
        i > t && (t = i);
    }
    return t > 0 ? t : 1;
}
function D(e) {
    return { hasMention: h.Ay.getMentionCount(e) > 0, hasUnread: h.Ay.hasUnread(e) };
}
function O(e, t) {
    let n = o.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case C.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, a.ke)(n.type)) return !1;
            return d.A.can(p.xBc.READ_MESSAGE_HISTORY, n);
        case C.x.VOICE:
            if (!(0, a.ay)(n.type)) return !1;
            return d.A.can(p.xBc.VIEW_CHANNEL, n);
        case C.x.FRIENDS:
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
            rowId: y(i, l),
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
            v(t.isOnline),
            T(Math.round((1 - N(t.affinityScore, 0, 1)) * 1e6), 7),
            v(t.hasMention),
            v(t.hasUnread),
            ((n = N(t.addedTimestampMs, 0, m)), T(m - n, 16)),
            t.rowId,
        ].join("\0")),
        d
    );
}
function U(e) {
    let { tab: t, targetId: n, addedTimestampMs: i, guildAffinityNormalizationMax: l, pruneInvalid: r } = e;
    if (t === C.x.FRIENDS) {
        if (null == g.default.getUser(n)) return { kind: "NOT_READY_YET" };
        if (!f.A.isFriend(n)) return r ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
        let e = (function (e, t, n) {
            var i;
            if (e !== C.x.FRIENDS || null == g.default.getUser(t) || !f.A.isFriend(t)) return null;
            let l = (i = c.A.getStatus(t)) === p.clD.ONLINE || i === p.clD.IDLE || i === p.clD.DND,
                r = s.A.getUserAffinity(t)?.communicationProbability ?? 0,
                a = o.A.getDMFromUserId(t),
                { hasMention: u, hasUnread: d } = null != a ? D(a) : { hasMention: !1, hasUnread: !1 };
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
    if (!O(t, n)) return r ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
    let d = (function (e, t, n, i) {
        if (!O(e, t)) return null;
        let l = o.A.getChannel(t);
        if (null == l) return null;
        let r = l.getGuildId() ?? null,
            s = N((null != r ? (u.A.getGuildAffinity(r)?.score ?? 0) : 0) / i, 0, 1),
            { hasMention: d, hasUnread: c } =
                (0, a.ke)(l.type) || l.isDM() || l.isMultiUserDM() || l.isPrivate()
                    ? D(t)
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
function b(e) {
    let { pruneInvalid: t } = e,
        n = new Set(E.values().map((e) => e.rowId)),
        i = R(),
        l = !1;
    for (let e of I) {
        let r = L(e);
        for (let [s, a] of r.entries()) {
            let o = y(e, s),
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
                    (null == t || P(t, e)) && (l = E.set(e.rowId, e) || l);
                    break;
                }
                case "NOT_READY_YET":
                    l = E.delete(o) || l;
                    break;
                case "INVALID":
                    (r.delete(s), (l = !0), (l = E.delete(o) || l));
                    break;
                default:
                    return u;
            }
        }
    }
    for (let e of n) l = E.delete(e) || l;
    return l;
}
function j(e, t) {
    let n = L(e).delete(t),
        i = E.delete(y(e, t));
    return n || i;
}
function V(e) {
    let { tab: t, targetId: n, pruneInvalid: i, guildAffinityNormalizationMax: l } = e,
        r = L(t),
        s = r.get(n),
        a = y(t, n);
    if (null == s) return E.delete(a);
    let o = U({
        tab: t,
        targetId: n,
        addedTimestampMs: s.addedTimestampMs,
        guildAffinityNormalizationMax: l,
        pruneInvalid: i,
    });
    switch (o.kind) {
        case "BUILT": {
            let e = o.row,
                t = E.get(e.rowId);
            return !!(null == t || P(t, e)) && E.set(e.rowId, e);
        }
        case "NOT_READY_YET":
            return E.delete(a);
        case "INVALID":
            return (i && r.delete(n), E.delete(a));
        default:
            return o;
    }
}
function F(e, t) {
    let { pruneInvalid: n } = t,
        i = L(e);
    if (0 === i.size && 0 === E.values(e).length) return !1;
    let l = R(),
        r = !1,
        s = new Set();
    for (let t of i.keys())
        (s.add(y(e, t)), (r = V({ tab: e, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: l }) || r));
    for (let t of E.values(e)) s.has(t.rowId) || (r = E.delete(t.rowId) || r);
    return r;
}
function G(e, t) {
    let { pruneInvalid: n } = t,
        i = L(C.x.FRIENDS);
    if (0 === i.size) return !1;
    let l = R(),
        r = !1;
    for (let t of i.keys())
        o.A.getDMFromUserId(t) === e &&
            (r = V({ tab: C.x.FRIENDS, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: l }) || r);
    return r;
}
function H(e) {
    let t = _,
        n = R(),
        i = !1;
    return (
        L(C.x.MESSAGES).has(e) &&
            (i = V({ tab: C.x.MESSAGES, targetId: e, pruneInvalid: t, guildAffinityNormalizationMax: n }) || i),
        (i = G(e, { pruneInvalid: t }) || i)
    );
}
function k() {
    return ((_ = !0), b({ pruneInvalid: !0 }));
}
class Z extends i.Ay.PersistedStore {
    static displayName = "OverlayFriendsWidgetFavoritesStore";
    static persistKey = "OverlayFriendsWidgetFavoritesStore";
    initialize(e) {
        (this.waitFor(o.A, u.A, d.A, c.A, h.Ay, f.A, s.A, g.default),
            (function (e) {
                ((S = new Map()), E.clear());
                for (let t of I)
                    (function (e, t) {
                        let n = (function (e, t) {
                                if (null == e) return [];
                                switch (t) {
                                    case C.x.FRIENDS:
                                        return e.friendsFavoriteTargetIds ?? [];
                                    case C.x.MESSAGES:
                                        return e.messagesFavoriteTargetIds ?? [];
                                    case C.x.VOICE:
                                        return e.voiceFavoriteTargetIds ?? [];
                                    default:
                                        return t;
                                }
                            })(e, t),
                            i = L(t),
                            l = 0;
                        for (let e of n) {
                            let t =
                                null == e || "string" != typeof e.targetId
                                    ? null
                                    : { targetId: e.targetId, addedTimestampMs: M(e.addedTimestampMs) };
                            null != t && (i.set(t.targetId, t), (l += 1));
                        }
                    })(e, t);
            })(e),
            b({ pruneInvalid: !1 }));
    }
    getState() {
        return {
            friendsFavoriteTargetIds: x(C.x.FRIENDS),
            messagesFavoriteTargetIds: x(C.x.MESSAGES),
            voiceFavoriteTargetIds: x(C.x.VOICE),
        };
    }
    getFavoriteTargetIdsForTab(e) {
        return [E.values(e).map((e) => e.targetId), E.version];
    }
    isFavorite(e, t) {
        return [L(e).has(t), E.version];
    }
}
function B(e) {
    return (0, A.v$)(e, "OverlayFriendsWidgetFavoritesStore");
}
let W = new Z(
    r.h,
    __OVERLAY__
        ? {}
        : {
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: B(function (e) {
                  let t = y(e.tab, e.targetId);
                  if (!e.isFavorite) {
                      let n = L(e.tab).delete(e.targetId),
                          i = E.delete(t);
                      return n || i;
                  }
                  let n = M(e.addedTimestampMs ?? L(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                      i = L(e.tab);
                  i.set(e.targetId, { targetId: e.targetId, addedTimestampMs: n });
                  let l = R(),
                      r = U({
                          tab: e.tab,
                          targetId: e.targetId,
                          addedTimestampMs: n,
                          guildAffinityNormalizationMax: l,
                          pruneInvalid: _,
                      });
                  switch (r.kind) {
                      case "BUILT": {
                          let e = r.row,
                              t = E.get(e.rowId);
                          (null == t || P(t, e)) && E.set(e.rowId, e);
                          break;
                      }
                      case "NOT_READY_YET":
                          E.delete(t);
                          break;
                      case "INVALID":
                          (i.delete(e.targetId), E.delete(t));
                          break;
                      default:
                          return r;
                  }
                  return !0;
              }),
              POST_CONNECTION_OPEN: B(k),
              OVERLAY_INITIALIZE: B(k),
              CACHE_LOADED: B(k),
              CACHE_LOADED_LAZY: B(k),
              FRIENDS_LIST_POPOUT_MOUNTED: B(k),
              PRESENCE_UPDATES: B(function (e) {
                  let t = L(C.x.FRIENDS);
                  if (0 === t.size) return !1;
                  let n = R(),
                      i = !1;
                  for (let l of e.updates) {
                      let e = l.user?.id;
                      null != e &&
                          t.has(e) &&
                          (i =
                              V({ tab: C.x.FRIENDS, targetId: e, pruneInvalid: _, guildAffinityNormalizationMax: n }) ||
                              i);
                  }
                  return i;
              }),
              PRESENCES_REPLACE: B(function (e) {
                  let t = L(C.x.FRIENDS);
                  if (0 === t.size) return !1;
                  let n = R(),
                      i = !1;
                  for (let l of e.presences) {
                      let e = l.user?.id;
                      null != e &&
                          t.has(e) &&
                          (i =
                              V({ tab: C.x.FRIENDS, targetId: e, pruneInvalid: _, guildAffinityNormalizationMax: n }) ||
                              i);
                  }
                  return i;
              }),
              LOAD_USER_AFFINITIES_V2_SUCCESS: B(function () {
                  return F(C.x.FRIENDS, { pruneInvalid: _ });
              }),
              LOAD_GUILD_AFFINITIES_SUCCESS: B(function () {
                  let e = _;
                  return F(C.x.MESSAGES, { pruneInvalid: e }) || F(C.x.VOICE, { pruneInvalid: e });
              }),
              MESSAGE_CREATE: B((e) => H(e.channelId)),
              MESSAGE_ACK: B((e) => H(e.channelId)),
              CHANNEL_ACK: B((e) => H(e.channelId)),
              CHANNEL_UPDATES: B(function (e) {
                  let t = _,
                      n = R(),
                      i = !1,
                      l = L(C.x.MESSAGES),
                      r = L(C.x.VOICE);
                  for (let s of e.channels) {
                      let e = s?.id;
                      null != e &&
                          (l.has(e) &&
                              (i =
                                  V({
                                      tab: C.x.MESSAGES,
                                      targetId: e,
                                      pruneInvalid: t,
                                      guildAffinityNormalizationMax: n,
                                  }) || i),
                          r.has(e) &&
                              (i =
                                  V({
                                      tab: C.x.VOICE,
                                      targetId: e,
                                      pruneInvalid: t,
                                      guildAffinityNormalizationMax: n,
                                  }) || i),
                          (i = G(e, { pruneInvalid: t }) || i));
                  }
                  return i;
              }),
              CHANNEL_DELETE: B(function (e) {
                  let t = e.channel?.id;
                  if (null == t) return !1;
                  let n = !1;
                  return (
                      (n = j(C.x.MESSAGES, t) || n), (n = j(C.x.VOICE, t) || n), (n = G(t, { pruneInvalid: _ }) || n)
                  );
              }),
              RELATIONSHIP_ADD: B(function (e) {
                  let t = e.relationship?.id;
                  if (null == t || !L(C.x.FRIENDS).has(t)) return !1;
                  let n = R();
                  return V({ tab: C.x.FRIENDS, targetId: t, pruneInvalid: _, guildAffinityNormalizationMax: n });
              }),
              RELATIONSHIP_REMOVE: B(function (e) {
                  let t = e.relationship?.id;
                  return null != t && j(C.x.FRIENDS, t);
              }),
              LOGOUT: B(function () {
                  let e = E.size() > 0 || S.size > 0;
                  return (E.clear(), (S = new Map()), (_ = !1), e);
              }),
          },
);
