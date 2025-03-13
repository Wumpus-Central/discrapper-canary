n.d(t, { S: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-03_obscured_message_loaded_analytics',
    label: 'Obscured message loaded analytics',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enables the experiment',
            config: { enabled: !0 }
        }
    ]
});
function i() {
    let { enabled: e } = r.getCurrentConfig({ location: '686da2_1' }, { autoTrackExposure: !0 });
    return e;
}
