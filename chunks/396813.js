"use strict";
n.d(t, {
    sB: () => ev,
    WM: () => ei,
    lx: () => eE,
    N1: () => et,
    xB: () => eS,
    Yb: () => ed,
    IV: () => eR,
    Oq: () => ea,
    r8: () => ef,
    lk: () => eo,
    qY: () => eg,
    jh: () => es,
    CV: () => J,
    UZ: () => ec,
    yO: () => eT,
    Fr: () => ep,
    Oy: () => er,
    Gn: () => eh,
    uI: () => em,
    L4: () => e_,
    zh: () => ey,
    R2: () => en,
    g5: () => el,
    vD: () => Q,
    qV: () => eD,
    HA: () => eA,
    Yf: () => eO,
    Ov: () => ee,
    QG: () => eI,
    Zb: () => eL,
    dQ: () => eN,
    Gt: () => eu,
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
    d = n(157695),
    c = n(314329),
    u = n(274670),
    _ = n(144779),
    E = n(881615),
    A = n(824427),
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
    O = n(38405),
    R = n(499785),
    L = n(789999),
    y = n(322683),
    D = n(652215);
function v(e) {
    if (Math.random() > 0.1) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, y.O)();
    N.default.track(D.HAw.EARNED_DECISION_ROUNDTRIP, {
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
    U = n(107195);
function w(e, t, n) {
    if (Math.random() > 0.1) return;
    let i = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = (0, y.O)();
    N.default.track(D.HAw.QUEST_DECISION_ROUNDTRIP, {
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
class G {
    pendingRequests = new Map();
    recordQuestRequestAttempt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = null != n ? (d.A.deliveryAdDecisionByPlacement.get(n) ?? null) : null,
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
                null != t && (w(t, "timeout", null), this.pendingRequests.delete(e));
            }, 3e4);
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
                    ? (0, U.K2)(e?.creative) === (0, U.K2)(t?.creative)
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
            w({ ...l, apiResponseTimestamp: Date.now(), wasSuccessful: n, adRequestId: i }, t, s),
                this.pendingRequests.delete(e);
        }
    }
}
let x = new G();
var k = n(291749);
function F(e) {
    var t, n;
    let i = e.creative_content;
    return {
        id: i.id,
        labelTitle: i.label_title,
        labelSubtitle: i.label_subtitle,
        heroImage: (0, k.dv)(i.hero_image),
        heroVideo: (0, k.Zf)(i.hero_video),
        sponsorImage: (0, k.Zf)(i.sponsor_image),
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
                      image: (0, k.Zf)(n.image),
                      tooltipImage: (0, k.Zf)(n.tooltip_image),
                      tooltipTitle: n.tooltip_title,
                      tooltipSubtitle: n.tooltip_subtitle,
                  }
                : void 0,
        shelfImage: (0, k.Zf)(i.shelf_image),
        shelfVideo: (0, k.Zf)(i.shelf_video),
        startsAt: e.starts_at,
        endsAt: e.ends_at,
    };
}
var V = n(859703),
    B = n(738822),
    H = n(405670),
    j = n(104886),
    W = n(945810);
let Y = (0, W.mj)({
        name: "2026-08-bounties-mobile-quest-bar",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    K = (0, W.mj)({
        name: "2026-01-less-personalized-ads",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var $ = n(561844),
    z = n(710969),
    Z = n(319252),
    q = n(190107),
    X = n(375708);
async function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await s.Bo.post({
                url: D.Rsh.QUEST_ON_CONSOLE_START(e),
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
                        type: B.xv.RATE_LIMITED,
                        message: X.intl.string(X.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? X.intl.string(X.t.xSCvBf);
        return {
            errorHints: [{ type: B.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function J(e) {
    await s.Bo.post({ url: D.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function ee() {
    await s.Bo.del({ url: D.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function et() {
    if (V.A.isFetchingCurrentQuests) return;
    let e = [...V.A.quests.keys()];
    l.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
    try {
        let t = await s.Bo.get({ url: D.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
            n = t.body.quests,
            i = n.filter((e) => (0, Z.s2)(e)).map((e) => (0, Z.rO)(e)),
            r = t.body.quest_enrollment_blocked_until,
            a = t.body.quest_access_suspended_until,
            o = i.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
            d = n.map((e) => e.id),
            c = i.map((e) => e.id),
            u = d.filter((e) => !c.includes(e)),
            _ = o.map((e) => e.id),
            E = c.filter((e) => !_.includes(e)),
            A = e.filter((e) => !_.includes(e));
        O.A.addBreadcrumb({
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
        let h = t.body.excluded_quests.map((e) => (0, Z._g)(e));
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
async function en(e) {
    let {
        questId: t,
        streamKey: n,
        applicationId: i,
        terminal: a = !1,
        executablePath: s,
        executableFingerprint: d,
    } = e;
    try {
        let e = await R.A.post({
            url: D.Rsh.QUESTS_HEARTBEAT(t),
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
            userStatus: (0, Z.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        l.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new o.A(e), questId: t, streamKey: n });
    }
}
var ei =
    (((i = {}).SUCCESS = "success"),
    (i.CAPTCHA_FAILED = "captcha_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    (i.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
    i);
async function er(e, t) {
    if (null != t.questContentCTA) {
        let n = t.questContentCTA;
        (0, j.E5)(j.kI.STEP_2_CLICKED_INTERNAL, "enroll_in_quest")
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
            : (0, $.Y5)({
                  questId: e,
                  questContent: t.questContent,
                  questContentCTA: n,
                  questContentPosition: t.questContentPosition,
                  questContentRowIndex: t.questContentRowIndex,
                  sourceQuestContent: t.sourceQuestContent,
              });
    }
    if ((e === q.Fw && (0, T.u)(), V.A.isEnrolling(e))) return { type: "previous_in_flight_request" };
    l.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, z.L4)(t.questContent),
            i = (0, z.Gp)(t.questContent, e),
            r = await s.Bo.post({
                url: D.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, z.Kc)(e, t.questContent),
                    metadata_sealed: null != n ? n : null,
                    traffic_metadata_sealed: null != i ? i : null,
                },
                rejectWithError: !0,
            });
        return (
            l.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, Z.tp)(r.body) }),
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
async function ea(e, t, n) {
    if (!V.A.isClaimingReward(e)) {
        l.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let i = (0, z.L4)(n),
                r = (0, z.Gp)(n, e),
                a = await s.Bo.post({
                    url: D.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, z.Kc)(e, n),
                        metadata_sealed: null != i ? i : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                }),
                o = (0, Z.Dv)(a.body);
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
async function es(e) {
    if (!V.A.isFetchingRewardCode(e)) {
        l.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: D.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            l.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, Z.Rd)(t.body) });
        } catch (t) {
            throw (l.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
async function el(e, t) {
    let n = V.A.isDismissingContent(e),
        i = (0, z.vy)(t);
    if (!n && i) {
        l.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, z.Gp)(t, e),
                i = await s.Bo.post({
                    url: D.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: { ...(0, z.Kc)(e, t), traffic_metadata_sealed: null != n ? n : null },
                    rejectWithError: !1,
                });
            l.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, Z.tp)(i.body) });
        } catch (t) {
            l.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new o.A(t), questId: e });
        }
    }
}
function eo(e) {
    l.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await s.Bo.post({ url: D.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, Z.tp)(n.body) });
    } catch (t) {
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
async function ec(e) {
    try {
        let t = await s.Bo.del({ url: D.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, Z.tp)(t.body) });
    } catch (t) {
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
async function eu(e) {
    try {
        l.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await s.Bo.del({ url: D.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, Z.tp)(t.body) });
    } catch (t) {
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
function e_(e, t) {
    l.h.dispatch({ type: "QUESTS_PREVIEW_OVERRIDE", placement: e, questId: t });
}
function eE(e, t) {
    l.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function eA() {
    if (!V.A.isFetchingClaimedQuests) {
        l.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await s.Bo.get({ url: D.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, Z.S)(e),
            );
            l.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            l.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new o.A(e) });
        }
    }
}
function eh(e, t, n) {
    l.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function eI(e) {
    l.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function ef(e, t) {
    let n = Date.now();
    x.recordQuestRequestAttempt("/quests/decision", t, e),
        l.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let i,
            r = await (0, A.Ht)(),
            o = await (0, E.sN)(),
            d = K.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            u = (0, f.pc)(),
            _ = null != u ? u() : [],
            h = S.Ay.getGuildsTree(),
            T = _.filter((e) => {
                if ((0, p.tZ)(e)) return !1;
                let t = h.getNode(e);
                return t?.parentId == null || m.A.isFolderExpanded(t.parentId);
            }).slice(0, 50),
            C = d.enabled ? T : void 0,
            O = new URLSearchParams({ placement: String(e) });
        r?.uuid != null && O.append("client_heartbeat_session_id", r.uuid),
            null != o.uuid && O.append("client_ad_session_id", o.uuid),
            null != C && C.forEach((e) => O.append("visible_guild_ids", e));
        let R = (
                await s.Bo.get({
                    url: `${D.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${O.toString()}`,
                    rejectWithError: !1,
                    context: { connection_type: g.A.getType() },
                })
            ).body,
            L =
                R.creative?.creative_type !== a.p.BOUNTY ||
                Y.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }).enabled
                    ? R.creative
                    : null,
            y = null;
        if (null != L)
            switch (L.creative_type) {
                case a.p.QUEST:
                    (i = (0, Z.Yn)(L.creative_content)), (y = { type: a.p.QUEST, questId: i.id });
                    break;
                case a.p.BOUNTY:
                    let v = (0, c.t)(L.creative_content);
                    y = { type: a.p.BOUNTY, bounty: v };
            }
        else {
            let e = R.quest;
            null != e && ((i = (0, Z.Yn)(e)), (y = { type: a.p.QUEST, questId: i.id }));
        }
        if (
            (l.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: i,
                creative: y,
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
            x.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(R.request_id),
                currentCreative: y,
                currentFetchedAt: n,
            }),
            null == i)
        )
            return;
        e === B.p9.DESKTOP_ACCOUNT_PANEL_AREA && P.A.startTracking(i.id),
            N.default.track(D.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, I.A)(),
                quest_id: i.id,
                caller_source: t,
                ad_request_id: String(R.request_id),
            });
    } catch (i) {
        x.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            N.default.track(D.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, I.A)(),
                reason: i?.message ?? null,
                api_error: new o.A(i).getAnyErrorMessage(),
                caller_source: t,
            }),
            l.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new o.A(i), placement: e });
    }
}
function ep(e, t) {
    l.h.dispatch({
        type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER",
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function eT(e, t, n) {
    if (V.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let i = V.A.earnedQuestForPlacement.get(t)?.earnedDecisionByQuestId,
        r = e.filter((e) => {
            let t = i?.get(e);
            return !(0, z.Oh)(t);
        });
    if (0 === r.length) return;
    let a = Date.now();
    M.recordEarnedRequestAttempt(t, n),
        l.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, A.Ht)(),
            n = r.join(","),
            i = await s.Bo.get({ url: D.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            o = i.body.quests,
            d = i.body.response_ttl_seconds,
            c = new Map(
                r.map((e) => {
                    let t = o?.[e];
                    return [e, null != t && (0, Z.s2)(t) ? t : null];
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
async function em(e, t) {
    await R.A.post({
        url: D.Rsh.QUESTS_VIDEO_PROGRESS(e),
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
        n = (0, k.tW)(e, k.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void H.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: H.Lx.FAILURE });
    H.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: H.Lx.FETCHING });
    try {
        let t = await s.Bo.get({ url: n.url, rejectWithError: !0 });
        H.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: H.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        H.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: H.Lx.FAILURE });
    }
}
async function eS(e) {
    let t = await s.Bo.get({ url: D.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, Z.Yn)(t.body);
}
async function eN(e) {
    if (!V.A.isFetchingQuestPreview(e)) {
        l.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: D.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            l.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, Z.rO)(t.body) });
        } catch (t) {
            throw (l.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
let eC = 5 * C.A.Millis.MINUTE;
async function eO() {
    let e = B.p9.QUEST_HOME_BANNER_DESKTOP;
    if (d.A.isFetchingAdToDeliverByPlacement(e)) return;
    let t = d.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= eC) return;
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
                    url: `${D.Rsh.QUESTS_GET_DECISIONS}?${r.toString()}`,
                    rejectWithError: !1,
                    context: { connection_type: g.A.getType() },
                })
            ).body,
            d = o.decisions?.[0] ?? null,
            c = d?.creative ?? null,
            u = null;
        null != c && c.creative_type === a.p.QUEST_HOME_HERO && (u = F(c)),
            l.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS",
                questHomeHero: u,
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
                provenanceMetadataSealed: d?.provenance_metadata_sealed,
                adContext: d?.ad_context,
                responseTtlSeconds: d?.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            });
    } catch (t) {
        throw (l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new o.A(t), placement: e }), t);
    }
}
async function eR(e) {
    let t = B.p9.QUEST_HOME_BANNER_DESKTOP,
        n = Date.now();
    l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: t });
    try {
        let i = new URLSearchParams();
        i.append("ad_creative_ids", e);
        let r = (await s.Bo.get({ url: `${D.Rsh.QUESTS_CREATIVE_PREVIEW}?${i.toString()}`, rejectWithError: !1 })).body,
            o = r.decisions?.[0] ?? null,
            d = o?.creative ?? null,
            c = null;
        null != d && d.creative_type === a.p.QUEST_HOME_HERO && (c = F(d)),
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
                provenanceMetadataSealed: o?.provenance_metadata_sealed,
                adContext: o?.ad_context,
                responseTtlSeconds: o?.response_ttl_seconds,
                placement: t,
                fetchedAt: n,
            });
    } catch (e) {
        throw (l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new o.A(e), placement: t }), e);
    }
}
function eL(e) {
    l.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function ey(e, t) {
    l.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function eD(e, t) {
    l.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}
function ev(e) {
    l.h.dispatch({ type: "QUESTS_MARK_DISCOVERED", questId: e });
}
