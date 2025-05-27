n.d(t, {
    AH: () => C,
    Ag: () => U,
    CS: () => I,
    EW: () => M,
    OR: () => j,
    QB: () => P,
    T0: () => k,
    Wf: () => L,
    cT: () => F,
    eT: () => x,
    gU: () => Z,
    gl: () => w,
    is: () => S,
    it: () => T,
    lL: () => V,
    m0: () => N,
    nE: () => D,
    pf: () => R,
    qm: () => G,
    w: () => B,
    xw: () => A
}),
    n(415506);
var r = n(990547),
    i = n(544891),
    o = n(570140),
    a = n(479531);
n(516796);
var s = n(930446),
    l = n(912471),
    c = n(573261),
    u = n(617136),
    d = n(705006),
    f = n(569984),
    _ = n(497505),
    p = n(918701),
    h = n(184299),
    m = n(720293),
    g = n(566078),
    E = n(981631),
    b = n(388032);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
let v = 5;
async function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.tn.post({
                url: E.ANM.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1
            })
        ).body;
        if (null != n.quest_user_status)
            o.Z.dispatch({
                type: 'QUESTS_USER_STATUS_UPDATE',
                user_status: n.quest_user_status
            });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0) return { errorHints: n.error_hints_v2.slice(0, v) };
    } catch (r) {
        var n;
        let e = new a.Z(r);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: _.HW.RATE_LIMITED,
                        message: b.intl.string(b.t['Whhv4+']),
                        connected_account_id: '',
                        connected_account_type: ''
                    }
                ]
            };
        let t = null != (n = e.getAnyErrorMessage()) ? n : b.intl.string(b.t.xSCvBQ);
        return {
            errorHints: [
                {
                    type: _.HW.GENERIC,
                    message: t,
                    connected_account_id: '',
                    connected_account_type: ''
                }
            ]
        };
    }
    return { errorHints: [] };
}
async function S(e) {
    await i.tn.post({
        url: E.ANM.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1
    });
}
async function T() {
    await i.tn.del({
        url: E.ANM.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
        rejectWithError: !1
    });
}
async function A() {
    if (!f.Z.isFetchingCurrentQuests) {
        o.Z.dispatch({ type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN' }), d.Z.recordQuestRequestAttempt(E.ANM.QUESTS_CURRENT_QUESTS);
        try {
            let e = await i.tn.get({
                    url: E.ANM.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1
                }),
                t = e.body.quests.filter((e) => (0, p.Qe)(e)).map((e) => (0, p.WP)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => {
                    var t;
                    return (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null || g.r.build(e.config).rewardPlatforms.length > 0;
                }),
                a = e.body.excluded_quests;
            o.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
                quests: r,
                excludedQuests: a,
                questEnrollmentBlockedUntil: n
            }),
                d.Z.recordQuestRequestApiResponse(E.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !0 });
        } catch (e) {
            o.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE',
                error: new a.Z(e)
            }),
                d.Z.recordQuestRequestApiResponse(E.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !1 });
        }
    }
}
async function N(e) {
    let { questId: t, streamKey: n, terminal: i = !1 } = e;
    try {
        var s;
        let e = await c.Z.post({
            url: E.ANM.QUESTS_HEARTBEAT(t),
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
        o.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_SUCCESS',
            userStatus: (0, p.U3)(e.body),
            questId: t,
            streamKey: n
        });
    } catch (e) {
        o.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_FAILURE',
            error: new a.Z(e),
            questId: t,
            streamKey: n
        });
    }
}
async function C(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, u._3)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex
            }),
        !f.Z.isEnrolling(e))
    ) {
        o.Z.dispatch({
            type: 'QUESTS_ENROLL_BEGIN',
            questId: e
        });
        try {
            let n = await i.tn.post({
                url: E.ANM.QUESTS_ENROLL(e),
                body: O({ location: t.questContent }, (0, p.qe)(t.questContent)),
                rejectWithError: !0
            });
            o.Z.dispatch({
                type: 'QUESTS_ENROLL_SUCCESS',
                enrolledQuestUserStatus: (0, p.U3)(n.body)
            });
        } catch (t) {
            o.Z.dispatch({
                type: 'QUESTS_ENROLL_FAILURE',
                questId: e
            });
        }
    }
}
async function P(e, t, n) {
    if (!f.Z.isClaimingReward(e)) {
        o.Z.dispatch({
            type: 'QUESTS_CLAIM_REWARD_BEGIN',
            questId: e
        });
        try {
            let r = await i.tn.post({
                    url: E.ANM.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n
                    },
                    rejectWithError: !1
                }),
                a = (0, p.Xh)(r.body);
            return (
                0 === a.errors.length
                    ? o.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_SUCCESS',
                          questId: e,
                          entitlements: a
                      })
                    : o.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_FAILURE',
                          error: a.errors,
                          questId: e
                      }),
                a
            );
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'QUESTS_CLAIM_REWARD_FAILURE',
                    error: new a.Z(t),
                    questId: e
                }),
                t)
            );
        }
    }
}
async function R(e) {
    if (!f.Z.isFetchingRewardCode(e)) {
        o.Z.dispatch({
            type: 'QUESTS_FETCH_REWARD_CODE_BEGIN',
            questId: e
        });
        try {
            let t = await i.tn.get({
                url: E.ANM.QUESTS_REWARD_CODE(e),
                rejectWithError: !1
            });
            o.Z.dispatch({
                type: 'QUESTS_FETCH_REWARD_CODE_SUCCESS',
                questId: e,
                rewardCode: (0, p.yI)(t.body)
            });
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'QUESTS_FETCH_REWARD_CODE_FAILURE',
                    error: new a.Z(t),
                    questId: e
                }),
                t)
            );
        }
    }
}
async function w(e, t) {
    let n = f.Z.isDismissingContent(e),
        r = (0, p.GN)(t);
    if (!n && r) {
        o.Z.dispatch({
            type: 'QUESTS_DISMISS_CONTENT_BEGIN',
            questId: e,
            content: t
        });
        try {
            let n = await i.tn.post({
                url: E.ANM.QUESTS_DISMISS_CONTENT(e, t),
                body: {},
                rejectWithError: !1
            });
            o.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_SUCCESS',
                dismissedQuestUserStatus: (0, p.U3)(n.body)
            });
        } catch (t) {
            o.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_FAILURE',
                error: new a.Z(t),
                questId: e
            });
        }
    }
}
function D(e) {
    o.Z.dispatch({
        type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
        streamKey: e
    });
}
async function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.tn.post({
            url: E.ANM.QUESTS_PREVIEW_COMPLETE(e),
            body: { percent: t },
            rejectWithError: !1
        });
        o.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, p.U3)(n.body)
        });
    } catch (t) {
        o.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new a.Z(t),
            questId: e
        });
    }
}
async function x(e) {
    try {
        let t = await i.tn.del({
            url: E.ANM.QUESTS_PREVIEW_STATUS(e),
            body: {},
            rejectWithError: !1
        });
        o.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, p.U3)(t.body)
        });
    } catch (t) {
        o.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new a.Z(t),
            questId: e
        });
    }
}
async function k(e) {
    try {
        o.Z.dispatch({ type: 'QUESTS_DOCK_RESET_SOFT_DISMISSAL' });
        let t = await i.tn.del({
            url: E.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {},
            rejectWithError: !1
        });
        o.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, p.U3)(t.body)
        });
    } catch (t) {
        o.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new a.Z(t),
            questId: e
        });
    }
}
function M(e) {
    o.Z.dispatch({
        type: 'QUESTS_DELIVERY_OVERRIDE',
        questId: e
    });
}
function j(e, t) {
    o.Z.dispatch({
        type: 'QUESTS_SELECT_TASK_PLATFORM',
        questId: e,
        platform: t
    });
}
async function U() {
    if (!f.Z.isFetchingClaimedQuests) {
        o.Z.dispatch({ type: 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN' });
        try {
            let e = (
                await i.tn.get({
                    url: E.ANM.QUESTS_CLAIMED_QUESTS,
                    rejectWithError: !1
                })
            ).body.quests.map((e) => (0, p.hQ)(e));
            o.Z.dispatch({
                type: 'QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS',
                quests: e
            });
        } catch (e) {
            o.Z.dispatch({
                type: 'QUESTS_FETCH_CLAIMED_QUESTS_FAILURE',
                error: new a.Z(e)
            });
        }
    }
}
function G(e, t, n) {
    o.Z.dispatch({
        type: 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS',
        questId: e,
        taskEventName: t,
        progress: n
    });
}
async function B(e) {
    o.Z.dispatch({
        type: 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN',
        placement: e
    });
    try {
        var t, n, r, c, u, d;
        let a = await (0, l.Gg)(),
            f = await (0, s.Gy)(),
            _ = (
                await i.tn.get({
                    url: E.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == a ? void 0 : a.uuid, f.uuid),
                    rejectWithError: !1
                })
            ).body;
        o.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS',
            quest: (0, p.q6)(_.quest),
            adDecisionData: {
                ad_id: null == (t = _.ad_identifiers) ? void 0 : t.ad_id,
                adset_id: null == (n = _.ad_identifiers) ? void 0 : n.adset_id,
                ad_set_id: null == (r = _.ad_identifiers) ? void 0 : r.ad_set_id,
                campaign_id: null == (c = _.ad_identifiers) ? void 0 : c.campaign_id,
                creative_id: null == (u = _.ad_identifiers) ? void 0 : u.creative_id,
                creative_type: null == (d = _.ad_identifiers) ? void 0 : d.creative_type,
                decision_id: _.request_id,
                is_targeted: null != _.ad_identifiers
            },
            placement: e
        });
    } catch (t) {
        o.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE',
            error: new a.Z(t),
            placement: e
        });
    }
}
async function F(e, t) {
    var n;
    await c.Z.post({
        url: E.ANM.QUESTS_VIDEO_PROGRESS(e),
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
async function V(e, t) {
    let n = (0, m.z0)(e, t, m.n1.VIDEO, m.O.TRANSCRIPT);
    if (null == n)
        return void h.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: h.iF.FAILURE
        });
    h.ZP.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: h.iF.FETCHING
    });
    try {
        let t = await i.tn.get({
            url: n.url,
            rejectWithError: !0
        });
        h.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: h.iF.SUCCESS,
            text: t.text
        });
    } catch (t) {
        h.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: h.iF.FAILURE
        });
    }
}
async function Z(e) {
    let t = await i.tn.get({
        url: E.ANM.QUEST(e),
        rejectWithError: !1
    });
    return (0, p.q6)(t.body);
}
