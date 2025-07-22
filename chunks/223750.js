n.d(t, { t: () => i });
let r = (0, n(818083).B)({
    id: '2025-07_welcome_cta_mana',
    label: 'Welcome CTA using Mana buttons',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Using Mana buttons',
            config: { enabled: !0 }
        }
    ]
});
function i() {
    return r.useExperiment({ location: 'welcome CTA' }, { autoTrackExposure: !0 }).enabled;
}
