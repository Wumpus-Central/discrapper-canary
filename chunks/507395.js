n.d(t, { r: () => b });
var i = n(132500),
    r = n(323889),
    a = n(69114),
    s = n(859703),
    l = n(561844),
    o = n(590202),
    d = n(47167),
    c = n(633965),
    u = n(734057),
    _ = n(71393),
    E = n(994500),
    A = n(967198),
    h = n(287809),
    f = n(486020),
    I = n(710969);
n(23766);
var p = n(823784),
    T = n(851936),
    m = n(174459),
    g = n(723702),
    S = n(345353),
    N = n(144779),
    C = n(652215);
async function O(e) {
    let {
            adCreativeType: t,
            questContentCTA: n,
            surfaceId: i,
            sourceQuestContent: a,
            impressionId: s,
            clickId: o,
            questContentPosition: d,
            questContentRowIndex: c,
            trackGuildAndChannelMetadata: u,
        } = e,
        _ = await (0, l.LW)({
            questContent: i,
            questContentPosition: d,
            questContentRowIndex: c,
            questContentCTA: n,
            impressionId: s,
            clickId: o,
        });
    if (t === r.p.QUEST) {
        let t = e.adCreativeId;
        (0, l.av)({
            questId: t,
            event: C.HAw.QUEST_CONTENT_CLICKED,
            properties: {
                ..._,
                metadata_sealed: (0, I.L4)(a, t) ?? null,
                traffic_metadata_sealed: (0, I.Gp)(a, t) ?? null,
                search_session_id: (0, p.tv)()?.uuid ?? null,
            },
            trackGuildAndChannelMetadata: u,
            shouldExtendSession: (0, I.xn)(i),
            sourceQuestContent: a,
        });
        return;
    }
    (0, l.Qg)({
        adContentId: e.adCreativeId,
        relatedQuestId: e.relatedQuestId,
        adCreativeType: t,
        event: C.HAw.QUEST_CONTENT_CLICKED,
        properties: { ..._, search_session_id: (0, p.tv)()?.uuid ?? null },
        trackGuildAndChannelMetadata: u,
        shouldExtendSession: (0, I.xn)(i),
        sourceQuestContent: a,
    });
}
async function R(e) {
    if (null == e.adCreativeType) {
        let { surfaceId: t, questContentCTA: n, clickId: r, questContentPosition: a, questContentRowIndex: s } = e,
            l = (0, o.fF)(t, a, s);
        m.default.track(C.HAw.QUEST_CONTENT_CLICKED, {
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
    await O(e);
}
async function L(e) {
    await O(e);
}
function y(e) {
    let {
            surfaceId: t,
            sourceQuestContent: n,
            impressionId: i,
            triggeredByStatusChange: s,
            minViewTimeSeconds: T,
            minViewportPercentage: m,
            isQuestEnrollmentBlocked: S,
            shouldExtendSession: N,
            adUser: O,
            questContentPosition: R,
            questContentRowIndex: L,
            trackGuildAndChannelMetadata: y,
        } = e,
        D = {
            min_view_time_seconds: T,
            min_viewport_percentage: m,
            triggered_by_status_change: s,
            apple_advertising_id: null != O && (0, g.isIOS)() ? O.advertisingId : null,
            android_advertising_id: null != O && (0, g.isAndroid)() ? O.advertisingId : null,
            ...(0, a.A)(),
            ...(function (e) {
                let t = (0, I.xn)(e),
                    n = (0, I.vZ)(e),
                    i = (0, c.pc)(),
                    r = (0, c.Ld)();
                if (!n?.is_campaign_ias_enabled || !t || void 0 === i || void 0 === r) return null;
                let a = A.A.getGuildId(),
                    s = null != a ? _.A.getGuild(a) : null,
                    l = {
                        guilds: (function () {
                            if (void 0 === i) return [];
                            let e = i(),
                                t = _.A.getGuilds();
                            return e
                                .map((e) => {
                                    let n = t[e];
                                    if (void 0 === n) return null;
                                    let i = { id: n.id, name: n.name };
                                    null !== n.description && (i.description = n.description);
                                    let r =
                                        null !== n.icon
                                            ? (f.Ay.getGuildIconURL({
                                                  id: n.id,
                                                  icon: n.icon,
                                                  size: 44,
                                                  canAnimate: !0,
                                              }) ?? null)
                                            : null;
                                    return (null !== r && (i.icon_url = r), i);
                                })
                                .filter((e) => null !== e);
                        })(),
                        channels:
                            void 0 === r || null == s
                                ? []
                                : r()
                                      .map((e) => {
                                          let t = u.A.getChannel(e);
                                          if (void 0 === t) return null;
                                          let n = { id: t.id, name: (0, d.m1)(t, h.default, E.A) };
                                          return (t.topic.length > 0 && (n.channel_topic = t.topic), n);
                                      })
                                      .filter((e) => null !== e),
                    };
                null != a && (l.selected_guild_id = a);
                let o =
                    s?.banner !== null && s?.banner !== void 0
                        ? (f.Ay.getGuildBannerURL({ id: s.id, banner: s.banner }, !0) ?? null)
                        : null;
                return (
                    null !== o && (l.selected_guild_banner_url = o),
                    l.guilds.length > 100 && ((l.guilds = l.guilds.slice(0, 100)), (l.truncated = !0)),
                    l.channels.length > 100 && ((l.channels = l.channels.slice(0, 100)), (l.truncated = !0)),
                    { brand_safety_context: JSON.stringify(l) }
                );
            })(t),
            impression_id: i,
            is_quest_enrollment_blocked: S,
            ...(0, o.fF)(t, R, L),
        };
    if (e.adCreativeType === r.p.QUEST) {
        let t = e.adCreativeId;
        (0, l.av)({
            event: C.HAw.QUEST_CONTENT_VIEWED,
            questId: t,
            trackGuildAndChannelMetadata: y,
            shouldExtendSession: N,
            sourceQuestContent: n,
            properties: {
                ...D,
                metadata_sealed: (0, I.L4)(n, t) ?? null,
                search_session_id: (0, p.tv)()?.uuid ?? null,
                traffic_metadata_sealed: (0, I.Gp)(n, t) ?? null,
            },
        });
        return;
    }
    (0, l.Qg)({
        event: C.HAw.QUEST_CONTENT_VIEWED,
        adContentId: e.adCreativeId,
        noFillDecision: e.noFillDecision,
        relatedQuestId: e.relatedQuestId,
        adCreativeType: e.adCreativeType,
        trackGuildAndChannelMetadata: y,
        shouldExtendSession: N,
        sourceQuestContent: n,
        properties: { ...D },
    });
}
async function D(e) {
    if (null == e.adCreativeType) {
        let t = await (0, S.N)((0, o.jO)(e.surfaceId));
        m.default.track(C.HAw.QUEST_CONTENT_VIEWED, {
            ...(0, o.fF)(e.surfaceId),
            apple_advertising_id: null != t && (0, g.isIOS)() ? t.advertisingId : null,
            android_advertising_id: null != t && (0, g.isAndroid)() ? t.advertisingId : null,
            is_targeted: e.isTargeted ?? !1,
        });
        return;
    }
    y(e);
}
function v(e) {
    (0, T.L)().error("captureAdUserAction failed to report an ad user action", e);
}
function b(e) {
    try {
        switch (e.type) {
            case N.F.END_CONTENT_LOAD:
                let t = null != s.A.questEnrollmentBlockedUntil;
                if (e.adCreativeType === r.p.QUEST) {
                    let n = e.adCreativeId;
                    (0, l.av)({
                        event: C.HAw.QUEST_CONTENT_LOADED,
                        questId: n,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        sourceQuestContent: e.sourceQuestContent,
                        properties: {
                            triggered_by_status_change: e.triggeredByStatusChange,
                            metadata_sealed: (0, I.L4)(e.sourceQuestContent, n) ?? null,
                            traffic_metadata_sealed: (0, I.Gp)(e.sourceQuestContent, n) ?? null,
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
                        event: C.HAw.QUEST_CONTENT_LOADED,
                        adContentId: e.adCreativeId,
                        noFillDecision: e.noFillDecision,
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
            case N.F.CLICK_INTERNAL:
                R(e).catch(v);
                break;
            case N.F.CLICK_EXTERNAL_ADVERTISER_CTA:
                L(e).catch(v);
                break;
            case N.F.VIEW_INTERNAL_SURFACE_IMPRESSION:
                D(e).catch(v);
                break;
            case N.F.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION:
                y(e);
        }
    } catch (e) {
        v(e);
    }
}
