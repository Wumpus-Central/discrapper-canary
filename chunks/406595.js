n.d(t, {
    A: () => J,
}),
    n(896048);
var r,
    i = n(311907),
    l = n(713402),
    s = n(73153),
    a = n(21119),
    u = n(95701),
    o = n(734057),
    d = n(197305),
    c = n(576705),
    h = n(290863),
    f = n(222823),
    g = n(994500),
    I = n(287809),
    A = n(914853),
    S = n(956753),
    E = n(672396),
    p = n(652215);

function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let v = Number.MAX_SAFE_INTEGER,
    _ = new l.J(
        (e) => [e.tab],
        (e) => e.sortKey,
    ),
    O = new Set(Object.values(A.x)),
    m = new Map(),
    M = !1;

function T(e, t, n) {
    return e < t ? t : e > n ? n : e;
}

function N(e, t) {
    return String(e).padStart(t, "0");
}

function C(e) {
    return Number.isFinite(e) ? Math.floor(T(e, 0, v)) : Date.now();
}

function D(e) {
    return e ? "0" : "1";
}

function w(e, t) {
    return "".concat(e, ":").concat(t);
}

function U(e) {
    let t = m.get(e);
    return null == t && ((t = new Map()), m.set(e, t)), t;
}

function b(e) {
    return Array.from(U(e).values());
}

function G() {
    let e = d.A.affinities,
        t = 0;
    for (let r = 0; r < e.length; r += 1) {
        var n;
        let i = null != (n = e[r].score) ? n : 0;
        i > t && (t = i);
    }
    return t > 0 ? t : 1;
}

function P(e) {
    return {
        hasMention: f.Ay.getMentionCount(e) > 0,
        hasUnread: f.Ay.hasUnread(e),
    };
}

function R(e, t) {
    let n = o.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case A.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, u.ke)(n.type)) return !1;
            return c.A.can(p.xBc.READ_MESSAGE_HISTORY, n);
        case A.x.VOICE:
            if (!(0, u.ay)(n.type)) return !1;
            return c.A.can(p.xBc.VIEW_CHANNEL, n);
        case A.x.FRIENDS:
            return !1;
        default:
            return e;
    }
}

function L(e) {
    var t;
    let n,
        { tab: r, targetId: i, isOnline: l, affinityScore: s, hasMention: a, hasUnread: u, addedTimestampMs: o } = e,
        d = {
            rowId: w(r, i),
            tab: r,
            targetId: i,
            isOnline: l,
            affinityScore: s,
            hasMention: a,
            hasUnread: u,
            addedTimestampMs: o,
            sortKey: "",
        };
    return (
        (d.sortKey = [
            (t = d).tab,
            D(t.isOnline),
            N(Math.round((1 - T(t.affinityScore, 0, 1)) * 1e6), 7),
            D(t.hasMention),
            D(t.hasUnread),
            ((n = T(t.addedTimestampMs, 0, v)), N(v - n, 16)),
            t.rowId,
        ].join("\0")),
        d
    );
}

function F(e) {
    let { tab: t, targetId: n, addedTimestampMs: r, guildAffinityNormalizationMax: i, pruneInvalid: l } = e;
    if (t === A.x.FRIENDS) {
        if (null == I.default.getUser(n))
            return {
                kind: "NOT_READY_YET",
            };
        if (!g.A.isFriend(n))
            return l
                ? {
                      kind: "INVALID",
                  }
                : {
                      kind: "NOT_READY_YET",
                  };
        let e = (function (e, t, n) {
            var r, i, l;
            if (e !== A.x.FRIENDS || null == I.default.getUser(t) || !g.A.isFriend(t)) return null;
            let s = (l = h.A.getStatus(t)) === p.clD.ONLINE || l === p.clD.IDLE || l === p.clD.DND,
                u = null != (r = null == (i = a.A.getUserAffinity(t)) ? void 0 : i.communicationProbability) ? r : 0,
                d = o.A.getDMFromUserId(t),
                { hasMention: c, hasUnread: f } =
                    null != d
                        ? P(d)
                        : {
                              hasMention: !1,
                              hasUnread: !1,
                          };
            return L({
                tab: e,
                targetId: t,
                isOnline: s,
                affinityScore: u,
                hasMention: c,
                hasUnread: f,
                addedTimestampMs: n,
            });
        })(t, n, r);
        return null == e
            ? l
                ? {
                      kind: "INVALID",
                  }
                : {
                      kind: "NOT_READY_YET",
                  }
            : {
                  kind: "BUILT",
                  row: e,
              };
    }
    if (null == o.A.getChannel(n))
        return {
            kind: "NOT_READY_YET",
        };
    if (!R(t, n))
        return l
            ? {
                  kind: "INVALID",
              }
            : {
                  kind: "NOT_READY_YET",
              };
    let s = (function (e, t, n, r) {
        var i, l, s;
        if (!R(e, t)) return null;
        let a = o.A.getChannel(t);
        if (null == a) return null;
        let c = null != (i = a.getGuildId()) ? i : null,
            h = T(
                (null != c && null != (l = null == (s = d.A.getGuildAffinity(c)) ? void 0 : s.score) ? l : 0) / r,
                0,
                1,
            ),
            { hasMention: f, hasUnread: g } =
                (0, u.ke)(a.type) || a.isDM() || a.isMultiUserDM() || a.isPrivate()
                    ? P(t)
                    : {
                          hasMention: !1,
                          hasUnread: !1,
                      };
        return L({
            tab: e,
            targetId: t,
            isOnline: !1,
            affinityScore: h,
            hasMention: f,
            hasUnread: g,
            addedTimestampMs: n,
        });
    })(t, n, r, i);
    return null == s
        ? l
            ? {
                  kind: "INVALID",
              }
            : {
                  kind: "NOT_READY_YET",
              }
        : {
              kind: "BUILT",
              row: s,
          };
}

function V(e, t) {
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
        r = G(),
        i = !1;
    for (let e of O) {
        let l = U(e);
        for (let [s, a] of l.entries()) {
            let u = w(e, s),
                o = F({
                    tab: e,
                    targetId: s,
                    addedTimestampMs: a.addedTimestampMs,
                    guildAffinityNormalizationMax: r,
                    pruneInvalid: t,
                });
            switch ((n.delete(u), o.kind)) {
                case "BUILT": {
                    let e = o.row,
                        t = _.get(e.rowId);
                    (null == t || V(t, e)) && (i = _.set(e.rowId, e) || i);
                    break;
                }
                case "NOT_READY_YET":
                    i = _.delete(u) || i;
                    break;
                case "INVALID":
                    l.delete(s), (i = !0), (i = _.delete(u) || i);
                    break;
                default:
                    return o;
            }
        }
    }
    for (let e of n) i = _.delete(e) || i;
    return i;
}

function j(e, t) {
    let n = U(e).delete(t),
        r = _.delete(w(e, t));
    return n || r;
}

function k(e) {
    let { tab: t, targetId: n, pruneInvalid: r, guildAffinityNormalizationMax: i } = e,
        l = U(t),
        s = l.get(n),
        a = w(t, n);
    if (null == s) return _.delete(a);
    let u = F({
        tab: t,
        targetId: n,
        addedTimestampMs: s.addedTimestampMs,
        guildAffinityNormalizationMax: i,
        pruneInvalid: r,
    });
    switch (u.kind) {
        case "BUILT": {
            let e = u.row,
                t = _.get(e.rowId);
            return !!(null == t || V(t, e)) && _.set(e.rowId, e);
        }
        case "NOT_READY_YET":
            return _.delete(a);
        case "INVALID":
            return r && l.delete(n), _.delete(a);
        default:
            return u;
    }
}

function W(e, t) {
    let { pruneInvalid: n } = t,
        r = U(e);
    if (0 === r.size && 0 === _.values(e).length) return !1;
    let i = G(),
        l = !1,
        s = new Set();
    for (let t of r.keys())
        s.add(w(e, t)),
            (l =
                k({
                    tab: e,
                    targetId: t,
                    pruneInvalid: n,
                    guildAffinityNormalizationMax: i,
                }) || l);
    for (let t of _.values(e)) s.has(t.rowId) || (l = _.delete(t.rowId) || l);
    return l;
}

function Y(e, t) {
    let { pruneInvalid: n } = t,
        r = U(A.x.FRIENDS);
    if (0 === r.size) return !1;
    let i = G(),
        l = !1;
    for (let t of r.keys())
        o.A.getDMFromUserId(t) === e &&
            (l =
                k({
                    tab: A.x.FRIENDS,
                    targetId: t,
                    pruneInvalid: n,
                    guildAffinityNormalizationMax: i,
                }) || l);
    return l;
}

function H(e) {
    let t = M,
        n = G(),
        r = !1;
    return (
        U(A.x.MESSAGES).has(e) &&
            (r =
                k({
                    tab: A.x.MESSAGES,
                    targetId: e,
                    pruneInvalid: t,
                    guildAffinityNormalizationMax: n,
                }) || r),
        (r =
            Y(e, {
                pruneInvalid: t,
            }) || r)
    );
}

function z() {
    return (
        (M = !0),
        x({
            pruneInvalid: !0,
        })
    );
}
class B extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(o.A, d.A, c.A, h.A, f.Ay, g.A, a.A, I.default),
            (function (e) {
                (m = new Map()), _.clear();
                for (let t of O)
                    (function (e, t) {
                        let n = (function (e, t) {
                                var n, r, i;
                                if (null == e) return [];
                                switch (t) {
                                    case A.x.FRIENDS:
                                        return null != (n = e.friendsFavoriteTargetIds) ? n : [];
                                    case A.x.MESSAGES:
                                        return null != (r = e.messagesFavoriteTargetIds) ? r : [];
                                    case A.x.VOICE:
                                        return null != (i = e.voiceFavoriteTargetIds) ? i : [];
                                    default:
                                        return t;
                                }
                            })(e, t),
                            r = U(t),
                            i = 0;
                        for (let e of n) {
                            let t =
                                null == e || "string" != typeof e.targetId
                                    ? null
                                    : {
                                          targetId: e.targetId,
                                          addedTimestampMs: C(e.addedTimestampMs),
                                      };
                            null != t && (r.set(t.targetId, t), (i += 1));
                        }
                    })(e, t);
            })(e),
            x({
                pruneInvalid: !1,
            });
    }
    getState() {
        return {
            friendsFavoriteTargetIds: b(A.x.FRIENDS),
            messagesFavoriteTargetIds: b(A.x.MESSAGES),
            voiceFavoriteTargetIds: b(A.x.VOICE),
        };
    }
    getFavoriteTargetIdsForTab(e) {
        return [_.values(e).map((e) => e.targetId), _.version];
    }
    isFavorite(e, t) {
        return [U(e).has(t), _.version];
    }
}
y(B, "displayName", "OverlayFriendsWidgetFavoritesStore"), y(B, "persistKey", "OverlayFriendsWidgetFavoritesStore");
let K = (e) => (0, S.R)(e, "OverlayFriendsWidgetFavoritesStore"),
    J = new B(
        s.h,
        __OVERLAY__ || (!E.OX && !E.ed)
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: K(function (e) {
                      var t, n, r;
                      let i = w(e.tab, e.targetId);
                      if (!e.isFavorite) {
                          let t = U(e.tab).delete(e.targetId),
                              n = _.delete(i);
                          return t || n;
                      }
                      let l = C(
                              null !=
                                  (t =
                                      null != (n = e.addedTimestampMs)
                                          ? n
                                          : null == (r = U(e.tab).get(e.targetId))
                                            ? void 0
                                            : r.addedTimestampMs)
                                  ? t
                                  : Date.now(),
                          ),
                          s = U(e.tab);
                      s.set(e.targetId, {
                          targetId: e.targetId,
                          addedTimestampMs: l,
                      });
                      let a = G(),
                          u = F({
                              tab: e.tab,
                              targetId: e.targetId,
                              addedTimestampMs: l,
                              guildAffinityNormalizationMax: a,
                              pruneInvalid: M,
                          });
                      switch (u.kind) {
                          case "BUILT": {
                              let e = u.row,
                                  t = _.get(e.rowId);
                              (null == t || V(t, e)) && _.set(e.rowId, e);
                              break;
                          }
                          case "NOT_READY_YET":
                              _.delete(i);
                              break;
                          case "INVALID":
                              s.delete(e.targetId), _.delete(i);
                              break;
                          default:
                              return u;
                      }
                      return !0;
                  }),
                  POST_CONNECTION_OPEN: K(z),
                  OVERLAY_INITIALIZE: K(z),
                  CACHE_LOADED: K(z),
                  CACHE_LOADED_LAZY: K(z),
                  PRESENCE_UPDATES: K(function (e) {
                      let t = U(A.x.FRIENDS);
                      if (0 === t.size) return !1;
                      let n = G(),
                          r = !1;
                      for (let l of e.updates) {
                          var i;
                          let e = null == (i = l.user) ? void 0 : i.id;
                          null != e &&
                              t.has(e) &&
                              (r =
                                  k({
                                      tab: A.x.FRIENDS,
                                      targetId: e,
                                      pruneInvalid: M,
                                      guildAffinityNormalizationMax: n,
                                  }) || r);
                      }
                      return r;
                  }),
                  PRESENCES_REPLACE: K(function (e) {
                      let t = U(A.x.FRIENDS);
                      if (0 === t.size) return !1;
                      let n = G(),
                          r = !1;
                      for (let l of e.presences) {
                          var i;
                          let e = null == (i = l.user) ? void 0 : i.id;
                          null != e &&
                              t.has(e) &&
                              (r =
                                  k({
                                      tab: A.x.FRIENDS,
                                      targetId: e,
                                      pruneInvalid: M,
                                      guildAffinityNormalizationMax: n,
                                  }) || r);
                      }
                      return r;
                  }),
                  LOAD_USER_AFFINITIES_V2_SUCCESS: K(function () {
                      return W(A.x.FRIENDS, {
                          pruneInvalid: M,
                      });
                  }),
                  LOAD_GUILD_AFFINITIES_SUCCESS: K(function () {
                      let e = M;
                      return (
                          W(A.x.MESSAGES, {
                              pruneInvalid: e,
                          }) ||
                          W(A.x.VOICE, {
                              pruneInvalid: e,
                          })
                      );
                  }),
                  MESSAGE_CREATE: K((e) => H(e.channelId)),
                  MESSAGE_ACK: K((e) => H(e.channelId)),
                  CHANNEL_ACK: K((e) => H(e.channelId)),
                  CHANNEL_UPDATES: K(function (e) {
                      let t = M,
                          n = G(),
                          r = !1,
                          i = U(A.x.MESSAGES),
                          l = U(A.x.VOICE);
                      for (let s of e.channels) {
                          let e = null == s ? void 0 : s.id;
                          null != e &&
                              (i.has(e) &&
                                  (r =
                                      k({
                                          tab: A.x.MESSAGES,
                                          targetId: e,
                                          pruneInvalid: t,
                                          guildAffinityNormalizationMax: n,
                                      }) || r),
                              l.has(e) &&
                                  (r =
                                      k({
                                          tab: A.x.VOICE,
                                          targetId: e,
                                          pruneInvalid: t,
                                          guildAffinityNormalizationMax: n,
                                      }) || r),
                              (r =
                                  Y(e, {
                                      pruneInvalid: t,
                                  }) || r));
                      }
                      return r;
                  }),
                  CHANNEL_DELETE: K(function (e) {
                      var t;
                      let n = null == (t = e.channel) ? void 0 : t.id;
                      if (null == n) return !1;
                      let r = !1;
                      return (
                          (r = j(A.x.MESSAGES, n) || r),
                          (r = j(A.x.VOICE, n) || r),
                          (r =
                              Y(n, {
                                  pruneInvalid: M,
                              }) || r)
                      );
                  }),
                  RELATIONSHIP_ADD: K(function (e) {
                      var t;
                      let n = null == (t = e.relationship) ? void 0 : t.id;
                      if (null == n || !U(A.x.FRIENDS).has(n)) return !1;
                      let r = G();
                      return k({
                          tab: A.x.FRIENDS,
                          targetId: n,
                          pruneInvalid: M,
                          guildAffinityNormalizationMax: r,
                      });
                  }),
                  RELATIONSHIP_REMOVE: K(function (e) {
                      var t;
                      let n = null == (t = e.relationship) ? void 0 : t.id;
                      return null != n && j(A.x.FRIENDS, n);
                  }),
                  LOGOUT: K(function () {
                      let e = _.size() > 0 || m.size > 0;
                      return _.clear(), (m = new Map()), (M = !1), e;
                  }),
              },
    );
