"use strict";
n.d(t, { A: () => _ });
var i = n(384726),
    r = n(696444),
    s = n(474012),
    a = n(986630),
    o = n(758836),
    l = n(652215);
class _ {
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
            name: d,
            premium_type: u,
            category_sku_id: c,
            prices: E,
            bundled_products: h,
            variants: m,
            base_variant_name: f,
            base_variant_sku_id: g,
            variant_label: A,
            variant_value: I,
            purchased_at: p,
            purchase_type: T,
            expires_at: S,
            ...N
        } = e;
        return new _({
            type: t,
            name: d,
            skuId: n,
            premiumType: u === l.oA2 ? null : u,
            categorySkuId: c,
            isCategoryReward: o.MS.some((e) => {
                let { rewardSkuId: t } = e;
                return t === n;
            }),
            prices: (0, i.A)(E),
            items: (0, s.K)(N.items),
            bundledProducts: h?.map(r.A.fromServer),
            variants: m?.map(a.x.fromServer),
            googleSkuIds: N.google_sku_ids,
            eligibleOffers: N.eligible_offers,
            baseVariantName: f,
            baseVariantSkuId: g,
            variantLabel: A,
            variantValue: I,
            purchaseType: T,
            purchasedAt: null != p ? new Date(p) : p,
            expiresAt: null != S ? new Date(S) : null,
        });
    }
}
