n.d(t, {
    DX: () => a,
    hM: () => i
});
let l = (0, n(818083).B)({
    kind: 'user',
    id: '2025-01_user_profile_custom_status_edit_preview',
    label: 'User Profile Custom Status Edit Preview',
    defaultConfig: {
        enabledWithStatusSelection: !1,
        enabledWithoutSatusSelection: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable updated custom status editing modal with preview',
            config: {
                enabledWithStatusSelection: !0,
                enabledWithoutSatusSelection: !1
            }
        },
        {
            id: 2,
            label: 'Enable updated custom status editing modal with preview without status selection',
            config: {
                enabledWithStatusSelection: !1,
                enabledWithoutSatusSelection: !0
            }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        a = l.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return a.enabledWithStatusSelection || a.enabledWithoutSatusSelection;
}
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabledWithStatusSelection: a, enabledWithoutSatusSelection: i } = l.useExperiment({ location: t }, { autoTrackExposure: n });
    return {
        enabledWithStatusSelection: a,
        enabledWithoutSatusSelection: i
    };
}
