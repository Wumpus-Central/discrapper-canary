"use strict";
n.d(t, { A: () => O }), n(205816);
var i = n(17928),
    r = n(228366),
    a = n(511963),
    s = n(851746),
    l = n(945960);
let o = (0, n(945810).mj)({
    name: "2026-02-premium-offer-reminder-xp",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function d(e) {
    let { location: t } = e;
    return o.getConfig({ location: t }).enabled;
}
var c = n(669316),
    u = n(287809),
    _ = n(469778),
    E = n(158045),
    A = n(166403),
    h = n(202541);
let I = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
    },
    f = I;
function p() {
    (f.userTrialOffers = {}),
        (f.userDiscountOffers = {}),
        (f.userOffersLastFetchedAtDate = void 0),
        (f.isFetching = !1);
}
function T() {
    return !0;
}
function m(e) {
    var t;
    return e instanceof c.A
        ? e
        : "discount_id" in e
          ? c.A.createFromServer(e)
          : new c.A({
                ...e,
                discount: null == (t = e.discount) || t instanceof a.A ? (t ?? null) : new a.A(t),
                appliedAt: null != e.appliedAt ? new Date(e.appliedAt) : null,
                deletedAt: null != e.deletedAt ? new Date(e.deletedAt) : null,
                expiresAt: null != e.expiresAt ? new Date(e.expiresAt) : null,
            });
}
function g() {
    return (
        null != A.A.getPremiumTypeSubscription() &&
        (null != f.userDiscountOffers[h.q]
            ? (f.userDiscountOffers = { [h.q]: f.userDiscountOffers[h.q] })
            : null != f.userDiscountOffers[h.EG]
              ? (f.userDiscountOffers = { [h.EG]: f.userDiscountOffers[h.EG] })
              : (f.userDiscountOffers = {}),
        (f.userTrialOffers = {}),
        !0)
    );
}
function S() {
    let e = u.default.getCurrentUser();
    !(0, E.TW)(e) && Object.keys(f.userDiscountOffers).length > 0 && (0, l._D)("UserOfferStore", !0);
}
function N() {
    let e = u.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = s.A.getAllRelevantReferralTrialOffers().filter((t) => t.user_id === e);
    if (t.length > 0) {
        let e = t[0];
        return (f.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class C extends i.Ay.PersistedStore {
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
                            return [t, m(n)];
                        }),
                    ),
                };
        },
    ];
    initialize(e) {
        (f =
            null != e
                ? {
                      ...e,
                      userDiscountOffers: Object.fromEntries(
                          Object.entries(e.userDiscountOffers ?? {}).map((e) => {
                              let [t, n] = e;
                              return [t, m(n)];
                          }),
                      ),
                  }
                : I),
            this.waitFor(_.A, s.A, A.A, u.default),
            this.syncWith([u.default], T),
            this.syncWith([A.A], g),
            this.syncWith([s.A], N);
    }
    getUserTrialOffer(e) {
        if (null !== e) return f.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return f.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != f.userTrialOffers[t]) return t;
        return null;
    }
    isFetchingOffer() {
        return f.isFetching ?? !1;
    }
    hasFetchedOffer() {
        return null != f.userOffersLastFetchedAtDate;
    }
    shouldFetchReferralOffer(e) {
        let t = f.userOffersLastFetchedAtDate,
            n = f.isFetching ?? !1;
        if (null == t) return !n;
        let i = Date.now() - 6e5 > t;
        return !n && (i || (e ?? 0) > t);
    }
    shouldShowTrialOfferReminder(e) {
        return !h.Pn.includes(e.trial_id) || d({ location: "user_offer_store" });
    }
    getAlmostExpiringTrialOffersForReminder(e) {
        let t = Object.values(h.TP).map((e) => e.id),
            n = u.default.getCurrentUser();
        return (0, E.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(f.userTrialOffers).filter(
                  (n) =>
                      t.includes(n.trial_id) &&
                      null != n.expires_at &&
                      null != n.subscription_trial &&
                      e.includes(n.subscription_trial.sku_id) &&
                      Date.parse(n.expires_at) < Date.now() + (0, E.e1)(n) &&
                      this.shouldShowTrialOfferReminder(n),
              );
    }
    shouldShowDiscountOfferReminder(e) {
        return !h.ON.includes(e.discountId) || d({ location: "user_offer_store" });
    }
    getAlmostExpiringDiscountOffersForReminder(e) {
        let t = u.default.getCurrentUser();
        return (0, E.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(f.userDiscountOffers).filter(
                  (t) =>
                      null != t.expiresAt &&
                      null != t.discount &&
                      t.discount.planIds.some((t) => e.includes(h.hd[t].skuId)) &&
                      t.expiresAt.getTime() < Date.now() + (0, E.e1)(t) &&
                      this.shouldShowDiscountOfferReminder(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = u.default.getCurrentUser();
        return (0, E.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(f.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        let e = u.default.getCurrentUser();
        return (0, E.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(f.userDiscountOffers ?? {}).filter(
                  (e) => !e.hasAcknowledged() && !h.ly.includes(e.discountId),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = u.default.getCurrentUser();
        return (0, E.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(f.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(f.userTrialOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(f.userDiscountOffers).some((e) => !e.hasExpired());
    }
    canFractionalPremiumUserUseOffer() {
        return _.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == A.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : f.userTrialOffers[e]?.referrer;
    }
    getState() {
        return f;
    }
    forceReset() {
        p();
    }
    lastFetchSuccessful() {
        return f.lastFetchSuccessful;
    }
}
let O = new C(r.h, {
    BILLING_USER_OFFER_FETCH_START: function () {
        f.isFetching = !0;
    },
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t ? (f.userTrialOffers[t.trial_id] = t) : (f.userTrialOffers = {}),
            (f.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscountOffer: n } = e;
        null == t && null == n && p(),
            null != t
                ? ((f.userTrialOffers[t.trial_id] = t), (f.userDiscountOffers = {}))
                : null != n && ((f.userDiscountOffers[n.discountId] = n), (f.userTrialOffers = {})),
            (f.userOffersLastFetchedAtDate = Date.now()),
            (f.isFetching = !1),
            (f.lastFetchSuccessful = !0);
    },
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
        null != t ? (f.userTrialOffers[t.trial_id] = t) : (f.userTrialOffers = {}),
            null != n
                ? (f.userDiscountOffers[n.discountId] = n)
                : null != i
                  ? (f.userDiscountOffers[i.discountId] = i)
                  : (f.userDiscountOffers = {}),
            (f.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_FAIL: function () {
        p(), (f.userOffersLastFetchedAtDate = Date.now()), (f.isFetching = !1), (f.lastFetchSuccessful = !1);
    },
    BILLING_USER_OFFER_REDEEMED: function (e) {
        let { offerId: t } = e,
            n = Object.keys(f.userDiscountOffers).find((e) => f.userDiscountOffers[e].id === t);
        null != n && delete f.userDiscountOffers[n];
        let i = Object.keys(f.userTrialOffers).find((e) => f.userTrialOffers[e].id === t);
        return null != i && delete f.userTrialOffers[i], !0;
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: S,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: S,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: S,
    LOGOUT: p,
});
