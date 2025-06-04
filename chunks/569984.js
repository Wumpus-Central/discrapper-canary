let r, i, o, a, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, S, T;
n.d(t, { Z: () => eB }), n(388685);
var A,
    N = n(392711),
    C = n(754700),
    P = n(887003),
    R = n(442837),
    w = n(570140),
    D = n(497505),
    L = n(918701),
    x = n(184299),
    k = n(5881),
    M = n(46140);
function j(e, t, n) {
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
function U(e) {
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
                j(e, t, n[t]);
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
let F = new Map(),
    V = null,
    Z = 1000;
function H() {
    (r = !1), (i = !1), (o = !1), (a = new Map()), (s = new Map()), (l = new Map()), (c = 0), (u = 0), (d = new Set()), (f = new Set()), (_ = new Set()), (p = new Set()), (F = new Map()), (m = new Map()), (g = new Map()), (E = new Map()), (b = null), (y = new Map()), (h = new Set()), (O = new Map()), (v = new Map()), eL(), (I = null), (S = null), (T = !1);
}
function Y(e, t) {
    var n, r, i, o;
    if (null != t.userStatus) for (let a of Object.values(null != (r = null == (n = t.userStatus) ? void 0 : n.progress) ? r : {})) !(0, N.isNil)(a) && C.T.DESKTOP.has(a.eventName) && ((null == (i = a.heartbeat) ? void 0 : i.lastBeatAt) != null ? h.add(e) : (null == (o = a.heartbeat) ? void 0 : o.lastBeatAt) == null && h.delete(e));
}
function W(e, t) {
    let n = (a = new Map(a)).get(e);
    if (null != n) {
        let r = U({}, n, t);
        Y(e, t), a.set(e, r);
    }
}
function K(e, t) {
    let n = new Map(m);
    n.set(e, t), (m = n);
}
function z(e, t) {
    K(e, t);
    let n = a.get(e),
        r = null == n ? void 0 : n.userStatus;
    null != r && null == r.claimedAt && W(e, { userStatus: B(U({}, r), { claimedAt: t.claimedAt }) });
}
function q(e) {
    var t;
    let { entitlements: n } = e,
        r = null == (t = n.items[0].tenantMetadata) ? void 0 : t.questRewards.reward;
    return (null == r ? void 0 : r.tag) !== P.w.REWARD_CODE ? null : r.rewardCode;
}
function Q(e, t) {
    let n = new Map(g);
    n.set(e, t.items), (g = n);
    let r = a.get(e),
        i = null == r ? void 0 : r.userStatus;
    if (null != i && null == i.claimedAt) {
        var o;
        let n = q({ entitlements: t });
        null != n && K(e, n),
            W(e, {
                userStatus: B(U({}, i), {
                    claimedAt: t.claimedAt,
                    claimedTier: null != (o = null == n ? void 0 : n.tier) ? o : null
                })
            });
    }
}
function X(e) {
    null != E.get(e) && (E = new Map(E)).delete(e);
}
function J() {
    eL(), H();
}
function $() {
    r = !0;
}
function ee(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    (c = Date.now()), (r = !1), (a = new Map());
    let o = new Map();
    for (let e of t) a.set(e.id, e), o.set(e.id, (0, L.zi)(e)), e.targetedContent.includes(D.jn.QUEST_BAR) && (0, k.T)({ location: M.dr.QUESTS_STORE }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')'));
    for (let e of ((v = o), (s = new Map()), n)) s.set(e.id, e);
    eD(), (I = null != i ? new Date(i) : null);
}
function et() {
    (c = 0), (r = !1);
}
function en() {
    i = !0;
}
function er() {
    o = !0;
}
function ei(e) {
    let { quests: t } = e;
    for (let e of ((o = !1), (l = new Map()), t)) l.set(e.id, e);
}
function eo() {
    o = !1;
}
function ea(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    h.add(t), W(t, { userStatus: r }), null != n && X(n);
}
function es(e) {
    let { questId: t, streamKey: n } = e;
    null != n &&
        null == E.get(n) &&
        (E = new Map(E)).set(n, {
            questId: t,
            streamKey: n,
            firstFailedAt: Date.now()
        });
}
function el(e) {
    let { streamKey: t } = e;
    X(t);
}
function ec(e) {
    let t = new Set(d);
    t.delete(e), (d = t);
}
function eu(e) {
    let { questId: t } = e,
        n = new Set(d);
    n.add(t), (d = n);
}
function ed(e) {
    let { enrolledQuestUserStatus: t } = e;
    W(t.questId, { userStatus: t }), ec(t.questId);
}
function ef(e) {
    let { questId: t } = e;
    ec(t);
}
function e_(e) {
    let { questId: t } = e,
        n = new Set(_);
    n.add(t), (_ = n);
}
function ep(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(_);
    r.delete(t), (_ = r), z(t, n);
}
function eh(e) {
    let { questId: t } = e,
        n = new Set(_);
    n.delete(t), (_ = n);
}
function em(e) {
    let { questId: t } = e,
        n = new Set(f);
    n.add(t), (f = n);
}
function eg(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(f);
    r.delete(t), (f = r), Q(t, n);
}
function eE(e) {
    let { questId: t } = e,
        n = new Set(f);
    n.delete(t), (f = n);
}
function eb(e) {
    let t = new Set(p);
    t.delete(e), (p = t);
}
function ey(e) {
    let { questId: t } = e,
        n = new Set(p);
    n.add(t), (p = n);
}
function eO(e) {
    let { dismissedQuestUserStatus: t } = e;
    W(t.questId, { userStatus: t }), eb(t.questId);
}
function ev(e) {
    let { questId: t } = e;
    eb(t);
}
function eI(e) {
    let { streamKey: t } = e;
    X(t);
}
function eS(e) {
    let { user_status: t } = e,
        n = (0, k.T)({ location: M.dr.QUESTS_STORE });
    n.log('Received user status update for '.concat(t.quest_id), t);
    let r = (0, L.U3)(t);
    W(t.quest_id, { userStatus: r });
    let i = a.get(t.quest_id);
    if (null != i) {
        let e = (0, L.zi)(i);
        v.get(t.quest_id) !== e && (v = new Map(v).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length && F.has(r.questId) && (n.log('Removing optimistic progress for '.concat(r.questId)), F.delete(r.questId));
}
function eT(e) {
    let { previewQuestUserStatus: t } = e;
    W(t.questId, { userStatus: t }), null == t.claimedAt && (m = new Map(m)).delete(t.questId), null == t.enrolledAt && ((y = new Map(y)).delete(t.questId), x.ZP.getState().resetQuest(t.questId));
    let n = a.get(t.questId);
    if (null != n) {
        let e = (0, L.zi)(n);
        v.get(t.questId) !== e && (v = new Map(v).set(t.questId, e));
    }
}
function eA(e) {
    let { questId: t } = e;
    b = b === t ? null : t;
}
function eN(e) {
    let { questId: t, platform: n } = e;
    (y = new Map(y)), null == n ? y.delete(t) : y.set(t, n);
}
function eC(e) {
    var t;
    let { questId: n, taskEventName: r, progress: i } = e,
        o = null != (t = F.get(n)) ? t : new Map();
    o.set(r, i), F.set(n, o);
}
function eP(e) {
    let { quest: t, placement: n, adDecisionData: r } = e;
    (u = Date.now()),
        (i = !1),
        null == t
            ? O.delete(n)
            : O.set(n, {
                  quest: t,
                  adDecisionData: r
              });
}
function eR(e) {
    let { placement: t } = e;
    O.delete(t), (u = Date.now()), (i = !1);
}
function ew() {
    let e = !1,
        t = new Map(v);
    a.forEach((n, r) => {
        !0 !== t.get(r) && ((0, L.zi)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((v = t), eG.emitChange());
}
function eD() {
    null === V &&
        (ew(),
        (V = setInterval(() => {
            ew();
        }, Z)));
}
function eL() {
    null !== V && (clearInterval(V), (V = null));
}
function ex(e) {
    let { quest_enrollment_blocked_until: t } = e;
    I = null != t ? new Date(t) : null;
}
function ek() {
    T = !0;
}
function eM(e) {
    let { googleAdvertisingId: t, isLimitAdTrackingEnabled: n } = e;
    (T = !1),
        (S = {
            googleAdvertisingId: t,
            isLimitAdTrackingEnabled: n
        });
}
function ej() {
    (T = !1),
        (S = {
            googleAdvertisingId: null,
            isLimitAdTrackingEnabled: !0
        });
}
H();
class eU extends (A = R.ZP.Store) {
    get quests() {
        return a;
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
        return o;
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
        return a.get(null != b ? b : '');
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
        return f.has(e);
    }
    isFetchingRewardCode(e) {
        return _.has(e);
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
        return a.get(e);
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
        return null == (n = F.get(e)) ? void 0 : n.get(t);
    }
    getExpiredQuestsMap() {
        return v;
    }
    isQuestExpired(e) {
        var t;
        return null != (t = v.get(e)) && t;
    }
    get googleAdvertisingId() {
        return null === S || S.isLimitAdTrackingEnabled ? null : S.googleAdvertisingId;
    }
    get isFetchingMobileAdData() {
        return T;
    }
}
j(eU, 'displayName', 'QuestsStore');
let eG = new eU(w.Z, {
        LOGOUT: J,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: $,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: ee,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: et,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: er,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: ei,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: eo,
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: en,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eP,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eR,
        QUESTS_SEND_HEARTBEAT_SUCCESS: ea,
        QUESTS_SEND_HEARTBEAT_FAILURE: es,
        QUESTS_ENROLL_BEGIN: eu,
        QUESTS_ENROLL_SUCCESS: ed,
        QUESTS_ENROLL_FAILURE: ef,
        QUESTS_FETCH_REWARD_CODE_BEGIN: e_,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: ep,
        QUESTS_FETCH_REWARD_CODE_FAILURE: eh,
        QUESTS_CLAIM_REWARD_BEGIN: em,
        QUESTS_CLAIM_REWARD_SUCCESS: eg,
        QUESTS_CLAIM_REWARD_FAILURE: eE,
        QUESTS_DISMISS_CONTENT_BEGIN: ey,
        QUESTS_DISMISS_CONTENT_SUCCESS: eO,
        QUESTS_DISMISS_CONTENT_FAILURE: ev,
        QUESTS_USER_STATUS_UPDATE: eS,
        STREAM_CLOSE: el,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eI,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eT,
        QUESTS_DELIVERY_OVERRIDE: eA,
        QUESTS_SELECT_TASK_PLATFORM: eN,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eC,
        QUESTS_USER_COMPLETION_UPDATE: ex,
        FETCH_MOBILE_AD_DATA_BEGIN: ek,
        FETCH_MOBILE_AD_DATA_SUCCESS: eM,
        FETCH_MOBILE_AD_DATA_FAILURE: ej
    }),
    eB = eG;
