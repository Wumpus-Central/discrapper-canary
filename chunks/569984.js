let r, i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y;
n.d(t, { Z: () => eP }), n(388685);
var v,
    O = n(392711),
    I = n(754700),
    S = n(887003),
    T = n(442837),
    N = n(570140),
    A = n(497505),
    C = n(918701),
    R = n(184299),
    P = n(5881),
    w = n(46140);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = new Map(),
    j = null,
    U = 1000;
function G() {
    (r = !1), (i = !1), (a = new Map()), (o = new Map()), (s = new Map()), (l = 0), (c = new Set()), (u = new Set()), (d = new Set()), (f = new Set()), (k = new Map()), (p = new Map()), (h = new Map()), (m = new Map()), (g = null), (E = new Map()), (_ = new Set()), (b = new Map()), (y = new Map()), eA();
}
function B(e, t) {
    var n, r, i, a;
    if (null != t.userStatus) for (let o of Object.values(null != (r = null == (n = t.userStatus) ? void 0 : n.progress) ? r : {})) !(0, O.isNil)(o) && I.T.DESKTOP.has(o.eventName) && ((null == (i = o.heartbeat) ? void 0 : i.lastBeatAt) != null ? _.add(e) : (null == (a = o.heartbeat) ? void 0 : a.lastBeatAt) == null && _.delete(e));
}
function F(e, t) {
    let n = (a = new Map(a)).get(e);
    if (null != n) {
        let r = L({}, n, t);
        B(e, t), a.set(e, r);
    }
}
function V(e, t) {
    let n = new Map(p);
    n.set(e, t), (p = n);
}
function Z(e, t) {
    V(e, t);
    let n = a.get(e),
        r = null == n ? void 0 : n.userStatus;
    null != r && null == r.claimedAt && F(e, { userStatus: M(L({}, r), { claimedAt: t.claimedAt }) });
}
function H(e) {
    var t;
    let { entitlements: n } = e,
        r = null == (t = n.items[0].tenantMetadata) ? void 0 : t.questRewards.reward;
    return (null == r ? void 0 : r.tag) !== S.w.REWARD_CODE ? null : r.rewardCode;
}
function W(e, t) {
    let n = new Map(h);
    n.set(e, t.items), (h = n);
    let r = a.get(e),
        i = null == r ? void 0 : r.userStatus;
    if (null != i && null == i.claimedAt) {
        var o;
        let n = H({ entitlements: t });
        null != n && V(e, n),
            F(e, {
                userStatus: M(L({}, i), {
                    claimedAt: t.claimedAt,
                    claimedTier: null != (o = null == n ? void 0 : n.tier) ? o : null
                })
            });
    }
}
function Y(e) {
    null != m.get(e) && (m = new Map(m)).delete(e);
}
function K() {
    eA(), G();
}
function z() {
    (l = Date.now()), (r = !0);
}
function q(e) {
    let { quests: t, excludedQuests: n } = e;
    (r = !1), (a = new Map());
    let i = new Map();
    for (let e of t) a.set(e.id, e), i.set(e.id, (0, C.zi)(e)), e.targetedContent.includes(A.jn.QUEST_BAR) && (0, P.T)({ location: w.dr.QUESTS_STORE }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')'));
    for (let e of ((y = i), (o = new Map()), n)) o.set(e.id, e);
    eN();
}
function Q() {
    (l = 0), (r = !1);
}
function X() {
    i = !0;
}
function J(e) {
    let { quests: t } = e;
    for (let e of ((i = !1), (s = new Map()), t)) s.set(e.id, e);
}
function $() {
    i = !1;
}
function ee(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    _.add(t), F(t, { userStatus: r }), null != n && Y(n);
}
function et(e) {
    let { questId: t, streamKey: n } = e;
    null != n &&
        null == m.get(n) &&
        (m = new Map(m)).set(n, {
            questId: t,
            streamKey: n,
            firstFailedAt: Date.now()
        });
}
function en(e) {
    let { streamKey: t } = e;
    Y(t);
}
function er(e) {
    let t = new Set(c);
    t.delete(e), (c = t);
}
function ei(e) {
    let { questId: t } = e,
        n = new Set(c);
    n.add(t), (c = n);
}
function ea(e) {
    let { enrolledQuestUserStatus: t } = e;
    F(t.questId, { userStatus: t }), er(t.questId);
}
function eo(e) {
    let { questId: t } = e;
    er(t);
}
function es(e) {
    let { questId: t } = e,
        n = new Set(d);
    n.add(t), (d = n);
}
function el(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(d);
    r.delete(t), (d = r), Z(t, n);
}
function ec(e) {
    let { questId: t } = e,
        n = new Set(d);
    n.delete(t), (d = n);
}
function eu(e) {
    let { questId: t } = e,
        n = new Set(u);
    n.add(t), (u = n);
}
function ed(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(u);
    r.delete(t), (u = r), W(t, n);
}
function ef(e) {
    let { questId: t } = e,
        n = new Set(u);
    n.delete(t), (u = n);
}
function e_(e) {
    let t = new Set(f);
    t.delete(e), (f = t);
}
function ep(e) {
    let { questId: t } = e,
        n = new Set(f);
    n.add(t), (f = n);
}
function eh(e) {
    let { dismissedQuestUserStatus: t } = e;
    F(t.questId, { userStatus: t }), e_(t.questId);
}
function em(e) {
    let { questId: t } = e;
    e_(t);
}
function eg(e) {
    let { streamKey: t } = e;
    Y(t);
}
function eE(e) {
    let { user_status: t } = e,
        n = (0, P.T)({ location: w.dr.QUESTS_STORE });
    n.log('Received user status update for '.concat(t.quest_id), t);
    let r = (0, C.U3)(t);
    F(t.quest_id, { userStatus: r });
    let i = a.get(t.quest_id);
    if (null != i) {
        let e = (0, C.zi)(i);
        y.get(t.quest_id) !== e && (y = new Map(y).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length && k.has(r.questId) && (n.log('Removing optimistic progress for '.concat(r.questId)), k.delete(r.questId));
}
function eb(e) {
    let { previewQuestUserStatus: t } = e;
    F(t.questId, { userStatus: t }), null == t.claimedAt && (p = new Map(p)).delete(t.questId), null == t.enrolledAt && ((E = new Map(E)).delete(t.questId), R.ZP.getState().resetQuest(t.questId));
    let n = a.get(t.questId);
    if (null != n) {
        let e = (0, C.zi)(n);
        y.get(t.questId) !== e && (y = new Map(y).set(t.questId, e));
    }
}
function ey(e) {
    let { questId: t } = e;
    g = g === t ? null : t;
}
function ev(e) {
    let { questId: t, platform: n } = e;
    (E = new Map(E)), null == n ? E.delete(t) : E.set(t, n);
}
function eO(e) {
    var t;
    let { questId: n, taskEventName: r, progress: i } = e,
        a = null != (t = k.get(n)) ? t : new Map();
    a.set(r, i), k.set(n, a);
}
function eI(e) {
    let { decisionId: t, quest: n, placement: r, adIdentifiers: i } = e;
    null == n
        ? b.delete(r)
        : b.set(r, {
              decisionId: t,
              quest: n,
              adIdentifiers: i
          });
}
function eS(e) {
    let { placement: t } = e;
    b.delete(t);
}
function eT() {
    let e = !1,
        t = new Map(y);
    a.forEach((n, r) => {
        !0 !== t.get(r) && ((0, C.zi)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((y = t), eR.emitChange());
}
function eN() {
    null === j &&
        (eT(),
        (j = setInterval(() => {
            eT();
        }, U)));
}
function eA() {
    null !== j && (clearInterval(j), (j = null));
}
G();
class eC extends (v = T.ZP.Store) {
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
        return null == (n = k.get(e)) ? void 0 : n.get(t);
    }
    getExpiredQuestsMap() {
        return y;
    }
    isQuestExpired(e) {
        var t;
        return null != (t = y.get(e)) && t;
    }
}
D(eC, 'displayName', 'QuestsStore');
let eR = new eC(N.Z, {
        LOGOUT: K,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: z,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: q,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: Q,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: X,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: J,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: $,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eI,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eS,
        QUESTS_SEND_HEARTBEAT_SUCCESS: ee,
        QUESTS_SEND_HEARTBEAT_FAILURE: et,
        QUESTS_ENROLL_BEGIN: ei,
        QUESTS_ENROLL_SUCCESS: ea,
        QUESTS_ENROLL_FAILURE: eo,
        QUESTS_FETCH_REWARD_CODE_BEGIN: es,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: el,
        QUESTS_FETCH_REWARD_CODE_FAILURE: ec,
        QUESTS_CLAIM_REWARD_BEGIN: eu,
        QUESTS_CLAIM_REWARD_SUCCESS: ed,
        QUESTS_CLAIM_REWARD_FAILURE: ef,
        QUESTS_DISMISS_CONTENT_BEGIN: ep,
        QUESTS_DISMISS_CONTENT_SUCCESS: eh,
        QUESTS_DISMISS_CONTENT_FAILURE: em,
        QUESTS_USER_STATUS_UPDATE: eE,
        STREAM_CLOSE: en,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eg,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eb,
        QUESTS_DELIVERY_OVERRIDE: ey,
        QUESTS_SELECT_TASK_PLATFORM: ev,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eO
    }),
    eP = eR;
