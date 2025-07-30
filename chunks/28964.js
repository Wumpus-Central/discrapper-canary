r.d(t, { xd: () => a });
var n = r(818083),
    s = r(154579);
let l = (0, n.B)({
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
    let { isXDMSearch: t, location: r, autoTrackExposure: n = !0 } = e,
        a = (0, s.nd)({
            location: r,
            autoTrackExposure: n
        }),
        { isResultFiltersRedesignEnabled: i } = l.useExperiment(
            { location: r },
            {
                autoTrackExposure: n,
                disable: a || t
            }
        );
    return i;
}
