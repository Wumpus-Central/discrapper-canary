var i = n(115560),
    r = n(323889),
    a = n(345353),
    s = n(881615),
    l = n(903063),
    o = n(149468),
    d = n(69114),
    c = n(265059),
    u = n(111162),
    _ = n(129230),
    E = n(723702),
    A = n(122760);
n(506988);
var f = n(710969),
    h = n(792620),
    I = n(814793),
    p = n(590202),
    m = n(823784),
    T = n(652215);
let g = new Set([T.HAw.QUEST_CONTENT_VIEWED, T.HAw.QUEST_CONTENT_ENGAGED_VIEWED, T.HAw.QUEST_CONTENT_CLICKED]);
function S(e, t) {
    return t ? e : ((0, l.Vc)()?.uuid ?? null);
}
function N(e, t, n) {
    let i = (0, s.sN)(n).uuid;
    return { client_ad_session_id: i, billing_session_id: S(i, (0, f.xn)(e, t)) };
}
function C(e, t, n, i) {
    let r = N(t, n, i),
        a = (0, f.Kc)(e, t);
    return { ...r, ad_content_id: e, ...a, creative_type: a.creative_type ?? n };
}
function O(e, t) {
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
function R(e) {
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
        O(
            n,
            {
                ...{
                    quest_id: o.id,
                    quest_type: (0, I.pv)(o.config),
                    application_ids: (0, h._3)(o) ?? [],
                    quest_status: (0, p.NI)(o),
                    ...C(o.id, l, r.p.QUEST, s),
                },
                ...i,
            },
            a,
            o.preview,
        );
}
function L(e) {
    let {
        adContentId: t,
        relatedQuestId: n,
        noFillDecision: i,
        adCreativeType: r,
        event: a,
        properties: s,
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: o = !1,
        sourceQuestContent: d,
    } = e;
    O(
        a,
        {
            ...(function (e) {
                let {
                        adContentId: t,
                        adCreativeType: n,
                        sourceQuestContent: i,
                        shouldExtendSession: r,
                        relatedQuestId: a,
                        noFillDecision: s,
                    } = e,
                    l = null != a ? A.A.getQuest(a) : null;
                return {
                    ...C(t, i, n, r),
                    metadata_sealed: (0, f.L4)(i, t) ?? null,
                    traffic_metadata_sealed: (0, f.Gp)(i, void 0, t) ?? null,
                    ...(null != s
                        ? {
                              decision_id: s.decisionId,
                              is_targeted: !1,
                              metadata_sealed: s.metadataSealed ?? null,
                              traffic_metadata_sealed: s.trafficMetadataSealed ?? null,
                          }
                        : {}),
                    ...(null != a ? { quest_id: a, quest_status: null != l ? (0, p.NI)(l) : null } : {}),
                };
            })({
                adContentId: t,
                adCreativeType: r,
                sourceQuestContent: d,
                shouldExtendSession: o,
                relatedQuestId: n,
                noFillDecision: i,
            }),
            ...s,
        },
        l,
        !1,
    );
}
async function y(e) {
    let {
            questContent: t,
            questContentPosition: n,
            questContentRowIndex: r,
            questContentCTA: s,
            impressionId: l,
            clickId: o,
        } = e,
        c = Date.now(),
        u = await (0, a.N)((0, p.jO)(t));
    return {
        client_track_timestamp: c,
        ...(0, p.fF)(t, n, r),
        ...(0, d.A)(),
        cta_name: s,
        impression_id: l,
        apple_advertising_id: null != u && (0, E.un)() ? u.advertisingId : null,
        android_advertising_id: null != u && (0, E.m0)() ? u.advertisingId : null,
        click_id: o ?? (0, i.A)(),
    };
}
n.d(
    t,
    {},
    {
        DX: function (e) {
            let { questId: t, questContent: n, sourceQuestContent: i, reason: r, impressionId: a } = e,
                s = (0, p.fF)(n);
            R({
                questId: t,
                event: T.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                properties: { content_id: s.content_id, content_name: s.content_name, reason: r, impression_id: a },
                sourceQuestContent: i,
            });
        },
        DZ: function (e, t) {
            o.Ay.trackWithMetadata(T.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
        },
        Dq: { MAIN_CTA: "main_cta", RATING_STAT: "rating_stat", SEE_MORE: "see_more" },
        LW: y,
        OQ: function (e) {
            let { searchSessionId: t } = e,
                n = (0, s.sN)().uuid;
            _.default.track(T.HAw.QUEST_HOME_SEARCH_ENTERED, {
                client_ad_session_id: n,
                billing_session_id: S(n, !1),
                search_session_id: t,
            });
        },
        Qg: L,
        Wc: function (e) {
            let { adContentId: t, adCreativeType: n, questContent: i, sourceQuestContent: r, mode: a, prevMode: s } = e,
                l = (0, p.fF)(i);
            L({
                adContentId: t,
                adCreativeType: n,
                event: T.HAw.QUEST_BAR_MODE_CHANGED,
                properties: { content_id: l.content_id, content_name: l.content_name, mode: a, previous_mode: s },
                sourceQuestContent: r,
            });
        },
        XH: function (e) {
            let { searchSessionId: t, searchSessionDurationMs: n } = e,
                i = (0, s.sN)().uuid;
            _.default.track(T.HAw.QUEST_HOME_SEARCH_CLOSED, {
                client_ad_session_id: i,
                billing_session_id: S(i, !1),
                search_session_id: t,
                search_session_duration_ms: n,
            });
        },
        Y5: async function (e) {
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
                c = (0, f.Gp)(d, t);
            R({
                questId: t,
                event: T.HAw.QUEST_CONTENT_CLICKED,
                properties: {
                    ...(await y({
                        questContent: n,
                        questContentPosition: r,
                        questContentRowIndex: a,
                        questContentCTA: i,
                        impressionId: s,
                        clickId: l,
                    })),
                    metadata_sealed: (0, f.L4)(d) ?? null,
                    traffic_metadata_sealed: c ?? null,
                    search_session_id: (0, m.tv)()?.uuid ?? null,
                },
                trackGuildAndChannelMetadata: o,
                shouldExtendSession: (0, f.xn)(n),
                sourceQuestContent: d,
            });
        },
        YE: function (e) {
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
                    content_name: (0, p.jO)(i.content),
                    cta_name: i.ctaContent,
                    impression_id: i.impressionId,
                    source_content_name: (0, p.jO)(i.sourceQuestContent),
                    app_id: r,
                    content_position: i.position,
                    overlay_variant: a,
                };
            switch (s) {
                case T.HAw.QUEST_APP_STORE_OVERLAY_CLOSED:
                    L({
                        adContentId: t,
                        adCreativeType: n,
                        event: s,
                        properties: { ...d, time_spent_ms: l ?? null },
                        sourceQuestContent: i.sourceQuestContent,
                    });
                    break;
                case T.HAw.QUEST_APP_STORE_OVERLAY_RETURNED:
                    L({
                        adContentId: t,
                        adCreativeType: n,
                        event: s,
                        properties: { ...d, time_spent_ms: l ?? null, overlay_surface: o ?? null },
                        sourceQuestContent: i.sourceQuestContent,
                    });
                    break;
                case T.HAw.QUEST_APP_STORE_OVERLAY_BACKGROUNDED:
                    L({
                        adContentId: t,
                        adCreativeType: n,
                        event: s,
                        properties: { ...d, overlay_surface: o ?? null },
                        sourceQuestContent: i.sourceQuestContent,
                    });
                    break;
                case T.HAw.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED:
                case T.HAw.QUEST_APP_STORE_OVERLAY_OPEN_FAILED:
                    L({
                        adContentId: t,
                        adCreativeType: n,
                        event: s,
                        properties: d,
                        sourceQuestContent: i.sourceQuestContent,
                    });
            }
        },
        Zu: function (e) {
            let { questContent: t, sourceQuestContent: n, questId: i, mode: r, prevMode: a } = e,
                s = (0, p.fF)(t);
            R({
                questId: i,
                event: T.HAw.QUEST_BAR_MODE_CHANGED,
                properties: { content_id: s.content_id, content_name: s.content_name, mode: r, previous_mode: a },
                sourceQuestContent: n,
            });
        },
        av: R,
        dz: N,
        eA: function (e) {
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
                    content_name: (0, p.jO)(n.content),
                    cta_name: n.ctaContent,
                    impression_id: n.impressionId,
                    source_content_name: (0, p.jO)(n.sourceQuestContent),
                    app_id: i,
                    content_position: n.position,
                    overlay_variant: r,
                };
            switch (a) {
                case T.HAw.QUEST_APP_STORE_OVERLAY_CLOSED:
                    R({
                        questId: t.id,
                        event: a,
                        properties: { ...o, time_spent_ms: s ?? null },
                        sourceQuestContent: n.sourceQuestContent,
                    });
                    break;
                case T.HAw.QUEST_APP_STORE_OVERLAY_RETURNED:
                    R({
                        questId: t.id,
                        event: a,
                        properties: { ...o, time_spent_ms: s ?? null, overlay_surface: l ?? null },
                        sourceQuestContent: n.sourceQuestContent,
                    });
                    break;
                case T.HAw.QUEST_APP_STORE_OVERLAY_BACKGROUNDED:
                    R({
                        questId: t.id,
                        event: a,
                        properties: { ...o, overlay_surface: l ?? null },
                        sourceQuestContent: n.sourceQuestContent,
                    });
                    break;
                case T.HAw.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED:
                case T.HAw.QUEST_APP_STORE_OVERLAY_OPEN_FAILED:
                    R({ questId: t.id, event: a, properties: o, sourceQuestContent: n.sourceQuestContent });
            }
        },
        gr: function (e) {
            let { searchSessionId: t, searchQuery: n, searchQueryLength: i, resultsCount: r, hasResults: a } = e,
                l = (0, s.sN)().uuid;
            _.default.track(T.HAw.QUEST_HOME_SEARCH_QUERY_SUBMITTED, {
                client_ad_session_id: l,
                billing_session_id: S(l, !1),
                search_session_id: t,
                search_query: n,
                search_query_length: i,
                results_count: r,
                has_results: a,
            });
        },
        iE: function (e) {
            let {
                    adContentId: t,
                    adCreativeType: n,
                    questContent: i,
                    sourceQuestContent: r,
                    reason: a,
                    impressionId: s,
                } = e,
                l = (0, p.fF)(i);
            L({
                adContentId: t,
                adCreativeType: n,
                event: T.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                properties: { content_id: l.content_id, content_name: l.content_name, reason: a, impression_id: s },
                sourceQuestContent: r,
            });
        },
        kO: function (e) {
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
            _.default.track(T.HAw.QUEST_HOME_CAROUSEL_SCROLL, {
                scrolling_type: t,
                client_ad_session_id: d,
                billing_session_id: S(d, (0, f.xn)(l)),
                scrolling_direction: n,
                scroll_window_start_index: i,
                scroll_window_end_index: r,
                scroll_window_size: a,
                content_name: (0, p.jO)(l),
                content_id: l,
                carousel_size: o,
            });
        },
    },
);
