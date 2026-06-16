"use strict";
n.d(t, { A: () => v }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(832946),
    a = n(243217),
    o = n(495544),
    l = n(652215);
let u = null,
    c = null,
    d = null,
    _ = null,
    h = null,
    f = !1,
    p = null,
    E = !1,
    m = !1,
    g = null,
    A = !1,
    I = null;
function T(e) {
    let { activeSubscriptions: t, record: n } = e,
        i = t.findIndex((e) => e.id === n.id);
    if (-1 === i) return [n, ...t];
    {
        let e = [...t];
        return y(n) && n.status !== l.Dmq.ENDED ? (e[i] = n) : e.splice(i, 1), e;
    }
}
function S() {
    (u = null),
        (c = null),
        (d = null),
        (_ = null),
        (h = null),
        (f = !1),
        (p = null),
        (E = !1),
        (m = !1),
        (A = !1),
        (I = null);
}
function y(e) {
    return e.status !== l.Dmq.UNPAID;
}
function C(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = n ? c : u;
    if (null == i) return null;
    for (let n in i) {
        let r = i[n];
        if (r.userId !== o.default.getId()) break;
        if (r.type === e && (null == t || t(r))) return r;
    }
    return null;
}
class N extends i.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    static displayName = "SubscriptionStore";
    hasFetchedSubscriptions() {
        return null != u;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return f;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return E;
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
        return e ? c : u;
    }
    getSubscriptionById(e) {
        return u?.[e] ?? void 0;
    }
    getActiveGuildSubscriptions() {
        return _;
    }
    getActiveApplicationSubscriptions() {
        return h;
    }
    getSubscriptionForPlanIds(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = new Set(e),
            i = t ? c : u;
        return null == i ? null : (Object.values(i).find((e) => e.items.some((e) => n.has(e.planId))) ?? null);
    }
    getMostRecentPremiumTypeSubscription() {
        return d;
    }
    getPreviousPremiumTypeSubscription() {
        return p;
    }
    getIsSubscriptionEligibleForReward() {
        return g;
    }
    getIsFetchingSubscriptionRewardEligibility() {
        return m;
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
let v = new N(r.h, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscriptions: t, lastLazyPerkSync: n } = e,
            i = {},
            r = {},
            s = [],
            d = [],
            f = o.default.getId();
        t.forEach((e) => {
            if (e.user_id !== f) return;
            let t = a.h.createFromServer(e);
            (i[t.id] = t),
                y(t) &&
                    ((r[t.id] = t),
                    t.type === l.rzx.GUILD && t.status !== l.Dmq.ENDED && s.push(t),
                    t.type === l.rzx.APPLICATION && t.status !== l.Dmq.ENDED && d.push(t));
        }),
            (u = i),
            (c = r),
            (_ = s),
            (h = d),
            (I = n);
    },
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (t.user_id !== o.default.getId()) return;
        let n = a.h.createFromServer(t);
        (u = { ...u, [n.id]: n }),
            y(n) && (c = { ...c, [n.id]: n }),
            null != _ && n.type === l.rzx.GUILD && (_ = T({ activeSubscriptions: _, record: n })),
            null != h && n.type === l.rzx.APPLICATION && (_ = T({ activeSubscriptions: h, record: n }));
    },
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: function () {
        A = !0;
    },
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (((f = !0), (A = !1), null != t)) {
            if (t.user_id !== o.default.getId()) {
                f = !1;
                return;
            }
            d = a.h.createFromServer(t);
        }
    },
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: function () {
        A = !1;
    },
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (((E = !0), null != t)) {
            if (t.user_id !== o.default.getId()) {
                E = !1;
                return;
            }
            p = a.h.createFromServer(t);
        }
    },
    BILLING_SUBSCRIPTION_RESET: S,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: function () {
        m = !0;
    },
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: function (e) {
        let { eligible: t } = e;
        (g = t), (m = !1);
    },
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: function (e) {
        let {} = e;
        (g = !1), (m = !1);
    },
    LOGOUT: S,
});
