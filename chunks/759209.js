n.d(t, {
    f: () => i,
    j: () => a,
});
let r = (0, n(818083).B)({
    kind: "user",
    id: "2025-05_search_results_feedback",
    label: "Search Results Feedback",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Eligible to see search results feedback",
            config: { enabled: !0 },
        },
    ],
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return i;
}
