n.d(t, {
    M: () => u,
    c: () => c
}),
    n(301563);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(714338),
    s = n(890797);
function l(e) {
    let { direction: t = 'up' } = e;
    return (0, r.jsx)('svg', {
        width: '10',
        height: '10',
        xmlns: 'http://www.w3.org/2000/svg',
        className: o()(s.bindArrow, s[t]),
        children: (0, r.jsx)('g', {
            fill: '#FFFFFF',
            children: (0, r.jsx)('polygon', {
                transform: 'translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) ',
                points: '4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10'
            })
        })
    });
}
let c = {
    mod: () => a.Z.modKey,
    alt: () => a.Z.altKey,
    up: () => (0, r.jsx)(l, { direction: 'up' }),
    down: () => (0, r.jsx)(l, { direction: 'down' }),
    left: () => (0, r.jsx)(l, { direction: 'left' }),
    right: () => (0, r.jsx)(l, { direction: 'right' }),
    pageup: () => 'page up',
    pagedown: () => 'page down',
    'any-character': () => 'any key',
    plus: () => '+',
    return: () => a.Z.returnKey
};
function u(e) {
    let { shortcut: t, dim: n = !1, className: i, keyClassName: a } = e,
        l = Array.isArray(t) ? t : t.split('+');
    return (0, r.jsx)('div', {
        className: o()(s.combo, i, { [s.dim]: n }),
        children: l
            .map((e) => (null != c[e] ? c[e]() : e))
            .map((e, t) =>
                (0, r.jsx)(
                    'span',
                    {
                        className: o()(s.key, a),
                        children: e
                    },
                    t
                )
            )
    });
}
