"use strict";
n.d(t, { T: () => i });
var r = n(651162);
class i {
    skuIds;
    endTime;
    constructor(e) {
        (this.type = r.g.MARVEL_RIVALS_PROMOTIONAL_BANNER), (this.skuIds = e.sku_ids), (this.endTime = e.end_time);
    }
    static fromServer(e) {
        return new i(e);
    }
}
