"use strict";
n.d(t, { DZ: () => U, Mm: () => k, Qg: () => L, Y5: () => x, av: () => b, eA: () => D, vK: () => P });
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
    h = n(431490),
    m = n(807876),
    E = n(710969),
    g = n(792620),
    A = n(814793),
    I = n(590202),
    T = n(654487),
    S = n(652215);
let y = new Set([S.HAw.QUEST_CONTENT_VIEWED, S.HAw.QUEST_CONTENT_CLICKED]);
function v(e, t) {
    let n = h.e.getConfig({ location: "quest_analytics" });
    return t && n.use_ad_session_id ? e : ((0, o.Vc)()?.uuid ?? null);
}
function N(e, t, n, r) {
    let i = (0, a.sN)(r).uuid;
    return {
        client_ad_session_id: i,
        billing_session_id: v(i, (0, E.xn)(t)),
        ad_content_id: e,
        creative_type: n,
        ...(0, E.Kc)(e, t),
    };
}
function C(e, t, n) {
    return {
        quest_id: e.id,
        quest_type: (0, A.pv)(e.config),
        game_id: e.config.application.id,
        game_name: e.config.application.name,
        application_ids: (0, g._3)(e) ?? [],
        ...N(e.id, t, i.p.QUEST, n),
    };
}
function R(e, t, n, r) {
    return { ...N(e, n, t, r) };
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (
        ((0, m.Q)({ location: T.rE.QUEST_PREVIEW_TOOL }) &&
            c.A.displayTools &&
            "quest_preview" === c.A.lastOpenTabId) ||
        (d.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), r)
    )
        return;
    let i = y.has(e);
    if (n) return l.Ay.trackWithMetadata(e, t, i);
    _.default.track(e, t, { flush: i });
}
function b(e) {
    let {
            questId: t,
            event: n,
            properties: r,
            trackGuildAndChannelMetadata: i,
            shouldExtendSession: s = !1,
            sourceQuestContent: a,
        } = e,
        o = p.A.quests.get(t);
    null == o || O(n, { ...C(o, a, s), ...r }, i, o.preview);
}
function D(e, t, n, r, i) {
    let s = {
            content_name: (0, I.jO)(t.content),
            cta_name: t.ctaContent,
            impression_id: t.impressionId,
            source_content_name: (0, I.jO)(t.sourceQuestContent),
            app_id: n,
            content_position: t.position,
            quest_status: (0, I.NI)(e),
        },
        a =
            (r === S.HAw.QUEST_APP_STORE_OVERLAY_CLOSED || r === S.HAw.QUEST_APP_STORE_OVERLAY_RETURNED) &&
            void 0 !== i;
    b({
        questId: e.id,
        event: r,
        properties: a ? { ...s, time_spent_ms: i } : s,
        sourceQuestContent: t.sourceQuestContent,
    });
}
function L(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        event: r,
        properties: i,
        trackGuildAndChannelMetadata: s,
        shouldExtendSession: a = !1,
        sourceQuestContent: o,
    } = e;
    O(r, { ...R(t, n, o, a), ...i }, s, !1);
}
async function w(e) {
    let t = await (0, s.N)((0, I.jO)(e));
    return { adUser: t, adMetadataRaw: (0, E.Li)(e), adMetadataSealed: (0, E.L4)(e) };
}
async function M(e) {
    let { questContent: t, questContentPosition: n, questContentRowIndex: i, questContentCTA: s, impressionId: a } = e,
        { adUser: o, adMetadataRaw: l, adMetadataSealed: c } = await w(t);
    return {
        ...(0, I.fF)(t, n, i),
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
async function x(e) {
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
        c = (0, E.yI)(n, t),
        d = (0, E.Gp)(n, t);
    b({
        questId: t,
        event: S.HAw.QUEST_CONTENT_CLICKED,
        properties: {
            ...(await M({
                questContent: n,
                questContentPosition: i,
                questContentRowIndex: s,
                questContentCTA: r,
                impressionId: a,
            })),
            quest_status: null != u ? (0, I.NI)(u) : null,
            traffic_metadata_raw: c ?? null,
            traffic_metadata_sealed: d ?? null,
        },
        trackGuildAndChannelMetadata: o,
        shouldExtendSession: (0, E.xn)(n),
        sourceQuestContent: l,
    });
}
async function P(e) {
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
    L({
        adContentId: t,
        adCreativeType: n,
        event: S.HAw.QUEST_CONTENT_CLICKED,
        properties: await M({
            questContent: r,
            questContentPosition: s,
            questContentRowIndex: a,
            questContentCTA: i,
            impressionId: o,
        }),
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, E.xn)(r),
        sourceQuestContent: u,
    });
}
function k(e) {
    let { questContent: t, sourceQuestContent: n, questId: r, mode: i, prevMode: s } = e,
        a = (0, I.fF)(t);
    b({
        questId: r,
        event: S.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: a.content_id, content_name: a.content_name, mode: i, previous_mode: s },
        sourceQuestContent: n,
    });
}
function U(e, t) {
    l.Ay.trackWithMetadata(S.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
}
