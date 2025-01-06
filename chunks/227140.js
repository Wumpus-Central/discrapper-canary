s.d(t, {
    Z: function () {
        return l;
    }
});
var n = s(200651);
s(192379);
var r = s(120356),
    i = s.n(r),
    a = s(481060),
    o = s(679768),
    c = s(844812);
function l(e) {
    let { copy: t, showStars: s = !0, className: r } = e;
    return (0, n.jsxs)('div', {
        className: i()(c.badgeContainer, r),
        children: [
            s &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('span', {
                            className: i()(c.star, c.starLeft),
                            children: (0, n.jsx)(o.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, n.jsx)('span', {
                            className: i()(c.star, c.starRight),
                            children: (0, n.jsx)(o.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, n.jsx)(a.Text, {
                variant: 'eyebrow',
                className: c.newBadge,
                children: t
            })
        ]
    });
}
