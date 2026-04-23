n.d(t, { A: () => z });
var i = n(311907),
    r = n(713402),
    s = n(73153),
    l = n(21119),
    a = n(95701),
    u = n(734057),
    o = n(197305),
    d = n(576705),
    c = n(290863),
    h = n(222823),
    I = n(994500),
    g = n(287809),
    f = n(914853),
    A = n(956753),
    E = n(652215);
let S = Number.MAX_SAFE_INTEGER,
    _ = new r.J(
        (e) => [e.tab],
        (e) => e.sortKey,
    ),
    M = new Set(Object.values(f.x)),
    p = new Map(),
    N = !1;
function T(e, t, n) {
    return e < t ? t : e > n ? n : e;
}
function m(e, t) {
    return String(e).padStart(t, "0");
}
function C(e) {
    return Number.isFinite(e) ? Math.floor(T(e, 0, S)) : Date.now();
}
function y(e) {
    return e ? "0" : "1";
}
function D(e, t) {
    return `${e}:${t}`;
}
function U(e) {
    let t = p.get(e);
    return null == t && ((t = new Map()), p.set(e, t)), t;
}
function O(e) {
    return Array.from(U(e).values());
}
function v() {
    let e = o.A.affinities,
        t = 0;
    for (let n = 0; n < e.length; n += 1) {
        let i = e[n].score ?? 0;
        i > t && (t = i);
    }
    return t > 0 ? t : 1;
}
function G(e) {
    return { hasMention: h.Ay.getMentionCount(e) > 0, hasUnread: h.Ay.hasUnread(e) };
}
function R(e, t) {
    let n = u.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case f.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, a.ke)(n.type)) return !1;
            return d.A.can(E.xBc.READ_MESSAGE_HISTORY, n);
        case f.x.VOICE:
            if (!(0, a.ay)(n.type)) return !1;
            return d.A.can(E.xBc.VIEW_CHANNEL, n);
        case f.x.FRIENDS:
            return !1;
        default:
            return e;
    }
}
function w(e) {
    var t;
    let n,
        { tab: i, targetId: r, isOnline: s, affinityScore: l, hasMention: a, hasUnread: u, addedTimestampMs: o } = e,
        d = {
            rowId: D(i, r),
            tab: i,
            targetId: r,
            isOnline: s,
            affinityScore: l,
            hasMention: a,
            hasUnread: u,
            addedTimestampMs: o,
            sortKey: "",
        };
    return (
        (d.sortKey = [
            (t = d).tab,
            y(t.isOnline),
            m(Math.round((1 - T(t.affinityScore, 0, 1)) * 1e6), 7),
            y(t.hasMention),
            y(t.hasUnread),
            ((n = T(t.addedTimestampMs, 0, S)), m(S - n, 16)),
            t.rowId,
        ].join("\0")),
        d
    );
}
function L(e) {
    let { tab: t, targetId: n, addedTimestampMs: i, guildAffinityNormalizationMax: r, pruneInvalid: s } = e;
    if (t === f.x.FRIENDS) {
        if (null == g.default.getUser(n)) return { kind: "NOT_READY_YET" };
        if (!I.A.isFriend(n)) return s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
        let e = (function (e, t, n) {
            var i;
            if (e !== f.x.FRIENDS || null == g.default.getUser(t) || !I.A.isFriend(t)) return null;
            let r = (i = c.A.getStatus(t)) === E.clD.ONLINE || i === E.clD.IDLE || i === E.clD.DND,
                s = l.A.getUserAffinity(t)?.communicationProbability ?? 0,
                a = u.A.getDMFromUserId(t),
                { hasMention: o, hasUnread: d } = null != a ? G(a) : { hasMention: !1, hasUnread: !1 };
            return w({
                tab: e,
                targetId: t,
                isOnline: r,
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
        let r = u.A.getChannel(t);
        if (null == r) return null;
        let s = r.getGuildId() ?? null,
            l = T((null != s ? (o.A.getGuildAffinity(s)?.score ?? 0) : 0) / i, 0, 1),
            { hasMention: d, hasUnread: c } =
                (0, a.ke)(r.type) || r.isDM() || r.isMultiUserDM() || r.isPrivate()
                    ? G(t)
                    : { hasMention: !1, hasUnread: !1 };
        return w({
            tab: e,
            targetId: t,
            isOnline: !1,
            affinityScore: l,
            hasMention: d,
            hasUnread: c,
            addedTimestampMs: n,
        });
    })(t, n, i, r);
    return null == d ? (s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" }) : { kind: "BUILT", row: d };
}
function F(e, t) {
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
function P(e) {
    let { pruneInvalid: t } = e,
        n = new Set(_.values().map((e) => e.rowId)),
        i = v(),
        r = !1;
    for (let e of M) {
        let s = U(e);
        for (let [l, a] of s.entries()) {
            let u = D(e, l),
                o = L({
                    tab: e,
                    targetId: l,
                    addedTimestampMs: a.addedTimestampMs,
                    guildAffinityNormalizationMax: i,
                    pruneInvalid: t,
                });
            switch ((n.delete(u), o.kind)) {
                case "BUILT": {
                    let e = o.row,
                        t = _.get(e.rowId);
                    (null == t || F(t, e)) && (r = _.set(e.rowId, e) || r);
                    break;
                }
                case "NOT_READY_YET":
                    r = _.delete(u) || r;
                    break;
                case "INVALID":
                    s.delete(l), (r = !0), (r = _.delete(u) || r);
                    break;
                default:
                    return o;
            }
        }
    }
    for (let e of n) r = _.delete(e) || r;
    return r;
}
function V(e, t) {
    let n = U(e).delete(t),
        i = _.delete(D(e, t));
    return n || i;
}
function x(e) {
    let { tab: t, targetId: n, pruneInvalid: i, guildAffinityNormalizationMax: r } = e,
        s = U(t),
        l = s.get(n),
        a = D(t, n);
    if (null == l) return _.delete(a);
    let u = L({
        tab: t,
        targetId: n,
        addedTimestampMs: l.addedTimestampMs,
        guildAffinityNormalizationMax: r,
        pruneInvalid: i,
    });
    switch (u.kind) {
        case "BUILT": {
            let e = u.row,
                t = _.get(e.rowId);
            return !!(null == t || F(t, e)) && _.set(e.rowId, e);
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
        i = U(e);
    if (0 === i.size && 0 === _.values(e).length) return !1;
    let r = v(),
        s = !1,
        l = new Set();
    for (let t of i.keys())
        l.add(D(e, t)), (s = x({ tab: e, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: r }) || s);
    for (let t of _.values(e)) l.has(t.rowId) || (s = _.delete(t.rowId) || s);
    return s;
}
function k(e, t) {
    let { pruneInvalid: n } = t,
        i = U(f.x.FRIENDS);
    if (0 === i.size) return !1;
    let r = v(),
        s = !1;
    for (let t of i.keys())
        u.A.getDMFromUserId(t) === e &&
            (s = x({ tab: f.x.FRIENDS, targetId: t, pruneInvalid: n, guildAffinityNormalizationMax: r }) || s);
    return s;
}
function Y(e) {
    let t = N,
        n = v(),
        i = !1;
    return (
        U(f.x.MESSAGES).has(e) &&
            (i = x({ tab: f.x.MESSAGES, targetId: e, pruneInvalid: t, guildAffinityNormalizationMax: n }) || i),
        (i = k(e, { pruneInvalid: t }) || i)
    );
}
function H() {
    return (N = !0), P({ pruneInvalid: !0 });
}
class W extends i.Ay.PersistedStore {
    static displayName = "OverlayFriendsWidgetFavoritesStore";
    static persistKey = "OverlayFriendsWidgetFavoritesStore";
    initialize(e) {
        this.waitFor(u.A, o.A, d.A, c.A, h.Ay, I.A, l.A, g.default),
            (function (e) {
                (p = new Map()), _.clear();
                for (let t of M)
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
                            i = U(t),
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
            P({ pruneInvalid: !1 });
    }
    getState() {
        return {
            friendsFavoriteTargetIds: O(f.x.FRIENDS),
            messagesFavoriteTargetIds: O(f.x.MESSAGES),
            voiceFavoriteTargetIds: O(f.x.VOICE),
        };
    }
    getFavoriteTargetIdsForTab(e) {
        return [_.values(e).map((e) => e.targetId), _.version];
    }
    isFavorite(e, t) {
        return [U(e).has(t), _.version];
    }
}
let $ = (e) => (0, A.v$)(e, "OverlayFriendsWidgetFavoritesStore"),
    z = new W(
        s.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: $(function (e) {
                      let t = D(e.tab, e.targetId);
                      if (!e.isFavorite) {
                          let n = U(e.tab).delete(e.targetId),
                              i = _.delete(t);
                          return n || i;
                      }
                      let n = C(e.addedTimestampMs ?? U(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                          i = U(e.tab);
                      i.set(e.targetId, { targetId: e.targetId, addedTimestampMs: n });
                      let r = v(),
                          s = L({
                              tab: e.tab,
                              targetId: e.targetId,
                              addedTimestampMs: n,
                              guildAffinityNormalizationMax: r,
                              pruneInvalid: N,
                          });
                      switch (s.kind) {
                          case "BUILT": {
                              let e = s.row,
                                  t = _.get(e.rowId);
                              (null == t || F(t, e)) && _.set(e.rowId, e);
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
                  POST_CONNECTION_OPEN: $(H),
                  OVERLAY_INITIALIZE: $(H),
                  CACHE_LOADED: $(H),
                  CACHE_LOADED_LAZY: $(H),
                  FRIENDS_LIST_POPOUT_MOUNTED: $(H),
                  PRESENCE_UPDATES: $(function (e) {
                      let t = U(f.x.FRIENDS);
                      if (0 === t.size) return !1;
                      let n = v(),
                          i = !1;
                      for (let r of e.updates) {
                          let e = r.user?.id;
                          null != e &&
                              t.has(e) &&
                              (i =
                                  x({
                                      tab: f.x.FRIENDS,
                                      targetId: e,
                                      pruneInvalid: N,
                                      guildAffinityNormalizationMax: n,
                                  }) || i);
                      }
                      return i;
                  }),
                  PRESENCES_REPLACE: $(function (e) {
                      let t = U(f.x.FRIENDS);
                      if (0 === t.size) return !1;
                      let n = v(),
                          i = !1;
                      for (let r of e.presences) {
                          let e = r.user?.id;
                          null != e &&
                              t.has(e) &&
                              (i =
                                  x({
                                      tab: f.x.FRIENDS,
                                      targetId: e,
                                      pruneInvalid: N,
                                      guildAffinityNormalizationMax: n,
                                  }) || i);
                      }
                      return i;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: $(function () {
                      return b(f.x.FRIENDS, { pruneInvalid: N });
                  }),
                  LOAD_GUILD_AFFINITIES_SUCCESS: $(function () {
                      let e = N;
                      return b(f.x.MESSAGES, { pruneInvalid: e }) || b(f.x.VOICE, { pruneInvalid: e });
                  }),
                  MESSAGE_CREATE: $((e) => Y(e.channelId)),
                  MESSAGE_ACK: $((e) => Y(e.channelId)),
                  CHANNEL_ACK: $((e) => Y(e.channelId)),
                  CHANNEL_UPDATES: $(function (e) {
                      let t = N,
                          n = v(),
                          i = !1,
                          r = U(f.x.MESSAGES),
                          s = U(f.x.VOICE);
                      for (let l of e.channels) {
                          let e = l?.id;
                          null != e &&
                              (r.has(e) &&
                                  (i =
                                      x({
                                          tab: f.x.MESSAGES,
                                          targetId: e,
                                          pruneInvalid: t,
                                          guildAffinityNormalizationMax: n,
                                      }) || i),
                              s.has(e) &&
                                  (i =
                                      x({
                                          tab: f.x.VOICE,
                                          targetId: e,
                                          pruneInvalid: t,
                                          guildAffinityNormalizationMax: n,
                                      }) || i),
                              (i = k(e, { pruneInvalid: t }) || i));
                      }
                      return i;
                  }),
                  CHANNEL_DELETE: $(function (e) {
                      let t = e.channel?.id;
                      if (null == t) return !1;
                      let n = !1;
                      return (
                          (n = V(f.x.MESSAGES, t) || n),
                          (n = V(f.x.VOICE, t) || n),
                          (n = k(t, { pruneInvalid: N }) || n)
                      );
                  }),
                  RELATIONSHIP_ADD: $(function (e) {
                      let t = e.relationship?.id;
                      if (null == t || !U(f.x.FRIENDS).has(t)) return !1;
                      let n = v();
                      return x({ tab: f.x.FRIENDS, targetId: t, pruneInvalid: N, guildAffinityNormalizationMax: n });
                  }),
                  RELATIONSHIP_REMOVE: $(function (e) {
                      let t = e.relationship?.id;
                      return null != t && V(f.x.FRIENDS, t);
                  }),
                  LOGOUT: $(function () {
                      let e = _.size() > 0 || p.size > 0;
                      return _.clear(), (p = new Map()), (N = !1), e;
                  }),
              },
    );
