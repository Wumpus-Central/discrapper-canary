n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    l = n(679768),
    s = n(456411);
function c(e) {
    let { copy: t, showStars: n = !0, className: i } = e;
    return (0, r.jsxs)('div', {
        className: o()(s.badgeContainer, i),
        children: [
            n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('span', {
                            className: o()(s.star, s.starLeft),
                            children: (0, r.jsx)(l.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, r.jsx)('span', {
                            className: o()(s.star, s.starRight),
                            children: (0, r.jsx)(l.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, r.jsx)(a.Text, {
                variant: 'eyebrow',
                className: s.newBadge,
                children: t
            })
        ]
    });
}
