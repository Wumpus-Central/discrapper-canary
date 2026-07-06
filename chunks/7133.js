i.d(e, { A: () => u }), i(938796);
var s = i(989349),
    r = i.n(s),
    n = i(665260),
    l = i(315069),
    a = i(835095),
    o = i(832946),
    d = i(202541);
let p = Object.freeze({
    PAYMENT_SOURCE_REQUIRED: 1,
    EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
    NOT_SELF_REDEEMABLE: 4,
});
class u extends l.A {
    userId;
    code;
    skuId;
    applicationId;
    uses;
    maxUses;
    expiresAt;
    redeemed;
    storeListingId;
    subscriptionPlanId;
    subscriptionPlan;
    revoked;
    entitlementBranches;
    flags;
    subscriptionTrial;
    promotion;
    giftStyle;
    static createFromServer(t) {
        return new u({
            userId: null != t.user ? t.user.id : null,
            code: t.code,
            skuId: t.sku_id,
            applicationId: t.application_id,
            uses: t.uses,
            maxUses: t.max_uses,
            storeListingId: null != t.store_listing ? t.store_listing.id : null,
            expiresAt: null != t.expires_at ? r()(t.expires_at) : null,
            redeemed: t.redeemed,
            subscriptionPlanId: null != t.subscription_plan ? t.subscription_plan.id : t.subscription_plan_id,
            subscriptionPlan: null != t.subscription_plan ? o.Ay.createFromServer(t.subscription_plan) : null,
            revoked: !1,
            entitlementBranches: null != t.entitlement_branches ? t.entitlement_branches : null,
            flags: null != t.flags ? t.flags : 0,
            giftStyle: t.gift_style,
            subscriptionTrial:
                null != t.subscription_trial
                    ? {
                          id: t.subscription_trial.id,
                          interval: t.subscription_trial.interval,
                          intervalCount: t.subscription_trial.interval_count,
                          skuId: t.subscription_trial.sku_id,
                      }
                    : null,
            promotion: null != t.promotion ? a.A.createFromServer(t.promotion) : null,
        });
    }
    constructor(t) {
        super(),
            (this.userId = t.userId),
            (this.code = t.code),
            (this.skuId = t.skuId),
            (this.applicationId = t.applicationId),
            (this.uses = t.uses),
            (this.maxUses = t.maxUses),
            (this.expiresAt = t.expiresAt),
            (this.redeemed = t.redeemed),
            (this.storeListingId = t.storeListingId),
            (this.subscriptionPlanId = t.subscriptionPlanId),
            (this.subscriptionPlan = t.subscriptionPlan),
            (this.revoked = t.revoked),
            (this.entitlementBranches = t.entitlementBranches),
            (this.flags = t.flags),
            (this.subscriptionTrial = t.subscriptionTrial),
            (this.promotion = t.promotion),
            (this.giftStyle = t.giftStyle);
    }
    isExpired() {
        let t = this.expiresAt;
        return null != t && r()().isAfter(t);
    }
    get hasMultipleCopies() {
        return this.maxUses > 1;
    }
    get isClaimed() {
        return this.uses >= this.maxUses;
    }
    get remainingUses() {
        return this.maxUses - this.uses;
    }
    get isSubscription() {
        return null != this.subscriptionPlanId;
    }
    get premiumSubscriptionType() {
        return this.isSubscription ? (d.WN[this.skuId] ?? null) : null;
    }
    get isSelfRedeemable() {
        return !(0, n.Lt)(this.flags, p.NOT_SELF_REDEEMABLE);
    }
    get isExistingPremiumSubscriptionDisallowed() {
        return (0, n.Lt)(this.flags, p.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED);
    }
    get analyticsData() {
        return { gift_code: this.code, gift_code_max_uses: this.maxUses };
    }
    toString() {
        return this.code;
    }
}
