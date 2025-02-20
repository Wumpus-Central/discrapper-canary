n.d(t, { Ac: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-08_user_profile_blockee_hide_mutuals',
    label: 'User Profile Blockee Hide Mutuals',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable User Profile Blockee Hide Mutuals',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
