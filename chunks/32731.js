"use strict";
n.d(t, { A: () => h }), n(938796);
var i = n(989349),
    r = n.n(i),
    s = n(665260),
    a = n(315069),
    o = n(395671),
    l = n(384726),
    d = n(575593);
function _(e) {
    if (null != e)
        return {
            staticImagePath: e.static_image_path,
            animatedImagePath: e.animated_image_path,
            videoPath: e.video_path,
        };
}
function u(e) {
    return {
        src: e.src,
        loop: e.loop,
        height: e.height,
        width: e.width,
        duration: e.duration ?? 0,
        start: e.start ?? 0,
        loopDelay: e.loopDelay,
        position: e.position,
        zIndex: e.zIndex,
        randomizedSources: e.randomizedSources?.map((e) => {
            let { src: t } = e;
            return { src: t };
        }),
    };
}
let c = new Set(["500428425362931713", "451550535720501248", "471376328319303681", "466696214818193408"]);
var E = n(652215);
class h extends a.A {
    id;
    type;
    applicationId;
    application;
    eligiblePaymentGateways;
    googleSkuIds;
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
        return new h({
            id: e.id,
            type: e.type,
            applicationId: e.application_id,
            application: null != e.application ? o.Ay.createFromServer(e.application) : null,
            eligiblePaymentGateways: e.eligible_payment_gateways ?? null,
            googleSkuIds: e.google_sku_ids ?? null,
            productLine: e.product_line,
            name: e.name ?? "",
            releaseDate: null != e.release_date ? r()(e.release_date) : null,
            preorderReleaseAt: null != e.preorder_release_at ? r()(e.preorder_release_at) : null,
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
            prices: (0, l.A)(e.prices),
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
            bundledSkus: e.bundled_skus?.map((e) => h.createFromServer(e)) ?? [],
            tenantMetadata: (function (e) {
                if (null != e)
                    return {
                        socialLayer: (function (e) {
                            if (null != e)
                                return {
                                    carouselItems: e.carousel_items.map((e) => ({
                                        thumbnailAssetId: e.thumbnail_asset_id,
                                        assetId: e.asset_id,
                                        backgroundAssetId: e.background_asset_id,
                                        youtubeVideoId: e.youtube_video_id,
                                        label: e.label,
                                        labelIconAssetId: e.label_icon_asset_id,
                                        title: e.title,
                                        description: e.description,
                                    })),
                                    expiresAt: null != e.expires_at ? new Date(e.expires_at) : void 0,
                                    cardImageAssetId: e.card_image_asset_id,
                                    cardBackgroundImageAssetId: e.card_background_image_asset_id,
                                };
                        })(e.social_layer),
                        collectibles: (function (e) {
                            if (null != e)
                                return {
                                    type: e.type,
                                    item: (function (e) {
                                        if (null != e) {
                                            if (e.type === d.R.AVATAR_DECORATION)
                                                return {
                                                    id: e.id,
                                                    type: e.type,
                                                    asset: e.asset,
                                                    assets: _(e.assets),
                                                    label: e.label,
                                                };
                                            if (e.type === d.R.NAMEPLATE)
                                                return {
                                                    id: e.id,
                                                    type: e.type,
                                                    asset: e.asset,
                                                    assets: _(e.assets),
                                                    label: e.label,
                                                    palette: e.palette,
                                                };
                                            if (e.type === d.R.PROFILE_EFFECT)
                                                return {
                                                    id: e.id,
                                                    type: e.type,
                                                    title: e.title,
                                                    description: e.description,
                                                    accessibilityLabel: e.accessibilityLabel,
                                                    animationType: e.animationType,
                                                    staticFrameSrc: e.staticFrameSrc,
                                                    thumbnailPreviewSrc: e.thumbnailPreviewSrc,
                                                    reducedMotionSrc: e.reducedMotionSrc,
                                                    effects: e.effects?.map(u),
                                                };
                                            if (e.type === d.R.PROFILE_FRAME)
                                                return { id: e.id, type: e.type, label: e.label, layers: e.layers };
                                        }
                                    })(e.item),
                                    categorySkuId: e.category_sku_id,
                                    premiumType: e.premium_type,
                                    expiresSecondsAfterClaim: e.expires_seconds_after_claim,
                                    expiresAt: null != e.expires_at ? new Date(1e3 * e.expires_at) : void 0,
                                    variant: (function (e) {
                                        if (null != e)
                                            return {
                                                role: e.role,
                                                baseVariantSkuId: e.base_variant_sku_id,
                                                baseVariantName: e.base_variant_name,
                                                value: e.value,
                                                label: e.label,
                                                collapseUnder: e.collapse_under,
                                            };
                                    })(e.variant),
                                    optionSelectorDisplayValue: e.option_selector_display_value,
                                };
                        })(e.collectibles),
                    };
            })(e.tenant_metadata),
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
            (this.googleSkuIds = e.googleSkuIds),
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
        return e.length > 0 ? e : [E.uje.WINDOWS];
    }
    get isOnSale() {
        return null != this.price && null != this.price.saleAmount;
    }
    isGiftable() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.price;
        return (
            this.type === E.Puh.DURABLE_PRIMARY &&
            this.available &&
            this.requiresPayment &&
            null != e &&
            E.Ly6.has(e.currency) &&
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
        return c.has(this.id);
    }
    get available() {
        return (0, s.Lt)(this.flags, E.d68.AVAILABLE) || null != this.externalPurchaseUrl;
    }
    isAvailableForDistribution() {
        return (
            this.available &&
            null != this.getPrice() &&
            null == this.externalPurchaseUrl &&
            (!this.premium || (0, s.Lt)(this.flags, E.d68.PREMIUM_AND_DISTRIBUTION))
        );
    }
    isAvailable() {
        return (0, s.Lt)(this.flags, E.d68.AVAILABLE);
    }
    isPremiumPerk() {
        return (
            this.premium &&
            ((0, s.Lt)(this.flags, E.d68.PREMIUM_PURCHASE) || (0, s.Lt)(this.flags, E.d68.PREMIUM_AND_DISTRIBUTION))
        );
    }
    hasFeature(e) {
        return this.features.has(e);
    }
    isPreorder() {
        return null != this.preorderReleaseAt || null != this.preorderApproximateReleaseDate;
    }
}
