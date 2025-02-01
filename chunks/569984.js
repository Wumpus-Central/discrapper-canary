let i, r, a, s, o, l, u, c, d, f, _, p, h, m, g, E;
n.d(t, { Z: () => ev }), n(47120);
var v,
    y = n(392711),
    I = n(754700),
    T = n(887003),
    b = n(442837),
    S = n(570140),
    A = n(497505),
    N = n(918701),
    C = n(184299),
    R = n(5881),
    O = n(46140);
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
let x = new Map();
function L() {
    (i = !1), (r = !1), (a = new Map()), (s = new Map()), (o = 0), (l = new Set()), (u = new Set()), (c = new Set()), (d = new Set()), (x = new Map()), (_ = new Map()), (p = new Map()), (h = new Map()), (m = null), (g = new Map()), (f = new Set()), (E = new Map());
}
function P(e, t) {
    var n, i, r, a;
    if (null != t.userStatus) for (let s of Object.values(null !== (i = null === (n = t.userStatus) || void 0 === n ? void 0 : n.progress) && void 0 !== i ? i : {})) !(0, y.isNil)(s) && I.T.DESKTOP.has(s.eventName) && ((null === (r = s.heartbeat) || void 0 === r ? void 0 : r.lastBeatAt) != null ? f.add(e) : (null === (a = s.heartbeat) || void 0 === a ? void 0 : a.lastBeatAt) == null && f.delete(e));
}
function w(e, t) {
    let n = (a = new Map(a)).get(e);
    if (null != n) {
        let i = {
            ...n,
            ...t
        };
        P(e, t), a.set(e, i);
    }
}
function M(e, t) {
    let n = new Map(_);
    n.set(e, t), (_ = n);
}
function k(e, t) {
    M(e, t);
    let n = a.get(e),
        i = null == n ? void 0 : n.userStatus;
    null != i &&
        null == i.claimedAt &&
        w(e, {
            userStatus: {
                ...i,
                claimedAt: t.claimedAt
            }
        });
}
function U(e) {
    var t;
    let { entitlements: n } = e,
        i = null === (t = n.items[0].tenantMetadata) || void 0 === t ? void 0 : t.questRewards.reward;
    return (null == i ? void 0 : i.tag) !== T.w.REWARD_CODE ? null : i.rewardCode;
}
function G(e, t) {
    let n = new Map(p);
    n.set(e, t.items), (p = n);
    let i = a.get(e),
        r = null == i ? void 0 : i.userStatus;
    if (null != r && null == r.claimedAt) {
        var s;
        let n = U({ entitlements: t });
        null != n && M(e, n),
            w(e, {
                userStatus: {
                    ...r,
                    claimedAt: t.claimedAt,
                    claimedTier: null !== (s = null == n ? void 0 : n.tier) && void 0 !== s ? s : null
                }
            });
    }
}
function B(e) {
    null != h.get(e) && (h = new Map(h)).delete(e);
}
function Z() {
    L();
}
function F() {
    (o = Date.now()), (i = !0);
}
function V(e) {
    let { quests: t } = e;
    for (let e of ((i = !1), (a = new Map()), t)) a.set(e.id, e), e.targetedContent.includes(A.jn.QUEST_BAR) && (0, R.T)({ location: O.dr.QUESTS_STORE }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')'));
}
function j() {
    (o = 0), (i = !1);
}
function H() {
    r = !0;
}
function Y(e) {
    let { quests: t } = e;
    for (let e of ((r = !1), (s = new Map()), t)) s.set(e.id, e);
}
function W() {
    r = !1;
}
function K(e) {
    let { questId: t, streamKey: n, userStatus: i } = e;
    f.add(t), w(t, { userStatus: i }), B(n);
}
function z(e) {
    let { questId: t, streamKey: n } = e;
    null == h.get(n) &&
        (h = new Map(h)).set(n, {
            questId: t,
            streamKey: n,
            firstFailedAt: Date.now()
        });
}
function q(e) {
    let { streamKey: t } = e;
    B(t);
}
function Q(e) {
    let t = new Set(l);
    t.delete(e), (l = t);
}
function X(e) {
    let { questId: t } = e,
        n = new Set(l);
    n.add(t), (l = n);
}
function J(e) {
    let { enrolledQuestUserStatus: t } = e;
    w(t.questId, { userStatus: t }), Q(t.questId);
}
function $(e) {
    let { questId: t } = e;
    Q(t);
}
function ee(e) {
    let { questId: t } = e,
        n = new Set(c);
    n.add(t), (c = n);
}
function et(e) {
    let { questId: t, rewardCode: n } = e,
        i = new Set(c);
    i.delete(t), (c = i), k(t, n);
}
function en(e) {
    let { questId: t } = e,
        n = new Set(c);
    n.delete(t), (c = n);
}
function ei(e) {
    let { questId: t } = e,
        n = new Set(u);
    n.add(t), (u = n);
}
function er(e) {
    let { questId: t, entitlements: n } = e,
        i = new Set(u);
    i.delete(t), (u = i), G(t, n);
}
function ea(e) {
    let { questId: t } = e,
        n = new Set(u);
    n.delete(t), (u = n);
}
function es(e) {
    let t = new Set(d);
    t.delete(e), (d = t);
}
function eo(e) {
    let { questId: t } = e,
        n = new Set(d);
    n.add(t), (d = n);
}
function el(e) {
    let { dismissedQuestUserStatus: t } = e;
    w(t.questId, { userStatus: t }), es(t.questId);
}
function eu(e) {
    let { questId: t } = e;
    es(t);
}
function ec(e) {
    let { streamKey: t } = e;
    B(t);
}
function ed(e) {
    let { user_status: t } = e,
        n = (0, R.T)({ location: O.dr.QUESTS_STORE });
    n.log('Received user status update for '.concat(t.quest_id), t);
    let i = (0, N.U3)(t);
    w(t.quest_id, { userStatus: i }), 0 === Object.keys(i.progress).length && x.has(i.questId) && (n.log('Removing optimistic progress for '.concat(i.questId)), x.delete(i.questId));
}
function ef(e) {
    let { previewQuestUserStatus: t } = e;
    w(t.questId, { userStatus: t }), null == t.claimedAt && (_ = new Map(_)).delete(t.questId), null == t.enrolledAt && ((g = new Map(g)).delete(t.questId), C.ZP.getState().resetQuest(t.questId));
}
function e_(e) {
    let { questId: t } = e;
    m = m === t ? null : t;
}
function ep(e) {
    let { questId: t, platform: n } = e;
    (g = new Map(g)), null == n ? g.delete(t) : g.set(t, n);
}
function eh(e) {
    var t;
    let { questId: n, taskEventName: i, progress: r } = e,
        a = null !== (t = x.get(n)) && void 0 !== t ? t : new Map();
    a.set(i, r), x.set(n, a);
}
function em(e) {
    let { decisionId: t, quest: n, placement: i } = e;
    null == n
        ? E.delete(i)
        : E.set(i, {
              decisionId: t,
              quest: n
          });
}
function eg(e) {
    let { placement: t } = e;
    E.delete(t);
}
L();
class eE extends (v = b.ZP.Store) {
    get quests() {
        return a;
    }
    get claimedQuests() {
        return s;
    }
    get isFetchingCurrentQuests() {
        return i;
    }
    get isFetchingClaimedQuests() {
        return r;
    }
    get lastFetchedCurrentQuests() {
        return o;
    }
    get questDeliveryOverride() {
        return a.get(null != m ? m : '');
    }
    get questToDeliverForPlacement() {
        return E;
    }
    isEnrolling(e) {
        return l.has(e);
    }
    isClaimingReward(e) {
        return u.has(e);
    }
    isFetchingRewardCode(e) {
        return c.has(e);
    }
    isDismissingContent(e) {
        return d.has(e);
    }
    getRewardCode(e) {
        return _.get(e);
    }
    getRewards(e) {
        return p.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return h.get(e);
    }
    getQuest(e) {
        return a.get(e);
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
        return null === (n = x.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
D(eE, 'displayName', 'QuestsStore');
let ev = new eE(S.Z, {
    LOGOUT: Z,
    QUESTS_FETCH_CURRENT_QUESTS_BEGIN: F,
    QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: V,
    QUESTS_FETCH_CURRENT_QUESTS_FAILURE: j,
    QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: H,
    QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: Y,
    QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: W,
    QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: em,
    QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eg,
    QUESTS_SEND_HEARTBEAT_SUCCESS: K,
    QUESTS_SEND_HEARTBEAT_FAILURE: z,
    QUESTS_ENROLL_BEGIN: X,
    QUESTS_ENROLL_SUCCESS: J,
    QUESTS_ENROLL_FAILURE: $,
    QUESTS_FETCH_REWARD_CODE_BEGIN: ee,
    QUESTS_FETCH_REWARD_CODE_SUCCESS: et,
    QUESTS_FETCH_REWARD_CODE_FAILURE: en,
    QUESTS_CLAIM_REWARD_BEGIN: ei,
    QUESTS_CLAIM_REWARD_SUCCESS: er,
    QUESTS_CLAIM_REWARD_FAILURE: ea,
    QUESTS_DISMISS_CONTENT_BEGIN: eo,
    QUESTS_DISMISS_CONTENT_SUCCESS: el,
    QUESTS_DISMISS_CONTENT_FAILURE: eu,
    QUESTS_USER_STATUS_UPDATE: ed,
    STREAM_CLOSE: q,
    QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: ec,
    QUESTS_PREVIEW_UPDATE_SUCCESS: ef,
    QUESTS_DELIVERY_OVERRIDE: e_,
    QUESTS_SELECT_TASK_PLATFORM: ep,
    QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eh
});
