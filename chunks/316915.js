"use strict";
n.d(t, { y0: () => L, Ni: () => D, t4: () => v, Q9: () => y, y$: () => M });
var i = n(462180),
    r = n(882035),
    a = n(315069),
    s = n(570221),
    l = n(737291),
    o = n.n(l),
    d = n(580630);
function c(e) {
    return new (o())(e.amount).dividedBy(10 ** e.exponent).toNumber();
}
class u extends a.A {
    id;
    quantity;
    price;
    total;
    addOnPlans;
    static createFromServer(e) {
        return new u({
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
        return (e = this.total), (0, d.$g)(c(e), e.currency, { convertToMajorUnits: !1 });
    }
    getAddOnPrice() {
        if (0 === this.addOnPlans.length) return null;
        let { currency: e, exponent: t } = this.addOnPlans[0].price;
        return {
            majorUnits: c({
                currency: e,
                exponent: t,
                amount: this.addOnPlans.reduce((e, t) => e + t.price.amount * t.quantity, 0),
            }),
            currency: e,
        };
    }
}
class _ extends a.A {
    paymentSources;
    storeCountry;
    allowedCurrencies;
    availablePlans;
    static createFromOrder(e) {
        let t = e?.checkout_context;
        return null == t
            ? null
            : new _({
                  paymentSources: t.payment_sources ?? [],
                  storeCountry: null != t.store_country ? t.store_country.country : null,
                  allowedCurrencies: t.allowed_currencies ?? [],
                  availablePlans: (t.available_plans ?? []).map(u.createFromServer),
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
class E extends a.A {
    subscriptionId;
    subscriptionPreview;
    updateType;
    resetBillingCycle;
    static createFromServer(e) {
        var t, n;
        return null == e
            ? null
            : new E({
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
class A extends a.A {
    paymentGateway;
    paymentSourceId;
    invoicePreview;
    static createFromOrder(e) {
        let t = e.billing_facet;
        return null == t
            ? null
            : new A({
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
class h extends a.A {
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
        return new h({
            id: e.id,
            status: e.status,
            revision: e.revision,
            orderLineItems: e.order_line_items,
            billingFacetRecord: A.createFromOrder(e),
            externalGatewayFacet: e.external_gateway_facet ?? null,
            giftingFacet: e.gifting_facet ?? null,
            checkoutContextRecord: _.createFromOrder(e),
            createdAt: e.created_at,
            unsatisfiedConstraints: e.unsatisfied_constraints ?? [],
            subscriptionFacet: E.createFromServer(e.subscription_facet),
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
var I = n(566980),
    f = n(410516),
    p = n(815545),
    T = n(786300),
    m = n(428262),
    g = n(202541);
function S(e, t) {
    return null != e && null != e.checkout_context
        ? e.checkout_context
        : null != t && null != t.checkoutContext
          ? t.checkoutContext
          : null;
}
function N(e) {
    return null == e
        ? { isPremiumPurchase: !0, isPremiumGroupPurchase: !1 }
        : { isPremiumPurchase: (0, m.ys)(e), isPremiumGroupPurchase: e === g.gD.PREMIUM_GROUP_MONTH };
}
var C = n(504275),
    R = n(219538),
    O = n(75304);
let L = 1,
    [D, y] = (0, T.A)();
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.x;
    return y()(e, t);
}
function b(e, t) {
    if (null == e) return null;
    if ("subscription_checkout_invoice_get_request" === e.type) return e;
    let n = t().contextMetadata.loadId;
    return e.params.loadId !== n ? { ...e, params: { loadId: n, ...e.params } } : e;
}
function M(e) {
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
            isPremiumPurchase: () => N(i().selectedPlanId).isPremiumPurchase,
            isPremiumGroupPurchase: () => N(i().selectedPlanId).isPremiumGroupPurchase,
            selectedPlanAttributes: () => N(i().selectedPlanId),
            premiumDiscountOffer: () => i().premiumDiscountInfo.discountOffer ?? null,
            premiumDiscountPercent: () => {
                let e = i().premiumDiscountInfo.discountOffer;
                return null != e ? e.discount.amount : null;
            },
            isPremiumDiscountAppliedToCheckoutInvoice: () => {
                let { discountOffer: e } = i().premiumDiscountInfo,
                    t = i().checkoutInvoicePreview;
                return null != e && null != e.discount && null != t && (0, p.Ro)(t, e.discount.id);
            },
            isCheckoutInvoicePreviewLoading: () => {
                let e = i().fetchCheckoutInvoicePreviewRequest,
                    t = null == i().checkoutInvoicePreview && null == i().checkoutInvoiceError;
                return null != e && t;
            },
            checkoutContext: () => S(i().order, i().checkoutInvoicePreview),
            isCheckoutDataLoading: () => {
                let { order: e, checkoutInvoicePreview: t, checkoutInvoiceError: n, purchasePreviewError: r } = i();
                return null == n && null == r && (null == t || null == S(e, t));
            },
            primaryInvoicesError: () => i().checkoutInvoiceError ?? i().renewalInvoiceError,
        };
        return {
            ...(0, C.p)(e, i, t),
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
                captureStartingPaymentFlowWithPaymentSources: (t) => {
                    null == i().startedPaymentFlowWithPaymentSources && e({ startedPaymentFlowWithPaymentSources: t });
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
                    let o = (0, R.w)({ body: t });
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
                linkWalletEnabled: !0,
                setLinkWalletEnabled: (t) => {
                    e({ linkWalletEnabled: t });
                },
            },
            ...{
                getShouldDisallowPlanSelection: () => {
                    let e = i().getTenantParams(O.C.PREMIUM_CHECKOUT);
                    return null != e && (e.shouldDisallowPlanSelection ?? !1);
                },
                getIsInOneStepSubscriptionCheckout: (e) => {
                    let { isTrial: t, selectedSkuId: n } = e,
                        {
                            isGift: r,
                            selectedSkuId: a,
                            startedPaymentFlowWithPaymentSources: s,
                            getShouldDisallowPlanSelection: l,
                        } = i();
                    return (
                        !!l() ||
                        (function (e) {
                            let {
                                isTrial: t,
                                isGift: n,
                                selectedSkuId: i,
                                startedPaymentFlowWithPaymentSources: r,
                            } = e;
                            return !t && !n && null != i && g.oz.includes(i) && !!r;
                        })({ isTrial: t, isGift: r, selectedSkuId: n ?? a, startedPaymentFlowWithPaymentSources: s })
                    );
                },
            },
            get: (e) => (null != r[e] ? r[e]() : null),
            contextMetadata: a,
            order: s,
            orderRecord: null != s ? h.createFromServer(s) : null,
            setOrder: (t) => e({ order: t, orderRecord: h.createFromServer(t), pendingPaymentSourceId: null }),
            selectedSkuId: void 0,
            selectedPlanId: void 0,
            setSelectedSkuId: (t) => e({ selectedSkuId: t ?? void 0, quantity: L }),
            setSelectedPlanId: function (t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shouldUpdateQuantity: !0 },
                    i = t ?? void 0;
                return n.shouldUpdateQuantity ? e({ selectedPlanId: i, quantity: L }) : e({ selectedPlanId: i });
            },
            quantity: L,
            setQuantity: (t) => e({ quantity: t }),
            fetchCheckoutInvoicePreviewRequest: null,
            setFetchCheckoutInvoicePreviewRequest: (t) => e({ fetchCheckoutInvoicePreviewRequest: b(t, i) }),
            checkoutInvoicePreview: null,
            checkoutInvoiceError: null,
            setCheckoutInvoicePreview: (t, n) =>
                e((e) => ({
                    checkoutInvoicePreview: t ?? null,
                    checkoutInvoiceError: n ?? null,
                    pendingPaymentSourceId: null != t && null == e.order ? null : e.pendingPaymentSourceId,
                })),
            fetchRenewalInvoicePreviewRequest: null,
            setFetchRenewalInvoicePreviewRequest: (t) => e({ fetchRenewalInvoicePreviewRequest: b(t, i) }),
            renewalInvoicePreview: null,
            renewalInvoiceError: null,
            setRenewalInvoicePreview: (t, n) => e({ renewalInvoicePreview: t ?? null, renewalInvoiceError: n ?? null }),
            premiumDiscountInfo: f.TI,
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
            hasAddedPaymentSourceThisSession: !1,
            setHasAddedPaymentSourceThisSession: () => e({ hasAddedPaymentSourceThisSession: !0 }),
            isOrderSyncing: !1,
            setIsOrderSyncing: (t) => e({ isOrderSyncing: t }),
            orderSyncError: null,
            setOrderSyncError: (t) => e({ orderSyncError: t ?? null }),
            checkoutPriceOptions: { paymentSourceId: l ?? void 0, currency: o, loaded: !1 },
            setCheckoutPriceOptions: (t) => e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, ...t } })),
            setCheckoutCurrency: (t) =>
                e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, currency: t } })),
            purchaseState: I.h.WAITING,
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
