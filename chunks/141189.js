"use strict";
n.d(t, { t: () => i });
var r = n(651162);
class i {
    framesInHero;
    categorySkuId;
    constructor(e) {
        (this.type = r.g.FRAMES_EXPERIENCE),
            (this.framesInHero = e.frames_in_hero),
            (this.categorySkuId = e.category_sku_id);
    }
    static fromServer(e) {
        return new i(e);
    }
}
