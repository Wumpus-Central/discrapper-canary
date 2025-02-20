n.d(t, { Z: () => l });
var s = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    o = n(481060),
    c = n(679768),
    a = n(436199);
function l(e) {
    let { copy: t, showStars: n = !0, className: r } = e;
    return (0, s.jsxs)('div', {
        className: i()(a.badgeContainer, r),
        children: [
            n &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)('span', {
                            className: i()(a.star, a.starLeft),
                            children: (0, s.jsx)(c.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, s.jsx)('span', {
                            className: i()(a.star, a.starRight),
                            children: (0, s.jsx)(c.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, s.jsx)(o.Text, {
                variant: 'eyebrow',
                className: a.newBadge,
                children: t
            })
        ]
    });
}
