n.d(t, { j: () => a });
var r = n(685816);
function i(e, t, n) {
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
class a {
    static fromServer(e) {
        return new a(e);
    }
    constructor(e) {
        i(this, "title", void 0),
            i(this, "body", void 0),
            i(this, "categoryStoreListingId", void 0),
            i(this, "bannerTextColor", void 0),
            i(this, "disableCta", void 0),
            i(this, "oldBannerURL", void 0),
            i(this, "bannerURL", void 0),
            i(this, "bannerAnimatedURL", void 0),
            i(this, "logoURL", void 0),
            i(this, "ctaText", void 0),
            i(this, "ctaRoute", void 0),
            i(this, "isDismissible", void 0),
            i(this, "dismissibleContentVersion", void 0),
            (this.type = r.z.WIDE_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.bannerTextColor = e.banner_text_color),
            (this.disableCta = e.disable_cta),
            (this.oldBannerURL = e.banner_url),
            (this.bannerURL = e.wide_banner_url),
            (this.bannerAnimatedURL = e.wide_banner_animated_url),
            (this.logoURL = e.logo_url),
            (this.ctaText = e.cta_text),
            (this.ctaRoute = e.cta_route),
            (this.isDismissible = e.is_dismissible),
            (this.dismissibleContentVersion = e.dismissible_content_version);
    }
}
