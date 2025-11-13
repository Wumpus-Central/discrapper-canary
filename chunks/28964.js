n.d(t, {
    g: () => l,
    k: () => s,
});
var r = n(818083),
    i = n(154579);
let a = {
        isEnabled: !1,
        isHasFilterElevated: !1,
    },
    o = (0, r.B)({
        kind: "user",
        id: "2025-07_search_filters_redesign",
        label: "Search Filters Redesign",
        defaultConfig: a,
        treatments: [
            {
                id: 1,
                label: "Top Filters",
                config: {
                    isEnabled: !0,
                    isHasFilterElevated: !1,
                },
            },
            {
                id: 2,
                label: "Top Filters (has: before mentions:)",
                config: {
                    isEnabled: !0,
                    isHasFilterElevated: !0,
                },
            },
        ],
    });
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.nd)({
            location: t,
            autoTrackExposure: n,
        }),
        { isEnabled: a } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return a;
}
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.nd)({
            location: t,
            autoTrackExposure: n,
        }),
        { isHasFilterElevated: a } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return a;
}
