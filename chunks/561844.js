"use strict";
n.d(t, { DZ: () => k, Mm: () => P, Qg: () => D, Y5: () => M, av: () => O, eA: () => b, vK: () => x });
var r = n(835245),
    i = n(323889),
    s = n(345353),
    a = n(881615),
    o = n(861638),
    l = n(58149),
    u = n(69114),
    c = n(265059),
    d = n(111162),
    _ = n(954571),
    f = n(723702),
    p = n(859703),
    h = n(807876),
    m = n(710969),
    E = n(792620),
    g = n(814793),
    A = n(590202),
    I = n(654487),
    T = n(652215);
let S = new Set([T.HAw.QUEST_CONTENT_VIEWED, T.HAw.QUEST_CONTENT_CLICKED]);
function y(e, t) {
    return t ? e : ((0, o.Vc)()?.uuid ?? null);
}
function v(e, t, n, r) {
    let i = (0, a.sN)(r).uuid;
    return {
        client_ad_session_id: i,
        billing_session_id: y(i, (0, m.xn)(t)),
        ad_content_id: e,
        creative_type: n,
        ...(0, m.Kc)(e, t),
    };
}
function N(e, t, n) {
    return {
        quest_id: e.id,
        quest_type: (0, g.pv)(e.config),
        game_id: e.config.application.id,
        game_name: e.config.application.name,
        application_ids: (0, E._3)(e) ?? [],
        ...v(e.id, t, i.p.QUEST, n),
    };
}
function C(e, t, n, r) {
    return { ...v(e, n, t, r) };
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (
        ((0, h.Q)({ location: I.rE.QUEST_PREVIEW_TOOL }) &&
            c.A.displayTools &&
            "quest_preview" === c.A.lastOpenTabId) ||
        (d.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), r)
    )
        return;
    let i = S.has(e);
    if (n) return l.Ay.trackWithMetadata(e, t, i);
    _.default.track(e, t, { flush: i });
}
function O(e) {
    let {
            questId: t,
            event: n,
            properties: r,
            trackGuildAndChannelMetadata: i,
            shouldExtendSession: s = !1,
            sourceQuestContent: a,
        } = e,
        o = p.A.quests.get(t);
    null == o || R(n, { ...N(o, a, s), ...r }, i, o.preview);
}
function b(e, t, n, r, i) {
    let s = {
            content_name: (0, A.jO)(t.content),
            cta_name: t.ctaContent,
            impression_id: t.impressionId,
            source_content_name: (0, A.jO)(t.sourceQuestContent),
            app_id: n,
            content_position: t.position,
            quest_status: (0, A.NI)(e),
        },
        a =
            (r === T.HAw.QUEST_APP_STORE_OVERLAY_CLOSED || r === T.HAw.QUEST_APP_STORE_OVERLAY_RETURNED) &&
            void 0 !== i;
    O({
        questId: e.id,
        event: r,
        properties: a ? { ...s, time_spent_ms: i } : s,
        sourceQuestContent: t.sourceQuestContent,
    });
}
function D(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        event: r,
        properties: i,
        trackGuildAndChannelMetadata: s,
        shouldExtendSession: a = !1,
        sourceQuestContent: o,
    } = e;
    R(r, { ...C(t, n, o, a), ...i }, s, !1);
}
async function L(e) {
    let t = await (0, s.N)((0, A.jO)(e));
    return { adUser: t, adMetadataRaw: (0, m.Li)(e), adMetadataSealed: (0, m.L4)(e) };
}
async function w(e) {
    let { questContent: t, questContentPosition: n, questContentRowIndex: i, questContentCTA: s, impressionId: a } = e,
        { adUser: o, adMetadataRaw: l, adMetadataSealed: c } = await L(t);
    return {
        ...(0, A.fF)(t, n, i),
        ...(0, u.A)(),
        cta_name: s,
        impression_id: a,
        apple_advertising_id: null != o && (0, f.isIOS)() ? o.advertisingId : null,
        android_advertising_id: null != o && (0, f.isAndroid)() ? o.advertisingId : null,
        click_id: (0, r.A)(),
        metadata_raw: l ?? null,
        metadata_sealed: c ?? null,
    };
}
async function M(e) {
    let {
            questId: t,
            questContent: n,
            questContentCTA: r,
            questContentPosition: i,
            questContentRowIndex: s,
            impressionId: a,
            trackGuildAndChannelMetadata: o,
            sourceQuestContent: l,
        } = e,
        u = p.A.getQuest(t),
        c = (0, m.yI)(n, t),
        d = (0, m.Gp)(n, t);
    O({
        questId: t,
        event: T.HAw.QUEST_CONTENT_CLICKED,
        properties: {
            ...(await w({
                questContent: n,
                questContentPosition: i,
                questContentRowIndex: s,
                questContentCTA: r,
                impressionId: a,
            })),
            quest_status: null != u ? (0, A.NI)(u) : null,
            traffic_metadata_raw: c ?? null,
            traffic_metadata_sealed: d ?? null,
        },
        trackGuildAndChannelMetadata: o,
        shouldExtendSession: (0, m.xn)(n),
        sourceQuestContent: l,
    });
}
async function x(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        questContent: r,
        questContentCTA: i,
        questContentPosition: s,
        questContentRowIndex: a,
        impressionId: o,
        trackGuildAndChannelMetadata: l,
        sourceQuestContent: u,
    } = e;
    D({
        adContentId: t,
        adCreativeType: n,
        event: T.HAw.QUEST_CONTENT_CLICKED,
        properties: await w({
            questContent: r,
            questContentPosition: s,
            questContentRowIndex: a,
            questContentCTA: i,
            impressionId: o,
        }),
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, m.xn)(r),
        sourceQuestContent: u,
    });
}
function P(e) {
    let { questContent: t, sourceQuestContent: n, questId: r, mode: i, prevMode: s } = e,
        a = (0, A.fF)(t);
    O({
        questId: r,
        event: T.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: a.content_id, content_name: a.content_name, mode: i, previous_mode: s },
        sourceQuestContent: n,
    });
}
function k(e, t) {
    l.Ay.trackWithMetadata(T.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
}
