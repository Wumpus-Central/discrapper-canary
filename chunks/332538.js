(n.d(t, {
    Wj: () => C,
    ZP: () => v
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(399606),
    o = n(704215),
    a = n(481060),
    s = n(377171),
    c = n(243778),
    u = n(645041),
    d = n(823379),
    h = n(267642),
    p = n(713081),
    f = n(608949),
    g = n(905128),
    m = n(326660),
    b = n(317169),
    _ = n(19394),
    O = n(535396),
    y = n(921944);
function v(e) {
    let t = (0, l.e7)([f.Z], () => f.Z.getNotificationStateForGuild(e), [e]),
        n = (0, l.e7)([g.Z], () => g.Z.getStateForGuild(e)),
        { trailing: p, showUnread: y } = (function (e, t, n) {
            let l = (0, b.Z)(e).available;
            return i.useMemo(() => {
                var e, i, o;
                if (null == t)
                    return {
                        trailing: void 0,
                        showUnread: !1
                    };
                let { unlockedPowerups: c } = t,
                    u = (0, _.h)(c),
                    d = null != (i = null == n ? void 0 : n.lastSeenWarningNotification) ? i : Date.now(),
                    h = new Date(null == (e = u[u.length - 1]) ? void 0 : e.ends_at).getTime(),
                    p = null != (o = null == n ? void 0 : n.lastBoostCount) ? o : 0;
                return u.length > 0 && d < h
                    ? {
                          trailing: (0, r.jsx)(a.P4T, {
                              color: a.TVs.colors.STATUS_WARNING,
                              size: 'sm'
                          }),
                          showUnread: !0
                      }
                    : l !== p && l - p > 0
                      ? {
                            trailing: (0, r.jsx)(a.mAB, {
                                count: l - p,
                                color: s.Z.BACKGROUND_ACCENT
                            }),
                            showUnread: !0
                        }
                      : {
                            trailing: void 0,
                            showUnread: !1
                        };
            }, [l, null == n ? void 0 : n.lastBoostCount, null == n ? void 0 : n.lastSeenWarningNotification, t]);
        })(e, n, t),
        v = (function (e, t) {
            let [n, r] = (0, c.US)(null != t ? [o.z.GUILD_POWERUP_PERKS_COACHMARK] : []),
                { available: l } = (0, b.Z)(e),
                a = i.useMemo(() => {
                    if (null == t || n === o.z.GUILD_POWERUP_PERKS_COACHMARK) return;
                    let r = (function (e, t) {
                        let n = h.Oe.find((e) => {
                            let n = O.Cp[e],
                                r = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != r && r.user_id !== O.Fq;
                        });
                        if (null == n) return;
                        let r = O.Q1[n];
                        if (null == r || (0, u.OY)(r, e)) return;
                        let i = O.Cp[n],
                            l = null != i ? t.allPowerups[i] : void 0;
                        if (null != l)
                            return {
                                type: m.J.LEVEL_REACHED,
                                powerup: l,
                                markAsDismissed: (t) => {
                                    (0, u.Qd)(r, e, !0, t);
                                }
                            };
                    })(e, t);
                    if (null != r) return r;
                    let i = (function (e, t, n) {
                        let r = Array.from(O.KW.values())
                            .map((e) => {
                                if (null != t.unlockedPowerups[e]) return;
                                let r = t.allPowerups[e];
                                if (null != r && !(n < r.cost)) return t.allPowerups[e];
                            })
                            .filter(d.lm);
                        if (0 !== r.length) {
                            if (1 === r.length && !(0, u.OY)(o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: m.J.PERKS_PURCHASABLE,
                                    powerups: r,
                                    markAsDismissed: (t) => {
                                        (0, u.Qd)(o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    }
                                };
                            if (r.length > 1 && !(0, u.OY)(o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: m.J.PERKS_PURCHASABLE,
                                    powerups: r,
                                    markAsDismissed: (t) => {
                                        (0, u.Qd)(o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    }
                                };
                        }
                    })(e, t, l);
                    if (null != i) return i;
                }, [e, t, n, l]),
                [s, p] = (0, c.bf)(null != a ? o.z.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: m.d });
            return i.useMemo(() => {
                if (null != t) {
                    if (n === o.z.GUILD_POWERUP_PERKS_COACHMARK)
                        return {
                            type: m.J.PERKS_AVAILABLE,
                            markAsDismissed: r
                        };
                    if (s === o.z.GUILD_POWERUP_NOTIFICATION && null != a) {
                        var e, i;
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
                            })({}, a)),
                            (i = i =
                                {
                                    markAsDismissed: (e) => {
                                        (p(e), a.markAsDismissed(e));
                                    }
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                                  }),
                            e
                        );
                    }
                }
            }, [t, n, r, a, s, p]);
        })(e, n);
    if (null !== n && (null != p || y || null != v))
        return {
            trailing: p,
            showUnread: y,
            popout: v
        };
}
function C(e) {
    let t = (0, l.e7)([g.Z], () => g.Z.getStateForGuild(e)),
        n = v(e);
    (i.useEffect(() => {
        (0, p.jd)(e);
    }, [e]),
        i.useEffect(() => {
            var e;
            null == n || null == (e = n.popout) || e.markAsDismissed(y.L.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                h.Oe.forEach((n) => {
                    let r = O.Cp[n];
                    if (null == r || null == t.unlockedPowerups[r]) return;
                    let i = O.Q1[n];
                    null != i && (0, u.Qd)(i, e, !1, y.L.AUTO_DISMISS);
                });
        }, [e, t]));
}
