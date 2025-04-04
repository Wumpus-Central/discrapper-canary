o.d(n, { Z: () => s });
var a = o(200651);
o(192379);
var t = o(120356),
    r = o.n(t),
    i = o(481060),
    c = o(679768),
    l = o(456411);
function s(e) {
    let { copy: n, showStars: o = !0, className: t } = e;
    return (0, a.jsxs)('div', {
        className: r()(l.badgeContainer, t),
        children: [
            o &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)('span', {
                            className: r()(l.star, l.starLeft),
                            children: (0, a.jsx)(c.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, a.jsx)('span', {
                            className: r()(l.star, l.starRight),
                            children: (0, a.jsx)(c.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, a.jsx)(i.Text, {
                variant: 'eyebrow',
                className: l.newBadge,
                children: n
            })
        ]
    });
}
