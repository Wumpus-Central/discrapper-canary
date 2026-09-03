n.d(t, { n0: () => M, xs: () => k });
var i = n(477900),
    r = n(582128),
    s = n(132500),
    o = n(323889),
    a = n(731738),
    l = n(17928),
    u = n(964486),
    d = n(274670),
    c = n(144779),
    C = n(7588),
    f = n(657375),
    E = n(692184),
    m = n(929482),
    A = n(345353),
    T = n(69114),
    p = n(807393),
    I = n(723702),
    h = n(396813),
    _ = n(859703),
    S = n(104886),
    g = n(710969),
    v = n(851936),
    O = n(561844),
    b = n(590202),
    y = n(910463),
    N = n(971649),
    P = n(823784);
n(23766);
var w = n(652215);
let L = new Set();
class R {
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
    iosAttributionRegistered = !1;
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
            (this.migrateQuestContentLoadedToCaptureAdUserAction = (0, S.E5)(
                S.kI.STEP_1_LOADED,
                "quest_content_impression",
            )),
            (this.migrateQuestContentViewedToCaptureAdUserAction = (0, S.E5)(
                (0, g.xn)(r, n) ? S.kI.STEP_5_VIEWED_IMPRESSION : S.kI.STEP_4_VIEWED_NON_IMPRESSION,
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
        let t = (0, g.HN)(this.questContent);
        null != t && (0, g.xn)(this.questContent, this.entity.adCreativeType) && L.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
        let t = (0, g.HN)(this.questContent);
        return null != t && !L.has(`${e}_${t}`) && (0, g.xn)(this.questContent, this.entity.adCreativeType);
    };
    maybeRegisterIosAttributionImpression = (e, t) => {
        if (this.iosAttributionRegistered || !(0, C.C$)()) return;
        let n = (0, m.BU)();
        null == n
            ? (0, E.$8)(E.vI.NO_FRAMEWORK, n, this.id)
            : null == t
              ? (0, E.$8)(E.vI.NO_METADATA, n, this.id)
              : (0, C.Oh)(this.sourceQuestContent, e)
                ? ((0, f.RH)({ impressionId: this.id, metadataSealed: t, framework: n }),
                  (this.iosAttributionRegistered = !0))
                : (0, E.$8)(E.vI.NOT_SKAN_ENABLED, n, this.id);
    };
    onMinViewTimeReached = async () => {
        let e = await (0, A.N)((0, b.jO)(this.questContent)),
            t = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            n = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != e && (0, I.isIOS)() ? e.advertisingId : null,
                android_advertising_id: null != e && (0, I.isAndroid)() ? e.advertisingId : null,
                ...(0, T.A)(),
                ...(0, y.X)(this.questContent),
            };
        this.entity.adContentIds.forEach((i, r) => {
            let s = (0, g.L4)(this.sourceQuestContent, i),
                a = this.shouldExtendSession(i);
            if ((this.trackViewedPlacement(i), this.migrateQuestContentViewedToCaptureAdUserAction)) {
                if (this.entity.adCreativeType === o.p.QUEST) {
                    let e = this.entity.adContentIds[r],
                        t = _.A.getQuest(e);
                    null == t || (0, g.Ic)(t) || (0, h.zh)(o.p.QUEST, [e]);
                }
                let t = {
                    type: (0, g.xn)(this.questContent, this.entity.adCreativeType)
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
                    (0, v.L)().info(
                        `${i} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, b.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    );
                return;
            }
            if (this.entity.adCreativeType === o.p.QUEST) {
                let e = this.entity.adContentIds[r],
                    i = _.A.getQuest(e);
                null == i || (0, g.Ic)(i) || (0, h.zh)(o.p.QUEST, [e]),
                    (0, v.L)().info(
                        `${i?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, b.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, O.av)({
                        ...t,
                        shouldExtendSession: a,
                        questId: e,
                        event: w.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...n,
                            ...this.commonProperties(),
                            metadata_sealed: s ?? null,
                            search_session_id: (0, P.tv)()?.uuid ?? null,
                            traffic_metadata_sealed: (0, g.Gp)(this.sourceQuestContent, i?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[r];
                (0, v.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, b.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, O.Qg)({
                        ...t,
                        shouldExtendSession: a,
                        adContentId: e,
                        relatedQuestId: this.entity.relatedQuestId,
                        adCreativeType: this.entity.adCreativeType,
                        event: w.HAw.QUEST_CONTENT_VIEWED,
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
                            o = _.A.getQuest(s);
                        (0, v.L)().info(
                            `${o?.config.messages.questName ?? s} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, O.av)({
                                ...i,
                                questId: s,
                                event: w.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties() },
                            });
                    } else {
                        let s = e.entity.adContentIds[a];
                        (0, v.L)().info(
                            `${s} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, O.Qg)({
                                ...i,
                                adContentId: s,
                                relatedQuestId: e.entity.relatedQuestId,
                                adCreativeType: e.entity.adCreativeType,
                                event: w.HAw.QUEST_CONTENT_VIEW_TIME,
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
        ...(0, b.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
    });
    clone = (e) => {
        let { triggeredByStatusChange: t } = e;
        return (
            this.stop(),
            new R({
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
            let r = (0, g.L4)(this.sourceQuestContent, n),
                s = (0, g.s9)(this.sourceQuestContent, n);
            if (
                (this.maybeRegisterIosAttributionImpression(n, s), this.migrateQuestContentLoadedToCaptureAdUserAction)
            ) {
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
                    s = _.A.getQuest(n);
                (0, v.L)().info(
                    `${s?.config.messages.questName ?? n} Quest became visible at ${(0, b.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, O.av)({
                        ...e,
                        questId: n,
                        event: w.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...t,
                            metadata_sealed: r ?? null,
                            ...this.commonProperties(),
                            traffic_metadata_sealed: (0, g.Gp)(this.sourceQuestContent, s?.id) ?? null,
                        },
                    });
            } else {
                let n = this.entity.adContentIds[i];
                (0, v.L)().info(`${n} ad content became visible at ${(0, b.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, O.Qg)({
                        ...e,
                        adContentId: n,
                        relatedQuestId: this.entity.relatedQuestId,
                        adCreativeType: this.entity.adCreativeType,
                        event: w.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...t, ...this.commonProperties() },
                    });
            }
        }),
            p.A.increment({
                name: a.K.QUEST_CONTENT_IMPRESSION,
                tags: [`quest_content:${(0, b.jO)(this.questContent)}`],
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
                (e.isRunning = !1),
                (0, f.bg)(e.id);
        };
    })();
}
let M = r.createContext(void 0);
function k(e) {
    let { visible: t, visibleChanged: n, focused: s, reference: a, focusedChanged: d, sourceQuestContent: c } = e,
        C = (0, N.iY)(e),
        f = e.adCreativeType === o.p.QUEST ? void 0 : e.relatedQuestId,
        E = r.useRef(null),
        m = (0, l.bG)([_.A], () => null != _.A.questEnrollmentBlockedUntil, []);
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
                    ? (E.current = new R({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType }))
                    : (E.current = new R({
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
        (0, i.jsx)(M.Provider, { value: E, children: e.children(a, E) })
    );
}
