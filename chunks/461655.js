n.d(t, { Z: () => m }), n(266796), n(789020);
var r = n(314877),
    i = n(81825),
    s = n(630388),
    a = n(46141),
    l = n(659181),
    o = n(255078),
    c = n(981631),
    d = n(474936);
function u(e, t, n) {
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
class m extends i.Z {
    static createFromServer(e) {
        let t = null != e.payment_source ? a.ZP.createFromServer(e.payment_source) : null,
            n = null != e.sku ? l.Z.createFromServer(e.sku) : null,
            r = null != e.subscription ? o.Z.createFromServer(e.subscription) : null;
        return new m({
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
            subscription: r,
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
        return this.paymentGateway === c.gg$.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === c.gg$.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && d.dJ.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return d.Z1.has(t);
                })
        );
    }
    get isGift() {
        return s.yE(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && Object.values(d.Si).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return null != this.sku && (this.sku.productLine === c.POd.GUILD_PRODUCT || s.yE(this.sku.flags, r.l.GUILD_PRODUCT));
    }
    get isSoftDeletedProduct() {
        var e;
        return (null == (e = this.sku) ? void 0 : e.deleted) === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === c.POd.COLLECTIBLES;
    }
    constructor(e) {
        super(), u(this, 'id', void 0), u(this, 'createdAt', void 0), u(this, 'currency', void 0), u(this, 'tax', void 0), u(this, 'taxInclusive', void 0), u(this, 'amount', void 0), u(this, 'amountRefunded', void 0), u(this, 'status', void 0), u(this, 'description', void 0), u(this, 'hasInvoiceURL', void 0), u(this, 'hasRefundInvoiceURLs', void 0), u(this, 'downloadableInvoice', void 0), u(this, 'downloadableRefundInvoices', void 0), u(this, 'flags', void 0), u(this, 'paymentSource', void 0), u(this, 'paymentGateway', void 0), u(this, 'paymentGatewayPaymentId', void 0), u(this, 'subscription', void 0), u(this, 'skuId', void 0), u(this, 'skuPrice', void 0), u(this, 'sku', void 0), u(this, 'premiumRefundDisqualificationReasons', void 0), (this.id = e.id), (this.amount = e.amount), (this.amountRefunded = e.amountRefunded), (this.createdAt = e.createdAt), (this.currency = e.currency), (this.description = e.description), (this.paymentSource = e.paymentSource), (this.paymentGateway = e.paymentGateway), (this.paymentGatewayPaymentId = e.paymentGatewayPaymentId), (this.status = e.status), (this.tax = e.tax), (this.taxInclusive = e.taxInclusive), (this.subscription = e.subscription), (this.skuId = e.skuId), (this.skuPrice = e.skuPrice), (this.sku = e.sku), (this.flags = e.flags), (this.downloadableInvoice = e.downloadableInvoice), (this.downloadableRefundInvoices = e.downloadableRefundInvoices), (this.hasInvoiceURL = e.hasInvoiceURL), (this.hasRefundInvoiceURLs = e.hasRefundInvoiceURLs), (this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons);
    }
}
