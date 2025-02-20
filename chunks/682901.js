n.d(t, { Z: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-01_call_settings',
    label: 'Simplified Call Settings Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Simplified Call Settings',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    return r.useExperiment(e);
}
