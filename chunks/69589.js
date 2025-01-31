n.d(t, { Z: () => f });
var i = n(200651),
    r = n(481060),
    a = n(99690),
    s = n(473188),
    o = n(688693),
    l = n(191420),
    u = n(774621),
    c = n(49274),
    d = n(904141);
function f(e) {
    let { user: t, rank: n, rankBadgeVisibility: f = 'visible', avatarClassName: _, avatarSize: p = r.EFr.SIZE_40 } = e,
        h = 1 === n ? l : 2 === n ? u : 3 === n ? c : d,
        m = (0, r.pxk)(p);
    return (0, i.jsxs)('div', {
        className: o.container,
        style: {
            width: ''.concat(m, 'px'),
            height: ''.concat(m, 'px')
        },
        children: [
            (0, i.jsx)('img', {
                className: o.frame,
                src: h,
                style: {
                    width: m + 8,
                    height: m + 8
                },
                alt: ''
            }),
            (0, i.jsx)(a.Z, {
                className: _,
                user: t,
                size: p
            }),
            'hidden' !== f &&
                (0, i.jsx)('div', {
                    className: o.rankBadge,
                    children: (0, i.jsx)(s._, {
                        rank: n,
                        hideInnerBorder: 'visibleWithoutBorder' === f
                    })
                })
        ]
    });
}
