n.d(t, { Z: () => f });
var r = n(200651),
    i = n(481060),
    a = n(99690),
    o = n(473188),
    s = n(804985),
    l = n(191420),
    c = n(774621),
    u = n(49274),
    d = n(904141);
function f(e) {
    let { user: t, rank: n, rankBadgeVisibility: f = 'visible', avatarClassName: _, avatarSize: p = i.EFr.SIZE_40 } = e,
        h = 1 === n ? l : 2 === n ? c : 3 === n ? u : d,
        m = (0, i.pxk)(p);
    return (0, r.jsxs)('div', {
        className: s.container,
        style: {
            width: ''.concat(m, 'px'),
            height: ''.concat(m, 'px')
        },
        children: [
            (0, r.jsx)('img', {
                className: s.frame,
                src: h,
                style: {
                    width: m + 8,
                    height: m + 8
                },
                alt: ''
            }),
            (0, r.jsx)(a.Z, {
                className: _,
                user: t,
                size: p
            }),
            'hidden' !== f &&
                (0, r.jsx)('div', {
                    className: s.rankBadge,
                    children: (0, r.jsx)(o._, {
                        rank: n,
                        hideInnerBorder: 'visibleWithoutBorder' === f
                    })
                })
        ]
    });
}
