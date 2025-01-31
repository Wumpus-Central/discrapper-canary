s.d(t, { Z: () => c });
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    a = s(481060),
    o = s(679768),
    l = s(844812);
function c(e) {
    let { copy: t, showStars: s = !0, className: i } = e;
    return (0, n.jsxs)('div', {
        className: r()(l.badgeContainer, i),
        children: [
            s &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('span', {
                            className: r()(l.star, l.starLeft),
                            children: (0, n.jsx)(o.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, n.jsx)('span', {
                            className: r()(l.star, l.starRight),
                            children: (0, n.jsx)(o.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, n.jsx)(a.Text, {
                variant: 'eyebrow',
                className: l.newBadge,
                children: t
            })
        ]
    });
}
