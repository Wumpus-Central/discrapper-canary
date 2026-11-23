var r = s(158390),
    n = s(620632),
    a = s(73153),
    i = s(809291),
    c = s(705912),
    l = s(386649),
    u = s(163839),
    _ = s(652215);
let h = new r.A(u.mC, u.qz, !0);
function d(e) {
    return !(!(0, c.Qc)(e.guildId, "suggested_searches") || l.A.isLoadingSuggestedSearches(e)) && !h.pending;
}
async function o(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        { guildId: r, channelIds: c } = e,
        l = i.A.getContextualProperties(e, t);
    a.h.dispatch({ type: "SUGGESTED_SEARCHES_FETCH_START", scope: e });
    let u = performance.now();
    try {
        let t = await n.Bo.post({
            url: _.Rsh.SUGGESTED_SEARCHES(r),
            body: { channel_ids: c, limit: 20 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        h.succeed();
        let d = t.body.suggestions.map((e) => ({
            suggestionId: e.suggestion_id,
            suggestedSearchText: e.suggested_search_text,
        }));
        (a.h.dispatch({
            type: "SUGGESTED_SEARCHES_FETCH_SUCCESS",
            scope: e,
            requestId: t.body.request_id,
            suggestedSearches: d,
            windowSize: s,
        }),
            i.A.trackSuggestedSearchesReturned({
                requestId: t.body.request_id,
                durationMs: performance.now() - u,
                responseStatusCode: t.status,
                suggestedSearches: d,
                contextualProperties: l,
            }));
    } catch (t) {
        (h.fail(_.tEg),
            a.h.dispatch({ type: "SUGGESTED_SEARCHES_FETCH_FAILURE", scope: e, windowSize: s }),
            i.A.trackSuggestedSearchesReturned({
                requestId: null,
                durationMs: performance.now() - u,
                responseStatusCode: t?.status ?? null,
                suggestedSearches: [],
                contextualProperties: l,
            }));
    }
}
s.d(
    t,
    {},
    {
        A: function (e, t, s) {
            l.A.isLoadingSuggestedSearches(e) ||
                (l.A.willExhaustSuggestedSearches(e, s) && d(e)
                    ? o(e, t, s)
                    : a.h.dispatch({ type: "SUGGESTED_SEARCH_ADVANCE", scope: e, windowSize: s }));
        },
        E: async function (e, t) {
            l.A.hasSuggestions(e) || (d(e) && (await o(e, t)));
        },
    },
);
