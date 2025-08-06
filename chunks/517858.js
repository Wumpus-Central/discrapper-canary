n.d(t, {
    C3: () => o,
    GW: () => i
});
let r = (0, n(818083).B)({
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
function i(e) {
    let { location: t } = e,
        { enabled: n } = r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n;
}
function o(e) {
    let { location: t } = e,
        { enabled: n } = r.useExperiment({ location: t }, { autoTrackExposure: !0 });
    return n;
}
