s.d(t, {
    Z: function () {
        return l;
    }
});
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    o = s(481060),
    c = s(679768),
    a = s(901303);
function l(e) {
    let { copy: t, showStars: s = !0, className: i } = e;
    return (0, n.jsxs)('div', {
        className: r()(a.badgeContainer, i),
        children: [
            s &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('span', {
                            className: r()(a.star, a.starLeft),
                            children: (0, n.jsx)(c.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, n.jsx)('span', {
                            className: r()(a.star, a.starRight),
                            children: (0, n.jsx)(c.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, n.jsx)(o.Text, {
                variant: 'eyebrow',
                className: a.newBadge,
                children: t
            })
        ]
    });
}
