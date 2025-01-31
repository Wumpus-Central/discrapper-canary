t.d(e, { default: () => d }), t(47120);
var r = t(200651),
    i = t(192379),
    s = t(481060),
    c = t(369994),
    o = t(781208),
    l = t(388032),
    a = t(912969);
function d(n) {
    let { guildId: e, transitionState: t, onClose: d } = n,
        [x, h] = i.useState([]),
        k = i.useCallback(() => {
            (0, c.KK)(e, x), (0, c.C4)(e), d();
        }, [e, d, x]),
        u = i.useCallback(
            (n) => () => {
                h((e) => (e.includes(n) ? e.filter((e) => e !== n) : [...e, n]));
            },
            []
        ),
        S = i.useCallback(() => {
            open(o.RI);
        }, []);
    return (0, r.jsxs)(s.Y0X, {
        transitionState: t,
        size: s.CgR.SMALL,
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
                        children: l.intl.format(l.t.Hg8Ee3, { onClick: S })
                    }),
                    (0, r.jsx)('div', {
                        className: a.mainCheckboxContainer,
                        children: o.Ud.map((n) =>
                            (0, r.jsxs)(
                                s.P3F,
                                {
                                    className: a.checkboxContainer,
                                    onClick: u(n),
                                    children: [
                                        (0, r.jsx)(s.XZJ, {
                                            type: s.XZJ.Types.INVERTED,
                                            className: a.checkbox,
                                            value: x.includes(n),
                                            displayOnly: !0
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            children: (0, o.$l)(n)
                                        })
                                    ]
                                },
                                n
                            )
                        )
                    })
                ]
            }),
            (0, r.jsxs)(s.mzw, {
                children: [
                    (0, r.jsx)(s.zxk, {
                        onClick: k,
                        color: s.zxk.Colors.BRAND,
                        look: s.zxk.Looks.FILLED,
                        children: l.intl.string(l.t.geKm7u)
                    }),
                    (0, r.jsx)(s.zxk, {
                        onClick: d,
                        color: s.zxk.Colors.PRIMARY,
                        look: s.zxk.Looks.LINK,
                        children: l.intl.string(l.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
