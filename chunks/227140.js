t.d(s, { Z: () => l });
var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(679768),
    c = t(788800);
function l(e) {
    let { copy: s, showStars: t = !0, className: a } = e;
    return (0, n.jsxs)('div', {
        className: i()(c.badgeContainer, a),
        children: [
            t &&
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
            (0, n.jsx)(r.Text, {
                variant: 'eyebrow',
                className: c.newBadge,
                children: s
            })
        ]
    });
}
