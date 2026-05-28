"use strict";
n.d(t, { y$: () => m, t4: () => E, Ni: () => f });
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
    createdAt;
    static createFromServer(e) {
        return new l({
            id: e.id,
            status: e.status,
            revision: e.revision,
            orderLineItems: e.order_line_items,
            billingFacetRecord: o.createFromOrder(e),
            giftingFacet: e.gifting_facet ?? null,
            createdAt: e.created_at,
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
            (this.createdAt = e.createdAt);
    }
    getInvoicePreview() {
        return null == this.billingFacetRecord ? null : this.billingFacetRecord.invoicePreview;
    }
}
var u = n(566980),
    c = n(786300),
    d = n(428262),
    _ = n(788868);
let h = (e) =>
        null == e
            ? { isPremiumPurchase: !0, isPremiumGroupPurchase: !1 }
            : { isPremiumPurchase: (0, d.ys)(e), isPremiumGroupPurchase: e === _.gD.PREMIUM_GROUP_MONTH },
    [f, p] = (0, c.A)();
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.x;
    return p()(e, t);
}
function m(e) {
    let { checkoutInitParameters: t, contextMetadata: n, order: s, initialPaymentSourceId: a, initialCurrency: o } = e;
    return (0, r.h)((e, i) => {
        let r = {
            skuIds: () => i().checkoutInitParameters.skuIds,
            isGift: () => i().checkoutInitParameters.isGift,
            referralTrialOfferId: () => i().checkoutInitParameters.referralTrialOfferId,
            activeSubscription: () => i().checkoutInitParameters.activeSubscription,
            excludeSubscriptionPlansBySKU: () => i().checkoutInitParameters.excludeSubscriptionPlansBySKU,
            purchaseType: () => i().checkoutInitParameters.purchaseType,
            applicationId: () => i().checkoutInitParameters.applicationId,
            isPremiumPurchase: () => h(i().selectedPlanId).isPremiumPurchase,
            isPremiumGroupPurchase: () => h(i().selectedPlanId).isPremiumGroupPurchase,
            selectedPlanAttributes: () => h(i().selectedPlanId),
        };
        return {
            get: (e) => (null != r[e] ? r[e]() : null),
            checkoutInitParameters: t,
            contextMetadata: n,
            order: s,
            orderRecord: null != s ? l.createFromServer(s) : null,
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
            discountInvoicePreview: null,
            setDiscountInvoicePreview: (t) => {
                e({ discountInvoicePreview: t ?? null });
            },
            entitlementsGranted: [],
            setEntitlementsGranted: (t) => e({ entitlementsGranted: t }),
            hasAcceptedTerms: !1,
            setHasAcceptedTerms: (t) => e({ hasAcceptedTerms: t }),
            paymentSourceId: a,
            setPaymentSourceId: (t) => e({ paymentSourceId: t ?? null }),
            checkoutPriceOptions: { paymentSourceId: a ?? void 0, currency: o, loaded: !1 },
            setCheckoutPriceOptions: (t) => e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, ...t } })),
            setCheckoutCurrency: (t) =>
                e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, currency: t } })),
            purchaseState: u.h.WAITING,
            setPurchaseState: (t) => e({ purchaseState: t }),
            appliedUserDiscounts: [],
            setAppliedUserDiscounts: (t) => e({ appliedUserDiscounts: t }),
            purchaseError: null,
            setPurchaseError: (t) => e({ purchaseError: t ?? null }),
            updatedSubscription: null,
            setUpdatedSubscription: (t) => e({ updatedSubscription: t }),
            readySlideId: null,
            setReadySlideId: (t) => e({ readySlideId: t ?? null }),
        };
    }, i.x);
}
