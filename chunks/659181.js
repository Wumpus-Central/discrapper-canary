n.d(t, { Z: () => d }), n(47120), n(789020);
var r = n(913527),
    i = n.n(r),
    o = n(81825),
    a = n(630388),
    s = n(973616),
    l = n(981631);
function c(e, t, n) {
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
let u = ['500428425362931713', '451550535720501248', '471376328319303681', '466696214818193408'];
class d extends o.Z {
    static createFromServer(e) {
        var t, n, r, o, a, l, c;
        let { price: u } = e;
        return new d({
            id: e.id,
            type: e.type,
            applicationId: e.application_id,
            application: null != e.application ? s.ZP.createFromServer(e.application) : null,
            eligiblePaymentGateways: null != (t = e.eligible_payment_gateways) ? t : null,
            productLine: e.product_line,
            name: null != (n = e.name) ? n : '',
            releaseDate: null != e.release_date ? i()(e.release_date) : null,
            preorderReleaseAt: null != e.preorder_release_at ? i()(e.preorder_release_at) : null,
            preorderApproximateReleaseDate: e.preorder_approximate_release_date,
            summary: e.summary,
            features: new Set(e.features),
            genres: new Set(e.genres),
            dependentSkuId: e.dependent_sku_id,
            manifests: e.manifests,
            availableRegions: e.available_regions,
            accessType: e.access_type,
            systemRequirements: e.system_requirements,
            contentRating: e.content_rating,
            contentRatingAgency: e.content_rating_agency,
            legalNotice: e.legal_notice,
            price:
                null != u
                    ? {
                          amount: u.amount,
                          currency: u.currency,
                          saleAmount: u.sale_amount,
                          salePercentage: u.sale_percentage,
                          premium: u.premium
                      }
                    : null,
            premium: null != (r = e.premium) && r,
            showAgeGate: e.show_age_gate || !1,
            restricted: e.restricted || !1,
            slug: null != (o = e.slug) ? o : '',
            exclusive: e.exclusive || !1,
            locales: null != (a = e.locales) ? a : ['en-US'],
            flags: e.flags,
            externalPurchaseUrl: e.external_purchase_url,
            deleted: null != (l = e.deleted) && l,
            bundledSkuIds: null != (c = e.bundled_sku_ids) ? c : []
        });
    }
    get supportedOperatingSystems() {
        let e = null != this.systemRequirements ? Object.keys(this.systemRequirements) : [];
        return e.length > 0 ? e : [l.TaA.WINDOWS];
    }
    get isOnSale() {
        return null != this.price && null != this.price.saleAmount;
    }
    isGiftable() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.price;
        return this.type === l.epS.DURABLE_PRIMARY && this.available && this.requiresPayment && null != e && l.w2V.has(e.currency) && null == this.externalPurchaseUrl;
    }
    getPrice() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { price: n } = this;
        if (null == n) return null;
        if (null != e) {
            var r;
            let t = null == (r = n.premium) ? void 0 : r[e];
            if (null != t)
                return {
                    amount: t.amount,
                    currency: n.currency
                };
        }
        return t && null != n.saleAmount
            ? {
                  amount: n.saleAmount,
                  currency: n.currency
              }
            : {
                  amount: n.amount,
                  currency: n.currency
              };
    }
    getDisplaySalePercentage() {
        return null == this.price || null == this.price.salePercentage ? null : '-'.concat(this.price.salePercentage, '%');
    }
    get requiresPayment() {
        let e = this.getPrice();
        return !this.premium && null != e && e.amount > 0;
    }
    get isTheGameAwardsWinner() {
        return u.includes(this.id);
    }
    get available() {
        return (0, a.yE)(this.flags, l.l4R.AVAILABLE) || null != this.externalPurchaseUrl;
    }
    isAvailableForDistribution() {
        return this.available && null != this.getPrice() && null == this.externalPurchaseUrl && (!this.premium || (0, a.yE)(this.flags, l.l4R.PREMIUM_AND_DISTRIBUTION));
    }
    isAvailable() {
        return (0, a.yE)(this.flags, l.l4R.AVAILABLE);
    }
    isPremiumPerk() {
        return this.premium && ((0, a.yE)(this.flags, l.l4R.PREMIUM_PURCHASE) || (0, a.yE)(this.flags, l.l4R.PREMIUM_AND_DISTRIBUTION));
    }
    hasFeature(e) {
        return this.features.has(e);
    }
    isPreorder() {
        return null != this.preorderReleaseAt || null != this.preorderApproximateReleaseDate;
    }
    constructor(e) {
        super(), c(this, 'id', void 0), c(this, 'type', void 0), c(this, 'applicationId', void 0), c(this, 'application', void 0), c(this, 'eligiblePaymentGateways', void 0), c(this, 'productLine', void 0), c(this, 'name', void 0), c(this, 'releaseDate', void 0), c(this, 'preorderReleaseAt', void 0), c(this, 'preorderApproximateReleaseDate', void 0), c(this, 'summary', void 0), c(this, 'features', void 0), c(this, 'genres', void 0), c(this, 'dependentSkuId', void 0), c(this, 'manifests', void 0), c(this, 'availableRegions', void 0), c(this, 'accessType', void 0), c(this, 'systemRequirements', void 0), c(this, 'contentRating', void 0), c(this, 'contentRatingAgency', void 0), c(this, 'legalNotice', void 0), c(this, 'price', void 0), c(this, 'premium', void 0), c(this, 'showAgeGate', void 0), c(this, 'restricted', void 0), c(this, 'slug', void 0), c(this, 'exclusive', void 0), c(this, 'locales', void 0), c(this, 'flags', void 0), c(this, 'externalPurchaseUrl', void 0), c(this, 'deleted', void 0), c(this, 'bundledSkuIds', void 0), (this.id = e.id), (this.type = e.type), (this.applicationId = e.applicationId), (this.application = e.application), (this.eligiblePaymentGateways = e.eligiblePaymentGateways), (this.productLine = e.productLine), (this.name = e.name), (this.preorderReleaseAt = e.preorderReleaseAt), (this.preorderApproximateReleaseDate = e.preorderApproximateReleaseDate), (this.releaseDate = e.releaseDate), (this.summary = e.summary), (this.features = e.features), (this.genres = e.genres), (this.dependentSkuId = e.dependentSkuId), (this.manifests = e.manifests), (this.availableRegions = e.availableRegions), (this.accessType = e.accessType), (this.systemRequirements = e.systemRequirements), (this.contentRating = e.contentRating), (this.contentRatingAgency = e.contentRatingAgency), (this.legalNotice = e.legalNotice), (this.price = e.price), (this.premium = e.premium), (this.showAgeGate = e.showAgeGate), (this.restricted = e.restricted), (this.slug = e.slug), (this.exclusive = e.exclusive), (this.locales = e.locales), (this.flags = e.flags), (this.externalPurchaseUrl = e.externalPurchaseUrl || null), (this.deleted = e.deleted), (this.bundledSkuIds = e.bundledSkuIds);
    }
}
