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
    s = n(409814);
let o = ['#cc99ff', '#ffffff'],
    c = ['#2d3dee', '#ffffff'],
    d = [0.3, 1],
    u = [
        {
            base: 2,
            tint: 1
        },
        {
            base: 5,
            tint: 1
        }
    ],
    m = [0.3, 1],
    h = [
        {
            base: 2,
            tint: 1
        },
        {
            base: 5,
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
                    (0, i.jsxs)('defs', {
                        children: [
                            (0, i.jsxs)('radialGradient', {
                                id: 'fog-gradient-primary',
                                cx: '.5',
                                cy: '.5',
                                r: '.6',
                                fx: '.76',
                                fy: '.33',
                                spreadMethod: 'pad',
                                children: [
                                    (0, i.jsx)('stop', {
                                        stopColor: f[1],
                                        offset: '0%'
                                    }),
                                    (0, i.jsx)('stop', {
                                        stopColor: f[0],
                                        offset: '70%'
                                    })
                                ]
                            }),
                            (0, i.jsxs)('radialGradient', {
                                id: 'fog-gradient-secondary',
                                cx: '.5',
                                cy: '.5',
                                r: '.6',
                                fx: '.76',
                                fy: '.33',
                                spreadMethod: 'pad',
                                children: [
                                    (0, i.jsx)('stop', {
                                        stopColor: C[1],
                                        offset: '0%'
                                    }),
                                    (0, i.jsx)('stop', {
                                        stopColor: C[0],
                                        offset: '70%'
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)('style', { children: v })
                ]
            }),
            (0, i.jsx)('use', {
                href: ''.concat(s, '#wrapper-layer'),
                id: _
            }),
            (0, i.jsx)('use', {
                href: ''.concat(s, '#clan-banner-warp-tunnel-secondary'),
                style: { fill: 'url(#fog-gradient-secondary)' }
            }),
            (0, i.jsx)('use', {
                href: ''.concat(s, '#clan-banner-warp-tunnel-primary'),
                style: { fill: 'url(#fog-gradient-primary)' }
            })
        ]
    });
}
