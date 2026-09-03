n.d(t, { r: () => C });
var i = n(132500),
    r = n(323889),
    a = n(69114),
    s = n(859703),
    l = n(561844),
    o = n(590202),
    d = n(910463),
    c = n(823784),
    u = n(851936),
    _ = n(710969),
    E = n(174459),
    A = n(723702),
    h = n(345353),
    I = n(144779),
    f = n(652215);
async function p(e) {
    let {
            adCreativeType: t,
            questContentCTA: n,
            surfaceId: i,
            sourceQuestContent: a,
            impressionId: s,
            clickId: o,
            questContentPosition: d,
            questContentRowIndex: u,
            trackGuildAndChannelMetadata: E,
        } = e,
        A = await (0, l.LW)({
            questContent: i,
            questContentPosition: d,
            questContentRowIndex: u,
            questContentCTA: n,
            impressionId: s,
            clickId: o,
        });
    if (t === r.p.QUEST) {
        let t = e.adCreativeId;
        (0, l.av)({
            questId: t,
            event: f.HAw.QUEST_CONTENT_CLICKED,
            properties: {
                ...A,
                metadata_sealed: (0, _.L4)(a, t) ?? null,
                traffic_metadata_sealed: (0, _.Gp)(a, t) ?? null,
                search_session_id: (0, c.tv)()?.uuid ?? null,
            },
            trackGuildAndChannelMetadata: E,
            shouldExtendSession: (0, _.xn)(i),
            sourceQuestContent: a,
        });
        return;
    }
    (0, l.Qg)({
        adContentId: e.adCreativeId,
        relatedQuestId: e.relatedQuestId,
        adCreativeType: t,
        event: f.HAw.QUEST_CONTENT_CLICKED,
        properties: { ...A, search_session_id: (0, c.tv)()?.uuid ?? null },
        trackGuildAndChannelMetadata: E,
        shouldExtendSession: (0, _.xn)(i),
        sourceQuestContent: a,
    });
}
async function T(e) {
    if (null == e.adCreativeType) {
        let { surfaceId: t, questContentCTA: n, clickId: r, questContentPosition: a, questContentRowIndex: s } = e,
            l = (0, o.fF)(t, a, s);
        E.default.track(f.HAw.QUEST_CONTENT_CLICKED, {
            cta_name: n,
            click_id: r ?? (0, i.A)(),
            is_targeted: e.isTargeted ?? !1,
            content_id: l.content_id,
            content_name: l.content_name,
            content_position: l.content_position,
            row_index: l.row_index,
            ad_content_id: e.adContentId,
            quest_id: e.relatedQuestId,
        });
        return;
    }
    await p(e);
}
async function m(e) {
    await p(e);
}
function g(e) {
    let {
            surfaceId: t,
            sourceQuestContent: n,
            impressionId: i,
            triggeredByStatusChange: s,
            minViewTimeSeconds: u,
            minViewportPercentage: E,
            isQuestEnrollmentBlocked: h,
            shouldExtendSession: I,
            adUser: p,
            questContentPosition: T,
            questContentRowIndex: m,
            trackGuildAndChannelMetadata: g,
        } = e,
        S = {
            min_view_time_seconds: u,
            min_viewport_percentage: E,
            triggered_by_status_change: s,
            apple_advertising_id: null != p && (0, A.isIOS)() ? p.advertisingId : null,
            android_advertising_id: null != p && (0, A.isAndroid)() ? p.advertisingId : null,
            ...(0, a.A)(),
            ...(0, d.X)(t),
            impression_id: i,
            is_quest_enrollment_blocked: h,
            ...(0, o.fF)(t, T, m),
        };
    if (e.adCreativeType === r.p.QUEST) {
        let t = e.adCreativeId;
        (0, l.av)({
            event: f.HAw.QUEST_CONTENT_VIEWED,
            questId: t,
            trackGuildAndChannelMetadata: g,
            shouldExtendSession: I,
            sourceQuestContent: n,
            properties: {
                ...S,
                metadata_sealed: (0, _.L4)(n, t) ?? null,
                search_session_id: (0, c.tv)()?.uuid ?? null,
                traffic_metadata_sealed: (0, _.Gp)(n, t) ?? null,
            },
        });
        return;
    }
    (0, l.Qg)({
        event: f.HAw.QUEST_CONTENT_VIEWED,
        adContentId: e.adCreativeId,
        relatedQuestId: e.relatedQuestId,
        adCreativeType: e.adCreativeType,
        trackGuildAndChannelMetadata: g,
        shouldExtendSession: I,
        sourceQuestContent: n,
        properties: { ...S },
    });
}
async function S(e) {
    if (null == e.adCreativeType) {
        let t = await (0, h.N)((0, o.jO)(e.surfaceId));
        E.default.track(f.HAw.QUEST_CONTENT_VIEWED, {
            ...(0, o.fF)(e.surfaceId),
            apple_advertising_id: null != t && (0, A.isIOS)() ? t.advertisingId : null,
            android_advertising_id: null != t && (0, A.isAndroid)() ? t.advertisingId : null,
            is_targeted: e.isTargeted ?? !1,
        });
        return;
    }
    g(e);
}
function N(e) {
    (0, u.L)().error("captureAdUserAction failed to report an ad user action", e);
}
function C(e) {
    try {
        switch (e.type) {
            case I.F.END_CONTENT_LOAD:
                let t = null != s.A.questEnrollmentBlockedUntil;
                if (e.adCreativeType === r.p.QUEST) {
                    let n = e.adCreativeId;
                    (0, l.av)({
                        event: f.HAw.QUEST_CONTENT_LOADED,
                        questId: n,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        sourceQuestContent: e.sourceQuestContent,
                        properties: {
                            triggered_by_status_change: e.triggeredByStatusChange,
                            metadata_sealed: (0, _.L4)(e.sourceQuestContent, n) ?? null,
                            traffic_metadata_sealed: (0, _.Gp)(e.sourceQuestContent, n) ?? null,
                            impression_id: e.impressionId,
                            is_quest_enrollment_blocked: t,
                            content_id: e.surfaceId,
                            content_name: (0, o.jO)(e.surfaceId),
                            content_position: e.questContentPosition,
                            row_index: e.questContentRowIndex,
                        },
                    });
                } else
                    (0, l.Qg)({
                        event: f.HAw.QUEST_CONTENT_LOADED,
                        adContentId: e.adCreativeId,
                        relatedQuestId: e.relatedQuestId,
                        adCreativeType: e.adCreativeType,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        sourceQuestContent: e.sourceQuestContent,
                        properties: {
                            triggered_by_status_change: e.triggeredByStatusChange,
                            impression_id: e.impressionId,
                            is_quest_enrollment_blocked: t,
                            content_id: e.surfaceId,
                            content_name: (0, o.jO)(e.surfaceId),
                            content_position: e.questContentPosition,
                            row_index: e.questContentRowIndex,
                        },
                    });
                break;
            case I.F.CLICK_INTERNAL:
                T(e).catch(N);
                break;
            case I.F.CLICK_EXTERNAL_ADVERTISER_CTA:
                m(e).catch(N);
                break;
            case I.F.VIEW_INTERNAL_SURFACE_IMPRESSION:
                S(e).catch(N);
                break;
            case I.F.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION:
                g(e);
        }
    } catch (e) {
        N(e);
    }
}
