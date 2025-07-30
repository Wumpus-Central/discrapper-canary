(n.d(t, {
    $z: () => k,
    I1: () => R,
    IZ: () => b,
    LQ: () => p,
    PJ: () => M,
    Qb: () => N,
    Yc: () => C,
    bh: () => v,
    bo: () => P,
    cy: () => y,
    hM: () => T,
    sL: () => S,
    t6: () => g,
    tA: () => L,
    tI: () => A,
    z4: () => D,
    zW: () => m
}),
    n(781311),
    n(388685));
var r = n(367907),
    i = n(710845),
    l = n(626135),
    a = n(171900),
    o = n(607802),
    s = n(861262),
    c = n(971128),
    u = n(723642),
    d = n(981631);
function _(e, t) {
    let n = (function (e) {
        let t = null != e ? (0, s.g)(e) : null;
        return t === d.aib.DMS
            ? { type: d.aib.DMS }
            : t === d.aib.FAVORITES
              ? { type: d.aib.FAVORITES }
              : t === d.aib.GUILD
                ? {
                      type: d.aib.GUILD,
                      guildId: e
                  }
                : t === d.aib.CHANNEL
                  ? {
                        type: d.aib.CHANNEL,
                        channelId: e
                    }
                  : null;
    })(e);
    return null != n ? t(n) : null;
}
function E(e) {
    return _(e, (e) => c.Z.getSessionId(e));
}
function p(e) {
    _(e, (e) => c.Z.refreshSearchQueryAnalyticsId(e));
}
function O(e) {
    return _(e, (e) => c.Z.getQueryId(e));
}
function f(e) {
    var t, n;
    return null != (n = null == e || null == (t = e.trim()) ? void 0 : t.length) ? n : 0;
}
function I(e) {
    var t, n, r;
    return null != (r = null == e || null == (n = e.content) || null == (t = n.trim()) ? void 0 : t.length) ? r : 0;
}
function h(e) {
    return null == e ? null : a.Z.getAnalyticsId(e);
}
function T(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: i, prevSearchAnalyticsId: l, isError: a, limit: o, offset: s, page: c, totalResults: u, pageResults: _, isIndexing: p, pageNumMessages: h, pageNumLinks: T, pageNumEmbeds: S, pageNumAttachments: m, searchQueryString: g, searchQuery: N } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t,
        search_id: i,
        prev_search_id: l,
        search_session_id: E(n),
        search_query_id: O(n),
        is_error: a,
        limit: o,
        offset: s,
        page: c,
        total_results: u,
        page_results: _,
        is_indexing: p,
        page_num_messages: h,
        page_num_links: T,
        page_num_embeds: S,
        page_num_attach: m,
        search_query_length: f(g),
        search_query_content_length: I(N)
    });
}
function S(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, messageId: i, guildId: a, channelId: o, pageResults: s, totalResults: c, page: u, limit: _, offset: p, index: h, searchQueryString: T, searchQuery: S } = e;
    l.default.track(d.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t,
        search_id: r,
        search_session_id: E(n),
        search_query_id: O(n),
        message_id: i,
        guild_id: a,
        channel_id: o,
        page_results: s,
        total_results: c,
        page: u,
        limit: _,
        offset: p,
        index_num: h,
        search_query_length: f(T),
        search_query_content_length: I(S)
    });
}
function m(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: i, mode: l } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: i,
        search_session_id: E(n),
        search_query_id: O(n),
        search_type: t,
        new_sort_type: l
    });
}
function g(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: i, newPageIndex: l } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: i,
        search_session_id: E(n),
        search_query_id: O(n),
        search_type: t,
        new_page_index: l
    });
}
function N(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: i, searchQueryString: l, searchQuery: a } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_EMPTY, {
        search_id: i,
        search_session_id: E(n),
        search_query_id: O(n),
        search_type: t,
        search_query_length: f(l),
        search_query_content_length: I(a)
    });
}
function R(e) {
    let { searchType: t, searchId: n } = e;
    (_(n, (e) => {
        c.Z.initialize({
            searchContext: e,
            initialTab: u.sR.MESSAGES
        });
    }),
        r.ZP.trackWithMetadata(d.rMx.SEARCH_OPENED, {
            search_id: h(n),
            search_session_id: E(n),
            search_type: t
        }));
}
function b(e) {
    let { searchId: t, searchType: n } = e;
    (r.ZP.trackWithMetadata(d.rMx.SEARCH_CLOSED, {
        search_id: h(t),
        search_session_id: E(t),
        search_query_id: O(t),
        search_type: n
    }),
        _(t, (e) => {
            c.Z.terminate(e);
        }));
}
function y(e) {
    let { searchType: t, searchId: n } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_INPUT_CLEARED, {
        search_id: h(n),
        search_session_id: E(n),
        search_query_id: O(n),
        search_type: t
    });
}
function A(e) {
    let { searchType: t, searchId: n, query: i, queryString: l } = e,
        a = Object.keys(i),
        s = a.reduce((e, t) => {
            let n = i[t];
            return ((e[t] = Array.isArray(n) ? n.length : 1), e);
        }, {}),
        c = null != l ? (0, o.kG)(l) : [],
        u = 0,
        _ = 0,
        p = 0,
        T = 0,
        S = 0,
        m = 0,
        g = 0,
        N = 0;
    c.forEach((e) => {
        e.type === d.dCx.ANSWER_IN ? u++ : e.type === d.dCx.ANSWER_USERNAME_FROM ? _++ : e.type === d.dCx.ANSWER_USERNAME_MENTIONS ? p++ : e.type === d.dCx.ANSWER_HAS ? T++ : e.type === d.dCx.ANSWER_BEFORE ? S++ : e.type === d.dCx.ANSWER_ON ? m++ : e.type === d.dCx.ANSWER_AFTER ? g++ : e.type === d.dCx.ANSWER_PINNED && N++;
    });
    let R = O(n);
    (r.ZP.trackWithMetadata(d.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: h(n),
        search_session_id: E(n),
        search_query_id: R,
        search_type: t,
        search_query_length: f(l),
        search_query_content_length: I(i),
        sort_type: (0, o.Vj)(i),
        filter_in_count: u,
        filter_from_count: _,
        filter_mentions_count: p,
        filter_has_count: T,
        filter_before_count: S,
        filter_during_count: m,
        filter_after_count: g,
        filter_pinned_count: N
    }),
        r.ZP.trackWithMetadata(d.rMx.SEARCH_STARTED, {
            search_id: h(n),
            search_session_id: E(n),
            search_query_id: O(n),
            search_type: t,
            num_modifiers: a.length,
            modifiers: s
        }));
}
function C(e) {
    let { rating: t, searchId: n, searchType: i } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: h(n),
        search_type: i,
        search_session_id: E(n),
        search_query_id: O(n)
    });
}
function P(e) {
    let { searchId: t, searchType: n } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: h(t),
        search_type: n,
        search_session_id: E(t),
        search_query_id: O(t)
    });
}
function D(e) {
    let { rating: t, searchId: n, searchType: i, unsatisfiedQuestionOption: l, unsatisfiedQuestionText: a, describeSearchQuestionOption: o, describeSearchQuestionText: s } = e;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: h(n),
        search_type: i,
        search_session_id: E(n),
        search_query_id: O(n),
        rating: t,
        unsatisfied_question_option: l,
        unsatisfied_question_text: a,
        describe_search_question_option: o,
        describe_search_question_text: s
    });
}
function M(e) {
    let { searchType: t, searchId: n } = e;
    (_(n, (e) => {
        c.Z.initialize({
            searchContext: e,
            initialTab: u.sR.MESSAGES
        });
    }),
        r.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t,
            search_id: h(n),
            search_session_id: E(n)
        }));
}
new i.Z('SearchTracking');
let j = new Map([
        [d.dCx.ANSWER_IN, 'in'],
        [d.dCx.FILTER_IN, 'in'],
        [d.dCx.ANSWER_USERNAME_FROM, 'from'],
        [d.dCx.FILTER_FROM, 'from'],
        [d.dCx.ANSWER_USERNAME_MENTIONS, 'mentions'],
        [d.dCx.FILTER_MENTIONS, 'mentions'],
        [d.dCx.ANSWER_HAS, 'has'],
        [d.dCx.FILTER_HAS, 'has'],
        [d.dCx.ANSWER_BEFORE, 'before'],
        [d.dCx.FILTER_BEFORE, 'before'],
        [d.dCx.ANSWER_ON, 'during'],
        [d.dCx.FILTER_ON, 'during'],
        [d.dCx.ANSWER_AFTER, 'after'],
        [d.dCx.FILTER_AFTER, 'after'],
        [d.dCx.ANSWER_PINNED, 'pinned'],
        [d.dCx.FILTER_PINNED, 'pinned']
    ]),
    x = new Map([
        [d.rtL.HISTORY, 'history'],
        [d.rtL.DATES, 'dates'],
        [d.rtL.SEARCH_OPTIONS, 'search_options']
    ]);
function k(e) {
    let { searchId: t, searchHistoryIndex: n, searchHistoryTotalResults: i } = e,
        l = (0, s.g)(t);
    r.ZP.trackWithMetadata(d.rMx.SEARCH_HISTORY_CLICKED, {
        search_id: h(t),
        search_type: l,
        search_session_id: E(t),
        search_history_index: n,
        search_history_total_results: i
    });
}
function v(e) {
    var t;
    let { searchId: n, searchQuery: i, searchQueryString: l, searchAutocompleteResultIndex: a, searchAutocompleteTotalResults: o, searchTokenType: c, searchAutocompleteGroup: u, isSearchFilterPrefix: _, isSearchFilterAnswer: p, isSearchFilterComplete: T, isInFilterForSelectedChannel: S, searchAutocompleteSelectAction: m } = e,
        g = (0, s.g)(n);
    d.rtL.HISTORY;
    let N = null != (t = j.get(u)) ? t : x.get(u),
        R = null != c ? j.get(c) : null;
    r.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: h(n),
        search_type: g,
        search_session_id: E(n),
        search_query_id: O(n),
        search_query_length: f(l),
        search_query_content_length: I(i),
        search_autocomplete_result_index: a,
        search_autocomplete_total_results: o,
        search_autocomplete_group: N,
        search_autocomplete_filter_type: R,
        is_search_filter_prefix: _,
        is_search_filter_answer: p,
        is_search_filter_complete: T,
        is_in_filter_for_selected_channel: S,
        search_autocomplete_select_action: m
    });
}
function L(e) {
    let { searchId: t, searchAutocompleteSelectAction: n } = e,
        i = (0, s.g)(t);
    r.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: h(t),
        search_type: i,
        search_session_id: E(t),
        search_query_id: O(t),
        search_autocomplete_select_action: n
    });
}
