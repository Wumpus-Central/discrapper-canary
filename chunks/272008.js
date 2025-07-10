(n.d(t, {
    AH: () => L,
    Ag: () => Z,
    CS: () => C,
    EW: () => V,
    OR: () => F,
    QB: () => x,
    T0: () => B,
    Wf: () => U,
    cT: () => W,
    eT: () => G,
    gU: () => z,
    gl: () => k,
    is: () => R,
    it: () => P,
    lL: () => K,
    m0: () => D,
    nE: () => j,
    pf: () => M,
    qm: () => H,
    w: () => Y,
    xw: () => w
}),
    n(415506));
var r = n(990547),
    i = n(544891),
    a = n(570140),
    o = n(479531),
    s = n(930446),
    l = n(912471),
    c = n(186102),
    u = n(626135),
    d = n(573261),
    f = n(617136),
    _ = n(823289),
    p = n(705006),
    h = n(569984),
    m = n(497505),
    g = n(918701),
    E = n(184299),
    b = n(720293),
    y = n(566078),
    O = n(981631),
    v = n(388032);
function I(e, t, n) {
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            }));
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = 5;
async function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.tn.post({
                url: O.ANM.QUEST_ON_CONSOLE_START(e),
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
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0) return { errorHints: n.error_hints_v2.slice(0, N) };
    } catch (r) {
        var n;
        let e = new o.Z(r);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: m.HW.RATE_LIMITED,
                        message: v.intl.string(v.t['Whhv4+']),
                        connected_account_id: '',
                        connected_account_type: ''
                    }
                ]
            };
        let t = null != (n = e.getAnyErrorMessage()) ? n : v.intl.string(v.t.xSCvBQ);
        return {
            errorHints: [
                {
                    type: m.HW.GENERIC,
                    message: t,
                    connected_account_id: '',
                    connected_account_type: ''
                }
            ]
        };
    }
    return { errorHints: [] };
}
async function R(e) {
    await i.tn.post({
        url: O.ANM.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1
    });
}
async function P() {
    await i.tn.del({
        url: O.ANM.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
        rejectWithError: !1
    });
}
async function w() {
    if (!h.Z.isFetchingCurrentQuests) {
        (a.Z.dispatch({ type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN' }), p.Z.recordQuestRequestAttempt(O.ANM.QUESTS_CURRENT_QUESTS));
        try {
            let e = await i.tn.get({
                    url: O.ANM.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1
                }),
                t = e.body.quests.filter((e) => (0, g.Qe)(e)).map((e) => (0, g.WP)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => {
                    var t;
                    return (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null || y.r.build(e.config).rewardPlatforms.length > 0;
                }),
                o = e.body.excluded_quests;
            (a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
                quests: r,
                excludedQuests: o,
                questEnrollmentBlockedUntil: n
            }),
                p.Z.recordQuestRequestApiResponse(O.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !0 }));
        } catch (e) {
            (a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE',
                error: new o.Z(e)
            }),
                p.Z.recordQuestRequestApiResponse(O.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !1 }));
        }
    }
}
async function D(e) {
    let { questId: t, streamKey: n, terminal: i = !1 } = e;
    try {
        var s;
        let e = await d.Z.post({
            url: O.ANM.QUESTS_HEARTBEAT(t),
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
            userStatus: (0, g.U3)(e.body),
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
async function L(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, f._3)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex,
                sourceQuestContent: t.sourceQuestContent
            }),
        !h.Z.isEnrolling(e))
    ) {
        a.Z.dispatch({
            type: 'QUESTS_ENROLL_BEGIN',
            questId: e
        });
        try {
            let n = await i.tn.post({
                url: O.ANM.QUESTS_ENROLL(e),
                body: T({ location: t.questContent }, (0, g.qe)(e, t.questContent)),
                rejectWithError: !0
            });
            a.Z.dispatch({
                type: 'QUESTS_ENROLL_SUCCESS',
                enrolledQuestUserStatus: (0, g.U3)(n.body)
            });
        } catch (t) {
            a.Z.dispatch({
                type: 'QUESTS_ENROLL_FAILURE',
                questId: e
            });
        }
    }
}
async function x(e, t, n) {
    if (!h.Z.isClaimingReward(e)) {
        a.Z.dispatch({
            type: 'QUESTS_CLAIM_REWARD_BEGIN',
            questId: e
        });
        try {
            let r = await i.tn.post({
                    url: O.ANM.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n
                    },
                    rejectWithError: !1
                }),
                o = (0, g.Xh)(r.body);
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
                a.Z.dispatch({
                    type: 'QUESTS_CLAIM_REWARD_FAILURE',
                    error: new o.Z(t),
                    questId: e
                }),
                t
            );
        }
    }
}
async function M(e) {
    if (!h.Z.isFetchingRewardCode(e)) {
        a.Z.dispatch({
            type: 'QUESTS_FETCH_REWARD_CODE_BEGIN',
            questId: e
        });
        try {
            let t = await i.tn.get({
                url: O.ANM.QUESTS_REWARD_CODE(e),
                rejectWithError: !1
            });
            a.Z.dispatch({
                type: 'QUESTS_FETCH_REWARD_CODE_SUCCESS',
                questId: e,
                rewardCode: (0, g.yI)(t.body)
            });
        } catch (t) {
            throw (
                a.Z.dispatch({
                    type: 'QUESTS_FETCH_REWARD_CODE_FAILURE',
                    error: new o.Z(t),
                    questId: e
                }),
                t
            );
        }
    }
}
async function k(e, t) {
    let n = h.Z.isDismissingContent(e),
        r = (0, g.GN)(t);
    if (!n && r) {
        a.Z.dispatch({
            type: 'QUESTS_DISMISS_CONTENT_BEGIN',
            questId: e,
            content: t
        });
        try {
            let n = await i.tn.post({
                url: O.ANM.QUESTS_DISMISS_CONTENT(e, t),
                body: {},
                rejectWithError: !1
            });
            a.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_SUCCESS',
                dismissedQuestUserStatus: (0, g.U3)(n.body)
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
function j(e) {
    a.Z.dispatch({
        type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
        streamKey: e
    });
}
async function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.tn.post({
            url: O.ANM.QUESTS_PREVIEW_COMPLETE(e),
            body: { percent: t },
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, g.U3)(n.body)
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
        let t = await i.tn.del({
            url: O.ANM.QUESTS_PREVIEW_STATUS(e),
            body: {},
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, g.U3)(t.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new o.Z(t),
            questId: e
        });
    }
}
async function B(e) {
    try {
        a.Z.dispatch({ type: 'QUESTS_DOCK_RESET_SOFT_DISMISSAL' });
        let t = await i.tn.del({
            url: O.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {},
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, g.U3)(t.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new o.Z(t),
            questId: e
        });
    }
}
function V(e) {
    a.Z.dispatch({
        type: 'QUESTS_DELIVERY_OVERRIDE',
        questId: e
    });
}
function F(e, t) {
    a.Z.dispatch({
        type: 'QUESTS_SELECT_TASK_PLATFORM',
        questId: e,
        platform: t
    });
}
async function Z() {
    if (!h.Z.isFetchingClaimedQuests) {
        a.Z.dispatch({ type: 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN' });
        try {
            let e = (
                await i.tn.get({
                    url: O.ANM.QUESTS_CLAIMED_QUESTS,
                    rejectWithError: !1
                })
            ).body.quests.map((e) => (0, g.hQ)(e));
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
function H(e, t, n) {
    a.Z.dispatch({
        type: 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS',
        questId: e,
        taskEventName: t,
        progress: n
    });
}
async function Y(e) {
    var t, n, r, d, f, h, m;
    (a.Z.dispatch({
        type: 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN',
        placement: e
    }),
        p.Z.recordQuestRequestAttempt('/quests/decision'));
    try {
        let o = await (0, l.Gg)(),
            m = await (0, s.Gy)(),
            E = (
                await i.tn.get({
                    url: O.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == o ? void 0 : o.uuid, m.uuid),
                    rejectWithError: !1
                })
            ).body,
            b = E.quest,
            y = null != b ? (0, g.q6)(b) : void 0;
        (a.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS',
            quest: y,
            adDecisionData: {
                ad_id: null == (t = E.ad_identifiers) ? void 0 : t.ad_id,
                adset_id: null == (n = E.ad_identifiers) ? void 0 : n.adset_id,
                ad_set_id: null == (r = E.ad_identifiers) ? void 0 : r.ad_set_id,
                campaign_id: null == (d = E.ad_identifiers) ? void 0 : d.campaign_id,
                creative_id: null == (f = E.ad_identifiers) ? void 0 : f.creative_id,
                creative_type: null == (h = E.ad_identifiers) ? void 0 : h.creative_type,
                decision_id: E.request_id,
                is_targeted: null != E.ad_identifiers,
                metadata_raw: E.metadata_raw
            },
            placement: e
        }),
            p.Z.recordQuestRequestApiResponse('/quests/decision', { wasSuccessful: !0 }),
            null != y && (_.Z.startTracking(y.id), u.default.track(O.rMx.QUEST_DECISION_RECEIVED, A(T({}, (0, c.Z)()), { quest_id: y.id }))));
    } catch (t) {
        (p.Z.recordQuestRequestApiResponse('/quests/decision', { wasSuccessful: !1 }),
            u.default.track(
                O.rMx.QUEST_DECISION_ROUNDTRIP_ERROR,
                A(T({}, (0, c.Z)()), {
                    reason: null != (m = null == t ? void 0 : t.message) ? m : null,
                    api_error: new o.Z(t).getAnyErrorMessage()
                })
            ),
            a.Z.dispatch({
                type: 'QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE',
                error: new o.Z(t),
                placement: e
            }));
    }
}
async function W(e, t) {
    var n;
    await d.Z.post({
        url: O.ANM.QUESTS_VIDEO_PROGRESS(e),
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
async function K(e, t) {
    let n = (0, b.z0)(e, t, b.n1.VIDEO, b.O.TRANSCRIPT);
    if (null == n)
        return void E.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: E.iF.FAILURE
        });
    E.ZP.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: E.iF.FETCHING
    });
    try {
        let t = await i.tn.get({
            url: n.url,
            rejectWithError: !0
        });
        E.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: E.iF.SUCCESS,
            text: t.text
        });
    } catch (t) {
        E.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: E.iF.FAILURE
        });
    }
}
async function z(e) {
    let t = await i.tn.get({
        url: O.ANM.QUEST(e),
        rejectWithError: !1
    });
    return (0, g.q6)(t.body);
}
