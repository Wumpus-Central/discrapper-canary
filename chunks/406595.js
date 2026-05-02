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
    h = n(222823),
    g = n(994500),
    A = n(287809),
    f = n(914853),
    E = n(956753),
    I = n(652215);
let S = Number.MAX_SAFE_INTEGER,
    m = new l.J(
        (e) => [e.tab],
        (e) => e.sortKey,
    ),
    p = new Set(Object.values(f.x)),
    C = new Map(),
    _ = !1;
function N(e, t, n) {
    return e < t ? t : e > n ? n : e;
}
function T(e, t) {
    return String(e).padStart(t, "0");
}
function v(e) {
    return Number.isFinite(e) ? Math.floor(N(e, 0, S)) : Date.now();
}
function M(e) {
    return e ? "0" : "1";
}
function y(e, t) {
    return `${e}:${t}`;
}
function D(e) {
    let t = C.get(e);
    return null == t && ((t = new Map()), C.set(e, t)), t;
}
function x(e) {
    return Array.from(D(e).values());
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
function O(e) {
    return { hasMention: h.Ay.getMentionCount(e) > 0, hasUnread: h.Ay.hasUnread(e) };
}
function U(e, t) {
    let n = o.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case f.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, a.ke)(n.type)) return !1;
            return d.A.can(I.xBc.READ_MESSAGE_HISTORY, n);
        case f.x.VOICE:
            if (!(0, a.ay)(n.type)) return !1;
            return d.A.can(I.xBc.VIEW_CHANNEL, n);
        case f.x.FRIENDS:
            return !1;
        default:
            return e;
    }
}
function L(e) {
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
            ((n = N(t.addedTimestampMs, 0, S)), T(S - n, 16)),
            t.rowId,
        ].join("\0")),
        d
    );
}
function w(e) {
    let { tab: t, targetId: n, addedTimestampMs: i, guildAffinityNormalizationMax: l, pruneInvalid: s } = e;
    if (t === f.x.FRIENDS) {
        if (null == A.default.getUser(n)) return { kind: "NOT_READY_YET" };
        if (!g.A.isFriend(n)) return s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
        let e = (function (e, t, n) {
            var i;
            if (e !== f.x.FRIENDS || null == A.default.getUser(t) || !g.A.isFriend(t)) return null;
            let l = (i = c.A.getStatus(t)) === I.clD.ONLINE || i === I.clD.IDLE || i === I.clD.DND,
                s = r.A.getUserAffinity(t)?.communicationProbability ?? 0,
                a = o.A.getDMFromUserId(t),
                { hasMention: u, hasUnread: d } = null != a ? O(a) : { hasMention: !1, hasUnread: !1 };
            return L({
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
                    ? O(t)
                    : { hasMention: !1, hasUnread: !1 };
        return L({
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
        n = new Set(m.values().map((e) => e.rowId)),
        i = R(),
        l = !1;
    for (let e of p) {
        let s = D(e);
        for (let [r, a] of s.entries()) {
            let o = y(e, r),
                u = w({
                    tab: e,
                    targetId: r,
                    addedTimestampMs: a.addedTimestampMs,
                    guildAffinityNormalizationMax: i,
                    pruneInvalid: t,
                });
            switch ((n.delete(o), u.kind)) {
                case "BUILT": {
                    let e = u.row,
                        t = m.get(e.rowId);
                    (null == t || P(t, e)) && (l = m.set(e.rowId, e) || l);
                    break;
                }
                case "NOT_READY_YET":
                    l = m.delete(o) || l;
                    break;
                case "INVALID":
                    s.delete(r), (l = !0), (l = m.delete(o) || l);
                    break;
                default:
                    return u;
            }
        }
    }
    for (let e of n) l = m.delete(e) || l;
    return l;
}
function j(e, t) {
    let n = D(e).delete(t),
        i = m.delete(y(e, t));
    return n || i;
}
function b(e) {
    let { tab: t, targetId: n, pruneInvalid: i, guildAffinityNormalizationMax: l } = e,
        s = D(t),
        r = s.get(n),
        a = y(t, n);
    if (null == r) return m.delete(a);
    let o = w({
        tab: t,
        targetId: n,
        addedTimestampMs: r.addedTimestampMs,
        guildAffinityNormalizationMax: l,
        pruneInvalid: i,
    });
    switch (o.kind) {
        case "BUILT": {
            let e = o.row,
                t = m.get(e.rowId);
            return !!(null == t || P(t, e)) && m.set(e.rowId, e);
        }
        case "NOT_READY_YET":
            return m.delete(a);
        case "INVALID":
            return i && s.delete(n), m.delete(a);
        default:
            return o;
    }
}
function F(e, t) {
    let { pruneInvalid: n } = t,
        i = D(e);
    if (0 === i.size && 0 === m.values(e).length) return !1;
    let l = R(),
        s = !1,
        r = new Set();
    for (let t of i.keys())
        r.add(y(e, t)), (s = b({ tab: e, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: l }) || s);
    for (let t of m.values(e)) r.has(t.rowId) || (s = m.delete(t.rowId) || s);
    return s;
}
function V(e, t) {
    let { pruneInvalid: n } = t,
        i = D(f.x.FRIENDS);
    if (0 === i.size) return !1;
    let l = R(),
        s = !1;
    for (let t of i.keys())
        o.A.getDMFromUserId(t) === e &&
            (s = b({ tab: f.x.FRIENDS, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: l }) || s);
    return s;
}
function k(e) {
    let t = _,
        n = R(),
        i = !1;
    return (
        D(f.x.MESSAGES).has(e) &&
            (i = b({ tab: f.x.MESSAGES, targetId: e, pruneInvalid: t, guildAffinityNormalizationMax: n }) || i),
        (i = V(e, { pruneInvalid: t }) || i)
    );
}
function H() {
    return (_ = !0), G({ pruneInvalid: !0 });
}
class B extends i.Ay.PersistedStore {
    static displayName = "OverlayFriendsWidgetFavoritesStore";
    static persistKey = "OverlayFriendsWidgetFavoritesStore";
    initialize(e) {
        this.waitFor(o.A, u.A, d.A, c.A, h.Ay, g.A, r.A, A.default),
            (function (e) {
                (C = new Map()), m.clear();
                for (let t of p)
                    (function (e, t) {
                        let n = (function (e, t) {
                                if (null == e) return [];
                                switch (t) {
                                    case f.x.FRIENDS:
                                        return e.friendsFavoriteTargetIds ?? [];
                                    case f.x.MESSAGES:
                                        return e.messagesFavoriteTargetIds ?? [];
                                    case f.x.VOICE:
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
            friendsFavoriteTargetIds: x(f.x.FRIENDS),
            messagesFavoriteTargetIds: x(f.x.MESSAGES),
            voiceFavoriteTargetIds: x(f.x.VOICE),
        };
    }
    getFavoriteTargetIdsForTab(e) {
        return [m.values(e).map((e) => e.targetId), m.version];
    }
    isFavorite(e, t) {
        return [D(e).has(t), m.version];
    }
}
let Y = (e) => (0, E.v$)(e, "OverlayFriendsWidgetFavoritesStore"),
    W = new B(
        s.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: Y(function (e) {
                      let t = y(e.tab, e.targetId);
                      if (!e.isFavorite) {
                          let n = D(e.tab).delete(e.targetId),
                              i = m.delete(t);
                          return n || i;
                      }
                      let n = v(e.addedTimestampMs ?? D(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                          i = D(e.tab);
                      i.set(e.targetId, { targetId: e.targetId, addedTimestampMs: n });
                      let l = R(),
                          s = w({
                              tab: e.tab,
                              targetId: e.targetId,
                              addedTimestampMs: n,
                              guildAffinityNormalizationMax: l,
                              pruneInvalid: _,
                          });
                      switch (s.kind) {
                          case "BUILT": {
                              let e = s.row,
                                  t = m.get(e.rowId);
                              (null == t || P(t, e)) && m.set(e.rowId, e);
                              break;
                          }
                          case "NOT_READY_YET":
                              m.delete(t);
                              break;
                          case "INVALID":
                              i.delete(e.targetId), m.delete(t);
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
                      let t = D(f.x.FRIENDS);
                      if (0 === t.size) return !1;
                      let n = R(),
                          i = !1;
                      for (let l of e.updates) {
                          let e = l.user?.id;
                          null != e &&
                              t.has(e) &&
                              (i =
                                  b({
                                      tab: f.x.FRIENDS,
                                      targetId: e,
                                      pruneInvalid: _,
                                      guildAffinityNormalizationMax: n,
                                  }) || i);
                      }
                      return i;
                  }),
                  PRESENCES_REPLACE: Y(function (e) {
                      let t = D(f.x.FRIENDS);
                      if (0 === t.size) return !1;
                      let n = R(),
                          i = !1;
                      for (let l of e.presences) {
                          let e = l.user?.id;
                          null != e &&
                              t.has(e) &&
                              (i =
                                  b({
                                      tab: f.x.FRIENDS,
                                      targetId: e,
                                      pruneInvalid: _,
                                      guildAffinityNormalizationMax: n,
                                  }) || i);
                      }
                      return i;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: Y(function () {
                      return F(f.x.FRIENDS, { pruneInvalid: _ });
                  }),
                  LOAD_GUILD_AFFINITIES_SUCCESS: Y(function () {
                      let e = _;
                      return F(f.x.MESSAGES, { pruneInvalid: e }) || F(f.x.VOICE, { pruneInvalid: e });
                  }),
                  MESSAGE_CREATE: Y((e) => k(e.channelId)),
                  MESSAGE_ACK: Y((e) => k(e.channelId)),
                  CHANNEL_ACK: Y((e) => k(e.channelId)),
                  CHANNEL_UPDATES: Y(function (e) {
                      let t = _,
                          n = R(),
                          i = !1,
                          l = D(f.x.MESSAGES),
                          s = D(f.x.VOICE);
                      for (let r of e.channels) {
                          let e = r?.id;
                          null != e &&
                              (l.has(e) &&
                                  (i =
                                      b({
                                          tab: f.x.MESSAGES,
                                          targetId: e,
                                          pruneInvalid: t,
                                          guildAffinityNormalizationMax: n,
                                      }) || i),
                              s.has(e) &&
                                  (i =
                                      b({
                                          tab: f.x.VOICE,
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
                          (n = j(f.x.MESSAGES, t) || n),
                          (n = j(f.x.VOICE, t) || n),
                          (n = V(t, { pruneInvalid: _ }) || n)
                      );
                  }),
                  RELATIONSHIP_ADD: Y(function (e) {
                      let t = e.relationship?.id;
                      if (null == t || !D(f.x.FRIENDS).has(t)) return !1;
                      let n = R();
                      return b({ tab: f.x.FRIENDS, targetId: t, pruneInvalid: _, guildAffinityNormalizationMax: n });
                  }),
                  RELATIONSHIP_REMOVE: Y(function (e) {
                      let t = e.relationship?.id;
                      return null != t && j(f.x.FRIENDS, t);
                  }),
                  LOGOUT: Y(function () {
                      let e = m.size() > 0 || C.size > 0;
                      return m.clear(), (C = new Map()), (_ = !1), e;
                  }),
              },
    );
