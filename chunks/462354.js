n.d(t, {
    Az: () => i,
    JN: () => a,
});
let r = (0, n(818083).B)({
    kind: "user",
    id: "2025-07_voice_activity_notifications",
    label: "Voice Activity Notifications",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "60% Affinity",
            config: { enabled: !0 },
        },
        {
            id: 2,
            label: "70% Affinity",
            config: { enabled: !0 },
        },
        {
            id: 3,
            label: "60% Affinity, no channel rate limit",
            config: { enabled: !0 },
        },
        {
            id: 4,
            label: "50% Affinity, no channel rate limit",
            config: { enabled: !0 },
        },
    ],
});
function i(e) {
    return r.useExperiment({ location: e }, { autoTrackExposure: !1 });
}
function a(e) {
    return r.getCurrentConfig({ location: e }).enabled;
}
