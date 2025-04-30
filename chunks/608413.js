n.d(t, { j: () => o });
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
        i(this, 'bannerUrl', void 0), i(this, 'title', void 0), i(this, 'body', void 0), i(this, 'categoryStoreListingId', void 0), i(this, 'bannerTextColor', void 0), i(this, 'disableCta', void 0), (this.type = r.z.WIDE_BANNER), (this.bannerUrl = e.banner_url), (this.title = e.title), (this.body = e.body), (this.categoryStoreListingId = e.category_store_listing_id), (this.bannerTextColor = e.banner_text_color), (this.disableCta = e.disable_cta);
    }
}
