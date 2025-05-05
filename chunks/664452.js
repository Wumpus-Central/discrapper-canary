n.d(t, { default: () => v }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(831209),
    o = n(442837),
    a = n(481060),
    s = n(688465),
    c = n(430824),
    d = n(626135),
    u = n(369994),
    p = n(162157),
    m = n(533244),
    b = n(487419),
    g = n(821312),
    f = n(676770),
    h = n(981631),
    x = n(388032),
    j = n(613915);
function O(e) {
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
}
function y(e, t) {
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
    let { guildId: t, transitionState: n, onClose: v, analyticsData: _ } = e,
        C = (0, o.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        N = !!(null == C ? void 0 : C.hasFeature(h.oNc.INVITES_DISABLED)),
        [I] = i.useState(!1),
        [S, E] = i.useState(f.Fl),
        P = (0, o.e7)([b.Z], () => b.Z.getGuildIncident(t)),
        w = (0, p.BT)(C),
        T = (0, m.SG)(P) || N,
        Z = (0, m.sN)(P),
        [k, A] = i.useState(T),
        [D, R] = i.useState(Z),
        [L, M] = i.useState(!1),
        B = k !== T || D !== Z || L,
        U = N && !w;
    if (null == C) return v(), null;
    function W() {
        A((e) => !e);
    }
    return (0, r.jsxs)(a.Y0X, {
        transitionState: n,
        size: a.CgR.MEDIUM,
        children: [
            (0, r.jsx)(a.xBx, {
                separator: !0,
                children: (0, r.jsxs)('div', {
                    className: j.headerContainer,
                    children: [
                        (0, r.jsx)(a.mBM, {
                            size: 'xs',
                            color: l.Z.INTERACTIVE_NORMAL
                        }),
                        (0, r.jsx)(a.X6q, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: x.intl.string(x.t.oCYAc3)
                        }),
                        (0, r.jsx)(s.Z, {})
                    ]
                })
            }),
            (0, r.jsx)(a.hzk, {
                children: (0, r.jsxs)('div', {
                    className: j.mainContainer,
                    children: [
                        (0, r.jsx)(a.PhF, {
                            placeholder: x.intl.string(x.t.vKYZzc),
                            options: (0, f.c1)(),
                            select: (e) => {
                                E(e), M(!0);
                            },
                            isSelected: (e) => e === S,
                            serialize: (e) => String(e)
                        }),
                        (0, r.jsxs)('div', {
                            className: j.pauseContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: j.pauseText,
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: x.intl.string(x.t.Uwsjn5)
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: x.intl.string(x.t.qPJkZm)
                                        })
                                    ]
                                }),
                                (0, r.jsx)(a.ua7, {
                                    text: x.intl.string(x.t['9GPbsb']),
                                    shouldShow: N,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            'div',
                                            y(O({}, e), {
                                                children: (0, r.jsx)(a.rsf, {
                                                    className: j.toggle,
                                                    onChange: W,
                                                    checked: k,
                                                    disabled: U
                                                })
                                            })
                                        )
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: j.pauseContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: j.pauseText,
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: x.intl.string(x.t.wrDmAw)
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: x.intl.string(x.t.UQbJW1)
                                        })
                                    ]
                                }),
                                (0, r.jsx)(a.rsf, {
                                    className: j.toggle,
                                    onChange: function () {
                                        R((e) => !e);
                                    },
                                    checked: D
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, r.jsxs)(a.mzw, {
                children: [
                    (0, r.jsx)(a.zxk, {
                        onClick: () => {
                            (T || Z) && !k && !D ? ((0, u.n)(C.id, !1, !1), (0, a.ZDy)(() => Promise.resolve((e) => (0, r.jsx)(g.Z, y(O({}, e), { guildId: t }))))) : (0, u.n)(C.id, k, D, S);
                            let { source: e, alertType: n, messageId: i } = _;
                            d.default.track(h.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                guild_id: t,
                                source: e,
                                raid_alert_id: i,
                                raid_alert_type: n,
                                intervention_type_enabled: (0, m.sO)(k, D),
                                intervention_type_disabled: (0, m.lk)(k, D),
                                duration: 60 * S
                            }),
                                v();
                        },
                        color: a.zxk.Colors.BRAND,
                        look: a.zxk.Looks.FILLED,
                        submitting: I,
                        disabled: !B,
                        children: x.intl.string(x.t['pwm/z8'])
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: v,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.LINK,
                        disabled: I,
                        children: x.intl.string(x.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
