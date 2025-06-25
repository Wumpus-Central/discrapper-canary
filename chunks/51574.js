n.d(t, {
    BL: () => l,
    J1: () => a,
    ZP: () => o
});
var i = n(818083),
    r = n(987338),
    s = n(388032);
let l = (0, i.B)({
    kind: 'user',
    id: '2025-06_nitro_tagline_premium_brand_refresh_experiment',
    label: 'Nitro Tagline Premium Brand Refresh Experiment',
    defaultConfig: { taglineVersion: 'v3' },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
function a(e) {
    switch (e) {
        case 'v4':
            return s.intl.string(s.t['EW+VIS']);
        case 'v5':
            return s.intl.string(s.t['eG+cW1']);
        default:
            return s.intl.string(s.t.YCZldH);
    }
}
function o(e) {
    let { location: t } = e;
    return l.useExperiment({ location: t }, { autoTrackExposure: !0 }).taglineVersion;
}
