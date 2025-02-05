n.r(i), n.d(i, { default: () => u });
var t = n(200651);
n(192379);
var a = n(481060),
    s = n(413335),
    c = n(984370),
    r = n(166351),
    o = n(953476),
    d = n(291775),
    l = n(388032),
    p = n(77598);
function u() {
    return (0, t.jsxs)('div', {
        className: p.container,
        children: [
            (0, t.jsxs)(c.Z, {
                hideSearch: !0,
                toolbar: (0, t.jsx)('div', {}),
                children: [
                    (0, t.jsx)(c.Z.Icon, {
                        icon: (0, a.GSL)(s.Z),
                        disabled: !0,
                        'aria-label': ''
                    }),
                    (0, t.jsx)(c.Z.Title, { children: l.intl.string(d.Z.yv3DJC) }),
                    (0, t.jsx)(c.Z.Divider, {})
                ]
            }),
            (0, t.jsxs)('div', {
                className: p.contentContainer,
                children: [
                    (0, t.jsxs)('div', {
                        className: p.powerupTextContainer,
                        children: [
                            (0, t.jsx)(a.X6q, {
                                variant: 'heading-lg/semibold',
                                children: l.intl.string(d.Z['TXY/b2'])
                            }),
                            (0, t.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                children: l.intl.string(d.Z.aJv4PD)
                            })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: p.powerupContainer,
                        children: o.O.map((e, i) =>
                            (0, t.jsx)(
                                r.Z,
                                {
                                    powerup: e,
                                    onClick: () => {}
                                },
                                'powerup-'.concat(e.skuId, '-').concat(i)
                            )
                        )
                    })
                ]
            })
        ]
    });
}
