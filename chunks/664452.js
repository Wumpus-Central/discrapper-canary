(n.d(t, { default: () => v }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(831209),
    s = n(442837),
    a = n(481060),
    o = n(688465),
    c = n(430824),
    d = n(626135),
    u = n(369994),
    x = n(162157),
    h = n(533244),
    p = n(487419),
    j = n(821312),
    b = n(676770),
    g = n(981631),
    m = n(388032),
    O = n(613915);
function f(e) {
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
function v(e) {
    let { guildId: t, transitionState: n, onClose: v, analyticsData: y } = e,
        N = (0, s.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        C = !!(null == N ? void 0 : N.features.has(g.oNc.INVITES_DISABLED)),
        [E] = i.useState(!1),
        [S, I] = i.useState(b.Fl),
        T = (0, s.e7)([p.Z], () => p.Z.getGuildIncident(t)),
        A = (0, x.BT)(N),
        D = (0, h.SG)(T) || C,
        w = (0, h.sN)(T),
        [P, R] = i.useState(D),
        [k, M] = i.useState(w),
        [L, G] = i.useState(!1),
        Z = P !== D || k !== w || L,
        z = C && !A;
    if (null == N) return (v(), null);
    function U() {
        R((e) => !e);
    }
    return (0, r.jsxs)(a.Y0X, {
        transitionState: n,
        size: a.CgR.MEDIUM,
        parentComponent: 'GuildRaidServerLockdownModal',
        children: [
            (0, r.jsx)(a.xBx, {
                separator: !0,
                children: (0, r.jsxs)('div', {
                    className: O.headerContainer,
                    children: [
                        (0, r.jsx)(a.mBM, {
                            size: 'xs',
                            color: l.Z.INTERACTIVE_NORMAL
                        }),
                        (0, r.jsx)(a.X6q, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: m.intl.string(m.t.oCYAc3)
                        }),
                        (0, r.jsx)(o.Z, {})
                    ]
                })
            }),
            (0, r.jsx)(a.hzk, {
                children: (0, r.jsxs)('div', {
                    className: O.mainContainer,
                    children: [
                        (0, r.jsx)(a.PhF, {
                            placeholder: m.intl.string(m.t.vKYZzc),
                            options: (0, b.c1)(),
                            select: (e) => {
                                (I(e), G(!0));
                            },
                            isSelected: (e) => e === S,
                            serialize: (e) => String(e)
                        }),
                        (0, r.jsxs)('div', {
                            className: O.pauseContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: O.pauseText,
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: m.intl.string(m.t.Uwsjn5)
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: m.intl.string(m.t.qPJkZm)
                                        })
                                    ]
                                }),
                                (0, r.jsx)(a.ua7, {
                                    text: m.intl.string(m.t['9GPbsb']),
                                    shouldShow: C,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            'div',
                                            _(f({}, e), {
                                                children: (0, r.jsx)(a.rsf, {
                                                    className: O.toggle,
                                                    onChange: U,
                                                    checked: P,
                                                    disabled: z
                                                })
                                            })
                                        )
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: O.pauseContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: O.pauseText,
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: m.intl.string(m.t.wrDmAw)
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: m.intl.string(m.t.UQbJW1)
                                        })
                                    ]
                                }),
                                (0, r.jsx)(a.rsf, {
                                    className: O.toggle,
                                    onChange: function () {
                                        M((e) => !e);
                                    },
                                    checked: k
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, r.jsx)(a.mzw, {
                children: (0, r.jsxs)(a.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, r.jsx)(a.zxk, {
                            variant: 'primary',
                            text: m.intl.string(m.t['pwm/z8']),
                            onClick: () => {
                                (D || w) && !P && !k ? ((0, u.n)(N.id, !1, !1), (0, a.ZDy)(() => Promise.resolve((e) => (0, r.jsx)(j.Z, _(f({}, e), { guildId: t }))))) : (0, u.n)(N.id, P, k, S);
                                let { source: e, alertType: n, messageId: i } = y;
                                (d.default.track(g.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: i,
                                    raid_alert_type: n,
                                    intervention_type_enabled: (0, h.sO)(P, k),
                                    intervention_type_disabled: (0, h.lk)(P, k),
                                    duration: 60 * S
                                }),
                                    v());
                            },
                            loading: E,
                            disabled: !Z
                        }),
                        (0, r.jsx)(a.zxk, {
                            variant: 'secondary',
                            text: m.intl.string(m.t['ETE/oK']),
                            onClick: v,
                            disabled: E
                        })
                    ]
                })
            })
        ]
    });
}
