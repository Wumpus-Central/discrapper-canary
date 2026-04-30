"use strict";
n.d(t, { A: () => s });
var i = n(315069),
    r = n(874638);
class s extends i.A {
    id;
    invoiceItems;
    total;
    subtotal;
    currency;
    tax;
    taxInclusive;
    subscriptionPeriodStart;
    subscriptionPeriodEnd;
    status;
    orbsReward;
    checkoutContext;
    static createInvoiceFromServer(e) {
        return new s({
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
    static createFromOTPPreview(e) {
        return new s({
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
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.invoiceItems = e.invoiceItems ?? []),
            (this.total = e.total),
            (this.subtotal = e.subtotal),
            (this.currency = e.currency),
            (this.tax = e.tax),
            (this.taxInclusive = e.taxInclusive),
            (this.subscriptionPeriodStart = e.subscriptionPeriodStart),
            (this.subscriptionPeriodEnd = e.subscriptionPeriodEnd),
            (this.status = e.status),
            (this.orbsReward = e.orbsReward),
            (this.checkoutContext = e.checkoutContext);
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
