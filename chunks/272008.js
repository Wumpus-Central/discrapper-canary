n.d(t, {
    AH: () => S,
    Ag: () => w,
    CS: () => y,
    EW: () => L,
    OR: () => P,
    QB: () => A,
    T0: () => x,
    Wf: () => O,
    cT: () => U,
    eT: () => D,
    gU: () => B,
    gl: () => C,
    is: () => I,
    lL: () => G,
    m0: () => T,
    nE: () => R,
    pf: () => N,
    qm: () => M,
    w: () => k,
    xw: () => b
}),
    n(411104);
var i = n(990547),
    r = n(544891),
    a = n(570140),
    s = n(479531),
    o = n(844889),
    l = n(573261),
    u = n(617136),
    c = n(705006),
    d = n(569984),
    f = n(497505),
    _ = n(918701),
    p = n(184299),
    h = n(720293),
    m = n(566078),
    g = n(981631),
    E = n(388032);
let v = 5;
async function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await r.tn.post({
                url: g.ANM.QUEST_ON_CONSOLE_START(e),
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
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0) return { errorHints: n.error_hints_v2.slice(0, v) };
    } catch (i) {
        var n;
        let e = new s.Z(i);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: f.HW.RATE_LIMITED,
                        message: E.intl.string(E.t['Whhv4+']),
                        connected_account_id: '',
                        connected_account_type: ''
                    }
                ]
            };
        let t = null !== (n = e.getAnyErrorMessage()) && void 0 !== n ? n : E.intl.string(E.t.xSCvBQ);
        return {
            errorHints: [
                {
                    type: f.HW.GENERIC,
                    message: t,
                    connected_account_id: '',
                    connected_account_type: ''
                }
            ]
        };
    }
    return { errorHints: [] };
}
async function I(e) {
    await r.tn.post({
        url: g.ANM.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1
    });
}
async function b() {
    if (!d.Z.isFetchingCurrentQuests) {
        a.Z.dispatch({ type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN' }), c.Z.recordQuestRequestAttempt(g.ANM.QUESTS_CURRENT_QUESTS);
        try {
            let e = (
                await r.tn.get({
                    url: g.ANM.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1
                })
            ).body.quests
                .filter((e) => (0, _.Qe)(e))
                .map((e) => (0, _.WP)(e))
                .filter((e) => {
                    var t;
                    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || m.r.build(e.config).rewardPlatforms.length > 0;
                });
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
                quests: e
            }),
                c.Z.recordQuestRequestApiResponse(g.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !0 });
        } catch (e) {
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE',
                error: new s.Z(e)
            }),
                c.Z.recordQuestRequestApiResponse(g.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !1 });
        }
    }
}
async function T(e) {
    let { questId: t, streamKey: n, terminal: r = !1 } = e;
    try {
        var o;
        let e = await l.Z.post({
            url: g.ANM.QUESTS_HEARTBEAT(t),
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
                    stack_trace: null !== (o = Error().stack) && void 0 !== o ? o : '',
                    is_playtime_eligible: !0
                }
            },
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_SUCCESS',
            userStatus: (0, _.U3)(e.body),
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
async function S(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, u._3)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex
            }),
        !d.Z.isEnrolling(e))
    ) {
        a.Z.dispatch({
            type: 'QUESTS_ENROLL_BEGIN',
            questId: e
        });
        try {
            let n = await r.tn.post({
                url: g.ANM.QUESTS_ENROLL(e),
                body: { location: t.questContent },
                rejectWithError: !0
            });
            a.Z.dispatch({
                type: 'QUESTS_ENROLL_SUCCESS',
                enrolledQuestUserStatus: (0, _.U3)(n.body)
            });
        } catch (t) {
            a.Z.dispatch({
                type: 'QUESTS_ENROLL_FAILURE',
                questId: e
            });
        }
    }
}
async function A(e, t, n) {
    if (!d.Z.isClaimingReward(e)) {
        a.Z.dispatch({
            type: 'QUESTS_CLAIM_REWARD_BEGIN',
            questId: e
        });
        try {
            let i = await r.tn.post({
                    url: g.ANM.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n
                    },
                    rejectWithError: !1
                }),
                s = (0, _.Xh)(i.body);
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
async function N(e) {
    if (!d.Z.isFetchingRewardCode(e)) {
        a.Z.dispatch({
            type: 'QUESTS_FETCH_REWARD_CODE_BEGIN',
            questId: e
        });
        try {
            let t = await r.tn.get({
                url: g.ANM.QUESTS_REWARD_CODE(e),
                rejectWithError: !1
            });
            a.Z.dispatch({
                type: 'QUESTS_FETCH_REWARD_CODE_SUCCESS',
                questId: e,
                rewardCode: (0, _.yI)(t.body)
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
async function C(e, t) {
    let n = d.Z.isDismissingContent(e),
        i = (0, _.GN)(t);
    if (!n && i) {
        a.Z.dispatch({
            type: 'QUESTS_DISMISS_CONTENT_BEGIN',
            questId: e,
            content: t
        });
        try {
            let n = await r.tn.post({
                url: g.ANM.QUESTS_DISMISS_CONTENT(e, t),
                body: {},
                rejectWithError: !1
            });
            a.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_SUCCESS',
                dismissedQuestUserStatus: (0, _.U3)(n.body)
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
function R(e) {
    a.Z.dispatch({
        type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
        streamKey: e
    });
}
async function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await r.tn.post({
            url: g.ANM.QUESTS_PREVIEW_COMPLETE(e),
            body: { percent: t },
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, _.U3)(n.body)
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
        let t = await r.tn.del({
            url: g.ANM.QUESTS_PREVIEW_STATUS(e),
            body: {},
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, _.U3)(t.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
async function x(e) {
    try {
        a.Z.dispatch({ type: 'QUESTS_DOCK_RESET_SOFT_DISMISSAL' });
        let t = await r.tn.del({
            url: g.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {},
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, _.U3)(t.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
function L(e) {
    a.Z.dispatch({
        type: 'QUESTS_DELIVERY_OVERRIDE',
        questId: e
    });
}
function P(e, t) {
    a.Z.dispatch({
        type: 'QUESTS_SELECT_TASK_PLATFORM',
        questId: e,
        platform: t
    });
}
async function w() {
    if (!d.Z.isFetchingClaimedQuests) {
        a.Z.dispatch({ type: 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN' });
        try {
            let e = (
                await r.tn.get({
                    url: g.ANM.QUESTS_CLAIMED_QUESTS,
                    rejectWithError: !1
                })
            ).body.quests.map((e) => (0, _.hQ)(e));
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
function M(e, t, n) {
    a.Z.dispatch({
        type: 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS',
        questId: e,
        taskEventName: t,
        progress: n
    });
}
async function k(e) {
    a.Z.dispatch({
        type: 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN',
        placement: e
    });
    try {
        let t = await (0, o.Gg)(),
            n = await r.tn.get({
                url: g.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == t ? void 0 : t.uuid),
                rejectWithError: !1
            });
        a.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS',
            decisionId: n.body.request_id,
            quest: (0, _.q6)(n.body.quest),
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
async function U(e, t) {
    var n;
    await l.Z.post({
        url: g.ANM.QUESTS_VIDEO_PROGRESS(e),
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
async function G(e) {
    let t = (0, h.z)(h.i.VIDEO_PLAYER_TRANSCRIPT, e);
    if (null == t) {
        p.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: p.iF.FAILURE
        });
        return;
    }
    p.ZP.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: p.iF.FETCHING
    });
    try {
        let n = await r.tn.get({
            url: t.url,
            rejectWithError: !0
        });
        p.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: p.iF.SUCCESS,
            text: n.text
        });
    } catch (t) {
        p.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: p.iF.FAILURE
        });
    }
}
async function B(e) {
    let t = await r.tn.get({
        url: g.ANM.QUEST(e),
        rejectWithError: !1
    });
    return (0, _.q6)(t.body);
}
