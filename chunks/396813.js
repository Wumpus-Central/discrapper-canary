(n.d(t, {
    sB: () => eM,
    WM: () => ea,
    lx: () => eh,
    N1: () => ei,
    xB: () => eC,
    Yb: () => eu,
    IV: () => ey,
    Oq: () => el,
    r8: () => eT,
    lk: () => ec,
    qY: () => eN,
    jh: () => eo,
    CV: () => et,
    UZ: () => e_,
    yO: () => eg,
    Fr: () => em,
    Oy: () => es,
    Gn: () => eI,
    uI: () => eS,
    L4: () => eA,
    zh: () => ev,
    R2: () => er,
    g5: () => ed,
    vD: () => ee,
    qV: () => eb,
    HA: () => ef,
    Yf: () => eL,
    Ov: () => en,
    QG: () => ep,
    Zb: () => eD,
    dQ: () => eO,
    Gt: () => eE,
}),
    n(323874),
    n(14289),
    n(35956));
var i,
    r = n(562708),
    a = n(323889),
    s = n(517846),
    l = n(636537),
    o = n(73153),
    d = n(181658),
    c = n(157695),
    u = n(314329),
    _ = n(274670),
    E = n(144779),
    A = n(107195),
    h = n(881615),
    f = n(390595),
    I = n(69114),
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
var w = n(260364);
function G(e, t, n) {
    if (Math.random() > 0.1) return;
    let i = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = (0, v.O)();
    O.default.track(b.HAw.QUEST_DECISION_ROUNDTRIP, {
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
class x {
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
                null != t && (G(t, "timeout", null), this.pendingRequests.delete(e));
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
            (G({ ...l, apiResponseTimestamp: Date.now(), wasSuccessful: n, adRequestId: i }, t, s),
                this.pendingRequests.delete(e));
        }
    }
}
let k = new x();
var F = n(291749);
function B(e) {
    var t, n;
    let i = e.creative_content;
    return {
        id: i.id,
        labelTitle: i.label_title,
        labelSubtitle: i.label_subtitle,
        heroImage: (0, F.dv)(i.hero_image),
        heroVideo: (0, F.Zf)(i.hero_video),
        sponsorImage: (0, F.Zf)(i.sponsor_image),
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
                      image: (0, F.Zf)(n.image),
                      tooltipImage: (0, F.Zf)(n.tooltip_image),
                      tooltipTitle: n.tooltip_title,
                      tooltipSubtitle: n.tooltip_subtitle,
                  }
                : void 0,
        shelfImage: (0, F.Zf)(i.shelf_image),
        shelfVideo: (0, F.Zf)(i.shelf_video),
        features: i.features ?? [],
        startsAt: e.starts_at,
        endsAt: e.ends_at,
    };
}
var V = n(859703),
    H = n(738822),
    j = n(405670),
    W = n(479442),
    Y = n(945810);
let K = "illustration3",
    $ = (0, Y.mj)({
        name: "2026-08-bounties-mobile-quest-bar",
        kind: "user",
        defaultConfig: { enabled: !1, illustration: K, ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !1 },
        variations: {
            1: { enabled: !0, illustration: "illustration1", ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !1 },
            2: { enabled: !0, illustration: "illustration2", ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !1 },
            3: { enabled: !0, illustration: "illustration3", ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !1 },
            4: { enabled: !0, illustration: K, ctrVariant: 2, hapticFeedbackOnRewardEarnedEnabled: !1 },
            5: { enabled: !0, illustration: K, ctrVariant: 3, hapticFeedbackOnRewardEarnedEnabled: !1 },
            6: { enabled: !0, illustration: K, ctrVariant: 1, hapticFeedbackOnRewardEarnedEnabled: !1 },
            7: { enabled: !0, illustration: K, ctrVariant: 0, hapticFeedbackOnRewardEarnedEnabled: !0 },
        },
    }),
    z = (0, Y.mj)({
        name: "2026-01-less-personalized-ads",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var X = n(710969),
    q = n(319252),
    Z = n(190107),
    Q = n(105292);
let J = new Set([H.uF.QUEST_BAR, H.uF.QUEST_BAR_V2, H.uF.QUEST_BAR_MOBILE]);
async function ee(e) {
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
                        type: H.xv.RATE_LIMITED,
                        message: Q.intl.string(Q.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? Q.intl.string(Q.t.xSCvBf);
        return {
            errorHints: [{ type: H.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function et(e) {
    await l.Bo.post({ url: b.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function en() {
    await l.Bo.del({ url: b.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function ei() {
    if (V.A.isFetchingCurrentQuests) return;
    let e = [...V.A.quests.keys()];
    o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
    try {
        let t = await l.Bo.get({ url: b.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
            n = t.body.quests,
            i = n.filter((e) => (0, q.s2)(e)).map((e) => (0, q.rO)(e)),
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
        let h = t.body.excluded_quests.map((e) => (0, q._g)(e));
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
async function er(e) {
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
            userStatus: (0, q.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        o.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new d.A(e), questId: t, streamKey: n });
    }
}
var ea =
    (((i = {}).SUCCESS = "success"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    (i.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
    i);
async function es(e, t) {
    if (null != t.questContentCTA) {
        let n = t.questContentCTA;
        (0, _.r)({
            type: E.F.CLICK_INTERNAL,
            adCreativeType: a.p.QUEST,
            adCreativeId: e,
            questContentCTA: n,
            surfaceId: t.questContent,
            sourceQuestContent: t.sourceQuestContent,
            questContentPosition: t.questContentPosition,
            questContentRowIndex: t.questContentRowIndex,
        });
    }
    if ((e === Z.Fw && (0, g.u)(), V.A.isEnrolling(e))) return { type: "previous_in_flight_request" };
    o.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, X.L4)(t.questContent),
            i = (0, X.Gp)(t.questContent, e),
            r = await l.Bo.post({
                url: b.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, X.Kc)(e, t.questContent),
                    metadata_sealed: null != n ? n : null,
                    traffic_metadata_sealed: null != i ? i : null,
                },
                rejectWithError: !0,
            });
        return (
            o.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, q.tp)(r.body) }),
            { type: "success" }
        );
    } catch {
        return (o.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }), { type: "unknown_error" });
    }
}
async function el(e, t, n) {
    if (!V.A.isClaimingReward(e)) {
        o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let i = (0, X.L4)(n),
                r = (0, X.Gp)(n, e),
                a = await l.Bo.post({
                    url: b.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, X.Kc)(e, n),
                        metadata_sealed: null != i ? i : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                }),
                s = (0, q.Dv)(a.body);
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
async function eo(e) {
    if (!V.A.isFetchingRewardCode(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await l.Bo.get({ url: b.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, q.Rd)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new d.A(t), questId: e }), t);
        }
    }
}
async function ed(e, t) {
    let n = V.A.isDismissingContent(e),
        i = (0, X.vy)(t);
    if (!n && i) {
        o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, X.Gp)(t, e),
                i = await l.Bo.post({
                    url: b.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: { ...(0, X.Kc)(e, t), traffic_metadata_sealed: null != n ? n : null },
                    rejectWithError: !1,
                });
            (o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, q.tp)(i.body) }),
                J.has(t) && (0, T.hs)(s.w.QUEST_DISMISSED, { quest_id: e }));
        } catch (t) {
            o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new d.A(t), questId: e });
        }
    }
}
function ec(e) {
    o.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function eu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await l.Bo.post({ url: b.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, q.tp)(n.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new d.A(t), questId: e });
    }
}
async function e_(e) {
    try {
        let t = await l.Bo.del({ url: b.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, q.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new d.A(t), questId: e });
    }
}
async function eE(e) {
    try {
        o.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await l.Bo.del({ url: b.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, q.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new d.A(t), questId: e });
    }
}
function eA(e, t) {
    o.h.dispatch({ type: "QUESTS_PREVIEW_OVERRIDE", placement: e, questId: t });
}
function eh(e, t) {
    o.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function ef() {
    if (!V.A.isFetchingClaimedQuests) {
        o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await l.Bo.get({ url: b.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, q.S)(e),
            );
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new d.A(e) });
        }
    }
}
function eI(e, t, n) {
    o.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function ep(e) {
    o.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function eT(e, t) {
    let n = Date.now();
    (k.recordQuestRequestAttempt("/quests/decision", t, e),
        o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e }));
    try {
        let i,
            r = await (0, f.Ht)(),
            s = await (0, h.sN)(),
            d = z.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            c = (0, p.pc)(),
            _ = null != c ? c() : [],
            E = C.Ay.getGuildsTree(),
            T = _.filter((e) => {
                if ((0, m.tZ)(e)) return !1;
                let t = E.getNode(e);
                return t?.parentId == null || S.A.isFolderExpanded(t.parentId);
            }).slice(0, 50),
            g = d.enabled ? T : void 0,
            R = new URLSearchParams({ placement: String(e) });
        (r?.uuid != null && R.append("client_heartbeat_session_id", r.uuid),
            null != s.uuid && R.append("client_ad_session_id", s.uuid),
            null != g && g.forEach((e) => R.append("visible_guild_ids", e)));
        let L = (
                await l.Bo.get({
                    url: `${b.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${R.toString()}`,
                    rejectWithError: !1,
                    context: { connection_type: N.A.getType() },
                })
            ).body,
            y = !1;
        e === H.p9.MOBILE_HOME_DOCK_AREA
            ? (y = $.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }).enabled)
            : e === H.p9.DESKTOP_ACCOUNT_PANEL_AREA &&
              (y = W.w.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }).enabled);
        let D = L.creative?.creative_type !== a.p.BOUNTY || y ? L.creative : null,
            v = null,
            M = null;
        if (null != D)
            switch (D.creative_type) {
                case a.p.QUEST:
                    ((i = (0, q.Yn)(D.creative_content)), (v = { type: a.p.QUEST, questId: i.id }));
                    break;
                case a.p.BOUNTY:
                    let P = (0, u.t)(D.creative_content);
                    v = { type: a.p.BOUNTY, bounty: P };
                    break;
                case a.p.NO_FILL:
                    M = D.creative_content?.ad_content_id ?? null;
            }
        else {
            let e = L.quest;
            null != e && ((i = (0, q.Yn)(e)), (v = { type: a.p.QUEST, questId: i.id }));
        }
        (o.h.dispatch({
            type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
            quest: i,
            creative: v,
            isNoFill: D?.creative_type === a.p.NO_FILL,
            noFillAdContentId: M,
            adDecisionData: {
                ad_id: L.ad_identifiers?.ad_id,
                adset_id: L.ad_identifiers?.adset_id,
                ad_set_id: L.ad_identifiers?.ad_set_id,
                campaign_id: L.ad_identifiers?.campaign_id,
                creative_id: L.ad_identifiers?.creative_id,
                creative_type: L.ad_identifiers?.creative_type,
                decision_id: L.request_id,
                is_targeted: null != L.ad_identifiers,
            },
            metadataSealed: L.metadata_sealed,
            trafficMetadataSealed: L.traffic_metadata_sealed,
            provenanceMetadataSealed: L.provenance_metadata_sealed,
            adContext: L.ad_context,
            responseTtlSeconds: L.response_ttl_seconds,
            placement: e,
            fetchedAt: n,
        }),
            k.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(L.request_id),
                currentCreative: v,
                currentFetchedAt: n,
            }));
        let U = (0, A.K2)(v);
        if (null == v || null == U) return;
        (e === H.p9.DESKTOP_ACCOUNT_PANEL_AREA && w.A.startTracking(U, v.type),
            O.default.track(b.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, I.A)(),
                quest_id: v.type === a.p.QUEST ? U : null,
                ad_content_id: U,
                creative_type: v.type,
                caller_source: t,
                ad_request_id: String(L.request_id),
            }));
    } catch (i) {
        (k.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            O.default.track(b.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, I.A)(),
                reason: i?.message ?? null,
                api_error: new d.A(i).getAnyErrorMessage(),
                caller_source: t,
            }),
            o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new d.A(i), placement: e }));
    }
}
function em(e, t) {
    o.h.dispatch({
        type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER",
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function eg(e, t, n) {
    if (V.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let i = V.A.earnedQuestForPlacement.get(t)?.earnedDecisionByQuestId,
        r = e.filter((e) => {
            let t = i?.get(e);
            return !(0, X.Oh)(t);
        });
    if (0 === r.length) return;
    let a = Date.now();
    (U.recordEarnedRequestAttempt(t, n),
        o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t }));
    try {
        let e = await (0, f.Ht)(),
            n = r.join(","),
            i = await l.Bo.get({ url: b.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            s = i.body.quests,
            d = i.body.response_ttl_seconds,
            c = new Map(
                r.map((e) => {
                    let t = s?.[e];
                    return [e, null != t && (0, q.s2)(t) ? t : null];
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
async function eS(e, t) {
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
async function eN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, F.tW)(e, F.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void j.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: j.Lx.FAILURE });
    j.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: j.Lx.FETCHING });
    try {
        let t = await l.Bo.get({ url: n.url, rejectWithError: !0 });
        j.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: j.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        j.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: j.Lx.FAILURE });
    }
}
async function eC(e) {
    let t = await l.Bo.get({ url: b.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, q.Yn)(t.body);
}
async function eO(e) {
    if (!V.A.isFetchingQuestPreview(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await l.Bo.get({ url: b.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, q.rO)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new d.A(t), questId: e }), t);
        }
    }
}
let eR = 5 * R.A.Millis.MINUTE;
async function eL() {
    let e = H.p9.QUEST_HOME_BANNER_DESKTOP;
    if (c.A.isFetchingAdToDeliverByPlacement(e)) return;
    let t = c.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= eR) return;
    let n = Date.now();
    o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: e });
    try {
        let t = await (0, f.Ht)(),
            i = await (0, h.sN)(),
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
        (null != c && c.creative_type === a.p.QUEST_HOME_HERO && (u = B(c)),
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
async function ey(e) {
    let t = H.p9.QUEST_HOME_BANNER_DESKTOP,
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
        (null != d && d.creative_type === a.p.QUEST_HOME_HERO && (c = B(d)),
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
function eD(e) {
    o.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function ev(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function eb(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}
function eM(e) {
    o.h.dispatch({ type: "QUESTS_MARK_DISCOVERED", questId: e });
}
