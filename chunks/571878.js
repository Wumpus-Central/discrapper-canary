"use strict";
n.d(t, { y$: () => I, t4: () => A, Ni: () => m });
var i = n(942381),
    r = n(265690),
    s = n(315069),
    a = n(570221);
class o extends s.A {
    paymentGateway;
    paymentSourceId;
    invoicePreview;
    static createFromOrder(e) {
        let t = e.billing_facet;
        return null == t
            ? null
            : new o({
                  paymentGateway: t.payment_gateway,
                  paymentSourceId: t.payment_source_id ?? null,
                  invoicePreview: a.Y.createInvoiceFromOrder(e),
              });
    }
    constructor(e) {
        super(),
            (this.paymentGateway = e.paymentGateway),
            (this.paymentSourceId = e.paymentSourceId ?? null),
            (this.invoicePreview = e.invoicePreview ?? null);
    }
}
class l extends s.A {
    id;
    status;
    revision;
    orderLineItems;
    billingFacetRecord;
    giftingFacet;
    checkoutContext;
    createdAt;
    unsatisfiedConstraints;
    static createFromServer(e) {
        return new l({
            id: e.id,
            status: e.status,
            revision: e.revision,
            orderLineItems: e.order_line_items,
            billingFacetRecord: o.createFromOrder(e),
            giftingFacet: e.gifting_facet ?? null,
            checkoutContext: e.checkout_context ?? null,
            createdAt: e.created_at,
            unsatisfiedConstraints: e.unsatisfied_constraints ?? [],
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.status = e.status),
            (this.revision = e.revision),
            (this.orderLineItems = e.orderLineItems ?? []),
            (this.billingFacetRecord = e.billingFacetRecord ?? null),
            (this.giftingFacet = e.giftingFacet ?? null),
            (this.checkoutContext = e.checkoutContext ?? null),
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
var u = n(566980),
    c = n(410516),
    d = n(815545),
    _ = n(786300),
    h = n(428262),
    f = n(788868);
let p = (e) =>
    null == e
        ? { isPremiumPurchase: !0, isPremiumGroupPurchase: !1 }
        : { isPremiumPurchase: (0, h.ys)(e), isPremiumGroupPurchase: e === f.gD.PREMIUM_GROUP_MONTH };
var E = n(504275);
let [m, g] = (0, _.A)();
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.x;
    return g()(e, t);
}
function I(e) {
    let {
        checkoutInitParameters: t,
        startingValues: n,
        contextMetadata: s,
        order: a,
        initialPaymentSourceId: o,
        initialCurrency: _,
    } = e;
    return (0, r.h)((e, i) => {
        let r = {
            isPremiumPurchase: () => p(i().selectedPlanId).isPremiumPurchase,
            isPremiumGroupPurchase: () => p(i().selectedPlanId).isPremiumGroupPurchase,
            selectedPlanAttributes: () => p(i().selectedPlanId),
            premiumDiscountOffer: () => i().premiumDiscountInfo.discountOffer ?? null,
            premiumDiscountPercent: () => {
                let e = i().premiumDiscountInfo.discountOffer;
                return null != e ? e.discount.amount : null;
            },
            isPremiumDiscountAppliedToCheckoutInvoice: () => {
                let { discountOffer: e } = i().premiumDiscountInfo,
                    t = i().checkoutInvoicePreview;
                return null != e && null != e.discount && null != t && (0, d.Ro)(t, e.discount.id);
            },
        };
        return {
            ...(0, E.p)(e, i, t),
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
            },
            get: (e) => (null != r[e] ? r[e]() : null),
            contextMetadata: s,
            order: a,
            orderRecord: null != a ? l.createFromServer(a) : null,
            setOrder: (t) => e({ order: t, orderRecord: l.createFromServer(t) }),
            selectedSkuId: void 0,
            selectedPlanId: void 0,
            setSelectedSkuId: (t) => e({ selectedSkuId: t ?? void 0 }),
            setSelectedPlanId: (t) => e({ selectedPlanId: t ?? void 0 }),
            fetchCheckoutInvoicePreviewRequest: null,
            setFetchCheckoutInvoicePreviewRequest: (t) => e({ fetchCheckoutInvoicePreviewRequest: t ?? null }),
            checkoutInvoicePreview: null,
            checkoutInvoiceError: null,
            setCheckoutInvoicePreview: (t, n) =>
                e({ checkoutInvoicePreview: t ?? null, checkoutInvoiceError: n ?? null }),
            fetchRenewalInvoicePreviewRequest: null,
            setFetchRenewalInvoicePreviewRequest: (t) => e({ fetchRenewalInvoicePreviewRequest: t ?? null }),
            renewalInvoicePreview: null,
            renewalInvoiceError: null,
            setRenewalInvoicePreview: (t, n) => e({ renewalInvoicePreview: t ?? null, renewalInvoiceError: n ?? null }),
            premiumDiscountInfo: c.TI,
            setPremiumDiscountInfo: (t) => e({ premiumDiscountInfo: t }),
            entitlementsGranted: [],
            setEntitlementsGranted: (t) => e({ entitlementsGranted: t }),
            hasAcceptedTerms: !1,
            setHasAcceptedTerms: (t) => e({ hasAcceptedTerms: t }),
            paymentSourceId: o,
            setPaymentSourceId: (t) => e({ paymentSourceId: t ?? null }),
            checkoutPriceOptions: { paymentSourceId: o ?? void 0, currency: _, loaded: !1 },
            setCheckoutPriceOptions: (t) => e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, ...t } })),
            setCheckoutCurrency: (t) =>
                e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, currency: t } })),
            purchaseState: u.h.WAITING,
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
