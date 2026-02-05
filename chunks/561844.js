"use strict";
n.d(t, { DZ: () => M, Mm: () => P, Qg: () => O, Y5: () => w, av: () => R, vK: () => x });
var r = n(835245),
    i = n(345353),
    a = n(881615),
    s = n(861638),
    o = n(58149),
    l = n(69114),
    u = n(265059),
    c = n(111162),
    d = n(954571),
    _ = n(723702),
    f = n(859703),
    p = n(431490),
    h = n(807876),
    m = n(710969),
    g = n(792620),
    E = n(814793),
    A = n(590202),
    I = n(654487),
    T = n(652215);
let y = new Set([T.HAw.QUEST_CONTENT_VIEWED, T.HAw.QUEST_CONTENT_CLICKED]);
function S(e, t) {
    let n = p.e.getConfig({ location: "quest_analytics" });
    return t && n.use_ad_session_id ? e : ((0, s.Vc)()?.uuid ?? null);
}
function v(e, t, n) {
    let r = (0, a.sN)(n).uuid;
    return { client_ad_session_id: r, billing_session_id: S(r, (0, m.xn)(t)), ...(0, m.Kc)(e, t) };
}
function C(e, t, n) {
    return {
        quest_id: e.id,
        quest_type: (0, E.pv)(e.config),
        game_id: e.config.application.id,
        game_name: e.config.application.name,
        application_ids: (0, g._3)(e) ?? [],
        ...v(e.id, t, n),
    };
}
function b(e, t, n, r) {
    return { ad_content_id: e, creative_type: t, ...v(e, n, r) };
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (
        ((0, h.Q)({ location: I.rE.QUEST_PREVIEW_TOOL }) &&
            u.A.displayTools &&
            "quest_preview" === u.A.lastOpenTabId) ||
        (c.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), r)
    )
        return;
    let i = y.has(e);
    if (n) return o.Ay.trackWithMetadata(e, t, i);
    d.default.track(e, t, { flush: i });
}
function R(e) {
    let {
            questId: t,
            event: n,
            properties: r,
            trackGuildAndChannelMetadata: i,
            shouldExtendSession: a = !1,
            sourceQuestContent: s,
        } = e,
        o = f.A.quests.get(t);
    null == o || N(n, { ...C(o, s, a), ...r }, i, o.preview);
}
function O(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        event: r,
        properties: i,
        trackGuildAndChannelMetadata: a,
        shouldExtendSession: s = !1,
        sourceQuestContent: o,
    } = e;
    N(r, { ...b(t, n, o, s), ...i }, a, !1);
}
async function D(e) {
    let t = await (0, i.N)((0, A.jO)(e));
    return { adUser: t, adMetadataRaw: (0, m.Li)(e), adMetadataSealed: (0, m.L4)(e) };
}
async function L(e) {
    let { questContent: t, questContentPosition: n, questContentRowIndex: i, questContentCTA: a, impressionId: s } = e,
        { adUser: o, adMetadataRaw: u, adMetadataSealed: c } = await D(t);
    return {
        ...(0, A.fF)(t, n, i),
        ...(0, l.A)(),
        cta_name: a,
        impression_id: s,
        apple_advertising_id: null != o && (0, _.isIOS)() ? o.advertisingId : null,
        android_advertising_id: null != o && (0, _.isAndroid)() ? o.advertisingId : null,
        click_id: (0, r.A)(),
        metadata_raw: u ?? null,
        metadata_sealed: c ?? null,
    };
}
async function w(e) {
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
        u = f.A.getQuest(t),
        c = (0, m.yI)(n, t),
        d = (0, m.Gp)(n, t);
    R({
        questId: t,
        event: T.HAw.QUEST_CONTENT_CLICKED,
        properties: {
            ...(await L({
                questContent: n,
                questContentPosition: i,
                questContentRowIndex: a,
                questContentCTA: r,
                impressionId: s,
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
        questContentPosition: a,
        questContentRowIndex: s,
        impressionId: o,
        trackGuildAndChannelMetadata: l,
        sourceQuestContent: u,
    } = e;
    O({
        adContentId: t,
        adCreativeType: n,
        event: T.HAw.QUEST_CONTENT_CLICKED,
        properties: await L({
            questContent: r,
            questContentPosition: a,
            questContentRowIndex: s,
            questContentCTA: i,
            impressionId: o,
        }),
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, m.xn)(r),
        sourceQuestContent: u,
    });
}
function P(e) {
    let { questContent: t, sourceQuestContent: n, questId: r, mode: i, prevMode: a } = e,
        s = (0, A.fF)(t);
    R({
        questId: r,
        event: T.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: s.content_id, content_name: s.content_name, mode: i, previous_mode: a },
        sourceQuestContent: n,
    });
}
function M(e, t) {
    o.Ay.trackWithMetadata(T.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
}
