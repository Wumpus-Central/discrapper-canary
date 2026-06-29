"use strict";
n.d(t, {
    sB: () => ev,
    WM: () => J,
    lx: () => eu,
    N1: () => X,
    xB: () => eg,
    Yb: () => es,
    IV: () => eS,
    Oq: () => et,
    r8: () => eh,
    lk: () => er,
    qY: () => em,
    jh: () => en,
    CV: () => q,
    UZ: () => ea,
    yO: () => ep,
    Fr: () => ef,
    Oy: () => ee,
    Gn: () => ed,
    uI: () => eE,
    L4: () => el,
    zh: () => eC,
    R2: () => Q,
    g5: () => ei,
    vD: () => z,
    qV: () => eN,
    HA: () => ec,
    Yf: () => eT,
    Ov: () => Z,
    QG: () => e_,
    Zb: () => ey,
    dQ: () => eA,
    Gt: () => eo,
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
    u = n(46948);
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
                      gradientPreset: n.gradient_preset,
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
var d = n(274670),
    _ = n(144779),
    h = n(881615),
    f = n(404851),
    p = n(888548),
    E = n(69114),
    m = n(633965),
    g = n(463347),
    A = n(310829),
    I = n(383394),
    T = n(544180),
    S = n(711014),
    y = n(174459),
    C = n(927813),
    N = n(38405),
    v = n(499785),
    R = n(789999),
    O = n(322683),
    b = n(652215);
function D(e) {
    if (Math.random() > 0.1) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, O.O)();
    y.default.track(b.HAw.EARNED_DECISION_ROUNDTRIP, {
        ...(0, E.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: t,
        mobile_network_type: T.A.getType(),
        ...(null != n && { mobile_signal_strength_level: n }),
        caller_source: e.callerSource,
        request_id: e.requestId,
        fetched_at: e.fetchedAt,
        is_foregrounded: (0, R.R)(),
    });
}
class L {
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
            s = this.pendingRequests.get(e);
        null != s &&
            (D({ ...s, apiResponseTimestamp: Date.now(), wasSuccessful: n, requestId: i, fetchedAt: r }),
            this.pendingRequests.delete(e));
    }
}
let w = new L();
var M = n(260364),
    P = n(859703),
    x = n(302654);
function k(e, t, n) {
    if (Math.random() > 0.1) return;
    let i = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = (0, O.O)();
    y.default.track(b.HAw.QUEST_DECISION_ROUNDTRIP, {
        ...(0, E.A)(),
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
        is_foregrounded: (0, R.R)(),
    });
}
class U {
    pendingRequests = new Map();
    recordQuestRequestAttempt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            { enableNewRequestBehavior: i } = x.A.getConfig({ location: "recordQuestRequestAttempt" }),
            r = i && null != n ? (P.A.questAdDecisionByPlacement.get(n) ?? null) : null,
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
                null != t && (k(t, "timeout", null), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n, adRequestId: i = null, currentQuestId: r = null, currentFetchedAt: s = null } = t,
            a = this.pendingRequests.get(e);
        if (null != a) {
            let t,
                o,
                { enableNewRequestBehavior: l } = x.A.getConfig({ location: "recordQuestRequestApiResponse" });
            l
                ? ((t = (function (e, t) {
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
                      a.previousAdDecision,
                      null !== s
                          ? {
                                questId: r,
                                adCreativeId: r,
                                fetchedAt: s,
                                ttlMillis: 0,
                                adDecisionData: null != i ? { decision_id: i } : void 0,
                            }
                          : null,
                  )),
                  (o = s))
                : ((t = "legacy"), (o = null)),
                k({ ...a, apiResponseTimestamp: Date.now(), wasSuccessful: n, adRequestId: i }, t, o),
                this.pendingRequests.delete(e);
        }
    }
}
let G = new U();
var F = n(24001),
    V = n(405670),
    B = n(104886);
let j = (0, n(945810).mj)({
    name: "2026-01-less-personalized-ads",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var H = n(561844),
    Y = n(710969),
    W = n(319252),
    K = n(190107),
    $ = n(375708);
async function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await a.Bo.post({
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
        let e = new l.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: F.xv.RATE_LIMITED,
                        message: $.intl.string($.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? $.intl.string($.t.xSCvBf);
        return {
            errorHints: [{ type: F.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function q(e) {
    await a.Bo.post({ url: b.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function Z() {
    await a.Bo.del({ url: b.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function X() {
    if (P.A.isFetchingCurrentQuests) return;
    let e = [...P.A.quests.keys()];
    o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
    try {
        let t = await a.Bo.get({ url: b.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
            n = t.body.quests,
            i = n.filter((e) => (0, W.s2)(e)).map((e) => (0, W.rO)(e)),
            r = t.body.quest_enrollment_blocked_until,
            s = i.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
            l = n.map((e) => e.id),
            u = i.map((e) => e.id),
            c = l.filter((e) => !u.includes(e)),
            d = s.map((e) => e.id),
            _ = u.filter((e) => !d.includes(e)),
            h = e.filter((e) => !d.includes(e));
        N.A.addBreadcrumb({
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
                removedFromStore: h,
            },
        });
        let f = t.body.excluded_quests.map((e) => (0, W._g)(e));
        o.h.dispatch({
            type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
            quests: s,
            excludedQuests: f,
            questEnrollmentBlockedUntil: r,
        });
    } catch (e) {
        o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new l.A(e) });
    }
}
async function Q(e) {
    let {
        questId: t,
        streamKey: n,
        applicationId: i,
        terminal: s = !1,
        executablePath: a,
        executableFingerprint: u,
    } = e;
    try {
        let e = await v.A.post({
            url: b.Rsh.QUESTS_HEARTBEAT(t),
            body: { stream_key: n, application_id: i, terminal: s, executable_path: a, executable_fingerprint: u },
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
            userStatus: (0, W.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        o.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new l.A(e), questId: t, streamKey: n });
    }
}
var J =
    (((i = {}).SUCCESS = "success"),
    (i.CAPTCHA_FAILED = "captcha_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    (i.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
    i);
async function ee(e, t) {
    if (null != t.questContentCTA) {
        let n = t.questContentCTA;
        (0, B.E5)(B.kI.STEP_2_CLICKED_INTERNAL, "enroll_in_quest")
            ? (0, d.r)({
                  type: _.F.CLICK_INTERNAL,
                  adCreativeType: s.p.QUEST,
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
    if ((e === K.Fw && (0, A.u)(), P.A.isEnrolling(e))) return { type: "previous_in_flight_request" };
    o.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, Y.L4)(t.questContent),
            i = (0, Y.Gp)(t.questContent, e),
            r = await a.Bo.post({
                url: b.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, Y.Kc)(e, t.questContent),
                    metadata_sealed: null != n ? n : null,
                    traffic_metadata_sealed: null != i ? i : null,
                },
                rejectWithError: !0,
            });
        return (
            o.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, W.tp)(r.body) }),
            { type: "success" }
        );
    } catch (t) {
        var n;
        return (
            o.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            (n = t) instanceof p.CaptchaCancelError ||
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
async function et(e, t, n) {
    if (!P.A.isClaimingReward(e)) {
        o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let i = (0, Y.L4)(n),
                r = (0, Y.Gp)(n, e),
                s = await a.Bo.post({
                    url: b.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, Y.Kc)(e, n),
                        metadata_sealed: null != i ? i : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                }),
                l = (0, W.Dv)(s.body);
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
async function en(e) {
    if (!P.A.isFetchingRewardCode(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await a.Bo.get({ url: b.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, W.Rd)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
async function ei(e, t) {
    let n = P.A.isDismissingContent(e),
        i = (0, Y.vy)(t);
    if (!n && i) {
        o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, Y.Gp)(t, e),
                i = await a.Bo.post({
                    url: b.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: { ...(0, Y.Kc)(e, t), traffic_metadata_sealed: null != n ? n : null },
                    rejectWithError: !1,
                });
            o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, W.tp)(i.body) });
        } catch (t) {
            o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new l.A(t), questId: e });
        }
    }
}
function er(e) {
    o.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function es(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await a.Bo.post({ url: b.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, W.tp)(n.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
async function ea(e) {
    try {
        let t = await a.Bo.del({ url: b.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, W.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
async function eo(e) {
    try {
        o.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await a.Bo.del({ url: b.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, W.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
function el(e, t) {
    o.h.dispatch({ type: "QUESTS_PREVIEW_OVERRIDE", placement: e, questId: t });
}
function eu(e, t) {
    o.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function ec() {
    if (!P.A.isFetchingClaimedQuests) {
        o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await a.Bo.get({ url: b.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, W.S)(e),
            );
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new l.A(e) });
        }
    }
}
function ed(e, t, n) {
    o.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function e_(e) {
    o.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function eh(e, t) {
    let n = Date.now();
    G.recordQuestRequestAttempt("/quests/decision", t, e),
        o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let i,
            r = await (0, f.Ht)(),
            l = await (0, h.sN)(),
            u = j.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            c = (0, m.pc)(),
            d = null != c ? c() : [],
            _ = S.Ay.getGuildsTree(),
            p = d
                .filter((e) => {
                    if ((0, g.tZ)(e)) return !1;
                    let t = _.getNode(e);
                    return t?.parentId == null || I.A.isFolderExpanded(t.parentId);
                })
                .slice(0, 50),
            A = u.enabled ? p : void 0,
            C = new URLSearchParams({ placement: String(e) });
        r?.uuid != null && C.append("client_heartbeat_session_id", r.uuid),
            null != l.uuid && C.append("client_ad_session_id", l.uuid),
            null != A && A.forEach((e) => C.append("visible_guild_ids", e));
        let N = (
                await a.Bo.get({
                    url: `${b.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${C.toString()}`,
                    rejectWithError: !1,
                    context: { connection_type: T.A.getType() },
                })
            ).body,
            v = N.creative;
        if (null != v) v.creative_type === s.p.QUEST && (i = (0, W.Yn)(v.creative_content));
        else {
            let e = N.quest;
            i = null != e ? (0, W.Yn)(e) : void 0;
        }
        if (
            (o.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: i,
                adDecisionData: {
                    ad_id: N.ad_identifiers?.ad_id,
                    adset_id: N.ad_identifiers?.adset_id,
                    ad_set_id: N.ad_identifiers?.ad_set_id,
                    campaign_id: N.ad_identifiers?.campaign_id,
                    creative_id: N.ad_identifiers?.creative_id,
                    creative_type: N.ad_identifiers?.creative_type,
                    decision_id: N.request_id,
                    is_targeted: null != N.ad_identifiers,
                },
                metadataSealed: N.metadata_sealed,
                trafficMetadataSealed: N.traffic_metadata_sealed,
                adContext: N.ad_context,
                responseTtlSeconds: N.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            G.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(N.request_id),
                currentQuestId: i?.id ?? null,
                currentFetchedAt: n,
            }),
            null == i)
        )
            return;
        e === F.p9.DESKTOP_ACCOUNT_PANEL_AREA && M.A.startTracking(i.id),
            y.default.track(b.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, E.A)(),
                quest_id: i.id,
                caller_source: t,
                ad_request_id: String(N.request_id),
            });
    } catch (i) {
        G.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            y.default.track(b.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, E.A)(),
                reason: i?.message ?? null,
                api_error: new l.A(i).getAnyErrorMessage(),
                caller_source: t,
            }),
            o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new l.A(i), placement: e });
    }
}
function ef(e, t) {
    o.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function ep(e, t, n) {
    if (P.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let i = P.A.earnedQuestForPlacement.get(t)?.earnedDecisionByQuestId,
        r = e.filter((e) => {
            let t = i?.get(e);
            return !(0, Y.Oh)(t);
        });
    if (0 === r.length) return;
    let s = Date.now();
    w.recordEarnedRequestAttempt(t, n),
        o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, f.Ht)(),
            n = r.join(","),
            i = await a.Bo.get({ url: b.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            l = i.body.quests,
            u = i.body.response_ttl_seconds,
            c = new Map(
                r.map((e) => {
                    let t = l?.[e];
                    return [e, null != t && (0, W.s2)(t) ? t : null];
                }),
            );
        o.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
            serverQuests: c,
            content: t,
            fetchedAt: s,
            responseTtlSeconds: u,
        }),
            w.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: i.body.request_id ?? null,
                fetchedAt: s,
            });
    } catch (e) {
        w.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: s }),
            o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new l.A(e), content: t });
    }
}
async function eE(e, t) {
    await v.A.post({
        url: b.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function em(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, u.tW)(e, u.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void V.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: V.Lx.FAILURE });
    V.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: V.Lx.FETCHING });
    try {
        let t = await a.Bo.get({ url: n.url, rejectWithError: !0 });
        V.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: V.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        V.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: V.Lx.FAILURE });
    }
}
async function eg(e) {
    let t = await a.Bo.get({ url: b.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, W.Yn)(t.body);
}
async function eA(e) {
    if (!P.A.isFetchingQuestPreview(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await a.Bo.get({ url: b.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, W.rO)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
let eI = 5 * C.A.Millis.MINUTE;
async function eT() {
    let e = F.p9.QUEST_HOME_BANNER_DESKTOP;
    if (P.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let t = P.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= eI) return;
    let n = Date.now();
    o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: e });
    try {
        let t = await (0, f.Ht)(),
            i = await (0, h.sN)(),
            r = new URLSearchParams({ placement: String(e), num_decisions_requested: "1" });
        t?.uuid != null && r.append("client_heartbeat_session_id", t.uuid),
            null != i.uuid && r.append("client_ad_session_id", i.uuid);
        let l = (await a.Bo.get({ url: `${b.Rsh.QUESTS_GET_DECISIONS}?${r.toString()}`, rejectWithError: !1 })).body,
            u = l.decisions?.[0] ?? null,
            d = u?.creative ?? null,
            _ = null;
        null != d && d.creative_type === s.p.QUEST_HOME_HERO && (_ = c(d)),
            o.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS",
                questHomeHero: _,
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
        throw (o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new l.A(t), placement: e }), t);
    }
}
async function eS(e) {
    let t = F.p9.QUEST_HOME_BANNER_DESKTOP,
        n = Date.now();
    o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: t });
    try {
        let i = new URLSearchParams();
        i.append("ad_creative_ids", e);
        let r = (await a.Bo.get({ url: `${b.Rsh.QUESTS_CREATIVE_PREVIEW}?${i.toString()}`, rejectWithError: !1 })).body,
            l = r.decisions?.[0] ?? null,
            u = l?.creative ?? null,
            d = null;
        null != u && u.creative_type === s.p.QUEST_HOME_HERO && (d = c(u)),
            o.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS",
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
        throw (o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new l.A(e), placement: t }), e);
    }
}
function ey(e) {
    o.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function eC(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function eN(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}
function ev(e) {
    o.h.dispatch({ type: "QUESTS_MARK_DISCOVERED", questId: e });
}
