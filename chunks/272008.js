n.d(t, {
    AH: () => b,
    Ag: () => P,
    CS: () => v,
    EW: () => x,
    OR: () => L,
    QB: () => S,
    T0: () => D,
    Wf: () => R,
    cT: () => k,
    eT: () => O,
    gU: () => G,
    gl: () => N,
    is: () => y,
    lL: () => U,
    m0: () => T,
    nE: () => C,
    pf: () => A,
    qm: () => w,
    w: () => M,
    xw: () => I
}),
    n(411104);
var i = n(990547),
    r = n(544891),
    a = n(570140),
    s = n(479531),
    o = n(573261),
    l = n(617136),
    u = n(705006),
    c = n(569984),
    d = n(497505),
    f = n(918701),
    _ = n(184299),
    p = n(720293),
    h = n(566078),
    m = n(981631),
    g = n(388032);
let E = 5;
async function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await r.tn.post({
                url: m.ANM.QUEST_ON_CONSOLE_START(e),
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
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0) return { errorHints: n.error_hints_v2.slice(0, E) };
    } catch (i) {
        var n;
        let e = new s.Z(i);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: d.HW.RATE_LIMITED,
                        message: g.intl.string(g.t['Whhv4+']),
                        connected_account_id: '',
                        connected_account_type: ''
                    }
                ]
            };
        let t = null !== (n = e.getAnyErrorMessage()) && void 0 !== n ? n : g.intl.string(g.t.xSCvBQ);
        return {
            errorHints: [
                {
                    type: d.HW.GENERIC,
                    message: t,
                    connected_account_id: '',
                    connected_account_type: ''
                }
            ]
        };
    }
    return { errorHints: [] };
}
async function y(e) {
    await r.tn.post({
        url: m.ANM.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1
    });
}
async function I() {
    if (!c.Z.isFetchingCurrentQuests) {
        a.Z.dispatch({ type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN' }), u.Z.recordQuestRequestAttempt(m.ANM.QUESTS_CURRENT_QUESTS);
        try {
            let e = (
                await r.tn.get({
                    url: m.ANM.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1
                })
            ).body.quests
                .filter((e) => (0, f.Qe)(e))
                .map((e) => (0, f.WP)(e))
                .filter((e) => {
                    var t;
                    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || h.r.build(e.config).rewardPlatforms.length > 0;
                });
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
                quests: e
            }),
                u.Z.recordQuestRequestApiResponse(m.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !0 });
        } catch (e) {
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE',
                error: new s.Z(e)
            }),
                u.Z.recordQuestRequestApiResponse(m.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !1 });
        }
    }
}
async function T(e) {
    let { questId: t, streamKey: n, terminal: r = !1 } = e;
    try {
        var l;
        let e = await o.Z.post({
            url: m.ANM.QUESTS_HEARTBEAT(t),
            body: {
                stream_key: n,
                terminal: r
            },
            trackedActionData: {
                event: i.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    terminal: r,
                    is_overlay: __OVERLAY__,
                    stack_trace: null !== (l = Error().stack) && void 0 !== l ? l : '',
                    is_playtime_eligible: !0
                }
            },
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_SUCCESS',
            userStatus: (0, f.U3)(e.body),
            questId: t,
            streamKey: n
        });
    } catch (e) {
        a.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_FAILURE',
            error: new s.Z(e),
            questId: t,
            streamKey: n
        });
    }
}
async function b(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, l._3)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex
            }),
        !c.Z.isEnrolling(e))
    ) {
        a.Z.dispatch({
            type: 'QUESTS_ENROLL_BEGIN',
            questId: e
        });
        try {
            let n = await r.tn.post({
                url: m.ANM.QUESTS_ENROLL(e),
                body: { location: t.questContent },
                rejectWithError: !0
            });
            a.Z.dispatch({
                type: 'QUESTS_ENROLL_SUCCESS',
                enrolledQuestUserStatus: (0, f.U3)(n.body)
            });
        } catch (t) {
            a.Z.dispatch({
                type: 'QUESTS_ENROLL_FAILURE',
                questId: e
            });
        }
    }
}
async function S(e, t, n) {
    if (!c.Z.isClaimingReward(e)) {
        a.Z.dispatch({
            type: 'QUESTS_CLAIM_REWARD_BEGIN',
            questId: e
        });
        try {
            let i = await r.tn.post({
                    url: m.ANM.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n
                    },
                    rejectWithError: !1
                }),
                s = (0, f.Xh)(i.body);
            return (
                0 === s.errors.length
                    ? a.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_SUCCESS',
                          questId: e,
                          entitlements: s
                      })
                    : a.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_FAILURE',
                          error: s.errors,
                          questId: e
                      }),
                s
            );
        } catch (t) {
            throw (
                (a.Z.dispatch({
                    type: 'QUESTS_CLAIM_REWARD_FAILURE',
                    error: new s.Z(t),
                    questId: e
                }),
                t)
            );
        }
    }
}
async function A(e) {
    if (!c.Z.isFetchingRewardCode(e)) {
        a.Z.dispatch({
            type: 'QUESTS_FETCH_REWARD_CODE_BEGIN',
            questId: e
        });
        try {
            let t = await r.tn.get({
                url: m.ANM.QUESTS_REWARD_CODE(e),
                rejectWithError: !1
            });
            a.Z.dispatch({
                type: 'QUESTS_FETCH_REWARD_CODE_SUCCESS',
                questId: e,
                rewardCode: (0, f.yI)(t.body)
            });
        } catch (t) {
            throw (
                (a.Z.dispatch({
                    type: 'QUESTS_FETCH_REWARD_CODE_FAILURE',
                    error: new s.Z(t),
                    questId: e
                }),
                t)
            );
        }
    }
}
async function N(e, t) {
    let n = c.Z.isDismissingContent(e),
        i = (0, f.GN)(t);
    if (!n && i) {
        a.Z.dispatch({
            type: 'QUESTS_DISMISS_CONTENT_BEGIN',
            questId: e,
            content: t
        });
        try {
            let n = await r.tn.post({
                url: m.ANM.QUESTS_DISMISS_CONTENT(e, t),
                body: {},
                rejectWithError: !1
            });
            a.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_SUCCESS',
                dismissedQuestUserStatus: (0, f.U3)(n.body)
            });
        } catch (t) {
            a.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_FAILURE',
                error: new s.Z(t),
                questId: e
            });
        }
    }
}
function C(e) {
    a.Z.dispatch({
        type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
        streamKey: e
    });
}
async function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await r.tn.post({
            url: m.ANM.QUESTS_PREVIEW_COMPLETE(e),
            body: { percent: t },
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, f.U3)(n.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
async function O(e) {
    try {
        let t = await r.tn.del({
            url: m.ANM.QUESTS_PREVIEW_STATUS(e),
            body: {},
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, f.U3)(t.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
async function D(e) {
    try {
        a.Z.dispatch({ type: 'QUESTS_DOCK_RESET_SOFT_DISMISSAL' });
        let t = await r.tn.del({
            url: m.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {},
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, f.U3)(t.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
function x(e) {
    a.Z.dispatch({
        type: 'QUESTS_DELIVERY_OVERRIDE',
        questId: e
    });
}
function L(e, t) {
    a.Z.dispatch({
        type: 'QUESTS_SELECT_TASK_PLATFORM',
        questId: e,
        platform: t
    });
}
async function P() {
    if (!c.Z.isFetchingClaimedQuests) {
        a.Z.dispatch({ type: 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN' });
        try {
            let e = (
                await r.tn.get({
                    url: m.ANM.QUESTS_CLAIMED_QUESTS,
                    rejectWithError: !1
                })
            ).body.quests.map((e) => (0, f.hQ)(e));
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS',
                quests: e
            });
        } catch (e) {
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CLAIMED_QUESTS_FAILURE',
                error: new s.Z(e)
            });
        }
    }
}
function w(e, t, n) {
    a.Z.dispatch({
        type: 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS',
        questId: e,
        taskEventName: t,
        progress: n
    });
}
async function M(e) {
    a.Z.dispatch({
        type: 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN',
        placement: e
    });
    try {
        let t = await r.tn.get({
            url: m.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e),
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS',
            decisionId: t.body.request_id,
            quest: (0, f.q6)(t.body.quest),
            placement: e
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE',
            error: new s.Z(t),
            placement: e
        });
    }
}
async function k(e, t) {
    var n;
    await o.Z.post({
        url: m.ANM.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: i.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: {
                quest_id: e,
                timestamp_sec: t.toString(),
                stack_trace: null !== (n = Error().stack) && void 0 !== n ? n : ''
            }
        },
        rejectWithError: !1
    });
}
async function U(e) {
    let t = (0, p.z)(p.i.VIDEO_PLAYER_TRANSCRIPT, e);
    if (null == t) {
        _.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: _.iF.FAILURE
        });
        return;
    }
    _.ZP.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: _.iF.FETCHING
    });
    try {
        let n = await r.tn.get({
            url: t.url,
            rejectWithError: !0
        });
        _.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: _.iF.SUCCESS,
            text: n.text
        });
    } catch (t) {
        _.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: _.iF.FAILURE
        });
    }
}
async function G(e) {
    let t = await r.tn.get({
        url: m.ANM.QUEST(e),
        rejectWithError: !1
    });
    return (0, f.q6)(t.body);
}
