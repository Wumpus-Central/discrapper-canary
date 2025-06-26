n.d(t, { Z: () => s });
var l = n(990547),
    i = n(442837),
    r = n(213609),
    a = n(541099),
    o = n(312871);
function s(e) {
    let { applicationId: t, commandId: n, searchResultsPosition: s, query: c } = e,
        u = (0, i.e7)([a.Z], () => a.Z.entrypoint());
    return {
        trackSearchResultsItemImpressionRef: (0, o.Z)({
            onVisible: () => {
                (0, r.h)({
                    type: l.ImpressionTypes.VIEW,
                    name: l.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
                    properties: {
                        application_id: t,
                        command_id: n,
                        search_results_position: s,
                        query: c,
                        source: u
                    }
                });
            },
            threshold: 1
        })
    };
}
