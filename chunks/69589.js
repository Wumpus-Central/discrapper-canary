n.d(t, { Z: () => m });
var l = n(200651),
    i = n(481060),
    r = n(99690),
    a = n(473188),
    s = n(688693),
    o = n(191420),
    d = n(774621),
    c = n(49274),
    u = n(904141);
function m(e) {
    let { user: t, rank: n, rankBadgeVisibility: m = 'visible', avatarClassName: x, avatarSize: _ = i.EFr.SIZE_40 } = e,
        h = (0, i.pxk)(_);
    return (0, l.jsxs)('div', {
        className: s.container,
        style: {
            width: ''.concat(h, 'px'),
            height: ''.concat(h, 'px')
        },
        children: [
            (0, l.jsx)('img', {
                className: s.frame,
                src: 1 === n ? o : 2 === n ? d : 3 === n ? c : u,
                style: {
                    width: h + 8,
                    height: h + 8
                },
                alt: ''
            }),
            (0, l.jsx)(r.Z, {
                className: x,
                user: t,
                size: _
            }),
            'hidden' !== m &&
                (0, l.jsx)('div', {
                    className: s.rankBadge,
                    children: (0, l.jsx)(a._, {
                        rank: n,
                        hideInnerBorder: 'visibleWithoutBorder' === m
                    })
                })
        ]
    });
}
