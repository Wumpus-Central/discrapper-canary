var r,
    n = s(149468),
    a = s(626584),
    i = s(129230),
    c = s(822382),
    l = s(617713),
    u = s(963144),
    _ = s(652215);
function h(e) {
    return e?.trim()?.length ?? 0;
}
function d(e) {
    return (0, c.dX)(e)?.trim()?.length ?? 0;
}
new a.A("SearchTracking");
let o = new Map([
        [_.LWr.ANSWER_IN, "in"],
        [_.LWr.FILTER_IN, "in"],
        [_.LWr.ANSWER_USERNAME_FROM, "from"],
        [_.LWr.FILTER_FROM, "from"],
        [_.LWr.ANSWER_USERNAME_MENTIONS, "mentions"],
        [_.LWr.FILTER_MENTIONS, "mentions"],
        [_.LWr.ANSWER_HAS, "has"],
        [_.LWr.FILTER_HAS, "has"],
        [_.LWr.ANSWER_BEFORE, "before"],
        [_.LWr.FILTER_BEFORE, "before"],
        [_.LWr.ANSWER_ON, "during"],
        [_.LWr.FILTER_ON, "during"],
        [_.LWr.ANSWER_AFTER, "after"],
        [_.LWr.FILTER_AFTER, "after"],
        [_.LWr.ANSWER_PINNED, "pinned"],
        [_.LWr.FILTER_PINNED, "pinned"],
    ]),
    S = new Map([
        [_.x2k.HISTORY, "history"],
        [_.x2k.DATES, "dates"],
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
                isError: a,
                limit: i,
                offset: c,
                page: u,
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
            n.Ay.trackWithMetadata(_.HAw.SEARCH_RESULT_VIEWED, {
                search_type: t.type,
                search_id: s,
                prev_search_id: r,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                is_error: a,
                limit: i,
                offset: c,
                page: u,
                total_results: o,
                page_results: S,
                is_indexing: A,
                page_num_messages: E,
                page_num_links: g,
                page_num_embeds: p,
                page_num_attach: y,
                search_query_length: h(R),
                search_query_content_length: d(T),
            });
        },
        L6: function (e) {
            let { searchContext: t, searchRequestAnalyticsId: s, mode: r } = e;
            n.Ay.trackWithMetadata(_.HAw.SEARCH_RESULT_SORT_CHANGED, {
                search_id: s,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                search_type: t.type,
                new_sort_type: r,
            });
        },
        TJ: function (e) {
            let { searchContext: t } = e;
            n.Ay.trackWithMetadata(_.HAw.SEARCH_FILTERS_MODAL_OPENED, {
                search_id: (0, u.l)(t),
                search_type: t.type,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
            });
        },
        Tf: function (e) {
            let { searchContext: t } = e;
            l.A.enqueueEvent(t, () => {
                n.Ay.trackWithMetadata(_.HAw.SEARCH_MESSAGES_CHANNEL_PREFILL, {
                    search_type: t.type,
                    search_id: (0, u.l)(t),
                    search_session_id: l.A.getSessionId(t),
                });
            });
        },
        _k: function (e) {
            let { searchContext: t, prevIsCrossDMSettingEnabled: s, isCrossDMSettingEnabled: r, location: a } = e;
            n.Ay.trackWithMetadata(_.HAw.SEARCH_CROSS_DM_SETTING_UPDATE, {
                search_id: null != t ? (0, u.l)(t) : null,
                search_type: t?.type,
                search_session_id: null != t ? l.A.getSessionId(t) : null,
                search_query_id: null != t ? l.A.getQueryId(t) : null,
                prev_is_cross_dm_setting_enabled: s,
                is_cross_dm_setting_enabled: r,
                setting_location: a,
            });
        },
        fd: function (e) {
            let { searchContext: t, query: s, queryString: r, searchQuerySource: a } = e,
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
                e.type === _.LWr.ANSWER_IN
                    ? o++
                    : e.type === _.LWr.ANSWER_USERNAME_FROM
                      ? S++
                      : e.type === _.LWr.ANSWER_USERNAME_MENTIONS
                        ? A++
                        : e.type === _.LWr.ANSWER_HAS
                          ? E++
                          : e.type === _.LWr.ANSWER_BEFORE
                            ? g++
                            : e.type === _.LWr.ANSWER_ON
                              ? p++
                              : e.type === _.LWr.ANSWER_AFTER
                                ? y++
                                : e.type === _.LWr.ANSWER_PINNED
                                  ? R++
                                  : e.type === _.LWr.ANSWER_AUTHOR_TYPE && T++;
            });
            let f = l.A.getQueryId(t);
            n.Ay.trackWithMetadata(_.HAw.MESSAGES_SEARCH_STARTED, {
                search_id: (0, u.l)(t),
                search_session_id: l.A.getSessionId(t),
                search_query_id: f,
                search_type: t.type,
                search_query_length: h(r),
                search_query_content_length: d(s),
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
                search_query_source: a,
            });
        },
        i4: function (e) {
            let {
                searchContext: t,
                searchRequestAnalyticsId: s,
                messageId: r,
                guildId: n,
                channelId: a,
                pageResults: c,
                totalResults: u,
                page: o,
                limit: S,
                offset: A,
                index: E,
                searchQueryString: g,
                searchQuery: p,
            } = e;
            i.default.track(_.HAw.SEARCH_RESULT_SELECTED, {
                search_type: t.type,
                search_id: s,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                message_id: r,
                guild_id: n,
                channel_id: a,
                page_results: c,
                total_results: u,
                page: o,
                limit: S,
                offset: A,
                index_num: E,
                search_query_length: h(g),
                search_query_content_length: d(p),
            });
        },
        iK: function (e) {
            let { searchContext: t } = e;
            n.Ay.trackWithMetadata(_.HAw.SEARCH_INPUT_CLEARED, {
                search_id: (0, u.l)(t),
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
                searchAutocompleteResultIndex: a,
                searchAutocompleteTotalResults: i,
                searchTokenType: c,
                searchAutocompleteGroup: A,
                isSearchFilterPrefix: E,
                isSearchFilterAnswer: g,
                isSearchFilterComplete: p,
                isInFilterForSelectedChannel: y,
                searchAutocompleteSelectAction: R,
            } = e;
            _.x2k.HISTORY;
            let T = o.get(A) ?? S.get(A),
                f = null != c ? o.get(c) : null;
            n.Ay.trackWithMetadata(_.HAw.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
                search_id: (0, u.l)(t),
                search_type: t.type,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                search_query_length: h(r),
                search_query_content_length: d(s),
                search_autocomplete_result_index: a,
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
            n.Ay.trackWithMetadata(_.HAw.SEARCH_RESULT_PAGE_CHANGED, {
                search_id: s,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                search_type: t.type,
                new_page_index: r,
            });
        },
        oK: function (e) {
            let { searchContext: t, searchRequestAnalyticsId: s, searchQueryString: r, searchQuery: a } = e;
            n.Ay.trackWithMetadata(_.HAw.SEARCH_RESULT_EMPTY, {
                search_id: s,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                search_type: t.type,
                search_query_length: h(r),
                search_query_content_length: d(a),
            });
        },
        oR: function (e) {
            let { searchContext: t, searchHistoryIndex: s, searchHistoryTotalResults: r } = e;
            n.Ay.trackWithMetadata(_.HAw.SEARCH_HISTORY_CLICKED, {
                search_id: (0, u.l)(t),
                search_type: t.type,
                search_session_id: l.A.getSessionId(t),
                search_history_index: s,
                search_history_total_results: r,
            });
        },
        rE: function (e) {
            let { searchContext: t, searchAutocompleteSelectAction: s } = e;
            n.Ay.trackWithMetadata(_.HAw.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
                search_id: (0, u.l)(t),
                search_type: t.type,
                search_session_id: l.A.getSessionId(t),
                search_query_id: l.A.getQueryId(t),
                search_autocomplete_select_action: s,
            });
        },
        vy: A,
    },
);
