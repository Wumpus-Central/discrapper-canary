n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(249849),
    l = n(907561),
    s = n(388032),
    a = n(585025);
let o = ['#0fa3dd', '#a7e4e4', '#a2ccdd'],
    c = ['#0b3215', '#a6b51a', '#35748a', '#65a88f', '#621c12', '#f96748', '#ffbbbb'],
    d = [0.25, 0.9, 0.9],
    u = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 14,
            tint: 1
        },
        {
            base: 5,
            tint: 1
        }
    ],
    m = [0.05, 0.4, 0.15, 0.33, 0.1, 0.3, 0.6],
    h = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        }
    ];
function g(e) {
    let { width: t, height: n, primaryTintColor: g, secondaryTintColor: x, ...p } = e,
        { primaryColorsTransformed: f, secondaryColorsTransformed: C } = (0, r.s)({
            primaryBaseColors: o,
            primaryTintColor: g,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: x,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: h
        }),
        { styleContent: v, containerId: N } = (0, l.bC)(f, C);
    return (0, i.jsxs)('svg', {
        ...p,
        'aria-label': s.intl.string(s.t.nH6S2d),
        width: t,
        height: n,
        viewBox: '0 0 '.concat(l.Km, ' ').concat(l.md),
        children: [
            (0, i.jsxs)('defs', {
                children: [
                    (0, i.jsx)('defs', {
                        children: (0, i.jsxs)('linearGradient', {
                            id: 'sky-gradient',
                            x1: '0',
                            x2: '1',
                            y1: '0',
                            y2: '1',
                            children: [
                                (0, i.jsx)('stop', {
                                    stopColor: f[2],
                                    offset: '0%'
                                }),
                                (0, i.jsx)('stop', {
                                    stopColor: f[0],
                                    offset: '100%'
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('style', { children: v })
                ]
            }),
            (0, i.jsx)('use', {
                href: ''.concat(a, '#sky'),
                style: { fill: 'url(#sky-gradient)' }
            }),
            (0, i.jsx)('use', {
                href: ''.concat(a, '#wrapper-layer'),
                id: N
            })
        ]
    });
}
