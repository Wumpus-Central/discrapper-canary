"use strict";
n.d(t, {
    sB: () => eO,
    WM: () => Q,
    lx: () => eo,
    N1: () => Z,
    xB: () => ef,
    Yb: () => er,
    IV: () => eg,
    Oq: () => ee,
    r8: () => e_,
    lk: () => ei,
    qY: () => eI,
    jh: () => et,
    CV: () => z,
    UZ: () => ea,
    yO: () => eA,
    Fr: () => eE,
    Oy: () => J,
    Gn: () => ec,
    uI: () => eh,
    L4: () => el,
    zh: () => eN,
    R2: () => X,
    g5: () => en,
    vD: () => $,
    qV: () => eC,
    HA: () => ed,
    Yf: () => em,
    Ov: () => q,
    QG: () => eu,
    Zb: () => eS,
    dQ: () => ep,
    Gt: () => es,
}),
    n(323874),
    n(14289),
    n(35956);
var i,
    r = n(562708),
    a = n(323889),
    s = n(562465),
    l = n(228366),
    o = n(181658),
    d = n(274670),
    c = n(144779),
    u = n(881615),
    _ = n(404851),
    E = n(888548),
    A = n(69114),
    h = n(633965),
    I = n(463347),
    f = n(310829),
    p = n(383394),
    T = n(544180),
    m = n(711014),
    g = n(174459),
    S = n(927813),
    N = n(38405),
    C = n(499785),
    O = n(789999),
    R = n(322683),
    L = n(652215);
function D(e) {
    if (Math.random() > 0.1) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, R.O)();
    g.default.track(L.HAw.EARNED_DECISION_ROUNDTRIP, {
        ...(0, A.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: t,
        mobile_network_type: T.A.getType(),
        ...(null != n && { mobile_signal_strength_level: n }),
        caller_source: e.callerSource,
        request_id: e.requestId,
        fetched_at: e.fetchedAt,
        is_foregrounded: (0, O.R)(),
    });
}
class y {
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
        this.pendingRequests.set(e, n),
            setTimeout(() => {
                let t = this.pendingRequests.get(e);
                null != t && (D(t), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordEarnedRequestApiResponse(e, t) {
        let { wasSuccessful: n, requestId: i = null, fetchedAt: r = null } = t,
            a = this.pendingRequests.get(e);
        null != a &&
            (D({ ...a, apiResponseTimestamp: Date.now(), wasSuccessful: n, requestId: i, fetchedAt: r }),
            this.pendingRequests.delete(e));
    }
}
let v = new y();
var b = n(260364),
    M = n(859703);
function P(e, t, n) {
    if (Math.random() > 0.1) return;
    let i = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = (0, R.O)();
    g.default.track(L.HAw.QUEST_DECISION_ROUNDTRIP, {
        ...(0, A.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: i,
        mobile_network_type: T.A.getType(),
        ...(null != r && { mobile_signal_strength_level: r }),
        caller_source: e.callerSource,
        ad_request_id: e.adRequestId,
        fetched_at: n,
        previous_ad_request_id: e.previousAdDecision?.adDecisionData?.decision_id ?? null,
        previous_fetched_at: e.previousAdDecision?.fetchedAt ?? null,
        transition_case: t,
        is_foregrounded: (0, O.R)(),
    });
}
class U {
    pendingRequests = new Map();
    recordQuestRequestAttempt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = null != n ? (M.A.questAdDecisionByPlacement.get(n) ?? null) : null,
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
        this.pendingRequests.set(e, r),
            setTimeout(() => {
                let t = this.pendingRequests.get(e);
                null != t && (P(t, "timeout", null), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n, adRequestId: i = null, currentQuestId: r = null, currentFetchedAt: a = null } = t,
            s = this.pendingRequests.get(e);
        if (null != s) {
            let t = (function (e, t) {
                function n(e) {
                    return null == e ? "null" : null == e.questId ? "no_serve" : "quest";
                }
                let i = n(e),
                    r = n(t);
                return "quest" !== i || "quest" !== r
                    ? `${i}_to_${r}`
                    : e?.questId === t?.questId
                      ? "same_quest"
                      : "different_quest";
            })(
                s.previousAdDecision,
                null !== a
                    ? {
                          questId: r,
                          adCreativeId: r,
                          fetchedAt: a,
                          ttlMillis: 0,
                          adDecisionData: null != i ? { decision_id: i } : void 0,
                      }
                    : null,
            );
            P({ ...s, apiResponseTimestamp: Date.now(), wasSuccessful: n, adRequestId: i }, t, a),
                this.pendingRequests.delete(e);
        }
    }
}
let w = new U();
var G = n(291749);
function x(e) {
    var t, n;
    let i = e.creative_content;
    return {
        id: i.id,
        labelTitle: i.label_title,
        labelSubtitle: i.label_subtitle,
        heroImage: (0, G.dv)(i.hero_image),
        heroVideo: (0, G.Zf)(i.hero_video),
        sponsorImage: (0, G.Zf)(i.sponsor_image),
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
                      image: (0, G.Zf)(n.image),
                      tooltipImage: (0, G.Zf)(n.tooltip_image),
                      tooltipTitle: n.tooltip_title,
                      tooltipSubtitle: n.tooltip_subtitle,
                  }
                : void 0,
        shelfImage: (0, G.Zf)(i.shelf_image),
        shelfVideo: (0, G.Zf)(i.shelf_video),
        startsAt: e.starts_at,
        endsAt: e.ends_at,
    };
}
var k = n(24001),
    F = n(405670),
    V = n(104886);
let B = (0, n(945810).mj)({
    name: "2026-01-less-personalized-ads",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var H = n(561844),
    j = n(710969),
    W = n(319252),
    Y = n(190107),
    K = n(375708);
async function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await s.Bo.post({
                url: L.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            l.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, 5) };
    } catch (n) {
        let e = new o.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: k.xv.RATE_LIMITED,
                        message: K.intl.string(K.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? K.intl.string(K.t.xSCvBf);
        return {
            errorHints: [{ type: k.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function z(e) {
    await s.Bo.post({ url: L.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function q() {
    await s.Bo.del({ url: L.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function Z() {
    if (M.A.isFetchingCurrentQuests) return;
    let e = [...M.A.quests.keys()];
    l.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
    try {
        let t = await s.Bo.get({ url: L.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
            n = t.body.quests,
            i = n.filter((e) => (0, W.s2)(e)).map((e) => (0, W.rO)(e)),
            r = t.body.quest_enrollment_blocked_until,
            a = t.body.quest_access_suspended_until,
            o = i.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
            d = n.map((e) => e.id),
            c = i.map((e) => e.id),
            u = d.filter((e) => !c.includes(e)),
            _ = o.map((e) => e.id),
            E = c.filter((e) => !_.includes(e)),
            A = e.filter((e) => !_.includes(e));
        N.A.addBreadcrumb({
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
        let h = t.body.excluded_quests.map((e) => (0, W._g)(e));
        l.h.dispatch({
            type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
            quests: o,
            excludedQuests: h,
            questEnrollmentBlockedUntil: r,
            questAccessSuspendedUntil: a,
        });
    } catch (e) {
        l.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new o.A(e) });
    }
}
async function X(e) {
    let {
        questId: t,
        streamKey: n,
        applicationId: i,
        terminal: a = !1,
        executablePath: s,
        executableFingerprint: d,
    } = e;
    try {
        let e = await C.A.post({
            url: L.Rsh.QUESTS_HEARTBEAT(t),
            body: { stream_key: n, application_id: i, terminal: a, executable_path: s, executable_fingerprint: d },
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
        l.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, W.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        l.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new o.A(e), questId: t, streamKey: n });
    }
}
var Q =
    (((i = {}).SUCCESS = "success"),
    (i.CAPTCHA_FAILED = "captcha_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    (i.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
    i);
async function J(e, t) {
    if (null != t.questContentCTA) {
        let n = t.questContentCTA;
        (0, V.E5)(V.kI.STEP_2_CLICKED_INTERNAL, "enroll_in_quest")
            ? (0, d.r)({
                  type: c.F.CLICK_INTERNAL,
                  adCreativeType: a.p.QUEST,
                  adCreativeId: e,
                  questContentCTA: n,
                  surfaceId: t.questContent,
                  sourceQuestContent: t.sourceQuestContent,
                  questContentPosition: t.questContentPosition,
                  questContentRowIndex: t.questContentRowIndex,
              })
            : (0, H.Y5)({
                  questId: e,
                  questContent: t.questContent,
                  questContentCTA: n,
                  questContentPosition: t.questContentPosition,
                  questContentRowIndex: t.questContentRowIndex,
                  sourceQuestContent: t.sourceQuestContent,
              });
    }
    if ((e === Y.Fw && (0, f.u)(), M.A.isEnrolling(e))) return { type: "previous_in_flight_request" };
    l.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, j.L4)(t.questContent),
            i = (0, j.Gp)(t.questContent, e),
            r = await s.Bo.post({
                url: L.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, j.Kc)(e, t.questContent),
                    metadata_sealed: null != n ? n : null,
                    traffic_metadata_sealed: null != i ? i : null,
                },
                rejectWithError: !0,
            });
        return (
            l.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, W.tp)(r.body) }),
            { type: "success" }
        );
    } catch (t) {
        var n;
        return (
            l.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            (n = t) instanceof E.CaptchaCancelError ||
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
async function ee(e, t, n) {
    if (!M.A.isClaimingReward(e)) {
        l.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let i = (0, j.L4)(n),
                r = (0, j.Gp)(n, e),
                a = await s.Bo.post({
                    url: L.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, j.Kc)(e, n),
                        metadata_sealed: null != i ? i : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                }),
                o = (0, W.Dv)(a.body);
            return (
                0 === o.errors.length
                    ? l.h.dispatch({ type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: e, entitlements: o })
                    : l.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: o.errors, questId: e }),
                o
            );
        } catch (t) {
            throw (l.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
async function et(e) {
    if (!M.A.isFetchingRewardCode(e)) {
        l.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: L.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            l.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, W.Rd)(t.body) });
        } catch (t) {
            throw (l.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
async function en(e, t) {
    let n = M.A.isDismissingContent(e),
        i = (0, j.vy)(t);
    if (!n && i) {
        l.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, j.Gp)(t, e),
                i = await s.Bo.post({
                    url: L.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: { ...(0, j.Kc)(e, t), traffic_metadata_sealed: null != n ? n : null },
                    rejectWithError: !1,
                });
            l.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, W.tp)(i.body) });
        } catch (t) {
            l.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new o.A(t), questId: e });
        }
    }
}
function ei(e) {
    l.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function er(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await s.Bo.post({ url: L.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, W.tp)(n.body) });
    } catch (t) {
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
async function ea(e) {
    try {
        let t = await s.Bo.del({ url: L.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, W.tp)(t.body) });
    } catch (t) {
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
async function es(e) {
    try {
        l.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await s.Bo.del({ url: L.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, W.tp)(t.body) });
    } catch (t) {
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
function el(e, t) {
    l.h.dispatch({ type: "QUESTS_PREVIEW_OVERRIDE", placement: e, questId: t });
}
function eo(e, t) {
    l.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function ed() {
    if (!M.A.isFetchingClaimedQuests) {
        l.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await s.Bo.get({ url: L.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, W.S)(e),
            );
            l.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            l.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new o.A(e) });
        }
    }
}
function ec(e, t, n) {
    l.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function eu(e) {
    l.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function e_(e, t) {
    let n = Date.now();
    w.recordQuestRequestAttempt("/quests/decision", t, e),
        l.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let i,
            r = await (0, _.Ht)(),
            o = await (0, u.sN)(),
            d = B.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            c = (0, h.pc)(),
            E = null != c ? c() : [],
            f = m.Ay.getGuildsTree(),
            S = E.filter((e) => {
                if ((0, I.tZ)(e)) return !1;
                let t = f.getNode(e);
                return t?.parentId == null || p.A.isFolderExpanded(t.parentId);
            }).slice(0, 50),
            N = d.enabled ? S : void 0,
            C = new URLSearchParams({ placement: String(e) });
        r?.uuid != null && C.append("client_heartbeat_session_id", r.uuid),
            null != o.uuid && C.append("client_ad_session_id", o.uuid),
            null != N && N.forEach((e) => C.append("visible_guild_ids", e));
        let O = (
                await s.Bo.get({
                    url: `${L.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${C.toString()}`,
                    rejectWithError: !1,
                    context: { connection_type: T.A.getType() },
                })
            ).body,
            R = O.creative;
        if (null != R) R.creative_type === a.p.QUEST && (i = (0, W.Yn)(R.creative_content));
        else {
            let e = O.quest;
            i = null != e ? (0, W.Yn)(e) : void 0;
        }
        if (
            (l.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: i,
                adDecisionData: {
                    ad_id: O.ad_identifiers?.ad_id,
                    adset_id: O.ad_identifiers?.adset_id,
                    ad_set_id: O.ad_identifiers?.ad_set_id,
                    campaign_id: O.ad_identifiers?.campaign_id,
                    creative_id: O.ad_identifiers?.creative_id,
                    creative_type: O.ad_identifiers?.creative_type,
                    decision_id: O.request_id,
                    is_targeted: null != O.ad_identifiers,
                },
                metadataSealed: O.metadata_sealed,
                trafficMetadataSealed: O.traffic_metadata_sealed,
                adContext: O.ad_context,
                responseTtlSeconds: O.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            w.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(O.request_id),
                currentQuestId: i?.id ?? null,
                currentFetchedAt: n,
            }),
            null == i)
        )
            return;
        e === k.p9.DESKTOP_ACCOUNT_PANEL_AREA && b.A.startTracking(i.id),
            g.default.track(L.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, A.A)(),
                quest_id: i.id,
                caller_source: t,
                ad_request_id: String(O.request_id),
            });
    } catch (i) {
        w.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            g.default.track(L.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, A.A)(),
                reason: i?.message ?? null,
                api_error: new o.A(i).getAnyErrorMessage(),
                caller_source: t,
            }),
            l.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new o.A(i), placement: e });
    }
}
function eE(e, t) {
    l.h.dispatch({
        type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER",
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function eA(e, t, n) {
    if (M.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let i = M.A.earnedQuestForPlacement.get(t)?.earnedDecisionByQuestId,
        r = e.filter((e) => {
            let t = i?.get(e);
            return !(0, j.Oh)(t);
        });
    if (0 === r.length) return;
    let a = Date.now();
    v.recordEarnedRequestAttempt(t, n),
        l.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, _.Ht)(),
            n = r.join(","),
            i = await s.Bo.get({ url: L.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            o = i.body.quests,
            d = i.body.response_ttl_seconds,
            c = new Map(
                r.map((e) => {
                    let t = o?.[e];
                    return [e, null != t && (0, W.s2)(t) ? t : null];
                }),
            );
        l.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
            serverQuests: c,
            content: t,
            fetchedAt: a,
            responseTtlSeconds: d,
        }),
            v.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: i.body.request_id ?? null,
                fetchedAt: a,
            });
    } catch (e) {
        v.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: a }),
            l.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new o.A(e), content: t });
    }
}
async function eh(e, t) {
    await C.A.post({
        url: L.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function eI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, G.tW)(e, G.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void F.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: F.Lx.FAILURE });
    F.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: F.Lx.FETCHING });
    try {
        let t = await s.Bo.get({ url: n.url, rejectWithError: !0 });
        F.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: F.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        F.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: F.Lx.FAILURE });
    }
}
async function ef(e) {
    let t = await s.Bo.get({ url: L.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, W.Yn)(t.body);
}
async function ep(e) {
    if (!M.A.isFetchingQuestPreview(e)) {
        l.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: L.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            l.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, W.rO)(t.body) });
        } catch (t) {
            throw (l.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
let eT = 5 * S.A.Millis.MINUTE;
async function em() {
    let e = k.p9.QUEST_HOME_BANNER_DESKTOP;
    if (M.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let t = M.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= eT) return;
    let n = Date.now();
    l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: e });
    try {
        let t = await (0, _.Ht)(),
            i = await (0, u.sN)(),
            r = new URLSearchParams({ placement: String(e), num_decisions_requested: "1" });
        t?.uuid != null && r.append("client_heartbeat_session_id", t.uuid),
            null != i.uuid && r.append("client_ad_session_id", i.uuid);
        let o = (
                await s.Bo.get({
                    url: `${L.Rsh.QUESTS_GET_DECISIONS}?${r.toString()}`,
                    rejectWithError: !1,
                    context: { connection_type: T.A.getType() },
                })
            ).body,
            d = o.decisions?.[0] ?? null,
            c = d?.creative ?? null,
            E = null;
        null != c && c.creative_type === a.p.QUEST_HOME_HERO && (E = x(c)),
            l.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS",
                questHomeHero: E,
                adDecisionData: {
                    ad_id: d?.ad_identifiers?.ad_id,
                    ad_set_id: d?.ad_identifiers?.ad_set_id,
                    campaign_id: d?.ad_identifiers?.campaign_id,
                    creative_id: d?.ad_identifiers?.creative_id,
                    creative_type: d?.ad_identifiers?.creative_type,
                    decision_id: o.request_id,
                    is_targeted: d?.ad_identifiers != null,
                },
                metadataSealed: d?.metadata_sealed,
                trafficMetadataSealed: d?.traffic_metadata_sealed,
                adContext: d?.ad_context,
                responseTtlSeconds: d?.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            });
    } catch (t) {
        throw (l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new o.A(t), placement: e }), t);
    }
}
async function eg(e) {
    let t = k.p9.QUEST_HOME_BANNER_DESKTOP,
        n = Date.now();
    l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: t });
    try {
        let i = new URLSearchParams();
        i.append("ad_creative_ids", e);
        let r = (await s.Bo.get({ url: `${L.Rsh.QUESTS_CREATIVE_PREVIEW}?${i.toString()}`, rejectWithError: !1 })).body,
            o = r.decisions?.[0] ?? null,
            d = o?.creative ?? null,
            c = null;
        null != d && d.creative_type === a.p.QUEST_HOME_HERO && (c = x(d)),
            l.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS",
                questHomeHero: c,
                adDecisionData: {
                    ad_id: o?.ad_identifiers?.ad_id,
                    ad_set_id: o?.ad_identifiers?.ad_set_id,
                    campaign_id: o?.ad_identifiers?.campaign_id,
                    creative_id: o?.ad_identifiers?.creative_id,
                    creative_type: o?.ad_identifiers?.creative_type,
                    decision_id: r.request_id,
                    is_targeted: o?.ad_identifiers != null,
                },
                metadataSealed: o?.metadata_sealed,
                trafficMetadataSealed: o?.traffic_metadata_sealed,
                adContext: o?.ad_context,
                responseTtlSeconds: o?.response_ttl_seconds,
                placement: t,
                fetchedAt: n,
            });
    } catch (e) {
        throw (l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new o.A(e), placement: t }), e);
    }
}
function eS(e) {
    l.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function eN(e, t) {
    l.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function eC(e, t) {
    l.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}
function eO(e) {
    l.h.dispatch({ type: "QUESTS_MARK_DISCOVERED", questId: e });
}
