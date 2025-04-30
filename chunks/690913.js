n.d(t, { O: () => o });
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
        i(this, 'name', void 0), i(this, 'categorySkuId', void 0), i(this, 'rankedSkuIds', void 0), (this.type = r.z.SHELF), (this.name = e.name), (this.categorySkuId = e.category_sku_id), (this.rankedSkuIds = e.ranked_sku_ids);
    }
}
