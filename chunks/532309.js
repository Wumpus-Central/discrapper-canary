n.d(t, { Z: () => s });
var i = n(990547),
    r = n(442837),
    l = n(213609),
    o = n(541099),
    a = n(312871);
function s(e) {
    let { applicationId: t, commandId: n, searchResultsPosition: s, query: c } = e,
        u = (0, r.e7)([o.Z], () => o.Z.entrypoint());
    return {
        trackSearchResultsItemImpressionRef: (0, a.Z)({
            onVisible: () => {
                (0, l.h)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
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
