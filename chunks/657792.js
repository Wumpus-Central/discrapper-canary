n.d(e, { R: () => B, Z: () => x });
var i = n(477900),
    s = n(582128),
    a = n(172218),
    o = n(323889),
    d = n(17928),
    r = n(475743),
    u = n(531685),
    h = n(132500),
    l = n(731738),
    C = n(964486),
    c = n(274670),
    m = n(144779),
    p = n(7588),
    T = n(657375),
    I = n(692184),
    y = n(929482),
    g = n(345353),
    E = n(69114),
    _ = n(807393),
    v = n(723702),
    Q = n(396813),
    A = n(859703),
    w = n(104886),
    S = n(710969),
    q = n(851936),
    f = n(561844),
    k = n(590202),
    N = n(910463),
    P = n(971649),
    R = n(823784),
    b = n(653819);
n(23766);
var V = n(652215);
let O = new Set();
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
            adCreativeType: n,
            relatedQuestId: i,
            questContent: s,
            triggeredByStatusChange: a,
            trackGuildAndChannelMetadata: d,
            questContentPosition: r,
            questContentRowIndex: u,
            minViewTimeSeconds: l = 1,
            isQuestEnrollmentBlocked: C,
            onImpression: c,
            sourceQuestContent: m,
        } = t;
        ((this.id = (0, h.A)()),
            (this.questContent = s),
            (this.questContentPosition = r),
            (this.minViewTimeSeconds = l),
            (this.minViewportPercentage = 0.5),
            (this.trackGuildAndChannelMetadata = d),
            (this.triggeredByStatusChange = a),
            (this.questContentRowIndex = u),
            (this.isQuestEnrollmentBlocked = C),
            (this.onImpressionCallback = c),
            (this.sourceQuestContent = m),
            (this.migrateQuestContentLoadedToCaptureAdUserAction = (0, w.E5)(
                w.kI.STEP_1_LOADED,
                "quest_content_impression",
            )),
            (this.migrateQuestContentViewedToCaptureAdUserAction = (0, w.E5)(
                (0, S.xn)(s, n) ? w.kI.STEP_5_VIEWED_IMPRESSION : w.kI.STEP_4_VIEWED_NON_IMPRESSION,
                "quest_content_impression",
            )),
            n === o.p.QUEST
                ? (this.entity = { adContentIds: e, adCreativeType: n })
                : (this.entity = { adContentIds: e, adCreativeType: n, relatedQuestId: i }));
    }
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    trackViewedPlacement = (t) => {
        let e = (0, S.HN)(this.questContent);
        null != e && (0, S.xn)(this.questContent, this.entity.adCreativeType) && O.add(`${t}_${e}`);
    };
    shouldExtendSession = (t) => {
        let e = (0, S.HN)(this.questContent);
        return null != e && !O.has(`${t}_${e}`) && (0, S.xn)(this.questContent, this.entity.adCreativeType);
    };
    maybeRegisterIosAttributionImpression = (t, e) => {
        if (this.iosAttributionRegistered || !(0, p.C$)()) return;
        let n = (0, y.BU)();
        null == n
            ? (0, I.$8)(I.vI.NO_FRAMEWORK, n, this.id)
            : null == e
              ? (0, I.$8)(I.vI.NO_METADATA, n, this.id)
              : (0, p.Oh)(this.sourceQuestContent, t)
                ? ((0, T.RH)({ impressionId: this.id, metadataSealed: e, framework: n }),
                  (this.iosAttributionRegistered = !0))
                : (0, I.$8)(I.vI.NOT_SKAN_ENABLED, n, this.id);
    };
    onMinViewTimeReached = async () => {
        let t = await (0, g.N)((0, k.jO)(this.questContent)),
            e = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            n = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != t && (0, v.isIOS)() ? t.advertisingId : null,
                android_advertising_id: null != t && (0, v.isAndroid)() ? t.advertisingId : null,
                ...(0, E.A)(),
                ...(0, N.X)(this.questContent),
            };
        (this.entity.adContentIds.forEach((i, s) => {
            let a = (0, S.L4)(this.sourceQuestContent, i),
                d = this.shouldExtendSession(i);
            if ((this.trackViewedPlacement(i), this.migrateQuestContentViewedToCaptureAdUserAction)) {
                if (this.entity.adCreativeType === o.p.QUEST) {
                    let t = this.entity.adContentIds[s],
                        e = A.A.getQuest(t);
                    null == e || (0, S.Ic)(e) || (0, Q.zh)(o.p.QUEST, [t]);
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
                (this.entity.adCreativeType === o.p.QUEST
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
                        }),
                    (0, q.L)().info(
                        `${i} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, k.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ));
                return;
            }
            if (this.entity.adCreativeType === o.p.QUEST) {
                let t = this.entity.adContentIds[s],
                    i = A.A.getQuest(t);
                (null == i || (0, S.Ic)(i) || (0, Q.zh)(o.p.QUEST, [t]),
                    (0, q.L)().info(
                        `${i?.config.messages.questName ?? t} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, k.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, f.av)({
                        ...e,
                        shouldExtendSession: d,
                        questId: t,
                        event: V.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...n,
                            ...this.commonProperties(),
                            metadata_sealed: a ?? null,
                            search_session_id: (0, R.tv)()?.uuid ?? null,
                            traffic_metadata_sealed: (0, S.Gp)(this.sourceQuestContent, i?.id) ?? null,
                        },
                    }));
            } else {
                let t = this.entity.adContentIds[s];
                ((0, q.L)().info(
                    `${t} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, k.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, f.Qg)({
                        ...e,
                        shouldExtendSession: d,
                        adContentId: t,
                        relatedQuestId: this.entity.relatedQuestId,
                        adCreativeType: this.entity.adCreativeType,
                        event: V.HAw.QUEST_CONTENT_VIEWED,
                        properties: { ...n, ...this.commonProperties() },
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
                let n = Math.round(Date.now() - t.lastBeatTime),
                    i = {
                        trackGuildAndChannelMetadata: t.trackGuildAndChannelMetadata,
                        sourceQuestContent: t.sourceQuestContent,
                    },
                    s = {
                        is_termination_beat: e,
                        viewed_time_ms: n,
                        triggered_by_status_change: t.triggeredByStatusChange,
                    };
                t.entity.adContentIds.forEach((a, d) => {
                    if (t.entity.adCreativeType === o.p.QUEST) {
                        let a = t.entity.adContentIds[d],
                            o = A.A.getQuest(a);
                        ((0, q.L)().info(
                            `${o?.config.messages.questName ?? a} Quest impression ${e ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: t.id },
                        ),
                            (0, f.av)({
                                ...i,
                                questId: a,
                                event: V.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...s, ...t.commonProperties() },
                            }));
                    } else {
                        let a = t.entity.adContentIds[d];
                        ((0, q.L)().info(
                            `${a} ad content impression ${e ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: t.id },
                        ),
                            (0, f.Qg)({
                                ...i,
                                adContentId: a,
                                relatedQuestId: t.entity.relatedQuestId,
                                adCreativeType: t.entity.adCreativeType,
                                event: V.HAw.QUEST_CONTENT_VIEW_TIME,
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
        ...(0, k.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
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
        (this.entity.adContentIds.forEach((n, i) => {
            let s = (0, S.L4)(this.sourceQuestContent, n),
                a = (0, S.s9)(this.sourceQuestContent, n);
            if (
                (this.maybeRegisterIosAttributionImpression(n, a), this.migrateQuestContentLoadedToCaptureAdUserAction)
            ) {
                let t =
                    this.entity.adCreativeType === o.p.QUEST
                        ? { adCreativeType: this.entity.adCreativeType, adCreativeId: this.entity.adContentIds[i] }
                        : {
                              adCreativeType: this.entity.adCreativeType,
                              adCreativeId: this.entity.adContentIds[i],
                              relatedQuestId: this.entity.relatedQuestId,
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
                let n = this.entity.adContentIds[i],
                    a = A.A.getQuest(n);
                ((0, q.L)().info(
                    `${a?.config.messages.questName ?? n} Quest became visible at ${(0, k.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, f.av)({
                        ...t,
                        questId: n,
                        event: V.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...e,
                            metadata_sealed: s ?? null,
                            ...this.commonProperties(),
                            traffic_metadata_sealed: (0, S.Gp)(this.sourceQuestContent, a?.id) ?? null,
                        },
                    }));
            } else {
                let n = this.entity.adContentIds[i];
                ((0, q.L)().info(`${n} ad content became visible at ${(0, k.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, f.Qg)({
                        ...t,
                        adContentId: n,
                        relatedQuestId: this.entity.relatedQuestId,
                        adCreativeType: this.entity.adCreativeType,
                        event: V.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...e, ...this.commonProperties() },
                    }));
            }
        }),
            _.A.increment({
                name: l.K.QUEST_CONTENT_IMPRESSION,
                tags: [`quest_content:${(0, k.jO)(this.questContent)}`],
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
    let { visible: e, visibleChanged: n, focused: a, reference: r, focusedChanged: u, sourceQuestContent: h } = t,
        l = (0, P.iY)(t),
        c = t.adCreativeType === o.p.QUEST ? void 0 : t.relatedQuestId,
        m = s.useRef(null),
        p = (0, d.bG)([A.A], () => null != A.A.questEnrollmentBlockedUntil, []);
    return (
        (0, C.Ay)(() => () => {
            null != m.current && m.current.stop();
        }),
        s.useEffect(() => {
            let i = a && e,
                s = (n || u || l) && i,
                d = ((n || u) && !i) || l;
            if (((s || d) && null != m.current && m.current.stop(), s)) {
                let e = {
                    isQuestEnrollmentBlocked: p,
                    minViewTimeSeconds: t.minViewTimeSeconds,
                    onImpression: t.onImpression,
                    questContent: t.questContent,
                    questContentPosition: t.questContentPosition,
                    questContentRowIndex: t.questContentRowIndex,
                    sourceQuestContent: h,
                    trackGuildAndChannelMetadata: t.trackGuildAndChannelMetadata,
                    triggeredByStatusChange: l,
                };
                (t.adCreativeType === o.p.QUEST
                    ? (m.current = new M({ ...e, adContentIds: t.adContentIds, adCreativeType: t.adCreativeType }))
                    : (m.current = new M({
                          ...e,
                          adContentIds: t.adContentIds,
                          adCreativeType: t.adCreativeType,
                          relatedQuestId: c,
                      })),
                    m.current.start());
            }
        }, [
            a,
            e,
            u,
            n,
            t.adContentIds,
            t.onImpression,
            t.questContent,
            t.questContentPosition,
            t.questContentRowIndex,
            t.trackGuildAndChannelMetadata,
            l,
            t.minViewTimeSeconds,
            p,
            h,
            t.adCreativeType,
            c,
        ]),
        (0, i.jsx)(b.n.Provider, { value: m, children: t.children(r, m) })
    );
}
let $ = s.memo(function (t) {
    let e,
        n,
        i,
        { focused: h, focusedChanged: l } =
            ((e = (0, d.bG)([u.A], () => u.A.isFocused())),
            (n = (0, r.Ay)(e)),
            (i = e !== n),
            { focused: e, focusedChanged: i }),
        {
            visible: C,
            visibleChanged: c,
            reference: m,
        } = (function (t) {
            let [e, n] = s.useState(!1),
                i = t ?? e,
                o = i !== (0, r.Ay)(i);
            return { visible: i, visibleChanged: o, reference: (0, a.K)((t) => n(t), 0.5) };
        })(t.overrideVisibility),
        { key: p, adContentIds: T } = (0, P.RC)(t),
        I = { ...t, focused: h, focusedChanged: l, visible: C, visibleChanged: c, reference: m };
    return "questOrQuests" in t
        ? (0, s.createElement)(U, { ...I, key: p, adContentIds: T, adCreativeType: o.p.QUEST })
        : (0, s.createElement)(U, { ...I, key: p, adContentIds: T, adCreativeType: t.adCreativeType });
});
function B(t) {
    return (0, i.jsx)($, { ...t });
}
function x(t) {
    return (0, i.jsx)($, { ...t });
}
