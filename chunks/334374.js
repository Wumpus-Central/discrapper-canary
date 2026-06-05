"use strict";
n.d(t, { xs: () => V, n0: () => F });
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
    p = n(710969),
    E = (((i = {}).END_CONTENT_LOAD = "end_content_load"), i),
    m = n(652215),
    g = n(345353),
    A = n(69114),
    I = n(807393),
    T = n(723702),
    S = n(340124),
    y = n(945810),
    N =
        (((r = {})[(r.STEP_1_LOADED = 0)] = "STEP_1_LOADED"),
        (r[(r.STEP_2_CLICKED_INTERNAL = 1)] = "STEP_2_CLICKED_INTERNAL"),
        (r[(r.STEP_3_CLICKED_EXTERNAL = 2)] = "STEP_3_CLICKED_EXTERNAL"),
        (r[(r.STEP_4_VIEWED_NON_IMPRESSION = 3)] = "STEP_4_VIEWED_NON_IMPRESSION"),
        (r[(r.STEP_5_VIEWED_IMPRESSION = 4)] = "STEP_5_VIEWED_IMPRESSION"),
        r);
let v = (0, y.mj)({
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
var C = n(851936),
    R = n(47167),
    O = n(633965),
    b = n(734057),
    D = n(71393),
    L = n(994500),
    w = n(967198),
    M = n(287809),
    P = n(486020);
n(23766);
var x = n(971649),
    k = n(823784);
let U = new Set();
class G {
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
                let n = v.getConfig({ location: t });
                return n.enabled && e <= n.maxStep;
            })(N.STEP_1_LOADED, "quest_content_impression")),
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
        let t = (0, p.HN)(this.questContent);
        null != t && (0, p.xn)(this.questContent) && U.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
        let t = (0, p.HN)(this.questContent);
        return null != t && !U.has(`${e}_${t}`) && (0, p.xn)(this.questContent);
    };
    onMinViewTimeReached = async () => {
        let e = await (0, g.N)((0, f.jO)(this.questContent)),
            t = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            n = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != e && (0, T.isIOS)() ? e.advertisingId : null,
                android_advertising_id: null != e && (0, T.isAndroid)() ? e.advertisingId : null,
                ...(0, A.A)(),
                ...(function (e) {
                    let t,
                        n,
                        i = (0, p.xn)(e),
                        r = (0, p.vZ)(e),
                        s = (0, O.pc)(),
                        a = (0, O.Ld)();
                    if (!r?.is_campaign_ias_enabled || !i || void 0 === s || void 0 === a) return null;
                    let o = w.A.getGuildId(),
                        l = null != o ? D.A.getGuild(o) : null,
                        u = {
                            guilds:
                                ((t = s()),
                                (n = D.A.getGuilds()),
                                t
                                    .map((e) => {
                                        let t = n[e];
                                        if (void 0 === t) return null;
                                        let i = { id: t.id, name: t.name };
                                        null !== t.description && (i.description = t.description);
                                        let r =
                                            null !== t.icon
                                                ? (P.Ay.getGuildIconURL({
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
                                              let t = b.A.getChannel(e);
                                              if (void 0 === t) return null;
                                              let n = { id: t.id, name: (0, R.m1)(t, M.default, L.A) };
                                              return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                                          })
                                          .filter((e) => null !== e),
                        };
                    null != o && (u.selected_guild_id = o);
                    let c =
                        l?.banner !== null && l?.banner !== void 0
                            ? (P.Ay.getGuildBannerURL({ id: l.id, banner: l.banner }, !0) ?? null)
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
            let r = (0, p.L4)(this.sourceQuestContent, e),
                s = this.shouldExtendSession(e);
            if ((this.trackViewedPlacement(e), this.entity.adCreativeType === l.p.QUEST)) {
                let e = this.entity.adContentIds[i],
                    a = _.A.getQuest(e);
                null == a || (0, p.Ic)(a) || (0, S.zh)(l.p.QUEST, [e]),
                    (0, C.L)().info(
                        `${a?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, f.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, h.av)({
                        ...t,
                        shouldExtendSession: s,
                        questId: e,
                        event: m.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...n,
                            ...this.commonProperties(),
                            metadata_sealed: r ?? null,
                            search_session_id: (0, k.tv)()?.uuid ?? null,
                            traffic_metadata_sealed: (0, p.Gp)(this.sourceQuestContent, a?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[i];
                (0, C.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, f.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, h.Qg)({
                        ...t,
                        shouldExtendSession: s,
                        adContentId: e,
                        adCreativeType: this.entity.adCreativeType,
                        event: m.HAw.QUEST_CONTENT_VIEWED,
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
                        (0, C.L)().info(
                            `${o?.config.messages.questName ?? s} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, h.av)({
                                ...i,
                                questId: s,
                                event: m.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties() },
                            });
                    } else {
                        let s = e.entity.adContentIds[a];
                        (0, C.L)().info(
                            `${s} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, h.Qg)({
                                ...i,
                                adContentId: s,
                                adCreativeType: e.entity.adCreativeType,
                                event: m.HAw.QUEST_CONTENT_VIEW_TIME,
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
            new G({
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
            let r = (0, p.L4)(this.sourceQuestContent, n);
            if (this.migrateQuestContentLoadedToCaptureAdUserAction) {
                let e =
                    (this.entity.adCreativeType === l.p.QUEST,
                    { adCreativeType: this.entity.adCreativeType, adCreativeId: this.entity.adContentIds[i] });
                !(function (e) {
                    if (e.type === E.END_CONTENT_LOAD) {
                        let t = (0, p.L4)(e.sourceQuestContent, e.adCreativeId),
                            n = null != _.A.questEnrollmentBlockedUntil;
                        if (e.adCreativeType === l.p.QUEST) {
                            let i = e.adCreativeId;
                            (0, h.av)({
                                event: m.HAw.QUEST_CONTENT_LOADED,
                                questId: i,
                                trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                                sourceQuestContent: e.sourceQuestContent,
                                properties: {
                                    triggered_by_status_change: e.triggeredByStatusChange,
                                    metadata_sealed: t ?? null,
                                    traffic_metadata_sealed: (0, p.Gp)(e.sourceQuestContent, i) ?? null,
                                    impression_id: e.impressionId,
                                    is_quest_enrollment_blocked: n,
                                    content_id: e.surfaceId,
                                    content_name: (0, f.jO)(e.surfaceId),
                                    content_position: e.questContentPosition,
                                    row_index: e.questContentRowIndex,
                                },
                            });
                        } else
                            (0, h.Qg)({
                                event: m.HAw.QUEST_CONTENT_LOADED,
                                adContentId: e.adCreativeId,
                                adCreativeType: e.adCreativeType,
                                trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                                sourceQuestContent: e.sourceQuestContent,
                                properties: {
                                    triggered_by_status_change: e.triggeredByStatusChange,
                                    impression_id: e.impressionId,
                                    is_quest_enrollment_blocked: n,
                                    content_id: e.surfaceId,
                                    content_name: (0, f.jO)(e.surfaceId),
                                    content_position: e.questContentPosition,
                                    row_index: e.questContentRowIndex,
                                },
                            });
                    }
                })({
                    type: E.END_CONTENT_LOAD,
                    surfaceId: this.questContent,
                    sourceQuestContent: this.sourceQuestContent,
                    impressionId: this.id,
                    triggeredByStatusChange: this.triggeredByStatusChange,
                    trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                    questContentPosition: this.questContentPosition,
                    questContentRowIndex: this.questContentRowIndex,
                    ...e,
                });
                return;
            }
            if (this.entity.adCreativeType === l.p.QUEST) {
                let n = this.entity.adContentIds[i],
                    s = _.A.getQuest(n);
                (0, C.L)().info(
                    `${s?.config.messages.questName ?? n} Quest became visible at ${(0, f.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, h.av)({
                        ...e,
                        questId: n,
                        event: m.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...t,
                            metadata_sealed: r ?? null,
                            ...this.commonProperties(),
                            traffic_metadata_sealed: (0, p.Gp)(this.sourceQuestContent, s?.id) ?? null,
                        },
                    });
            } else {
                let n = this.entity.adContentIds[i];
                (0, C.L)().info(`${n} ad content became visible at ${(0, f.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, h.Qg)({
                        ...e,
                        adContentId: n,
                        adCreativeType: this.entity.adCreativeType,
                        event: m.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...t, ...this.commonProperties() },
                    });
            }
        }),
            I.A.increment({
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
let F = a.createContext(void 0);
function V(e) {
    let { visible: t, visibleChanged: n, focused: i, reference: r, focusedChanged: o, sourceQuestContent: u } = e,
        h = (0, x.iY)(e),
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
                    (f.current = new G({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType })),
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
        (0, s.jsx)(F.Provider, { value: f, children: e.children(r, f) })
    );
}
