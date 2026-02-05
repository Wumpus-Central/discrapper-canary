"use strict";
n.d(t, { A: () => k }), n(321073);
var r = n(311907),
    i = n(73153),
    a = n(832946),
    s = n(272207),
    o = n(961350),
    l = n(652215),
    u = n(788868);
let c = null,
    d = null,
    _ = null,
    f = null,
    p = null,
    h = !1,
    m = null,
    g = !1,
    E = !1,
    A = null,
    I = !1,
    T = null;
function y(e) {
    let { subscriptions: t, lastLazyPerkSync: n } = e,
        r = {},
        i = {},
        a = [],
        u = [],
        _ = o.default.getId();
    t.forEach((e) => {
        if (e.user_id !== _) return;
        let t = s.h.createFromServer(e);
        (r[t.id] = t),
            x(t) &&
                ((i[t.id] = t),
                t.type === l.rzx.GUILD && t.status !== l.Dmq.ENDED && a.push(t),
                t.type === l.rzx.APPLICATION && t.status !== l.Dmq.ENDED && u.push(t));
    }),
        (c = r),
        (d = i),
        (f = a),
        (p = u),
        (T = n);
}
function S(e) {
    let { activeSubscriptions: t, record: n } = e,
        r = t.findIndex((e) => e.id === n.id);
    if (-1 === r) return [n, ...t];
    {
        let e = [...t];
        return x(n) && n.status !== l.Dmq.ENDED ? (e[r] = n) : e.splice(r, 1), e;
    }
}
function v(e) {
    let { subscription: t } = e;
    if (t.user_id !== o.default.getId()) return;
    let n = s.h.createFromServer(t);
    (c = { ...c, [n.id]: n }),
        x(n) && (d = { ...d, [n.id]: n }),
        null != f && n.type === l.rzx.GUILD && (f = S({ activeSubscriptions: f, record: n })),
        null != p && n.type === l.rzx.APPLICATION && (f = S({ activeSubscriptions: p, record: n }));
}
function C(e) {
    let { subscription: t } = e;
    if (((h = !0), (I = !1), null != t)) {
        if (t.user_id !== o.default.getId()) {
            h = !1;
            return;
        }
        _ = s.h.createFromServer(t);
    }
}
function b() {
    I = !1;
}
function N(e) {
    let { subscription: t } = e;
    if (((g = !0), null != t)) {
        if (t.user_id !== o.default.getId()) {
            g = !1;
            return;
        }
        m = s.h.createFromServer(t);
    }
}
function R() {
    E = !0;
}
function O() {
    I = !0;
}
function D(e) {
    let { eligible: t } = e;
    (A = t), (E = !1);
}
function L(e) {
    let {} = e;
    (A = !1), (E = !1);
}
function w() {
    (c = null),
        (d = null),
        (_ = null),
        (f = null),
        (p = null),
        (h = !1),
        (m = null),
        (g = !1),
        (E = !1),
        (I = !1),
        (T = null);
}
function x(e) {
    return e.status !== l.Dmq.UNPAID;
}
function P(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = n ? d : c;
    if (null == r) return null;
    for (let n in r) {
        let i = r[n];
        if (i.userId !== o.default.getId()) break;
        if (i.type === e && (null == t || t(i))) return i;
    }
    return null;
}
class M extends r.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    static displayName = "SubscriptionStore";
    hasFetchedSubscriptions() {
        return null != c;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return h;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return g;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return P(l.rzx.PREMIUM, (e) => !(0, a.m1)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return P(l.rzx.PREMIUM, void 0, e);
    }
    inReverseTrial() {
        let e = P(l.rzx.PREMIUM, void 0, !0);
        return null != e && null != e.trialId && !!u.BT.includes(e.trialId) && null == e.paymentSourceId;
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? d : c;
    }
    getSubscriptionById(e) {
        return c?.[e] ?? void 0;
    }
    getActiveGuildSubscriptions() {
        return f;
    }
    getActiveApplicationSubscriptions() {
        return p;
    }
    getSubscriptionForPlanIds(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = new Set(e),
            r = t ? d : c;
        return null == r ? null : (Object.values(r).find((e) => e.items.some((e) => n.has(e.planId))) ?? null);
    }
    getMostRecentPremiumTypeSubscription() {
        return _;
    }
    getPreviousPremiumTypeSubscription() {
        return m;
    }
    getIsSubscriptionEligibleForReward() {
        return A;
    }
    getIsFetchingSubscriptionRewardEligibility() {
        return E;
    }
    getIsFetchingMostRecentSubscription() {
        return I;
    }
    getLastLazyPerkSync() {
        return T;
    }
    getPremiumGroupSubscription() {
        return P(l.rzx.PREMIUM, (e) => e.hasAnyPremiumGroup, !0);
    }
}
let k = new M(i.h, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: y,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: v,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: O,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: C,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: b,
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: N,
    BILLING_SUBSCRIPTION_RESET: w,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: R,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: D,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: L,
    LOGOUT: w,
});
