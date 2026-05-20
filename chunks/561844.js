"use strict";
n.d(t, { DZ: () => D, Mm: () => b, Qg: () => y, Y5: () => O, av: () => N, vK: () => R });
var i = n(835245),
    r = n(323889),
    s = n(345353),
    a = n(881615),
    o = n(234396),
    l = n(95561),
    u = n(69114),
    c = n(265059),
    d = n(111162),
    _ = n(174459),
    f = n(723702),
    h = n(859703),
    p = n(710969),
    E = n(792620),
    m = n(814793),
    g = n(590202),
    A = n(652215);
let I = new Set([A.HAw.QUEST_CONTENT_VIEWED, A.HAw.QUEST_CONTENT_CLICKED]);
function T(e, t, n, i) {
    let r = (0, a.sN)(i).uuid,
        s = (0, p.Kc)(e, t);
    return {
        client_ad_session_id: r,
        billing_session_id: (0, p.xn)(t) ? r : ((0, o.Vc)()?.uuid ?? null),
        ad_content_id: e,
        ...s,
        creative_type: s.creative_type ?? n,
    };
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (
        (c.A.displayTools && "quest_preview" === c.A.lastOpenTabId) ||
        (d.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), i)
    )
        return;
    let r = I.has(e);
    if (n) return l.Ay.trackWithMetadata(e, t, r);
    _.default.track(e, t, { flush: r });
}
function N(e) {
    let {
            questId: t,
            event: n,
            properties: i,
            trackGuildAndChannelMetadata: s,
            shouldExtendSession: a = !1,
            sourceQuestContent: o,
        } = e,
        l = h.A.quests.get(t);
    null != l &&
        S(
            n,
            {
                ...{
                    quest_id: l.id,
                    quest_type: (0, m.pv)(l.config),
                    game_id: l.config.application.id,
                    game_name: l.config.application.name,
                    application_ids: (0, E._3)(l) ?? [],
                    ...T(l.id, o, r.p.QUEST, a),
                },
                ...i,
            },
            s,
            l.preview,
        );
}
function y(e) {
    let {
        adContentId: t,
        relatedQuestId: n,
        adCreativeType: i,
        event: r,
        properties: s,
        trackGuildAndChannelMetadata: a,
        shouldExtendSession: o = !1,
        sourceQuestContent: l,
    } = e;
    S(
        r,
        { ...{ ...T(t, l, i, o), traffic_metadata_sealed: (0, p.Gp)(l, void 0, t) ?? null }, ...s, quest_id: n },
        a,
        !1,
    );
}
async function C(e, t) {
    return { adUser: await (0, s.N)((0, g.jO)(e)), adMetadataSealed: (0, p.L4)(e, t) };
}
async function v(e) {
    let {
            questContent: t,
            questContentPosition: n,
            questContentRowIndex: r,
            questContentCTA: s,
            impressionId: a,
            clickId: o,
            adCreativeId: l,
        } = e,
        { adUser: c, adMetadataSealed: d } = await C(t, l);
    return {
        ...(0, g.fF)(t, n, r),
        ...(0, u.A)(),
        cta_name: s,
        impression_id: a,
        apple_advertising_id: null != c && (0, f.isIOS)() ? c.advertisingId : null,
        android_advertising_id: null != c && (0, f.isAndroid)() ? c.advertisingId : null,
        click_id: o ?? (0, i.A)(),
        metadata_sealed: d ?? null,
    };
}
async function O(e) {
    let {
            questId: t,
            questContent: n,
            questContentCTA: i,
            questContentPosition: r,
            questContentRowIndex: s,
            impressionId: a,
            clickId: o,
            trackGuildAndChannelMetadata: l,
            sourceQuestContent: u,
        } = e,
        c = h.A.getQuest(t),
        d = (0, p.Gp)(n, t);
    N({
        questId: t,
        event: A.HAw.QUEST_CONTENT_CLICKED,
        properties: {
            ...(await v({
                questContent: n,
                questContentPosition: r,
                questContentRowIndex: s,
                questContentCTA: i,
                impressionId: a,
                clickId: o,
            })),
            quest_status: null != c ? (0, g.NI)(c) : null,
            traffic_metadata_sealed: d ?? null,
        },
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, p.xn)(n),
        sourceQuestContent: u,
    });
}
async function R(e) {
    let {
        adContentId: t,
        relatedQuestId: n,
        adCreativeType: i,
        questContent: r,
        questContentCTA: s,
        questContentPosition: a,
        questContentRowIndex: o,
        impressionId: l,
        trackGuildAndChannelMetadata: u,
        sourceQuestContent: c,
    } = e;
    y({
        adContentId: t,
        relatedQuestId: n,
        adCreativeType: i,
        event: A.HAw.QUEST_CONTENT_CLICKED,
        properties: await v({
            questContent: r,
            questContentPosition: a,
            questContentRowIndex: o,
            questContentCTA: s,
            impressionId: l,
            adCreativeId: t,
        }),
        trackGuildAndChannelMetadata: u,
        shouldExtendSession: (0, p.xn)(r),
        sourceQuestContent: c,
    });
}
function b(e) {
    let { questContent: t, sourceQuestContent: n, questId: i, mode: r, prevMode: s } = e,
        a = (0, g.fF)(t);
    N({
        questId: i,
        event: A.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: a.content_id, content_name: a.content_name, mode: r, previous_mode: s },
        sourceQuestContent: n,
    });
}
function D(e, t) {
    l.Ay.trackWithMetadata(A.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
}
