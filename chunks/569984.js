let r, i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, T;
n.d(t, { Z: () => eB }), n(388685);
var S,
    A = n(392711),
    C = n(754700),
    N = n(887003),
    R = n(442837),
    P = n(570140),
    w = n(509212),
    D = n(497505),
    x = n(184299),
    L = n(5881),
    j = n(46140);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = new Map(),
    Z = null,
    F = 1000;
function V() {
    (r = !1),
        (i = !1),
        (a = !1),
        (o = new Map()),
        (s = new Map()),
        (l = new Map()),
        (c = 0),
        (u = 0),
        (d = new Set()),
        (f = new Set()),
        (_ = new Set()),
        (p = new Set()),
        (h = new Set()),
        (B = new Map()),
        (g = new Map()),
        (E = new Map()),
        (b = new Map()),
        (y = null),
        (O = new Map()),
        (m = new Set()),
        (v = new Map()),
        (I = new Map()),
        eM(),
        (T = null);
}
function H(e, t) {
    var n, r, i, a;
    if (null != t.userStatus)
        for (let o of Object.values(null != (r = null == (n = t.userStatus) ? void 0 : n.progress) ? r : {}))
            !(0, A.isNil)(o) &&
                C.T.DESKTOP.has(o.eventName) &&
                ((null == (i = o.heartbeat) ? void 0 : i.lastBeatAt) != null
                    ? m.add(e)
                    : (null == (a = o.heartbeat) ? void 0 : a.lastBeatAt) == null && m.delete(e));
}
function Y(e, t) {
    let n = (o = new Map(o)).get(e);
    if (null != n) {
        let r = k({}, n, t);
        H(e, t), o.set(e, r);
    }
}
function W(e, t) {
    let n = new Map(g);
    n.set(e, t), (g = n);
}
function K(e, t) {
    W(e, t);
    let n = o.get(e),
        r = null == n ? void 0 : n.userStatus;
    null != r && null == r.claimedAt && Y(e, { userStatus: G(k({}, r), { claimedAt: t.claimedAt }) });
}
function z(e) {
    var t;
    let { entitlements: n } = e,
        r = null == (t = n.items[0].tenantMetadata) ? void 0 : t.questRewards.reward;
    return (null == r ? void 0 : r.tag) !== N.w.REWARD_CODE ? null : r.rewardCode;
}
function q(e, t) {
    let n = new Map(E);
    n.set(e, t.items), (E = n);
    let r = o.get(e),
        i = null == r ? void 0 : r.userStatus;
    if (null != i && null == i.claimedAt) {
        var a;
        let n = z({ entitlements: t });
        null != n && W(e, n),
            Y(e, {
                userStatus: G(k({}, i), {
                    claimedAt: t.claimedAt,
                    claimedTier: null != (a = null == n ? void 0 : n.tier) ? a : null,
                }),
            });
    }
}
function X(e) {
    null != b.get(e) && (b = new Map(b)).delete(e);
}
function Q() {
    eM(), V();
}
function J() {
    r = !0;
}
function $(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    (c = Date.now()), (r = !1), (o = new Map());
    let a = new Map();
    for (let e of t)
        o.set(e.id, e),
            a.set(e.id, (0, w.zi)(e)),
            e.targetedContent.includes(D.jn.QUEST_BAR) &&
                (0, L.T)({ location: j.dr.QUESTS_STORE }).log(
                    "Delivered ".concat(e.config.messages.questName, " (").concat(e.id, ")"),
                );
    for (let e of ((I = a), (s = new Map()), n)) s.set(e.id, e);
    ej(), (T = null != i ? new Date(i) : null);
}
function ee() {
    (c = 0), (r = !1);
}
function et() {
    i = !0;
}
function en(e) {
    let { questId: t } = e;
    (h = new Set(h)).add(t);
}
function er(e) {
    let { questId: t, quest: n } = e;
    (h = new Set(h)).delete(t), (o = new Map(o)).set(t, n);
}
function ei(e) {
    let { questId: t } = e;
    (h = new Set(h)).delete(t);
}
function ea() {
    a = !0;
}
function eo(e) {
    let { quests: t } = e;
    for (let e of ((a = !1), (l = new Map()), t)) l.set(e.id, e);
}
function es() {
    a = !1;
}
function el(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    m.add(t), Y(t, { userStatus: r }), null != n && X(n);
}
function ec(e) {
    let { questId: t, streamKey: n } = e;
    null != n &&
        null == b.get(n) &&
        (b = new Map(b)).set(n, {
            questId: t,
            streamKey: n,
            firstFailedAt: Date.now(),
        });
}
function eu(e) {
    let { streamKey: t } = e;
    X(t);
}
function ed(e) {
    let t = new Set(d);
    t.delete(e), (d = t);
}
function ef(e) {
    let { questId: t } = e,
        n = new Set(d);
    n.add(t), (d = n);
}
function e_(e) {
    let { enrolledQuestUserStatus: t } = e;
    Y(t.questId, { userStatus: t }), ed(t.questId);
}
function ep(e) {
    let { questId: t } = e;
    ed(t);
}
function eh(e) {
    let { questId: t } = e,
        n = new Set(_);
    n.add(t), (_ = n);
}
function em(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(_);
    r.delete(t), (_ = r), K(t, n);
}
function eg(e) {
    let { questId: t } = e,
        n = new Set(_);
    n.delete(t), (_ = n);
}
function eE(e) {
    let { questId: t } = e,
        n = new Set(f);
    n.add(t), (f = n);
}
function eb(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(f);
    r.delete(t), (f = r), q(t, n);
}
function ey(e) {
    let { questId: t } = e,
        n = new Set(f);
    n.delete(t), (f = n);
}
function eO(e) {
    let t = new Set(p);
    t.delete(e), (p = t);
}
function ev(e) {
    let { questId: t } = e,
        n = new Set(p);
    n.add(t), (p = n);
}
function eI(e) {
    let { dismissedQuestUserStatus: t } = e;
    Y(t.questId, { userStatus: t }), eO(t.questId);
}
function eT(e) {
    let { questId: t } = e;
    eO(t);
}
function eS(e) {
    let { streamKey: t } = e;
    X(t);
}
function eA(e) {
    let { user_status: t } = e,
        n = (0, L.T)({ location: j.dr.QUESTS_STORE });
    n.log("Received user status update for ".concat(t.quest_id), t);
    let r = (0, w.U3)(t);
    Y(t.quest_id, { userStatus: r });
    let i = o.get(t.quest_id);
    if (null != i) {
        let e = (0, w.zi)(i);
        I.get(t.quest_id) !== e && (I = new Map(I).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length &&
        B.has(r.questId) &&
        (n.log("Removing optimistic progress for ".concat(r.questId)), B.delete(r.questId));
}
function eC(e) {
    let { previewQuestUserStatus: t } = e;
    Y(t.questId, { userStatus: t }),
        null == t.claimedAt && (g = new Map(g)).delete(t.questId),
        null == t.enrolledAt && ((O = new Map(O)).delete(t.questId), x.ZP.getState().resetQuest(t.questId));
    let n = o.get(t.questId);
    if (null != n) {
        let e = (0, w.zi)(n);
        I.get(t.questId) !== e && (I = new Map(I).set(t.questId, e));
    }
}
function eN(e) {
    let { questId: t } = e;
    y = y === t ? null : t;
}
function eR(e) {
    let { questId: t, platform: n } = e;
    (O = new Map(O)), null == n ? O.delete(t) : O.set(t, n);
}
function eP(e) {
    var t;
    let { questId: n, taskEventName: r, progress: i } = e,
        a = null != (t = B.get(n)) ? t : new Map();
    a.set(r, i), B.set(n, a);
}
function ew(e) {
    let { questId: t } = e;
    B.has(t) && B.delete(t), x.ZP.getState().resetQuest(t);
}
function eD(e) {
    let { quest: t, placement: n, adDecisionData: r, adContext: a, metadataRaw: o } = e;
    (u = Date.now()),
        (i = !1),
        null == t
            ? v.delete(n)
            : v.set(n, {
                  quest: t,
                  adDecisionData: r,
                  adContext: a,
                  metadataRaw: o,
              });
}
function ex(e) {
    let { placement: t } = e;
    v.delete(t), (u = Date.now()), (i = !1);
}
function eL() {
    let e = !1,
        t = new Map(I);
    o.forEach((n, r) => {
        !0 !== t.get(r) && ((0, w.zi)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((I = t), eG.emitChange());
}
function ej() {
    null === Z &&
        (eL(),
        (Z = setInterval(() => {
            eL();
        }, F)));
}
function eM() {
    null !== Z && (clearInterval(Z), (Z = null));
}
function ek(e) {
    let { quest_enrollment_blocked_until: t } = e;
    T = null != t ? new Date(t) : null;
}
V();
class eU extends (S = R.ZP.Store) {
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
    isFetchingQuestPreview(e) {
        return h.has(e);
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
        return o.get(null != y ? y : "");
    }
    get questToDeliverForPlacement() {
        return v;
    }
    get questEnrollmentBlockedUntil() {
        return T;
    }
    isEnrolling(e) {
        return d.has(e);
    }
    isClaimingReward(e) {
        return f.has(e);
    }
    isFetchingRewardCode(e) {
        return _.has(e);
    }
    isDismissingContent(e) {
        return p.has(e);
    }
    getRewardCode(e) {
        return g.get(e);
    }
    getRewards(e) {
        return E.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return b.get(e);
    }
    getQuest(e) {
        return o.get(e);
    }
    isProgressingOnDesktop(e) {
        return m.has(e);
    }
    selectedTaskPlatform(e) {
        var t;
        return null != (t = O.get(e)) ? t : null;
    }
    getOptimisticProgress(e, t) {
        var n;
        return null == (n = B.get(e)) ? void 0 : n.get(t);
    }
    getExpiredQuestsMap() {
        return I;
    }
    isQuestExpired(e) {
        var t;
        return null != (t = I.get(e)) && t;
    }
}
M(eU, "displayName", "QuestsStore");
let eG = new eU(P.Z, {
        LOGOUT: Q,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: J,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: $,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: ee,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: ea,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: eo,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: es,
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: et,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eD,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: ex,
        QUESTS_FETCH_PREVIEW_BEGIN: en,
        QUESTS_FETCH_PREVIEW_SUCCESS: er,
        QUESTS_FETCH_PREVIEW_FAILURE: ei,
        QUESTS_SEND_HEARTBEAT_SUCCESS: el,
        QUESTS_SEND_HEARTBEAT_FAILURE: ec,
        QUESTS_ENROLL_BEGIN: ef,
        QUESTS_ENROLL_SUCCESS: e_,
        QUESTS_ENROLL_FAILURE: ep,
        QUESTS_FETCH_REWARD_CODE_BEGIN: eh,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: em,
        QUESTS_FETCH_REWARD_CODE_FAILURE: eg,
        QUESTS_CLAIM_REWARD_BEGIN: eE,
        QUESTS_CLAIM_REWARD_SUCCESS: eb,
        QUESTS_CLAIM_REWARD_FAILURE: ey,
        QUESTS_DISMISS_CONTENT_BEGIN: ev,
        QUESTS_DISMISS_CONTENT_SUCCESS: eI,
        QUESTS_DISMISS_CONTENT_FAILURE: eT,
        QUESTS_USER_STATUS_UPDATE: eA,
        STREAM_CLOSE: eu,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eS,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eC,
        QUESTS_DELIVERY_OVERRIDE: eN,
        QUESTS_SELECT_TASK_PLATFORM: eR,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eP,
        QUESTS_RESET_OPTIMISTIC_PROGRESS: ew,
        QUESTS_USER_COMPLETION_UPDATE: ek,
    }),
    eB = eG;
