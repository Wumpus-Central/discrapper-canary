n.d(t, {
    nd: () => a,
    ro: () => i
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-06_search_improvements_holdout',
    label: 'Search Improvements Holdout',
    defaultConfig: { isInHoldout: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enables holdout group',
            config: { isInHoldout: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return i;
}
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
