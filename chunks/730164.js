n.d(t, {
    Wj: () => P,
    ZP: () => _,
}),
    n(388685),
    n(361932),
    n(187205);
var r = n(473749),
    i = n(494497),
    l = n(399606),
    a = n(704215),
    o = n(605236),
    s = n(243778),
    c = n(645041),
    u = n(430824),
    d = n(823379),
    f = n(267642),
    h = n(755458),
    p = n(60482),
    g = n(713081),
    b = n(608949),
    m = n(905128),
    y = n(326660),
    O = n(158638),
    v = n(19394),
    j = n(431971),
    C = n(10765),
    x = n(317169),
    E = n(535396),
    S = n(981631),
    I = n(921944);
function _(e) {
    let t = (0, l.e7)([b.Z], () => b.Z.getNotificationStateForGuild(e), [e]),
        n = (0, l.e7)([m.Z], () => m.Z.getStateForGuild(e)),
        { indicator: g, showUnread: I } = (function (e, t, n) {
            let i = (0, x.Z)(e).available,
                { shouldShow: s } = (0, j._)(e, "useGuildPowerupsNotificationIndicator"),
                c = (0, o.OA)(a.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                u = s && !c,
                d = (0, l.e7)([p.Z], () => p.Z.getStateForGuild(e));
            return r.useMemo(() => {
                var e, r, l, a;
                if (null == t)
                    return {
                        indicator: void 0,
                        showUnread: !1,
                    };
                let { unlockedPowerups: o } = t,
                    s = (0, v.h)([
                        ...Object.values(o),
                        ...Object.values(null != (r = null == d ? void 0 : d.entitlements) ? r : {}),
                    ]),
                    c = null != (l = null == n ? void 0 : n.lastSeenWarningNotification) ? l : Date.now(),
                    f = new Date(null == (e = s[s.length - 1]) ? void 0 : e.ends_at).getTime(),
                    h = null != (a = null == n ? void 0 : n.lastBoostCount) ? a : 0,
                    p = s.length > 0 && c < f,
                    g = i - h;
                return p || u
                    ? {
                          indicator: { type: y.Ru.WARNING },
                          showUnread: !0,
                      }
                    : i !== h && g > 0
                      ? {
                            indicator: {
                                type: y.Ru.UNREAD,
                                count: g,
                            },
                            showUnread: !0,
                        }
                      : {
                            indicator: void 0,
                            showUnread: !1,
                        };
            }, [
                i,
                null == n ? void 0 : n.lastBoostCount,
                null == n ? void 0 : n.lastSeenWarningNotification,
                t,
                u,
                null == d ? void 0 : d.entitlements,
            ]);
        })(e, null != n ? n : void 0, t),
        _ = (function (e, t) {
            let [n, o] = (0, s.US)(null != t ? [a.z.GUILD_POWERUP_PERKS_COACHMARK] : []),
                g = n === a.z.GUILD_POWERUP_PERKS_COACHMARK,
                { available: b } = (0, x.Z)(e),
                m = (0, l.e7)([u.Z], () => {
                    var t, n;
                    return (
                        null !=
                            (n =
                                null == (t = u.Z.getGuild(e))
                                    ? void 0
                                    : t.features.has(S.GuildFeatures.GAME_SERVERS)) && n
                    );
                }),
                v = (0, l.e7)([p.Z], () => p.Z.getLowestGameCostForGuild(e)),
                j = (function (e, t) {
                    let n = (0, O.qI)(e, "GuildPowerupsChannelRow"),
                        a = (0, h.BU)(e, "GuildPowerupsChannelRow"),
                        o = (0, l.e7)([u.Z], () => {
                            var t;
                            return null == (t = u.Z.getGuild(e))
                                ? void 0
                                : t.features.has(S.GuildFeatures.GAME_SERVERS);
                        });
                    return r.useMemo(() => {
                        if (a && !o) return E.Du.GAME_SERVER_HOSTING;
                        if (
                            !Array.from(E.os[E.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((e) => {
                                var n;
                                return (null == t || null == (n = t.unlockedPowerups) ? void 0 : n[e]) != null;
                            })
                        )
                            return E.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                        if (n) {
                            var r;
                            let n = i.A$,
                                l = E.Rx[n],
                                a = (null == t || null == (r = t.unlockedPowerups) ? void 0 : r[n]) != null;
                            if (null == l && !a) return E.Du.VANITY_URL;
                            let o = (0, f.Jh)(e);
                            if (null != o && null != l && o < l && !a) return E.Du.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t, a, o]);
                })(e, t),
                [I, _] = (0, s.XR)(null != t && !g && j > 0 ? a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, j),
                P = I === a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                N = r.useMemo(() => {
                    if (null == t || g || P) return;
                    let n = (function (e, t) {
                        let n = f.Oe.find((e) => {
                            let n = E.Cp[e],
                                r = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != r && r.user_id !== E.Fq;
                        });
                        if (null == n) return;
                        let r = E.Q1[n];
                        if (null == r || (0, c.OY)(r, e)) return;
                        let i = E.Cp[n],
                            l = null != i ? t.allPowerups[i] : void 0;
                        if (null != l)
                            return {
                                type: y.Jk.LEVEL_REACHED,
                                powerup: l,
                                markAsDismissed: (t) => {
                                    (0, c.Qd)(r, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let r = (function (e, t, n) {
                        var r, i;
                        let l = null != (i = null == (r = u.Z.getGuild(e)) ? void 0 : r.premiumTier) ? i : S.Eu4.NONE,
                            o = Array.from(E.Tg.values())
                                .flatMap((r) =>
                                    r.length <= 0 ||
                                    r.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = E.Rx[e];
                                        return null != n && !!(l >= n);
                                    })
                                        ? []
                                        : r.map((r) => {
                                              let i = t.allPowerups[r];
                                              return null == i ||
                                                  n < i.cost ||
                                                  (0, C.e)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : i;
                                          }),
                                )
                                .filter(d.lm);
                        if (0 !== o.length) {
                            if (1 === o.length && !(0, c.OY)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: y.Jk.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, c.Qd)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (o.length > 1 && !(0, c.OY)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: y.Jk.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, c.Qd)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, b);
                    if (null != r) return r;
                    let i = (function (e, t, n, r) {
                        if (
                            (0, h.v$)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != r &&
                            n >= r &&
                            !(0, c.OY)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: y.Jk.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, c.Qd)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, m, b, v);
                    if (null != i) return i;
                }, [e, t, g, P, b, m, v]),
                [Z, w] = (0, s.bf)(null != N ? a.z.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: y.dU });
            return r.useMemo(() => {
                if (null != t) {
                    if (g)
                        return {
                            type: y.Jk.PERKS_AVAILABLE,
                            markAsDismissed: o,
                        };
                    if (P) {
                        if (j === E.Du.GAME_SERVER_HOSTING)
                            return {
                                type: y.Jk.GAME_SERVER_HOSTING_AVAILABLE,
                                markAsDismissed: _,
                            };
                        let e = E.os[j],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return {
                            powerups: n,
                            type: y.Jk.NEW_PERK_AVAILABLE,
                            markAsDismissed: _,
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
            }, [t, g, o, N, Z, w, P, _, j]);
        })(e, null != n ? n : void 0);
    if (null !== n && (null != g || I || null != _))
        return {
            indicator: g,
            showUnread: I,
            popout: _,
        };
}
function P(e) {
    let t = (0, l.e7)([m.Z], () => m.Z.getStateForGuild(e)),
        n = _(e);
    r.useEffect(() => {
        (0, g.jd)(e);
    }, [e]),
        r.useEffect(() => {
            var e;
            null == n || null == (e = n.popout) || e.markAsDismissed(I.L.AUTO_DISMISS);
        }, [n]),
        r.useEffect(() => {
            null != t &&
                f.Oe.forEach((n) => {
                    let r = E.Cp[n];
                    if (null == r || null == t.unlockedPowerups[r]) return;
                    let i = E.Q1[n];
                    null != i && (0, c.Qd)(i, e, !1, I.L.AUTO_DISMISS);
                });
        }, [e, t]);
}
