let r, i, a, o, s, l, c, u, d, _, f, p, h, m, g, E, b, y, O, v, I;
(n.d(t, { Z: () => ek }), n(388685));
var T,
    S = n(392711),
    A = n(754700),
    N = n(887003),
    C = n(442837),
    R = n(570140),
    P = n(509212),
    w = n(497505),
    D = n(184299),
    L = n(5881),
    x = n(46140);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            }));
    }
    return e;
}
function j(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = new Map(),
    B = null,
    V = 1000;
function F() {
    ((r = !1), (i = !1), (a = !1), (o = new Map()), (s = new Map()), (l = new Map()), (c = 0), (u = 0), (d = new Set()), (_ = new Set()), (f = new Set()), (p = new Set()), (G = new Map()), (m = new Map()), (g = new Map()), (E = new Map()), (b = null), (y = new Map()), (h = new Set()), (O = new Map()), (v = new Map()), eD(), (I = null));
}
function Z(e, t) {
    var n, r, i, a;
    if (null != t.userStatus) for (let o of Object.values(null != (r = null == (n = t.userStatus) ? void 0 : n.progress) ? r : {})) !(0, S.isNil)(o) && A.T.DESKTOP.has(o.eventName) && ((null == (i = o.heartbeat) ? void 0 : i.lastBeatAt) != null ? h.add(e) : (null == (a = o.heartbeat) ? void 0 : a.lastBeatAt) == null && h.delete(e));
}
function H(e, t) {
    let n = (o = new Map(o)).get(e);
    if (null != n) {
        let r = k({}, n, t);
        (Z(e, t), o.set(e, r));
    }
}
function Y(e, t) {
    let n = new Map(m);
    (n.set(e, t), (m = n));
}
function W(e, t) {
    Y(e, t);
    let n = o.get(e),
        r = null == n ? void 0 : n.userStatus;
    null != r && null == r.claimedAt && H(e, { userStatus: U(k({}, r), { claimedAt: t.claimedAt }) });
}
function K(e) {
    var t;
    let { entitlements: n } = e,
        r = null == (t = n.items[0].tenantMetadata) ? void 0 : t.questRewards.reward;
    return (null == r ? void 0 : r.tag) !== N.w.REWARD_CODE ? null : r.rewardCode;
}
function z(e, t) {
    let n = new Map(g);
    (n.set(e, t.items), (g = n));
    let r = o.get(e),
        i = null == r ? void 0 : r.userStatus;
    if (null != i && null == i.claimedAt) {
        var a;
        let n = K({ entitlements: t });
        (null != n && Y(e, n),
            H(e, {
                userStatus: U(k({}, i), {
                    claimedAt: t.claimedAt,
                    claimedTier: null != (a = null == n ? void 0 : n.tier) ? a : null
                })
            }));
    }
}
function q(e) {
    null != E.get(e) && (E = new Map(E)).delete(e);
}
function X() {
    (eD(), F());
}
function Q() {
    r = !0;
}
function J(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    ((c = Date.now()), (r = !1), (o = new Map()));
    let a = new Map();
    for (let e of t) (o.set(e.id, e), a.set(e.id, (0, P.zi)(e)), e.targetedContent.includes(w.jn.QUEST_BAR) && (0, L.T)({ location: x.dr.QUESTS_STORE }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')')));
    for (let e of ((v = a), (s = new Map()), n)) s.set(e.id, e);
    (ew(), (I = null != i ? new Date(i) : null));
}
function $() {
    ((c = 0), (r = !1));
}
function ee() {
    i = !0;
}
function et() {
    a = !0;
}
function en(e) {
    let { quests: t } = e;
    for (let e of ((a = !1), (l = new Map()), t)) l.set(e.id, e);
}
function er() {
    a = !1;
}
function ei(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    (h.add(t), H(t, { userStatus: r }), null != n && q(n));
}
function ea(e) {
    let { questId: t, streamKey: n } = e;
    null != n &&
        null == E.get(n) &&
        (E = new Map(E)).set(n, {
            questId: t,
            streamKey: n,
            firstFailedAt: Date.now()
        });
}
function eo(e) {
    let { streamKey: t } = e;
    q(t);
}
function es(e) {
    let t = new Set(d);
    (t.delete(e), (d = t));
}
function el(e) {
    let { questId: t } = e,
        n = new Set(d);
    (n.add(t), (d = n));
}
function ec(e) {
    let { enrolledQuestUserStatus: t } = e;
    (H(t.questId, { userStatus: t }), es(t.questId));
}
function eu(e) {
    let { questId: t } = e;
    es(t);
}
function ed(e) {
    let { questId: t } = e,
        n = new Set(f);
    (n.add(t), (f = n));
}
function e_(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(f);
    (r.delete(t), (f = r), W(t, n));
}
function ef(e) {
    let { questId: t } = e,
        n = new Set(f);
    (n.delete(t), (f = n));
}
function ep(e) {
    let { questId: t } = e,
        n = new Set(_);
    (n.add(t), (_ = n));
}
function eh(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(_);
    (r.delete(t), (_ = r), z(t, n));
}
function em(e) {
    let { questId: t } = e,
        n = new Set(_);
    (n.delete(t), (_ = n));
}
function eg(e) {
    let t = new Set(p);
    (t.delete(e), (p = t));
}
function eE(e) {
    let { questId: t } = e,
        n = new Set(p);
    (n.add(t), (p = n));
}
function eb(e) {
    let { dismissedQuestUserStatus: t } = e;
    (H(t.questId, { userStatus: t }), eg(t.questId));
}
function ey(e) {
    let { questId: t } = e;
    eg(t);
}
function eO(e) {
    let { streamKey: t } = e;
    q(t);
}
function ev(e) {
    let { user_status: t } = e,
        n = (0, L.T)({ location: x.dr.QUESTS_STORE });
    n.log('Received user status update for '.concat(t.quest_id), t);
    let r = (0, P.U3)(t);
    H(t.quest_id, { userStatus: r });
    let i = o.get(t.quest_id);
    if (null != i) {
        let e = (0, P.zi)(i);
        v.get(t.quest_id) !== e && (v = new Map(v).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length && G.has(r.questId) && (n.log('Removing optimistic progress for '.concat(r.questId)), G.delete(r.questId));
}
function eI(e) {
    let { previewQuestUserStatus: t } = e;
    (H(t.questId, { userStatus: t }), null == t.claimedAt && (m = new Map(m)).delete(t.questId), null == t.enrolledAt && ((y = new Map(y)).delete(t.questId), D.ZP.getState().resetQuest(t.questId)));
    let n = o.get(t.questId);
    if (null != n) {
        let e = (0, P.zi)(n);
        v.get(t.questId) !== e && (v = new Map(v).set(t.questId, e));
    }
}
function eT(e) {
    let { questId: t } = e;
    b = b === t ? null : t;
}
function eS(e) {
    let { questId: t, platform: n } = e;
    ((y = new Map(y)), null == n ? y.delete(t) : y.set(t, n));
}
function eA(e) {
    var t;
    let { questId: n, taskEventName: r, progress: i } = e,
        a = null != (t = G.get(n)) ? t : new Map();
    (a.set(r, i), G.set(n, a));
}
function eN(e) {
    let { questId: t } = e;
    (G.has(t) && G.delete(t), D.ZP.getState().resetQuest(t));
}
function eC(e) {
    let { quest: t, placement: n, adDecisionData: r, adContext: a } = e;
    ((u = Date.now()),
        (i = !1),
        null == t
            ? O.delete(n)
            : O.set(n, {
                  quest: t,
                  adDecisionData: r,
                  adContext: a
              }));
}
function eR(e) {
    let { placement: t } = e;
    (O.delete(t), (u = Date.now()), (i = !1));
}
function eP() {
    let e = !1,
        t = new Map(v);
    (o.forEach((n, r) => {
        !0 !== t.get(r) && ((0, P.zi)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((v = t), eM.emitChange()));
}
function ew() {
    null === B &&
        (eP(),
        (B = setInterval(() => {
            eP();
        }, V)));
}
function eD() {
    null !== B && (clearInterval(B), (B = null));
}
function eL(e) {
    let { quest_enrollment_blocked_until: t } = e;
    I = null != t ? new Date(t) : null;
}
F();
class ex extends (T = C.ZP.Store) {
    get quests() {
        return o;
    }
    get excludedQuests() {
        return s;
    }
    get claimedQuests() {
        return l;
    }
    get isFetchingCurrentQuests() {
        return r;
    }
    get isFetchingClaimedQuests() {
        return a;
    }
    get lastFetchedCurrentQuests() {
        return c;
    }
    get lastFetchedQuestToDeliver() {
        return u;
    }
    get isFetchingQuestToDeliver() {
        return i;
    }
    get questDeliveryOverride() {
        return o.get(null != b ? b : '');
    }
    get questToDeliverForPlacement() {
        return O;
    }
    get questEnrollmentBlockedUntil() {
        return I;
    }
    isEnrolling(e) {
        return d.has(e);
    }
    isClaimingReward(e) {
        return _.has(e);
    }
    isFetchingRewardCode(e) {
        return f.has(e);
    }
    isDismissingContent(e) {
        return p.has(e);
    }
    getRewardCode(e) {
        return m.get(e);
    }
    getRewards(e) {
        return g.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return E.get(e);
    }
    getQuest(e) {
        return o.get(e);
    }
    isProgressingOnDesktop(e) {
        return h.has(e);
    }
    selectedTaskPlatform(e) {
        var t;
        return null != (t = y.get(e)) ? t : null;
    }
    getOptimisticProgress(e, t) {
        var n;
        return null == (n = G.get(e)) ? void 0 : n.get(t);
    }
    getExpiredQuestsMap() {
        return v;
    }
    isQuestExpired(e) {
        var t;
        return null != (t = v.get(e)) && t;
    }
}
M(ex, 'displayName', 'QuestsStore');
let eM = new ex(R.Z, {
        LOGOUT: X,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: Q,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: J,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: $,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: et,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: en,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: er,
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: ee,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eC,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eR,
        QUESTS_SEND_HEARTBEAT_SUCCESS: ei,
        QUESTS_SEND_HEARTBEAT_FAILURE: ea,
        QUESTS_ENROLL_BEGIN: el,
        QUESTS_ENROLL_SUCCESS: ec,
        QUESTS_ENROLL_FAILURE: eu,
        QUESTS_FETCH_REWARD_CODE_BEGIN: ed,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: e_,
        QUESTS_FETCH_REWARD_CODE_FAILURE: ef,
        QUESTS_CLAIM_REWARD_BEGIN: ep,
        QUESTS_CLAIM_REWARD_SUCCESS: eh,
        QUESTS_CLAIM_REWARD_FAILURE: em,
        QUESTS_DISMISS_CONTENT_BEGIN: eE,
        QUESTS_DISMISS_CONTENT_SUCCESS: eb,
        QUESTS_DISMISS_CONTENT_FAILURE: ey,
        QUESTS_USER_STATUS_UPDATE: ev,
        STREAM_CLOSE: eo,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eO,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eI,
        QUESTS_DELIVERY_OVERRIDE: eT,
        QUESTS_SELECT_TASK_PLATFORM: eS,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eA,
        QUESTS_RESET_OPTIMISTIC_PROGRESS: eN,
        QUESTS_USER_COMPLETION_UPDATE: eL
    }),
    ek = eM;
