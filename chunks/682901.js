n.d(t, { Z: () => r });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2025-1_call_settings',
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
function r(e) {
    return i.useExperiment(e);
}
