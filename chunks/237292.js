n.d(t, {
    mG: () => i,
    y0: () => o
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-01_inappropriate_conversation_warning',
    label: 'Inappropriate Conversation Warning',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Inappropriate Conversation Warning',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !1 } = e,
        { enabled: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return i;
}
function o(e) {
    let { location: t, autoTrackExposure: n = !1 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
