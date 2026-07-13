"use strict";
n.d(t, { A: () => E });
var i = n(439372),
    r = n(773669),
    a = n(287809),
    s = n(428262);
n(960851);
var l = n(962644),
    o = n(412260),
    d = n(202541),
    c = n(652215),
    u = n(818348);
class _ extends i.A {
    actions = {
        POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
        EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this),
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: this.onSubscriptionUpdated.bind(this),
        IAP_PURCHASE_PRODUCT_SUCCESS: this.onMobilePurchaseSuccess.bind(this),
        GPLAY_PURCHASE_VERIFIED: this.onMobilePurchaseSuccess.bind(this),
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: this.onOfferUpdated.bind(this),
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: this.onOfferUpdated.bind(this),
        BILLING_REFERRAL_RESOLVE_SUCCESS: this.onOfferUpdated.bind(this),
        VIRTUAL_CURRENCY_REDEEM_SUCCESS: this.onVCRedeemed.bind(this),
    };
    stores = new Map().set(r.default, this.onLocaleChanged.bind(this));
    onLocaleChanged() {
        null == o.A.lastFetchedActivePromotions ||
            (o.A.lastFetchedActivePromotionsLocale !== r.default.locale && (0, l.BE)(!1));
    }
    async onPostConnectionOpen() {
        (0, l.BE)(), await this.maybeFetchBogoPromotion();
    }
    maybeFetchBogoPromotion = async () => {
        let e = a.default.getCurrentUser();
        s.Ay.isPremiumExactly(e, d.PremiumTypes.TIER_2);
    };
    onSubscriptionUpdated(e) {
        let { subscription: t } = e;
        t.type === u.rz.PREMIUM && (0, l.BE)(!1);
    }
    onMobilePurchaseSuccess() {
        (0, l.BE)(!1);
    }
    onOfferUpdated() {
        (0, l.BE)(!1);
    }
    onVCRedeemed(e) {
        let { entitlements: t } = e;
        t.some((e) => e.type === c.zF_.FRACTIONAL_REDEMPTION) && (0, l.BE)(!1);
    }
}
let E = new _();
