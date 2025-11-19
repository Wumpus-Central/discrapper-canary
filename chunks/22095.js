n.d(t, {
    AH: () => U,
    Ag: () => z,
    CS: () => D,
    EW: () => W,
    MG: () => et,
    OR: () => K,
    QB: () => G,
    T0: () => Y,
    Wf: () => V,
    cT: () => J,
    eT: () => H,
    gU: () => ee,
    gl: () => Z,
    is: () => w,
    it: () => L,
    lL: () => $,
    lx: () => X,
    m0: () => M,
    nE: () => F,
    pf: () => B,
    qm: () => q,
    w: () => Q,
    wF: () => j,
    xw: () => x,
}),
    n(415506);
var r = n(990547),
    i = n(544891),
    a = n(570140),
    o = n(479531),
    s = n(930446),
    l = n(912471),
    c = n(353250),
    u = n(186102),
    d = n(152521),
    f = n(626135),
    _ = n(573261),
    p = n(617136),
    h = n(823289),
    m = n(705006),
    g = n(509212),
    E = n(113434),
    b = n(569984),
    y = n(497505),
    O = n(184299),
    v = n(720293),
    I = n(46140),
    T = n(981631),
    S = n(388032);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = 5;
async function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.tn.post({
                url: T.ANM.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            a.Z.dispatch({
                type: "QUESTS_USER_STATUS_UPDATE",
                user_status: n.quest_user_status,
            });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, P) };
    } catch (r) {
        var n;
        let e = new o.Z(r);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: y.HW.RATE_LIMITED,
                        message: S.intl.string(S.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = null != (n = e.getAnyErrorMessage()) ? n : S.intl.string(S.t.xSCvBf);
        return {
            errorHints: [
                {
                    type: y.HW.GENERIC,
                    message: t,
                    connected_account_id: "",
                    connected_account_type: "",
                },
            ],
        };
    }
    return { errorHints: [] };
}
async function w(e) {
    await i.tn.post({
        url: T.ANM.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1,
    });
}
async function L() {
    await i.tn.del({
        url: T.ANM.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
        rejectWithError: !1,
    });
}
async function x() {
    if (!b.Z.isFetchingCurrentQuests) {
        a.Z.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await i.tn.get({
                    url: T.ANM.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1,
                }),
                t = e.body.quests.filter((e) => (0, g.Qe)(e)).map((e) => (0, g.WP)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => {
                    var t;
                    return (
                        (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null ||
                        e.config.rewardsConfig.platforms.length > 0
                    );
                }),
                o = e.body.excluded_quests.map((e) => (0, g.Qr)(e));
            a.Z.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                quests: r,
                excludedQuests: o,
                questEnrollmentBlockedUntil: n,
            });
        } catch (e) {
            a.Z.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
                error: new o.Z(e),
            });
        }
    }
}
async function M(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: s = !1 } = e;
    try {
        var l;
        let e = await _.Z.post({
            url: T.ANM.QUESTS_HEARTBEAT(t),
            body: {
                stream_key: n,
                application_id: i,
                terminal: s,
            },
            trackedActionData: {
                event: r.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    terminal: s,
                    is_overlay: __OVERLAY__,
                    stack_trace: null != (l = Error().stack) ? l : "",
                    is_playtime_eligible: !0,
                },
            },
            rejectWithError: !1,
        });
        a.Z.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, g.U3)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        a.Z.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_FAILURE",
            error: new o.Z(e),
            questId: t,
            streamKey: n,
        });
    }
}
function k(e) {
    var t, n;
    return (
        e instanceof c.CaptchaCancelError ||
        (null != e &&
            "object" == typeof e &&
            ((400 === e.status && (null == (t = e.body) ? void 0 : t.captcha_key) != null) ||
                (null != e.captchaFields && !!(Object.keys(e.captchaFields).length > 0)) ||
                (null == (n = e.fields) ? void 0 : n.captcha_key) != null ||
                !1))
    );
}
var j = (function (e) {
    return (
        (e.SUCCESS = "success"),
        (e.CAPTCHA_FAILED = "captcha_failed"),
        (e.UNKNOWN_ERROR = "unknown_error"),
        (e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
        e
    );
})({});
async function U(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, p._3)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex,
                sourceQuestContent: t.sourceQuestContent,
            }),
        e === I.V6 && (0, d.m4)(),
        e === E.wF && (0, d._r)(),
        b.Z.isEnrolling(e))
    )
        return { type: "previous_in_flight_request" };
    a.Z.dispatch({
        type: "QUESTS_ENROLL_BEGIN",
        questId: e,
    });
    try {
        let n = (0, g.jY)(t.questContent),
            r = await i.tn.post({
                url: T.ANM.QUESTS_ENROLL(e),
                body: R(C({ location: t.questContent }, (0, g.qe)(e, t.questContent)), {
                    metadata_raw: null != n ? n : null,
                }),
                rejectWithError: !0,
            });
        return (
            a.Z.dispatch({
                type: "QUESTS_ENROLL_SUCCESS",
                enrolledQuestUserStatus: (0, g.U3)(r.body),
            }),
            { type: "success" }
        );
    } catch (t) {
        return (
            a.Z.dispatch({
                type: "QUESTS_ENROLL_FAILURE",
                questId: e,
            }),
            k(t) ? { type: "captcha_failed" } : { type: "unknown_error" }
        );
    }
}
async function G(e, t, n) {
    if (!b.Z.isClaimingReward(e)) {
        a.Z.dispatch({
            type: "QUESTS_CLAIM_REWARD_BEGIN",
            questId: e,
        });
        try {
            let r = (0, g.jY)(n),
                o = await i.tn.post({
                    url: T.ANM.QUESTS_CLAIM_REWARD(e),
                    body: R(
                        C(
                            {
                                platform: t,
                                location: n,
                            },
                            (0, g.qe)(e, n),
                        ),
                        { metadata_raw: null != r ? r : null },
                    ),
                    rejectWithError: !1,
                }),
                s = (0, g.Xh)(o.body);
            return (
                0 === s.errors.length
                    ? a.Z.dispatch({
                          type: "QUESTS_CLAIM_REWARD_SUCCESS",
                          questId: e,
                          entitlements: s,
                      })
                    : a.Z.dispatch({
                          type: "QUESTS_CLAIM_REWARD_FAILURE",
                          error: s.errors,
                          questId: e,
                      }),
                s
            );
        } catch (t) {
            throw (
                (a.Z.dispatch({
                    type: "QUESTS_CLAIM_REWARD_FAILURE",
                    error: new o.Z(t),
                    questId: e,
                }),
                t)
            );
        }
    }
}
async function B(e) {
    if (!b.Z.isFetchingRewardCode(e)) {
        a.Z.dispatch({
            type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
            questId: e,
        });
        try {
            let t = await i.tn.get({
                url: T.ANM.QUESTS_REWARD_CODE(e),
                rejectWithError: !1,
            });
            a.Z.dispatch({
                type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
                questId: e,
                rewardCode: (0, g.yI)(t.body),
            });
        } catch (t) {
            throw (
                (a.Z.dispatch({
                    type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
                    error: new o.Z(t),
                    questId: e,
                }),
                t)
            );
        }
    }
}
async function Z(e, t) {
    let n = b.Z.isDismissingContent(e),
        r = (0, g.GN)(t);
    if (!n && r) {
        a.Z.dispatch({
            type: "QUESTS_DISMISS_CONTENT_BEGIN",
            questId: e,
            content: t,
        });
        try {
            let n = await i.tn.post({
                url: T.ANM.QUESTS_DISMISS_CONTENT(e, t),
                body: C({}, (0, g.qe)(e, t)),
                rejectWithError: !1,
            });
            a.Z.dispatch({
                type: "QUESTS_DISMISS_CONTENT_SUCCESS",
                dismissedQuestUserStatus: (0, g.U3)(n.body),
            });
        } catch (t) {
            a.Z.dispatch({
                type: "QUESTS_DISMISS_CONTENT_FAILURE",
                error: new o.Z(t),
                questId: e,
            });
        }
    }
}
function F(e) {
    a.Z.dispatch({
        type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
        streamKey: e,
    });
}
async function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.tn.post({
            url: T.ANM.QUESTS_PREVIEW_COMPLETE(e),
            body: { percent: t },
            rejectWithError: !1,
        });
        a.Z.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
            previewQuestUserStatus: (0, g.U3)(n.body),
        });
    } catch (t) {
        a.Z.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
            error: new o.Z(t),
            questId: e,
        });
    }
}
async function H(e) {
    try {
        let t = await i.tn.del({
            url: T.ANM.QUESTS_PREVIEW_STATUS(e),
            body: {},
            rejectWithError: !1,
        });
        a.Z.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
            previewQuestUserStatus: (0, g.U3)(t.body),
        });
    } catch (t) {
        a.Z.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
            error: new o.Z(t),
            questId: e,
        });
    }
}
async function Y(e) {
    try {
        a.Z.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await i.tn.del({
            url: T.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {},
            rejectWithError: !1,
        });
        a.Z.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
            previewQuestUserStatus: (0, g.U3)(t.body),
        });
    } catch (t) {
        a.Z.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
            error: new o.Z(t),
            questId: e,
        });
    }
}
function W(e) {
    a.Z.dispatch({
        type: "QUESTS_DELIVERY_OVERRIDE",
        questId: e,
    });
}
function K(e, t) {
    a.Z.dispatch({
        type: "QUESTS_SELECT_TASK_PLATFORM",
        questId: e,
        platform: t,
    });
}
async function z() {
    if (!b.Z.isFetchingClaimedQuests) {
        a.Z.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (
                await i.tn.get({
                    url: T.ANM.QUESTS_CLAIMED_QUESTS,
                    rejectWithError: !1,
                })
            ).body.quests.map((e) => (0, g.hQ)(e));
            a.Z.dispatch({
                type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS",
                quests: e,
            });
        } catch (e) {
            a.Z.dispatch({
                type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE",
                error: new o.Z(e),
            });
        }
    }
}
function q(e, t, n) {
    a.Z.dispatch({
        type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS",
        questId: e,
        taskEventName: t,
        progress: n,
    });
}
function X(e) {
    a.Z.dispatch({
        type: "QUESTS_RESET_OPTIMISTIC_PROGRESS",
        questId: e,
    });
}
async function Q(e, t) {
    var n, r, c, d, _, p, E, b;
    let O = Date.now();
    m.Z.recordQuestRequestAttempt("/quests/decision", t, e),
        a.Z.dispatch({
            type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN",
            placement: e,
        });
    try {
        let o = await (0, l.Gg)(),
            b = await (0, s.Gy)(),
            v = (
                await i.tn.get({
                    url: T.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == o ? void 0 : o.uuid, b.uuid),
                    rejectWithError: !1,
                })
            ).body,
            I = v.quest,
            S = null != I ? (0, g.q6)(I) : void 0;
        if (
            (a.Z.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: S,
                adDecisionData: {
                    ad_id: null == (n = v.ad_identifiers) ? void 0 : n.ad_id,
                    adset_id: null == (r = v.ad_identifiers) ? void 0 : r.adset_id,
                    ad_set_id: null == (c = v.ad_identifiers) ? void 0 : c.ad_set_id,
                    campaign_id: null == (d = v.ad_identifiers) ? void 0 : d.campaign_id,
                    creative_id: null == (_ = v.ad_identifiers) ? void 0 : _.creative_id,
                    creative_type: null == (p = v.ad_identifiers) ? void 0 : p.creative_type,
                    decision_id: v.request_id,
                    is_targeted: null != v.ad_identifiers,
                },
                metadataRaw: v.metadata_raw,
                adContext: v.ad_context,
                responseTtlSeconds: v.response_ttl_seconds,
                placement: e,
                fetchedAt: O,
            }),
            m.Z.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(v.request_id),
                currentQuestId: null != (E = null == S ? void 0 : S.id) ? E : null,
                currentFetchedAt: O,
            }),
            null == S)
        )
            return;
        e === y.Ok.DESKTOP_ACCOUNT_PANEL_AREA && h.Z.startTracking(S.id),
            f.default.track(
                T.rMx.QUEST_DECISION_RECEIVED,
                R(C({}, (0, u.Z)()), {
                    quest_id: S.id,
                    caller_source: t,
                    ad_request_id: String(v.request_id),
                }),
            );
    } catch (n) {
        m.Z.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1 }),
            f.default.track(
                T.rMx.QUEST_DECISION_ROUNDTRIP_ERROR,
                R(C({}, (0, u.Z)()), {
                    reason: null != (b = null == n ? void 0 : n.message) ? b : null,
                    api_error: new o.Z(n).getAnyErrorMessage(),
                    caller_source: t,
                }),
            ),
            a.Z.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE",
                error: new o.Z(n),
                placement: e,
            });
    }
}
async function J(e, t) {
    var n;
    await _.Z.post({
        url: T.ANM.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: {
                quest_id: e,
                timestamp_sec: t.toString(),
                stack_trace: null != (n = Error().stack) ? n : "",
            },
        },
        rejectWithError: !1,
    });
}
async function $(e, t) {
    let n = (0, v.z0)(e, t, v.n1.VIDEO, v.O.TRANSCRIPT);
    if (null == n)
        return void O.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: O.iF.FAILURE,
        });
    O.ZP.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: O.iF.FETCHING,
    });
    try {
        let t = await i.tn.get({
            url: n.url,
            rejectWithError: !0,
        });
        O.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: O.iF.SUCCESS,
            text: t.text,
            url: n.url,
        });
    } catch (t) {
        O.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: O.iF.FAILURE,
        });
    }
}
async function ee(e) {
    let t = await i.tn.get({
        url: T.ANM.QUEST(e),
        rejectWithError: !1,
    });
    return (0, g.q6)(t.body);
}
async function et(e) {
    if (!b.Z.isFetchingQuestPreview(e)) {
        a.Z.dispatch({
            type: "QUESTS_FETCH_PREVIEW_BEGIN",
            questId: e,
        });
        try {
            let t = await i.tn.get({
                url: T.ANM.QUEST_PREVIEW(e),
                rejectWithError: !1,
            });
            a.Z.dispatch({
                type: "QUESTS_FETCH_PREVIEW_SUCCESS",
                questId: e,
                quest: (0, g.WP)(t.body),
            });
        } catch (t) {
            throw (
                (a.Z.dispatch({
                    type: "QUESTS_FETCH_PREVIEW_FAILURE",
                    error: new o.Z(t),
                    questId: e,
                }),
                t)
            );
        }
    }
}
