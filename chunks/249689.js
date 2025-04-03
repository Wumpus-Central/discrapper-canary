n.d(t, { $: () => i });
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2025-03_fractional_premium_subscription_purchase',
        label: 'Purchase subscription while on fractional nitro',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Allow subscription purchase while on fractional nitro',
                config: { enabled: !0 }
            }
        ]
    }),
    i = (e, t) => null != t && r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
