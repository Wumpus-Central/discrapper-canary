r.d(n, { default: () => d }), r(47120);
var s = r(200651),
    t = r(192379),
    c = r(481060),
    o = r(369994),
    i = r(781208),
    a = r(388032),
    l = r(122238);
function d(e) {
    let { guildId: n, transitionState: r, onClose: d } = e,
        [x, h] = t.useState([]),
        k = t.useCallback(() => {
            (0, o.KK)(n, x), (0, o.C4)(n), d();
        }, [n, d, x]),
        u = t.useCallback(
            (e) => () => {
                h((n) => (n.includes(e) ? n.filter((n) => n !== e) : [...n, e]));
            },
            []
        ),
        S = t.useCallback(() => {
            open(i.RI);
        }, []);
    return (0, s.jsxs)(c.Y0X, {
        transitionState: r,
        size: c.CgR.SMALL,
        children: [
            (0, s.jsx)(c.xBx, {
                separator: !1,
                children: (0, s.jsx)(c.X6q, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: a.NW.string(a.t.uYPGsb)
                })
            }),
            (0, s.jsxs)(c.hzk, {
                children: [
                    (0, s.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: a.NW.format(a.t.Hg8Ee3, { onClick: S })
                    }),
                    (0, s.jsx)('div', {
                        className: l.mainCheckboxContainer,
                        children: i.Ud.map((e) =>
                            (0, s.jsxs)(
                                c.P3F,
                                {
                                    className: l.checkboxContainer,
                                    onClick: u(e),
                                    children: [
                                        (0, s.jsx)(c.XZJ, {
                                            type: c.XZJ.Types.INVERTED,
                                            className: l.checkbox,
                                            value: x.includes(e),
                                            displayOnly: !0
                                        }),
                                        (0, s.jsx)(c.Text, {
                                            variant: 'text-sm/normal',
                                            children: (0, i.$l)(e)
                                        })
                                    ]
                                },
                                e
                            )
                        )
                    })
                ]
            }),
            (0, s.jsxs)(c.mzw, {
                children: [
                    (0, s.jsx)(c.zxk, {
                        onClick: k,
                        color: c.zxk.Colors.BRAND,
                        look: c.zxk.Looks.FILLED,
                        children: a.NW.string(a.t.geKm7u)
                    }),
                    (0, s.jsx)(c.zxk, {
                        onClick: d,
                        color: c.zxk.Colors.PRIMARY,
                        look: c.zxk.Looks.LINK,
                        children: a.NW.string(a.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
