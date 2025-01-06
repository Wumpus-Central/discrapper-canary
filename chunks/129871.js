n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(249849),
    l = n(907561),
    a = n(388032),
    s = n(136050);
let o = ['#7185f6', '#7799f3', '#7eb2eb', '#85d5e0', '#89e6dd', '#8cefda', '#68eacb'],
    c = ['#ffffff', '#f0f0f0'],
    d = [0.15, 0.23, 0.32, 0.45, 0.57, 0.62, 0.7],
    u = [
        {
            base: 14,
            tint: 1
        },
        {
            base: 10,
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
    ],
    m = [0.95, 1],
    h = [
        {
            base: 1,
            tint: 2
        },
        {
            base: 14,
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
        { styleContent: v, containerId: _ } = (0, l.bC)(f, C);
    return (0, i.jsxs)('svg', {
        ...p,
        'aria-label': a.intl.string(a.t.nH6S2d),
        width: t,
        height: n,
        viewBox: '0 0 '.concat(l.Km, ' ').concat(l.md),
        children: [
            (0, i.jsxs)('defs', {
                children: [
                    (0, i.jsx)('defs', {
                        children: (0, i.jsxs)('radialGradient', {
                            id: 'foam-gradient',
                            cx: '0.5',
                            cy: '0.5',
                            r: '0.65',
                            fx: '0.5',
                            fy: '0.8',
                            children: [
                                (0, i.jsx)('stop', {
                                    stopColor: C[1],
                                    offset: '60%'
                                }),
                                (0, i.jsx)('stop', {
                                    stopColor: C[0],
                                    offset: '100%'
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('style', { children: v })
                ]
            }),
            (0, i.jsx)('use', {
                href: ''.concat(s, '#wrapper-layer'),
                id: _
            }),
            (0, i.jsx)('use', {
                href: ''.concat(s, '#foam'),
                style: { fill: 'url(#foam-gradient)' }
            })
        ]
    });
}
