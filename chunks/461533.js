(t.d(n, { default: () => d }), t(388685));
var r = t(255367),
    i = t(73800),
    s = t(481060),
    a = t(369994),
    c = t(781208),
    l = t(388032),
    o = t(122238);
function d(e) {
    let { guildId: n, transitionState: t, onClose: d } = e,
        [x, h] = i.useState([]),
        u = i.useCallback(() => {
            ((0, a.KK)(n, x), (0, a.C4)(n), d());
        }, [n, d, x]),
        S = i.useCallback(
            (e) => () => {
                h((n) => (n.includes(e) ? n.filter((n) => n !== e) : [...n, e]));
            },
            []
        ),
        C = i.useCallback(() => {
            open(c.RI);
        }, []);
    return (0, r.jsxs)(s.Y0X, {
        transitionState: t,
        size: s.CgR.SMALL,
        parentComponent: 'GuildAntiRaidReportModal',
        children: [
            (0, r.jsx)(s.xBx, {
                separator: !1,
                children: (0, r.jsx)(s.X6q, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: l.intl.string(l.t.uYPGsb)
                })
            }),
            (0, r.jsxs)(s.hzk, {
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: l.intl.format(l.t.Hg8Ee3, { onClick: C })
                    }),
                    (0, r.jsx)('div', {
                        className: o.mainCheckboxContainer,
                        children: c.Ud.map((e) =>
                            (0, r.jsxs)(
                                s.P3F,
                                {
                                    className: o.checkboxContainer,
                                    onClick: S(e),
                                    children: [
                                        (0, r.jsx)(s.XZJ, {
                                            type: s.XZJ.Types.INVERTED,
                                            className: o.checkbox,
                                            value: x.includes(e),
                                            displayOnly: !0
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            children: (0, c.$l)(e)
                                        })
                                    ]
                                },
                                e
                            )
                        )
                    })
                ]
            }),
            (0, r.jsx)(s.mzw, {
                children: (0, r.jsxs)(s.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, r.jsx)(s.zxk, {
                            variant: 'primary',
                            text: l.intl.string(l.t.geKm7u),
                            onClick: u
                        }),
                        (0, r.jsx)(s.zxk, {
                            variant: 'secondary',
                            text: l.intl.string(l.t['ETE/oK']),
                            onClick: d
                        })
                    ]
                })
            })
        ]
    });
}
