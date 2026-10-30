n.d(t, { A: () => u });
var i = n(931093),
    r = n(439372),
    a = n(773669),
    s = n(166403),
    l = n(962644),
    o = n(412260),
    d = n(818348);
class c extends r.A {
    actions = {
        POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
        EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this),
        IAP_PURCHASE_PRODUCT_SUCCESS: this.onMobilePurchaseSuccess.bind(this),
        GPLAY_PURCHASE_VERIFIED: this.onMobilePurchaseSuccess.bind(this),
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: this.onOfferUpdated.bind(this),
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: this.onOfferUpdated.bind(this),
        BILLING_REFERRAL_RESOLVE_SUCCESS: this.onOfferUpdated.bind(this),
        VIRTUAL_CURRENCY_REDEEM_SUCCESS: this.onVCRedeemed.bind(this),
    };
    stores = new Map()
        .set(a.default, this.onLocaleChanged.bind(this))
        .set(s.A, this.onSubscriptionStateChanged.bind(this))
        .set(o.A, this.onPromotionsFetchSettled.bind(this));
    lastSubscriptionStateSignature = null;
    hasPendingSubscriptionRefetch = !1;
    _terminate() {
        ((this.hasPendingSubscriptionRefetch = !1), (this.lastSubscriptionStateSignature = null));
    }
    onLocaleChanged() {
        null == o.A.lastFetchedActivePromotions ||
            (o.A.lastFetchedActivePromotionsLocale !== a.default.locale && (0, l.BE)(!1));
    }
    onPostConnectionOpen() {
        (0, l.BE)();
    }
    onSubscriptionStateChanged() {
        let e,
            t =
                null == (e = s.A.getSubscriptions(!1))
                    ? ""
                    : Object.values(e)
                          .filter((e) => e.type === d.rz.PREMIUM)
                          .map((e) => {
                              let t = e.items
                                  .map((e) => e.planId)
                                  .sort()
                                  .join("|");
                              return `${e.id}:${e.type}:${e.status}:${t}`;
                          })
                          .sort()
                          .join(","),
            n = null == this.lastSubscriptionStateSignature;
        if (t !== this.lastSubscriptionStateSignature && ((this.lastSubscriptionStateSignature = t), !n)) {
            if (o.A.isFetchingActivePromotions) {
                this.hasPendingSubscriptionRefetch = !0;
                return;
            }
            (0, l.BE)(!1);
        }
    }
    onPromotionsFetchSettled() {
        !this.hasPendingSubscriptionRefetch ||
            o.A.isFetchingActivePromotions ||
            ((this.hasPendingSubscriptionRefetch = !1), (0, l.BE)(!1));
    }
    onMobilePurchaseSuccess() {
        (0, l.BE)(!1);
    }
    onOfferUpdated() {
        (0, l.BE)(!1);
    }
    onVCRedeemed(e) {
        let { entitlements: t } = e;
        t.some((e) => e.type === i.z.FRACTIONAL_REDEMPTION) && (0, l.BE)(!1);
    }
}
let u = new c();
