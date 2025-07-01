(n.d(t, { default: () => C }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(831209),
    a = n(442837),
    s = n(481060),
    o = n(688465),
    c = n(430824),
    d = n(626135),
    u = n(369994),
    m = n(162157),
    x = n(533244),
    h = n(487419),
    j = n(821312),
    b = n(676770),
    f = n(981631),
    p = n(388032),
    g = n(613915);
function v(e) {
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
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    let { guildId: t, transitionState: n, onClose: C, analyticsData: T } = e,
        N = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        E = !!(null == N ? void 0 : N.hasFeature(f.oNc.INVITES_DISABLED)),
        [S] = l.useState(!1),
        [I, R] = l.useState(b.Fl),
        O = (0, a.e7)([h.Z], () => h.Z.getGuildIncident(t)),
        P = (0, m.BT)(N),
        y = (0, x.SG)(O) || E,
        w = (0, x.sN)(O),
        [A, M] = l.useState(y),
        [Z, k] = l.useState(w),
        [D, L] = l.useState(!1),
        B = A !== y || Z !== w || D,
        G = E && !P;
    if (null == N) return (C(), null);
    function z() {
        M((e) => !e);
    }
    return (0, r.jsxs)(s.Y0X, {
        transitionState: n,
        size: s.CgR.MEDIUM,
        parentComponent: 'GuildRaidServerLockdownModal',
        children: [
            (0, r.jsx)(s.xBx, {
                separator: !0,
                children: (0, r.jsxs)('div', {
                    className: g.headerContainer,
                    children: [
                        (0, r.jsx)(s.mBM, {
                            size: 'xs',
                            color: i.Z.INTERACTIVE_NORMAL
                        }),
                        (0, r.jsx)(s.X6q, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: p.intl.string(p.t.oCYAc3)
                        }),
                        (0, r.jsx)(o.Z, {})
                    ]
                })
            }),
            (0, r.jsx)(s.hzk, {
                children: (0, r.jsxs)('div', {
                    className: g.mainContainer,
                    children: [
                        (0, r.jsx)(s.PhF, {
                            placeholder: p.intl.string(p.t.vKYZzc),
                            options: (0, b.c1)(),
                            select: (e) => {
                                (R(e), L(!0));
                            },
                            isSelected: (e) => e === I,
                            serialize: (e) => String(e)
                        }),
                        (0, r.jsxs)('div', {
                            className: g.pauseContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: g.pauseText,
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: p.intl.string(p.t.Uwsjn5)
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: p.intl.string(p.t.qPJkZm)
                                        })
                                    ]
                                }),
                                (0, r.jsx)(s.ua7, {
                                    text: p.intl.string(p.t['9GPbsb']),
                                    shouldShow: E,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            'div',
                                            _(v({}, e), {
                                                children: (0, r.jsx)(s.rsf, {
                                                    className: g.toggle,
                                                    onChange: z,
                                                    checked: A,
                                                    disabled: G
                                                })
                                            })
                                        )
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: g.pauseContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: g.pauseText,
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: p.intl.string(p.t.wrDmAw)
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: p.intl.string(p.t.UQbJW1)
                                        })
                                    ]
                                }),
                                (0, r.jsx)(s.rsf, {
                                    className: g.toggle,
                                    onChange: function () {
                                        k((e) => !e);
                                    },
                                    checked: Z
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, r.jsxs)(s.mzw, {
                children: [
                    (0, r.jsx)(s.zxk, {
                        onClick: () => {
                            (y || w) && !A && !Z ? ((0, u.n)(N.id, !1, !1), (0, s.ZDy)(() => Promise.resolve((e) => (0, r.jsx)(j.Z, _(v({}, e), { guildId: t }))))) : (0, u.n)(N.id, A, Z, I);
                            let { source: e, alertType: n, messageId: l } = T;
                            (d.default.track(f.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                guild_id: t,
                                source: e,
                                raid_alert_id: l,
                                raid_alert_type: n,
                                intervention_type_enabled: (0, x.sO)(A, Z),
                                intervention_type_disabled: (0, x.lk)(A, Z),
                                duration: 60 * I
                            }),
                                C());
                        },
                        color: s.zxk.Colors.BRAND,
                        look: s.zxk.Looks.FILLED,
                        submitting: S,
                        disabled: !B,
                        children: p.intl.string(p.t['pwm/z8'])
                    }),
                    (0, r.jsx)(s.zxk, {
                        onClick: C,
                        color: s.zxk.Colors.PRIMARY,
                        look: s.zxk.Looks.LINK,
                        disabled: S,
                        children: p.intl.string(p.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
