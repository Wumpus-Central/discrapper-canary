(n.d(t, {
    $z: () => w,
    I1: () => C,
    IZ: () => v,
    PJ: () => N,
    Qb: () => x,
    Yc: () => I,
    bh: () => Z,
    bo: () => S,
    cy: () => O,
    hM: () => b,
    sL: () => E,
    tI: () => j,
    z4: () => T,
    zW: () => y
}),
    n(781311),
    n(388685));
var r = n(603263),
    i = n(367907),
    l = n(710845),
    a = n(466863),
    o = n(768119),
    s = n(626135),
    c = n(405656),
    u = n(861262),
    d = n(981631),
    p = n(862825);
function m(e, t) {
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
    return m(e, (e) => a.Z.getSessionId(e));
}
function _(e) {
    return m(e, (e) => a.Z.getQueryId(e));
}
function h(e) {
    var t, n;
    return null != (n = null == e || null == (t = e.trim()) ? void 0 : t.length) ? n : 0;
}
function g(e) {
    var t, n, r;
    return null != (r = null == e || null == (n = e.content) || null == (t = n.trim()) ? void 0 : t.length) ? r : 0;
}
function b(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, prevSearchAnalyticsId: l, isError: a, limit: o, offset: s, page: c, totalResults: u, pageResults: p, isIndexing: m, pageNumMessages: b, pageNumLinks: E, pageNumEmbeds: y, pageNumAttachments: x, searchQueryString: C, searchQuery: v } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t,
        search_id: r,
        prev_search_id: l,
        search_session_id: f(n),
        search_query_id: _(n),
        is_error: a,
        limit: o,
        offset: s,
        page: c,
        total_results: u,
        page_results: p,
        is_indexing: m,
        page_num_messages: b,
        page_num_links: E,
        page_num_embeds: y,
        page_num_attach: x,
        search_query_length: h(C),
        search_query_content_length: g(v)
    });
}
function E(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, guildId: i, channelId: l, pageResults: a, totalResults: o, page: c, limit: u, offset: p, index: m, searchQueryString: b, searchQuery: E } = e;
    s.default.track(d.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t,
        search_id: r,
        search_session_id: f(n),
        search_query_id: _(n),
        guild_id: i,
        channel_id: l,
        page_results: a,
        total_results: o,
        page: c,
        limit: u,
        offset: p,
        index_num: m,
        search_query_length: h(b),
        search_query_content_length: g(E)
    });
}
function y(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, mode: l } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: r,
        search_session_id: f(n),
        search_query_id: _(n),
        search_type: t,
        new_sort_type: l
    });
}
function x(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, searchQueryString: l, searchQuery: a } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_EMPTY, {
        search_id: r,
        search_session_id: f(n),
        search_query_id: _(n),
        search_type: t,
        search_query_length: h(l),
        search_query_content_length: g(a)
    });
}
function C(e) {
    let { searchType: t, searchId: n } = e;
    (m(n, (e) => {
        a.Z.initialize({
            searchContext: e,
            initialTab: p.sR.MESSAGES
        });
    }),
        i.ZP.trackWithMetadata(d.rMx.SEARCH_OPENED, {
            search_id: null != n ? o.Z.getAnalyticsId(n) : null,
            search_session_id: f(n),
            search_type: t
        }));
}
function v(e) {
    let { searchId: t, searchType: n } = e;
    (i.ZP.trackWithMetadata(d.rMx.SEARCH_CLOSED, {
        search_id: null != t ? o.Z.getAnalyticsId(t) : null,
        search_session_id: f(t),
        search_query_id: _(t),
        search_type: n
    }),
        m(t, (e) => {
            a.Z.terminate(e);
        }));
}
function O(e) {
    let { searchType: t, searchId: n } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_INPUT_CLEARED, {
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_session_id: f(n),
        search_query_id: _(n),
        search_type: t
    });
}
function j(e) {
    let { searchType: t, searchId: n, query: l, queryString: s } = e;
    m(n, (e) => {
        a.Z.refreshQueryId(e);
    });
    let u = Object.keys(l),
        p = u.reduce((e, t) => {
            let n = l[t];
            return ((e[t] = Array.isArray(n) ? n.length : 1), e);
        }, {}),
        b = null != s ? (0, c.kG)(s) : [],
        E = 0,
        y = 0,
        x = 0,
        C = 0,
        v = 0,
        O = 0,
        j = 0,
        I = 0;
    b.forEach((e) => {
        e.type === d.dCx.ANSWER_IN ? E++ : e.type === d.dCx.ANSWER_USERNAME_FROM ? y++ : e.type === d.dCx.ANSWER_USERNAME_MENTIONS ? x++ : e.type === d.dCx.ANSWER_HAS ? C++ : e.type === d.dCx.ANSWER_BEFORE ? v++ : e.type === d.dCx.ANSWER_ON ? O++ : e.type === d.dCx.ANSWER_AFTER ? j++ : e.type === d.dCx.ANSWER_PINNED && I++;
    });
    let S = _(n);
    (i.ZP.trackWithMetadata(d.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_session_id: f(n),
        search_query_id: S,
        search_type: t,
        search_query_length: h(s),
        search_query_content_length: g(l),
        sort_type: (0, r.Vj)(l),
        filter_in_count: E,
        filter_from_count: y,
        filter_mentions_count: x,
        filter_has_count: C,
        filter_before_count: v,
        filter_during_count: O,
        filter_after_count: j,
        filter_pinned_count: I
    }),
        i.ZP.trackWithMetadata(d.rMx.SEARCH_STARTED, {
            search_id: null != n ? o.Z.getAnalyticsId(n) : null,
            search_session_id: f(n),
            search_query_id: _(n),
            search_type: t,
            num_modifiers: u.length,
            modifiers: p
        }));
}
function I(e) {
    let { rating: t, searchId: n, searchType: r } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_type: r,
        search_session_id: f(n),
        search_query_id: _(n)
    });
}
function S(e) {
    let { searchId: t, searchType: n } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: null != t ? o.Z.getAnalyticsId(t) : null,
        search_type: n,
        search_session_id: f(t),
        search_query_id: _(t)
    });
}
function T(e) {
    let { rating: t, searchId: n, searchType: r, unsatisfiedQuestionOption: l, unsatisfiedQuestionText: a, describeSearchQuestionOption: s, describeSearchQuestionText: c } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_type: r,
        search_session_id: f(n),
        search_query_id: _(n),
        rating: t,
        unsatisfied_question_option: l,
        unsatisfied_question_text: a,
        describe_search_question_option: s,
        describe_search_question_text: c
    });
}
function N(e) {
    let { searchType: t, searchId: n } = e;
    (m(n, (e) => {
        a.Z.initialize({
            searchContext: e,
            initialTab: p.sR.MESSAGES
        });
    }),
        i.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t,
            search_id: null != n ? o.Z.getAnalyticsId(n) : null,
            search_session_id: f(n)
        }));
}
new l.Z('SearchTracking');
let P = new Map([
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
    A = new Map([
        [d.rtL.HISTORY, 'history'],
        [d.rtL.DATES, 'dates'],
        [d.rtL.SEARCH_OPTIONS, 'search_options']
    ]);
function w(e) {
    let { searchId: t, searchHistoryIndex: n, searchHistoryTotalResults: r } = e,
        l = (0, u.g)(t);
    i.ZP.trackWithMetadata(d.rMx.SEARCH_HISTORY_CLICKED, {
        search_id: null != t ? o.Z.getAnalyticsId(t) : null,
        search_type: l,
        search_session_id: f(t),
        search_history_index: n,
        search_history_total_results: r
    });
}
function Z(e) {
    var t;
    let { searchId: n, searchQuery: r, searchQueryString: l, searchAutocompleteResultIndex: a, searchAutocompleteTotalResults: s, searchTokenType: c, searchAutocompleteGroup: p, isSearchFilterPrefix: m, isSearchFilterAnswer: b, isSearchFilterComplete: E } = e,
        y = (0, u.g)(n);
    d.rtL.HISTORY;
    let x = null != (t = P.get(p)) ? t : A.get(p),
        C = null != c ? P.get(c) : null;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_type: y,
        search_session_id: f(n),
        search_query_id: _(n),
        search_query_length: h(l),
        search_query_content_length: g(r),
        search_autocomplete_result_index: a,
        search_autocomplete_total_results: s,
        search_autocomplete_group: x,
        search_autocomplete_filter_type: C,
        is_search_filter_prefix: m,
        is_search_filter_answer: b,
        is_search_filter_complete: E
    });
}
