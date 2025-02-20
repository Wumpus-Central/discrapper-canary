n.d(t, { Z: () => d }), n(789020);
var r = n(913527),
    i = n.n(r),
    o = n(81825),
    a = n(630388),
    s = n(301766),
    l = n(474936);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = Object.freeze({
    PAYMENT_SOURCE_REQUIRED: 1,
    EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
    NOT_SELF_REDEEMABLE: 4
});
class d extends o.Z {
    static createFromServer(e) {
        return new d({
            userId: null != e.user ? e.user.id : null,
            code: e.code,
            skuId: e.sku_id,
            applicationId: e.application_id,
            uses: e.uses,
            maxUses: e.max_uses,
            storeListingId: null != e.store_listing ? e.store_listing.id : null,
            expiresAt: null != e.expires_at ? i()(e.expires_at) : null,
            redeemed: e.redeemed,
            subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
            subscriptionPlan: null != e.subscription_plan ? s.ZP.createFromServer(e.subscription_plan) : null,
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
                          skuId: e.subscription_trial.sku_id
                      }
                    : null,
            promotion:
                null != e.promotion
                    ? {
                          id: e.promotion.id,
                          startDate: e.promotion.start_date,
                          endDate: e.promotion.end_date,
                          inboundHeaderText: e.promotion.inbound_header_text,
                          inboundBodyText: e.promotion.inbound_body_text,
                          inboundHelpCenterLink: e.promotion.inbound_help_center_link
                      }
                    : null
        });
    }
    isExpired() {
        let e = this.expiresAt;
        return null != e && i()().isAfter(e);
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
        return (this.isSubscription && l.y7[this.skuId]) || null;
    }
    get isSelfRedeemable() {
        return !(0, a.yE)(this.flags, u.NOT_SELF_REDEEMABLE);
    }
    get isExistingPremiumSubscriptionDisallowed() {
        return (0, a.yE)(this.flags, u.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED);
    }
    get analyticsData() {
        return {
            gift_code: this.code,
            gift_code_max_uses: this.maxUses
        };
    }
    toString() {
        return this.code;
    }
    constructor(e) {
        super(), c(this, 'userId', void 0), c(this, 'code', void 0), c(this, 'skuId', void 0), c(this, 'applicationId', void 0), c(this, 'uses', void 0), c(this, 'maxUses', void 0), c(this, 'expiresAt', void 0), c(this, 'redeemed', void 0), c(this, 'storeListingId', void 0), c(this, 'subscriptionPlanId', void 0), c(this, 'subscriptionPlan', void 0), c(this, 'revoked', void 0), c(this, 'entitlementBranches', void 0), c(this, 'flags', void 0), c(this, 'subscriptionTrial', void 0), c(this, 'promotion', void 0), c(this, 'giftStyle', void 0), (this.userId = e.userId), (this.code = e.code), (this.skuId = e.skuId), (this.applicationId = e.applicationId), (this.uses = e.uses), (this.maxUses = e.maxUses), (this.expiresAt = e.expiresAt), (this.redeemed = e.redeemed), (this.storeListingId = e.storeListingId), (this.subscriptionPlanId = e.subscriptionPlanId), (this.subscriptionPlan = e.subscriptionPlan), (this.revoked = e.revoked), (this.entitlementBranches = e.entitlementBranches), (this.flags = e.flags), (this.subscriptionTrial = e.subscriptionTrial), (this.promotion = e.promotion), (this.giftStyle = e.giftStyle);
    }
}
