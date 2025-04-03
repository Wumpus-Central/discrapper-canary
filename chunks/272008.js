n.d(t, {
    AH: () => T,
    Ag: () => M,
    CS: () => v,
    EW: () => L,
    OR: () => x,
    QB: () => N,
    T0: () => D,
    Wf: () => P,
    cT: () => U,
    eT: () => w,
    gU: () => B,
    gl: () => C,
    is: () => O,
    lL: () => G,
    m0: () => S,
    nE: () => R,
    pf: () => A,
    qm: () => k,
    w: () => j,
    xw: () => I
}),
    n(411104);
var r = n(990547),
    i = n(544891),
    o = n(570140),
    a = n(479531),
    s = n(930446),
    l = n(844889),
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
let y = 5;
async function v(e) {
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
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0) return { errorHints: n.error_hints_v2.slice(0, y) };
    } catch (r) {
        var n;
        let e = new a.Z(r);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: _.HW.RATE_LIMITED,
                        message: b.NW.string(b.t['Whhv4+']),
                        connected_account_id: '',
                        connected_account_type: ''
                    }
                ]
            };
        let t = null != (n = e.getAnyErrorMessage()) ? n : b.NW.string(b.t.xSCvBQ);
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
async function O(e) {
    await i.tn.post({
        url: E.ANM.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1
    });
}
async function I() {
    if (!f.Z.isFetchingCurrentQuests) {
        o.Z.dispatch({ type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN' }), d.Z.recordQuestRequestAttempt(E.ANM.QUESTS_CURRENT_QUESTS);
        try {
            let e = await i.tn.get({
                    url: E.ANM.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1
                }),
                t = e.body.quests
                    .filter((e) => (0, p.Qe)(e))
                    .map((e) => (0, p.WP)(e))
                    .filter((e) => {
                        var t;
                        return (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null || g.r.build(e.config).rewardPlatforms.length > 0;
                    }),
                n = e.body.excluded_quests;
            o.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
                quests: t,
                excludedQuests: n
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
async function S(e) {
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
async function T(e, t) {
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
async function N(e, t, n) {
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
async function A(e) {
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
async function C(e, t) {
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
function R(e) {
    o.Z.dispatch({
        type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
        streamKey: e
    });
}
async function P(e) {
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
async function w(e) {
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
async function D(e) {
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
function L(e) {
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
async function M() {
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
function k(e, t, n) {
    o.Z.dispatch({
        type: 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS',
        questId: e,
        taskEventName: t,
        progress: n
    });
}
async function j(e) {
    o.Z.dispatch({
        type: 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN',
        placement: e
    });
    try {
        let t = await (0, l.G)(),
            n = await (0, s.Gy)(),
            r = (
                await i.tn.get({
                    url: E.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == t ? void 0 : t.uuid, n.uuid),
                    rejectWithError: !1
                })
            ).body;
        o.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS',
            decisionId: r.request_id,
            quest: (0, p.q6)(r.quest),
            adIdentifiers: (0, p.Sf)(r.ad_identifiers),
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
async function U(e, t) {
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
async function G(e) {
    let t = (0, m.z)(m.i.VIDEO_PLAYER_TRANSCRIPT, e);
    if (null == t)
        return void h.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: h.iF.FAILURE
        });
    h.ZP.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: h.iF.FETCHING
    });
    try {
        let n = await i.tn.get({
            url: t.url,
            rejectWithError: !0
        });
        h.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: h.iF.SUCCESS,
            text: n.text
        });
    } catch (t) {
        h.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: h.iF.FAILURE
        });
    }
}
async function B(e) {
    let t = await i.tn.get({
        url: E.ANM.QUEST(e),
        rejectWithError: !1
    });
    return (0, p.q6)(t.body);
}
