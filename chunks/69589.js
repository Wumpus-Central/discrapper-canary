n.d(t, { Z: () => m });
var r = n(200651),
    l = n(481060),
    i = n(99690),
    a = n(473188),
    o = n(825739),
    s = n(191420),
    c = n(774621),
    d = n(49274),
    u = n(904141);
function m(e) {
    let { user: t, rank: n, rankBadgeVisibility: m = 'visible', avatarClassName: x, avatarSize: p = l.EFr.SIZE_40 } = e,
        f = (0, l.pxk)(p);
    return (0, r.jsxs)('div', {
        className: o.container,
        style: {
            width: ''.concat(f, 'px'),
            height: ''.concat(f, 'px')
        },
        children: [
            (0, r.jsx)('img', {
                className: o.frame,
                src: 1 === n ? s : 2 === n ? c : 3 === n ? d : u,
                style: {
                    width: f + 8,
                    height: f + 8
                },
                alt: ''
            }),
            (0, r.jsx)(i.Z, {
                className: x,
                user: t,
                size: p
            }),
            'hidden' !== m &&
                (0, r.jsx)('div', {
                    className: o.rankBadge,
                    children: (0, r.jsx)(a._, {
                        rank: n,
                        hideInnerBorder: 'visibleWithoutBorder' === m
                    })
                })
        ]
    });
}
