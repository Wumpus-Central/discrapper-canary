n.d(t, { default: () => x }), n(47120);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    l = n.n(a),
    i = n(481060),
    s = n(367907),
    c = n(369994),
    u = n(177862),
    d = n(981631),
    _ = n(388032),
    p = n(71250);
function x(e) {
    let { guildId: t, messageId: a, transitionState: x, onClose: f } = e,
        [h, b] = o.useState([]),
        [O, N] = o.useState(),
        y = o.useCallback(() => {
            let e = {
                raid_alert_type: u.wR.JOIN_RAID,
                raid_alert_id: a,
                false_alarm_type: h.map((e) => e.toString()),
                false_alarm_other_reason: O,
                guild_id: t
            };
            (0, s.yw)(d.rMx.GUILD_RAID_FEEDBACK, e),
                (0, c.Fi)(t, a, (0, u.J$)(h)),
                f(),
                (0, i.ZDy)(async () => {
                    let { default: e } = await n.e('37564').then(n.bind(n, 969214));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
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
                            })({}, t)
                        );
                });
        }, [f, a, t, O, h]),
        j = [
            {
                text: _.NW.string(_.t.yeaXw8),
                value: u.$l.LEGITIMATE_ACTIVITY
            },
            {
                text: _.NW.string(_.t['o++3Bw']),
                value: u.$l.DM_SPAM
            },
            {
                text: _.NW.string(_.t.UfHAwc),
                value: u.$l.JOIN_RAID
            },
            {
                text: _.NW.string(_.t.K3UWeX),
                value: u.$l.OTHER
            }
        ];
    function g(e) {
        h.includes(e) ? b((t) => t.filter((t) => t !== e)) : b((t) => [...t, e]);
    }
    return (0, r.jsxs)(i.Y0X, {
        transitionState: x,
        size: i.CgR.SMALL,
        children: [
            (0, r.jsx)(i.xBx, {
                separator: !1,
                className: p.center,
                children: (0, r.jsx)(i.X6q, {
                    color: 'header-primary',
                    variant: 'heading-xl/bold',
                    children: _.NW.string(_.t['1zmw/P'])
                })
            }),
            (0, r.jsxs)(i.hzk, {
                className: p.center,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: p.textCenter,
                        children: _.NW.string(_.t.nF79oK)
                    }),
                    (0, r.jsx)('div', {
                        className: p.options,
                        children: j.map((e) => {
                            let { text: t, value: n } = e;
                            return (0, r.jsxs)(
                                'div',
                                {
                                    className: l()(p.optionContainer, { [p.optionContainerOther]: n === u.$l.OTHER }),
                                    children: [
                                        (0, r.jsxs)(i.P3F, {
                                            className: p.optionText,
                                            onClick: () => g(n),
                                            children: [
                                                (0, r.jsx)('div', {
                                                    children: (0, r.jsx)(i.XZJ, {
                                                        type: i.XZJ.Types.INVERTED,
                                                        size: 20,
                                                        value: h.includes(n),
                                                        onChange: () => g(n)
                                                    })
                                                }),
                                                (0, r.jsx)(i.Text, {
                                                    variant: 'text-md/semibold',
                                                    color: 'header-primary',
                                                    children: t
                                                })
                                            ]
                                        }),
                                        n === u.$l.OTHER &&
                                            h.includes(u.$l.OTHER) &&
                                            (0, r.jsx)('div', {
                                                className: p.textboxContainer,
                                                children: (0, r.jsx)(i.Kx8, {
                                                    className: p.falseAlarmReasonText,
                                                    placeholder: _.NW.string(_.t['PAM+JS']),
                                                    onChange: (e) => N(e),
                                                    value: O,
                                                    rows: 2,
                                                    autoFocus: !0,
                                                    flex: !0
                                                })
                                            })
                                    ]
                                },
                                n
                            );
                        })
                    })
                ]
            }),
            (0, r.jsxs)(i.mzw, {
                className: p.__invalid_modalFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: p.button,
                        children: (0, r.jsx)(i.zxk, {
                            onClick: y,
                            color: i.zxk.Colors.BRAND,
                            look: i.zxk.Looks.FILLED,
                            children: _.NW.string(_.t.Gh3A0N)
                        })
                    }),
                    (0, r.jsx)(i.zxk, {
                        onClick: f,
                        color: i.zxk.Colors.PRIMARY,
                        look: i.zxk.Looks.LINK,
                        children: _.NW.string(_.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
