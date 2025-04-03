n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(772848),
    s = n(481060),
    c = n(481051),
    u = n(978644);
function d(e) {
    let { width: t = 24, height: n = 24, isBadged: l = !1, isTyping: o = !1 } = e,
        [c] = i.useState(() => (0, a.Z)());
    return (0, r.jsxs)('svg', {
        width: t,
        height: n,
        viewBox: '0 0 24 24',
        children: [
            (0, r.jsx)('defs', {
                children: (0, r.jsxs)('mask', {
                    id: c,
                    children: [
                        (0, r.jsx)('rect', {
                            fill: 'white',
                            width: '100%',
                            height: '100%'
                        }),
                        o &&
                            (0, r.jsx)('g', {
                                fill: 'black',
                                transform: 'translate(5.5, '.concat(10.5, ') scale(').concat(11 / 24, ')'),
                                children: (0, r.jsx)(s.IJ0, {
                                    dotRadius: 3.5,
                                    spacing: 3,
                                    fill: 'black'
                                })
                            }),
                        l &&
                            (0, r.jsx)('circle', {
                                cx: '20',
                                cy: '19',
                                r: '10',
                                fill: 'red'
                            })
                    ]
                })
            }),
            (0, r.jsx)('g', {
                mask: 'url(#'.concat(c, ')'),
                children: (0, r.jsx)(s.kBi, {
                    size: 'custom',
                    width: t,
                    height: n,
                    color: 'currentColor'
                })
            })
        ]
    });
}
function p(e) {
    var t;
    let { className: n, unreadCount: i, mentionCount: l, isTyping: a, canBadge: s } = e,
        p = null != l && l > 0,
        h = null != (t = p ? l : i) ? t : 0,
        f = s && null != i && i > 0;
    return (0, r.jsxs)('div', {
        className: o()(u.chatIcon, n),
        children: [
            (0, r.jsx)(d, {
                isBadged: f,
                isTyping: a
            }),
            f &&
                (0, r.jsx)(c.Z, {
                    hasMentions: p,
                    truncatedCount: h > 99 ? '99+' : h,
                    className: u.badge
                })
        ]
    });
}
