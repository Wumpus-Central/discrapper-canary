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
var d = n(287809),
    _ = n(469778),
    u = n(927578),
    c = n(166403),
    E = n(788868);
let h = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
    },
    m = h;
function f() {
    (m.userTrialOffers = {}),
        (m.userDiscountOffers = {}),
        (m.userOffersLastFetchedAtDate = void 0),
        (m.isFetching = !1);
}
let g = () => !0;
function p() {
    return (
        null != c.A.getPremiumTypeSubscription() &&
        (null != m.userDiscountOffers[E.q]
            ? (m.userDiscountOffers = { [E.q]: m.userDiscountOffers[E.q] })
            : null != m.userDiscountOffers[E.EG]
              ? (m.userDiscountOffers = { [E.EG]: m.userDiscountOffers[E.EG] })
              : (m.userDiscountOffers = {}),
        (m.userTrialOffers = {}),
        !0)
    );
}
function A() {
    let e = d.default.getCurrentUser();
    !(0, u.TW)(e) && Object.keys(m.userDiscountOffers).length > 0 && (0, a._D)("UserOfferStore", !0);
}
function I() {
    let e = d.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = s.A.getAllRelevantReferralTrialOffers().filter((t) => t.user_id === e);
    if (t.length > 0) {
        let e = t[0];
        return (m.userTrialOffers[e.trial_id] = e), !0;
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
        (m = e ?? h),
            this.waitFor(_.A, s.A, c.A, d.default),
            this.syncWith([d.default], g),
            this.syncWith([c.A], p),
            this.syncWith([s.A], I);
    }
    getUserTrialOffer(e) {
        if (null !== e) return m.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return m.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != m.userTrialOffers[t]) return t;
        return null;
    }
    isFetchingOffer() {
        return m.isFetching ?? !1;
    }
    hasFetchedOffer() {
        return null != m.userOffersLastFetchedAtDate;
    }
    shouldFetchReferralOffer(e) {
        let t = m.userOffersLastFetchedAtDate,
            n = m.isFetching ?? !1;
        if (null == t) return !n;
        let i = Date.now() - 6e5 > t;
        return !n && (i || (e ?? 0) > t);
    }
    shouldShowTrialOfferReminder(e) {
        return !E.Pn.includes(e.trial_id) || l({ location: "user_offer_store" });
    }
    getAlmostExpiringTrialOffersForReminder(e) {
        let t = Object.values(E.TP).map((e) => e.id),
            n = d.default.getCurrentUser();
        return (0, u.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(m.userTrialOffers).filter(
                  (n) =>
                      t.includes(n.trial_id) &&
                      null != n.expires_at &&
                      null != n.subscription_trial &&
                      e.includes(n.subscription_trial.sku_id) &&
                      Date.parse(n.expires_at) < Date.now() + (0, u.e1)(n) &&
                      this.shouldShowTrialOfferReminder(n),
              );
    }
    shouldShowDiscountOfferReminder(e) {
        return !E.ON.includes(e.discount_id) || l({ location: "user_offer_store" });
    }
    getAlmostExpiringDiscountOffersForReminder(e) {
        let t = d.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(m.userDiscountOffers).filter(
                  (t) =>
                      null != t.expires_at &&
                      null != t.discount &&
                      t.discount.plan_ids.some((t) => e.includes(E.hd[t].skuId)) &&
                      Date.parse(t.expires_at) < Date.now() + (0, u.e1)(t) &&
                      this.shouldShowDiscountOfferReminder(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = d.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(m.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        let e = d.default.getCurrentUser();
        return (0, u.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(m.userDiscountOffers ?? {}).filter(
                  (e) => null == e.expires_at && !E.ly.includes(e.discount_id),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = d.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(m.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(m.userTrialOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(m.userDiscountOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    canFractionalPremiumUserUseOffer() {
        return _.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == c.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : m.userTrialOffers[e]?.referrer;
    }
    getState() {
        return m;
    }
    forceReset() {
        f();
    }
    lastFetchSuccessful() {
        return m.lastFetchSuccessful;
    }
}
let S = new T(r.h, {
    BILLING_USER_OFFER_FETCH_START: function () {
        m.isFetching = !0;
    },
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t ? (m.userTrialOffers[t.trial_id] = t) : f(),
            (m.userOffersLastFetchedAtDate = Date.now()),
            (m.isFetching = !1);
    },
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t ? (m.userTrialOffers[t.trial_id] = t) : (m.userTrialOffers = {}),
            (m.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
        null == t && null == n && null == i && f(),
            null != t
                ? ((m.userTrialOffers[t.trial_id] = t), (m.userDiscountOffers = {}))
                : null != n
                  ? ((m.userDiscountOffers[n.discount_id] = n), (m.userTrialOffers = {}))
                  : null != i && ((m.userDiscountOffers[i.discount_id] = i), (m.userTrialOffers = {})),
            (m.userOffersLastFetchedAtDate = Date.now()),
            (m.isFetching = !1),
            (m.lastFetchSuccessful = !0);
    },
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
        null != t ? (m.userTrialOffers[t.trial_id] = t) : (m.userTrialOffers = {}),
            null != n
                ? (m.userDiscountOffers[n.discount_id] = n)
                : null != i
                  ? (m.userDiscountOffers[i.discount_id] = i)
                  : (m.userDiscountOffers = {}),
            (m.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_FAIL: function () {
        f(), (m.userOffersLastFetchedAtDate = Date.now()), (m.isFetching = !1), (m.lastFetchSuccessful = !1);
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: A,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: A,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: A,
    LOGOUT: f,
});
