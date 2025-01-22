r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(81825),
    a = r(591548);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class s extends i.Z {
    static createInvoiceFromServer(e) {
        var n;
        return new s({
            id: e.id,
            invoiceItems: null === (n = e.invoice_items) || void 0 === n ? void 0 : n.map(a.H),
            total: e.total,
            subtotal: e.subtotal,
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            subscriptionPeriodStart: new Date(e.subscription_period_start),
            subscriptionPeriodEnd: new Date(e.subscription_period_end),
            status: e.status
        });
    }
    constructor(e) {
        super(), o(this, 'id', void 0), o(this, 'invoiceItems', void 0), o(this, 'total', void 0), o(this, 'subtotal', void 0), o(this, 'currency', void 0), o(this, 'tax', void 0), o(this, 'taxInclusive', void 0), o(this, 'subscriptionPeriodStart', void 0), o(this, 'subscriptionPeriodEnd', void 0), o(this, 'status', void 0), (this.id = e.id), (this.invoiceItems = e.invoiceItems), (this.total = e.total), (this.subtotal = e.subtotal), (this.currency = e.currency), (this.tax = e.tax), (this.taxInclusive = e.taxInclusive), (this.subscriptionPeriodStart = e.subscriptionPeriodStart), (this.subscriptionPeriodEnd = e.subscriptionPeriodEnd), (this.status = e.status);
    }
}
