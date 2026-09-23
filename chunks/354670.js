(n.d(t, { A: () => b }), n(205816));
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(511963),
    o = n(851746),
    d = n(10392);
let c = (0, n(945810).mj)({
    name: "2026-02-premium-offer-reminder-xp",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function u(e) {
    let { location: t } = e;
    return c.getConfig({ location: t }).enabled;
}
var _ = n(669316),
    E = n(959165),
    A = n(287809),
    h = n(469778),
    I = n(158045),
    f = n(166403),
    p = n(202541),
    T = n(818348);
let m = performance.now(),
    g = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
        shouldTriggerOffer: !1,
        cooldownExpirationTimestamps: {
            [T.U7.CHANNEL_OPENED]: 0,
            [T.U7.JOIN_VOICE_CHANNEL]: 0,
            [T.U7.PREMIUM_UPSELL_VIEWED]: 0,
            [T.U7.USER_PROFILE_ACTION]: 0,
            [T.U7.VIDEO_STREAM_ENDED]: 0,
        },
    },
    S = g;
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    (null == t && (t = 3600 * (1 + Math.random())), (S.cooldownExpirationTimestamps[e] = Date.now() + 1e3 * t));
}
function C() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    ((S.userTrialOffers = {}),
        (S.userDiscountOffers = {}),
        (S.userOffersLastFetchedAtDate = void 0),
        (S.isFetching = !1),
        e &&
            ((S.shouldTriggerOffer = !1),
            (S.cooldownExpirationTimestamps = {
                [T.U7.CHANNEL_OPENED]: 0,
                [T.U7.JOIN_VOICE_CHANNEL]: 0,
                [T.U7.PREMIUM_UPSELL_VIEWED]: 0,
                [T.U7.USER_PROFILE_ACTION]: 0,
                [T.U7.VIDEO_STREAM_ENDED]: 0,
            })));
}
function O() {
    return !0;
}
function R(e) {
    var t;
    return e instanceof _.A
        ? e
        : "discount_id" in e
          ? _.A.createFromServer(e)
          : new _.A({
                ...e,
                discount: null == (t = e.discount) || t instanceof l.A ? (t ?? null) : new l.A(t),
                appliedAt: null != e.appliedAt ? new Date(e.appliedAt) : null,
                deletedAt: null != e.deletedAt ? new Date(e.deletedAt) : null,
                expiresAt: null != e.expiresAt ? new Date(e.expiresAt) : null,
            });
}
function L() {
    return (
        null != f.A.getPremiumTypeSubscription() &&
        ((S.userDiscountOffers = r().pick(S.userDiscountOffers, p.i_)), (S.userTrialOffers = {}), !0)
    );
}
function y() {
    let e = A.default.getCurrentUser();
    !(0, I.TW)(e) && Object.keys(S.userDiscountOffers).length > 0 && (0, d._D)("UserOfferStore", !0);
}
function D() {
    let e = A.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = o.A.getAllRelevantReferralTrialOffers().filter((t) => t.userId === e);
    if (t.length > 0) {
        let e = t[0];
        return ((S.userTrialOffers[e.trialId] = e), !0);
    }
    return !1;
}
class v extends a.Ay.PersistedStore {
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
                            return [t, R(n)];
                        }),
                    ),
                };
        },
        (e) => {
            if (null != e && (e?.shouldTriggerOffer == null || e?.cooldownExpirationTimestamps == null))
                return {
                    ...e,
                    shouldTriggerOffer: !1,
                    cooldownExpirationTimestamps: {
                        [T.U7.CHANNEL_OPENED]: 0,
                        [T.U7.JOIN_VOICE_CHANNEL]: 0,
                        [T.U7.PREMIUM_UPSELL_VIEWED]: 0,
                        [T.U7.USER_PROFILE_ACTION]: 0,
                        [T.U7.VIDEO_STREAM_ENDED]: 0,
                    },
                };
        },
    ];
    initialize(e) {
        ((S =
            null != e
                ? {
                      ...e,
                      userTrialOffers: Object.fromEntries(
                          Object.entries(e.userTrialOffers ?? {}).map((e) => {
                              let [t, n] = e;
                              return [
                                  t,
                                  n instanceof E.A
                                      ? n
                                      : "trial_id" in n
                                        ? E.A.createFromServer(n)
                                        : new E.A({
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
                              return [t, R(n)];
                          }),
                      ),
                  }
                : g),
            this.waitFor(h.A, o.A, f.A, A.default),
            this.syncWith([A.default], O),
            this.syncWith([f.A], L),
            this.syncWith([o.A], D));
    }
    getUserTrialOffer(e) {
        if (null !== e) return S.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return S.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != S.userTrialOffers[t]) return t;
        return null;
    }
    isFetchingOffer() {
        return S.isFetching ?? !1;
    }
    hasFetchedOffer() {
        return null != S.userOffersLastFetchedAtDate;
    }
    shouldFetchReferralOffer(e) {
        let t = S.userOffersLastFetchedAtDate,
            n = S.isFetching ?? !1;
        if (null == t) return !n;
        let i = Date.now() - 6e5 > t;
        return !n && (i || (e ?? 0) > t);
    }
    shouldShowTrialOfferReminder(e) {
        return !p.Pn.includes(e.trialId) || u({ location: "user_offer_store" });
    }
    getAlmostExpiringTrialOffersForReminder(e) {
        let t = Object.values(p.TP).map((e) => e.id),
            n = A.default.getCurrentUser();
        return (0, I.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(S.userTrialOffers).filter(
                  (n) =>
                      t.includes(n.trialId) &&
                      null != n.expiresAt &&
                      null != n.subscriptionTrial &&
                      e.includes(n.subscriptionTrial.skuId) &&
                      n.expiresAt.getTime() < Date.now() + (0, I.e1)(n) &&
                      this.shouldShowTrialOfferReminder(n),
              );
    }
    shouldShowDiscountOfferReminder(e) {
        return !p.ON.includes(e.discountId) || u({ location: "user_offer_store" });
    }
    getAlmostExpiringDiscountOffersForReminder(e) {
        let t = A.default.getCurrentUser();
        return (0, I.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(S.userDiscountOffers).filter(
                  (t) =>
                      null != t.expiresAt &&
                      null != t.discount &&
                      t.discount.planIds.some((t) => e.includes(p.hd[t].skuId)) &&
                      t.expiresAt.getTime() < Date.now() + (0, I.e1)(t) &&
                      this.shouldShowDiscountOfferReminder(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = A.default.getCurrentUser();
        return (0, I.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(S.userTrialOffers).filter((t) => e.includes(t.trialId) && null != t.expiresAt);
    }
    getUnacknowledgedDiscountOffers() {
        let e = A.default.getCurrentUser();
        return (0, I.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(S.userDiscountOffers ?? {}).filter(
                  (e) => !e.hasAcknowledged() && !p.ly.includes(e.discountId),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = A.default.getCurrentUser();
        return (0, I.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(S.userTrialOffers).filter((t) => e.includes(t.trialId) && null == t.expiresAt);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(S.userTrialOffers).some((e) => !e.hasExpired);
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(S.userDiscountOffers).some((e) => !e.hasExpired());
    }
    canFractionalPremiumUserUseOffer() {
        return h.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == f.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : S.userTrialOffers[e]?.referrer;
    }
    getState() {
        return S;
    }
    forceReset() {
        C();
    }
    lastFetchSuccessful() {
        return S.lastFetchSuccessful;
    }
    canTriggerUserOffer(e) {
        return S.shouldTriggerOffer && S.cooldownExpirationTimestamps[e] < Date.now();
    }
    getUptimeForTrigger() {
        return Math.floor((performance.now() - m) / 1e3);
    }
}
let b = new v(s.h, {
    BILLING_USER_OFFER_FETCH_START: function () {
        S.isFetching = !0;
    },
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        (null != t ? (S.userTrialOffers[t.trialId] = t) : (S.userTrialOffers = {}),
            (S.userOffersLastFetchedAtDate = Date.now()));
    },
    BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscountOffer: n, shouldTriggerOffer: i } = e;
        (null == t && null == n && C(!i),
            null != t
                ? ((S.userTrialOffers[t.trialId] = t), (S.userDiscountOffers = {}))
                : null != n && ((S.userDiscountOffers[n.discountId] = n), (S.userTrialOffers = {})),
            (S.userOffersLastFetchedAtDate = Date.now()),
            (S.isFetching = !1),
            (S.lastFetchSuccessful = !0),
            (S.shouldTriggerOffer = i ?? !1));
    },
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
        (null != t ? (S.userTrialOffers[t.trialId] = t) : (S.userTrialOffers = {}),
            null != n
                ? (S.userDiscountOffers[n.discountId] = n)
                : null != i
                  ? (S.userDiscountOffers[i.discountId] = i)
                  : (S.userDiscountOffers = {}),
            (S.userOffersLastFetchedAtDate = Date.now()));
    },
    BILLING_USER_OFFER_FETCH_FAIL: function () {
        (C(), (S.userOffersLastFetchedAtDate = Date.now()), (S.isFetching = !1), (S.lastFetchSuccessful = !1));
    },
    BILLING_USER_OFFER_REDEEMED: function (e) {
        let { offerId: t } = e,
            n = Object.keys(S.userDiscountOffers).find((e) => S.userDiscountOffers[e].id === t);
        null != n && delete S.userDiscountOffers[n];
        let i = Object.keys(S.userTrialOffers).find((e) => S.userTrialOffers[e].id === t);
        return (null != i && delete S.userTrialOffers[i], !0);
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: y,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: y,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: y,
    BILLING_USER_OFFER_TRIGGER_ATTEMPT: function (e) {
        let { triggerType: t } = e;
        N(t);
    },
    BILLING_USER_OFFER_TRIGGER_SUCCESS: function (e) {
        let { triggerType: t, retryAfter: n, triggerSuccess: i, userTrialOffer: r, userDiscountOffer: a } = e;
        (N(t, n),
            null != r
                ? ((S.userTrialOffers[r.trialId] = r), (S.userDiscountOffers = {}), (S.shouldTriggerOffer = !1))
                : null != a
                  ? ((S.userDiscountOffers[a.discountId] = a), (S.userTrialOffers = {}), (S.shouldTriggerOffer = !1))
                  : !0 === i && (S.shouldTriggerOffer = !1),
            (S.userOffersLastFetchedAtDate = Date.now()),
            (S.isFetching = !1),
            (S.lastFetchSuccessful = !0));
    },
    LOGOUT: function () {
        C();
    },
});
