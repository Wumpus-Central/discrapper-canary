n.d(t, { ZB: () => r });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2025-06_cached_content_inventory_overlay',
    label: 'Sidechannel cached content inventory',
    defaultConfig: { treatmentType: null },
    treatments: [
        {
            id: 1,
            label: 'Recency',
            config: { treatmentType: 'recency' }
        },
        {
            id: 2,
            label: 'Affinity x Recency x Traits',
            config: { treatmentType: 'art' }
        }
    ]
});
function r(e) {
    return i.useExperiment({ location: e });
}
