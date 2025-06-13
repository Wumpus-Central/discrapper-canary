n.d(t, {
    AH: () => D,
    Ag: () => F,
    CS: () => N,
    EW: () => B,
    OR: () => V,
    QB: () => L,
    T0: () => G,
    Wf: () => j,
    cT: () => Y,
    eT: () => U,
    gU: () => K,
    gl: () => M,
    is: () => C,
    it: () => R,
    lL: () => W,
    m0: () => w,
    nE: () => k,
    pf: () => x,
    qm: () => Z,
    w: () => H,
    xw: () => P
}),
    n(415506);
var r = n(990547),
    i = n(544891),
    a = n(570140),
    o = n(479531),
    s = n(930446),
    l = n(912471),
    c = n(186102),
    u = n(626135),
    d = n(573261),
    _ = n(617136),
    f = n(705006),
    p = n(569984),
    h = n(497505),
    m = n(918701),
    g = n(184299),
    E = n(720293),
    b = n(566078),
    y = n(981631),
    O = n(388032);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = 5;
async function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.tn.post({
                url: y.ANM.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1
            })
        ).body;
        if (null != n.quest_user_status)
            a.Z.dispatch({
                type: 'QUESTS_USER_STATUS_UPDATE',
                user_status: n.quest_user_status
            });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0) return { errorHints: n.error_hints_v2.slice(0, A) };
    } catch (r) {
        var n;
        let e = new o.Z(r);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: h.HW.RATE_LIMITED,
                        message: O.intl.string(O.t['Whhv4+']),
                        connected_account_id: '',
                        connected_account_type: ''
                    }
                ]
            };
        let t = null != (n = e.getAnyErrorMessage()) ? n : O.intl.string(O.t.xSCvBQ);
        return {
            errorHints: [
                {
                    type: h.HW.GENERIC,
                    message: t,
                    connected_account_id: '',
                    connected_account_type: ''
                }
            ]
        };
    }
    return { errorHints: [] };
}
async function C(e) {
    await i.tn.post({
        url: y.ANM.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1
    });
}
async function R() {
    await i.tn.del({
        url: y.ANM.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
        rejectWithError: !1
    });
}
async function P() {
    if (!p.Z.isFetchingCurrentQuests) {
        a.Z.dispatch({ type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN' }), f.Z.recordQuestRequestAttempt(y.ANM.QUESTS_CURRENT_QUESTS);
        try {
            let e = await i.tn.get({
                    url: y.ANM.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1
                }),
                t = e.body.quests.filter((e) => (0, m.Qe)(e)).map((e) => (0, m.WP)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => {
                    var t;
                    return (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null || b.r.build(e.config).rewardPlatforms.length > 0;
                }),
                o = e.body.excluded_quests;
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
                quests: r,
                excludedQuests: o,
                questEnrollmentBlockedUntil: n
            }),
                f.Z.recordQuestRequestApiResponse(y.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !0 });
        } catch (e) {
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE',
                error: new o.Z(e)
            }),
                f.Z.recordQuestRequestApiResponse(y.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !1 });
        }
    }
}
async function w(e) {
    let { questId: t, streamKey: n, terminal: i = !1 } = e;
    try {
        var s;
        let e = await d.Z.post({
            url: y.ANM.QUESTS_HEARTBEAT(t),
            body: {
                stream_key: n,
                terminal: i
            },
            trackedActionData: {
                event: r.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    terminal: i,
                    is_overlay: __OVERLAY__,
                    stack_trace: null != (s = Error().stack) ? s : '',
                    is_playtime_eligible: !0
                }
            },
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_SUCCESS',
            userStatus: (0, m.U3)(e.body),
            questId: t,
            streamKey: n
        });
    } catch (e) {
        a.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_FAILURE',
            error: new o.Z(e),
            questId: t,
            streamKey: n
        });
    }
}
async function D(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, _._3)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex
            }),
        !p.Z.isEnrolling(e))
    ) {
        a.Z.dispatch({
            type: 'QUESTS_ENROLL_BEGIN',
            questId: e
        });
        try {
            let n = await i.tn.post({
                url: y.ANM.QUESTS_ENROLL(e),
                body: I({ location: t.questContent }, (0, m.qe)(t.questContent)),
                rejectWithError: !0
            });
            a.Z.dispatch({
                type: 'QUESTS_ENROLL_SUCCESS',
                enrolledQuestUserStatus: (0, m.U3)(n.body)
            });
        } catch (t) {
            a.Z.dispatch({
                type: 'QUESTS_ENROLL_FAILURE',
                questId: e
            });
        }
    }
}
async function L(e, t, n) {
    if (!p.Z.isClaimingReward(e)) {
        a.Z.dispatch({
            type: 'QUESTS_CLAIM_REWARD_BEGIN',
            questId: e
        });
        try {
            let r = await i.tn.post({
                    url: y.ANM.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n
                    },
                    rejectWithError: !1
                }),
                o = (0, m.Xh)(r.body);
            return (
                0 === o.errors.length
                    ? a.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_SUCCESS',
                          questId: e,
                          entitlements: o
                      })
                    : a.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_FAILURE',
                          error: o.errors,
                          questId: e
                      }),
                o
            );
        } catch (t) {
            throw (
                (a.Z.dispatch({
                    type: 'QUESTS_CLAIM_REWARD_FAILURE',
                    error: new o.Z(t),
                    questId: e
                }),
                t)
            );
        }
    }
}
async function x(e) {
    if (!p.Z.isFetchingRewardCode(e)) {
        a.Z.dispatch({
            type: 'QUESTS_FETCH_REWARD_CODE_BEGIN',
            questId: e
        });
        try {
            let t = await i.tn.get({
                url: y.ANM.QUESTS_REWARD_CODE(e),
                rejectWithError: !1
            });
            a.Z.dispatch({
                type: 'QUESTS_FETCH_REWARD_CODE_SUCCESS',
                questId: e,
                rewardCode: (0, m.yI)(t.body)
            });
        } catch (t) {
            throw (
                (a.Z.dispatch({
                    type: 'QUESTS_FETCH_REWARD_CODE_FAILURE',
                    error: new o.Z(t),
                    questId: e
                }),
                t)
            );
        }
    }
}
async function M(e, t) {
    let n = p.Z.isDismissingContent(e),
        r = (0, m.GN)(t);
    if (!n && r) {
        a.Z.dispatch({
            type: 'QUESTS_DISMISS_CONTENT_BEGIN',
            questId: e,
            content: t
        });
        try {
            let n = await i.tn.post({
                url: y.ANM.QUESTS_DISMISS_CONTENT(e, t),
                body: {},
                rejectWithError: !1
            });
            a.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_SUCCESS',
                dismissedQuestUserStatus: (0, m.U3)(n.body)
            });
        } catch (t) {
            a.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_FAILURE',
                error: new o.Z(t),
                questId: e
            });
        }
    }
}
function k(e) {
    a.Z.dispatch({
        type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
        streamKey: e
    });
}
async function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.tn.post({
            url: y.ANM.QUESTS_PREVIEW_COMPLETE(e),
            body: { percent: t },
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, m.U3)(n.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new o.Z(t),
            questId: e
        });
    }
}
async function U(e) {
    try {
        let t = await i.tn.del({
            url: y.ANM.QUESTS_PREVIEW_STATUS(e),
            body: {},
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, m.U3)(t.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new o.Z(t),
            questId: e
        });
    }
}
async function G(e) {
    try {
        a.Z.dispatch({ type: 'QUESTS_DOCK_RESET_SOFT_DISMISSAL' });
        let t = await i.tn.del({
            url: y.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {},
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, m.U3)(t.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new o.Z(t),
            questId: e
        });
    }
}
function B(e) {
    a.Z.dispatch({
        type: 'QUESTS_DELIVERY_OVERRIDE',
        questId: e
    });
}
function V(e, t) {
    a.Z.dispatch({
        type: 'QUESTS_SELECT_TASK_PLATFORM',
        questId: e,
        platform: t
    });
}
async function F() {
    if (!p.Z.isFetchingClaimedQuests) {
        a.Z.dispatch({ type: 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN' });
        try {
            let e = (
                await i.tn.get({
                    url: y.ANM.QUESTS_CLAIMED_QUESTS,
                    rejectWithError: !1
                })
            ).body.quests.map((e) => (0, m.hQ)(e));
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS',
                quests: e
            });
        } catch (e) {
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CLAIMED_QUESTS_FAILURE',
                error: new o.Z(e)
            });
        }
    }
}
function Z(e, t, n) {
    a.Z.dispatch({
        type: 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS',
        questId: e,
        taskEventName: t,
        progress: n
    });
}
async function H(e) {
    var t, n, r, d, _, p, h;
    a.Z.dispatch({
        type: 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN',
        placement: e
    }),
        f.Z.recordQuestRequestAttempt('/quests/decision');
    try {
        let o = await (0, l.Gg)(),
            h = await (0, s.Gy)(),
            g = (
                await i.tn.get({
                    url: y.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == o ? void 0 : o.uuid, h.uuid),
                    rejectWithError: !1
                })
            ).body;
        a.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS',
            quest: (0, m.q6)(g.quest),
            adDecisionData: {
                ad_id: null == (t = g.ad_identifiers) ? void 0 : t.ad_id,
                adset_id: null == (n = g.ad_identifiers) ? void 0 : n.adset_id,
                ad_set_id: null == (r = g.ad_identifiers) ? void 0 : r.ad_set_id,
                campaign_id: null == (d = g.ad_identifiers) ? void 0 : d.campaign_id,
                creative_id: null == (_ = g.ad_identifiers) ? void 0 : _.creative_id,
                creative_type: null == (p = g.ad_identifiers) ? void 0 : p.creative_type,
                decision_id: g.request_id,
                is_targeted: null != g.ad_identifiers
            },
            placement: e
        }),
            f.Z.recordQuestRequestApiResponse('/quests/decision', { wasSuccessful: !0 }),
            u.default.track(y.rMx.QUEST_DECISION_RECEIVED, S(I({}, (0, c.Z)()), { quest_id: g.quest.id }));
    } catch (t) {
        f.Z.recordQuestRequestApiResponse('/quests/decision', { wasSuccessful: !1 }),
            u.default.track(
                y.rMx.QUEST_DECISION_ROUNDTRIP_ERROR,
                S(I({}, (0, c.Z)()), {
                    reason: null != (h = null == t ? void 0 : t.message) ? h : null,
                    api_error: new o.Z(t).getAnyErrorMessage()
                })
            ),
            a.Z.dispatch({
                type: 'QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE',
                error: new o.Z(t),
                placement: e
            });
    }
}
async function Y(e, t) {
    var n;
    await d.Z.post({
        url: y.ANM.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: {
                quest_id: e,
                timestamp_sec: t.toString(),
                stack_trace: null != (n = Error().stack) ? n : ''
            }
        },
        rejectWithError: !1
    });
}
async function W(e, t) {
    let n = (0, E.z0)(e, t, E.n1.VIDEO, E.O.TRANSCRIPT);
    if (null == n)
        return void g.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: g.iF.FAILURE
        });
    g.ZP.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: g.iF.FETCHING
    });
    try {
        let t = await i.tn.get({
            url: n.url,
            rejectWithError: !0
        });
        g.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: g.iF.SUCCESS,
            text: t.text
        });
    } catch (t) {
        g.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: g.iF.FAILURE
        });
    }
}
async function K(e) {
    let t = await i.tn.get({
        url: y.ANM.QUEST(e),
        rejectWithError: !1
    });
    return (0, m.q6)(t.body);
}
