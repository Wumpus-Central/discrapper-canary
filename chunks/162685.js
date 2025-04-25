n.d(t, { w: () => a });
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-03_app_dm_no_push',
    label: 'Activity DM No Push',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
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
