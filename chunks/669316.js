"use strict";
n.d(t, { A: () => a });
var i = n(315069),
    r = n(511963);
class a extends i.A {
    id;
    discountId;
    discount;
    userId;
    appliedAt;
    deletedAt;
    expiresAt;
    static createFromServer(e) {
        return new a({
            id: e.id,
            discountId: e.discount_id,
            discount: r.A.createFromServer(e.discount),
            userId: e.user_id,
            appliedAt: null != e.applied_at ? new Date(e.applied_at) : null,
            deletedAt: null != e.deleted_at ? new Date(e.deleted_at) : null,
            expiresAt: null != e.expires_at ? new Date(e.expires_at) : null,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.discountId = e.discountId),
            (this.discount = e.discount),
            (this.userId = e.userId),
            (this.appliedAt = e.appliedAt ?? null),
            (this.deletedAt = e.deletedAt ?? null),
            (this.expiresAt = e.expiresAt ?? null);
    }
    hasExpired() {
        return null != this.expiresAt && Date.now() > this.expiresAt.getTime();
    }
    isApplied() {
        return null != this.appliedAt;
    }
    isDeleted() {
        return null != this.deletedAt;
    }
    hasAcknowledged() {
        return null != this.expiresAt;
    }
}
