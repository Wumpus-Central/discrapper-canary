n.d(t, { Ni: () => ec, y$: () => eE, t4: () => e_, Q9: () => eu });
var i = n(882035),
    r = n(136857),
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
class f extends s.A {
    subscriptionId;
    subscriptionPreview;
    updateType;
    resetBillingCycle;
    static createFromServer(e) {
        var t, n;
        return null == e
            ? null
            : new f({
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
var h = n(818348);
class I extends s.A {
    paymentGateway;
    paymentSourceId;
    currency;
    invoicePreview;
    static createFromOrder(e) {
        let t = e.billing_facet;
        return null == t
            ? null
            : new I({
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
        return this.paymentGateway === h.kM.VIRTUAL_CURRENCY ? null : this.currency;
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
    promotionsFacet;
    checkoutContextRecord;
    createdAt;
    unsatisfiedConstraints;
    static createFromServer(e) {
        return new p({
            id: e.id,
            status: e.status,
            revision: e.revision,
            orderLineItems: e.order_line_items,
            billingFacetRecord: I.createFromOrder(e),
            externalGatewayFacet: e.external_gateway_facet ?? null,
            giftingFacet: e.gifting_facet ?? null,
            checkoutContextRecord: A.createFromOrder(e),
            createdAt: e.created_at,
            unsatisfiedConstraints: e.unsatisfied_constraints ?? [],
            subscriptionFacet: f.createFromServer(e.subscription_facet),
            promotionsFacet: e.promotions_facet ?? null,
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
            (this.promotionsFacet = e.promotionsFacet ?? null),
            (this.checkoutContextRecord = e.checkoutContextRecord ?? null),
            (this.createdAt = e.createdAt),
            (this.unsatisfiedConstraints = e.unsatisfiedConstraints ?? []));
    }
    getInvoicePreview() {
        return null == this.billingFacetRecord ? null : this.billingFacetRecord.invoicePreview;
    }
    getGoogleOfferId() {
        let e = this.promotionsFacet?.applied_promotions ?? [];
        return e.find((e) => null != e.google_offer_id)?.google_offer_id ?? null;
    }
    firstUnsatisfiedConstraintReasonCode() {
        return this.unsatisfiedConstraints.length > 0 ? this.unsatisfiedConstraints[0].reason_code : null;
    }
}
var m = n(566980),
    g = n(424776),
    T = n(786300);
n(205816);
var S = n(462180);
function N(e, t) {
    if ((0, S.x)(e, t)) return !0;
    if (C(e) && C(t)) {
        let n = Object.keys(e);
        if (n.length !== Object.keys(t).length) return !1;
        for (let i of n) if (!Object.hasOwn(t, i) || !(0, S.x)(e[i], t[i])) return !1;
        return !0;
    }
    return !1;
}
function C(e) {
    if ("object" != typeof e || null == e) return !1;
    let t = Object.getPrototypeOf(e);
    return t === Object.prototype || null === t;
}
var O = n(563020),
    R = n(826469),
    L = n(448645),
    y = n(652215),
    D = n(682901);
function b(e, t) {
    return null != e && null != e.checkout_context
        ? e.checkout_context
        : null != t && null != t.checkoutContext
          ? t.checkoutContext
          : null;
}
function v(e) {
    return null == e
        ? { isPremiumPurchase: !0, isPremiumGroupPurchase: !1 }
        : { isPremiumPurchase: (0, L.ys)(e), isPremiumGroupPurchase: e === D.gD.PREMIUM_GROUP_MONTH };
}
function P(e) {
    return e.type !== y.hes.TDS_WALLET;
}
function M(e, t) {
    if (null == e) return null;
    if ("subscription_checkout_invoice_get_request" === e.type) return e;
    let n = t().contextMetadata.loadId;
    return e.params.loadId !== n ? { ...e, params: { loadId: n, ...e.params } } : e;
}
var U = n(260273),
    w = n(219538),
    G = n(371710),
    x = n(158317),
    k = n(740286),
    F = n(26279);
let B = { lastOrderUpdateRevision: 0 };
var V = n(158032),
    H = n(830382),
    j = n(708146),
    W = n(558740),
    Y = n(792996);
let K = [y.__0.COMPLETED, y.__0.FAILED, y.__0.CANCELED],
    $ = {
        paymentAuthError: null,
        isAwaitingPaymentAuthentication: !1,
        awaitingPaymentId: null,
        paymentAuthWasCancelled: !1,
    };
var X = n(155718),
    z = n(202613);
function q(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function Q(e) {
    let { checkoutInvoicePreview: t, renewalInvoicePreview: n } = e,
        i = q(t),
        r = q(n);
    return 0 === i && null != r ? { subtotal: r, total: n?.total ?? null } : { subtotal: i, total: t?.total ?? null };
}
var J = n(442467),
    Z = n(120700),
    ee = n(379912),
    et = n(705822),
    en = n(811315),
    ei = n.n(en),
    er = n(800471),
    ea = n(600534),
    es = n(113457),
    el = n(742655),
    eo = n(998312),
    ed = n(860841);
let [ec, eu] = (0, T.A)();
function e_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
    return eu()(e, t);
}
function eE(e) {
    let {
        checkoutInitParameters: t,
        startingValues: n,
        contextMetadata: s,
        order: o,
        initialPaymentSourceId: d,
        initialCurrency: c,
    } = e;
    return (0, i.h)((e, i) => {
        let u,
            _,
            E =
                ((u = { checkoutContext: null, checkoutPaymentSources: [] }),
                {
                    isPremiumPurchase: () => v(i().selectedPlanId).isPremiumPurchase,
                    isPremiumGroupPurchase: () => v(i().selectedPlanId).isPremiumGroupPurchase,
                    selectedPlanAttributes: () => v(i().selectedPlanId),
                    premiumDiscountOffer: () => i().premiumDiscountInfo.discountOffer ?? null,
                    premiumDiscountPercent: () => {
                        let e = i().premiumDiscountInfo.discountOffer;
                        return null != e ? e.discount.amount : null;
                    },
                    isPremiumDiscountAppliedToCheckoutInvoice: () => {
                        let { discountOffer: e } = i().premiumDiscountInfo,
                            t = i().checkoutInvoicePreview;
                        return null != e && null != e.discount && null != t && (0, O.Ro)(t, e.discount.id);
                    },
                    isCheckoutInvoicePreviewLoading: () => {
                        let e = i().fetchCheckoutInvoicePreviewRequest,
                            t = null == i().checkoutInvoicePreview && null == i().checkoutInvoiceError;
                        return null != e && t;
                    },
                    checkoutContext: () => {
                        let { order: e, checkoutInvoicePreview: t } = i();
                        return b(e, t);
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
                                    : e.payment_sources.map(R.A.createFromCheckoutContext)));
                        return u.checkoutPaymentSources;
                    },
                    checkoutSelectedPaymentSource: () => {
                        let { get: e, paymentSourceId: t } = i();
                        return e("checkoutPaymentSources").find((e) => e.id === t) ?? null;
                    },
                    hasFiatCheckoutPaymentSources: () => i().get("checkoutPaymentSources").some(P),
                    isCheckoutDataLoading: () => {
                        let {
                            order: e,
                            checkoutInvoicePreview: t,
                            checkoutInvoiceError: n,
                            purchasePreviewError: r,
                        } = i();
                        return null == n && null == r && (null == t || null == b(e, t));
                    },
                    primaryInvoicesError: () => i().checkoutInvoiceError ?? i().renewalInvoiceError,
                });
        return {
            ...(0, U.p5)(e, i, t),
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
                    let o = (0, w.w)({ body: t });
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
                ...B,
                handleOrderUpdate: (t) => {
                    let { orderId: n, revision: r } = t,
                        { order: a } = i();
                    null != n &&
                        null != r &&
                        null != a &&
                        a.id === n &&
                        e((e) => (r > e.lastOrderUpdateRevision ? { lastOrderUpdateRevision: r } : e));
                },
                getIsOrderLocked: () => {
                    let { order: e, isOrderSyncing: t, isOrderSigning: n } = i();
                    return null != e && (t || n);
                },
                getIsOrderSigningInProgress: () => {
                    let { order: e } = i();
                    return null != e && e.status === F.Re.SIGNING_IN_PROGRESS;
                },
                getIsOrderAwaitingSettlement: () => i().isOrderSigning && i().getIsOrderSigningInProgress(),
                getBlockingOrderConstraintReasonCode: () => {
                    let { orderRecord: e, purchaseError: t } = i();
                    if (null == e) return null;
                    if (t instanceof x.FY) {
                        let n = t.order;
                        if (n.id === e.id && n.revision >= e.revision)
                            return (0, k.GD)(n.status, n.unsatisfied_constraints ?? []);
                    }
                    return (0, k.GD)(e.status, e.unsatisfiedConstraints);
                },
            },
            ...{
                ...$,
                handlePaymentFailure: (t) => {
                    let { error: n, loadId: a } = t;
                    if (a !== i().contextMetadata.loadId) return;
                    let { code: s, paymentId: l } = n;
                    if (s !== r.tG.CONFIRMATION_REQUIRED && s !== r.tG.AUTHENTICATION_REQUIRED) {
                        i().isAwaitingPaymentAuthentication && e({ isAwaitingPaymentAuthentication: !1 });
                        return;
                    }
                    i().isAwaitingPaymentAuthentication ||
                        (e({
                            isAwaitingPaymentAuthentication: !0,
                            awaitingPaymentId: l ?? null,
                            paymentAuthWasCancelled: !1,
                        }),
                        s === r.tG.AUTHENTICATION_REQUIRED &&
                            (async function (e) {
                                if (null == e) return;
                                let t = (0, W.fN)(),
                                    { error: n } = await (0, W.ap)(e);
                                null != n &&
                                    j.r.report(
                                        {
                                            site: "payment_authentication",
                                            extra: {
                                                paymentId: e,
                                                ...(null != t
                                                    ? {
                                                          pending_challenge_payment_id: t.paymentId,
                                                          pending_challenge_same_payment: t.paymentId === e,
                                                          pending_challenge_for_ms: Date.now() - t.startedAt,
                                                      }
                                                    : {}),
                                            },
                                        },
                                        n,
                                    );
                            })(l));
                },
                handlePaymentUpdate: (t) => {
                    let { payment: n } = t;
                    if (i().isAwaitingPaymentAuthentication && n.id === i().awaitingPaymentId && K.includes(n.status)) {
                        if (n.status === y.__0.FAILED) {
                            let t = n.metadata?.billing_error_code,
                                i = t === r.tG.BILLING_INSUFFICIENT_FUNDS ? t : null;
                            e({
                                isAwaitingPaymentAuthentication: !1,
                                awaitingPaymentId: null,
                                paymentAuthError: new r.Ay(Y.intl.string(Y.t.khEaRI), i),
                            });
                            return;
                        }
                        (e({ isAwaitingPaymentAuthentication: !1, awaitingPaymentId: null, paymentAuthError: null }),
                            (0, V.ET)(),
                            (0, H.T3)());
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
                resetPaymentAuthentication: () => e({ ...$ }),
            },
            ...(0, et.e)(e, i),
            ...((_ = []),
            {
                getPaymentSourceNotices: () => {
                    let e = i().get("checkoutContext")?.payment_notices;
                    return null == e ? _ : e.filter((e) => e.subject_type === X.SV.PAYMENT_SOURCE);
                },
                getDropdownPaymentSources: () => i().get("checkoutPaymentSources").filter(P),
                getGiftCardWallet: () =>
                    i()
                        .get("checkoutPaymentSources")
                        .find((e) => e.source instanceof z.LQ) ?? null,
                getWalletCoverageSubtotal: () => Q(i()).subtotal,
                getWalletCoverageTotal: () => Q(i()).total,
                getIsWalletCoverageLoading: () => {
                    let e = i();
                    return (
                        0 === q(e.checkoutInvoicePreview) &&
                        (function (e) {
                            let {
                                fetchRenewalInvoicePreviewRequest: t,
                                renewalInvoicePreview: n,
                                renewalInvoiceError: i,
                            } = e;
                            return null != t && null == n && null == i;
                        })(e)
                    );
                },
                getWalletLegBalance: () => {
                    let e = i().checkoutInvoicePreview?.paymentLegs;
                    if (null == e) return null;
                    let t = e.find((e) => e.payment_gateway === y.kM_.TDS && null != e.available_balance);
                    return t?.available_balance ?? null;
                },
                getIsSplitPaymentMode: (e) => {
                    let { splitPaymentsEnabled: t, giftCardsEnabled: n } = e,
                        r = i();
                    return (
                        t && n && null != r.getGiftCardWallet() && r.checkoutInvoicePreview?.applyWalletBalance != null
                    );
                },
                getEffectivePaymentSourceId: (e) => {
                    let { isSplitPaymentMode: t } = e,
                        n = i(),
                        { paymentSourceId: r, pendingPaymentSourceId: a } = n;
                    if (null != a && r === a) return a;
                    let s = (function (e) {
                        let { paymentSourceId: t } = e;
                        if (null == t) return null;
                        let n = e.getDropdownPaymentSources().find((e) => e.id === t);
                        return null != n && n.enabled ? n.id : null;
                    })(n);
                    if (t) return s;
                    let l = n.getGiftCardWallet();
                    return null != l && l.enabled && r === l.id ? l.id : s;
                },
                getWalletSettlesCheckoutAlone: (e) => {
                    let { isSplitPaymentMode: t, walletCoversTotal: n } = e,
                        r = i(),
                        a = r.getGiftCardWallet();
                    return (
                        !!t &&
                        null != a &&
                        !!a.enabled &&
                        !!n &&
                        (r.applyWalletBalance ?? r.checkoutInvoicePreview?.applyWalletBalance) === !0 &&
                        !r.getDropdownPaymentSources().some((e) => e.enabled)
                    );
                },
                getIsInvoiceTotalPaidByWallet: () => {
                    let e = i(),
                        t = e.getGiftCardWallet();
                    if (null == t || !t.enabled) return !1;
                    let { checkoutInvoicePreview: n, paymentSourceId: r, applyWalletBalance: a } = e,
                        s =
                            (null === a || !0 === a) &&
                            null != n &&
                            n.hasGiftCardBalanceApplied &&
                            0 >= n.getAmountDue(),
                        l = r === t.id;
                    return s || l;
                },
            }),
            ...(function (e) {
                let t = [],
                    n = { premiumPlanOptions: null };
                function i(t) {
                    let { defaultPlanId: n, isGift: i, get: r } = e();
                    try {
                        return (0, L.Tm)({
                            skuId: t,
                            isPremium: r("isPremiumPurchase"),
                            defaultPlanId: n,
                            isThreeMonthGiftingEnabled:
                                i && t === D.pe.TIER_2 && (0, ea.J)({ location: "PremiumCheckoutStoreSlice" }),
                        });
                    } catch (e) {
                        return null;
                    }
                }
                return {
                    getPremiumInvoicePlanId: () => {
                        let { selectedPlanId: t, getGiftSubscriptionPlanId: n } = e();
                        return n() ?? t ?? null;
                    },
                    getIsPlanSwitchLoading: () => {
                        let { checkoutInvoicePreview: t, getPremiumInvoicePlanId: n } = e(),
                            i = n();
                        return null != t && null != i && null == t.findInvoiceItemByPlanId(i);
                    },
                    getShouldDisallowPlanSelection: () => {
                        let t = e().getTenantParams(eo.C.PREMIUM_CHECKOUT);
                        return null != t && (t.shouldDisallowPlanSelection ?? !1);
                    },
                    getHasPreviousStepOutsideCheckout: () => {
                        let t = e().getTenantParams(eo.C.PREMIUM_CHECKOUT);
                        return null != t && (t.hasPreviousStepOutsideCheckout ?? !1);
                    },
                    getIsInOneStepSubscriptionCheckout: (t) => {
                        let { isTrial: n, selectedSkuId: i } = t,
                            {
                                isGift: r,
                                selectedSkuId: a,
                                startedPaymentFlowWithPaymentSources: s,
                                getShouldDisallowPlanSelection: l,
                                getIsExpressCheckoutEnabled: o,
                            } = e();
                        return (
                            !!l() ||
                            (function (e) {
                                let {
                                    isTrial: t,
                                    isGift: n,
                                    selectedSkuId: i,
                                    startedPaymentFlowWithPaymentSources: r,
                                    canPayWithoutSavedPaymentSource: a = !1,
                                } = e;
                                return !t && !n && null != i && D.oz.includes(i) && (!!r || a);
                            })({
                                isTrial: n,
                                isGift: r,
                                selectedSkuId: i ?? a,
                                startedPaymentFlowWithPaymentSources: s,
                                canPayWithoutSavedPaymentSource: o(),
                            })
                        );
                    },
                    getVerifiedTrialId: () => {
                        let {
                                sharedCheckoutParams: { trialId: t },
                                selectedSkuId: n,
                                get: i,
                                getTenantParams: r,
                            } = e(),
                            a = r(eo.C.PREMIUM_CHECKOUT),
                            s = null != a ? a.referralTrialOfferId : void 0,
                            l = i("isPremiumPurchase"),
                            o = t ?? s ?? null,
                            d = null != o && o in D.kb ? D.kb[o].skus : [];
                        return null != o && (!l || d.includes(n)) ? o : null;
                    },
                    getEffectivePlanGroup: () => {
                        let {
                            sharedCheckoutParams: { planGroup: n },
                            selectedPlanId: i,
                        } = e();
                        if (null != n && (null == i || n.includes(i))) return n;
                        if (null != i) {
                            if ((0, L.xq)(i)) return D.LE;
                            if ((0, L.z4)(i)) return D.DA;
                        }
                        return t;
                    },
                    getPremiumPlanOptionsOrNull: () => {
                        let t = i(e().selectedSkuId);
                        return null == t
                            ? null
                            : ei()(t, n.premiumPlanOptions)
                              ? n.premiumPlanOptions
                              : ((n.premiumPlanOptions = t), t);
                    },
                    getInitialPlanId: (t) => {
                        let {
                                defaultPlanId: n,
                                selectedSkuId: i,
                                activeSubscription: r,
                                sharedCheckoutParams: a,
                                getAvailableDefaultPlanId: s,
                            } = e(),
                            { initialPlanId: l, continueSessionToInitialStep: o } = a;
                        if (null == n || null == o) return l === D.gD.PREMIUM_GROUP_MONTH ? void 0 : l;
                        let d = t ?? i;
                        return s({ skuId: d }) ?? (0, er.x)(d, r);
                    },
                    getAvailableDefaultPlanId: function () {
                        let { skuId: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            { defaultPlanId: n, selectedSkuId: r } = e();
                        if (null == n) return;
                        let a = i(t ?? r);
                        return null == a || 0 === a.length || a.includes(n) ? n : void 0;
                    },
                    getPremiumInvoiceDiscriminator: (t) => {
                        let { isTrial: n } = t,
                            { isGift: i, getGiftSubscriptionPlanId: r } = e();
                        return null != r()
                            ? ed.u$.SUBSCRIPTION_NEW_PURCHASE
                            : i
                              ? ed.u$.PREMIUM_GIFT
                              : n
                                ? ed.u$.PREMIUM_WITH_TRIAL
                                : ed.u$.SUBSCRIPTION_NEW_PURCHASE;
                    },
                    getPremiumDiscriminatedInvoicePreview: (t) => {
                        let { invoiceError: n, isTrial: i } = t,
                            { getPremiumInvoiceDiscriminator: r, getGenericDiscriminatedInvoicePreview: a } = e();
                        return a({ invoiceTypeDiscriminator: r({ isTrial: i }), invoiceError: n });
                    },
                    getGenericDiscriminatedInvoicePreview: (t) => {
                        let { invoiceTypeDiscriminator: n, invoiceError: i } = t,
                            {
                                checkoutInvoicePreview: r,
                                renewalInvoicePreview: a,
                                getIsPlanSwitchLoading: s,
                                get: l,
                            } = e(),
                            o = l("primaryInvoicesError");
                        return null == r
                            ? null
                            : (0, ed.Qh)({
                                  invoiceTypeDiscriminator: n,
                                  checkoutInvoicePreview: r,
                                  renewalInvoicePreview: a,
                                  planSwitchLoading: s(),
                                  error: o ?? i,
                              });
                    },
                    getInvoiceSubscriptionPeriodEnd: () => {
                        let { checkoutInvoicePreview: t } = e();
                        if (null != t) return t.subscriptionPeriodEnd;
                    },
                    getInvoiceHasQuantityDiscount: () => {
                        let { checkoutInvoicePreview: t, getPremiumInvoicePlanId: n } = e(),
                            i = n();
                        if (null == t || null == i) return !1;
                        let { subscriptionPlanInvoiceItem: r } = (0, O.Sb)(t, i);
                        return r?.discounts.some((e) => e.type === X.iS.QUANTITY_DISCOUNT) ?? !1;
                    },
                    getHasQuantityDiscount: () => {
                        let { isGift: t, quantity: n, getInvoiceHasQuantityDiscount: i } = e();
                        return i() || (t && null != (0, el.t8)(n));
                    },
                    getShouldShowSelectFreeSkuStep: () => {
                        let { isGift: t, selectedPlanId: n, claimableGiftingPromotionRewards: i } = e(),
                            r = null != i && i.length > 0;
                        return t && (0, es.H)(n) && r;
                    },
                };
            })(i),
            ...{
                orbBalanceOnCheckout: null,
                setOrbBalanceOnCheckout: (t) => e({ orbBalanceOnCheckout: t }),
                getOrbBalanceOnCheckout: () => i().orbBalanceOnCheckout,
            },
            ...{
                isRecurringGift: !1,
                hasClearedDefaultGiftMessage: !1,
                claimableGiftingPromotionRewards: void 0,
                setIsRecurringGift: (t) => e({ isRecurringGift: t }),
                setHasClearedDefaultGiftMessage: (t) => e({ hasClearedDefaultGiftMessage: t }),
                setClaimableGiftingPromotionRewards: (t) => e({ claimableGiftingPromotionRewards: t }),
                getIsRecurringGiftCheckout: () => {
                    let { isRecurringGift: e, selectedPlanId: t } = i();
                    return e && null != t && (0, G.dI)(t);
                },
                getGiftSubscriptionPlanId: () => {
                    let { selectedPlanId: e, getIsRecurringGiftCheckout: t } = i();
                    return null != e && t() ? (0, G.o_)(e) : null;
                },
            },
            ...{
                getIsSelectedPaymentSourceDisabled: () => {
                    let { paymentSourceId: e, get: t } = i(),
                        n = t("hasCheckoutContextLoaded"),
                        r = t("checkoutPaymentSources");
                    if (null == e) return !1;
                    if (!n) return !0;
                    let a = r.find((t) => t.id === e);
                    return null != a && !a.enabled;
                },
                getIsPurchaseDisabled: function () {
                    let { isWalletPurchaseDisabled: e } =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            hasAcceptedTerms: t,
                            checkoutInvoicePreview: n,
                            customCheckoutFlow: r,
                            get: a,
                            getIsOrderLocked: s,
                            getBlockingOrderConstraintReasonCode: l,
                        } = i(),
                        o = s(),
                        d = a("primaryInvoicesError");
                    return (
                        r === F.uH.DEV_STORYBOOK_CHECKOUT ||
                        null == n ||
                        !!o ||
                        null != d ||
                        null != l() ||
                        !t ||
                        !!e ||
                        !1
                    );
                },
                getIsReviewSubmitDisabled: (e) => {
                    let { paymentSource: t, isWalletPurchaseDisabled: n, isTrial: r } = e,
                        {
                            unifiedCheckoutFlow: a,
                            checkoutInvoicePreview: s,
                            renewalInvoicePreview: l,
                            purchasePreviewError: o,
                            purchaseType: d,
                            isGift: c,
                            getIsPurchaseDisabled: u,
                            getIsSelectedPaymentSourceDisabled: _,
                            getGiftSubscriptionPlanId: E,
                            getIsRecurringGiftCheckout: A,
                        } = i();
                    if (u({ isWalletPurchaseDisabled: n })) return !0;
                    if (d === y.VVm.ONE_TIME) {
                        if (_() || null != o) return !0;
                    } else {
                        if (A()) {
                            let e = E();
                            if (
                                null == e ||
                                s?.findInvoiceItemByPlanId(e) == null ||
                                l?.findInvoiceItemByPlanId(e) == null
                            )
                                return !0;
                        }
                        if (
                            ((r && !c) || a === Z.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT) &&
                            (null == t || !t.canRedeemTrial())
                        )
                            return !0;
                    }
                    return !1;
                },
                getCheckoutReviewButtonText: (e) => {
                    let { hasPaymentSources: t, tenantProvidedButtonText: n } = e,
                        { paymentSourceId: r, get: a } = i(),
                        s = a("checkoutPaymentSources"),
                        l = null != r && s.some((e) => e.id === r && null != e.relocationCountry);
                    return null === r && t
                        ? Y.intl.string(Y.t.CpOiEO)
                        : l
                          ? Y.intl.string(ee.default["7r4HPu"])
                          : null != n
                            ? n
                            : Y.intl.string(ee.default.BPzQj4);
                },
                getCheckoutReviewButtonProps: (e) => {
                    let {
                            isReviewButtonDisabled: t,
                            isReviewButtonLoading: n,
                            needsPaymentSource: r,
                            hasPaymentSources: a,
                            handlePaymentSourceAdd: s,
                            tenantProvidedReviewButtonProps: l,
                            onReviewButtonClick: o,
                            isApplicationDevShelfLoading: d,
                        } = e,
                        { getCheckoutReviewButtonText: c, purchaseType: u, hasAcceptedTerms: _, get: E } = i(),
                        A = !_ && !E("isCheckoutDataLoading"),
                        f = i().getBlockingOrderConstraintReasonCode(),
                        h = l?.text;
                    null == h &&
                        (h = u === y.VVm.SUBSCRIPTION ? Y.intl.string(Y.t.YScQSF) : Y.intl.string(ee.default.BPzQj4));
                    let I = l?.variant,
                        p = c({ hasPaymentSources: a, tenantProvidedButtonText: h }),
                        m = {
                            variant: I ?? "active",
                            dataTestId: "purchase",
                            onClick: o,
                            disabled: t,
                            loading: n,
                            ...l,
                            text: p,
                        };
                    return null != f
                        ? {
                              ...m,
                              tooltipText: (0, k.f$)(f, Y.intl.string(Y.t["P/VP9v"])),
                              disabled: !0,
                              onClick: void 0,
                              dataTestId: "submitButton",
                          }
                        : r
                          ? {
                                text: p,
                                tooltipText: Y.intl.string(Y.t.L7jbQV),
                                type: "submit",
                                dataTestId: "submitButton",
                                loading: n,
                                ...(null != I ? { variant: I } : { variant: a ? "primary" : "active" }),
                                ...(a ? { onClick: s } : { disabled: !0 }),
                            }
                          : d
                            ? {
                                  text: p,
                                  tooltipText: Y.intl.string(Y.t.cjA5tj),
                                  variant: "active",
                                  type: "submit",
                                  dataTestId: "submitButton",
                                  disabled: !0,
                              }
                            : t
                              ? {
                                    ...m,
                                    ...(A ? { tooltipText: Y.intl.string(Y.t.XdvBLS) } : {}),
                                    disabled: !0,
                                    onClick: void 0,
                                    dataTestId: "submitButton",
                                }
                              : _
                                ? m
                                : {
                                      ...m,
                                      tooltipText: Y.intl.string(Y.t.XdvBLS),
                                      disabled: !0,
                                      onClick: void 0,
                                      dataTestId: "submitButton",
                                  };
                },
            },
            ...(0, J.d)(e, i),
            get: (e) => (null != E[e] ? E[e]() : null),
            contextMetadata: s,
            order: o,
            orderRecord: null != o ? p.createFromServer(o) : null,
            setOrder: (t) =>
                e((e) => {
                    let n, i;
                    return (
                        (n = p.createFromServer(t)),
                        (i = (0, a.L)(t) ? null : l.A.createFromOrder(t)),
                        {
                            order: t,
                            orderRecord: n,
                            ...(null != i ? { checkoutInvoicePreview: i } : {}),
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
                    return n === e.selectedSkuId ? e : { selectedSkuId: n, quantity: 1 };
                }),
            setSelectedPlanId: function (t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shouldUpdateQuantity: !0 },
                    i = t ?? void 0;
                return n.shouldUpdateQuantity ? e({ selectedPlanId: i, quantity: 1 }) : e({ selectedPlanId: i });
            },
            quantity: 1,
            setQuantity: (t) => e({ quantity: t }),
            fetchCheckoutInvoicePreviewRequest: null,
            setFetchCheckoutInvoicePreviewRequest: (t) => e({ fetchCheckoutInvoicePreviewRequest: M(t, i) }),
            checkoutInvoicePreview: null == o || (0, a.L)(o) ? null : l.A.createFromOrder(o),
            checkoutInvoiceError: null,
            setCheckoutInvoicePreview: (t, n) =>
                e((e) => ({
                    checkoutInvoicePreview: t ?? null,
                    checkoutInvoiceError: n ?? null,
                    pendingPaymentSourceId: null != t && null == e.order ? null : e.pendingPaymentSourceId,
                })),
            invoicePreviewRefetchKey: 0,
            refetchInvoicePreviews: () => e((e) => ({ invoicePreviewRefetchKey: e.invoicePreviewRefetchKey + 1 })),
            repriceIfWalletBalanceChanged: (t) => {
                let { error: n } = t;
                n.code === r.tG.BILLING_WALLET_BALANCE_CHANGED &&
                    e((e) => ({ invoicePreviewRefetchKey: e.invoicePreviewRefetchKey + 1 }));
            },
            fetchRenewalInvoicePreviewRequest: null,
            setFetchRenewalInvoicePreviewRequest: (t) => e({ fetchRenewalInvoicePreviewRequest: M(t, i) }),
            renewalInvoicePreview: null,
            renewalInvoiceError: null,
            setRenewalInvoicePreview: (t, n) => e({ renewalInvoicePreview: t ?? null, renewalInvoiceError: n ?? null }),
            premiumDiscountInfo: g.T,
            setPremiumDiscountInfo: (t) => e({ premiumDiscountInfo: t }),
            entitlementsGranted: [],
            setEntitlementsGranted: (t) => e({ entitlementsGranted: t }),
            hasAcceptedTerms: !1,
            setHasAcceptedTerms: (t) => e({ hasAcceptedTerms: t }),
            checkoutReviewButtonLabel: "",
            setCheckoutReviewButtonLabel: (t) => e({ checkoutReviewButtonLabel: t }),
            paymentSourceId: d,
            setPaymentSourceId: (t) => e({ paymentSourceId: t ?? null }),
            applyWalletBalance: null,
            setApplyWalletBalance: (t) => e({ applyWalletBalance: t }),
            pendingPaymentSourceId: null,
            setPendingPaymentSourceId: (t) => e({ pendingPaymentSourceId: t ?? null }),
            hasAddedPaymentSourceThisSession: !1,
            setHasAddedPaymentSourceThisSession: () => e({ hasAddedPaymentSourceThisSession: !0 }),
            isOrderSyncing: !1,
            setIsOrderSyncing: (t) => e({ isOrderSyncing: t }),
            isOrderSigning: !1,
            setIsOrderSigning: (t) => e({ isOrderSigning: t }),
            orderSigningError: null,
            setOrderSigningError: (t) => e({ orderSigningError: t ?? null }),
            orderSyncError: null,
            setOrderSyncError: (t) => e({ orderSyncError: t ?? null }),
            checkoutPriceOptions: { paymentSourceId: d ?? void 0, currency: c, loaded: !1 },
            setCheckoutPriceOptions: (t) => e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, ...t } })),
            setCheckoutCurrency: (t) =>
                e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, currency: t ?? void 0 } })),
            purchaseState: m.h.WAITING,
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
    }, N);
}
