n.d(t, {
    M_: () => s,
    g_: () => u,
    kU: () => l,
    q$: () => c,
    rY: () => o,
});
var r = n(818083);
let i = {
        isInExperiment: !1,
        isEnabled: !1,
        isHasFilterElevated: !1,
    },
    a = (0, r.B)({
        kind: "user",
        id: "2025-07_search_filters_redesign",
        label: "Search Filters Redesign",
        defaultConfig: i,
        treatments: [
            {
                id: 0,
                label: "Control",
                config: {
                    isInExperiment: !0,
                    isEnabled: !1,
                    isHasFilterElevated: !1,
                },
            },
            {
                id: 1,
                label: "Top Filters",
                config: {
                    isInExperiment: !0,
                    isEnabled: !0,
                    isHasFilterElevated: !1,
                },
            },
            {
                id: 2,
                label: "Top Filters (has: before mentions:)",
                config: {
                    isInExperiment: !0,
                    isEnabled: !0,
                    isHasFilterElevated: !0,
                },
            },
        ],
    });
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInExperiment: r } = a.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return r;
}
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInExperiment: r } = a.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isEnabled: r } = a.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
function c(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isHasFilterElevated: r } = a.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return r;
}
function u(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isHasFilterElevated: r } = a.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
