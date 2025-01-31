n.d(t, { s: () => a });
var i = n(685816);
function r(e, t, n) {
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
class a {
    static fromServer(e) {
        return new a(e);
    }
    constructor(e) {
        r(this, 'categorySkuId', void 0), r(this, 'name', void 0), r(this, 'summary', void 0), r(this, 'categoryStoreListingId', void 0), r(this, 'fallbackBannerUrl', void 0), r(this, 'bannerAsset', void 0), r(this, 'logoUrl', void 0), r(this, 'rankedSkuIds', void 0), r(this, 'unpublishedAt', void 0), (this.type = i.z.HERO), (this.categorySkuId = e.category_sku_id), (this.name = e.name), (this.summary = e.summary), (this.categoryStoreListingId = e.category_store_listing_id), (this.fallbackBannerUrl = e.fallback_banner_url), (this.bannerAsset = e.banner_asset), (this.logoUrl = e.logo_url), (this.rankedSkuIds = e.ranked_sku_ids), (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null);
    }
}
