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
    u = n(959165),
    _ = n(287809),
    E = n(469778),
    A = n(158045),
    h = n(166403),
    I = n(202541);
let f = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
    },
    p = f;
function T() {
    (p.userTrialOffers = {}),
        (p.userDiscountOffers = {}),
        (p.userOffersLastFetchedAtDate = void 0),
        (p.isFetching = !1);
}
function m() {
    return !0;
}
function g(e) {
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
function S() {
    return (
        null != h.A.getPremiumTypeSubscription() &&
        (null != p.userDiscountOffers[I.q]
            ? (p.userDiscountOffers = { [I.q]: p.userDiscountOffers[I.q] })
            : null != p.userDiscountOffers[I.EG]
              ? (p.userDiscountOffers = { [I.EG]: p.userDiscountOffers[I.EG] })
              : (p.userDiscountOffers = {}),
        (p.userTrialOffers = {}),
        !0)
    );
}
function N() {
    let e = _.default.getCurrentUser();
    !(0, A.TW)(e) && Object.keys(p.userDiscountOffers).length > 0 && (0, l._D)("UserOfferStore", !0);
}
function C() {
    let e = _.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = s.A.getAllRelevantReferralTrialOffers().filter((t) => t.userId === e);
    if (t.length > 0) {
        let e = t[0];
        return (p.userTrialOffers[e.trialId] = e), !0;
    }
    return !1;
}
class R extends i.Ay.PersistedStore {
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
                            return [t, g(n)];
                        }),
                    ),
                };
        },
    ];
    initialize(e) {
        (p =
            null != e
                ? {
                      ...e,
                      userTrialOffers: Object.fromEntries(
                          Object.entries(e.userTrialOffers ?? {}).map((e) => {
                              let [t, n] = e;
                              return [
                                  t,
                                  n instanceof u.A
                                      ? n
                                      : "trial_id" in n
                                        ? u.A.createFromServer(n)
                                        : new u.A({
                                              ...n,
                                              expiresAt: null != n.expiresAt ? new Date(n.expiresAt) : null,
                                              redeemedAt: null != n.redeemedAt ? new Date(n.redeemedAt) : null,
                                          }),
                              ];
                          }),
                      ),
                      userDiscountOffers: Object.fromEntries(
                          Object.entries(e.userDiscountOffers ?? {}).map((e) => {
                              let [t, n] = e;
                              return [t, g(n)];
                          }),
                      ),
                  }
                : f),
            this.waitFor(E.A, s.A, h.A, _.default),
            this.syncWith([_.default], m),
            this.syncWith([h.A], S),
            this.syncWith([s.A], C);
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
        return !I.Pn.includes(e.trialId) || d({ location: "user_offer_store" });
    }
    getAlmostExpiringTrialOffersForReminder(e) {
        let t = Object.values(I.TP).map((e) => e.id),
            n = _.default.getCurrentUser();
        return (0, A.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userTrialOffers).filter(
                  (n) =>
                      t.includes(n.trialId) &&
                      null != n.expiresAt &&
                      null != n.subscriptionTrial &&
                      e.includes(n.subscriptionTrial.skuId) &&
                      n.expiresAt.getTime() < Date.now() + (0, A.e1)(n) &&
                      this.shouldShowTrialOfferReminder(n),
              );
    }
    shouldShowDiscountOfferReminder(e) {
        return !I.ON.includes(e.discountId) || d({ location: "user_offer_store" });
    }
    getAlmostExpiringDiscountOffersForReminder(e) {
        let t = _.default.getCurrentUser();
        return (0, A.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userDiscountOffers).filter(
                  (t) =>
                      null != t.expiresAt &&
                      null != t.discount &&
                      t.discount.planIds.some((t) => e.includes(I.hd[t].skuId)) &&
                      t.expiresAt.getTime() < Date.now() + (0, A.e1)(t) &&
                      this.shouldShowDiscountOfferReminder(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = _.default.getCurrentUser();
        return (0, A.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userTrialOffers).filter((t) => e.includes(t.trialId) && null != t.expiresAt);
    }
    getUnacknowledgedDiscountOffers() {
        let e = _.default.getCurrentUser();
        return (0, A.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userDiscountOffers ?? {}).filter(
                  (e) => !e.hasAcknowledged() && !I.ly.includes(e.discountId),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = _.default.getCurrentUser();
        return (0, A.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userTrialOffers).filter((t) => e.includes(t.trialId) && null == t.expiresAt);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(p.userTrialOffers).some((e) => !e.hasExpired());
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(p.userDiscountOffers).some((e) => !e.hasExpired());
    }
    canFractionalPremiumUserUseOffer() {
        return E.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == h.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : p.userTrialOffers[e]?.referrer;
    }
    getState() {
        return p;
    }
    forceReset() {
        T();
    }
    lastFetchSuccessful() {
        return p.lastFetchSuccessful;
    }
}
let O = new R(r.h, {
    BILLING_USER_OFFER_FETCH_START: function () {
        p.isFetching = !0;
    },
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t ? (p.userTrialOffers[t.trialId] = t) : (p.userTrialOffers = {}),
            (p.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscountOffer: n } = e;
        null == t && null == n && T(),
            null != t
                ? ((p.userTrialOffers[t.trialId] = t), (p.userDiscountOffers = {}))
                : null != n && ((p.userDiscountOffers[n.discountId] = n), (p.userTrialOffers = {})),
            (p.userOffersLastFetchedAtDate = Date.now()),
            (p.isFetching = !1),
            (p.lastFetchSuccessful = !0);
    },
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
        null != t ? (p.userTrialOffers[t.trialId] = t) : (p.userTrialOffers = {}),
            null != n
                ? (p.userDiscountOffers[n.discountId] = n)
                : null != i
                  ? (p.userDiscountOffers[i.discountId] = i)
                  : (p.userDiscountOffers = {}),
            (p.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_FAIL: function () {
        T(), (p.userOffersLastFetchedAtDate = Date.now()), (p.isFetching = !1), (p.lastFetchSuccessful = !1);
    },
    BILLING_USER_OFFER_REDEEMED: function (e) {
        let { offerId: t } = e,
            n = Object.keys(p.userDiscountOffers).find((e) => p.userDiscountOffers[e].id === t);
        null != n && delete p.userDiscountOffers[n];
        let i = Object.keys(p.userTrialOffers).find((e) => p.userTrialOffers[e].id === t);
        return null != i && delete p.userTrialOffers[i], !0;
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: N,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: N,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: N,
    LOGOUT: T,
});
