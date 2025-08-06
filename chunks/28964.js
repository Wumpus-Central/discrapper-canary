n.d(t, {
    dB: () => s,
    xd: () => l,
});
var r = n(818083),
    i = n(154579);
let o = {
        isPopoutFiltersRedesignEnabled: !1,
        isResultFiltersRedesignEnabled: !1,
    },
    a = (0, r.B)({
        kind: "user",
        id: "2025-07_search_filters_redesign",
        label: "Search Filters Redesign",
        defaultConfig: o,
        treatments: [
            {
                id: 1,
                label: "Enable better popout filters",
                config: {
                    isPopoutFiltersRedesignEnabled: !0,
                    isResultFiltersRedesignEnabled: !1,
                },
            },
            {
                id: 2,
                label: "Enable better result filters",
                config: {
                    isPopoutFiltersRedesignEnabled: !1,
                    isResultFiltersRedesignEnabled: !0,
                },
            },
            {
                id: 3,
                label: "Enable better popout and result filters",
                config: {
                    isPopoutFiltersRedesignEnabled: !0,
                    isResultFiltersRedesignEnabled: !0,
                },
            },
        ],
    });
function s(e) {
    let { isXDMSearch: t, location: n, autoTrackExposure: r = !0 } = e,
        o = (0, i.nd)({
            location: n,
            autoTrackExposure: r,
        }),
        { isPopoutFiltersRedesignEnabled: s } = a.useExperiment(
            { location: n },
            {
                autoTrackExposure: r,
                disable: o || t,
            },
        );
    return s;
}
function l(e) {
    let { isXDMSearch: t, location: n, autoTrackExposure: r = !0 } = e,
        o = (0, i.nd)({
            location: n,
            autoTrackExposure: r,
        }),
        { isResultFiltersRedesignEnabled: s } = a.useExperiment(
            { location: n },
            {
                autoTrackExposure: r,
                disable: o || t,
            },
        );
    return s;
}
