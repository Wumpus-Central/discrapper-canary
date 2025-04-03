n.d(t, { D: () => i });
var r = n(818083),
    l = n(355820);
let a = (0, r.B)({
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
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, l.P)({
            location: t,
            autoTrackExposure: n
        }),
        { enabledWithStatusSelection: i, enabledWithoutSatusSelection: o } = a.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    return i || o;
}
