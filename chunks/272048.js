n.d(t, { E: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-02_app_directory_launch_activity_button',
    label: 'App Directory Launch Activity Button',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable user to Launch an Activity directly from the App Directory',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    return r.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
