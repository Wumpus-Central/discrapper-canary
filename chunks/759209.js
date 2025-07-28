n.d(t, {
    f: () => i,
    j: () => a
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-05_search_results_feedback',
    label: 'Search Results Feedback',
    defaultConfig: {
        enabled: !1,
        force: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Eligible to see search results feedback',
            config: {
                enabled: !0,
                force: !1
            }
        },
        {
            id: 2,
            label: 'Force user to always see search results feedback',
            config: {
                enabled: !0,
                force: !0
            }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i, force: a } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return {
        enabled: i,
        force: a
    };
}
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return i;
}
