n.d(t, { A: () => W });
var l = n(311907),
    i = n(713402),
    s = n(73153),
    r = n(21119),
    a = n(95701),
    u = n(734057),
    o = n(197305),
    d = n(576705),
    c = n(290863),
    h = n(222823),
    g = n(994500),
    I = n(287809),
    E = n(914853),
    A = n(956753),
    f = n(652215);
let m = Number.MAX_SAFE_INTEGER,
    S = new i.J(
        (e) => [e.tab],
        (e) => e.sortKey,
    ),
    p = new Set(Object.values(E.x)),
    N = new Map(),
    T = !1;
function _(e, t, n) {
    return e < t ? t : e > n ? n : e;
}
function y(e, t) {
    return String(e).padStart(t, "0");
}
function C(e) {
    return Number.isFinite(e) ? Math.floor(_(e, 0, m)) : Date.now();
}
function x(e) {
    return e ? "0" : "1";
}
function v(e, t) {
    return `${e}:${t}`;
}
function M(e) {
    let t = N.get(e);
    return null == t && ((t = new Map()), N.set(e, t)), t;
}
function D(e) {
    return Array.from(M(e).values());
}
function R() {
    let e = o.A.affinities,
        t = 0;
    for (let n = 0; n < e.length; n += 1) {
        let l = e[n].score ?? 0;
        l > t && (t = l);
    }
    return t > 0 ? t : 1;
}
function U(e) {
    return { hasMention: h.Ay.getMentionCount(e) > 0, hasUnread: h.Ay.hasUnread(e) };
}
function O(e, t) {
    let n = u.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case E.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, a.ke)(n.type)) return !1;
            return d.A.can(f.xBc.READ_MESSAGE_HISTORY, n);
        case E.x.VOICE:
            if (!(0, a.ay)(n.type)) return !1;
            return d.A.can(f.xBc.VIEW_CHANNEL, n);
        case E.x.FRIENDS:
            return !1;
        default:
            return e;
    }
}
function G(e) {
    var t;
    let n,
        { tab: l, targetId: i, isOnline: s, affinityScore: r, hasMention: a, hasUnread: u, addedTimestampMs: o } = e,
        d = {
            rowId: v(l, i),
            tab: l,
            targetId: i,
            isOnline: s,
            affinityScore: r,
            hasMention: a,
            hasUnread: u,
            addedTimestampMs: o,
            sortKey: "",
        };
    return (
        (d.sortKey = [
            (t = d).tab,
            x(t.isOnline),
            y(Math.round((1 - _(t.affinityScore, 0, 1)) * 1e6), 7),
            x(t.hasMention),
            x(t.hasUnread),
            ((n = _(t.addedTimestampMs, 0, m)), y(m - n, 16)),
            t.rowId,
        ].join("\0")),
        d
    );
}
function b(e) {
    let { tab: t, targetId: n, addedTimestampMs: l, guildAffinityNormalizationMax: i, pruneInvalid: s } = e;
    if (t === E.x.FRIENDS) {
        if (null == I.default.getUser(n)) return { kind: "NOT_READY_YET" };
        if (!g.A.isFriend(n)) return s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
        let e = (function (e, t, n) {
            var l;
            if (e !== E.x.FRIENDS || null == I.default.getUser(t) || !g.A.isFriend(t)) return null;
            let i = (l = c.A.getStatus(t)) === f.clD.ONLINE || l === f.clD.IDLE || l === f.clD.DND,
                s = r.A.getUserAffinity(t)?.communicationProbability ?? 0,
                a = u.A.getDMFromUserId(t),
                { hasMention: o, hasUnread: d } = null != a ? U(a) : { hasMention: !1, hasUnread: !1 };
            return G({
                tab: e,
                targetId: t,
                isOnline: i,
                affinityScore: s,
                hasMention: o,
                hasUnread: d,
                addedTimestampMs: n,
            });
        })(t, n, l);
        return null == e ? (s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: e };
    }
    if (null == u.A.getChannel(n)) return { kind: "NOT_READY_YET" };
    if (!O(t, n)) return s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
    let d = (function (e, t, n, l) {
        if (!O(e, t)) return null;
        let i = u.A.getChannel(t);
        if (null == i) return null;
        let s = i.getGuildId() ?? null,
            r = _((null != s ? (o.A.getGuildAffinity(s)?.score ?? 0) : 0) / l, 0, 1),
            { hasMention: d, hasUnread: c } =
                (0, a.ke)(i.type) || i.isDM() || i.isMultiUserDM() || i.isPrivate()
                    ? U(t)
                    : { hasMention: !1, hasUnread: !1 };
        return G({
            tab: e,
            targetId: t,
            isOnline: !1,
            affinityScore: r,
            hasMention: d,
            hasUnread: c,
            addedTimestampMs: n,
        });
    })(t, n, l, i);
    return null == d ? (s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: d };
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
function L(e) {
    let { pruneInvalid: t } = e,
        n = new Set(S.values().map((e) => e.rowId)),
        l = R(),
        i = !1;
    for (let e of p) {
        let s = M(e);
        for (let [r, a] of s.entries()) {
            let u = v(e, r),
                o = b({
                    tab: e,
                    targetId: r,
                    addedTimestampMs: a.addedTimestampMs,
                    guildAffinityNormalizationMax: l,
                    pruneInvalid: t,
                });
            switch ((n.delete(u), o.kind)) {
                case "BUILT": {
                    let e = o.row,
                        t = S.get(e.rowId);
                    (null == t || w(t, e)) && (i = S.set(e.rowId, e) || i);
                    break;
                }
                case "NOT_READY_YET":
                    i = S.delete(u) || i;
                    break;
                case "INVALID":
                    s.delete(r), (i = !0), (i = S.delete(u) || i);
                    break;
                default:
                    return o;
            }
        }
    }
    for (let e of n) i = S.delete(e) || i;
    return i;
}
function k(e, t) {
    let n = M(e).delete(t),
        l = S.delete(v(e, t));
    return n || l;
}
function F(e) {
    let { tab: t, targetId: n, pruneInvalid: l, guildAffinityNormalizationMax: i } = e,
        s = M(t),
        r = s.get(n),
        a = v(t, n);
    if (null == r) return S.delete(a);
    let u = b({
        tab: t,
        targetId: n,
        addedTimestampMs: r.addedTimestampMs,
        guildAffinityNormalizationMax: i,
        pruneInvalid: l,
    });
    switch (u.kind) {
        case "BUILT": {
            let e = u.row,
                t = S.get(e.rowId);
            return !!(null == t || w(t, e)) && S.set(e.rowId, e);
        }
        case "NOT_READY_YET":
            return S.delete(a);
        case "INVALID":
            return l && s.delete(n), S.delete(a);
        default:
            return u;
    }
}
function P(e, t) {
    let { pruneInvalid: n } = t,
        l = M(e);
    if (0 === l.size && 0 === S.values(e).length) return !1;
    let i = R(),
        s = !1,
        r = new Set();
    for (let t of l.keys())
        r.add(v(e, t)), (s = F({ tab: e, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: i }) || s);
    for (let t of S.values(e)) r.has(t.rowId) || (s = S.delete(t.rowId) || s);
    return s;
}
function j(e, t) {
    let { pruneInvalid: n } = t,
        l = M(E.x.FRIENDS);
    if (0 === l.size) return !1;
    let i = R(),
        s = !1;
    for (let t of l.keys())
        u.A.getDMFromUserId(t) === e &&
            (s = F({ tab: E.x.FRIENDS, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: i }) || s);
    return s;
}
function V(e) {
    let t = T,
        n = R(),
        l = !1;
    return (
        M(E.x.MESSAGES).has(e) &&
            (l = F({ tab: E.x.MESSAGES, targetId: e, pruneInvalid: t, guildAffinityNormalizationMax: n }) || l),
        (l = j(e, { pruneInvalid: t }) || l)
    );
}
function H() {
    return (T = !0), L({ pruneInvalid: !0 });
}
class Y extends l.Ay.PersistedStore {
    static displayName = "OverlayFriendsWidgetFavoritesStore";
    static persistKey = "OverlayFriendsWidgetFavoritesStore";
    initialize(e) {
        this.waitFor(u.A, o.A, d.A, c.A, h.Ay, g.A, r.A, I.default),
            (function (e) {
                (N = new Map()), S.clear();
                for (let t of p)
                    (function (e, t) {
                        let n = (function (e, t) {
                                if (null == e) return [];
                                switch (t) {
                                    case E.x.FRIENDS:
                                        return e.friendsFavoriteTargetIds ?? [];
                                    case E.x.MESSAGES:
                                        return e.messagesFavoriteTargetIds ?? [];
                                    case E.x.VOICE:
                                        return e.voiceFavoriteTargetIds ?? [];
                                    default:
                                        return t;
                                }
                            })(e, t),
                            l = M(t),
                            i = 0;
                        for (let e of n) {
                            let t =
                                null == e || "string" != typeof e.targetId
                                    ? null
                                    : { targetId: e.targetId, addedTimestampMs: C(e.addedTimestampMs) };
                            null != t && (l.set(t.targetId, t), (i += 1));
                        }
                    })(e, t);
            })(e),
            L({ pruneInvalid: !1 });
    }
    getState() {
        return {
            friendsFavoriteTargetIds: D(E.x.FRIENDS),
            messagesFavoriteTargetIds: D(E.x.MESSAGES),
            voiceFavoriteTargetIds: D(E.x.VOICE),
        };
    }
    getFavoriteTargetIdsForTab(e) {
        return [S.values(e).map((e) => e.targetId), S.version];
    }
    isFavorite(e, t) {
        return [M(e).has(t), S.version];
    }
}
let z = (e) => (0, A.v$)(e, "OverlayFriendsWidgetFavoritesStore"),
    W = new Y(
        s.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: z(function (e) {
                      let t = v(e.tab, e.targetId);
                      if (!e.isFavorite) {
                          let n = M(e.tab).delete(e.targetId),
                              l = S.delete(t);
                          return n || l;
                      }
                      let n = C(e.addedTimestampMs ?? M(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                          l = M(e.tab);
                      l.set(e.targetId, { targetId: e.targetId, addedTimestampMs: n });
                      let i = R(),
                          s = b({
                              tab: e.tab,
                              targetId: e.targetId,
                              addedTimestampMs: n,
                              guildAffinityNormalizationMax: i,
                              pruneInvalid: T,
                          });
                      switch (s.kind) {
                          case "BUILT": {
                              let e = s.row,
                                  t = S.get(e.rowId);
                              (null == t || w(t, e)) && S.set(e.rowId, e);
                              break;
                          }
                          case "NOT_READY_YET":
                              S.delete(t);
                              break;
                          case "INVALID":
                              l.delete(e.targetId), S.delete(t);
                              break;
                          default:
                              return s;
                      }
                      return !0;
                  }),
                  POST_CONNECTION_OPEN: z(H),
                  OVERLAY_INITIALIZE: z(H),
                  CACHE_LOADED: z(H),
                  CACHE_LOADED_LAZY: z(H),
                  FRIENDS_LIST_POPOUT_MOUNTED: z(H),
                  PRESENCE_UPDATES: z(function (e) {
                      let t = M(E.x.FRIENDS);
                      if (0 === t.size) return !1;
                      let n = R(),
                          l = !1;
                      for (let i of e.updates) {
                          let e = i.user?.id;
                          null != e &&
                              t.has(e) &&
                              (l =
                                  F({
                                      tab: E.x.FRIENDS,
                                      targetId: e,
                                      pruneInvalid: T,
                                      guildAffinityNormalizationMax: n,
                                  }) || l);
                      }
                      return l;
                  }),
                  PRESENCES_REPLACE: z(function (e) {
                      let t = M(E.x.FRIENDS);
                      if (0 === t.size) return !1;
                      let n = R(),
                          l = !1;
                      for (let i of e.presences) {
                          let e = i.user?.id;
                          null != e &&
                              t.has(e) &&
                              (l =
                                  F({
                                      tab: E.x.FRIENDS,
                                      targetId: e,
                                      pruneInvalid: T,
                                      guildAffinityNormalizationMax: n,
                                  }) || l);
                      }
                      return l;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: z(function () {
                      return P(E.x.FRIENDS, { pruneInvalid: T });
                  }),
                  LOAD_GUILD_AFFINITIES_SUCCESS: z(function () {
                      let e = T;
                      return P(E.x.MESSAGES, { pruneInvalid: e }) || P(E.x.VOICE, { pruneInvalid: e });
                  }),
                  MESSAGE_CREATE: z((e) => V(e.channelId)),
                  MESSAGE_ACK: z((e) => V(e.channelId)),
                  CHANNEL_ACK: z((e) => V(e.channelId)),
                  CHANNEL_UPDATES: z(function (e) {
                      let t = T,
                          n = R(),
                          l = !1,
                          i = M(E.x.MESSAGES),
                          s = M(E.x.VOICE);
                      for (let r of e.channels) {
                          let e = r?.id;
                          null != e &&
                              (i.has(e) &&
                                  (l =
                                      F({
                                          tab: E.x.MESSAGES,
                                          targetId: e,
                                          pruneInvalid: t,
                                          guildAffinityNormalizationMax: n,
                                      }) || l),
                              s.has(e) &&
                                  (l =
                                      F({
                                          tab: E.x.VOICE,
                                          targetId: e,
                                          pruneInvalid: t,
                                          guildAffinityNormalizationMax: n,
                                      }) || l),
                              (l = j(e, { pruneInvalid: t }) || l));
                      }
                      return l;
                  }),
                  CHANNEL_DELETE: z(function (e) {
                      let t = e.channel?.id;
                      if (null == t) return !1;
                      let n = !1;
                      return (
                          (n = k(E.x.MESSAGES, t) || n),
                          (n = k(E.x.VOICE, t) || n),
                          (n = j(t, { pruneInvalid: T }) || n)
                      );
                  }),
                  RELATIONSHIP_ADD: z(function (e) {
                      let t = e.relationship?.id;
                      if (null == t || !M(E.x.FRIENDS).has(t)) return !1;
                      let n = R();
                      return F({ tab: E.x.FRIENDS, targetId: t, pruneInvalid: T, guildAffinityNormalizationMax: n });
                  }),
                  RELATIONSHIP_REMOVE: z(function (e) {
                      let t = e.relationship?.id;
                      return null != t && k(E.x.FRIENDS, t);
                  }),
                  LOGOUT: z(function () {
                      let e = S.size() > 0 || N.size > 0;
                      return S.clear(), (N = new Map()), (T = !1), e;
                  }),
              },
    );
