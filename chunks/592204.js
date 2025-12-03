n.d(t, {
    Xo: () => i,
    pB: () => a,
});
let r = (0, n(818083).B)({
    kind: "user",
    id: "2024-04_keyword_filter_experiment",
    label: "Replace registered keywords with asterisks",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable Keyword Filter",
            config: { enabled: !0 },
        },
    ],
});
function i(e) {
    let { location: t } = e;
    return r.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
function a(e) {
    let { location: t } = e;
    return r.getCurrentConfig({ location: t }).enabled;
}
