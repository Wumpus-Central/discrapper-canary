r.d(n, {
    C3: function () {
        return o;
    },
    GW: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
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
function a(e) {
    let { location: n } = e,
        { enabled: r } = i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
    return r;
}
function o(e) {
    let { location: n } = e,
        { enabled: r } = i.useExperiment({ location: n }, { autoTrackExposure: !0 });
    return r;
}
