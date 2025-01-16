r.d(n, {
    M: function () {
        return d;
    },
    c: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(714338),
    l = r(37591);
function u(e) {
    let { direction: n = 'up' } = e;
    return (0, i.jsx)('svg', {
        width: '10',
        height: '10',
        xmlns: 'http://www.w3.org/2000/svg',
        className: s()(l.bindArrow, l[n]),
        children: (0, i.jsx)('g', {
            fill: '#FFFFFF',
            children: (0, i.jsx)('polygon', {
                transform: 'translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) ',
                points: '4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10'
            })
        })
    });
}
let c = {
    mod: () => o.Z.modKey,
    alt: () => o.Z.altKey,
    up: () => (0, i.jsx)(u, { direction: 'up' }),
    down: () => (0, i.jsx)(u, { direction: 'down' }),
    left: () => (0, i.jsx)(u, { direction: 'left' }),
    right: () => (0, i.jsx)(u, { direction: 'right' }),
    pageup: () => 'page up',
    pagedown: () => 'page down',
    'any-character': () => 'any key',
    plus: () => '+',
    return: () => o.Z.returnKey
};
function d(e) {
    let { shortcut: n, dim: r = !1, className: a, keyClassName: o } = e,
        u = Array.isArray(n) ? n : n.split('+');
    return (0, i.jsx)('div', {
        className: s()(l.combo, a, { [l.dim]: r }),
        children: u
            .map((e) => (null != c[e] ? c[e]() : e))
            .map((e, n) =>
                (0, i.jsx)(
                    'span',
                    {
                        className: s()(l.key, o),
                        children: e
                    },
                    n
                )
            )
    });
}
