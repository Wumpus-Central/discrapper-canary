let r, i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, T, S, A, C;
n.d(t, { Z: () => eX }), n(388685);
var N,
    R = n(392711),
    P = n(754700),
    D = n(887003),
    w = n(442837),
    L = n(570140),
    x = n(70956),
    M = n(509212),
    j = n(497505),
    k = n(184299),
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
    z = new Map(),
    q = 5000,
    X = 864000000;
function Q() {
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
        eW(),
        (S = null),
        (C = new Map()),
        (z = new Map()),
        (A = new Map());
}
function J(e, t) {
    var n, r, i, a;
    if (null != t.userStatus)
        for (let o of Object.values(null != (r = null == (n = t.userStatus) ? void 0 : n.progress) ? r : {}))
            !(0, R.isNil)(o) &&
                P.T.DESKTOP.has(o.eventName) &&
                ((null == (i = o.heartbeat) ? void 0 : i.lastBeatAt) != null
                    ? g.add(e)
                    : (null == (a = o.heartbeat) ? void 0 : a.lastBeatAt) == null && g.delete(e));
}
function $(e, t) {
    let n = (s = new Map(s)).get(e);
    if (null != n) {
        let r = F({}, n, t);
        if ((J(e, t), s.set(e, r), C.has(e))) {
            let n = C.get(e);
            null != n && (C = new Map(C)).set(e, F({}, n, t));
        }
    }
}
function ee(e, t) {
    let n = new Map(E);
    n.set(e, t), (E = n);
}
function et(e, t) {
    ee(e, t);
    let n = s.get(e),
        r = null == n ? void 0 : n.userStatus;
    null != r && null == r.claimedAt && $(e, { userStatus: H(F({}, r), { claimedAt: t.claimedAt }) });
}
function en(e) {
    var t;
    let { entitlements: n } = e,
        r = null == (t = n.items[0].tenantMetadata) ? void 0 : t.questRewards.reward;
    return (null == r ? void 0 : r.tag) !== D.w.REWARD_CODE ? null : r.rewardCode;
}
function er(e, t) {
    let n = new Map(b);
    n.set(e, t.items), (b = n);
    let r = s.get(e),
        i = null == r ? void 0 : r.userStatus;
    if (null != i && null == i.claimedAt) {
        var a;
        let n = en({ entitlements: t });
        null != n && ee(e, n),
            $(e, {
                userStatus: H(F({}, i), {
                    claimedAt: t.claimedAt,
                    claimedTier: null != (a = null == n ? void 0 : n.tier) ? a : null,
                }),
            });
    }
}
function ei(e) {
    null != y.get(e) && (y = new Map(y)).delete(e);
}
function ea() {
    eW(), Q();
}
function eo() {
    r = !0;
}
function es(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    (u = Date.now()), (r = !1), (s = new Map());
    let a = new Map();
    for (let e of t)
        s.set(e.id, e),
            a.set(e.id, (0, M.zi)(e)),
            e.targetedContent.includes(j.jn.QUEST_BAR) &&
                (0, G.T)({ location: B.dr.QUESTS_STORE }).log(
                    "Delivered ".concat(e.config.messages.questName, " (").concat(e.id, ")"),
                );
    for (let e of ((l = new Map()), n)) l.set(e.id, e);
    for (let e of null == C ? void 0 : C.values()) s.has(e.id) || (s.set(e.id, e), a.set(e.id, (0, M.zi)(e)));
    (T = a), eY(), (S = null != i ? new Date(i) : null);
}
function el() {
    (u = 0), (r = !1);
}
function ec(e) {
    let { placement: t } = e;
    (i = !0), (a = new Map(a)).set(t, !0);
}
function eu(e) {
    let { questId: t } = e;
    (m = new Set(m)).add(t), (z = new Map(z)).delete(t);
}
function ed(e) {
    let { questId: t, quest: n } = e;
    (m = new Set(m)).delete(t), (C = new Map(C)).set(t, n), (s = new Map(s)).set(t, n), (z = new Map(z)).delete(t);
}
function ef(e) {
    let { questId: t, error: n } = e;
    (m = new Set(m)).delete(t), (z = new Map(z)).set(t, n);
}
function e_() {
    o = !0;
}
function ep(e) {
    let { quests: t } = e;
    for (let e of ((o = !1), (c = new Map()), t)) c.set(e.id, e);
}
function eh() {
    o = !1;
}
function em(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    g.add(t), $(t, { userStatus: r }), null != n && ei(n);
}
function eg(e) {
    let { questId: t, streamKey: n } = e;
    null != n &&
        null == y.get(n) &&
        (y = new Map(y)).set(n, {
            questId: t,
            streamKey: n,
            firstFailedAt: Date.now(),
        });
}
function eE(e) {
    let { streamKey: t } = e;
    ei(t);
}
function eb(e) {
    let t = new Set(f);
    t.delete(e), (f = t);
}
function ey(e) {
    let { questId: t } = e,
        n = new Set(f);
    n.add(t), (f = n);
}
function eO(e) {
    let { enrolledQuestUserStatus: t } = e;
    $(t.questId, { userStatus: t }), eb(t.questId);
}
function ev(e) {
    let { questId: t } = e;
    eb(t);
}
function eI(e) {
    let { questId: t } = e,
        n = new Set(p);
    n.add(t), (p = n);
}
function eT(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(p);
    r.delete(t), (p = r), et(t, n);
}
function eS(e) {
    let { questId: t } = e,
        n = new Set(p);
    n.delete(t), (p = n);
}
function eA(e) {
    let { questId: t } = e,
        n = new Set(_);
    n.add(t), (_ = n);
}
function eC(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(_);
    r.delete(t), (_ = r), er(t, n);
}
function eN(e) {
    let { questId: t } = e,
        n = new Set(_);
    n.delete(t), (_ = n);
}
function eR(e) {
    let t = new Set(h);
    t.delete(e), (h = t);
}
function eP(e) {
    let { questId: t } = e,
        n = new Set(h);
    n.add(t), (h = n);
}
function eD(e) {
    let { dismissedQuestUserStatus: t } = e;
    $(t.questId, { userStatus: t }), eR(t.questId);
}
function ew(e) {
    let { questId: t } = e;
    eR(t);
}
function eL(e) {
    let { streamKey: t } = e;
    ei(t);
}
function ex(e) {
    let { user_status: t } = e,
        n = (0, G.T)({ location: B.dr.QUESTS_STORE });
    n.log("Received user status update for ".concat(t.quest_id), t);
    let r = (0, M.U3)(t);
    $(t.quest_id, { userStatus: r });
    let i = s.get(t.quest_id);
    if (null != i) {
        let e = (0, M.zi)(i);
        T.get(t.quest_id) !== e && (T = new Map(T).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length &&
        W.has(r.questId) &&
        (n.log("Removing optimistic progress for ".concat(r.questId)), W.delete(r.questId));
}
function eM(e) {
    let { previewQuestUserStatus: t } = e;
    $(t.questId, { userStatus: t }),
        null == t.claimedAt && (E = new Map(E)).delete(t.questId),
        null == t.enrolledAt && ((v = new Map(v)).delete(t.questId), k.ZP.getState().resetQuest(t.questId));
    let n = s.get(t.questId);
    if (null != n) {
        let e = (0, M.zi)(n);
        T.get(t.questId) !== e && (T = new Map(T).set(t.questId, e));
    }
}
function ej(e) {
    let { questId: t } = e;
    O = O === t ? null : t;
}
function ek(e) {
    let { questId: t, platform: n } = e;
    (v = new Map(v)), null == n ? v.delete(t) : v.set(t, n);
}
function eU(e) {
    var t;
    let { questId: n, taskEventName: r, progress: i } = e,
        a = null != (t = W.get(n)) ? t : new Map();
    a.set(r, i), W.set(n, a);
}
function eG(e) {
    let { questId: t } = e;
    W.has(t) && W.delete(t), k.ZP.getState().resetQuest(t);
}
function eB(e) {
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
            ttlMillis: eZ(s),
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
function eZ(e) {
    if (null == e) return Y;
    let t = 1000 * e;
    return t < Y && t > 0 ? t : Y;
}
function eF(e) {
    let { placement: t } = e;
    I.delete(t), (d = Date.now()), (i = !1), (a = new Map(a)).set(t, !1);
}
function eV() {
    let e = !1,
        t = new Map(T);
    s.forEach((n, r) => {
        !0 !== t.get(r) && ((0, M.zi)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((T = t), eq.emitChange());
}
function eH() {
    eV();
    let e = (0, M.UE)(Array.from(s.values()));
    if (null == e) return;
    let t = Math.max(q, e - Date.now() + 2000);
    t > X ||
        (K = setTimeout(() => {
            eH();
        }, t));
}
function eY() {
    eW(), eH();
}
function eW() {
    null != K && (clearTimeout(K), (K = null));
}
function eK(e) {
    let { quest_enrollment_blocked_until: t } = e;
    S = null != t ? new Date(t) : null;
}
Q();
class ez extends (N = w.ZP.Store) {
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
        return z.get(e);
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
}
Z(ez, "displayName", "QuestsStore");
let eq = new ez(L.Z, {
        LOGOUT: ea,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: eo,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: es,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: el,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: e_,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: ep,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: eh,
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: ec,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eB,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eF,
        QUESTS_FETCH_PREVIEW_BEGIN: eu,
        QUESTS_FETCH_PREVIEW_SUCCESS: ed,
        QUESTS_FETCH_PREVIEW_FAILURE: ef,
        QUESTS_SEND_HEARTBEAT_SUCCESS: em,
        QUESTS_SEND_HEARTBEAT_FAILURE: eg,
        QUESTS_ENROLL_BEGIN: ey,
        QUESTS_ENROLL_SUCCESS: eO,
        QUESTS_ENROLL_FAILURE: ev,
        QUESTS_FETCH_REWARD_CODE_BEGIN: eI,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: eT,
        QUESTS_FETCH_REWARD_CODE_FAILURE: eS,
        QUESTS_CLAIM_REWARD_BEGIN: eA,
        QUESTS_CLAIM_REWARD_SUCCESS: eC,
        QUESTS_CLAIM_REWARD_FAILURE: eN,
        QUESTS_DISMISS_CONTENT_BEGIN: eP,
        QUESTS_DISMISS_CONTENT_SUCCESS: eD,
        QUESTS_DISMISS_CONTENT_FAILURE: ew,
        QUESTS_USER_STATUS_UPDATE: ex,
        STREAM_CLOSE: eE,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eL,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eM,
        QUESTS_DELIVERY_OVERRIDE: ej,
        QUESTS_SELECT_TASK_PLATFORM: ek,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eU,
        QUESTS_RESET_OPTIMISTIC_PROGRESS: eG,
        QUESTS_USER_COMPLETION_UPDATE: eK,
    }),
    eX = eq;
