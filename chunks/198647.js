n.d(t, { s: () => o });
var r = n(685816);
function i(e, t, n) {
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
class o {
    static fromServer(e) {
        return new o(e);
    }
    constructor(e) {
        i(this, 'categorySkuId', void 0), i(this, 'name', void 0), i(this, 'summary', void 0), i(this, 'categoryStoreListingId', void 0), i(this, 'fallbackBannerUrl', void 0), i(this, 'bannerAsset', void 0), i(this, 'logoUrl', void 0), i(this, 'title', void 0), i(this, 'rankedSkuIds', void 0), i(this, 'unpublishedAt', void 0), i(this, 'bannerTextColor', void 0), (this.type = r.z.HERO), (this.categorySkuId = e.category_sku_id), (this.name = e.name), (this.summary = e.summary), (this.categoryStoreListingId = e.category_store_listing_id), (this.fallbackBannerUrl = e.fallback_banner_url), (this.bannerAsset = e.banner_asset), (this.logoUrl = e.logo_url), (this.title = e.title), (this.rankedSkuIds = e.ranked_sku_ids), (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null), (this.bannerTextColor = e.banner_text_color);
    }
}
