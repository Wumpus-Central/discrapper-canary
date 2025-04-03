n.d(t, {
    Xo: () => c,
    pB: () => a
});
var r = n(818083),
    i = n(517858);
let o = (0, r.B)({
    kind: 'user',
    id: '2024-04_keyword_filter_experiment',
    label: 'Replace registered keywords with asterisks',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Keyword Filter',
            config: { enabled: !0 }
        }
    ]
});
function c(e) {
    let { location: t } = e,
        n = (0, i.C3)({ location: t });
    return o.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled || n;
}
function a(e) {
    let { location: t } = e,
        n = (0, i.GW)({ location: t });
    return o.getCurrentConfig({ location: t }).enabled || n;
}
