n.d(t, { Z: () => c });
var i = n(990547),
    r = n(442837),
    l = n(213609),
    a = n(541099),
    o = n(312871);
function c(e) {
    let { applicationId: t, commandId: n, searchResultsPosition: c, query: s } = e,
        u = (0, r.e7)([a.Z], () => a.Z.entrypoint());
    return {
        trackSearchResultsItemImpressionRef: (0, o.Z)({
            onVisible: () => {
                (0, l.h)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
                    properties: {
                        application_id: t,
                        command_id: n,
                        search_results_position: c,
                        query: s,
                        source: u
                    }
                });
            },
            threshold: 1
        })
    };
}
