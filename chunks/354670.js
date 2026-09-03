n.d(t, { A: () => D }), n(205816);
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
    m = T;
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    null == t && (t = 3600 * (1 + Math.random())), (m.cooldownExpirationTimestamps[e] = Date.now() + 1e3 * t);
}
function S() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (m.userTrialOffers = {}),
        (m.userDiscountOffers = {}),
        (m.userOffersLastFetchedAtDate = void 0),
        (m.isFetching = !1),
        e &&
            ((m.shouldTriggerOffer = !1),
            (m.cooldownExpirationTimestamps = {
                [f.U7.CHANNEL_OPENED]: 0,
                [f.U7.JOIN_VOICE_CHANNEL]: 0,
                [f.U7.PREMIUM_UPSELL_VIEWED]: 0,
                [f.U7.USER_PROFILE_ACTION]: 0,
                [f.U7.VIDEO_STREAM_ENDED]: 0,
            }));
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
        (null != m.userDiscountOffers[I.q]
            ? (m.userDiscountOffers = { [I.q]: m.userDiscountOffers[I.q] })
            : null != m.userDiscountOffers[I.EG]
              ? (m.userDiscountOffers = { [I.EG]: m.userDiscountOffers[I.EG] })
              : (m.userDiscountOffers = {}),
        (m.userTrialOffers = {}),
        !0)
    );
}
function R() {
    let e = _.default.getCurrentUser();
    !(0, A.TW)(e) && Object.keys(m.userDiscountOffers).length > 0 && (0, l._D)("UserOfferStore", !0);
}
function L() {
    let e = _.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = s.A.getAllRelevantReferralTrialOffers().filter((t) => t.userId === e);
    if (t.length > 0) {
        let e = t[0];
        return (m.userTrialOffers[e.trialId] = e), !0;
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
        (m =
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
            this.syncWith([s.A], L);
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
        return !I.Pn.includes(e.trialId) || d({ location: "user_offer_store" });
    }
    getAlmostExpiringTrialOffersForReminder(e) {
        let t = Object.values(I.TP).map((e) => e.id),
            n = _.default.getCurrentUser();
        return (0, A.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(m.userTrialOffers).filter(
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
            : Object.values(m.userDiscountOffers).filter(
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
            : Object.values(m.userTrialOffers).filter((t) => e.includes(t.trialId) && null != t.expiresAt);
    }
    getUnacknowledgedDiscountOffers() {
        let e = _.default.getCurrentUser();
        return (0, A.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(m.userDiscountOffers ?? {}).filter(
                  (e) => !e.hasAcknowledged() && !I.ly.includes(e.discountId),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = _.default.getCurrentUser();
        return (0, A.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(m.userTrialOffers).filter((t) => e.includes(t.trialId) && null == t.expiresAt);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(m.userTrialOffers).some((e) => !e.hasExpired);
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(m.userDiscountOffers).some((e) => !e.hasExpired());
    }
    canFractionalPremiumUserUseOffer() {
        return E.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == h.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : m.userTrialOffers[e]?.referrer;
    }
    getState() {
        return m;
    }
    forceReset() {
        S();
    }
    lastFetchSuccessful() {
        return m.lastFetchSuccessful;
    }
    canTriggerUserOffer(e) {
        return m.shouldTriggerOffer && m.cooldownExpirationTimestamps[e] < Date.now();
    }
    getUptimeForTrigger() {
        return Math.floor((performance.now() - p) / 1e3);
    }
}
let D = new y(r.h, {
    BILLING_USER_OFFER_FETCH_START: function () {
        m.isFetching = !0;
    },
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t ? (m.userTrialOffers[t.trialId] = t) : (m.userTrialOffers = {}),
            (m.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscountOffer: n, shouldTriggerOffer: i } = e;
        null == t && null == n && S(!i),
            null != t
                ? ((m.userTrialOffers[t.trialId] = t), (m.userDiscountOffers = {}))
                : null != n && ((m.userDiscountOffers[n.discountId] = n), (m.userTrialOffers = {})),
            (m.userOffersLastFetchedAtDate = Date.now()),
            (m.isFetching = !1),
            (m.lastFetchSuccessful = !0),
            (m.shouldTriggerOffer = i ?? !1);
    },
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
        null != t ? (m.userTrialOffers[t.trialId] = t) : (m.userTrialOffers = {}),
            null != n
                ? (m.userDiscountOffers[n.discountId] = n)
                : null != i
                  ? (m.userDiscountOffers[i.discountId] = i)
                  : (m.userDiscountOffers = {}),
            (m.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_FAIL: function () {
        S(), (m.userOffersLastFetchedAtDate = Date.now()), (m.isFetching = !1), (m.lastFetchSuccessful = !1);
    },
    BILLING_USER_OFFER_REDEEMED: function (e) {
        let { offerId: t } = e,
            n = Object.keys(m.userDiscountOffers).find((e) => m.userDiscountOffers[e].id === t);
        null != n && delete m.userDiscountOffers[n];
        let i = Object.keys(m.userTrialOffers).find((e) => m.userTrialOffers[e].id === t);
        return null != i && delete m.userTrialOffers[i], !0;
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: R,
    BILLING_USER_OFFER_TRIGGER_ATTEMPT: function (e) {
        let { triggerType: t } = e;
        g(t);
    },
    BILLING_USER_OFFER_TRIGGER_SUCCESS: function (e) {
        let { triggerType: t, retryAfter: n, triggerSuccess: i, userTrialOffer: r, userDiscountOffer: a } = e;
        g(t, n),
            null != r
                ? ((m.userTrialOffers[r.trialId] = r), (m.userDiscountOffers = {}), (m.shouldTriggerOffer = !1))
                : null != a
                  ? ((m.userDiscountOffers[a.discountId] = a), (m.userTrialOffers = {}), (m.shouldTriggerOffer = !1))
                  : !0 === i && (m.shouldTriggerOffer = !1),
            (m.userOffersLastFetchedAtDate = Date.now()),
            (m.isFetching = !1),
            (m.lastFetchSuccessful = !0);
    },
    LOGOUT: function () {
        S();
    },
});
