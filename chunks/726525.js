n.d(t, { q: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_user_profile_modal_v2',
    label: 'User Profile Modal V2 Experiment',
    defaultConfig: { isEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'User Profile Modal V2 Enabled',
            config: { isEnabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isEnabled: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return i;
}
