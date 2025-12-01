n.d(t, { Z: () => D }), n(388685), n(825670);
var r,
    i = n(442837),
    a = n(570140),
    o = n(276444),
    s = n(937579),
    l = n(594174),
    c = n(580130),
    u = n(74538),
    d = n(78839),
    f = n(474936);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = 600000,
    E = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
    },
    b = E;
function y() {
    b.isFetching = !0;
}
function O(e) {
    let { userTrialOffer: t } = e;
    null != t ? (b.userTrialOffers[t.trial_id] = t) : A(),
        (b.userOffersLastFetchedAtDate = Date.now()),
        (b.isFetching = !1);
}
function v(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null == t && null == n && null == r && A(),
        null != t
            ? ((b.userTrialOffers[t.trial_id] = t), (b.userDiscountOffers = {}))
            : null != n
              ? ((b.userDiscountOffers[n.discount_id] = n), (b.userTrialOffers = {}))
              : null != r && ((b.userDiscountOffers[r.discount_id] = r), (b.userTrialOffers = {})),
        (b.userOffersLastFetchedAtDate = Date.now()),
        (b.isFetching = !1),
        (b.lastFetchSuccessful = !0);
}
function S() {
    A(), (b.userOffersLastFetchedAtDate = Date.now()), (b.isFetching = !1), (b.lastFetchSuccessful = !1);
}
function I(e) {
    let { userTrialOffer: t } = e;
    null != t ? (b.userTrialOffers[t.trial_id] = t) : (b.userTrialOffers = {}),
        (b.userOffersLastFetchedAtDate = Date.now());
}
function T(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null != t ? (b.userTrialOffers[t.trial_id] = t) : (b.userTrialOffers = {}),
        null != n
            ? (b.userDiscountOffers[n.discount_id] = n)
            : null != r
              ? (b.userDiscountOffers[r.discount_id] = r)
              : (b.userDiscountOffers = {}),
        (b.userOffersLastFetchedAtDate = Date.now());
}
function A() {
    (b.userTrialOffers = {}),
        (b.userDiscountOffers = {}),
        (b.userOffersLastFetchedAtDate = void 0),
        (b.isFetching = !1);
}
let C = () => !0;
function N() {
    return (
        null != d.Z.getPremiumTypeSubscription() &&
        (null != b.userDiscountOffers[f.dT]
            ? (b.userDiscountOffers = { [f.dT]: b.userDiscountOffers[f.dT] })
            : null != b.userDiscountOffers[f.dB]
              ? (b.userDiscountOffers = { [f.dB]: b.userDiscountOffers[f.dB] })
              : (b.userDiscountOffers = {}),
        (b.userTrialOffers = {}),
        !0)
    );
}
function P() {
    let e = l.default.getCurrentUser();
    !(0, u.I5)(e) && Object.keys(b.userDiscountOffers).length > 0 && (0, s.Tf)("UserOfferStore", !0);
}
function R() {
    var e;
    let t = null == (e = l.default.getCurrentUser()) ? void 0 : e.id;
    if (null == t) return !1;
    let n = o.Z.getAllRelevantReferralTrialOffers().filter((e) => e.user_id === t);
    if (n.length > 0) {
        let e = n[0];
        return (b.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class w extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (b = null != e ? e : E),
            this.waitFor(c.Z, o.Z, d.Z, l.default),
            this.syncWith([l.default], C),
            this.syncWith([d.Z], N),
            this.syncWith([o.Z], R);
    }
    getUserTrialOffer(e) {
        if (null !== e) return b.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return b.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != b.userTrialOffers[t]) return t;
        return null;
    }
    isFetchingOffer() {
        var e;
        return null != (e = b.isFetching) && e;
    }
    hasFetchedOffer() {
        return null != b.userOffersLastFetchedAtDate;
    }
    shouldFetchReferralOffer(e) {
        var t;
        let n = b.userOffersLastFetchedAtDate,
            r = null != (t = b.isFetching) && t;
        if (null == n) return !r;
        let i = Date.now() - g > n,
            a = (null != e ? e : 0) > n;
        return !r && (i || a);
    }
    getAlmostExpiringTrialOffers(e) {
        let t = Object.values(f.nG).map((e) => e.id),
            n = l.default.getCurrentUser();
        return (0, u.I5)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(b.userTrialOffers).filter(
                  (n) =>
                      t.includes(n.trial_id) &&
                      null != n.expires_at &&
                      null != n.subscription_trial &&
                      e.includes(n.subscription_trial.sku_id) &&
                      Date.parse(n.expires_at) < Date.now() + (0, u.yg)(n),
              );
    }
    getAlmostExpiringDiscountOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, u.I5)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(b.userDiscountOffers).filter(
                  (t) =>
                      null != t.expires_at &&
                      null != t.discount &&
                      t.discount.plan_ids.some((t) => e.includes(f.GP[t].skuId)) &&
                      Date.parse(t.expires_at) < Date.now() + (0, u.yg)(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, u.I5)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(b.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let t = l.default.getCurrentUser();
        return (0, u.I5)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(null != (e = b.userDiscountOffers) ? e : {}).filter(
                  (e) => null == e.expires_at && !f.ee.includes(e.discount_id),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, u.I5)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(b.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(b.userTrialOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(b.userDiscountOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    canFractionalPremiumUserUseOffer() {
        return c.Z.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == d.Z.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        var t;
        return null == e ? null : null == (t = b.userTrialOffers[e]) ? void 0 : t.referrer;
    }
    getState() {
        return b;
    }
    forceReset() {
        A();
    }
    lastFetchSuccessful() {
        return b.lastFetchSuccessful;
    }
}
p(w, "displayName", "UserOfferStore"),
    p(w, "persistKey", "UserOfferStore"),
    p(w, "migrations", [
        (e) => {
            let t = null == e ? void 0 : e.userDiscounts;
            if (null != t) return h(_({}, e), { userDiscountOffers: t });
        },
        (e) => {
            if (null != e)
                return (
                    Object.hasOwn(e, "userAnnualOfferLastFetchedAtDate") && delete e.userAnnualOfferLastFetchedAtDate, e
                );
        },
        (e) => {
            if (null != e) return (null == e ? void 0 : e.isFetching) == null ? h(_({}, e), { isFetching: !1 }) : e;
        },
    ]);
let D = new w(a.Z, {
    BILLING_USER_OFFER_FETCH_START: y,
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: O,
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: I,
    BILLING_USER_OFFER_FETCH_SUCCESS: v,
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: T,
    BILLING_USER_OFFER_FETCH_FAIL: S,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: P,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: P,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: P,
    LOGOUT: A,
});
