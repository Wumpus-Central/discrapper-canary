"use strict";
n.d(t, { A: () => h });
var i = n(439372),
    r = n(773669),
    s = n(287809),
    a = n(428262);
n(960851);
var o = n(962644),
    l = n(374200),
    u = n(788868),
    c = n(652215),
    d = n(818348);
class _ extends i.A {
    actions = {
        POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
        EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this),
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: this.onSubscriptionUpdated.bind(this),
        IAP_PURCHASE_PRODUCT_SUCCESS: this.onMobilePurchaseSuccess.bind(this),
        GPLAY_PURCHASE_VERIFIED: this.onMobilePurchaseSuccess.bind(this),
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: this.onOfferUpdated.bind(this),
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: this.onOfferUpdated.bind(this),
        VIRTUAL_CURRENCY_REDEEM_SUCCESS: this.onVCRedeemed.bind(this),
    };
    stores = new Map().set(r.default, this.onLocaleChanged.bind(this));
    onLocaleChanged() {
        null == l.A.lastFetchedActivePromotions ||
            (l.A.lastFetchedActivePromotionsLocale !== r.default.locale && (0, o.BE)(!1));
    }
    async onPostConnectionOpen() {
        (0, o.BE)(), await this.maybeFetchBogoPromotion();
    }
    maybeFetchBogoPromotion = async () => {
        let e = s.default.getCurrentUser();
        a.Ay.isPremiumExactly(e, u.PremiumTypes.TIER_2);
    };
    onSubscriptionUpdated(e) {
        let { subscription: t } = e;
        t.type === d.rz.PREMIUM && (0, o.BE)(!1);
    }
    onMobilePurchaseSuccess() {
        (0, o.BE)(!1);
    }
    onOfferUpdated() {
        (0, o.BE)(!1);
    }
    onVCRedeemed(e) {
        let { entitlements: t } = e;
        t.some((e) => e.type === c.zF_.FRACTIONAL_REDEMPTION) && (0, o.BE)(!1);
    }
}
let h = new _();
