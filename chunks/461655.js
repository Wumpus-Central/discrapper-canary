n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(789020);
var i,
    s,
    r = n(314877),
    a = n(81825),
    l = n(630388),
    o = n(46141),
    c = n(659181),
    d = n(255078),
    u = n(981631),
    m = n(474936);
function g(e, t, n) {
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
((s = i || (i = {}))[(s.GIFT = 1)] = 'GIFT'), (s[(s.PREORDER = 8)] = 'PREORDER');
class h extends a.Z {
    static createFromServer(e) {
        let t = null != e.payment_source ? o.ZP.createFromServer(e.payment_source) : null,
            n = null != e.sku ? c.Z.createFromServer(e.sku) : null,
            i = null != e.subscription ? d.Z.createFromServer(e.subscription) : null;
        return new h({
            id: e.id,
            createdAt: new Date(e.created_at),
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            amount: e.amount,
            amountRefunded: e.amount_refunded,
            status: e.status,
            metadata: e.metadata,
            description: e.description,
            paymentSource: t,
            paymentGateway: e.payment_gateway,
            paymentGatewayPaymentId: e.payment_gateway_payment_id,
            flags: e.flags,
            subscription: i,
            skuId: e.sku_id,
            skuPrice: e.sku_price,
            sku: n,
            downloadableInvoice: e.downloadable_invoice,
            downloadableRefundInvoices: e.downloadable_refund_invoices,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
            premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons
        });
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === u.gg$.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === u.gg$.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && m.dJ.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return m.Z1.has(t);
                })
        );
    }
    get isGift() {
        return l.yE(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && Object.values(m.Si).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return null != this.sku && (this.sku.productLine === u.POd.GUILD_PRODUCT || l.yE(this.sku.flags, r.l.GUILD_PRODUCT));
    }
    get isSoftDeletedProduct() {
        var e;
        return (null === (e = this.sku) || void 0 === e ? void 0 : e.deleted) === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === u.POd.COLLECTIBLES;
    }
    constructor(e) {
        super(), g(this, 'id', void 0), g(this, 'createdAt', void 0), g(this, 'currency', void 0), g(this, 'tax', void 0), g(this, 'taxInclusive', void 0), g(this, 'amount', void 0), g(this, 'amountRefunded', void 0), g(this, 'status', void 0), g(this, 'description', void 0), g(this, 'hasInvoiceURL', void 0), g(this, 'hasRefundInvoiceURLs', void 0), g(this, 'downloadableInvoice', void 0), g(this, 'downloadableRefundInvoices', void 0), g(this, 'flags', void 0), g(this, 'paymentSource', void 0), g(this, 'paymentGateway', void 0), g(this, 'paymentGatewayPaymentId', void 0), g(this, 'subscription', void 0), g(this, 'skuId', void 0), g(this, 'skuPrice', void 0), g(this, 'sku', void 0), g(this, 'premiumRefundDisqualificationReasons', void 0), (this.id = e.id), (this.amount = e.amount), (this.amountRefunded = e.amountRefunded), (this.createdAt = e.createdAt), (this.currency = e.currency), (this.description = e.description), (this.paymentSource = e.paymentSource), (this.paymentGateway = e.paymentGateway), (this.paymentGatewayPaymentId = e.paymentGatewayPaymentId), (this.status = e.status), (this.tax = e.tax), (this.taxInclusive = e.taxInclusive), (this.subscription = e.subscription), (this.skuId = e.skuId), (this.skuPrice = e.skuPrice), (this.sku = e.sku), (this.flags = e.flags), (this.downloadableInvoice = e.downloadableInvoice), (this.downloadableRefundInvoices = e.downloadableRefundInvoices), (this.hasInvoiceURL = e.hasInvoiceURL), (this.hasRefundInvoiceURLs = e.hasRefundInvoiceURLs), (this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons);
    }
}
