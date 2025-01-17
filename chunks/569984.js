let i, a, s, o, l, u, c, d, f, _, h, p, m, g, E, v;
var I,
    T = r(47120);
var b = r(392711);
var y = r(754700),
    S = r(887003),
    A = r(442837),
    N = r(570140),
    C = r(497505),
    R = r(918701),
    O = r(184299),
    D = r(5881),
    L = r(46140);
function x(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let w = new Map();
function P() {
    (i = !1), (a = !1), (s = new Map()), (o = new Map()), (l = 0), (u = new Set()), (c = new Set()), (d = new Set()), (f = new Set()), (w = new Map()), (h = new Map()), (p = new Map()), (m = new Map()), (g = null), (E = new Map()), (_ = new Set()), (v = new Map());
}
function M(e, n) {
    var r, i, a, s;
    if (null != n.userStatus)
        for (let o of Object.values(null !== (i = null === (r = n.userStatus) || void 0 === r ? void 0 : r.progress) && void 0 !== i ? i : {})) {
            if (!(0, b.isNil)(o)) y.T.DESKTOP.has(o.eventName) && ((null === (a = o.heartbeat) || void 0 === a ? void 0 : a.lastBeatAt) != null ? _.add(e) : (null === (s = o.heartbeat) || void 0 === s ? void 0 : s.lastBeatAt) == null && _.delete(e));
        }
}
function k(e, n) {
    let r = (s = new Map(s)).get(e);
    if (null != r) {
        let i = {
            ...r,
            ...n
        };
        M(e, n), s.set(e, i);
    }
}
function U(e, n) {
    let r = new Map(h);
    r.set(e, n), (h = r);
}
function B(e, n) {
    U(e, n);
    let r = s.get(e),
        i = null == r ? void 0 : r.userStatus;
    null != i &&
        null == i.claimedAt &&
        k(e, {
            userStatus: {
                ...i,
                claimedAt: n.claimedAt
            }
        });
}
function G(e) {
    var n;
    let { entitlements: r } = e,
        i = null === (n = r.items[0].tenantMetadata) || void 0 === n ? void 0 : n.questRewards.reward;
    return (null == i ? void 0 : i.tag) !== S.w.REWARD_CODE ? null : i.rewardCode;
}
function Z(e, n) {
    let r = new Map(p);
    r.set(e, n.items), (p = r);
    let i = s.get(e),
        a = null == i ? void 0 : i.userStatus;
    if (null != a && null == a.claimedAt) {
        var o;
        let r = G({ entitlements: n });
        null != r && U(e, r),
            k(e, {
                userStatus: {
                    ...a,
                    claimedAt: n.claimedAt,
                    claimedTier: null !== (o = null == r ? void 0 : r.tier) && void 0 !== o ? o : null
                }
            });
    }
}
function F(e) {
    null != m.get(e) && (m = new Map(m)).delete(e);
}
function V() {
    P();
}
function j() {
    (l = Date.now()), (i = !0);
}
function H(e) {
    let { quests: n } = e;
    for (let e of ((i = !1), (s = new Map()), n)) s.set(e.id, e), e.targetedContent.includes(C.jn.QUEST_BAR) && (0, D.T)({ location: L.dr.QUESTS_STORE }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')'));
}
function Y() {
    (l = 0), (i = !1);
}
function W() {
    a = !0;
}
function K(e) {
    let { quests: n } = e;
    for (let e of ((a = !1), (o = new Map()), n)) o.set(e.id, e);
}
function z() {
    a = !1;
}
function q(e) {
    let { questId: n, streamKey: r, userStatus: i } = e;
    _.add(n), k(n, { userStatus: i }), F(r);
}
function Q(e) {
    let { questId: n, streamKey: r } = e;
    null == m.get(r) &&
        (m = new Map(m)).set(r, {
            questId: n,
            streamKey: r,
            firstFailedAt: Date.now()
        });
}
function X(e) {
    let { streamKey: n } = e;
    F(n);
}
function J(e) {
    let n = new Set(u);
    n.delete(e), (u = n);
}
function $(e) {
    let { questId: n } = e,
        r = new Set(u);
    r.add(n), (u = r);
}
function ee(e) {
    let { enrolledQuestUserStatus: n } = e;
    k(n.questId, { userStatus: n }), J(n.questId);
}
function et(e) {
    let { questId: n } = e;
    J(n);
}
function en(e) {
    let { questId: n } = e,
        r = new Set(d);
    r.add(n), (d = r);
}
function er(e) {
    let { questId: n, rewardCode: r } = e,
        i = new Set(d);
    i.delete(n), (d = i), B(n, r);
}
function ei(e) {
    let { questId: n } = e,
        r = new Set(d);
    r.delete(n), (d = r);
}
function ea(e) {
    let { questId: n } = e,
        r = new Set(c);
    r.add(n), (c = r);
}
function es(e) {
    let { questId: n, entitlements: r } = e,
        i = new Set(c);
    i.delete(n), (c = i), Z(n, r);
}
function eo(e) {
    let { questId: n } = e,
        r = new Set(c);
    r.delete(n), (c = r);
}
function el(e) {
    let n = new Set(f);
    n.delete(e), (f = n);
}
function eu(e) {
    let { questId: n } = e,
        r = new Set(f);
    r.add(n), (f = r);
}
function ec(e) {
    let { dismissedQuestUserStatus: n } = e;
    k(n.questId, { userStatus: n }), el(n.questId);
}
function ed(e) {
    let { questId: n } = e;
    el(n);
}
function ef(e) {
    let { streamKey: n } = e;
    F(n);
}
function e_(e) {
    let { user_status: n } = e,
        r = (0, D.T)({ location: L.dr.QUESTS_STORE });
    r.log('Received user status update for '.concat(n.quest_id), n);
    let i = (0, R.U3)(n);
    k(n.quest_id, { userStatus: i }), 0 === Object.keys(i.progress).length && w.has(i.questId) && (r.log('Removing optimistic progress for '.concat(i.questId)), w.delete(i.questId));
}
function eh(e) {
    let { previewQuestUserStatus: n } = e;
    k(n.questId, { userStatus: n }), null == n.claimedAt && (h = new Map(h)).delete(n.questId), null == n.enrolledAt && ((E = new Map(E)).delete(n.questId), O.ZP.getState().resetQuest(n.questId));
}
function ep(e) {
    let { questId: n } = e;
    g = g === n ? null : n;
}
function em(e) {
    let { questId: n, platform: r } = e;
    (E = new Map(E)), null == r ? E.delete(n) : E.set(n, r);
}
function eg(e) {
    var n;
    let { questId: r, taskEventName: i, progress: a } = e,
        s = null !== (n = w.get(r)) && void 0 !== n ? n : new Map();
    s.set(i, a), w.set(r, s);
}
function eE(e) {
    let { decisionId: n, quest: r, placement: i } = e;
    null == r
        ? v.delete(i)
        : v.set(i, {
              decisionId: n,
              quest: r
          });
}
function ev(e) {
    let { placement: n } = e;
    v.delete(n);
}
P();
class eI extends (I = A.ZP.Store) {
    get quests() {
        return s;
    }
    get claimedQuests() {
        return o;
    }
    get isFetchingCurrentQuests() {
        return i;
    }
    get isFetchingClaimedQuests() {
        return a;
    }
    get lastFetchedCurrentQuests() {
        return l;
    }
    get questDeliveryOverride() {
        return s.get(null != g ? g : '');
    }
    get questToDeliverForPlacement() {
        return v;
    }
    isEnrolling(e) {
        return u.has(e);
    }
    isClaimingReward(e) {
        return c.has(e);
    }
    isFetchingRewardCode(e) {
        return d.has(e);
    }
    isDismissingContent(e) {
        return f.has(e);
    }
    getRewardCode(e) {
        return h.get(e);
    }
    getRewards(e) {
        return p.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return m.get(e);
    }
    getQuest(e) {
        return s.get(e);
    }
    isProgressingOnDesktop(e) {
        return _.has(e);
    }
    selectedTaskPlatform(e) {
        var n;
        return null !== (n = E.get(e)) && void 0 !== n ? n : null;
    }
    getOptimisticProgress(e, n) {
        var r;
        return null === (r = w.get(e)) || void 0 === r ? void 0 : r.get(n);
    }
}
x(eI, 'displayName', 'QuestsStore'),
    (n.Z = new eI(N.Z, {
        LOGOUT: V,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: j,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: H,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: Y,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: W,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: K,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: z,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eE,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: ev,
        QUESTS_SEND_HEARTBEAT_SUCCESS: q,
        QUESTS_SEND_HEARTBEAT_FAILURE: Q,
        QUESTS_ENROLL_BEGIN: $,
        QUESTS_ENROLL_SUCCESS: ee,
        QUESTS_ENROLL_FAILURE: et,
        QUESTS_FETCH_REWARD_CODE_BEGIN: en,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: er,
        QUESTS_FETCH_REWARD_CODE_FAILURE: ei,
        QUESTS_CLAIM_REWARD_BEGIN: ea,
        QUESTS_CLAIM_REWARD_SUCCESS: es,
        QUESTS_CLAIM_REWARD_FAILURE: eo,
        QUESTS_DISMISS_CONTENT_BEGIN: eu,
        QUESTS_DISMISS_CONTENT_SUCCESS: ec,
        QUESTS_DISMISS_CONTENT_FAILURE: ed,
        QUESTS_USER_STATUS_UPDATE: e_,
        STREAM_CLOSE: X,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: ef,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eh,
        QUESTS_DELIVERY_OVERRIDE: ep,
        QUESTS_SELECT_TASK_PLATFORM: em,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eg
    }));
