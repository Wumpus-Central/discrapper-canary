(n.d(t, { Z: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(481060),
    c = n(481051),
    u = n(978644);
function d(e) {
    let { width: t = 24, height: n = 24, isBadged: a = !1, isTyping: o = !1 } = e,
        [c] = i.useState(() => (0, s.Z)());
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
                                children: (0, r.jsx)(l.IJ0, {
                                    dotRadius: 3.5,
                                    spacing: 3,
                                    fill: 'black'
                                })
                            }),
                        a &&
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
                children: (0, r.jsx)(l.kBi, {
                    size: 'custom',
                    width: t,
                    height: n,
                    color: 'currentColor'
                })
            })
        ]
    });
}
function f(e) {
    var t;
    let { className: n, unreadCount: i, mentionCount: a, isTyping: s, canBadge: l } = e,
        f = null != a && a > 0,
        _ = null != (t = f ? a : i) ? t : 0,
        p = _ > 99 ? '99+' : _,
        h = l && null != i && i > 0;
    return (0, r.jsxs)('div', {
        className: o()(u.chatIcon, n),
        children: [
            (0, r.jsx)(d, {
                isBadged: h,
                isTyping: s
            }),
            h &&
                (0, r.jsx)(c.Z, {
                    hasMentions: f,
                    truncatedCount: p,
                    className: u.badge
                })
        ]
    });
}
