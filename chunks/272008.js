n.d(t, {
    AH: () => I,
    Ag: () => L,
    CS: () => b,
    EW: () => D,
    OR: () => x,
    QB: () => T,
    T0: () => w,
    Wf: () => R,
    cT: () => j,
    eT: () => P,
    gU: () => G,
    gl: () => A,
    is: () => y,
    lL: () => U,
    m0: () => S,
    nE: () => C,
    pf: () => N,
    qm: () => M,
    w: () => k,
    xw: () => O
}),
    n(411104);
var r = n(990547),
    i = n(544891),
    o = n(570140),
    a = n(479531),
    s = n(844889),
    l = n(573261),
    c = n(617136),
    u = n(705006),
    d = n(569984),
    f = n(497505),
    p = n(918701),
    _ = n(184299),
    h = n(720293),
    m = n(566078),
    g = n(981631),
    E = n(388032);
let v = 5;
async function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.tn.post({
                url: g.ANM.QUEST_ON_CONSOLE_START(e),
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
                        type: f.HW.RATE_LIMITED,
                        message: E.NW.string(E.t['Whhv4+']),
                        connected_account_id: '',
                        connected_account_type: ''
                    }
                ]
            };
        let t = null !== (n = e.getAnyErrorMessage()) && void 0 !== n ? n : E.NW.string(E.t.xSCvBQ);
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
async function y(e) {
    await i.tn.post({
        url: g.ANM.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1
    });
}
async function O() {
    if (!d.Z.isFetchingCurrentQuests) {
        o.Z.dispatch({ type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN' }), u.Z.recordQuestRequestAttempt(g.ANM.QUESTS_CURRENT_QUESTS);
        try {
            let e = (
                await i.tn.get({
                    url: g.ANM.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1
                })
            ).body.quests
                .filter((e) => (0, p.Qe)(e))
                .map((e) => (0, p.WP)(e))
                .filter((e) => {
                    var t;
                    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || m.r.build(e.config).rewardPlatforms.length > 0;
                });
            o.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
                quests: e
            }),
                u.Z.recordQuestRequestApiResponse(g.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !0 });
        } catch (e) {
            o.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE',
                error: new a.Z(e)
            }),
                u.Z.recordQuestRequestApiResponse(g.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !1 });
        }
    }
}
async function S(e) {
    let { questId: t, streamKey: n, terminal: i = !1 } = e;
    try {
        var s;
        let e = await l.Z.post({
            url: g.ANM.QUESTS_HEARTBEAT(t),
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
                    stack_trace: null !== (s = Error().stack) && void 0 !== s ? s : '',
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
async function I(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, c._3)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex
            }),
        !d.Z.isEnrolling(e))
    ) {
        o.Z.dispatch({
            type: 'QUESTS_ENROLL_BEGIN',
            questId: e
        });
        try {
            let n = await i.tn.post({
                url: g.ANM.QUESTS_ENROLL(e),
                body: { location: t.questContent },
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
async function T(e, t, n) {
    if (!d.Z.isClaimingReward(e)) {
        o.Z.dispatch({
            type: 'QUESTS_CLAIM_REWARD_BEGIN',
            questId: e
        });
        try {
            let r = await i.tn.post({
                    url: g.ANM.QUESTS_CLAIM_REWARD(e),
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
async function N(e) {
    if (!d.Z.isFetchingRewardCode(e)) {
        o.Z.dispatch({
            type: 'QUESTS_FETCH_REWARD_CODE_BEGIN',
            questId: e
        });
        try {
            let t = await i.tn.get({
                url: g.ANM.QUESTS_REWARD_CODE(e),
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
async function A(e, t) {
    let n = d.Z.isDismissingContent(e),
        r = (0, p.GN)(t);
    if (!n && r) {
        o.Z.dispatch({
            type: 'QUESTS_DISMISS_CONTENT_BEGIN',
            questId: e,
            content: t
        });
        try {
            let n = await i.tn.post({
                url: g.ANM.QUESTS_DISMISS_CONTENT(e, t),
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
function C(e) {
    o.Z.dispatch({
        type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
        streamKey: e
    });
}
async function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.tn.post({
            url: g.ANM.QUESTS_PREVIEW_COMPLETE(e),
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
async function P(e) {
    try {
        let t = await i.tn.del({
            url: g.ANM.QUESTS_PREVIEW_STATUS(e),
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
async function w(e) {
    try {
        o.Z.dispatch({ type: 'QUESTS_DOCK_RESET_SOFT_DISMISSAL' });
        let t = await i.tn.del({
            url: g.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
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
function D(e) {
    o.Z.dispatch({
        type: 'QUESTS_DELIVERY_OVERRIDE',
        questId: e
    });
}
function x(e, t) {
    o.Z.dispatch({
        type: 'QUESTS_SELECT_TASK_PLATFORM',
        questId: e,
        platform: t
    });
}
async function L() {
    if (!d.Z.isFetchingClaimedQuests) {
        o.Z.dispatch({ type: 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN' });
        try {
            let e = (
                await i.tn.get({
                    url: g.ANM.QUESTS_CLAIMED_QUESTS,
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
function M(e, t, n) {
    o.Z.dispatch({
        type: 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS',
        questId: e,
        taskEventName: t,
        progress: n
    });
}
async function k(e) {
    o.Z.dispatch({
        type: 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN',
        placement: e
    });
    try {
        let t = await (0, s.Gg)(),
            n = await i.tn.get({
                url: g.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == t ? void 0 : t.uuid),
                rejectWithError: !1
            });
        o.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS',
            decisionId: n.body.request_id,
            quest: (0, p.q6)(n.body.quest),
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
async function j(e, t) {
    var n;
    await l.Z.post({
        url: g.ANM.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
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
    let t = (0, h.z)(h.i.VIDEO_PLAYER_TRANSCRIPT, e);
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
        let n = await i.tn.get({
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
    let t = await i.tn.get({
        url: g.ANM.QUEST(e),
        rejectWithError: !1
    });
    return (0, p.q6)(t.body);
}
