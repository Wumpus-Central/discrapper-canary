"use strict";
n.d(t, { xs: () => H, n0: () => B });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(835245),
    l = n(323889),
    u = n(731738),
    c = n(17928),
    d = n(964486),
    _ = n(859703),
    h = n(561844),
    f = n(590202),
    p = n(823784),
    E = n(710969),
    m = n(174459),
    g = (((i = {}).END_CONTENT_LOAD = "end_content_load"), (i.CLICK_INTERNAL = "click_internal"), i);
f.Cy.OPEN_GAME_LINK, f.Cy.CONTEXT_MENU_OPEN_GAME_LINK, f.Cy.GAME_STORE_OPEN_GAME_LINK;
var A = n(652215);
async function I(e) {
    let {
        adCreativeType: t,
        questContentCTA: n,
        surfaceId: i,
        sourceQuestContent: r,
        impressionId: s,
        clickId: a,
        questContentPosition: u,
        questContentRowIndex: c,
        trackGuildAndChannelMetadata: d,
    } = e;
    if (null == t) {
        let t = (0, f.fF)(i, u, c);
        m.default.track(A.HAw.QUEST_CONTENT_CLICKED, {
            cta_name: n,
            click_id: a ?? (0, o.A)(),
            is_targeted: e.isTargeted ?? !1,
            content_id: t.content_id,
            content_name: t.content_name,
            content_position: t.content_position,
            row_index: t.row_index,
            ad_content_id: e.adContentId,
        });
        return;
    }
    let _ = await (0, h.LW)({
        questContent: i,
        questContentPosition: u,
        questContentRowIndex: c,
        questContentCTA: n,
        impressionId: s,
        clickId: a,
    });
    if (t === l.p.QUEST) {
        let t = e.adCreativeId;
        (0, h.av)({
            questId: t,
            event: A.HAw.QUEST_CONTENT_CLICKED,
            properties: {
                ..._,
                metadata_sealed: (0, E.L4)(r, t) ?? null,
                traffic_metadata_sealed: (0, E.Gp)(r, t) ?? null,
                search_session_id: (0, p.tv)()?.uuid ?? null,
            },
            trackGuildAndChannelMetadata: d,
            shouldExtendSession: (0, E.xn)(i),
            sourceQuestContent: r,
        });
        return;
    }
    (0, h.Qg)({
        adContentId: e.adCreativeId,
        relatedQuestId: e.relatedQuestId,
        adCreativeType: t,
        event: A.HAw.QUEST_CONTENT_CLICKED,
        properties: { ..._, search_session_id: (0, p.tv)()?.uuid ?? null },
        trackGuildAndChannelMetadata: d,
        shouldExtendSession: (0, E.xn)(i),
        sourceQuestContent: r,
    });
}
var T = n(345353),
    S = n(69114),
    y = n(807393),
    N = n(723702),
    v = n(340124),
    C = n(945810),
    R =
        (((r = {})[(r.STEP_1_LOADED = 0)] = "STEP_1_LOADED"),
        (r[(r.STEP_2_CLICKED_INTERNAL = 1)] = "STEP_2_CLICKED_INTERNAL"),
        (r[(r.STEP_3_CLICKED_EXTERNAL = 2)] = "STEP_3_CLICKED_EXTERNAL"),
        (r[(r.STEP_4_VIEWED_NON_IMPRESSION = 3)] = "STEP_4_VIEWED_NON_IMPRESSION"),
        (r[(r.STEP_5_VIEWED_IMPRESSION = 4)] = "STEP_5_VIEWED_IMPRESSION"),
        r);
let O = (0, C.mj)({
    name: "2026-05-use-ad-analytics-interface",
    kind: "user",
    defaultConfig: { enabled: !1, maxStep: -1 },
    variations: {
        0: { enabled: !1, maxStep: -1 },
        1: { enabled: !0, maxStep: 0 },
        2: { enabled: !0, maxStep: 1 },
        3: { enabled: !0, maxStep: 2 },
        4: { enabled: !0, maxStep: 3 },
        5: { enabled: !0, maxStep: 4 },
    },
});
var b = n(851936),
    D = n(47167),
    L = n(633965),
    w = n(734057),
    M = n(71393),
    P = n(994500),
    x = n(967198),
    k = n(287809),
    U = n(486020);
n(23766);
var G = n(971649);
let F = new Set();
class V {
    id;
    entity;
    questContent;
    triggeredByStatusChange;
    trackGuildAndChannelMetadata;
    questContentPosition;
    questContentRowIndex;
    sourceQuestContent;
    heartbeatTimeoutId;
    lastBeatTime;
    minViewTimeReachedTimeoutId;
    minViewTimeSeconds;
    minViewportPercentage;
    isQuestEnrollmentBlocked;
    onImpressionCallback;
    isRunning = !1;
    migrateQuestContentLoadedToCaptureAdUserAction;
    constructor(e) {
        const {
            adContentIds: t,
            adCreativeType: n,
            questContent: i,
            triggeredByStatusChange: r,
            trackGuildAndChannelMetadata: s,
            questContentPosition: a,
            questContentRowIndex: u,
            minViewTimeSeconds: c = 1,
            isQuestEnrollmentBlocked: d,
            onImpression: _,
            sourceQuestContent: h,
        } = e;
        (this.id = (0, o.A)()),
            (this.questContent = i),
            (this.questContentPosition = a),
            (this.minViewTimeSeconds = c),
            (this.minViewportPercentage = 0.5),
            (this.trackGuildAndChannelMetadata = s),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = u),
            (this.isQuestEnrollmentBlocked = d),
            (this.onImpressionCallback = _),
            (this.sourceQuestContent = h),
            (this.migrateQuestContentLoadedToCaptureAdUserAction = (function (e, t) {
                let n = O.getConfig({ location: t });
                return n.enabled && e <= n.maxStep;
            })(R.STEP_1_LOADED, "quest_content_impression")),
            l.p.QUEST,
            (this.entity = { adContentIds: t, adCreativeType: n });
    }
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    trackViewedPlacement = (e) => {
        let t = (0, E.HN)(this.questContent);
        null != t && (0, E.xn)(this.questContent) && F.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
        let t = (0, E.HN)(this.questContent);
        return null != t && !F.has(`${e}_${t}`) && (0, E.xn)(this.questContent);
    };
    onMinViewTimeReached = async () => {
        let e = await (0, T.N)((0, f.jO)(this.questContent)),
            t = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            n = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != e && (0, N.isIOS)() ? e.advertisingId : null,
                android_advertising_id: null != e && (0, N.isAndroid)() ? e.advertisingId : null,
                ...(0, S.A)(),
                ...(function (e) {
                    let t,
                        n,
                        i = (0, E.xn)(e),
                        r = (0, E.vZ)(e),
                        s = (0, L.pc)(),
                        a = (0, L.Ld)();
                    if (!r?.is_campaign_ias_enabled || !i || void 0 === s || void 0 === a) return null;
                    let o = x.A.getGuildId(),
                        l = null != o ? M.A.getGuild(o) : null,
                        u = {
                            guilds:
                                ((t = s()),
                                (n = M.A.getGuilds()),
                                t
                                    .map((e) => {
                                        let t = n[e];
                                        if (void 0 === t) return null;
                                        let i = { id: t.id, name: t.name };
                                        null !== t.description && (i.description = t.description);
                                        let r =
                                            null !== t.icon
                                                ? (U.Ay.getGuildIconURL({
                                                      id: t.id,
                                                      icon: t.icon,
                                                      size: 44,
                                                      canAnimate: !0,
                                                  }) ?? null)
                                                : null;
                                        return null !== r && (i.icon_url = r), i;
                                    })
                                    .filter((e) => null !== e)),
                            channels:
                                null == l
                                    ? []
                                    : a()
                                          .map((e) => {
                                              let t = w.A.getChannel(e);
                                              if (void 0 === t) return null;
                                              let n = { id: t.id, name: (0, D.m1)(t, k.default, P.A) };
                                              return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                                          })
                                          .filter((e) => null !== e),
                        };
                    null != o && (u.selected_guild_id = o);
                    let c =
                        l?.banner !== null && l?.banner !== void 0
                            ? (U.Ay.getGuildBannerURL({ id: l.id, banner: l.banner }, !0) ?? null)
                            : null;
                    return (
                        null !== c && (u.selected_guild_banner_url = c),
                        u.guilds.length > 100 && ((u.guilds = u.guilds.slice(0, 100)), (u.truncated = !0)),
                        u.channels.length > 100 && ((u.channels = u.channels.slice(0, 100)), (u.truncated = !0)),
                        { brand_safety_context: JSON.stringify(u) }
                    );
                })(this.questContent),
            };
        this.entity.adContentIds.forEach((e, i) => {
            let r = (0, E.L4)(this.sourceQuestContent, e),
                s = this.shouldExtendSession(e);
            if ((this.trackViewedPlacement(e), this.entity.adCreativeType === l.p.QUEST)) {
                let e = this.entity.adContentIds[i],
                    a = _.A.getQuest(e);
                null == a || (0, E.Ic)(a) || (0, v.zh)(l.p.QUEST, [e]),
                    (0, b.L)().info(
                        `${a?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, f.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, h.av)({
                        ...t,
                        shouldExtendSession: s,
                        questId: e,
                        event: A.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...n,
                            ...this.commonProperties(),
                            metadata_sealed: r ?? null,
                            search_session_id: (0, p.tv)()?.uuid ?? null,
                            traffic_metadata_sealed: (0, E.Gp)(this.sourceQuestContent, a?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[i];
                (0, b.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, f.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, h.Qg)({
                        ...t,
                        shouldExtendSession: s,
                        adContentId: e,
                        adCreativeType: this.entity.adCreativeType,
                        event: A.HAw.QUEST_CONTENT_VIEWED,
                        properties: { ...n, ...this.commonProperties() },
                    });
            }
        }),
            this.onImpressionCallback?.();
    };
    beat = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (null != e.lastBeatTime) {
                let n = Math.round(Date.now() - e.lastBeatTime),
                    i = {
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        sourceQuestContent: e.sourceQuestContent,
                    },
                    r = {
                        is_termination_beat: t,
                        viewed_time_ms: n,
                        triggered_by_status_change: e.triggeredByStatusChange,
                    };
                e.entity.adContentIds.forEach((s, a) => {
                    if (e.entity.adCreativeType === l.p.QUEST) {
                        let s = e.entity.adContentIds[a],
                            o = _.A.getQuest(s);
                        (0, b.L)().info(
                            `${o?.config.messages.questName ?? s} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, h.av)({
                                ...i,
                                questId: s,
                                event: A.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties() },
                            });
                    } else {
                        let s = e.entity.adContentIds[a];
                        (0, b.L)().info(
                            `${s} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, h.Qg)({
                                ...i,
                                adContentId: s,
                                adCreativeType: e.entity.adCreativeType,
                                event: A.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties() },
                            });
                    }
                });
            }
            e.lastBeatTime = Date.now();
        };
    })();
    commonProperties = () => ({
        impression_id: this.id,
        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
        ...(0, f.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
    });
    clone = (e) => {
        let { triggeredByStatusChange: t } = e;
        return (
            this.stop(),
            new V({
                questContent: this.questContent,
                questContentRowIndex: this.questContentRowIndex,
                questContentPosition: this.questContentPosition,
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                triggeredByStatusChange: t,
                isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
                onImpression: this.onImpressionCallback,
                sourceQuestContent: this.sourceQuestContent,
                ...this.entity,
            })
        );
    };
    start = () => {
        this.stop(!1),
            (this.lastBeatTime = Date.now()),
            (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 6e4)),
            (this.minViewTimeReachedTimeoutId = window.setTimeout(
                this.onMinViewTimeReached,
                1e3 * this.minViewTimeSeconds,
            ));
        let e = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            t = { triggered_by_status_change: this.triggeredByStatusChange };
        this.entity.adContentIds.forEach((n, i) => {
            let r = (0, E.L4)(this.sourceQuestContent, n);
            if (this.migrateQuestContentLoadedToCaptureAdUserAction) {
                let e =
                    (this.entity.adCreativeType === l.p.QUEST,
                    { adCreativeType: this.entity.adCreativeType, adCreativeId: this.entity.adContentIds[i] });
                var s = {
                    type: g.END_CONTENT_LOAD,
                    surfaceId: this.questContent,
                    sourceQuestContent: this.sourceQuestContent,
                    impressionId: this.id,
                    triggeredByStatusChange: this.triggeredByStatusChange,
                    trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                    questContentPosition: this.questContentPosition,
                    questContentRowIndex: this.questContentRowIndex,
                    ...e,
                };
                switch (s.type) {
                    case g.END_CONTENT_LOAD:
                        let t = null != _.A.questEnrollmentBlockedUntil;
                        if (s.adCreativeType === l.p.QUEST) {
                            let e = s.adCreativeId;
                            (0, h.av)({
                                event: A.HAw.QUEST_CONTENT_LOADED,
                                questId: e,
                                trackGuildAndChannelMetadata: s.trackGuildAndChannelMetadata,
                                sourceQuestContent: s.sourceQuestContent,
                                properties: {
                                    triggered_by_status_change: s.triggeredByStatusChange,
                                    metadata_sealed: (0, E.L4)(s.sourceQuestContent, e) ?? null,
                                    traffic_metadata_sealed: (0, E.Gp)(s.sourceQuestContent, e) ?? null,
                                    impression_id: s.impressionId,
                                    is_quest_enrollment_blocked: t,
                                    content_id: s.surfaceId,
                                    content_name: (0, f.jO)(s.surfaceId),
                                    content_position: s.questContentPosition,
                                    row_index: s.questContentRowIndex,
                                },
                            });
                        } else
                            (0, h.Qg)({
                                event: A.HAw.QUEST_CONTENT_LOADED,
                                adContentId: s.adCreativeId,
                                adCreativeType: s.adCreativeType,
                                trackGuildAndChannelMetadata: s.trackGuildAndChannelMetadata,
                                sourceQuestContent: s.sourceQuestContent,
                                properties: {
                                    triggered_by_status_change: s.triggeredByStatusChange,
                                    impression_id: s.impressionId,
                                    is_quest_enrollment_blocked: t,
                                    content_id: s.surfaceId,
                                    content_name: (0, f.jO)(s.surfaceId),
                                    content_position: s.questContentPosition,
                                    row_index: s.questContentRowIndex,
                                },
                            });
                        break;
                    case g.CLICK_INTERNAL:
                        I(s);
                }
                return;
            }
            if (this.entity.adCreativeType === l.p.QUEST) {
                let n = this.entity.adContentIds[i],
                    s = _.A.getQuest(n);
                (0, b.L)().info(
                    `${s?.config.messages.questName ?? n} Quest became visible at ${(0, f.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, h.av)({
                        ...e,
                        questId: n,
                        event: A.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...t,
                            metadata_sealed: r ?? null,
                            ...this.commonProperties(),
                            traffic_metadata_sealed: (0, E.Gp)(this.sourceQuestContent, s?.id) ?? null,
                        },
                    });
            } else {
                let n = this.entity.adContentIds[i];
                (0, b.L)().info(`${n} ad content became visible at ${(0, f.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, h.Qg)({
                        ...e,
                        adContentId: n,
                        adCreativeType: this.entity.adCreativeType,
                        event: A.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...t, ...this.commonProperties() },
                    });
            }
        }),
            y.A.increment({
                name: u.K.QUEST_CONTENT_IMPRESSION,
                tags: [`quest_content:${(0, f.jO)(this.questContent)}`],
            }),
            (this.isRunning = !0);
    };
    stop = (() => {
        var e = this;
        return function () {
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            t && e.beat(!0),
                (e.lastBeatTime = void 0),
                clearInterval(e.heartbeatTimeoutId),
                clearTimeout(e.minViewTimeReachedTimeoutId),
                (e.isRunning = !1);
        };
    })();
}
let B = a.createContext(void 0);
function H(e) {
    let { visible: t, visibleChanged: n, focused: i, reference: r, focusedChanged: o, sourceQuestContent: u } = e,
        h = (0, G.iY)(e),
        f = a.useRef(null),
        p = (0, c.bG)([_.A], () => null != _.A.questEnrollmentBlockedUntil, []);
    return (
        (0, d.Ay)(() => () => {
            null != f.current && f.current.stop();
        }),
        a.useEffect(() => {
            let r = i && t,
                s = (n || o || h) && r,
                a = ((n || o) && !r) || h;
            if (((s || a) && null != f.current && f.current.stop(), s)) {
                let t = {
                    isQuestEnrollmentBlocked: p,
                    minViewTimeSeconds: e.minViewTimeSeconds,
                    onImpression: e.onImpression,
                    questContent: e.questContent,
                    questContentPosition: e.questContentPosition,
                    questContentRowIndex: e.questContentRowIndex,
                    sourceQuestContent: u,
                    trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                    triggeredByStatusChange: h,
                };
                e.adCreativeType,
                    l.p.QUEST,
                    (f.current = new V({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType })),
                    f.current.start();
            }
        }, [
            i,
            t,
            o,
            n,
            e.adContentIds,
            e.onImpression,
            e.questContent,
            e.questContentPosition,
            e.questContentRowIndex,
            e.trackGuildAndChannelMetadata,
            h,
            e.minViewTimeSeconds,
            p,
            u,
            e.adCreativeType,
        ]),
        (0, s.jsx)(B.Provider, { value: f, children: e.children(r, f) })
    );
}
