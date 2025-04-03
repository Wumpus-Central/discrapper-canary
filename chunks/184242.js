t.d(n, { Ac: () => o });
let r = (0, t(818083).B)({
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
function o(e) {
    let { location: n, autoTrackExposure: t = !0 } = e,
        { enabled: o } = r.useExperiment({ location: n }, { autoTrackExposure: t });
    return o;
}
