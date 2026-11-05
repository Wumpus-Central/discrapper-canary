n.d(t, { Ni: () => ea, y$: () => eo, t4: () => el, Q9: () => es });
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
var f = n(818348);
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
        return this.paymentGateway === f.kM.VIRTUAL_CURRENCY ? null : this.currency;
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
            subscriptionFacet: h.createFromServer(e.subscription_facet),
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
    L = n(722178),
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
var U = n(26279),
    w = n(504275),
    G = n(219538);
let x = { lastOrderUpdateRevision: 0 };
var k = n(158032),
    F = n(830382),
    B = n(739508),
    V = n(558740),
    H = n(792996);
let j = [y.__0.COMPLETED, y.__0.FAILED, y.__0.CANCELED],
    W = {
        paymentAuthError: null,
        isAwaitingPaymentAuthentication: !1,
        awaitingPaymentId: null,
        paymentAuthWasCancelled: !1,
    };
var Y = n(155718),
    K = n(202613);
function $(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function X(e) {
    let { checkoutInvoicePreview: t, renewalInvoicePreview: n } = e,
        i = $(t),
        r = $(n);
    return 0 === i && null != r ? { subtotal: r, total: n?.total ?? null } : { subtotal: i, total: t?.total ?? null };
}
var z = n(811315),
    q = n.n(z),
    Z = n(529412),
    Q = n(998312),
    J = n(860841),
    ee = n(442467),
    et = n(371710),
    en = n(120700),
    ei = n(379912),
    er = n(705822);
let [ea, es] = (0, T.A)();
function el(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
    return es()(e, t);
}
function eo(e) {
    let {
        checkoutInitParameters: t,
        startingValues: n,
        contextMetadata: s,
        order: o,
        initialPaymentSourceId: d,
        initialCurrency: c,
    } = e;
    return (0, i.h)((e, i) => {
        var u;
        let _,
            E,
            A =
                ((_ = { checkoutContext: null, checkoutPaymentSources: [] }),
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
                        e !== _.checkoutContext &&
                            ((_.checkoutContext = e),
                            (_.checkoutPaymentSources =
                                null == e || null == e.payment_sources
                                    ? []
                                    : e.payment_sources.map(R.A.createFromCheckoutContext)));
                        return _.checkoutPaymentSources;
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
                    isOrderLocked: () => {
                        let { order: e, isOrderSyncing: t, isOrderSigning: n } = i();
                        return null != e && (t || n);
                    },
                    isOrderSigningInProgress: () => {
                        let { order: e } = i();
                        return null != e && e.status === U.Re.SIGNING_IN_PROGRESS;
                    },
                    isOrderAwaitingSettlement: () => i().isOrderSigning && i().get("isOrderSigningInProgress"),
                });
        return {
            ...(0, w.p)(e, i, t),
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
                    let o = (0, G.w)({ body: t });
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
            ...((u = () => i().order),
            {
                ...x,
                handleOrderUpdate: (t) => {
                    let { orderId: n, revision: i } = t,
                        r = u();
                    null != n &&
                        null != i &&
                        null != r &&
                        r.id === n &&
                        e((e) => (i > e.lastOrderUpdateRevision ? { lastOrderUpdateRevision: i } : e));
                },
            }),
            ...{
                ...W,
                handlePaymentFailure: (t) => {
                    let { error: n } = t,
                        { code: a, paymentId: s } = n;
                    if (a !== r.tG.CONFIRMATION_REQUIRED && a !== r.tG.AUTHENTICATION_REQUIRED) {
                        i().isAwaitingPaymentAuthentication && e({ isAwaitingPaymentAuthentication: !1 });
                        return;
                    }
                    i().isAwaitingPaymentAuthentication ||
                        (e({
                            isAwaitingPaymentAuthentication: !0,
                            awaitingPaymentId: s ?? null,
                            paymentAuthWasCancelled: !1,
                        }),
                        a === r.tG.AUTHENTICATION_REQUIRED &&
                            (async function (e) {
                                if (null == e) return;
                                let { error: t } = await (0, V.ap)(e);
                                null != t && (0, B.pM)(Error(t), { extra: { authenticationError: t } });
                            })(s));
                },
                handlePaymentUpdate: (t) => {
                    let { payment: n } = t;
                    if (i().isAwaitingPaymentAuthentication && n.id === i().awaitingPaymentId && j.includes(n.status)) {
                        if (n.status === y.__0.FAILED) {
                            let t = n.metadata?.billing_error_code,
                                i = t === r.tG.BILLING_INSUFFICIENT_FUNDS ? t : null;
                            e({
                                isAwaitingPaymentAuthentication: !1,
                                awaitingPaymentId: null,
                                paymentAuthError: new r.Ay(H.intl.string(H.t.khEaRI), i),
                            });
                            return;
                        }
                        (e({ isAwaitingPaymentAuthentication: !1, awaitingPaymentId: null, paymentAuthError: null }),
                            (0, k.ET)(),
                            (0, F.T3)());
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
                resetPaymentAuthentication: () => e({ ...W }),
            },
            ...(0, er.e)(e, i),
            ...((E = []),
            {
                getPaymentSourceNotices: () => {
                    let e = i().get("checkoutContext")?.payment_notices;
                    return null == e ? E : e.filter((e) => e.subject_type === Y.SV.PAYMENT_SOURCE);
                },
                getDropdownPaymentSources: () => i().get("checkoutPaymentSources").filter(P),
                getGiftCardWallet: () =>
                    i()
                        .get("checkoutPaymentSources")
                        .find((e) => e.source instanceof K.LQ) ?? null,
                getWalletCoverageSubtotal: () => X(i()).subtotal,
                getWalletCoverageTotal: () => X(i()).total,
                getIsWalletCoverageLoading: () => {
                    let e = i();
                    return (
                        0 === $(e.checkoutInvoicePreview) &&
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
                            isThreeMonthGiftingEnabled: i && (0, Z.dW)({ location: "PremiumCheckoutStoreSlice" }),
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
                        let t = e().getTenantParams(Q.C.PREMIUM_CHECKOUT);
                        return null != t && (t.shouldDisallowPlanSelection ?? !1);
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
                    getVerifiedTrialId: (t) => {
                        let { trialId: n } = t,
                            { referralTrialOfferId: i, selectedSkuId: r, get: a } = e(),
                            s = a("isPremiumPurchase"),
                            l = n ?? i ?? null,
                            o = null != l && l in D.kb ? D.kb[l].skus : [];
                        return null != l && (!s || o.includes(r)) ? l : null;
                    },
                    getEffectivePlanGroup: (n) => {
                        let { planGroup: i } = n,
                            { selectedPlanId: r } = e();
                        if (null != i && (null == r || i.includes(r))) return i;
                        if (null != r) {
                            if ((0, L.xq)(r)) return D.LE;
                            if ((0, L.z4)(r)) return D.DA;
                        }
                        return t;
                    },
                    getPremiumPlanOptionsOrNull: () => {
                        let t = i(e().selectedSkuId);
                        return null == t
                            ? null
                            : q()(t, n.premiumPlanOptions)
                              ? n.premiumPlanOptions
                              : ((n.premiumPlanOptions = t), t);
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
                            ? J.u$.SUBSCRIPTION_NEW_PURCHASE
                            : i
                              ? J.u$.PREMIUM_GIFT
                              : n
                                ? J.u$.PREMIUM_WITH_TRIAL
                                : J.u$.SUBSCRIPTION_NEW_PURCHASE;
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
                            : (0, J.Qh)({
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
                        return r?.discounts.some((e) => e.type === Y.iS.QUANTITY_DISCOUNT) ?? !1;
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
                setIsRecurringGift: (t) => e({ isRecurringGift: t }),
                setHasClearedDefaultGiftMessage: (t) => e({ hasClearedDefaultGiftMessage: t }),
                getIsRecurringGiftCheckout: () => {
                    let { isRecurringGift: e, selectedPlanId: t } = i();
                    return e && null != t && (0, et.dI)(t);
                },
                getGiftSubscriptionPlanId: () => {
                    let { selectedPlanId: e, getIsRecurringGiftCheckout: t } = i();
                    return null != e && t() ? (0, et.o_)(e) : null;
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
                        { hasAcceptedTerms: t, checkoutInvoicePreview: n, customCheckoutFlow: r, get: a } = i(),
                        s = a("isOrderLocked"),
                        l = a("primaryInvoicesError");
                    return r === U.uH.DEV_STORYBOOK_CHECKOUT || null == n || !!s || null != l || !t || !!e;
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
                            ((r && !c) || a === en.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT) &&
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
                        ? H.intl.string(H.t.CpOiEO)
                        : l
                          ? H.intl.string(ei.default["7r4HPu"])
                          : null != n
                            ? n
                            : H.intl.string(ei.default.BPzQj4);
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
                        h = l?.text;
                    null == h &&
                        (h = u === y.VVm.SUBSCRIPTION ? H.intl.string(H.t.YScQSF) : H.intl.string(ei.default.BPzQj4));
                    let f = l?.variant,
                        I = c({ hasPaymentSources: a, tenantProvidedButtonText: h }),
                        p = {
                            variant: f ?? "active",
                            dataTestId: "purchase",
                            onClick: o,
                            disabled: t,
                            loading: n,
                            ...l,
                            text: I,
                        };
                    return r
                        ? {
                              text: I,
                              tooltipText: H.intl.string(H.t.L7jbQV),
                              type: "submit",
                              dataTestId: "submitButton",
                              loading: n,
                              ...(null != f ? { variant: f } : { variant: a ? "primary" : "active" }),
                              ...(a ? { onClick: s } : { disabled: !0 }),
                          }
                        : d
                          ? {
                                text: I,
                                tooltipText: H.intl.string(H.t.cjA5tj),
                                variant: "active",
                                type: "submit",
                                dataTestId: "submitButton",
                                disabled: !0,
                            }
                          : t
                            ? {
                                  ...p,
                                  ...(A ? { tooltipText: H.intl.string(H.t.XdvBLS) } : {}),
                                  disabled: !0,
                                  onClick: void 0,
                                  dataTestId: "submitButton",
                              }
                            : _
                              ? p
                              : {
                                    ...p,
                                    tooltipText: H.intl.string(H.t.XdvBLS),
                                    disabled: !0,
                                    onClick: void 0,
                                    dataTestId: "submitButton",
                                };
                },
            },
            ...(0, ee.d)(e, i),
            get: (e) => (null != A[e] ? A[e]() : null),
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
