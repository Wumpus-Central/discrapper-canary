n.d(e, { default: () => h }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(367907),
    d = n(369994),
    c = n(177862),
    _ = n(981631),
    u = n(388032),
    x = n(51192);
function h(t) {
    let { guildId: e, messageId: r, transitionState: h, onClose: I } = t,
        [N, A] = i.useState([]),
        [C, p] = i.useState(),
        R = i.useCallback(() => {
            let t = {
                raid_alert_type: c.wR.JOIN_RAID,
                raid_alert_id: r,
                false_alarm_type: N.map((t) => t.toString()),
                false_alarm_other_reason: C,
                guild_id: e
            };
            (0, s.yw)(_.rMx.GUILD_RAID_FEEDBACK, t),
                (0, d.Fi)(e, r, (0, c.J$)(N)),
                I(),
                (0, o.ZDy)(async () => {
                    let { default: t } = await n.e('37564').then(n.bind(n, 969214));
                    return (e) => (0, l.jsx)(t, { ...e });
                });
        }, [I, r, e, C, N]),
        T = [
            {
                text: u.intl.string(u.t.yeaXw8),
                value: c.$l.LEGITIMATE_ACTIVITY
            },
            {
                text: u.intl.string(u.t['o++3Bw']),
                value: c.$l.DM_SPAM
            },
            {
                text: u.intl.string(u.t.UfHAwc),
                value: c.$l.JOIN_RAID
            },
            {
                text: u.intl.string(u.t.K3UWeX),
                value: c.$l.OTHER
            }
        ];
    function E(t) {
        N.includes(t) ? A((e) => e.filter((e) => e !== t)) : A((e) => [...e, t]);
    }
    return (0, l.jsxs)(o.Y0X, {
        transitionState: h,
        size: o.CgR.SMALL,
        children: [
            (0, l.jsx)(o.xBx, {
                separator: !1,
                className: x.center,
                children: (0, l.jsx)(o.X6q, {
                    color: 'header-primary',
                    variant: 'heading-xl/bold',
                    children: u.intl.string(u.t['1zmw/P'])
                })
            }),
            (0, l.jsxs)(o.hzk, {
                className: x.center,
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: x.textCenter,
                        children: u.intl.string(u.t.nF79oK)
                    }),
                    (0, l.jsx)('div', {
                        className: x.options,
                        children: T.map((t) => {
                            let { text: e, value: n } = t;
                            return (0, l.jsxs)(
                                'div',
                                {
                                    className: a()(x.optionContainer, { [x.optionContainerOther]: n === c.$l.OTHER }),
                                    children: [
                                        (0, l.jsxs)(o.P3F, {
                                            className: x.optionText,
                                            onClick: () => E(n),
                                            children: [
                                                (0, l.jsx)('div', {
                                                    children: (0, l.jsx)(o.XZJ, {
                                                        type: o.XZJ.Types.INVERTED,
                                                        size: 20,
                                                        value: N.includes(n),
                                                        onChange: () => E(n)
                                                    })
                                                }),
                                                (0, l.jsx)(o.Text, {
                                                    variant: 'text-md/semibold',
                                                    color: 'header-primary',
                                                    children: e
                                                })
                                            ]
                                        }),
                                        n === c.$l.OTHER &&
                                            N.includes(c.$l.OTHER) &&
                                            (0, l.jsx)('div', {
                                                className: x.textboxContainer,
                                                children: (0, l.jsx)(o.Kx8, {
                                                    className: x.falseAlarmReasonText,
                                                    placeholder: u.intl.string(u.t['PAM+JS']),
                                                    onChange: (t) => p(t),
                                                    value: C,
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
            (0, l.jsxs)(o.mzw, {
                className: x.__invalid_modalFooter,
                children: [
                    (0, l.jsx)('div', {
                        className: x.button,
                        children: (0, l.jsx)(o.zxk, {
                            onClick: R,
                            color: o.zxk.Colors.BRAND,
                            look: o.zxk.Looks.FILLED,
                            children: u.intl.string(u.t.Gh3A0N)
                        })
                    }),
                    (0, l.jsx)(o.zxk, {
                        onClick: I,
                        color: o.zxk.Colors.PRIMARY,
                        look: o.zxk.Looks.LINK,
                        children: u.intl.string(u.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
