n.d(t, { v: () => i });
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-08_collectibles_expiry_modal',
        label: 'Collectibles Expiry Experiment',
        defaultConfig: { expiryModalEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable collectibles expiry modal',
                config: { expiryModalEnabled: !0 }
            }
        ]
    }),
    i = (e) => r.getCurrentConfig({ location: e }).expiryModalEnabled;
