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
    s = n(12008);
let o = ['#01007f', '#0000b0', '#0000e1', '#2d3dee', '#5470e9', '#a091eb', '#cc99ff'],
    c = ['#a7e4e4', '#ffffff'],
    d = [0.01, 0.03, 0.055, 0.1, 0.19, 0.25, 0.35],
    u = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 6,
            tint: 1
        },
        {
            base: 6,
            tint: 1
        },
        {
            base: 6,
            tint: 1
        },
        {
            base: 6,
            tint: 1
        },
        {
            base: 6,
            tint: 1
        },
        {
            base: 6,
            tint: 1
        }
    ],
    m = [0.55, 1],
    h = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 20,
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
            (0, i.jsx)('defs', { children: (0, i.jsx)('style', { children: v }) }),
            (0, i.jsx)('use', {
                href: ''.concat(s, '#wrapper-layer'),
                id: _
            })
        ]
    });
}
