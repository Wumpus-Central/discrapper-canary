r.d(n, {
    AH: function () {
        return A;
    },
    Ag: function () {
        return M;
    },
    CS: function () {
        return b;
    },
    EW: function () {
        return w;
    },
    OR: function () {
        return P;
    },
    QB: function () {
        return C;
    },
    T0: function () {
        return L;
    },
    Wf: function () {
        return D;
    },
    cT: function () {
        return B;
    },
    eT: function () {
        return x;
    },
    gU: function () {
        return Z;
    },
    gl: function () {
        return R;
    },
    is: function () {
        return I;
    },
    lL: function () {
        return G;
    },
    m0: function () {
        return S;
    },
    nE: function () {
        return O;
    },
    pf: function () {
        return N;
    },
    qm: function () {
        return k;
    },
    w: function () {
        return U;
    },
    xw: function () {
        return T;
    }
});
var i = r(411104);
var a = r(990547),
    o = r(544891),
    s = r(570140),
    l = r(479531),
    u = r(573261),
    c = r(617136),
    d = r(705006),
    f = r(569984),
    p = r(497505),
    h = r(918701),
    _ = r(184299),
    m = r(720293),
    g = r(566078),
    E = r(981631),
    v = r(388032);
let y = 5;
async function b(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let r = (
            await o.tn.post({
                url: E.ANM.QUEST_ON_CONSOLE_START(e),
                query: n ? { preview: n } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1
            })
        ).body;
        if (null != r.quest_user_status)
            s.Z.dispatch({
                type: 'QUESTS_USER_STATUS_UPDATE',
                user_status: r.quest_user_status
            });
        else if (null != r.error_hints_v2 && r.error_hints_v2.length > 0) return { errorHints: r.error_hints_v2.slice(0, y) };
    } catch (i) {
        var r;
        let e = new l.Z(i);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: p.HW.RATE_LIMITED,
                        message: v.intl.string(v.t['Whhv4+']),
                        connected_account_id: '',
                        connected_account_type: ''
                    }
                ]
            };
        let n = null !== (r = e.getAnyErrorMessage()) && void 0 !== r ? r : v.intl.string(v.t.xSCvBQ);
        return {
            errorHints: [
                {
                    type: p.HW.GENERIC,
                    message: n,
                    connected_account_id: '',
                    connected_account_type: ''
                }
            ]
        };
    }
    return { errorHints: [] };
}
async function I(e) {
    await o.tn.post({
        url: E.ANM.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1
    });
}
async function T() {
    if (!f.Z.isFetchingCurrentQuests) {
        s.Z.dispatch({ type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN' }), d.Z.recordQuestRequestAttempt(E.ANM.QUESTS_CURRENT_QUESTS);
        try {
            let e = (
                await o.tn.get({
                    url: E.ANM.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1
                })
            ).body.quests
                .filter((e) => (0, h.Qe)(e))
                .map((e) => (0, h.WP)(e))
                .filter((e) => {
                    var n;
                    return (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null || g.r.build(e.config).rewardPlatforms.length > 0;
                });
            s.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
                quests: e
            }),
                d.Z.recordQuestRequestApiResponse(E.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !0 });
        } catch (e) {
            s.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE',
                error: new l.Z(e)
            }),
                d.Z.recordQuestRequestApiResponse(E.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !1 });
        }
    }
}
async function S(e) {
    let { questId: n, streamKey: r, terminal: i = !1 } = e;
    try {
        var o;
        let e = await u.Z.post({
            url: E.ANM.QUESTS_HEARTBEAT(n),
            body: {
                stream_key: r,
                terminal: i
            },
            trackedActionData: {
                event: a.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: n,
                    terminal: i,
                    is_overlay: __OVERLAY__,
                    stack_trace: null !== (o = Error().stack) && void 0 !== o ? o : '',
                    is_playtime_eligible: !0
                }
            },
            rejectWithError: !1
        });
        s.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_SUCCESS',
            userStatus: (0, h.U3)(e.body),
            questId: n,
            streamKey: r
        });
    } catch (e) {
        s.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_FAILURE',
            error: new l.Z(e),
            questId: n,
            streamKey: r
        });
    }
}
async function A(e, n) {
    if (
        (null != n.questContentCTA &&
            (0, c._3)({
                questId: e,
                questContent: n.questContent,
                questContentCTA: n.questContentCTA,
                questContentPosition: n.questContentPosition,
                questContentRowIndex: n.questContentRowIndex
            }),
        !f.Z.isEnrolling(e))
    ) {
        s.Z.dispatch({
            type: 'QUESTS_ENROLL_BEGIN',
            questId: e
        });
        try {
            let r = await o.tn.post({
                url: E.ANM.QUESTS_ENROLL(e),
                body: { location: n.questContent },
                rejectWithError: !0
            });
            s.Z.dispatch({
                type: 'QUESTS_ENROLL_SUCCESS',
                enrolledQuestUserStatus: (0, h.U3)(r.body)
            });
        } catch (n) {
            s.Z.dispatch({
                type: 'QUESTS_ENROLL_FAILURE',
                questId: e
            });
        }
    }
}
async function C(e, n, r) {
    if (!f.Z.isClaimingReward(e)) {
        s.Z.dispatch({
            type: 'QUESTS_CLAIM_REWARD_BEGIN',
            questId: e
        });
        try {
            let i = await o.tn.post({
                    url: E.ANM.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: n,
                        location: r
                    },
                    rejectWithError: !1
                }),
                a = (0, h.Xh)(i.body);
            return (
                0 === a.errors.length
                    ? s.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_SUCCESS',
                          questId: e,
                          entitlements: a
                      })
                    : s.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_FAILURE',
                          error: a.errors,
                          questId: e
                      }),
                a
            );
        } catch (n) {
            throw (
                (s.Z.dispatch({
                    type: 'QUESTS_CLAIM_REWARD_FAILURE',
                    error: new l.Z(n),
                    questId: e
                }),
                n)
            );
        }
    }
}
async function N(e) {
    if (!f.Z.isFetchingRewardCode(e)) {
        s.Z.dispatch({
            type: 'QUESTS_FETCH_REWARD_CODE_BEGIN',
            questId: e
        });
        try {
            let n = await o.tn.get({
                url: E.ANM.QUESTS_REWARD_CODE(e),
                rejectWithError: !1
            });
            s.Z.dispatch({
                type: 'QUESTS_FETCH_REWARD_CODE_SUCCESS',
                questId: e,
                rewardCode: (0, h.yI)(n.body)
            });
        } catch (n) {
            throw (
                (s.Z.dispatch({
                    type: 'QUESTS_FETCH_REWARD_CODE_FAILURE',
                    error: new l.Z(n),
                    questId: e
                }),
                n)
            );
        }
    }
}
async function R(e, n) {
    let r = f.Z.isDismissingContent(e),
        i = (0, h.GN)(n);
    if (!r && i) {
        s.Z.dispatch({
            type: 'QUESTS_DISMISS_CONTENT_BEGIN',
            questId: e,
            content: n
        });
        try {
            let r = await o.tn.post({
                url: E.ANM.QUESTS_DISMISS_CONTENT(e, n),
                body: {},
                rejectWithError: !1
            });
            s.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_SUCCESS',
                dismissedQuestUserStatus: (0, h.U3)(r.body)
            });
        } catch (n) {
            s.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_FAILURE',
                error: new l.Z(n),
                questId: e
            });
        }
    }
}
function O(e) {
    s.Z.dispatch({
        type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
        streamKey: e
    });
}
async function D(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let r = await o.tn.post({
            url: E.ANM.QUESTS_PREVIEW_COMPLETE(e),
            body: { percent: n },
            rejectWithError: !1
        });
        s.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, h.U3)(r.body)
        });
    } catch (n) {
        s.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new l.Z(n),
            questId: e
        });
    }
}
async function x(e) {
    try {
        let n = await o.tn.del({
            url: E.ANM.QUESTS_PREVIEW_STATUS(e),
            body: {},
            rejectWithError: !1
        });
        s.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, h.U3)(n.body)
        });
    } catch (n) {
        s.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new l.Z(n),
            questId: e
        });
    }
}
async function L(e) {
    try {
        s.Z.dispatch({ type: 'QUESTS_DOCK_RESET_SOFT_DISMISSAL' });
        let n = await o.tn.del({
            url: E.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {},
            rejectWithError: !1
        });
        s.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, h.U3)(n.body)
        });
    } catch (n) {
        s.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new l.Z(n),
            questId: e
        });
    }
}
function w(e) {
    s.Z.dispatch({
        type: 'QUESTS_DELIVERY_OVERRIDE',
        questId: e
    });
}
function P(e, n) {
    s.Z.dispatch({
        type: 'QUESTS_SELECT_TASK_PLATFORM',
        questId: e,
        platform: n
    });
}
async function M() {
    if (!f.Z.isFetchingClaimedQuests) {
        s.Z.dispatch({ type: 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN' });
        try {
            let e = (
                await o.tn.get({
                    url: E.ANM.QUESTS_CLAIMED_QUESTS,
                    rejectWithError: !1
                })
            ).body.quests.map((e) => (0, h.hQ)(e));
            s.Z.dispatch({
                type: 'QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS',
                quests: e
            });
        } catch (e) {
            s.Z.dispatch({
                type: 'QUESTS_FETCH_CLAIMED_QUESTS_FAILURE',
                error: new l.Z(e)
            });
        }
    }
}
function k(e, n, r) {
    s.Z.dispatch({
        type: 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS',
        questId: e,
        taskEventName: n,
        progress: r
    });
}
async function U(e) {
    s.Z.dispatch({
        type: 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN',
        placement: e
    });
    try {
        let n = await o.tn.get({
            url: E.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e),
            rejectWithError: !1
        });
        s.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS',
            decisionId: n.body.request_id,
            quest: (0, h.q6)(n.body.quest),
            placement: e
        });
    } catch (n) {
        s.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE',
            error: new l.Z(n),
            placement: e
        });
    }
}
async function B(e, n) {
    var r;
    await u.Z.post({
        url: E.ANM.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: n },
        trackedActionData: {
            event: a.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: {
                quest_id: e,
                timestamp_sec: n.toString(),
                stack_trace: null !== (r = Error().stack) && void 0 !== r ? r : ''
            }
        },
        rejectWithError: !1
    });
}
async function G(e) {
    let n = (0, m.z)(m.i.VIDEO_PLAYER_TRANSCRIPT, e);
    if (null == n) {
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
        let r = await o.tn.get({
            url: n.url,
            rejectWithError: !0
        });
        _.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: _.iF.SUCCESS,
            text: r.text
        });
    } catch (n) {
        _.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: _.iF.FAILURE
        });
    }
}
async function Z(e) {
    let n = await o.tn.get({
        url: E.ANM.QUEST(e),
        rejectWithError: !1
    });
    return (0, h.q6)(n.body);
}
