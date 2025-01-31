n.d(e, { q: () => l });
let a = (0, n(818083).B)({
    kind: 'user',
    id: '2025-01_user_profile_custom_status_default_duration',
    label: 'User Profile Custom Status Default Duration',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Default duration set to Don't Clear",
            config: { enabled: !0 }
        }
    ]
});
function l(t) {
    let { location: e, autoTrackExposure: n = !0 } = t;
    return a.getCurrentConfig({ location: e }, { autoTrackExposure: n }).enabled;
}
