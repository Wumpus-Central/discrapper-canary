n.d(t, {
    A: () => f,
});
var r = n(696444),
    i = n(474012),
    a = n(935816),
    s = n(986630),
    o = n(758836),
    l = n(652215);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = d(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
class f {
    static fromServer(e) {
        let {
                type: t,
                sku_id: n,
                name: c,
                premium_type: d,
                category_sku_id: p,
                prices: _,
                bundled_products: h,
                variants: m,
                base_variant_name: g,
                base_variant_sku_id: E,
                variant_label: b,
                variant_value: y,
                purchased_at: O,
                purchase_type: A,
                expires_at: v,
            } = e,
            S = u(e, [
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
            premiumType: d === l.oA2 ? null : d,
            categorySkuId: p,
            isCategoryReward: o.MS.some((e) => {
                let { rewardSkuId: t } = e;
                return t === n;
            }),
            prices: (0, a.m)(_),
            items: (0, i.K)(S.items),
            bundledProducts: null == h ? void 0 : h.map(r.A.fromServer),
            variants: null == m ? void 0 : m.map(s.x.fromServer),
            googleSkuIds: S.google_sku_ids,
            eligibleOffers: S.eligible_offers,
            baseVariantName: g,
            baseVariantSkuId: E,
            variantLabel: b,
            variantValue: y,
            purchaseType: A,
            purchasedAt: null != O ? new Date(O) : O,
            expiresAt: null != v ? new Date(v) : null,
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
