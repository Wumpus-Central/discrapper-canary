n.d(t, { DZ: () => U, Mm: () => b, Qg: () => m, Y5: () => h, av: () => p, vK: () => g });
var i = n(132500),
    r = n(323889),
    a = n(345353),
    s = n(881615),
    _ = n(861638),
    l = n(58149),
    o = n(69114),
    E = n(265059),
    d = n(111162),
    c = n(954571),
    u = n(723702),
    I = n(859703),
    A = n(710969),
    T = n(792620),
    S = n(814793),
    N = n(590202),
    O = n(652215);
let R = new Set([O.HAw.QUEST_CONTENT_VIEWED, O.HAw.QUEST_CONTENT_CLICKED]);
function f(e, t, n, i) {
    let r = (0, s.sN)(i).uuid;
    return {
        client_ad_session_id: r,
        billing_session_id: (0, A.xn)(t) ? r : ((0, _.Vc)()?.uuid ?? null),
        ad_content_id: e,
        creative_type: n,
        ...(0, A.Kc)(e, t),
    };
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (
        (E.A.displayTools && "quest_preview" === E.A.lastOpenTabId) ||
        (d.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), i)
    )
        return;
    let r = R.has(e);
    if (n) return l.Ay.trackWithMetadata(e, t, r);
    c.default.track(e, t, { flush: r });
}
function p(e) {
    let {
            questId: t,
            event: n,
            properties: i,
            trackGuildAndChannelMetadata: a,
            shouldExtendSession: s = !1,
            sourceQuestContent: _,
        } = e,
        l = I.A.quests.get(t);
    null != l &&
        C(
            n,
            {
                ...{
                    quest_id: l.id,
                    quest_type: (0, S.pv)(l.config),
                    game_id: l.config.application.id,
                    game_name: l.config.application.name,
                    application_ids: (0, T._3)(l) ?? [],
                    ...f(l.id, _, r.p.QUEST, s),
                },
                ...i,
            },
            a,
            l.preview,
        );
}
function m(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        event: i,
        properties: r,
        trackGuildAndChannelMetadata: a,
        shouldExtendSession: s = !1,
        sourceQuestContent: _,
    } = e;
    C(i, { ...f(t, _, n, s), ...r }, a, !1);
}
async function L(e) {
    return { adUser: await (0, a.N)((0, N.jO)(e)), adMetadataSealed: (0, A.L4)(e) };
}
async function D(e) {
    let {
            questContent: t,
            questContentPosition: n,
            questContentRowIndex: r,
            questContentCTA: a,
            impressionId: s,
            clickId: _,
        } = e,
        { adUser: l, adMetadataSealed: E } = await L(t);
    return {
        ...(0, N.fF)(t, n, r),
        ...(0, o.A)(),
        cta_name: a,
        impression_id: s,
        apple_advertising_id: null != l && (0, u.isIOS)() ? l.advertisingId : null,
        android_advertising_id: null != l && (0, u.isAndroid)() ? l.advertisingId : null,
        click_id: _ ?? (0, i.A)(),
        metadata_sealed: E ?? null,
    };
}
async function h(e) {
    let {
            questId: t,
            questContent: n,
            questContentCTA: i,
            questContentPosition: r,
            questContentRowIndex: a,
            impressionId: s,
            clickId: _,
            trackGuildAndChannelMetadata: l,
            sourceQuestContent: o,
        } = e,
        E = I.A.getQuest(t),
        d = (0, A.yI)(n, t),
        c = (0, A.Gp)(n, t);
    p({
        questId: t,
        event: O.HAw.QUEST_CONTENT_CLICKED,
        properties: {
            ...(await D({
                questContent: n,
                questContentPosition: r,
                questContentRowIndex: a,
                questContentCTA: i,
                impressionId: s,
                clickId: _,
            })),
            quest_status: null != E ? (0, N.NI)(E) : null,
            traffic_metadata_raw: d ?? null,
            traffic_metadata_sealed: c ?? null,
        },
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, A.xn)(n),
        sourceQuestContent: o,
    });
}
async function g(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        questContent: i,
        questContentCTA: r,
        questContentPosition: a,
        questContentRowIndex: s,
        impressionId: _,
        trackGuildAndChannelMetadata: l,
        sourceQuestContent: o,
    } = e;
    m({
        adContentId: t,
        adCreativeType: n,
        event: O.HAw.QUEST_CONTENT_CLICKED,
        properties: await D({
            questContent: i,
            questContentPosition: a,
            questContentRowIndex: s,
            questContentCTA: r,
            impressionId: _,
        }),
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, A.xn)(i),
        sourceQuestContent: o,
    });
}
function b(e) {
    let { questContent: t, sourceQuestContent: n, questId: i, mode: r, prevMode: a } = e,
        s = (0, N.fF)(t);
    p({
        questId: i,
        event: O.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: s.content_id, content_name: s.content_name, mode: r, previous_mode: a },
        sourceQuestContent: n,
    });
}
function U(e, t) {
    l.Ay.trackWithMetadata(O.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
}
