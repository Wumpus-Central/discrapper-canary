n.d(t, { o: () => a });
var r = n(818083),
    i = n(474936);
let o = (0, r.B)({
        kind: 'user',
        id: '2025-03_fractional_premium_subscription_management',
        label: 'Subscription management while on fractional nitro',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Allow subscription management while on fractional nitro',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (e, t, n) => null != t && null != n && n !== i.a$.NONE && !o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
