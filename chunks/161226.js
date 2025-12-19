n.d(t, { Z: () => f });
var r = n(587177),
    i = n(718424),
    a = n(311850),
    o = n(778787),
    s = n(215023),
    l = n(981631);
function c(e, t, n) {
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
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class f {
    static fromServer(e) {
        var {
                type: t,
                sku_id: n,
                name: c,
                premium_type: d,
                category_sku_id: p,
                prices: _,
                bundled_products: m,
                variants: h,
                base_variant_name: g,
                base_variant_sku_id: E,
                variant_label: b,
                variant_value: y,
                purchased_at: O,
                purchase_type: v,
                expires_at: S,
            } = e,
            I = u(e, [
                "type",
                "sku_id",
                "name",
                "premium_type",
                "category_sku_id",
                "prices",
                "bundled_products",
                "variants",
                "base_variant_name",
                "base_variant_sku_id",
                "variant_label",
                "variant_value",
                "purchased_at",
                "purchase_type",
                "expires_at",
            ]);
        return new f({
            type: t,
            name: c,
            skuId: n,
            premiumType: d === l.WND ? null : d,
            categorySkuId: p,
            isCategoryReward: s.y8.some((e) => {
                let { rewardSkuId: t } = e;
                return t === n;
            }),
            prices: (0, a.l)(_),
            items: (0, i.i)(I.items),
            bundledProducts: null == m ? void 0 : m.map(r.Z.fromServer),
            variants: null == h ? void 0 : h.map(o.q.fromServer),
            googleSkuIds: I.google_sku_ids,
            eligibleOffers: I.eligible_offers,
            baseVariantName: g,
            baseVariantSkuId: E,
            variantLabel: b,
            variantValue: y,
            purchaseType: v,
            purchasedAt: null != O ? new Date(O) : O,
            expiresAt: null != S ? new Date(S) : null,
        });
    }
    constructor(e) {
        c(this, "skuId", void 0),
            c(this, "name", void 0),
            c(this, "type", void 0),
            c(this, "premiumType", void 0),
            c(this, "items", void 0),
            c(this, "categorySkuId", void 0),
            c(this, "isCategoryReward", void 0),
            c(this, "prices", void 0),
            c(this, "bundledProducts", void 0),
            c(this, "variants", void 0),
            c(this, "variantGroupStoreListingId", void 0),
            c(this, "googleSkuIds", void 0),
            c(this, "eligibleOffers", void 0),
            c(this, "baseVariantName", void 0),
            c(this, "baseVariantSkuId", void 0),
            c(this, "variantLabel", void 0),
            c(this, "variantValue", void 0),
            c(this, "purchaseType", void 0),
            c(this, "purchasedAt", void 0),
            c(this, "expiresAt", void 0),
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
}
