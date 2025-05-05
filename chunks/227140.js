n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var s = n(120356),
    i = n.n(s),
    o = n(481060),
    l = n(679768),
    a = n(456411);
function c(e) {
    let { copy: t, showStars: n = !0, className: s } = e;
    return (0, r.jsxs)('div', {
        className: i()(a.badgeContainer, s),
        children: [
            n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('span', {
                            className: i()(a.star, a.starLeft),
                            children: (0, r.jsx)(l.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, r.jsx)('span', {
                            className: i()(a.star, a.starRight),
                            children: (0, r.jsx)(l.Z, {
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
