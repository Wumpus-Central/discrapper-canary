(n.d(t, { A: () => D }), n(205816));
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(511963),
    o = n(851746);
let d = (0, n(945810).mj)({
    name: "2026-02-premium-offer-reminder-xp",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function c(e) {
    let { location: t } = e;
    return d.getConfig({ location: t }).enabled;
}
var u = n(669316),
    _ = n(959165),
    E = n(287809),
    A = n(469778),
    h = n(158045),
    f = n(166403),
    I = n(202541),
    p = n(818348);
let T = performance.now(),
    g = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
        shouldTriggerOffer: !1,
        cooldownExpirationTimestamps: {
            [p.U7.CHANNEL_OPENED]: 0,
            [p.U7.JOIN_VOICE_CHANNEL]: 0,
            [p.U7.PREMIUM_UPSELL_VIEWED]: 0,
            [p.U7.USER_PROFILE_ACTION]: 0,
            [p.U7.VIDEO_STREAM_ENDED]: 0,
        },
    },
    m = g;
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    (null == t && (t = 3600 * (1 + Math.random())), (m.cooldownExpirationTimestamps[e] = Date.now() + 1e3 * t));
}
function N() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    ((m.userTrialOffers = {}),
        (m.userDiscountOffers = {}),
        (m.userOffersLastFetchedAtDate = void 0),
        (m.isFetching = !1),
        e &&
            ((m.shouldTriggerOffer = !1),
            (m.cooldownExpirationTimestamps = {
                [p.U7.CHANNEL_OPENED]: 0,
                [p.U7.JOIN_VOICE_CHANNEL]: 0,
                [p.U7.PREMIUM_UPSELL_VIEWED]: 0,
                [p.U7.USER_PROFILE_ACTION]: 0,
                [p.U7.VIDEO_STREAM_ENDED]: 0,
            })));
}
function C() {
    return !0;
}
function O(e) {
    var t;
    return e instanceof u.A
        ? e
        : "discount_id" in e
          ? u.A.createFromServer(e)
          : new u.A({
                ...e,
                discount: null == (t = e.discount) || t instanceof l.A ? (t ?? null) : new l.A(t),
                appliedAt: null != e.appliedAt ? new Date(e.appliedAt) : null,
                deletedAt: null != e.deletedAt ? new Date(e.deletedAt) : null,
                expiresAt: null != e.expiresAt ? new Date(e.expiresAt) : null,
            });
}
function R() {
    return (
        null != f.A.getPremiumTypeSubscription() &&
        ((m.userDiscountOffers = r().pick(m.userDiscountOffers, I.i_)), (m.userTrialOffers = {}), !0)
    );
}
function L() {
    let e = E.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = o.A.getAllRelevantReferralTrialOffers().filter((t) => t.userId === e);
    if (t.length > 0) {
        let e = t[0];
        return ((m.userTrialOffers[e.trialId] = e), !0);
    }
    return !1;
}
class y extends a.Ay.PersistedStore {
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
                            return [t, O(n)];
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
                        [p.U7.CHANNEL_OPENED]: 0,
                        [p.U7.JOIN_VOICE_CHANNEL]: 0,
                        [p.U7.PREMIUM_UPSELL_VIEWED]: 0,
                        [p.U7.USER_PROFILE_ACTION]: 0,
                        [p.U7.VIDEO_STREAM_ENDED]: 0,
                    },
                };
        },
    ];
    initialize(e) {
        ((m =
            null != e
                ? {
                      ...e,
                      userTrialOffers: Object.fromEntries(
                          Object.entries(e.userTrialOffers ?? {}).map((e) => {
                              let [t, n] = e;
                              return [
                                  t,
                                  n instanceof _.A
                                      ? n
                                      : "trial_id" in n
                                        ? _.A.createFromServer(n)
                                        : new _.A({
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
                              return [t, O(n)];
                          }),
                      ),
                  }
                : g),
            this.waitFor(A.A, o.A, f.A, E.default),
            this.syncWith([E.default], C),
            this.syncWith([f.A], R),
            this.syncWith([o.A], L));
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
        return !I.Pn.includes(e.trialId) || c({ location: "user_offer_store" });
    }
    getAlmostExpiringTrialOffersForReminder(e) {
        let t = Object.values(I.kb).map((e) => e.id),
            n = E.default.getCurrentUser();
        return (0, h.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(m.userTrialOffers).filter(
                  (n) =>
                      t.includes(n.trialId) &&
                      null != n.expiresAt &&
                      null != n.subscriptionTrial &&
                      e.includes(n.subscriptionTrial.skuId) &&
                      n.expiresAt.getTime() < Date.now() + (0, h.e1)(n) &&
                      this.shouldShowTrialOfferReminder(n),
              );
    }
    shouldShowDiscountOfferReminder(e) {
        return !I.ON.includes(e.discountId) || c({ location: "user_offer_store" });
    }
    getAlmostExpiringDiscountOffersForReminder(e) {
        let t = E.default.getCurrentUser();
        return (0, h.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(m.userDiscountOffers).filter(
                  (t) =>
                      null != t.expiresAt &&
                      null != t.discount &&
                      t.discount.planIds.some((t) => e.includes(I.hd[t].skuId)) &&
                      t.expiresAt.getTime() < Date.now() + (0, h.e1)(t) &&
                      this.shouldShowDiscountOfferReminder(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = E.default.getCurrentUser();
        return (0, h.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(m.userTrialOffers).filter((t) => e.includes(t.trialId) && null != t.expiresAt);
    }
    getUnacknowledgedDiscountOffers() {
        let e = E.default.getCurrentUser();
        return (0, h.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(m.userDiscountOffers ?? {}).filter(
                  (e) => !e.hasAcknowledged() && !I.ly.includes(e.discountId),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = E.default.getCurrentUser();
        return (0, h.TW)(t) && !this.canFractionalPremiumUserUseOffer()
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
        return A.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == f.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : m.userTrialOffers[e]?.referrer;
    }
    getState() {
        return m;
    }
    forceReset() {
        N();
    }
    lastFetchSuccessful() {
        return m.lastFetchSuccessful;
    }
    canTriggerUserOffer(e) {
        return m.shouldTriggerOffer && m.cooldownExpirationTimestamps[e] < Date.now();
    }
    getUptimeForTrigger() {
        return Math.floor((performance.now() - T) / 1e3);
    }
}
let D = new y(s.h, {
    BILLING_USER_OFFER_FETCH_START: function () {
        m.isFetching = !0;
    },
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        (null != t ? (m.userTrialOffers[t.trialId] = t) : (m.userTrialOffers = {}),
            (m.userOffersLastFetchedAtDate = Date.now()));
    },
    BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscountOffer: n, shouldTriggerOffer: i } = e;
        (null == t && null == n && N(!i),
            null != t
                ? ((m.userTrialOffers[t.trialId] = t), (m.userDiscountOffers = {}))
                : null != n && ((m.userDiscountOffers[n.discountId] = n), (m.userTrialOffers = {})),
            (m.userOffersLastFetchedAtDate = Date.now()),
            (m.isFetching = !1),
            (m.lastFetchSuccessful = !0),
            (m.shouldTriggerOffer = i ?? !1));
    },
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
        (null != t ? (m.userTrialOffers[t.trialId] = t) : (m.userTrialOffers = {}),
            null != n
                ? (m.userDiscountOffers[n.discountId] = n)
                : null != i
                  ? (m.userDiscountOffers[i.discountId] = i)
                  : (m.userDiscountOffers = {}),
            (m.userOffersLastFetchedAtDate = Date.now()));
    },
    BILLING_USER_OFFER_FETCH_FAIL: function () {
        (N(), (m.userOffersLastFetchedAtDate = Date.now()), (m.isFetching = !1), (m.lastFetchSuccessful = !1));
    },
    BILLING_USER_OFFER_REDEEMED: function (e) {
        let { offerId: t } = e,
            n = Object.keys(m.userDiscountOffers).find((e) => m.userDiscountOffers[e].id === t);
        null != n && delete m.userDiscountOffers[n];
        let i = Object.keys(m.userTrialOffers).find((e) => m.userTrialOffers[e].id === t);
        return (null != i && delete m.userTrialOffers[i], !0);
    },
    BILLING_USER_OFFER_TRIGGER_ATTEMPT: function (e) {
        let { triggerType: t } = e;
        S(t);
    },
    BILLING_USER_OFFER_TRIGGER_SUCCESS: function (e) {
        let { triggerType: t, retryAfter: n, triggerSuccess: i, userTrialOffer: r, userDiscountOffer: a } = e;
        (S(t, n),
            null != r
                ? ((m.userTrialOffers[r.trialId] = r), (m.userDiscountOffers = {}), (m.shouldTriggerOffer = !1))
                : null != a
                  ? ((m.userDiscountOffers[a.discountId] = a), (m.userTrialOffers = {}), (m.shouldTriggerOffer = !1))
                  : !0 === i && (m.shouldTriggerOffer = !1),
            (m.userOffersLastFetchedAtDate = Date.now()),
            (m.isFetching = !1),
            (m.lastFetchSuccessful = !0));
    },
    LOGOUT: function () {
        N();
    },
});
