n.d(t, { ZP: () => v }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(399606),
    o = n(704215),
    a = n(481060),
    s = n(377171),
    c = n(706140),
    u = n(645041),
    d = n(430824),
    p = n(823379),
    h = n(267642),
    f = n(608949),
    g = n(905128),
    m = n(326660),
    b = n(317169),
    _ = n(19394),
    y = n(535396);
function v(e) {
    let t = (0, l.e7)([f.Z], () => f.Z.getNotificationStateForGuild(e), [e]),
        n = (0, l.e7)([g.Z], () => g.Z.getStateForGuild(e)),
        { trailing: v, showUnread: O } = (function (e, t, n) {
            let o = (0, l.e7)([d.Z], () => {
                var t, n;
                return null != (n = null == (t = d.Z.getGuild(e)) ? void 0 : t.premiumSubscriberCount) ? n : 0;
            });
            return i.useMemo(() => {
                var e, i, l;
                if (null == t)
                    return {
                        trailing: void 0,
                        showUnread: !1
                    };
                let { unlocked: c } = t,
                    u = (0, _.h)(c),
                    d = null != (i = null == n ? void 0 : n.lastSeenWarningNotification) ? i : Date.now(),
                    p = new Date(null == (e = u[u.length - 1]) ? void 0 : e.ends_at).getTime(),
                    h = null != (l = null == n ? void 0 : n.lastBoostCount) ? l : 0;
                return u.length > 0 && d < p
                    ? {
                          trailing: (0, r.jsx)(a.P4T, {
                              color: a.TVs.colors.STATUS_WARNING,
                              size: 'sm'
                          }),
                          showUnread: !0
                      }
                    : o !== h && o - h > 0
                      ? {
                            trailing: (0, r.jsx)(a.mAB, {
                                count: o - h,
                                color: s.Z.BACKGROUND_ACCENT
                            }),
                            showUnread: !0
                        }
                      : {
                            trailing: void 0,
                            showUnread: !1
                        };
            }, [o, null == n ? void 0 : n.lastBoostCount, null == n ? void 0 : n.lastSeenWarningNotification, t]);
        })(e, n, t),
        j = (function (e, t) {
            let [n, r] = (0, c.cv)(null != t ? [o.z.GUILD_POWERUP_PERKS_COACHMARK] : []),
                { available: l } = (0, b.Z)(e),
                a = i.useMemo(() => {
                    if (null == t || n === o.z.GUILD_POWERUP_PERKS_COACHMARK) return;
                    let r = (function (e, t) {
                        let n = h.Oe.find((e) => {
                            let n = y.Cp[e],
                                r = null != n ? t.unlocked.get(n) : void 0;
                            return null != r && r.user_id !== y.Fq;
                        });
                        if (null == n) return;
                        let r = y.Q1[n];
                        if (null == r || (0, u.OY)(r, e)) return;
                        let i = y.Cp[n],
                            l = null != i ? t.powerups.get(i) : void 0;
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
                        let r = Array.from(y.KW.values())
                            .map((e) => {
                                if (null == t.unlocked.get(e)) return t.powerups.get(e);
                            })
                            .filter(p.lm);
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
                [s, d] = (0, c.Tt)(null != a ? o.z.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: m.d });
            return i.useMemo(() => {
                if (null != t) {
                    if (n === o.z.GUILD_POWERUP_PERKS_COACHMARK)
                        return {
                            type: m.J.PERKS_AVAILABLE,
                            powerups: Array.from(y.KW.values())
                                .map((e) => t.powerups.get(e))
                                .filter(p.lm),
                            markAsDismissed: r
                        };
                    if (s === o.z.GUILD_POWERUP_NOTIFICATION && null != a) {
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
                            })({}, a)),
                            (i = i =
                                {
                                    markAsDismissed: (e) => {
                                        d(e, !0), a.markAsDismissed(e);
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
            }, [t, n, r, a, s, d]);
        })(e, n);
    if (null !== n && (null != v || O || null != j))
        return {
            trailing: v,
            showUnread: O,
            popout: j
        };
}
