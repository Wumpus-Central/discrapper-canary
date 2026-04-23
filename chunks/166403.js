"use strict";
n.d(t, { A: () => O }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(832946),
    a = n(243217),
    o = n(495544),
    l = n(652215);
let d = null,
    _ = null,
    u = null,
    c = null,
    E = null,
    h = !1,
    m = null,
    f = !1,
    g = !1,
    p = null,
    A = !1,
    I = null;
function T(e) {
    let { activeSubscriptions: t, record: n } = e,
        i = t.findIndex((e) => e.id === n.id);
    if (-1 === i) return [n, ...t];
    {
        let e = [...t];
        return N(n) && n.status !== l.Dmq.ENDED ? (e[i] = n) : e.splice(i, 1), e;
    }
}
function S() {
    (d = null),
        (_ = null),
        (u = null),
        (c = null),
        (E = null),
        (h = !1),
        (m = null),
        (f = !1),
        (g = !1),
        (A = !1),
        (I = null);
}
function N(e) {
    return e.status !== l.Dmq.UNPAID;
}
function C(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = n ? _ : d;
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
        this.waitFor(o.default);
    }
    static displayName = "SubscriptionStore";
    hasFetchedSubscriptions() {
        return null != d;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return h;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return f;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return C(l.rzx.PREMIUM, (e) => !(0, s.m1)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return C(l.rzx.PREMIUM, void 0, e);
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? _ : d;
    }
    getSubscriptionById(e) {
        return d?.[e] ?? void 0;
    }
    getActiveGuildSubscriptions() {
        return c;
    }
    getActiveApplicationSubscriptions() {
        return E;
    }
    getSubscriptionForPlanIds(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = new Set(e),
            i = t ? _ : d;
        return null == i ? null : (Object.values(i).find((e) => e.items.some((e) => n.has(e.planId))) ?? null);
    }
    getMostRecentPremiumTypeSubscription() {
        return u;
    }
    getPreviousPremiumTypeSubscription() {
        return m;
    }
    getIsSubscriptionEligibleForReward() {
        return p;
    }
    getIsFetchingSubscriptionRewardEligibility() {
        return g;
    }
    getIsFetchingMostRecentSubscription() {
        return A;
    }
    getLastLazyPerkSync() {
        return I;
    }
    getPremiumGroupSubscription() {
        return C(l.rzx.PREMIUM, (e) => e.hasAnyPremiumGroup && e.statusAllowsPerks, !0);
    }
}
let O = new R(r.h, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscriptions: t, lastLazyPerkSync: n } = e,
            i = {},
            r = {},
            s = [],
            u = [],
            h = o.default.getId();
        t.forEach((e) => {
            if (e.user_id !== h) return;
            let t = a.h.createFromServer(e);
            (i[t.id] = t),
                N(t) &&
                    ((r[t.id] = t),
                    t.type === l.rzx.GUILD && t.status !== l.Dmq.ENDED && s.push(t),
                    t.type === l.rzx.APPLICATION && t.status !== l.Dmq.ENDED && u.push(t));
        }),
            (d = i),
            (_ = r),
            (c = s),
            (E = u),
            (I = n);
    },
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (t.user_id !== o.default.getId()) return;
        let n = a.h.createFromServer(t);
        (d = { ...d, [n.id]: n }),
            N(n) && (_ = { ..._, [n.id]: n }),
            null != c && n.type === l.rzx.GUILD && (c = T({ activeSubscriptions: c, record: n })),
            null != E && n.type === l.rzx.APPLICATION && (c = T({ activeSubscriptions: E, record: n }));
    },
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: function () {
        A = !0;
    },
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (((h = !0), (A = !1), null != t)) {
            if (t.user_id !== o.default.getId()) {
                h = !1;
                return;
            }
            u = a.h.createFromServer(t);
        }
    },
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: function () {
        A = !1;
    },
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (((f = !0), null != t)) {
            if (t.user_id !== o.default.getId()) {
                f = !1;
                return;
            }
            m = a.h.createFromServer(t);
        }
    },
    BILLING_SUBSCRIPTION_RESET: S,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: function () {
        g = !0;
    },
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: function (e) {
        let { eligible: t } = e;
        (p = t), (g = !1);
    },
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: function (e) {
        let {} = e;
        (p = !1), (g = !1);
    },
    LOGOUT: S,
});
