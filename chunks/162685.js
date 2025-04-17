n.d(t, { w: () => r });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-03_app_dm_no_push',
    label: 'Activity DM No Push',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Disables push notifications for activities, enables opt-in switch',
            config: {
                enabled: !0,
                defaultOnMobile: !1
            }
        },
        {
            id: 2,
            label: 'Same as treatment 1, but defaults to on on mobile',
            config: {
                enabled: !0,
                defaultOnMobile: !0
            }
        }
    ]
});
