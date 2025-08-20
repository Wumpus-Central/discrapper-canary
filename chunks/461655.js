n.d(t, { Z: () => f }), n(953529), n(997841);
var r = n(314877),
    i = n(81825),
    a = n(630388),
    o = n(46141),
    s = n(659181),
    l = n(255078),
    c = n(981631),
    u = n(474936);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class f extends i.Z {
    static createFromServer(e) {
        let t = null != e.payment_source ? o.ZP.createFromServer(e.payment_source) : null,
            n = null != e.sku ? s.Z.createFromServer(e.sku) : null,
            r = null != e.subscription ? l.Z.createFromServer(e.subscription) : null;
        return new f({
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
            flags: e.flags,
            subscription: r,
            skuId: e.sku_id,
            skuPrice: e.sku_price,
            sku: n,
            downloadableInvoice: e.downloadable_invoice,
            downloadableRefundInvoices: e.downloadable_refund_invoices,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
            premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons,
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
        return null != this.subscription && u.dJ.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return u.Z1.has(t);
                })
        );
    }
    get isGift() {
        return a.yE(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && Object.values(u.Si).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === c.POd.GUILD_PRODUCT || a.yE(this.sku.flags, r.l.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        var e;
        return (null == (e = this.sku) ? void 0 : e.deleted) === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === c.POd.COLLECTIBLES;
    }
    constructor(e) {
        super(),
            d(this, "id", void 0),
            d(this, "createdAt", void 0),
            d(this, "currency", void 0),
            d(this, "tax", void 0),
            d(this, "taxInclusive", void 0),
            d(this, "amount", void 0),
            d(this, "amountRefunded", void 0),
            d(this, "status", void 0),
            d(this, "description", void 0),
            d(this, "hasInvoiceURL", void 0),
            d(this, "hasRefundInvoiceURLs", void 0),
            d(this, "downloadableInvoice", void 0),
            d(this, "downloadableRefundInvoices", void 0),
            d(this, "flags", void 0),
            d(this, "paymentSource", void 0),
            d(this, "paymentGateway", void 0),
            d(this, "subscription", void 0),
            d(this, "skuId", void 0),
            d(this, "skuPrice", void 0),
            d(this, "sku", void 0),
            d(this, "premiumRefundDisqualificationReasons", void 0),
            (this.id = e.id),
            (this.amount = e.amount),
            (this.amountRefunded = e.amountRefunded),
            (this.createdAt = e.createdAt),
            (this.currency = e.currency),
            (this.description = e.description),
            (this.paymentSource = e.paymentSource),
            (this.paymentGateway = e.paymentGateway),
            (this.status = e.status),
            (this.tax = e.tax),
            (this.taxInclusive = e.taxInclusive),
            (this.subscription = e.subscription),
            (this.skuId = e.skuId),
            (this.skuPrice = e.skuPrice),
            (this.sku = e.sku),
            (this.flags = e.flags),
            (this.downloadableInvoice = e.downloadableInvoice),
            (this.downloadableRefundInvoices = e.downloadableRefundInvoices),
            (this.hasInvoiceURL = e.hasInvoiceURL),
            (this.hasRefundInvoiceURLs = e.hasRefundInvoiceURLs),
            (this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons);
    }
}
