(n.d(t, { default: () => u }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(481060),
    c = n(369994),
    a = n(781208),
    o = n(388032),
    s = n(122238);
function u(e) {
    let { guildId: t, transitionState: n, onClose: u } = e,
        [d, h] = i.useState([]),
        _ = i.useCallback(() => {
            ((0, c.KK)(t, d), (0, c.C4)(t), u());
        }, [t, u, d]),
        b = i.useCallback(
            (e) => () => {
                h((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
            },
            []
        ),
        p = i.useCallback(() => {
            open(a.RI);
        }, []);
    return (0, r.jsxs)(l.Y0X, {
        transitionState: n,
        size: l.CgR.SMALL,
        parentComponent: 'GuildAntiRaidReportModal',
        children: [
            (0, r.jsx)(l.xBx, {
                separator: !1,
                children: (0, r.jsx)(l.X6q, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: o.intl.string(o.t.uYPGsb)
                })
            }),
            (0, r.jsxs)(l.hzk, {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: o.intl.format(o.t.Hg8Ee3, { onClick: p })
                    }),
                    (0, r.jsx)('div', {
                        className: s.mainCheckboxContainer,
                        children: a.Ud.map((e) =>
                            (0, r.jsxs)(
                                l.P3F,
                                {
                                    className: s.checkboxContainer,
                                    onClick: b(e),
                                    children: [
                                        (0, r.jsx)(l.XZJ, {
                                            type: l.XZJ.Types.INVERTED,
                                            className: s.checkbox,
                                            value: d.includes(e),
                                            displayOnly: !0
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            children: (0, a.$l)(e)
                                        })
                                    ]
                                },
                                e
                            )
                        )
                    })
                ]
            }),
            (0, r.jsx)(l.mzw, {
                children: (0, r.jsxs)(l.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, r.jsx)(l.zxk, {
                            variant: 'primary',
                            text: o.intl.string(o.t.geKm7u),
                            onClick: _
                        }),
                        (0, r.jsx)(l.zxk, {
                            variant: 'secondary',
                            text: o.intl.string(o.t['ETE/oK']),
                            onClick: u
                        })
                    ]
                })
            })
        ]
    });
}
