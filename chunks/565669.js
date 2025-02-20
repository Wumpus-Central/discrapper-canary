n.d(t, { H: () => o });
var r = n(87290);
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
        i(this, 'categoryStoreListingId', void 0), i(this, 'name', void 0), i(this, 'bannerUrl', void 0), i(this, 'unpublishedAt', void 0), i(this, 'bodyText', void 0), i(this, 'bannerTextColor', void 0), (this.type = r.O.CATEGORY), (this.categoryStoreListingId = e.category_store_listing_id), (this.name = e.name), (this.bannerUrl = e.banner_url), (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null), (this.bodyText = e.body_text), (this.bannerTextColor = e.banner_text_color);
    }
}
