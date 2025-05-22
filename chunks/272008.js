n.d(t, {
    AH: () => P,
    Ag: () => G,
    CS: () => S,
    EW: () => j,
    OR: () => U,
    QB: () => R,
    T0: () => M,
    Wf: () => x,
    cT: () => V,
    eT: () => k,
    gU: () => H,
    gl: () => D,
    is: () => T,
    it: () => A,
    lL: () => Z,
    m0: () => C,
    nE: () => L,
    pf: () => w,
    qm: () => B,
    w: () => F,
    xw: () => N
}),
    n(415506);
var r = n(990547),
    i = n(754700),
    o = n(544891),
    a = n(570140),
    s = n(479531);
n(516796);
var l = n(930446),
    c = n(912471),
    u = n(573261),
    d = n(617136),
    f = n(705006),
    _ = n(569984),
    p = n(497505),
    h = n(918701),
    m = n(184299),
    g = n(720293),
    E = n(566078),
    b = n(981631),
    y = n(388032);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
let I = 5;
async function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await o.tn.post({
                url: b.ANM.QUEST_ON_CONSOLE_START(e),
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
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0) return { errorHints: n.error_hints_v2.slice(0, I) };
    } catch (r) {
        var n;
        let e = new s.Z(r);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: p.HW.RATE_LIMITED,
                        message: y.intl.string(y.t['Whhv4+']),
                        connected_account_id: '',
                        connected_account_type: ''
                    }
                ]
            };
        let t = null != (n = e.getAnyErrorMessage()) ? n : y.intl.string(y.t.xSCvBQ);
        return {
            errorHints: [
                {
                    type: p.HW.GENERIC,
                    message: t,
                    connected_account_id: '',
                    connected_account_type: ''
                }
            ]
        };
    }
    return { errorHints: [] };
}
async function T(e) {
    await o.tn.post({
        url: b.ANM.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1
    });
}
async function A() {
    await o.tn.del({
        url: b.ANM.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
        rejectWithError: !1
    });
}
async function N() {
    if (!_.Z.isFetchingCurrentQuests) {
        a.Z.dispatch({ type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN' }), f.Z.recordQuestRequestAttempt(b.ANM.QUESTS_CURRENT_QUESTS);
        try {
            let e = await o.tn.get({
                    url: b.ANM.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1
                }),
                t = e.body.quests.filter((e) => (0, h.Qe)(e)).map((e) => (0, h.WP)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => {
                    var t;
                    return (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null || E.r.build(e.config).rewardPlatforms.length > 0;
                }),
                i = e.body.excluded_quests;
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
                quests: r,
                excludedQuests: i,
                questEnrollmentBlockedUntil: n
            }),
                f.Z.recordQuestRequestApiResponse(b.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !0 });
        } catch (e) {
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE',
                error: new s.Z(e)
            }),
                f.Z.recordQuestRequestApiResponse(b.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !1 });
        }
    }
}
async function C(e) {
    let { questId: t, streamKey: n, terminal: i = !1 } = e;
    try {
        var o;
        let e = await u.Z.post({
            url: b.ANM.QUESTS_HEARTBEAT(t),
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
                    stack_trace: null != (o = Error().stack) ? o : '',
                    is_playtime_eligible: !0
                }
            },
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_SUCCESS',
            userStatus: (0, h.U3)(e.body),
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
async function P(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, d._3)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex
            }),
        !_.Z.isEnrolling(e))
    ) {
        a.Z.dispatch({
            type: 'QUESTS_ENROLL_BEGIN',
            questId: e
        });
        try {
            let n = await o.tn.post({
                url: b.ANM.QUESTS_ENROLL(e),
                body: v({ location: t.questContent }, (0, h.qe)(t.questContent)),
                rejectWithError: !0
            });
            a.Z.dispatch({
                type: 'QUESTS_ENROLL_SUCCESS',
                enrolledQuestUserStatus: (0, h.U3)(n.body)
            });
        } catch (t) {
            a.Z.dispatch({
                type: 'QUESTS_ENROLL_FAILURE',
                questId: e
            });
        }
    }
}
async function R(e, t, n) {
    if (!_.Z.isClaimingReward(e)) {
        a.Z.dispatch({
            type: 'QUESTS_CLAIM_REWARD_BEGIN',
            questId: e
        });
        try {
            let r = await o.tn.post({
                    url: b.ANM.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n
                    },
                    rejectWithError: !1
                }),
                i = (0, h.Xh)(r.body);
            return (
                0 === i.errors.length
                    ? a.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_SUCCESS',
                          questId: e,
                          entitlements: i
                      })
                    : a.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_FAILURE',
                          error: i.errors,
                          questId: e
                      }),
                i
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
async function w(e) {
    if (!_.Z.isFetchingRewardCode(e)) {
        a.Z.dispatch({
            type: 'QUESTS_FETCH_REWARD_CODE_BEGIN',
            questId: e
        });
        try {
            let t = await o.tn.get({
                url: b.ANM.QUESTS_REWARD_CODE(e),
                rejectWithError: !1
            });
            a.Z.dispatch({
                type: 'QUESTS_FETCH_REWARD_CODE_SUCCESS',
                questId: e,
                rewardCode: (0, h.yI)(t.body)
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
async function D(e, t) {
    let n = _.Z.isDismissingContent(e),
        r = (0, h.GN)(t);
    if (!n && r) {
        a.Z.dispatch({
            type: 'QUESTS_DISMISS_CONTENT_BEGIN',
            questId: e,
            content: t
        });
        try {
            let n = await o.tn.post({
                url: b.ANM.QUESTS_DISMISS_CONTENT(e, t),
                body: {},
                rejectWithError: !1
            });
            a.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_SUCCESS',
                dismissedQuestUserStatus: (0, h.U3)(n.body)
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
function L(e) {
    a.Z.dispatch({
        type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
        streamKey: e
    });
}
async function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await o.tn.post({
            url: b.ANM.QUESTS_PREVIEW_COMPLETE(e),
            body: { percent: t },
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, h.U3)(n.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
async function k(e) {
    try {
        let t = await o.tn.del({
            url: b.ANM.QUESTS_PREVIEW_STATUS(e),
            body: {},
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, h.U3)(t.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
async function M(e) {
    try {
        a.Z.dispatch({ type: 'QUESTS_DOCK_RESET_SOFT_DISMISSAL' });
        let t = await o.tn.del({
            url: b.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {},
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, h.U3)(t.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
function j(e) {
    a.Z.dispatch({
        type: 'QUESTS_DELIVERY_OVERRIDE',
        questId: e
    });
}
function U(e, t) {
    a.Z.dispatch({
        type: 'QUESTS_SELECT_TASK_PLATFORM',
        questId: e,
        platform: t
    });
}
async function G() {
    if (!_.Z.isFetchingClaimedQuests) {
        a.Z.dispatch({ type: 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN' });
        try {
            let e = (
                await o.tn.get({
                    url: b.ANM.QUESTS_CLAIMED_QUESTS,
                    rejectWithError: !1
                })
            ).body.quests.map((e) => (0, h.hQ)(e));
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
function B(e, t, n) {
    a.Z.dispatch({
        type: 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS',
        questId: e,
        taskEventName: t,
        progress: n
    });
}
async function F(e) {
    a.Z.dispatch({
        type: 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN',
        placement: e
    });
    try {
        var t, n, r, i, u, d;
        let s = await (0, c.Gg)(),
            f = await (0, l.Gy)(),
            _ = (
                await o.tn.get({
                    url: b.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == s ? void 0 : s.uuid, f.uuid),
                    rejectWithError: !1
                })
            ).body;
        a.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS',
            quest: (0, h.q6)(_.quest),
            adDecisionData: {
                ad_id: null == (t = _.ad_identifiers) ? void 0 : t.ad_id,
                adset_id: null == (n = _.ad_identifiers) ? void 0 : n.adset_id,
                ad_set_id: null == (r = _.ad_identifiers) ? void 0 : r.ad_set_id,
                campaign_id: null == (i = _.ad_identifiers) ? void 0 : i.campaign_id,
                creative_id: null == (u = _.ad_identifiers) ? void 0 : u.creative_id,
                creative_type: null == (d = _.ad_identifiers) ? void 0 : d.creative_type,
                decision_id: _.request_id
            },
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
async function V(e, t) {
    var n;
    await u.Z.post({
        url: b.ANM.QUESTS_VIDEO_PROGRESS(e),
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
async function Z(e) {
    let t = (0, g.z0)(e, i.X.WATCH_VIDEO, g.n1.VIDEO, g.O.TRANSCRIPT);
    if (null == t)
        return void m.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: m.iF.FAILURE
        });
    m.ZP.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: m.iF.FETCHING
    });
    try {
        let n = await o.tn.get({
            url: t.url,
            rejectWithError: !0
        });
        m.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: m.iF.SUCCESS,
            text: n.text
        });
    } catch (t) {
        m.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: m.iF.FAILURE
        });
    }
}
async function H(e) {
    let t = await o.tn.get({
        url: b.ANM.QUEST(e),
        rejectWithError: !1
    });
    return (0, h.q6)(t.body);
}
