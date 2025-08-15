n.d(t, {
    $z: () => T,
    I1: () => y,
    IZ: () => b,
    PJ: () => R,
    Qb: () => m,
    Yc: () => C,
    bh: () => I,
    bo: () => O,
    cy: () => E,
    hM: () => f,
    sL: () => _,
    t6: () => S,
    tA: () => A,
    tI: () => x,
    z4: () => v,
    zW: () => g,
}),
    n(781311),
    n(388685);
var r = n(367907),
    s = n(710845),
    l = n(626135),
    a = n(171900),
    i = n(607802),
    o = n(971128),
    c = n(723642),
    u = n(981631);
function d(e) {
    var t, n;
    return null != (n = null == e || null == (t = e.trim()) ? void 0 : t.length) ? n : 0;
}
function h(e) {
    var t, n, r;
    return null != (r = null == (n = (0, i.UP)(e)) || null == (t = n.trim()) ? void 0 : t.length) ? r : 0;
}
function p(e) {
    let t = (0, i.Tm)(e);
    return a.Z.getAnalyticsId(t);
}
function f(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: n,
        prevSearchRequestAnalyticsId: s,
        isError: l,
        limit: a,
        offset: i,
        page: c,
        totalResults: p,
        pageResults: f,
        isIndexing: _,
        pageNumMessages: g,
        pageNumLinks: S,
        pageNumEmbeds: m,
        pageNumAttachments: y,
        searchQueryString: b,
        searchQuery: E,
    } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t.type,
        search_id: n,
        prev_search_id: s,
        search_session_id: o.ZP.getSessionId(t),
        search_query_id: o.ZP.getQueryId(t),
        is_error: l,
        limit: a,
        offset: i,
        page: c,
        total_results: p,
        page_results: f,
        is_indexing: _,
        page_num_messages: g,
        page_num_links: S,
        page_num_embeds: m,
        page_num_attach: y,
        search_query_length: d(b),
        search_query_content_length: h(E),
    });
}
function _(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: n,
        messageId: r,
        guildId: s,
        channelId: a,
        pageResults: i,
        totalResults: c,
        page: p,
        limit: f,
        offset: _,
        index: g,
        searchQueryString: S,
        searchQuery: m,
    } = e;
    l.default.track(u.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t.type,
        search_id: n,
        search_session_id: o.ZP.getSessionId(t),
        search_query_id: o.ZP.getQueryId(t),
        message_id: r,
        guild_id: s,
        channel_id: a,
        page_results: i,
        total_results: c,
        page: p,
        limit: f,
        offset: _,
        index_num: g,
        search_query_length: d(S),
        search_query_content_length: h(m),
    });
}
function g(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, mode: s } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: n,
        search_session_id: o.ZP.getSessionId(t),
        search_query_id: o.ZP.getQueryId(t),
        search_type: t.type,
        new_sort_type: s,
    });
}
function S(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, newPageIndex: s } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: n,
        search_session_id: o.ZP.getSessionId(t),
        search_query_id: o.ZP.getQueryId(t),
        search_type: t.type,
        new_page_index: s,
    });
}
function m(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, searchQueryString: s, searchQuery: l } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_EMPTY, {
        search_id: n,
        search_session_id: o.ZP.getSessionId(t),
        search_query_id: o.ZP.getQueryId(t),
        search_type: t.type,
        search_query_length: d(s),
        search_query_content_length: h(l),
    });
}
function y(e) {
    let { searchContext: t } = e;
    o.ZP.initialize({
        searchContext: t,
        initialTab: c.sR.MESSAGES,
    }),
        r.ZP.trackWithMetadata(u.rMx.SEARCH_OPENED, {
            search_id: p(t),
            search_session_id: o.ZP.getSessionId(t),
            search_type: t.type,
        });
}
function b(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_CLOSED, {
        search_id: p(t),
        search_session_id: o.ZP.getSessionId(t),
        search_query_id: o.ZP.getQueryId(t),
        search_type: t.type,
    }),
        o.ZP.terminate(t);
}
function E(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_INPUT_CLEARED, {
        search_id: p(t),
        search_session_id: o.ZP.getSessionId(t),
        search_query_id: o.ZP.getQueryId(t),
        search_type: t.type,
    });
}
function x(e) {
    let { searchContext: t, query: n, queryString: s } = e,
        l = Object.keys(n),
        a = l.reduce((e, t) => {
            let r = n[t];
            return (e[t] = Array.isArray(r) ? r.length : 1), e;
        }, {}),
        c = null != s ? (0, i.kG)(s) : [],
        f = 0,
        _ = 0,
        g = 0,
        S = 0,
        m = 0,
        y = 0,
        b = 0,
        E = 0,
        x = 0;
    c.forEach((e) => {
        e.type === u.dCx.ANSWER_IN
            ? f++
            : e.type === u.dCx.ANSWER_USERNAME_FROM
              ? _++
              : e.type === u.dCx.ANSWER_USERNAME_MENTIONS
                ? g++
                : e.type === u.dCx.ANSWER_HAS
                  ? S++
                  : e.type === u.dCx.ANSWER_BEFORE
                    ? m++
                    : e.type === u.dCx.ANSWER_ON
                      ? y++
                      : e.type === u.dCx.ANSWER_AFTER
                        ? b++
                        : e.type === u.dCx.ANSWER_PINNED
                          ? E++
                          : e.type === u.dCx.ANSWER_AUTHOR_TYPE && x++;
    });
    let C = o.ZP.getQueryId(t);
    r.ZP.trackWithMetadata(u.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: p(t),
        search_session_id: o.ZP.getSessionId(t),
        search_query_id: C,
        search_type: t.type,
        search_query_length: d(s),
        search_query_content_length: h(n),
        sort_type: (0, i.Vj)(n),
        filter_in_count: f,
        filter_from_count: _,
        filter_mentions_count: g,
        filter_has_count: S,
        filter_before_count: m,
        filter_during_count: y,
        filter_after_count: b,
        filter_pinned_count: E,
        filter_author_type_count: x,
    }),
        r.ZP.trackWithMetadata(u.rMx.SEARCH_STARTED, {
            search_id: p(t),
            search_session_id: o.ZP.getSessionId(t),
            search_query_id: o.ZP.getQueryId(t),
            search_type: t.type,
            num_modifiers: l.length,
            modifiers: a,
        });
}
function C(e) {
    let { rating: t, searchContext: n } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: p(n),
        search_type: n.type,
        search_session_id: o.ZP.getSessionId(n),
        search_query_id: o.ZP.getQueryId(n),
    });
}
function O(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: p(t),
        search_type: t.type,
        search_session_id: o.ZP.getSessionId(t),
        search_query_id: o.ZP.getQueryId(t),
    });
}
function v(e) {
    let {
        rating: t,
        searchContext: n,
        unsatisfiedQuestionOption: s,
        unsatisfiedQuestionText: l,
        describeSearchQuestionOption: a,
        describeSearchQuestionText: i,
    } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: p(n),
        search_type: n.type,
        search_session_id: o.ZP.getSessionId(n),
        search_query_id: o.ZP.getQueryId(n),
        rating: t,
        unsatisfied_question_option: s,
        unsatisfied_question_text: l,
        describe_search_question_option: a,
        describe_search_question_text: i,
    });
}
function R(e) {
    let { searchContext: t } = e;
    o.ZP.initialize({
        searchContext: t,
        initialTab: c.sR.MESSAGES,
    }),
        r.ZP.trackWithMetadata(u.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t.type,
            search_id: p(t),
            search_session_id: o.ZP.getSessionId(t),
        });
}
new s.Z("SearchTracking");
let j = new Map([
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
    P = new Map([
        [u.rtL.HISTORY, "history"],
        [u.rtL.DATES, "dates"],
        [u.rtL.SEARCH_OPTIONS, "search_options"],
    ]);
function T(e) {
    let { searchContext: t, searchHistoryIndex: n, searchHistoryTotalResults: s } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_HISTORY_CLICKED, {
        search_id: p(t),
        search_type: t.type,
        search_session_id: o.ZP.getSessionId(t),
        search_history_index: n,
        search_history_total_results: s,
    });
}
function I(e) {
    var t;
    let {
        searchContext: n,
        searchQuery: s,
        searchQueryString: l,
        searchAutocompleteResultIndex: a,
        searchAutocompleteTotalResults: i,
        searchTokenType: c,
        searchAutocompleteGroup: f,
        isSearchFilterPrefix: _,
        isSearchFilterAnswer: g,
        isSearchFilterComplete: S,
        isInFilterForSelectedChannel: m,
        searchAutocompleteSelectAction: y,
    } = e;
    u.rtL.HISTORY;
    let b = null != (t = j.get(f)) ? t : P.get(f),
        E = null != c ? j.get(c) : null;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: p(n),
        search_type: n.type,
        search_session_id: o.ZP.getSessionId(n),
        search_query_id: o.ZP.getQueryId(n),
        search_query_length: d(l),
        search_query_content_length: h(s),
        search_autocomplete_result_index: a,
        search_autocomplete_total_results: i,
        search_autocomplete_group: b,
        search_autocomplete_filter_type: E,
        is_search_filter_prefix: _,
        is_search_filter_answer: g,
        is_search_filter_complete: S,
        is_in_filter_for_selected_channel: m,
        search_autocomplete_select_action: y,
    });
}
function A(e) {
    let { searchContext: t, searchAutocompleteSelectAction: n } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: p(t),
        search_type: t.type,
        search_session_id: o.ZP.getSessionId(t),
        search_query_id: o.ZP.getQueryId(t),
        search_autocomplete_select_action: n,
    });
}
