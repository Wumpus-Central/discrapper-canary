(r.d(t, {
    $z: () => k,
    I1: () => O,
    IZ: () => I,
    LQ: () => g,
    PJ: () => N,
    Qb: () => C,
    Yc: () => R,
    bh: () => M,
    bo: () => T,
    cy: () => v,
    hM: () => y,
    sL: () => b,
    t6: () => E,
    tA: () => L,
    tI: () => j,
    z4: () => P,
    zW: () => x
}),
    r(781311),
    r(388685));
var n = r(603263),
    s = r(367907),
    l = r(710845),
    a = r(466863),
    i = r(768119),
    o = r(626135),
    c = r(405656),
    u = r(861262),
    d = r(981631),
    h = r(862825);
function p(e, t) {
    let r = (function (e) {
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
    return null != r ? t(r) : null;
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
    var t, r;
    return null != (r = null == e || null == (t = e.trim()) ? void 0 : t.length) ? r : 0;
}
function S(e) {
    var t, r, n;
    return null != (n = null == e || null == (r = e.content) || null == (t = r.trim()) ? void 0 : t.length) ? n : 0;
}
function y(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: n, prevSearchAnalyticsId: l, isError: a, limit: i, offset: o, page: c, totalResults: u, pageResults: h, isIndexing: p, pageNumMessages: g, pageNumLinks: y, pageNumEmbeds: b, pageNumAttachments: x, searchQueryString: E, searchQuery: C } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t,
        search_id: n,
        prev_search_id: l,
        search_session_id: f(r),
        search_query_id: m(r),
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
    let { searchType: t, searchId: r, searchAnalyticsId: n, messageId: s, guildId: l, channelId: a, pageResults: i, totalResults: c, page: u, limit: h, offset: p, index: g, searchQueryString: y, searchQuery: b } = e;
    o.default.track(d.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t,
        search_id: n,
        search_session_id: f(r),
        search_query_id: m(r),
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
    let { searchType: t, searchId: r, searchAnalyticsId: n, mode: l } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: n,
        search_session_id: f(r),
        search_query_id: m(r),
        search_type: t,
        new_sort_type: l
    });
}
function E(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: n, newPageIndex: l } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: n,
        search_session_id: f(r),
        search_query_id: m(r),
        search_type: t,
        new_page_index: l
    });
}
function C(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: n, searchQueryString: l, searchQuery: a } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_EMPTY, {
        search_id: n,
        search_session_id: f(r),
        search_query_id: m(r),
        search_type: t,
        search_query_length: _(l),
        search_query_content_length: S(a)
    });
}
function O(e) {
    let { searchType: t, searchId: r } = e;
    (p(r, (e) => {
        a.Z.initialize({
            searchContext: e,
            initialTab: h.sR.MESSAGES
        });
    }),
        s.ZP.trackWithMetadata(d.rMx.SEARCH_OPENED, {
            search_id: null != r ? i.Z.getAnalyticsId(r) : null,
            search_session_id: f(r),
            search_type: t
        }));
}
function I(e) {
    let { searchId: t, searchType: r } = e;
    (s.ZP.trackWithMetadata(d.rMx.SEARCH_CLOSED, {
        search_id: null != t ? i.Z.getAnalyticsId(t) : null,
        search_session_id: f(t),
        search_query_id: m(t),
        search_type: r
    }),
        p(t, (e) => {
            a.Z.terminate(e);
        }));
}
function v(e) {
    let { searchType: t, searchId: r } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_INPUT_CLEARED, {
        search_id: null != r ? i.Z.getAnalyticsId(r) : null,
        search_session_id: f(r),
        search_query_id: m(r),
        search_type: t
    });
}
function j(e) {
    let { searchType: t, searchId: r, query: l, queryString: a } = e,
        o = Object.keys(l),
        u = o.reduce((e, t) => {
            let r = l[t];
            return ((e[t] = Array.isArray(r) ? r.length : 1), e);
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
    let I = m(r);
    (s.ZP.trackWithMetadata(d.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: null != r ? i.Z.getAnalyticsId(r) : null,
        search_session_id: f(r),
        search_query_id: I,
        search_type: t,
        search_query_length: _(a),
        search_query_content_length: S(l),
        sort_type: (0, n.Vj)(l),
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
            search_id: null != r ? i.Z.getAnalyticsId(r) : null,
            search_session_id: f(r),
            search_query_id: m(r),
            search_type: t,
            num_modifiers: o.length,
            modifiers: u
        }));
}
function R(e) {
    let { rating: t, searchId: r, searchType: n } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: null != r ? i.Z.getAnalyticsId(r) : null,
        search_type: n,
        search_session_id: f(r),
        search_query_id: m(r)
    });
}
function T(e) {
    let { searchId: t, searchType: r } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: null != t ? i.Z.getAnalyticsId(t) : null,
        search_type: r,
        search_session_id: f(t),
        search_query_id: m(t)
    });
}
function P(e) {
    let { rating: t, searchId: r, searchType: n, unsatisfiedQuestionOption: l, unsatisfiedQuestionText: a, describeSearchQuestionOption: o, describeSearchQuestionText: c } = e;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: null != r ? i.Z.getAnalyticsId(r) : null,
        search_type: n,
        search_session_id: f(r),
        search_query_id: m(r),
        rating: t,
        unsatisfied_question_option: l,
        unsatisfied_question_text: a,
        describe_search_question_option: o,
        describe_search_question_text: c
    });
}
function N(e) {
    let { searchType: t, searchId: r } = e;
    (p(r, (e) => {
        a.Z.initialize({
            searchContext: e,
            initialTab: h.sR.MESSAGES
        });
    }),
        s.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t,
            search_id: null != r ? i.Z.getAnalyticsId(r) : null,
            search_session_id: f(r)
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
    let { searchId: t, searchHistoryIndex: r, searchHistoryTotalResults: n } = e,
        l = (0, u.g)(t);
    s.ZP.trackWithMetadata(d.rMx.SEARCH_HISTORY_CLICKED, {
        search_id: null != t ? i.Z.getAnalyticsId(t) : null,
        search_type: l,
        search_session_id: f(t),
        search_history_index: r,
        search_history_total_results: n
    });
}
function M(e) {
    var t;
    let { searchId: r, searchQuery: n, searchQueryString: l, searchAutocompleteResultIndex: a, searchAutocompleteTotalResults: o, searchTokenType: c, searchAutocompleteGroup: h, isSearchFilterPrefix: p, isSearchFilterAnswer: g, isSearchFilterComplete: y, isInFilterForSelectedChannel: b, searchAutocompleteSelectAction: x } = e,
        E = (0, u.g)(r);
    d.rtL.HISTORY;
    let C = null != (t = A.get(h)) ? t : Z.get(h),
        O = null != c ? A.get(c) : null;
    s.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: null != r ? i.Z.getAnalyticsId(r) : null,
        search_type: E,
        search_session_id: f(r),
        search_query_id: m(r),
        search_query_length: _(l),
        search_query_content_length: S(n),
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
    let { searchId: t, searchAutocompleteSelectAction: r } = e,
        n = (0, u.g)(t);
    s.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: null != t ? i.Z.getAnalyticsId(t) : null,
        search_type: n,
        search_session_id: f(t),
        search_query_id: m(t),
        search_autocomplete_select_action: r
    });
}
