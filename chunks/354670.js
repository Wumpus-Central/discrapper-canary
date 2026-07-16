"use strict";
n.d(t, { A: () => C }), n(205816);
var i = n(17928),
    r = n(228366),
    a = n(851746),
    s = n(945960);
let l = (0, n(945810).mj)({
    name: "2026-02-premium-offer-reminder-xp",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function o(e) {
    let { location: t } = e;
    return l.getConfig({ location: t }).enabled;
}
var d = n(669316),
    c = n(287809),
    u = n(469778),
    _ = n(428262),
    E = n(166403),
    A = n(202541);
let h = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
    },
    I = h;
function f() {
    (I.userTrialOffers = {}),
        (I.userDiscountOffers = {}),
        (I.userOffersLastFetchedAtDate = void 0),
        (I.isFetching = !1);
}
function p() {
    return !0;
}
function T(e) {
    return e instanceof d.A
        ? e
        : "discount_id" in e
          ? d.A.createFromServer(e)
          : new d.A({
                ...e,
                appliedAt: null != e.appliedAt ? new Date(e.appliedAt) : null,
                deletedAt: null != e.deletedAt ? new Date(e.deletedAt) : null,
                expiresAt: null != e.expiresAt ? new Date(e.expiresAt) : null,
            });
}
function m() {
    return (
        null != E.A.getPremiumTypeSubscription() &&
        (null != I.userDiscountOffers[A.q]
            ? (I.userDiscountOffers = { [A.q]: I.userDiscountOffers[A.q] })
            : null != I.userDiscountOffers[A.EG]
              ? (I.userDiscountOffers = { [A.EG]: I.userDiscountOffers[A.EG] })
              : (I.userDiscountOffers = {}),
        (I.userTrialOffers = {}),
        !0)
    );
}
function g() {
    let e = c.default.getCurrentUser();
    !(0, _.TW)(e) && Object.keys(I.userDiscountOffers).length > 0 && (0, s._D)("UserOfferStore", !0);
}
function S() {
    let e = c.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = a.A.getAllRelevantReferralTrialOffers().filter((t) => t.user_id === e);
    if (t.length > 0) {
        let e = t[0];
        return (I.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class N extends i.Ay.PersistedStore {
    static displayName = "UserOfferStore";
    static persistKey = "UserOfferStore";
    static migrations = [
        (e) => {
            let t = e?.userDiscounts;
            if (null != t) return { ...e, userDiscountOffers: t };
        },
        (e) => {
            if (null != e)
                return (
                    Object.hasOwn(e, "userAnnualOfferLastFetchedAtDate") && delete e.userAnnualOfferLastFetchedAtDate, e
                );
        },
        (e) => {
            if (null != e) return e?.isFetching == null ? { ...e, isFetching: !1 } : e;
        },
        (e) => {
            if (e?.userDiscountOffers != null)
                return {
                    ...e,
                    userDiscountOffers: Object.fromEntries(
                        Object.entries(e.userDiscountOffers).map((e) => {
                            let [t, n] = e;
                            return [t, T(n)];
                        }),
                    ),
                };
        },
    ];
    initialize(e) {
        (I =
            null != e
                ? {
                      ...e,
                      userDiscountOffers: Object.fromEntries(
                          Object.entries(e.userDiscountOffers ?? {}).map((e) => {
                              let [t, n] = e;
                              return [t, T(n)];
                          }),
                      ),
                  }
                : h),
            this.waitFor(u.A, a.A, E.A, c.default),
            this.syncWith([c.default], p),
            this.syncWith([E.A], m),
            this.syncWith([a.A], S);
    }
    getUserTrialOffer(e) {
        if (null !== e) return I.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return I.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != I.userTrialOffers[t]) return t;
        return null;
    }
    isFetchingOffer() {
        return I.isFetching ?? !1;
    }
    hasFetchedOffer() {
        return null != I.userOffersLastFetchedAtDate;
    }
    shouldFetchReferralOffer(e) {
        let t = I.userOffersLastFetchedAtDate,
            n = I.isFetching ?? !1;
        if (null == t) return !n;
        let i = Date.now() - 6e5 > t;
        return !n && (i || (e ?? 0) > t);
    }
    shouldShowTrialOfferReminder(e) {
        return !A.Pn.includes(e.trial_id) || o({ location: "user_offer_store" });
    }
    getAlmostExpiringTrialOffersForReminder(e) {
        let t = Object.values(A.TP).map((e) => e.id),
            n = c.default.getCurrentUser();
        return (0, _.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(I.userTrialOffers).filter(
                  (n) =>
                      t.includes(n.trial_id) &&
                      null != n.expires_at &&
                      null != n.subscription_trial &&
                      e.includes(n.subscription_trial.sku_id) &&
                      Date.parse(n.expires_at) < Date.now() + (0, _.e1)(n) &&
                      this.shouldShowTrialOfferReminder(n),
              );
    }
    shouldShowDiscountOfferReminder(e) {
        return !A.ON.includes(e.discountId) || o({ location: "user_offer_store" });
    }
    getAlmostExpiringDiscountOffersForReminder(e) {
        let t = c.default.getCurrentUser();
        return (0, _.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(I.userDiscountOffers).filter(
                  (t) =>
                      null != t.expiresAt &&
                      null != t.discount &&
                      t.discount.planIds.some((t) => e.includes(A.hd[t].skuId)) &&
                      t.expiresAt.getTime() < Date.now() + (0, _.e1)(t) &&
                      this.shouldShowDiscountOfferReminder(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = c.default.getCurrentUser();
        return (0, _.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(I.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        let e = c.default.getCurrentUser();
        return (0, _.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(I.userDiscountOffers ?? {}).filter(
                  (e) => !e.hasAcknowledged() && !A.ly.includes(e.discountId),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = c.default.getCurrentUser();
        return (0, _.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(I.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(I.userTrialOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(I.userDiscountOffers).some((e) => !e.hasExpired());
    }
    canFractionalPremiumUserUseOffer() {
        return u.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == E.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : I.userTrialOffers[e]?.referrer;
    }
    getState() {
        return I;
    }
    forceReset() {
        f();
    }
    lastFetchSuccessful() {
        return I.lastFetchSuccessful;
    }
}
let C = new N(r.h, {
    BILLING_USER_OFFER_FETCH_START: function () {
        I.isFetching = !0;
    },
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t ? (I.userTrialOffers[t.trial_id] = t) : (I.userTrialOffers = {}),
            (I.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscountOffer: n } = e;
        null == t && null == n && f(),
            null != t
                ? ((I.userTrialOffers[t.trial_id] = t), (I.userDiscountOffers = {}))
                : null != n && ((I.userDiscountOffers[n.discountId] = n), (I.userTrialOffers = {})),
            (I.userOffersLastFetchedAtDate = Date.now()),
            (I.isFetching = !1),
            (I.lastFetchSuccessful = !0);
    },
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
        null != t ? (I.userTrialOffers[t.trial_id] = t) : (I.userTrialOffers = {}),
            null != n
                ? (I.userDiscountOffers[n.discountId] = n)
                : null != i
                  ? (I.userDiscountOffers[i.discountId] = i)
                  : (I.userDiscountOffers = {}),
            (I.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_FAIL: function () {
        f(), (I.userOffersLastFetchedAtDate = Date.now()), (I.isFetching = !1), (I.lastFetchSuccessful = !1);
    },
    BILLING_USER_OFFER_REDEEMED: function (e) {
        let { offerId: t } = e,
            n = Object.keys(I.userDiscountOffers).find((e) => I.userDiscountOffers[e].id === t);
        null != n && delete I.userDiscountOffers[n];
        let i = Object.keys(I.userTrialOffers).find((e) => I.userTrialOffers[e].id === t);
        return null != i && delete I.userTrialOffers[i], !0;
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: g,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: g,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: g,
    LOGOUT: f,
});
