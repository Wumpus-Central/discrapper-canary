"use strict";
n.d(t, { A: () => _ }), n(938796);
var r = n(989349),
    i = n.n(r),
    s = n(665260),
    a = n(315069),
    o = n(935816),
    l = n(611010),
    u = n(820269),
    c = n(652215);
let d = ["500428425362931713", "451550535720501248", "471376328319303681", "466696214818193408"];
class _ extends a.A {
    id;
    type;
    applicationId;
    application;
    eligiblePaymentGateways;
    productLine;
    name;
    releaseDate;
    preorderReleaseAt;
    preorderApproximateReleaseDate;
    summary;
    features;
    genres;
    dependentSkuId;
    manifests;
    availableRegions;
    accessType;
    systemRequirements;
    contentRating;
    contentRatingAgency;
    legalNotice;
    price;
    prices;
    premium;
    showAgeGate;
    restricted;
    slug;
    exclusive;
    locales;
    flags;
    externalPurchaseUrl;
    deleted;
    bundledSkuIds;
    bundledSkus;
    tenantMetadata;
    selectedOptions;
    productId;
    thumbnailAssetId;
    description;
    orbsReward;
    eligibleOffers;
    static createFromServer(e) {
        let { price: t } = e;
        return new _({
            id: e.id,
            type: e.type,
            applicationId: e.application_id,
            application: null != e.application ? l.Ay.createFromServer(e.application) : null,
            eligiblePaymentGateways: e.eligible_payment_gateways ?? null,
            productLine: e.product_line,
            name: e.name ?? "",
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
                null != t
                    ? {
                          amount: t.amount,
                          currency: t.currency,
                          saleAmount: t.sale_amount,
                          salePercentage: t.sale_percentage,
                          premium: t.premium,
                      }
                    : null,
            prices: null != e.prices ? (0, o.m)(e.prices) : {},
            premium: e.premium ?? !1,
            showAgeGate: e.show_age_gate || !1,
            restricted: e.restricted || !1,
            slug: e.slug ?? "",
            exclusive: e.exclusive || !1,
            locales: e.locales ?? ["en-US"],
            flags: e.flags,
            externalPurchaseUrl: e.external_purchase_url,
            deleted: e.deleted ?? !1,
            bundledSkuIds: e.bundled_sku_ids ?? [],
            bundledSkus: e.bundled_skus?.map((e) => _.createFromServer(e)) ?? [],
            tenantMetadata: (0, u.A)(e.tenant_metadata),
            selectedOptions:
                e.selected_options?.map((e) => {
                    let { option_name: t, option_value: n } = e;
                    return { optionName: t, optionValue: n };
                }) ?? [],
            productId: e.product_id,
            thumbnailAssetId: e.thumbnail_asset_id,
            description: e.description,
            orbsReward: e.orbs_reward,
            eligibleOffers: e.eligible_offers ?? [],
        });
    }
    constructor(e) {
        super(),
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
            (this.prices = e.prices),
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
            (this.bundledSkus = e.bundledSkus),
            (this.tenantMetadata = e.tenantMetadata),
            (this.selectedOptions = e.selectedOptions),
            (this.productId = e.productId),
            (this.thumbnailAssetId = e.thumbnailAssetId),
            (this.description = e.description),
            (this.orbsReward = e.orbsReward),
            (this.eligibleOffers = e.eligibleOffers);
    }
    get supportedOperatingSystems() {
        let e = null != this.systemRequirements ? Object.keys(this.systemRequirements) : [];
        return e.length > 0 ? e : [c.uje.WINDOWS];
    }
    get isOnSale() {
        return null != this.price && null != this.price.saleAmount;
    }
    isGiftable() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.price;
        return (
            this.type === c.Puh.DURABLE_PRIMARY &&
            this.available &&
            this.requiresPayment &&
            null != e &&
            c.Ly6.has(e.currency) &&
            null == this.externalPurchaseUrl
        );
    }
    getPrice() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { price: n } = this;
        if (null == n) return null;
        if (null != e) {
            let t = n.premium?.[e];
            if (null != t) return { amount: t.amount, currency: n.currency };
        }
        return t && null != n.saleAmount
            ? { amount: n.saleAmount, currency: n.currency }
            : { amount: n.amount, currency: n.currency };
    }
    getDisplaySalePercentage() {
        return null == this.price || null == this.price.salePercentage ? null : `-${this.price.salePercentage}%`;
    }
    get requiresPayment() {
        let e = this.getPrice();
        return !this.premium && null != e && e.amount > 0;
    }
    get isTheGameAwardsWinner() {
        return d.includes(this.id);
    }
    get available() {
        return (0, s.Lt)(this.flags, c.d68.AVAILABLE) || null != this.externalPurchaseUrl;
    }
    isAvailableForDistribution() {
        return (
            this.available &&
            null != this.getPrice() &&
            null == this.externalPurchaseUrl &&
            (!this.premium || (0, s.Lt)(this.flags, c.d68.PREMIUM_AND_DISTRIBUTION))
        );
    }
    isAvailable() {
        return (0, s.Lt)(this.flags, c.d68.AVAILABLE);
    }
    isPremiumPerk() {
        return (
            this.premium &&
            ((0, s.Lt)(this.flags, c.d68.PREMIUM_PURCHASE) || (0, s.Lt)(this.flags, c.d68.PREMIUM_AND_DISTRIBUTION))
        );
    }
    hasFeature(e) {
        return this.features.has(e);
    }
    isPreorder() {
        return null != this.preorderReleaseAt || null != this.preorderApproximateReleaseDate;
    }
}
