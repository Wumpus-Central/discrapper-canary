r.d(n, {
    s: function () {
        return o;
    }
});
var i = r(685816);
function a(e, n, r) {
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
class o {
    static fromServer(e) {
        return new o(e);
    }
    constructor(e) {
        a(this, 'categorySkuId', void 0), a(this, 'name', void 0), a(this, 'summary', void 0), a(this, 'categoryStoreListingId', void 0), a(this, 'fallbackBannerUrl', void 0), a(this, 'bannerAsset', void 0), a(this, 'logoUrl', void 0), a(this, 'rankedSkuIds', void 0), a(this, 'unpublishedAt', void 0), (this.type = i.z.HERO), (this.categorySkuId = e.category_sku_id), (this.name = e.name), (this.summary = e.summary), (this.categoryStoreListingId = e.category_store_listing_id), (this.fallbackBannerUrl = e.fallback_banner_url), (this.bannerAsset = e.banner_asset), (this.logoUrl = e.logo_url), (this.rankedSkuIds = e.ranked_sku_ids), (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null);
    }
}
