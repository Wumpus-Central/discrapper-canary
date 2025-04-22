n.d(t, { D: () => i });
var l = n(818083),
    a = n(355820);
let r = (0, l.B)({
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
        l = (0, a.P)({
            location: t,
            autoTrackExposure: n
        }),
        { enabledWithStatusSelection: i, enabledWithoutSatusSelection: o } = r.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: l
            }
        );
    return i || o;
}
