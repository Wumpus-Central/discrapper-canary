n.d(t, { y: () => a });
var r = n(818083),
    i = n(474936);
let o = (0, r.B)({
        kind: 'user',
        id: '2025-03_fractional_premium_boost_management',
        label: 'Boost management while on fractional nitro',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Allow boost management while on fractional nitro',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (e, t, n) => null != t && null != n && n !== i.a$.NONE && !o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
