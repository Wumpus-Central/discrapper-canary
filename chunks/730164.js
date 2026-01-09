n.d(t, {
    Wj: () => P,
    ZP: () => I,
}),
    n(388685),
    n(361932),
    n(187205);
var r = n(473749),
    i = n(494497),
    l = n(399606),
    a = n(704215),
    o = n(605236),
    s = n(645041),
    c = n(430824),
    u = n(823379),
    d = n(267642),
    p = n(755458),
    f = n(60482),
    h = n(713081),
    g = n(608949),
    m = n(905128),
    b = n(326660),
    y = n(158638),
    v = n(19394),
    O = n(620957),
    j = n(10765),
    x = n(317169),
    C = n(839637),
    E = n(535396),
    S = n(981631),
    _ = n(921944);
function I(e) {
    let t = (0, l.e7)([g.Z], () => g.Z.getNotificationStateForGuild(e), [e]),
        n = (0, l.e7)([m.Z], () => m.Z.getStateForGuild(e)),
        { indicator: h, showUnread: _ } = (function (e, t, n) {
            let i = (0, x.Z)(e).available,
                { shouldShow: s } = (0, C.Z)(e, "useGuildPowerupsNotificationIndicator"),
                c = (0, o.OA)(a.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                u = s && !c,
                d = (0, l.e7)([f.Z], () => f.Z.getStateForGuild(e));
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
                    p = new Date(null == (e = s[s.length - 1]) ? void 0 : e.ends_at).getTime(),
                    f = null != (a = null == n ? void 0 : n.lastBoostCount) ? a : 0,
                    h = s.length > 0 && c < p,
                    g = i - f;
                return h || u
                    ? {
                          indicator: { type: b.Ru.WARNING },
                          showUnread: !0,
                      }
                    : i !== f && g > 0
                      ? {
                            indicator: {
                                type: b.Ru.UNREAD,
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
        I = (function (e, t) {
            let [n, o] = (0, O.Bm)(null != t),
                h = n === a.z.GUILD_POWERUP_PERKS_COACHMARK,
                { available: g } = (0, x.Z)(e),
                m = (0, l.e7)([c.Z], () => {
                    var t, n;
                    return (
                        null !=
                            (n =
                                null == (t = c.Z.getGuild(e))
                                    ? void 0
                                    : t.features.has(S.GuildFeatures.GAME_SERVERS)) && n
                    );
                }),
                v = (0, l.e7)([f.Z], () => f.Z.getLowestGameCostForGuild(e)),
                C = (function (e, t) {
                    let n = (0, y.qI)(e, "GuildPowerupsChannelRow"),
                        a = (0, p.BU)(e, "GuildPowerupsChannelRow"),
                        o = (0, l.e7)([c.Z], () => {
                            var t;
                            return null == (t = c.Z.getGuild(e))
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
                            let o = (0, d.Jh)(e);
                            if (null != o && null != l && o < l && !a) return E.Du.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t, a, o]);
                })(e, t),
                [_, I] = (0, O.Se)(null != t && !h, C),
                P = _ === a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                Z = r.useMemo(() => {
                    if (null == t || h || P) return;
                    let n = (function (e, t) {
                        let n = d.Oe.find((e) => {
                            let n = E.Cp[e],
                                r = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != r && r.user_id !== E.Fq;
                        });
                        if (null == n) return;
                        let r = E.Q1[n];
                        if (null == r || (0, s.OY)(r, e)) return;
                        let i = E.Cp[n],
                            l = null != i ? t.allPowerups[i] : void 0;
                        if (null != l)
                            return {
                                type: b.Jk.LEVEL_REACHED,
                                powerup: l,
                                markAsDismissed: (t) => {
                                    (0, s.Qd)(r, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let r = (function (e, t, n) {
                        var r, i;
                        let l = null != (i = null == (r = c.Z.getGuild(e)) ? void 0 : r.premiumTier) ? i : S.Eu4.NONE,
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
                                                  (0, j.e)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : i;
                                          }),
                                )
                                .filter(u.lm);
                        if (0 !== o.length) {
                            if (1 === o.length && !(0, s.OY)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: b.Jk.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, s.Qd)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (o.length > 1 && !(0, s.OY)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: b.Jk.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, s.Qd)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, g);
                    if (null != r) return r;
                    let i = (function (e, t, n, r) {
                        if (
                            (0, p.v$)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != r &&
                            n >= r &&
                            !(0, s.OY)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: b.Jk.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, s.Qd)(a.C.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, m, g, v);
                    if (null != i) return i;
                }, [e, t, h, P, g, m, v]),
                [N, T] = (0, O.X$)(null != Z);
            return r.useMemo(() => {
                if (null != t) {
                    if (h)
                        return {
                            type: b.Jk.PERKS_AVAILABLE,
                            markAsDismissed: o,
                        };
                    if (P) {
                        if (C === E.Du.GAME_SERVER_HOSTING)
                            return {
                                type: b.Jk.GAME_SERVER_HOSTING_AVAILABLE,
                                markAsDismissed: I,
                            };
                        let e = E.os[C],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return {
                            powerups: n,
                            type: b.Jk.NEW_PERK_AVAILABLE,
                            markAsDismissed: I,
                        };
                    }
                    if (N === a.z.GUILD_POWERUP_NOTIFICATION && null != Z) {
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
                            })({}, Z)),
                            (n = n =
                                {
                                    markAsDismissed: (e) => {
                                        T(e), Z.markAsDismissed(e);
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
            }, [t, h, o, Z, N, T, P, I, C]);
        })(e, null != n ? n : void 0);
    if (null !== n && (null != h || _ || null != I))
        return {
            indicator: h,
            showUnread: _,
            popout: I,
        };
}
function P(e) {
    let t = (0, l.e7)([m.Z], () => m.Z.getStateForGuild(e)),
        n = I(e);
    r.useEffect(() => {
        (0, h.jd)(e);
    }, [e]),
        r.useEffect(() => {
            var e;
            null == n || null == (e = n.popout) || e.markAsDismissed(_.L.AUTO_DISMISS);
        }, [n]),
        r.useEffect(() => {
            null != t &&
                d.Oe.forEach((n) => {
                    let r = E.Cp[n];
                    if (null == r || null == t.unlockedPowerups[r]) return;
                    let i = E.Q1[n];
                    null != i && (0, s.Qd)(i, e, !1, _.L.AUTO_DISMISS);
                });
        }, [e, t]);
}
