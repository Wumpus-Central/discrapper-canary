let r, i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O;
n.d(t, { Z: () => eD }), n(388685);
var v,
    I = n(392711),
    S = n(754700),
    T = n(887003),
    A = n(442837),
    N = n(570140),
    C = n(497505),
    R = n(918701),
    P = n(184299),
    w = n(5881),
    D = n(46140);
function L(e, t, n) {
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
function x(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = new Map(),
    U = null,
    G = 1000;
function B() {
    (r = !1), (i = !1), (a = new Map()), (o = new Map()), (s = new Map()), (l = 0), (c = new Set()), (u = new Set()), (d = new Set()), (f = new Set()), (j = new Map()), (p = new Map()), (h = new Map()), (m = new Map()), (g = null), (E = new Map()), (_ = new Set()), (b = new Map()), (y = new Map()), eC(), (O = null);
}
function V(e, t) {
    var n, r, i, a;
    if (null != t.userStatus) for (let o of Object.values(null != (r = null == (n = t.userStatus) ? void 0 : n.progress) ? r : {})) !(0, I.isNil)(o) && S.T.DESKTOP.has(o.eventName) && ((null == (i = o.heartbeat) ? void 0 : i.lastBeatAt) != null ? _.add(e) : (null == (a = o.heartbeat) ? void 0 : a.lastBeatAt) == null && _.delete(e));
}
function F(e, t) {
    let n = (a = new Map(a)).get(e);
    if (null != n) {
        let r = x({}, n, t);
        V(e, t), a.set(e, r);
    }
}
function Z(e, t) {
    let n = new Map(p);
    n.set(e, t), (p = n);
}
function H(e, t) {
    Z(e, t);
    let n = a.get(e),
        r = null == n ? void 0 : n.userStatus;
    null != r && null == r.claimedAt && F(e, { userStatus: k(x({}, r), { claimedAt: t.claimedAt }) });
}
function Y(e) {
    var t;
    let { entitlements: n } = e,
        r = null == (t = n.items[0].tenantMetadata) ? void 0 : t.questRewards.reward;
    return (null == r ? void 0 : r.tag) !== T.w.REWARD_CODE ? null : r.rewardCode;
}
function W(e, t) {
    let n = new Map(h);
    n.set(e, t.items), (h = n);
    let r = a.get(e),
        i = null == r ? void 0 : r.userStatus;
    if (null != i && null == i.claimedAt) {
        var o;
        let n = Y({ entitlements: t });
        null != n && Z(e, n),
            F(e, {
                userStatus: k(x({}, i), {
                    claimedAt: t.claimedAt,
                    claimedTier: null != (o = null == n ? void 0 : n.tier) ? o : null
                })
            });
    }
}
function K(e) {
    null != m.get(e) && (m = new Map(m)).delete(e);
}
function z() {
    eC(), B();
}
function q() {
    (l = Date.now()), (r = !0);
}
function Q(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    (r = !1), (a = new Map());
    let s = new Map();
    for (let e of t) a.set(e.id, e), s.set(e.id, (0, R.zi)(e)), e.targetedContent.includes(C.jn.QUEST_BAR) && (0, w.T)({ location: D.dr.QUESTS_STORE }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')'));
    for (let e of ((y = s), (o = new Map()), n)) o.set(e.id, e);
    eN(), (O = null != i ? new Date(i) : null);
}
function X() {
    (l = 0), (r = !1);
}
function J() {
    i = !0;
}
function $(e) {
    let { quests: t } = e;
    for (let e of ((i = !1), (s = new Map()), t)) s.set(e.id, e);
}
function ee() {
    i = !1;
}
function et(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    _.add(t), F(t, { userStatus: r }), null != n && K(n);
}
function en(e) {
    let { questId: t, streamKey: n } = e;
    null != n &&
        null == m.get(n) &&
        (m = new Map(m)).set(n, {
            questId: t,
            streamKey: n,
            firstFailedAt: Date.now()
        });
}
function er(e) {
    let { streamKey: t } = e;
    K(t);
}
function ei(e) {
    let t = new Set(c);
    t.delete(e), (c = t);
}
function ea(e) {
    let { questId: t } = e,
        n = new Set(c);
    n.add(t), (c = n);
}
function eo(e) {
    let { enrolledQuestUserStatus: t } = e;
    F(t.questId, { userStatus: t }), ei(t.questId);
}
function es(e) {
    let { questId: t } = e;
    ei(t);
}
function el(e) {
    let { questId: t } = e,
        n = new Set(d);
    n.add(t), (d = n);
}
function ec(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(d);
    r.delete(t), (d = r), H(t, n);
}
function eu(e) {
    let { questId: t } = e,
        n = new Set(d);
    n.delete(t), (d = n);
}
function ed(e) {
    let { questId: t } = e,
        n = new Set(u);
    n.add(t), (u = n);
}
function ef(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(u);
    r.delete(t), (u = r), W(t, n);
}
function e_(e) {
    let { questId: t } = e,
        n = new Set(u);
    n.delete(t), (u = n);
}
function ep(e) {
    let t = new Set(f);
    t.delete(e), (f = t);
}
function eh(e) {
    let { questId: t } = e,
        n = new Set(f);
    n.add(t), (f = n);
}
function em(e) {
    let { dismissedQuestUserStatus: t } = e;
    F(t.questId, { userStatus: t }), ep(t.questId);
}
function eg(e) {
    let { questId: t } = e;
    ep(t);
}
function eE(e) {
    let { streamKey: t } = e;
    K(t);
}
function eb(e) {
    let { user_status: t } = e,
        n = (0, w.T)({ location: D.dr.QUESTS_STORE });
    n.log('Received user status update for '.concat(t.quest_id), t);
    let r = (0, R.U3)(t);
    F(t.quest_id, { userStatus: r });
    let i = a.get(t.quest_id);
    if (null != i) {
        let e = (0, R.zi)(i);
        y.get(t.quest_id) !== e && (y = new Map(y).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length && j.has(r.questId) && (n.log('Removing optimistic progress for '.concat(r.questId)), j.delete(r.questId));
}
function ey(e) {
    let { previewQuestUserStatus: t } = e;
    F(t.questId, { userStatus: t }), null == t.claimedAt && (p = new Map(p)).delete(t.questId), null == t.enrolledAt && ((E = new Map(E)).delete(t.questId), P.ZP.getState().resetQuest(t.questId));
    let n = a.get(t.questId);
    if (null != n) {
        let e = (0, R.zi)(n);
        y.get(t.questId) !== e && (y = new Map(y).set(t.questId, e));
    }
}
function eO(e) {
    let { questId: t } = e;
    g = g === t ? null : t;
}
function ev(e) {
    let { questId: t, platform: n } = e;
    (E = new Map(E)), null == n ? E.delete(t) : E.set(t, n);
}
function eI(e) {
    var t;
    let { questId: n, taskEventName: r, progress: i } = e,
        a = null != (t = j.get(n)) ? t : new Map();
    a.set(r, i), j.set(n, a);
}
function eS(e) {
    let { decisionId: t, quest: n, placement: r, adIdentifiers: i } = e;
    null == n
        ? b.delete(r)
        : b.set(r, {
              decisionId: t,
              quest: n,
              adIdentifiers: i
          });
}
function eT(e) {
    let { placement: t } = e;
    b.delete(t);
}
function eA() {
    let e = !1,
        t = new Map(y);
    a.forEach((n, r) => {
        !0 !== t.get(r) && ((0, R.zi)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((y = t), ew.emitChange());
}
function eN() {
    null === U &&
        (eA(),
        (U = setInterval(() => {
            eA();
        }, G)));
}
function eC() {
    null !== U && (clearInterval(U), (U = null));
}
function eR(e) {
    let { quest_enrollment_blocked_until: t } = e;
    O = null != t ? new Date(t) : null;
}
B();
class eP extends (v = A.ZP.Store) {
    get quests() {
        return a;
    }
    get excludedQuests() {
        return o;
    }
    get claimedQuests() {
        return s;
    }
    get isFetchingCurrentQuests() {
        return r;
    }
    get isFetchingClaimedQuests() {
        return i;
    }
    get lastFetchedCurrentQuests() {
        return l;
    }
    get questDeliveryOverride() {
        return a.get(null != g ? g : '');
    }
    get questToDeliverForPlacement() {
        return b;
    }
    get questEnrollmentBlockedUntil() {
        return O;
    }
    isEnrolling(e) {
        return c.has(e);
    }
    isClaimingReward(e) {
        return u.has(e);
    }
    isFetchingRewardCode(e) {
        return d.has(e);
    }
    isDismissingContent(e) {
        return f.has(e);
    }
    getRewardCode(e) {
        return p.get(e);
    }
    getRewards(e) {
        return h.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return m.get(e);
    }
    getQuest(e) {
        return a.get(e);
    }
    isProgressingOnDesktop(e) {
        return _.has(e);
    }
    selectedTaskPlatform(e) {
        var t;
        return null != (t = E.get(e)) ? t : null;
    }
    getOptimisticProgress(e, t) {
        var n;
        return null == (n = j.get(e)) ? void 0 : n.get(t);
    }
    getExpiredQuestsMap() {
        return y;
    }
    isQuestExpired(e) {
        var t;
        return null != (t = y.get(e)) && t;
    }
}
L(eP, 'displayName', 'QuestsStore');
let ew = new eP(N.Z, {
        LOGOUT: z,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: q,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: Q,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: X,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: J,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: $,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: ee,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eS,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eT,
        QUESTS_SEND_HEARTBEAT_SUCCESS: et,
        QUESTS_SEND_HEARTBEAT_FAILURE: en,
        QUESTS_ENROLL_BEGIN: ea,
        QUESTS_ENROLL_SUCCESS: eo,
        QUESTS_ENROLL_FAILURE: es,
        QUESTS_FETCH_REWARD_CODE_BEGIN: el,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: ec,
        QUESTS_FETCH_REWARD_CODE_FAILURE: eu,
        QUESTS_CLAIM_REWARD_BEGIN: ed,
        QUESTS_CLAIM_REWARD_SUCCESS: ef,
        QUESTS_CLAIM_REWARD_FAILURE: e_,
        QUESTS_DISMISS_CONTENT_BEGIN: eh,
        QUESTS_DISMISS_CONTENT_SUCCESS: em,
        QUESTS_DISMISS_CONTENT_FAILURE: eg,
        QUESTS_USER_STATUS_UPDATE: eb,
        STREAM_CLOSE: er,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eE,
        QUESTS_PREVIEW_UPDATE_SUCCESS: ey,
        QUESTS_DELIVERY_OVERRIDE: eO,
        QUESTS_SELECT_TASK_PLATFORM: ev,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eI,
        QUESTS_USER_COMPLETION_UPDATE: eR
    }),
    eD = ew;
