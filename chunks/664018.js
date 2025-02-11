n.d(t, {
    D: () => a,
    E: () => s
});
var r,
    l = n(818083),
    a = (((r = {})[(r.CONTROL = 0)] = 'CONTROL'), (r[(r.TRANSFORMATION = 1)] = 'TRANSFORMATION'), (r[(r.NO_MOVEMENT = 2)] = 'NO_MOVEMENT'), r);
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
    s = (e) => i.useExperiment({ location: e });
