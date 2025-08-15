n.d(t, {
    Wj: () => w,
    ZP: () => N,
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
    m = n(713081),
    b = n(608949),
    _ = n(905128),
    O = n(326660),
    y = n(901005),
    v = n(158638),
    j = n(10765),
    C = n(317169),
    E = n(19394),
    x = n(385902),
    S = n(535396),
    I = n(981631),
    P = n(921944);
function N(e) {
    let t = (0, o.e7)([b.Z], () => b.Z.getNotificationStateForGuild(e), [e]),
        n = (0, o.e7)([_.Z], () => _.Z.getStateForGuild(e)),
        { trailing: m, showUnread: P } = (function (e, t, n) {
            let l = (0, C.Z)(e).available,
                { shouldShow: o } = (0, x._)(e, "useGuildPowerupsChannelListIndicators"),
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
                    u = (0, E.h)(a),
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
        N = (function (e, t) {
            let [n, r] = (0, d.US)(null != t ? [a.z.GUILD_POWERUP_PERKS_COACHMARK] : []),
                o = n === a.z.GUILD_POWERUP_PERKS_COACHMARK,
                { available: s } = (0, C.Z)(e),
                c = (function (e, t) {
                    let n = (0, v.qI)(e, "GuildPowerupsChannelRow"),
                        r = (0, y.i)(e, "GuildPowerupsChannelRow");
                    return i.useMemo(() => {
                        if (
                            r &&
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
                            let a = (0, g.Jh)(e);
                            if (null != a && null != r && a < r && !o) return S.Du.VANITY_URL;
                        }
                        return 0;
                    }, [n, r, e, t]);
                })(e, t),
                [u, m] = (0, d.XR)(null != t && !o && c > 0 ? a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, c),
                b = u === a.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                _ = i.useMemo(() => {
                    if (null == t || o || b) return;
                    let n = (function (e, t) {
                        let n = g.Oe.find((e) => {
                            let n = S.Cp[e],
                                r = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != r && r.user_id !== S.Fq;
                        });
                        if (null == n) return;
                        let r = S.Q1[n];
                        if (null == r || (0, p.OY)(r, e)) return;
                        let i = S.Cp[n],
                            l = null != i ? t.allPowerups[i] : void 0;
                        if (null != l)
                            return {
                                type: O.J.LEVEL_REACHED,
                                powerup: l,
                                markAsDismissed: (t) => {
                                    (0, p.Qd)(r, e, !0, t);
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
                                .filter(h.lm);
                        if (0 !== o.length) {
                            if (1 === o.length && !(0, p.OY)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: O.J.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, p.Qd)(a.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (o.length > 1 && !(0, p.OY)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: O.J.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, p.Qd)(a.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, s);
                    if (null != r) return r;
                }, [e, t, o, b, s]),
                [E, x] = (0, d.bf)(null != _ ? a.z.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: O.d });
            return i.useMemo(() => {
                if (null != t) {
                    if (o)
                        return {
                            type: O.J.PERKS_AVAILABLE,
                            markAsDismissed: r,
                        };
                    if (b) {
                        let e = S.os[c],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return {
                            powerups: n,
                            type: O.J.NEW_PERK_AVAILABLE,
                            markAsDismissed: m,
                        };
                    }
                    if (E === a.z.GUILD_POWERUP_NOTIFICATION && null != _) {
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
                            })({}, _)),
                            (n = n =
                                {
                                    markAsDismissed: (e) => {
                                        x(e), _.markAsDismissed(e);
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
            }, [t, o, r, _, E, x, b, m, c]);
        })(e, n);
    if (null !== n && (null != m || P || null != N))
        return {
            trailing: m,
            showUnread: P,
            popout: N,
        };
}
function w(e) {
    let t = (0, o.e7)([_.Z], () => _.Z.getStateForGuild(e)),
        n = N(e);
    i.useEffect(() => {
        (0, m.jd)(e);
    }, [e]),
        i.useEffect(() => {
            var e;
            null == n || null == (e = n.popout) || e.markAsDismissed(P.L.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                g.Oe.forEach((n) => {
                    let r = S.Cp[n];
                    if (null == r || null == t.unlockedPowerups[r]) return;
                    let i = S.Q1[n];
                    null != i && (0, p.Qd)(i, e, !1, P.L.AUTO_DISMISS);
                });
        }, [e, t]);
}
