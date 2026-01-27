n.d(t, {
    Ay: () => S,
    c2: () => I,
}),
    n(896048),
    n(114821),
    n(339614);
var r = n(64700),
    l = n(512750),
    i = n(417597),
    s = n(554146),
    a = n(367727),
    o = n(45780),
    c = n(71393),
    u = n(403362),
    d = n(473145),
    p = n(488803),
    h = n(522055),
    f = n(942975),
    g = n(904560),
    m = n(645619),
    b = n(379229),
    A = n(840120),
    y = n(904629),
    _ = n(229548),
    O = n(294384),
    j = n(864310),
    v = n(553103),
    x = n(568065),
    E = n(652215),
    C = n(49999);

function S(e) {
    let t = (0, i.bG)([g.A], () => g.A.getNotificationStateForGuild(e), [e]),
        n = (0, i.bG)([m.A], () => m.A.getStateForGuild(e)),
        { indicator: f, showUnread: C } = (function (e, t, n) {
            let l = (0, j.A)(e).available,
                { shouldShow: o } = (0, v.A)(e, "useGuildPowerupsNotificationIndicator"),
                c = (0, a.cN)(s.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                u = o && !c,
                d = (0, i.bG)([h.A], () => h.A.getStateForGuild(e));
            return r.useMemo(() => {
                var e, r, i, s;
                if (null == t)
                    return {
                        indicator: void 0,
                        showUnread: !1,
                    };
                let { unlockedPowerups: a } = t,
                    o = (0, y.k)([
                        ...Object.values(a),
                        ...Object.values(null != (e = null == d ? void 0 : d.entitlements) ? e : {}),
                    ]),
                    c = null != (r = null == n ? void 0 : n.lastSeenWarningNotification) ? r : Date.now(),
                    p = new Date(null == (s = o[o.length - 1]) ? void 0 : s.ends_at).getTime(),
                    h = null != (i = null == n ? void 0 : n.lastBoostCount) ? i : 0,
                    f = o.length > 0 && c < p,
                    g = l - h;
                return f || u
                    ? {
                          indicator: {
                              type: b.cD.WARNING,
                          },
                          showUnread: !0,
                      }
                    : l !== h && g > 0
                      ? {
                            indicator: {
                                type: b.cD.UNREAD,
                                count: g,
                            },
                            showUnread: !0,
                        }
                      : {
                            indicator: void 0,
                            showUnread: !1,
                        };
            }, [
                l,
                null == n ? void 0 : n.lastBoostCount,
                null == n ? void 0 : n.lastSeenWarningNotification,
                t,
                u,
                null == d ? void 0 : d.entitlements,
            ]);
        })(e, null != n ? n : void 0, t),
        S = (function (e, t) {
            let n,
                a,
                f,
                [g, m] = (0, _.ty)(null != t),
                y = g === s.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: v } = (0, j.A)(e),
                C = (0, i.bG)([c.A], () => {
                    var t, n;
                    return (
                        null !=
                            (t =
                                null == (n = c.A.getGuild(e))
                                    ? void 0
                                    : n.features.has(E.GuildFeatures.GAME_SERVERS)) && t
                    );
                }),
                S = (0, i.bG)([h.A], () => h.A.getLowestGameCostForGuild(e)),
                I =
                    ((n = (0, A.gz)(e, "GuildPowerupsChannelRow")),
                    (a = (0, p.C$)(e, "GuildPowerupsChannelRow")),
                    (f = (0, i.bG)([c.A], () => {
                        var t;
                        return null == (t = c.A.getGuild(e)) ? void 0 : t.features.has(E.GuildFeatures.GAME_SERVERS);
                    })),
                    r.useMemo(() => {
                        if (a && !f) return x.q.GAME_SERVER_HOSTING;
                        if (
                            !Array.from(x.r9[x.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((e) => {
                                var n;
                                return (null == t || null == (n = t.unlockedPowerups) ? void 0 : n[e]) != null;
                            })
                        )
                            return x.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                        if (n) {
                            var r;
                            let n = l.FB,
                                i = x.wr[n],
                                s = (null == t || null == (r = t.unlockedPowerups) ? void 0 : r[n]) != null;
                            if (null == i && !s) return x.q.VANITY_URL;
                            let a = (0, d.P7)(e);
                            if (null != a && null != i && a < i && !s) return x.q.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t, a, f])),
                [N, T] = (0, _.FC)(null != t && !y, I),
                P = N === s.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                w = r.useMemo(() => {
                    if (null == t || y || P) return;
                    let n = (function (e, t) {
                        let n = d.fi.find((e) => {
                            let n = x.a8[e],
                                r = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != r && r.user_id !== x.mB;
                        });
                        if (null == n) return;
                        let r = x.On[n];
                        if (null == r || (0, o.zs)(r, e)) return;
                        let l = x.a8[n],
                            i = null != l ? t.allPowerups[l] : void 0;
                        if (null != i)
                            return {
                                type: b.o.LEVEL_REACHED,
                                powerup: i,
                                markAsDismissed: (t) => {
                                    (0, o._$)(r, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let r = (function (e, t, n) {
                        var r, l;
                        let i = null != (r = null == (l = c.A.getGuild(e)) ? void 0 : l.premiumTier) ? r : E.TVA.NONE,
                            a = Array.from(x.oN.values())
                                .flatMap((r) =>
                                    r.length <= 0 ||
                                    r.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = x.wr[e];
                                        return null != n && !!(i >= n);
                                    })
                                        ? []
                                        : r.map((r) => {
                                              let l = t.allPowerups[r];
                                              return null == l ||
                                                  n < l.cost ||
                                                  (0, O.t)(e, l, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : l;
                                          }),
                                )
                                .filter(u.Vq);
                        if (0 !== a.length) {
                            if (1 === a.length && !(0, o.zs)(s.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: b.o.PERKS_PURCHASABLE,
                                    powerups: a,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(s.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (a.length > 1 && !(0, o.zs)(s.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: b.o.PERKS_PURCHASABLE,
                                    powerups: a,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(s.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, v);
                    if (null != r) return r;
                    let l = (function (e, t, n, r) {
                        if (
                            (0, p.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != r &&
                            n >= r &&
                            !(0, o.zs)(s.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: b.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, o._$)(s.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, C, v, S);
                    if (null != l) return l;
                }, [e, t, y, P, v, C, S]),
                [R, D] = (0, _.ru)(null != w);
            return r.useMemo(() => {
                if (null != t) {
                    if (y)
                        return {
                            type: b.o.PERKS_AVAILABLE,
                            markAsDismissed: m,
                        };
                    if (P) {
                        if (I === x.q.GAME_SERVER_HOSTING)
                            return {
                                type: b.o.GAME_SERVER_HOSTING_AVAILABLE,
                                markAsDismissed: T,
                            };
                        let e = x.r9[I],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return {
                            powerups: n,
                            type: b.o.NEW_PERK_AVAILABLE,
                            markAsDismissed: T,
                        };
                    }
                    if (R === s.M.GUILD_POWERUP_NOTIFICATION && null != w) {
                        var e, n;
                        return (
                            (e = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, w)),
                            (n = n =
                                {
                                    markAsDismissed: (e) => {
                                        D(e), w.markAsDismissed(e);
                                    },
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                  }),
                            e
                        );
                    }
                }
            }, [t, y, m, w, R, D, P, T, I]);
        })(e, null != n ? n : void 0);
    if (null !== n && (null != f || C || null != S))
        return {
            indicator: f,
            showUnread: C,
            popout: S,
        };
}

function I(e) {
    let t = (0, i.bG)([m.A], () => m.A.getStateForGuild(e)),
        n = S(e);
    r.useEffect(() => {
        (0, f.Zm)(e);
    }, [e]),
        r.useEffect(() => {
            var e;
            null == n || null == (e = n.popout) || e.markAsDismissed(C.i.AUTO_DISMISS);
        }, [n]),
        r.useEffect(() => {
            null != t &&
                d.fi.forEach((n) => {
                    let r = x.a8[n];
                    if (null == r || null == t.unlockedPowerups[r]) return;
                    let l = x.On[n];
                    null != l && (0, o._$)(l, e, !1, C.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
