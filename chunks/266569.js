"use strict";
n.d(t, { n0: () => D, xs: () => v });
var i = n(627968),
    r = n(64700),
    a = n(132500),
    s = n(323889),
    l = n(731738),
    o = n(17928),
    d = n(964486),
    c = n(274670),
    u = n(144779),
    _ = n(345353),
    E = n(69114),
    A = n(807393),
    h = n(723702),
    I = n(352774),
    f = n(859703),
    p = n(104886),
    T = n(710969),
    m = n(851936),
    g = n(561844),
    S = n(590202),
    N = n(910463),
    C = n(971649),
    O = n(823784);
n(23766);
var R = n(652215);
let L = new Set();
class y {
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
    migrateQuestContentViewedToCaptureAdUserAction;
    constructor(e) {
        const {
            adContentIds: t,
            adCreativeType: n,
            questContent: i,
            triggeredByStatusChange: r,
            trackGuildAndChannelMetadata: l,
            questContentPosition: o,
            questContentRowIndex: d,
            minViewTimeSeconds: c = 1,
            isQuestEnrollmentBlocked: u,
            onImpression: _,
            sourceQuestContent: E,
        } = e;
        (this.id = (0, a.A)()),
            (this.questContent = i),
            (this.questContentPosition = o),
            (this.minViewTimeSeconds = c),
            (this.minViewportPercentage = 0.5),
            (this.trackGuildAndChannelMetadata = l),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = d),
            (this.isQuestEnrollmentBlocked = u),
            (this.onImpressionCallback = _),
            (this.sourceQuestContent = E),
            (this.migrateQuestContentLoadedToCaptureAdUserAction = (0, p.E5)(
                p.kI.STEP_1_LOADED,
                "quest_content_impression",
            )),
            (this.migrateQuestContentViewedToCaptureAdUserAction = (0, p.E5)(
                (0, T.xn)(i) ? p.kI.STEP_5_VIEWED_IMPRESSION : p.kI.STEP_4_VIEWED_NON_IMPRESSION,
                "quest_content_impression",
            )),
            s.p.QUEST,
            (this.entity = { adContentIds: t, adCreativeType: n });
    }
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    trackViewedPlacement = (e) => {
        let t = (0, T.HN)(this.questContent);
        null != t && (0, T.xn)(this.questContent) && L.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
        let t = (0, T.HN)(this.questContent);
        return null != t && !L.has(`${e}_${t}`) && (0, T.xn)(this.questContent);
    };
    onMinViewTimeReached = async () => {
        let e = await (0, _.N)((0, S.jO)(this.questContent)),
            t = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            n = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != e && (0, h.isIOS)() ? e.advertisingId : null,
                android_advertising_id: null != e && (0, h.isAndroid)() ? e.advertisingId : null,
                ...(0, E.A)(),
                ...(0, N.X)(this.questContent),
            };
        this.entity.adContentIds.forEach((i, r) => {
            let a = (0, T.L4)(this.sourceQuestContent, i),
                l = this.shouldExtendSession(i);
            if ((this.trackViewedPlacement(i), this.migrateQuestContentViewedToCaptureAdUserAction)) {
                if (this.entity.adCreativeType === s.p.QUEST) {
                    let e = this.entity.adContentIds[r],
                        t = f.A.getQuest(e);
                    null == t || (0, T.Ic)(t) || (0, I.zh)(s.p.QUEST, [e]);
                }
                let t =
                    (this.entity.adCreativeType === s.p.QUEST,
                    { adCreativeType: this.entity.adCreativeType, adCreativeId: this.entity.adContentIds[r] });
                (0, c.r)({
                    type: (0, T.xn)(this.questContent)
                        ? u.F.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION
                        : u.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                    surfaceId: this.questContent,
                    sourceQuestContent: this.sourceQuestContent,
                    impressionId: this.id,
                    triggeredByStatusChange: this.triggeredByStatusChange,
                    minViewTimeSeconds: this.minViewTimeSeconds,
                    minViewportPercentage: this.minViewportPercentage,
                    isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
                    shouldExtendSession: l,
                    adUser: e,
                    questContentPosition: this.questContentPosition,
                    questContentRowIndex: this.questContentRowIndex,
                    trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                    ...t,
                }),
                    (0, m.L)().info(
                        `${i} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, S.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    );
                return;
            }
            if (this.entity.adCreativeType === s.p.QUEST) {
                let e = this.entity.adContentIds[r],
                    i = f.A.getQuest(e);
                null == i || (0, T.Ic)(i) || (0, I.zh)(s.p.QUEST, [e]),
                    (0, m.L)().info(
                        `${i?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, S.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, g.av)({
                        ...t,
                        shouldExtendSession: l,
                        questId: e,
                        event: R.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...n,
                            ...this.commonProperties(),
                            metadata_sealed: a ?? null,
                            search_session_id: (0, O.tv)()?.uuid ?? null,
                            traffic_metadata_sealed: (0, T.Gp)(this.sourceQuestContent, i?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[r];
                (0, m.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, S.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, g.Qg)({
                        ...t,
                        shouldExtendSession: l,
                        adContentId: e,
                        adCreativeType: this.entity.adCreativeType,
                        event: R.HAw.QUEST_CONTENT_VIEWED,
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
                e.entity.adContentIds.forEach((a, l) => {
                    if (e.entity.adCreativeType === s.p.QUEST) {
                        let a = e.entity.adContentIds[l],
                            s = f.A.getQuest(a);
                        (0, m.L)().info(
                            `${s?.config.messages.questName ?? a} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, g.av)({
                                ...i,
                                questId: a,
                                event: R.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties() },
                            });
                    } else {
                        let a = e.entity.adContentIds[l];
                        (0, m.L)().info(
                            `${a} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, g.Qg)({
                                ...i,
                                adContentId: a,
                                adCreativeType: e.entity.adCreativeType,
                                event: R.HAw.QUEST_CONTENT_VIEW_TIME,
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
        ...(0, S.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
    });
    clone = (e) => {
        let { triggeredByStatusChange: t } = e;
        return (
            this.stop(),
            new y({
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
            let r = (0, T.L4)(this.sourceQuestContent, n);
            if (this.migrateQuestContentLoadedToCaptureAdUserAction) {
                let e =
                    (this.entity.adCreativeType === s.p.QUEST,
                    { adCreativeType: this.entity.adCreativeType, adCreativeId: this.entity.adContentIds[i] });
                (0, c.r)({
                    type: u.F.END_CONTENT_LOAD,
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
            if (this.entity.adCreativeType === s.p.QUEST) {
                let n = this.entity.adContentIds[i],
                    a = f.A.getQuest(n);
                (0, m.L)().info(
                    `${a?.config.messages.questName ?? n} Quest became visible at ${(0, S.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, g.av)({
                        ...e,
                        questId: n,
                        event: R.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...t,
                            metadata_sealed: r ?? null,
                            ...this.commonProperties(),
                            traffic_metadata_sealed: (0, T.Gp)(this.sourceQuestContent, a?.id) ?? null,
                        },
                    });
            } else {
                let n = this.entity.adContentIds[i];
                (0, m.L)().info(`${n} ad content became visible at ${(0, S.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, g.Qg)({
                        ...e,
                        adContentId: n,
                        adCreativeType: this.entity.adCreativeType,
                        event: R.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...t, ...this.commonProperties() },
                    });
            }
        }),
            A.A.increment({
                name: l.K.QUEST_CONTENT_IMPRESSION,
                tags: [`quest_content:${(0, S.jO)(this.questContent)}`],
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
let D = r.createContext(void 0);
function v(e) {
    let { visible: t, visibleChanged: n, focused: a, reference: l, focusedChanged: c, sourceQuestContent: u } = e,
        _ = (0, C.iY)(e),
        E = r.useRef(null),
        A = (0, o.bG)([f.A], () => null != f.A.questEnrollmentBlockedUntil, []);
    return (
        (0, d.Ay)(() => () => {
            null != E.current && E.current.stop();
        }),
        r.useEffect(() => {
            let i = a && t,
                r = (n || c || _) && i,
                l = ((n || c) && !i) || _;
            if (((r || l) && null != E.current && E.current.stop(), r)) {
                let t = {
                    isQuestEnrollmentBlocked: A,
                    minViewTimeSeconds: e.minViewTimeSeconds,
                    onImpression: e.onImpression,
                    questContent: e.questContent,
                    questContentPosition: e.questContentPosition,
                    questContentRowIndex: e.questContentRowIndex,
                    sourceQuestContent: u,
                    trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                    triggeredByStatusChange: _,
                };
                e.adCreativeType,
                    s.p.QUEST,
                    (E.current = new y({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType })),
                    E.current.start();
            }
        }, [
            a,
            t,
            c,
            n,
            e.adContentIds,
            e.onImpression,
            e.questContent,
            e.questContentPosition,
            e.questContentRowIndex,
            e.trackGuildAndChannelMetadata,
            _,
            e.minViewTimeSeconds,
            A,
            u,
            e.adCreativeType,
        ]),
        (0, i.jsx)(D.Provider, { value: E, children: e.children(l, E) })
    );
}
