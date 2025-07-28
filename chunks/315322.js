(r.d(t, {
    $z: () => k,
    I1: () => C,
    IZ: () => O,
    LQ: () => f,
    PJ: () => N,
    Qb: () => v,
    Yc: () => I,
    bh: () => M,
    bo: () => T,
    cy: () => j,
    hM: () => y,
    sL: () => b,
    t6: () => E,
    tA: () => w,
    tI: () => R,
    z4: () => P,
    zW: () => x
}),
    r(781311),
    r(388685));
var n = r(367907),
    s = r(710845),
    l = r(626135),
    a = r(171900),
    i = r(607802),
    o = r(861262),
    c = r(971128),
    u = r(723642),
    h = r(981631);
function d(e, t) {
    let r = (function (e) {
        let t = null != e ? (0, o.g)(e) : null;
        return t === h.aib.DMS
            ? { type: h.aib.DMS }
            : t === h.aib.FAVORITES
              ? { type: h.aib.FAVORITES }
              : t === h.aib.GUILD
                ? {
                      type: h.aib.GUILD,
                      guildId: e
                  }
                : t === h.aib.CHANNEL
                  ? {
                        type: h.aib.CHANNEL,
                        channelId: e
                    }
                  : null;
    })(e);
    return null != r ? t(r) : null;
}
function p(e) {
    return d(e, (e) => c.Z.getSessionId(e));
}
function f(e) {
    d(e, (e) => c.Z.refreshSearchQueryAnalyticsId(e));
}
function g(e) {
    return d(e, (e) => c.Z.getQueryId(e));
}
function m(e) {
    var t, r;
    return null != (r = null == e || null == (t = e.trim()) ? void 0 : t.length) ? r : 0;
}
function _(e) {
    var t, r, n;
    return null != (n = null == e || null == (r = e.content) || null == (t = r.trim()) ? void 0 : t.length) ? n : 0;
}
function S(e) {
    return null == e ? null : a.Z.getAnalyticsId(e);
}
function y(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: s, prevSearchAnalyticsId: l, isError: a, limit: i, offset: o, page: c, totalResults: u, pageResults: d, isIndexing: f, pageNumMessages: S, pageNumLinks: y, pageNumEmbeds: b, pageNumAttachments: x, searchQueryString: E, searchQuery: v } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t,
        search_id: s,
        prev_search_id: l,
        search_session_id: p(r),
        search_query_id: g(r),
        is_error: a,
        limit: i,
        offset: o,
        page: c,
        total_results: u,
        page_results: d,
        is_indexing: f,
        page_num_messages: S,
        page_num_links: y,
        page_num_embeds: b,
        page_num_attach: x,
        search_query_length: m(E),
        search_query_content_length: _(v)
    });
}
function b(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: n, messageId: s, guildId: a, channelId: i, pageResults: o, totalResults: c, page: u, limit: d, offset: f, index: S, searchQueryString: y, searchQuery: b } = e;
    l.default.track(h.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t,
        search_id: n,
        search_session_id: p(r),
        search_query_id: g(r),
        message_id: s,
        guild_id: a,
        channel_id: i,
        page_results: o,
        total_results: c,
        page: u,
        limit: d,
        offset: f,
        index_num: S,
        search_query_length: m(y),
        search_query_content_length: _(b)
    });
}
function x(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: s, mode: l } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: s,
        search_session_id: p(r),
        search_query_id: g(r),
        search_type: t,
        new_sort_type: l
    });
}
function E(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: s, newPageIndex: l } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: s,
        search_session_id: p(r),
        search_query_id: g(r),
        search_type: t,
        new_page_index: l
    });
}
function v(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: s, searchQueryString: l, searchQuery: a } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_RESULT_EMPTY, {
        search_id: s,
        search_session_id: p(r),
        search_query_id: g(r),
        search_type: t,
        search_query_length: m(l),
        search_query_content_length: _(a)
    });
}
function C(e) {
    let { searchType: t, searchId: r } = e;
    (d(r, (e) => {
        c.Z.initialize({
            searchContext: e,
            initialTab: u.sR.MESSAGES
        });
    }),
        n.ZP.trackWithMetadata(h.rMx.SEARCH_OPENED, {
            search_id: S(r),
            search_session_id: p(r),
            search_type: t
        }));
}
function O(e) {
    let { searchId: t, searchType: r } = e;
    (n.ZP.trackWithMetadata(h.rMx.SEARCH_CLOSED, {
        search_id: S(t),
        search_session_id: p(t),
        search_query_id: g(t),
        search_type: r
    }),
        d(t, (e) => {
            c.Z.terminate(e);
        }));
}
function j(e) {
    let { searchType: t, searchId: r } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_INPUT_CLEARED, {
        search_id: S(r),
        search_session_id: p(r),
        search_query_id: g(r),
        search_type: t
    });
}
function R(e) {
    let { searchType: t, searchId: r, query: s, queryString: l } = e,
        a = Object.keys(s),
        o = a.reduce((e, t) => {
            let r = s[t];
            return ((e[t] = Array.isArray(r) ? r.length : 1), e);
        }, {}),
        c = null != l ? (0, i.kG)(l) : [],
        u = 0,
        d = 0,
        f = 0,
        y = 0,
        b = 0,
        x = 0,
        E = 0,
        v = 0;
    c.forEach((e) => {
        e.type === h.dCx.ANSWER_IN ? u++ : e.type === h.dCx.ANSWER_USERNAME_FROM ? d++ : e.type === h.dCx.ANSWER_USERNAME_MENTIONS ? f++ : e.type === h.dCx.ANSWER_HAS ? y++ : e.type === h.dCx.ANSWER_BEFORE ? b++ : e.type === h.dCx.ANSWER_ON ? x++ : e.type === h.dCx.ANSWER_AFTER ? E++ : e.type === h.dCx.ANSWER_PINNED && v++;
    });
    let C = g(r);
    (n.ZP.trackWithMetadata(h.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: S(r),
        search_session_id: p(r),
        search_query_id: C,
        search_type: t,
        search_query_length: m(l),
        search_query_content_length: _(s),
        sort_type: (0, i.Vj)(s),
        filter_in_count: u,
        filter_from_count: d,
        filter_mentions_count: f,
        filter_has_count: y,
        filter_before_count: b,
        filter_during_count: x,
        filter_after_count: E,
        filter_pinned_count: v
    }),
        n.ZP.trackWithMetadata(h.rMx.SEARCH_STARTED, {
            search_id: S(r),
            search_session_id: p(r),
            search_query_id: g(r),
            search_type: t,
            num_modifiers: a.length,
            modifiers: o
        }));
}
function I(e) {
    let { rating: t, searchId: r, searchType: s } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: S(r),
        search_type: s,
        search_session_id: p(r),
        search_query_id: g(r)
    });
}
function T(e) {
    let { searchId: t, searchType: r } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: S(t),
        search_type: r,
        search_session_id: p(t),
        search_query_id: g(t)
    });
}
function P(e) {
    let { rating: t, searchId: r, searchType: s, unsatisfiedQuestionOption: l, unsatisfiedQuestionText: a, describeSearchQuestionOption: i, describeSearchQuestionText: o } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: S(r),
        search_type: s,
        search_session_id: p(r),
        search_query_id: g(r),
        rating: t,
        unsatisfied_question_option: l,
        unsatisfied_question_text: a,
        describe_search_question_option: i,
        describe_search_question_text: o
    });
}
function N(e) {
    let { searchType: t, searchId: r } = e;
    (d(r, (e) => {
        c.Z.initialize({
            searchContext: e,
            initialTab: u.sR.MESSAGES
        });
    }),
        n.ZP.trackWithMetadata(h.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t,
            search_id: S(r),
            search_session_id: p(r)
        }));
}
new s.Z('SearchTracking');
let A = new Map([
        [h.dCx.ANSWER_IN, 'in'],
        [h.dCx.FILTER_IN, 'in'],
        [h.dCx.ANSWER_USERNAME_FROM, 'from'],
        [h.dCx.FILTER_FROM, 'from'],
        [h.dCx.ANSWER_USERNAME_MENTIONS, 'mentions'],
        [h.dCx.FILTER_MENTIONS, 'mentions'],
        [h.dCx.ANSWER_HAS, 'has'],
        [h.dCx.FILTER_HAS, 'has'],
        [h.dCx.ANSWER_BEFORE, 'before'],
        [h.dCx.FILTER_BEFORE, 'before'],
        [h.dCx.ANSWER_ON, 'during'],
        [h.dCx.FILTER_ON, 'during'],
        [h.dCx.ANSWER_AFTER, 'after'],
        [h.dCx.FILTER_AFTER, 'after'],
        [h.dCx.ANSWER_PINNED, 'pinned'],
        [h.dCx.FILTER_PINNED, 'pinned']
    ]),
    Z = new Map([
        [h.rtL.HISTORY, 'history'],
        [h.rtL.DATES, 'dates'],
        [h.rtL.SEARCH_OPTIONS, 'search_options']
    ]);
function k(e) {
    let { searchId: t, searchHistoryIndex: r, searchHistoryTotalResults: s } = e,
        l = (0, o.g)(t);
    n.ZP.trackWithMetadata(h.rMx.SEARCH_HISTORY_CLICKED, {
        search_id: S(t),
        search_type: l,
        search_session_id: p(t),
        search_history_index: r,
        search_history_total_results: s
    });
}
function M(e) {
    var t;
    let { searchId: r, searchQuery: s, searchQueryString: l, searchAutocompleteResultIndex: a, searchAutocompleteTotalResults: i, searchTokenType: c, searchAutocompleteGroup: u, isSearchFilterPrefix: d, isSearchFilterAnswer: f, isSearchFilterComplete: y, isInFilterForSelectedChannel: b, searchAutocompleteSelectAction: x } = e,
        E = (0, o.g)(r);
    h.rtL.HISTORY;
    let v = null != (t = A.get(u)) ? t : Z.get(u),
        C = null != c ? A.get(c) : null;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: S(r),
        search_type: E,
        search_session_id: p(r),
        search_query_id: g(r),
        search_query_length: m(l),
        search_query_content_length: _(s),
        search_autocomplete_result_index: a,
        search_autocomplete_total_results: i,
        search_autocomplete_group: v,
        search_autocomplete_filter_type: C,
        is_search_filter_prefix: d,
        is_search_filter_answer: f,
        is_search_filter_complete: y,
        is_in_filter_for_selected_channel: b,
        search_autocomplete_select_action: x
    });
}
function w(e) {
    let { searchId: t, searchAutocompleteSelectAction: r } = e,
        s = (0, o.g)(t);
    n.ZP.trackWithMetadata(h.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: S(t),
        search_type: s,
        search_session_id: p(t),
        search_query_id: g(t),
        search_autocomplete_select_action: r
    });
}
