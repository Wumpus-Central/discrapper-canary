n.d(t, {
    $z: () => R,
    I1: () => b,
    IZ: () => y,
    PJ: () => A,
    Qb: () => E,
    Yc: () => I,
    bh: () => P,
    bo: () => T,
    cy: () => O,
    hM: () => p,
    sL: () => h,
    t6: () => g,
    tA: () => w,
    tI: () => v,
    z4: () => S,
    zW: () => m,
}),
    n(781311),
    n(388685);
var r = n(367907),
    i = n(710845),
    a = n(626135),
    o = n(171900),
    s = n(607802),
    l = n(971128),
    c = n(723642),
    u = n(981631);
function d(e) {
    var t, n;
    return null != (n = null == e || null == (t = e.trim()) ? void 0 : t.length) ? n : 0;
}
function f(e) {
    var t, n, r;
    return null != (r = null == (n = (0, s.UP)(e)) || null == (t = n.trim()) ? void 0 : t.length) ? r : 0;
}
function _(e) {
    let t = (0, s.Tm)(e);
    return o.Z.getAnalyticsId(t);
}
function p(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: n,
        prevSearchRequestAnalyticsId: i,
        isError: a,
        limit: o,
        offset: s,
        page: c,
        totalResults: _,
        pageResults: p,
        isIndexing: h,
        pageNumMessages: m,
        pageNumLinks: g,
        pageNumEmbeds: E,
        pageNumAttachments: b,
        searchQueryString: y,
        searchQuery: O,
    } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t.type,
        search_id: n,
        prev_search_id: i,
        search_session_id: l.ZP.getSessionId(t),
        search_query_id: l.ZP.getQueryId(t),
        is_error: a,
        limit: o,
        offset: s,
        page: c,
        total_results: _,
        page_results: p,
        is_indexing: h,
        page_num_messages: m,
        page_num_links: g,
        page_num_embeds: E,
        page_num_attach: b,
        search_query_length: d(y),
        search_query_content_length: f(O),
    });
}
function h(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: n,
        messageId: r,
        guildId: i,
        channelId: o,
        pageResults: s,
        totalResults: c,
        page: _,
        limit: p,
        offset: h,
        index: m,
        searchQueryString: g,
        searchQuery: E,
    } = e;
    a.default.track(u.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t.type,
        search_id: n,
        search_session_id: l.ZP.getSessionId(t),
        search_query_id: l.ZP.getQueryId(t),
        message_id: r,
        guild_id: i,
        channel_id: o,
        page_results: s,
        total_results: c,
        page: _,
        limit: p,
        offset: h,
        index_num: m,
        search_query_length: d(g),
        search_query_content_length: f(E),
    });
}
function m(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, mode: i } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: n,
        search_session_id: l.ZP.getSessionId(t),
        search_query_id: l.ZP.getQueryId(t),
        search_type: t.type,
        new_sort_type: i,
    });
}
function g(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, newPageIndex: i } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: n,
        search_session_id: l.ZP.getSessionId(t),
        search_query_id: l.ZP.getQueryId(t),
        search_type: t.type,
        new_page_index: i,
    });
}
function E(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, searchQueryString: i, searchQuery: a } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_EMPTY, {
        search_id: n,
        search_session_id: l.ZP.getSessionId(t),
        search_query_id: l.ZP.getQueryId(t),
        search_type: t.type,
        search_query_length: d(i),
        search_query_content_length: f(a),
    });
}
function b(e) {
    let { searchContext: t } = e;
    l.ZP.initialize({
        searchContext: t,
        initialTab: c.sR.MESSAGES,
    }),
        r.ZP.trackWithMetadata(u.rMx.SEARCH_OPENED, {
            search_id: _(t),
            search_session_id: l.ZP.getSessionId(t),
            search_type: t.type,
        });
}
function y(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_CLOSED, {
        search_id: _(t),
        search_session_id: l.ZP.getSessionId(t),
        search_query_id: l.ZP.getQueryId(t),
        search_type: t.type,
    }),
        l.ZP.terminate(t);
}
function O(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_INPUT_CLEARED, {
        search_id: _(t),
        search_session_id: l.ZP.getSessionId(t),
        search_query_id: l.ZP.getQueryId(t),
        search_type: t.type,
    });
}
function v(e) {
    let { searchContext: t, query: n, queryString: i } = e,
        a = Object.keys(n),
        o = a.reduce((e, t) => {
            let r = n[t];
            return (e[t] = Array.isArray(r) ? r.length : 1), e;
        }, {}),
        c = null != i ? (0, s.kG)(i) : [],
        p = 0,
        h = 0,
        m = 0,
        g = 0,
        E = 0,
        b = 0,
        y = 0,
        O = 0,
        v = 0;
    c.forEach((e) => {
        e.type === u.dCx.ANSWER_IN
            ? p++
            : e.type === u.dCx.ANSWER_USERNAME_FROM
              ? h++
              : e.type === u.dCx.ANSWER_USERNAME_MENTIONS
                ? m++
                : e.type === u.dCx.ANSWER_HAS
                  ? g++
                  : e.type === u.dCx.ANSWER_BEFORE
                    ? E++
                    : e.type === u.dCx.ANSWER_ON
                      ? b++
                      : e.type === u.dCx.ANSWER_AFTER
                        ? y++
                        : e.type === u.dCx.ANSWER_PINNED
                          ? O++
                          : e.type === u.dCx.ANSWER_AUTHOR_TYPE && v++;
    });
    let I = l.ZP.getQueryId(t);
    r.ZP.trackWithMetadata(u.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: _(t),
        search_session_id: l.ZP.getSessionId(t),
        search_query_id: I,
        search_type: t.type,
        search_query_length: d(i),
        search_query_content_length: f(n),
        sort_type: (0, s.Vj)(n),
        filter_in_count: p,
        filter_from_count: h,
        filter_mentions_count: m,
        filter_has_count: g,
        filter_before_count: E,
        filter_during_count: b,
        filter_after_count: y,
        filter_pinned_count: O,
        filter_author_type_count: v,
    }),
        r.ZP.trackWithMetadata(u.rMx.SEARCH_STARTED, {
            search_id: _(t),
            search_session_id: l.ZP.getSessionId(t),
            search_query_id: l.ZP.getQueryId(t),
            search_type: t.type,
            num_modifiers: a.length,
            modifiers: o,
        });
}
function I(e) {
    let { rating: t, searchContext: n } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: _(n),
        search_type: n.type,
        search_session_id: l.ZP.getSessionId(n),
        search_query_id: l.ZP.getQueryId(n),
    });
}
function T(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: l.ZP.getSessionId(t),
        search_query_id: l.ZP.getQueryId(t),
    });
}
function S(e) {
    let {
        rating: t,
        searchContext: n,
        unsatisfiedQuestionOption: i,
        unsatisfiedQuestionText: a,
        describeSearchQuestionOption: o,
        describeSearchQuestionText: s,
    } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: _(n),
        search_type: n.type,
        search_session_id: l.ZP.getSessionId(n),
        search_query_id: l.ZP.getQueryId(n),
        rating: t,
        unsatisfied_question_option: i,
        unsatisfied_question_text: a,
        describe_search_question_option: o,
        describe_search_question_text: s,
    });
}
function A(e) {
    let { searchContext: t } = e;
    l.ZP.initialize({
        searchContext: t,
        initialTab: c.sR.MESSAGES,
    }),
        r.ZP.trackWithMetadata(u.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t.type,
            search_id: _(t),
            search_session_id: l.ZP.getSessionId(t),
        });
}
new i.Z("SearchTracking");
let C = new Map([
        [u.dCx.ANSWER_IN, "in"],
        [u.dCx.FILTER_IN, "in"],
        [u.dCx.ANSWER_USERNAME_FROM, "from"],
        [u.dCx.FILTER_FROM, "from"],
        [u.dCx.ANSWER_USERNAME_MENTIONS, "mentions"],
        [u.dCx.FILTER_MENTIONS, "mentions"],
        [u.dCx.ANSWER_HAS, "has"],
        [u.dCx.FILTER_HAS, "has"],
        [u.dCx.ANSWER_BEFORE, "before"],
        [u.dCx.FILTER_BEFORE, "before"],
        [u.dCx.ANSWER_ON, "during"],
        [u.dCx.FILTER_ON, "during"],
        [u.dCx.ANSWER_AFTER, "after"],
        [u.dCx.FILTER_AFTER, "after"],
        [u.dCx.ANSWER_PINNED, "pinned"],
        [u.dCx.FILTER_PINNED, "pinned"],
    ]),
    N = new Map([
        [u.rtL.HISTORY, "history"],
        [u.rtL.DATES, "dates"],
        [u.rtL.SEARCH_OPTIONS, "search_options"],
    ]);
function R(e) {
    let { searchContext: t, searchHistoryIndex: n, searchHistoryTotalResults: i } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_HISTORY_CLICKED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: l.ZP.getSessionId(t),
        search_history_index: n,
        search_history_total_results: i,
    });
}
function P(e) {
    var t;
    let {
        searchContext: n,
        searchQuery: i,
        searchQueryString: a,
        searchAutocompleteResultIndex: o,
        searchAutocompleteTotalResults: s,
        searchTokenType: c,
        searchAutocompleteGroup: p,
        isSearchFilterPrefix: h,
        isSearchFilterAnswer: m,
        isSearchFilterComplete: g,
        isInFilterForSelectedChannel: E,
        searchAutocompleteSelectAction: b,
    } = e;
    u.rtL.HISTORY;
    let y = null != (t = C.get(p)) ? t : N.get(p),
        O = null != c ? C.get(c) : null;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: _(n),
        search_type: n.type,
        search_session_id: l.ZP.getSessionId(n),
        search_query_id: l.ZP.getQueryId(n),
        search_query_length: d(a),
        search_query_content_length: f(i),
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
function w(e) {
    let { searchContext: t, searchAutocompleteSelectAction: n } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: l.ZP.getSessionId(t),
        search_query_id: l.ZP.getQueryId(t),
        search_autocomplete_select_action: n,
    });
}
