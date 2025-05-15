let r, i, o, a, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I;
n.d(t, { Z: () => ej }), n(388685);
var S,
    T = n(392711),
    A = n(754700),
    N = n(887003),
    C = n(442837),
    P = n(570140),
    R = n(497505),
    w = n(918701),
    D = n(184299),
    L = n(5881),
    x = n(46140);
function k(e, t, n) {
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
function M(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
    F = 1000;
function V() {
    (r = !1), (i = !1), (o = new Map()), (a = new Map()), (s = new Map()), (l = 0), (c = new Set()), (u = new Set()), (d = new Set()), (f = new Set()), (G = new Map()), (p = new Map()), (h = new Map()), (m = new Map()), (g = null), (E = new Map()), (_ = new Set()), (b = new Map()), (y = new Map()), eR(), (O = null), (v = null), (I = !1);
}
function Z(e, t) {
    var n, r, i, o;
    if (null != t.userStatus) for (let a of Object.values(null != (r = null == (n = t.userStatus) ? void 0 : n.progress) ? r : {})) !(0, T.isNil)(a) && A.T.DESKTOP.has(a.eventName) && ((null == (i = a.heartbeat) ? void 0 : i.lastBeatAt) != null ? _.add(e) : (null == (o = a.heartbeat) ? void 0 : o.lastBeatAt) == null && _.delete(e));
}
function H(e, t) {
    let n = (o = new Map(o)).get(e);
    if (null != n) {
        let r = M({}, n, t);
        Z(e, t), o.set(e, r);
    }
}
function Y(e, t) {
    let n = new Map(p);
    n.set(e, t), (p = n);
}
function W(e, t) {
    Y(e, t);
    let n = o.get(e),
        r = null == n ? void 0 : n.userStatus;
    null != r && null == r.claimedAt && H(e, { userStatus: U(M({}, r), { claimedAt: t.claimedAt }) });
}
function K(e) {
    var t;
    let { entitlements: n } = e,
        r = null == (t = n.items[0].tenantMetadata) ? void 0 : t.questRewards.reward;
    return (null == r ? void 0 : r.tag) !== N.w.REWARD_CODE ? null : r.rewardCode;
}
function z(e, t) {
    let n = new Map(h);
    n.set(e, t.items), (h = n);
    let r = o.get(e),
        i = null == r ? void 0 : r.userStatus;
    if (null != i && null == i.claimedAt) {
        var a;
        let n = K({ entitlements: t });
        null != n && Y(e, n),
            H(e, {
                userStatus: U(M({}, i), {
                    claimedAt: t.claimedAt,
                    claimedTier: null != (a = null == n ? void 0 : n.tier) ? a : null
                })
            });
    }
}
function q(e) {
    null != m.get(e) && (m = new Map(m)).delete(e);
}
function Q() {
    eR(), V();
}
function X() {
    (l = Date.now()), (r = !0);
}
function J(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    (r = !1), (o = new Map());
    let s = new Map();
    for (let e of t) o.set(e.id, e), s.set(e.id, (0, w.zi)(e)), e.targetedContent.includes(R.jn.QUEST_BAR) && (0, L.T)({ location: x.dr.QUESTS_STORE }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')'));
    for (let e of ((y = s), (a = new Map()), n)) a.set(e.id, e);
    eP(), (O = null != i ? new Date(i) : null);
}
function $() {
    (l = 0), (r = !1);
}
function ee() {
    i = !0;
}
function et(e) {
    let { quests: t } = e;
    for (let e of ((i = !1), (s = new Map()), t)) s.set(e.id, e);
}
function en() {
    i = !1;
}
function er(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    _.add(t), H(t, { userStatus: r }), null != n && q(n);
}
function ei(e) {
    let { questId: t, streamKey: n } = e;
    null != n &&
        null == m.get(n) &&
        (m = new Map(m)).set(n, {
            questId: t,
            streamKey: n,
            firstFailedAt: Date.now()
        });
}
function eo(e) {
    let { streamKey: t } = e;
    q(t);
}
function ea(e) {
    let t = new Set(c);
    t.delete(e), (c = t);
}
function es(e) {
    let { questId: t } = e,
        n = new Set(c);
    n.add(t), (c = n);
}
function el(e) {
    let { enrolledQuestUserStatus: t } = e;
    H(t.questId, { userStatus: t }), ea(t.questId);
}
function ec(e) {
    let { questId: t } = e;
    ea(t);
}
function eu(e) {
    let { questId: t } = e,
        n = new Set(d);
    n.add(t), (d = n);
}
function ed(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(d);
    r.delete(t), (d = r), W(t, n);
}
function ef(e) {
    let { questId: t } = e,
        n = new Set(d);
    n.delete(t), (d = n);
}
function e_(e) {
    let { questId: t } = e,
        n = new Set(u);
    n.add(t), (u = n);
}
function ep(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(u);
    r.delete(t), (u = r), z(t, n);
}
function eh(e) {
    let { questId: t } = e,
        n = new Set(u);
    n.delete(t), (u = n);
}
function em(e) {
    let t = new Set(f);
    t.delete(e), (f = t);
}
function eg(e) {
    let { questId: t } = e,
        n = new Set(f);
    n.add(t), (f = n);
}
function eE(e) {
    let { dismissedQuestUserStatus: t } = e;
    H(t.questId, { userStatus: t }), em(t.questId);
}
function eb(e) {
    let { questId: t } = e;
    em(t);
}
function ey(e) {
    let { streamKey: t } = e;
    q(t);
}
function eO(e) {
    let { user_status: t } = e,
        n = (0, L.T)({ location: x.dr.QUESTS_STORE });
    n.log('Received user status update for '.concat(t.quest_id), t);
    let r = (0, w.U3)(t);
    H(t.quest_id, { userStatus: r });
    let i = o.get(t.quest_id);
    if (null != i) {
        let e = (0, w.zi)(i);
        y.get(t.quest_id) !== e && (y = new Map(y).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length && G.has(r.questId) && (n.log('Removing optimistic progress for '.concat(r.questId)), G.delete(r.questId));
}
function ev(e) {
    let { previewQuestUserStatus: t } = e;
    H(t.questId, { userStatus: t }), null == t.claimedAt && (p = new Map(p)).delete(t.questId), null == t.enrolledAt && ((E = new Map(E)).delete(t.questId), D.ZP.getState().resetQuest(t.questId));
    let n = o.get(t.questId);
    if (null != n) {
        let e = (0, w.zi)(n);
        y.get(t.questId) !== e && (y = new Map(y).set(t.questId, e));
    }
}
function eI(e) {
    let { questId: t } = e;
    g = g === t ? null : t;
}
function eS(e) {
    let { questId: t, platform: n } = e;
    (E = new Map(E)), null == n ? E.delete(t) : E.set(t, n);
}
function eT(e) {
    var t;
    let { questId: n, taskEventName: r, progress: i } = e,
        o = null != (t = G.get(n)) ? t : new Map();
    o.set(r, i), G.set(n, o);
}
function eA(e) {
    let { quest: t, placement: n, adDecisionData: r } = e;
    null == t
        ? b.delete(n)
        : b.set(n, {
              quest: t,
              adDecisionData: r
          });
}
function eN(e) {
    let { placement: t } = e;
    b.delete(t);
}
function eC() {
    let e = !1,
        t = new Map(y);
    o.forEach((n, r) => {
        !0 !== t.get(r) && ((0, w.zi)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((y = t), eM.emitChange());
}
function eP() {
    null === B &&
        (eC(),
        (B = setInterval(() => {
            eC();
        }, F)));
}
function eR() {
    null !== B && (clearInterval(B), (B = null));
}
function ew(e) {
    let { quest_enrollment_blocked_until: t } = e;
    O = null != t ? new Date(t) : null;
}
function eD() {
    I = !0;
}
function eL(e) {
    let { googleAdvertisingId: t, isLimitAdTrackingEnabled: n } = e;
    (I = !1),
        (v = {
            googleAdvertisingId: t,
            isLimitAdTrackingEnabled: n
        });
}
function ex() {
    (I = !1),
        (v = {
            googleAdvertisingId: null,
            isLimitAdTrackingEnabled: !0
        });
}
V();
class ek extends (S = C.ZP.Store) {
    get quests() {
        return o;
    }
    get excludedQuests() {
        return a;
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
        return o.get(null != g ? g : '');
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
        return o.get(e);
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
        return null == (n = G.get(e)) ? void 0 : n.get(t);
    }
    getExpiredQuestsMap() {
        return y;
    }
    isQuestExpired(e) {
        var t;
        return null != (t = y.get(e)) && t;
    }
    get googleAdvertisingId() {
        return null === v || v.isLimitAdTrackingEnabled ? null : v.googleAdvertisingId;
    }
    get isFetchingMobileAdData() {
        return I;
    }
}
k(ek, 'displayName', 'QuestsStore');
let eM = new ek(P.Z, {
        LOGOUT: Q,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: X,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: J,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: $,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: ee,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: et,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: en,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eA,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eN,
        QUESTS_SEND_HEARTBEAT_SUCCESS: er,
        QUESTS_SEND_HEARTBEAT_FAILURE: ei,
        QUESTS_ENROLL_BEGIN: es,
        QUESTS_ENROLL_SUCCESS: el,
        QUESTS_ENROLL_FAILURE: ec,
        QUESTS_FETCH_REWARD_CODE_BEGIN: eu,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: ed,
        QUESTS_FETCH_REWARD_CODE_FAILURE: ef,
        QUESTS_CLAIM_REWARD_BEGIN: e_,
        QUESTS_CLAIM_REWARD_SUCCESS: ep,
        QUESTS_CLAIM_REWARD_FAILURE: eh,
        QUESTS_DISMISS_CONTENT_BEGIN: eg,
        QUESTS_DISMISS_CONTENT_SUCCESS: eE,
        QUESTS_DISMISS_CONTENT_FAILURE: eb,
        QUESTS_USER_STATUS_UPDATE: eO,
        STREAM_CLOSE: eo,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: ey,
        QUESTS_PREVIEW_UPDATE_SUCCESS: ev,
        QUESTS_DELIVERY_OVERRIDE: eI,
        QUESTS_SELECT_TASK_PLATFORM: eS,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eT,
        QUESTS_USER_COMPLETION_UPDATE: ew,
        FETCH_MOBILE_AD_DATA_BEGIN: eD,
        FETCH_MOBILE_AD_DATA_SUCCESS: eL,
        FETCH_MOBILE_AD_DATA_FAILURE: ex
    }),
    ej = eM;
