"use strict";
n.d(t, { r: () => p });
var i = n(835245),
    r = n(323889),
    s = n(859703),
    a = n(561844),
    o = n(590202),
    l = n(823784),
    u = n(710969),
    d = n(174459),
    c = n(144779),
    _ = n(652215);
async function h(e) {
    let {
            adCreativeType: t,
            questContentCTA: n,
            surfaceId: i,
            sourceQuestContent: s,
            impressionId: o,
            clickId: d,
            questContentPosition: c,
            questContentRowIndex: h,
            trackGuildAndChannelMetadata: f,
        } = e,
        E = await (0, a.LW)({
            questContent: i,
            questContentPosition: c,
            questContentRowIndex: h,
            questContentCTA: n,
            impressionId: o,
            clickId: d,
        });
    if (t === r.p.QUEST) {
        let t = e.adCreativeId;
        (0, a.av)({
            questId: t,
            event: _.HAw.QUEST_CONTENT_CLICKED,
            properties: {
                ...E,
                metadata_sealed: (0, u.L4)(s, t) ?? null,
                traffic_metadata_sealed: (0, u.Gp)(s, t) ?? null,
                search_session_id: (0, l.tv)()?.uuid ?? null,
            },
            trackGuildAndChannelMetadata: f,
            shouldExtendSession: (0, u.xn)(i),
            sourceQuestContent: s,
        });
        return;
    }
    (0, a.Qg)({
        adContentId: e.adCreativeId,
        relatedQuestId: e.relatedQuestId,
        adCreativeType: t,
        event: _.HAw.QUEST_CONTENT_CLICKED,
        properties: { ...E, search_session_id: (0, l.tv)()?.uuid ?? null },
        trackGuildAndChannelMetadata: f,
        shouldExtendSession: (0, u.xn)(i),
        sourceQuestContent: s,
    });
}
async function f(e) {
    if (null == e.adCreativeType) {
        let { surfaceId: t, questContentCTA: n, clickId: r, questContentPosition: s, questContentRowIndex: a } = e,
            l = (0, o.fF)(t, s, a);
        d.default.track(_.HAw.QUEST_CONTENT_CLICKED, {
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
    await h(e);
}
async function E(e) {
    await h(e);
}
function p(e) {
    switch (e.type) {
        case c.F.END_CONTENT_LOAD:
            let t = null != s.A.questEnrollmentBlockedUntil;
            if (e.adCreativeType === r.p.QUEST) {
                let n = e.adCreativeId;
                (0, a.av)({
                    event: _.HAw.QUEST_CONTENT_LOADED,
                    questId: n,
                    trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                    sourceQuestContent: e.sourceQuestContent,
                    properties: {
                        triggered_by_status_change: e.triggeredByStatusChange,
                        metadata_sealed: (0, u.L4)(e.sourceQuestContent, n) ?? null,
                        traffic_metadata_sealed: (0, u.Gp)(e.sourceQuestContent, n) ?? null,
                        impression_id: e.impressionId,
                        is_quest_enrollment_blocked: t,
                        content_id: e.surfaceId,
                        content_name: (0, o.jO)(e.surfaceId),
                        content_position: e.questContentPosition,
                        row_index: e.questContentRowIndex,
                    },
                });
            } else
                (0, a.Qg)({
                    event: _.HAw.QUEST_CONTENT_LOADED,
                    adContentId: e.adCreativeId,
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
        case c.F.CLICK_INTERNAL:
            f(e);
            break;
        case c.F.CLICK_EXTERNAL_ADVERTISER_CTA:
            E(e);
    }
}
