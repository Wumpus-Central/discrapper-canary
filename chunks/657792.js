i.d(e, { R: () => $, Z: () => L });
var n = i(477900),
    s = i(582128),
    a = i(172218),
    o = i(323889),
    d = i(17928),
    r = i(475743),
    u = i(531685),
    l = i(132500),
    h = i(731738),
    C = i(964486),
    c = i(274670),
    m = i(144779),
    p = i(7588),
    T = i(657375),
    I = i(692184),
    y = i(929482),
    E = i(345353),
    g = i(69114),
    _ = i(807393),
    v = i(723702),
    Q = i(396813),
    A = i(859703),
    w = i(104886),
    S = i(710969),
    q = i(977416),
    f = i(851936),
    k = i(561844),
    P = i(590202),
    N = i(910463),
    R = i(971649),
    b = i(823784),
    V = i(653819);
i(23766);
var O = i(652215);
let D = new Set();
class M {
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
    constructor(t) {
        const {
            adContentIds: e,
            adCreativeType: i,
            relatedQuestId: n,
            noFillDecision: s,
            questContent: a,
            triggeredByStatusChange: d,
            trackGuildAndChannelMetadata: r,
            questContentPosition: u,
            questContentRowIndex: h,
            minViewTimeSeconds: C = 1,
            isQuestEnrollmentBlocked: c,
            onImpression: m,
            sourceQuestContent: p,
        } = t;
        ((this.id = (0, l.A)()),
            (this.questContent = a),
            (this.questContentPosition = u),
            (this.minViewTimeSeconds = C),
            (this.minViewportPercentage = 0.5),
            (this.trackGuildAndChannelMetadata = r),
            (this.triggeredByStatusChange = d),
            (this.questContentRowIndex = h),
            (this.isQuestEnrollmentBlocked = c),
            (this.onImpressionCallback = m),
            (this.sourceQuestContent = p),
            (this.migrateQuestContentLoadedToCaptureAdUserAction = (0, w.E5)(
                w.kI.STEP_1_LOADED,
                "quest_content_impression",
            )),
            (this.migrateQuestContentViewedToCaptureAdUserAction = (0, w.E5)(
                (0, S.xn)(a, i) ? w.kI.STEP_5_VIEWED_IMPRESSION : w.kI.STEP_4_VIEWED_NON_IMPRESSION,
                "quest_content_impression",
            )),
            i === o.p.QUEST
                ? (this.entity = { adContentIds: e, adCreativeType: i })
                : (this.entity = { adContentIds: e, adCreativeType: i, relatedQuestId: n, noFillDecision: s }));
    }
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    trackViewedPlacement = (t) => {
        let e = (0, S.HN)(this.questContent);
        null != e && (0, S.xn)(this.questContent, this.entity.adCreativeType) && D.add(`${t}_${e}`);
    };
    shouldExtendSession = (t) => {
        let e = (0, S.HN)(this.questContent);
        return null != e && !D.has(`${t}_${e}`) && (0, S.xn)(this.questContent, this.entity.adCreativeType);
    };
    maybeRegisterIosAttributionImpression = (t, e) => {
        if (this.iosAttributionRegistered || !(0, p.C$)()) return;
        let i = (0, y.BU)();
        null == i
            ? (0, I.$8)(I.vI.NO_FRAMEWORK, i, this.id)
            : null == e
              ? (0, I.$8)(I.vI.NO_METADATA, i, this.id)
              : (0, p.Oh)(this.sourceQuestContent, t)
                ? ((0, T.RH)({ impressionId: this.id, metadataSealed: e, framework: i }),
                  (this.iosAttributionRegistered = !0))
                : (0, I.$8)(I.vI.NOT_SKAN_ENABLED, i, this.id);
    };
    onMinViewTimeReached = async () => {
        let t = await (0, E.N)((0, P.jO)(this.questContent)),
            e = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            i = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != t && (0, v.isIOS)() ? t.advertisingId : null,
                android_advertising_id: null != t && (0, v.isAndroid)() ? t.advertisingId : null,
                ...(0, g.A)(),
                ...(0, N.X)(this.questContent),
            };
        (this.entity.adContentIds.forEach((n, s) => {
            let a = (0, S.L4)(this.sourceQuestContent, n),
                d = this.shouldExtendSession(n);
            if ((this.trackViewedPlacement(n), this.migrateQuestContentViewedToCaptureAdUserAction)) {
                if (this.entity.adCreativeType === o.p.QUEST) {
                    let t = this.entity.adContentIds[s],
                        e = A.A.getQuest(t);
                    null == e || (0, q.Ic)(e) || (0, Q.zh)(o.p.QUEST, [t]);
                }
                let e = {
                    type: (0, S.xn)(this.questContent, this.entity.adCreativeType)
                        ? m.F.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION
                        : m.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                    surfaceId: this.questContent,
                    sourceQuestContent: this.sourceQuestContent,
                    impressionId: this.id,
                    triggeredByStatusChange: this.triggeredByStatusChange,
                    minViewTimeSeconds: this.minViewTimeSeconds,
                    minViewportPercentage: this.minViewportPercentage,
                    isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
                    shouldExtendSession: d,
                    adUser: t,
                    questContentPosition: this.questContentPosition,
                    questContentRowIndex: this.questContentRowIndex,
                    trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                };
                (this.entity.adCreativeType === o.p.QUEST || this.entity.adCreativeType === o.p.PLAYABLE
                    ? (0, c.r)({
                          ...e,
                          adCreativeType: this.entity.adCreativeType,
                          adCreativeId: this.entity.adContentIds[s],
                      })
                    : null != this.entity.relatedQuestId
                      ? (0, c.r)({
                            ...e,
                            adCreativeType: this.entity.adCreativeType,
                            adCreativeId: this.entity.adContentIds[s],
                            relatedQuestId: this.entity.relatedQuestId,
                        })
                      : (0, c.r)({
                            ...e,
                            adCreativeType: this.entity.adCreativeType,
                            adCreativeId: this.entity.adContentIds[s],
                            ...(null != this.entity.noFillDecision
                                ? { noFillDecision: this.entity.noFillDecision }
                                : {}),
                        }),
                    (0, f.L)().info(
                        `${n} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, P.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ));
                return;
            }
            if (this.entity.adCreativeType === o.p.QUEST) {
                let t = this.entity.adContentIds[s],
                    n = A.A.getQuest(t);
                (null == n || (0, q.Ic)(n) || (0, Q.zh)(o.p.QUEST, [t]),
                    (0, f.L)().info(
                        `${n?.config.messages.questName ?? t} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, P.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, k.av)({
                        ...e,
                        shouldExtendSession: d,
                        questId: t,
                        event: O.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...i,
                            ...this.commonProperties(),
                            metadata_sealed: a ?? null,
                            search_session_id: (0, b.tv)()?.uuid ?? null,
                            traffic_metadata_sealed: (0, S.Gp)(this.sourceQuestContent, n?.id) ?? null,
                        },
                    }));
            } else {
                let t = this.entity.adContentIds[s];
                ((0, f.L)().info(
                    `${t} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, P.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, k.Qg)({
                        ...e,
                        shouldExtendSession: d,
                        adContentId: t,
                        relatedQuestId: this.entity.relatedQuestId,
                        noFillDecision: this.entity.noFillDecision,
                        adCreativeType: this.entity.adCreativeType,
                        event: O.HAw.QUEST_CONTENT_VIEWED,
                        properties: { ...i, ...this.commonProperties() },
                    }));
            }
        }),
            this.onImpressionCallback?.());
    };
    beat = (() => {
        var t = this;
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (null != t.lastBeatTime) {
                let i = Math.round(Date.now() - t.lastBeatTime),
                    n = {
                        trackGuildAndChannelMetadata: t.trackGuildAndChannelMetadata,
                        sourceQuestContent: t.sourceQuestContent,
                    },
                    s = {
                        is_termination_beat: e,
                        viewed_time_ms: i,
                        triggered_by_status_change: t.triggeredByStatusChange,
                    };
                t.entity.adContentIds.forEach((a, d) => {
                    if (t.entity.adCreativeType === o.p.QUEST) {
                        let a = t.entity.adContentIds[d],
                            o = A.A.getQuest(a);
                        ((0, f.L)().info(
                            `${o?.config.messages.questName ?? a} Quest impression ${e ? "terminal " : ""}heartbeat: ${i}ms since last heartbeat`,
                            { impressionId: t.id },
                        ),
                            (0, k.av)({
                                ...n,
                                questId: a,
                                event: O.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...s, ...t.commonProperties() },
                            }));
                    } else {
                        let a = t.entity.adContentIds[d];
                        ((0, f.L)().info(
                            `${a} ad content impression ${e ? "terminal " : ""}heartbeat: ${i}ms since last heartbeat`,
                            { impressionId: t.id },
                        ),
                            (0, k.Qg)({
                                ...n,
                                adContentId: a,
                                relatedQuestId: t.entity.relatedQuestId,
                                noFillDecision: t.entity.noFillDecision,
                                adCreativeType: t.entity.adCreativeType,
                                event: O.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...s, ...t.commonProperties() },
                            }));
                    }
                });
            }
            t.lastBeatTime = Date.now();
        };
    })();
    commonProperties = () => ({
        impression_id: this.id,
        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
        ...(0, P.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
    });
    clone = (t) => {
        let { triggeredByStatusChange: e } = t;
        return (
            this.stop(),
            new M({
                questContent: this.questContent,
                questContentRowIndex: this.questContentRowIndex,
                questContentPosition: this.questContentPosition,
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                triggeredByStatusChange: e,
                isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
                onImpression: this.onImpressionCallback,
                sourceQuestContent: this.sourceQuestContent,
                ...this.entity,
            })
        );
    };
    start = () => {
        (this.stop(!1),
            (this.lastBeatTime = Date.now()),
            (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 6e4)),
            (this.minViewTimeReachedTimeoutId = window.setTimeout(
                this.onMinViewTimeReached,
                1e3 * this.minViewTimeSeconds,
            )));
        let t = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            e = { triggered_by_status_change: this.triggeredByStatusChange };
        (this.entity.adContentIds.forEach((i, n) => {
            let s = (0, S.L4)(this.sourceQuestContent, i),
                a = (0, S.s9)(this.sourceQuestContent, i);
            if (
                (this.maybeRegisterIosAttributionImpression(i, a), this.migrateQuestContentLoadedToCaptureAdUserAction)
            ) {
                let t =
                    this.entity.adCreativeType === o.p.QUEST
                        ? { adCreativeType: this.entity.adCreativeType, adCreativeId: this.entity.adContentIds[n] }
                        : {
                              adCreativeType: this.entity.adCreativeType,
                              adCreativeId: this.entity.adContentIds[n],
                              relatedQuestId: this.entity.relatedQuestId,
                              noFillDecision: this.entity.noFillDecision,
                          };
                (0, c.r)({
                    type: m.F.END_CONTENT_LOAD,
                    surfaceId: this.questContent,
                    sourceQuestContent: this.sourceQuestContent,
                    impressionId: this.id,
                    triggeredByStatusChange: this.triggeredByStatusChange,
                    trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                    questContentPosition: this.questContentPosition,
                    questContentRowIndex: this.questContentRowIndex,
                    ...t,
                });
                return;
            }
            if (this.entity.adCreativeType === o.p.QUEST) {
                let i = this.entity.adContentIds[n],
                    a = A.A.getQuest(i);
                ((0, f.L)().info(
                    `${a?.config.messages.questName ?? i} Quest became visible at ${(0, P.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, k.av)({
                        ...t,
                        questId: i,
                        event: O.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...e,
                            metadata_sealed: s ?? null,
                            ...this.commonProperties(),
                            traffic_metadata_sealed: (0, S.Gp)(this.sourceQuestContent, a?.id) ?? null,
                        },
                    }));
            } else {
                let i = this.entity.adContentIds[n];
                ((0, f.L)().info(`${i} ad content became visible at ${(0, P.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, k.Qg)({
                        ...t,
                        adContentId: i,
                        relatedQuestId: this.entity.relatedQuestId,
                        noFillDecision: this.entity.noFillDecision,
                        adCreativeType: this.entity.adCreativeType,
                        event: O.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...e, ...this.commonProperties() },
                    }));
            }
        }),
            _.A.increment({
                name: h.K.QUEST_CONTENT_IMPRESSION,
                tags: [`quest_content:${(0, P.jO)(this.questContent)}`],
            }),
            (this.isRunning = !0));
    };
    stop = (() => {
        var t = this;
        return function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            (e && t.beat(!0),
                (t.lastBeatTime = void 0),
                clearInterval(t.heartbeatTimeoutId),
                clearTimeout(t.minViewTimeReachedTimeoutId),
                (t.isRunning = !1),
                (0, T.bg)(t.id));
        };
    })();
}
function U(t) {
    let { visible: e, visibleChanged: i, focused: a, reference: r, focusedChanged: u, sourceQuestContent: l } = t,
        h = (0, R.iY)(t),
        c = t.adCreativeType === o.p.QUEST ? void 0 : t.relatedQuestId,
        m = t.adCreativeType === o.p.QUEST ? void 0 : t.noFillDecision,
        p = s.useRef(null),
        T = (0, d.bG)([A.A], () => null != A.A.questEnrollmentBlockedUntil, []);
    return (
        (0, C.Ay)(() => () => {
            null != p.current && p.current.stop();
        }),
        s.useEffect(() => {
            let n = a && e,
                s = (i || u || h) && n,
                d = ((i || u) && !n) || h;
            if (((s || d) && null != p.current && p.current.stop(), s)) {
                let e = {
                    isQuestEnrollmentBlocked: T,
                    minViewTimeSeconds: t.minViewTimeSeconds,
                    onImpression: t.onImpression,
                    questContent: t.questContent,
                    questContentPosition: t.questContentPosition,
                    questContentRowIndex: t.questContentRowIndex,
                    sourceQuestContent: l,
                    trackGuildAndChannelMetadata: t.trackGuildAndChannelMetadata,
                    triggeredByStatusChange: h,
                };
                (t.adCreativeType === o.p.QUEST
                    ? (p.current = new M({ ...e, adContentIds: t.adContentIds, adCreativeType: t.adCreativeType }))
                    : (p.current = new M({
                          ...e,
                          adContentIds: t.adContentIds,
                          adCreativeType: t.adCreativeType,
                          relatedQuestId: c,
                          noFillDecision: m,
                      })),
                    p.current.start());
            }
        }, [
            a,
            e,
            u,
            i,
            t.adContentIds,
            t.onImpression,
            t.questContent,
            t.questContentPosition,
            t.questContentRowIndex,
            t.trackGuildAndChannelMetadata,
            h,
            t.minViewTimeSeconds,
            T,
            l,
            t.adCreativeType,
            c,
            m,
        ]),
        (0, n.jsx)(V.n.Provider, { value: p, children: t.children(r, p) })
    );
}
let B = s.memo(function (t) {
    let e,
        i,
        n,
        { focused: l, focusedChanged: h } =
            ((e = (0, d.bG)([u.A], () => u.A.isFocused())),
            (i = (0, r.Ay)(e)),
            (n = e !== i),
            { focused: e, focusedChanged: n }),
        {
            visible: C,
            visibleChanged: c,
            reference: m,
        } = (function (t) {
            let [e, i] = s.useState(!1),
                n = t ?? e,
                o = n !== (0, r.Ay)(n);
            return { visible: n, visibleChanged: o, reference: (0, a.K)((t) => i(t), 0.5) };
        })(t.overrideVisibility),
        { key: p, adContentIds: T } = (0, R.RC)(t),
        I = { ...t, focused: l, focusedChanged: h, visible: C, visibleChanged: c, reference: m };
    return "questOrQuests" in t
        ? (0, s.createElement)(U, { ...I, key: p, adContentIds: T, adCreativeType: o.p.QUEST })
        : (0, s.createElement)(U, { ...I, key: p, adContentIds: T, adCreativeType: t.adCreativeType });
});
function $(t) {
    return (0, n.jsx)(B, { ...t });
}
function L(t) {
    return (0, n.jsx)(B, { ...t });
}
