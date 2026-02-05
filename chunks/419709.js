"use strict";
n.d(t, { T: () => r });
class r {
    discountId;
    amount;
    expiresAt;
    constructor(e) {
        (this.discountId = e.discount_id),
            (this.amount = e.amount),
            (this.expiresAt = null != e.expires_at ? new Date(e.expires_at) : void 0);
    }
    static fromServer(e) {
        return new r(e);
    }
}
