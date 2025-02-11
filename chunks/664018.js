n.d(t, {
    D: () => i,
    E: () => a
});
var l,
    r = n(818083),
    i = (((l = {})[(l.CONTROL = 0)] = 'CONTROL'), (l[(l.TRANSFORMATION = 1)] = 'TRANSFORMATION'), (l[(l.NO_MOVEMENT = 2)] = 'NO_MOVEMENT'), l);
let s = (0, r.B)({
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
    a = (e) => s.useExperiment({ location: e });
