"use strict";
n.d(t, { A: () => d }), n(938796);
var r = n(989349),
    i = n.n(r),
    s = n(665260),
    a = n(315069),
    o = n(587895),
    l = n(557009),
    u = n(652215);
class d extends a.A {
    id;
    branchId;
    flags;
    createdAt;
    entitlements;
    branch;
    sku;
    isTestMode;
    static createFromServer(e) {
        return new d({
            id: e.application.id,
            branchId: e.branch_id,
            entitlements: null != e.entitlements ? e.entitlements.map((e) => l.A.createFromServer(e)) : [],
            branch: e.branch,
            flags: e.flags,
            createdAt: e.created_at,
            sku: {
                id: e.sku.id,
                type: e.sku.type,
                premium: e.sku.premium,
                preorderReleaseAt: null != e.sku.preorder_release_at ? i()(e.sku.preorder_release_at) : null,
                preorderApproximateReleaseDate:
                    null != e.sku.preorder_approximate_release_date ? e.sku.preorder_approximate_release_date : null,
            },
        });
    }
    static createForTestMode(e) {
        return new d({
            id: e.id,
            entitlements: [],
            branchId: e.branch.id,
            branch: e.branch,
            flags: u.hM6.ENTITLED,
            createdAt: e.branch.created_at,
            sku: { id: e.skuId, type: u.Puh.DURABLE_PRIMARY, premium: !1 },
            isTestMode: !0,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.createdAt = e.createdAt),
            (this.flags = e.flags),
            (this.branchId = e.branchId),
            (this.entitlements = e.entitlements),
            (this.branch = e.branch),
            (this.sku = e.sku),
            (this.isTestMode = e.isTestMode || !1);
    }
    getFlags() {
        return this.flags;
    }
    hasFlag(e) {
        return s.Lt(this.flags, e);
    }
    isHidden() {
        return this.hasFlag(u.hM6.HIDDEN);
    }
    isLegacyOverlayEnabled() {
        return !this.hasFlag(u.hM6.OVERLAY_DISABLED);
    }
    isOverlayV3Enabled() {
        return !this.hasFlag(u.hM6.OVERLAY_V3_DISABLED);
    }
    isOverlayEnabled() {
        return this.isLegacyOverlayEnabled() || this.isOverlayV3Enabled();
    }
    isMasterBranch() {
        return this.branchId === this.id;
    }
    isDiscordApplication() {
        return !0;
    }
    isEntitled(e, t) {
        return !!this.isTestMode || this.entitlements.some((n) => n.isValid(e, t, this.branchId));
    }
    isPreorder() {
        return null != this.sku.preorderReleaseAt || null != this.sku.preorderApproximateReleaseDate;
    }
    getDistributor() {
        return u.d3x.DISCORD;
    }
    getBranchName() {
        return null != this.branch ? this.branch.name : "master";
    }
    getBranchedName(e) {
        return this.isMasterBranch() || null == this.branch ? e.name : `${e.name} (${this.branch.name})`;
    }
    getSkuIdForAnalytics() {
        return this.sku.id;
    }
    getAnalyticsData() {
        let e = o.A.getApplication(this.id);
        return {
            application_id: null != e ? e.id : null,
            application_name: null != e ? e.name : null,
            sku_id: this.getSkuIdForAnalytics(),
            launcher_platform: this.getDistributor(),
        };
    }
}
