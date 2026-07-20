"use strict";
n.d(t, { A: () => E });
var i = n(439372),
    r = n(773669),
    a = n(287809),
    s = n(166403),
    l = n(428262);
n(960851);
var o = n(962644),
    d = n(412260),
    c = n(202541),
    u = n(652215);
class _ extends i.A {
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
        .set(s.A, this.onSubscriptionStateChanged.bind(this))
        .set(d.A, this.onPromotionsFetchSettled.bind(this));
    lastSubscriptionStateSignature = null;
    hasPendingSubscriptionRefetch = !1;
    _terminate() {
        (this.hasPendingSubscriptionRefetch = !1), (this.lastSubscriptionStateSignature = null);
    }
    onLocaleChanged() {
        null == d.A.lastFetchedActivePromotions ||
            (d.A.lastFetchedActivePromotionsLocale !== r.default.locale && (0, o.BE)(!1));
    }
    async onPostConnectionOpen() {
        (0, o.BE)(), await this.maybeFetchBogoPromotion();
    }
    maybeFetchBogoPromotion = async () => {
        let e = a.default.getCurrentUser();
        l.Ay.isPremiumExactly(e, c.PremiumTypes.TIER_2);
    };
    onSubscriptionStateChanged() {
        let e,
            t =
                null == (e = s.A.getSubscriptions(!1))
                    ? ""
                    : Object.values(e)
                          .map((e) => {
                              let t = e.items
                                  .map((e) => e.planId)
                                  .sort()
                                  .join("|");
                              return `${e.id}:${e.type}:${e.status}:${t}`;
                          })
                          .sort()
                          .join(",");
        if (
            t !== this.lastSubscriptionStateSignature &&
            ((this.lastSubscriptionStateSignature = t), null != d.A.lastFetchedActivePromotions)
        ) {
            if (d.A.isFetchingActivePromotions) {
                this.hasPendingSubscriptionRefetch = !0;
                return;
            }
            (0, o.BE)(!1);
        }
    }
    onPromotionsFetchSettled() {
        !this.hasPendingSubscriptionRefetch ||
            d.A.isFetchingActivePromotions ||
            ((this.hasPendingSubscriptionRefetch = !1), (0, o.BE)(!1));
    }
    onMobilePurchaseSuccess() {
        (0, o.BE)(!1);
    }
    onOfferUpdated() {
        (0, o.BE)(!1);
    }
    onVCRedeemed(e) {
        let { entitlements: t } = e;
        t.some((e) => e.type === u.zF_.FRACTIONAL_REDEMPTION) && (0, o.BE)(!1);
    }
}
let E = new _();
