n.d(t, {
    Q: () => b,
    Z: () => y,
}),
    n(388685);
var r = n(512722),
    i = n.n(r),
    a = n(81825),
    o = n(491819),
    s = n(563089),
    l = n(358085),
    c = n(111361),
    u = n(146528),
    d = n(981631),
    f = n(362786),
    p = n(474936);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    return {
        id: e.id,
        planId: e.plan_id,
        quantity: e.quantity,
    };
}
class b extends a.Z {
    static createFromServer(e) {
        var t;
        return new b(
            g(
                m(
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
                        trialEndsAt: null != e.trial_ends_at ? new Date(e.trial_ends_at) : null,
                        items: e.items.map(E),
                        renewalMutations:
                            null != e.renewal_mutations
                                ? {
                                      items: e.renewal_mutations.items.map(E),
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
                    },
                    null != e.latest_invoice ? { latestInvoice: u.Z.createInvoiceFromServer(e.latest_invoice) } : {},
                ),
                {
                    eligiblePaymentGateways: null != (t = e.eligible_payment_gateways) ? t : null,
                    priceChange: null != e.price_change ? s.ZP.createFromServer(e.price_change) : null,
                },
            ),
        );
    }
    getCurrentSubscriptionPlanIdForGroup(e) {
        var t;
        return null == (t = this.items.find((t) => e.includes(t.planId))) ? void 0 : t.planId;
    }
    get isPremium() {
        return this.type === d.NYc.PREMIUM;
    }
    get planIdForCurrencies() {
        let e;
        return (
            this.isPremium
                ? (i()(this.planIdFromItems, "Premium subscription has no planId for currencies"),
                  (e = this.planIdFromItems))
                : (e = this.planId),
            e
        );
    }
    get planIdFromItems() {
        return this.getCurrentSubscriptionPlanIdForGroup(Object.values(p.Xh));
    }
    get premiumPlanIdFromItems() {
        return this.getCurrentSubscriptionPlanIdForGroup([...p.dJ]);
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === d.gg$.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === d.gg$.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isOnPlatformMatchingExternalPaymentGateway() {
        return (this.isPurchasedViaApple && (0, l.isIOS)()) || (this.isPurchasedViaGoogle && (0, l.isAndroid)());
    }
    get hasExternalPlanChange() {
        return (
            this.isPurchasedExternally &&
            null != this.renewalMutations &&
            this.paymentGatewayPlanId !== this.renewalMutations.paymentGatewayPlanId
        );
    }
    get hasPremiumNitroMonthly() {
        return null != this.items.find((e) => e.planId === p.Xh.PREMIUM_MONTH_TIER_2);
    }
    get isBoostOnly() {
        return this.items.every((e) => [p.Xh.PREMIUM_MONTH_GUILD, p.Xh.PREMIUM_YEAR_GUILD].includes(e.planId));
    }
    get isPausedOrPausePending() {
        return d.JwP.ALL_PAUSE.has(this.status);
    }
    get isPaused() {
        return this.status === d.O0b.PAUSED;
    }
    get isPausedForFractionalPremium() {
        return this.status === d.O0b.PAUSED && this.pauseReason === f.Id.FRACTIONAL_PREMIUM;
    }
    get isPausedAllowsUpdatesButNotResume() {
        return this.status === d.O0b.PAUSED && f.rN.CAN_MAKE_SUBSCRIPTION_UPDATES.has(this.pauseReason);
    }
    get isPausedAllowsResumeButNotUpdates() {
        return (
            this.status === d.O0b.PAUSED &&
            (null === this.pauseReason || !f.rN.CAN_MAKE_SUBSCRIPTION_UPDATES.has(this.pauseReason))
        );
    }
    get isEnded() {
        return this.status === d.O0b.ENDED;
    }
    get endedAt() {
        var e;
        return this.status !== d.O0b.ENDED
            ? null
            : (null == (e = this.metadata) ? void 0 : e.ended_at) != null
              ? new Date(this.metadata.ended_at)
              : this.currentPeriodEnd;
    }
    get isActive() {
        return this.status === d.O0b.ACTIVE;
    }
    get hasActiveTrial() {
        return null != this.trialId && null != this.trialEndsAt && new Date() < this.trialEndsAt;
    }
    get inReverseTrial() {
        return null != this.trialId && p.h8.includes(this.trialId) && null == this.paymentSourceId;
    }
    get premiumSince() {
        var e;
        return null != (e = this.streakStartedAt) ? e : this.createdAt;
    }
    get hasAnyPremiumNitro() {
        return this.items.some((e) => p.dJ.has(e.planId));
    }
    get hasAnyPremiumGroup() {
        return this.items.some((e) => e.planId === p.Xh.PREMIUM_GROUP_MONTH);
    }
    hasPremiumAtLeast(e) {
        return (
            !!this.isPremium &&
            this.items.some((t) => {
                let n = p.GP[t.planId];
                return (0, c.yd)(n.premiumType, e);
            })
        );
    }
    constructor(e) {
        super(),
            _(this, "id", void 0),
            _(this, "type", void 0),
            _(this, "items", void 0),
            _(this, "createdAt", void 0),
            _(this, "canceledAt", void 0),
            _(this, "currentPeriodStart", void 0),
            _(this, "currentPeriodEnd", void 0),
            _(this, "status", void 0),
            _(this, "paymentSourceId", void 0),
            _(this, "paymentGateway", void 0),
            _(this, "paymentGatewayPlanId", void 0),
            _(this, "paymentGatewaySubscriptionId", void 0),
            _(this, "trialId", void 0),
            _(this, "trialEndsAt", void 0),
            _(this, "renewalMutations", void 0),
            _(this, "streakStartedAt", void 0),
            _(this, "currency", void 0),
            _(this, "pauseEndsAt", void 0),
            _(this, "pauseReason", void 0),
            _(this, "planId", void 0),
            _(this, "additionalPlans", void 0),
            _(this, "metadata", void 0),
            _(this, "latestInvoice", void 0),
            _(this, "useStorekitResubscribe", void 0),
            _(this, "price", void 0),
            _(this, "userId", void 0),
            _(this, "eligiblePaymentGateways", void 0),
            _(this, "priceChange", void 0),
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
        let t = this.renewalMutations,
            n = e.items[0].planId,
            r = null;
        if (e.type === d.NYc.PREMIUM) {
            let i = p.GP[e.items[0].planId],
                a = i.interval,
                s = i.intervalCount;
            (n = (0, o.Xr)(e.items, a, s)), null != t && (r = (0, o.Xr)(t.items, a, s));
        } else null != t && t.items.length > 0 && (r = t.items[0].planId);
        (this.planId = n),
            (this.additionalPlans = e.items.filter((e) => e.planId !== n)),
            null != t && null != r && ((t.planId = r), (t.additionalPlans = t.items.filter((e) => e.planId !== r)));
    }
}
let y = b;
