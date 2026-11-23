var r = s(158390),
    a = s(620632),
    n = s(73153),
    i = s(809291),
    c = s(705912),
    l = s(386649),
    _ = s(163839),
    u = s(652215);
let d = new r.A(_.mC, _.qz, !0);
function h(e) {
    return !(!(0, c.Qc)(e.guildId, "suggested_searches") || l.A.isLoadingSuggestedSearches(e)) && !d.pending;
}
async function o(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        { guildId: r, channelIds: c } = e,
        l = i.A.getContextualProperties(e, t);
    n.h.dispatch({ type: "SUGGESTED_SEARCHES_FETCH_START", scope: e });
    let _ = performance.now();
    try {
        let t = await a.Bo.post({
            url: u.Rsh.SUGGESTED_SEARCHES(r),
            body: { channel_ids: c, limit: 20 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        d.succeed();
        let h = t.body.suggestions.map((e) => ({
            suggestionId: e.suggestion_id,
            suggestedSearchText: e.suggested_search_text,
        }));
        (n.h.dispatch({
            type: "SUGGESTED_SEARCHES_FETCH_SUCCESS",
            scope: e,
            requestId: t.body.request_id,
            suggestedSearches: h,
            windowSize: s,
        }),
            i.A.trackSuggestedSearchesReturned({
                requestId: t.body.request_id,
                durationMs: performance.now() - _,
                responseStatusCode: t.status,
                suggestedSearches: h,
                contextualProperties: l,
            }));
    } catch (t) {
        (d.fail(u.tEg),
            n.h.dispatch({ type: "SUGGESTED_SEARCHES_FETCH_FAILURE", scope: e, windowSize: s }),
            i.A.trackSuggestedSearchesReturned({
                requestId: null,
                durationMs: performance.now() - _,
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
                (l.A.willExhaustSuggestedSearches(e, s) && h(e)
                    ? o(e, t, s)
                    : n.h.dispatch({ type: "SUGGESTED_SEARCH_ADVANCE", scope: e, windowSize: s }));
        },
        E: async function (e, t) {
            l.A.hasSuggestions(e) || (h(e) && (await o(e, t)));
        },
    },
);
