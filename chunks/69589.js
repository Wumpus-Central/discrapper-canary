n.d(t, { Z: () => E });
var r = n(200651),
    i = n(481060),
    l = n(99690),
    o = n(473188),
    a = n(804985),
    s = n(191420),
    c = n(774621),
    u = n(49274),
    d = n(904141);
function E(e) {
    let { user: t, rank: n, rankBadgeVisibility: E = 'visible', avatarClassName: _, avatarSize: I = i.EFr.SIZE_40 } = e,
        N = (0, i.pxk)(I);
    return (0, r.jsxs)('div', {
        className: a.container,
        style: {
            width: ''.concat(N, 'px'),
            height: ''.concat(N, 'px')
        },
        children: [
            (0, r.jsx)('img', {
                className: a.frame,
                src: 1 === n ? s : 2 === n ? c : 3 === n ? u : d,
                style: {
                    width: N + 8,
                    height: N + 8
                },
                alt: ''
            }),
            (0, r.jsx)(l.Z, {
                className: _,
                user: t,
                size: I
            }),
            'hidden' !== E &&
                (0, r.jsx)('div', {
                    className: a.rankBadge,
                    children: (0, r.jsx)(o._, {
                        rank: n,
                        hideInnerBorder: 'visibleWithoutBorder' === E
                    })
                })
        ]
    });
}
