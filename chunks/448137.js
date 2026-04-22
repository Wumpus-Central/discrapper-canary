n.d(t, { A: () => o });
var l = n(110259),
    i = n(311907),
    a = n(139286),
    s = n(989837),
    r = n(520117);
function o(e) {
    let { applicationId: t, commandId: n, searchResultsPosition: o, query: c } = e,
        d = (0, i.bG)([s.A], () => s.A.entrypoint());
    return {
        trackSearchResultsItemImpressionRef: (0, r.A)({
            onVisible: () => {
                (0, a.x)({
                    type: l.ImpressionTypes.VIEW,
                    name: l.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
                    properties: { application_id: t, command_id: n, search_results_position: o, query: c, source: d },
                });
            },
            threshold: 1,
        }),
    };
}
