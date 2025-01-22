r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(789020);
var o = r(913527),
    s = r.n(o),
    l = r(81825),
    u = r(630388),
    c = r(973616),
    d = r(981631);
function f(e, n, r) {
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
let p = ['500428425362931713', '451550535720501248', '471376328319303681', '466696214818193408'];
class h extends l.Z {
    static createFromServer(e) {
        var n, r, i, a, o, l;
        let { price: u } = e;
        return new h({
            id: e.id,
            type: e.type,
            applicationId: e.application_id,
            application: null != e.application ? c.ZP.createFromServer(e.application) : null,
            productLine: e.product_line,
            name: null !== (n = e.name) && void 0 !== n ? n : '',
            releaseDate: null != e.release_date ? s()(e.release_date) : null,
            preorderReleaseAt: null != e.preorder_release_at ? s()(e.preorder_release_at) : null,
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
            premium: null !== (r = e.premium) && void 0 !== r && r,
            showAgeGate: e.show_age_gate || !1,
            restricted: e.restricted || !1,
            slug: null !== (i = e.slug) && void 0 !== i ? i : '',
            exclusive: e.exclusive || !1,
            locales: null !== (a = e.locales) && void 0 !== a ? a : ['en-US'],
            flags: e.flags,
            externalPurchaseUrl: e.external_purchase_url,
            deleted: null !== (o = e.deleted) && void 0 !== o && o,
            bundledSkuIds: null !== (l = e.bundled_sku_ids) && void 0 !== l ? l : []
        });
    }
    get supportedOperatingSystems() {
        let e = null != this.systemRequirements ? Object.keys(this.systemRequirements) : [];
        return e.length > 0 ? e : [d.TaA.WINDOWS];
    }
    get isOnSale() {
        return null != this.price && null != this.price.saleAmount;
    }
    isGiftable() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.price;
        return this.type === d.epS.DURABLE_PRIMARY && this.available && this.requiresPayment && null != e && d.w2V.has(e.currency) && null == this.externalPurchaseUrl;
    }
    getPrice() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { price: r } = this;
        if (null == r) return null;
        if (null != e) {
            var i;
            let n = null === (i = r.premium) || void 0 === i ? void 0 : i[e];
            if (null != n)
                return {
                    amount: n.amount,
                    currency: r.currency
                };
        }
        return n && null != r.saleAmount
            ? {
                  amount: r.saleAmount,
                  currency: r.currency
              }
            : {
                  amount: r.amount,
                  currency: r.currency
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
        return p.includes(this.id);
    }
    get available() {
        return (0, u.yE)(this.flags, d.l4R.AVAILABLE) || null != this.externalPurchaseUrl;
    }
    isAvailableForDistribution() {
        return this.available && null != this.getPrice() && null == this.externalPurchaseUrl && (!this.premium || (0, u.yE)(this.flags, d.l4R.PREMIUM_AND_DISTRIBUTION));
    }
    isAvailable() {
        return (0, u.yE)(this.flags, d.l4R.AVAILABLE);
    }
    isPremiumPerk() {
        return this.premium && ((0, u.yE)(this.flags, d.l4R.PREMIUM_PURCHASE) || (0, u.yE)(this.flags, d.l4R.PREMIUM_AND_DISTRIBUTION));
    }
    hasFeature(e) {
        return this.features.has(e);
    }
    isPreorder() {
        return null != this.preorderReleaseAt || null != this.preorderApproximateReleaseDate;
    }
    constructor(e) {
        super(), f(this, 'id', void 0), f(this, 'type', void 0), f(this, 'applicationId', void 0), f(this, 'application', void 0), f(this, 'productLine', void 0), f(this, 'name', void 0), f(this, 'releaseDate', void 0), f(this, 'preorderReleaseAt', void 0), f(this, 'preorderApproximateReleaseDate', void 0), f(this, 'summary', void 0), f(this, 'features', void 0), f(this, 'genres', void 0), f(this, 'dependentSkuId', void 0), f(this, 'manifests', void 0), f(this, 'availableRegions', void 0), f(this, 'accessType', void 0), f(this, 'systemRequirements', void 0), f(this, 'contentRating', void 0), f(this, 'contentRatingAgency', void 0), f(this, 'legalNotice', void 0), f(this, 'price', void 0), f(this, 'premium', void 0), f(this, 'showAgeGate', void 0), f(this, 'restricted', void 0), f(this, 'slug', void 0), f(this, 'exclusive', void 0), f(this, 'locales', void 0), f(this, 'flags', void 0), f(this, 'externalPurchaseUrl', void 0), f(this, 'deleted', void 0), f(this, 'bundledSkuIds', void 0), (this.id = e.id), (this.type = e.type), (this.applicationId = e.applicationId), (this.application = e.application), (this.productLine = e.productLine), (this.name = e.name), (this.preorderReleaseAt = e.preorderReleaseAt), (this.preorderApproximateReleaseDate = e.preorderApproximateReleaseDate), (this.releaseDate = e.releaseDate), (this.summary = e.summary), (this.features = e.features), (this.genres = e.genres), (this.dependentSkuId = e.dependentSkuId), (this.manifests = e.manifests), (this.availableRegions = e.availableRegions), (this.accessType = e.accessType), (this.systemRequirements = e.systemRequirements), (this.contentRating = e.contentRating), (this.contentRatingAgency = e.contentRatingAgency), (this.legalNotice = e.legalNotice), (this.price = e.price), (this.premium = e.premium), (this.showAgeGate = e.showAgeGate), (this.restricted = e.restricted), (this.slug = e.slug), (this.exclusive = e.exclusive), (this.locales = e.locales), (this.flags = e.flags), (this.externalPurchaseUrl = e.externalPurchaseUrl || null), (this.deleted = e.deleted), (this.bundledSkuIds = e.bundledSkuIds);
    }
}
