n.d(e, { R: () => V, Z: () => M });
var i = n(477900),
    s = n(582128),
    a = n(172218),
    o = n(323889),
    d = n(17928),
    r = n(475743),
    u = n(531685),
    l = n(132500),
    h = n(731738),
    C = n(964486),
    c = n(507395),
    m = n(144779),
    I = n(7588),
    y = n(657375),
    T = n(692184),
    p = n(929482),
    v = n(345353),
    E = n(807393),
    g = n(427495),
    w = n(859703),
    q = n(710969),
    Q = n(977416),
    A = n(851936),
    S = n(561844),
    _ = n(590202),
    R = n(971649),
    k = n(653819);
n(23766);
var b = n(652215);
let P = new Set();
class f {
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
    constructor(t) {
        const {
            adContentIds: e,
            adCreativeType: n,
            relatedQuestId: i,
            noFillDecision: s,
            questContent: a,
            triggeredByStatusChange: d,
            trackGuildAndChannelMetadata: r,
            questContentPosition: u,
            questContentRowIndex: h,
            minViewTimeSeconds: C = 1,
            isQuestEnrollmentBlocked: c,
            onImpression: m,
            sourceQuestContent: I,
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
            (this.sourceQuestContent = I),
            n === o.p.QUEST
                ? (this.entity = { adContentIds: e, adCreativeType: n })
                : (this.entity = { adContentIds: e, adCreativeType: n, relatedQuestId: i, noFillDecision: s }));
    }
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    trackViewedPlacement = (t) => {
        let e = (0, q.HN)(this.questContent);
        null != e && (0, q.xn)(this.questContent, this.entity.adCreativeType) && P.add(`${t}_${e}`);
    };
    shouldExtendSession = (t) => {
        let e = (0, q.HN)(this.questContent);
        return null != e && !P.has(`${t}_${e}`) && (0, q.xn)(this.questContent, this.entity.adCreativeType);
    };
    maybeRegisterIosAttributionImpression = (t, e) => {
        if (this.iosAttributionRegistered || !(0, I.C$)()) return;
        let n = (0, p.BU)();
        null == n
            ? (0, T.$8)(T.vI.NO_FRAMEWORK, n, this.id)
            : null == e
              ? (0, T.$8)(T.vI.NO_METADATA, n, this.id)
              : (0, I.Oh)(this.sourceQuestContent, t)
                ? ((0, y.RH)({ impressionId: this.id, metadataSealed: e, framework: n }),
                  (this.iosAttributionRegistered = !0))
                : (0, T.$8)(T.vI.NOT_SKAN_ENABLED, n, this.id);
    };
    onMinViewTimeReached = async () => {
        let t = await (0, v.N)((0, _.jO)(this.questContent));
        (this.entity.adContentIds.forEach((e, n) => {
            let i = this.shouldExtendSession(e);
            if ((this.trackViewedPlacement(e), this.entity.adCreativeType === o.p.QUEST)) {
                let t = this.entity.adContentIds[n],
                    e = w.A.getQuest(t);
                null == e || (0, Q.Ic)(e) || (0, g.zh)(o.p.QUEST, [t]);
            }
            let s = {
                type: (0, q.xn)(this.questContent, this.entity.adCreativeType)
                    ? m.F.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION
                    : m.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                surfaceId: this.questContent,
                sourceQuestContent: this.sourceQuestContent,
                impressionId: this.id,
                triggeredByStatusChange: this.triggeredByStatusChange,
                minViewTimeSeconds: this.minViewTimeSeconds,
                minViewportPercentage: this.minViewportPercentage,
                isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
                shouldExtendSession: i,
                adUser: t,
                questContentPosition: this.questContentPosition,
                questContentRowIndex: this.questContentRowIndex,
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
            };
            (this.entity.adCreativeType === o.p.QUEST || this.entity.adCreativeType === o.p.PLAYABLE
                ? (0, c.r)({
                      ...s,
                      adCreativeType: this.entity.adCreativeType,
                      adCreativeId: this.entity.adContentIds[n],
                  })
                : null != this.entity.relatedQuestId
                  ? (0, c.r)({
                        ...s,
                        adCreativeType: this.entity.adCreativeType,
                        adCreativeId: this.entity.adContentIds[n],
                        relatedQuestId: this.entity.relatedQuestId,
                    })
                  : (0, c.r)({
                        ...s,
                        adCreativeType: this.entity.adCreativeType,
                        adCreativeId: this.entity.adContentIds[n],
                        ...(null != this.entity.noFillDecision ? { noFillDecision: this.entity.noFillDecision } : {}),
                    }),
                (0, A.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, _.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ));
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
                            o = w.A.getQuest(a);
                        ((0, A.L)().info(
                            `${o?.config.messages.questName ?? a} Quest impression ${e ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: t.id },
                        ),
                            (0, S.av)({
                                ...i,
                                questId: a,
                                event: b.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...s, ...t.commonProperties() },
                            }));
                    } else {
                        let a = t.entity.adContentIds[d];
                        ((0, A.L)().info(
                            `${a} ad content impression ${e ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: t.id },
                        ),
                            (0, S.Qg)({
                                ...i,
                                adContentId: a,
                                relatedQuestId: t.entity.relatedQuestId,
                                noFillDecision: t.entity.noFillDecision,
                                adCreativeType: t.entity.adCreativeType,
                                event: b.HAw.QUEST_CONTENT_VIEW_TIME,
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
        ...(0, _.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
    });
    clone = (t) => {
        let { triggeredByStatusChange: e } = t;
        return (
            this.stop(),
            new f({
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
            )),
            this.entity.adContentIds.forEach((t, e) => {
                let n = (0, q.s9)(this.sourceQuestContent, t);
                this.maybeRegisterIosAttributionImpression(t, n);
                let i =
                    this.entity.adCreativeType === o.p.QUEST
                        ? { adCreativeType: this.entity.adCreativeType, adCreativeId: this.entity.adContentIds[e] }
                        : {
                              adCreativeType: this.entity.adCreativeType,
                              adCreativeId: this.entity.adContentIds[e],
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
                    ...i,
                });
            }),
            E.A.increment({
                name: h.K.QUEST_CONTENT_IMPRESSION,
                tags: [`quest_content:${(0, _.jO)(this.questContent)}`],
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
                (0, y.bg)(t.id));
        };
    })();
}
function B(t) {
    let { visible: e, visibleChanged: n, focused: a, reference: r, focusedChanged: u, sourceQuestContent: l } = t,
        h = (0, R.iY)(t),
        c = t.adCreativeType === o.p.QUEST ? void 0 : t.relatedQuestId,
        m = t.adCreativeType === o.p.QUEST ? void 0 : t.noFillDecision,
        I = s.useRef(null),
        y = (0, d.bG)([w.A], () => null != w.A.questEnrollmentBlockedUntil, []);
    return (
        (0, C.Ay)(() => () => {
            null != I.current && I.current.stop();
        }),
        s.useEffect(() => {
            let i = a && e,
                s = (n || u || h) && i,
                d = ((n || u) && !i) || h;
            if (((s || d) && null != I.current && I.current.stop(), s)) {
                let e = {
                    isQuestEnrollmentBlocked: y,
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
                    ? (I.current = new f({ ...e, adContentIds: t.adContentIds, adCreativeType: t.adCreativeType }))
                    : (I.current = new f({
                          ...e,
                          adContentIds: t.adContentIds,
                          adCreativeType: t.adCreativeType,
                          relatedQuestId: c,
                          noFillDecision: m,
                      })),
                    I.current.start());
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
            h,
            t.minViewTimeSeconds,
            y,
            l,
            t.adCreativeType,
            c,
            m,
        ]),
        (0, i.jsx)(k.n.Provider, { value: I, children: t.children(r, I) })
    );
}
let N = s.memo(function (t) {
    let e,
        n,
        i,
        { focused: l, focusedChanged: h } =
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
        { key: I, adContentIds: y } = (0, R.RC)(t),
        T = { ...t, focused: l, focusedChanged: h, visible: C, visibleChanged: c, reference: m };
    return "questOrQuests" in t
        ? (0, s.createElement)(B, { ...T, key: I, adContentIds: y, adCreativeType: o.p.QUEST })
        : (0, s.createElement)(B, { ...T, key: I, adContentIds: y, adCreativeType: t.adCreativeType });
});
function V(t) {
    return (0, i.jsx)(N, { ...t });
}
function M(t) {
    return (0, i.jsx)(N, { ...t });
}
