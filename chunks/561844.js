"use strict";
n.d(t, { DZ: () => U, Mm: () => k, Qg: () => L, Y5: () => P, av: () => D, vK: () => M });
var r = n(835245),
    i = n(323889),
    a = n(345353),
    s = n(881615),
    o = n(861638),
    l = n(58149),
    u = n(69114),
    c = n(265059),
    d = n(111162),
    _ = n(954571),
    f = n(723702),
    h = n(859703),
    p = n(431490),
    g = n(807876),
    E = n(710969),
    A = n(792620),
    I = n(814793),
    T = n(590202),
    y = n(654487),
    S = n(652215);
let v = new Set([S.HAw.QUEST_CONTENT_VIEWED, S.HAw.QUEST_CONTENT_CLICKED]);
function C(e, t) {
    let n = p.e.getConfig({ location: "quest_analytics" });
    return t && n.use_ad_session_id ? e : ((0, o.Vc)()?.uuid ?? null);
}
function b(e, t, n, r) {
    let i = (0, s.sN)(r).uuid;
    return {
        client_ad_session_id: i,
        billing_session_id: C(i, (0, E.xn)(t)),
        ad_content_id: e,
        creative_type: n,
        ...(0, E.Kc)(e, t),
    };
}
function N(e, t, n) {
    return {
        quest_id: e.id,
        quest_type: (0, I.pv)(e.config),
        game_id: e.config.application.id,
        game_name: e.config.application.name,
        application_ids: (0, A._3)(e) ?? [],
        ...b(e.id, t, i.p.QUEST, n),
    };
}
function R(e, t, n, r) {
    return { ...b(e, n, t, r) };
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (
        ((0, g.Q)({ location: y.rE.QUEST_PREVIEW_TOOL }) &&
            c.A.displayTools &&
            "quest_preview" === c.A.lastOpenTabId) ||
        (d.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), r)
    )
        return;
    let i = v.has(e);
    if (n) return l.Ay.trackWithMetadata(e, t, i);
    _.default.track(e, t, { flush: i });
}
function D(e) {
    let {
            questId: t,
            event: n,
            properties: r,
            trackGuildAndChannelMetadata: i,
            shouldExtendSession: a = !1,
            sourceQuestContent: s,
        } = e,
        o = h.A.quests.get(t);
    null == o || O(n, { ...N(o, s, a), ...r }, i, o.preview);
}
function L(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        event: r,
        properties: i,
        trackGuildAndChannelMetadata: a,
        shouldExtendSession: s = !1,
        sourceQuestContent: o,
    } = e;
    O(r, { ...R(t, n, o, s), ...i }, a, !1);
}
async function w(e) {
    let t = await (0, a.N)((0, T.jO)(e));
    return { adUser: t, adMetadataRaw: (0, E.Li)(e), adMetadataSealed: (0, E.L4)(e) };
}
async function x(e) {
    let { questContent: t, questContentPosition: n, questContentRowIndex: i, questContentCTA: a, impressionId: s } = e,
        { adUser: o, adMetadataRaw: l, adMetadataSealed: c } = await w(t);
    return {
        ...(0, T.fF)(t, n, i),
        ...(0, u.A)(),
        cta_name: a,
        impression_id: s,
        apple_advertising_id: null != o && (0, f.isIOS)() ? o.advertisingId : null,
        android_advertising_id: null != o && (0, f.isAndroid)() ? o.advertisingId : null,
        click_id: (0, r.A)(),
        metadata_raw: l ?? null,
        metadata_sealed: c ?? null,
    };
}
async function P(e) {
    let {
            questId: t,
            questContent: n,
            questContentCTA: r,
            questContentPosition: i,
            questContentRowIndex: a,
            impressionId: s,
            trackGuildAndChannelMetadata: o,
            sourceQuestContent: l,
        } = e,
        u = h.A.getQuest(t),
        c = (0, E.yI)(n, t),
        d = (0, E.Gp)(n, t);
    D({
        questId: t,
        event: S.HAw.QUEST_CONTENT_CLICKED,
        properties: {
            ...(await x({
                questContent: n,
                questContentPosition: i,
                questContentRowIndex: a,
                questContentCTA: r,
                impressionId: s,
            })),
            quest_status: null != u ? (0, T.NI)(u) : null,
            traffic_metadata_raw: c ?? null,
            traffic_metadata_sealed: d ?? null,
        },
        trackGuildAndChannelMetadata: o,
        shouldExtendSession: (0, E.xn)(n),
        sourceQuestContent: l,
    });
}
async function M(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        questContent: r,
        questContentCTA: i,
        questContentPosition: a,
        questContentRowIndex: s,
        impressionId: o,
        trackGuildAndChannelMetadata: l,
        sourceQuestContent: u,
    } = e;
    L({
        adContentId: t,
        adCreativeType: n,
        event: S.HAw.QUEST_CONTENT_CLICKED,
        properties: await x({
            questContent: r,
            questContentPosition: a,
            questContentRowIndex: s,
            questContentCTA: i,
            impressionId: o,
        }),
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, E.xn)(r),
        sourceQuestContent: u,
    });
}
function k(e) {
    let { questContent: t, sourceQuestContent: n, questId: r, mode: i, prevMode: a } = e,
        s = (0, T.fF)(t);
    D({
        questId: r,
        event: S.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: s.content_id, content_name: s.content_name, mode: i, previous_mode: a },
        sourceQuestContent: n,
    });
}
function U(e, t) {
    l.Ay.trackWithMetadata(S.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
}
