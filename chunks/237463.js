"use strict";
n.d(t, { r: () => i });
var r = n(651162);
class i {
    name;
    categorySkuId;
    rankedSkuIds;
    constructor(e) {
        (this.type = r.g.SHELF),
            (this.name = e.name),
            (this.categorySkuId = e.category_sku_id),
            (this.rankedSkuIds = e.ranked_sku_ids);
    }
    static fromServer(e) {
        return new i(e);
    }
}
