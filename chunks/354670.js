"use strict";
n.d(t, { A: () => y }), n(205816);
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
var u = n(669316),
    c = n(287809),
    d = n(469778),
    _ = n(428262),
    f = n(166403),
    h = n(788868);
let p = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
    },
    E = p;
function m() {
    (E.userTrialOffers = {}),
        (E.userDiscountOffers = {}),
        (E.userOffersLastFetchedAtDate = void 0),
        (E.isFetching = !1);
}
let g = () => !0;
function A(e) {
    return e instanceof u.A
        ? e
        : "discount_id" in e
          ? u.A.createFromServer(e)
          : new u.A({
                ...e,
                appliedAt: null != e.appliedAt ? new Date(e.appliedAt) : null,
                deletedAt: null != e.deletedAt ? new Date(e.deletedAt) : null,
                expiresAt: null != e.expiresAt ? new Date(e.expiresAt) : null,
            });
}
function I() {
    return (
        null != f.A.getPremiumTypeSubscription() &&
        (null != E.userDiscountOffers[h.q]
            ? (E.userDiscountOffers = { [h.q]: E.userDiscountOffers[h.q] })
            : null != E.userDiscountOffers[h.EG]
              ? (E.userDiscountOffers = { [h.EG]: E.userDiscountOffers[h.EG] })
              : (E.userDiscountOffers = {}),
        (E.userTrialOffers = {}),
        !0)
    );
}
function T() {
    let e = c.default.getCurrentUser();
    !(0, _.TW)(e) && Object.keys(E.userDiscountOffers).length > 0 && (0, a._D)("UserOfferStore", !0);
}
function S() {
    let e = c.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = s.A.getAllRelevantReferralTrialOffers().filter((t) => t.user_id === e);
    if (t.length > 0) {
        let e = t[0];
        return (E.userTrialOffers[e.trial_id] = e), !0;
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
                            return [t, A(n)];
                        }),
                    ),
                };
        },
    ];
    initialize(e) {
        (E =
            null != e
                ? {
                      ...e,
                      userDiscountOffers: Object.fromEntries(
                          Object.entries(e.userDiscountOffers ?? {}).map((e) => {
                              let [t, n] = e;
                              return [t, A(n)];
                          }),
                      ),
                  }
                : p),
            this.waitFor(d.A, s.A, f.A, c.default),
            this.syncWith([c.default], g),
            this.syncWith([f.A], I),
            this.syncWith([s.A], S);
    }
    getUserTrialOffer(e) {
        if (null !== e) return E.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return E.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != E.userTrialOffers[t]) return t;
        return null;
    }
    isFetchingOffer() {
        return E.isFetching ?? !1;
    }
    hasFetchedOffer() {
        return null != E.userOffersLastFetchedAtDate;
    }
    shouldFetchReferralOffer(e) {
        let t = E.userOffersLastFetchedAtDate,
            n = E.isFetching ?? !1;
        if (null == t) return !n;
        let i = Date.now() - 6e5 > t;
        return !n && (i || (e ?? 0) > t);
    }
    shouldShowTrialOfferReminder(e) {
        return !h.Pn.includes(e.trial_id) || l({ location: "user_offer_store" });
    }
    getAlmostExpiringTrialOffersForReminder(e) {
        let t = Object.values(h.TP).map((e) => e.id),
            n = c.default.getCurrentUser();
        return (0, _.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(E.userTrialOffers).filter(
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
        return !h.ON.includes(e.discountId) || l({ location: "user_offer_store" });
    }
    getAlmostExpiringDiscountOffersForReminder(e) {
        let t = c.default.getCurrentUser();
        return (0, _.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(E.userDiscountOffers).filter(
                  (t) =>
                      null != t.expiresAt &&
                      null != t.discount &&
                      t.discount.planIds.some((t) => e.includes(h.hd[t].skuId)) &&
                      t.expiresAt.getTime() < Date.now() + (0, _.e1)(t) &&
                      this.shouldShowDiscountOfferReminder(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = c.default.getCurrentUser();
        return (0, _.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(E.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        let e = c.default.getCurrentUser();
        return (0, _.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(E.userDiscountOffers ?? {}).filter(
                  (e) => null == e.expiresAt && !h.ly.includes(e.discountId),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = c.default.getCurrentUser();
        return (0, _.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(E.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(E.userTrialOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(E.userDiscountOffers).some((e) => !e.hasExpired());
    }
    canFractionalPremiumUserUseOffer() {
        return d.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == f.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : E.userTrialOffers[e]?.referrer;
    }
    getState() {
        return E;
    }
    forceReset() {
        m();
    }
    lastFetchSuccessful() {
        return E.lastFetchSuccessful;
    }
}
let y = new N(r.h, {
    BILLING_USER_OFFER_FETCH_START: function () {
        E.isFetching = !0;
    },
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t ? (E.userTrialOffers[t.trial_id] = t) : m(),
            (E.userOffersLastFetchedAtDate = Date.now()),
            (E.isFetching = !1);
    },
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t ? (E.userTrialOffers[t.trial_id] = t) : (E.userTrialOffers = {}),
            (E.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscountOffer: n } = e;
        null == t && null == n && m(),
            null != t
                ? ((E.userTrialOffers[t.trial_id] = t), (E.userDiscountOffers = {}))
                : null != n && ((E.userDiscountOffers[n.discountId] = n), (E.userTrialOffers = {})),
            (E.userOffersLastFetchedAtDate = Date.now()),
            (E.isFetching = !1),
            (E.lastFetchSuccessful = !0);
    },
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
        null != t ? (E.userTrialOffers[t.trial_id] = t) : (E.userTrialOffers = {}),
            null != n
                ? (E.userDiscountOffers[n.discountId] = n)
                : null != i
                  ? (E.userDiscountOffers[i.discountId] = i)
                  : (E.userDiscountOffers = {}),
            (E.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_FAIL: function () {
        m(), (E.userOffersLastFetchedAtDate = Date.now()), (E.isFetching = !1), (E.lastFetchSuccessful = !1);
    },
    BILLING_USER_OFFER_REDEEMED: function (e) {
        let { offerId: t } = e,
            n = Object.keys(E.userDiscountOffers).find((e) => E.userDiscountOffers[e].id === t);
        null != n && delete E.userDiscountOffers[n];
        let i = Object.keys(E.userTrialOffers).find((e) => E.userTrialOffers[e].id === t);
        return null != i && delete E.userTrialOffers[i], !0;
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: T,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: T,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: T,
    LOGOUT: m,
});
