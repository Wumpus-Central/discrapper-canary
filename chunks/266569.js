"use strict";
n.d(t, { n0: () => v, xs: () => C });
var r = n(627968),
    i = n(64700),
    s = n(835245),
    a = n(323889),
    o = n(731738),
    l = n(311907),
    u = n(964486),
    c = n(345353),
    d = n(69114),
    _ = n(831062),
    f = n(723702),
    p = n(829219),
    h = n(859703),
    E = n(710969),
    m = n(851936),
    g = n(561844),
    A = n(590202),
    I = n(910463),
    T = n(971649);
n(23766);
var S = n(652215);
let y = new Set();
class N {
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
            onImpression: _,
            sourceQuestContent: f,
        } = e;
        (this.id = (0, s.A)()),
            (this.questContent = r),
            (this.questContentPosition = l),
            (this.minViewTimeSeconds = c),
            (this.minViewportPercentage = 0.5),
            (this.trackGuildAndChannelMetadata = o),
            (this.triggeredByStatusChange = i),
            (this.questContentRowIndex = u),
            (this.isQuestEnrollmentBlocked = d),
            (this.onImpressionCallback = _),
            (this.sourceQuestContent = f),
            a.p.QUEST,
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
        null != t && (0, E.xn)(this.questContent) && y.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
        let t = (0, E.HN)(this.questContent);
        return null != t && !y.has(`${e}_${t}`) && (0, E.xn)(this.questContent);
    };
    onMinViewTimeReached = async () => {
        let e = (0, E.L4)(this.questContent),
            t = await (0, c.N)((0, A.jO)(this.questContent)),
            n = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            r = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != t && (0, f.isIOS)() ? t.advertisingId : null,
                android_advertising_id: null != t && (0, f.isAndroid)() ? t.advertisingId : null,
                metadata_sealed: e ?? null,
                ...(0, d.A)(),
                ...(0, I.X)(this.questContent),
            };
        this.entity.adContentIds.forEach((e, t) => {
            let i = this.shouldExtendSession(e);
            if ((this.trackViewedPlacement(e), this.entity.adCreativeType === a.p.QUEST)) {
                let e = this.entity.adContentIds[t],
                    s = h.A.getQuest(e);
                null == s || (0, E.Ic)(s) || (0, p.zh)(a.p.QUEST, [e]),
                    (0, m.L)().info(
                        `${s?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, A.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, g.av)({
                        ...n,
                        shouldExtendSession: i,
                        questId: e,
                        event: S.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...r,
                            ...this.commonProperties(s),
                            traffic_metadata_raw: (0, E.yI)(this.questContent, s?.id) ?? null,
                            traffic_metadata_sealed: (0, E.Gp)(this.questContent, s?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[t];
                (0, m.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, A.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, g.Qg)({
                        ...n,
                        shouldExtendSession: i,
                        adContentId: e,
                        adCreativeType: this.entity.adCreativeType,
                        event: S.HAw.QUEST_CONTENT_VIEWED,
                        properties: { ...r, ...this.commonProperties() },
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
                    r = {
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        sourceQuestContent: e.sourceQuestContent,
                    },
                    i = {
                        is_termination_beat: t,
                        viewed_time_ms: n,
                        triggered_by_status_change: e.triggeredByStatusChange,
                    };
                e.entity.adContentIds.forEach((s, o) => {
                    if (e.entity.adCreativeType === a.p.QUEST) {
                        let s = e.entity.adContentIds[o],
                            a = h.A.getQuest(s);
                        (0, m.L)().info(
                            `${a?.config.messages.questName ?? s} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, g.av)({
                                ...r,
                                questId: s,
                                event: S.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...i, ...e.commonProperties(a) },
                            });
                    } else {
                        let s = e.entity.adContentIds[o];
                        (0, m.L)().info(
                            `${s} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, g.Qg)({
                                ...r,
                                adContentId: s,
                                adCreativeType: e.entity.adCreativeType,
                                event: S.HAw.QUEST_CONTENT_VIEW_TIME,
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
            new N({
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
        let e = (0, E.L4)(this.questContent),
            t = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            n = { triggered_by_status_change: this.triggeredByStatusChange, metadata_sealed: e ?? null };
        this.entity.adContentIds.forEach((e, r) => {
            if (this.entity.adCreativeType === a.p.QUEST) {
                let e = this.entity.adContentIds[r],
                    i = h.A.getQuest(e);
                (0, m.L)().info(
                    `${i?.config.messages.questName ?? e} Quest became visible at ${(0, A.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, g.av)({
                        ...t,
                        questId: e,
                        event: S.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...n,
                            ...this.commonProperties(i),
                            traffic_metadata_raw: (0, E.yI)(this.questContent, i?.id) ?? null,
                            traffic_metadata_sealed: (0, E.Gp)(this.questContent, i?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[r];
                (0, m.L)().info(`${e} ad content became visible at ${(0, A.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, g.Qg)({
                        ...t,
                        adContentId: e,
                        adCreativeType: this.entity.adCreativeType,
                        event: S.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...n, ...this.commonProperties() },
                    });
            }
        }),
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
let v = i.createContext(void 0);
function C(e) {
    let { visible: t, visibleChanged: n, focused: s, reference: o, focusedChanged: c, sourceQuestContent: d } = e,
        _ = (0, T.iY)(e),
        f = i.useRef(null),
        p = (0, l.bG)([h.A], () => null != h.A.questEnrollmentBlockedUntil, []);
    return (
        (0, u.Ay)(() => () => {
            null != f.current && f.current.stop();
        }),
        i.useEffect(() => {
            let r = s && t,
                i = (n || c || _) && r,
                o = ((n || c) && !r) || _;
            if (((i || o) && null != f.current && f.current.stop(), i)) {
                let t = {
                    isQuestEnrollmentBlocked: p,
                    minViewTimeSeconds: e.minViewTimeSeconds,
                    onImpression: e.onImpression,
                    questContent: e.questContent,
                    questContentPosition: e.questContentPosition,
                    questContentRowIndex: e.questContentRowIndex,
                    sourceQuestContent: d,
                    trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                    triggeredByStatusChange: _,
                };
                e.adCreativeType,
                    a.p.QUEST,
                    (f.current = new N({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType })),
                    f.current.start();
            }
        }, [
            s,
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
            p,
            d,
            e.adCreativeType,
        ]),
        (0, r.jsx)(v.Provider, { value: f, children: e.children(o, f) })
    );
}
