"use strict";
n.d(t, {
    sB: () => eO,
    WM: () => J,
    lx: () => ed,
    N1: () => X,
    xB: () => ep,
    Yb: () => ea,
    IV: () => eS,
    Oq: () => et,
    r8: () => eE,
    lk: () => er,
    qY: () => ef,
    jh: () => en,
    CV: () => q,
    UZ: () => es,
    yO: () => eh,
    Fr: () => eA,
    Oy: () => ee,
    Gn: () => eu,
    uI: () => eI,
    L4: () => eo,
    zh: () => eC,
    R2: () => Q,
    g5: () => ei,
    vD: () => z,
    qV: () => eR,
    HA: () => ec,
    Yf: () => eg,
    Ov: () => Z,
    QG: () => e_,
    Zb: () => eN,
    dQ: () => eT,
    Gt: () => el,
}),
    n(323874),
    n(14289),
    n(35956);
var i,
    r = n(562708),
    a = n(323889),
    s = n(636537),
    l = n(228366),
    o = n(181658),
    d = n(46948);
function c(e) {
    var t, n;
    let i = e.creative_content;
    return {
        id: i.id,
        labelTitle: i.label_title,
        labelSubtitle: i.label_subtitle,
        heroImage: (0, d.dv)(i.hero_image),
        heroVideo: (0, d.Zf)(i.hero_video),
        sponsorImage: (0, d.Zf)(i.sponsor_image),
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
                      image: (0, d.Zf)(n.image),
                      tooltipImage: (0, d.Zf)(n.tooltip_image),
                      tooltipTitle: n.tooltip_title,
                      tooltipSubtitle: n.tooltip_subtitle,
                  }
                : void 0,
        shelfImage: (0, d.Zf)(i.shelf_image),
        shelfVideo: (0, d.Zf)(i.shelf_video),
        startsAt: e.starts_at,
        endsAt: e.ends_at,
    };
}
var u = n(274670),
    _ = n(144779),
    E = n(881615),
    A = n(404851),
    h = n(888548),
    I = n(69114),
    f = n(633965),
    p = n(463347),
    T = n(310829),
    m = n(383394),
    g = n(544180),
    S = n(711014),
    N = n(174459),
    C = n(927813),
    R = n(38405),
    O = n(499785),
    L = n(789999),
    D = n(322683),
    y = n(652215);
function v(e) {
    if (Math.random() > 0.1) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, D.O)();
    N.default.track(y.HAw.EARNED_DECISION_ROUNDTRIP, {
        ...(0, I.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: t,
        mobile_network_type: g.A.getType(),
        ...(null != n && { mobile_signal_strength_level: n }),
        caller_source: e.callerSource,
        request_id: e.requestId,
        fetched_at: e.fetchedAt,
        is_foregrounded: (0, L.R)(),
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
                null != t && (v(t), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordEarnedRequestApiResponse(e, t) {
        let { wasSuccessful: n, requestId: i = null, fetchedAt: r = null } = t,
            a = this.pendingRequests.get(e);
        null != a &&
            (v({ ...a, apiResponseTimestamp: Date.now(), wasSuccessful: n, requestId: i, fetchedAt: r }),
            this.pendingRequests.delete(e));
    }
}
let M = new b();
var P = n(260364),
    U = n(859703),
    w = n(302654);
function G(e, t, n) {
    if (Math.random() > 0.1) return;
    let i = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = (0, D.O)();
    N.default.track(y.HAw.QUEST_DECISION_ROUNDTRIP, {
        ...(0, I.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: i,
        mobile_network_type: g.A.getType(),
        ...(null != r && { mobile_signal_strength_level: r }),
        caller_source: e.callerSource,
        ad_request_id: e.adRequestId,
        fetched_at: n,
        previous_ad_request_id: e.previousAdDecision?.adDecisionData?.decision_id ?? null,
        previous_fetched_at: e.previousAdDecision?.fetchedAt ?? null,
        transition_case: t,
        is_foregrounded: (0, L.R)(),
    });
}
class x {
    pendingRequests = new Map();
    recordQuestRequestAttempt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            { enableNewRequestBehavior: i } = w.A.getConfig({ location: "recordQuestRequestAttempt" }),
            r = i && null != n ? (U.A.questAdDecisionByPlacement.get(n) ?? null) : null,
            a = {
                initialSendTimestamp: Date.now(),
                endpoint: e,
                apiResponseTimestamp: null,
                wasSuccessful: !1,
                callerSource: t,
                adRequestId: null,
                previousAdDecision: r,
                placement: n,
            };
        this.pendingRequests.set(e, a),
            setTimeout(() => {
                let t = this.pendingRequests.get(e);
                null != t && (G(t, "timeout", null), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n, adRequestId: i = null, currentQuestId: r = null, currentFetchedAt: a = null } = t,
            s = this.pendingRequests.get(e);
        if (null != s) {
            let t,
                l,
                { enableNewRequestBehavior: o } = w.A.getConfig({ location: "recordQuestRequestApiResponse" });
            o
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
                  )),
                  (l = a))
                : ((t = "legacy"), (l = null)),
                G({ ...s, apiResponseTimestamp: Date.now(), wasSuccessful: n, adRequestId: i }, t, l),
                this.pendingRequests.delete(e);
        }
    }
}
let k = new x();
var F = n(24001),
    V = n(405670),
    B = n(104886);
let H = (0, n(945810).mj)({
    name: "2026-01-less-personalized-ads",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var j = n(561844),
    W = n(710969),
    Y = n(319252),
    K = n(190107),
    $ = n(375708);
async function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await s.Bo.post({
                url: y.Rsh.QUEST_ON_CONSOLE_START(e),
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
    await s.Bo.post({ url: y.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function Z() {
    await s.Bo.del({ url: y.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function X() {
    if (U.A.isFetchingCurrentQuests) return;
    let e = [...U.A.quests.keys()];
    l.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
    try {
        let t = await s.Bo.get({ url: y.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
            n = t.body.quests,
            i = n.filter((e) => (0, Y.s2)(e)).map((e) => (0, Y.rO)(e)),
            r = t.body.quest_enrollment_blocked_until,
            a = i.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
            o = n.map((e) => e.id),
            d = i.map((e) => e.id),
            c = o.filter((e) => !d.includes(e)),
            u = a.map((e) => e.id),
            _ = d.filter((e) => !u.includes(e)),
            E = e.filter((e) => !u.includes(e));
        R.A.addBreadcrumb({
            category: "quests.fetch",
            message: "fetchCurrentQuests completed",
            data: {
                rawCount: o.length,
                rawIds: o,
                validCount: u.length,
                validIds: u,
                prevQuestIds: e,
                droppedByConfigVersion: c,
                droppedByPlatformFilter: _,
                removedFromStore: E,
            },
        });
        let A = t.body.excluded_quests.map((e) => (0, Y._g)(e));
        l.h.dispatch({
            type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
            quests: a,
            excludedQuests: A,
            questEnrollmentBlockedUntil: r,
        });
    } catch (e) {
        l.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new o.A(e) });
    }
}
async function Q(e) {
    let {
        questId: t,
        streamKey: n,
        applicationId: i,
        terminal: a = !1,
        executablePath: s,
        executableFingerprint: d,
    } = e;
    try {
        let e = await O.A.post({
            url: y.Rsh.QUESTS_HEARTBEAT(t),
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
            userStatus: (0, Y.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        l.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new o.A(e), questId: t, streamKey: n });
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
            ? (0, u.r)({
                  type: _.F.CLICK_INTERNAL,
                  adCreativeType: a.p.QUEST,
                  adCreativeId: e,
                  questContentCTA: n,
                  surfaceId: t.questContent,
                  sourceQuestContent: t.sourceQuestContent,
                  questContentPosition: t.questContentPosition,
                  questContentRowIndex: t.questContentRowIndex,
              })
            : (0, j.Y5)({
                  questId: e,
                  questContent: t.questContent,
                  questContentCTA: n,
                  questContentPosition: t.questContentPosition,
                  questContentRowIndex: t.questContentRowIndex,
                  sourceQuestContent: t.sourceQuestContent,
              });
    }
    if ((e === K.Fw && (0, T.u)(), U.A.isEnrolling(e))) return { type: "previous_in_flight_request" };
    l.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, W.L4)(t.questContent),
            i = (0, W.Gp)(t.questContent, e),
            r = await s.Bo.post({
                url: y.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, W.Kc)(e, t.questContent),
                    metadata_sealed: null != n ? n : null,
                    traffic_metadata_sealed: null != i ? i : null,
                },
                rejectWithError: !0,
            });
        return (
            l.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, Y.tp)(r.body) }),
            { type: "success" }
        );
    } catch (t) {
        var n;
        return (
            l.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            (n = t) instanceof h.CaptchaCancelError ||
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
    if (!U.A.isClaimingReward(e)) {
        l.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let i = (0, W.L4)(n),
                r = (0, W.Gp)(n, e),
                a = await s.Bo.post({
                    url: y.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, W.Kc)(e, n),
                        metadata_sealed: null != i ? i : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                }),
                o = (0, Y.Dv)(a.body);
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
async function en(e) {
    if (!U.A.isFetchingRewardCode(e)) {
        l.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: y.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            l.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, Y.Rd)(t.body) });
        } catch (t) {
            throw (l.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
async function ei(e, t) {
    let n = U.A.isDismissingContent(e),
        i = (0, W.vy)(t);
    if (!n && i) {
        l.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, W.Gp)(t, e),
                i = await s.Bo.post({
                    url: y.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: { ...(0, W.Kc)(e, t), traffic_metadata_sealed: null != n ? n : null },
                    rejectWithError: !1,
                });
            l.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, Y.tp)(i.body) });
        } catch (t) {
            l.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new o.A(t), questId: e });
        }
    }
}
function er(e) {
    l.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function ea(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await s.Bo.post({ url: y.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, Y.tp)(n.body) });
    } catch (t) {
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
async function es(e) {
    try {
        let t = await s.Bo.del({ url: y.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, Y.tp)(t.body) });
    } catch (t) {
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
async function el(e) {
    try {
        l.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await s.Bo.del({ url: y.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, Y.tp)(t.body) });
    } catch (t) {
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
function eo(e, t) {
    l.h.dispatch({ type: "QUESTS_PREVIEW_OVERRIDE", placement: e, questId: t });
}
function ed(e, t) {
    l.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function ec() {
    if (!U.A.isFetchingClaimedQuests) {
        l.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await s.Bo.get({ url: y.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, Y.S)(e),
            );
            l.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            l.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new o.A(e) });
        }
    }
}
function eu(e, t, n) {
    l.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function e_(e) {
    l.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function eE(e, t) {
    let n = Date.now();
    k.recordQuestRequestAttempt("/quests/decision", t, e),
        l.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let i,
            r = await (0, A.Ht)(),
            o = await (0, E.sN)(),
            d = H.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            c = (0, f.pc)(),
            u = null != c ? c() : [],
            _ = S.Ay.getGuildsTree(),
            h = u
                .filter((e) => {
                    if ((0, p.tZ)(e)) return !1;
                    let t = _.getNode(e);
                    return t?.parentId == null || m.A.isFolderExpanded(t.parentId);
                })
                .slice(0, 50),
            T = d.enabled ? h : void 0,
            C = new URLSearchParams({ placement: String(e) });
        r?.uuid != null && C.append("client_heartbeat_session_id", r.uuid),
            null != o.uuid && C.append("client_ad_session_id", o.uuid),
            null != T && T.forEach((e) => C.append("visible_guild_ids", e));
        let R = (
                await s.Bo.get({
                    url: `${y.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${C.toString()}`,
                    rejectWithError: !1,
                    context: { connection_type: g.A.getType() },
                })
            ).body,
            O = R.creative;
        if (null != O) O.creative_type === a.p.QUEST && (i = (0, Y.Yn)(O.creative_content));
        else {
            let e = R.quest;
            i = null != e ? (0, Y.Yn)(e) : void 0;
        }
        if (
            (l.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: i,
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
                adContext: R.ad_context,
                responseTtlSeconds: R.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            k.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(R.request_id),
                currentQuestId: i?.id ?? null,
                currentFetchedAt: n,
            }),
            null == i)
        )
            return;
        e === F.p9.DESKTOP_ACCOUNT_PANEL_AREA && P.A.startTracking(i.id),
            N.default.track(y.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, I.A)(),
                quest_id: i.id,
                caller_source: t,
                ad_request_id: String(R.request_id),
            });
    } catch (i) {
        k.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            N.default.track(y.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, I.A)(),
                reason: i?.message ?? null,
                api_error: new o.A(i).getAnyErrorMessage(),
                caller_source: t,
            }),
            l.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new o.A(i), placement: e });
    }
}
function eA(e, t) {
    l.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function eh(e, t, n) {
    if (U.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let i = U.A.earnedQuestForPlacement.get(t)?.earnedDecisionByQuestId,
        r = e.filter((e) => {
            let t = i?.get(e);
            return !(0, W.Oh)(t);
        });
    if (0 === r.length) return;
    let a = Date.now();
    M.recordEarnedRequestAttempt(t, n),
        l.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, A.Ht)(),
            n = r.join(","),
            i = await s.Bo.get({ url: y.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            o = i.body.quests,
            d = i.body.response_ttl_seconds,
            c = new Map(
                r.map((e) => {
                    let t = o?.[e];
                    return [e, null != t && (0, Y.s2)(t) ? t : null];
                }),
            );
        l.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
            serverQuests: c,
            content: t,
            fetchedAt: a,
            responseTtlSeconds: d,
        }),
            M.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: i.body.request_id ?? null,
                fetchedAt: a,
            });
    } catch (e) {
        M.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: a }),
            l.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new o.A(e), content: t });
    }
}
async function eI(e, t) {
    await O.A.post({
        url: y.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function ef(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, d.tW)(e, d.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void V.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: V.Lx.FAILURE });
    V.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: V.Lx.FETCHING });
    try {
        let t = await s.Bo.get({ url: n.url, rejectWithError: !0 });
        V.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: V.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        V.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: V.Lx.FAILURE });
    }
}
async function ep(e) {
    let t = await s.Bo.get({ url: y.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, Y.Yn)(t.body);
}
async function eT(e) {
    if (!U.A.isFetchingQuestPreview(e)) {
        l.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: y.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            l.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, Y.rO)(t.body) });
        } catch (t) {
            throw (l.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
let em = 5 * C.A.Millis.MINUTE;
async function eg() {
    let e = F.p9.QUEST_HOME_BANNER_DESKTOP;
    if (U.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let t = U.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= em) return;
    let n = Date.now();
    l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: e });
    try {
        let t = await (0, A.Ht)(),
            i = await (0, E.sN)(),
            r = new URLSearchParams({ placement: String(e), num_decisions_requested: "1" });
        t?.uuid != null && r.append("client_heartbeat_session_id", t.uuid),
            null != i.uuid && r.append("client_ad_session_id", i.uuid);
        let o = (
                await s.Bo.get({
                    url: `${y.Rsh.QUESTS_GET_DECISIONS}?${r.toString()}`,
                    rejectWithError: !1,
                    context: { connection_type: g.A.getType() },
                })
            ).body,
            d = o.decisions?.[0] ?? null,
            u = d?.creative ?? null,
            _ = null;
        null != u && u.creative_type === a.p.QUEST_HOME_HERO && (_ = c(u)),
            l.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS",
                questHomeHero: _,
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
async function eS(e) {
    let t = F.p9.QUEST_HOME_BANNER_DESKTOP,
        n = Date.now();
    l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: t });
    try {
        let i = new URLSearchParams();
        i.append("ad_creative_ids", e);
        let r = (await s.Bo.get({ url: `${y.Rsh.QUESTS_CREATIVE_PREVIEW}?${i.toString()}`, rejectWithError: !1 })).body,
            o = r.decisions?.[0] ?? null,
            d = o?.creative ?? null,
            u = null;
        null != d && d.creative_type === a.p.QUEST_HOME_HERO && (u = c(d)),
            l.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS",
                questHomeHero: u,
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
function eN(e) {
    l.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function eC(e, t) {
    l.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function eR(e, t) {
    l.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}
function eO(e) {
    l.h.dispatch({ type: "QUESTS_MARK_DISCOVERED", questId: e });
}
