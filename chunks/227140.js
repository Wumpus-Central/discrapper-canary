n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(679768),
    a = n(456411);
function c(e) {
    let { copy: t, showStars: n = !0, className: i } = e;
    return (0, r.jsxs)('div', {
        className: l()(a.badgeContainer, i),
        children: [
            n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('span', {
                            className: l()(a.star, a.starLeft),
                            children: (0, r.jsx)(s.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, r.jsx)('span', {
                            className: l()(a.star, a.starRight),
                            children: (0, r.jsx)(s.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, r.jsx)(o.Text, {
                variant: 'eyebrow',
                className: a.newBadge,
                children: t
            })
        ]
    });
}
