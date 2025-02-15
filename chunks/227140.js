s.d(t, { Z: () => c });
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    l = s(481060),
    o = s(679768),
    a = s(788800);
function c(e) {
    let { copy: t, showStars: s = !0, className: i } = e;
    return (0, n.jsxs)('div', {
        className: r()(a.badgeContainer, i),
        children: [
            s &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('span', {
                            className: r()(a.star, a.starLeft),
                            children: (0, n.jsx)(o.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, n.jsx)('span', {
                            className: r()(a.star, a.starRight),
                            children: (0, n.jsx)(o.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, n.jsx)(l.Text, {
                variant: 'eyebrow',
                className: a.newBadge,
                children: t
            })
        ]
    });
}
