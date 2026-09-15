n.d(t, { n0: () => Q, xs: () => k });
var i = n(477900),
    r = n(582128),
    s = n(132500),
    o = n(323889),
    u = n(731738),
    a = n(17928),
    l = n(964486),
    d = n(274670),
    c = n(144779),
    C = n(7588),
    f = n(657375),
    A = n(692184),
    E = n(929482),
    p = n(345353),
    I = n(69114),
    T = n(807393),
    m = n(723702),
    h = n(396813),
    _ = n(859703),
    g = n(104886),
    S = n(710969),
    O = n(851936),
    v = n(561844),
    N = n(590202),
    y = n(910463),
    P = n(971649),
    w = n(823784);
n(23766);
var b = n(652215);
let R = new Set();
class L {
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
            triggeredByStatusChange: u,
            trackGuildAndChannelMetadata: a,
            questContentPosition: l,
            questContentRowIndex: d,
            minViewTimeSeconds: c = 1,
            isQuestEnrollmentBlocked: C,
            onImpression: f,
            sourceQuestContent: A,
        } = e;
        ((this.id = (0, s.A)()),
            (this.questContent = r),
            (this.questContentPosition = l),
            (this.minViewTimeSeconds = c),
            (this.minViewportPercentage = 0.5),
            (this.trackGuildAndChannelMetadata = a),
            (this.triggeredByStatusChange = u),
            (this.questContentRowIndex = d),
            (this.isQuestEnrollmentBlocked = C),
            (this.onImpressionCallback = f),
            (this.sourceQuestContent = A),
            (this.migrateQuestContentLoadedToCaptureAdUserAction = (0, g.E5)(
                g.kI.STEP_1_LOADED,
                "quest_content_impression",
            )),
            (this.migrateQuestContentViewedToCaptureAdUserAction = (0, g.E5)(
                (0, S.xn)(r, n) ? g.kI.STEP_5_VIEWED_IMPRESSION : g.kI.STEP_4_VIEWED_NON_IMPRESSION,
                "quest_content_impression",
            )),
            n === o.p.QUEST
                ? (this.entity = { adContentIds: t, adCreativeType: n })
                : (this.entity = { adContentIds: t, adCreativeType: n, relatedQuestId: i }));
    }
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    trackViewedPlacement = (e) => {
        let t = (0, S.HN)(this.questContent);
        null != t && (0, S.xn)(this.questContent, this.entity.adCreativeType) && R.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
        let t = (0, S.HN)(this.questContent);
        return null != t && !R.has(`${e}_${t}`) && (0, S.xn)(this.questContent, this.entity.adCreativeType);
    };
    maybeRegisterIosAttributionImpression = (e, t) => {
        if (this.iosAttributionRegistered || !(0, C.C$)()) return;
        let n = (0, E.BU)();
        null == n
            ? (0, A.$8)(A.vI.NO_FRAMEWORK, n, this.id)
            : null == t
              ? (0, A.$8)(A.vI.NO_METADATA, n, this.id)
              : (0, C.Oh)(this.sourceQuestContent, e)
                ? ((0, f.RH)({ impressionId: this.id, metadataSealed: t, framework: n }),
                  (this.iosAttributionRegistered = !0))
                : (0, A.$8)(A.vI.NOT_SKAN_ENABLED, n, this.id);
    };
    onMinViewTimeReached = async () => {
        let e = await (0, p.N)((0, N.jO)(this.questContent)),
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
                ...(0, I.A)(),
                ...(0, y.X)(this.questContent),
            };
        (this.entity.adContentIds.forEach((i, r) => {
            let s = (0, S.L4)(this.sourceQuestContent, i),
                u = this.shouldExtendSession(i);
            if ((this.trackViewedPlacement(i), this.migrateQuestContentViewedToCaptureAdUserAction)) {
                if (this.entity.adCreativeType === o.p.QUEST) {
                    let e = this.entity.adContentIds[r],
                        t = _.A.getQuest(e);
                    null == t || (0, S.Ic)(t) || (0, h.zh)(o.p.QUEST, [e]);
                }
                let t = {
                    type: (0, S.xn)(this.questContent, this.entity.adCreativeType)
                        ? c.F.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION
                        : c.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                    surfaceId: this.questContent,
                    sourceQuestContent: this.sourceQuestContent,
                    impressionId: this.id,
                    triggeredByStatusChange: this.triggeredByStatusChange,
                    minViewTimeSeconds: this.minViewTimeSeconds,
                    minViewportPercentage: this.minViewportPercentage,
                    isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
                    shouldExtendSession: u,
                    adUser: e,
                    questContentPosition: this.questContentPosition,
                    questContentRowIndex: this.questContentRowIndex,
                    trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                };
                (this.entity.adCreativeType === o.p.QUEST
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
                    (0, O.L)().info(
                        `${i} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, N.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ));
                return;
            }
            if (this.entity.adCreativeType === o.p.QUEST) {
                let e = this.entity.adContentIds[r],
                    i = _.A.getQuest(e);
                (null == i || (0, S.Ic)(i) || (0, h.zh)(o.p.QUEST, [e]),
                    (0, O.L)().info(
                        `${i?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, N.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, v.av)({
                        ...t,
                        shouldExtendSession: u,
                        questId: e,
                        event: b.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...n,
                            ...this.commonProperties(),
                            metadata_sealed: s ?? null,
                            search_session_id: (0, w.tv)()?.uuid ?? null,
                            traffic_metadata_sealed: (0, S.Gp)(this.sourceQuestContent, i?.id) ?? null,
                        },
                    }));
            } else {
                let e = this.entity.adContentIds[r];
                ((0, O.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, N.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, v.Qg)({
                        ...t,
                        shouldExtendSession: u,
                        adContentId: e,
                        relatedQuestId: this.entity.relatedQuestId,
                        adCreativeType: this.entity.adCreativeType,
                        event: b.HAw.QUEST_CONTENT_VIEWED,
                        properties: { ...n, ...this.commonProperties() },
                    }));
            }
        }),
            this.onImpressionCallback?.());
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
                e.entity.adContentIds.forEach((s, u) => {
                    if (e.entity.adCreativeType === o.p.QUEST) {
                        let s = e.entity.adContentIds[u],
                            o = _.A.getQuest(s);
                        ((0, O.L)().info(
                            `${o?.config.messages.questName ?? s} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, v.av)({
                                ...i,
                                questId: s,
                                event: b.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties() },
                            }));
                    } else {
                        let s = e.entity.adContentIds[u];
                        ((0, O.L)().info(
                            `${s} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, v.Qg)({
                                ...i,
                                adContentId: s,
                                relatedQuestId: e.entity.relatedQuestId,
                                adCreativeType: e.entity.adCreativeType,
                                event: b.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties() },
                            }));
                    }
                });
            }
            e.lastBeatTime = Date.now();
        };
    })();
    commonProperties = () => ({
        impression_id: this.id,
        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
        ...(0, N.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
    });
    clone = (e) => {
        let { triggeredByStatusChange: t } = e;
        return (
            this.stop(),
            new L({
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
        (this.stop(!1),
            (this.lastBeatTime = Date.now()),
            (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 6e4)),
            (this.minViewTimeReachedTimeoutId = window.setTimeout(
                this.onMinViewTimeReached,
                1e3 * this.minViewTimeSeconds,
            )));
        let e = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            t = { triggered_by_status_change: this.triggeredByStatusChange };
        (this.entity.adContentIds.forEach((n, i) => {
            let r = (0, S.L4)(this.sourceQuestContent, n),
                s = (0, S.s9)(this.sourceQuestContent, n);
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
                ((0, O.L)().info(
                    `${s?.config.messages.questName ?? n} Quest became visible at ${(0, N.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, v.av)({
                        ...e,
                        questId: n,
                        event: b.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...t,
                            metadata_sealed: r ?? null,
                            ...this.commonProperties(),
                            traffic_metadata_sealed: (0, S.Gp)(this.sourceQuestContent, s?.id) ?? null,
                        },
                    }));
            } else {
                let n = this.entity.adContentIds[i];
                ((0, O.L)().info(`${n} ad content became visible at ${(0, N.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, v.Qg)({
                        ...e,
                        adContentId: n,
                        relatedQuestId: this.entity.relatedQuestId,
                        adCreativeType: this.entity.adCreativeType,
                        event: b.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...t, ...this.commonProperties() },
                    }));
            }
        }),
            T.A.increment({
                name: u.K.QUEST_CONTENT_IMPRESSION,
                tags: [`quest_content:${(0, N.jO)(this.questContent)}`],
            }),
            (this.isRunning = !0));
    };
    stop = (() => {
        var e = this;
        return function () {
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            (t && e.beat(!0),
                (e.lastBeatTime = void 0),
                clearInterval(e.heartbeatTimeoutId),
                clearTimeout(e.minViewTimeReachedTimeoutId),
                (e.isRunning = !1),
                (0, f.bg)(e.id));
        };
    })();
}
let Q = r.createContext(void 0);
function k(e) {
    let { visible: t, visibleChanged: n, focused: s, reference: u, focusedChanged: d, sourceQuestContent: c } = e,
        C = (0, P.iY)(e),
        f = e.adCreativeType === o.p.QUEST ? void 0 : e.relatedQuestId,
        A = r.useRef(null),
        E = (0, a.bG)([_.A], () => null != _.A.questEnrollmentBlockedUntil, []);
    return (
        (0, l.Ay)(() => () => {
            null != A.current && A.current.stop();
        }),
        r.useEffect(() => {
            let i = s && t,
                r = (n || d || C) && i,
                u = ((n || d) && !i) || C;
            if (((r || u) && null != A.current && A.current.stop(), r)) {
                let t = {
                    isQuestEnrollmentBlocked: E,
                    minViewTimeSeconds: e.minViewTimeSeconds,
                    onImpression: e.onImpression,
                    questContent: e.questContent,
                    questContentPosition: e.questContentPosition,
                    questContentRowIndex: e.questContentRowIndex,
                    sourceQuestContent: c,
                    trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                    triggeredByStatusChange: C,
                };
                (e.adCreativeType === o.p.QUEST
                    ? (A.current = new L({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType }))
                    : (A.current = new L({
                          ...t,
                          adContentIds: e.adContentIds,
                          adCreativeType: e.adCreativeType,
                          relatedQuestId: f,
                      })),
                    A.current.start());
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
            E,
            c,
            e.adCreativeType,
            f,
        ]),
        (0, i.jsx)(Q.Provider, { value: A, children: e.children(u, A) })
    );
}
