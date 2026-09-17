(n.d(t, { A: () => D }), n(205816));
var i = n(17928),
    r = n(228366),
    a = n(511963),
    s = n(851746),
    l = n(10392);
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
    I = n(202541),
    f = n(818348);
let p = performance.now(),
    T = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
        shouldTriggerOffer: !1,
        cooldownExpirationTimestamps: {
            [f.U7.CHANNEL_OPENED]: 0,
            [f.U7.JOIN_VOICE_CHANNEL]: 0,
            [f.U7.PREMIUM_UPSELL_VIEWED]: 0,
            [f.U7.USER_PROFILE_ACTION]: 0,
            [f.U7.VIDEO_STREAM_ENDED]: 0,
        },
    },
    g = T;
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    (null == t && (t = 3600 * (1 + Math.random())), (g.cooldownExpirationTimestamps[e] = Date.now() + 1e3 * t));
}
function S() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    ((g.userTrialOffers = {}),
        (g.userDiscountOffers = {}),
        (g.userOffersLastFetchedAtDate = void 0),
        (g.isFetching = !1),
        e &&
            ((g.shouldTriggerOffer = !1),
            (g.cooldownExpirationTimestamps = {
                [f.U7.CHANNEL_OPENED]: 0,
                [f.U7.JOIN_VOICE_CHANNEL]: 0,
                [f.U7.PREMIUM_UPSELL_VIEWED]: 0,
                [f.U7.USER_PROFILE_ACTION]: 0,
                [f.U7.VIDEO_STREAM_ENDED]: 0,
            })));
}
function N() {
    return !0;
}
function C(e) {
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
function O() {
    return (
        null != h.A.getPremiumTypeSubscription() &&
        (null != g.userDiscountOffers[I.q]
            ? (g.userDiscountOffers = { [I.q]: g.userDiscountOffers[I.q] })
            : null != g.userDiscountOffers[I.EG]
              ? (g.userDiscountOffers = { [I.EG]: g.userDiscountOffers[I.EG] })
              : (g.userDiscountOffers = {}),
        (g.userTrialOffers = {}),
        !0)
    );
}
function R() {
    let e = _.default.getCurrentUser();
    !(0, A.TW)(e) && Object.keys(g.userDiscountOffers).length > 0 && (0, l._D)("UserOfferStore", !0);
}
function L() {
    let e = _.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = s.A.getAllRelevantReferralTrialOffers().filter((t) => t.userId === e);
    if (t.length > 0) {
        let e = t[0];
        return ((g.userTrialOffers[e.trialId] = e), !0);
    }
    return !1;
}
class y extends i.Ay.PersistedStore {
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
                            return [t, C(n)];
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
                        [f.U7.CHANNEL_OPENED]: 0,
                        [f.U7.JOIN_VOICE_CHANNEL]: 0,
                        [f.U7.PREMIUM_UPSELL_VIEWED]: 0,
                        [f.U7.USER_PROFILE_ACTION]: 0,
                        [f.U7.VIDEO_STREAM_ENDED]: 0,
                    },
                };
        },
    ];
    initialize(e) {
        ((g =
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
                              return [t, C(n)];
                          }),
                      ),
                  }
                : T),
            this.waitFor(E.A, s.A, h.A, _.default),
            this.syncWith([_.default], N),
            this.syncWith([h.A], O),
            this.syncWith([s.A], L));
    }
    getUserTrialOffer(e) {
        if (null !== e) return g.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return g.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != g.userTrialOffers[t]) return t;
        return null;
    }
    isFetchingOffer() {
        return g.isFetching ?? !1;
    }
    hasFetchedOffer() {
        return null != g.userOffersLastFetchedAtDate;
    }
    shouldFetchReferralOffer(e) {
        let t = g.userOffersLastFetchedAtDate,
            n = g.isFetching ?? !1;
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
            : Object.values(g.userTrialOffers).filter(
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
            : Object.values(g.userDiscountOffers).filter(
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
            : Object.values(g.userTrialOffers).filter((t) => e.includes(t.trialId) && null != t.expiresAt);
    }
    getUnacknowledgedDiscountOffers() {
        let e = _.default.getCurrentUser();
        return (0, A.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(g.userDiscountOffers ?? {}).filter(
                  (e) => !e.hasAcknowledged() && !I.ly.includes(e.discountId),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = _.default.getCurrentUser();
        return (0, A.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(g.userTrialOffers).filter((t) => e.includes(t.trialId) && null == t.expiresAt);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(g.userTrialOffers).some((e) => !e.hasExpired);
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(g.userDiscountOffers).some((e) => !e.hasExpired());
    }
    canFractionalPremiumUserUseOffer() {
        return E.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == h.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : g.userTrialOffers[e]?.referrer;
    }
    getState() {
        return g;
    }
    forceReset() {
        S();
    }
    lastFetchSuccessful() {
        return g.lastFetchSuccessful;
    }
    canTriggerUserOffer(e) {
        return g.shouldTriggerOffer && g.cooldownExpirationTimestamps[e] < Date.now();
    }
    getUptimeForTrigger() {
        return Math.floor((performance.now() - p) / 1e3);
    }
}
let D = new y(r.h, {
    BILLING_USER_OFFER_FETCH_START: function () {
        g.isFetching = !0;
    },
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        (null != t ? (g.userTrialOffers[t.trialId] = t) : (g.userTrialOffers = {}),
            (g.userOffersLastFetchedAtDate = Date.now()));
    },
    BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscountOffer: n, shouldTriggerOffer: i } = e;
        (null == t && null == n && S(!i),
            null != t
                ? ((g.userTrialOffers[t.trialId] = t), (g.userDiscountOffers = {}))
                : null != n && ((g.userDiscountOffers[n.discountId] = n), (g.userTrialOffers = {})),
            (g.userOffersLastFetchedAtDate = Date.now()),
            (g.isFetching = !1),
            (g.lastFetchSuccessful = !0),
            (g.shouldTriggerOffer = i ?? !1));
    },
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
        (null != t ? (g.userTrialOffers[t.trialId] = t) : (g.userTrialOffers = {}),
            null != n
                ? (g.userDiscountOffers[n.discountId] = n)
                : null != i
                  ? (g.userDiscountOffers[i.discountId] = i)
                  : (g.userDiscountOffers = {}),
            (g.userOffersLastFetchedAtDate = Date.now()));
    },
    BILLING_USER_OFFER_FETCH_FAIL: function () {
        (S(), (g.userOffersLastFetchedAtDate = Date.now()), (g.isFetching = !1), (g.lastFetchSuccessful = !1));
    },
    BILLING_USER_OFFER_REDEEMED: function (e) {
        let { offerId: t } = e,
            n = Object.keys(g.userDiscountOffers).find((e) => g.userDiscountOffers[e].id === t);
        null != n && delete g.userDiscountOffers[n];
        let i = Object.keys(g.userTrialOffers).find((e) => g.userTrialOffers[e].id === t);
        return (null != i && delete g.userTrialOffers[i], !0);
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: R,
    BILLING_USER_OFFER_TRIGGER_ATTEMPT: function (e) {
        let { triggerType: t } = e;
        m(t);
    },
    BILLING_USER_OFFER_TRIGGER_SUCCESS: function (e) {
        let { triggerType: t, retryAfter: n, triggerSuccess: i, userTrialOffer: r, userDiscountOffer: a } = e;
        (m(t, n),
            null != r
                ? ((g.userTrialOffers[r.trialId] = r), (g.userDiscountOffers = {}), (g.shouldTriggerOffer = !1))
                : null != a
                  ? ((g.userDiscountOffers[a.discountId] = a), (g.userTrialOffers = {}), (g.shouldTriggerOffer = !1))
                  : !0 === i && (g.shouldTriggerOffer = !1),
            (g.userOffersLastFetchedAtDate = Date.now()),
            (g.isFetching = !1),
            (g.lastFetchSuccessful = !0));
    },
    LOGOUT: function () {
        S();
    },
});
