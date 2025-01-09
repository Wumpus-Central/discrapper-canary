t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    i = t(481060),
    o = t(679768),
    c = t(844812);
function u(e) {
    let { copy: s, showStars: t = !0, className: a } = e;
    return (0, n.jsxs)('div', {
        className: r()(c.badgeContainer, a),
        children: [
            t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('span', {
                            className: r()(c.star, c.starLeft),
                            children: (0, n.jsx)(o.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, n.jsx)('span', {
                            className: r()(c.star, c.starRight),
                            children: (0, n.jsx)(o.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, n.jsx)(i.Text, {
                variant: 'eyebrow',
                className: c.newBadge,
                children: s
            })
        ]
    });
}
