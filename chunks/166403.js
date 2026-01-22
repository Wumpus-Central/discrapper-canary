n.d(t, {
    A: () => F,
}),
    n(321073),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(832946),
    o = n(272207),
    l = n(961350),
    c = n(652215),
    u = n(788868);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = null,
    m = null,
    g = null,
    E = null,
    b = null,
    y = !1,
    O = null,
    A = !1,
    v = !1,
    S = null,
    I = !1,
    T = null;

function C(e) {
    let { subscriptions: t, lastLazyPerkSync: n } = e,
        r = {},
        i = {},
        a = [],
        s = [],
        u = l.default.getId();
    t.forEach((e) => {
        if (e.user_id !== u) return;
        let t = o.h.createFromServer(e);
        (r[t.id] = t),
            U(t) &&
                ((i[t.id] = t),
                t.type === c.rzx.GUILD && t.status !== c.Dmq.ENDED && a.push(t),
                t.type === c.rzx.APPLICATION && t.status !== c.Dmq.ENDED && s.push(t));
    }),
        (h = r),
        (m = i),
        (E = a),
        (b = s),
        (T = n);
}

function N(e) {
    let { activeSubscriptions: t, record: n } = e,
        r = t.findIndex((e) => e.id === n.id);
    if (-1 === r) return [n, ...t];
    {
        let e = [...t];
        return U(n) && n.status !== c.Dmq.ENDED ? (e[r] = n) : e.splice(r, 1), e;
    }
}

function R(e) {
    let { subscription: t } = e;
    if (t.user_id !== l.default.getId()) return;
    let n = o.h.createFromServer(t);
    (h = _(f({}, h), {
        [n.id]: n,
    })),
        U(n) &&
            (m = _(f({}, m), {
                [n.id]: n,
            })),
        null != E &&
            n.type === c.rzx.GUILD &&
            (E = N({
                activeSubscriptions: E,
                record: n,
            })),
        null != b &&
            n.type === c.rzx.APPLICATION &&
            (E = N({
                activeSubscriptions: b,
                record: n,
            }));
}

function w(e) {
    let { subscription: t } = e;
    if (((y = !0), (I = !1), null != t)) {
        if (t.user_id !== l.default.getId()) {
            y = !1;
            return;
        }
        g = o.h.createFromServer(t);
    }
}

function P() {
    I = !1;
}

function D(e) {
    let { subscription: t } = e;
    if (((A = !0), null != t)) {
        if (t.user_id !== l.default.getId()) {
            A = !1;
            return;
        }
        O = o.h.createFromServer(t);
    }
}

function x() {
    v = !0;
}

function L() {
    I = !0;
}

function j(e) {
    let { eligible: t } = e;
    (S = t), (v = !1);
}

function M(e) {
    let {} = e;
    (S = !1), (v = !1);
}

function k() {
    (h = null),
        (m = null),
        (g = null),
        (E = null),
        (b = null),
        (y = !1),
        (O = null),
        (A = !1),
        (v = !1),
        (I = !1),
        (T = null);
}

function U(e) {
    return e.status !== c.Dmq.UNPAID;
}

function G(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = n ? m : h;
    if (null == r) return null;
    for (let n in r) {
        let i = r[n];
        if (i.userId !== l.default.getId()) break;
        if (i.type === e && (null == t || t(i))) return i;
    }
    return null;
}
class V extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(l.default);
    }
    hasFetchedSubscriptions() {
        return null != h;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return y;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return A;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return G(c.rzx.PREMIUM, (e) => !(0, s.m1)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return G(c.rzx.PREMIUM, void 0, e);
    }
    inReverseTrial() {
        let e = G(c.rzx.PREMIUM, void 0, !0);
        return null != e && null != e.trialId && !!u.BT.includes(e.trialId) && null == e.paymentSourceId;
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? m : h;
    }
    getSubscriptionById(e) {
        var t;
        return null != (t = null == h ? void 0 : h[e]) ? t : void 0;
    }
    getActiveGuildSubscriptions() {
        return E;
    }
    getActiveApplicationSubscriptions() {
        return b;
    }
    getSubscriptionForPlanIds(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = new Set(e),
            i = n ? m : h;
        return null == i
            ? null
            : null != (t = Object.values(i).find((e) => e.items.some((e) => r.has(e.planId))))
              ? t
              : null;
    }
    getMostRecentPremiumTypeSubscription() {
        return g;
    }
    getPreviousPremiumTypeSubscription() {
        return O;
    }
    getIsSubscriptionEligibleForReward() {
        return S;
    }
    getIsFetchingSubscriptionRewardEligibility() {
        return v;
    }
    getIsFetchingMostRecentSubscription() {
        return I;
    }
    getLastLazyPerkSync() {
        return T;
    }
    getPremiumGroupSubscription() {
        return G(c.rzx.PREMIUM, (e) => e.hasAnyPremiumGroup, !0);
    }
}
d(V, "displayName", "SubscriptionStore");
let F = new V(a.h, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: C,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: R,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: L,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: w,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: P,
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: D,
    BILLING_SUBSCRIPTION_RESET: k,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: x,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: j,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: M,
    LOGOUT: k,
});
