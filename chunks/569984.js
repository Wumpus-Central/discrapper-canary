let r, i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, T, S, A, C;
n.d(t, { Z: () => e3 }), n(388685);
var N,
    R = n(392711),
    P = n(754700),
    D = n(887003),
    w = n(442837),
    L = n(570140),
    x = n(70956),
    M = n(509212),
    k = n(497505),
    j = n(184299),
    U = n(704161),
    G = n(5881),
    B = n(46140);
function Z(e, t, n) {
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
function F(e) {
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
                Z(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
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
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = 6 * x.Z.Millis.HOUR,
    W = new Map(),
    K = null,
    z = null,
    q = !1,
    X = null,
    Q = new Map(),
    J = 5000,
    $ = 864000000;
function ee() {
    (r = !1),
        (i = !1),
        (a = new Map()),
        (o = !1),
        (s = new Map()),
        (l = new Map()),
        (c = new Map()),
        (u = 0),
        (d = 0),
        (f = new Set()),
        (_ = new Set()),
        (p = new Set()),
        (h = new Set()),
        (m = new Set()),
        (W = new Map()),
        (E = new Map()),
        (b = new Map()),
        (y = new Map()),
        (O = null),
        (v = new Map()),
        (g = new Set()),
        (I = new Map()),
        (T = new Map()),
        eq(),
        (S = null),
        (C = new Map()),
        (Q = new Map()),
        (A = new Map());
}
function et(e, t) {
    var n, r, i, a;
    if (null != t.userStatus)
        for (let o of Object.values(null != (r = null == (n = t.userStatus) ? void 0 : n.progress) ? r : {}))
            !(0, R.isNil)(o) &&
                P.T.DESKTOP.has(o.eventName) &&
                ((null == (i = o.heartbeat) ? void 0 : i.lastBeatAt) != null
                    ? g.add(e)
                    : (null == (a = o.heartbeat) ? void 0 : a.lastBeatAt) == null && g.delete(e));
}
function en(e, t) {
    let n = (s = new Map(s)).get(e);
    if (null != n) {
        let r = F({}, n, t);
        if ((et(e, t), s.set(e, r), C.has(e))) {
            let n = C.get(e);
            null != n && (C = new Map(C)).set(e, F({}, n, t));
        }
    }
}
function er(e, t) {
    let n = new Map(E);
    n.set(e, t), (E = n);
}
function ei(e, t) {
    er(e, t);
    let n = s.get(e),
        r = null == n ? void 0 : n.userStatus;
    null != r && null == r.claimedAt && en(e, { userStatus: H(F({}, r), { claimedAt: t.claimedAt }) });
}
function ea(e) {
    var t;
    let { entitlements: n } = e,
        r = null == (t = n.items[0].tenantMetadata) ? void 0 : t.questRewards.reward;
    return (null == r ? void 0 : r.tag) !== D.w.REWARD_CODE ? null : r.rewardCode;
}
function eo(e, t) {
    let n = new Map(b);
    n.set(e, t.items), (b = n);
    let r = s.get(e),
        i = null == r ? void 0 : r.userStatus;
    if (null != i && null == i.claimedAt) {
        var a;
        let n = ea({ entitlements: t });
        null != n && er(e, n),
            en(e, {
                userStatus: H(F({}, i), {
                    claimedAt: t.claimedAt,
                    claimedTier: null != (a = null == n ? void 0 : n.tier) ? a : null,
                }),
            });
    }
}
function es(e) {
    null != y.get(e) && (y = new Map(y)).delete(e);
}
function el() {
    eq(), ee();
}
function ec() {
    r = !0;
}
function eu(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    (u = Date.now()), (r = !1), (s = new Map());
    let a = new Map();
    for (let e of t)
        s.set(e.id, e),
            a.set(e.id, (0, M.zi)(e)),
            e.targetedContent.includes(k.jn.QUEST_BAR) &&
                (0, G.T)({ location: B.dr.QUESTS_STORE }).log(
                    "Delivered ".concat(e.config.messages.questName, " (").concat(e.id, ")"),
                );
    for (let e of ((l = new Map()), n)) l.set(e.id, e);
    for (let e of null == C ? void 0 : C.values()) s.has(e.id) || (s.set(e.id, e), a.set(e.id, (0, M.zi)(e)));
    (T = a), ez(), (S = null != i ? new Date(i) : null);
}
function ed() {
    (u = 0), (r = !1);
}
function ef(e) {
    let { placement: t } = e;
    (i = !0), (a = new Map(a)).set(t, !0);
}
function e_(e) {
    let { questId: t } = e;
    (m = new Set(m)).add(t), (Q = new Map(Q)).delete(t);
}
function ep(e) {
    let { questId: t, quest: n } = e;
    (m = new Set(m)).delete(t), (C = new Map(C)).set(t, n), (s = new Map(s)).set(t, n), (Q = new Map(Q)).delete(t);
}
function eh(e) {
    let { questId: t, error: n } = e;
    (m = new Set(m)).delete(t), (Q = new Map(Q)).set(t, n);
}
function em() {
    o = !0;
}
function eg(e) {
    let { quests: t } = e;
    for (let e of ((o = !1), (c = new Map()), t)) c.set(e.id, e);
}
function eE() {
    o = !1;
}
function eb(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    g.add(t), en(t, { userStatus: r }), null != n && es(n);
}
function ey(e) {
    let { questId: t, streamKey: n } = e;
    null != n &&
        null == y.get(n) &&
        (y = new Map(y)).set(n, {
            questId: t,
            streamKey: n,
            firstFailedAt: Date.now(),
        });
}
function eO(e) {
    let { streamKey: t } = e;
    es(t);
}
function ev(e) {
    let t = new Set(f);
    t.delete(e), (f = t);
}
function eI(e) {
    let { questId: t } = e,
        n = new Set(f);
    n.add(t), (f = n);
}
function eT(e) {
    let { enrolledQuestUserStatus: t } = e;
    en(t.questId, { userStatus: t }), ev(t.questId);
}
function eS(e) {
    let { questId: t } = e;
    ev(t);
}
function eA(e) {
    let { questId: t } = e,
        n = new Set(p);
    n.add(t), (p = n);
}
function eC(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(p);
    r.delete(t), (p = r), ei(t, n);
}
function eN(e) {
    let { questId: t } = e,
        n = new Set(p);
    n.delete(t), (p = n);
}
function eR(e) {
    let { questId: t } = e,
        n = new Set(_);
    n.add(t), (_ = n);
}
function eP(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(_);
    r.delete(t), (_ = r), eo(t, n);
}
function eD(e) {
    let { questId: t } = e,
        n = new Set(_);
    n.delete(t), (_ = n);
}
function ew(e) {
    let t = new Set(h);
    t.delete(e), (h = t);
}
function eL(e) {
    let { questId: t } = e,
        n = new Set(h);
    n.add(t), (h = n);
}
function ex(e) {
    let { dismissedQuestUserStatus: t } = e;
    en(t.questId, { userStatus: t }), ew(t.questId);
}
function eM(e) {
    let { questId: t } = e;
    ew(t);
}
function ek(e) {
    let { streamKey: t } = e;
    es(t);
}
function ej(e) {
    let { user_status: t } = e,
        n = (0, G.T)({ location: B.dr.QUESTS_STORE });
    n.log("Received user status update for ".concat(t.quest_id), t);
    let r = (0, M.U3)(t);
    en(t.quest_id, { userStatus: r });
    let i = s.get(t.quest_id);
    if (null != i) {
        let e = (0, M.zi)(i);
        T.get(t.quest_id) !== e && (T = new Map(T).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length &&
        W.has(r.questId) &&
        (n.log("Removing optimistic progress for ".concat(r.questId)), W.delete(r.questId));
}
function eU(e) {
    let { previewQuestUserStatus: t } = e;
    en(t.questId, { userStatus: t }),
        null == t.claimedAt && (E = new Map(E)).delete(t.questId),
        null == t.enrolledAt && ((v = new Map(v)).delete(t.questId), j.ZP.getState().resetQuest(t.questId));
    let n = s.get(t.questId);
    if (null != n) {
        let e = (0, M.zi)(n);
        T.get(t.questId) !== e && (T = new Map(T).set(t.questId, e));
    }
}
function eG(e) {
    let { questId: t } = e;
    O = O === t ? null : t;
}
function eB(e) {
    let { questId: t, platform: n } = e;
    (v = new Map(v)), null == n ? v.delete(t) : v.set(t, n);
}
function eZ(e) {
    var t;
    let { questId: n, taskEventName: r, progress: i } = e,
        a = null != (t = W.get(n)) ? t : new Map();
    a.set(r, i), W.set(n, a);
}
function eF(e) {
    let { questId: t } = e;
    W.has(t) && W.delete(t), j.ZP.getState().resetQuest(t);
}
function eV(e) {
    let {
        quest: t,
        placement: n,
        adDecisionData: r,
        adContext: o,
        responseTtlSeconds: s,
        metadataRaw: l,
        fetchedAt: c,
    } = e;
    (d = Date.now()), (i = !1), (a = new Map(a)).set(n, !1);
    let { enableNewRequestBehavior: u } = U.Z.getConfig({ location: "handleFetchQuestToDeliverSuccess" });
    if (u) {
        var f, _, p;
        let e = {
            questId: null != (f = null == t ? void 0 : t.id) ? f : null,
            fetchedAt: c,
            ttlMillis: eH(s),
            adSetId: null != (_ = null == r ? void 0 : r.ad_set_id) ? _ : null,
            adRequestId: null != (p = null == r ? void 0 : r.decision_id) ? p : null,
        };
        (A = new Map(A)).set(n, e);
    } else
        null == t
            ? I.delete(n)
            : I.set(n, {
                  quest: t,
                  adDecisionData: r,
                  adContext: o,
                  metadataRaw: l,
              });
}
function eH(e) {
    if (null == e) return Y;
    let t = 1000 * e;
    return t < Y && t > 0 ? t : Y;
}
function eY(e) {
    let { placement: t } = e;
    I.delete(t), (d = Date.now()), (i = !1), (a = new Map(a)).set(t, !1);
}
function eW() {
    let e = !1,
        t = new Map(T);
    s.forEach((n, r) => {
        !0 !== t.get(r) && ((0, M.zi)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((T = t), e1.emitChange());
}
function eK() {
    eW();
    let e = (0, M.UE)(Array.from(s.values()));
    if (null == e) return;
    let t = Math.max(J, e - Date.now() + 2000);
    t > $ ||
        (K = setTimeout(() => {
            eK();
        }, t));
}
function ez() {
    eq(), eK();
}
function eq() {
    null != K && (clearTimeout(K), (K = null));
}
function eX(e) {
    let { quest_enrollment_blocked_until: t } = e;
    S = null != t ? new Date(t) : null;
}
function eQ() {
    q = !0;
}
function eJ(e) {
    (q = !1), (z = Date.now()), (X = e.takeover);
}
function e$() {
    q = !1;
}
ee();
class e0 extends (N = w.ZP.Store) {
    get quests() {
        return s;
    }
    get excludedQuests() {
        return l;
    }
    get claimedQuests() {
        return c;
    }
    get isFetchingCurrentQuests() {
        return r;
    }
    get isFetchingClaimedQuests() {
        return o;
    }
    isFetchingQuestPreview(e) {
        return m.has(e);
    }
    get lastFetchedCurrentQuests() {
        return u;
    }
    get lastFetchedQuestToDeliver() {
        return d;
    }
    get isFetchingQuestToDeliver() {
        return i;
    }
    isFetchingQuestToDeliverByPlacement(e) {
        var t;
        return null != (t = null == a ? void 0 : a.get(e)) && t;
    }
    get questDeliveryOverride() {
        return s.get(null != O ? O : "");
    }
    get questToDeliverForPlacement() {
        return I;
    }
    get questEnrollmentBlockedUntil() {
        return S;
    }
    get questAdDecisionByPlacement() {
        return A;
    }
    getFetchQuestPreviewError(e) {
        return Q.get(e);
    }
    isEnrolling(e) {
        return f.has(e);
    }
    isClaimingReward(e) {
        return _.has(e);
    }
    isFetchingRewardCode(e) {
        return p.has(e);
    }
    isDismissingContent(e) {
        return h.has(e);
    }
    getRewardCode(e) {
        return E.get(e);
    }
    getRewards(e) {
        return b.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return y.get(e);
    }
    getQuest(e) {
        return s.get(e);
    }
    isProgressingOnDesktop(e) {
        return g.has(e);
    }
    selectedTaskPlatform(e) {
        var t;
        return null != (t = v.get(e)) ? t : null;
    }
    getOptimisticProgress(e, t) {
        var n;
        return null == (n = W.get(e)) ? void 0 : n.get(t);
    }
    getExpiredQuestsMap() {
        return T;
    }
    isQuestExpired(e) {
        var t;
        return null != (t = T.get(e)) && t;
    }
    getQuestLoadedViaPreview(e) {
        return C.get(e);
    }
    isFetchingQuestHomeTakeover() {
        return q;
    }
    getQuestHomeTakeoverConfig() {
        return X;
    }
    getLastFetchedQuestHomeTakeover() {
        return z;
    }
}
Z(e0, "displayName", "QuestsStore");
let e1 = new e0(L.Z, {
        LOGOUT: el,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: ec,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: eu,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: ed,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: em,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: eg,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: eE,
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: ef,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eV,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eY,
        QUESTS_FETCH_PREVIEW_BEGIN: e_,
        QUESTS_FETCH_PREVIEW_SUCCESS: ep,
        QUESTS_FETCH_PREVIEW_FAILURE: eh,
        QUESTS_SEND_HEARTBEAT_SUCCESS: eb,
        QUESTS_SEND_HEARTBEAT_FAILURE: ey,
        QUESTS_ENROLL_BEGIN: eI,
        QUESTS_ENROLL_SUCCESS: eT,
        QUESTS_ENROLL_FAILURE: eS,
        QUESTS_FETCH_REWARD_CODE_BEGIN: eA,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: eC,
        QUESTS_FETCH_REWARD_CODE_FAILURE: eN,
        QUESTS_CLAIM_REWARD_BEGIN: eR,
        QUESTS_CLAIM_REWARD_SUCCESS: eP,
        QUESTS_CLAIM_REWARD_FAILURE: eD,
        QUESTS_DISMISS_CONTENT_BEGIN: eL,
        QUESTS_DISMISS_CONTENT_SUCCESS: ex,
        QUESTS_DISMISS_CONTENT_FAILURE: eM,
        QUESTS_USER_STATUS_UPDATE: ej,
        STREAM_CLOSE: eO,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: ek,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eU,
        QUESTS_DELIVERY_OVERRIDE: eG,
        QUESTS_SELECT_TASK_PLATFORM: eB,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eZ,
        QUESTS_RESET_OPTIMISTIC_PROGRESS: eF,
        QUESTS_USER_COMPLETION_UPDATE: eX,
        QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN: eQ,
        QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS: eJ,
        QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE: e$,
    }),
    e3 = e1;
