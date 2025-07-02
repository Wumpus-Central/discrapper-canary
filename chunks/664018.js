r.d(t, {
    D: () => l,
    E: () => o
});
var n,
    i = r(818083),
    l = 12633 == r.j ? (((n = {})[(n.CONTROL = 0)] = 'CONTROL'), (n[(n.TRANSFORMATION = 1)] = 'TRANSFORMATION'), (n[(n.NO_MOVEMENT = 2)] = 'NO_MOVEMENT'), n) : null;
let a = (0, i.B)({
        kind: 'user',
        id: '2024-03_shop_card_hover_animation',
        label: 'Shop card hover animation experiment',
        defaultConfig: { hoverVariant: 0 },
        treatments: [
            {
                id: 1,
                label: 'Use CSS Transformation',
                config: { hoverVariant: 1 }
            },
            {
                id: 2,
                label: 'No hover movement',
                config: { hoverVariant: 2 }
            }
        ]
    }),
    o = (e) => a.useExperiment({ location: e });
