"use strict";
l.d(t, { A: () => c });
var r = l(575593),
    a = l(731935),
    n = l(696444),
    i = l(474012),
    s = l(986630),
    o = l(758836),
    d = l(652215);
class c {
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
        let { sku_ids: t, options: l, created_at: r, updated_at: n, skus: i, tenant_metadata: s, ...o } = e;
        return new c({
            ...o,
            skuIds: t,
            options: l.map((e) => ({ name: e.name, optionValues: e.option_values })),
            createdAt: new Date(r),
            updatedAt: new Date(n),
            skus: i.map((e) => a.A.createFromServer(e)),
            primaryCollectionId: s.collectibles.primary_collection_id,
        });
    }
    toLegacyRecord() {
        let e = this.skus[0];
        if (null == e) return;
        let t = e.tenantMetadata?.collectibles;
        if (null == t) return;
        let l = this.skus.length > 1 ? r.R.VARIANTS_GROUP : t.type,
            { items: a, item: c } = (0, i.T)(e) ?? {};
        return new s.A({
            storeListingId: e.id,
            skuId: e.id,
            name: this.name,
            summary: this.summary,
            unpublishedAt: void 0,
            styles: void 0,
            type: l,
            premiumType: t.premiumType === d.oA2 ? null : t.premiumType,
            items: a ?? [c].filter((e) => null != e),
            categorySkuId: t.categorySkuId ?? "",
            isCategoryReward: o.MS.some((t) => {
                let { rewardSkuId: l } = t;
                return l === e.id;
            }),
            prices: e.prices,
            variants:
                l === r.R.VARIANTS_GROUP
                    ? this.skus
                          .map((t) => {
                              let l = t.tenantMetadata?.collectibles;
                              if (null == l) return null;
                              let { items: r, item: a } = (0, i.T)(t) ?? {},
                                  [n] = t.selectedOptions;
                              return new s.x({
                                  baseVariantName: this.name,
                                  baseVariantSkuId: e.id,
                                  variantLabel: n?.optionValue ?? "",
                                  variantValue: l.optionSelectorDisplayValue ?? "",
                                  storeListingId: t.id,
                                  skuId: t.id,
                                  name: t.name,
                                  summary: t.summary,
                                  unpublishedAt: void 0,
                                  styles: void 0,
                                  type: l.type,
                                  premiumType: l.premiumType === d.oA2 ? null : l.premiumType,
                                  items: r ?? [a].filter((e) => null != e),
                                  categorySkuId: l.categorySkuId ?? "",
                                  isCategoryReward: o.MS.some((e) => {
                                      let { rewardSkuId: l } = e;
                                      return l === t.id;
                                  }),
                                  prices: t.prices,
                                  googleSkuIds: { [d.lid.MOBILE]: "", [d.lid.MOBILE_PREMIUM_TIER_2]: "" },
                                  eligibleOffers: void 0,
                                  variants: void 0,
                                  bundledProducts: void 0,
                              });
                          })
                          .filter((e) => null != e)
                    : void 0,
            googleSkuIds: { [d.lid.MOBILE]: "", [d.lid.MOBILE_PREMIUM_TIER_2]: "" },
            eligibleOffers: void 0,
            bundledProducts: e.bundledSkus
                ?.map((e) => {
                    let t = e.tenantMetadata?.collectibles;
                    return null == t
                        ? null
                        : new n.A({
                              type: t.type,
                              premiumType: t.premiumType === d.oA2 ? null : t.premiumType,
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
