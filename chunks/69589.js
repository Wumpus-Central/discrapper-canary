r.d(t, { Z: () => p });
var n = r(200651),
    a = r(481060),
    o = r(99690),
    i = r(473188),
    l = r(804985),
    s = r(191420),
    c = r(774621),
    u = r(49274),
    d = r(904141);
function p(e) {
    let { user: t, rank: r, rankBadgeVisibility: p = 'visible', avatarClassName: f, avatarSize: m = a.EFr.SIZE_40 } = e,
        g = (0, a.pxk)(m);
    return (0, n.jsxs)('div', {
        className: l.container,
        style: {
            width: ''.concat(g, 'px'),
            height: ''.concat(g, 'px')
        },
        children: [
            (0, n.jsx)('img', {
                className: l.frame,
                src: 1 === r ? s : 2 === r ? c : 3 === r ? u : d,
                style: {
                    width: g + 8,
                    height: g + 8
                },
                alt: ''
            }),
            (0, n.jsx)(o.Z, {
                className: f,
                user: t,
                size: m
            }),
            'hidden' !== p &&
                (0, n.jsx)('div', {
                    className: l.rankBadge,
                    children: (0, n.jsx)(i._, {
                        rank: r,
                        hideInnerBorder: 'visibleWithoutBorder' === p
                    })
                })
        ]
    });
}
