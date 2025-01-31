n.d(t, {
    C3: () => a,
    GW: () => r
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-08_keyword_filter_upsells',
    label: 'Language Filter Upsells',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Upsell for Keyword Language Filters',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let { location: t } = e,
        { enabled: n } = i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n;
}
function a(e) {
    let { location: t } = e,
        { enabled: n } = i.useExperiment({ location: t }, { autoTrackExposure: !0 });
    return n;
}
