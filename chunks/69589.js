r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651),
    a = r(481060),
    o = r(99690),
    s = r(473188),
    l = r(688693),
    u = r(191420),
    c = r(774621),
    d = r(49274),
    f = r(904141);
function p(e) {
    let { user: n, rank: r, rankBadgeVisibility: p = 'visible', avatarClassName: h, avatarSize: _ = a.AvatarSizes.SIZE_40 } = e,
        m = 1 === r ? u : 2 === r ? c : 3 === r ? d : f,
        g = (0, a.getAvatarSize)(_);
    return (0, i.jsxs)('div', {
        className: l.container,
        style: {
            width: ''.concat(g, 'px'),
            height: ''.concat(g, 'px')
        },
        children: [
            (0, i.jsx)('img', {
                className: l.frame,
                src: m,
                style: {
                    width: g + 8,
                    height: g + 8
                },
                alt: ''
            }),
            (0, i.jsx)(o.Z, {
                className: h,
                user: n,
                size: _
            }),
            'hidden' !== p &&
                (0, i.jsx)('div', {
                    className: l.rankBadge,
                    children: (0, i.jsx)(s._, {
                        rank: r,
                        hideInnerBorder: 'visibleWithoutBorder' === p
                    })
                })
        ]
    });
}
