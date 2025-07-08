(n.d(t, {
    I1: () => C,
    IZ: () => x,
    PJ: () => T,
    Qb: () => y,
    Yc: () => j,
    bo: () => I,
    cy: () => v,
    hM: () => h,
    sL: () => b,
    tI: () => O,
    z4: () => S,
    zW: () => E
}),
    n(781311));
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
    var t, n;
    return null != (n = null == e || null == (t = e.trim()) ? void 0 : t.length) ? n : 0;
}
function g(e) {
    var t, n, r;
    return null != (r = null == e || null == (n = e.content) || null == (t = n.trim()) ? void 0 : t.length) ? r : 0;
}
function h(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, prevSearchAnalyticsId: l, isError: a, limit: o, offset: s, page: c, totalResults: u, pageResults: p, isIndexing: m, pageNumMessages: h, pageNumLinks: b, pageNumEmbeds: E, pageNumAttachments: y, searchQueryString: C, searchQuery: x } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t,
        search_id: r,
        prev_search_id: l,
        search_session_id: f(n),
        is_error: a,
        limit: o,
        offset: s,
        page: c,
        total_results: u,
        page_results: p,
        is_indexing: m,
        page_num_messages: h,
        page_num_links: b,
        page_num_embeds: E,
        page_num_attach: y,
        search_query_length: _(C),
        search_query_content_length: g(x)
    });
}
function b(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, guildId: i, channelId: l, pageResults: a, totalResults: o, page: c, limit: u, offset: p, index: m, searchQueryString: h, searchQuery: b } = e;
    s.default.track(d.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t,
        search_id: r,
        search_session_id: f(n),
        guild_id: i,
        channel_id: l,
        page_results: a,
        total_results: o,
        page: c,
        limit: u,
        offset: p,
        index_num: m,
        search_query_length: _(h),
        search_query_content_length: g(b)
    });
}
function E(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, mode: l } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: r,
        search_session_id: f(n),
        search_type: t,
        new_sort_type: l
    });
}
function y(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, searchQueryString: l, searchQuery: a } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_EMPTY, {
        search_id: r,
        search_session_id: f(n),
        search_type: t,
        search_query_length: _(l),
        search_query_content_length: g(a)
    });
}
function C(e) {
    let { searchType: t, searchId: n } = e;
    (m(n, (e) => {
        a.Z.initialize(e, p.sR.MESSAGES);
    }),
        i.ZP.trackWithMetadata(d.rMx.SEARCH_OPENED, {
            search_id: null != n ? o.Z.getAnalyticsId(n) : null,
            search_session_id: f(n),
            search_type: t
        }));
}
function x(e) {
    let { searchId: t, searchType: n } = e;
    (i.ZP.trackWithMetadata(d.rMx.SEARCH_CLOSED, {
        search_id: null != t ? o.Z.getAnalyticsId(t) : null,
        search_session_id: f(t),
        search_type: n
    }),
        m(t, (e) => {
            a.Z.terminate(e);
        }));
}
function v(e) {
    let { searchType: t, searchId: n } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_INPUT_CLEARED, {
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_session_id: f(n),
        search_type: t
    });
}
function O(e) {
    let { searchType: t, searchId: n, query: l, queryString: a } = e,
        s = Object.keys(l),
        u = s.reduce((e, t) => {
            let n = l[t];
            return ((e[t] = Array.isArray(n) ? n.length : 1), e);
        }, {}),
        p = null != a ? (0, c.kG)(a) : [],
        m = 0,
        h = 0,
        b = 0,
        E = 0,
        y = 0,
        C = 0,
        x = 0,
        v = 0;
    (p.forEach((e) => {
        e.type === d.dCx.ANSWER_IN ? m++ : e.type === d.dCx.ANSWER_USERNAME_FROM ? h++ : e.type === d.dCx.ANSWER_USERNAME_MENTIONS ? b++ : e.type === d.dCx.ANSWER_HAS ? E++ : e.type === d.dCx.ANSWER_BEFORE ? y++ : e.type === d.dCx.ANSWER_ON ? C++ : e.type === d.dCx.ANSWER_AFTER ? x++ : e.type === d.dCx.ANSWER_PINNED && v++;
    }),
        i.ZP.trackWithMetadata(d.rMx.MESSAGES_SEARCH_STARTED, {
            search_id: null != n ? o.Z.getAnalyticsId(n) : null,
            search_session_id: f(n),
            search_type: t,
            search_query_length: _(a),
            search_query_content_length: g(l),
            sort_type: (0, r.Vj)(l),
            filter_in_count: m,
            filter_from_count: h,
            filter_mentions_count: b,
            filter_has_count: E,
            filter_before_count: y,
            filter_during_count: C,
            filter_after_count: x,
            filter_pinned_count: v
        }),
        i.ZP.trackWithMetadata(d.rMx.SEARCH_STARTED, {
            search_id: null != n ? o.Z.getAnalyticsId(n) : null,
            search_session_id: f(n),
            search_type: t,
            num_modifiers: s.length,
            modifiers: u
        }));
}
function j(e) {
    let { rating: t, searchId: n, searchType: r } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_type: r,
        search_session_id: f(n)
    });
}
function I(e) {
    let { searchId: t, searchType: n } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: null != t ? o.Z.getAnalyticsId(t) : null,
        search_type: n,
        search_session_id: f(t)
    });
}
function S(e) {
    let { rating: t, searchId: n, searchType: r, unsatisfiedQuestionOption: l, unsatisfiedQuestionText: a, describeSearchQuestionOption: s, describeSearchQuestionText: c } = e;
    i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_type: r,
        search_session_id: f(n),
        rating: t,
        unsatisfied_question_option: l,
        unsatisfied_question_text: a,
        describe_search_question_option: s,
        describe_search_question_text: c
    });
}
function T(e) {
    let { searchType: t, searchId: n } = e;
    (m(n, (e) => {
        a.Z.initialize(e, p.sR.MESSAGES);
    }),
        i.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t,
            search_id: null != n ? o.Z.getAnalyticsId(n) : null,
            search_session_id: f(n)
        }));
}
new l.Z('SearchTracking');
