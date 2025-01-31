n.d(t, { Z: () => r });
var i = n(990547),
    l = n(442837),
    a = n(213609),
    o = n(541099),
    s = n(312871);
function r(e) {
    let { applicationId: t, commandId: n, searchResultsPosition: r, query: c } = e,
        d = (0, l.e7)([o.Z], () => o.Z.entrypoint());
    return {
        trackSearchResultsItemImpressionRef: (0, s.Z)({
            onVisible: () => {
                (0, a.h)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
                    properties: {
                        application_id: t,
                        command_id: n,
                        search_results_position: r,
                        query: c,
                        source: d
                    }
                });
            },
            threshold: 1
        })
    };
}
