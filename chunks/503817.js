n.d(e, { DX: () => l });
let a = (0, n(818083).B)({
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
function l(t) {
    let { location: e, autoTrackExposure: n = !0 } = t,
        l = a.getCurrentConfig({ location: e }, { autoTrackExposure: n });
    return l.enabledWithStatusSelection || l.enabledWithoutSatusSelection;
}
