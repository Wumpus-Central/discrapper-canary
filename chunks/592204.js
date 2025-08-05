n.d(t, {
    Xo: () => o,
    pB: () => s
});
var r = n(818083),
    i = n(517858);
let a = (0, r.B)({
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
        n = (0, i.C3)({ location: t });
    return a.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled || n;
}
function s(e) {
    let { location: t } = e,
        n = (0, i.GW)({ location: t });
    return a.getCurrentConfig({ location: t }).enabled || n;
}
