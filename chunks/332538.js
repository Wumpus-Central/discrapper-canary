n.d(t, {
    Wj: () => w,
    ZP: () => N,
}),
    n(539854),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(494497),
    o = n(399606),
    s = n(704215),
    a = n(481060),
    c = n(377171),
    u = n(706140),
    d = n(243778),
    h = n(645041),
    p = n(430824),
    f = n(823379),
    g = n(267642),
    m = n(713081),
    b = n(608949),
    O = n(905128),
    _ = n(326660),
    y = n(901005),
    C = n(158638),
    v = n(10765),
    j = n(317169),
    E = n(19394),
    S = n(385902),
    x = n(535396),
    I = n(981631),
    P = n(921944);
function N(e) {
    let t = (0, o.e7)([b.Z], () => b.Z.getNotificationStateForGuild(e), [e]),
        n = (0, o.e7)([O.Z], () => O.Z.getStateForGuild(e)),
        { trailing: m, showUnread: P } = (function (e, t, n) {
            let l = (0, j.Z)(e).available,
                { shouldShow: o } = (0, S._)(e, "useGuildPowerupsChannelListIndicators"),
                d = [];
            o && d.push(s.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
            let [h] = (0, u.zH)(d, e);
            return i.useMemo(() => {
                var e, i, o;
                if (null == t)
                    return {
                        trailing: void 0,
                        showUnread: !1,
                    };
                let { unlockedPowerups: s } = t,
                    u = (0, E.h)(s),
                    d = null != (i = null == n ? void 0 : n.lastSeenWarningNotification) ? i : Date.now(),
                    p = new Date(null == (e = u[u.length - 1]) ? void 0 : e.ends_at).getTime(),
                    f = null != (o = null == n ? void 0 : n.lastBoostCount) ? o : 0;
                return (u.length > 0 && d < p) || null != h
                    ? {
                          trailing: (0, r.jsx)(a.Mgn, {
                              color: a.TVs.colors.STATUS_WARNING,
                              size: "sm",
                          }),
                          showUnread: !0,
                      }
                    : l !== f && l - f > 0
                      ? {
                            trailing: (0, r.jsx)(a.mAB, {
                                count: l - f,
                                color: c.Z.BACKGROUND_ACCENT,
                            }),
                            showUnread: !0,
                        }
                      : {
                            trailing: void 0,
                            showUnread: !1,
                        };
            }, [l, null == n ? void 0 : n.lastBoostCount, null == n ? void 0 : n.lastSeenWarningNotification, t, h]);
        })(e, n, t),
        N = (function (e, t) {
            let [n, r] = (0, d.US)(null != t ? [s.z.GUILD_POWERUP_PERKS_COACHMARK] : []),
                o = n === s.z.GUILD_POWERUP_PERKS_COACHMARK,
                { available: a } = (0, j.Z)(e),
                c = (function (e, t) {
                    let n = (0, C.qI)(e, "GuildPowerupsChannelRow"),
                        r = (0, y.i)(e, "GuildPowerupsChannelRow");
                    return i.useMemo(() => {
                        if (
                            r &&
                            !Array.from(x.os[x.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((e) => {
                                var n;
                                return (null == t || null == (n = t.unlockedPowerups) ? void 0 : n[e]) != null;
                            })
                        )
                            return x.Du.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                        if (n) {
                            var i;
                            let n = l.A$,
                                r = x.Rx[n],
                                o = (null == t || null == (i = t.unlockedPowerups) ? void 0 : i[n]) != null;
                            if (null == r && !o) return x.Du.VANITY_URL;
                            let s = (0, g.Jh)(e);
                            if (null != s && null != r && s < r && !o) return x.Du.VANITY_URL;
                        }
                        return 0;
                    }, [n, r, e, t]);
                })(e, t),
                [u, m] = (0, d.XR)(null != t && !o && c > 0 ? s.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, c),
                b = u === s.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                O = i.useMemo(() => {
                    if (null == t || o || b) return;
                    let n = (function (e, t) {
                        let n = g.Oe.find((e) => {
                            let n = x.Cp[e],
                                r = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != r && r.user_id !== x.Fq;
                        });
                        if (null == n) return;
                        let r = x.Q1[n];
                        if (null == r || (0, h.OY)(r, e)) return;
                        let i = x.Cp[n],
                            l = null != i ? t.allPowerups[i] : void 0;
                        if (null != l)
                            return {
                                type: _.J.LEVEL_REACHED,
                                powerup: l,
                                markAsDismissed: (t) => {
                                    (0, h.Qd)(r, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let r = (function (e, t, n) {
                        var r, i;
                        let l = null != (i = null == (r = p.Z.getGuild(e)) ? void 0 : r.premiumTier) ? i : I.Eu4.NONE,
                            o = Array.from(x.KW.values())
                                .map((r) => {
                                    if (null != t.unlockedPowerups[r]) return;
                                    let i = t.allPowerups[r];
                                    if (null == i || n < i.cost || (0, v.e)(e, i, "maybeGetPerkPurchaseablePopoutDCF"))
                                        return;
                                    let o = x.Rx[r];
                                    if (null == o || !(l >= o)) return t.allPowerups[r];
                                })
                                .filter(f.lm);
                        if (0 !== o.length) {
                            if (1 === o.length && !(0, h.OY)(s.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: _.J.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, h.Qd)(s.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (o.length > 1 && !(0, h.OY)(s.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: _.J.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, h.Qd)(s.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, a);
                    if (null != r) return r;
                }, [e, t, o, b, a]),
                [E, S] = (0, d.bf)(null != O ? s.z.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: _.d });
            return i.useMemo(() => {
                if (null != t) {
                    if (o)
                        return {
                            type: _.J.PERKS_AVAILABLE,
                            markAsDismissed: r,
                        };
                    if (b) {
                        let e = x.os[c],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return {
                            powerups: n,
                            type: _.J.NEW_PERK_AVAILABLE,
                            markAsDismissed: m,
                        };
                    }
                    if (E === s.z.GUILD_POWERUP_NOTIFICATION && null != O) {
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
                            })({}, O)),
                            (n = n =
                                {
                                    markAsDismissed: (e) => {
                                        S(e), O.markAsDismissed(e);
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
            }, [t, o, r, O, E, S, b, m, c]);
        })(e, n);
    if (null !== n && (null != m || P || null != N))
        return {
            trailing: m,
            showUnread: P,
            popout: N,
        };
}
function w(e) {
    let t = (0, o.e7)([O.Z], () => O.Z.getStateForGuild(e)),
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
                    let r = x.Cp[n];
                    if (null == r || null == t.unlockedPowerups[r]) return;
                    let i = x.Q1[n];
                    null != i && (0, h.Qd)(i, e, !1, P.L.AUTO_DISMISS);
                });
        }, [e, t]);
}
