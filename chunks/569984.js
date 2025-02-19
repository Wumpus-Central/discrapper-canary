let r, i, o, a, s, l, c, u, d, f, p, _, h, m, g, E;
n.d(t, { Z: () => eO }), n(47120);
var v,
    b = n(392711),
    y = n(754700),
    O = n(887003),
    S = n(442837),
    I = n(570140),
    T = n(497505),
    N = n(918701),
    A = n(184299),
    C = n(5881),
    R = n(46140);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = new Map();
function M() {
    (r = !1), (i = !1), (o = new Map()), (a = new Map()), (s = 0), (l = new Set()), (c = new Set()), (u = new Set()), (d = new Set()), (L = new Map()), (p = new Map()), (_ = new Map()), (h = new Map()), (m = null), (g = new Map()), (f = new Set()), (E = new Map());
}
function k(e, t) {
    var n, r, i, o;
    if (null != t.userStatus) for (let a of Object.values(null !== (r = null === (n = t.userStatus) || void 0 === n ? void 0 : n.progress) && void 0 !== r ? r : {})) !(0, b.isNil)(a) && y.T.DESKTOP.has(a.eventName) && ((null === (i = a.heartbeat) || void 0 === i ? void 0 : i.lastBeatAt) != null ? f.add(e) : (null === (o = a.heartbeat) || void 0 === o ? void 0 : o.lastBeatAt) == null && f.delete(e));
}
function j(e, t) {
    let n = (o = new Map(o)).get(e);
    if (null != n) {
        let r = w({}, n, t);
        k(e, t), o.set(e, r);
    }
}
function U(e, t) {
    let n = new Map(p);
    n.set(e, t), (p = n);
}
function G(e, t) {
    U(e, t);
    let n = o.get(e),
        r = null == n ? void 0 : n.userStatus;
    null != r && null == r.claimedAt && j(e, { userStatus: x(w({}, r), { claimedAt: t.claimedAt }) });
}
function B(e) {
    var t;
    let { entitlements: n } = e,
        r = null === (t = n.items[0].tenantMetadata) || void 0 === t ? void 0 : t.questRewards.reward;
    return (null == r ? void 0 : r.tag) !== O.w.REWARD_CODE ? null : r.rewardCode;
}
function Z(e, t) {
    let n = new Map(_);
    n.set(e, t.items), (_ = n);
    let r = o.get(e),
        i = null == r ? void 0 : r.userStatus;
    if (null != i && null == i.claimedAt) {
        var a;
        let n = B({ entitlements: t });
        null != n && U(e, n),
            j(e, {
                userStatus: x(w({}, i), {
                    claimedAt: t.claimedAt,
                    claimedTier: null !== (a = null == n ? void 0 : n.tier) && void 0 !== a ? a : null
                })
            });
    }
}
function F(e) {
    null != h.get(e) && (h = new Map(h)).delete(e);
}
function V() {
    M();
}
function H() {
    (s = Date.now()), (r = !0);
}
function W(e) {
    let { quests: t } = e;
    for (let e of ((r = !1), (o = new Map()), t)) o.set(e.id, e), e.targetedContent.includes(T.jn.QUEST_BAR) && (0, C.T)({ location: R.dr.QUESTS_STORE }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')'));
}
function Y() {
    (s = 0), (r = !1);
}
function K() {
    i = !0;
}
function z(e) {
    let { quests: t } = e;
    for (let e of ((i = !1), (a = new Map()), t)) a.set(e.id, e);
}
function q() {
    i = !1;
}
function Q(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    f.add(t), j(t, { userStatus: r }), F(n);
}
function X(e) {
    let { questId: t, streamKey: n } = e;
    null == h.get(n) &&
        (h = new Map(h)).set(n, {
            questId: t,
            streamKey: n,
            firstFailedAt: Date.now()
        });
}
function J(e) {
    let { streamKey: t } = e;
    F(t);
}
function $(e) {
    let t = new Set(l);
    t.delete(e), (l = t);
}
function ee(e) {
    let { questId: t } = e,
        n = new Set(l);
    n.add(t), (l = n);
}
function et(e) {
    let { enrolledQuestUserStatus: t } = e;
    j(t.questId, { userStatus: t }), $(t.questId);
}
function en(e) {
    let { questId: t } = e;
    $(t);
}
function er(e) {
    let { questId: t } = e,
        n = new Set(u);
    n.add(t), (u = n);
}
function ei(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(u);
    r.delete(t), (u = r), G(t, n);
}
function eo(e) {
    let { questId: t } = e,
        n = new Set(u);
    n.delete(t), (u = n);
}
function ea(e) {
    let { questId: t } = e,
        n = new Set(c);
    n.add(t), (c = n);
}
function es(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(c);
    r.delete(t), (c = r), Z(t, n);
}
function el(e) {
    let { questId: t } = e,
        n = new Set(c);
    n.delete(t), (c = n);
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
    let { dismissedQuestUserStatus: t } = e;
    j(t.questId, { userStatus: t }), ec(t.questId);
}
function ef(e) {
    let { questId: t } = e;
    ec(t);
}
function ep(e) {
    let { streamKey: t } = e;
    F(t);
}
function e_(e) {
    let { user_status: t } = e,
        n = (0, C.T)({ location: R.dr.QUESTS_STORE });
    n.log('Received user status update for '.concat(t.quest_id), t);
    let r = (0, N.U3)(t);
    j(t.quest_id, { userStatus: r }), 0 === Object.keys(r.progress).length && L.has(r.questId) && (n.log('Removing optimistic progress for '.concat(r.questId)), L.delete(r.questId));
}
function eh(e) {
    let { previewQuestUserStatus: t } = e;
    j(t.questId, { userStatus: t }), null == t.claimedAt && (p = new Map(p)).delete(t.questId), null == t.enrolledAt && ((g = new Map(g)).delete(t.questId), A.ZP.getState().resetQuest(t.questId));
}
function em(e) {
    let { questId: t } = e;
    m = m === t ? null : t;
}
function eg(e) {
    let { questId: t, platform: n } = e;
    (g = new Map(g)), null == n ? g.delete(t) : g.set(t, n);
}
function eE(e) {
    var t;
    let { questId: n, taskEventName: r, progress: i } = e,
        o = null !== (t = L.get(n)) && void 0 !== t ? t : new Map();
    o.set(r, i), L.set(n, o);
}
function ev(e) {
    let { decisionId: t, quest: n, placement: r } = e;
    null == n
        ? E.delete(r)
        : E.set(r, {
              decisionId: t,
              quest: n
          });
}
function eb(e) {
    let { placement: t } = e;
    E.delete(t);
}
M();
class ey extends (v = S.ZP.Store) {
    get quests() {
        return o;
    }
    get claimedQuests() {
        return a;
    }
    get isFetchingCurrentQuests() {
        return r;
    }
    get isFetchingClaimedQuests() {
        return i;
    }
    get lastFetchedCurrentQuests() {
        return s;
    }
    get questDeliveryOverride() {
        return o.get(null != m ? m : '');
    }
    get questToDeliverForPlacement() {
        return E;
    }
    isEnrolling(e) {
        return l.has(e);
    }
    isClaimingReward(e) {
        return c.has(e);
    }
    isFetchingRewardCode(e) {
        return u.has(e);
    }
    isDismissingContent(e) {
        return d.has(e);
    }
    getRewardCode(e) {
        return p.get(e);
    }
    getRewards(e) {
        return _.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return h.get(e);
    }
    getQuest(e) {
        return o.get(e);
    }
    isProgressingOnDesktop(e) {
        return f.has(e);
    }
    selectedTaskPlatform(e) {
        var t;
        return null !== (t = g.get(e)) && void 0 !== t ? t : null;
    }
    getOptimisticProgress(e, t) {
        var n;
        return null === (n = L.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
P(ey, 'displayName', 'QuestsStore');
let eO = new ey(I.Z, {
    LOGOUT: V,
    QUESTS_FETCH_CURRENT_QUESTS_BEGIN: H,
    QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: W,
    QUESTS_FETCH_CURRENT_QUESTS_FAILURE: Y,
    QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: K,
    QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: z,
    QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: q,
    QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: ev,
    QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eb,
    QUESTS_SEND_HEARTBEAT_SUCCESS: Q,
    QUESTS_SEND_HEARTBEAT_FAILURE: X,
    QUESTS_ENROLL_BEGIN: ee,
    QUESTS_ENROLL_SUCCESS: et,
    QUESTS_ENROLL_FAILURE: en,
    QUESTS_FETCH_REWARD_CODE_BEGIN: er,
    QUESTS_FETCH_REWARD_CODE_SUCCESS: ei,
    QUESTS_FETCH_REWARD_CODE_FAILURE: eo,
    QUESTS_CLAIM_REWARD_BEGIN: ea,
    QUESTS_CLAIM_REWARD_SUCCESS: es,
    QUESTS_CLAIM_REWARD_FAILURE: el,
    QUESTS_DISMISS_CONTENT_BEGIN: eu,
    QUESTS_DISMISS_CONTENT_SUCCESS: ed,
    QUESTS_DISMISS_CONTENT_FAILURE: ef,
    QUESTS_USER_STATUS_UPDATE: e_,
    STREAM_CLOSE: J,
    QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: ep,
    QUESTS_PREVIEW_UPDATE_SUCCESS: eh,
    QUESTS_DELIVERY_OVERRIDE: em,
    QUESTS_SELECT_TASK_PLATFORM: eg,
    QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eE
});
