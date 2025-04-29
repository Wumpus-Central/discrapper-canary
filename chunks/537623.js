n.d(t, { default: () => x }), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(367907),
    c = n(369994),
    u = n(177862),
    d = n(981631),
    _ = n(388032),
    p = n(71250);
function x(e) {
    let { guildId: t, messageId: l, transitionState: x, onClose: f } = e,
        [h, b] = o.useState([]),
        [O, y] = o.useState(),
        j = o.useCallback(() => {
            let e = {
                raid_alert_type: u.wR.JOIN_RAID,
                raid_alert_id: l,
                false_alarm_type: h.map((e) => e.toString()),
                false_alarm_other_reason: O,
                guild_id: t
            };
            (0, s.yw)(d.rMx.GUILD_RAID_FEEDBACK, e),
                (0, c.Fi)(t, l, (0, u.J$)(h)),
                f(),
                (0, a.ZDy)(async () => {
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
        }, [f, l, t, O, h]),
        g = [
            {
                text: _.intl.string(_.t.yeaXw8),
                value: u.$l.LEGITIMATE_ACTIVITY
            },
            {
                text: _.intl.string(_.t['o++3Bw']),
                value: u.$l.DM_SPAM
            },
            {
                text: _.intl.string(_.t.UfHAwc),
                value: u.$l.JOIN_RAID
            },
            {
                text: _.intl.string(_.t.K3UWeX),
                value: u.$l.OTHER
            }
        ];
    function I(e) {
        h.includes(e) ? b((t) => t.filter((t) => t !== e)) : b((t) => [...t, e]);
    }
    return (0, r.jsxs)(a.Y0X, {
        transitionState: x,
        size: a.CgR.SMALL,
        children: [
            (0, r.jsx)(a.xBx, {
                separator: !1,
                className: p.center,
                children: (0, r.jsx)(a.X6q, {
                    color: 'header-primary',
                    variant: 'heading-xl/bold',
                    children: _.intl.string(_.t['1zmw/P'])
                })
            }),
            (0, r.jsxs)(a.hzk, {
                className: p.center,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: p.textCenter,
                        children: _.intl.string(_.t.nF79oK)
                    }),
                    (0, r.jsx)('div', {
                        className: p.options,
                        children: g.map((e) => {
                            let { text: t, value: n } = e;
                            return (0, r.jsxs)(
                                'div',
                                {
                                    className: i()(p.optionContainer, { [p.optionContainerOther]: n === u.$l.OTHER }),
                                    children: [
                                        (0, r.jsxs)(a.P3F, {
                                            className: p.optionText,
                                            onClick: () => I(n),
                                            children: [
                                                (0, r.jsx)('div', {
                                                    children: (0, r.jsx)(a.XZJ, {
                                                        type: a.XZJ.Types.INVERTED,
                                                        size: 20,
                                                        value: h.includes(n),
                                                        onChange: () => I(n)
                                                    })
                                                }),
                                                (0, r.jsx)(a.Text, {
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
                                                children: (0, r.jsx)(a.Kx8, {
                                                    className: p.falseAlarmReasonText,
                                                    placeholder: _.intl.string(_.t['PAM+JS']),
                                                    onChange: (e) => y(e),
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
            (0, r.jsxs)(a.mzw, {
                className: p.__invalid_modalFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: p.button,
                        children: (0, r.jsx)(a.zxk, {
                            onClick: j,
                            color: a.zxk.Colors.BRAND,
                            look: a.zxk.Looks.FILLED,
                            children: _.intl.string(_.t.Gh3A0N)
                        })
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: f,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.LINK,
                        children: _.intl.string(_.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
