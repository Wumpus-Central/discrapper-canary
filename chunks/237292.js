r.d(n, {
    mG: function () {
        return a;
    },
    y0: function () {
        return o;
    }
});
let i = (0, r(818083).B)({
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
function a(e) {
    let { location: n, autoTrackExposure: r = !1 } = e,
        { enabled: a } = i.getCurrentConfig({ location: n }, { autoTrackExposure: r });
    return a;
}
function o(e) {
    let { location: n, autoTrackExposure: r = !1 } = e,
        { enabled: a } = i.useExperiment({ location: n }, { autoTrackExposure: r });
    return a;
}
