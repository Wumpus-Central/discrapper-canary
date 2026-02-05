r.d(t, {
    H9: () => S,
    J$: () => x,
    L6: () => g,
    TJ: () => k,
    Tf: () => L,
    _k: () => j,
    fd: () => y,
    gp: () => m,
    i4: () => E,
    iK: () => R,
    kc: () => C,
    kq: () => p,
    oK: () => f,
    oR: () => v,
    pY: () => A,
    rE: () => F,
    uZ: () => I,
    vy: () => O,
    wU: () => T,
});
var s,
    n = r(58149),
    l = r(626584),
    a = r(954571),
    i = r(517381),
    o = r(822382),
    u = r(408730),
    c = r(652215);
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
function S(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: r,
        prevSearchRequestAnalyticsId: s,
        isError: l,
        limit: a,
        offset: i,
        page: o,
        totalResults: _,
        pageResults: S,
        isIndexing: E,
        pageNumMessages: g,
        pageNumLinks: p,
        pageNumEmbeds: f,
        pageNumAttachments: A,
        searchQueryString: m,
        searchQuery: R,
    } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_RESULT_VIEWED, {
        search_type: t.type,
        search_id: r,
        prev_search_id: s,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        is_error: l,
        limit: a,
        offset: i,
        page: o,
        total_results: _,
        page_results: S,
        is_indexing: E,
        page_num_messages: g,
        page_num_links: p,
        page_num_embeds: f,
        page_num_attach: A,
        search_query_length: d(m),
        search_query_content_length: h(R),
    });
}
function E(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: r,
        messageId: s,
        guildId: n,
        channelId: l,
        pageResults: i,
        totalResults: o,
        page: _,
        limit: S,
        offset: E,
        index: g,
        searchQueryString: p,
        searchQuery: f,
    } = e;
    a.default.track(c.HAw.SEARCH_RESULT_SELECTED, {
        search_type: t.type,
        search_id: r,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        message_id: s,
        guild_id: n,
        channel_id: l,
        page_results: i,
        total_results: o,
        page: _,
        limit: S,
        offset: E,
        index_num: g,
        search_query_length: d(p),
        search_query_content_length: h(f),
    });
}
function g(e) {
    let { searchContext: t, searchRequestAnalyticsId: r, mode: s } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_RESULT_SORT_CHANGED, {
        search_id: r,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
        new_sort_type: s,
    });
}
function p(e) {
    let { searchContext: t, searchRequestAnalyticsId: r, newPageIndex: s } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: r,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
        new_page_index: s,
    });
}
function f(e) {
    let { searchContext: t, searchRequestAnalyticsId: r, searchQueryString: s, searchQuery: l } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_RESULT_EMPTY, {
        search_id: r,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
        search_query_length: d(s),
        search_query_content_length: h(l),
    });
}
function A(e) {
    let { searchContext: t } = e;
    u.A.initialize(t),
        n.Ay.trackWithMetadata(c.HAw.SEARCH_OPENED, {
            search_id: _(t),
            search_session_id: u.A.getSessionId(t),
            search_type: t.type,
        });
}
function m(e) {
    let { searchContext: t } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_CLOSED, {
        search_id: _(t),
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
    }),
        u.A.terminate(t);
}
function R(e) {
    let { searchContext: t } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_INPUT_CLEARED, {
        search_id: _(t),
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
    });
}
function y(e) {
    let { searchContext: t, query: r, queryString: s, searchQuerySource: l } = e,
        a = Object.keys(r),
        i = a.reduce((e, t) => {
            let s = r[t];
            return (e[t] = Array.isArray(s) ? s.length : 1), e;
        }, {}),
        S = null != s ? (0, o._o)(s) : [],
        E = 0,
        g = 0,
        p = 0,
        f = 0,
        A = 0,
        m = 0,
        R = 0,
        y = 0,
        T = 0;
    S.forEach((e) => {
        e.type === c.LWr.ANSWER_IN
            ? E++
            : e.type === c.LWr.ANSWER_USERNAME_FROM
              ? g++
              : e.type === c.LWr.ANSWER_USERNAME_MENTIONS
                ? p++
                : e.type === c.LWr.ANSWER_HAS
                  ? f++
                  : e.type === c.LWr.ANSWER_BEFORE
                    ? A++
                    : e.type === c.LWr.ANSWER_ON
                      ? m++
                      : e.type === c.LWr.ANSWER_AFTER
                        ? R++
                        : e.type === c.LWr.ANSWER_PINNED
                          ? y++
                          : e.type === c.LWr.ANSWER_AUTHOR_TYPE && T++;
    });
    let x = u.A.getQueryId(t);
    n.Ay.trackWithMetadata(c.HAw.MESSAGES_SEARCH_STARTED, {
        search_id: _(t),
        search_session_id: u.A.getSessionId(t),
        search_query_id: x,
        search_type: t.type,
        search_query_length: d(s),
        search_query_content_length: h(r),
        sort_type: (0, o.XC)(r),
        filter_in_count: E,
        filter_from_count: g,
        filter_mentions_count: p,
        filter_has_count: f,
        filter_before_count: A,
        filter_during_count: m,
        filter_after_count: R,
        filter_pinned_count: y,
        filter_author_type_count: T,
        search_query_source: l,
    }),
        n.Ay.trackWithMetadata(c.HAw.SEARCH_STARTED, {
            search_id: _(t),
            search_session_id: u.A.getSessionId(t),
            search_query_id: u.A.getQueryId(t),
            search_type: t.type,
            num_modifiers: a.length,
            modifiers: i,
        });
}
function T(e) {
    let { rating: t, searchContext: r } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: _(r),
        search_type: r.type,
        search_session_id: u.A.getSessionId(r),
        search_query_id: u.A.getQueryId(r),
    });
}
function x(e) {
    let { searchContext: t } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
    });
}
function I(e) {
    let {
        rating: t,
        searchContext: r,
        unsatisfiedQuestionOption: s,
        unsatisfiedQuestionText: l,
        describeSearchQuestionOption: a,
        describeSearchQuestionText: i,
    } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: _(r),
        search_type: r.type,
        search_session_id: u.A.getSessionId(r),
        search_query_id: u.A.getQueryId(r),
        rating: t,
        unsatisfied_question_option: s,
        unsatisfied_question_text: l,
        describe_search_question_option: a,
        describe_search_question_text: i,
    });
}
function L(e) {
    let { searchContext: t } = e;
    u.A.enqueueEvent(t, () => {
        n.Ay.trackWithMetadata(c.HAw.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t.type,
            search_id: _(t),
            search_session_id: u.A.getSessionId(t),
        });
    });
}
new l.A("SearchTracking");
let b = new Map([
        [c.LWr.ANSWER_IN, "in"],
        [c.LWr.FILTER_IN, "in"],
        [c.LWr.ANSWER_USERNAME_FROM, "from"],
        [c.LWr.FILTER_FROM, "from"],
        [c.LWr.ANSWER_USERNAME_MENTIONS, "mentions"],
        [c.LWr.FILTER_MENTIONS, "mentions"],
        [c.LWr.ANSWER_HAS, "has"],
        [c.LWr.FILTER_HAS, "has"],
        [c.LWr.ANSWER_BEFORE, "before"],
        [c.LWr.FILTER_BEFORE, "before"],
        [c.LWr.ANSWER_ON, "during"],
        [c.LWr.FILTER_ON, "during"],
        [c.LWr.ANSWER_AFTER, "after"],
        [c.LWr.FILTER_AFTER, "after"],
        [c.LWr.ANSWER_PINNED, "pinned"],
        [c.LWr.FILTER_PINNED, "pinned"],
    ]),
    N = new Map([
        [c.x2k.HISTORY, "history"],
        [c.x2k.DATES, "dates"],
        [c.x2k.SEARCH_OPTIONS, "search_options"],
    ]);
function v(e) {
    let { searchContext: t, searchHistoryIndex: r, searchHistoryTotalResults: s } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_HISTORY_CLICKED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_history_index: r,
        search_history_total_results: s,
    });
}
function C(e) {
    let {
        searchContext: t,
        searchQuery: r,
        searchQueryString: s,
        searchAutocompleteResultIndex: l,
        searchAutocompleteTotalResults: a,
        searchTokenType: i,
        searchAutocompleteGroup: o,
        isSearchFilterPrefix: S,
        isSearchFilterAnswer: E,
        isSearchFilterComplete: g,
        isInFilterForSelectedChannel: p,
        searchAutocompleteSelectAction: f,
    } = e;
    c.x2k.HISTORY;
    let A = b.get(o) ?? N.get(o),
        m = null != i ? b.get(i) : null;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_query_length: d(s),
        search_query_content_length: h(r),
        search_autocomplete_result_index: l,
        search_autocomplete_total_results: a,
        search_autocomplete_group: A,
        search_autocomplete_filter_type: m,
        is_search_filter_prefix: S,
        is_search_filter_answer: E,
        is_search_filter_complete: g,
        is_in_filter_for_selected_channel: p,
        search_autocomplete_select_action: f,
    });
}
function F(e) {
    let { searchContext: t, searchAutocompleteSelectAction: r } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_autocomplete_select_action: r,
    });
}
var O = (((s = {}).SEARCH_HEADER = "search_header"), (s.USER_SETTINGS = "user_settings"), s);
function j(e) {
    let { searchContext: t, prevIsCrossDMSettingEnabled: r, isCrossDMSettingEnabled: s, location: l } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_CROSS_DM_SETTING_UPDATE, {
        search_id: null != t ? _(t) : null,
        search_type: t?.type,
        search_session_id: null != t ? u.A.getSessionId(t) : null,
        search_query_id: null != t ? u.A.getQueryId(t) : null,
        prev_is_cross_dm_setting_enabled: r,
        is_cross_dm_setting_enabled: s,
        setting_location: l,
    });
}
function k(e) {
    let { searchContext: t } = e;
    n.Ay.trackWithMetadata(c.HAw.SEARCH_FILTERS_MODAL_OPENED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
    });
}
