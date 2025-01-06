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
    s = n(307536);
let o = ['#50599c', '#cc99ff', '#fefefe'],
    c = ['#39306f', '#aeaad2'],
    d = [0.05, 0.4, 1],
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
            base: 10,
            tint: 1
        }
    ],
    m = [0.05, 0.4],
    h = [
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
