(n.d(t, {
    $z: () => k,
    I1: () => O,
    IZ: () => v,
    LQ: () => g,
    PJ: () => N,
    Qb: () => C,
    Yc: () => R,
    bh: () => M,
    bo: () => T,
    cy: () => I,
    hM: () => y,
    sL: () => b,
    t6: () => E,
    tA: () => L,
    tI: () => j,
    z4: () => P,
    zW: () => x
}),
    n(781311),
    n(388685));
var r = n(603263),
    s = n(367907),
    l = n(710845),
    a = n(466863),
    i = n(768119),
    o = n(626135),
    c = n(405656),
    u = n(861262),
    d = n(981631),
    h = n(862825);
function p(e, t) {
    let n = (function (e) {
        let t = null != e ? (0, u.g)(e) : null;
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
function f(e) {
    return p(e, (e) => a.Z.getSessionId(e));
}
function g(e) {
    p(e, (e) => a.Z.refreshSearchQueryAnalyticsId(e));
}
function m(e) {
    return p(e, (e) => a.Z.getQueryId(e));
}
function _(e) {
    var t, n;
    return null != (n = null == e || null == (t = e.trim()) ? void 0 : t.length) ? n : 0;
}
function S(e) {
    var t, n, r;
    return null != (r = null == e || null == (n = e.content) || null == (t = n.trim()) ? void 0 : t.length) ? r : 0;
}
function y(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, prevSearchAnalyticsId: l, isError: a, limit: i, offset: o, page: c, totalResults: u, pageResults: h, isIndexing: p, pageNumMessages: g, pageNumLinks: y, pageNumEmbeds: b, pageNumAttachments: x, searchQueryString: E, searchQuery: C } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t,
        search_id: r,
        prev_search_id: l,
        search_session_id: f(n),
        search_query_id: m(n),
        is_error: a,
        limit: i,
        offset: o,
        page: c,
        total_results: u,
        page_results: h,
        is_indexing: p,
        page_num_messages: g,
        page_num_links: y,
        page_num_embeds: b,
        page_num_attach: x,
        search_query_length: _(E),
        search_query_content_length: S(C)
    });
}
function b(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, messageId: s, guildId: l, channelId: a, pageResults: i, totalResults: c, page: u, limit: h, offset: p, index: g, searchQueryString: y, searchQuery: b } = e;
    o.default.track(d.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t,
        search_id: r,
        search_session_id: f(n),
        search_query_id: m(n),
        message_id: s,
        guild_id: l,
        channel_id: a,
        page_results: i,
        total_results: c,
        page: u,
        limit: h,
        offset: p,
        index_num: g,
        search_query_length: _(y),
        search_query_content_length: S(b)
    });
}
function x(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, mode: l } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: r,
        search_session_id: f(n),
        search_query_id: m(n),
        search_type: t,
        new_sort_type: l
    });
}
function E(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, newPageIndex: l } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: r,
        search_session_id: f(n),
        search_query_id: m(n),
        search_type: t,
        new_page_index: l
    });
}
function C(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, searchQueryString: l, searchQuery: a } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_EMPTY, {
        search_id: r,
        search_session_id: f(n),
        search_query_id: m(n),
        search_type: t,
        search_query_length: _(l),
        search_query_content_length: S(a)
    });
}
function O(e) {
    let { searchType: t, searchId: n } = e;
    (p(n, (e) => {
        a.Z.initialize({
            searchContext: e,
            initialTab: h.sR.MESSAGES
        });
    }),
        s.ZP.trackWithMetadata(d.rMx.SEARCH_OPENED, {
            search_id: null != n ? i.Z.getAnalyticsId(n) : null,
            search_session_id: f(n),
            search_type: t
        }));
}
function v(e) {
    let { searchId: t, searchType: n } = e;
    (s.ZP.trackWithMetadata(d.rMx.SEARCH_CLOSED, {
        search_id: null != t ? i.Z.getAnalyticsId(t) : null,
        search_session_id: f(t),
        search_query_id: m(t),
        search_type: n
    }),
        p(t, (e) => {
            a.Z.terminate(e);
        }));
}
function I(e) {
    let { searchType: t, searchId: n } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_INPUT_CLEARED, {
        search_id: null != n ? i.Z.getAnalyticsId(n) : null,
        search_session_id: f(n),
        search_query_id: m(n),
        search_type: t
    });
}
function j(e) {
    let { searchType: t, searchId: n, query: l, queryString: a } = e,
        o = Object.keys(l),
        u = o.reduce((e, t) => {
            let n = l[t];
            return ((e[t] = Array.isArray(n) ? n.length : 1), e);
        }, {}),
        h = null != a ? (0, c.kG)(a) : [],
        p = 0,
        g = 0,
        y = 0,
        b = 0,
        x = 0,
        E = 0,
        C = 0,
        O = 0;
    h.forEach((e) => {
        e.type === d.dCx.ANSWER_IN ? p++ : e.type === d.dCx.ANSWER_USERNAME_FROM ? g++ : e.type === d.dCx.ANSWER_USERNAME_MENTIONS ? y++ : e.type === d.dCx.ANSWER_HAS ? b++ : e.type === d.dCx.ANSWER_BEFORE ? x++ : e.type === d.dCx.ANSWER_ON ? E++ : e.type === d.dCx.ANSWER_AFTER ? C++ : e.type === d.dCx.ANSWER_PINNED && O++;
    });
    let v = m(n);
    (s.ZP.trackWithMetadata(d.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: null != n ? i.Z.getAnalyticsId(n) : null,
        search_session_id: f(n),
        search_query_id: v,
        search_type: t,
        search_query_length: _(a),
        search_query_content_length: S(l),
        sort_type: (0, r.Vj)(l),
        filter_in_count: p,
        filter_from_count: g,
        filter_mentions_count: y,
        filter_has_count: b,
        filter_before_count: x,
        filter_during_count: E,
        filter_after_count: C,
        filter_pinned_count: O
    }),
        s.ZP.trackWithMetadata(d.rMx.SEARCH_STARTED, {
            search_id: null != n ? i.Z.getAnalyticsId(n) : null,
            search_session_id: f(n),
            search_query_id: m(n),
            search_type: t,
            num_modifiers: o.length,
            modifiers: u
        }));
}
function R(e) {
    let { rating: t, searchId: n, searchType: r } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: null != n ? i.Z.getAnalyticsId(n) : null,
        search_type: r,
        search_session_id: f(n),
        search_query_id: m(n)
    });
}
function T(e) {
    let { searchId: t, searchType: n } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: null != t ? i.Z.getAnalyticsId(t) : null,
        search_type: n,
        search_session_id: f(t),
        search_query_id: m(t)
    });
}
function P(e) {
    let { rating: t, searchId: n, searchType: r, unsatisfiedQuestionOption: l, unsatisfiedQuestionText: a, describeSearchQuestionOption: o, describeSearchQuestionText: c } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: null != n ? i.Z.getAnalyticsId(n) : null,
        search_type: r,
        search_session_id: f(n),
        search_query_id: m(n),
        rating: t,
        unsatisfied_question_option: l,
        unsatisfied_question_text: a,
        describe_search_question_option: o,
        describe_search_question_text: c
    });
}
function N(e) {
    let { searchType: t, searchId: n } = e;
    (p(n, (e) => {
        a.Z.initialize({
            searchContext: e,
            initialTab: h.sR.MESSAGES
        });
    }),
        s.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t,
            search_id: null != n ? i.Z.getAnalyticsId(n) : null,
            search_session_id: f(n)
        }));
}
new l.Z('SearchTracking');
let A = new Map([
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
    Z = new Map([
        [d.rtL.HISTORY, 'history'],
        [d.rtL.DATES, 'dates'],
        [d.rtL.SEARCH_OPTIONS, 'search_options']
    ]);
function k(e) {
    let { searchId: t, searchHistoryIndex: n, searchHistoryTotalResults: r } = e,
        l = (0, u.g)(t);
    s.ZP.trackWithMetadata(d.rMx.SEARCH_HISTORY_CLICKED, {
        search_id: null != t ? i.Z.getAnalyticsId(t) : null,
        search_type: l,
        search_session_id: f(t),
        search_history_index: n,
        search_history_total_results: r
    });
}
function M(e) {
    var t;
    let { searchId: n, searchQuery: r, searchQueryString: l, searchAutocompleteResultIndex: a, searchAutocompleteTotalResults: o, searchTokenType: c, searchAutocompleteGroup: h, isSearchFilterPrefix: p, isSearchFilterAnswer: g, isSearchFilterComplete: y, isInFilterForSelectedChannel: b, searchAutocompleteSelectAction: x } = e,
        E = (0, u.g)(n);
    d.rtL.HISTORY;
    let C = null != (t = A.get(h)) ? t : Z.get(h),
        O = null != c ? A.get(c) : null;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: null != n ? i.Z.getAnalyticsId(n) : null,
        search_type: E,
        search_session_id: f(n),
        search_query_id: m(n),
        search_query_length: _(l),
        search_query_content_length: S(r),
        search_autocomplete_result_index: a,
        search_autocomplete_total_results: o,
        search_autocomplete_group: C,
        search_autocomplete_filter_type: O,
        is_search_filter_prefix: p,
        is_search_filter_answer: g,
        is_search_filter_complete: y,
        is_in_filter_for_selected_channel: b,
        search_autocomplete_select_action: x
    });
}
function L(e) {
    let { searchId: t, searchAutocompleteSelectAction: n } = e,
        r = (0, u.g)(t);
    s.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: null != t ? i.Z.getAnalyticsId(t) : null,
        search_type: r,
        search_session_id: f(t),
        search_query_id: m(t),
        search_autocomplete_select_action: n
    });
}
