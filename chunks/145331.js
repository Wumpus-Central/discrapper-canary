r.d(t, {
    H9: () => f,
    J$: () => T,
    L6: () => E,
    TJ: () => j,
    Tf: () => b,
    _k: () => k,
    fd: () => y,
    gp: () => m,
    i4: () => S,
    iK: () => R,
    kc: () => v,
    kq: () => g,
    oK: () => p,
    oR: () => N,
    pY: () => A,
    rE: () => F,
    uZ: () => I,
    vy: () => O,
    wU: () => x,
});
var n,
    s = r(58149),
    l = r(626584),
    a = r(954571),
    i = r(517381),
    o = r(822382),
    c = r(408730),
    u = r(652215);
function d(e) {
    return e?.trim()?.length ?? 0;
}
function h(e) {
    return (0, o.dX)(e)?.trim()?.length ?? 0;
}
function _(e) {
    let t = (0, o.bS)(e);
    return i.A.getAnalyticsId(t);
}
function f(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: r,
        prevSearchRequestAnalyticsId: n,
        isError: l,
        limit: a,
        offset: i,
        page: o,
        totalResults: _,
        pageResults: f,
        isIndexing: S,
        pageNumMessages: E,
        pageNumLinks: g,
        pageNumEmbeds: p,
        pageNumAttachments: A,
        searchQueryString: m,
        searchQuery: R,
    } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_RESULT_VIEWED, {
        search_type: t.type,
        search_id: r,
        prev_search_id: n,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        is_error: l,
        limit: a,
        offset: i,
        page: o,
        total_results: _,
        page_results: f,
        is_indexing: S,
        page_num_messages: E,
        page_num_links: g,
        page_num_embeds: p,
        page_num_attach: A,
        search_query_length: d(m),
        search_query_content_length: h(R),
    });
}
function S(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: r,
        messageId: n,
        guildId: s,
        channelId: l,
        pageResults: i,
        totalResults: o,
        page: _,
        limit: f,
        offset: S,
        index: E,
        searchQueryString: g,
        searchQuery: p,
    } = e;
    a.default.track(u.HAw.SEARCH_RESULT_SELECTED, {
        search_type: t.type,
        search_id: r,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        message_id: n,
        guild_id: s,
        channel_id: l,
        page_results: i,
        total_results: o,
        page: _,
        limit: f,
        offset: S,
        index_num: E,
        search_query_length: d(g),
        search_query_content_length: h(p),
    });
}
function E(e) {
    let { searchContext: t, searchRequestAnalyticsId: r, mode: n } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_RESULT_SORT_CHANGED, {
        search_id: r,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_type: t.type,
        new_sort_type: n,
    });
}
function g(e) {
    let { searchContext: t, searchRequestAnalyticsId: r, newPageIndex: n } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: r,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_type: t.type,
        new_page_index: n,
    });
}
function p(e) {
    let { searchContext: t, searchRequestAnalyticsId: r, searchQueryString: n, searchQuery: l } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_RESULT_EMPTY, {
        search_id: r,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_type: t.type,
        search_query_length: d(n),
        search_query_content_length: h(l),
    });
}
function A(e) {
    let { searchContext: t } = e;
    c.A.initialize(t),
        s.Ay.trackWithMetadata(u.HAw.SEARCH_OPENED, {
            search_id: _(t),
            search_session_id: c.A.getSessionId(t),
            search_type: t.type,
        });
}
function m(e) {
    let { searchContext: t } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_CLOSED, {
        search_id: _(t),
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_type: t.type,
    }),
        c.A.terminate(t);
}
function R(e) {
    let { searchContext: t } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_INPUT_CLEARED, {
        search_id: _(t),
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_type: t.type,
    });
}
function y(e) {
    let { searchContext: t, query: r, queryString: n, searchQuerySource: l } = e,
        a = Object.keys(r),
        i = a.reduce((e, t) => {
            let n = r[t];
            return (e[t] = Array.isArray(n) ? n.length : 1), e;
        }, {}),
        f = null != n ? (0, o._o)(n) : [],
        S = 0,
        E = 0,
        g = 0,
        p = 0,
        A = 0,
        m = 0,
        R = 0,
        y = 0,
        x = 0;
    f.forEach((e) => {
        e.type === u.LWr.ANSWER_IN
            ? S++
            : e.type === u.LWr.ANSWER_USERNAME_FROM
              ? E++
              : e.type === u.LWr.ANSWER_USERNAME_MENTIONS
                ? g++
                : e.type === u.LWr.ANSWER_HAS
                  ? p++
                  : e.type === u.LWr.ANSWER_BEFORE
                    ? A++
                    : e.type === u.LWr.ANSWER_ON
                      ? m++
                      : e.type === u.LWr.ANSWER_AFTER
                        ? R++
                        : e.type === u.LWr.ANSWER_PINNED
                          ? y++
                          : e.type === u.LWr.ANSWER_AUTHOR_TYPE && x++;
    });
    let T = c.A.getQueryId(t);
    s.Ay.trackWithMetadata(u.HAw.MESSAGES_SEARCH_STARTED, {
        search_id: _(t),
        search_session_id: c.A.getSessionId(t),
        search_query_id: T,
        search_type: t.type,
        search_query_length: d(n),
        search_query_content_length: h(r),
        sort_type: (0, o.XC)(r),
        filter_in_count: S,
        filter_from_count: E,
        filter_mentions_count: g,
        filter_has_count: p,
        filter_before_count: A,
        filter_during_count: m,
        filter_after_count: R,
        filter_pinned_count: y,
        filter_author_type_count: x,
        search_query_source: l,
    }),
        s.Ay.trackWithMetadata(u.HAw.SEARCH_STARTED, {
            search_id: _(t),
            search_session_id: c.A.getSessionId(t),
            search_query_id: c.A.getQueryId(t),
            search_type: t.type,
            num_modifiers: a.length,
            modifiers: i,
        });
}
function x(e) {
    let { rating: t, searchContext: r } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: _(r),
        search_type: r.type,
        search_session_id: c.A.getSessionId(r),
        search_query_id: c.A.getQueryId(r),
    });
}
function T(e) {
    let { searchContext: t } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
    });
}
function I(e) {
    let {
        rating: t,
        searchContext: r,
        unsatisfiedQuestionOption: n,
        unsatisfiedQuestionText: l,
        describeSearchQuestionOption: a,
        describeSearchQuestionText: i,
    } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: _(r),
        search_type: r.type,
        search_session_id: c.A.getSessionId(r),
        search_query_id: c.A.getQueryId(r),
        rating: t,
        unsatisfied_question_option: n,
        unsatisfied_question_text: l,
        describe_search_question_option: a,
        describe_search_question_text: i,
    });
}
function b(e) {
    let { searchContext: t } = e;
    c.A.enqueueEvent(t, () => {
        s.Ay.trackWithMetadata(u.HAw.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t.type,
            search_id: _(t),
            search_session_id: c.A.getSessionId(t),
        });
    });
}
new l.A("SearchTracking");
let L = new Map([
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
    C = new Map([
        [u.x2k.HISTORY, "history"],
        [u.x2k.DATES, "dates"],
    ]);
function N(e) {
    let { searchContext: t, searchHistoryIndex: r, searchHistoryTotalResults: n } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_HISTORY_CLICKED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: c.A.getSessionId(t),
        search_history_index: r,
        search_history_total_results: n,
    });
}
function v(e) {
    let {
        searchContext: t,
        searchQuery: r,
        searchQueryString: n,
        searchAutocompleteResultIndex: l,
        searchAutocompleteTotalResults: a,
        searchTokenType: i,
        searchAutocompleteGroup: o,
        isSearchFilterPrefix: f,
        isSearchFilterAnswer: S,
        isSearchFilterComplete: E,
        isInFilterForSelectedChannel: g,
        searchAutocompleteSelectAction: p,
    } = e;
    u.x2k.HISTORY;
    let A = L.get(o) ?? C.get(o),
        m = null != i ? L.get(i) : null;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_query_length: d(n),
        search_query_content_length: h(r),
        search_autocomplete_result_index: l,
        search_autocomplete_total_results: a,
        search_autocomplete_group: A,
        search_autocomplete_filter_type: m,
        is_search_filter_prefix: f,
        is_search_filter_answer: S,
        is_search_filter_complete: E,
        is_in_filter_for_selected_channel: g,
        search_autocomplete_select_action: p,
    });
}
function F(e) {
    let { searchContext: t, searchAutocompleteSelectAction: r } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
        search_autocomplete_select_action: r,
    });
}
var O = (((n = {}).SEARCH_HEADER = "search_header"), (n.USER_SETTINGS = "user_settings"), n);
function k(e) {
    let { searchContext: t, prevIsCrossDMSettingEnabled: r, isCrossDMSettingEnabled: n, location: l } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_CROSS_DM_SETTING_UPDATE, {
        search_id: null != t ? _(t) : null,
        search_type: t?.type,
        search_session_id: null != t ? c.A.getSessionId(t) : null,
        search_query_id: null != t ? c.A.getQueryId(t) : null,
        prev_is_cross_dm_setting_enabled: r,
        is_cross_dm_setting_enabled: n,
        setting_location: l,
    });
}
function j(e) {
    let { searchContext: t } = e;
    s.Ay.trackWithMetadata(u.HAw.SEARCH_FILTERS_MODAL_OPENED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: c.A.getSessionId(t),
        search_query_id: c.A.getQueryId(t),
    });
}
