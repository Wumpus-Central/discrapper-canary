n.d(e, { D: () => i });
var l = n(818083),
    r = n(355820);
let a = (0, l.B)({
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
function i(t) {
    let { location: e, autoTrackExposure: n = !0 } = t,
        l = (0, r.P)({
            location: e,
            autoTrackExposure: n
        }),
        { enabledWithStatusSelection: i, enabledWithoutSatusSelection: o } = a.getCurrentConfig(
            { location: e },
            {
                autoTrackExposure: n,
                disable: l
            }
        );
    return i || o;
}
