n.d(t, { default: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(831209),
    o = n(442837),
    a = n(481060),
    l = n(688465),
    c = n(430824),
    d = n(626135),
    x = n(369994),
    u = n(162157),
    h = n(533244),
    p = n(487419),
    j = n(821312),
    m = n(676770),
    N = n(981631),
    _ = n(388032),
    C = n(613915);
function g(e) {
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
function v(e, t) {
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
function b(e) {
    let { guildId: t, transitionState: n, onClose: b, analyticsData: f } = e,
        k = (0, o.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        T = !!(null == k ? void 0 : k.hasFeature(N.oNc.INVITES_DISABLED)),
        [O] = i.useState(!1),
        [y, E] = i.useState(m.Fl),
        S = (0, o.e7)([p.Z], () => p.Z.getGuildIncident(t)),
        I = (0, u.BT)(k),
        w = (0, h.SG)(S) || T,
        A = (0, h.sN)(S),
        [P, z] = i.useState(w),
        [D, R] = i.useState(A),
        [W, M] = i.useState(!1),
        L = P !== w || D !== A || W,
        Z = T && !I;
    if (null == k) return b(), null;
    function G() {
        z((e) => !e);
    }
    return (0, r.jsxs)(a.Y0X, {
        transitionState: n,
        size: a.CgR.MEDIUM,
        children: [
            (0, r.jsx)(a.xBx, {
                separator: !0,
                children: (0, r.jsxs)('div', {
                    className: C.headerContainer,
                    children: [
                        (0, r.jsx)(a.mBM, {
                            size: 'xs',
                            color: s.Z.INTERACTIVE_NORMAL
                        }),
                        (0, r.jsx)(a.X6q, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: _.NW.string(_.t.oCYAc3)
                        }),
                        (0, r.jsx)(l.Z, {})
                    ]
                })
            }),
            (0, r.jsx)(a.hzk, {
                children: (0, r.jsxs)('div', {
                    className: C.mainContainer,
                    children: [
                        (0, r.jsx)(a.PhF, {
                            placeholder: _.NW.string(_.t.vKYZzc),
                            options: (0, m.c1)(),
                            select: (e) => {
                                E(e), M(!0);
                            },
                            isSelected: (e) => e === y,
                            serialize: (e) => String(e)
                        }),
                        (0, r.jsxs)('div', {
                            className: C.pauseContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: C.pauseText,
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: _.NW.string(_.t.Uwsjn5)
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: _.NW.string(_.t.qPJkZm)
                                        })
                                    ]
                                }),
                                (0, r.jsx)(a.ua7, {
                                    text: _.NW.string(_.t['9GPbsb']),
                                    shouldShow: T,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            'div',
                                            v(g({}, e), {
                                                children: (0, r.jsx)(a.rsf, {
                                                    className: C.toggle,
                                                    onChange: G,
                                                    checked: P,
                                                    disabled: Z
                                                })
                                            })
                                        )
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: C.pauseContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: C.pauseText,
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: _.NW.string(_.t.wrDmAw)
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: _.NW.string(_.t.UQbJW1)
                                        })
                                    ]
                                }),
                                (0, r.jsx)(a.rsf, {
                                    className: C.toggle,
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
                            (w || A) && !P && !D ? ((0, x.n)(k.id, !1, !1), (0, a.ZDy)(() => Promise.resolve((e) => (0, r.jsx)(j.Z, v(g({}, e), { guildId: t }))))) : (0, x.n)(k.id, P, D, y);
                            let { source: e, alertType: n, messageId: i } = f;
                            d.default.track(N.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                guild_id: t,
                                source: e,
                                raid_alert_id: i,
                                raid_alert_type: n,
                                intervention_type_enabled: (0, h.sO)(P, D),
                                intervention_type_disabled: (0, h.lk)(P, D),
                                duration: 60 * y
                            }),
                                b();
                        },
                        color: a.zxk.Colors.BRAND,
                        look: a.zxk.Looks.FILLED,
                        submitting: O,
                        disabled: !L,
                        children: _.NW.string(_.t['pwm/z8'])
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: b,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.LINK,
                        disabled: O,
                        children: _.NW.string(_.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
