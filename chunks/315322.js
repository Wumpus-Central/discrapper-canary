n.d(t, {
    $z: () => N,
    I1: () => E,
    IZ: () => b,
    Ix: () => w,
    PJ: () => T,
    Qb: () => g,
    Yc: () => v,
    aR: () => x,
    bh: () => P,
    bo: () => S,
    cy: () => y,
    hM: () => p,
    sL: () => _,
    t6: () => h,
    tA: () => R,
    tI: () => O,
    yn: () => D,
    z4: () => I,
    zW: () => m,
}),
    n(781311),
    n(388685);
var r = n(367907),
    i = n(710845),
    a = n(626135),
    o = n(171900),
    s = n(607802),
    l = n(423880),
    c = n(981631);
function u(e) {
    var t, n;
    return null != (n = null == e || null == (t = e.trim()) ? void 0 : t.length) ? n : 0;
}
function d(e) {
    var t, n, r;
    return null != (r = null == (n = (0, s.UP)(e)) || null == (t = n.trim()) ? void 0 : t.length) ? r : 0;
}
function f(e) {
    let t = (0, s.Tm)(e);
    return o.Z.getAnalyticsId(t);
}
function p(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: n,
        prevSearchRequestAnalyticsId: i,
        isError: a,
        limit: o,
        offset: s,
        page: f,
        totalResults: p,
        pageResults: _,
        isIndexing: m,
        pageNumMessages: h,
        pageNumLinks: g,
        pageNumEmbeds: E,
        pageNumAttachments: b,
        searchQueryString: y,
        searchQuery: O,
    } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t.type,
        search_id: n,
        prev_search_id: i,
        search_session_id: l.Z.getSessionId(t),
        search_query_id: l.Z.getQueryId(t),
        is_error: a,
        limit: o,
        offset: s,
        page: f,
        total_results: p,
        page_results: _,
        is_indexing: m,
        page_num_messages: h,
        page_num_links: g,
        page_num_embeds: E,
        page_num_attach: b,
        search_query_length: u(y),
        search_query_content_length: d(O),
    });
}
function _(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: n,
        messageId: r,
        guildId: i,
        channelId: o,
        pageResults: s,
        totalResults: f,
        page: p,
        limit: _,
        offset: m,
        index: h,
        searchQueryString: g,
        searchQuery: E,
    } = e;
    a.default.track(c.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t.type,
        search_id: n,
        search_session_id: l.Z.getSessionId(t),
        search_query_id: l.Z.getQueryId(t),
        message_id: r,
        guild_id: i,
        channel_id: o,
        page_results: s,
        total_results: f,
        page: p,
        limit: _,
        offset: m,
        index_num: h,
        search_query_length: u(g),
        search_query_content_length: d(E),
    });
}
function m(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, mode: i } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: n,
        search_session_id: l.Z.getSessionId(t),
        search_query_id: l.Z.getQueryId(t),
        search_type: t.type,
        new_sort_type: i,
    });
}
function h(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, newPageIndex: i } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: n,
        search_session_id: l.Z.getSessionId(t),
        search_query_id: l.Z.getQueryId(t),
        search_type: t.type,
        new_page_index: i,
    });
}
function g(e) {
    let { searchContext: t, searchRequestAnalyticsId: n, searchQueryString: i, searchQuery: a } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_RESULT_EMPTY, {
        search_id: n,
        search_session_id: l.Z.getSessionId(t),
        search_query_id: l.Z.getQueryId(t),
        search_type: t.type,
        search_query_length: u(i),
        search_query_content_length: d(a),
    });
}
function E(e) {
    let { searchContext: t } = e;
    l.Z.initialize(t),
        r.ZP.trackWithMetadata(c.rMx.SEARCH_OPENED, {
            search_id: f(t),
            search_session_id: l.Z.getSessionId(t),
            search_type: t.type,
        });
}
function b(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_CLOSED, {
        search_id: f(t),
        search_session_id: l.Z.getSessionId(t),
        search_query_id: l.Z.getQueryId(t),
        search_type: t.type,
    }),
        l.Z.terminate(t);
}
function y(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_INPUT_CLEARED, {
        search_id: f(t),
        search_session_id: l.Z.getSessionId(t),
        search_query_id: l.Z.getQueryId(t),
        search_type: t.type,
    });
}
function O(e) {
    let { searchContext: t, query: n, queryString: i, searchQuerySource: a } = e,
        o = Object.keys(n),
        p = o.reduce((e, t) => {
            let r = n[t];
            return (e[t] = Array.isArray(r) ? r.length : 1), e;
        }, {}),
        _ = null != i ? (0, s.kG)(i) : [],
        m = 0,
        h = 0,
        g = 0,
        E = 0,
        b = 0,
        y = 0,
        O = 0,
        v = 0,
        S = 0;
    _.forEach((e) => {
        e.type === c.dCx.ANSWER_IN
            ? m++
            : e.type === c.dCx.ANSWER_USERNAME_FROM
              ? h++
              : e.type === c.dCx.ANSWER_USERNAME_MENTIONS
                ? g++
                : e.type === c.dCx.ANSWER_HAS
                  ? E++
                  : e.type === c.dCx.ANSWER_BEFORE
                    ? b++
                    : e.type === c.dCx.ANSWER_ON
                      ? y++
                      : e.type === c.dCx.ANSWER_AFTER
                        ? O++
                        : e.type === c.dCx.ANSWER_PINNED
                          ? v++
                          : e.type === c.dCx.ANSWER_AUTHOR_TYPE && S++;
    });
    let I = l.Z.getQueryId(t);
    r.ZP.trackWithMetadata(c.rMx.MESSAGES_SEARCH_STARTED, {
        search_id: f(t),
        search_session_id: l.Z.getSessionId(t),
        search_query_id: I,
        search_type: t.type,
        search_query_length: u(i),
        search_query_content_length: d(n),
        sort_type: (0, s.Vj)(n),
        filter_in_count: m,
        filter_from_count: h,
        filter_mentions_count: g,
        filter_has_count: E,
        filter_before_count: b,
        filter_during_count: y,
        filter_after_count: O,
        filter_pinned_count: v,
        filter_author_type_count: S,
        search_query_source: a,
    }),
        r.ZP.trackWithMetadata(c.rMx.SEARCH_STARTED, {
            search_id: f(t),
            search_session_id: l.Z.getSessionId(t),
            search_query_id: l.Z.getQueryId(t),
            search_type: t.type,
            num_modifiers: o.length,
            modifiers: p,
        });
}
function v(e) {
    let { rating: t, searchContext: n } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: f(n),
        search_type: n.type,
        search_session_id: l.Z.getSessionId(n),
        search_query_id: l.Z.getQueryId(n),
    });
}
function S(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: f(t),
        search_type: t.type,
        search_session_id: l.Z.getSessionId(t),
        search_query_id: l.Z.getQueryId(t),
    });
}
function I(e) {
    let {
        rating: t,
        searchContext: n,
        unsatisfiedQuestionOption: i,
        unsatisfiedQuestionText: a,
        describeSearchQuestionOption: o,
        describeSearchQuestionText: s,
    } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: f(n),
        search_type: n.type,
        search_session_id: l.Z.getSessionId(n),
        search_query_id: l.Z.getQueryId(n),
        rating: t,
        unsatisfied_question_option: i,
        unsatisfied_question_text: a,
        describe_search_question_option: o,
        describe_search_question_text: s,
    });
}
function T(e) {
    let { searchContext: t } = e;
    l.Z.enqueueEvent(t, () => {
        r.ZP.trackWithMetadata(c.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t.type,
            search_id: f(t),
            search_session_id: l.Z.getSessionId(t),
        });
    });
}
new i.Z("SearchTracking");
let C = new Map([
        [c.dCx.ANSWER_IN, "in"],
        [c.dCx.FILTER_IN, "in"],
        [c.dCx.ANSWER_USERNAME_FROM, "from"],
        [c.dCx.FILTER_FROM, "from"],
        [c.dCx.ANSWER_USERNAME_MENTIONS, "mentions"],
        [c.dCx.FILTER_MENTIONS, "mentions"],
        [c.dCx.ANSWER_HAS, "has"],
        [c.dCx.FILTER_HAS, "has"],
        [c.dCx.ANSWER_BEFORE, "before"],
        [c.dCx.FILTER_BEFORE, "before"],
        [c.dCx.ANSWER_ON, "during"],
        [c.dCx.FILTER_ON, "during"],
        [c.dCx.ANSWER_AFTER, "after"],
        [c.dCx.FILTER_AFTER, "after"],
        [c.dCx.ANSWER_PINNED, "pinned"],
        [c.dCx.FILTER_PINNED, "pinned"],
    ]),
    A = new Map([
        [c.rtL.HISTORY, "history"],
        [c.rtL.DATES, "dates"],
        [c.rtL.SEARCH_OPTIONS, "search_options"],
    ]);
function N(e) {
    let { searchContext: t, searchHistoryIndex: n, searchHistoryTotalResults: i } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_HISTORY_CLICKED, {
        search_id: f(t),
        search_type: t.type,
        search_session_id: l.Z.getSessionId(t),
        search_history_index: n,
        search_history_total_results: i,
    });
}
function P(e) {
    var t;
    let {
        searchContext: n,
        searchQuery: i,
        searchQueryString: a,
        searchAutocompleteResultIndex: o,
        searchAutocompleteTotalResults: s,
        searchTokenType: p,
        searchAutocompleteGroup: _,
        isSearchFilterPrefix: m,
        isSearchFilterAnswer: h,
        isSearchFilterComplete: g,
        isInFilterForSelectedChannel: E,
        searchAutocompleteSelectAction: b,
    } = e;
    c.rtL.HISTORY;
    let y = null != (t = C.get(_)) ? t : A.get(_),
        O = null != p ? C.get(p) : null;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: f(n),
        search_type: n.type,
        search_session_id: l.Z.getSessionId(n),
        search_query_id: l.Z.getQueryId(n),
        search_query_length: u(a),
        search_query_content_length: d(i),
        search_autocomplete_result_index: o,
        search_autocomplete_total_results: s,
        search_autocomplete_group: y,
        search_autocomplete_filter_type: O,
        is_search_filter_prefix: m,
        is_search_filter_answer: h,
        is_search_filter_complete: g,
        is_in_filter_for_selected_channel: E,
        search_autocomplete_select_action: b,
    });
}
function R(e) {
    let { searchContext: t, searchAutocompleteSelectAction: n } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: f(t),
        search_type: t.type,
        search_session_id: l.Z.getSessionId(t),
        search_query_id: l.Z.getQueryId(t),
        search_autocomplete_select_action: n,
    });
}
var w = (function (e) {
    return (e.SEARCH_HEADER = "search_header"), (e.USER_SETTINGS = "user_settings"), e;
})({});
function D(e) {
    let { searchContext: t, prevIsCrossDMSettingEnabled: n, isCrossDMSettingEnabled: i, location: a } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_CROSS_DM_SETTING_UPDATE, {
        search_id: null != t ? f(t) : null,
        search_type: null == t ? void 0 : t.type,
        search_session_id: null != t ? l.Z.getSessionId(t) : null,
        search_query_id: null != t ? l.Z.getQueryId(t) : null,
        prev_is_cross_dm_setting_enabled: n,
        is_cross_dm_setting_enabled: i,
        setting_location: a,
    });
}
function x(e) {
    let { searchContext: t } = e;
    r.ZP.trackWithMetadata(c.rMx.SEARCH_FILTERS_MODAL_OPENED, {
        search_id: f(t),
        search_type: t.type,
        search_session_id: l.Z.getSessionId(t),
        search_query_id: l.Z.getQueryId(t),
    });
}
