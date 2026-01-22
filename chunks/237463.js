n.d(t, {
    r: () => a,
});
var r = n(651162);

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
        i(this, "name", void 0),
            i(this, "categorySkuId", void 0),
            i(this, "rankedSkuIds", void 0),
            (this.type = r.g.SHELF),
            (this.name = e.name),
            (this.categorySkuId = e.category_sku_id),
            (this.rankedSkuIds = e.ranked_sku_ids);
    }
}
