"use strict";
n.d(t, {
    DZ: () => x,
    LW: () => R,
    Mm: () => P,
    OQ: () => L,
    Qg: () => C,
    XH: () => w,
    Y5: () => O,
    av: () => v,
    gr: () => M,
    kO: () => D,
    vK: () => b,
});
var i = n(835245),
    r = n(323889),
    s = n(345353),
    a = n(881615),
    o = n(234396),
    l = n(95561),
    u = n(69114),
    c = n(265059),
    d = n(111162),
    _ = n(174459),
    h = n(723702),
    f = n(859703);
n(507107);
var p = n(710969),
    E = n(792620),
    m = n(814793),
    g = n(590202),
    A = n(823784),
    I = n(652215);
let T = new Set([I.HAw.QUEST_CONTENT_VIEWED, I.HAw.QUEST_CONTENT_CLICKED]);
function S(e, t) {
    return t ? e : ((0, o.Vc)()?.uuid ?? null);
}
function y(e, t, n, i) {
    let r = (0, a.sN)(i).uuid,
        s = (0, p.Kc)(e, t);
    return {
        client_ad_session_id: r,
        billing_session_id: S(r, (0, p.xn)(t)),
        ad_content_id: e,
        ...s,
        creative_type: s.creative_type ?? n,
    };
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (
        (c.A.displayTools && "quest_preview" === c.A.lastOpenTabId) ||
        (d.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), i)
    )
        return;
    let r = T.has(e);
    if (n) return l.Ay.trackWithMetadata(e, t, r);
    _.default.track(e, t, { flush: r });
}
function v(e) {
    let {
            questId: t,
            event: n,
            properties: i,
            trackGuildAndChannelMetadata: s,
            shouldExtendSession: a = !1,
            sourceQuestContent: o,
        } = e,
        l = f.A.quests.get(t);
    null != l &&
        N(
            n,
            {
                ...{
                    quest_id: l.id,
                    quest_type: (0, m.pv)(l.config),
                    game_id: l.config.application.id,
                    game_name: l.config.application.name,
                    application_ids: (0, E._3)(l) ?? [],
                    quest_status: (0, g.NI)(l),
                    ...y(l.id, o, r.p.QUEST, a),
                },
                ...i,
            },
            s,
            l.preview,
        );
}
function C(e) {
    let {
            adContentId: t,
            relatedQuestId: n,
            adCreativeType: i,
            event: r,
            properties: s,
            trackGuildAndChannelMetadata: a,
            shouldExtendSession: o = !1,
            sourceQuestContent: l,
        } = e,
        u = {
            ...(function (e) {
                let {
                        adContentId: t,
                        adCreativeType: n,
                        sourceQuestContent: i,
                        shouldExtendSession: r,
                        relatedQuestId: s,
                    } = e,
                    a = null != s ? f.A.getQuest(s) : null;
                return {
                    ...y(t, i, n, r),
                    metadata_sealed: (0, p.L4)(i, t) ?? null,
                    traffic_metadata_sealed: (0, p.Gp)(i, void 0, t) ?? null,
                    quest_id: s ?? null,
                    quest_status: null != a ? (0, g.NI)(a) : null,
                };
            })({ adContentId: t, adCreativeType: i, sourceQuestContent: l, shouldExtendSession: o, relatedQuestId: n }),
            ...s,
        };
    N(r, u, a, !1);
}
async function R(e) {
    let {
            questContent: t,
            questContentPosition: n,
            questContentRowIndex: r,
            questContentCTA: a,
            impressionId: o,
            clickId: l,
        } = e,
        c = await (0, s.N)((0, g.jO)(t));
    return {
        ...(0, g.fF)(t, n, r),
        ...(0, u.A)(),
        cta_name: a,
        impression_id: o,
        apple_advertising_id: null != c && (0, h.isIOS)() ? c.advertisingId : null,
        android_advertising_id: null != c && (0, h.isAndroid)() ? c.advertisingId : null,
        click_id: l ?? (0, i.A)(),
    };
}
async function O(e) {
    let {
            questId: t,
            questContent: n,
            questContentCTA: i,
            questContentPosition: r,
            questContentRowIndex: s,
            impressionId: a,
            clickId: o,
            trackGuildAndChannelMetadata: l,
            sourceQuestContent: u,
        } = e,
        c = (0, p.Gp)(u, t);
    v({
        questId: t,
        event: I.HAw.QUEST_CONTENT_CLICKED,
        properties: {
            ...(await R({
                questContent: n,
                questContentPosition: r,
                questContentRowIndex: s,
                questContentCTA: i,
                impressionId: a,
                clickId: o,
            })),
            metadata_sealed: (0, p.L4)(u) ?? null,
            traffic_metadata_sealed: c ?? null,
            search_session_id: (0, A.tv)()?.uuid ?? null,
        },
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, p.xn)(n),
        sourceQuestContent: u,
    });
}
async function b(e) {
    let {
        adContentId: t,
        relatedQuestId: n,
        adCreativeType: i,
        questContent: r,
        questContentCTA: s,
        questContentPosition: a,
        questContentRowIndex: o,
        impressionId: l,
        trackGuildAndChannelMetadata: u,
        sourceQuestContent: c,
    } = e;
    C({
        adContentId: t,
        relatedQuestId: n,
        adCreativeType: i,
        event: I.HAw.QUEST_CONTENT_CLICKED,
        properties: await R({
            questContent: r,
            questContentPosition: a,
            questContentRowIndex: o,
            questContentCTA: s,
            impressionId: l,
        }),
        trackGuildAndChannelMetadata: u,
        shouldExtendSession: (0, p.xn)(r),
        sourceQuestContent: c,
    });
}
function D(e) {
    let {
            scrollingType: t,
            scrollingDirection: n,
            scrollWindowStartIndex: i,
            scrollWindowEndIndex: r,
            scrollWindowSize: s,
            questContent: o,
            carouselSize: l,
        } = e,
        u = (0, a.sN)().uuid;
    _.default.track(I.HAw.QUEST_HOME_CAROUSEL_SCROLL, {
        scrolling_type: t,
        client_ad_session_id: u,
        billing_session_id: S(u, (0, p.xn)(o)),
        scrolling_direction: n,
        scroll_window_start_index: i,
        scroll_window_end_index: r,
        scroll_window_size: s,
        content_name: (0, g.jO)(o),
        content_id: o,
        carousel_size: l,
    });
}
function L(e) {
    let { searchSessionId: t } = e,
        n = (0, a.sN)().uuid;
    _.default.track(I.HAw.QUEST_HOME_SEARCH_ENTERED, {
        client_ad_session_id: n,
        billing_session_id: S(n, !1),
        search_session_id: t,
    });
}
function w(e) {
    let { searchSessionId: t, searchSessionDurationMs: n } = e,
        i = (0, a.sN)().uuid;
    _.default.track(I.HAw.QUEST_HOME_SEARCH_CLOSED, {
        client_ad_session_id: i,
        billing_session_id: S(i, !1),
        search_session_id: t,
        search_session_duration_ms: n,
    });
}
function M(e) {
    let { searchSessionId: t, searchQuery: n, searchQueryLength: i, resultsCount: r, hasResults: s } = e,
        o = (0, a.sN)().uuid;
    _.default.track(I.HAw.QUEST_HOME_SEARCH_QUERY_SUBMITTED, {
        client_ad_session_id: o,
        billing_session_id: S(o, !1),
        search_session_id: t,
        search_query: n,
        search_query_length: i,
        results_count: r,
        has_results: s,
    });
}
function P(e) {
    let { questContent: t, sourceQuestContent: n, questId: i, mode: r, prevMode: s } = e,
        a = (0, g.fF)(t);
    v({
        questId: i,
        event: I.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: a.content_id, content_name: a.content_name, mode: r, previous_mode: s },
        sourceQuestContent: n,
    });
}
function x(e, t) {
    l.Ay.trackWithMetadata(I.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
}
