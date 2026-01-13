n.d(t, { s: () => o }), n(781311);
var r = n(685816),
    i = n(884697);
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
class o {
    static fromServer(e) {
        return new o(e);
    }
    constructor(e) {
        a(this, "categorySkuId", void 0),
            a(this, "name", void 0),
            a(this, "summary", void 0),
            a(this, "categoryStoreListingId", void 0),
            a(this, "title", void 0),
            a(this, "rankedSkuIds", void 0),
            a(this, "unpublishedAt", void 0),
            a(this, "bannerTextColor", void 0),
            a(this, "mobileTitle", void 0),
            a(this, "mobileSummary", void 0),
            a(this, "mobileProductsTitle", void 0),
            a(this, "heroBannerUrl", void 0),
            a(this, "heroBannerAnimatedUrl", void 0),
            a(this, "heroRiveUrl", void 0),
            a(this, "heroLogoUrl", void 0),
            a(this, "mobileHeroUrl", void 0),
            a(this, "mobileHeroAnimatedUrl", void 0),
            a(this, "bannerDisplayConfig", void 0),
            a(this, "logoDisplayConfig", void 0),
            (this.type = r.z.HERO),
            (this.categorySkuId = e.category_sku_id),
            (this.name = e.name),
            (this.summary = e.summary.trim()),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.title = e.title),
            (this.rankedSkuIds = e.ranked_sku_ids),
            (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null),
            (this.bannerTextColor = e.banner_text_color),
            (this.mobileTitle = e.mobile_title),
            (this.mobileSummary = e.mobile_summary),
            (this.mobileProductsTitle = e.mobile_products_title),
            (this.heroBannerUrl = e.hero_banner_url),
            (this.heroBannerAnimatedUrl = e.hero_banner_animated_url),
            (this.heroRiveUrl = e.hero_rive_url),
            (this.heroLogoUrl = e.hero_logo_url),
            (this.mobileHeroUrl = e.mobile_hero_url),
            (this.mobileHeroAnimatedUrl = e.mobile_hero_animated_url),
            (this.bannerDisplayConfig = (0, i.QG)(e.banner_display_config)),
            (this.logoDisplayConfig = (0, i.QG)(e.logo_display_config));
    }
}
