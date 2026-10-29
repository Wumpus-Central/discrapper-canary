n.d(t, { y0: () => en, Ni: () => ei, t4: () => ea, Q9: () => er, y$: () => es });
var i = n(882035),
    r = n(428865),
    a = n(315069),
    s = n(570221),
    l = n(737291),
    o = n.n(l),
    d = n(580630);
function c(e) {
    return new (o())(e.amount).dividedBy(10 ** e.exponent).toNumber();
}
function u(e) {
    return (0, d.$g)(c(e), e.currency, { convertToMajorUnits: !1 });
}
class _ extends a.A {
    id;
    quantity;
    price;
    total;
    addOnPlans;
    discount;
    static createFromServer(e) {
        return new _({
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
        return u(this.total);
    }
    getRegularPriceString() {
        return u(this.price);
    }
    getDiscountedPriceString() {
        return null != this.discount ? u(this.discount.discounted_price) : null;
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
class E extends a.A {
    paymentSources;
    storeCountry;
    allowedCurrencies;
    availablePlans;
    static createFromOrder(e) {
        let t = e?.checkout_context;
        return null == t
            ? null
            : new E({
                  paymentSources: t.payment_sources ?? [],
                  storeCountry: null != t.store_country ? t.store_country.country : null,
                  allowedCurrencies: t.allowed_currencies ?? [],
                  availablePlans: (t.available_plans ?? []).map(_.createFromServer),
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
class A extends a.A {
    subscriptionId;
    subscriptionPreview;
    updateType;
    resetBillingCycle;
    static createFromServer(e) {
        var t, n;
        return null == e
            ? null
            : new A({
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
class f extends a.A {
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
                  invoicePreview: s.Y.createInvoiceFromOrder(e),
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
class I extends a.A {
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
        return new I({
            id: e.id,
            status: e.status,
            revision: e.revision,
            orderLineItems: e.order_line_items,
            billingFacetRecord: f.createFromOrder(e),
            externalGatewayFacet: e.external_gateway_facet ?? null,
            giftingFacet: e.gifting_facet ?? null,
            checkoutContextRecord: E.createFromOrder(e),
            createdAt: e.created_at,
            unsatisfiedConstraints: e.unsatisfied_constraints ?? [],
            subscriptionFacet: A.createFromServer(e.subscription_facet),
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
var p = n(566980),
    T = n(424776),
    m = n(786300);
n(205816);
var g = n(462180);
function S(e, t) {
    if ((0, g.x)(e, t)) return !0;
    if (N(e) && N(t)) {
        let n = Object.keys(e);
        if (n.length !== Object.keys(t).length) return !1;
        for (let i of n) if (!Object.hasOwn(t, i) || !(0, g.x)(e[i], t[i])) return !1;
        return !0;
    }
    return !1;
}
function N(e) {
    if ("object" != typeof e || null == e) return !1;
    let t = Object.getPrototypeOf(e);
    return t === Object.prototype || null === t;
}
var C = n(563020),
    O = n(826469),
    R = n(24482),
    L = n(652215),
    y = n(202541);
function D(e, t) {
    return null != e && null != e.checkout_context
        ? e.checkout_context
        : null != t && null != t.checkoutContext
          ? t.checkoutContext
          : null;
}
function v(e) {
    return null == e
        ? { isPremiumPurchase: !0, isPremiumGroupPurchase: !1 }
        : { isPremiumPurchase: (0, R.ys)(e), isPremiumGroupPurchase: e === y.gD.PREMIUM_GROUP_MONTH };
}
function b(e) {
    return e.type !== L.hes.TDS_WALLET;
}
function M(e, t) {
    if (null == e) return null;
    if ("subscription_checkout_invoice_get_request" === e.type) return e;
    let n = t().contextMetadata.loadId;
    return e.params.loadId !== n ? { ...e, params: { loadId: n, ...e.params } } : e;
}
var P = n(26279),
    U = n(504275),
    w = n(219538);
let G = { lastOrderUpdateRevision: 0 };
var x = n(158032),
    k = n(830382),
    F = n(136857),
    B = n(739508),
    V = n(71532),
    H = n(105292);
let j = [L.__0.COMPLETED, L.__0.FAILED, L.__0.CANCELED];
async function W(e) {
    if (null == e) return;
    let { error: t } = await (0, V.ap)(e);
    null != t && (0, B.pM)(Error(t), { extra: { authenticationError: t } });
}
let Y = {
    paymentAuthError: null,
    isAwaitingPaymentAuthentication: !1,
    awaitingPaymentId: null,
    paymentAuthWasCancelled: !1,
};
var K = n(155718),
    $ = n(202613);
function z(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function X(e) {
    let { checkoutInvoicePreview: t, renewalInvoicePreview: n } = e,
        i = z(t),
        r = z(n);
    return 0 === i && null != r ? { subtotal: r, total: n?.total ?? null } : { subtotal: i, total: t?.total ?? null };
}
var q = n(811315),
    Z = n.n(q),
    Q = n(529412),
    J = n(75304),
    ee = n(442467),
    et = n(705822);
let en = 1,
    [ei, er] = (0, m.A)();
function ea(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
    return er()(e, t);
}
function es(e) {
    let {
        checkoutInitParameters: t,
        startingValues: n,
        contextMetadata: a,
        order: l,
        initialPaymentSourceId: o,
        initialCurrency: d,
    } = e;
    return (0, i.h)((e, i) => {
        var c;
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
                        return null != e && null != e.discount && null != t && (0, C.Ro)(t, e.discount.id);
                    },
                    isCheckoutInvoicePreviewLoading: () => {
                        let e = i().fetchCheckoutInvoicePreviewRequest,
                            t = null == i().checkoutInvoicePreview && null == i().checkoutInvoiceError;
                        return null != e && t;
                    },
                    checkoutContext: () => {
                        let { order: e, checkoutInvoicePreview: t } = i();
                        return D(e, t);
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
                                    : e.payment_sources.map(O.A.createFromCheckoutContext)));
                        return u.checkoutPaymentSources;
                    },
                    checkoutSelectedPaymentSource: () => {
                        let { get: e, paymentSourceId: t } = i();
                        return e("checkoutPaymentSources").find((e) => e.id === t) ?? null;
                    },
                    hasFiatCheckoutPaymentSources: () => i().get("checkoutPaymentSources").some(b),
                    isCheckoutDataLoading: () => {
                        let {
                            order: e,
                            checkoutInvoicePreview: t,
                            checkoutInvoiceError: n,
                            purchasePreviewError: r,
                        } = i();
                        return null == n && null == r && (null == t || null == D(e, t));
                    },
                    primaryInvoicesError: () => i().checkoutInvoiceError ?? i().renewalInvoiceError,
                    isOrderLocked: () => {
                        let { order: e, isOrderSyncing: t, isOrderSigning: n } = i();
                        return null != e && (t || n);
                    },
                    isOrderSigningInProgress: () => {
                        let { order: e } = i();
                        return null != e && e.status === P.Re.SIGNING_IN_PROGRESS;
                    },
                    isOrderAwaitingSettlement: () => i().isOrderSigning && i().get("isOrderSigningInProgress"),
                });
        return {
            ...(0, U.p)(e, i, t),
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
            ...((c = () => i().order),
            {
                ...G,
                handleOrderUpdate: (t) => {
                    let { orderId: n, revision: i } = t,
                        r = c();
                    null != n &&
                        null != i &&
                        null != r &&
                        r.id === n &&
                        e((e) => (i > e.lastOrderUpdateRevision ? { lastOrderUpdateRevision: i } : e));
                },
            }),
            ...{
                ...Y,
                handlePaymentFailure: (t) => {
                    let { error: n } = t,
                        { code: r, paymentId: a } = n;
                    if (r !== F.tG.CONFIRMATION_REQUIRED && r !== F.tG.AUTHENTICATION_REQUIRED) {
                        i().isAwaitingPaymentAuthentication && e({ isAwaitingPaymentAuthentication: !1 });
                        return;
                    }
                    i().isAwaitingPaymentAuthentication ||
                        (e({
                            isAwaitingPaymentAuthentication: !0,
                            awaitingPaymentId: a ?? null,
                            paymentAuthWasCancelled: !1,
                        }),
                        r === F.tG.AUTHENTICATION_REQUIRED && W(a));
                },
                handlePaymentUpdate: (t) => {
                    let { payment: n } = t;
                    if (i().isAwaitingPaymentAuthentication && n.id === i().awaitingPaymentId && j.includes(n.status)) {
                        if (n.status === L.__0.FAILED) {
                            let t = n.metadata?.billing_error_code,
                                i = t === F.tG.BILLING_INSUFFICIENT_FUNDS ? t : null;
                            e({
                                isAwaitingPaymentAuthentication: !1,
                                awaitingPaymentId: null,
                                paymentAuthError: new F.Ay(H.intl.string(H.t.khEaRI), i),
                            });
                            return;
                        }
                        (e({ isAwaitingPaymentAuthentication: !1, awaitingPaymentId: null, paymentAuthError: null }),
                            (0, x.ET)(),
                            (0, k.T3)());
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
                resetPaymentAuthentication: () => e({ ...Y }),
            },
            ...(0, et.e)(e, i),
            ...((_ = []),
            {
                getPaymentSourceNotices: () => {
                    let e = i().get("checkoutContext")?.payment_notices;
                    return null == e ? _ : e.filter((e) => e.subject_type === K.SV.PAYMENT_SOURCE);
                },
                getDropdownPaymentSources: () => i().get("checkoutPaymentSources").filter(b),
                getGiftCardWallet: () =>
                    i()
                        .get("checkoutPaymentSources")
                        .find((e) => e.source instanceof $.LQ) ?? null,
                getWalletCoverageSubtotal: () => X(i()).subtotal,
                getWalletCoverageTotal: () => X(i()).total,
                getIsWalletCoverageLoading: () => {
                    let e = i();
                    return (
                        0 === z(e.checkoutInvoicePreview) &&
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
                    let t = e.find((e) => e.payment_gateway === L.kM_.TDS && null != e.available_balance);
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
                        return (0, R.Tm)({
                            skuId: t,
                            isPremium: r("isPremiumPurchase"),
                            defaultPlanId: n,
                            isThreeMonthGiftingEnabled: i && (0, Q.dW)({ location: "PremiumCheckoutStoreSlice" }),
                        });
                    } catch (e) {
                        return null;
                    }
                }
                return {
                    getIsPlanSwitchLoading: () => {
                        let { checkoutInvoicePreview: t, selectedPlanId: n } = e();
                        return null != t && null != n && null == t.findInvoiceItemByPlanId(n);
                    },
                    getShouldDisallowPlanSelection: () => {
                        let t = e().getTenantParams(J.C.PREMIUM_CHECKOUT);
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
                                return !t && !n && null != i && y.oz.includes(i) && (!!r || a);
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
                            o = null != l && l in y.kb ? y.kb[l].skus : [];
                        return null != l && (!s || o.includes(r)) ? l : null;
                    },
                    getEffectivePlanGroup: (n) => {
                        let { planGroup: i } = n,
                            { selectedPlanId: r } = e();
                        if (null != i && (null == r || i.includes(r))) return i;
                        if (null != r) {
                            if ((0, R.xq)(r)) return y.LE;
                            if ((0, R.z4)(r)) return y.DA;
                        }
                        return t;
                    },
                    getPremiumPlanOptionsOrNull: () => {
                        let t = i(e().selectedSkuId);
                        return null == t
                            ? null
                            : Z()(t, n.premiumPlanOptions)
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
                };
            })(i),
            ...(0, ee.d)(e, i),
            get: (e) => (null != E[e] ? E[e]() : null),
            contextMetadata: a,
            order: l,
            orderRecord: null != l ? I.createFromServer(l) : null,
            setOrder: (t) =>
                e((e) => {
                    let n, i;
                    return (
                        (n = I.createFromServer(t)),
                        {
                            order: t,
                            orderRecord: n,
                            ...(null != (i = (0, r.L)(t) ? null : s.A.createFromOrder(t))
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
                    return n === e.selectedSkuId ? e : { selectedSkuId: n, quantity: en };
                }),
            setSelectedPlanId: function (t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shouldUpdateQuantity: !0 },
                    i = t ?? void 0;
                return n.shouldUpdateQuantity ? e({ selectedPlanId: i, quantity: en }) : e({ selectedPlanId: i });
            },
            quantity: en,
            setQuantity: (t) => e({ quantity: t }),
            fetchCheckoutInvoicePreviewRequest: null,
            setFetchCheckoutInvoicePreviewRequest: (t) => e({ fetchCheckoutInvoicePreviewRequest: M(t, i) }),
            checkoutInvoicePreview: null == l || (0, r.L)(l) ? null : s.A.createFromOrder(l),
            checkoutInvoiceError: null,
            setCheckoutInvoicePreview: (t, n) =>
                e((e) => ({
                    checkoutInvoicePreview: t ?? null,
                    checkoutInvoiceError: n ?? null,
                    pendingPaymentSourceId: null != t && null == e.order ? null : e.pendingPaymentSourceId,
                })),
            invoicePreviewRefetchKey: 0,
            refetchInvoicePreviews: () => e((e) => ({ invoicePreviewRefetchKey: e.invoicePreviewRefetchKey + 1 })),
            fetchRenewalInvoicePreviewRequest: null,
            setFetchRenewalInvoicePreviewRequest: (t) => e({ fetchRenewalInvoicePreviewRequest: M(t, i) }),
            renewalInvoicePreview: null,
            renewalInvoiceError: null,
            setRenewalInvoicePreview: (t, n) => e({ renewalInvoicePreview: t ?? null, renewalInvoiceError: n ?? null }),
            premiumDiscountInfo: T.T,
            setPremiumDiscountInfo: (t) => e({ premiumDiscountInfo: t }),
            entitlementsGranted: [],
            setEntitlementsGranted: (t) => e({ entitlementsGranted: t }),
            hasAcceptedTerms: !1,
            setHasAcceptedTerms: (t) => e({ hasAcceptedTerms: t }),
            checkoutReviewButtonLabel: "",
            setCheckoutReviewButtonLabel: (t) => e({ checkoutReviewButtonLabel: t }),
            paymentSourceId: o,
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
            orderSyncError: null,
            setOrderSyncError: (t) => e({ orderSyncError: t ?? null }),
            checkoutPriceOptions: { paymentSourceId: o ?? void 0, currency: d, loaded: !1 },
            setCheckoutPriceOptions: (t) => e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, ...t } })),
            setCheckoutCurrency: (t) =>
                e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, currency: t ?? void 0 } })),
            purchaseState: p.h.WAITING,
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
    }, S);
}
