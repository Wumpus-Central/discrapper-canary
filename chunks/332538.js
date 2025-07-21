(n.d(t, {
    Wj: () => x,
    ZP: () => E
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(399606),
    o = n(704215),
    s = n(481060),
    a = n(377171),
    c = n(243778),
    u = n(645041),
    d = n(430824),
    h = n(823379),
    p = n(267642),
    f = n(713081),
    g = n(608949),
    m = n(905128),
    b = n(326660),
    _ = n(158638),
    O = n(317169),
    y = n(19394),
    v = n(535396),
    C = n(981631),
    j = n(921944);
function E(e) {
    let t = (0, l.e7)([g.Z], () => g.Z.getNotificationStateForGuild(e), [e]),
        n = (0, l.e7)([m.Z], () => m.Z.getStateForGuild(e)),
        { trailing: f, showUnread: j } = (function (e, t, n) {
            let l = (0, O.Z)(e).available;
            return i.useMemo(() => {
                var e, i, o;
                if (null == t)
                    return {
                        trailing: void 0,
                        showUnread: !1
                    };
                let { unlockedPowerups: c } = t,
                    u = (0, y.h)(c),
                    d = null != (i = null == n ? void 0 : n.lastSeenWarningNotification) ? i : Date.now(),
                    h = new Date(null == (e = u[u.length - 1]) ? void 0 : e.ends_at).getTime(),
                    p = null != (o = null == n ? void 0 : n.lastBoostCount) ? o : 0;
                return u.length > 0 && d < h
                    ? {
                          trailing: (0, r.jsx)(s.P4T, {
                              color: s.TVs.colors.STATUS_WARNING,
                              size: 'sm'
                          }),
                          showUnread: !0
                      }
                    : l !== p && l - p > 0
                      ? {
                            trailing: (0, r.jsx)(s.mAB, {
                                count: l - p,
                                color: a.Z.BACKGROUND_ACCENT
                            }),
                            showUnread: !0
                        }
                      : {
                            trailing: void 0,
                            showUnread: !1
                        };
            }, [l, null == n ? void 0 : n.lastBoostCount, null == n ? void 0 : n.lastSeenWarningNotification, t]);
        })(e, n, t),
        E = (function (e, t) {
            let [n, r] = (0, c.US)(null != t ? [o.z.GUILD_POWERUP_PERKS_COACHMARK] : []),
                l = n === o.z.GUILD_POWERUP_PERKS_COACHMARK,
                { available: s } = (0, O.Z)(e),
                a = (function (e, t) {
                    let n = (0, _.qI)(e, 'GuildPowerupsChannelRow');
                    return i.useMemo(() => {
                        if (n) {
                            var r;
                            let n = v.O5[v.Du.VANITY_URL],
                                i = v.Rx[n];
                            if (null == i) return v.Du.VANITY_URL;
                            let l = (0, p.Jh)(e),
                                o = (null == t || null == (r = t.unlockedPowerups) ? void 0 : r[n]) != null;
                            if (null != l && l < i && !o) return v.Du.VANITY_URL;
                        }
                        return 0;
                    }, [n, e, t]);
                })(e, t),
                [f, g] = (0, c.XR)(null != t && !l && a > 0 ? o.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, a),
                m = f === o.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                y = i.useMemo(() => {
                    if (null == t || l || m) return;
                    let n = (function (e, t) {
                        let n = p.Oe.find((e) => {
                            let n = v.Cp[e],
                                r = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != r && r.user_id !== v.Fq;
                        });
                        if (null == n) return;
                        let r = v.Q1[n];
                        if (null == r || (0, u.OY)(r, e)) return;
                        let i = v.Cp[n],
                            l = null != i ? t.allPowerups[i] : void 0;
                        if (null != l)
                            return {
                                type: b.J.LEVEL_REACHED,
                                powerup: l,
                                markAsDismissed: (t) => {
                                    (0, u.Qd)(r, e, !0, t);
                                }
                            };
                    })(e, t);
                    if (null != n) return n;
                    let r = (function (e, t, n) {
                        var r, i;
                        let l = null != (i = null == (r = d.Z.getGuild(e)) ? void 0 : r.premiumTier) ? i : C.Eu4.NONE,
                            s = Array.from(v.KW.values())
                                .map((e) => {
                                    if (null != t.unlockedPowerups[e]) return;
                                    let r = t.allPowerups[e];
                                    if (null == r || n < r.cost) return;
                                    let i = v.Rx[e];
                                    if (null == i || !(l >= i)) return t.allPowerups[e];
                                })
                                .filter(h.lm);
                        if (0 !== s.length) {
                            if (1 === s.length && !(0, u.OY)(o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: b.J.PERKS_PURCHASABLE,
                                    powerups: s,
                                    markAsDismissed: (t) => {
                                        (0, u.Qd)(o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    }
                                };
                            if (s.length > 1 && !(0, u.OY)(o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: b.J.PERKS_PURCHASABLE,
                                    powerups: s,
                                    markAsDismissed: (t) => {
                                        (0, u.Qd)(o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    }
                                };
                        }
                    })(e, t, s);
                    if (null != r) return r;
                }, [e, t, l, m, s]),
                [j, E] = (0, c.bf)(null != y ? o.z.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: b.d });
            return i.useMemo(() => {
                if (null != t) {
                    if (l)
                        return {
                            type: b.J.PERKS_AVAILABLE,
                            markAsDismissed: r
                        };
                    if (m) {
                        let e = v.O5[a],
                            n = t.allPowerups[e];
                        if (null == n) return;
                        return {
                            powerup: n,
                            type: b.J.NEW_PERK_AVAILABLE,
                            markAsDismissed: g
                        };
                    }
                    if (j === o.z.GUILD_POWERUP_NOTIFICATION && null != y) {
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
                            })({}, y)),
                            (n = n =
                                {
                                    markAsDismissed: (e) => {
                                        (E(e), y.markAsDismissed(e));
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
            }, [t, l, r, y, j, E, m, g, a]);
        })(e, n);
    if (null !== n && (null != f || j || null != E))
        return {
            trailing: f,
            showUnread: j,
            popout: E
        };
}
function x(e) {
    let t = (0, l.e7)([m.Z], () => m.Z.getStateForGuild(e)),
        n = E(e);
    (i.useEffect(() => {
        (0, f.jd)(e);
    }, [e]),
        i.useEffect(() => {
            var e;
            null == n || null == (e = n.popout) || e.markAsDismissed(j.L.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                p.Oe.forEach((n) => {
                    let r = v.Cp[n];
                    if (null == r || null == t.unlockedPowerups[r]) return;
                    let i = v.Q1[n];
                    null != i && (0, u.Qd)(i, e, !1, j.L.AUTO_DISMISS);
                });
        }, [e, t]));
}
