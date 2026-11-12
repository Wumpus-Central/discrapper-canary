(n.d(t, {
    WM: () => en,
    Oq: () => ea,
    Fr: () => ep,
    Yb: () => ed,
    lk: () => eo,
    Zb: () => eL,
    g5: () => el,
    Oy: () => ei,
    HA: () => eA,
    N1: () => ee,
    yO: () => em,
    xB: () => eS,
    Yf: () => eO,
    IV: () => eR,
    dQ: () => eN,
    jh: () => es,
    r8: () => eI,
    qY: () => eg,
    CV: () => J,
    vD: () => Q,
    zh: () => ey,
    qV: () => eD,
    sB: () => eb,
    L4: () => e_,
    QG: () => eh,
    Gt: () => eu,
    UZ: () => ec,
    Ov: () => Z,
    lx: () => eE,
    R2: () => et,
    Gn: () => ef,
    uI: () => eT,
}),
    n(323874),
    n(14289),
    n(35956));
var i,
    r = n(613412),
    a = n(323889),
    s = n(517846),
    l = n(620632),
    o = n(73153),
    d = n(181658),
    c = n(157695),
    u = n(438457),
    _ = n(144779),
    E = n(196979),
    A = n(107195),
    f = n(881615),
    h = n(903063),
    I = n(69114),
    p = n(633965),
    m = n(669700),
    T = n(463347),
    g = n(310829),
    S = n(383394),
    N = n(544180),
    C = n(711014),
    O = n(129230),
    R = n(927813),
    L = n(856383),
    y = n(499785),
    D = n(789999),
    b = n(322683),
    v = n(652215);
function P(e) {
    if (Math.random() > 0.1) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, b.O)();
    O.default.track(v.HAw.EARNED_DECISION_ROUNDTRIP, {
        ...(0, I.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: t,
        mobile_network_type: N.A.getType(),
        ...(null != n && { mobile_signal_strength_level: n }),
        caller_source: e.callerSource,
        request_id: e.requestId,
        fetched_at: e.fetchedAt,
        is_foregrounded: (0, D.R)(),
    });
}
let M = new (class {
    pendingRequests = new Map();
    recordEarnedRequestAttempt(e) {
        let t = Symbol(),
            n = {
                timeoutId: setTimeout(() => {
                    let e = this.pendingRequests.get(t);
                    null != e && (this.pendingRequests.delete(t), P(e));
                }, 3e4),
                initialSendTimestamp: Date.now(),
                endpoint: "/quests/earned-decision",
                apiResponseTimestamp: null,
                wasSuccessful: !1,
                callerSource: e,
                requestId: null,
                fetchedAt: null,
            };
        return (this.pendingRequests.set(t, n), t);
    }
    recordEarnedRequestApiResponse(e, t) {
        let { wasSuccessful: n, requestId: i = null, fetchedAt: r = null } = t,
            a = this.pendingRequests.get(e);
        null != a &&
            (clearTimeout(a.timeoutId),
            this.pendingRequests.delete(e),
            P({ ...a, apiResponseTimestamp: Date.now(), wasSuccessful: n, requestId: i, fetchedAt: r }));
    }
})();
var U = n(260364);
function w(e, t, n) {
    if (Math.random() > 0.1) return;
    let i = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = (0, b.O)();
    O.default.track(v.HAw.QUEST_DECISION_ROUNDTRIP, {
        ...(0, I.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: i,
        mobile_network_type: N.A.getType(),
        ...(null != r && { mobile_signal_strength_level: r }),
        caller_source: e.callerSource,
        ad_request_id: e.adRequestId,
        fetched_at: n,
        previous_ad_request_id: e.previousAdDecision?.adDecisionData?.decision_id ?? null,
        previous_fetched_at: e.previousAdDecision?.fetchedAt ?? null,
        transition_case: t,
        is_foregrounded: (0, D.R)(),
    });
}
let G = new (class {
    pendingRequests = new Map();
    recordQuestRequestAttempt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = Symbol(),
            r = null != n ? (c.A.deliveryAdDecisionByPlacement.get(n) ?? null) : null,
            a = {
                timeoutId: setTimeout(() => {
                    let e = this.pendingRequests.get(i);
                    null != e && (this.pendingRequests.delete(i), w(e, "timeout", null));
                }, 3e4),
                initialSendTimestamp: Date.now(),
                endpoint: e,
                apiResponseTimestamp: null,
                wasSuccessful: !1,
                callerSource: t,
                adRequestId: null,
                previousAdDecision: r,
                placement: n,
            };
        return (this.pendingRequests.set(i, a), i);
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n, adRequestId: i = null, currentCreative: r = null, currentFetchedAt: s = null } = t,
            l = this.pendingRequests.get(e);
        if (null != l) {
            (clearTimeout(l.timeoutId), this.pendingRequests.delete(e));
            let t = (function (e, t) {
                function n(e) {
                    if (null == e) return "null";
                    if (null == e.creative) return "no_serve";
                    switch (e.creative.type) {
                        case a.p.QUEST:
                            return "quest";
                        case a.p.BOUNTY:
                            return "bounty";
                        case a.p.PLAYABLE:
                            return "playable";
                        case a.p.QUEST_HOME_HERO:
                            return "quest_home_hero";
                    }
                }
                let i = n(e),
                    r = n(t);
                return i === r && "null" !== i && "no_serve" !== i
                    ? (0, A.K2)(e?.creative) === (0, A.K2)(t?.creative)
                        ? `same_${i}`
                        : `different_${i}`
                    : `${i}_to_${r}`;
            })(
                l.previousAdDecision,
                null !== s
                    ? {
                          creative: r,
                          fetchedAt: s,
                          ttlMillis: 0,
                          adDecisionData: null != i ? { decision_id: i } : void 0,
                      }
                    : null,
            );
            w({ ...l, apiResponseTimestamp: Date.now(), wasSuccessful: n, adRequestId: i }, t, s);
        }
    }
})();
var x = n(760914);
function k(e) {
    var t, n;
    let i = e.creative_content;
    return {
        id: i.id,
        labelTitle: i.label_title,
        labelSubtitle: i.label_subtitle,
        heroImage: (0, x.dv)(i.hero_image),
        heroVideo: (0, x.Zf)(i.hero_video),
        sponsorImage: (0, x.Zf)(i.sponsor_image),
        cta: {
            url: (t = i.cta).url,
            buttonLabel: t.button_label,
            android: null != t.android ? { androidAppId: t.android.android_app_id } : void 0,
            ios: null != t.ios ? { iosAppId: t.ios.ios_app_id } : void 0,
        },
        questIds: i.quest_ids,
        questHomeEntrypoint:
            null != i.quest_home_entrypoint
                ? {
                      linearGradient: (n = i.quest_home_entrypoint).linear_gradient,
                      radialGradient: n.radial_gradient,
                      gradientPreset: n.gradient_preset,
                      image: (0, x.Zf)(n.image),
                      tooltipImage: (0, x.Zf)(n.tooltip_image),
                      tooltipTitle: n.tooltip_title,
                      tooltipSubtitle: n.tooltip_subtitle,
                  }
                : void 0,
        shelfImage: (0, x.Zf)(i.shelf_image),
        shelfVideo: (0, x.Zf)(i.shelf_video),
        features: i.features ?? [],
        startsAt: e.starts_at,
        endsAt: e.ends_at,
    };
}
var F = n(122760),
    B = n(506988),
    V = n(405670),
    H = n(479442),
    j = n(945810);
let W = "illustration3",
    Y = (0, j.mj)({
        name: "2026-08-bounties-mobile-quest-bar",
        kind: "user",
        defaultConfig: { enabled: !1, illustration: W, ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !1 },
        variations: {
            1: { enabled: !0, illustration: "illustration1", ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !1 },
            2: { enabled: !0, illustration: "illustration2", ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !1 },
            3: { enabled: !0, illustration: "illustration3", ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !1 },
            4: { enabled: !0, illustration: W, ctrVariant: 2, hapticFeedbackOnRewardEarnedEnabled: !1 },
            5: { enabled: !0, illustration: W, ctrVariant: 3, hapticFeedbackOnRewardEarnedEnabled: !1 },
            6: { enabled: !0, illustration: W, ctrVariant: 1, hapticFeedbackOnRewardEarnedEnabled: !1 },
            7: { enabled: !0, illustration: W, ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !0 },
        },
    });
var K = n(710969),
    $ = n(247512),
    X = n(221596),
    z = n(792996);
let q = new Set([B.uF.QUEST_BAR, B.uF.QUEST_BAR_V2, B.uF.QUEST_BAR_MOBILE]);
async function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await l.Bo.post({
                url: v.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            o.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, 5) };
    } catch (n) {
        let e = new d.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: B.xv.RATE_LIMITED,
                        message: z.intl.string(z.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? z.intl.string(z.t.xSCvBf);
        return {
            errorHints: [{ type: B.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function J(e) {
    await l.Bo.post({ url: v.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function Z() {
    await l.Bo.del({ url: v.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function ee() {
    if (F.A.isFetchingCurrentQuests) return;
    let e = [...F.A.quests.keys()];
    o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
    try {
        let t = await l.Bo.get({ url: v.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
            n = t.body.quests,
            i = n.filter((e) => (0, $.s2)(e)).map((e) => (0, $.rO)(e)),
            r = t.body.quest_enrollment_blocked_until,
            a = t.body.quest_access_suspended_until,
            s = i.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
            d = n.map((e) => e.id),
            c = i.map((e) => e.id),
            u = d.filter((e) => !c.includes(e)),
            _ = s.map((e) => e.id),
            E = c.filter((e) => !_.includes(e)),
            A = e.filter((e) => !_.includes(e));
        L.A.addBreadcrumb({
            category: "quests.fetch",
            message: "fetchCurrentQuests completed",
            data: {
                rawCount: d.length,
                rawIds: d,
                validCount: _.length,
                validIds: _,
                prevQuestIds: e,
                droppedByConfigVersion: u,
                droppedByPlatformFilter: E,
                removedFromStore: A,
            },
        });
        let f = t.body.excluded_quests.map((e) => (0, $._g)(e));
        o.h.dispatch({
            type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
            quests: s,
            excludedQuests: f,
            questEnrollmentBlockedUntil: r,
            questAccessSuspendedUntil: a,
        });
    } catch (e) {
        o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new d.A(e) });
    }
}
async function et(e) {
    let {
        questId: t,
        streamKey: n,
        applicationId: i,
        terminal: a = !1,
        executablePath: s,
        executableFingerprint: l,
    } = e;
    try {
        let e = await y.A.post({
            url: v.Rsh.QUESTS_HEARTBEAT(t),
            body: { stream_key: n, application_id: i, terminal: a, executable_path: s, executable_fingerprint: l },
            trackedActionData: {
                event: r.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    application_id: i,
                    terminal: a,
                    is_overlay: __OVERLAY__,
                    stack_trace: Error().stack ?? "",
                    is_playtime_eligible: !0,
                },
            },
            rejectWithError: !1,
        });
        o.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, $.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        o.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new d.A(e), questId: t, streamKey: n });
    }
}
var en =
    (((i = {}).SUCCESS = "success"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    (i.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
    i);
async function ei(e, t) {
    if (null != t.questContentCTA) {
        let n = t.questContentCTA;
        (0, u.r)({
            type: _.F.CLICK_INTERNAL,
            adCreativeType: a.p.QUEST,
            adCreativeId: e,
            questContentCTA: n,
            surfaceId: t.questContent,
            sourceQuestContent: t.sourceQuestContent,
            questContentPosition: t.questContentPosition,
            questContentRowIndex: t.questContentRowIndex,
        });
    }
    if ((e === X.Fw && (0, g.u)(), F.A.isEnrolling(e))) return { type: "previous_in_flight_request" };
    o.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, K.L4)(t.questContent),
            i = (0, K.Gp)(t.questContent, e),
            r = await l.Bo.post({
                url: v.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, K.Kc)(e, t.questContent),
                    metadata_sealed: null != n ? n : null,
                    traffic_metadata_sealed: null != i ? i : null,
                },
                rejectWithError: !0,
            }),
            a = (0, $.tp)(r.body);
        return (
            o.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: a }),
            { type: "success", userStatus: a }
        );
    } catch {
        return (o.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }), { type: "unknown_error" });
    }
}
let er = new Map();
function ea(e, t, n) {
    let i = er.get(e);
    if (null != i) return i;
    let r = (async function (e, t, n) {
        try {
            return await (async function (e, t, n) {
                o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
                try {
                    let i = (0, K.L4)(n),
                        r = (0, K.Gp)(n, e),
                        a = await l.Bo.post({
                            url: v.Rsh.QUESTS_CLAIM_REWARD(e),
                            body: {
                                platform: t,
                                location: n,
                                ...(0, K.Kc)(e, n),
                                metadata_sealed: null != i ? i : null,
                                traffic_metadata_sealed: null != r ? r : null,
                            },
                            rejectWithError: !1,
                        }),
                        s = (0, $.Dv)(a.body);
                    return (
                        0 === s.errors.length
                            ? o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: e, entitlements: s })
                            : o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: s.errors, questId: e }),
                        s
                    );
                } catch (t) {
                    throw (o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: new d.A(t), questId: e }), t);
                }
            })(e, t, n);
        } finally {
            er.delete(e);
        }
    })(e, t, n);
    return (er.set(e, r), r);
}
async function es(e) {
    if (!F.A.isFetchingRewardCode(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await l.Bo.get({ url: v.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, $.Rd)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new d.A(t), questId: e }), t);
        }
    }
}
async function el(e, t) {
    let n = F.A.isDismissingContent(e),
        i = (0, K.vy)(t);
    if (!n && i) {
        o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, K.Gp)(t, e),
                i = await l.Bo.post({
                    url: v.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: { ...(0, K.Kc)(e, t), traffic_metadata_sealed: null != n ? n : null },
                    rejectWithError: !1,
                });
            (o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, $.tp)(i.body) }),
                q.has(t) && (0, m.hs)(s.w.QUEST_DISMISSED, { quest_id: e }));
        } catch (t) {
            o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new d.A(t), questId: e });
        }
    }
}
function eo(e) {
    o.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await l.Bo.post({ url: v.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, $.tp)(n.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new d.A(t), questId: e });
    }
}
async function ec(e) {
    try {
        let t = await l.Bo.del({ url: v.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, $.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new d.A(t), questId: e });
    }
}
async function eu(e) {
    try {
        o.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await l.Bo.del({ url: v.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, $.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new d.A(t), questId: e });
    }
}
function e_(e, t) {
    o.h.dispatch({ type: "QUESTS_PREVIEW_OVERRIDE", placement: e, questId: t });
}
function eE(e, t) {
    o.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function eA() {
    if (!F.A.isFetchingClaimedQuests) {
        o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await l.Bo.get({ url: v.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, $.S)(e),
            );
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new d.A(e) });
        }
    }
}
function ef(e, t, n) {
    o.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function eh(e) {
    o.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function eI(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = Date.now(),
        r = G.recordQuestRequestAttempt("/quests/decision", t, e);
    o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let s,
            d,
            c = await (0, h.Ht)(),
            u = await (0, f.sN)(),
            _ = (0, p.pc)(),
            m = null != _ ? _() : [],
            g = C.Ay.getGuildsTree(),
            R = m
                .filter((e) => {
                    if ((0, T.tZ)(e)) return !1;
                    let t = g.getNode(e);
                    return t?.parentId == null || S.A.isFolderExpanded(t.parentId);
                })
                .slice(0, 50),
            L = new URLSearchParams({ placement: String(e) });
        (c?.uuid != null && L.append("client_heartbeat_session_id", c.uuid),
            null != u.uuid && L.append("client_ad_session_id", u.uuid),
            R.forEach((e) => L.append("visible_guild_ids", e)));
        let y = (
                await l.Bo.get({
                    url: `${v.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${L.toString()}`,
                    rejectWithError: !1,
                    context: { connection_type: N.A.getType() },
                })
            ).body,
            D = !1;
        e === B.p9.MOBILE_HOME_DOCK_AREA
            ? (D = Y.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }).enabled)
            : e === B.p9.DESKTOP_ACCOUNT_PANEL_AREA &&
              (D = H.w.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }).enabled);
        let b = y.creative?.creative_type !== a.p.BOUNTY || D ? y.creative : null,
            P = null,
            M = null;
        if (null != b)
            switch (b.creative_type) {
                case a.p.QUEST: {
                    let e = b.creative_content,
                        t = e.id,
                        i = y.user_status,
                        r = null != i && i.quest_id !== t;
                    ((s =
                        n && void 0 !== i && !r
                            ? (d = (0, $.rO)({
                                  id: t,
                                  config: e,
                                  user_status: i,
                                  targeted_content: [],
                                  preview: !1,
                                  traffic_metadata_sealed: y.traffic_metadata_sealed,
                              })).config
                            : (0, $.Yn)(e)),
                        (P = { type: a.p.QUEST, questId: s.id }),
                        n && (void 0 === i || r) && (await ee()));
                    break;
                }
                case a.p.BOUNTY:
                case a.p.PLAYABLE:
                    P = (0, E.Y)(b);
                    break;
                case a.p.NO_FILL:
                    M = b.creative_content?.ad_content_id ?? null;
            }
        else {
            let e = y.quest;
            null != e && ((s = (0, $.Yn)(e)), (P = { type: a.p.QUEST, questId: s.id }), n && (await ee()));
        }
        (o.h.dispatch({
            type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
            questWithUserStatus: d,
            quest: s,
            creative: P,
            isNoFill: b?.creative_type === a.p.NO_FILL,
            noFillAdContentId: M,
            adDecisionData: {
                ad_id: y.ad_identifiers?.ad_id,
                adset_id: y.ad_identifiers?.adset_id,
                ad_set_id: y.ad_identifiers?.ad_set_id,
                campaign_id: y.ad_identifiers?.campaign_id,
                creative_id: y.ad_identifiers?.creative_id,
                creative_type: y.ad_identifiers?.creative_type,
                decision_id: y.request_id,
                is_targeted: null != y.ad_identifiers,
            },
            metadataSealed: y.metadata_sealed,
            trafficMetadataSealed: y.traffic_metadata_sealed,
            provenanceMetadataSealed: y.provenance_metadata_sealed,
            adContext: y.ad_context,
            responseTtlSeconds: y.response_ttl_seconds,
            placement: e,
            fetchedAt: i,
        }),
            G.recordQuestRequestApiResponse(r, {
                wasSuccessful: !0,
                adRequestId: String(y.request_id),
                currentCreative: P,
                currentFetchedAt: i,
            }));
        let w = (0, A.K2)(P);
        if (null == P || null == w) return;
        (e === B.p9.DESKTOP_ACCOUNT_PANEL_AREA && U.A.startTracking(w, P.type),
            O.default.track(v.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, I.A)(),
                quest_id: P.type === a.p.QUEST ? w : null,
                ad_content_id: w,
                creative_type: P.type,
                caller_source: t,
                ad_request_id: String(y.request_id),
            }));
    } catch (n) {
        (G.recordQuestRequestApiResponse(r, { wasSuccessful: !1, currentFetchedAt: i }),
            O.default.track(v.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, I.A)(),
                reason: n?.message ?? null,
                api_error: new d.A(n).getAnyErrorMessage(),
                caller_source: t,
            }),
            o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new d.A(n), placement: e }));
    }
}
function ep(e, t) {
    o.h.dispatch({
        type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER",
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function em(e, t, n) {
    if (F.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let i = F.A.earnedQuestForPlacement.get(t)?.earnedDecisionByQuestId,
        r = e.filter((e) => {
            let t = i?.get(e);
            return !(0, K.Oh)(t);
        });
    if (0 === r.length) return;
    let a = Date.now(),
        s = M.recordEarnedRequestAttempt(n);
    o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, h.Ht)(),
            n = r.join(","),
            i = await l.Bo.get({ url: v.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            d = i.body.quests,
            c = i.body.response_ttl_seconds,
            u = new Map(
                r.map((e) => {
                    let t = d?.[e];
                    return [e, null != t && (0, $.s2)(t) ? t : null];
                }),
            );
        (o.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
            serverQuests: u,
            content: t,
            fetchedAt: a,
            responseTtlSeconds: c,
        }),
            M.recordEarnedRequestApiResponse(s, {
                wasSuccessful: !0,
                requestId: i.body.request_id ?? null,
                fetchedAt: a,
            }));
    } catch (e) {
        (M.recordEarnedRequestApiResponse(s, { wasSuccessful: !1, fetchedAt: a }),
            o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new d.A(e), content: t }));
    }
}
async function eT(e, t) {
    await y.A.post({
        url: v.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, x.tW)(e, x.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void V.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: V.Lx.FAILURE });
    V.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: V.Lx.FETCHING });
    try {
        let t = await l.Bo.get({ url: n.url, rejectWithError: !0 });
        V.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: V.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        V.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: V.Lx.FAILURE });
    }
}
async function eS(e) {
    let t = await l.Bo.get({ url: v.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, $.Yn)(t.body);
}
async function eN(e) {
    if (!F.A.isFetchingQuestPreview(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await l.Bo.get({ url: v.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, $.rO)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new d.A(t), questId: e }), t);
        }
    }
}
let eC = 5 * R.A.Millis.MINUTE;
async function eO() {
    let e = B.p9.QUEST_HOME_BANNER_DESKTOP;
    if (c.A.isFetchingAdToDeliverByPlacement(e) || !c.A.canRefreshAd(e)) return;
    let t = c.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= eC) return;
    let n = Date.now();
    o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: e });
    try {
        let t = await (0, h.Ht)(),
            i = await (0, f.sN)(),
            r = new URLSearchParams({ placement: String(e), num_decisions_requested: "1" });
        (t?.uuid != null && r.append("client_heartbeat_session_id", t.uuid),
            null != i.uuid && r.append("client_ad_session_id", i.uuid));
        let s = (
                await l.Bo.get({
                    url: `${v.Rsh.QUESTS_GET_DECISIONS}?${r.toString()}`,
                    rejectWithError: !1,
                    context: { connection_type: N.A.getType() },
                })
            ).body,
            d = s.decisions?.[0] ?? null,
            c = d?.creative ?? null,
            u = null;
        (null != c && c.creative_type === a.p.QUEST_HOME_HERO && (u = k(c)),
            o.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS",
                questHomeHero: u,
                adDecisionData: {
                    ad_id: d?.ad_identifiers?.ad_id,
                    ad_set_id: d?.ad_identifiers?.ad_set_id,
                    campaign_id: d?.ad_identifiers?.campaign_id,
                    creative_id: d?.ad_identifiers?.creative_id,
                    creative_type: d?.ad_identifiers?.creative_type,
                    decision_id: s.request_id,
                    is_targeted: d?.ad_identifiers != null,
                },
                metadataSealed: d?.metadata_sealed,
                trafficMetadataSealed: d?.traffic_metadata_sealed,
                provenanceMetadataSealed: d?.provenance_metadata_sealed,
                adContext: d?.ad_context,
                responseTtlSeconds: d?.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }));
    } catch (t) {
        throw (o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new d.A(t), placement: e }), t);
    }
}
async function eR(e) {
    let t = B.p9.QUEST_HOME_BANNER_DESKTOP,
        n = Date.now();
    o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: t });
    try {
        let i = new URLSearchParams([
                ["ad_creative_ids", e],
                ["placement", String(t)],
            ]),
            r = (await l.Bo.get({ url: `${v.Rsh.QUESTS_CREATIVE_PREVIEW}?${i.toString()}`, rejectWithError: !1 })).body,
            s = r.decisions?.[0] ?? null,
            d = s?.creative ?? null,
            c = null;
        (null != d && d.creative_type === a.p.QUEST_HOME_HERO && (c = k(d)),
            o.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS",
                questHomeHero: c,
                adDecisionData: {
                    ad_id: s?.ad_identifiers?.ad_id,
                    ad_set_id: s?.ad_identifiers?.ad_set_id,
                    campaign_id: s?.ad_identifiers?.campaign_id,
                    creative_id: s?.ad_identifiers?.creative_id,
                    creative_type: s?.ad_identifiers?.creative_type,
                    decision_id: r.request_id,
                    is_targeted: s?.ad_identifiers != null,
                },
                metadataSealed: s?.metadata_sealed,
                trafficMetadataSealed: s?.traffic_metadata_sealed,
                provenanceMetadataSealed: s?.provenance_metadata_sealed,
                adContext: s?.ad_context,
                responseTtlSeconds: s?.response_ttl_seconds,
                placement: t,
                fetchedAt: n,
            }));
    } catch (e) {
        throw (o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new d.A(e), placement: t }), e);
    }
}
function eL(e) {
    o.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function ey(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function eD(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}
function eb(e) {
    o.h.dispatch({ type: "QUESTS_MARK_DISCOVERED", questId: e });
}
