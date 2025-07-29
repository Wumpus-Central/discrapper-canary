(n.d(t, {
    AH: () => M,
    Ag: () => Y,
    CS: () => P,
    EW: () => Z,
    OR: () => H,
    QB: () => k,
    T0: () => F,
    Wf: () => B,
    cT: () => q,
    eT: () => V,
    gU: () => Q,
    gl: () => U,
    is: () => w,
    it: () => D,
    lL: () => X,
    lx: () => K,
    m0: () => x,
    nE: () => G,
    pf: () => j,
    qm: () => W,
    w: () => z,
    xw: () => L
}),
    n(415506));
var r = n(990547),
    i = n(544891),
    a = n(570140),
    o = n(479531),
    s = n(930446),
    l = n(912471),
    c = n(186102),
    u = n(152521),
    d = n(626135),
    _ = n(573261),
    f = n(617136),
    p = n(823289),
    h = n(705006),
    m = n(509212),
    g = n(569984),
    E = n(497505),
    b = n(184299),
    y = n(720293),
    O = n(566078),
    v = n(46140),
    I = n(981631),
    T = n(388032);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            }));
    }
    return e;
}
function N(e, t) {
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
function C(e, t) {
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
let R = 5;
async function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.tn.post({
                url: I.ANM.QUEST_ON_CONSOLE_START(e),
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
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0) return { errorHints: n.error_hints_v2.slice(0, R) };
    } catch (r) {
        var n;
        let e = new o.Z(r);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: E.HW.RATE_LIMITED,
                        message: T.intl.string(T.t['Whhv4+']),
                        connected_account_id: '',
                        connected_account_type: ''
                    }
                ]
            };
        let t = null != (n = e.getAnyErrorMessage()) ? n : T.intl.string(T.t.xSCvBQ);
        return {
            errorHints: [
                {
                    type: E.HW.GENERIC,
                    message: t,
                    connected_account_id: '',
                    connected_account_type: ''
                }
            ]
        };
    }
    return { errorHints: [] };
}
async function w(e) {
    await i.tn.post({
        url: I.ANM.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1
    });
}
async function D() {
    await i.tn.del({
        url: I.ANM.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
        rejectWithError: !1
    });
}
async function L() {
    if (!g.Z.isFetchingCurrentQuests) {
        (a.Z.dispatch({ type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN' }), h.Z.recordQuestRequestAttempt(I.ANM.QUESTS_CURRENT_QUESTS));
        try {
            let e = await i.tn.get({
                    url: I.ANM.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1
                }),
                t = e.body.quests.filter((e) => (0, m.Qe)(e)).map((e) => (0, m.WP)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => {
                    var t;
                    return (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null || O.r.build(e.config).rewardPlatforms.length > 0;
                }),
                o = e.body.excluded_quests;
            (a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
                quests: r,
                excludedQuests: o,
                questEnrollmentBlockedUntil: n
            }),
                h.Z.recordQuestRequestApiResponse(I.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !0 }));
        } catch (e) {
            (a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE',
                error: new o.Z(e)
            }),
                h.Z.recordQuestRequestApiResponse(I.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !1 }));
        }
    }
}
async function x(e) {
    let { questId: t, streamKey: n, terminal: i = !1 } = e;
    try {
        var s;
        let e = await _.Z.post({
            url: I.ANM.QUESTS_HEARTBEAT(t),
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
async function M(e, t) {
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
        e === v.V6 && (0, u.m)(),
        !g.Z.isEnrolling(e))
    ) {
        a.Z.dispatch({
            type: 'QUESTS_ENROLL_BEGIN',
            questId: e
        });
        try {
            let n = await i.tn.post({
                url: I.ANM.QUESTS_ENROLL(e),
                body: A({ location: t.questContent }, (0, m.qe)(e, t.questContent)),
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
async function k(e, t, n) {
    if (!g.Z.isClaimingReward(e)) {
        a.Z.dispatch({
            type: 'QUESTS_CLAIM_REWARD_BEGIN',
            questId: e
        });
        try {
            let r = await i.tn.post({
                    url: I.ANM.QUESTS_CLAIM_REWARD(e),
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
async function j(e) {
    if (!g.Z.isFetchingRewardCode(e)) {
        a.Z.dispatch({
            type: 'QUESTS_FETCH_REWARD_CODE_BEGIN',
            questId: e
        });
        try {
            let t = await i.tn.get({
                url: I.ANM.QUESTS_REWARD_CODE(e),
                rejectWithError: !1
            });
            a.Z.dispatch({
                type: 'QUESTS_FETCH_REWARD_CODE_SUCCESS',
                questId: e,
                rewardCode: (0, m.yI)(t.body)
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
async function U(e, t) {
    let n = g.Z.isDismissingContent(e),
        r = (0, m.GN)(t);
    if (!n && r) {
        a.Z.dispatch({
            type: 'QUESTS_DISMISS_CONTENT_BEGIN',
            questId: e,
            content: t
        });
        try {
            let n = await i.tn.post({
                url: I.ANM.QUESTS_DISMISS_CONTENT(e, t),
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
function G(e) {
    a.Z.dispatch({
        type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
        streamKey: e
    });
}
async function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.tn.post({
            url: I.ANM.QUESTS_PREVIEW_COMPLETE(e),
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
async function V(e) {
    try {
        let t = await i.tn.del({
            url: I.ANM.QUESTS_PREVIEW_STATUS(e),
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
async function F(e) {
    try {
        a.Z.dispatch({ type: 'QUESTS_DOCK_RESET_SOFT_DISMISSAL' });
        let t = await i.tn.del({
            url: I.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
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
function Z(e) {
    a.Z.dispatch({
        type: 'QUESTS_DELIVERY_OVERRIDE',
        questId: e
    });
}
function H(e, t) {
    a.Z.dispatch({
        type: 'QUESTS_SELECT_TASK_PLATFORM',
        questId: e,
        platform: t
    });
}
async function Y() {
    if (!g.Z.isFetchingClaimedQuests) {
        a.Z.dispatch({ type: 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN' });
        try {
            let e = (
                await i.tn.get({
                    url: I.ANM.QUESTS_CLAIMED_QUESTS,
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
function W(e, t, n) {
    a.Z.dispatch({
        type: 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS',
        questId: e,
        taskEventName: t,
        progress: n
    });
}
function K(e) {
    a.Z.dispatch({
        type: 'QUESTS_RESET_OPTIMISTIC_PROGRESS',
        questId: e
    });
}
async function z(e) {
    var t, n, r, u, _, f, g;
    (a.Z.dispatch({
        type: 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN',
        placement: e
    }),
        h.Z.recordQuestRequestAttempt('/quests/decision'));
    try {
        let o = await (0, l.Gg)(),
            g = await (0, s.Gy)(),
            b = (
                await i.tn.get({
                    url: I.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == o ? void 0 : o.uuid, g.uuid),
                    rejectWithError: !1
                })
            ).body,
            y = b.quest,
            O = null != y ? (0, m.q6)(y) : void 0;
        if (
            (a.Z.dispatch({
                type: 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS',
                quest: O,
                adDecisionData: {
                    ad_id: null == (t = b.ad_identifiers) ? void 0 : t.ad_id,
                    adset_id: null == (n = b.ad_identifiers) ? void 0 : n.adset_id,
                    ad_set_id: null == (r = b.ad_identifiers) ? void 0 : r.ad_set_id,
                    campaign_id: null == (u = b.ad_identifiers) ? void 0 : u.campaign_id,
                    creative_id: null == (_ = b.ad_identifiers) ? void 0 : _.creative_id,
                    creative_type: null == (f = b.ad_identifiers) ? void 0 : f.creative_type,
                    decision_id: b.request_id,
                    is_targeted: null != b.ad_identifiers,
                    metadata_raw: b.metadata_raw
                },
                placement: e
            }),
            h.Z.recordQuestRequestApiResponse('/quests/decision', { wasSuccessful: !0 }),
            null == O)
        )
            return;
        (e === E.Ok.DESKTOP_ACCOUNT_PANEL_AREA && p.Z.startTracking(O.id), d.default.track(I.rMx.QUEST_DECISION_RECEIVED, C(A({}, (0, c.Z)()), { quest_id: O.id })));
    } catch (t) {
        (h.Z.recordQuestRequestApiResponse('/quests/decision', { wasSuccessful: !1 }),
            d.default.track(
                I.rMx.QUEST_DECISION_ROUNDTRIP_ERROR,
                C(A({}, (0, c.Z)()), {
                    reason: null != (g = null == t ? void 0 : t.message) ? g : null,
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
async function q(e, t) {
    var n;
    await _.Z.post({
        url: I.ANM.QUESTS_VIDEO_PROGRESS(e),
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
async function X(e, t) {
    let n = (0, y.z0)(e, t, y.n1.VIDEO, y.O.TRANSCRIPT);
    if (null == n)
        return void b.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: b.iF.FAILURE
        });
    b.ZP.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: b.iF.FETCHING
    });
    try {
        let t = await i.tn.get({
            url: n.url,
            rejectWithError: !0
        });
        b.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: b.iF.SUCCESS,
            text: t.text
        });
    } catch (t) {
        b.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: b.iF.FAILURE
        });
    }
}
async function Q(e) {
    let t = await i.tn.get({
        url: I.ANM.QUEST(e),
        rejectWithError: !1
    });
    return (0, m.q6)(t.body);
}
