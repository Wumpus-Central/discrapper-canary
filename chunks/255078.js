n.d(t, {
    Q: () => h,
    Z: () => g
});
var r = n(512722),
    i = n.n(r),
    o = n(81825),
    a = n(491819),
    s = n(358085),
    l = n(146528),
    c = n(981631),
    u = n(362786),
    d = n(474936);
function f(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    return {
        id: e.id,
        planId: e.plan_id,
        quantity: e.quantity
    };
}
class h extends o.Z {
    static createFromServer(e) {
        return new h(
            _(
                {
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
                    items: e.items.map(p),
                    renewalMutations:
                        null != e.renewal_mutations
                            ? {
                                  items: e.renewal_mutations.items.map(p),
                                  paymentGatewayPlanId: e.renewal_mutations.payment_gateway_plan_id
                              }
                            : null,
                    streakStartedAt: null != e.streak_started_at ? new Date(e.streak_started_at) : null,
                    currency: e.currency,
                    pauseEndsAt: null != e.pause_ends_at ? new Date(e.pause_ends_at) : null,
                    pauseReason: e.pause_reason,
                    metadata: e.metadata,
                    useStorekitResubscribe: e.use_storekit_resubscribe,
                    price: e.price,
                    userId: e.user_id
                },
                null != e.latest_invoice ? { latestInvoice: l.Z.createInvoiceFromServer(e.latest_invoice) } : {}
            )
        );
    }
    getCurrentSubscriptionPlanIdForGroup(e) {
        var t;
        return null === (t = this.items.find((t) => e.includes(t.planId))) || void 0 === t ? void 0 : t.planId;
    }
    get isPremium() {
        return this.type === c.NYc.PREMIUM;
    }
    get planIdForCurrencies() {
        let e;
        return this.isPremium ? (i()(this.planIdFromItems, 'Premium subscription has no planId for currencies'), (e = this.planIdFromItems)) : (e = this.planId), e;
    }
    get planIdFromItems() {
        return this.getCurrentSubscriptionPlanIdForGroup(Object.values(d.Xh));
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === c.gg$.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === c.gg$.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isOnPlatformMatchingExternalPaymentGateway() {
        return (this.isPurchasedViaApple && (0, s.isIOS)()) || (this.isPurchasedViaGoogle && (0, s.isAndroid)());
    }
    get hasExternalPlanChange() {
        return this.isPurchasedExternally && null != this.renewalMutations && this.paymentGatewayPlanId !== this.renewalMutations.paymentGatewayPlanId;
    }
    get hasPremiumNitroMonthly() {
        return null != this.items.find((e) => e.planId === d.Xh.PREMIUM_MONTH_TIER_2);
    }
    get isBoostOnly() {
        return this.items.every((e) => [d.Xh.PREMIUM_MONTH_GUILD, d.Xh.PREMIUM_YEAR_GUILD].includes(e.planId));
    }
    get isPausedOrPausePending() {
        return c.JwP.ALL_PAUSE.has(this.status);
    }
    get isPaused() {
        return this.status === c.O0b.PAUSED;
    }
    get isPausedAllowsUpdatesButNotResume() {
        return this.status === c.O0b.PAUSED && u.rN.CAN_MAKE_SUBSCRIPTION_UPDATES.has(this.pauseReason);
    }
    get isPausedAllowsResumeButNotUpdates() {
        return this.status === c.O0b.PAUSED && (null === this.pauseReason || !u.rN.CAN_MAKE_SUBSCRIPTION_UPDATES.has(this.pauseReason));
    }
    get isEnded() {
        return this.status === c.O0b.ENDED;
    }
    get isActive() {
        return this.status === c.O0b.ACTIVE;
    }
    get inReverseTrial() {
        return null != this.trialId && d.h8.includes(this.trialId) && null == this.paymentSourceId;
    }
    get premiumSince() {
        var e;
        return null !== (e = this.streakStartedAt) && void 0 !== e ? e : this.createdAt;
    }
    constructor(e) {
        super(), f(this, 'id', void 0), f(this, 'type', void 0), f(this, 'items', void 0), f(this, 'createdAt', void 0), f(this, 'canceledAt', void 0), f(this, 'currentPeriodStart', void 0), f(this, 'currentPeriodEnd', void 0), f(this, 'status', void 0), f(this, 'paymentSourceId', void 0), f(this, 'paymentGateway', void 0), f(this, 'paymentGatewayPlanId', void 0), f(this, 'paymentGatewaySubscriptionId', void 0), f(this, 'trialId', void 0), f(this, 'trialEndsAt', void 0), f(this, 'renewalMutations', void 0), f(this, 'streakStartedAt', void 0), f(this, 'currency', void 0), f(this, 'pauseEndsAt', void 0), f(this, 'pauseReason', void 0), f(this, 'planId', void 0), f(this, 'additionalPlans', void 0), f(this, 'metadata', void 0), f(this, 'latestInvoice', void 0), f(this, 'useStorekitResubscribe', void 0), f(this, 'price', void 0), f(this, 'userId', void 0), (this.id = e.id), (this.type = e.type), (this.items = e.items), (this.createdAt = e.createdAt), (this.canceledAt = e.canceledAt), (this.currentPeriodStart = e.currentPeriodStart), (this.currentPeriodEnd = e.currentPeriodEnd), (this.status = e.status), (this.paymentSourceId = e.paymentSourceId), (this.paymentGateway = e.paymentGateway), (this.paymentGatewayPlanId = e.paymentGatewayPlanId), (this.paymentGatewaySubscriptionId = e.paymentGatewaySubscriptionId), (this.trialId = e.trialId), (this.trialEndsAt = e.trialEndsAt), (this.renewalMutations = e.renewalMutations), (this.currency = e.currency), (this.pauseEndsAt = e.pauseEndsAt), (this.pauseReason = e.pauseReason), (this.metadata = e.metadata), (this.latestInvoice = e.latestInvoice), (this.useStorekitResubscribe = e.useStorekitResubscribe), (this.price = e.price), (this.userId = e.userId), (this.streakStartedAt = e.streakStartedAt);
        let t = this.renewalMutations,
            n = e.items[0].planId,
            r = null;
        if (e.type === c.NYc.PREMIUM) {
            let i = d.GP[e.items[0].planId],
                o = i.interval,
                s = i.intervalCount;
            (n = (0, a.Xr)(e.items, o, s)), null != t && (r = (0, a.Xr)(t.items, o, s));
        } else null != t && t.items.length > 0 && (r = t.items[0].planId);
        (this.planId = n), (this.additionalPlans = e.items.filter((e) => e.planId !== n)), null != t && null != r && ((t.planId = r), (t.additionalPlans = t.items.filter((e) => e.planId !== r)));
    }
}
let g = h;
