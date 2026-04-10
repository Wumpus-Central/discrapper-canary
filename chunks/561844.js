"use strict";
n.d(t, { DZ: () => M, Mm: () => w, Qg: () => R, Y5: () => D, av: () => C, vK: () => L });
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
    h = n(710969),
    m = n(792620),
    E = n(814793),
    g = n(590202),
    A = n(652215);
let I = new Set([A.HAw.QUEST_CONTENT_VIEWED, A.HAw.QUEST_CONTENT_CLICKED]);
function T(e, t) {
    return t ? e : ((0, o.Vc)()?.uuid ?? null);
}
function S(e, t, n, r) {
    let i = (0, a.sN)(r).uuid;
    return {
        client_ad_session_id: i,
        billing_session_id: T(i, (0, h.xn)(t)),
        ad_content_id: e,
        creative_type: n,
        ...(0, h.Kc)(e, t),
    };
}
function y(e, t, n) {
    return {
        quest_id: e.id,
        quest_type: (0, E.pv)(e.config),
        game_id: e.config.application.id,
        game_name: e.config.application.name,
        application_ids: (0, m._3)(e) ?? [],
        ...S(e.id, t, i.p.QUEST, n),
    };
}
function v(e, t, n, r) {
    return { ...S(e, n, t, r) };
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (
        (c.A.displayTools && "quest_preview" === c.A.lastOpenTabId) ||
        (d.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), r)
    )
        return;
    let i = I.has(e);
    if (n) return l.Ay.trackWithMetadata(e, t, i);
    _.default.track(e, t, { flush: i });
}
function C(e) {
    let {
            questId: t,
            event: n,
            properties: r,
            trackGuildAndChannelMetadata: i,
            shouldExtendSession: s = !1,
            sourceQuestContent: a,
        } = e,
        o = p.A.quests.get(t);
    null == o || N(n, { ...y(o, a, s), ...r }, i, o.preview);
}
function R(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        event: r,
        properties: i,
        trackGuildAndChannelMetadata: s,
        shouldExtendSession: a = !1,
        sourceQuestContent: o,
    } = e;
    N(r, { ...v(t, n, o, a), ...i }, s, !1);
}
async function O(e) {
    return { adUser: await (0, s.N)((0, g.jO)(e)), adMetadataSealed: (0, h.L4)(e) };
}
async function b(e) {
    let {
            questContent: t,
            questContentPosition: n,
            questContentRowIndex: i,
            questContentCTA: s,
            impressionId: a,
            clickId: o,
        } = e,
        { adUser: l, adMetadataSealed: c } = await O(t);
    return {
        ...(0, g.fF)(t, n, i),
        ...(0, u.A)(),
        cta_name: s,
        impression_id: a,
        apple_advertising_id: null != l && (0, f.isIOS)() ? l.advertisingId : null,
        android_advertising_id: null != l && (0, f.isAndroid)() ? l.advertisingId : null,
        click_id: o ?? (0, r.A)(),
        metadata_sealed: c ?? null,
    };
}
async function D(e) {
    let {
            questId: t,
            questContent: n,
            questContentCTA: r,
            questContentPosition: i,
            questContentRowIndex: s,
            impressionId: a,
            clickId: o,
            trackGuildAndChannelMetadata: l,
            sourceQuestContent: u,
        } = e,
        c = p.A.getQuest(t),
        d = (0, h.yI)(n, t),
        _ = (0, h.Gp)(n, t);
    C({
        questId: t,
        event: A.HAw.QUEST_CONTENT_CLICKED,
        properties: {
            ...(await b({
                questContent: n,
                questContentPosition: i,
                questContentRowIndex: s,
                questContentCTA: r,
                impressionId: a,
                clickId: o,
            })),
            quest_status: null != c ? (0, g.NI)(c) : null,
            traffic_metadata_raw: d ?? null,
            traffic_metadata_sealed: _ ?? null,
        },
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, h.xn)(n),
        sourceQuestContent: u,
    });
}
async function L(e) {
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
    R({
        adContentId: t,
        adCreativeType: n,
        event: A.HAw.QUEST_CONTENT_CLICKED,
        properties: await b({
            questContent: r,
            questContentPosition: s,
            questContentRowIndex: a,
            questContentCTA: i,
            impressionId: o,
        }),
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, h.xn)(r),
        sourceQuestContent: u,
    });
}
function w(e) {
    let { questContent: t, sourceQuestContent: n, questId: r, mode: i, prevMode: s } = e,
        a = (0, g.fF)(t);
    C({
        questId: r,
        event: A.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: a.content_id, content_name: a.content_name, mode: i, previous_mode: s },
        sourceQuestContent: n,
    });
}
function M(e, t) {
    l.Ay.trackWithMetadata(A.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
}
