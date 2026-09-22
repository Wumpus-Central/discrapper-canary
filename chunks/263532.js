n.d(t, { y0: () => X, Ni: () => q, t4: () => Q, Q9: () => Z, y$: () => J });
var i = n(462180),
    r = n(882035),
    a = n(428865),
    s = n(315069),
    l = n(570221),
    o = n(737291),
    d = n.n(o),
    c = n(580630);
function u(e) {
    return new (d())(e.amount).dividedBy(10 ** e.exponent).toNumber();
}
function _(e) {
    return (0, c.$g)(u(e), e.currency, { convertToMajorUnits: !1 });
}
class E extends s.A {
    id;
    quantity;
    price;
    total;
    addOnPlans;
    discount;
    static createFromServer(e) {
        return new E({
            id: e.id,
            quantity: e.quantity,
            price: e.price,
            total: e.total,
            addOnPlans: e.add_on_plans ?? [],
            discount: e.discount ?? null,
        });
    }
    constructor(e) {
        (super(),
            (this.id = e.id),
            (this.quantity = e.quantity),
            (this.price = e.price),
            (this.total = e.total),
            (this.addOnPlans = e.addOnPlans ?? []),
            (this.discount = e.discount ?? null));
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
        return _(this.total);
    }
    getRegularPriceString() {
        return _(this.price);
    }
    getDiscountedPriceString() {
        return null != this.discount ? _(this.discount.discounted_price) : null;
    }
    getAddOnPrice() {
        if (0 === this.addOnPlans.length) return null;
        let { currency: e, exponent: t } = this.addOnPlans[0].price;
        return {
            majorUnits: u({
                currency: e,
                exponent: t,
                amount: this.addOnPlans.reduce((e, t) => e + t.price.amount * t.quantity, 0),
            }),
            currency: e,
        };
    }
}
class A extends s.A {
    paymentSources;
    storeCountry;
    allowedCurrencies;
    availablePlans;
    static createFromOrder(e) {
        let t = e?.checkout_context;
        return null == t
            ? null
            : new A({
                  paymentSources: t.payment_sources ?? [],
                  storeCountry: null != t.store_country ? t.store_country.country : null,
                  allowedCurrencies: t.allowed_currencies ?? [],
                  availablePlans: (t.available_plans ?? []).map(E.createFromServer),
              });
    }
    constructor(e) {
        (super(),
            (this.paymentSources = e.paymentSources ?? []),
            (this.storeCountry = e.storeCountry ?? null),
            (this.allowedCurrencies = e.allowedCurrencies ?? []),
            (this.availablePlans = e.availablePlans ?? []));
    }
    getAvailablePlanForItems(e) {
        return this.availablePlans.find((t) => t.matchesItems(e)) ?? null;
    }
}
class h extends s.A {
    subscriptionId;
    subscriptionPreview;
    updateType;
    resetBillingCycle;
    static createFromServer(e) {
        var t, n;
        return null == e
            ? null
            : new h({
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
        (super(),
            (this.subscriptionId = e.subscriptionId ?? null),
            (this.subscriptionPreview = e.subscriptionPreview ?? null),
            (this.updateType = e.updateType ?? null),
            (this.resetBillingCycle = e.resetBillingCycle ?? !1));
    }
}
var I = n(818348);
class f extends s.A {
    paymentGateway;
    paymentSourceId;
    currency;
    invoicePreview;
    static createFromOrder(e) {
        let t = e.billing_facet;
        return null == t
            ? null
            : new f({
                  paymentGateway: t.payment_gateway,
                  paymentSourceId: t.payment_source_id ?? null,
                  currency: t.currency ?? null,
                  invoicePreview: l.Y.createInvoiceFromOrder(e),
              });
    }
    constructor(e) {
        (super(),
            (this.paymentGateway = e.paymentGateway),
            (this.paymentSourceId = e.paymentSourceId ?? null),
            (this.currency = e.currency ?? null),
            (this.invoicePreview = e.invoicePreview ?? null));
    }
    get fiatCurrency() {
        return this.paymentGateway === I.kM.VIRTUAL_CURRENCY ? null : this.currency;
    }
}
class p extends s.A {
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
        return new p({
            id: e.id,
            status: e.status,
            revision: e.revision,
            orderLineItems: e.order_line_items,
            billingFacetRecord: f.createFromOrder(e),
            externalGatewayFacet: e.external_gateway_facet ?? null,
            giftingFacet: e.gifting_facet ?? null,
            checkoutContextRecord: A.createFromOrder(e),
            createdAt: e.created_at,
            unsatisfiedConstraints: e.unsatisfied_constraints ?? [],
            subscriptionFacet: h.createFromServer(e.subscription_facet),
        });
    }
    constructor(e) {
        (super(),
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
            (this.unsatisfiedConstraints = e.unsatisfiedConstraints ?? []));
    }
    getInvoicePreview() {
        return null == this.billingFacetRecord ? null : this.billingFacetRecord.invoicePreview;
    }
    firstUnsatisfiedConstraintReasonCode() {
        return this.unsatisfiedConstraints.length > 0 ? this.unsatisfiedConstraints[0].reason_code : null;
    }
}
var T = n(566980),
    g = n(511484),
    m = n(786300),
    S = n(815545),
    N = n(826469),
    C = n(158045),
    O = n(202541);
function R(e, t) {
    return null != e && null != e.checkout_context
        ? e.checkout_context
        : null != t && null != t.checkoutContext
          ? t.checkoutContext
          : null;
}
function L(e) {
    return null == e
        ? { isPremiumPurchase: !0, isPremiumGroupPurchase: !1 }
        : { isPremiumPurchase: (0, C.ys)(e), isPremiumGroupPurchase: e === O.gD.PREMIUM_GROUP_MONTH };
}
function y(e, t) {
    if (null == e) return null;
    if ("subscription_checkout_invoice_get_request" === e.type) return e;
    let n = t().contextMetadata.loadId;
    return e.params.loadId !== n ? { ...e, params: { loadId: n, ...e.params } } : e;
}
var D = n(652215),
    v = n(504275),
    b = n(219538);
let M = { lastOrderUpdateRevision: 0 };
var P = n(228366),
    U = n(158032),
    w = n(830382),
    G = n(136857),
    x = n(739508),
    k = n(71532),
    F = n(375708);
let B = [D.__0.COMPLETED, D.__0.FAILED, D.__0.CANCELED];
async function V(e) {
    if (null == e) return;
    let { error: t } = await (0, k.ap)(e);
    null != t && (0, x.pM)(Error(t), { extra: { authenticationError: t } });
}
let H = {
    paymentAuthError: null,
    isAwaitingPaymentAuthentication: !1,
    awaitingPaymentId: null,
    paymentAuthWasCancelled: !1,
};
var j = n(811315),
    W = n.n(j),
    Y = n(75304),
    K = n(442467),
    $ = n(403362),
    z = n(427262);
let X = 1,
    [q, Z] = (0, m.A)();
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.x;
    return Z()(e, t);
}
function J(e) {
    let {
        checkoutInitParameters: t,
        startingValues: n,
        contextMetadata: s,
        order: o,
        initialPaymentSourceId: d,
        initialCurrency: c,
    } = e;
    return (0, r.h)((e, i) => {
        var r;
        let u,
            _,
            E,
            A =
                ((u = { checkoutContext: null, checkoutPaymentSources: [] }),
                {
                    isPremiumPurchase: () => L(i().selectedPlanId).isPremiumPurchase,
                    isPremiumGroupPurchase: () => L(i().selectedPlanId).isPremiumGroupPurchase,
                    selectedPlanAttributes: () => L(i().selectedPlanId),
                    premiumDiscountOffer: () => i().premiumDiscountInfo.discountOffer ?? null,
                    premiumDiscountPercent: () => {
                        let e = i().premiumDiscountInfo.discountOffer;
                        return null != e ? e.discount.amount : null;
                    },
                    isPremiumDiscountAppliedToCheckoutInvoice: () => {
                        let { discountOffer: e } = i().premiumDiscountInfo,
                            t = i().checkoutInvoicePreview;
                        return null != e && null != e.discount && null != t && (0, S.Ro)(t, e.discount.id);
                    },
                    isCheckoutInvoicePreviewLoading: () => {
                        let e = i().fetchCheckoutInvoicePreviewRequest,
                            t = null == i().checkoutInvoicePreview && null == i().checkoutInvoiceError;
                        return null != e && t;
                    },
                    checkoutContext: () => {
                        let { order: e, checkoutInvoicePreview: t } = i();
                        return R(e, t);
                    },
                    hasCheckoutContextLoaded: () => null != i().get("checkoutContext"),
                    checkoutStoreCountry: () => {
                        let e = i().get("checkoutContext");
                        return null == e ? null : null != e.store_country ? e.store_country.country : null;
                    },
                    checkoutSelectedCurrency: () => i().checkoutPriceOptions.currency ?? null,
                    checkoutPaymentSources: () => {
                        let e = i().get("checkoutContext");
                        e !== u.checkoutContext &&
                            ((u.checkoutContext = e),
                            (u.checkoutPaymentSources =
                                null == e || null == e.payment_sources
                                    ? []
                                    : e.payment_sources.map(N.A.createFromCheckoutContext)));
                        return u.checkoutPaymentSources;
                    },
                    checkoutSelectedPaymentSource: () => {
                        let { get: e, paymentSourceId: t } = i();
                        return e("checkoutPaymentSources").find((e) => e.id === t) ?? null;
                    },
                    hasFiatCheckoutPaymentSources: () =>
                        i()
                            .get("checkoutPaymentSources")
                            .some((e) => e.type !== D.hes.TDS_WALLET && e.type !== D.hes.UNKNOWN),
                    isCheckoutDataLoading: () => {
                        let {
                            order: e,
                            checkoutInvoicePreview: t,
                            checkoutInvoiceError: n,
                            purchasePreviewError: r,
                        } = i();
                        return null == n && null == r && (null == t || null == R(e, t));
                    },
                    primaryInvoicesError: () => i().checkoutInvoiceError ?? i().renewalInvoiceError,
                    isOrderLocked: () => {
                        let { order: e, isOrderSyncing: t, isOrderSigning: n } = i();
                        return null != e && (t || n);
                    },
                });
        return {
            ...(0, v.p)(e, i, t),
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
                    let o = (0, b.w)({ body: t });
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
            ...((r = () => i().order),
            {
                ...M,
                handleOrderUpdate: (t) => {
                    let { orderId: n, revision: i } = t,
                        a = r();
                    null != n &&
                        null != i &&
                        null != a &&
                        a.id === n &&
                        e((e) => (i > e.lastOrderUpdateRevision ? { lastOrderUpdateRevision: i } : e));
                },
            }),
            ...{
                ...H,
                handlePaymentFailure: (t) => {
                    let { error: n } = t,
                        { code: r, paymentId: a } = n;
                    if (r !== G.tG.CONFIRMATION_REQUIRED && r !== G.tG.AUTHENTICATION_REQUIRED) {
                        i().isAwaitingPaymentAuthentication && e({ isAwaitingPaymentAuthentication: !1 });
                        return;
                    }
                    i().isAwaitingPaymentAuthentication ||
                        (e({
                            isAwaitingPaymentAuthentication: !0,
                            awaitingPaymentId: a ?? null,
                            paymentAuthWasCancelled: !1,
                        }),
                        r === G.tG.AUTHENTICATION_REQUIRED && V(a));
                },
                handlePaymentUpdate: (t) => {
                    let { payment: n } = t;
                    if (i().isAwaitingPaymentAuthentication && n.id === i().awaitingPaymentId && B.includes(n.status)) {
                        if (n.status === D.__0.FAILED) {
                            let t = n.metadata?.billing_error_code,
                                i = t === G.tG.BILLING_INSUFFICIENT_FUNDS ? t : null;
                            e({
                                isAwaitingPaymentAuthentication: !1,
                                awaitingPaymentId: null,
                                paymentAuthError: new G.Ay(F.intl.string(F.t.khEaRI), i),
                            });
                            return;
                        }
                        (e({ isAwaitingPaymentAuthentication: !1, awaitingPaymentId: null, paymentAuthError: null }),
                            P.h.wait(U.ET),
                            P.h.wait(w.T3));
                    }
                },
                handlePaymentAuthenticationError: (t) => {
                    let { error: n } = t;
                    e({ paymentAuthError: n, isAwaitingPaymentAuthentication: !1 });
                },
                handlePaymentAuthenticationCancel: () => {
                    e({
                        isAwaitingPaymentAuthentication: !1,
                        awaitingPaymentId: null,
                        paymentAuthError: null,
                        paymentAuthWasCancelled: !0,
                    });
                },
                resetPaymentAuthentication: () => e({ ...H }),
            },
            ...{
                expressCheckoutSubmitting: !1,
                setExpressCheckoutSubmitting: (t) => e({ expressCheckoutSubmitting: t }),
                getShouldUseStripeExpressCheckout: () => {
                    let e = i().getSharedTenantParams();
                    return (
                        !!((0, z.Gn)() || "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, $.m6)()) &&
                        null != e &&
                        !!e.shouldUseStripeExpressCheckout
                    );
                },
            },
            ...((_ = []),
            (E = { premiumPlanOptions: null }),
            {
                getShouldDisallowPlanSelection: () => {
                    let e = i().getTenantParams(Y.C.PREMIUM_CHECKOUT);
                    return null != e && (e.shouldDisallowPlanSelection ?? !1);
                },
                getIsInOneStepSubscriptionCheckout: (e) => {
                    let { isTrial: t, selectedSkuId: n } = e,
                        {
                            isGift: r,
                            selectedSkuId: a,
                            startedPaymentFlowWithPaymentSources: s,
                            getShouldDisallowPlanSelection: l,
                            getShouldUseStripeExpressCheckout: o,
                        } = i();
                    return (
                        !!(l() || o()) ||
                        (function (e) {
                            let {
                                isTrial: t,
                                isGift: n,
                                selectedSkuId: i,
                                startedPaymentFlowWithPaymentSources: r,
                            } = e;
                            return !t && !n && null != i && O.oz.includes(i) && !!r;
                        })({ isTrial: t, isGift: r, selectedSkuId: n ?? a, startedPaymentFlowWithPaymentSources: s })
                    );
                },
                getVerifiedTrialId: (e) => {
                    let { trialId: t } = e,
                        { referralTrialOfferId: n, selectedSkuId: r, get: a } = i(),
                        s = a("isPremiumPurchase"),
                        l = t ?? n ?? null,
                        o = null != l && l in O.TP ? O.TP[l].skus : [];
                    return null != l && (!s || o.includes(r)) ? l : null;
                },
                getEffectivePlanGroup: (e) => {
                    let { planGroup: t } = e,
                        { selectedPlanId: n } = i();
                    if (null != t && (null == n || t.includes(n))) return t;
                    if (null != n) {
                        if ((0, C.xq)(n)) return O.LE;
                        if ((0, C.z4)(n)) return O.DA;
                    }
                    return _;
                },
                getPremiumPlanOptionsOrNull: () => {
                    let { selectedSkuId: e, defaultPlanId: t, get: n } = i(),
                        r = n("isPremiumPurchase");
                    try {
                        let n = (0, C.Tm)({ skuId: e, isPremium: r, defaultPlanId: t });
                        if (W()(n, E.premiumPlanOptions)) return E.premiumPlanOptions;
                        return ((E.premiumPlanOptions = n), n);
                    } catch (e) {
                        return null;
                    }
                },
            }),
            ...(0, K.d)(e, i),
            get: (e) => (null != A[e] ? A[e]() : null),
            contextMetadata: s,
            order: o,
            orderRecord: null != o ? p.createFromServer(o) : null,
            setOrder: (t) =>
                e((e) => {
                    let n, i;
                    return (
                        (n = p.createFromServer(t)),
                        {
                            order: t,
                            orderRecord: n,
                            ...(null != (i = (0, a.L)(t) ? null : l.A.createFromOrder(t))
                                ? { checkoutInvoicePreview: i }
                                : {}),
                            pendingPaymentSourceId: null,
                            ...(function (e, t) {
                                let n = e.orderRecord,
                                    i = null != n && n.id === t.id;
                                if (i && t.revision <= n.revision) return {};
                                let r = i ? n.billingFacetRecord : null,
                                    a = null != r ? r.paymentSourceId : null,
                                    s = null != r ? r.fiatCurrency : null,
                                    l = t.billingFacetRecord,
                                    o = null != l ? l.paymentSourceId : null,
                                    d = null != l ? l.fiatCurrency : null,
                                    c = {};
                                return (
                                    o !== a && (c.paymentSourceId = o),
                                    d !== s &&
                                        (c.checkoutPriceOptions = { ...e.checkoutPriceOptions, currency: d ?? void 0 }),
                                    c
                                );
                            })(e, n),
                        }
                    );
                }),
            selectedSkuId: void 0,
            selectedPlanId: void 0,
            setSelectedSkuId: (t) =>
                e((e) => {
                    let n = t ?? void 0;
                    return n === e.selectedSkuId ? e : { selectedSkuId: n, quantity: X };
                }),
            setSelectedPlanId: function (t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shouldUpdateQuantity: !0 },
                    i = t ?? void 0;
                return n.shouldUpdateQuantity ? e({ selectedPlanId: i, quantity: X }) : e({ selectedPlanId: i });
            },
            quantity: X,
            setQuantity: (t) => e({ quantity: t }),
            fetchCheckoutInvoicePreviewRequest: null,
            setFetchCheckoutInvoicePreviewRequest: (t) => e({ fetchCheckoutInvoicePreviewRequest: y(t, i) }),
            checkoutInvoicePreview: null == o || (0, a.L)(o) ? null : l.A.createFromOrder(o),
            checkoutInvoiceError: null,
            setCheckoutInvoicePreview: (t, n) =>
                e((e) => ({
                    checkoutInvoicePreview: t ?? null,
                    checkoutInvoiceError: n ?? null,
                    pendingPaymentSourceId: null != t && null == e.order ? null : e.pendingPaymentSourceId,
                })),
            fetchRenewalInvoicePreviewRequest: null,
            setFetchRenewalInvoicePreviewRequest: (t) => e({ fetchRenewalInvoicePreviewRequest: y(t, i) }),
            renewalInvoicePreview: null,
            renewalInvoiceError: null,
            setRenewalInvoicePreview: (t, n) => e({ renewalInvoicePreview: t ?? null, renewalInvoiceError: n ?? null }),
            premiumDiscountInfo: g.TI,
            setPremiumDiscountInfo: (t) => e({ premiumDiscountInfo: t }),
            entitlementsGranted: [],
            setEntitlementsGranted: (t) => e({ entitlementsGranted: t }),
            hasAcceptedTerms: !1,
            setHasAcceptedTerms: (t) => e({ hasAcceptedTerms: t }),
            checkoutReviewButtonLabel: "",
            setCheckoutReviewButtonLabel: (t) => e({ checkoutReviewButtonLabel: t }),
            paymentSourceId: d,
            setPaymentSourceId: (t) => e({ paymentSourceId: t ?? null }),
            pendingPaymentSourceId: null,
            setPendingPaymentSourceId: (t) => e({ pendingPaymentSourceId: t ?? null }),
            hasAddedPaymentSourceThisSession: !1,
            setHasAddedPaymentSourceThisSession: () => e({ hasAddedPaymentSourceThisSession: !0 }),
            isOrderSyncing: !1,
            setIsOrderSyncing: (t) => e({ isOrderSyncing: t }),
            isOrderSigning: !1,
            setIsOrderSigning: (t) => e({ isOrderSigning: t }),
            orderSyncError: null,
            setOrderSyncError: (t) => e({ orderSyncError: t ?? null }),
            checkoutPriceOptions: { paymentSourceId: d ?? void 0, currency: c, loaded: !1 },
            setCheckoutPriceOptions: (t) => e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, ...t } })),
            setCheckoutCurrency: (t) =>
                e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, currency: t ?? void 0 } })),
            purchaseState: T.h.WAITING,
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
