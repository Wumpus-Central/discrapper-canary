n.d(t, { Z: () => r });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2023-12_nv_relaxed_rate_control',
    label: 'Alternative rate control proposal for Nvidia encoder',
    defaultConfig: { nvMediumVbvSizeMs: 0 },
    treatments: [
        {
            id: 1,
            label: '250 ms',
            config: { nvMediumVbvSizeMs: 250 }
        },
        {
            id: 2,
            label: '500 ms',
            config: { nvMediumVbvSizeMs: 500 }
        },
        {
            id: 3,
            label: '1000 ms',
            config: { nvMediumVbvSizeMs: 1000 }
        }
    ]
});
