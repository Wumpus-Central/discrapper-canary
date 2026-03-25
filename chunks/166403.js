"use strict";
n.d(t, { A: () => P }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(832946),
    a = n(272207),
    o = n(961350),
    l = n(652215);
let u = null,
    c = null,
    d = null,
    _ = null,
    f = null,
    p = !1,
    h = null,
    m = !1,
    E = !1,
    g = null,
    A = !1,
    I = null;
function T(e) {
    let { subscriptions: t, lastLazyPerkSync: n } = e,
        r = {},
        i = {},
        s = [],
        d = [],
        p = o.default.getId();
    t.forEach((e) => {
        if (e.user_id !== p) return;
        let t = a.h.createFromServer(e);
        (r[t.id] = t),
            w(t) &&
                ((i[t.id] = t),
                t.type === l.rzx.GUILD && t.status !== l.Dmq.ENDED && s.push(t),
                t.type === l.rzx.APPLICATION && t.status !== l.Dmq.ENDED && d.push(t));
    }),
        (u = r),
        (c = i),
        (_ = s),
        (f = d),
        (I = n);
}
function S(e) {
    let { activeSubscriptions: t, record: n } = e,
        r = t.findIndex((e) => e.id === n.id);
    if (-1 === r) return [n, ...t];
    {
        let e = [...t];
        return w(n) && n.status !== l.Dmq.ENDED ? (e[r] = n) : e.splice(r, 1), e;
    }
}
function y(e) {
    let { subscription: t } = e;
    if (t.user_id !== o.default.getId()) return;
    let n = a.h.createFromServer(t);
    (u = { ...u, [n.id]: n }),
        w(n) && (c = { ...c, [n.id]: n }),
        null != _ && n.type === l.rzx.GUILD && (_ = S({ activeSubscriptions: _, record: n })),
        null != f && n.type === l.rzx.APPLICATION && (_ = S({ activeSubscriptions: f, record: n }));
}
function v(e) {
    let { subscription: t } = e;
    if (((p = !0), (A = !1), null != t)) {
        if (t.user_id !== o.default.getId()) {
            p = !1;
            return;
        }
        d = a.h.createFromServer(t);
    }
}
function N() {
    A = !1;
}
function C(e) {
    let { subscription: t } = e;
    if (((m = !0), null != t)) {
        if (t.user_id !== o.default.getId()) {
            m = !1;
            return;
        }
        h = a.h.createFromServer(t);
    }
}
function R() {
    E = !0;
}
function O() {
    A = !0;
}
function b(e) {
    let { eligible: t } = e;
    (g = t), (E = !1);
}
function D(e) {
    let {} = e;
    (g = !1), (E = !1);
}
function L() {
    (u = null),
        (c = null),
        (d = null),
        (_ = null),
        (f = null),
        (p = !1),
        (h = null),
        (m = !1),
        (E = !1),
        (A = !1),
        (I = null);
}
function w(e) {
    return e.status !== l.Dmq.UNPAID;
}
function M(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = n ? c : u;
    if (null == r) return null;
    for (let n in r) {
        let i = r[n];
        if (i.userId !== o.default.getId()) break;
        if (i.type === e && (null == t || t(i))) return i;
    }
    return null;
}
class x extends r.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    static displayName = "SubscriptionStore";
    hasFetchedSubscriptions() {
        return null != u;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return p;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return m;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return M(l.rzx.PREMIUM, (e) => !(0, s.m1)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return M(l.rzx.PREMIUM, void 0, e);
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? c : u;
    }
    getSubscriptionById(e) {
        return u?.[e] ?? void 0;
    }
    getActiveGuildSubscriptions() {
        return _;
    }
    getActiveApplicationSubscriptions() {
        return f;
    }
    getSubscriptionForPlanIds(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = new Set(e),
            r = t ? c : u;
        return null == r ? null : (Object.values(r).find((e) => e.items.some((e) => n.has(e.planId))) ?? null);
    }
    getMostRecentPremiumTypeSubscription() {
        return d;
    }
    getPreviousPremiumTypeSubscription() {
        return h;
    }
    getIsSubscriptionEligibleForReward() {
        return g;
    }
    getIsFetchingSubscriptionRewardEligibility() {
        return E;
    }
    getIsFetchingMostRecentSubscription() {
        return A;
    }
    getLastLazyPerkSync() {
        return I;
    }
    getPremiumGroupSubscription() {
        return M(l.rzx.PREMIUM, (e) => e.hasAnyPremiumGroup, !0);
    }
}
let P = new x(i.h, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: T,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: y,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: O,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: v,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: N,
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: C,
    BILLING_SUBSCRIPTION_RESET: L,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: R,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: b,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: D,
    LOGOUT: L,
});
