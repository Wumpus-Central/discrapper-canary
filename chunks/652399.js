(n.d(t, {
    $z: () => Z,
    Fs: () => _,
    I1: () => v,
    IZ: () => O,
    PJ: () => P,
    Qb: () => x,
    Yc: () => S,
    bh: () => R,
    bo: () => T,
    cy: () => j,
    hM: () => E,
    sL: () => y,
    tA: () => L,
    tI: () => I,
    z4: () => N,
    zW: () => C
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
    m(e, (e) => a.Z.refreshQueryId(e));
}
function h(e) {
    return m(e, (e) => a.Z.getQueryId(e));
}
function g(e) {
    var t, n;
    return null != (n = null == e || null == (t = e.trim()) ? void 0 : t.length) ? n : 0;
}
function b(e) {
    var t, n, r;
    return null != (r = null == e || null == (n = e.content) || null == (t = n.trim()) ? void 0 : t.length) ? r : 0;
}
function E(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, prevSearchAnalyticsId: l, isError: a, limit: o, offset: s, page: c, totalResults: u, pageResults: p, isIndexing: m, pageNumMessages: _, pageNumLinks: E, pageNumEmbeds: y, pageNumAttachments: C, searchQueryString: x, searchQuery: v } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t,
        search_id: r,
        prev_search_id: l,
        search_session_id: f(n),
        search_query_id: h(n),
        is_error: a,
        limit: o,
        offset: s,
        page: c,
        total_results: u,
        page_results: p,
        is_indexing: m,
        page_num_messages: _,
        page_num_links: E,
        page_num_embeds: y,
        page_num_attach: C,
        search_query_length: g(x),
        search_query_content_length: b(v)
    });
}
function y(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, messageId: i, guildId: l, channelId: a, pageResults: o, totalResults: c, page: u, limit: p, offset: m, index: _, searchQueryString: E, searchQuery: y } = e;
    s.default.track(d.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t,
        search_id: r,
        search_session_id: f(n),
        search_query_id: h(n),
        message_id: i,
        guild_id: l,
        channel_id: a,
        page_results: o,
        total_results: c,
        page: u,
        limit: p,
        offset: m,
        index_num: _,
        search_query_length: g(E),
        search_query_content_length: b(y)
    });
}
function C(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, mode: l } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: r,
        search_session_id: f(n),
        search_query_id: h(n),
        search_type: t,
        new_sort_type: l
    });
}
function x(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, searchQueryString: l, searchQuery: a } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_EMPTY, {
        search_id: r,
        search_session_id: f(n),
        search_query_id: h(n),
        search_type: t,
        search_query_length: g(l),
        search_query_content_length: b(a)
    });
}
function v(e) {
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
function O(e) {
    let { searchId: t, searchType: n } = e;
    (i.ZP.trackWithMetadata(d.rMx.SEARCH_CLOSED, {
        search_id: null != t ? o.Z.getAnalyticsId(t) : null,
        search_session_id: f(t),
        search_query_id: h(t),
        search_type: n
    }),
        m(t, (e) => {
            a.Z.terminate(e);
        }));
}
function j(e) {
    let { searchType: t, searchId: n } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_INPUT_CLEARED, {
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_session_id: f(n),
        search_query_id: h(n),
        search_type: t
    });
}
function I(e) {
    let { searchType: t, searchId: n, query: l, queryString: a } = e,
        s = Object.keys(l),
        u = s.reduce((e, t) => {
            let n = l[t];
            return ((e[t] = Array.isArray(n) ? n.length : 1), e);
        }, {}),
        p = null != a ? (0, c.kG)(a) : [],
        m = 0,
        _ = 0,
        E = 0,
        y = 0,
        C = 0,
        x = 0,
        v = 0,
        O = 0;
    p.forEach((e) => {
        e.type === d.dCx.ANSWER_IN ? m++ : e.type === d.dCx.ANSWER_USERNAME_FROM ? _++ : e.type === d.dCx.ANSWER_USERNAME_MENTIONS ? E++ : e.type === d.dCx.ANSWER_HAS ? y++ : e.type === d.dCx.ANSWER_BEFORE ? C++ : e.type === d.dCx.ANSWER_ON ? x++ : e.type === d.dCx.ANSWER_AFTER ? v++ : e.type === d.dCx.ANSWER_PINNED && O++;
    });
    let j = h(n);
    (i.ZP.trackWithMetadata(d.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_session_id: f(n),
        search_query_id: j,
        search_type: t,
        search_query_length: g(a),
        search_query_content_length: b(l),
        sort_type: (0, r.Vj)(l),
        filter_in_count: m,
        filter_from_count: _,
        filter_mentions_count: E,
        filter_has_count: y,
        filter_before_count: C,
        filter_during_count: x,
        filter_after_count: v,
        filter_pinned_count: O
    }),
        i.ZP.trackWithMetadata(d.rMx.SEARCH_STARTED, {
            search_id: null != n ? o.Z.getAnalyticsId(n) : null,
            search_session_id: f(n),
            search_query_id: h(n),
            search_type: t,
            num_modifiers: s.length,
            modifiers: u
        }));
}
function S(e) {
    let { rating: t, searchId: n, searchType: r } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_type: r,
        search_session_id: f(n),
        search_query_id: h(n)
    });
}
function T(e) {
    let { searchId: t, searchType: n } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: null != t ? o.Z.getAnalyticsId(t) : null,
        search_type: n,
        search_session_id: f(t),
        search_query_id: h(t)
    });
}
function N(e) {
    let { rating: t, searchId: n, searchType: r, unsatisfiedQuestionOption: l, unsatisfiedQuestionText: a, describeSearchQuestionOption: s, describeSearchQuestionText: c } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_type: r,
        search_session_id: f(n),
        search_query_id: h(n),
        rating: t,
        unsatisfied_question_option: l,
        unsatisfied_question_text: a,
        describe_search_question_option: s,
        describe_search_question_text: c
    });
}
function P(e) {
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
    w = new Map([
        [d.rtL.HISTORY, 'history'],
        [d.rtL.DATES, 'dates'],
        [d.rtL.SEARCH_OPTIONS, 'search_options']
    ]);
function Z(e) {
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
function R(e) {
    var t;
    let { searchId: n, searchQuery: r, searchQueryString: l, searchAutocompleteResultIndex: a, searchAutocompleteTotalResults: s, searchTokenType: c, searchAutocompleteGroup: p, isSearchFilterPrefix: m, isSearchFilterAnswer: _, isSearchFilterComplete: E, isInFilterForSelectedChannel: y, searchAutocompleteSelectAction: C } = e,
        x = (0, u.g)(n);
    d.rtL.HISTORY;
    let v = null != (t = A.get(p)) ? t : w.get(p),
        O = null != c ? A.get(c) : null;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_type: x,
        search_session_id: f(n),
        search_query_id: h(n),
        search_query_length: g(l),
        search_query_content_length: b(r),
        search_autocomplete_result_index: a,
        search_autocomplete_total_results: s,
        search_autocomplete_group: v,
        search_autocomplete_filter_type: O,
        is_search_filter_prefix: m,
        is_search_filter_answer: _,
        is_search_filter_complete: E,
        is_in_filter_for_selected_channel: y,
        search_autocomplete_select_action: C
    });
}
function L(e) {
    let { searchId: t, searchAutocompleteSelectAction: n } = e,
        r = (0, u.g)(t);
    i.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: null != t ? o.Z.getAnalyticsId(t) : null,
        search_type: r,
        search_session_id: f(t),
        search_query_id: h(t),
        search_autocomplete_select_action: n
    });
}
