"use strict";
n.d(t, {
    WM: () => Z,
    lx: () => ea,
    N1: () => $,
    xB: () => ep,
    Yb: () => en,
    IV: () => eI,
    Oq: () => Q,
    r8: () => ec,
    lk: () => et,
    qY: () => eh,
    jh: () => J,
    CV: () => K,
    UZ: () => ei,
    yO: () => e_,
    Fr: () => ed,
    Oy: () => X,
    Gn: () => el,
    uI: () => ef,
    zh: () => eS,
    R2: () => q,
    d6: () => es,
    g5: () => ee,
    vD: () => W,
    qV: () => eN,
    HA: () => eo,
    Yf: () => eg,
    Ov: () => z,
    QG: () => eu,
    Am: () => eA,
    Zb: () => eT,
    dQ: () => eE,
    Gt: () => er,
}),
    n(323874),
    n(14289),
    n(35956);
var i,
    r = n(562708),
    s = n(323889),
    a = n(636537),
    o = n(228366),
    l = n(181658),
    u = n(859387);
function c(e) {
    var t, n;
    let i = e.creative_content;
    return {
        id: i.id,
        labelTitle: i.label_title,
        labelSubtitle: i.label_subtitle,
        heroImage: (0, u.dv)(i.hero_image),
        heroVideo: (0, u.dv)(i.hero_video),
        sponsorImage: (0, u.dv)(i.sponsor_image),
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
                      image: (0, u.dv)(n.image),
                      tooltipImage: (0, u.dv)(n.tooltip_image),
                      tooltipTitle: n.tooltip_title,
                      tooltipSubtitle: n.tooltip_subtitle,
                  }
                : void 0,
        shelfImage: (0, u.dv)(i.shelf_image),
        shelfVideo: (0, u.dv)(i.shelf_video),
        startsAt: e.starts_at,
        endsAt: e.ends_at,
    };
}
var d = n(881615),
    _ = n(234396),
    f = n(888548),
    h = n(69114),
    p = n(633965),
    E = n(463347),
    m = n(310829),
    g = n(383394),
    A = n(711014),
    I = n(174459),
    T = n(927813),
    S = n(38405),
    N = n(499785),
    y = n(789999),
    C = n(322683),
    v = n(544180),
    O = n(652215);
function R(e) {
    if (Math.random() > 0.1) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, C.O)();
    I.default.track(O.HAw.EARNED_DECISION_ROUNDTRIP, {
        ...(0, h.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: t,
        mobile_network_type: v.A.getType(),
        ...(null != n && { mobile_signal_strength_level: n }),
        caller_source: e.callerSource,
        request_id: e.requestId,
        fetched_at: e.fetchedAt,
        is_foregrounded: (0, y.R)(),
    });
}
class b {
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
                null != t && (R(t), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordEarnedRequestApiResponse(e, t) {
        let { wasSuccessful: n, requestId: i = null, fetchedAt: r = null } = t,
            s = this.pendingRequests.get(e);
        null != s &&
            (R({ ...s, apiResponseTimestamp: Date.now(), wasSuccessful: n, requestId: i, fetchedAt: r }),
            this.pendingRequests.delete(e));
    }
}
let D = new b();
var L = n(260364),
    w = n(859703),
    M = n(302654);
function P(e, t, n) {
    if (Math.random() > 0.1) return;
    let i = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = (0, C.O)();
    I.default.track(O.HAw.QUEST_DECISION_ROUNDTRIP, {
        ...(0, h.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: i,
        mobile_network_type: v.A.getType(),
        ...(null != r && { mobile_signal_strength_level: r }),
        caller_source: e.callerSource,
        ad_request_id: e.adRequestId,
        fetched_at: n,
        previous_ad_request_id: e.previousAdDecision?.adDecisionData?.decision_id ?? null,
        previous_fetched_at: e.previousAdDecision?.fetchedAt ?? null,
        transition_case: t,
        is_foregrounded: (0, y.R)(),
    });
}
class x {
    pendingRequests = new Map();
    recordQuestRequestAttempt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            { enableNewRequestBehavior: i } = M.A.getConfig({ location: "recordQuestRequestAttempt" }),
            r = i && null != n ? (w.A.questAdDecisionByPlacement.get(n) ?? null) : null,
            s = {
                initialSendTimestamp: Date.now(),
                endpoint: e,
                apiResponseTimestamp: null,
                wasSuccessful: !1,
                callerSource: t,
                adRequestId: null,
                previousAdDecision: r,
                placement: n,
            };
        this.pendingRequests.set(e, s),
            setTimeout(() => {
                let t = this.pendingRequests.get(e);
                null != t && (P(t, "timeout", null), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n, adRequestId: i = null, currentQuestId: r = null, currentFetchedAt: s = null } = t,
            a = this.pendingRequests.get(e);
        if (null != a) {
            let t,
                u,
                { enableNewRequestBehavior: c } = M.A.getConfig({ location: "recordQuestRequestApiResponse" });
            if (c) {
                var o, l;
                let e, n, c;
                (o = a.previousAdDecision),
                    (l =
                        null !== s
                            ? {
                                  questId: r,
                                  adCreativeId: r,
                                  fetchedAt: s,
                                  ttlMillis: 0,
                                  adDecisionData: null != i ? { decision_id: i } : void 0,
                              }
                            : null),
                    (n = (e = (e) => (null == e ? "null" : null == e.questId ? "no_serve" : "quest"))(o)),
                    (c = e(l)),
                    (t =
                        "quest" !== n || "quest" !== c
                            ? `${n}_to_${c}`
                            : o?.questId === l?.questId
                              ? "same_quest"
                              : "different_quest"),
                    (u = s);
            } else (t = "legacy"), (u = null);
            P({ ...a, apiResponseTimestamp: Date.now(), wasSuccessful: n, adRequestId: i }, t, u),
                this.pendingRequests.delete(e);
        }
    }
}
let U = new x();
var k = n(507107),
    G = n(405670);
let F = (0, n(945810).mj)({
    name: "2026-01-less-personalized-ads",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var V = n(561844),
    B = n(710969),
    H = n(319252),
    j = n(190107),
    Y = n(375708);
async function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await a.Bo.post({
                url: O.Rsh.QUEST_ON_CONSOLE_START(e),
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
        let e = new l.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: k.xv.RATE_LIMITED,
                        message: Y.intl.string(Y.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? Y.intl.string(Y.t.xSCvBf);
        return {
            errorHints: [{ type: k.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function K(e) {
    await a.Bo.post({ url: O.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function z() {
    await a.Bo.del({ url: O.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function $() {
    if (w.A.isFetchingCurrentQuests) return;
    let e = [...w.A.quests.keys()];
    o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
    try {
        let t = await a.Bo.get({ url: O.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
            n = t.body.quests,
            i = n.filter((e) => (0, H.s2)(e)).map((e) => (0, H.rO)(e)),
            r = t.body.quest_enrollment_blocked_until,
            s = i.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
            l = n.map((e) => e.id),
            u = i.map((e) => e.id),
            c = l.filter((e) => !u.includes(e)),
            d = s.map((e) => e.id),
            _ = u.filter((e) => !d.includes(e)),
            f = e.filter((e) => !d.includes(e));
        S.A.addBreadcrumb({
            category: "quests.fetch",
            message: "fetchCurrentQuests completed",
            data: {
                rawCount: l.length,
                rawIds: l,
                validCount: d.length,
                validIds: d,
                prevQuestIds: e,
                droppedByConfigVersion: c,
                droppedByPlatformFilter: _,
                removedFromStore: f,
            },
        });
        let h = t.body.excluded_quests.map((e) => (0, H._g)(e));
        o.h.dispatch({
            type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
            quests: s,
            excludedQuests: h,
            questEnrollmentBlockedUntil: r,
        });
    } catch (e) {
        o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new l.A(e) });
    }
}
async function q(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: s = !1, executableFingerprint: a } = e;
    try {
        let e = await N.A.post({
            url: O.Rsh.QUESTS_HEARTBEAT(t),
            body: { stream_key: n, application_id: i, terminal: s, executable_fingerprint: a },
            trackedActionData: {
                event: r.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    application_id: i,
                    terminal: s,
                    is_overlay: __OVERLAY__,
                    stack_trace: Error().stack ?? "",
                    is_playtime_eligible: !0,
                },
            },
            rejectWithError: !1,
        });
        o.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, H.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        o.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new l.A(e), questId: t, streamKey: n });
    }
}
var Z =
    (((i = {}).SUCCESS = "success"),
    (i.CAPTCHA_FAILED = "captcha_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    (i.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
    i);
async function X(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, V.Y5)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex,
                sourceQuestContent: t.sourceQuestContent,
            }),
        e === j.Fw && (0, m.u)(),
        w.A.isEnrolling(e))
    )
        return { type: "previous_in_flight_request" };
    o.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, B.L4)(t.questContent),
            i = (0, B.Gp)(t.questContent, e),
            r = await a.Bo.post({
                url: O.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, B.Kc)(e, t.questContent),
                    metadata_sealed: null != n ? n : null,
                    traffic_metadata_sealed: null != i ? i : null,
                },
                rejectWithError: !0,
            });
        return (
            o.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, H.tp)(r.body) }),
            { type: "success" }
        );
    } catch (t) {
        var n;
        return (
            o.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            (n = t) instanceof f.CaptchaCancelError ||
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
async function Q(e, t, n) {
    if (!w.A.isClaimingReward(e)) {
        o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let i = (0, B.L4)(n),
                r = (0, B.Gp)(n, e),
                s = await a.Bo.post({
                    url: O.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, B.Kc)(e, n),
                        metadata_sealed: null != i ? i : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                }),
                l = (0, H.Dv)(s.body);
            return (
                0 === l.errors.length
                    ? o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: e, entitlements: l })
                    : o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: l.errors, questId: e }),
                l
            );
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
async function J(e) {
    if (!w.A.isFetchingRewardCode(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await a.Bo.get({ url: O.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, H.Rd)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
async function ee(e, t) {
    let n = w.A.isDismissingContent(e),
        i = (0, B.vy)(t);
    if (!n && i) {
        o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, B.Gp)(t, e),
                i = await a.Bo.post({
                    url: O.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: { ...(0, B.Kc)(e, t), traffic_metadata_sealed: null != n ? n : null },
                    rejectWithError: !1,
                });
            o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, H.tp)(i.body) });
        } catch (t) {
            o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new l.A(t), questId: e });
        }
    }
}
function et(e) {
    o.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await a.Bo.post({ url: O.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, H.tp)(n.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
async function ei(e) {
    try {
        let t = await a.Bo.del({ url: O.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, H.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
async function er(e) {
    try {
        o.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await a.Bo.del({ url: O.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, H.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
function es(e) {
    o.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function ea(e, t) {
    o.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function eo() {
    if (!w.A.isFetchingClaimedQuests) {
        o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await a.Bo.get({ url: O.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, H.S)(e),
            );
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new l.A(e) });
        }
    }
}
function el(e, t, n) {
    o.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function eu(e) {
    o.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function ec(e, t) {
    let n = Date.now();
    U.recordQuestRequestAttempt("/quests/decision", t, e),
        o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let i,
            r = await (0, _.Ht)(),
            l = await (0, d.sN)(),
            u = F.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            c = (0, p.pc)(),
            f = null != c ? c() : [],
            m = A.Ay.getGuildsTree(),
            T = f
                .filter((e) => {
                    if ((0, E.tZ)(e)) return !1;
                    let t = m.getNode(e);
                    return t?.parentId == null || g.A.isFolderExpanded(t.parentId);
                })
                .slice(0, 50),
            S = u.enabled ? T : void 0,
            N = new URLSearchParams({ placement: String(e) });
        r?.uuid != null && N.append("client_heartbeat_session_id", r.uuid),
            null != l.uuid && N.append("client_ad_session_id", l.uuid),
            null != S && S.forEach((e) => N.append("visible_guild_ids", e));
        let y = (await a.Bo.get({ url: `${O.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${N.toString()}`, rejectWithError: !1 }))
                .body,
            C = y.creative;
        if (null != C) C.creative_type === s.p.QUEST && (i = (0, H.Yn)(C.creative_content));
        else {
            let e = y.quest;
            i = null != e ? (0, H.Yn)(e) : void 0;
        }
        if (
            (o.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: i,
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
                adContext: y.ad_context,
                responseTtlSeconds: y.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            U.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(y.request_id),
                currentQuestId: i?.id ?? null,
                currentFetchedAt: n,
            }),
            null == i)
        )
            return;
        e === k.yW.DESKTOP_ACCOUNT_PANEL_AREA && L.A.startTracking(i.id),
            I.default.track(O.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, h.A)(),
                quest_id: i.id,
                caller_source: t,
                ad_request_id: String(y.request_id),
            });
    } catch (i) {
        U.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            I.default.track(O.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, h.A)(),
                reason: i?.message ?? null,
                api_error: new l.A(i).getAnyErrorMessage(),
                caller_source: t,
            }),
            o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new l.A(i), placement: e });
    }
}
function ed(e, t) {
    o.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function e_(e, t, n) {
    if (w.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let i = w.A.earnedQuestForPlacement.get(t)?.earnedDecisionByQuestId,
        r = e.filter((e) => {
            let t = i?.get(e);
            return !(0, B.Oh)(t);
        });
    if (0 === r.length) return;
    let s = Date.now();
    D.recordEarnedRequestAttempt(t, n),
        o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, _.Ht)(),
            n = r.join(","),
            i = await a.Bo.get({ url: O.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            l = i.body.quests,
            u = i.body.response_ttl_seconds,
            c = new Map(
                r.map((e) => {
                    let t = l?.[e];
                    return [e, null != t && (0, H.s2)(t) ? t : null];
                }),
            );
        o.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
            serverQuests: c,
            content: t,
            fetchedAt: s,
            responseTtlSeconds: u,
        }),
            D.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: i.body.request_id ?? null,
                fetchedAt: s,
            });
    } catch (e) {
        D.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: s }),
            o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new l.A(e), content: t });
    }
}
async function ef(e, t) {
    await N.A.post({
        url: O.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function eh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, u.tW)(e, u.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void G.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: G.Lx.FAILURE });
    G.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: G.Lx.FETCHING });
    try {
        let t = await a.Bo.get({ url: n.url, rejectWithError: !0 });
        G.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: G.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        G.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: G.Lx.FAILURE });
    }
}
async function ep(e) {
    let t = await a.Bo.get({ url: O.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, H.Yn)(t.body);
}
async function eE(e) {
    if (!w.A.isFetchingQuestPreview(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await a.Bo.get({ url: O.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, H.rO)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
let em = 5 * T.A.Millis.MINUTE;
async function eg() {
    if (w.A.isFetchingQuestHomeHero()) return;
    let e = w.A.getLastFetchedQuestHomeHero();
    if (!(null != e && Date.now() - e <= em)) {
        o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN" });
        try {
            let e = [k.gh.QUEST_HOME_BANNER],
                t = await a.Bo.get({
                    url: O.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: k.vg.WEB },
                    rejectWithError: !1,
                });
            o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: (0, H.oc)(t.body) });
        } catch (e) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new l.A(e) }), e);
        }
    }
}
async function eA() {
    let e = k.yW.QUEST_HOME_BANNER_DESKTOP;
    if (w.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let t = w.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= em) return;
    let n = Date.now();
    o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_BEGIN", placement: e });
    try {
        let t = await (0, _.Ht)(),
            i = await (0, d.sN)(),
            r = new URLSearchParams({ placement: String(e), num_decisions_requested: "1" });
        t?.uuid != null && r.append("client_heartbeat_session_id", t.uuid),
            null != i.uuid && r.append("client_ad_session_id", i.uuid);
        let l = (await a.Bo.get({ url: `${O.Rsh.QUESTS_GET_DECISIONS}?${r.toString()}`, rejectWithError: !1 })).body,
            u = l.decisions?.[0] ?? null,
            f = u?.creative ?? null,
            h = null;
        null != f && f.creative_type === s.p.QUEST_HOME_HERO && (h = c(f)),
            o.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_SUCCESS",
                questHomeHero: h,
                adDecisionData: {
                    ad_id: u?.ad_identifiers?.ad_id,
                    ad_set_id: u?.ad_identifiers?.ad_set_id,
                    campaign_id: u?.ad_identifiers?.campaign_id,
                    creative_id: u?.ad_identifiers?.creative_id,
                    creative_type: u?.ad_identifiers?.creative_type,
                    decision_id: l.request_id,
                    is_targeted: u?.ad_identifiers != null,
                },
                metadataSealed: u?.metadata_sealed,
                trafficMetadataSealed: u?.traffic_metadata_sealed,
                adContext: u?.ad_context,
                responseTtlSeconds: u?.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            });
    } catch (t) {
        throw (
            (o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_FAILURE", error: new l.A(t), placement: e }),
            t)
        );
    }
}
async function eI(e) {
    let t = k.yW.QUEST_HOME_BANNER_DESKTOP,
        n = Date.now();
    o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_BEGIN", placement: t });
    try {
        let i = new URLSearchParams();
        i.append("ad_creative_ids", e);
        let r = (await a.Bo.get({ url: `${O.Rsh.QUESTS_CREATIVE_PREVIEW}?${i.toString()}`, rejectWithError: !1 })).body,
            l = r.decisions?.[0] ?? null,
            u = l?.creative ?? null,
            d = null;
        null != u && u.creative_type === s.p.QUEST_HOME_HERO && (d = c(u)),
            o.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_SUCCESS",
                questHomeHero: d,
                adDecisionData: {
                    ad_id: l?.ad_identifiers?.ad_id,
                    ad_set_id: l?.ad_identifiers?.ad_set_id,
                    campaign_id: l?.ad_identifiers?.campaign_id,
                    creative_id: l?.ad_identifiers?.creative_id,
                    creative_type: l?.ad_identifiers?.creative_type,
                    decision_id: r.request_id,
                    is_targeted: l?.ad_identifiers != null,
                },
                metadataSealed: l?.metadata_sealed,
                trafficMetadataSealed: l?.traffic_metadata_sealed,
                adContext: l?.ad_context,
                responseTtlSeconds: l?.response_ttl_seconds,
                placement: t,
                fetchedAt: n,
            });
    } catch (e) {
        throw (
            (o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_FAILURE", error: new l.A(e), placement: t }),
            e)
        );
    }
}
function eT(e) {
    o.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function eS(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function eN(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}
