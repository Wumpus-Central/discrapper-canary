s.d(t, {
    H9: () => S,
    J$: () => H,
    L6: () => E,
    TJ: () => Q,
    Tf: () => N,
    _k: () => O,
    fd: () => f,
    gp: () => R,
    i4: () => A,
    iK: () => T,
    kc: () => w,
    kq: () => y,
    oK: () => p,
    oR: () => W,
    pY: () => g,
    rE: () => m,
    uZ: () => L,
    vy: () => k,
    wU: () => I,
});
var r,
    n = s(95561),
    i = s(626584),
    a = s(174459),
    _ = s(517381),
    c = s(822382),
    u = s(408730),
    l = s(652215);
function h(e) {
    return e?.trim()?.length ?? 0;
}
function o(e) {
    return (0, c.dX)(e)?.trim()?.length ?? 0;
}
function d(e) {
    let t = (0, c.bS)(e);
    return _.A.getAnalyticsId(t);
}
function S(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: s,
        prevSearchRequestAnalyticsId: r,
        isError: i,
        limit: a,
        offset: _,
        page: c,
        totalResults: d,
        pageResults: S,
        isIndexing: A,
        pageNumMessages: E,
        pageNumLinks: y,
        pageNumEmbeds: p,
        pageNumAttachments: g,
        searchQueryString: R,
        searchQuery: T,
    } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_RESULT_VIEWED, {
        search_type: t.type,
        search_id: s,
        prev_search_id: r,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        is_error: i,
        limit: a,
        offset: _,
        page: c,
        total_results: d,
        page_results: S,
        is_indexing: A,
        page_num_messages: E,
        page_num_links: y,
        page_num_embeds: p,
        page_num_attach: g,
        search_query_length: h(R),
        search_query_content_length: o(T),
    });
}
function A(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: s,
        messageId: r,
        guildId: n,
        channelId: i,
        pageResults: _,
        totalResults: c,
        page: d,
        limit: S,
        offset: A,
        index: E,
        searchQueryString: y,
        searchQuery: p,
    } = e;
    a.default.track(l.HAw.SEARCH_RESULT_SELECTED, {
        search_type: t.type,
        search_id: s,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        message_id: r,
        guild_id: n,
        channel_id: i,
        page_results: _,
        total_results: c,
        page: d,
        limit: S,
        offset: A,
        index_num: E,
        search_query_length: h(y),
        search_query_content_length: o(p),
    });
}
function E(e) {
    let { searchContext: t, searchRequestAnalyticsId: s, mode: r } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_RESULT_SORT_CHANGED, {
        search_id: s,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
        new_sort_type: r,
    });
}
function y(e) {
    let { searchContext: t, searchRequestAnalyticsId: s, newPageIndex: r } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: s,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
        new_page_index: r,
    });
}
function p(e) {
    let { searchContext: t, searchRequestAnalyticsId: s, searchQueryString: r, searchQuery: i } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_RESULT_EMPTY, {
        search_id: s,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
        search_query_length: h(r),
        search_query_content_length: o(i),
    });
}
function g(e) {
    let { searchContext: t } = e;
    u.A.initialize(t),
        n.Ay.trackWithMetadata(l.HAw.SEARCH_OPENED, {
            search_id: d(t),
            search_session_id: u.A.getSessionId(t),
            search_type: t.type,
        });
}
function R(e) {
    let { searchContext: t } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_CLOSED, {
        search_id: d(t),
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
    }),
        u.A.terminate(t);
}
function T(e) {
    let { searchContext: t } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_INPUT_CLEARED, {
        search_id: d(t),
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
    });
}
function f(e) {
    let { searchContext: t, query: s, queryString: r, searchQuerySource: i } = e,
        a = null != r ? (0, c._o)(r) : [],
        _ = 0,
        S = 0,
        A = 0,
        E = 0,
        y = 0,
        p = 0,
        g = 0,
        R = 0,
        T = 0;
    a.forEach((e) => {
        e.type === l.LWr.ANSWER_IN
            ? _++
            : e.type === l.LWr.ANSWER_USERNAME_FROM
              ? S++
              : e.type === l.LWr.ANSWER_USERNAME_MENTIONS
                ? A++
                : e.type === l.LWr.ANSWER_HAS
                  ? E++
                  : e.type === l.LWr.ANSWER_BEFORE
                    ? y++
                    : e.type === l.LWr.ANSWER_ON
                      ? p++
                      : e.type === l.LWr.ANSWER_AFTER
                        ? g++
                        : e.type === l.LWr.ANSWER_PINNED
                          ? R++
                          : e.type === l.LWr.ANSWER_AUTHOR_TYPE && T++;
    });
    let f = u.A.getQueryId(t);
    n.Ay.trackWithMetadata(l.HAw.MESSAGES_SEARCH_STARTED, {
        search_id: d(t),
        search_session_id: u.A.getSessionId(t),
        search_query_id: f,
        search_type: t.type,
        search_query_length: h(r),
        search_query_content_length: o(s),
        sort_type: (0, c.XC)(s),
        filter_in_count: _,
        filter_from_count: S,
        filter_mentions_count: A,
        filter_has_count: E,
        filter_before_count: y,
        filter_during_count: p,
        filter_after_count: g,
        filter_pinned_count: R,
        filter_author_type_count: T,
        search_query_source: i,
    });
}
function I(e) {
    let { rating: t, searchContext: s } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: d(s),
        search_type: s.type,
        search_session_id: u.A.getSessionId(s),
        search_query_id: u.A.getQueryId(s),
    });
}
function H(e) {
    let { searchContext: t } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: d(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
    });
}
function L(e) {
    let {
        rating: t,
        searchContext: s,
        unsatisfiedQuestionOption: r,
        unsatisfiedQuestionText: i,
        describeSearchQuestionOption: a,
        describeSearchQuestionText: _,
    } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: d(s),
        search_type: s.type,
        search_session_id: u.A.getSessionId(s),
        search_query_id: u.A.getQueryId(s),
        rating: t,
        unsatisfied_question_option: r,
        unsatisfied_question_text: i,
        describe_search_question_option: a,
        describe_search_question_text: _,
    });
}
function N(e) {
    let { searchContext: t } = e;
    u.A.enqueueEvent(t, () => {
        n.Ay.trackWithMetadata(l.HAw.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t.type,
            search_id: d(t),
            search_session_id: u.A.getSessionId(t),
        });
    });
}
new i.A("SearchTracking");
let C = new Map([
        [l.LWr.ANSWER_IN, "in"],
        [l.LWr.FILTER_IN, "in"],
        [l.LWr.ANSWER_USERNAME_FROM, "from"],
        [l.LWr.FILTER_FROM, "from"],
        [l.LWr.ANSWER_USERNAME_MENTIONS, "mentions"],
        [l.LWr.FILTER_MENTIONS, "mentions"],
        [l.LWr.ANSWER_HAS, "has"],
        [l.LWr.FILTER_HAS, "has"],
        [l.LWr.ANSWER_BEFORE, "before"],
        [l.LWr.FILTER_BEFORE, "before"],
        [l.LWr.ANSWER_ON, "during"],
        [l.LWr.FILTER_ON, "during"],
        [l.LWr.ANSWER_AFTER, "after"],
        [l.LWr.FILTER_AFTER, "after"],
        [l.LWr.ANSWER_PINNED, "pinned"],
        [l.LWr.FILTER_PINNED, "pinned"],
    ]),
    M = new Map([
        [l.x2k.HISTORY, "history"],
        [l.x2k.DATES, "dates"],
    ]);
function W(e) {
    let { searchContext: t, searchHistoryIndex: s, searchHistoryTotalResults: r } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_HISTORY_CLICKED, {
        search_id: d(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_history_index: s,
        search_history_total_results: r,
    });
}
function w(e) {
    let {
        searchContext: t,
        searchQuery: s,
        searchQueryString: r,
        searchAutocompleteResultIndex: i,
        searchAutocompleteTotalResults: a,
        searchTokenType: _,
        searchAutocompleteGroup: c,
        isSearchFilterPrefix: S,
        isSearchFilterAnswer: A,
        isSearchFilterComplete: E,
        isInFilterForSelectedChannel: y,
        searchAutocompleteSelectAction: p,
    } = e;
    l.x2k.HISTORY;
    let g = C.get(c) ?? M.get(c),
        R = null != _ ? C.get(_) : null;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: d(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_query_length: h(r),
        search_query_content_length: o(s),
        search_autocomplete_result_index: i,
        search_autocomplete_total_results: a,
        search_autocomplete_group: g,
        search_autocomplete_filter_type: R,
        is_search_filter_prefix: S,
        is_search_filter_answer: A,
        is_search_filter_complete: E,
        is_in_filter_for_selected_channel: y,
        search_autocomplete_select_action: p,
    });
}
function m(e) {
    let { searchContext: t, searchAutocompleteSelectAction: s } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: d(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_autocomplete_select_action: s,
    });
}
var k = (((r = {}).SEARCH_HEADER = "search_header"), (r.USER_SETTINGS = "user_settings"), r);
function O(e) {
    let { searchContext: t, prevIsCrossDMSettingEnabled: s, isCrossDMSettingEnabled: r, location: i } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_CROSS_DM_SETTING_UPDATE, {
        search_id: null != t ? d(t) : null,
        search_type: t?.type,
        search_session_id: null != t ? u.A.getSessionId(t) : null,
        search_query_id: null != t ? u.A.getQueryId(t) : null,
        prev_is_cross_dm_setting_enabled: s,
        is_cross_dm_setting_enabled: r,
        setting_location: i,
    });
}
function Q(e) {
    let { searchContext: t } = e;
    n.Ay.trackWithMetadata(l.HAw.SEARCH_FILTERS_MODAL_OPENED, {
        search_id: d(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
    });
}
