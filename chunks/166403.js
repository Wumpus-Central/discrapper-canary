"use strict";
n.d(t, { A: () => L }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(683760),
    s = n(832946),
    l = n(243217),
    o = n(280450),
    d = n(652215);
let c = null,
    u = null,
    _ = null,
    E = null,
    A = null,
    h = !1,
    I = null,
    f = !1,
    p = !1,
    T = null,
    m = !1,
    g = null;
function S(e) {
    let { activeSubscriptions: t, record: n } = e,
        i = t.findIndex((e) => e.id === n.id);
    if (-1 === i) return [n, ...t];
    {
        let e = [...t];
        return C(n) && n.status !== d.Dmq.ENDED ? (e[i] = n) : e.splice(i, 1), e;
    }
}
function N() {
    (c = null),
        (u = null),
        (_ = null),
        (E = null),
        (A = null),
        (h = !1),
        (I = null),
        (f = !1),
        (p = !1),
        (m = !1),
        (g = null);
}
function C(e) {
    return e.status !== d.Dmq.UNPAID;
}
function O(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (e === d.rzx.PREMIUM && null === a.A.getPremiumTypeOverride()) return null;
    let i = n ? u : c;
    if (null == i) return null;
    for (let n in i) {
        let r = i[n];
        if (r.userId !== o.default.getId()) break;
        if (r.type === e && (null == t || t(r))) return r;
    }
    return null;
}
class R extends i.Ay.Store {
    initialize() {
        this.waitFor(o.default, a.A);
    }
    static displayName = "SubscriptionStore";
    hasFetchedSubscriptions() {
        return null != c;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return h;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return f;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return O(d.rzx.PREMIUM, (e) => !(0, s.m1)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return O(d.rzx.PREMIUM, void 0, e);
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? u : c;
    }
    getSubscriptionById(e) {
        return c?.[e] ?? void 0;
    }
    getActiveGuildSubscriptions() {
        return E;
    }
    getActiveApplicationSubscriptions() {
        return A;
    }
    getSubscriptionForPlanIds(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = new Set(e),
            i = t ? u : c;
        return null == i ? null : (Object.values(i).find((e) => e.items.some((e) => n.has(e.planId))) ?? null);
    }
    getMostRecentPremiumTypeSubscription() {
        return _;
    }
    getPreviousPremiumTypeSubscription() {
        return I;
    }
    getIsSubscriptionEligibleForReward() {
        return T;
    }
    getIsFetchingSubscriptionRewardEligibility() {
        return p;
    }
    getIsFetchingMostRecentSubscription() {
        return m;
    }
    getLastLazyPerkSync() {
        return g;
    }
    getPremiumGroupSubscription() {
        return O(d.rzx.PREMIUM, (e) => e.hasAnyPremiumGroup && e.statusAllowsPerks, !0);
    }
}
let L = new R(r.h, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscriptions: t, lastLazyPerkSync: n } = e,
            i = {},
            r = {},
            a = [],
            s = [],
            _ = o.default.getId();
        t.forEach((e) => {
            if (e.user_id !== _) return;
            let t = l.h.createFromServer(e);
            (i[t.id] = t),
                C(t) &&
                    ((r[t.id] = t),
                    t.type === d.rzx.GUILD && t.status !== d.Dmq.ENDED && a.push(t),
                    t.type === d.rzx.APPLICATION && t.status !== d.Dmq.ENDED && s.push(t));
        }),
            (c = i),
            (u = r),
            (E = a),
            (A = s),
            (g = n);
    },
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (t.user_id !== o.default.getId()) return;
        let n = l.h.createFromServer(t);
        (c = { ...c, [n.id]: n }),
            C(n) && (u = { ...u, [n.id]: n }),
            null != E && n.type === d.rzx.GUILD && (E = S({ activeSubscriptions: E, record: n })),
            null != A && n.type === d.rzx.APPLICATION && (E = S({ activeSubscriptions: A, record: n }));
    },
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: function () {
        m = !0;
    },
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (((h = !0), (m = !1), null != t)) {
            if (t.user_id !== o.default.getId()) {
                h = !1;
                return;
            }
            _ = l.h.createFromServer(t);
        }
    },
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: function () {
        m = !1;
    },
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (((f = !0), null != t)) {
            if (t.user_id !== o.default.getId()) {
                f = !1;
                return;
            }
            I = l.h.createFromServer(t);
        }
    },
    BILLING_SUBSCRIPTION_RESET: N,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: function () {
        p = !0;
    },
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: function (e) {
        let { eligible: t } = e;
        (T = t), (p = !1);
    },
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: function (e) {
        let {} = e;
        (T = !1), (p = !1);
    },
    SET_PREMIUM_TYPE_OVERRIDE: function () {
        return !0;
    },
    LOGOUT: N,
});
