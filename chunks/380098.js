(n.d(t, { A: () => A }), n(938796));
var i = n(334279),
    s = n(122817),
    l = n(665260),
    r = n(315069),
    a = n(32731),
    o = n(557009),
    u = n(570221),
    d = n(202613),
    c = n(243217),
    g = n(652215),
    m = n(202541);
class A extends r.A {
    id;
    createdAt;
    currency;
    tax;
    taxInclusive;
    amount;
    amountRefunded;
    status;
    description;
    hasInvoiceURL;
    hasRefundInvoiceURLs;
    downloadableInvoice;
    downloadableRefundInvoices;
    flags;
    paymentSource;
    paymentGateway;
    subscription;
    skuId;
    skuPrice;
    sku;
    premiumRefundDisqualificationReasons;
    entitlements;
    invoice;
    static createFromServer(e) {
        let t = null != e.payment_source ? d.Ay.createFromServer(e.payment_source) : null,
            n = null != e.sku ? a.A.createFromServer(e.sku) : null,
            i = null != e.subscription ? c.A.createFromServer(e.subscription) : null;
        return new A({
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
            subscription: i,
            skuId: e.sku_id,
            skuPrice: e.sku_price,
            sku: n,
            downloadableInvoice: e.downloadable_invoice,
            downloadableRefundInvoices: e.downloadable_refund_invoices,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
            premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons,
            entitlements: null != e.entitlements ? e.entitlements.map((e) => o.A.createFromServer(e)) : void 0,
            invoice: null != e.invoice ? u.Y.createFromServer(e.invoice) : null,
        });
    }
    constructor(e) {
        (super(),
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
            (this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons),
            (this.entitlements = e.entitlements),
            (this.invoice = e.invoice));
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === g.kM_.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === g.kM_.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && m.JM.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return m.pW.has(t);
                })
        );
    }
    get isGift() {
        return l.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && Object.values(m.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === g.EZt.GUILD_PRODUCT || l.Lt(this.sku.flags, s.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === g.EZt.COLLECTIBLES;
    }
    get isFractionalPremium() {
        return null != this.skuId && i.I.ALL.has(this.skuId);
    }
    get isShopPurchase() {
        return this.isCollectible || this.isFractionalPremium;
    }
}
