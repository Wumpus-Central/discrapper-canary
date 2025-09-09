n.d(t, {
    $z: () => P,
    I1: () => y,
    IZ: () => O,
    O2: () => x,
    PJ: () => C,
    Qb: () => b,
    Yc: () => T,
    bh: () => w,
    bo: () => S,
    cy: () => v,
    hM: () => h,
    sL: () => m,
    t6: () => E,
    tA: () => D,
    tI: () => I,
    z4: () => A,
    zW: () => g,
}),
    n(781311),
    n(388685);
var r = n(367907),
    i = n(710845),
    a = n(626135),
    o = n(228488),
    s = n(171900),
    l = n(607802),
    c = n(971128),
    u = n(723642),
    d = n(981631);
function f(e) {
    var t, n;
    return null != (n = null == e || null == (t = e.trim()) ? void 0 : t.length) ? n : 0;
}
function _(e) {
    var t, n, r;
    return null != (r = null == (n = (0, l.UP)(e)) || null == (t = n.trim()) ? void 0 : t.length) ? r : 0;
}
function p(e) {
    let t = (0, l.Tm)(e);
    return s.Z.getAnalyticsId(t);
}
function h(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: n,
        prevSearchRequestAnalyticsId: i,
        isError: a,
        limit: o,
        offset: s,
        page: l,
        totalResults: u,
        pageResults: p,
        isIndexing: h,
        pageNumMessages: m,
        pageNumLinks: g,
        pageNumEmbeds: E,
        pageNumAttachments: b,
        searchQueryString: y,
        searchQuery: O,
    } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t.type,
        search_id: n,
        prev_search_id: i,
        search_session_id: c.ZP.getSessionId(t),
        search_query_id: c.ZP.getQueryId(t),
        is_error: a,
        limit: o,
        offset: s,
        page: l,
        total_results: u,
        page_results: p,
        is_indexing: h,
        page_num_messages: m,
        page_num_links: g,
        page_num_embeds: E,
        page_num_attach: b,
        search_query_length: f(y),
        search_query_content_length: _(O),
    });
}
function m(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: n,
        messageId: r,
        guildId: i,
        channelId: o,
        pageResults: s,
        totalResults: l,
        page: u,
        limit: p,
        offset: h,
        index: m,
        searchQueryString: g,
        searchQuery: E,
    } = e;
    a.default.track(d.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t.type,
        search_id: n,
        search_session_id: c.ZP.getSessionId(t),
        search_query_id: c.ZP.getQueryId(t),
        message_id: r,
        guild_id: i,
        channel_id: o,
        page_results: s,
        total_results: l,
        page: u,
        limit: p,
        offset: h,
        index_num: m,
        search_query_length: f(g),
        search_query_content_length: _(E),
    });
}
function g(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, mode: i } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: n,
        search_session_id: c.ZP.getSessionId(t),
        search_query_id: c.ZP.getQueryId(t),
        search_type: t.type,
        new_sort_type: i,
    });
}
function E(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, newPageIndex: i } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: n,
        search_session_id: c.ZP.getSessionId(t),
        search_query_id: c.ZP.getQueryId(t),
        search_type: t.type,
        new_page_index: i,
    });
}
function b(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, searchQueryString: i, searchQuery: a } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_EMPTY, {
        search_id: n,
        search_session_id: c.ZP.getSessionId(t),
        search_query_id: c.ZP.getQueryId(t),
        search_type: t.type,
        search_query_length: f(i),
        search_query_content_length: _(a),
    });
}
function y(e) {
    let { searchContext: t } = e;
    c.ZP.initialize({
        searchContext: t,
        initialTab: u.sR.MESSAGES,
    }),
        r.ZP.trackWithMetadata(d.rMx.SEARCH_OPENED, {
            search_id: p(t),
            search_session_id: c.ZP.getSessionId(t),
            search_type: t.type,
        });
}
function O(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_CLOSED, {
        search_id: p(t),
        search_session_id: c.ZP.getSessionId(t),
        search_query_id: c.ZP.getQueryId(t),
        search_type: t.type,
    }),
        c.ZP.terminate(t);
}
function v(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_INPUT_CLEARED, {
        search_id: p(t),
        search_session_id: c.ZP.getSessionId(t),
        search_query_id: c.ZP.getQueryId(t),
        search_type: t.type,
    });
}
function I(e) {
    let { searchContext: t, query: n, queryString: i } = e,
        a = Object.keys(n),
        o = a.reduce((e, t) => {
            let r = n[t];
            return (e[t] = Array.isArray(r) ? r.length : 1), e;
        }, {}),
        s = null != i ? (0, l.kG)(i) : [],
        u = 0,
        h = 0,
        m = 0,
        g = 0,
        E = 0,
        b = 0,
        y = 0,
        O = 0,
        v = 0;
    s.forEach((e) => {
        e.type === d.dCx.ANSWER_IN
            ? u++
            : e.type === d.dCx.ANSWER_USERNAME_FROM
              ? h++
              : e.type === d.dCx.ANSWER_USERNAME_MENTIONS
                ? m++
                : e.type === d.dCx.ANSWER_HAS
                  ? g++
                  : e.type === d.dCx.ANSWER_BEFORE
                    ? E++
                    : e.type === d.dCx.ANSWER_ON
                      ? b++
                      : e.type === d.dCx.ANSWER_AFTER
                        ? y++
                        : e.type === d.dCx.ANSWER_PINNED
                          ? O++
                          : e.type === d.dCx.ANSWER_AUTHOR_TYPE && v++;
    });
    let I = c.ZP.getQueryId(t);
    r.ZP.trackWithMetadata(d.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: p(t),
        search_session_id: c.ZP.getSessionId(t),
        search_query_id: I,
        search_type: t.type,
        search_query_length: f(i),
        search_query_content_length: _(n),
        sort_type: (0, l.Vj)(n),
        filter_in_count: u,
        filter_from_count: h,
        filter_mentions_count: m,
        filter_has_count: g,
        filter_before_count: E,
        filter_during_count: b,
        filter_after_count: y,
        filter_pinned_count: O,
        filter_author_type_count: v,
    }),
        r.ZP.trackWithMetadata(d.rMx.SEARCH_STARTED, {
            search_id: p(t),
            search_session_id: c.ZP.getSessionId(t),
            search_query_id: c.ZP.getQueryId(t),
            search_type: t.type,
            num_modifiers: a.length,
            modifiers: o,
        });
}
function T(e) {
    let { rating: t, searchContext: n } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: p(n),
        search_type: n.type,
        search_session_id: c.ZP.getSessionId(n),
        search_query_id: c.ZP.getQueryId(n),
    });
}
function S(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: p(t),
        search_type: t.type,
        search_session_id: c.ZP.getSessionId(t),
        search_query_id: c.ZP.getQueryId(t),
    });
}
function A(e) {
    let {
        rating: t,
        searchContext: n,
        unsatisfiedQuestionOption: i,
        unsatisfiedQuestionText: a,
        describeSearchQuestionOption: o,
        describeSearchQuestionText: s,
    } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: p(n),
        search_type: n.type,
        search_session_id: c.ZP.getSessionId(n),
        search_query_id: c.ZP.getQueryId(n),
        rating: t,
        unsatisfied_question_option: i,
        unsatisfied_question_text: a,
        describe_search_question_option: o,
        describe_search_question_text: s,
    });
}
function C(e) {
    let { searchContext: t } = e;
    c.ZP.initialize({
        searchContext: t,
        initialTab: u.sR.MESSAGES,
    }),
        r.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t.type,
            search_id: p(t),
            search_session_id: c.ZP.getSessionId(t),
        });
}
new i.Z("SearchTracking");
let N = new Map([
        [d.dCx.ANSWER_IN, "in"],
        [d.dCx.FILTER_IN, "in"],
        [d.dCx.ANSWER_USERNAME_FROM, "from"],
        [d.dCx.FILTER_FROM, "from"],
        [d.dCx.ANSWER_USERNAME_MENTIONS, "mentions"],
        [d.dCx.FILTER_MENTIONS, "mentions"],
        [d.dCx.ANSWER_HAS, "has"],
        [d.dCx.FILTER_HAS, "has"],
        [d.dCx.ANSWER_BEFORE, "before"],
        [d.dCx.FILTER_BEFORE, "before"],
        [d.dCx.ANSWER_ON, "during"],
        [d.dCx.FILTER_ON, "during"],
        [d.dCx.ANSWER_AFTER, "after"],
        [d.dCx.FILTER_AFTER, "after"],
        [d.dCx.ANSWER_PINNED, "pinned"],
        [d.dCx.FILTER_PINNED, "pinned"],
    ]),
    R = new Map([
        [d.rtL.HISTORY, "history"],
        [d.rtL.DATES, "dates"],
        [d.rtL.SEARCH_OPTIONS, "search_options"],
    ]);
function P(e) {
    let { searchContext: t, searchHistoryIndex: n, searchHistoryTotalResults: i } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_HISTORY_CLICKED, {
        search_id: p(t),
        search_type: t.type,
        search_session_id: c.ZP.getSessionId(t),
        search_history_index: n,
        search_history_total_results: i,
    });
}
function w(e) {
    var t;
    let {
        searchContext: n,
        searchQuery: i,
        searchQueryString: a,
        searchAutocompleteResultIndex: o,
        searchAutocompleteTotalResults: s,
        searchTokenType: l,
        searchAutocompleteGroup: u,
        isSearchFilterPrefix: h,
        isSearchFilterAnswer: m,
        isSearchFilterComplete: g,
        isInFilterForSelectedChannel: E,
        searchAutocompleteSelectAction: b,
    } = e;
    d.rtL.HISTORY;
    let y = null != (t = N.get(u)) ? t : R.get(u),
        O = null != l ? N.get(l) : null;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: p(n),
        search_type: n.type,
        search_session_id: c.ZP.getSessionId(n),
        search_query_id: c.ZP.getQueryId(n),
        search_query_length: f(a),
        search_query_content_length: _(i),
        search_autocomplete_result_index: o,
        search_autocomplete_total_results: s,
        search_autocomplete_group: y,
        search_autocomplete_filter_type: O,
        is_search_filter_prefix: h,
        is_search_filter_answer: m,
        is_search_filter_complete: g,
        is_in_filter_for_selected_channel: E,
        search_autocomplete_select_action: b,
    });
}
function D(e) {
    let { searchContext: t, searchAutocompleteSelectAction: n } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: p(t),
        search_type: t.type,
        search_session_id: c.ZP.getSessionId(t),
        search_query_id: c.ZP.getQueryId(t),
        search_autocomplete_select_action: n,
    });
}
function x(e) {
    let { searchContext: t, appContext: n } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_BAR_VIEWED, {
        search_type: t.type,
        app_context: n,
        is_fullscreen: (0, o.rB)(),
    });
}
