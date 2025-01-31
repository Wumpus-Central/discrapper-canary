n.d(t, { H: () => a });
var i = n(87290);
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
        r(this, 'categoryStoreListingId', void 0), r(this, 'name', void 0), r(this, 'bannerUrl', void 0), r(this, 'unpublishedAt', void 0), (this.type = i.O.CATEGORY), (this.categoryStoreListingId = e.category_store_listing_id), (this.name = e.name), (this.bannerUrl = e.banner_url), (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null);
    }
}
