n.d(t, { Ac: () => r });
let i = (0, n(818083).B)({
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
function r(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: r } = i.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
