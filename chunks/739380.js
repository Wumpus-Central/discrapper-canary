"use strict";
n.d(t, { A: () => u });
var r = n(696444),
    i = n(474012),
    a = n(935816),
    s = n(986630),
    o = n(758836),
    l = n(652215);
class u {
    skuId;
    name;
    type;
    premiumType;
    items;
    categorySkuId;
    isCategoryReward;
    prices;
    bundledProducts;
    variants;
    variantGroupStoreListingId;
    googleSkuIds;
    eligibleOffers;
    baseVariantName;
    baseVariantSkuId;
    variantLabel;
    variantValue;
    purchaseType;
    purchasedAt;
    expiresAt;
    constructor(e) {
        (this.skuId = e.skuId),
            (this.name = e.name),
            (this.type = e.type),
            (this.premiumType = e.premiumType),
            (this.items = e.items),
            (this.categorySkuId = e.categorySkuId),
            (this.isCategoryReward = e.isCategoryReward),
            (this.prices = e.prices),
            (this.bundledProducts = e.bundledProducts),
            (this.googleSkuIds = e.googleSkuIds),
            (this.variants = e.variants),
            (this.eligibleOffers = e.eligibleOffers),
            (this.baseVariantName = e.baseVariantName),
            (this.baseVariantSkuId = e.baseVariantSkuId),
            (this.variantLabel = e.variantLabel),
            (this.variantValue = e.variantValue),
            (this.purchasedAt = e.purchasedAt),
            (this.purchaseType = e.purchaseType),
            (this.expiresAt = e.expiresAt);
    }
    static fromServer(e) {
        let {
            type: t,
            sku_id: n,
            name: c,
            premium_type: d,
            category_sku_id: _,
            prices: f,
            bundled_products: p,
            variants: h,
            base_variant_name: m,
            base_variant_sku_id: g,
            variant_label: E,
            variant_value: A,
            purchased_at: I,
            purchase_type: T,
            expires_at: y,
            ...S
        } = e;
        return new u({
            type: t,
            name: c,
            skuId: n,
            premiumType: d === l.oA2 ? null : d,
            categorySkuId: _,
            isCategoryReward: o.MS.some((e) => {
                let { rewardSkuId: t } = e;
                return t === n;
            }),
            prices: (0, a.m)(f),
            items: (0, i.K)(S.items),
            bundledProducts: p?.map(r.A.fromServer),
            variants: h?.map(s.x.fromServer),
            googleSkuIds: S.google_sku_ids,
            eligibleOffers: S.eligible_offers,
            baseVariantName: m,
            baseVariantSkuId: g,
            variantLabel: E,
            variantValue: A,
            purchaseType: T,
            purchasedAt: null != I ? new Date(I) : I,
            expiresAt: null != y ? new Date(y) : null,
        });
    }
}
