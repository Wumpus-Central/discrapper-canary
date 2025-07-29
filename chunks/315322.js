(r.d(t, {
    $z: () => Z,
    I1: () => v,
    IZ: () => O,
    LQ: () => f,
    PJ: () => N,
    Qb: () => j,
    Yc: () => I,
    bh: () => M,
    bo: () => P,
    cy: () => E,
    hM: () => S,
    sL: () => x,
    t6: () => C,
    tA: () => w,
    tI: () => R,
    z4: () => T,
    zW: () => b
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
function y(e) {
    var t, r, n;
    return null != (n = null == e || null == (r = e.content) || null == (t = r.trim()) ? void 0 : t.length) ? n : 0;
}
function _(e) {
    return null == e ? null : a.Z.getAnalyticsId(e);
}
function S(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: s, prevSearchAnalyticsId: l, isError: a, limit: i, offset: o, page: c, totalResults: u, pageResults: d, isIndexing: f, pageNumMessages: _, pageNumLinks: S, pageNumEmbeds: x, pageNumAttachments: b, searchQueryString: C, searchQuery: j } = e;
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
        page_num_messages: _,
        page_num_links: S,
        page_num_embeds: x,
        page_num_attach: b,
        search_query_length: m(C),
        search_query_content_length: y(j)
    });
}
function x(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: n, messageId: s, guildId: a, channelId: i, pageResults: o, totalResults: c, page: u, limit: d, offset: f, index: _, searchQueryString: S, searchQuery: x } = e;
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
        index_num: _,
        search_query_length: m(S),
        search_query_content_length: y(x)
    });
}
function b(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: s, mode: l } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: s,
        search_session_id: p(r),
        search_query_id: g(r),
        search_type: t,
        new_sort_type: l
    });
}
function C(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: s, newPageIndex: l } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: s,
        search_session_id: p(r),
        search_query_id: g(r),
        search_type: t,
        new_page_index: l
    });
}
function j(e) {
    let { searchType: t, searchId: r, searchAnalyticsId: s, searchQueryString: l, searchQuery: a } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_RESULT_EMPTY, {
        search_id: s,
        search_session_id: p(r),
        search_query_id: g(r),
        search_type: t,
        search_query_length: m(l),
        search_query_content_length: y(a)
    });
}
function v(e) {
    let { searchType: t, searchId: r } = e;
    (d(r, (e) => {
        c.Z.initialize({
            searchContext: e,
            initialTab: u.sR.MESSAGES
        });
    }),
        n.ZP.trackWithMetadata(h.rMx.SEARCH_OPENED, {
            search_id: _(r),
            search_session_id: p(r),
            search_type: t
        }));
}
function O(e) {
    let { searchId: t, searchType: r } = e;
    (n.ZP.trackWithMetadata(h.rMx.SEARCH_CLOSED, {
        search_id: _(t),
        search_session_id: p(t),
        search_query_id: g(t),
        search_type: r
    }),
        d(t, (e) => {
            c.Z.terminate(e);
        }));
}
function E(e) {
    let { searchType: t, searchId: r } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_INPUT_CLEARED, {
        search_id: _(r),
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
        S = 0,
        x = 0,
        b = 0,
        C = 0,
        j = 0;
    c.forEach((e) => {
        e.type === h.dCx.ANSWER_IN ? u++ : e.type === h.dCx.ANSWER_USERNAME_FROM ? d++ : e.type === h.dCx.ANSWER_USERNAME_MENTIONS ? f++ : e.type === h.dCx.ANSWER_HAS ? S++ : e.type === h.dCx.ANSWER_BEFORE ? x++ : e.type === h.dCx.ANSWER_ON ? b++ : e.type === h.dCx.ANSWER_AFTER ? C++ : e.type === h.dCx.ANSWER_PINNED && j++;
    });
    let v = g(r);
    (n.ZP.trackWithMetadata(h.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: _(r),
        search_session_id: p(r),
        search_query_id: v,
        search_type: t,
        search_query_length: m(l),
        search_query_content_length: y(s),
        sort_type: (0, i.Vj)(s),
        filter_in_count: u,
        filter_from_count: d,
        filter_mentions_count: f,
        filter_has_count: S,
        filter_before_count: x,
        filter_during_count: b,
        filter_after_count: C,
        filter_pinned_count: j
    }),
        n.ZP.trackWithMetadata(h.rMx.SEARCH_STARTED, {
            search_id: _(r),
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
        search_id: _(r),
        search_type: s,
        search_session_id: p(r),
        search_query_id: g(r)
    });
}
function P(e) {
    let { searchId: t, searchType: r } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: _(t),
        search_type: r,
        search_session_id: p(t),
        search_query_id: g(t)
    });
}
function T(e) {
    let { rating: t, searchId: r, searchType: s, unsatisfiedQuestionOption: l, unsatisfiedQuestionText: a, describeSearchQuestionOption: i, describeSearchQuestionText: o } = e;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: _(r),
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
            search_id: _(r),
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
    k = new Map([
        [h.rtL.HISTORY, 'history'],
        [h.rtL.DATES, 'dates'],
        [h.rtL.SEARCH_OPTIONS, 'search_options']
    ]);
function Z(e) {
    let { searchId: t, searchHistoryIndex: r, searchHistoryTotalResults: s } = e,
        l = (0, o.g)(t);
    n.ZP.trackWithMetadata(h.rMx.SEARCH_HISTORY_CLICKED, {
        search_id: _(t),
        search_type: l,
        search_session_id: p(t),
        search_history_index: r,
        search_history_total_results: s
    });
}
function M(e) {
    var t;
    let { searchId: r, searchQuery: s, searchQueryString: l, searchAutocompleteResultIndex: a, searchAutocompleteTotalResults: i, searchTokenType: c, searchAutocompleteGroup: u, isSearchFilterPrefix: d, isSearchFilterAnswer: f, isSearchFilterComplete: S, isInFilterForSelectedChannel: x, searchAutocompleteSelectAction: b } = e,
        C = (0, o.g)(r);
    h.rtL.HISTORY;
    let j = null != (t = A.get(u)) ? t : k.get(u),
        v = null != c ? A.get(c) : null;
    n.ZP.trackWithMetadata(h.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: _(r),
        search_type: C,
        search_session_id: p(r),
        search_query_id: g(r),
        search_query_length: m(l),
        search_query_content_length: y(s),
        search_autocomplete_result_index: a,
        search_autocomplete_total_results: i,
        search_autocomplete_group: j,
        search_autocomplete_filter_type: v,
        is_search_filter_prefix: d,
        is_search_filter_answer: f,
        is_search_filter_complete: S,
        is_in_filter_for_selected_channel: x,
        search_autocomplete_select_action: b
    });
}
function w(e) {
    let { searchId: t, searchAutocompleteSelectAction: r } = e,
        s = (0, o.g)(t);
    n.ZP.trackWithMetadata(h.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: _(t),
        search_type: s,
        search_session_id: p(t),
        search_query_id: g(t),
        search_autocomplete_select_action: r
    });
}
