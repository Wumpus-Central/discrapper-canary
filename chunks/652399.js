(r.d(t, {
    $z: () => k,
    I1: () => v,
    IZ: () => j,
    LQ: () => g,
    PJ: () => A,
    Qb: () => C,
    Yc: () => T,
    bh: () => w,
    bo: () => P,
    cy: () => R,
    hM: () => b,
    sL: () => x,
    t6: () => O,
    tA: () => L,
    tI: () => I,
    z4: () => N,
    zW: () => E
}),
    r(781311),
    r(388685));
var n = r(603263),
    s = r(367907),
    l = r(710845),
    a = r(903488),
    i = r(466863),
    o = r(626135),
    c = r(405656),
    u = r(861262),
    h = r(981631),
    d = r(862825);
function p(e, t) {
    let r = (function (e) {
        let t = null != e ? (0, u.g)(e) : null;
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
function f(e) {
    return p(e, (e) => i.Z.getSessionId(e));
}
function g(e) {
    p(e, (e) => i.Z.refreshSearchQueryAnalyticsId(e));
}
function m(e) {
    return p(e, (e) => i.Z.getQueryId(e));
}
function S(e) {
    var t, r;
    return null != (r = null == e || null == (t = e.trim()) ? void 0 : t.length) ? r : 0;
}
function _(e) {
    var t, r, n;
    return null != (n = null == e || null == (r = e.content) || null == (t = r.trim()) ? void 0 : t.length) ? n : 0;
}
function y(e) {
    return null == e ? null : a.Z.getAnalyticsId(e);
}
function b(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: n, prevSearchAnalyticsId: l, isError: a, limit: i, offset: o, page: c, totalResults: u, pageResults: d, isIndexing: p, pageNumMessages: g, pageNumLinks: y, pageNumEmbeds: b, pageNumAttachments: x, searchQueryString: E, searchQuery: O } = e;
    s.ZP.trackWithMetadata(h.rMx.SEARCH_RESULT_VIEWED, {
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
        page_results: d,
        is_indexing: p,
        page_num_messages: g,
        page_num_links: y,
        page_num_embeds: b,
        page_num_attach: x,
        search_query_length: S(E),
        search_query_content_length: _(O)
    });
}
function x(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: n, messageId: s, guildId: l, channelId: a, pageResults: i, totalResults: c, page: u, limit: d, offset: p, index: g, searchQueryString: y, searchQuery: b } = e;
    o.default.track(h.rMx.SEARCH_RESULT_SELECTED, {
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
        limit: d,
        offset: p,
        index_num: g,
        search_query_length: S(y),
        search_query_content_length: _(b)
    });
}
function E(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: n, mode: l } = e;
    s.ZP.trackWithMetadata(h.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: n,
        search_session_id: f(r),
        search_query_id: m(r),
        search_type: t,
        new_sort_type: l
    });
}
function O(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: n, newPageIndex: l } = e;
    s.ZP.trackWithMetadata(h.rMx.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: n,
        search_session_id: f(r),
        search_query_id: m(r),
        search_type: t,
        new_page_index: l
    });
}
function C(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: n, searchQueryString: l, searchQuery: a } = e;
    s.ZP.trackWithMetadata(h.rMx.SEARCH_RESULT_EMPTY, {
        search_id: n,
        search_session_id: f(r),
        search_query_id: m(r),
        search_type: t,
        search_query_length: S(l),
        search_query_content_length: _(a)
    });
}
function v(e) {
    let { searchType: t, searchId: r } = e;
    (p(r, (e) => {
        i.Z.initialize({
            searchContext: e,
            initialTab: d.sR.MESSAGES
        });
    }),
        s.ZP.trackWithMetadata(h.rMx.SEARCH_OPENED, {
            search_id: y(r),
            search_session_id: f(r),
            search_type: t
        }));
}
function j(e) {
    let { searchId: t, searchType: r } = e;
    (s.ZP.trackWithMetadata(h.rMx.SEARCH_CLOSED, {
        search_id: y(t),
        search_session_id: f(t),
        search_query_id: m(t),
        search_type: r
    }),
        p(t, (e) => {
            i.Z.terminate(e);
        }));
}
function R(e) {
    let { searchType: t, searchId: r } = e;
    s.ZP.trackWithMetadata(h.rMx.SEARCH_INPUT_CLEARED, {
        search_id: y(r),
        search_session_id: f(r),
        search_query_id: m(r),
        search_type: t
    });
}
function I(e) {
    let { searchType: t, searchId: r, query: l, queryString: a } = e,
        i = Object.keys(l),
        o = i.reduce((e, t) => {
            let r = l[t];
            return ((e[t] = Array.isArray(r) ? r.length : 1), e);
        }, {}),
        u = null != a ? (0, c.kG)(a) : [],
        d = 0,
        p = 0,
        g = 0,
        b = 0,
        x = 0,
        E = 0,
        O = 0,
        C = 0;
    u.forEach((e) => {
        e.type === h.dCx.ANSWER_IN ? d++ : e.type === h.dCx.ANSWER_USERNAME_FROM ? p++ : e.type === h.dCx.ANSWER_USERNAME_MENTIONS ? g++ : e.type === h.dCx.ANSWER_HAS ? b++ : e.type === h.dCx.ANSWER_BEFORE ? x++ : e.type === h.dCx.ANSWER_ON ? E++ : e.type === h.dCx.ANSWER_AFTER ? O++ : e.type === h.dCx.ANSWER_PINNED && C++;
    });
    let v = m(r);
    (s.ZP.trackWithMetadata(h.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: y(r),
        search_session_id: f(r),
        search_query_id: v,
        search_type: t,
        search_query_length: S(a),
        search_query_content_length: _(l),
        sort_type: (0, n.Vj)(l),
        filter_in_count: d,
        filter_from_count: p,
        filter_mentions_count: g,
        filter_has_count: b,
        filter_before_count: x,
        filter_during_count: E,
        filter_after_count: O,
        filter_pinned_count: C
    }),
        s.ZP.trackWithMetadata(h.rMx.SEARCH_STARTED, {
            search_id: y(r),
            search_session_id: f(r),
            search_query_id: m(r),
            search_type: t,
            num_modifiers: i.length,
            modifiers: o
        }));
}
function T(e) {
    let { rating: t, searchId: r, searchType: n } = e;
    s.ZP.trackWithMetadata(h.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: y(r),
        search_type: n,
        search_session_id: f(r),
        search_query_id: m(r)
    });
}
function P(e) {
    let { searchId: t, searchType: r } = e;
    s.ZP.trackWithMetadata(h.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: y(t),
        search_type: r,
        search_session_id: f(t),
        search_query_id: m(t)
    });
}
function N(e) {
    let { rating: t, searchId: r, searchType: n, unsatisfiedQuestionOption: l, unsatisfiedQuestionText: a, describeSearchQuestionOption: i, describeSearchQuestionText: o } = e;
    s.ZP.trackWithMetadata(h.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: y(r),
        search_type: n,
        search_session_id: f(r),
        search_query_id: m(r),
        rating: t,
        unsatisfied_question_option: l,
        unsatisfied_question_text: a,
        describe_search_question_option: i,
        describe_search_question_text: o
    });
}
function A(e) {
    let { searchType: t, searchId: r } = e;
    (p(r, (e) => {
        i.Z.initialize({
            searchContext: e,
            initialTab: d.sR.MESSAGES
        });
    }),
        s.ZP.trackWithMetadata(h.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t,
            search_id: y(r),
            search_session_id: f(r)
        }));
}
new l.Z('SearchTracking');
let M = new Map([
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
    let { searchId: t, searchHistoryIndex: r, searchHistoryTotalResults: n } = e,
        l = (0, u.g)(t);
    s.ZP.trackWithMetadata(h.rMx.SEARCH_HISTORY_CLICKED, {
        search_id: y(t),
        search_type: l,
        search_session_id: f(t),
        search_history_index: r,
        search_history_total_results: n
    });
}
function w(e) {
    var t;
    let { searchId: r, searchQuery: n, searchQueryString: l, searchAutocompleteResultIndex: a, searchAutocompleteTotalResults: i, searchTokenType: o, searchAutocompleteGroup: c, isSearchFilterPrefix: d, isSearchFilterAnswer: p, isSearchFilterComplete: g, isInFilterForSelectedChannel: b, searchAutocompleteSelectAction: x } = e,
        E = (0, u.g)(r);
    h.rtL.HISTORY;
    let O = null != (t = M.get(c)) ? t : Z.get(c),
        C = null != o ? M.get(o) : null;
    s.ZP.trackWithMetadata(h.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: y(r),
        search_type: E,
        search_session_id: f(r),
        search_query_id: m(r),
        search_query_length: S(l),
        search_query_content_length: _(n),
        search_autocomplete_result_index: a,
        search_autocomplete_total_results: i,
        search_autocomplete_group: O,
        search_autocomplete_filter_type: C,
        is_search_filter_prefix: d,
        is_search_filter_answer: p,
        is_search_filter_complete: g,
        is_in_filter_for_selected_channel: b,
        search_autocomplete_select_action: x
    });
}
function L(e) {
    let { searchId: t, searchAutocompleteSelectAction: r } = e,
        n = (0, u.g)(t);
    s.ZP.trackWithMetadata(h.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: y(t),
        search_type: n,
        search_session_id: f(t),
        search_query_id: m(t),
        search_autocomplete_select_action: r
    });
}
