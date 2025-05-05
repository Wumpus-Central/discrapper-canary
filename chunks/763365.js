n.d(t, {
    T: () => a,
    h: () => l
});
var i,
    r = n(818083),
    s = n(987338),
    l = (((i = {})[(i.VARIANT_1 = 0)] = 'VARIANT_1'), (i[(i.VARIANT_2 = 1)] = 'VARIANT_2'), i);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-05_smaller_bentos_in_whats_new_section_experiment',
    label: 'Smaller Bentos in Whats New Section Experiment',
    defaultConfig: { whatsNewSectionVariant: null },
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'User see control marketing page',
            config: { whatsNewSectionVariant: null }
        },
        {
            id: 1,
            label: 'users see new marketing page with 1 large and 2 medium bentos',
            config: { whatsNewSectionVariant: 0 }
        },
        {
            id: 2,
            label: 'users see new marketing page with 3 small bentos',
            config: { whatsNewSectionVariant: 1 }
        }
    ]
});
