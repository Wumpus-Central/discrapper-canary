t.d(e, {
    Z: function () {
        return u;
    }
});
var n = t(200651);
t(192379);
var r = t(120356),
    c = t.n(r),
    i = t(481060),
    a = t(679768),
    o = t(844812);
function u(s) {
    let { copy: e, showStars: t = !0, className: r } = s;
    return (0, n.jsxs)('div', {
        className: c()(o.badgeContainer, r),
        children: [
            t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('span', {
                            className: c()(o.star, o.starLeft),
                            children: (0, n.jsx)(a.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, n.jsx)('span', {
                            className: c()(o.star, o.starRight),
                            children: (0, n.jsx)(a.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, n.jsx)(i.Text, {
                variant: 'eyebrow',
                className: o.newBadge,
                children: e
            })
        ]
    });
}
