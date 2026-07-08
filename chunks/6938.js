"use strict";
n.d(t, { y0: () => S, Ni: () => N, t4: () => R, Q9: () => C, y$: () => L });
var i = n(942381),
    r = n(265690),
    a = n(315069),
    s = n(570221),
    l = n(580630);
class o extends a.A {
    id;
    quantity;
    price;
    total;
    addOnPlans;
    static createFromServer(e) {
        return new o({
            id: e.id,
            quantity: e.quantity,
            price: e.price,
            total: e.total,
            addOnPlans: e.add_on_plans ?? [],
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.quantity = e.quantity),
            (this.price = e.price),
            (this.total = e.total),
            (this.addOnPlans = e.addOnPlans ?? []);
    }
    getPlanQuantities() {
        let e = new Map([[this.id, this.quantity]]);
        for (let t of this.addOnPlans) e.set(t.id, (e.get(t.id) ?? 0) + t.quantity);
        return e;
    }
    matchesItems(e) {
        var t = this.getPlanQuantities(),
            n = (function (e) {
                let t = new Map();
                for (let { planId: n, quantity: i } of e) t.set(n, (t.get(n) ?? 0) + i);
                return t;
            })(e);
        if (t.size !== n.size) return !1;
        for (let [e, i] of t) if (n.get(e) !== i) return !1;
        return !0;
    }
    getPriceString() {
        var e;
        let t;
        return (
            (t = (e = this.total).amount / Math.pow(10, e.exponent)),
            (0, l.$g)(t, e.currency, { convertToMajorUnits: !1 })
        );
    }
}
class d extends a.A {
    paymentSources;
    storeCountry;
    allowedCurrencies;
    availablePlans;
    static createFromOrder(e) {
        let t = e?.checkout_context;
        return null == t
            ? null
            : new d({
                  paymentSources: t.payment_sources ?? [],
                  storeCountry: null != t.store_country ? t.store_country.country : null,
                  allowedCurrencies: t.allowed_currencies ?? [],
                  availablePlans: (t.available_plans ?? []).map(o.createFromServer),
              });
    }
    constructor(e) {
        super(),
            (this.paymentSources = e.paymentSources ?? []),
            (this.storeCountry = e.storeCountry ?? null),
            (this.allowedCurrencies = e.allowedCurrencies ?? []),
            (this.availablePlans = e.availablePlans ?? []);
    }
    getAvailablePlanForItems(e) {
        return this.availablePlans.find((t) => t.matchesItems(e)) ?? null;
    }
}
class c extends a.A {
    subscriptionId;
    subscriptionPreview;
    updateType;
    resetBillingCycle;
    static createFromServer(e) {
        var t, n;
        return null == e
            ? null
            : new c({
                  subscriptionId: e.subscription_id ?? null,
                  subscriptionPreview:
                      null == (t = e.subscription_preview)
                          ? null
                          : {
                                currency: t.currency,
                                countryCode: t.country_code,
                                subscriptionTrialId: t.subscription_trial_id ?? null,
                                renewalInfo:
                                    null == (n = t.renewal_info)
                                        ? null
                                        : {
                                              price: n.price,
                                              currency: n.currency,
                                              renewalLineItems: (n.renewal_line_items ?? []).map((e) => ({
                                                  refOrderLineItemId: e.ref_order_line_item_id,
                                                  price: e.price,
                                              })),
                                          },
                                subscriptionType: t.subscription_type ?? null,
                            },
                  updateType: e.update_type ?? null,
                  resetBillingCycle: e.reset_billing_cycle ?? !1,
              });
    }
    constructor(e) {
        super(),
            (this.subscriptionId = e.subscriptionId ?? null),
            (this.subscriptionPreview = e.subscriptionPreview ?? null),
            (this.updateType = e.updateType ?? null),
            (this.resetBillingCycle = e.resetBillingCycle ?? !1);
    }
}
class u extends a.A {
    paymentGateway;
    paymentSourceId;
    invoicePreview;
    static createFromOrder(e) {
        let t = e.billing_facet;
        return null == t
            ? null
            : new u({
                  paymentGateway: t.payment_gateway,
                  paymentSourceId: t.payment_source_id ?? null,
                  invoicePreview: s.Y.createInvoiceFromOrder(e),
              });
    }
    constructor(e) {
        super(),
            (this.paymentGateway = e.paymentGateway),
            (this.paymentSourceId = e.paymentSourceId ?? null),
            (this.invoicePreview = e.invoicePreview ?? null);
    }
}
class _ extends a.A {
    id;
    status;
    revision;
    orderLineItems;
    billingFacetRecord;
    externalGatewayFacet;
    giftingFacet;
    subscriptionFacet;
    checkoutContextRecord;
    createdAt;
    unsatisfiedConstraints;
    static createFromServer(e) {
        return new _({
            id: e.id,
            status: e.status,
            revision: e.revision,
            orderLineItems: e.order_line_items,
            billingFacetRecord: u.createFromOrder(e),
            externalGatewayFacet: e.external_gateway_facet ?? null,
            giftingFacet: e.gifting_facet ?? null,
            checkoutContextRecord: d.createFromOrder(e),
            createdAt: e.created_at,
            unsatisfiedConstraints: e.unsatisfied_constraints ?? [],
            subscriptionFacet: c.createFromServer(e.subscription_facet),
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.status = e.status),
            (this.revision = e.revision),
            (this.orderLineItems = e.orderLineItems ?? []),
            (this.billingFacetRecord = e.billingFacetRecord ?? null),
            (this.externalGatewayFacet = e.externalGatewayFacet ?? null),
            (this.giftingFacet = e.giftingFacet ?? null),
            (this.subscriptionFacet = e.subscriptionFacet ?? null),
            (this.checkoutContextRecord = e.checkoutContextRecord ?? null),
            (this.createdAt = e.createdAt),
            (this.unsatisfiedConstraints = e.unsatisfiedConstraints ?? []);
    }
    getInvoicePreview() {
        return null == this.billingFacetRecord ? null : this.billingFacetRecord.invoicePreview;
    }
    firstUnsatisfiedConstraintReasonCode() {
        return this.unsatisfiedConstraints.length > 0 ? this.unsatisfiedConstraints[0].reason_code : null;
    }
}
var E = n(566980),
    A = n(410516),
    h = n(815545),
    I = n(786300),
    f = n(428262),
    p = n(202541);
function T(e) {
    return null == e
        ? { isPremiumPurchase: !0, isPremiumGroupPurchase: !1 }
        : { isPremiumPurchase: (0, f.ys)(e), isPremiumGroupPurchase: e === p.gD.PREMIUM_GROUP_MONTH };
}
var m = n(504275),
    g = n(219538);
let S = 1,
    [N, C] = (0, I.A)();
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.x;
    return C()(e, t);
}
function O(e, t) {
    if (null == e) return null;
    if ("premium_checkout_invoice_get_request" === e.type) return e;
    let n = t().contextMetadata.loadId;
    return e.params.loadId !== n ? { ...e, params: { loadId: n, ...e.params } } : e;
}
function L(e) {
    let {
        checkoutInitParameters: t,
        startingValues: n,
        contextMetadata: a,
        order: s,
        initialPaymentSourceId: l,
        initialCurrency: o,
    } = e;
    return (0, r.h)((e, i) => {
        let r = {
            isPremiumPurchase: () => T(i().selectedPlanId).isPremiumPurchase,
            isPremiumGroupPurchase: () => T(i().selectedPlanId).isPremiumGroupPurchase,
            selectedPlanAttributes: () => T(i().selectedPlanId),
            premiumDiscountOffer: () => i().premiumDiscountInfo.discountOffer ?? null,
            premiumDiscountPercent: () => {
                let e = i().premiumDiscountInfo.discountOffer;
                return null != e ? e.discount.amount : null;
            },
            isPremiumDiscountAppliedToCheckoutInvoice: () => {
                let { discountOffer: e } = i().premiumDiscountInfo,
                    t = i().checkoutInvoicePreview;
                return null != e && null != e.discount && null != t && (0, h.Ro)(t, e.discount.id);
            },
            isCheckoutInvoicePreviewLoading: () => {
                let e = i().fetchCheckoutInvoicePreviewRequest,
                    t = null == i().checkoutInvoicePreview && null == i().checkoutInvoiceError;
                return null != e && t;
            },
        };
        return {
            ...(0, m.p)(e, i, t),
            ...{
                startedPaymentFlowWithPaymentSources: n.startedPaymentFlowWithPaymentSources,
                startingPremiumSubscriptionPlanId: n.startingPremiumSubscriptionPlanId,
                startingFractionalPremiumEndsAt: null,
                captureStartingPremiumSubscriptionPlanId: (t) => {
                    null == i().startingPremiumSubscriptionPlanId && e({ startingPremiumSubscriptionPlanId: t });
                },
                captureStartingFractionalPremiumEndsAt: (t) => {
                    null == i().startingFractionalPremiumEndsAt && e({ startingFractionalPremiumEndsAt: t });
                },
                startingIsInPastDueCheckout: null,
                setStartingIsInPastDueCheckout: (t) => {
                    null == i().startingIsInPastDueCheckout && e({ startingIsInPastDueCheckout: t });
                },
            },
            ...{
                fetchSetupIntentRequestKey: null,
                fetchSetupIntentPromise: null,
                getOrCreateSetupIntent: function (t) {
                    let { forceRecreate: n = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = JSON.stringify(t),
                        { fetchSetupIntentRequestKey: a, fetchSetupIntentPromise: s, clearFetchSetupIntent: l } = i();
                    if (!n && null != s && a === r) return s;
                    let o = (0, g.w)({ body: t });
                    return (
                        e({ fetchSetupIntentRequestKey: r, fetchSetupIntentPromise: o }),
                        o.catch(() => {
                            i().fetchSetupIntentPromise === o && l();
                        }),
                        o
                    );
                },
                clearFetchSetupIntent: () => {
                    e({ fetchSetupIntentRequestKey: null, fetchSetupIntentPromise: null });
                },
            },
            get: (e) => (null != r[e] ? r[e]() : null),
            contextMetadata: a,
            order: s,
            orderRecord: null != s ? _.createFromServer(s) : null,
            setOrder: (t) => e({ order: t, orderRecord: _.createFromServer(t) }),
            selectedSkuId: void 0,
            selectedPlanId: void 0,
            setSelectedSkuId: (t) => e({ selectedSkuId: t ?? void 0, quantity: S }),
            setSelectedPlanId: (t) => e({ selectedPlanId: t ?? void 0, quantity: S }),
            quantity: S,
            setQuantity: (t) => e({ quantity: t }),
            fetchCheckoutInvoicePreviewRequest: null,
            setFetchCheckoutInvoicePreviewRequest: (t) => e({ fetchCheckoutInvoicePreviewRequest: O(t, i) }),
            checkoutInvoicePreview: null,
            checkoutInvoiceError: null,
            setCheckoutInvoicePreview: (t, n) =>
                e((e) => ({
                    checkoutInvoicePreview: t ?? null,
                    checkoutInvoiceError: n ?? null,
                    pendingPaymentSourceId: null != t ? null : e.pendingPaymentSourceId,
                })),
            fetchRenewalInvoicePreviewRequest: null,
            setFetchRenewalInvoicePreviewRequest: (t) => e({ fetchRenewalInvoicePreviewRequest: O(t, i) }),
            renewalInvoicePreview: null,
            renewalInvoiceError: null,
            setRenewalInvoicePreview: (t, n) => e({ renewalInvoicePreview: t ?? null, renewalInvoiceError: n ?? null }),
            premiumDiscountInfo: A.TI,
            setPremiumDiscountInfo: (t) => e({ premiumDiscountInfo: t }),
            entitlementsGranted: [],
            setEntitlementsGranted: (t) => e({ entitlementsGranted: t }),
            hasAcceptedTerms: !1,
            setHasAcceptedTerms: (t) => e({ hasAcceptedTerms: t }),
            checkoutReviewButtonLabel: "",
            setCheckoutReviewButtonLabel: (t) => e({ checkoutReviewButtonLabel: t }),
            paymentSourceId: l,
            setPaymentSourceId: (t) => e({ paymentSourceId: t ?? null }),
            pendingPaymentSourceId: null,
            setPendingPaymentSourceId: (t) => e({ pendingPaymentSourceId: t ?? null }),
            isOrderSyncing: !1,
            setIsOrderSyncing: (t) => e({ isOrderSyncing: t }),
            orderSyncError: null,
            setOrderSyncError: (t) => e({ orderSyncError: t ?? null }),
            checkoutPriceOptions: { paymentSourceId: l ?? void 0, currency: o, loaded: !1 },
            setCheckoutPriceOptions: (t) => e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, ...t } })),
            setCheckoutCurrency: (t) =>
                e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, currency: t } })),
            purchaseState: E.h.WAITING,
            setPurchaseState: (t) => e({ purchaseState: t }),
            appliedUserDiscounts: [],
            setAppliedUserDiscounts: (t) => e({ appliedUserDiscounts: t }),
            purchaseError: null,
            setPurchaseError: (t) => e({ purchaseError: t ?? null }),
            purchasePreviewError: null,
            setPurchasePreviewError: (t) => e({ purchasePreviewError: t ?? null }),
            updatedSubscription: null,
            setUpdatedSubscription: (t) => e({ updatedSubscription: t }),
            readySlideId: null,
            setReadySlideId: (t) => e({ readySlideId: t ?? null }),
        };
    }, i.x);
}
