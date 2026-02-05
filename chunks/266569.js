"use strict";
n.d(t, { n0: () => b, xs: () => N });
var r = n(627968),
    i = n(64700),
    a = n(835245),
    s = n(323889),
    o = n(731738),
    l = n(311907),
    u = n(964486),
    c = n(345353),
    d = n(69114),
    _ = n(831062),
    f = n(723702),
    p = n(859703),
    h = n(628473),
    m = n(943849),
    g = n(710969),
    E = n(561844),
    A = n(590202),
    I = n(910463),
    T = n(971649);
n(23766);
var y = n(652215);
let S = new Set();
function v(e, t) {
    return `${e}_${t}`;
}
class C {
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
    isRunning = !1;
    constructor(e) {
        const {
            adContentIds: t,
            adCreativeType: n,
            questContent: r,
            triggeredByStatusChange: i,
            trackGuildAndChannelMetadata: o,
            questContentPosition: l,
            questContentRowIndex: u,
            minViewTimeSeconds: c = 1,
            isQuestEnrollmentBlocked: d,
            sourceQuestContent: _,
        } = e;
        (this.id = (0, a.A)()),
            (this.questContent = r),
            (this.questContentPosition = l),
            (this.minViewTimeSeconds = c),
            (this.minViewportPercentage = 0.5),
            (this.trackGuildAndChannelMetadata = o),
            (this.triggeredByStatusChange = i),
            (this.questContentRowIndex = u),
            (this.isQuestEnrollmentBlocked = d),
            (this.sourceQuestContent = _),
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
        let t = (0, g.HN)(this.questContent);
        null != t && (0, g.xn)(this.questContent) && S.add(v(e, t));
    };
    shouldExtendSession = (e) => {
        let t = (0, g.HN)(this.questContent);
        return null != t && !S.has(v(e, t)) && (0, g.xn)(this.questContent);
    };
    onMinViewTimeReached = async () => {
        let e = (0, g.Li)(this.questContent),
            t = (0, g.L4)(this.questContent),
            n = await (0, c.N)((0, A.jO)(this.questContent)),
            r = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            i = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != n && (0, f.isIOS)() ? n.advertisingId : null,
                android_advertising_id: null != n && (0, f.isAndroid)() ? n.advertisingId : null,
                metadata_raw: e ?? null,
                metadata_sealed: t ?? null,
                ...(0, d.A)(),
                ...(0, I.X)(this.questContent),
            };
        this.entity.adContentIds.forEach((e, t) => {
            let n = this.shouldExtendSession(e);
            if ((this.trackViewedPlacement(e), this.entity.adCreativeType === s.p.QUEST)) {
                let e = this.entity.adContentIds[t],
                    a = p.A.getQuest(e);
                (0, m.L)().info(
                    `${a?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, A.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, E.av)({
                        ...r,
                        shouldExtendSession: n,
                        questId: e,
                        event: y.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...i,
                            ...this.commonProperties(a),
                            traffic_metadata_raw: (0, g.yI)(this.questContent, a?.id) ?? null,
                            traffic_metadata_sealed: (0, g.Gp)(this.questContent, a?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[t];
                (0, m.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, A.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, E.Qg)({
                        ...r,
                        shouldExtendSession: n,
                        adContentId: e,
                        adCreativeType: this.entity.adCreativeType,
                        event: y.HAw.QUEST_CONTENT_VIEWED,
                        properties: { ...i, ...this.commonProperties() },
                    });
            }
        });
    };
    beat = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (null != e.lastBeatTime) {
                let n = Math.round(Date.now() - e.lastBeatTime),
                    r = {
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        sourceQuestContent: e.sourceQuestContent,
                    },
                    i = {
                        is_termination_beat: t,
                        viewed_time_ms: n,
                        triggered_by_status_change: e.triggeredByStatusChange,
                    };
                e.entity.adContentIds.forEach((a, o) => {
                    if (e.entity.adCreativeType === s.p.QUEST) {
                        let a = e.entity.adContentIds[o],
                            s = p.A.getQuest(a);
                        (0, m.L)().info(
                            `${s?.config.messages.questName ?? a} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, E.av)({
                                ...r,
                                questId: a,
                                event: y.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...i, ...e.commonProperties(s) },
                            });
                    } else {
                        let a = e.entity.adContentIds[o];
                        (0, m.L)().info(
                            `${a} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, E.Qg)({
                                ...r,
                                adContentId: a,
                                adCreativeType: e.entity.adCreativeType,
                                event: y.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...i, ...e.commonProperties() },
                            });
                    }
                });
            }
            e.lastBeatTime = Date.now();
        };
    })();
    commonProperties = (e) => ({
        impression_id: this.id,
        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
        quest_status: null == e ? void 0 : (0, A.NI)(e),
        ...(0, A.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
    });
    clone = (e) => {
        let { triggeredByStatusChange: t } = e;
        return (
            this.stop(),
            new C({
                questContent: this.questContent,
                questContentRowIndex: this.questContentRowIndex,
                questContentPosition: this.questContentPosition,
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                triggeredByStatusChange: t,
                isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
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
        let e = (0, g.Li)(this.questContent),
            t = (0, g.L4)(this.questContent),
            n = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            r = {
                triggered_by_status_change: this.triggeredByStatusChange,
                metadata_raw: e ?? null,
                metadata_sealed: t ?? null,
            };
        this.entity.adContentIds.forEach((e, t) => {
            if (this.entity.adCreativeType === s.p.QUEST) {
                let e = this.entity.adContentIds[t],
                    i = p.A.getQuest(e);
                (0, m.L)().info(
                    `${i?.config.messages.questName ?? e} Quest became visible at ${(0, A.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, E.av)({
                        ...n,
                        questId: e,
                        event: y.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...r,
                            ...this.commonProperties(i),
                            traffic_metadata_raw: (0, g.yI)(this.questContent, i?.id) ?? null,
                            traffic_metadata_sealed: (0, g.Gp)(this.questContent, i?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[t];
                (0, m.L)().info(`${e} ad content became visible at ${(0, A.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, E.Qg)({
                        ...n,
                        adContentId: e,
                        adCreativeType: this.entity.adCreativeType,
                        event: y.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...r, ...this.commonProperties() },
                    });
            }
        }),
            (0, h.x)("QuestImpressionTracker") &&
                _.A.increment({
                    name: o.K.QUEST_CONTENT_IMPRESSION,
                    tags: [`quest_content:${(0, A.jO)(this.questContent)}`],
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
let b = i.createContext(void 0);
function N(e) {
    let { visible: t, visibleChanged: n, focused: a, reference: o, focusedChanged: c, sourceQuestContent: d } = e,
        _ = (0, T.iY)(e),
        f = i.useRef(null),
        h = (0, l.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil, []);
    return (
        (0, u.Ay)(() => () => {
            null != f.current && f.current.stop();
        }),
        i.useEffect(() => {
            let r = a && t,
                i = (n || c || _) && r,
                o = ((n || c) && !r) || _;
            if (((i || o) && null != f.current && f.current.stop(), i)) {
                let t = {
                    isQuestEnrollmentBlocked: h,
                    minViewTimeSeconds: e.minViewTimeSeconds,
                    questContent: e.questContent,
                    questContentPosition: e.questContentPosition,
                    questContentRowIndex: e.questContentRowIndex,
                    sourceQuestContent: d,
                    trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                    triggeredByStatusChange: _,
                };
                e.adCreativeType,
                    s.p.QUEST,
                    (f.current = new C({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType })),
                    f.current.start();
            }
        }, [
            a,
            t,
            c,
            n,
            e.adContentIds,
            e.questContent,
            e.questContentPosition,
            e.questContentRowIndex,
            e.trackGuildAndChannelMetadata,
            _,
            e.minViewTimeSeconds,
            h,
            d,
            e.adCreativeType,
        ]),
        (0, r.jsx)(b.Provider, { value: f, children: e.children(o, f) })
    );
}
