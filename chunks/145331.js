s.d(t, {
    H9: () => S,
    J$: () => T,
    L6: () => E,
    TJ: () => W,
    Tf: () => I,
    _k: () => w,
    fd: () => R,
    i4: () => o,
    iK: () => p,
    kc: () => L,
    kq: () => A,
    oK: () => y,
    oR: () => M,
    rE: () => m,
    uZ: () => f,
    vy: () => N,
    wU: () => g,
});
var r,
    a = s(95561),
    n = s(626584),
    i = s(174459),
    _ = s(822382),
    c = s(443390),
    l = s(963144),
    h = s(652215);
function d(e) {
    return e?.trim()?.length ?? 0;
}
function u(e) {
    return (0, _.dX)(e)?.trim()?.length ?? 0;
}
function S(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: s,
        prevSearchRequestAnalyticsId: r,
        isError: n,
        limit: i,
        offset: _,
        page: l,
        totalResults: S,
        pageResults: o,
        isIndexing: E,
        pageNumMessages: A,
        pageNumLinks: y,
        pageNumEmbeds: p,
        pageNumAttachments: R,
        searchQueryString: g,
        searchQuery: T,
    } = e;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_RESULT_VIEWED, {
        search_type: t.type,
        search_id: s,
        prev_search_id: r,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        is_error: n,
        limit: i,
        offset: _,
        page: l,
        total_results: S,
        page_results: o,
        is_indexing: E,
        page_num_messages: A,
        page_num_links: y,
        page_num_embeds: p,
        page_num_attach: R,
        search_query_length: d(g),
        search_query_content_length: u(T),
    });
}
function o(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: s,
        messageId: r,
        guildId: a,
        channelId: n,
        pageResults: _,
        totalResults: l,
        page: S,
        limit: o,
        offset: E,
        index: A,
        searchQueryString: y,
        searchQuery: p,
    } = e;
    i.default.track(h.HAw.SEARCH_RESULT_SELECTED, {
        search_type: t.type,
        search_id: s,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        message_id: r,
        guild_id: a,
        channel_id: n,
        page_results: _,
        total_results: l,
        page: S,
        limit: o,
        offset: E,
        index_num: A,
        search_query_length: d(y),
        search_query_content_length: u(p),
    });
}
function E(e) {
    let { searchContext: t, searchRequestAnalyticsId: s, mode: r } = e;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_RESULT_SORT_CHANGED, {
        search_id: s,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_type: t.type,
        new_sort_type: r,
    });
}
function A(e) {
    let { searchContext: t, searchRequestAnalyticsId: s, newPageIndex: r } = e;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: s,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_type: t.type,
        new_page_index: r,
    });
}
function y(e) {
    let { searchContext: t, searchRequestAnalyticsId: s, searchQueryString: r, searchQuery: n } = e;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_RESULT_EMPTY, {
        search_id: s,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_type: t.type,
        search_query_length: d(r),
        search_query_content_length: u(n),
    });
}
function p(e) {
    let { searchContext: t } = e;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_INPUT_CLEARED, {
        search_id: (0, l.l)(t),
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_type: t.type,
    });
}
function R(e) {
    let { searchContext: t, query: s, queryString: r, searchQuerySource: n } = e,
        i = null != r ? (0, _._o)(r) : [],
        S = 0,
        o = 0,
        E = 0,
        A = 0,
        y = 0,
        p = 0,
        R = 0,
        g = 0,
        T = 0;
    i.forEach((e) => {
        e.type === h.LWr.ANSWER_IN
            ? S++
            : e.type === h.LWr.ANSWER_USERNAME_FROM
              ? o++
              : e.type === h.LWr.ANSWER_USERNAME_MENTIONS
                ? E++
                : e.type === h.LWr.ANSWER_HAS
                  ? A++
                  : e.type === h.LWr.ANSWER_BEFORE
                    ? y++
                    : e.type === h.LWr.ANSWER_ON
                      ? p++
                      : e.type === h.LWr.ANSWER_AFTER
                        ? R++
                        : e.type === h.LWr.ANSWER_PINNED
                          ? g++
                          : e.type === h.LWr.ANSWER_AUTHOR_TYPE && T++;
    });
    let f = c.A.getQueryId(t);
    a.Ay.trackWithMetadata(h.HAw.MESSAGES_SEARCH_STARTED, {
        search_id: (0, l.l)(t),
        search_session_id: c.A.getSessionId(t),
        search_query_id: f,
        search_type: t.type,
        search_query_length: d(r),
        search_query_content_length: u(s),
        sort_type: (0, _.XC)(s),
        filter_in_count: S,
        filter_from_count: o,
        filter_mentions_count: E,
        filter_has_count: A,
        filter_before_count: y,
        filter_during_count: p,
        filter_after_count: R,
        filter_pinned_count: g,
        filter_author_type_count: T,
        search_query_source: n,
    });
}
function g(e) {
    let { rating: t, searchContext: s } = e;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: (0, l.l)(s),
        search_type: s.type,
        search_session_id: c.A.getSessionId(s),
        search_query_id: c.A.getQueryId(s),
    });
}
function T(e) {
    let { searchContext: t } = e;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: (0, l.l)(t),
        search_type: t.type,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
    });
}
function f(e) {
    let {
        rating: t,
        searchContext: s,
        unsatisfiedQuestionOption: r,
        unsatisfiedQuestionText: n,
        describeSearchQuestionOption: i,
        describeSearchQuestionText: _,
    } = e;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: (0, l.l)(s),
        search_type: s.type,
        search_session_id: c.A.getSessionId(s),
        search_query_id: c.A.getQueryId(s),
        rating: t,
        unsatisfied_question_option: r,
        unsatisfied_question_text: n,
        describe_search_question_option: i,
        describe_search_question_text: _,
    });
}
function I(e) {
    let { searchContext: t } = e;
    c.A.enqueueEvent(t, () => {
        a.Ay.trackWithMetadata(h.HAw.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t.type,
            search_id: (0, l.l)(t),
            search_session_id: c.A.getSessionId(t),
        });
    });
}
new n.A("SearchTracking");
let H = new Map([
        [h.LWr.ANSWER_IN, "in"],
        [h.LWr.FILTER_IN, "in"],
        [h.LWr.ANSWER_USERNAME_FROM, "from"],
        [h.LWr.FILTER_FROM, "from"],
        [h.LWr.ANSWER_USERNAME_MENTIONS, "mentions"],
        [h.LWr.FILTER_MENTIONS, "mentions"],
        [h.LWr.ANSWER_HAS, "has"],
        [h.LWr.FILTER_HAS, "has"],
        [h.LWr.ANSWER_BEFORE, "before"],
        [h.LWr.FILTER_BEFORE, "before"],
        [h.LWr.ANSWER_ON, "during"],
        [h.LWr.FILTER_ON, "during"],
        [h.LWr.ANSWER_AFTER, "after"],
        [h.LWr.FILTER_AFTER, "after"],
        [h.LWr.ANSWER_PINNED, "pinned"],
        [h.LWr.FILTER_PINNED, "pinned"],
    ]),
    C = new Map([
        [h.x2k.HISTORY, "history"],
        [h.x2k.DATES, "dates"],
    ]);
function M(e) {
    let { searchContext: t, searchHistoryIndex: s, searchHistoryTotalResults: r } = e;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_HISTORY_CLICKED, {
        search_id: (0, l.l)(t),
        search_type: t.type,
        search_session_id: c.A.getSessionId(t),
        search_history_index: s,
        search_history_total_results: r,
    });
}
function L(e) {
    let {
        searchContext: t,
        searchQuery: s,
        searchQueryString: r,
        searchAutocompleteResultIndex: n,
        searchAutocompleteTotalResults: i,
        searchTokenType: _,
        searchAutocompleteGroup: S,
        isSearchFilterPrefix: o,
        isSearchFilterAnswer: E,
        isSearchFilterComplete: A,
        isInFilterForSelectedChannel: y,
        searchAutocompleteSelectAction: p,
    } = e;
    h.x2k.HISTORY;
    let R = H.get(S) ?? C.get(S),
        g = null != _ ? H.get(_) : null;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: (0, l.l)(t),
        search_type: t.type,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_query_length: d(r),
        search_query_content_length: u(s),
        search_autocomplete_result_index: n,
        search_autocomplete_total_results: i,
        search_autocomplete_group: R,
        search_autocomplete_filter_type: g,
        is_search_filter_prefix: o,
        is_search_filter_answer: E,
        is_search_filter_complete: A,
        is_in_filter_for_selected_channel: y,
        search_autocomplete_select_action: p,
    });
}
function m(e) {
    let { searchContext: t, searchAutocompleteSelectAction: s } = e;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: (0, l.l)(t),
        search_type: t.type,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_autocomplete_select_action: s,
    });
}
var N = (((r = {}).SEARCH_HEADER = "search_header"), (r.USER_SETTINGS = "user_settings"), r);
function w(e) {
    let { searchContext: t, prevIsCrossDMSettingEnabled: s, isCrossDMSettingEnabled: r, location: n } = e;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_CROSS_DM_SETTING_UPDATE, {
        search_id: null != t ? (0, l.l)(t) : null,
        search_type: t?.type,
        search_session_id: null != t ? c.A.getSessionId(t) : null,
        search_query_id: null != t ? c.A.getQueryId(t) : null,
        prev_is_cross_dm_setting_enabled: s,
        is_cross_dm_setting_enabled: r,
        setting_location: n,
    });
}
function W(e) {
    let { searchContext: t } = e;
    a.Ay.trackWithMetadata(h.HAw.SEARCH_FILTERS_MODAL_OPENED, {
        search_id: (0, l.l)(t),
        search_type: t.type,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
    });
}
