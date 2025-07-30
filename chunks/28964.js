n.d(t, { xd: () => a });
var r = n(818083),
    i = n(154579);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-07_search_filters_redesign',
    label: 'Search Filters Redesign',
    defaultConfig: {
        isPopoutFiltersRedesignEnabled: !1,
        isResultFiltersRedesignEnabled: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable better popout filters',
            config: {
                isPopoutFiltersRedesignEnabled: !0,
                isResultFiltersRedesignEnabled: !1
            }
        },
        {
            id: 2,
            label: 'Enable better result filters',
            config: {
                isPopoutFiltersRedesignEnabled: !1,
                isResultFiltersRedesignEnabled: !0
            }
        },
        {
            id: 3,
            label: 'Enable better popout and result filters',
            config: {
                isPopoutFiltersRedesignEnabled: !0,
                isResultFiltersRedesignEnabled: !0
            }
        }
    ]
});
function a(e) {
    let { isXDMSearch: t, location: n, autoTrackExposure: r = !0 } = e,
        a = (0, i.nd)({
            location: n,
            autoTrackExposure: r
        }),
        { isResultFiltersRedesignEnabled: o } = l.useExperiment(
            { location: n },
            {
                autoTrackExposure: r,
                disable: a || t
            }
        );
    return o;
}
