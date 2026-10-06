n.d(t, { A: () => l, Y: () => s });
var i = n(315069),
    r = n(874638),
    a = n(652215);
class s extends i.A {
    id;
    total;
    subtotal;
    currency;
    tax;
    invoiceItems;
    static createFromServer(e) {
        return new s({
            id: e.id,
            total: e.total,
            subtotal: e.subtotal,
            tax: e.tax,
            currency: e.currency,
            invoiceItems: e.invoice_items.map((e) => ({
                skuId: e.sku_id,
                quantity: e.quantity,
                description: e.description,
            })),
        });
    }
    static createInvoiceFromOrder(e) {
        let t = e.billing_facet,
            n = null != t ? t.invoice_preview : null;
        if (null == n) return null;
        let i = n.line_items
            .map((t) => {
                let i = e.order_line_items.find((e) => e.id === t.ref_order_line_item_id);
                return null == i
                    ? null
                    : {
                          skuId: i.sku_id,
                          unitPrice: { amount: t.unit_price, currency: n.currency },
                          quantity: t.quantity,
                      };
            })
            .filter((e) => null != e);
        return new s({ total: n.total, subtotal: n.subtotal, tax: n.tax, currency: n.currency, invoiceItems: i });
    }
    constructor(e) {
        (super(),
            (this.id = e.id),
            (this.total = e.total),
            (this.subtotal = e.subtotal),
            (this.tax = e.tax),
            (this.currency = e.currency),
            (this.invoiceItems = e.invoiceItems ?? []));
    }
    getInvoicePreviewLineItemForSku(e) {
        return this.invoiceItems.find((t) => t.skuId === e) ?? null;
    }
    getInvoicePreviewLineItemUnitPriceForSku(e) {
        let t = this.getInvoicePreviewLineItemForSku(e);
        return null == t || null == t.unitPrice ? null : t.unitPrice.amount;
    }
}
class l extends s {
    id;
    invoiceItems;
    taxInclusive;
    subscriptionPeriodStart;
    subscriptionPeriodEnd;
    status;
    orbsReward;
    checkoutContext;
    applyWalletBalance;
    paymentLegs;
    static createInvoiceFromServer(e) {
        return new l({
            id: e.id,
            invoiceItems: e.invoice_items?.map(r.c),
            total: e.total,
            subtotal: e.subtotal,
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            subscriptionPeriodStart: new Date(e.subscription_period_start),
            subscriptionPeriodEnd: new Date(e.subscription_period_end),
            status: e.status,
            orbsReward: e.orbs_reward,
            checkoutContext: e.checkout_context,
        });
    }
    static createFromOrder(e) {
        let t = e.billing_facet,
            n = null != t ? t.invoice_preview : null;
        if (null == n) return null;
        let i = n.line_items
                .map((t) => {
                    let i = e.order_line_items.find((e) => e.id === t.ref_order_line_item_id);
                    return null == i
                        ? null
                        : {
                              id: t.ref_order_line_item_id,
                              skuId: i.sku_id,
                              subscriptionPlanId: i.subscription_plan_id ?? "",
                              subscriptionPlanPrice: t.unit_price,
                              amount: t.total,
                              quantity: t.quantity,
                              unitPrice: { amount: t.unit_price, currency: n.currency },
                              discounts: t.discounts.map((e) => ({
                                  type: e.type,
                                  amount: e.amount,
                                  description: e.description ?? "",
                                  percentage_amount: e.percentage_amount ?? void 0,
                                  discount_id: e.discount_id ?? void 0,
                              })),
                          };
                })
                .filter((e) => null != e),
            r = n.line_items.reduce((e, t) => e + (t.orbs_reward ?? 0), 0);
        return new l({
            id: "",
            invoiceItems: i,
            total: n.total,
            subtotal: n.subtotal,
            currency: n.currency,
            tax: n.tax,
            taxInclusive: n.tax_inclusive,
            subscriptionPeriodStart: new Date(0),
            subscriptionPeriodEnd: new Date(0),
            orbsReward: r > 0 ? r : void 0,
            checkoutContext: e.checkout_context ?? void 0,
        });
    }
    static createFromOTPPreview(e) {
        return new l({
            id: "",
            invoiceItems: e.invoice_items?.map(r.c),
            total: e.amount,
            subtotal: e.subtotal,
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            subscriptionPeriodStart: new Date(0),
            subscriptionPeriodEnd: new Date(0),
            orbsReward: e.orbs_reward,
            checkoutContext: e.checkout_context,
            applyWalletBalance: e.apply_wallet_balance,
            paymentLegs: e.payment_legs,
        });
    }
    constructor(e) {
        (super(e),
            (this.id = e.id),
            (this.invoiceItems = e.invoiceItems ?? []),
            (this.taxInclusive = e.taxInclusive),
            (this.subscriptionPeriodStart = e.subscriptionPeriodStart),
            (this.subscriptionPeriodEnd = e.subscriptionPeriodEnd),
            (this.status = e.status),
            (this.orbsReward = e.orbsReward),
            (this.checkoutContext = e.checkoutContext),
            (this.applyWalletBalance = e.applyWalletBalance),
            (this.paymentLegs = e.paymentLegs ?? []));
    }
    getWalletAmount() {
        return this.paymentLegs.reduce((e, t) => (t.payment_gateway === a.kM_.TDS ? e + t.amount : e), 0);
    }
    getAmountDue() {
        return this.total - this.getWalletAmount();
    }
    findInvoiceItemByPlanId(e) {
        return this.invoiceItems.find((t) => t.subscriptionPlanId === e) ?? null;
    }
    getDiscountIdIfExists() {
        let e = this.invoiceItems.find((e) => e.discounts.length > 0);
        if (null == e || 0 === e.discounts.length) return;
        let t = e.discounts[0];
        if (null != t) return t.discount_id;
    }
}
