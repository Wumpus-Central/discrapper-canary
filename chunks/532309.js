n.d(t, { Z: () => s });
var i = n(990547),
    l = n(442837),
    r = n(213609),
    a = n(541099),
    o = n(312871);
function s(e) {
    let { applicationId: t, commandId: n, searchResultsPosition: s, query: c } = e,
        u = (0, l.e7)([a.Z], () => a.Z.entrypoint());
    return {
        trackSearchResultsItemImpressionRef: (0, o.Z)({
            onVisible: () => {
                (0, r.h)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
                    properties: {
                        application_id: t,
                        command_id: n,
                        search_results_position: s,
                        query: c,
                        source: u,
                    },
                });
            },
            threshold: 1,
        }),
    };
}
