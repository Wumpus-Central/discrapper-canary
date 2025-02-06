n.d(t, { j: () => a });
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
        r(this, 'bannerUrl', void 0), r(this, 'title', void 0), r(this, 'body', void 0), r(this, 'categoryStoreListingId', void 0), r(this, 'bannerTextColor', void 0), r(this, 'disableCta', void 0), (this.type = i.z.WIDE_BANNER), (this.bannerUrl = e.banner_url), (this.title = e.title), (this.body = e.body), (this.categoryStoreListingId = e.category_store_listing_id), (this.bannerTextColor = e.banner_text_color), (this.disableCta = e.disable_cta);
    }
}
