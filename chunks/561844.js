"use strict";
n.d(t, {
    DZ: () => k,
    LW: () => D,
    OQ: () => P,
    Qg: () => y,
    Wc: () => x,
    XH: () => U,
    Y5: () => v,
    YE: () => L,
    Zu: () => G,
    av: () => O,
    eA: () => R,
    gr: () => w,
    kO: () => M,
    vK: () => b,
});
var i = n(132500),
    r = n(323889),
    a = n(345353),
    s = n(881615),
    l = n(824427),
    o = n(95561),
    d = n(69114),
    c = n(265059),
    u = n(111162),
    _ = n(174459),
    E = n(723702),
    A = n(859703);
n(24001);
var h = n(710969),
    I = n(792620),
    f = n(814793),
    p = n(590202),
    T = n(823784),
    m = n(652215);
let g = new Set([m.HAw.QUEST_CONTENT_VIEWED, m.HAw.QUEST_CONTENT_CLICKED]);
function S(e, t) {
    return t ? e : ((0, l.Vc)()?.uuid ?? null);
}
function N(e, t, n, i) {
    let r = (0, s.sN)(i).uuid,
        a = (0, h.Kc)(e, t);
    return {
        client_ad_session_id: r,
        billing_session_id: S(r, (0, h.xn)(t)),
        ad_content_id: e,
        ...a,
        creative_type: a.creative_type ?? n,
    };
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (
        (c.A.displayTools && "quest_preview" === c.A.lastOpenTabId) ||
        (u.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), i)
    )
        return;
    let r = g.has(e);
    if (n) return o.Ay.trackWithMetadata(e, t, r);
    _.default.track(e, t, { flush: r });
}
function O(e) {
    let {
            questId: t,
            event: n,
            properties: i,
            trackGuildAndChannelMetadata: a,
            shouldExtendSession: s = !1,
            sourceQuestContent: l,
        } = e,
        o = A.A.quests.get(t);
    null != o &&
        C(
            n,
            {
                ...{
                    quest_id: o.id,
                    quest_type: (0, f.pv)(o.config),
                    application_ids: (0, I._3)(o) ?? [],
                    quest_status: (0, p.NI)(o),
                    ...N(o.id, l, r.p.QUEST, s),
                },
                ...i,
            },
            a,
            o.preview,
        );
}
function R(e) {
    let { quest: t, trackingCtx: n, inlineStoreAppId: i, overlayVariant: r, event: a, timeSpentMs: s } = e,
        l = {
            content_name: (0, p.jO)(n.content),
            cta_name: n.ctaContent,
            impression_id: n.impressionId,
            source_content_name: (0, p.jO)(n.sourceQuestContent),
            app_id: i,
            content_position: n.position,
            overlay_variant: r,
        },
        o =
            (a === m.HAw.QUEST_APP_STORE_OVERLAY_CLOSED || a === m.HAw.QUEST_APP_STORE_OVERLAY_RETURNED) &&
            void 0 !== s;
    O({
        questId: t.id,
        event: a,
        properties: o ? { ...l, time_spent_ms: s } : l,
        sourceQuestContent: n.sourceQuestContent,
    });
}
function L(e) {
    let {
            adContentId: t,
            adCreativeType: n,
            trackingCtx: i,
            inlineStoreAppId: r,
            overlayVariant: a,
            event: s,
            timeSpentMs: l,
        } = e,
        o = {
            content_name: (0, p.jO)(i.content),
            cta_name: i.ctaContent,
            impression_id: i.impressionId,
            source_content_name: (0, p.jO)(i.sourceQuestContent),
            app_id: r,
            content_position: i.position,
            overlay_variant: a,
        },
        d =
            (s === m.HAw.QUEST_APP_STORE_OVERLAY_CLOSED || s === m.HAw.QUEST_APP_STORE_OVERLAY_RETURNED) &&
            void 0 !== l;
    y({
        adContentId: t,
        adCreativeType: n,
        event: s,
        properties: d ? { ...o, time_spent_ms: l } : o,
        sourceQuestContent: i.sourceQuestContent,
    });
}
function y(e) {
    let {
            adContentId: t,
            relatedQuestId: n,
            adCreativeType: i,
            event: r,
            properties: a,
            trackGuildAndChannelMetadata: s,
            shouldExtendSession: l = !1,
            sourceQuestContent: o,
        } = e,
        d = {
            ...(function (e) {
                let {
                        adContentId: t,
                        adCreativeType: n,
                        sourceQuestContent: i,
                        shouldExtendSession: r,
                        relatedQuestId: a,
                    } = e,
                    s = null != a ? A.A.getQuest(a) : null;
                return {
                    ...N(t, i, n, r),
                    metadata_sealed: (0, h.L4)(i, t) ?? null,
                    traffic_metadata_sealed: (0, h.Gp)(i, void 0, t) ?? null,
                    ...(null != a ? { quest_id: a, quest_status: null != s ? (0, p.NI)(s) : null } : {}),
                };
            })({ adContentId: t, adCreativeType: i, sourceQuestContent: o, shouldExtendSession: l, relatedQuestId: n }),
            ...a,
        };
    C(r, d, s, !1);
}
async function D(e) {
    let {
            questContent: t,
            questContentPosition: n,
            questContentRowIndex: r,
            questContentCTA: s,
            impressionId: l,
            clickId: o,
        } = e,
        c = await (0, a.N)((0, p.jO)(t));
    return {
        ...(0, p.fF)(t, n, r),
        ...(0, d.A)(),
        cta_name: s,
        impression_id: l,
        apple_advertising_id: null != c && (0, E.isIOS)() ? c.advertisingId : null,
        android_advertising_id: null != c && (0, E.isAndroid)() ? c.advertisingId : null,
        click_id: o ?? (0, i.A)(),
    };
}
async function v(e) {
    let {
            questId: t,
            questContent: n,
            questContentCTA: i,
            questContentPosition: r,
            questContentRowIndex: a,
            impressionId: s,
            clickId: l,
            trackGuildAndChannelMetadata: o,
            sourceQuestContent: d,
        } = e,
        c = (0, h.Gp)(d, t);
    O({
        questId: t,
        event: m.HAw.QUEST_CONTENT_CLICKED,
        properties: {
            ...(await D({
                questContent: n,
                questContentPosition: r,
                questContentRowIndex: a,
                questContentCTA: i,
                impressionId: s,
                clickId: l,
            })),
            metadata_sealed: (0, h.L4)(d) ?? null,
            traffic_metadata_sealed: c ?? null,
            search_session_id: (0, T.tv)()?.uuid ?? null,
        },
        trackGuildAndChannelMetadata: o,
        shouldExtendSession: (0, h.xn)(n),
        sourceQuestContent: d,
    });
}
async function b(e) {
    let {
        adContentId: t,
        relatedQuestId: n,
        adCreativeType: i,
        questContent: r,
        questContentCTA: a,
        questContentPosition: s,
        questContentRowIndex: l,
        impressionId: o,
        trackGuildAndChannelMetadata: d,
        sourceQuestContent: c,
    } = e;
    y({
        adContentId: t,
        relatedQuestId: n,
        adCreativeType: i,
        event: m.HAw.QUEST_CONTENT_CLICKED,
        properties: await D({
            questContent: r,
            questContentPosition: s,
            questContentRowIndex: l,
            questContentCTA: a,
            impressionId: o,
        }),
        trackGuildAndChannelMetadata: d,
        shouldExtendSession: (0, h.xn)(r),
        sourceQuestContent: c,
    });
}
function M(e) {
    let {
            scrollingType: t,
            scrollingDirection: n,
            scrollWindowStartIndex: i,
            scrollWindowEndIndex: r,
            scrollWindowSize: a,
            questContent: l,
            carouselSize: o,
        } = e,
        d = (0, s.sN)().uuid;
    _.default.track(m.HAw.QUEST_HOME_CAROUSEL_SCROLL, {
        scrolling_type: t,
        client_ad_session_id: d,
        billing_session_id: S(d, (0, h.xn)(l)),
        scrolling_direction: n,
        scroll_window_start_index: i,
        scroll_window_end_index: r,
        scroll_window_size: a,
        content_name: (0, p.jO)(l),
        content_id: l,
        carousel_size: o,
    });
}
function P(e) {
    let { searchSessionId: t } = e,
        n = (0, s.sN)().uuid;
    _.default.track(m.HAw.QUEST_HOME_SEARCH_ENTERED, {
        client_ad_session_id: n,
        billing_session_id: S(n, !1),
        search_session_id: t,
    });
}
function U(e) {
    let { searchSessionId: t, searchSessionDurationMs: n } = e,
        i = (0, s.sN)().uuid;
    _.default.track(m.HAw.QUEST_HOME_SEARCH_CLOSED, {
        client_ad_session_id: i,
        billing_session_id: S(i, !1),
        search_session_id: t,
        search_session_duration_ms: n,
    });
}
function w(e) {
    let { searchSessionId: t, searchQuery: n, searchQueryLength: i, resultsCount: r, hasResults: a } = e,
        l = (0, s.sN)().uuid;
    _.default.track(m.HAw.QUEST_HOME_SEARCH_QUERY_SUBMITTED, {
        client_ad_session_id: l,
        billing_session_id: S(l, !1),
        search_session_id: t,
        search_query: n,
        search_query_length: i,
        results_count: r,
        has_results: a,
    });
}
function G(e) {
    let { questContent: t, sourceQuestContent: n, questId: i, mode: r, prevMode: a } = e,
        s = (0, p.fF)(t);
    O({
        questId: i,
        event: m.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: s.content_id, content_name: s.content_name, mode: r, previous_mode: a },
        sourceQuestContent: n,
    });
}
function x(e) {
    let { adContentId: t, adCreativeType: n, questContent: i, sourceQuestContent: r, mode: a, prevMode: s } = e,
        l = (0, p.fF)(i);
    y({
        adContentId: t,
        adCreativeType: n,
        event: m.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: l.content_id, content_name: l.content_name, mode: a, previous_mode: s },
        sourceQuestContent: r,
    });
}
function k(e, t) {
    o.Ay.trackWithMetadata(m.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
}
