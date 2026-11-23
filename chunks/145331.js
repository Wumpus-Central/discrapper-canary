var r,
    a = s(149468),
    n = s(626584),
    i = s(129230),
    c = s(822382),
    l = s(617713),
    _ = s(963144),
    u = s(652215);
function d(e) {
    return e?.trim()?.length ?? 0;
}
function h(e) {
    return (0, c.dX)(e)?.trim()?.length ?? 0;
}
new n.A("SearchTracking");
let o = new Map([
        [u.LWr.ANSWER_IN, "in"],
        [u.LWr.FILTER_IN, "in"],
        [u.LWr.ANSWER_USERNAME_FROM, "from"],
        [u.LWr.FILTER_FROM, "from"],
        [u.LWr.ANSWER_USERNAME_MENTIONS, "mentions"],
        [u.LWr.FILTER_MENTIONS, "mentions"],
        [u.LWr.ANSWER_HAS, "has"],
        [u.LWr.FILTER_HAS, "has"],
        [u.LWr.ANSWER_BEFORE, "before"],
        [u.LWr.FILTER_BEFORE, "before"],
        [u.LWr.ANSWER_ON, "during"],
        [u.LWr.FILTER_ON, "during"],
        [u.LWr.ANSWER_AFTER, "after"],
        [u.LWr.FILTER_AFTER, "after"],
        [u.LWr.ANSWER_PINNED, "pinned"],
        [u.LWr.FILTER_PINNED, "pinned"],
    ]),
    S = new Map([
        [u.x2k.HISTORY, "history"],
        [u.x2k.DATES, "dates"],
    ]);
var A = (((r = {}).SEARCH_HEADER = "search_header"), (r.USER_SETTINGS = "user_settings"), r);
s.d(
    t,
    {},
    {
        H9: function (e) {
            let {
                searchContext: t,
                searchRequestAnalyticsId: s,
                prevSearchRequestAnalyticsId: r,
                isError: n,
                limit: i,
                offset: c,
                page: _,
                totalResults: o,
                pageResults: S,
                isIndexing: A,
                pageNumMessages: E,
                pageNumLinks: g,
                pageNumEmbeds: p,
                pageNumAttachments: y,
                searchQueryString: R,
                searchQuery: T,
            } = e;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_RESULT_VIEWED, {
                search_type: t.type,
                search_id: s,
                prev_search_id: r,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                is_error: n,
                limit: i,
                offset: c,
                page: _,
                total_results: o,
                page_results: S,
                is_indexing: A,
                page_num_messages: E,
                page_num_links: g,
                page_num_embeds: p,
                page_num_attach: y,
                search_query_length: d(R),
                search_query_content_length: h(T),
            });
        },
        J$: function (e) {
            let { searchContext: t } = e;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
                search_id: (0, _.l)(t),
                search_type: t.type,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
            });
        },
        L6: function (e) {
            let { searchContext: t, searchRequestAnalyticsId: s, mode: r } = e;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_RESULT_SORT_CHANGED, {
                search_id: s,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                search_type: t.type,
                new_sort_type: r,
            });
        },
        TJ: function (e) {
            let { searchContext: t } = e;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_FILTERS_MODAL_OPENED, {
                search_id: (0, _.l)(t),
                search_type: t.type,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
            });
        },
        Tf: function (e) {
            let { searchContext: t } = e;
            l.A.enqueueEvent(t, () => {
                a.Ay.trackWithMetadata(u.HAw.SEARCH_MESSAGES_CHANNEL_PREFILL, {
                    search_type: t.type,
                    search_id: (0, _.l)(t),
                    search_session_id: l.A.getSessionId(t),
                });
            });
        },
        _k: function (e) {
            let { searchContext: t, prevIsCrossDMSettingEnabled: s, isCrossDMSettingEnabled: r, location: n } = e;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_CROSS_DM_SETTING_UPDATE, {
                search_id: null != t ? (0, _.l)(t) : null,
                search_type: t?.type,
                search_session_id: null != t ? l.A.getSessionId(t) : null,
                search_query_id: null != t ? l.A.getQueryId(t) : null,
                prev_is_cross_dm_setting_enabled: s,
                is_cross_dm_setting_enabled: r,
                setting_location: n,
            });
        },
        fd: function (e) {
            let { searchContext: t, query: s, queryString: r, searchQuerySource: n } = e,
                i = null != r ? (0, c._o)(r) : [],
                o = 0,
                S = 0,
                A = 0,
                E = 0,
                g = 0,
                p = 0,
                y = 0,
                R = 0,
                T = 0;
            i.forEach((e) => {
                e.type === u.LWr.ANSWER_IN
                    ? o++
                    : e.type === u.LWr.ANSWER_USERNAME_FROM
                      ? S++
                      : e.type === u.LWr.ANSWER_USERNAME_MENTIONS
                        ? A++
                        : e.type === u.LWr.ANSWER_HAS
                          ? E++
                          : e.type === u.LWr.ANSWER_BEFORE
                            ? g++
                            : e.type === u.LWr.ANSWER_ON
                              ? p++
                              : e.type === u.LWr.ANSWER_AFTER
                                ? y++
                                : e.type === u.LWr.ANSWER_PINNED
                                  ? R++
                                  : e.type === u.LWr.ANSWER_AUTHOR_TYPE && T++;
            });
            let f = l.A.getQueryId(t);
            a.Ay.trackWithMetadata(u.HAw.MESSAGES_SEARCH_STARTED, {
                search_id: (0, _.l)(t),
                search_session_id: l.A.getSessionId(t),
                search_query_id: f,
                search_type: t.type,
                search_query_length: d(r),
                search_query_content_length: h(s),
                sort_type: (0, c.XC)(s),
                filter_in_count: o,
                filter_from_count: S,
                filter_mentions_count: A,
                filter_has_count: E,
                filter_before_count: g,
                filter_during_count: p,
                filter_after_count: y,
                filter_pinned_count: R,
                filter_author_type_count: T,
                search_query_source: n,
            });
        },
        i4: function (e) {
            let {
                searchContext: t,
                searchRequestAnalyticsId: s,
                messageId: r,
                guildId: a,
                channelId: n,
                pageResults: c,
                totalResults: _,
                page: o,
                limit: S,
                offset: A,
                index: E,
                searchQueryString: g,
                searchQuery: p,
            } = e;
            i.default.track(u.HAw.SEARCH_RESULT_SELECTED, {
                search_type: t.type,
                search_id: s,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                message_id: r,
                guild_id: a,
                channel_id: n,
                page_results: c,
                total_results: _,
                page: o,
                limit: S,
                offset: A,
                index_num: E,
                search_query_length: d(g),
                search_query_content_length: h(p),
            });
        },
        iK: function (e) {
            let { searchContext: t } = e;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_INPUT_CLEARED, {
                search_id: (0, _.l)(t),
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                search_type: t.type,
            });
        },
        kc: function (e) {
            let {
                searchContext: t,
                searchQuery: s,
                searchQueryString: r,
                searchAutocompleteResultIndex: n,
                searchAutocompleteTotalResults: i,
                searchTokenType: c,
                searchAutocompleteGroup: A,
                isSearchFilterPrefix: E,
                isSearchFilterAnswer: g,
                isSearchFilterComplete: p,
                isInFilterForSelectedChannel: y,
                searchAutocompleteSelectAction: R,
            } = e;
            u.x2k.HISTORY;
            let T = o.get(A) ?? S.get(A),
                f = null != c ? o.get(c) : null;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
                search_id: (0, _.l)(t),
                search_type: t.type,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                search_query_length: d(r),
                search_query_content_length: h(s),
                search_autocomplete_result_index: n,
                search_autocomplete_total_results: i,
                search_autocomplete_group: T,
                search_autocomplete_filter_type: f,
                is_search_filter_prefix: E,
                is_search_filter_answer: g,
                is_search_filter_complete: p,
                is_in_filter_for_selected_channel: y,
                search_autocomplete_select_action: R,
            });
        },
        kq: function (e) {
            let { searchContext: t, searchRequestAnalyticsId: s, newPageIndex: r } = e;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_RESULT_PAGE_CHANGED, {
                search_id: s,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                search_type: t.type,
                new_page_index: r,
            });
        },
        oK: function (e) {
            let { searchContext: t, searchRequestAnalyticsId: s, searchQueryString: r, searchQuery: n } = e;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_RESULT_EMPTY, {
                search_id: s,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                search_type: t.type,
                search_query_length: d(r),
                search_query_content_length: h(n),
            });
        },
        oR: function (e) {
            let { searchContext: t, searchHistoryIndex: s, searchHistoryTotalResults: r } = e;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_HISTORY_CLICKED, {
                search_id: (0, _.l)(t),
                search_type: t.type,
                search_session_id: l.A.getSessionId(t),
                search_history_index: s,
                search_history_total_results: r,
            });
        },
        rE: function (e) {
            let { searchContext: t, searchAutocompleteSelectAction: s } = e;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
                search_id: (0, _.l)(t),
                search_type: t.type,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                search_autocomplete_select_action: s,
            });
        },
        uZ: function (e) {
            let {
                rating: t,
                searchContext: s,
                unsatisfiedQuestionOption: r,
                unsatisfiedQuestionText: n,
                describeSearchQuestionOption: i,
                describeSearchQuestionText: c,
            } = e;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
                search_id: (0, _.l)(s),
                search_type: s.type,
                search_session_id: l.A.getSessionId(s),
                search_query_id: l.A.getQueryId(s),
                rating: t,
                unsatisfied_question_option: r,
                unsatisfied_question_text: n,
                describe_search_question_option: i,
                describe_search_question_text: c,
            });
        },
        vy: A,
        wU: function (e) {
            let { rating: t, searchContext: s } = e;
            a.Ay.trackWithMetadata(u.HAw.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
                rating: t,
                search_id: (0, _.l)(s),
                search_type: s.type,
                search_session_id: l.A.getSessionId(s),
                search_query_id: l.A.getQueryId(s),
            });
        },
    },
);
