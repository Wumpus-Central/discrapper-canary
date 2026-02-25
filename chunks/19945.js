"use strict";
l.d(t, { A: () => d });
var r = l(731935),
    a = l(696444),
    n = l(474012),
    s = l(986630),
    i = l(758836),
    o = l(652215);
class d {
    id;
    skuIds;
    name;
    summary;
    options;
    createdAt;
    updatedAt;
    skus;
    primaryCollectionId;
    constructor(e) {
        (this.id = e.id),
            (this.skuIds = e.skuIds),
            (this.name = e.name),
            (this.summary = e.summary),
            (this.options = e.options),
            (this.createdAt = e.createdAt),
            (this.updatedAt = e.updatedAt),
            (this.skus = e.skus),
            (this.primaryCollectionId = e.primaryCollectionId);
    }
    static fromServer(e) {
        let { sku_ids: t, options: l, created_at: a, updated_at: n, skus: s, tenant_metadata: i, ...o } = e;
        return new d({
            ...o,
            skuIds: t,
            options: l.map((e) => ({ name: e.name, optionValues: e.option_values })),
            createdAt: new Date(a),
            updatedAt: new Date(n),
            skus: s.map((e) => r.A.createFromServer(e)),
            primaryCollectionId: i.collectibles.primary_collection_id,
        });
    }
    toLegacyRecord() {
        let e = this.skus[0];
        if (null == e) return;
        let t = e.tenantMetadata?.collectibles;
        if (null == t) return;
        let { items: l, item: r } = (0, n.T)(e) ?? {};
        return new s.A({
            storeListingId: e.id,
            skuId: e.id,
            name: this.name,
            summary: this.summary.trim(),
            unpublishedAt: void 0,
            styles: void 0,
            type: t.type,
            premiumType: t.premiumType === o.oA2 ? null : t.premiumType,
            items: l ?? [r].filter((e) => null != e),
            categorySkuId: t.categorySkuId ?? "",
            isCategoryReward: i.MS.some((t) => {
                let { rewardSkuId: l } = t;
                return l === e.id;
            }),
            prices: e.prices,
            variants: [],
            googleSkuIds: { [o.lid.MOBILE]: "", [o.lid.MOBILE_PREMIUM_TIER_2]: "" },
            eligibleOffers: void 0,
            bundledProducts: e.bundledSkus
                ?.map((e) => {
                    let t = e.tenantMetadata?.collectibles;
                    return null == t
                        ? null
                        : new a.A({
                              type: t.type,
                              premiumType: t.premiumType === o.oA2 ? null : t.premiumType,
                              name: e.name,
                              skuId: e.id,
                              summary: e.summary,
                              prices: e.prices,
                          });
                })
                .filter((e) => null != e),
        });
    }
}
