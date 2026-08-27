n.d(t, { n0: () => L, xs: () => w });
var i = n(477900),
    r = n(582128),
    s = n(132500),
    o = n(323889),
    a = n(731738),
    l = n(17928),
    u = n(964486),
    d = n(274670),
    c = n(144779),
    C = n(345353),
    f = n(69114),
    E = n(807393),
    m = n(723702),
    p = n(396813),
    T = n(859703),
    A = n(104886),
    h = n(710969),
    I = n(851936),
    S = n(561844),
    _ = n(590202),
    g = n(910463),
    v = n(971649),
    O = n(823784);
n(23766);
var b = n(652215);
let P = new Set();
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
            relatedQuestId: i,
            questContent: r,
            triggeredByStatusChange: a,
            trackGuildAndChannelMetadata: l,
            questContentPosition: u,
            questContentRowIndex: d,
            minViewTimeSeconds: c = 1,
            isQuestEnrollmentBlocked: C,
            onImpression: f,
            sourceQuestContent: E,
        } = e;
        (this.id = (0, s.A)()),
            (this.questContent = r),
            (this.questContentPosition = u),
            (this.minViewTimeSeconds = c),
            (this.minViewportPercentage = 0.5),
            (this.trackGuildAndChannelMetadata = l),
            (this.triggeredByStatusChange = a),
            (this.questContentRowIndex = d),
            (this.isQuestEnrollmentBlocked = C),
            (this.onImpressionCallback = f),
            (this.sourceQuestContent = E),
            (this.migrateQuestContentLoadedToCaptureAdUserAction = (0, A.E5)(
                A.kI.STEP_1_LOADED,
                "quest_content_impression",
            )),
            (this.migrateQuestContentViewedToCaptureAdUserAction = (0, A.E5)(
                (0, h.xn)(r) ? A.kI.STEP_5_VIEWED_IMPRESSION : A.kI.STEP_4_VIEWED_NON_IMPRESSION,
                "quest_content_impression",
            )),
            n === o.p.QUEST
                ? (this.entity = { adContentIds: t, adCreativeType: n })
                : (this.entity = { adContentIds: t, adCreativeType: n, relatedQuestId: i });
    }
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    trackViewedPlacement = (e) => {
        let t = (0, h.HN)(this.questContent);
        null != t && (0, h.xn)(this.questContent) && P.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
        let t = (0, h.HN)(this.questContent);
        return null != t && !P.has(`${e}_${t}`) && (0, h.xn)(this.questContent);
    };
    onMinViewTimeReached = async () => {
        let e = await (0, C.N)((0, _.jO)(this.questContent)),
            t = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            n = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != e && (0, m.isIOS)() ? e.advertisingId : null,
                android_advertising_id: null != e && (0, m.isAndroid)() ? e.advertisingId : null,
                ...(0, f.A)(),
                ...(0, g.X)(this.questContent),
            };
        this.entity.adContentIds.forEach((i, r) => {
            let s = (0, h.L4)(this.sourceQuestContent, i),
                a = this.shouldExtendSession(i);
            if ((this.trackViewedPlacement(i), this.migrateQuestContentViewedToCaptureAdUserAction)) {
                if (this.entity.adCreativeType === o.p.QUEST) {
                    let e = this.entity.adContentIds[r],
                        t = T.A.getQuest(e);
                    null == t || (0, h.Ic)(t) || (0, p.zh)(o.p.QUEST, [e]);
                }
                let t = {
                    type: (0, h.xn)(this.questContent)
                        ? c.F.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION
                        : c.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                    surfaceId: this.questContent,
                    sourceQuestContent: this.sourceQuestContent,
                    impressionId: this.id,
                    triggeredByStatusChange: this.triggeredByStatusChange,
                    minViewTimeSeconds: this.minViewTimeSeconds,
                    minViewportPercentage: this.minViewportPercentage,
                    isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
                    shouldExtendSession: a,
                    adUser: e,
                    questContentPosition: this.questContentPosition,
                    questContentRowIndex: this.questContentRowIndex,
                    trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                };
                this.entity.adCreativeType === o.p.QUEST
                    ? (0, d.r)({
                          ...t,
                          adCreativeType: this.entity.adCreativeType,
                          adCreativeId: this.entity.adContentIds[r],
                      })
                    : null != this.entity.relatedQuestId
                      ? (0, d.r)({
                            ...t,
                            adCreativeType: this.entity.adCreativeType,
                            adCreativeId: this.entity.adContentIds[r],
                            relatedQuestId: this.entity.relatedQuestId,
                        })
                      : (0, d.r)({
                            ...t,
                            adCreativeType: this.entity.adCreativeType,
                            adCreativeId: this.entity.adContentIds[r],
                        }),
                    (0, I.L)().info(
                        `${i} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, _.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    );
                return;
            }
            if (this.entity.adCreativeType === o.p.QUEST) {
                let e = this.entity.adContentIds[r],
                    i = T.A.getQuest(e);
                null == i || (0, h.Ic)(i) || (0, p.zh)(o.p.QUEST, [e]),
                    (0, I.L)().info(
                        `${i?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, _.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, S.av)({
                        ...t,
                        shouldExtendSession: a,
                        questId: e,
                        event: b.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...n,
                            ...this.commonProperties(),
                            metadata_sealed: s ?? null,
                            search_session_id: (0, O.tv)()?.uuid ?? null,
                            traffic_metadata_sealed: (0, h.Gp)(this.sourceQuestContent, i?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[r];
                (0, I.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, _.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, S.Qg)({
                        ...t,
                        shouldExtendSession: a,
                        adContentId: e,
                        relatedQuestId: this.entity.relatedQuestId,
                        adCreativeType: this.entity.adCreativeType,
                        event: b.HAw.QUEST_CONTENT_VIEWED,
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
                    if (e.entity.adCreativeType === o.p.QUEST) {
                        let s = e.entity.adContentIds[a],
                            o = T.A.getQuest(s);
                        (0, I.L)().info(
                            `${o?.config.messages.questName ?? s} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, S.av)({
                                ...i,
                                questId: s,
                                event: b.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties() },
                            });
                    } else {
                        let s = e.entity.adContentIds[a];
                        (0, I.L)().info(
                            `${s} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, S.Qg)({
                                ...i,
                                adContentId: s,
                                relatedQuestId: e.entity.relatedQuestId,
                                adCreativeType: e.entity.adCreativeType,
                                event: b.HAw.QUEST_CONTENT_VIEW_TIME,
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
        ...(0, _.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
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
            let r = (0, h.L4)(this.sourceQuestContent, n);
            if (this.migrateQuestContentLoadedToCaptureAdUserAction) {
                let e =
                    this.entity.adCreativeType === o.p.QUEST
                        ? { adCreativeType: this.entity.adCreativeType, adCreativeId: this.entity.adContentIds[i] }
                        : {
                              adCreativeType: this.entity.adCreativeType,
                              adCreativeId: this.entity.adContentIds[i],
                              relatedQuestId: this.entity.relatedQuestId,
                          };
                (0, d.r)({
                    type: c.F.END_CONTENT_LOAD,
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
            if (this.entity.adCreativeType === o.p.QUEST) {
                let n = this.entity.adContentIds[i],
                    s = T.A.getQuest(n);
                (0, I.L)().info(
                    `${s?.config.messages.questName ?? n} Quest became visible at ${(0, _.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, S.av)({
                        ...e,
                        questId: n,
                        event: b.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...t,
                            metadata_sealed: r ?? null,
                            ...this.commonProperties(),
                            traffic_metadata_sealed: (0, h.Gp)(this.sourceQuestContent, s?.id) ?? null,
                        },
                    });
            } else {
                let n = this.entity.adContentIds[i];
                (0, I.L)().info(`${n} ad content became visible at ${(0, _.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, S.Qg)({
                        ...e,
                        adContentId: n,
                        relatedQuestId: this.entity.relatedQuestId,
                        adCreativeType: this.entity.adCreativeType,
                        event: b.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...t, ...this.commonProperties() },
                    });
            }
        }),
            E.A.increment({
                name: a.K.QUEST_CONTENT_IMPRESSION,
                tags: [`quest_content:${(0, _.jO)(this.questContent)}`],
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
let L = r.createContext(void 0);
function w(e) {
    let { visible: t, visibleChanged: n, focused: s, reference: a, focusedChanged: d, sourceQuestContent: c } = e,
        C = (0, v.iY)(e),
        f = e.adCreativeType === o.p.QUEST ? void 0 : e.relatedQuestId,
        E = r.useRef(null),
        m = (0, l.bG)([T.A], () => null != T.A.questEnrollmentBlockedUntil, []);
    return (
        (0, u.Ay)(() => () => {
            null != E.current && E.current.stop();
        }),
        r.useEffect(() => {
            let i = s && t,
                r = (n || d || C) && i,
                a = ((n || d) && !i) || C;
            if (((r || a) && null != E.current && E.current.stop(), r)) {
                let t = {
                    isQuestEnrollmentBlocked: m,
                    minViewTimeSeconds: e.minViewTimeSeconds,
                    onImpression: e.onImpression,
                    questContent: e.questContent,
                    questContentPosition: e.questContentPosition,
                    questContentRowIndex: e.questContentRowIndex,
                    sourceQuestContent: c,
                    trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                    triggeredByStatusChange: C,
                };
                e.adCreativeType === o.p.QUEST
                    ? (E.current = new y({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType }))
                    : (E.current = new y({
                          ...t,
                          adContentIds: e.adContentIds,
                          adCreativeType: e.adCreativeType,
                          relatedQuestId: f,
                      })),
                    E.current.start();
            }
        }, [
            s,
            t,
            d,
            n,
            e.adContentIds,
            e.onImpression,
            e.questContent,
            e.questContentPosition,
            e.questContentRowIndex,
            e.trackGuildAndChannelMetadata,
            C,
            e.minViewTimeSeconds,
            m,
            c,
            e.adCreativeType,
            f,
        ]),
        (0, i.jsx)(L.Provider, { value: E, children: e.children(a, E) })
    );
}
