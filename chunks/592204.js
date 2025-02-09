n.d(t, {
    Xo: () => o,
    pB: () => c
});
var i = n(818083),
    r = n(517858);
let a = (0, i.B)({
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
function o(e) {
    let { location: t } = e,
        n = (0, r.C3)({ location: t });
    return a.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled || n;
}
function c(e) {
    let { location: t } = e,
        n = (0, r.GW)({ location: t });
    return a.getCurrentConfig({ location: t }).enabled || n;
}
