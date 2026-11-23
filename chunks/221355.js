var r = s(620632),
    a = s(73153),
    n = s(432005),
    i = s(994500),
    c = s(809291),
    l = s(705912),
    _ = s(743175),
    u = s(160963),
    d = s(583231),
    h = s(133986),
    o = s(386649),
    S = s(652215);
s.d(
    t,
    {},
    {
        $: async function (e) {
            let {
                    searchContext: t,
                    searchQueryString: s,
                    SearchSessionAnalyticsManager: A,
                    failImmediatelyWhenRateLimited: E,
                } = e,
                g = (0, d.qi)(t, s);
            if (null == g || !(0, l.Qc)(g.guildId, "fetch_answer")) return;
            let { queryText: p, guildId: y, channelIds: R, requestKey: T } = g;
            if (0 === p.length) return;
            o.A.hasSuggestions(g) || (0, h.E)(g, A);
            let f = _.A.getStatus(y, T);
            if (null != f && f !== u.o.ERROR) return;
            let I = performance.now(),
                w = c.A.getContextualProperties(g, A);
            a.h.dispatch({ type: "SMART_SEARCH_FETCH_START", smartSearchQuery: g });
            try {
                let e = await r.Bo.post({
                        url: S.Rsh.SMART_SEARCH(y),
                        body: { query_text: p, channel_ids: R },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                        failImmediatelyWhenRateLimited: E,
                    }),
                    t = e.body.message_citations
                        .map((e) => ({
                            sourceId: e.source_id,
                            sourceType: e.source_type,
                            guildId: e.guild_id,
                            channelId: e.channel_id,
                            messageId: e.message_id,
                            message: (0, n.rh)(e.message),
                        }))
                        .filter((e) => !i.A.isBlockedOrIgnoredForMessage(e.message)),
                    s = (function (e, t) {
                        switch (e) {
                            case "not_qualified":
                                return u.o.NOT_QUALIFIED;
                            case "no_results":
                                return u.o.EMPTY;
                            case "success":
                                return t > 0 ? u.o.LOADED : u.o.EMPTY;
                            default:
                                return u.o.ERROR;
                        }
                    })(e.body.search_status, t.length);
                (a.h.dispatch({
                    type: "SMART_SEARCH_FETCH_SUCCESS",
                    smartSearchQuery: g,
                    smartSearchStatus: s,
                    answerText: e.body.answer_text,
                    citations: t,
                    messages: e.body.message_citations.map((e) => e.message),
                }),
                    c.A.trackSmartSearchAnswerReturned({
                        smartSearchQuery: g,
                        requestId: e.body.request_id,
                        durationMs: performance.now() - I,
                        responseStatus: e.body.search_status,
                        smartSearchStatus: s,
                        answerText: e.body.answer_text,
                        citations: t,
                        contextualProperties: w,
                    }));
            } catch (s) {
                let e = s?.status,
                    t = 404 === e ? u.o.EMPTY : u.o.ERROR;
                (a.h.dispatch({ type: "SMART_SEARCH_FETCH_FAILURE", smartSearchQuery: g, status: t }),
                    c.A.trackSmartSearchAnswerReturned({
                        smartSearchQuery: g,
                        requestId: null,
                        durationMs: performance.now() - I,
                        responseStatus: 404 === e ? "no_results" : "error",
                        smartSearchStatus: t,
                        answerText: "",
                        citations: [],
                        contextualProperties: w,
                    }));
            }
        },
        X: function (e) {
            let { smartSearchQuery: t, hasPositiveFeedback: s, SearchSessionAnalyticsManager: r } = e;
            (a.h.dispatch({ type: "SMART_SEARCH_SET_RESULT_FEEDBACK", smartSearchQuery: t, hasPositiveFeedback: s }),
                c.A.trackSmartSearchFeedbackGiven({ smartSearchQuery: t, hasPositiveFeedback: s }, r));
        },
    },
);
