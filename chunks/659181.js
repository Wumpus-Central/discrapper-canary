n.d(t, { Z: () => _ }), n(388685), n(997841), n(953529);
var r = n(913527),
    i = n.n(r),
    a = n(95015),
    o = n(81825),
    s = n(164670),
    l = n(973616),
    c = n(981631);
function u(e, t, n) {
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
let d = ["500428425362931713", "451550535720501248", "471376328319303681", "466696214818193408"];
function f(e) {
    if (null != e && null != e.social_layer) return { socialLayer: (0, s.x6)(e.social_layer) };
}
class _ extends o.Z {
    static createFromServer(e) {
        var t, n, r, a, o, s, c;
        let { price: u } = e;
        return new _({
            id: e.id,
            type: e.type,
            applicationId: e.application_id,
            application: null != e.application ? l.ZP.createFromServer(e.application) : null,
            eligiblePaymentGateways: null != (t = e.eligible_payment_gateways) ? t : null,
            productLine: e.product_line,
            name: null != (n = e.name) ? n : "",
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
                          premium: u.premium,
                      }
                    : null,
            premium: null != (r = e.premium) && r,
            showAgeGate: e.show_age_gate || !1,
            restricted: e.restricted || !1,
            slug: null != (a = e.slug) ? a : "",
            exclusive: e.exclusive || !1,
            locales: null != (o = e.locales) ? o : ["en-US"],
            flags: e.flags,
            externalPurchaseUrl: e.external_purchase_url,
            deleted: null != (s = e.deleted) && s,
            bundledSkuIds: null != (c = e.bundled_sku_ids) ? c : [],
            tenantMetadata: f(e.tenant_metadata),
            thumbnailAssetId: e.thumbnail_asset_id,
            description: e.description,
        });
    }
    get supportedOperatingSystems() {
        let e = null != this.systemRequirements ? Object.keys(this.systemRequirements) : [];
        return e.length > 0 ? e : [c.TaA.WINDOWS];
    }
    get isOnSale() {
        return null != this.price && null != this.price.saleAmount;
    }
    isGiftable() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.price;
        return (
            this.type === c.epS.DURABLE_PRIMARY &&
            this.available &&
            this.requiresPayment &&
            null != e &&
            c.w2V.has(e.currency) &&
            null == this.externalPurchaseUrl
        );
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
                    currency: n.currency,
                };
        }
        return t && null != n.saleAmount
            ? {
                  amount: n.saleAmount,
                  currency: n.currency,
              }
            : {
                  amount: n.amount,
                  currency: n.currency,
              };
    }
    getDisplaySalePercentage() {
        return null == this.price || null == this.price.salePercentage
            ? null
            : "-".concat(this.price.salePercentage, "%");
    }
    get requiresPayment() {
        let e = this.getPrice();
        return !this.premium && null != e && e.amount > 0;
    }
    get isTheGameAwardsWinner() {
        return d.includes(this.id);
    }
    get available() {
        return (0, a.yE)(this.flags, c.l4R.AVAILABLE) || null != this.externalPurchaseUrl;
    }
    isAvailableForDistribution() {
        return (
            this.available &&
            null != this.getPrice() &&
            null == this.externalPurchaseUrl &&
            (!this.premium || (0, a.yE)(this.flags, c.l4R.PREMIUM_AND_DISTRIBUTION))
        );
    }
    isAvailable() {
        return (0, a.yE)(this.flags, c.l4R.AVAILABLE);
    }
    isPremiumPerk() {
        return (
            this.premium &&
            ((0, a.yE)(this.flags, c.l4R.PREMIUM_PURCHASE) || (0, a.yE)(this.flags, c.l4R.PREMIUM_AND_DISTRIBUTION))
        );
    }
    hasFeature(e) {
        return this.features.has(e);
    }
    isPreorder() {
        return null != this.preorderReleaseAt || null != this.preorderApproximateReleaseDate;
    }
    constructor(e) {
        super(),
            u(this, "id", void 0),
            u(this, "type", void 0),
            u(this, "applicationId", void 0),
            u(this, "application", void 0),
            u(this, "eligiblePaymentGateways", void 0),
            u(this, "productLine", void 0),
            u(this, "name", void 0),
            u(this, "releaseDate", void 0),
            u(this, "preorderReleaseAt", void 0),
            u(this, "preorderApproximateReleaseDate", void 0),
            u(this, "summary", void 0),
            u(this, "features", void 0),
            u(this, "genres", void 0),
            u(this, "dependentSkuId", void 0),
            u(this, "manifests", void 0),
            u(this, "availableRegions", void 0),
            u(this, "accessType", void 0),
            u(this, "systemRequirements", void 0),
            u(this, "contentRating", void 0),
            u(this, "contentRatingAgency", void 0),
            u(this, "legalNotice", void 0),
            u(this, "price", void 0),
            u(this, "premium", void 0),
            u(this, "showAgeGate", void 0),
            u(this, "restricted", void 0),
            u(this, "slug", void 0),
            u(this, "exclusive", void 0),
            u(this, "locales", void 0),
            u(this, "flags", void 0),
            u(this, "externalPurchaseUrl", void 0),
            u(this, "deleted", void 0),
            u(this, "bundledSkuIds", void 0),
            u(this, "tenantMetadata", void 0),
            u(this, "thumbnailAssetId", void 0),
            u(this, "description", void 0),
            (this.id = e.id),
            (this.type = e.type),
            (this.applicationId = e.applicationId),
            (this.application = e.application),
            (this.eligiblePaymentGateways = e.eligiblePaymentGateways),
            (this.productLine = e.productLine),
            (this.name = e.name),
            (this.preorderReleaseAt = e.preorderReleaseAt),
            (this.preorderApproximateReleaseDate = e.preorderApproximateReleaseDate),
            (this.releaseDate = e.releaseDate),
            (this.summary = e.summary),
            (this.features = e.features),
            (this.genres = e.genres),
            (this.dependentSkuId = e.dependentSkuId),
            (this.manifests = e.manifests),
            (this.availableRegions = e.availableRegions),
            (this.accessType = e.accessType),
            (this.systemRequirements = e.systemRequirements),
            (this.contentRating = e.contentRating),
            (this.contentRatingAgency = e.contentRatingAgency),
            (this.legalNotice = e.legalNotice),
            (this.price = e.price),
            (this.premium = e.premium),
            (this.showAgeGate = e.showAgeGate),
            (this.restricted = e.restricted),
            (this.slug = e.slug),
            (this.exclusive = e.exclusive),
            (this.locales = e.locales),
            (this.flags = e.flags),
            (this.externalPurchaseUrl = e.externalPurchaseUrl || null),
            (this.deleted = e.deleted),
            (this.bundledSkuIds = e.bundledSkuIds),
            (this.tenantMetadata = e.tenantMetadata),
            (this.thumbnailAssetId = e.thumbnailAssetId),
            (this.description = e.description);
    }
}
