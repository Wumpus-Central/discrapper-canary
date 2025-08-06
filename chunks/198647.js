n.d(t, { s: () => s }), n(781311);
var r = n(685816),
    i = n(194165),
    o = n(889577);
function a(e, t, n) {
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
class s {
    static fromServer(e) {
        return new s(e);
    }
    constructor(e) {
        a(this, "categorySkuId", void 0),
            a(this, "name", void 0),
            a(this, "summary", void 0),
            a(this, "categoryStoreListingId", void 0),
            a(this, "fallbackBannerUrl", void 0),
            a(this, "bannerAsset", void 0),
            a(this, "logoUrl", void 0),
            a(this, "title", void 0),
            a(this, "rankedSkuIds", void 0),
            a(this, "unpublishedAt", void 0),
            a(this, "bannerTextColor", void 0),
            a(this, "bannerConfig", void 0),
            a(this, "logoConfig", void 0),
            (this.type = r.z.HERO),
            (this.categorySkuId = e.category_sku_id),
            (this.name = e.name),
            (this.summary = e.summary.trim()),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.fallbackBannerUrl = e.fallback_banner_url),
            (this.bannerAsset = e.banner_asset),
            (this.logoUrl = e.logo_url),
            (this.title = e.title),
            (this.rankedSkuIds = e.ranked_sku_ids),
            (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null),
            (this.bannerTextColor = e.banner_text_color),
            (this.bannerConfig = null != e.config ? i.Z.fromServer(e.config) : void 0),
            (this.logoConfig = null != e.logo_display_config ? o.X.fromServer(e.logo_display_config) : void 0);
    }
}
