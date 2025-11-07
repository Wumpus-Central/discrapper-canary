n.d(t, { Z: () => l });
var r = n(990547),
    i = n(442837),
    a = n(213609),
    o = n(541099),
    s = n(312871);
function l(e) {
    let { applicationId: t, commandId: n, searchResultsPosition: l, query: c } = e,
        u = (0, i.e7)([o.Z], () => o.Z.entrypoint()),
        d = () => {
            (0, a.h)({
                type: r.ImpressionTypes.VIEW,
                name: r.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
                properties: {
                    application_id: t,
                    command_id: n,
                    search_results_position: l,
                    query: c,
                    source: u,
                },
            });
        },
        f = 1;
    return {
        trackSearchResultsItemImpressionRef: (0, s.Z)({
            onVisible: d,
            threshold: f,
        }),
    };
}
