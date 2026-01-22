n.d(t, {
    A: () => f,
}),
    n(938796);
var r = n(989349),
    i = n.n(r),
    a = n(665260),
    s = n(315069),
    o = n(587895),
    l = n(557009),
    c = n(652215);

function u(e, t, n) {
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
let d = "master";
class f extends s.A {
    static createFromServer(e) {
        return new f({
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
        return new f({
            id: e.id,
            entitlements: [],
            branchId: e.branch.id,
            branch: e.branch,
            flags: c.hM6.ENTITLED,
            createdAt: e.branch.created_at,
            sku: {
                id: e.skuId,
                type: c.Puh.DURABLE_PRIMARY,
                premium: !1,
            },
            isTestMode: !0,
        });
    }
    getFlags() {
        return this.flags;
    }
    hasFlag(e) {
        return a.Lt(this.flags, e);
    }
    isHidden() {
        return this.hasFlag(c.hM6.HIDDEN);
    }
    isLegacyOverlayEnabled() {
        return !this.hasFlag(c.hM6.OVERLAY_DISABLED);
    }
    isOverlayV3Enabled() {
        return !this.hasFlag(c.hM6.OVERLAY_V3_DISABLED);
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
        return c.d3x.DISCORD;
    }
    getBranchName() {
        return null != this.branch ? this.branch.name : d;
    }
    getBranchedName(e) {
        return this.isMasterBranch() || null == this.branch
            ? e.name
            : "".concat(e.name, " (").concat(this.branch.name, ")");
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
    constructor(e) {
        super(),
            u(this, "id", void 0),
            u(this, "branchId", void 0),
            u(this, "flags", void 0),
            u(this, "createdAt", void 0),
            u(this, "entitlements", void 0),
            u(this, "branch", void 0),
            u(this, "sku", void 0),
            u(this, "isTestMode", void 0),
            (this.id = e.id),
            (this.createdAt = e.createdAt),
            (this.flags = e.flags),
            (this.branchId = e.branchId),
            (this.entitlements = e.entitlements),
            (this.branch = e.branch),
            (this.sku = e.sku),
            (this.isTestMode = e.isTestMode || !1);
    }
}
