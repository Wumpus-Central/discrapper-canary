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
    s = n(444816);
let o = ['#2d456e', '#395788', '#486ead', '#4f7ac2', '#5989d9', '#729bdd', '#96b3e3', '#b5c9e9', '#e0e0e2'],
    c = ['#f7931e'],
    d = [0.05, 0.09, 0.15, 0.2, 0.25, 0.33, 0.44, 0.57, 0.95],
    u = [
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 7,
            tint: 1
        }
    ],
    m = [0.4],
    h = [
        {
            base: 1,
            tint: 5
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
