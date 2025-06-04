n.d(t, { y: () => o });
var r = n(818083),
    i = n(474936);
let a = (0, r.B)({
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
    o = (e, t, n) => null != t && null != n && n !== i.a$.NONE && !a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
