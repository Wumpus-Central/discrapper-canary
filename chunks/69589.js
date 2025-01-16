r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651),
    a = r(481060),
    s = r(99690),
    o = r(473188),
    l = r(688693),
    u = r(191420),
    c = r(774621),
    d = r(49274),
    f = r(904141);
function _(e) {
    let { user: n, rank: r, rankBadgeVisibility: _ = 'visible', avatarClassName: h, avatarSize: p = a.AvatarSizes.SIZE_40 } = e,
        m = 1 === r ? u : 2 === r ? c : 3 === r ? d : f,
        g = (0, a.getAvatarSize)(p);
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
            (0, i.jsx)(s.Z, {
                className: h,
                user: n,
                size: p
            }),
            'hidden' !== _ &&
                (0, i.jsx)('div', {
                    className: l.rankBadge,
                    children: (0, i.jsx)(o._, {
                        rank: r,
                        hideInnerBorder: 'visibleWithoutBorder' === _
                    })
                })
        ]
    });
}
