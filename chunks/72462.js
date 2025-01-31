n.d(t, { s: () => l });
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-12_collectibles_share_link',
        label: 'Collectibles Share Link Experiment',
        defaultConfig: { showShareLinkButton: !1 },
        treatments: [
            {
                id: 1,
                label: 'Show shop share link button',
                config: { showShareLinkButton: !0 }
            }
        ]
    }),
    l = (e) => i.useExperiment({ location: e }).showShareLinkButton;
