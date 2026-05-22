"use strict";
n.d(t, { h: () => E, A: () => m });
var i = n(284009),
    r = n.n(i),
    s = n(315069),
    a = n(981088),
    o = n(367888);
class l extends s.A {
    userId;
    subscriptionId;
    oldCurrency;
    oldPrice;
    newCurrency;
    newPrice;
    priceChangeMode;
    expectedChargeTime;
    priceChangeId;
    static createFromServer(e) {
        return new l({
            userId: e.user_id,
            subscriptionId: e.subscription_id,
            oldCurrency: e.old_currency,
            oldPrice: e.old_price,
            newCurrency: e.new_currency,
            newPrice: e.new_price,
            priceChangeMode: e.price_change_mode,
            expectedChargeTime: e.expected_charge_time,
            priceChangeId: e.price_change_id,
        });
    }
    constructor(e) {
        super(),
            (this.userId = e.userId),
            (this.subscriptionId = e.subscriptionId),
            (this.oldCurrency = e.oldCurrency),
            (this.oldPrice = e.oldPrice),
            (this.newCurrency = e.newCurrency),
            (this.newPrice = e.newPrice),
            (this.priceChangeMode = e.priceChangeMode),
            (this.expectedChargeTime = e.expectedChargeTime),
            (this.priceChangeId = e.priceChangeId);
    }
    get isPriceIncrease() {
        return "PRICE_INCREASE" === this.priceChangeMode || "OPT_OUT_PRICE_INCREASE" === this.priceChangeMode;
    }
    get isOptOutPriceIncrease() {
        return "OPT_OUT_PRICE_INCREASE" === this.priceChangeMode;
    }
    get isPriceDecrease() {
        return "PRICE_DECREASE" === this.priceChangeMode;
    }
    get isInFuture() {
        return this.expectedChargeTime > new Date().toISOString();
    }
}
var u = n(723702),
    c = n(474090),
    d = n(570221),
    _ = n(652215),
    f = n(601107),
    h = n(788868);
function p(e) {
    return { id: e.id, planId: e.plan_id, quantity: e.quantity };
}
class E extends s.A {
    id;
    type;
    items;
    createdAt;
    canceledAt;
    currentPeriodStart;
    currentPeriodEnd;
    status;
    paymentSourceId;
    paymentGateway;
    paymentGatewayPlanId;
    paymentGatewaySubscriptionId;
    trialId;
    trialEndsAt;
    renewalMutations;
    streakStartedAt;
    currency;
    pauseEndsAt;
    pauseReason;
    planId;
    additionalPlans;
    metadata;
    latestInvoice;
    useStorekitResubscribe;
    price;
    userId;
    eligiblePaymentGateways;
    priceChange;
    static createFromServer(e) {
        return new E({
            id: e.id,
            type: e.type,
            createdAt: new Date(e.created_at),
            canceledAt: null != e.canceled_at ? new Date(e.canceled_at) : null,
            currentPeriodStart: new Date(e.current_period_start),
            currentPeriodEnd: new Date(e.current_period_end),
            status: e.status,
            paymentSourceId: e.payment_source_id,
            paymentGateway: e.payment_gateway,
            paymentGatewayPlanId: e.payment_gateway_plan_id,
            paymentGatewaySubscriptionId: e.payment_gateway_subscription_id,
            trialId: e.trial_id,
            trialEndsAt: null != e.trial_ends_at ? new Date(e.trial_ends_at) : null,
            items: e.items.map(p),
            renewalMutations:
                null != e.renewal_mutations
                    ? {
                          items: e.renewal_mutations.items.map(p),
                          paymentGatewayPlanId: e.renewal_mutations.payment_gateway_plan_id,
                      }
                    : null,
            streakStartedAt: null != e.streak_started_at ? new Date(e.streak_started_at) : null,
            currency: e.currency,
            pauseEndsAt: null != e.pause_ends_at ? new Date(e.pause_ends_at) : null,
            pauseReason: e.pause_reason,
            metadata: e.metadata,
            useStorekitResubscribe: e.use_storekit_resubscribe,
            price: e.price,
            userId: e.user_id,
            ...(null != e.latest_invoice ? { latestInvoice: d.A.createInvoiceFromServer(e.latest_invoice) } : {}),
            eligiblePaymentGateways: e.eligible_payment_gateways ?? null,
            priceChange: null != e.price_change ? l.createFromServer(e.price_change) : null,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.type = e.type),
            (this.items = e.items),
            (this.createdAt = e.createdAt),
            (this.canceledAt = e.canceledAt),
            (this.currentPeriodStart = e.currentPeriodStart),
            (this.currentPeriodEnd = e.currentPeriodEnd),
            (this.status = e.status),
            (this.paymentSourceId = e.paymentSourceId),
            (this.paymentGateway = e.paymentGateway),
            (this.paymentGatewayPlanId = e.paymentGatewayPlanId),
            (this.paymentGatewaySubscriptionId = e.paymentGatewaySubscriptionId),
            (this.trialId = e.trialId),
            (this.trialEndsAt = e.trialEndsAt),
            (this.renewalMutations = e.renewalMutations),
            (this.currency = e.currency),
            (this.pauseEndsAt = e.pauseEndsAt),
            (this.pauseReason = e.pauseReason),
            (this.metadata = e.metadata),
            (this.latestInvoice = e.latestInvoice),
            (this.useStorekitResubscribe = e.useStorekitResubscribe),
            (this.price = e.price),
            (this.userId = e.userId),
            (this.streakStartedAt = e.streakStartedAt),
            (this.eligiblePaymentGateways = e.eligiblePaymentGateways),
            (this.priceChange = e.priceChange);
        const t = this.renewalMutations;
        let n = e.items[0].planId,
            i = null;
        if (e.type === _.rzx.PREMIUM) {
            const r = h.hd[e.items[0].planId],
                s = r.interval,
                a = r.intervalCount;
            (n = (0, o.a9)(e.items, s, a)), null != t && (i = (0, o.a9)(t.items, s, a));
        } else null != t && t.items.length > 0 && (i = t.items[0].planId);
        (this.planId = n),
            (this.additionalPlans = e.items.filter((e) => e.planId !== n)),
            null != t && null != i && ((t.planId = i), (t.additionalPlans = t.items.filter((e) => e.planId !== i)));
    }
    getCurrentSubscriptionPlanIdForGroup(e) {
        return this.items.find((t) => e.includes(t.planId))?.planId;
    }
    get isPremium() {
        return this.type === _.rzx.PREMIUM;
    }
    get isACOM() {
        return this.paymentGateway === _.kM_.APPLE_ADVANCED_COMMERCE;
    }
    get planIdForCurrencies() {
        let e;
        return (
            this.isPremium
                ? (r()(this.planIdFromItems, "Premium subscription has no planId for currencies"),
                  (e = this.planIdFromItems))
                : (e = this.planId),
            e
        );
    }
    get planIdFromItems() {
        return this.getCurrentSubscriptionPlanIdForGroup(Object.values(h.gD));
    }
    get premiumPlanIdFromItems() {
        return this.getCurrentSubscriptionPlanIdForGroup([...h.JM]);
    }
    get isPurchasedViaDesktop() {
        return null == this.paymentGateway;
    }
    get isPurchasedViaAppleGeneric() {
        return this.paymentGateway === _.kM_.APPLE_PARTNER || this.isACOM;
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === _.kM_.APPLE || this.isACOM;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === _.kM_.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isOnPlatformMatchingExternalPaymentGateway() {
        return (this.isPurchasedViaApple && (0, u.isIOS)()) || (this.isPurchasedViaGoogle && (0, a.xv)());
    }
    get hasExternalPlanChange() {
        return (
            this.isPurchasedExternally &&
            null != this.renewalMutations &&
            this.paymentGatewayPlanId !== this.renewalMutations.paymentGatewayPlanId
        );
    }
    get hasPremiumNitroMonthly() {
        return null != this.items.find((e) => e.planId === h.gD.PREMIUM_MONTH_TIER_2);
    }
    get isBoostOnly() {
        return this.items.every((e) => [h.gD.PREMIUM_MONTH_GUILD, h.gD.PREMIUM_YEAR_GUILD].includes(e.planId));
    }
    get isPausedOrPausePending() {
        return _.Uyk.ALL_PAUSE.has(this.status);
    }
    get isPaused() {
        return this.status === _.Dmq.PAUSED;
    }
    get isPausedForFractionalPremium() {
        return this.status === _.Dmq.PAUSED && this.pauseReason === f.qf.FRACTIONAL_PREMIUM;
    }
    get isPausedAllowsUpdatesButNotResume() {
        return this.status === _.Dmq.PAUSED && f.FZ.CAN_MAKE_SUBSCRIPTION_UPDATES.has(this.pauseReason);
    }
    get isPausedAllowsResumeButNotUpdates() {
        return (
            this.status === _.Dmq.PAUSED &&
            (null === this.pauseReason || !f.FZ.CAN_MAKE_SUBSCRIPTION_UPDATES.has(this.pauseReason))
        );
    }
    get isEnded() {
        return this.status === _.Dmq.ENDED;
    }
    get endedAt() {
        return this.status !== _.Dmq.ENDED
            ? null
            : this.metadata?.ended_at != null
              ? new Date(this.metadata.ended_at)
              : this.currentPeriodEnd;
    }
    get isActive() {
        return this.status === _.Dmq.ACTIVE;
    }
    get statusAllowsPerks() {
        return _.Uyk.ALLOW_PERKS.has(this.status);
    }
    get hasActiveTrial() {
        return null != this.trialId && null != this.trialEndsAt && new Date() < this.trialEndsAt;
    }
    get premiumSince() {
        return this.streakStartedAt ?? this.createdAt;
    }
    get hasAnyPremiumNitro() {
        return this.items.some((e) => h.JM.has(e.planId));
    }
    get hasAnyPremiumGroup() {
        return this.items.some((e) => e.planId === h.gD.PREMIUM_GROUP_MONTH);
    }
    hasPremiumAtLeast(e) {
        return (
            !!this.isPremium &&
            this.items.some((t) => {
                let n = h.hd[t.planId];
                return (0, c.CC)(n.premiumType, e);
            })
        );
    }
}
let m = E;
