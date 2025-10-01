let r, i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, T, S;
n.d(t, { Z: () => eF }), n(388685);
var A,
    C = n(392711),
    N = n(754700),
    R = n(887003),
    P = n(442837),
    w = n(570140),
    D = n(509212),
    L = n(497505),
    x = n(184299),
    j = n(5881),
    M = n(46140);
function k(e, t, n) {
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
function U(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = new Map(),
    F = null,
    V = new Map(),
    H = 1000;
function Y() {
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
        (Z = new Map()),
        (g = new Map()),
        (E = new Map()),
        (b = new Map()),
        (y = null),
        (O = new Map()),
        (m = new Set()),
        (v = new Map()),
        (I = new Map()),
        eU(),
        (T = null),
        (S = new Map()),
        (V = new Map());
}
function W(e, t) {
    var n, r, i, a;
    if (null != t.userStatus)
        for (let o of Object.values(null != (r = null == (n = t.userStatus) ? void 0 : n.progress) ? r : {}))
            !(0, C.isNil)(o) &&
                N.T.DESKTOP.has(o.eventName) &&
                ((null == (i = o.heartbeat) ? void 0 : i.lastBeatAt) != null
                    ? m.add(e)
                    : (null == (a = o.heartbeat) ? void 0 : a.lastBeatAt) == null && m.delete(e));
}
function K(e, t) {
    let n = (o = new Map(o)).get(e);
    if (null != n) {
        let r = U({}, n, t);
        if ((W(e, t), o.set(e, r), S.has(e))) {
            let n = S.get(e);
            null != n && (S = new Map(S)).set(e, U({}, n, t));
        }
    }
}
function z(e, t) {
    let n = new Map(g);
    n.set(e, t), (g = n);
}
function q(e, t) {
    z(e, t);
    let n = o.get(e),
        r = null == n ? void 0 : n.userStatus;
    null != r && null == r.claimedAt && K(e, { userStatus: B(U({}, r), { claimedAt: t.claimedAt }) });
}
function X(e) {
    var t;
    let { entitlements: n } = e,
        r = null == (t = n.items[0].tenantMetadata) ? void 0 : t.questRewards.reward;
    return (null == r ? void 0 : r.tag) !== R.w.REWARD_CODE ? null : r.rewardCode;
}
function Q(e, t) {
    let n = new Map(E);
    n.set(e, t.items), (E = n);
    let r = o.get(e),
        i = null == r ? void 0 : r.userStatus;
    if (null != i && null == i.claimedAt) {
        var a;
        let n = X({ entitlements: t });
        null != n && z(e, n),
            K(e, {
                userStatus: B(U({}, i), {
                    claimedAt: t.claimedAt,
                    claimedTier: null != (a = null == n ? void 0 : n.tier) ? a : null,
                }),
            });
    }
}
function J(e) {
    null != b.get(e) && (b = new Map(b)).delete(e);
}
function $() {
    eU(), Y();
}
function ee() {
    r = !0;
}
function et(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    (c = Date.now()), (r = !1), (o = new Map());
    let a = new Map();
    for (let e of t)
        o.set(e.id, e),
            a.set(e.id, (0, D.zi)(e)),
            e.targetedContent.includes(L.jn.QUEST_BAR) &&
                (0, j.T)({ location: M.dr.QUESTS_STORE }).log(
                    "Delivered ".concat(e.config.messages.questName, " (").concat(e.id, ")"),
                );
    for (let e of ((s = new Map()), n)) s.set(e.id, e);
    for (let e of null == S ? void 0 : S.values()) o.has(e.id) || (o.set(e.id, e), a.set(e.id, (0, D.zi)(e)));
    (I = a), ek(), (T = null != i ? new Date(i) : null);
}
function en() {
    (c = 0), (r = !1);
}
function er() {
    i = !0;
}
function ei(e) {
    let { questId: t } = e;
    (h = new Set(h)).add(t), (V = new Map(V)).delete(t);
}
function ea(e) {
    let { questId: t, quest: n } = e;
    (h = new Set(h)).delete(t), (S = new Map(S)).set(t, n), (o = new Map(o)).set(t, n), (V = new Map(V)).delete(t);
}
function eo(e) {
    let { questId: t, error: n } = e;
    (h = new Set(h)).delete(t), (V = new Map(V)).set(t, n);
}
function es() {
    a = !0;
}
function el(e) {
    let { quests: t } = e;
    for (let e of ((a = !1), (l = new Map()), t)) l.set(e.id, e);
}
function ec() {
    a = !1;
}
function eu(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    m.add(t), K(t, { userStatus: r }), null != n && J(n);
}
function ed(e) {
    let { questId: t, streamKey: n } = e;
    null != n &&
        null == b.get(n) &&
        (b = new Map(b)).set(n, {
            questId: t,
            streamKey: n,
            firstFailedAt: Date.now(),
        });
}
function ef(e) {
    let { streamKey: t } = e;
    J(t);
}
function e_(e) {
    let t = new Set(d);
    t.delete(e), (d = t);
}
function ep(e) {
    let { questId: t } = e,
        n = new Set(d);
    n.add(t), (d = n);
}
function eh(e) {
    let { enrolledQuestUserStatus: t } = e;
    K(t.questId, { userStatus: t }), e_(t.questId);
}
function em(e) {
    let { questId: t } = e;
    e_(t);
}
function eg(e) {
    let { questId: t } = e,
        n = new Set(_);
    n.add(t), (_ = n);
}
function eE(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(_);
    r.delete(t), (_ = r), q(t, n);
}
function eb(e) {
    let { questId: t } = e,
        n = new Set(_);
    n.delete(t), (_ = n);
}
function ey(e) {
    let { questId: t } = e,
        n = new Set(f);
    n.add(t), (f = n);
}
function eO(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(f);
    r.delete(t), (f = r), Q(t, n);
}
function ev(e) {
    let { questId: t } = e,
        n = new Set(f);
    n.delete(t), (f = n);
}
function eI(e) {
    let t = new Set(p);
    t.delete(e), (p = t);
}
function eT(e) {
    let { questId: t } = e,
        n = new Set(p);
    n.add(t), (p = n);
}
function eS(e) {
    let { dismissedQuestUserStatus: t } = e;
    K(t.questId, { userStatus: t }), eI(t.questId);
}
function eA(e) {
    let { questId: t } = e;
    eI(t);
}
function eC(e) {
    let { streamKey: t } = e;
    J(t);
}
function eN(e) {
    let { user_status: t } = e,
        n = (0, j.T)({ location: M.dr.QUESTS_STORE });
    n.log("Received user status update for ".concat(t.quest_id), t);
    let r = (0, D.U3)(t);
    K(t.quest_id, { userStatus: r });
    let i = o.get(t.quest_id);
    if (null != i) {
        let e = (0, D.zi)(i);
        I.get(t.quest_id) !== e && (I = new Map(I).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length &&
        Z.has(r.questId) &&
        (n.log("Removing optimistic progress for ".concat(r.questId)), Z.delete(r.questId));
}
function eR(e) {
    let { previewQuestUserStatus: t } = e;
    K(t.questId, { userStatus: t }),
        null == t.claimedAt && (g = new Map(g)).delete(t.questId),
        null == t.enrolledAt && ((O = new Map(O)).delete(t.questId), x.ZP.getState().resetQuest(t.questId));
    let n = o.get(t.questId);
    if (null != n) {
        let e = (0, D.zi)(n);
        I.get(t.questId) !== e && (I = new Map(I).set(t.questId, e));
    }
}
function eP(e) {
    let { questId: t } = e;
    y = y === t ? null : t;
}
function ew(e) {
    let { questId: t, platform: n } = e;
    (O = new Map(O)), null == n ? O.delete(t) : O.set(t, n);
}
function eD(e) {
    var t;
    let { questId: n, taskEventName: r, progress: i } = e,
        a = null != (t = Z.get(n)) ? t : new Map();
    a.set(r, i), Z.set(n, a);
}
function eL(e) {
    let { questId: t } = e;
    Z.has(t) && Z.delete(t), x.ZP.getState().resetQuest(t);
}
function ex(e) {
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
function ej(e) {
    let { placement: t } = e;
    v.delete(t), (u = Date.now()), (i = !1);
}
function eM() {
    let e = !1,
        t = new Map(I);
    o.forEach((n, r) => {
        !0 !== t.get(r) && ((0, D.zi)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((I = t), eZ.emitChange());
}
function ek() {
    null === F &&
        (eM(),
        (F = setInterval(() => {
            eM();
        }, H)));
}
function eU() {
    null !== F && (clearInterval(F), (F = null));
}
function eG(e) {
    let { quest_enrollment_blocked_until: t } = e;
    T = null != t ? new Date(t) : null;
}
Y();
class eB extends (A = P.ZP.Store) {
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
    getFetchQuestPreviewError(e) {
        return V.get(e);
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
        return null == (n = Z.get(e)) ? void 0 : n.get(t);
    }
    getExpiredQuestsMap() {
        return I;
    }
    isQuestExpired(e) {
        var t;
        return null != (t = I.get(e)) && t;
    }
    getQuestLoadedViaPreview(e) {
        return S.get(e);
    }
}
k(eB, "displayName", "QuestsStore");
let eZ = new eB(w.Z, {
        LOGOUT: $,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: ee,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: et,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: en,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: es,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: el,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: ec,
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: er,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: ex,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: ej,
        QUESTS_FETCH_PREVIEW_BEGIN: ei,
        QUESTS_FETCH_PREVIEW_SUCCESS: ea,
        QUESTS_FETCH_PREVIEW_FAILURE: eo,
        QUESTS_SEND_HEARTBEAT_SUCCESS: eu,
        QUESTS_SEND_HEARTBEAT_FAILURE: ed,
        QUESTS_ENROLL_BEGIN: ep,
        QUESTS_ENROLL_SUCCESS: eh,
        QUESTS_ENROLL_FAILURE: em,
        QUESTS_FETCH_REWARD_CODE_BEGIN: eg,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: eE,
        QUESTS_FETCH_REWARD_CODE_FAILURE: eb,
        QUESTS_CLAIM_REWARD_BEGIN: ey,
        QUESTS_CLAIM_REWARD_SUCCESS: eO,
        QUESTS_CLAIM_REWARD_FAILURE: ev,
        QUESTS_DISMISS_CONTENT_BEGIN: eT,
        QUESTS_DISMISS_CONTENT_SUCCESS: eS,
        QUESTS_DISMISS_CONTENT_FAILURE: eA,
        QUESTS_USER_STATUS_UPDATE: eN,
        STREAM_CLOSE: ef,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eC,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eR,
        QUESTS_DELIVERY_OVERRIDE: eP,
        QUESTS_SELECT_TASK_PLATFORM: ew,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eD,
        QUESTS_RESET_OPTIMISTIC_PROGRESS: eL,
        QUESTS_USER_COMPLETION_UPDATE: eG,
    }),
    eF = eZ;
