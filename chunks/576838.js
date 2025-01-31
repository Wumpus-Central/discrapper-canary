n.d(t, { Z: () => a });
var i = n(818083);
let r = {
        gamma: -1,
        attenuationRange: 50,
        boostRange: 6
    },
    a = (0, i.B)({
        kind: 'user',
        id: '2025-01_perceptual_volume_function',
        label: 'Perceptual volume function adjustment',
        defaultConfig: r,
        treatments: [
            {
                id: 1,
                label: 'Use gamma 2.8',
                config: {
                    ...r,
                    gamma: 2.8
                }
            },
            {
                id: 2,
                label: 'Use gamma ~1.7 (50% = -10dB, 25% = -20dB)',
                config: {
                    ...r,
                    gamma: 1.66096404744368
                }
            },
            {
                id: 3,
                label: 'Use gamma 2.6',
                config: {
                    ...r,
                    gamma: 2.6
                }
            },
            {
                id: 4,
                label: 'Use gamma 3.0',
                config: {
                    ...r,
                    gamma: 3
                }
            },
            {
                id: 5,
                label: 'Use gamma 2.0',
                config: {
                    ...r,
                    gamma: 2
                }
            },
            {
                id: 6,
                label: 'Use gamma 4.0',
                config: {
                    ...r,
                    gamma: 4
                }
            }
        ]
    });
