n.d(t, {
    H9: () => p,
    J$: () => v,
    L6: () => h,
    TJ: () => x,
    Tf: () => I,
    _k: () => D,
    fd: () => O,
    gp: () => b,
    i4: () => _,
    iK: () => y,
    kc: () => R,
    kq: () => m,
    oK: () => g,
    oR: () => N,
    pY: () => E,
    rE: () => w,
    uZ: () => S,
    vy: () => P,
    wU: () => A,
}),
    n(733351),
    n(896048);
var r = n(58149),
    i = n(626584),
    a = n(954571),
    s = n(517381),
    o = n(822382),
    l = n(408730),
    c = n(652215);

function u(e) {
    var t, n;
    return null != (t = null == e || null == (n = e.trim()) ? void 0 : n.length) ? t : 0;
}

function d(e) {
    var t, n, r;
    return null != (t = null == (r = (0, o.dX)(e)) || null == (n = r.trim()) ? void 0 : n.length) ? t : 0;
}

function f(e) {
    let t = (0, o.bS)(e);
    return s.A.getAnalyticsId(t);
}

function p(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: n,
        prevSearchRequestAnalyticsId: i,
        isError: a,
        limit: s,
        offset: o,
        page: f,
        totalResults: p,
        pageResults: _,
        isIndexing: h,
        pageNumMessages: m,
        pageNumLinks: g,
        pageNumEmbeds: E,
        pageNumAttachments: b,
        searchQueryString: y,
        searchQuery: O,
    } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_RESULT_VIEWED, {
        search_type: t.type,
        search_id: n,
        prev_search_id: i,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        is_error: a,
        limit: s,
        offset: o,
        page: f,
        total_results: p,
        page_results: _,
        is_indexing: h,
        page_num_messages: m,
        page_num_links: g,
        page_num_embeds: E,
        page_num_attach: b,
        search_query_length: u(y),
        search_query_content_length: d(O),
    });
}

function _(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: n,
        messageId: r,
        guildId: i,
        channelId: s,
        pageResults: o,
        totalResults: f,
        page: p,
        limit: _,
        offset: h,
        index: m,
        searchQueryString: g,
        searchQuery: E,
    } = e;
    a.default.track(c.HAw.SEARCH_RESULT_SELECTED, {
        search_type: t.type,
        search_id: n,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        message_id: r,
        guild_id: i,
        channel_id: s,
        page_results: o,
        total_results: f,
        page: p,
        limit: _,
        offset: h,
        index_num: m,
        search_query_length: u(g),
        search_query_content_length: d(E),
    });
}

function h(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, mode: i } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_RESULT_SORT_CHANGED, {
        search_id: n,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_type: t.type,
        new_sort_type: i,
    });
}

function m(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, newPageIndex: i } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: n,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_type: t.type,
        new_page_index: i,
    });
}

function g(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, searchQueryString: i, searchQuery: a } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_RESULT_EMPTY, {
        search_id: n,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_type: t.type,
        search_query_length: u(i),
        search_query_content_length: d(a),
    });
}

function E(e) {
    let { searchContext: t } = e;
    l.A.initialize(t),
        r.Ay.trackWithMetadata(c.HAw.SEARCH_OPENED, {
            search_id: f(t),
            search_session_id: l.A.getSessionId(t),
            search_type: t.type,
        });
}

function b(e) {
    let { searchContext: t } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_CLOSED, {
        search_id: f(t),
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_type: t.type,
    }),
        l.A.terminate(t);
}

function y(e) {
    let { searchContext: t } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_INPUT_CLEARED, {
        search_id: f(t),
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_type: t.type,
    });
}

function O(e) {
    let { searchContext: t, query: n, queryString: i, searchQuerySource: a } = e,
        s = Object.keys(n),
        p = s.reduce((e, t) => {
            let r = n[t];
            return (e[t] = Array.isArray(r) ? r.length : 1), e;
        }, {}),
        _ = null != i ? (0, o._o)(i) : [],
        h = 0,
        m = 0,
        g = 0,
        E = 0,
        b = 0,
        y = 0,
        O = 0,
        A = 0,
        v = 0;
    _.forEach((e) => {
        e.type === c.LWr.ANSWER_IN
            ? h++
            : e.type === c.LWr.ANSWER_USERNAME_FROM
              ? m++
              : e.type === c.LWr.ANSWER_USERNAME_MENTIONS
                ? g++
                : e.type === c.LWr.ANSWER_HAS
                  ? E++
                  : e.type === c.LWr.ANSWER_BEFORE
                    ? b++
                    : e.type === c.LWr.ANSWER_ON
                      ? y++
                      : e.type === c.LWr.ANSWER_AFTER
                        ? O++
                        : e.type === c.LWr.ANSWER_PINNED
                          ? A++
                          : e.type === c.LWr.ANSWER_AUTHOR_TYPE && v++;
    });
    let S = l.A.getQueryId(t);
    r.Ay.trackWithMetadata(c.HAw.MESSAGES_SEARCH_STARTED, {
        search_id: f(t),
        search_session_id: l.A.getSessionId(t),
        search_query_id: S,
        search_type: t.type,
        search_query_length: u(i),
        search_query_content_length: d(n),
        sort_type: (0, o.XC)(n),
        filter_in_count: h,
        filter_from_count: m,
        filter_mentions_count: g,
        filter_has_count: E,
        filter_before_count: b,
        filter_during_count: y,
        filter_after_count: O,
        filter_pinned_count: A,
        filter_author_type_count: v,
        search_query_source: a,
    }),
        r.Ay.trackWithMetadata(c.HAw.SEARCH_STARTED, {
            search_id: f(t),
            search_session_id: l.A.getSessionId(t),
            search_query_id: l.A.getQueryId(t),
            search_type: t.type,
            num_modifiers: s.length,
            modifiers: p,
        });
}

function A(e) {
    let { rating: t, searchContext: n } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: f(n),
        search_type: n.type,
        search_session_id: l.A.getSessionId(n),
        search_query_id: l.A.getQueryId(n),
    });
}

function v(e) {
    let { searchContext: t } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: f(t),
        search_type: t.type,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
    });
}

function S(e) {
    let {
        rating: t,
        searchContext: n,
        unsatisfiedQuestionOption: i,
        unsatisfiedQuestionText: a,
        describeSearchQuestionOption: s,
        describeSearchQuestionText: o,
    } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: f(n),
        search_type: n.type,
        search_session_id: l.A.getSessionId(n),
        search_query_id: l.A.getQueryId(n),
        rating: t,
        unsatisfied_question_option: i,
        unsatisfied_question_text: a,
        describe_search_question_option: s,
        describe_search_question_text: o,
    });
}

function I(e) {
    let { searchContext: t } = e;
    l.A.enqueueEvent(t, () => {
        r.Ay.trackWithMetadata(c.HAw.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t.type,
            search_id: f(t),
            search_session_id: l.A.getSessionId(t),
        });
    });
}
new i.A("SearchTracking");
let T = new Map([
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
    C = new Map([
        [c.x2k.HISTORY, "history"],
        [c.x2k.DATES, "dates"],
        [c.x2k.SEARCH_OPTIONS, "search_options"],
    ]);

function N(e) {
    let { searchContext: t, searchHistoryIndex: n, searchHistoryTotalResults: i } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_HISTORY_CLICKED, {
        search_id: f(t),
        search_type: t.type,
        search_session_id: l.A.getSessionId(t),
        search_history_index: n,
        search_history_total_results: i,
    });
}

function R(e) {
    var t;
    let {
        searchContext: n,
        searchQuery: i,
        searchQueryString: a,
        searchAutocompleteResultIndex: s,
        searchAutocompleteTotalResults: o,
        searchTokenType: p,
        searchAutocompleteGroup: _,
        isSearchFilterPrefix: h,
        isSearchFilterAnswer: m,
        isSearchFilterComplete: g,
        isInFilterForSelectedChannel: E,
        searchAutocompleteSelectAction: b,
    } = e;
    c.x2k.HISTORY;
    let y = null != (t = T.get(_)) ? t : C.get(_),
        O = null != p ? T.get(p) : null;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: f(n),
        search_type: n.type,
        search_session_id: l.A.getSessionId(n),
        search_query_id: l.A.getQueryId(n),
        search_query_length: u(a),
        search_query_content_length: d(i),
        search_autocomplete_result_index: s,
        search_autocomplete_total_results: o,
        search_autocomplete_group: y,
        search_autocomplete_filter_type: O,
        is_search_filter_prefix: h,
        is_search_filter_answer: m,
        is_search_filter_complete: g,
        is_in_filter_for_selected_channel: E,
        search_autocomplete_select_action: b,
    });
}

function w(e) {
    let { searchContext: t, searchAutocompleteSelectAction: n } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: f(t),
        search_type: t.type,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
        search_autocomplete_select_action: n,
    });
}
var P = (function (e) {
    return (e.SEARCH_HEADER = "search_header"), (e.USER_SETTINGS = "user_settings"), e;
})({});

function D(e) {
    let { searchContext: t, prevIsCrossDMSettingEnabled: n, isCrossDMSettingEnabled: i, location: a } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_CROSS_DM_SETTING_UPDATE, {
        search_id: null != t ? f(t) : null,
        search_type: null == t ? void 0 : t.type,
        search_session_id: null != t ? l.A.getSessionId(t) : null,
        search_query_id: null != t ? l.A.getQueryId(t) : null,
        prev_is_cross_dm_setting_enabled: n,
        is_cross_dm_setting_enabled: i,
        setting_location: a,
    });
}

function x(e) {
    let { searchContext: t } = e;
    r.Ay.trackWithMetadata(c.HAw.SEARCH_FILTERS_MODAL_OPENED, {
        search_id: f(t),
        search_type: t.type,
        search_session_id: l.A.getSessionId(t),
        search_query_id: l.A.getQueryId(t),
    });
}
