n.d(t, {
    Wj: () => w,
    ZP: () => Z,
}),
    n(388685),
    n(361932),
    n(187205);
var r = n(54381),
    i = n(473749),
    l = n(494497),
    o = n(399606),
    a = n(704215),
    s = n(481060),
    c = n(377171),
    u = n(605236),
    d = n(243778),
    p = n(645041),
    f = n(430824),
    h = n(823379),
    g = n(267642),
    m = n(755458),
    b = n(60482),
    _ = n(713081),
    y = n(608949),
    O = n(905128),
    v = n(326660),
    j = n(158638),
    x = n(10765),
    C = n(317169),
    E = n(19394),
    S = n(385902),
    I = n(535396),
    P = n(981631),
    N = n(921944);
function Z(e) {
    let t = (0, o.e7)([y.Z], () => y.Z.getNotificationStateForGuild(e), [e]),
        n = (0, o.e7)([O.Z], () => O.Z.getStateForGuild(e)),
        { trailing: _, showUnread: N } = (function (e, t, n) {
            let l = (0, C.Z)(e).available,
                { shouldShow: d } = (0, S._)(e, "useGuildPowerupsChannelListIndicators"),
                p = (0, u.OA)(a.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                f = d && !p,
                h = (0, o.e7)([b.Z], () => b.Z.getStateForGuild(e));
            return i.useMemo(() => {
                var e, i, o, a;
                if (null == t)
                    return {
                        trailing: void 0,
                        showUnread: !1,
                    };
                let { unlockedPowerups: u } = t,
                    d = (0, E.h)([
                        ...Object.values(u),
                        ...Object.values(null != (i = null == h ? void 0 : h.entitlements) ? i : {}),
                    ]),
                    p = null != (o = null == n ? void 0 : n.lastSeenWarningNotification) ? o : Date.now(),
                    g = new Date(null == (e = d[d.length - 1]) ? void 0 : e.ends_at).getTime(),
                    m = null != (a = null == n ? void 0 : n.lastBoostCount) ? a : 0;
                return (d.length > 0 && p < g) || f
                    ? {
                          trailing: (0, r.jsx)(s.Mgn, {
                              color: s.TVs.colors.STATUS_WARNING,
                              size: "sm",
                          }),
                          showUnread: !0,
                      }
                    : l !== m && l - m > 0
                      ? {
                            trailing: (0, r.jsx)(s.mAB, {
                                count: l - m,
                                color: c.Z.BACKGROUND_ACCENT,
                            }),
                            showUnread: !0,
                        }
                      : {
                            trailing: void 0,
                            showUnread: !1,
                        };
            }, [
                l,
                null == n ? void 0 : n.lastBoostCount,
                null == n ? void 0 : n.lastSeenWarningNotification,
                t,
                f,
                null == h ? void 0 : h.entitlements,
            ]);
        })(e, n, t),
        Z = (function (e, t) {
            let [n, r] = (0, d.US)(null != t ? [a.z.GUILD_POWERUP_PERKS_COACHMARK] : []),
                s = n === a.z.GUILD_POWERUP_PERKS_COACHMARK,
                { available: c } = (0, C.Z)(e),
                u = (0, o.e7)([f.Z], () => {
                    var t, n;
                    return (
                        null !=
                            (n =
                                null == (t = f.Z.getGuild(e))
                                    ? void 0
                                    : t.features.has(P.GuildFeatures.GAME_SERVERS)) && n
                    );
                }),
                _ = (0, o.e7)([b.Z], () => b.Z.getLowestGameCostForGuild(e)),
                y = (function (e, t) {
                    let n = (0, j.qI)(e, "GuildPowerupsChannelRow"),
                        r = (0, m.BU)(e, "GuildPowerupsChannelRow"),
                        a = (0, o.e7)([f.Z], () => {
                            var t;
                            return null == (t = f.Z.getGuild(e))
                                ? void 0
                                : t.features.has(P.GuildFeatures.GAME_SERVERS);
                        });
                    return i.useMemo(() => {
                        if (r && !a) return I.Du.GAME_SERVER_HOSTING;
                        if (
                            !Array.from(I.os[I.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((e) => {
                                var n;
                                return (null == t || null == (n = t.unlockedPowerups) ? void 0 : n[e]) != null;
                            })
                        )
                            return I.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                        if (n) {
                            var i;
                            let n = l.A$,
                                r = I.Rx[n],
                                o = (null == t || null == (i = t.unlockedPowerups) ? void 0 : i[n]) != null;
                            if (null == r && !o) return I.Du.VANITY_URL;
                            let a = (0, g.Jh)(e);
                            if (null != a && null != r && a < r && !o) return I.Du.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t, r, a]);
                })(e, t),
                [O, E] = (0, d.XR)(null != t && !s && y > 0 ? a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, y),
                S = O === a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                N = i.useMemo(() => {
                    if (null == t || s || S) return;
                    let n = (function (e, t) {
                        let n = g.Oe.find((e) => {
                            let n = I.Cp[e],
                                r = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != r && r.user_id !== I.Fq;
                        });
                        if (null == n) return;
                        let r = I.Q1[n];
                        if (null == r || (0, p.OY)(r, e)) return;
                        let i = I.Cp[n],
                            l = null != i ? t.allPowerups[i] : void 0;
                        if (null != l)
                            return {
                                type: v.J.LEVEL_REACHED,
                                powerup: l,
                                markAsDismissed: (t) => {
                                    (0, p.Qd)(r, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let r = (function (e, t, n) {
                        var r, i;
                        let l = null != (i = null == (r = f.Z.getGuild(e)) ? void 0 : r.premiumTier) ? i : P.Eu4.NONE,
                            o = Array.from(I.Tg.values())
                                .flatMap((r) =>
                                    r.length <= 0 ||
                                    r.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = I.Rx[e];
                                        return null != n && !!(l >= n);
                                    })
                                        ? []
                                        : r.map((r) => {
                                              let i = t.allPowerups[r];
                                              return null == i ||
                                                  n < i.cost ||
                                                  (0, x.e)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : i;
                                          }),
                                )
                                .filter(h.lm);
                        if (0 !== o.length) {
                            if (1 === o.length && !(0, p.OY)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: v.J.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, p.Qd)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (o.length > 1 && !(0, p.OY)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: v.J.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, p.Qd)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, c);
                    if (null != r) return r;
                    let i = (function (e, t, n, r) {
                        if (
                            (0, m.v$)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != r &&
                            n >= r &&
                            !(0, p.OY)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: v.J.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, p.Qd)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, u, c, _);
                    if (null != i) return i;
                }, [e, t, s, S, c, u, _]),
                [Z, w] = (0, d.bf)(null != N ? a.z.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: v.d });
            return i.useMemo(() => {
                if (null != t) {
                    if (s)
                        return {
                            type: v.J.PERKS_AVAILABLE,
                            markAsDismissed: r,
                        };
                    if (S) {
                        if (y === I.Du.GAME_SERVER_HOSTING)
                            return {
                                type: v.J.GAME_SERVER_HOSTING_AVAILABLE,
                                markAsDismissed: E,
                            };
                        let e = I.os[y],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return {
                            powerups: n,
                            type: v.J.NEW_PERK_AVAILABLE,
                            markAsDismissed: E,
                        };
                    }
                    if (Z === a.z.GUILD_POWERUP_NOTIFICATION && null != N) {
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
                            })({}, N)),
                            (n = n =
                                {
                                    markAsDismissed: (e) => {
                                        w(e), N.markAsDismissed(e);
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
            }, [t, s, r, N, Z, w, S, E, y]);
        })(e, n);
    if (null !== n && (null != _ || N || null != Z))
        return {
            trailing: _,
            showUnread: N,
            popout: Z,
        };
}
function w(e) {
    let t = (0, o.e7)([O.Z], () => O.Z.getStateForGuild(e)),
        n = Z(e);
    i.useEffect(() => {
        (0, _.jd)(e);
    }, [e]),
        i.useEffect(() => {
            var e;
            null == n || null == (e = n.popout) || e.markAsDismissed(N.L.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                g.Oe.forEach((n) => {
                    let r = I.Cp[n];
                    if (null == r || null == t.unlockedPowerups[r]) return;
                    let i = I.Q1[n];
                    null != i && (0, p.Qd)(i, e, !1, N.L.AUTO_DISMISS);
                });
        }, [e, t]);
}
