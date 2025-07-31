(n.d(t, {
    $z: () => P,
    I1: () => h,
    IZ: () => T,
    PJ: () => A,
    Qb: () => f,
    Yc: () => N,
    bh: () => D,
    bo: () => y,
    cy: () => m,
    hM: () => p,
    sL: () => O,
    t6: () => I,
    tA: () => M,
    tI: () => g,
    z4: () => R,
    zW: () => S
}),
    n(781311),
    n(388685));
var r = n(367907),
    i = n(710845),
    l = n(626135),
    a = n(171900),
    o = n(607802),
    s = n(971128),
    c = n(723642),
    u = n(981631);
function d(e) {
    var t, n;
    return null != (n = null == e || null == (t = e.trim()) ? void 0 : t.length) ? n : 0;
}
function _(e) {
    var t, n, r;
    return null != (r = null == e || null == (n = e.content) || null == (t = n.trim()) ? void 0 : t.length) ? r : 0;
}
function E(e) {
    let t = (0, o.WJ)(e);
    return a.Z.getAnalyticsId(t);
}
function p(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, prevSearchRequestAnalyticsId: i, isError: l, limit: a, offset: o, page: c, totalResults: E, pageResults: p, isIndexing: O, pageNumMessages: S, pageNumLinks: I, pageNumEmbeds: f, pageNumAttachments: h, searchQueryString: T, searchQuery: m } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t.type,
        search_id: n,
        prev_search_id: i,
        search_session_id: s.Z.getSessionId(t),
        search_query_id: s.Z.getQueryId(t),
        is_error: l,
        limit: a,
        offset: o,
        page: c,
        total_results: E,
        page_results: p,
        is_indexing: O,
        page_num_messages: S,
        page_num_links: I,
        page_num_embeds: f,
        page_num_attach: h,
        search_query_length: d(T),
        search_query_content_length: _(m)
    });
}
function O(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, messageId: r, guildId: i, channelId: a, pageResults: o, totalResults: c, page: E, limit: p, offset: O, index: S, searchQueryString: I, searchQuery: f } = e;
    l.default.track(u.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t.type,
        search_id: n,
        search_session_id: s.Z.getSessionId(t),
        search_query_id: s.Z.getQueryId(t),
        message_id: r,
        guild_id: i,
        channel_id: a,
        page_results: o,
        total_results: c,
        page: E,
        limit: p,
        offset: O,
        index_num: S,
        search_query_length: d(I),
        search_query_content_length: _(f)
    });
}
function S(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, mode: i } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: n,
        search_session_id: s.Z.getSessionId(t),
        search_query_id: s.Z.getQueryId(t),
        search_type: t.type,
        new_sort_type: i
    });
}
function I(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, newPageIndex: i } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: n,
        search_session_id: s.Z.getSessionId(t),
        search_query_id: s.Z.getQueryId(t),
        search_type: t.type,
        new_page_index: i
    });
}
function f(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, searchQueryString: i, searchQuery: l } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_EMPTY, {
        search_id: n,
        search_session_id: s.Z.getSessionId(t),
        search_query_id: s.Z.getQueryId(t),
        search_type: t.type,
        search_query_length: d(i),
        search_query_content_length: _(l)
    });
}
function h(e) {
    let { searchContext: t } = e;
    (s.Z.initialize({
        searchContext: t,
        initialTab: c.sR.MESSAGES
    }),
        r.ZP.trackWithMetadata(u.rMx.SEARCH_OPENED, {
            search_id: E(t),
            search_session_id: s.Z.getSessionId(t),
            search_type: t.type
        }));
}
function T(e) {
    let { searchContext: t } = e;
    (r.ZP.trackWithMetadata(u.rMx.SEARCH_CLOSED, {
        search_id: E(t),
        search_session_id: s.Z.getSessionId(t),
        search_query_id: s.Z.getQueryId(t),
        search_type: t.type
    }),
        s.Z.terminate(t));
}
function m(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_INPUT_CLEARED, {
        search_id: E(t),
        search_session_id: s.Z.getSessionId(t),
        search_query_id: s.Z.getQueryId(t),
        search_type: t.type
    });
}
function g(e) {
    let { searchContext: t, query: n, queryString: i } = e,
        l = Object.keys(n),
        a = l.reduce((e, t) => {
            let r = n[t];
            return ((e[t] = Array.isArray(r) ? r.length : 1), e);
        }, {}),
        c = null != i ? (0, o.kG)(i) : [],
        p = 0,
        O = 0,
        S = 0,
        I = 0,
        f = 0,
        h = 0,
        T = 0,
        m = 0;
    c.forEach((e) => {
        e.type === u.dCx.ANSWER_IN ? p++ : e.type === u.dCx.ANSWER_USERNAME_FROM ? O++ : e.type === u.dCx.ANSWER_USERNAME_MENTIONS ? S++ : e.type === u.dCx.ANSWER_HAS ? I++ : e.type === u.dCx.ANSWER_BEFORE ? f++ : e.type === u.dCx.ANSWER_ON ? h++ : e.type === u.dCx.ANSWER_AFTER ? T++ : e.type === u.dCx.ANSWER_PINNED && m++;
    });
    let g = s.Z.getQueryId(t);
    (r.ZP.trackWithMetadata(u.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: E(t),
        search_session_id: s.Z.getSessionId(t),
        search_query_id: g,
        search_type: t.type,
        search_query_length: d(i),
        search_query_content_length: _(n),
        sort_type: (0, o.Vj)(n),
        filter_in_count: p,
        filter_from_count: O,
        filter_mentions_count: S,
        filter_has_count: I,
        filter_before_count: f,
        filter_during_count: h,
        filter_after_count: T,
        filter_pinned_count: m
    }),
        r.ZP.trackWithMetadata(u.rMx.SEARCH_STARTED, {
            search_id: E(t),
            search_session_id: s.Z.getSessionId(t),
            search_query_id: s.Z.getQueryId(t),
            search_type: t.type,
            num_modifiers: l.length,
            modifiers: a
        }));
}
function N(e) {
    let { rating: t, searchContext: n } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: E(n),
        search_type: n.type,
        search_session_id: s.Z.getSessionId(n),
        search_query_id: s.Z.getQueryId(n)
    });
}
function y(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: E(t),
        search_type: t.type,
        search_session_id: s.Z.getSessionId(t),
        search_query_id: s.Z.getQueryId(t)
    });
}
function R(e) {
    let { rating: t, searchContext: n, unsatisfiedQuestionOption: i, unsatisfiedQuestionText: l, describeSearchQuestionOption: a, describeSearchQuestionText: o } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: E(n),
        search_type: n.type,
        search_session_id: s.Z.getSessionId(n),
        search_query_id: s.Z.getQueryId(n),
        rating: t,
        unsatisfied_question_option: i,
        unsatisfied_question_text: l,
        describe_search_question_option: a,
        describe_search_question_text: o
    });
}
function A(e) {
    let { searchContext: t } = e;
    (s.Z.initialize({
        searchContext: t,
        initialTab: c.sR.MESSAGES
    }),
        r.ZP.trackWithMetadata(u.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t.type,
            search_id: E(t),
            search_session_id: s.Z.getSessionId(t)
        }));
}
new i.Z('SearchTracking');
let b = new Map([
        [u.dCx.ANSWER_IN, 'in'],
        [u.dCx.FILTER_IN, 'in'],
        [u.dCx.ANSWER_USERNAME_FROM, 'from'],
        [u.dCx.FILTER_FROM, 'from'],
        [u.dCx.ANSWER_USERNAME_MENTIONS, 'mentions'],
        [u.dCx.FILTER_MENTIONS, 'mentions'],
        [u.dCx.ANSWER_HAS, 'has'],
        [u.dCx.FILTER_HAS, 'has'],
        [u.dCx.ANSWER_BEFORE, 'before'],
        [u.dCx.FILTER_BEFORE, 'before'],
        [u.dCx.ANSWER_ON, 'during'],
        [u.dCx.FILTER_ON, 'during'],
        [u.dCx.ANSWER_AFTER, 'after'],
        [u.dCx.FILTER_AFTER, 'after'],
        [u.dCx.ANSWER_PINNED, 'pinned'],
        [u.dCx.FILTER_PINNED, 'pinned']
    ]),
    C = new Map([
        [u.rtL.HISTORY, 'history'],
        [u.rtL.DATES, 'dates'],
        [u.rtL.SEARCH_OPTIONS, 'search_options']
    ]);
function P(e) {
    let { searchContext: t, searchHistoryIndex: n, searchHistoryTotalResults: i } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_HISTORY_CLICKED, {
        search_id: E(t),
        search_type: t.type,
        search_session_id: s.Z.getSessionId(t),
        search_history_index: n,
        search_history_total_results: i
    });
}
function D(e) {
    var t;
    let { searchContext: n, searchQuery: i, searchQueryString: l, searchAutocompleteResultIndex: a, searchAutocompleteTotalResults: o, searchTokenType: c, searchAutocompleteGroup: p, isSearchFilterPrefix: O, isSearchFilterAnswer: S, isSearchFilterComplete: I, isInFilterForSelectedChannel: f, searchAutocompleteSelectAction: h } = e;
    u.rtL.HISTORY;
    let T = null != (t = b.get(p)) ? t : C.get(p),
        m = null != c ? b.get(c) : null;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: E(n),
        search_type: n.type,
        search_session_id: s.Z.getSessionId(n),
        search_query_id: s.Z.getQueryId(n),
        search_query_length: d(l),
        search_query_content_length: _(i),
        search_autocomplete_result_index: a,
        search_autocomplete_total_results: o,
        search_autocomplete_group: T,
        search_autocomplete_filter_type: m,
        is_search_filter_prefix: O,
        is_search_filter_answer: S,
        is_search_filter_complete: I,
        is_in_filter_for_selected_channel: f,
        search_autocomplete_select_action: h
    });
}
function M(e) {
    let { searchContext: t, searchAutocompleteSelectAction: n } = e;
    r.ZP.trackWithMetadata(u.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: E(t),
        search_type: t.type,
        search_session_id: s.Z.getSessionId(t),
        search_query_id: s.Z.getQueryId(t),
        search_autocomplete_select_action: n
    });
}
