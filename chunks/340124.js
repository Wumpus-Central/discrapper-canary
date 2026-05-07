"use strict";
n.d(t, {
    WM: () => $,
    lx: () => er,
    N1: () => K,
    xB: () => ef,
    Yb: () => ee,
    Oq: () => Z,
    r8: () => el,
    lk: () => J,
    qY: () => e_,
    jh: () => X,
    CV: () => Y,
    UZ: () => et,
    yO: () => ec,
    Fr: () => eu,
    Oy: () => q,
    Gn: () => ea,
    uI: () => ed,
    zh: () => eA,
    R2: () => z,
    d6: () => ei,
    g5: () => Q,
    vD: () => j,
    qV: () => eI,
    HA: () => es,
    Yf: () => eE,
    Ov: () => W,
    QG: () => eo,
    Am: () => em,
    Zb: () => eg,
    dQ: () => eh,
    Gt: () => en,
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
    u = n(859387),
    c = n(881615),
    d = n(234396),
    _ = n(888548),
    f = n(69114),
    h = n(633965),
    p = n(463347),
    E = n(310829),
    m = n(383394),
    g = n(711014),
    A = n(174459),
    I = n(927813),
    T = n(499785),
    S = n(789999),
    N = n(322683),
    y = n(544180),
    C = n(652215);
function v(e) {
    if (Math.random() > 0.1) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, N.O)();
    A.default.track(C.HAw.EARNED_DECISION_ROUNDTRIP, {
        ...(0, f.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: t,
        mobile_network_type: y.A.getType(),
        ...(null != n && { mobile_signal_strength_level: n }),
        caller_source: e.callerSource,
        request_id: e.requestId,
        fetched_at: e.fetchedAt,
        is_foregrounded: (0, S.R)(),
    });
}
class O {
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
                null != t && (v(t), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordEarnedRequestApiResponse(e, t) {
        let { wasSuccessful: n, requestId: i = null, fetchedAt: r = null } = t,
            s = this.pendingRequests.get(e);
        null != s &&
            (v({ ...s, apiResponseTimestamp: Date.now(), wasSuccessful: n, requestId: i, fetchedAt: r }),
            this.pendingRequests.delete(e));
    }
}
let R = new O();
var b = n(260364),
    D = n(859703),
    L = n(302654);
function w(e, t, n) {
    if (Math.random() > 0.1) return;
    let i = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = (0, N.O)();
    A.default.track(C.HAw.QUEST_DECISION_ROUNDTRIP, {
        ...(0, f.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: i,
        mobile_network_type: y.A.getType(),
        ...(null != r && { mobile_signal_strength_level: r }),
        caller_source: e.callerSource,
        ad_request_id: e.adRequestId,
        fetched_at: n,
        previous_ad_request_id: e.previousAdDecision?.adDecisionData?.decision_id ?? null,
        previous_fetched_at: e.previousAdDecision?.fetchedAt ?? null,
        transition_case: t,
        is_foregrounded: (0, S.R)(),
    });
}
class M {
    pendingRequests = new Map();
    recordQuestRequestAttempt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            { enableNewRequestBehavior: i } = L.A.getConfig({ location: "recordQuestRequestAttempt" }),
            r = i && null != n ? (D.A.questAdDecisionByPlacement.get(n) ?? null) : null,
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
                null != t && (w(t, "timeout", null), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n, adRequestId: i = null, currentQuestId: r = null, currentFetchedAt: s = null } = t,
            a = this.pendingRequests.get(e);
        if (null != a) {
            let t,
                u,
                { enableNewRequestBehavior: c } = L.A.getConfig({ location: "recordQuestRequestApiResponse" });
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
            w({ ...a, apiResponseTimestamp: Date.now(), wasSuccessful: n, adRequestId: i }, t, u),
                this.pendingRequests.delete(e);
        }
    }
}
let P = new M();
var x = n(507107),
    U = n(405670);
let k = (0, n(945810).mj)({
    name: "2026-01-less-personalized-ads",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var G = n(561844),
    F = n(710969),
    V = n(319252),
    B = n(190107),
    H = n(375708);
async function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await a.Bo.post({
                url: C.Rsh.QUEST_ON_CONSOLE_START(e),
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
                        type: x.xv.RATE_LIMITED,
                        message: H.intl.string(H.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? H.intl.string(H.t.xSCvBf);
        return {
            errorHints: [{ type: x.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function Y(e) {
    await a.Bo.post({ url: C.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function W() {
    await a.Bo.del({ url: C.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function K() {
    if (!D.A.isFetchingCurrentQuests) {
        o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await a.Bo.get({ url: C.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
                t = e.body.quests.filter((e) => (0, V.s2)(e)).map((e) => (0, V.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                i = t.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
                r = e.body.excluded_quests.map((e) => (0, V._g)(e));
            o.h.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                quests: i,
                excludedQuests: r,
                questEnrollmentBlockedUntil: n,
            });
        } catch (e) {
            o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new l.A(e) });
        }
    }
}
async function z(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: s = !1, executableFingerprint: a } = e;
    try {
        let e = await T.A.post({
            url: C.Rsh.QUESTS_HEARTBEAT(t),
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
            userStatus: (0, V.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        o.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new l.A(e), questId: t, streamKey: n });
    }
}
var $ =
    (((i = {}).SUCCESS = "success"),
    (i.CAPTCHA_FAILED = "captcha_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    (i.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
    i);
async function q(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, G.Y5)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex,
                sourceQuestContent: t.sourceQuestContent,
            }),
        e === B.Fw && (0, E.u)(),
        D.A.isEnrolling(e))
    )
        return { type: "previous_in_flight_request" };
    o.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, F.L4)(t.questContent),
            i = (0, F.Gp)(t.questContent, e),
            r = await a.Bo.post({
                url: C.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, F.Kc)(e, t.questContent),
                    metadata_sealed: null != n ? n : null,
                    traffic_metadata_sealed: null != i ? i : null,
                },
                rejectWithError: !0,
            });
        return (
            o.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, V.tp)(r.body) }),
            { type: "success" }
        );
    } catch (t) {
        var n;
        return (
            o.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            (n = t) instanceof _.CaptchaCancelError ||
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
async function Z(e, t, n) {
    if (!D.A.isClaimingReward(e)) {
        o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let i = (0, F.L4)(n),
                r = (0, F.Gp)(n, e),
                s = await a.Bo.post({
                    url: C.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, F.Kc)(e, n),
                        metadata_sealed: null != i ? i : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                }),
                l = (0, V.Dv)(s.body);
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
async function X(e) {
    if (!D.A.isFetchingRewardCode(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await a.Bo.get({ url: C.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, V.Rd)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
async function Q(e, t) {
    let n = D.A.isDismissingContent(e),
        i = (0, F.vy)(t);
    if (!n && i) {
        o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, F.Gp)(t, e),
                i = await a.Bo.post({
                    url: C.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: { ...(0, F.Kc)(e, t), traffic_metadata_sealed: null != n ? n : null },
                    rejectWithError: !1,
                });
            o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, V.tp)(i.body) });
        } catch (t) {
            o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new l.A(t), questId: e });
        }
    }
}
function J(e) {
    o.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await a.Bo.post({ url: C.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, V.tp)(n.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
async function et(e) {
    try {
        let t = await a.Bo.del({ url: C.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, V.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
async function en(e) {
    try {
        o.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await a.Bo.del({ url: C.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, V.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
function ei(e) {
    o.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function er(e, t) {
    o.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function es() {
    if (!D.A.isFetchingClaimedQuests) {
        o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await a.Bo.get({ url: C.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, V.S)(e),
            );
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new l.A(e) });
        }
    }
}
function ea(e, t, n) {
    o.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function eo(e) {
    o.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function el(e, t) {
    let n = Date.now();
    P.recordQuestRequestAttempt("/quests/decision", t, e),
        o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let i,
            r = await (0, d.Ht)(),
            l = await (0, c.sN)(),
            u = k.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            _ = (0, h.pc)(),
            E = null != _ ? _() : [],
            I = g.Ay.getGuildsTree(),
            T = E.filter((e) => {
                if ((0, p.tZ)(e)) return !1;
                let t = I.getNode(e);
                return t?.parentId == null || m.A.isFolderExpanded(t.parentId);
            }).slice(0, 50),
            S = u.enabled ? T : void 0,
            N = new URLSearchParams({ placement: String(e) });
        r?.uuid != null && N.append("client_heartbeat_session_id", r.uuid),
            null != l.uuid && N.append("client_ad_session_id", l.uuid),
            null != S && S.forEach((e) => N.append("visible_guild_ids", e));
        let y = (await a.Bo.get({ url: `${C.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${N.toString()}`, rejectWithError: !1 }))
                .body,
            v = y.creative;
        if (null != v) v.creative_type === s.p.QUEST && (i = (0, V.Yn)(v.creative_content));
        else {
            let e = y.quest;
            i = null != e ? (0, V.Yn)(e) : void 0;
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
            P.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(y.request_id),
                currentQuestId: i?.id ?? null,
                currentFetchedAt: n,
            }),
            null == i)
        )
            return;
        e === x.yW.DESKTOP_ACCOUNT_PANEL_AREA && b.A.startTracking(i.id),
            A.default.track(C.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, f.A)(),
                quest_id: i.id,
                caller_source: t,
                ad_request_id: String(y.request_id),
            });
    } catch (i) {
        P.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            A.default.track(C.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, f.A)(),
                reason: i?.message ?? null,
                api_error: new l.A(i).getAnyErrorMessage(),
                caller_source: t,
            }),
            o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new l.A(i), placement: e });
    }
}
function eu(e, t) {
    o.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function ec(e, t, n) {
    if (D.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let i = D.A.earnedQuestForPlacement.get(t)?.earnedDecisionByQuestId,
        r = e.filter((e) => {
            let t = i?.get(e);
            return !(0, F.Oh)(t);
        });
    if (0 === r.length) return;
    let s = Date.now();
    R.recordEarnedRequestAttempt(t, n),
        o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, d.Ht)(),
            n = r.join(","),
            i = await a.Bo.get({ url: C.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            l = i.body.quests,
            u = i.body.response_ttl_seconds,
            c = new Map(
                r.map((e) => {
                    let t = l?.[e];
                    return [e, null != t && (0, V.s2)(t) ? t : null];
                }),
            );
        o.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
            serverQuests: c,
            content: t,
            fetchedAt: s,
            responseTtlSeconds: u,
        }),
            R.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: i.body.request_id ?? null,
                fetchedAt: s,
            });
    } catch (e) {
        R.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: s }),
            o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new l.A(e), content: t });
    }
}
async function ed(e, t) {
    await T.A.post({
        url: C.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function e_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, u.tW)(e, u.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void U.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: U.Lx.FAILURE });
    U.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: U.Lx.FETCHING });
    try {
        let t = await a.Bo.get({ url: n.url, rejectWithError: !0 });
        U.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: U.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        U.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: U.Lx.FAILURE });
    }
}
async function ef(e) {
    let t = await a.Bo.get({ url: C.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, V.Yn)(t.body);
}
async function eh(e) {
    if (!D.A.isFetchingQuestPreview(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await a.Bo.get({ url: C.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, V.rO)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
let ep = 5 * I.A.Millis.MINUTE;
async function eE() {
    if (D.A.isFetchingQuestHomeHero()) return;
    let e = D.A.getLastFetchedQuestHomeHero();
    if (!(null != e && Date.now() - e <= ep)) {
        o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN" });
        try {
            let e = [x.gh.QUEST_HOME_BANNER],
                t = await a.Bo.get({
                    url: C.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: x.vg.WEB },
                    rejectWithError: !1,
                });
            o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: (0, V.oc)(t.body) });
        } catch (e) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new l.A(e) }), e);
        }
    }
}
async function em() {
    let e = x.yW.QUEST_HOME_BANNER_DESKTOP;
    if (D.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let t = D.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= ep) return;
    let n = Date.now();
    o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_BEGIN", placement: e });
    try {
        var i, r, _;
        let t = await (0, d.Ht)(),
            l = await (0, c.sN)(),
            f = new URLSearchParams({ placement: String(e), num_decisions_requested: "1" });
        t?.uuid != null && f.append("client_heartbeat_session_id", t.uuid),
            null != l.uuid && f.append("client_ad_session_id", l.uuid);
        let h = (await a.Bo.get({ url: `${C.Rsh.QUESTS_GET_DECISIONS}?${f.toString()}`, rejectWithError: !1 })).body,
            p = h.decisions?.[0] ?? null,
            E = p?.creative ?? null,
            m = null;
        null != E &&
            E.creative_type === s.p.QUEST_HOME_HERO &&
            (m = {
                id: (i = E.creative_content).id,
                labelTitle: i.label_title,
                labelSubtitle: i.label_subtitle,
                heroImage: (0, u.dv)(i.hero_image),
                heroVideo: (0, u.dv)(i.hero_video),
                sponsorImage: (0, u.dv)(i.sponsor_image),
                cta: {
                    url: (r = i.cta).url,
                    buttonLabel: r.button_label,
                    android: null != r.android ? { androidAppId: r.android.android_app_id } : void 0,
                    ios: null != r.ios ? { iosAppId: r.ios.ios_app_id } : void 0,
                },
                questIds: i.quest_ids,
                questHomeEntrypoint:
                    null != i.quest_home_entrypoint
                        ? {
                              linearGradient: (_ = i.quest_home_entrypoint).linear_gradient,
                              radialGradient: _.radial_gradient,
                              image: (0, u.dv)(_.image),
                              tooltipImage: (0, u.dv)(_.tooltip_image),
                              tooltipTitle: _.tooltip_title,
                              tooltipSubtitle: _.tooltip_subtitle,
                          }
                        : void 0,
                shelfImage: (0, u.dv)(i.shelf_image),
                shelfVideo: (0, u.dv)(i.shelf_video),
            }),
            o.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_SUCCESS",
                questHomeHero: m,
                adDecisionData: {
                    ad_id: p?.ad_identifiers?.ad_id,
                    ad_set_id: p?.ad_identifiers?.ad_set_id,
                    campaign_id: p?.ad_identifiers?.campaign_id,
                    creative_id: p?.ad_identifiers?.creative_id,
                    creative_type: p?.ad_identifiers?.creative_type,
                    decision_id: h.request_id,
                    is_targeted: p?.ad_identifiers != null,
                },
                metadataSealed: p?.metadata_sealed,
                trafficMetadataSealed: p?.traffic_metadata_sealed,
                adContext: p?.ad_context,
                responseTtlSeconds: p?.response_ttl_seconds,
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
function eg(e) {
    o.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function eA(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function eI(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}
