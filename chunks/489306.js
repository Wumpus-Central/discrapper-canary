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
    a = n(554146),
    s = n(367727),
    o = n(45780),
    c = n(71393),
    u = n(403362),
    d = n(473145),
    f = n(488803),
    p = n(522055),
    h = n(942975),
    b = n(904560),
    g = n(645619),
    m = n(379229),
    A = n(840120),
    y = n(904629),
    O = n(229548),
    j = n(294384),
    v = n(864310),
    x = n(553103),
    E = n(568065),
    _ = n(652215),
    C = n(49999);
function S(e) {
    let t = (0, i.bG)([b.A], () => b.A.getNotificationStateForGuild(e), [e]),
        n = (0, i.bG)([g.A], () => g.A.getStateForGuild(e)),
        { indicator: h, showUnread: C } = (function (e, t, n) {
            let l = (0, v.A)(e).available,
                { shouldShow: o } = (0, x.A)(e, "useGuildPowerupsNotificationIndicator"),
                c = (0, s.cN)(a.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                u = o && !c,
                d = (0, i.bG)([p.A], () => p.A.getStateForGuild(e));
            return r.useMemo(() => {
                var e, r, i, a;
                if (null == t)
                    return {
                        indicator: void 0,
                        showUnread: !1,
                    };
                let { unlockedPowerups: s } = t,
                    o = (0, y.k)([
                        ...Object.values(s),
                        ...Object.values(null != (e = null == d ? void 0 : d.entitlements) ? e : {}),
                    ]),
                    c = null != (r = null == n ? void 0 : n.lastSeenWarningNotification) ? r : Date.now(),
                    f = new Date(null == (a = o[o.length - 1]) ? void 0 : a.ends_at).getTime(),
                    p = null != (i = null == n ? void 0 : n.lastBoostCount) ? i : 0,
                    h = o.length > 0 && c < f,
                    b = l - p;
                return h || u
                    ? {
                          indicator: { type: m.cD.WARNING },
                          showUnread: !0,
                      }
                    : l !== p && b > 0
                      ? {
                            indicator: {
                                type: m.cD.UNREAD,
                                count: b,
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
                s,
                h,
                [b, g] = (0, O.ty)(null != t),
                y = b === a.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: x } = (0, v.A)(e),
                C = (0, i.bG)([c.A], () => {
                    var t, n;
                    return (
                        null !=
                            (t =
                                null == (n = c.A.getGuild(e))
                                    ? void 0
                                    : n.features.has(_.GuildFeatures.GAME_SERVERS)) && t
                    );
                }),
                S = (0, i.bG)([p.A], () => p.A.getLowestGameCostForGuild(e)),
                I =
                    ((n = (0, A.gz)(e, "GuildPowerupsChannelRow")),
                    (s = (0, f.C$)(e, "GuildPowerupsChannelRow")),
                    (h = (0, i.bG)([c.A], () => {
                        var t;
                        return null == (t = c.A.getGuild(e)) ? void 0 : t.features.has(_.GuildFeatures.GAME_SERVERS);
                    })),
                    r.useMemo(() => {
                        if (s && !h) return E.q.GAME_SERVER_HOSTING;
                        if (
                            !Array.from(E.r9[E.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((e) => {
                                var n;
                                return (null == t || null == (n = t.unlockedPowerups) ? void 0 : n[e]) != null;
                            })
                        )
                            return E.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                        if (n) {
                            var r;
                            let n = l.FB,
                                i = E.wr[n],
                                a = (null == t || null == (r = t.unlockedPowerups) ? void 0 : r[n]) != null;
                            if (null == i && !a) return E.q.VANITY_URL;
                            let s = (0, d.P7)(e);
                            if (null != s && null != i && s < i && !a) return E.q.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t, s, h])),
                [N, T] = (0, O.FC)(null != t && !y, I),
                P = N === a.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                w = (0, f.TS)(e, "useGuildPowerupsChannelListPopout"),
                [R, D] = (0, O.rd)(null != t && !y && !P && w),
                M = R === a.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V1_COACHMARK,
                L = r.useMemo(() => {
                    if (null == t || y || P || M) return;
                    let n = (function (e, t) {
                        let n = d.fi.find((e) => {
                            let n = E.a8[e],
                                r = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != r && r.user_id !== E.mB;
                        });
                        if (null == n) return;
                        let r = E.On[n];
                        if (null == r || (0, o.zs)(r, e)) return;
                        let l = E.a8[n],
                            i = null != l ? t.allPowerups[l] : void 0;
                        if (null != i)
                            return {
                                type: m.o.LEVEL_REACHED,
                                powerup: i,
                                markAsDismissed: (t) => {
                                    (0, o._$)(r, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let r = (function (e, t, n) {
                        var r, l;
                        let i = null != (r = null == (l = c.A.getGuild(e)) ? void 0 : l.premiumTier) ? r : _.TVA.NONE,
                            s = Array.from(E.oN.values())
                                .flatMap((r) =>
                                    r.length <= 0 ||
                                    r.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = E.wr[e];
                                        return null != n && !!(i >= n);
                                    })
                                        ? []
                                        : r.map((r) => {
                                              let l = t.allPowerups[r];
                                              return null == l ||
                                                  n < l.cost ||
                                                  (0, j.t)(e, l, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : l;
                                          }),
                                )
                                .filter(u.Vq);
                        if (0 !== s.length) {
                            if (1 === s.length && !(0, o.zs)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: m.o.PERKS_PURCHASABLE,
                                    powerups: s,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (s.length > 1 && !(0, o.zs)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: m.o.PERKS_PURCHASABLE,
                                    powerups: s,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, x);
                    if (null != r) return r;
                    let l = (function (e, t, n, r) {
                        if (
                            (0, f.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != r &&
                            n >= r &&
                            !(0, o.zs)(a.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: m.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, o._$)(a.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, C, x, S);
                    if (null != l) return l;
                }, [e, t, y, P, M, x, C, S]),
                [G, k] = (0, O.ru)(null != L);
            return r.useMemo(() => {
                if (null != t) {
                    if (y)
                        return {
                            type: m.o.PERKS_AVAILABLE,
                            markAsDismissed: g,
                        };
                    if (P) {
                        if (I === E.q.GAME_SERVER_HOSTING)
                            return {
                                type: m.o.GAME_SERVER_HOSTING_AVAILABLE,
                                markAsDismissed: T,
                            };
                        let e = E.r9[I],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return {
                            powerups: n,
                            type: m.o.NEW_PERK_AVAILABLE,
                            markAsDismissed: T,
                        };
                    }
                    if (M)
                        return {
                            type: m.o.GAME_SERVER_NEW_GAMES,
                            markAsDismissed: D,
                        };
                    if (G === a.M.GUILD_POWERUP_NOTIFICATION && null != L) {
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
                            })({}, L)),
                            (n = n =
                                {
                                    markAsDismissed: (e) => {
                                        k(e), L.markAsDismissed(e);
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
            }, [t, y, g, L, G, k, P, T, I, M, D]);
        })(e, null != n ? n : void 0);
    if (null !== n && (null != h || C || null != S))
        return {
            indicator: h,
            showUnread: C,
            popout: S,
        };
}
function I(e) {
    let t = (0, i.bG)([g.A], () => g.A.getStateForGuild(e)),
        n = S(e);
    r.useEffect(() => {
        (0, h.Zm)(e);
    }, [e]),
        r.useEffect(() => {
            var e;
            null == n || null == (e = n.popout) || e.markAsDismissed(C.i.AUTO_DISMISS);
        }, [n]),
        r.useEffect(() => {
            null != t &&
                d.fi.forEach((n) => {
                    let r = E.a8[n];
                    if (null == r || null == t.unlockedPowerups[r]) return;
                    let l = E.On[n];
                    null != l && (0, o._$)(l, e, !1, C.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
