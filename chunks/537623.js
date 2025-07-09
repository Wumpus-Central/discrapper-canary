(n.d(t, { default: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(367907),
    c = n(369994),
    u = n(177862),
    d = n(981631),
    _ = n(388032),
    p = n(71250);
function f(e) {
    let { guildId: t, messageId: a, transitionState: f, onClose: x } = e,
        [b, h] = i.useState([]),
        [O, y] = i.useState(),
        m = i.useCallback(() => {
            let e = {
                raid_alert_type: u.wR.JOIN_RAID,
                raid_alert_id: a,
                false_alarm_type: b.map((e) => e.toString()),
                false_alarm_other_reason: O,
                guild_id: t
            };
            ((0, s.yw)(d.rMx.GUILD_RAID_FEEDBACK, e),
                (0, c.Fi)(t, a, (0, u.J$)(b)),
                x(),
                (0, o.ZDy)(async () => {
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
        }, [x, a, t, O, b]),
        j = [
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
    function g(e) {
        b.includes(e) ? h((t) => t.filter((t) => t !== e)) : h((t) => [...t, e]);
    }
    return (0, r.jsxs)(o.Y0X, {
        transitionState: f,
        size: o.CgR.SMALL,
        parentComponent: 'AutomodRaidResolveModal',
        children: [
            (0, r.jsx)(o.xBx, {
                separator: !1,
                className: p.center,
                children: (0, r.jsx)(o.X6q, {
                    color: 'header-primary',
                    variant: 'heading-xl/bold',
                    children: _.intl.string(_.t['1zmw/P'])
                })
            }),
            (0, r.jsxs)(o.hzk, {
                className: p.center,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: p.textCenter,
                        children: _.intl.string(_.t.nF79oK)
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
                                        (0, r.jsxs)(o.P3F, {
                                            className: p.optionText,
                                            onClick: () => g(n),
                                            children: [
                                                (0, r.jsx)('div', {
                                                    children: (0, r.jsx)(o.XZJ, {
                                                        type: o.XZJ.Types.INVERTED,
                                                        size: 20,
                                                        value: b.includes(n),
                                                        onChange: () => g(n)
                                                    })
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: 'text-md/semibold',
                                                    color: 'header-primary',
                                                    children: t
                                                })
                                            ]
                                        }),
                                        n === u.$l.OTHER &&
                                            b.includes(u.$l.OTHER) &&
                                            (0, r.jsx)('div', {
                                                className: p.textboxContainer,
                                                children: (0, r.jsx)(o.Kx8, {
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
            (0, r.jsxs)(o.mzw, {
                className: p.__invalid_modalFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: p.button,
                        children: (0, r.jsx)(o.zxk, {
                            variant: 'primary',
                            text: _.intl.string(_.t.Gh3A0N),
                            onClick: m
                        })
                    }),
                    (0, r.jsx)(o.zxk, {
                        variant: 'secondary',
                        text: _.intl.string(_.t['ETE/oK']),
                        onClick: x
                    })
                ]
            })
        ]
    });
}
