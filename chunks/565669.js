r.d(n, {
    H: function () {
        return o;
    }
});
var i = r(87290);
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
        a(this, 'categoryStoreListingId', void 0), a(this, 'name', void 0), a(this, 'bannerUrl', void 0), a(this, 'unpublishedAt', void 0), (this.type = i.O.CATEGORY), (this.categoryStoreListingId = e.category_store_listing_id), (this.name = e.name), (this.bannerUrl = e.banner_url), (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null);
    }
}
