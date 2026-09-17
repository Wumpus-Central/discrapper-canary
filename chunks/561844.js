n.d(t, {
    DZ: () => Y,
    LW: () => G,
    OQ: () => B,
    Qg: () => w,
    Wc: () => W,
    XH: () => V,
    Y5: () => x,
    YE: () => U,
    Zu: () => j,
    av: () => D,
    eA: () => v,
    gr: () => H,
    hR: () => M,
    jk: () => P,
    kO: () => F,
    vK: () => k,
});
var i = n(132500),
    r = n(323889),
    a = n(274670),
    s = n(144779),
    l = n(345353),
    o = n(881615),
    d = n(390595),
    c = n(95561),
    u = n(69114),
    _ = n(265059),
    E = n(111162),
    A = n(174459),
    h = n(723702),
    I = n(859703),
    f = n(738822),
    p = n(104886),
    T = n(710969),
    g = n(792620),
    m = n(814793),
    S = n(590202),
    N = n(823784),
    C = n(652215);
let O = new Set([C.HAw.QUEST_CONTENT_VIEWED, C.HAw.QUEST_CONTENT_CLICKED]);
function R(e, t) {
    return t ? e : ((0, d.Vc)()?.uuid ?? null);
}
function L(e, t, n, i) {
    let r = (0, o.sN)(i).uuid,
        a = (0, T.Kc)(e, t);
    return {
        client_ad_session_id: r,
        billing_session_id: R(r, (0, T.xn)(t, n)),
        ad_content_id: e,
        ...a,
        creative_type: a.creative_type ?? n,
    };
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (
        (_.A.displayTools && "quest_preview" === _.A.lastOpenTabId) ||
        (E.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), i)
    )
        return;
    let r = O.has(e);
    if (n) return c.Ay.trackWithMetadata(e, t, r);
    A.default.track(e, t, { flush: r });
}
function D(e) {
    let {
            questId: t,
            event: n,
            properties: i,
            trackGuildAndChannelMetadata: a,
            shouldExtendSession: s = !1,
            sourceQuestContent: l,
        } = e,
        o = I.A.quests.get(t);
    null != o &&
        y(
            n,
            {
                ...{
                    quest_id: o.id,
                    quest_type: (0, m.pv)(o.config),
                    application_ids: (0, g._3)(o) ?? [],
                    quest_status: (0, S.NI)(o),
                    ...L(o.id, l, r.p.QUEST, s),
                },
                ...i,
            },
            a,
            o.preview,
        );
}
function v(e) {
    let {
            quest: t,
            trackingCtx: n,
            inlineStoreAppId: i,
            overlayVariant: r,
            event: a,
            timeSpentMs: s,
            overlaySurface: l,
        } = e,
        o = {
            content_name: (0, S.jO)(n.content),
            cta_name: n.ctaContent,
            impression_id: n.impressionId,
            source_content_name: (0, S.jO)(n.sourceQuestContent),
            app_id: i,
            content_position: n.position,
            overlay_variant: r,
        };
    switch (a) {
        case C.HAw.QUEST_APP_STORE_OVERLAY_CLOSED:
            D({
                questId: t.id,
                event: a,
                properties: { ...o, time_spent_ms: s ?? null },
                sourceQuestContent: n.sourceQuestContent,
            });
            break;
        case C.HAw.QUEST_APP_STORE_OVERLAY_RETURNED:
            D({
                questId: t.id,
                event: a,
                properties: { ...o, time_spent_ms: s ?? null, overlay_surface: l ?? null },
                sourceQuestContent: n.sourceQuestContent,
            });
            break;
        case C.HAw.QUEST_APP_STORE_OVERLAY_BACKGROUNDED:
            D({
                questId: t.id,
                event: a,
                properties: { ...o, overlay_surface: l ?? null },
                sourceQuestContent: n.sourceQuestContent,
            });
            break;
        case C.HAw.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED:
        case C.HAw.QUEST_APP_STORE_OVERLAY_OPEN_FAILED:
            D({ questId: t.id, event: a, properties: o, sourceQuestContent: n.sourceQuestContent });
    }
}
function b(e) {
    switch (e) {
        case "main_cta":
            return S.Cy.GAME_STORE_OPEN_GAME_LINK;
        case "rating_stat":
            return S.Cy.GAME_STORE_OPEN_REVIEWS;
    }
}
function M(e) {
    let { questId: t, trackingCtx: n, overlaySurface: i } = e,
        l = b(i);
    (0, p.E5)(p.kI.STEP_3_CLICKED_EXTERNAL, "app_store_overlay_surface_click")
        ? (0, a.r)({
              type: s.F.CLICK_EXTERNAL_ADVERTISER_CTA,
              adCreativeType: r.p.QUEST,
              adCreativeId: t,
              questContentCTA: l,
              surfaceId: f.uF.CUSTOM_APP_STORE_OVERLAY,
              sourceQuestContent: n.sourceQuestContent,
              questContentPosition: n.position,
              impressionId: n.impressionId,
          })
        : x({
              questId: t,
              questContent: f.uF.CUSTOM_APP_STORE_OVERLAY,
              questContentCTA: l,
              questContentPosition: n.position,
              impressionId: n.impressionId,
              sourceQuestContent: n.sourceQuestContent,
          });
}
function P(e) {
    let { adContentId: t, adCreativeType: n, trackingCtx: i, overlaySurface: r, relatedQuestId: l } = e,
        o = b(r);
    (0, p.E5)(p.kI.STEP_3_CLICKED_EXTERNAL, "app_store_overlay_surface_click")
        ? (0, a.r)({
              type: s.F.CLICK_EXTERNAL_ADVERTISER_CTA,
              adCreativeType: n,
              adCreativeId: t,
              questContentCTA: o,
              surfaceId: f.uF.CUSTOM_APP_STORE_OVERLAY,
              sourceQuestContent: i.sourceQuestContent,
              questContentPosition: i.position,
              impressionId: i.impressionId,
          })
        : k({
              adContentId: t,
              relatedQuestId: l,
              adCreativeType: n,
              questContent: f.uF.CUSTOM_APP_STORE_OVERLAY,
              questContentCTA: o,
              questContentPosition: i.position,
              impressionId: i.impressionId,
              sourceQuestContent: i.sourceQuestContent,
          });
}
function U(e) {
    let {
            adContentId: t,
            adCreativeType: n,
            trackingCtx: i,
            inlineStoreAppId: r,
            overlayVariant: a,
            event: s,
            timeSpentMs: l,
            overlaySurface: o,
        } = e,
        d = {
            content_name: (0, S.jO)(i.content),
            cta_name: i.ctaContent,
            impression_id: i.impressionId,
            source_content_name: (0, S.jO)(i.sourceQuestContent),
            app_id: r,
            content_position: i.position,
            overlay_variant: a,
        };
    switch (s) {
        case C.HAw.QUEST_APP_STORE_OVERLAY_CLOSED:
            w({
                adContentId: t,
                adCreativeType: n,
                event: s,
                properties: { ...d, time_spent_ms: l ?? null },
                sourceQuestContent: i.sourceQuestContent,
            });
            break;
        case C.HAw.QUEST_APP_STORE_OVERLAY_RETURNED:
            w({
                adContentId: t,
                adCreativeType: n,
                event: s,
                properties: { ...d, time_spent_ms: l ?? null, overlay_surface: o ?? null },
                sourceQuestContent: i.sourceQuestContent,
            });
            break;
        case C.HAw.QUEST_APP_STORE_OVERLAY_BACKGROUNDED:
            w({
                adContentId: t,
                adCreativeType: n,
                event: s,
                properties: { ...d, overlay_surface: o ?? null },
                sourceQuestContent: i.sourceQuestContent,
            });
            break;
        case C.HAw.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED:
        case C.HAw.QUEST_APP_STORE_OVERLAY_OPEN_FAILED:
            w({ adContentId: t, adCreativeType: n, event: s, properties: d, sourceQuestContent: i.sourceQuestContent });
    }
}
function w(e) {
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
                    s = null != a ? I.A.getQuest(a) : null;
                return {
                    ...L(t, i, n, r),
                    metadata_sealed: (0, T.L4)(i, t) ?? null,
                    traffic_metadata_sealed: (0, T.Gp)(i, void 0, t) ?? null,
                    ...(null != a ? { quest_id: a, quest_status: null != s ? (0, S.NI)(s) : null } : {}),
                };
            })({ adContentId: t, adCreativeType: i, sourceQuestContent: o, shouldExtendSession: l, relatedQuestId: n }),
            ...a,
        };
    y(r, d, s, !1);
}
async function G(e) {
    let {
            questContent: t,
            questContentPosition: n,
            questContentRowIndex: r,
            questContentCTA: a,
            impressionId: s,
            clickId: o,
        } = e,
        d = await (0, l.N)((0, S.jO)(t));
    return {
        ...(0, S.fF)(t, n, r),
        ...(0, u.A)(),
        cta_name: a,
        impression_id: s,
        apple_advertising_id: null != d && (0, h.isIOS)() ? d.advertisingId : null,
        android_advertising_id: null != d && (0, h.isAndroid)() ? d.advertisingId : null,
        click_id: o ?? (0, i.A)(),
    };
}
async function x(e) {
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
        c = (0, T.Gp)(d, t);
    D({
        questId: t,
        event: C.HAw.QUEST_CONTENT_CLICKED,
        properties: {
            ...(await G({
                questContent: n,
                questContentPosition: r,
                questContentRowIndex: a,
                questContentCTA: i,
                impressionId: s,
                clickId: l,
            })),
            metadata_sealed: (0, T.L4)(d) ?? null,
            traffic_metadata_sealed: c ?? null,
            search_session_id: (0, N.tv)()?.uuid ?? null,
        },
        trackGuildAndChannelMetadata: o,
        shouldExtendSession: (0, T.xn)(n),
        sourceQuestContent: d,
    });
}
async function k(e) {
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
    w({
        adContentId: t,
        relatedQuestId: n,
        adCreativeType: i,
        event: C.HAw.QUEST_CONTENT_CLICKED,
        properties: await G({
            questContent: r,
            questContentPosition: s,
            questContentRowIndex: l,
            questContentCTA: a,
            impressionId: o,
        }),
        trackGuildAndChannelMetadata: d,
        shouldExtendSession: (0, T.xn)(r),
        sourceQuestContent: c,
    });
}
function F(e) {
    let {
            scrollingType: t,
            scrollingDirection: n,
            scrollWindowStartIndex: i,
            scrollWindowEndIndex: r,
            scrollWindowSize: a,
            questContent: s,
            carouselSize: l,
        } = e,
        d = (0, o.sN)().uuid;
    A.default.track(C.HAw.QUEST_HOME_CAROUSEL_SCROLL, {
        scrolling_type: t,
        client_ad_session_id: d,
        billing_session_id: R(d, (0, T.xn)(s)),
        scrolling_direction: n,
        scroll_window_start_index: i,
        scroll_window_end_index: r,
        scroll_window_size: a,
        content_name: (0, S.jO)(s),
        content_id: s,
        carousel_size: l,
    });
}
function B(e) {
    let { searchSessionId: t } = e,
        n = (0, o.sN)().uuid;
    A.default.track(C.HAw.QUEST_HOME_SEARCH_ENTERED, {
        client_ad_session_id: n,
        billing_session_id: R(n, !1),
        search_session_id: t,
    });
}
function V(e) {
    let { searchSessionId: t, searchSessionDurationMs: n } = e,
        i = (0, o.sN)().uuid;
    A.default.track(C.HAw.QUEST_HOME_SEARCH_CLOSED, {
        client_ad_session_id: i,
        billing_session_id: R(i, !1),
        search_session_id: t,
        search_session_duration_ms: n,
    });
}
function H(e) {
    let { searchSessionId: t, searchQuery: n, searchQueryLength: i, resultsCount: r, hasResults: a } = e,
        s = (0, o.sN)().uuid;
    A.default.track(C.HAw.QUEST_HOME_SEARCH_QUERY_SUBMITTED, {
        client_ad_session_id: s,
        billing_session_id: R(s, !1),
        search_session_id: t,
        search_query: n,
        search_query_length: i,
        results_count: r,
        has_results: a,
    });
}
function j(e) {
    let { questContent: t, sourceQuestContent: n, questId: i, mode: r, prevMode: a } = e,
        s = (0, S.fF)(t);
    D({
        questId: i,
        event: C.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: s.content_id, content_name: s.content_name, mode: r, previous_mode: a },
        sourceQuestContent: n,
    });
}
function W(e) {
    let { adContentId: t, adCreativeType: n, questContent: i, sourceQuestContent: r, mode: a, prevMode: s } = e,
        l = (0, S.fF)(i);
    w({
        adContentId: t,
        adCreativeType: n,
        event: C.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: l.content_id, content_name: l.content_name, mode: a, previous_mode: s },
        sourceQuestContent: r,
    });
}
function Y(e, t) {
    c.Ay.trackWithMetadata(C.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
}
