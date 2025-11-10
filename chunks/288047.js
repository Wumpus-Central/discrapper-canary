n.d(t, {
    ZQ: () => i,
    bH: () => a,
});
let r = (0, n(818083).B)({
    kind: "user",
    id: "2025-10_friend_is_online_notification",
    label: "Friend Online Notification Experiment",
    defaultConfig: { showSettingsToggle: !1 },
    treatments: [
        {
            id: 1,
            label: "User can receive friend online notifications. Show settings toggle.",
            config: { showSettingsToggle: !0 },
        },
    ],
});
function i(e) {
    return r.useExperiment({ location: e }, { autoTrackExposure: !1 });
}
function a(e) {
    return r.getCurrentConfig({ location: e }).showSettingsToggle;
}
