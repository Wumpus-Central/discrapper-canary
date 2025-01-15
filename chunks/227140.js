n.d(t, {
    Z: function () {
        return a;
    }
});
var s = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    o = n(481060),
    c = n(679768),
    l = n(844812);
function a(e) {
    let { copy: t, showStars: n = !0, className: i } = e;
    return (0, s.jsxs)('div', {
        className: r()(l.badgeContainer, i),
        children: [
            n &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)('span', {
                            className: r()(l.star, l.starLeft),
                            children: (0, s.jsx)(c.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, s.jsx)('span', {
                            className: r()(l.star, l.starRight),
                            children: (0, s.jsx)(c.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, s.jsx)(o.Text, {
                variant: 'eyebrow',
                className: l.newBadge,
                children: t
            })
        ]
    });
}
