n.d(t, { A: () => J });
var i = n(17928),
    l = n(713402),
    s = n(228366),
    r = n(427358),
    a = n(95701),
    u = n(734057),
    o = n(776096),
    d = n(576705),
    c = n(290863),
    h = n(222823),
    A = n(994500),
    f = n(287809),
    g = n(914853),
    E = n(956753),
    I = n(652215);
let S = Number.MAX_SAFE_INTEGER,
    _ = new l.J(
        (e) => [e.tab],
        (e) => e.sortKey,
    ),
    T = new Set(Object.values(g.x)),
    C = new Map(),
    m = !1;
function p(e, t, n) {
    return e < t ? t : e > n ? n : e;
}
function N(e, t) {
    return String(e).padStart(t, "0");
}
function M(e) {
    return Number.isFinite(e) ? Math.floor(p(e, 0, S)) : Date.now();
}
function D(e) {
    return e ? "0" : "1";
}
function v(e, t) {
    return `${e}:${t}`;
}
function y(e) {
    let t = C.get(e);
    return null == t && ((t = new Map()), C.set(e, t)), t;
}
function U(e) {
    return Array.from(y(e).values());
}
function O() {
    let e = o.A.affinities,
        t = 0;
    for (let n = 0; n < e.length; n += 1) {
        let i = e[n].score ?? 0;
        i > t && (t = i);
    }
    return t > 0 ? t : 1;
}
function L(e) {
    return { hasMention: h.Ay.getMentionCount(e) > 0, hasUnread: h.Ay.hasUnread(e) };
}
function R(e, t) {
    let n = u.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case g.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, a.ke)(n.type)) return !1;
            return d.A.can(I.xBc.READ_MESSAGE_HISTORY, n);
        case g.x.VOICE:
            if (!(0, a.ay)(n.type)) return !1;
            return d.A.can(I.xBc.VIEW_CHANNEL, n);
        case g.x.FRIENDS:
            return !1;
        default:
            return e;
    }
}
function w(e) {
    var t;
    let n,
        { tab: i, targetId: l, isOnline: s, affinityScore: r, hasMention: a, hasUnread: u, addedTimestampMs: o } = e,
        d = {
            rowId: v(i, l),
            tab: i,
            targetId: l,
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
            D(t.isOnline),
            N(Math.round((1 - p(t.affinityScore, 0, 1)) * 1e6), 7),
            D(t.hasMention),
            D(t.hasUnread),
            ((n = p(t.addedTimestampMs, 0, S)), N(S - n, 16)),
            t.rowId,
        ].join("\0")),
        d
    );
}
function P(e) {
    let { tab: t, targetId: n, addedTimestampMs: i, guildAffinityNormalizationMax: l, pruneInvalid: s } = e;
    if (t === g.x.FRIENDS) {
        if (null == f.default.getUser(n)) return { kind: "NOT_READY_YET" };
        if (!A.A.isFriend(n)) return s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
        let e = (function (e, t, n) {
            var i;
            if (e !== g.x.FRIENDS || null == f.default.getUser(t) || !A.A.isFriend(t)) return null;
            let l = (i = c.A.getStatus(t)) === I.clD.ONLINE || i === I.clD.IDLE || i === I.clD.DND,
                s = r.A.getUserAffinity(t)?.communicationProbability ?? 0,
                a = u.A.getDMFromUserId(t),
                { hasMention: o, hasUnread: d } = null != a ? L(a) : { hasMention: !1, hasUnread: !1 };
            return w({
                tab: e,
                targetId: t,
                isOnline: l,
                affinityScore: s,
                hasMention: o,
                hasUnread: d,
                addedTimestampMs: n,
            });
        })(t, n, i);
        return null == e ? (s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: e };
    }
    if (null == u.A.getChannel(n)) return { kind: "NOT_READY_YET" };
    if (!R(t, n)) return s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
    let d = (function (e, t, n, i) {
        if (!R(e, t)) return null;
        let l = u.A.getChannel(t);
        if (null == l) return null;
        let s = l.getGuildId() ?? null,
            r = p((null != s ? (o.A.getGuildAffinity(s)?.score ?? 0) : 0) / i, 0, 1),
            { hasMention: d, hasUnread: c } =
                (0, a.ke)(l.type) || l.isDM() || l.isMultiUserDM() || l.isPrivate()
                    ? L(t)
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
function G(e, t) {
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
function x(e) {
    let { pruneInvalid: t } = e,
        n = new Set(_.values().map((e) => e.rowId)),
        i = O(),
        l = !1;
    for (let e of T) {
        let s = y(e);
        for (let [r, a] of s.entries()) {
            let u = v(e, r),
                o = P({
                    tab: e,
                    targetId: r,
                    addedTimestampMs: a.addedTimestampMs,
                    guildAffinityNormalizationMax: i,
                    pruneInvalid: t,
                });
            switch ((n.delete(u), o.kind)) {
                case "BUILT": {
                    let e = o.row,
                        t = _.get(e.rowId);
                    (null == t || G(t, e)) && (l = _.set(e.rowId, e) || l);
                    break;
                }
                case "NOT_READY_YET":
                    l = _.delete(u) || l;
                    break;
                case "INVALID":
                    s.delete(r), (l = !0), (l = _.delete(u) || l);
                    break;
                default:
                    return o;
            }
        }
    }
    for (let e of n) l = _.delete(e) || l;
    return l;
}
function F(e, t) {
    let n = y(e).delete(t),
        i = _.delete(v(e, t));
    return n || i;
}
function V(e) {
    let { tab: t, targetId: n, pruneInvalid: i, guildAffinityNormalizationMax: l } = e,
        s = y(t),
        r = s.get(n),
        a = v(t, n);
    if (null == r) return _.delete(a);
    let u = P({
        tab: t,
        targetId: n,
        addedTimestampMs: r.addedTimestampMs,
        guildAffinityNormalizationMax: l,
        pruneInvalid: i,
    });
    switch (u.kind) {
        case "BUILT": {
            let e = u.row,
                t = _.get(e.rowId);
            return !!(null == t || G(t, e)) && _.set(e.rowId, e);
        }
        case "NOT_READY_YET":
            return _.delete(a);
        case "INVALID":
            return i && s.delete(n), _.delete(a);
        default:
            return u;
    }
}
function b(e, t) {
    let { pruneInvalid: n } = t,
        i = y(e);
    if (0 === i.size && 0 === _.values(e).length) return !1;
    let l = O(),
        s = !1,
        r = new Set();
    for (let t of i.keys())
        r.add(v(e, t)), (s = V({ tab: e, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: l }) || s);
    for (let t of _.values(e)) r.has(t.rowId) || (s = _.delete(t.rowId) || s);
    return s;
}
function H(e, t) {
    let { pruneInvalid: n } = t,
        i = y(g.x.FRIENDS);
    if (0 === i.size) return !1;
    let l = O(),
        s = !1;
    for (let t of i.keys())
        u.A.getDMFromUserId(t) === e &&
            (s = V({ tab: g.x.FRIENDS, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: l }) || s);
    return s;
}
function k(e) {
    let t = m,
        n = O(),
        i = !1;
    return (
        y(g.x.MESSAGES).has(e) &&
            (i = V({ tab: g.x.MESSAGES, targetId: e, pruneInvalid: t, guildAffinityNormalizationMax: n }) || i),
        (i = H(e, { pruneInvalid: t }) || i)
    );
}
function Y() {
    return (m = !0), x({ pruneInvalid: !0 });
}
class j extends i.Ay.PersistedStore {
    static displayName = "OverlayFriendsWidgetFavoritesStore";
    static persistKey = "OverlayFriendsWidgetFavoritesStore";
    initialize(e) {
        this.waitFor(u.A, o.A, d.A, c.A, h.Ay, A.A, r.A, f.default),
            (function (e) {
                (C = new Map()), _.clear();
                for (let t of T)
                    (function (e, t) {
                        let n = (function (e, t) {
                                if (null == e) return [];
                                switch (t) {
                                    case g.x.FRIENDS:
                                        return e.friendsFavoriteTargetIds ?? [];
                                    case g.x.MESSAGES:
                                        return e.messagesFavoriteTargetIds ?? [];
                                    case g.x.VOICE:
                                        return e.voiceFavoriteTargetIds ?? [];
                                    default:
                                        return t;
                                }
                            })(e, t),
                            i = y(t),
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
            x({ pruneInvalid: !1 });
    }
    getState() {
        return {
            friendsFavoriteTargetIds: U(g.x.FRIENDS),
            messagesFavoriteTargetIds: U(g.x.MESSAGES),
            voiceFavoriteTargetIds: U(g.x.VOICE),
        };
    }
    getFavoriteTargetIdsForTab(e) {
        return [_.values(e).map((e) => e.targetId), _.version];
    }
    isFavorite(e, t) {
        return [y(e).has(t), _.version];
    }
}
let W = (e) => (0, E.v$)(e, "OverlayFriendsWidgetFavoritesStore"),
    J = new j(
        s.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: W(function (e) {
                      let t = v(e.tab, e.targetId);
                      if (!e.isFavorite) {
                          let n = y(e.tab).delete(e.targetId),
                              i = _.delete(t);
                          return n || i;
                      }
                      let n = M(e.addedTimestampMs ?? y(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                          i = y(e.tab);
                      i.set(e.targetId, { targetId: e.targetId, addedTimestampMs: n });
                      let l = O(),
                          s = P({
                              tab: e.tab,
                              targetId: e.targetId,
                              addedTimestampMs: n,
                              guildAffinityNormalizationMax: l,
                              pruneInvalid: m,
                          });
                      switch (s.kind) {
                          case "BUILT": {
                              let e = s.row,
                                  t = _.get(e.rowId);
                              (null == t || G(t, e)) && _.set(e.rowId, e);
                              break;
                          }
                          case "NOT_READY_YET":
                              _.delete(t);
                              break;
                          case "INVALID":
                              i.delete(e.targetId), _.delete(t);
                              break;
                          default:
                              return s;
                      }
                      return !0;
                  }),
                  POST_CONNECTION_OPEN: W(Y),
                  OVERLAY_INITIALIZE: W(Y),
                  CACHE_LOADED: W(Y),
                  CACHE_LOADED_LAZY: W(Y),
                  FRIENDS_LIST_POPOUT_MOUNTED: W(Y),
                  PRESENCE_UPDATES: W(function (e) {
                      let t = y(g.x.FRIENDS);
                      if (0 === t.size) return !1;
                      let n = O(),
                          i = !1;
                      for (let l of e.updates) {
                          let e = l.user?.id;
                          null != e &&
                              t.has(e) &&
                              (i =
                                  V({
                                      tab: g.x.FRIENDS,
                                      targetId: e,
                                      pruneInvalid: m,
                                      guildAffinityNormalizationMax: n,
                                  }) || i);
                      }
                      return i;
                  }),
                  PRESENCES_REPLACE: W(function (e) {
                      let t = y(g.x.FRIENDS);
                      if (0 === t.size) return !1;
                      let n = O(),
                          i = !1;
                      for (let l of e.presences) {
                          let e = l.user?.id;
                          null != e &&
                              t.has(e) &&
                              (i =
                                  V({
                                      tab: g.x.FRIENDS,
                                      targetId: e,
                                      pruneInvalid: m,
                                      guildAffinityNormalizationMax: n,
                                  }) || i);
                      }
                      return i;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: W(function () {
                      return b(g.x.FRIENDS, { pruneInvalid: m });
                  }),
                  LOAD_GUILD_AFFINITIES_SUCCESS: W(function () {
                      let e = m;
                      return b(g.x.MESSAGES, { pruneInvalid: e }) || b(g.x.VOICE, { pruneInvalid: e });
                  }),
                  MESSAGE_CREATE: W((e) => k(e.channelId)),
                  MESSAGE_ACK: W((e) => k(e.channelId)),
                  CHANNEL_ACK: W((e) => k(e.channelId)),
                  CHANNEL_UPDATES: W(function (e) {
                      let t = m,
                          n = O(),
                          i = !1,
                          l = y(g.x.MESSAGES),
                          s = y(g.x.VOICE);
                      for (let r of e.channels) {
                          let e = r?.id;
                          null != e &&
                              (l.has(e) &&
                                  (i =
                                      V({
                                          tab: g.x.MESSAGES,
                                          targetId: e,
                                          pruneInvalid: t,
                                          guildAffinityNormalizationMax: n,
                                      }) || i),
                              s.has(e) &&
                                  (i =
                                      V({
                                          tab: g.x.VOICE,
                                          targetId: e,
                                          pruneInvalid: t,
                                          guildAffinityNormalizationMax: n,
                                      }) || i),
                              (i = H(e, { pruneInvalid: t }) || i));
                      }
                      return i;
                  }),
                  CHANNEL_DELETE: W(function (e) {
                      let t = e.channel?.id;
                      if (null == t) return !1;
                      let n = !1;
                      return (
                          (n = F(g.x.MESSAGES, t) || n),
                          (n = F(g.x.VOICE, t) || n),
                          (n = H(t, { pruneInvalid: m }) || n)
                      );
                  }),
                  RELATIONSHIP_ADD: W(function (e) {
                      let t = e.relationship?.id;
                      if (null == t || !y(g.x.FRIENDS).has(t)) return !1;
                      let n = O();
                      return V({ tab: g.x.FRIENDS, targetId: t, pruneInvalid: m, guildAffinityNormalizationMax: n });
                  }),
                  RELATIONSHIP_REMOVE: W(function (e) {
                      let t = e.relationship?.id;
                      return null != t && F(g.x.FRIENDS, t);
                  }),
                  LOGOUT: W(function () {
                      let e = _.size() > 0 || C.size > 0;
                      return _.clear(), (C = new Map()), (m = !1), e;
                  }),
              },
    );
