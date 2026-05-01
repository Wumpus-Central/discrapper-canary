n.d(t, { DZ: () => M, Mm: () => b, Qg: () => C, Y5: () => L, av: () => O, vK: () => D });
var i = n(132500),
    a = n(323889),
    r = n(345353),
    s = n(881615),
    l = n(861638),
    o = n(58149),
    d = n(69114),
    c = n(265059),
    _ = n(111162),
    E = n(954571),
    u = n(723702),
    A = n(859703),
    I = n(710969),
    T = n(792620),
    h = n(814793),
    S = n(590202),
    N = n(652215);
let f = new Set([N.HAw.QUEST_CONTENT_VIEWED, N.HAw.QUEST_CONTENT_CLICKED]);
function p(e, t, n, i) {
    let a = (0, s.sN)(i).uuid;
    return {
        client_ad_session_id: a,
        billing_session_id: (0, I.xn)(t) ? a : ((0, l.Vc)()?.uuid ?? null),
        ad_content_id: e,
        creative_type: n,
        ...(0, I.Kc)(e, t),
    };
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (
        (c.A.displayTools && "quest_preview" === c.A.lastOpenTabId) ||
        (_.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), i)
    )
        return;
    let a = f.has(e);
    if (n) return o.Ay.trackWithMetadata(e, t, a);
    E.default.track(e, t, { flush: a });
}
function O(e) {
    let {
            questId: t,
            event: n,
            properties: i,
            trackGuildAndChannelMetadata: r,
            shouldExtendSession: s = !1,
            sourceQuestContent: l,
        } = e,
        o = A.A.quests.get(t);
    null != o &&
        m(
            n,
            {
                ...{
                    quest_id: o.id,
                    quest_type: (0, h.pv)(o.config),
                    game_id: o.config.application.id,
                    game_name: o.config.application.name,
                    application_ids: (0, T._3)(o) ?? [],
                    ...p(o.id, l, a.p.QUEST, s),
                },
                ...i,
            },
            r,
            o.preview,
        );
}
function C(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        event: i,
        properties: a,
        trackGuildAndChannelMetadata: r,
        shouldExtendSession: s = !1,
        sourceQuestContent: l,
    } = e;
    m(i, { ...p(t, l, n, s), ...a }, r, !1);
}
async function R(e, t) {
    return { adUser: await (0, r.N)((0, S.jO)(e)), adMetadataSealed: (0, I.L4)(e, t) };
}
async function g(e) {
    let {
            questContent: t,
            questContentPosition: n,
            questContentRowIndex: a,
            questContentCTA: r,
            impressionId: s,
            clickId: l,
            adCreativeId: o,
        } = e,
        { adUser: c, adMetadataSealed: _ } = await R(t, o);
    return {
        ...(0, S.fF)(t, n, a),
        ...(0, d.A)(),
        cta_name: r,
        impression_id: s,
        apple_advertising_id: null != c && (0, u.isIOS)() ? c.advertisingId : null,
        android_advertising_id: null != c && (0, u.isAndroid)() ? c.advertisingId : null,
        click_id: l ?? (0, i.A)(),
        metadata_sealed: _ ?? null,
    };
}
async function L(e) {
    let {
            questId: t,
            questContent: n,
            questContentCTA: i,
            questContentPosition: a,
            questContentRowIndex: r,
            impressionId: s,
            clickId: l,
            trackGuildAndChannelMetadata: o,
            sourceQuestContent: d,
        } = e,
        c = A.A.getQuest(t),
        _ = (0, I.yI)(n, t),
        E = (0, I.Gp)(n, t);
    O({
        questId: t,
        event: N.HAw.QUEST_CONTENT_CLICKED,
        properties: {
            ...(await g({
                questContent: n,
                questContentPosition: a,
                questContentRowIndex: r,
                questContentCTA: i,
                impressionId: s,
                clickId: l,
            })),
            quest_status: null != c ? (0, S.NI)(c) : null,
            traffic_metadata_raw: _ ?? null,
            traffic_metadata_sealed: E ?? null,
        },
        trackGuildAndChannelMetadata: o,
        shouldExtendSession: (0, I.xn)(n),
        sourceQuestContent: d,
    });
}
async function D(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        questContent: i,
        questContentCTA: a,
        questContentPosition: r,
        questContentRowIndex: s,
        impressionId: l,
        trackGuildAndChannelMetadata: o,
        sourceQuestContent: d,
    } = e;
    C({
        adContentId: t,
        adCreativeType: n,
        event: N.HAw.QUEST_CONTENT_CLICKED,
        properties: await g({
            questContent: i,
            questContentPosition: r,
            questContentRowIndex: s,
            questContentCTA: a,
            impressionId: l,
            adCreativeId: t,
        }),
        trackGuildAndChannelMetadata: o,
        shouldExtendSession: (0, I.xn)(i),
        sourceQuestContent: d,
    });
}
function b(e) {
    let { questContent: t, sourceQuestContent: n, questId: i, mode: a, prevMode: r } = e,
        s = (0, S.fF)(t);
    O({
        questId: i,
        event: N.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: s.content_id, content_name: s.content_name, mode: a, previous_mode: r },
        sourceQuestContent: n,
    });
}
function M(e, t) {
    o.Ay.trackWithMetadata(N.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
}
