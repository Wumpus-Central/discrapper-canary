s.d(t, {
    H9: () => d,
    J$: () => H,
    L6: () => A,
    TJ: () => k,
    Tf: () => L,
    _k: () => Q,
    fd: () => f,
    gp: () => g,
    i4: () => E,
    iK: () => T,
    kc: () => w,
    kq: () => y,
    oK: () => p,
    oR: () => W,
    pY: () => R,
    rE: () => m,
    uZ: () => C,
    vy: () => O,
    wU: () => I,
});
var r,
    n = s(95561),
    i = s(626584),
    a = s(174459),
    _ = s(517381),
    c = s(822382),
    l = s(443390),
    h = s(652215);
function u(e) {
    return e?.trim()?.length ?? 0;
}
function S(e) {
    return (0, c.dX)(e)?.trim()?.length ?? 0;
}
function o(e) {
    let t = (0, c.bS)(e);
    return _.A.getAnalyticsId(t);
}
function d(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: s,
        prevSearchRequestAnalyticsId: r,
        isError: i,
        limit: a,
        offset: _,
        page: c,
        totalResults: o,
        pageResults: d,
        isIndexing: E,
        pageNumMessages: A,
        pageNumLinks: y,
        pageNumEmbeds: p,
        pageNumAttachments: R,
        searchQueryString: g,
        searchQuery: T,
    } = e;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_RESULT_VIEWED, {
        search_type: t.type,
        search_id: s,
        prev_search_id: r,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        is_error: i,
        limit: a,
        offset: _,
        page: c,
        total_results: o,
        page_results: d,
        is_indexing: E,
        page_num_messages: A,
        page_num_links: y,
        page_num_embeds: p,
        page_num_attach: R,
        search_query_length: u(g),
        search_query_content_length: S(T),
    });
}
function E(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: s,
        messageId: r,
        guildId: n,
        channelId: i,
        pageResults: _,
        totalResults: c,
        page: o,
        limit: d,
        offset: E,
        index: A,
        searchQueryString: y,
        searchQuery: p,
    } = e;
    a.default.track(h.HAw.SEARCH_RESULT_SELECTED, {
        search_type: t.type,
        search_id: s,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        message_id: r,
        guild_id: n,
        channel_id: i,
        page_results: _,
        total_results: c,
        page: o,
        limit: d,
        offset: E,
        index_num: A,
        search_query_length: u(y),
        search_query_content_length: S(p),
    });
}
function A(e) {
    let { searchContext: t, searchRequestAnalyticsId: s, mode: r } = e;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_RESULT_SORT_CHANGED, {
        search_id: s,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_type: t.type,
        new_sort_type: r,
    });
}
function y(e) {
    let { searchContext: t, searchRequestAnalyticsId: s, newPageIndex: r } = e;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: s,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_type: t.type,
        new_page_index: r,
    });
}
function p(e) {
    let { searchContext: t, searchRequestAnalyticsId: s, searchQueryString: r, searchQuery: i } = e;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_RESULT_EMPTY, {
        search_id: s,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_type: t.type,
        search_query_length: u(r),
        search_query_content_length: S(i),
    });
}
function R(e) {
    let { searchContext: t } = e;
    (l.A.initialize(t),
        n.Ay.trackWithMetadata(h.HAw.SEARCH_OPENED, {
            search_id: o(t),
            search_session_id: l.A.getSessionId(t),
            search_type: t.type,
        }));
}
function g(e) {
    let { searchContext: t } = e;
    (n.Ay.trackWithMetadata(h.HAw.SEARCH_CLOSED, {
        search_id: o(t),
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_type: t.type,
    }),
        l.A.terminate(t));
}
function T(e) {
    let { searchContext: t } = e;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_INPUT_CLEARED, {
        search_id: o(t),
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_type: t.type,
    });
}
function f(e) {
    let { searchContext: t, query: s, queryString: r, searchQuerySource: i } = e,
        a = null != r ? (0, c._o)(r) : [],
        _ = 0,
        d = 0,
        E = 0,
        A = 0,
        y = 0,
        p = 0,
        R = 0,
        g = 0,
        T = 0;
    a.forEach((e) => {
        e.type === h.LWr.ANSWER_IN
            ? _++
            : e.type === h.LWr.ANSWER_USERNAME_FROM
              ? d++
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
    let f = l.A.getQueryId(t);
    n.Ay.trackWithMetadata(h.HAw.MESSAGES_SEARCH_STARTED, {
        search_id: o(t),
        search_session_id: l.A.getSessionId(t),
        search_query_id: f,
        search_type: t.type,
        search_query_length: u(r),
        search_query_content_length: S(s),
        sort_type: (0, c.XC)(s),
        filter_in_count: _,
        filter_from_count: d,
        filter_mentions_count: E,
        filter_has_count: A,
        filter_before_count: y,
        filter_during_count: p,
        filter_after_count: R,
        filter_pinned_count: g,
        filter_author_type_count: T,
        search_query_source: i,
    });
}
function I(e) {
    let { rating: t, searchContext: s } = e;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: o(s),
        search_type: s.type,
        search_session_id: l.A.getSessionId(s),
        search_query_id: l.A.getQueryId(s),
    });
}
function H(e) {
    let { searchContext: t } = e;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: o(t),
        search_type: t.type,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
    });
}
function C(e) {
    let {
        rating: t,
        searchContext: s,
        unsatisfiedQuestionOption: r,
        unsatisfiedQuestionText: i,
        describeSearchQuestionOption: a,
        describeSearchQuestionText: _,
    } = e;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: o(s),
        search_type: s.type,
        search_session_id: l.A.getSessionId(s),
        search_query_id: l.A.getQueryId(s),
        rating: t,
        unsatisfied_question_option: r,
        unsatisfied_question_text: i,
        describe_search_question_option: a,
        describe_search_question_text: _,
    });
}
function L(e) {
    let { searchContext: t } = e;
    l.A.enqueueEvent(t, () => {
        n.Ay.trackWithMetadata(h.HAw.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t.type,
            search_id: o(t),
            search_session_id: l.A.getSessionId(t),
        });
    });
}
new i.A("SearchTracking");
let M = new Map([
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
    N = new Map([
        [h.x2k.HISTORY, "history"],
        [h.x2k.DATES, "dates"],
    ]);
function W(e) {
    let { searchContext: t, searchHistoryIndex: s, searchHistoryTotalResults: r } = e;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_HISTORY_CLICKED, {
        search_id: o(t),
        search_type: t.type,
        search_session_id: l.A.getSessionId(t),
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
        isSearchFilterPrefix: d,
        isSearchFilterAnswer: E,
        isSearchFilterComplete: A,
        isInFilterForSelectedChannel: y,
        searchAutocompleteSelectAction: p,
    } = e;
    h.x2k.HISTORY;
    let R = M.get(c) ?? N.get(c),
        g = null != _ ? M.get(_) : null;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: o(t),
        search_type: t.type,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_query_length: u(r),
        search_query_content_length: S(s),
        search_autocomplete_result_index: i,
        search_autocomplete_total_results: a,
        search_autocomplete_group: R,
        search_autocomplete_filter_type: g,
        is_search_filter_prefix: d,
        is_search_filter_answer: E,
        is_search_filter_complete: A,
        is_in_filter_for_selected_channel: y,
        search_autocomplete_select_action: p,
    });
}
function m(e) {
    let { searchContext: t, searchAutocompleteSelectAction: s } = e;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: o(t),
        search_type: t.type,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_autocomplete_select_action: s,
    });
}
var O = (((r = {}).SEARCH_HEADER = "search_header"), (r.USER_SETTINGS = "user_settings"), r);
function Q(e) {
    let { searchContext: t, prevIsCrossDMSettingEnabled: s, isCrossDMSettingEnabled: r, location: i } = e;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_CROSS_DM_SETTING_UPDATE, {
        search_id: null != t ? o(t) : null,
        search_type: t?.type,
        search_session_id: null != t ? l.A.getSessionId(t) : null,
        search_query_id: null != t ? l.A.getQueryId(t) : null,
        prev_is_cross_dm_setting_enabled: s,
        is_cross_dm_setting_enabled: r,
        setting_location: i,
    });
}
function k(e) {
    let { searchContext: t } = e;
    n.Ay.trackWithMetadata(h.HAw.SEARCH_FILTERS_MODAL_OPENED, {
        search_id: o(t),
        search_type: t.type,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
    });
}
