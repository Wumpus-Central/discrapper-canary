r.d(t, {
    D: () => o,
    E: () => a
});
var n,
    l = r(818083),
    o = (((n = {})[(n.CONTROL = 0)] = 'CONTROL'), (n[(n.TRANSFORMATION = 1)] = 'TRANSFORMATION'), (n[(n.NO_MOVEMENT = 2)] = 'NO_MOVEMENT'), n);
let i = (0, l.B)({
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
    a = (e) => i.useExperiment({ location: e });
