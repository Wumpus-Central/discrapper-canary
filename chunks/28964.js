n.d(t, {
    KS: () => l,
    nP: () => s,
});
var r = n(818083),
    i = n(154579);
let a = {
        isNoTopFiltersRedesignEnabled: !1,
        isSuggestTopFiltersRedesignEnabled: !1,
    },
    o = (0, r.B)({
        kind: "user",
        id: "2025-07_search_filters_redesign",
        label: "Search Filters Redesign",
        defaultConfig: a,
        treatments: [
            {
                id: 1,
                label: "No top filters",
                config: {
                    isNoTopFiltersRedesignEnabled: !0,
                    isSuggestTopFiltersRedesignEnabled: !1,
                },
            },
            {
                id: 2,
                label: "Suggest top filters",
                config: {
                    isNoTopFiltersRedesignEnabled: !1,
                    isSuggestTopFiltersRedesignEnabled: !0,
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
        { isNoTopFiltersRedesignEnabled: a } = o.useExperiment(
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
        { isSuggestTopFiltersRedesignEnabled: a } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return a;
}
