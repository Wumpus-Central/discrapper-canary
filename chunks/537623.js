(n.d(t, { default: () => x }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(755721),
    s = n(481060),
    c = n(367907),
    u = n(369994),
    d = n(177862),
    _ = n(981631),
    p = n(388032),
    f = n(71250);
function x(e) {
    let { guildId: t, messageId: a, transitionState: x, onClose: b } = e,
        [h, O] = i.useState([]),
        [y, m] = i.useState(),
        j = i.useCallback(() => {
            let e = {
                raid_alert_type: d.wR.JOIN_RAID,
                raid_alert_id: a,
                false_alarm_type: h.map((e) => e.toString()),
                false_alarm_other_reason: y,
                guild_id: t
            };
            ((0, c.yw)(_.rMx.GUILD_RAID_FEEDBACK, e),
                (0, u.Fi)(t, a, (0, d.J$)(h)),
                b(),
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('37564').then(n.bind(n, 969214));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
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
                            })({}, t)
                        );
                }));
        }, [b, a, t, y, h]),
        g = [
            {
                text: p.intl.string(p.t.yeaXw8),
                value: d.$l.LEGITIMATE_ACTIVITY
            },
            {
                text: p.intl.string(p.t['o++3Bw']),
                value: d.$l.DM_SPAM
            },
            {
                text: p.intl.string(p.t.UfHAwc),
                value: d.$l.JOIN_RAID
            },
            {
                text: p.intl.string(p.t.K3UWeX),
                value: d.$l.OTHER
            }
        ];
    function I(e) {
        h.includes(e) ? O((t) => t.filter((t) => t !== e)) : O((t) => [...t, e]);
    }
    return (0, r.jsxs)(s.Y0X, {
        transitionState: x,
        size: s.CgR.SMALL,
        parentComponent: 'AutomodRaidResolveModal',
        children: [
            (0, r.jsx)(s.xBx, {
                separator: !1,
                className: f.center,
                children: (0, r.jsx)(s.X6q, {
                    color: 'header-primary',
                    variant: 'heading-xl/bold',
                    children: p.intl.string(p.t['1zmw/P'])
                })
            }),
            (0, r.jsxs)(s.hzk, {
                className: f.center,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: f.textCenter,
                        children: p.intl.string(p.t.nF79oK)
                    }),
                    (0, r.jsx)('div', {
                        className: f.options,
                        children: g.map((e) => {
                            let { text: t, value: n } = e;
                            return (0, r.jsxs)(
                                'div',
                                {
                                    className: l()(f.optionContainer, { [f.optionContainerOther]: n === d.$l.OTHER }),
                                    children: [
                                        (0, r.jsxs)(s.P3F, {
                                            className: f.optionText,
                                            onClick: () => I(n),
                                            children: [
                                                (0, r.jsx)('div', {
                                                    children: (0, r.jsx)(s.XZJ, {
                                                        type: s.XZJ.Types.INVERTED,
                                                        size: 20,
                                                        value: h.includes(n),
                                                        onChange: () => I(n)
                                                    })
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-md/semibold',
                                                    color: 'header-primary',
                                                    children: t
                                                })
                                            ]
                                        }),
                                        n === d.$l.OTHER &&
                                            h.includes(d.$l.OTHER) &&
                                            (0, r.jsx)('div', {
                                                className: f.textboxContainer,
                                                children: (0, r.jsx)(o.iS, {
                                                    className: f.falseAlarmReasonText,
                                                    placeholder: p.intl.string(p.t['PAM+JS']),
                                                    onChange: (e) => m(e),
                                                    value: y,
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
            (0, r.jsxs)(s.mzw, {
                className: f.__invalid_modalFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: f.button,
                        children: (0, r.jsx)(s.zxk, {
                            variant: 'primary',
                            text: p.intl.string(p.t.Gh3A0N),
                            onClick: j
                        })
                    }),
                    (0, r.jsx)(s.zxk, {
                        variant: 'secondary',
                        text: p.intl.string(p.t['ETE/oK']),
                        onClick: b
                    })
                ]
            })
        ]
    });
}
