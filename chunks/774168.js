n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(772848),
    s = n(960259),
    c = n(481060),
    u = n(481051),
    d = n(602850);
function p(e) {
    let { width: t = 24, height: n = 24, isBadged: l = !1, isTyping: o = !1 } = e,
        [u] = i.useState(() => (0, a.Z)()),
        d = (0, s.bW)().enabled;
    return (0, r.jsxs)('svg', {
        width: t,
        height: n,
        viewBox: '0 0 24 24',
        children: [
            (0, r.jsx)('defs', {
                children: (0, r.jsxs)('mask', {
                    id: u,
                    children: [
                        (0, r.jsx)('rect', {
                            fill: 'white',
                            width: '100%',
                            height: '100%'
                        }),
                        o &&
                            (0, r.jsx)('g', {
                                fill: 'black',
                                transform: 'translate(5.5, '.concat(d ? 10.5 : 8.5, ') scale(').concat(11 / 24, ')'),
                                children: (0, r.jsx)(c.IJ0, {
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
            d
                ? (0, r.jsx)('g', {
                      mask: 'url(#'.concat(u, ')'),
                      children: (0, r.jsx)(c.kBi, {
                          size: 'custom',
                          width: t,
                          height: n,
                          color: 'currentColor'
                      })
                  })
                : (0, r.jsx)('path', {
                      fill: 'currentColor',
                      d: 'M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z',
                      mask: 'url(#'.concat(u, ')')
                  })
        ]
    });
}
function h(e) {
    var t;
    let { className: n, unreadCount: i, mentionCount: l, isTyping: a, canBadge: s } = e,
        c = null != l && l > 0,
        h = null !== (t = c ? l : i) && void 0 !== t ? t : 0,
        f = s && null != i && i > 0;
    return (0, r.jsxs)('div', {
        className: o()(d.chatIcon, n),
        children: [
            (0, r.jsx)(p, {
                isBadged: f,
                isTyping: a
            }),
            f &&
                (0, r.jsx)(u.Z, {
                    hasMentions: c,
                    truncatedCount: h > 99 ? '99+' : h,
                    className: d.badge
                })
        ]
    });
}
