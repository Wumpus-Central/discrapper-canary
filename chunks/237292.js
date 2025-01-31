n.d(t, {
    mG: () => r,
    y0: () => a
});
let i = (0, n(818083).B)({
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
function r(e) {
    let { location: t, autoTrackExposure: n = !1 } = e,
        { enabled: r } = i.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return r;
}
function a(e) {
    let { location: t, autoTrackExposure: n = !1 } = e,
        { enabled: r } = i.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
