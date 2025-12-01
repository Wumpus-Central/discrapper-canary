n.d(t, {
    Wj: () => Z,
    ZP: () => N,
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
    c = n(605236),
    u = n(243778),
    d = n(645041),
    f = n(430824),
    p = n(823379),
    h = n(267642),
    g = n(755458),
    m = n(60482),
    b = n(713081),
    _ = n(608949),
    y = n(905128),
    O = n(326660),
    v = n(158638),
    j = n(10765),
    x = n(317169),
    C = n(19394),
    E = n(385902),
    S = n(535396),
    I = n(981631),
    P = n(921944);
function N(e) {
    let t = (0, o.e7)([_.Z], () => _.Z.getNotificationStateForGuild(e), [e]),
        n = (0, o.e7)([y.Z], () => y.Z.getStateForGuild(e)),
        { trailing: b, showUnread: P } = (function (e, t, n) {
            let l = (0, x.Z)(e).available,
                { shouldShow: u } = (0, E._)(e, "useGuildPowerupsChannelListIndicators"),
                d = (0, c.OA)(a.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                f = u && !d,
                p = (0, o.e7)([m.Z], () => m.Z.getStateForGuild(e));
            return i.useMemo(() => {
                var e, i, o, a;
                if (null == t)
                    return {
                        trailing: void 0,
                        showUnread: !1,
                    };
                let { unlockedPowerups: c } = t,
                    u = (0, C.h)([
                        ...Object.values(c),
                        ...Object.values(null != (i = null == p ? void 0 : p.entitlements) ? i : {}),
                    ]),
                    d = null != (o = null == n ? void 0 : n.lastSeenWarningNotification) ? o : Date.now(),
                    h = new Date(null == (e = u[u.length - 1]) ? void 0 : e.ends_at).getTime(),
                    g = null != (a = null == n ? void 0 : n.lastBoostCount) ? a : 0;
                return (u.length > 0 && d < h) || f
                    ? {
                          trailing: (0, r.jsx)(s.Mgn, {
                              color: s.TVs.colors.STATUS_WARNING,
                              size: "sm",
                          }),
                          showUnread: !0,
                      }
                    : l !== g && l - g > 0
                      ? {
                            trailing: (0, r.jsx)(s.mAB, {
                                count: l - g,
                                color: s.TVs.colors.BACKGROUND_ACCENT.css,
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
                null == p ? void 0 : p.entitlements,
            ]);
        })(e, n, t),
        N = (function (e, t) {
            let [n, r] = (0, u.US)(null != t ? [a.z.GUILD_POWERUP_PERKS_COACHMARK] : []),
                s = n === a.z.GUILD_POWERUP_PERKS_COACHMARK,
                { available: c } = (0, x.Z)(e),
                b = (0, o.e7)([f.Z], () => {
                    var t, n;
                    return (
                        null !=
                            (n =
                                null == (t = f.Z.getGuild(e))
                                    ? void 0
                                    : t.features.has(I.GuildFeatures.GAME_SERVERS)) && n
                    );
                }),
                _ = (0, o.e7)([m.Z], () => m.Z.getLowestGameCostForGuild(e)),
                y = (function (e, t) {
                    let n = (0, v.qI)(e, "GuildPowerupsChannelRow"),
                        r = (0, g.BU)(e, "GuildPowerupsChannelRow"),
                        a = (0, o.e7)([f.Z], () => {
                            var t;
                            return null == (t = f.Z.getGuild(e))
                                ? void 0
                                : t.features.has(I.GuildFeatures.GAME_SERVERS);
                        });
                    return i.useMemo(() => {
                        if (r && !a) return S.Du.GAME_SERVER_HOSTING;
                        if (
                            !Array.from(S.os[S.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((e) => {
                                var n;
                                return (null == t || null == (n = t.unlockedPowerups) ? void 0 : n[e]) != null;
                            })
                        )
                            return S.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                        if (n) {
                            var i;
                            let n = l.A$,
                                r = S.Rx[n],
                                o = (null == t || null == (i = t.unlockedPowerups) ? void 0 : i[n]) != null;
                            if (null == r && !o) return S.Du.VANITY_URL;
                            let a = (0, h.Jh)(e);
                            if (null != a && null != r && a < r && !o) return S.Du.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t, r, a]);
                })(e, t),
                [C, E] = (0, u.XR)(null != t && !s && y > 0 ? a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, y),
                P = C === a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                N = i.useMemo(() => {
                    if (null == t || s || P) return;
                    let n = (function (e, t) {
                        let n = h.Oe.find((e) => {
                            let n = S.Cp[e],
                                r = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != r && r.user_id !== S.Fq;
                        });
                        if (null == n) return;
                        let r = S.Q1[n];
                        if (null == r || (0, d.OY)(r, e)) return;
                        let i = S.Cp[n],
                            l = null != i ? t.allPowerups[i] : void 0;
                        if (null != l)
                            return {
                                type: O.J.LEVEL_REACHED,
                                powerup: l,
                                markAsDismissed: (t) => {
                                    (0, d.Qd)(r, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let r = (function (e, t, n) {
                        var r, i;
                        let l = null != (i = null == (r = f.Z.getGuild(e)) ? void 0 : r.premiumTier) ? i : I.Eu4.NONE,
                            o = Array.from(S.Tg.values())
                                .flatMap((r) =>
                                    r.length <= 0 ||
                                    r.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = S.Rx[e];
                                        return null != n && !!(l >= n);
                                    })
                                        ? []
                                        : r.map((r) => {
                                              let i = t.allPowerups[r];
                                              return null == i ||
                                                  n < i.cost ||
                                                  (0, j.e)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : i;
                                          }),
                                )
                                .filter(p.lm);
                        if (0 !== o.length) {
                            if (1 === o.length && !(0, d.OY)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: O.J.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, d.Qd)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (o.length > 1 && !(0, d.OY)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: O.J.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, d.Qd)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, c);
                    if (null != r) return r;
                    let i = (function (e, t, n, r) {
                        if (
                            (0, g.v$)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != r &&
                            n >= r &&
                            !(0, d.OY)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: O.J.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, d.Qd)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, b, c, _);
                    if (null != i) return i;
                }, [e, t, s, P, c, b, _]),
                [Z, w] = (0, u.bf)(null != N ? a.z.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: O.d });
            return i.useMemo(() => {
                if (null != t) {
                    if (s)
                        return {
                            type: O.J.PERKS_AVAILABLE,
                            markAsDismissed: r,
                        };
                    if (P) {
                        if (y === S.Du.GAME_SERVER_HOSTING)
                            return {
                                type: O.J.GAME_SERVER_HOSTING_AVAILABLE,
                                markAsDismissed: E,
                            };
                        let e = S.os[y],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return {
                            powerups: n,
                            type: O.J.NEW_PERK_AVAILABLE,
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
            }, [t, s, r, N, Z, w, P, E, y]);
        })(e, n);
    if (null !== n && (null != b || P || null != N))
        return {
            trailing: b,
            showUnread: P,
            popout: N,
        };
}
function Z(e) {
    let t = (0, o.e7)([y.Z], () => y.Z.getStateForGuild(e)),
        n = N(e);
    i.useEffect(() => {
        (0, b.jd)(e);
    }, [e]),
        i.useEffect(() => {
            var e;
            null == n || null == (e = n.popout) || e.markAsDismissed(P.L.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                h.Oe.forEach((n) => {
                    let r = S.Cp[n];
                    if (null == r || null == t.unlockedPowerups[r]) return;
                    let i = S.Q1[n];
                    null != i && (0, d.Qd)(i, e, !1, P.L.AUTO_DISMISS);
                });
        }, [e, t]);
}
