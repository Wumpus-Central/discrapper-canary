n.d(t, { A: () => d }), n(938796);
var i = n(989349),
    r = n.n(i),
    a = n(665260),
    s = n(315069),
    _ = n(835095),
    l = n(832946),
    o = n(788868);
let E = Object.freeze({
    PAYMENT_SOURCE_REQUIRED: 1,
    EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
    NOT_SELF_REDEEMABLE: 4,
});
class d extends s.A {
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
    static createFromServer(e) {
        return new d({
            userId: null != e.user ? e.user.id : null,
            code: e.code,
            skuId: e.sku_id,
            applicationId: e.application_id,
            uses: e.uses,
            maxUses: e.max_uses,
            storeListingId: null != e.store_listing ? e.store_listing.id : null,
            expiresAt: null != e.expires_at ? r()(e.expires_at) : null,
            redeemed: e.redeemed,
            subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
            subscriptionPlan: null != e.subscription_plan ? l.Ay.createFromServer(e.subscription_plan) : null,
            revoked: !1,
            entitlementBranches: null != e.entitlement_branches ? e.entitlement_branches : null,
            flags: null != e.flags ? e.flags : 0,
            giftStyle: e.gift_style,
            subscriptionTrial:
                null != e.subscription_trial
                    ? {
                          id: e.subscription_trial.id,
                          interval: e.subscription_trial.interval,
                          intervalCount: e.subscription_trial.interval_count,
                          skuId: e.subscription_trial.sku_id,
                      }
                    : null,
            promotion: null != e.promotion ? _.A.createFromServer(e.promotion) : null,
        });
    }
    constructor(e) {
        super(),
            (this.userId = e.userId),
            (this.code = e.code),
            (this.skuId = e.skuId),
            (this.applicationId = e.applicationId),
            (this.uses = e.uses),
            (this.maxUses = e.maxUses),
            (this.expiresAt = e.expiresAt),
            (this.redeemed = e.redeemed),
            (this.storeListingId = e.storeListingId),
            (this.subscriptionPlanId = e.subscriptionPlanId),
            (this.subscriptionPlan = e.subscriptionPlan),
            (this.revoked = e.revoked),
            (this.entitlementBranches = e.entitlementBranches),
            (this.flags = e.flags),
            (this.subscriptionTrial = e.subscriptionTrial),
            (this.promotion = e.promotion),
            (this.giftStyle = e.giftStyle);
    }
    isExpired() {
        let e = this.expiresAt;
        return null != e && r()().isAfter(e);
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
        return this.isSubscription ? (o.WN[this.skuId] ?? null) : null;
    }
    get isSelfRedeemable() {
        return !(0, a.Lt)(this.flags, E.NOT_SELF_REDEEMABLE);
    }
    get isExistingPremiumSubscriptionDisallowed() {
        return (0, a.Lt)(this.flags, E.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED);
    }
    get analyticsData() {
        return { gift_code: this.code, gift_code_max_uses: this.maxUses };
    }
    toString() {
        return this.code;
    }
}
