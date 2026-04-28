n.d(t, { DZ: () => U, Mm: () => b, Qg: () => L, Y5: () => h, av: () => D, vK: () => g });
var i = n(132500),
    a = n(323889),
    r = n(345353),
    _ = n(881615),
    s = n(861638),
    l = n(58149),
    o = n(69114),
    E = n(265059),
    d = n(111162),
    c = n(954571),
    u = n(723702),
    I = n(859703),
    T = n(710969),
    A = n(792620),
    S = n(814793),
    N = n(590202),
    O = n(652215);
let f = new Set([O.HAw.QUEST_CONTENT_VIEWED, O.HAw.QUEST_CONTENT_CLICKED]);
function R(e, t, n, i) {
    let a = (0, _.sN)(i).uuid;
    return {
        client_ad_session_id: a,
        billing_session_id: (0, T.xn)(t) ? a : ((0, s.Vc)()?.uuid ?? null),
        ad_content_id: e,
        creative_type: n,
        ...(0, T.Kc)(e, t),
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
    let a = f.has(e);
    if (n) return l.Ay.trackWithMetadata(e, t, a);
    c.default.track(e, t, { flush: a });
}
function D(e) {
    let {
            questId: t,
            event: n,
            properties: i,
            trackGuildAndChannelMetadata: r,
            shouldExtendSession: _ = !1,
            sourceQuestContent: s,
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
                    application_ids: (0, A._3)(l) ?? [],
                    ...R(l.id, s, a.p.QUEST, _),
                },
                ...i,
            },
            r,
            l.preview,
        );
}
function L(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        event: i,
        properties: a,
        trackGuildAndChannelMetadata: r,
        shouldExtendSession: _ = !1,
        sourceQuestContent: s,
    } = e;
    C(i, { ...R(t, s, n, _), ...a }, r, !1);
}
async function p(e, t) {
    return { adUser: await (0, r.N)((0, N.jO)(e)), adMetadataSealed: (0, T.L4)(e, t) };
}
async function m(e) {
    let {
            questContent: t,
            questContentPosition: n,
            questContentRowIndex: a,
            questContentCTA: r,
            impressionId: _,
            clickId: s,
            adCreativeId: l,
        } = e,
        { adUser: E, adMetadataSealed: d } = await p(t, l);
    return {
        ...(0, N.fF)(t, n, a),
        ...(0, o.A)(),
        cta_name: r,
        impression_id: _,
        apple_advertising_id: null != E && (0, u.isIOS)() ? E.advertisingId : null,
        android_advertising_id: null != E && (0, u.isAndroid)() ? E.advertisingId : null,
        click_id: s ?? (0, i.A)(),
        metadata_sealed: d ?? null,
    };
}
async function h(e) {
    let {
            questId: t,
            questContent: n,
            questContentCTA: i,
            questContentPosition: a,
            questContentRowIndex: r,
            impressionId: _,
            clickId: s,
            trackGuildAndChannelMetadata: l,
            sourceQuestContent: o,
        } = e,
        E = I.A.getQuest(t),
        d = (0, T.yI)(n, t),
        c = (0, T.Gp)(n, t);
    D({
        questId: t,
        event: O.HAw.QUEST_CONTENT_CLICKED,
        properties: {
            ...(await m({
                questContent: n,
                questContentPosition: a,
                questContentRowIndex: r,
                questContentCTA: i,
                impressionId: _,
                clickId: s,
            })),
            quest_status: null != E ? (0, N.NI)(E) : null,
            traffic_metadata_raw: d ?? null,
            traffic_metadata_sealed: c ?? null,
        },
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, T.xn)(n),
        sourceQuestContent: o,
    });
}
async function g(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        questContent: i,
        questContentCTA: a,
        questContentPosition: r,
        questContentRowIndex: _,
        impressionId: s,
        trackGuildAndChannelMetadata: l,
        sourceQuestContent: o,
    } = e;
    L({
        adContentId: t,
        adCreativeType: n,
        event: O.HAw.QUEST_CONTENT_CLICKED,
        properties: await m({
            questContent: i,
            questContentPosition: r,
            questContentRowIndex: _,
            questContentCTA: a,
            impressionId: s,
            adCreativeId: t,
        }),
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, T.xn)(i),
        sourceQuestContent: o,
    });
}
function b(e) {
    let { questContent: t, sourceQuestContent: n, questId: i, mode: a, prevMode: r } = e,
        _ = (0, N.fF)(t);
    D({
        questId: i,
        event: O.HAw.QUEST_BAR_MODE_CHANGED,
        properties: { content_id: _.content_id, content_name: _.content_name, mode: a, previous_mode: r },
        sourceQuestContent: n,
    });
}
function U(e, t) {
    l.Ay.trackWithMetadata(O.HAw.QUEST_EMBED_FALLBACK_VIEWED, { quest_id: e, reason: t });
}
