n.d(t, {
    BL: () => a,
    ZP: () => o,
    zS: () => l
});
var i,
    r = n(818083),
    s = n(987338),
    l = (((i = {}).V3 = 'v3'), (i.V4 = 'v4'), (i.V5 = 'v5'), i);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-06_nitro_tagline_premium_brand_refresh_experiment',
    label: 'Nitro Tagline Premium Brand Refresh Experiment',
    defaultConfig: { taglineVersion: 'v3' },
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'User sees control nitro tagline',
            config: { taglineVersion: 'v3' }
        },
        {
            id: 1,
            label: 'User sees tagline "Discord\'s Rocket Fuel"',
            config: { taglineVersion: 'v4' }
        },
        {
            id: 2,
            label: 'User sees tagline "Supercharge your Discord"',
            config: { taglineVersion: 'v5' }
        }
    ]
});
function o(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !0 }).taglineVersion;
}
