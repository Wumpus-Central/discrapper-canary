n.d(t, { D: () => l });
var r = n(818083),
    a = n(355820);
let i = (0, r.B)({
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
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, a.P)({
            location: t,
            autoTrackExposure: n
        }),
        { enabledWithStatusSelection: l, enabledWithoutSatusSelection: o } = i.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    return l || o;
}
