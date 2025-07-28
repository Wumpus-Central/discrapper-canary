(n.d(t, {
    Wj: () => P,
    ZP: () => I
}),
    n(539854),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(399606),
    o = n(704215),
    a = n(481060),
    s = n(377171),
    c = n(706140),
    u = n(243778),
    d = n(645041),
    h = n(430824),
    p = n(823379),
    f = n(267642),
    g = n(713081),
    m = n(608949),
    b = n(905128),
    _ = n(326660),
    O = n(158638),
    y = n(10765),
    C = n(317169),
    v = n(19394),
    j = n(385902),
    E = n(535396),
    S = n(981631),
    x = n(921944);
function I(e) {
    let t = (0, l.e7)([m.Z], () => m.Z.getNotificationStateForGuild(e), [e]),
        n = (0, l.e7)([b.Z], () => b.Z.getStateForGuild(e)),
        { trailing: g, showUnread: x } = (function (e, t, n) {
            let l = (0, C.Z)(e).available,
                { shouldShow: u } = (0, j._)(e, 'useGuildPowerupsChannelListIndicators'),
                d = [];
            u && d.push(o.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
            let [h] = (0, c.zH)(d, e);
            return i.useMemo(() => {
                var e, i, o;
                if (null == t)
                    return {
                        trailing: void 0,
                        showUnread: !1
                    };
                let { unlockedPowerups: c } = t,
                    u = (0, v.h)(c),
                    d = null != (i = null == n ? void 0 : n.lastSeenWarningNotification) ? i : Date.now(),
                    p = new Date(null == (e = u[u.length - 1]) ? void 0 : e.ends_at).getTime(),
                    f = null != (o = null == n ? void 0 : n.lastBoostCount) ? o : 0;
                return (u.length > 0 && d < p) || null != h
                    ? {
                          trailing: (0, r.jsx)(a.Mgn, {
                              color: a.TVs.colors.STATUS_WARNING,
                              size: 'sm'
                          }),
                          showUnread: !0
                      }
                    : l !== f && l - f > 0
                      ? {
                            trailing: (0, r.jsx)(a.mAB, {
                                count: l - f,
                                color: s.Z.BACKGROUND_ACCENT
                            }),
                            showUnread: !0
                        }
                      : {
                            trailing: void 0,
                            showUnread: !1
                        };
            }, [l, null == n ? void 0 : n.lastBoostCount, null == n ? void 0 : n.lastSeenWarningNotification, t, h]);
        })(e, n, t),
        I = (function (e, t) {
            let [n, r] = (0, u.US)(null != t ? [o.z.GUILD_POWERUP_PERKS_COACHMARK] : []),
                l = n === o.z.GUILD_POWERUP_PERKS_COACHMARK,
                { available: a } = (0, C.Z)(e),
                s = (function (e, t) {
                    let n = (0, O.qI)(e, 'GuildPowerupsChannelRow');
                    return i.useMemo(() => {
                        if (n) {
                            var r;
                            let n = E.O5[E.Du.VANITY_URL],
                                i = E.Rx[n];
                            if (null == i) return E.Du.VANITY_URL;
                            let l = (0, f.Jh)(e),
                                o = (null == t || null == (r = t.unlockedPowerups) ? void 0 : r[n]) != null;
                            if (null != l && l < i && !o) return E.Du.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t]);
                })(e, t),
                [c, g] = (0, u.XR)(null != t && !l && s > 0 ? o.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, s),
                m = c === o.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                b = i.useMemo(() => {
                    if (null == t || l || m) return;
                    let n = (function (e, t) {
                        let n = f.Oe.find((e) => {
                            let n = E.Cp[e],
                                r = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != r && r.user_id !== E.Fq;
                        });
                        if (null == n) return;
                        let r = E.Q1[n];
                        if (null == r || (0, d.OY)(r, e)) return;
                        let i = E.Cp[n],
                            l = null != i ? t.allPowerups[i] : void 0;
                        if (null != l)
                            return {
                                type: _.J.LEVEL_REACHED,
                                powerup: l,
                                markAsDismissed: (t) => {
                                    (0, d.Qd)(r, e, !0, t);
                                }
                            };
                    })(e, t);
                    if (null != n) return n;
                    let r = (function (e, t, n) {
                        var r, i;
                        let l = null != (i = null == (r = h.Z.getGuild(e)) ? void 0 : r.premiumTier) ? i : S.Eu4.NONE,
                            a = Array.from(E.KW.values())
                                .map((r) => {
                                    if (null != t.unlockedPowerups[r]) return;
                                    let i = t.allPowerups[r];
                                    if (null == i || n < i.cost || (0, y.e)(e, i, 'maybeGetPerkPurchaseablePopoutDCF')) return;
                                    let o = E.Rx[r];
                                    if (null == o || !(l >= o)) return t.allPowerups[r];
                                })
                                .filter(p.lm);
                        if (0 !== a.length) {
                            if (1 === a.length && !(0, d.OY)(o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: _.J.PERKS_PURCHASABLE,
                                    powerups: a,
                                    markAsDismissed: (t) => {
                                        (0, d.Qd)(o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    }
                                };
                            if (a.length > 1 && !(0, d.OY)(o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: _.J.PERKS_PURCHASABLE,
                                    powerups: a,
                                    markAsDismissed: (t) => {
                                        (0, d.Qd)(o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    }
                                };
                        }
                    })(e, t, a);
                    if (null != r) return r;
                }, [e, t, l, m, a]),
                [v, j] = (0, u.bf)(null != b ? o.z.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: _.d });
            return i.useMemo(() => {
                if (null != t) {
                    if (l)
                        return {
                            type: _.J.PERKS_AVAILABLE,
                            markAsDismissed: r
                        };
                    if (m) {
                        let e = E.O5[s],
                            n = t.allPowerups[e];
                        if (null == n) return;
                        return {
                            powerup: n,
                            type: _.J.NEW_PERK_AVAILABLE,
                            markAsDismissed: g
                        };
                    }
                    if (v === o.z.GUILD_POWERUP_NOTIFICATION && null != b) {
                        var e, n;
                        return (
                            (e = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })({}, b)),
                            (n = n =
                                {
                                    markAsDismissed: (e) => {
                                        (j(e), b.markAsDismissed(e));
                                    }
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
            }, [t, l, r, b, v, j, m, g, s]);
        })(e, n);
    if (null !== n && (null != g || x || null != I))
        return {
            trailing: g,
            showUnread: x,
            popout: I
        };
}
function P(e) {
    let t = (0, l.e7)([b.Z], () => b.Z.getStateForGuild(e)),
        n = I(e);
    (i.useEffect(() => {
        (0, g.jd)(e);
    }, [e]),
        i.useEffect(() => {
            var e;
            null == n || null == (e = n.popout) || e.markAsDismissed(x.L.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                f.Oe.forEach((n) => {
                    let r = E.Cp[n];
                    if (null == r || null == t.unlockedPowerups[r]) return;
                    let i = E.Q1[n];
                    null != i && (0, d.Qd)(i, e, !1, x.L.AUTO_DISMISS);
                });
        }, [e, t]));
}
