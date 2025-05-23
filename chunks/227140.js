n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(120356),
    s = n.n(i),
    o = n(481060),
    a = n(679768),
    l = n(166844);
function c(e) {
    let { copy: t, showStars: n = !0, className: i } = e;
    return (0, r.jsxs)('div', {
        className: s()(l.badgeContainer, i),
        children: [
            n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('span', {
                            className: s()(l.star, l.starLeft),
                            children: (0, r.jsx)(a.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, r.jsx)('span', {
                            className: s()(l.star, l.starRight),
                            children: (0, r.jsx)(a.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, r.jsx)(o.Text, {
                variant: 'eyebrow',
                className: l.newBadge,
                children: t
            })
        ]
    });
}
