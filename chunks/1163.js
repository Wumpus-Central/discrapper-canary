n.d(t, { Z: () => i });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-08_perks_demo_hd_streaming_opt_in_v2',
    label: 'HD Streaming',
    defaultConfig: {
        enabled: !1,
        extendedDemoDuration: !1,
        extendedOptInDuration: !1
    },
    treatments: [
        {
            id: 1,
            label: 'duration',
            config: {
                enabled: !0,
                extendedDemoDuration: !0,
                extendedOptInDuration: !1
            }
        },
        {
            id: 2,
            label: 'optin duration',
            config: {
                enabled: !0,
                extendedDemoDuration: !1,
                extendedOptInDuration: !0
            }
        },
        {
            id: 3,
            label: 'both',
            config: {
                enabled: !0,
                extendedDemoDuration: !0,
                extendedOptInDuration: !0
            }
        }
    ]
});
