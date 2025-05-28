n.d(t, { Z: () => o });
var r = n(81825),
    i = n(591548);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o extends r.Z {
    static createInvoiceFromServer(e) {
        var t;
        return new o({
            id: e.id,
            invoiceItems: null == (t = e.invoice_items) ? void 0 : t.map(i.H),
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
        super(), a(this, 'id', void 0), a(this, 'invoiceItems', void 0), a(this, 'total', void 0), a(this, 'subtotal', void 0), a(this, 'currency', void 0), a(this, 'tax', void 0), a(this, 'taxInclusive', void 0), a(this, 'subscriptionPeriodStart', void 0), a(this, 'subscriptionPeriodEnd', void 0), a(this, 'status', void 0), (this.id = e.id), (this.invoiceItems = e.invoiceItems), (this.total = e.total), (this.subtotal = e.subtotal), (this.currency = e.currency), (this.tax = e.tax), (this.taxInclusive = e.taxInclusive), (this.subscriptionPeriodStart = e.subscriptionPeriodStart), (this.subscriptionPeriodEnd = e.subscriptionPeriodEnd), (this.status = e.status);
    }
}
