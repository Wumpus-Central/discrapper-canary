n.d(t, {
    Wj: () => C,
    ZP: () => O
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(399606),
    o = n(704215),
    s = n(481060),
    a = n(377171),
    c = n(706140),
    u = n(645041),
    d = n(823379),
    h = n(267642),
    p = n(713081),
    f = n(608949),
    g = n(905128),
    m = n(326660),
    b = n(317169),
    y = n(19394),
    _ = n(535396),
    v = n(921944);
function O(e) {
    let t = (0, l.e7)([f.Z], () => f.Z.getNotificationStateForGuild(e), [e]),
        n = (0, l.e7)([g.Z], () => g.Z.getStateForGuild(e)),
        { trailing: p, showUnread: v } = (function (e, t, n) {
            let l = (0, b.Z)(e).available;
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
        O = (function (e, t) {
            let [n, r] = (0, c.cv)(null != t ? [o.z.GUILD_POWERUP_PERKS_COACHMARK] : []),
                { available: l } = (0, b.Z)(e),
                s = i.useMemo(() => {
                    if (null == t || n === o.z.GUILD_POWERUP_PERKS_COACHMARK) return;
                    let r = (function (e, t) {
                        let n = h.Oe.find((e) => {
                            let n = _.Cp[e],
                                r = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != r && r.user_id !== _.Fq;
                        });
                        if (null == n) return;
                        let r = _.Q1[n];
                        if (null == r || (0, u.OY)(r, e)) return;
                        let i = _.Cp[n],
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
                        let r = Array.from(_.KW.values())
                            .map((e) => {
                                if (null == t.unlockedPowerups[e]) return t.allPowerups[e];
                            })
                            .filter(d.lm);
                        if (0 !== r.length) {
                            if (1 === r.length && n >= r[0].cost && !(0, u.OY)(o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: m.J.PERKS_PURCHASABLE,
                                    powerups: r,
                                    markAsDismissed: (t) => {
                                        (0, u.Qd)(o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    }
                                };
                            if (r.length > 1) {
                                let t = null != r.find((e) => n >= e.cost),
                                    i = n >= r.reduce((e, t) => e + t.cost, 0),
                                    l = t && !(0, u.OY)(o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e) ? o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK : i && !(0, u.OY)(o.C.GUILD_POWERUP_BOTH_SKU_PURCHASE_COACHMARK, e) ? o.C.GUILD_POWERUP_BOTH_SKU_PURCHASE_COACHMARK : void 0;
                                if (null == l) return;
                                return {
                                    type: m.J.PERKS_PURCHASABLE,
                                    powerups: r,
                                    markAsDismissed: (t) => {
                                        (0, u.Qd)(l, e, !0, t);
                                    }
                                };
                            }
                        }
                    })(e, t, l);
                    if (null != i) return i;
                }, [e, t, n, l]),
                [a, p] = (0, c.Tt)(null != s ? o.z.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: m.d });
            return i.useMemo(() => {
                if (null != t) {
                    if (n === o.z.GUILD_POWERUP_PERKS_COACHMARK)
                        return {
                            type: m.J.PERKS_AVAILABLE,
                            markAsDismissed: r
                        };
                    if (a === o.z.GUILD_POWERUP_NOTIFICATION && null != s) {
                        var e, i;
                        return (
                            (e = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, s)),
                            (i = i =
                                {
                                    markAsDismissed: (e) => {
                                        p(e, !0), s.markAsDismissed(e);
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
            }, [t, n, r, s, a, p]);
        })(e, n);
    if (null !== n && (null != p || v || null != O))
        return {
            trailing: p,
            showUnread: v,
            popout: O
        };
}
function C(e) {
    let t = (0, l.e7)([g.Z], () => g.Z.getStateForGuild(e)),
        n = O(e);
    i.useEffect(() => {
        var t;
        (0, p.jd)(e), null == n || null == (t = n.popout) || t.markAsDismissed(v.L.AUTO_DISMISS);
    }, [e, n]),
        i.useEffect(() => {
            null != t &&
                h.Oe.forEach((n) => {
                    let r = _.Cp[n];
                    if (null == r || null == t.unlockedPowerups[r]) return;
                    let i = _.Q1[n];
                    null != i && (0, u.Qd)(i, e, !1, v.L.AUTO_DISMISS);
                });
        }, [e, t]);
}
