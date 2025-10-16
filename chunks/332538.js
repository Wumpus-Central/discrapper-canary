n.d(t, {
    Wj: () => w,
    ZP: () => Z,
}),
    n(388685),
    n(361932),
    n(187205);
var r = n(951288),
    i = n(647438),
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
    b = n(713081),
    _ = n(608949),
    O = n(905128),
    y = n(326660),
    v = n(158638),
    j = n(10765),
    x = n(317169),
    C = n(19394),
    E = n(385902),
    S = n(619733),
    I = n(535396),
    P = n(981631),
    N = n(921944);
function Z(e) {
    let t = (0, o.e7)([_.Z], () => _.Z.getNotificationStateForGuild(e), [e]),
        n = (0, o.e7)([O.Z], () => O.Z.getStateForGuild(e)),
        { trailing: b, showUnread: N } = (function (e, t, n) {
            let l = (0, x.Z)(e).available,
                { shouldShow: o } = (0, E._)(e, "useGuildPowerupsChannelListIndicators"),
                d = (0, u.OA)(a.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                p = o && !d;
            return i.useMemo(() => {
                var e, i, o;
                if (null == t)
                    return {
                        trailing: void 0,
                        showUnread: !1,
                    };
                let { unlockedPowerups: a } = t,
                    u = (0, C.h)(Object.values(a)),
                    d = null != (i = null == n ? void 0 : n.lastSeenWarningNotification) ? i : Date.now(),
                    f = new Date(null == (e = u[u.length - 1]) ? void 0 : e.ends_at).getTime(),
                    h = null != (o = null == n ? void 0 : n.lastBoostCount) ? o : 0;
                return (u.length > 0 && d < f) || p
                    ? {
                          trailing: (0, r.jsx)(s.Mgn, {
                              color: s.TVs.colors.STATUS_WARNING,
                              size: "sm",
                          }),
                          showUnread: !0,
                      }
                    : l !== h && l - h > 0
                      ? {
                            trailing: (0, r.jsx)(s.mAB, {
                                count: l - h,
                                color: c.Z.BACKGROUND_ACCENT,
                            }),
                            showUnread: !0,
                        }
                      : {
                            trailing: void 0,
                            showUnread: !1,
                        };
            }, [l, null == n ? void 0 : n.lastBoostCount, null == n ? void 0 : n.lastSeenWarningNotification, t, p]);
        })(e, n, t),
        Z = (function (e, t) {
            let [n, r] = (0, d.US)(null != t ? [a.z.GUILD_POWERUP_PERKS_COACHMARK] : []),
                s = n === a.z.GUILD_POWERUP_PERKS_COACHMARK,
                { available: c } = (0, x.Z)(e),
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
                b = (function (e, t) {
                    let n = (0, v.qI)(e, "GuildPowerupsChannelRow"),
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
                [_, O] = (0, d.XR)(null != t && !s && b > 0 ? a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, b),
                C = _ === a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                E = i.useMemo(() => {
                    if (null == t || s || C) return;
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
                                type: y.J.LEVEL_REACHED,
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
                                                  (0, j.e)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : i;
                                          }),
                                )
                                .filter(h.lm);
                        if (0 !== o.length) {
                            if (1 === o.length && !(0, p.OY)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: y.J.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, p.Qd)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (o.length > 1 && !(0, p.OY)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: y.J.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, p.Qd)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, c);
                    if (null != r) return r;
                    let i = (function (e, t, n) {
                        if (
                            (0, m.v$)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            n >= S.xn &&
                            !(0, p.OY)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: y.J.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, p.Qd)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, u, c);
                    if (null != i) return i;
                }, [e, t, s, C, c, u]),
                [N, Z] = (0, d.bf)(null != E ? a.z.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: y.d });
            return i.useMemo(() => {
                if (null != t) {
                    if (s)
                        return {
                            type: y.J.PERKS_AVAILABLE,
                            markAsDismissed: r,
                        };
                    if (C) {
                        if (b === I.Du.GAME_SERVER_HOSTING)
                            return {
                                type: y.J.GAME_SERVER_HOSTING_AVAILABLE,
                                markAsDismissed: O,
                            };
                        let e = I.os[b],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return {
                            powerups: n,
                            type: y.J.NEW_PERK_AVAILABLE,
                            markAsDismissed: O,
                        };
                    }
                    if (N === a.z.GUILD_POWERUP_NOTIFICATION && null != E) {
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
                            })({}, E)),
                            (n = n =
                                {
                                    markAsDismissed: (e) => {
                                        Z(e), E.markAsDismissed(e);
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
            }, [t, s, r, E, N, Z, C, O, b]);
        })(e, n);
    if (null !== n && (null != b || N || null != Z))
        return {
            trailing: b,
            showUnread: N,
            popout: Z,
        };
}
function w(e) {
    let t = (0, o.e7)([O.Z], () => O.Z.getStateForGuild(e)),
        n = Z(e);
    i.useEffect(() => {
        (0, b.jd)(e);
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
