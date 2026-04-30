"use strict";
n.d(t, { A: () => d });
var i = n(439372),
    r = n(287809),
    s = n(927578);
n(960851);
var a = n(962644),
    o = n(788868),
    l = n(652215),
    u = n(818348);
class c extends i.A {
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
    async onPostConnectionOpen() {
        (0, a.BE)(), await this.maybeFetchBogoPromotion();
    }
    maybeFetchBogoPromotion = async () => {
        let e = r.default.getCurrentUser();
        s.Ay.isPremiumExactly(e, o.PremiumTypes.TIER_2);
    };
    onSubscriptionUpdated(e) {
        let { subscription: t } = e;
        t.type === u.rz.PREMIUM && (0, a.BE)(!1);
    }
    onMobilePurchaseSuccess() {
        (0, a.BE)(!1);
    }
    onOfferUpdated() {
        (0, a.BE)(!1);
    }
    onVCRedeemed(e) {
        let { entitlements: t } = e;
        t.some((e) => e.type === l.zF_.FRACTIONAL_REDEMPTION) && (0, a.BE)(!1);
    }
}
let d = new c();
