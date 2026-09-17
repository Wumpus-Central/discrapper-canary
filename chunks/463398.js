n.d(t, { A: () => u });
var i = n(439372),
    r = n(773669),
    a = n(166403),
    s = n(962644),
    l = n(412260),
    o = n(652215),
    d = n(818348);
class c extends i.A {
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
        .set(r.default, this.onLocaleChanged.bind(this))
        .set(a.A, this.onSubscriptionStateChanged.bind(this))
        .set(l.A, this.onPromotionsFetchSettled.bind(this));
    lastSubscriptionStateSignature = null;
    hasPendingSubscriptionRefetch = !1;
    _terminate() {
        ((this.hasPendingSubscriptionRefetch = !1), (this.lastSubscriptionStateSignature = null));
    }
    onLocaleChanged() {
        null == l.A.lastFetchedActivePromotions ||
            (l.A.lastFetchedActivePromotionsLocale !== r.default.locale && (0, s.BE)(!1));
    }
    onPostConnectionOpen() {
        (0, s.BE)();
    }
    onSubscriptionStateChanged() {
        let e,
            t =
                null == (e = a.A.getSubscriptions(!1))
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
            if (l.A.isFetchingActivePromotions) {
                this.hasPendingSubscriptionRefetch = !0;
                return;
            }
            (0, s.BE)(!1);
        }
    }
    onPromotionsFetchSettled() {
        !this.hasPendingSubscriptionRefetch ||
            l.A.isFetchingActivePromotions ||
            ((this.hasPendingSubscriptionRefetch = !1), (0, s.BE)(!1));
    }
    onMobilePurchaseSuccess() {
        (0, s.BE)(!1);
    }
    onOfferUpdated() {
        (0, s.BE)(!1);
    }
    onVCRedeemed(e) {
        let { entitlements: t } = e;
        t.some((e) => e.type === o.zF_.FRACTIONAL_REDEMPTION) && (0, s.BE)(!1);
    }
}
let u = new c();
