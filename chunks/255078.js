n.d(t, {
    Q: () => _,
    Z: () => p
});
var i = n(512722),
    r = n.n(i),
    a = n(81825),
    s = n(491819),
    o = n(358085),
    l = n(146528),
    u = n(981631),
    c = n(474936);
function d(e, t, n) {
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
function f(e) {
    return {
        id: e.id,
        planId: e.plan_id,
        quantity: e.quantity
    };
}
class _ extends a.Z {
    static createFromServer(e) {
        return new _({
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
            trialEndsAt: e.trial_ends_at,
            items: e.items.map(f),
            renewalMutations:
                null != e.renewal_mutations
                    ? {
                          items: e.renewal_mutations.items.map(f),
                          paymentGatewayPlanId: e.renewal_mutations.payment_gateway_plan_id
                      }
                    : null,
            streakStartedAt: null != e.streak_started_at ? new Date(e.streak_started_at) : null,
            currency: e.currency,
            pauseEndsAt: null != e.pause_ends_at ? new Date(e.pause_ends_at) : null,
            metadata: e.metadata,
            useStorekitResubscribe: e.use_storekit_resubscribe,
            price: e.price,
            userId: e.user_id,
            ...(null != e.latest_invoice ? { latestInvoice: l.Z.createInvoiceFromServer(e.latest_invoice) } : {})
        });
    }
    getCurrentSubscriptionPlanIdForGroup(e) {
        var t;
        return null === (t = this.items.find((t) => e.includes(t.planId))) || void 0 === t ? void 0 : t.planId;
    }
    get isPremium() {
        return this.type === u.NYc.PREMIUM;
    }
    get planIdForCurrencies() {
        let e;
        return this.isPremium ? (r()(this.planIdFromItems, 'Premium subscription has no planId for currencies'), (e = this.planIdFromItems)) : (e = this.planId), e;
    }
    get planIdFromItems() {
        return this.getCurrentSubscriptionPlanIdForGroup(Object.values(c.Xh));
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === u.gg$.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === u.gg$.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isOnPlatformMatchingExternalPaymentGateway() {
        return (this.isPurchasedViaApple && (0, o.isIOS)()) || (this.isPurchasedViaGoogle && (0, o.isAndroid)());
    }
    get hasExternalPlanChange() {
        return this.isPurchasedExternally && null != this.renewalMutations && this.paymentGatewayPlanId !== this.renewalMutations.paymentGatewayPlanId;
    }
    get hasPremiumNitroMonthly() {
        return null != this.items.find((e) => e.planId === c.Xh.PREMIUM_MONTH_TIER_2);
    }
    get isBoostOnly() {
        return this.items.every((e) => [c.Xh.PREMIUM_MONTH_GUILD, c.Xh.PREMIUM_YEAR_GUILD].includes(e.planId));
    }
    get isPausedOrPausePending() {
        return u.JwP.ALL_PAUSE.has(this.status);
    }
    get isPaused() {
        return this.status === u.O0b.PAUSED;
    }
    get isEnded() {
        return this.status === u.O0b.ENDED;
    }
    get isActive() {
        return this.status === u.O0b.ACTIVE;
    }
    get inReverseTrial() {
        return null != this.trialId && c.h8.includes(this.trialId) && null == this.paymentSourceId;
    }
    get premiumSince() {
        var e;
        return null !== (e = this.streakStartedAt) && void 0 !== e ? e : this.createdAt;
    }
    constructor(e) {
        super(), d(this, 'id', void 0), d(this, 'type', void 0), d(this, 'items', void 0), d(this, 'createdAt', void 0), d(this, 'canceledAt', void 0), d(this, 'currentPeriodStart', void 0), d(this, 'currentPeriodEnd', void 0), d(this, 'status', void 0), d(this, 'paymentSourceId', void 0), d(this, 'paymentGateway', void 0), d(this, 'paymentGatewayPlanId', void 0), d(this, 'paymentGatewaySubscriptionId', void 0), d(this, 'trialId', void 0), d(this, 'trialEndsAt', void 0), d(this, 'renewalMutations', void 0), d(this, 'streakStartedAt', void 0), d(this, 'currency', void 0), d(this, 'pauseEndsAt', void 0), d(this, 'planId', void 0), d(this, 'additionalPlans', void 0), d(this, 'metadata', void 0), d(this, 'latestInvoice', void 0), d(this, 'useStorekitResubscribe', void 0), d(this, 'price', void 0), d(this, 'userId', void 0), (this.id = e.id), (this.type = e.type), (this.items = e.items), (this.createdAt = e.createdAt), (this.canceledAt = e.canceledAt), (this.currentPeriodStart = e.currentPeriodStart), (this.currentPeriodEnd = e.currentPeriodEnd), (this.status = e.status), (this.paymentSourceId = e.paymentSourceId), (this.paymentGateway = e.paymentGateway), (this.paymentGatewayPlanId = e.paymentGatewayPlanId), (this.paymentGatewaySubscriptionId = e.paymentGatewaySubscriptionId), (this.trialId = e.trialId), (this.trialEndsAt = e.trialEndsAt), (this.renewalMutations = e.renewalMutations), (this.currency = e.currency), (this.pauseEndsAt = e.pauseEndsAt), (this.metadata = e.metadata), (this.latestInvoice = e.latestInvoice), (this.useStorekitResubscribe = e.useStorekitResubscribe), (this.price = e.price), (this.userId = e.userId), (this.streakStartedAt = e.streakStartedAt);
        let t = this.renewalMutations,
            n = e.items[0].planId,
            i = null;
        if (e.type === u.NYc.PREMIUM) {
            let r = c.GP[e.items[0].planId],
                a = r.interval,
                o = r.intervalCount;
            (n = (0, s.Xr)(e.items, a, o)), null != t && (i = (0, s.Xr)(t.items, a, o));
        } else null != t && t.items.length > 0 && (i = t.items[0].planId);
        (this.planId = n), (this.additionalPlans = e.items.filter((e) => e.planId !== n)), null != t && null != i && ((t.planId = i), (t.additionalPlans = t.items.filter((e) => e.planId !== i)));
    }
}
let p = _;
