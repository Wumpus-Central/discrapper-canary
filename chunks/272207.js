n.d(t, {
    A: () => y,
    h: () => b,
}),
    n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(315069),
    s = n(367888),
    o = n(894972),
    l = n(723702),
    c = n(474090),
    u = n(654044),
    d = n(652215),
    f = n(601107),
    p = n(788868);

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

function h(e) {
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

function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
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
class b extends a.A {
    static createFromServer(e) {
        var t;
        return new b(
            g(
                h(
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
                    null != e.latest_invoice
                        ? {
                              latestInvoice: u.A.createInvoiceFromServer(e.latest_invoice),
                          }
                        : {},
                ),
                {
                    eligiblePaymentGateways: null != (t = e.eligible_payment_gateways) ? t : null,
                    priceChange: null != e.price_change ? o.Ay.createFromServer(e.price_change) : null,
                },
            ),
        );
    }
    getCurrentSubscriptionPlanIdForGroup(e) {
        var t;
        return null == (t = this.items.find((t) => e.includes(t.planId))) ? void 0 : t.planId;
    }
    get isPremium() {
        return this.type === d.rzx.PREMIUM;
    }
    get isACOM() {
        return this.paymentGateway === d.kM_.APPLE_ADVANCED_COMMERCE;
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
        return this.getCurrentSubscriptionPlanIdForGroup(Object.values(p.gD));
    }
    get premiumPlanIdFromItems() {
        return this.getCurrentSubscriptionPlanIdForGroup([...p.JM]);
    }
    get isPurchasedViaDesktop() {
        return null == this.paymentGateway;
    }
    get isPurchasedViaAppleGeneric() {
        return this.paymentGateway === d.kM_.APPLE_PARTNER || this.isACOM;
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === d.kM_.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === d.kM_.GOOGLE;
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
        return null != this.items.find((e) => e.planId === p.gD.PREMIUM_MONTH_TIER_2);
    }
    get isBoostOnly() {
        return this.items.every((e) => [p.gD.PREMIUM_MONTH_GUILD, p.gD.PREMIUM_YEAR_GUILD].includes(e.planId));
    }
    get isPausedOrPausePending() {
        return d.Uyk.ALL_PAUSE.has(this.status);
    }
    get isPaused() {
        return this.status === d.Dmq.PAUSED;
    }
    get isPausedForFractionalPremium() {
        return this.status === d.Dmq.PAUSED && this.pauseReason === f.qf.FRACTIONAL_PREMIUM;
    }
    get isPausedAllowsUpdatesButNotResume() {
        return this.status === d.Dmq.PAUSED && f.FZ.CAN_MAKE_SUBSCRIPTION_UPDATES.has(this.pauseReason);
    }
    get isPausedAllowsResumeButNotUpdates() {
        return (
            this.status === d.Dmq.PAUSED &&
            (null === this.pauseReason || !f.FZ.CAN_MAKE_SUBSCRIPTION_UPDATES.has(this.pauseReason))
        );
    }
    get isEnded() {
        return this.status === d.Dmq.ENDED;
    }
    get endedAt() {
        var e;
        return this.status !== d.Dmq.ENDED
            ? null
            : (null == (e = this.metadata) ? void 0 : e.ended_at) != null
              ? new Date(this.metadata.ended_at)
              : this.currentPeriodEnd;
    }
    get isActive() {
        return this.status === d.Dmq.ACTIVE;
    }
    get hasActiveTrial() {
        return null != this.trialId && null != this.trialEndsAt && new Date() < this.trialEndsAt;
    }
    get inReverseTrial() {
        return null != this.trialId && p.BT.includes(this.trialId) && null == this.paymentSourceId;
    }
    get premiumSince() {
        var e;
        return null != (e = this.streakStartedAt) ? e : this.createdAt;
    }
    get hasAnyPremiumNitro() {
        return this.items.some((e) => p.JM.has(e.planId));
    }
    get hasAnyPremiumGroup() {
        return this.items.some((e) => e.planId === p.gD.PREMIUM_GROUP_MONTH);
    }
    hasPremiumAtLeast(e) {
        return (
            !!this.isPremium &&
            this.items.some((t) => {
                let n = p.hd[t.planId];
                return (0, c.CC)(n.premiumType, e);
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
        const t = this.renewalMutations;
        let n = e.items[0].planId,
            r = null;
        if (e.type === d.rzx.PREMIUM) {
            const i = p.hd[e.items[0].planId],
                a = i.interval,
                o = i.intervalCount;
            (n = (0, s.a9)(e.items, a, o)), null != t && (r = (0, s.a9)(t.items, a, o));
        } else null != t && t.items.length > 0 && (r = t.items[0].planId);
        (this.planId = n),
            (this.additionalPlans = e.items.filter((e) => e.planId !== n)),
            null != t && null != r && ((t.planId = r), (t.additionalPlans = t.items.filter((e) => e.planId !== r)));
    }
}
let y = b;
