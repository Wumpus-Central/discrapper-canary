(n.d(t, {
    sB: () => eU,
    WM: () => el,
    lx: () => ef,
    N1: () => ea,
    xB: () => eR,
    Yb: () => eE,
    IV: () => ev,
    Oq: () => ed,
    r8: () => eg,
    lk: () => e_,
    qY: () => eO,
    jh: () => ec,
    CV: () => ei,
    UZ: () => eA,
    yO: () => eN,
    Fr: () => eS,
    Oy: () => eo,
    Gn: () => eT,
    uI: () => eC,
    L4: () => eI,
    zh: () => eM,
    R2: () => es,
    g5: () => eu,
    vD: () => en,
    qV: () => eP,
    HA: () => ep,
    Yf: () => eD,
    Ov: () => er,
    QG: () => em,
    Zb: () => eb,
    dQ: () => eL,
    Gt: () => eh,
}),
    n(323874),
    n(14289),
    n(35956));
var i,
    r = n(562708),
    a = n(323889),
    s = n(517846),
    l = n(636537),
    o = n(228366),
    d = n(181658),
    c = n(157695),
    u = n(314329),
    _ = n(274670),
    E = n(144779),
    A = n(881615),
    h = n(390595),
    I = n(888548),
    f = n(69114),
    p = n(633965),
    T = n(27620),
    m = n(463347),
    g = n(310829),
    S = n(383394),
    N = n(544180),
    C = n(711014),
    O = n(174459),
    R = n(927813),
    L = n(38405),
    y = n(499785),
    D = n(789999),
    v = n(322683),
    b = n(652215);
function M(e) {
    if (Math.random() > 0.1) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, v.O)();
    O.default.track(b.HAw.EARNED_DECISION_ROUNDTRIP, {
        ...(0, f.A)(),
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
class P {
    pendingRequests = new Map();
    recordEarnedRequestAttempt(e, t) {
        let n = {
            initialSendTimestamp: Date.now(),
            endpoint: "/quests/earned-decision",
            apiResponseTimestamp: null,
            wasSuccessful: !1,
            callerSource: t,
            requestId: null,
            fetchedAt: null,
        };
        (this.pendingRequests.set(e, n),
            setTimeout(() => {
                let t = this.pendingRequests.get(e);
                null != t && (M(t), this.pendingRequests.delete(e));
            }, 3e4));
    }
    recordEarnedRequestApiResponse(e, t) {
        let { wasSuccessful: n, requestId: i = null, fetchedAt: r = null } = t,
            a = this.pendingRequests.get(e);
        null != a &&
            (M({ ...a, apiResponseTimestamp: Date.now(), wasSuccessful: n, requestId: i, fetchedAt: r }),
            this.pendingRequests.delete(e));
    }
}
let U = new P();
var w = n(260364),
    G = n(107195);
function x(e, t, n) {
    if (Math.random() > 0.1) return;
    let i = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = (0, v.O)();
    O.default.track(b.HAw.QUEST_DECISION_ROUNDTRIP, {
        ...(0, f.A)(),
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
class k {
    pendingRequests = new Map();
    recordQuestRequestAttempt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = null != n ? (c.A.deliveryAdDecisionByPlacement.get(n) ?? null) : null,
            r = {
                initialSendTimestamp: Date.now(),
                endpoint: e,
                apiResponseTimestamp: null,
                wasSuccessful: !1,
                callerSource: t,
                adRequestId: null,
                previousAdDecision: i,
                placement: n,
            };
        (this.pendingRequests.set(e, r),
            setTimeout(() => {
                let t = this.pendingRequests.get(e);
                null != t && (x(t, "timeout", null), this.pendingRequests.delete(e));
            }, 3e4));
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n, adRequestId: i = null, currentCreative: r = null, currentFetchedAt: s = null } = t,
            l = this.pendingRequests.get(e);
        if (null != l) {
            let t = (function (e, t) {
                function n(e) {
                    if (null == e) return "null";
                    if (null == e.creative) return "no_serve";
                    switch (e.creative.type) {
                        case a.p.QUEST:
                            return "quest";
                        case a.p.BOUNTY:
                            return "bounty";
                        case a.p.QUEST_HOME_HERO:
                            return "quest_home_hero";
                    }
                }
                let i = n(e),
                    r = n(t);
                return i === r && "null" !== i && "no_serve" !== i
                    ? (0, G.K2)(e?.creative) === (0, G.K2)(t?.creative)
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
            (x({ ...l, apiResponseTimestamp: Date.now(), wasSuccessful: n, adRequestId: i }, t, s),
                this.pendingRequests.delete(e));
        }
    }
}
let F = new k();
var B = n(291749);
function V(e) {
    var t, n;
    let i = e.creative_content;
    return {
        id: i.id,
        labelTitle: i.label_title,
        labelSubtitle: i.label_subtitle,
        heroImage: (0, B.dv)(i.hero_image),
        heroVideo: (0, B.Zf)(i.hero_video),
        sponsorImage: (0, B.Zf)(i.sponsor_image),
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
                      image: (0, B.Zf)(n.image),
                      tooltipImage: (0, B.Zf)(n.tooltip_image),
                      tooltipTitle: n.tooltip_title,
                      tooltipSubtitle: n.tooltip_subtitle,
                  }
                : void 0,
        shelfImage: (0, B.Zf)(i.shelf_image),
        shelfVideo: (0, B.Zf)(i.shelf_video),
        features: i.features ?? [],
        startsAt: e.starts_at,
        endsAt: e.ends_at,
    };
}
var H = n(859703),
    j = n(738822),
    W = n(405670),
    Y = n(104886),
    K = n(945810);
let $ = "illustration3",
    z = (0, K.mj)({
        name: "2026-08-bounties-mobile-quest-bar",
        kind: "user",
        defaultConfig: { enabled: !1, illustration: $, ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !1 },
        variations: {
            1: { enabled: !0, illustration: "illustration1", ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !1 },
            2: { enabled: !0, illustration: "illustration2", ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !1 },
            3: { enabled: !0, illustration: "illustration3", ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !1 },
            4: { enabled: !0, illustration: $, ctrVariant: 2, hapticFeedbackOnRewardEarnedEnabled: !1 },
            5: { enabled: !0, illustration: $, ctrVariant: 3, hapticFeedbackOnRewardEarnedEnabled: !1 },
            6: { enabled: !0, illustration: $, ctrVariant: 1, hapticFeedbackOnRewardEarnedEnabled: !1 },
            7: { enabled: !0, illustration: $, ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !0 },
        },
    }),
    X = (0, K.mj)({
        name: "2026-01-less-personalized-ads",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var q = n(561844),
    Z = n(710969),
    Q = n(319252),
    J = n(190107),
    ee = n(375708);
let et = new Set([j.uF.QUEST_BAR, j.uF.QUEST_BAR_V2, j.uF.QUEST_BAR_MOBILE]);
async function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await l.Bo.post({
                url: b.Rsh.QUEST_ON_CONSOLE_START(e),
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
                        type: j.xv.RATE_LIMITED,
                        message: ee.intl.string(ee.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? ee.intl.string(ee.t.xSCvBf);
        return {
            errorHints: [{ type: j.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function ei(e) {
    await l.Bo.post({ url: b.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function er() {
    await l.Bo.del({ url: b.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function ea() {
    if (H.A.isFetchingCurrentQuests) return;
    let e = [...H.A.quests.keys()];
    o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
    try {
        let t = await l.Bo.get({ url: b.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
            n = t.body.quests,
            i = n.filter((e) => (0, Q.s2)(e)).map((e) => (0, Q.rO)(e)),
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
        let h = t.body.excluded_quests.map((e) => (0, Q._g)(e));
        o.h.dispatch({
            type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
            quests: s,
            excludedQuests: h,
            questEnrollmentBlockedUntil: r,
            questAccessSuspendedUntil: a,
        });
    } catch (e) {
        o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new d.A(e) });
    }
}
async function es(e) {
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
            url: b.Rsh.QUESTS_HEARTBEAT(t),
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
            userStatus: (0, Q.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        o.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new d.A(e), questId: t, streamKey: n });
    }
}
var el =
    (((i = {}).SUCCESS = "success"),
    (i.CAPTCHA_FAILED = "captcha_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    (i.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
    i);
async function eo(e, t) {
    if (null != t.questContentCTA) {
        let n = t.questContentCTA;
        (0, Y.E5)(Y.kI.STEP_2_CLICKED_INTERNAL, "enroll_in_quest")
            ? (0, _.r)({
                  type: E.F.CLICK_INTERNAL,
                  adCreativeType: a.p.QUEST,
                  adCreativeId: e,
                  questContentCTA: n,
                  surfaceId: t.questContent,
                  sourceQuestContent: t.sourceQuestContent,
                  questContentPosition: t.questContentPosition,
                  questContentRowIndex: t.questContentRowIndex,
              })
            : (0, q.Y5)({
                  questId: e,
                  questContent: t.questContent,
                  questContentCTA: n,
                  questContentPosition: t.questContentPosition,
                  questContentRowIndex: t.questContentRowIndex,
                  sourceQuestContent: t.sourceQuestContent,
              });
    }
    if ((e === J.Fw && (0, g.u)(), H.A.isEnrolling(e))) return { type: "previous_in_flight_request" };
    o.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, Z.L4)(t.questContent),
            i = (0, Z.Gp)(t.questContent, e),
            r = await l.Bo.post({
                url: b.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, Z.Kc)(e, t.questContent),
                    metadata_sealed: null != n ? n : null,
                    traffic_metadata_sealed: null != i ? i : null,
                },
                rejectWithError: !0,
            });
        return (
            o.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, Q.tp)(r.body) }),
            { type: "success" }
        );
    } catch (t) {
        var n;
        return (
            o.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            (n = t) instanceof I.CaptchaCancelError ||
            (null != n &&
                "object" == typeof n &&
                ((400 === n.status && n.body?.captcha_key != null) ||
                    (null != n.captchaFields && Object.keys(n.captchaFields).length > 0) ||
                    n.fields?.captcha_key != null))
                ? { type: "captcha_failed" }
                : { type: "unknown_error" }
        );
    }
}
async function ed(e, t, n) {
    if (!H.A.isClaimingReward(e)) {
        o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let i = (0, Z.L4)(n),
                r = (0, Z.Gp)(n, e),
                a = await l.Bo.post({
                    url: b.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, Z.Kc)(e, n),
                        metadata_sealed: null != i ? i : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                }),
                s = (0, Q.Dv)(a.body);
            return (
                0 === s.errors.length
                    ? o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: e, entitlements: s })
                    : o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: s.errors, questId: e }),
                s
            );
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: new d.A(t), questId: e }), t);
        }
    }
}
async function ec(e) {
    if (!H.A.isFetchingRewardCode(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await l.Bo.get({ url: b.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, Q.Rd)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new d.A(t), questId: e }), t);
        }
    }
}
async function eu(e, t) {
    let n = H.A.isDismissingContent(e),
        i = (0, Z.vy)(t);
    if (!n && i) {
        o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, Z.Gp)(t, e),
                i = await l.Bo.post({
                    url: b.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: { ...(0, Z.Kc)(e, t), traffic_metadata_sealed: null != n ? n : null },
                    rejectWithError: !1,
                });
            (o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, Q.tp)(i.body) }),
                et.has(t) && (0, T.hs)(s.w.QUEST_DISMISSED, { quest_id: e }));
        } catch (t) {
            o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new d.A(t), questId: e });
        }
    }
}
function e_(e) {
    o.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function eE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await l.Bo.post({ url: b.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, Q.tp)(n.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new d.A(t), questId: e });
    }
}
async function eA(e) {
    try {
        let t = await l.Bo.del({ url: b.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, Q.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new d.A(t), questId: e });
    }
}
async function eh(e) {
    try {
        o.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await l.Bo.del({ url: b.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, Q.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new d.A(t), questId: e });
    }
}
function eI(e, t) {
    o.h.dispatch({ type: "QUESTS_PREVIEW_OVERRIDE", placement: e, questId: t });
}
function ef(e, t) {
    o.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function ep() {
    if (!H.A.isFetchingClaimedQuests) {
        o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await l.Bo.get({ url: b.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, Q.S)(e),
            );
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new d.A(e) });
        }
    }
}
function eT(e, t, n) {
    o.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function em(e) {
    o.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function eg(e, t) {
    let n = Date.now();
    (F.recordQuestRequestAttempt("/quests/decision", t, e),
        o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e }));
    try {
        let i,
            r = await (0, h.Ht)(),
            s = await (0, A.sN)(),
            d = X.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            c = (0, p.pc)(),
            _ = null != c ? c() : [],
            E = C.Ay.getGuildsTree(),
            I = _.filter((e) => {
                if ((0, m.tZ)(e)) return !1;
                let t = E.getNode(e);
                return t?.parentId == null || S.A.isFolderExpanded(t.parentId);
            }).slice(0, 50),
            T = d.enabled ? I : void 0,
            g = new URLSearchParams({ placement: String(e) });
        (r?.uuid != null && g.append("client_heartbeat_session_id", r.uuid),
            null != s.uuid && g.append("client_ad_session_id", s.uuid),
            null != T && T.forEach((e) => g.append("visible_guild_ids", e)));
        let R = (
                await l.Bo.get({
                    url: `${b.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${g.toString()}`,
                    rejectWithError: !1,
                    context: { connection_type: N.A.getType() },
                })
            ).body,
            L =
                R.creative?.creative_type !== a.p.BOUNTY ||
                z.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }).enabled
                    ? R.creative
                    : null,
            y = null;
        if (null != L)
            switch (L.creative_type) {
                case a.p.QUEST:
                    ((i = (0, Q.Yn)(L.creative_content)), (y = { type: a.p.QUEST, questId: i.id }));
                    break;
                case a.p.BOUNTY:
                    let D = (0, u.t)(L.creative_content);
                    y = { type: a.p.BOUNTY, bounty: D };
                case a.p.NO_FILL:
            }
        else {
            let e = R.quest;
            null != e && ((i = (0, Q.Yn)(e)), (y = { type: a.p.QUEST, questId: i.id }));
        }
        if (
            (o.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: i,
                creative: y,
                isNoFill: L?.creative_type === a.p.NO_FILL,
                adDecisionData: {
                    ad_id: R.ad_identifiers?.ad_id,
                    adset_id: R.ad_identifiers?.adset_id,
                    ad_set_id: R.ad_identifiers?.ad_set_id,
                    campaign_id: R.ad_identifiers?.campaign_id,
                    creative_id: R.ad_identifiers?.creative_id,
                    creative_type: R.ad_identifiers?.creative_type,
                    decision_id: R.request_id,
                    is_targeted: null != R.ad_identifiers,
                },
                metadataSealed: R.metadata_sealed,
                trafficMetadataSealed: R.traffic_metadata_sealed,
                provenanceMetadataSealed: R.provenance_metadata_sealed,
                adContext: R.ad_context,
                responseTtlSeconds: R.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            F.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(R.request_id),
                currentCreative: y,
                currentFetchedAt: n,
            }),
            null == i)
        )
            return;
        (e === j.p9.DESKTOP_ACCOUNT_PANEL_AREA && w.A.startTracking(i.id),
            O.default.track(b.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, f.A)(),
                quest_id: i.id,
                caller_source: t,
                ad_request_id: String(R.request_id),
            }));
    } catch (i) {
        (F.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            O.default.track(b.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, f.A)(),
                reason: i?.message ?? null,
                api_error: new d.A(i).getAnyErrorMessage(),
                caller_source: t,
            }),
            o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new d.A(i), placement: e }));
    }
}
function eS(e, t) {
    o.h.dispatch({
        type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER",
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function eN(e, t, n) {
    if (H.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let i = H.A.earnedQuestForPlacement.get(t)?.earnedDecisionByQuestId,
        r = e.filter((e) => {
            let t = i?.get(e);
            return !(0, Z.Oh)(t);
        });
    if (0 === r.length) return;
    let a = Date.now();
    (U.recordEarnedRequestAttempt(t, n),
        o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t }));
    try {
        let e = await (0, h.Ht)(),
            n = r.join(","),
            i = await l.Bo.get({ url: b.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            s = i.body.quests,
            d = i.body.response_ttl_seconds,
            c = new Map(
                r.map((e) => {
                    let t = s?.[e];
                    return [e, null != t && (0, Q.s2)(t) ? t : null];
                }),
            );
        (o.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
            serverQuests: c,
            content: t,
            fetchedAt: a,
            responseTtlSeconds: d,
        }),
            U.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: i.body.request_id ?? null,
                fetchedAt: a,
            }));
    } catch (e) {
        (U.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: a }),
            o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new d.A(e), content: t }));
    }
}
async function eC(e, t) {
    await y.A.post({
        url: b.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function eO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, B.tW)(e, B.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void W.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: W.Lx.FAILURE });
    W.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: W.Lx.FETCHING });
    try {
        let t = await l.Bo.get({ url: n.url, rejectWithError: !0 });
        W.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: W.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        W.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: W.Lx.FAILURE });
    }
}
async function eR(e) {
    let t = await l.Bo.get({ url: b.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, Q.Yn)(t.body);
}
async function eL(e) {
    if (!H.A.isFetchingQuestPreview(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await l.Bo.get({ url: b.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, Q.rO)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new d.A(t), questId: e }), t);
        }
    }
}
let ey = 5 * R.A.Millis.MINUTE;
async function eD() {
    let e = j.p9.QUEST_HOME_BANNER_DESKTOP;
    if (c.A.isFetchingAdToDeliverByPlacement(e)) return;
    let t = c.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= ey) return;
    let n = Date.now();
    o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: e });
    try {
        let t = await (0, h.Ht)(),
            i = await (0, A.sN)(),
            r = new URLSearchParams({ placement: String(e), num_decisions_requested: "1" });
        (t?.uuid != null && r.append("client_heartbeat_session_id", t.uuid),
            null != i.uuid && r.append("client_ad_session_id", i.uuid));
        let s = (
                await l.Bo.get({
                    url: `${b.Rsh.QUESTS_GET_DECISIONS}?${r.toString()}`,
                    rejectWithError: !1,
                    context: { connection_type: N.A.getType() },
                })
            ).body,
            d = s.decisions?.[0] ?? null,
            c = d?.creative ?? null,
            u = null;
        (null != c && c.creative_type === a.p.QUEST_HOME_HERO && (u = V(c)),
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
async function ev(e) {
    let t = j.p9.QUEST_HOME_BANNER_DESKTOP,
        n = Date.now();
    o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: t });
    try {
        let i = new URLSearchParams([
                ["ad_creative_ids", e],
                ["placement", String(t)],
            ]),
            r = (await l.Bo.get({ url: `${b.Rsh.QUESTS_CREATIVE_PREVIEW}?${i.toString()}`, rejectWithError: !1 })).body,
            s = r.decisions?.[0] ?? null,
            d = s?.creative ?? null,
            c = null;
        (null != d && d.creative_type === a.p.QUEST_HOME_HERO && (c = V(d)),
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
function eb(e) {
    o.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function eM(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function eP(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}
function eU(e) {
    o.h.dispatch({ type: "QUESTS_MARK_DISCOVERED", questId: e });
}
