"use strict";
n.d(t, { A: () => S }), n(205816);
var i = n(17928),
    r = n(228366),
    s = n(851746),
    a = n(694080);
let o = (0, n(945810).mj)({
    name: "2026-02-premium-offer-reminder-xp",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function l(e) {
    let { location: t } = e;
    return o.getConfig({ location: t }).enabled;
}
var u = n(287809),
    c = n(469778),
    d = n(927578),
    _ = n(166403),
    f = n(788868);
let h = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
    },
    p = h;
function E() {
    (p.userTrialOffers = {}),
        (p.userDiscountOffers = {}),
        (p.userOffersLastFetchedAtDate = void 0),
        (p.isFetching = !1);
}
let m = () => !0;
function g() {
    return (
        null != _.A.getPremiumTypeSubscription() &&
        (null != p.userDiscountOffers[f.q]
            ? (p.userDiscountOffers = { [f.q]: p.userDiscountOffers[f.q] })
            : null != p.userDiscountOffers[f.EG]
              ? (p.userDiscountOffers = { [f.EG]: p.userDiscountOffers[f.EG] })
              : (p.userDiscountOffers = {}),
        (p.userTrialOffers = {}),
        !0)
    );
}
function A() {
    let e = u.default.getCurrentUser();
    !(0, d.TW)(e) && Object.keys(p.userDiscountOffers).length > 0 && (0, a._D)("UserOfferStore", !0);
}
function I() {
    let e = u.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = s.A.getAllRelevantReferralTrialOffers().filter((t) => t.user_id === e);
    if (t.length > 0) {
        let e = t[0];
        return (p.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class T extends i.Ay.PersistedStore {
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
    ];
    initialize(e) {
        (p = e ?? h),
            this.waitFor(c.A, s.A, _.A, u.default),
            this.syncWith([u.default], m),
            this.syncWith([_.A], g),
            this.syncWith([s.A], I);
    }
    getUserTrialOffer(e) {
        if (null !== e) return p.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return p.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != p.userTrialOffers[t]) return t;
        return null;
    }
    isFetchingOffer() {
        return p.isFetching ?? !1;
    }
    hasFetchedOffer() {
        return null != p.userOffersLastFetchedAtDate;
    }
    shouldFetchReferralOffer(e) {
        let t = p.userOffersLastFetchedAtDate,
            n = p.isFetching ?? !1;
        if (null == t) return !n;
        let i = Date.now() - 6e5 > t;
        return !n && (i || (e ?? 0) > t);
    }
    shouldShowTrialOfferReminder(e) {
        return !f.Pn.includes(e.trial_id) || l({ location: "user_offer_store" });
    }
    getAlmostExpiringTrialOffersForReminder(e) {
        let t = Object.values(f.TP).map((e) => e.id),
            n = u.default.getCurrentUser();
        return (0, d.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userTrialOffers).filter(
                  (n) =>
                      t.includes(n.trial_id) &&
                      null != n.expires_at &&
                      null != n.subscription_trial &&
                      e.includes(n.subscription_trial.sku_id) &&
                      Date.parse(n.expires_at) < Date.now() + (0, d.e1)(n) &&
                      this.shouldShowTrialOfferReminder(n),
              );
    }
    shouldShowDiscountOfferReminder(e) {
        return !f.ON.includes(e.discount_id) || l({ location: "user_offer_store" });
    }
    getAlmostExpiringDiscountOffersForReminder(e) {
        let t = u.default.getCurrentUser();
        return (0, d.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userDiscountOffers).filter(
                  (t) =>
                      null != t.expires_at &&
                      null != t.discount &&
                      t.discount.plan_ids.some((t) => e.includes(f.hd[t].skuId)) &&
                      Date.parse(t.expires_at) < Date.now() + (0, d.e1)(t) &&
                      this.shouldShowDiscountOfferReminder(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = u.default.getCurrentUser();
        return (0, d.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        let e = u.default.getCurrentUser();
        return (0, d.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userDiscountOffers ?? {}).filter(
                  (e) => null == e.expires_at && !f.ly.includes(e.discount_id),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = u.default.getCurrentUser();
        return (0, d.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(p.userTrialOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(p.userDiscountOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    canFractionalPremiumUserUseOffer() {
        return c.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == _.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : p.userTrialOffers[e]?.referrer;
    }
    getState() {
        return p;
    }
    forceReset() {
        E();
    }
    lastFetchSuccessful() {
        return p.lastFetchSuccessful;
    }
}
let S = new T(r.h, {
    BILLING_USER_OFFER_FETCH_START: function () {
        p.isFetching = !0;
    },
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t ? (p.userTrialOffers[t.trial_id] = t) : E(),
            (p.userOffersLastFetchedAtDate = Date.now()),
            (p.isFetching = !1);
    },
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t ? (p.userTrialOffers[t.trial_id] = t) : (p.userTrialOffers = {}),
            (p.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
        null == t && null == n && null == i && E(),
            null != t
                ? ((p.userTrialOffers[t.trial_id] = t), (p.userDiscountOffers = {}))
                : null != n
                  ? ((p.userDiscountOffers[n.discount_id] = n), (p.userTrialOffers = {}))
                  : null != i && ((p.userDiscountOffers[i.discount_id] = i), (p.userTrialOffers = {})),
            (p.userOffersLastFetchedAtDate = Date.now()),
            (p.isFetching = !1),
            (p.lastFetchSuccessful = !0);
    },
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
        null != t ? (p.userTrialOffers[t.trial_id] = t) : (p.userTrialOffers = {}),
            null != n
                ? (p.userDiscountOffers[n.discount_id] = n)
                : null != i
                  ? (p.userDiscountOffers[i.discount_id] = i)
                  : (p.userDiscountOffers = {}),
            (p.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_FAIL: function () {
        E(), (p.userOffersLastFetchedAtDate = Date.now()), (p.isFetching = !1), (p.lastFetchSuccessful = !1);
    },
    BILLING_USER_OFFER_REDEEMED: function (e) {
        let { offerId: t } = e,
            n = Object.keys(p.userDiscountOffers).find((e) => p.userDiscountOffers[e].id === t);
        null != n && delete p.userDiscountOffers[n];
        let i = Object.keys(p.userTrialOffers).find((e) => p.userTrialOffers[e].id === t);
        return null != i && delete p.userTrialOffers[i], !0;
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: A,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: A,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: A,
    LOGOUT: E,
});
