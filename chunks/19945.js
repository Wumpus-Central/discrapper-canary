t.d(l, { A: () => s });
var r = t(575593),
    o = t(731935),
    n = t(696444),
    a = t(474012),
    i = t(986630),
    d = t(758836),
    c = t(652215);
class s {
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
        let { sku_ids: l, options: t, created_at: r, updated_at: n, skus: a, tenant_metadata: i, ...d } = e;
        return new s({
            ...d,
            skuIds: l,
            options: t.map((e) => ({ name: e.name, optionValues: e.option_values })),
            createdAt: new Date(r),
            updatedAt: new Date(n),
            skus: a.map((e) => o.A.createFromServer(e)),
            primaryCollectionId: i.collectibles.primary_collection_id,
        });
    }
    toLegacyRecord() {
        let e = this.skus[0];
        if (null == e) return;
        let l = e.tenantMetadata?.collectibles;
        if (null == l) return;
        let t = this.skus.length > 1 ? r.R.VARIANTS_GROUP : l.type,
            { items: o, item: s } = (0, a.T)(e) ?? {};
        return new i.A({
            storeListingId: e.id,
            skuId: e.id,
            name: this.name,
            summary: this.summary,
            unpublishedAt: void 0,
            styles: void 0,
            type: t,
            premiumType: l.premiumType === c.oA2 ? null : l.premiumType,
            items: o ?? [s].filter((e) => null != e),
            categorySkuId: l.categorySkuId ?? "",
            isCategoryReward: d.MS.some((l) => {
                let { rewardSkuId: t } = l;
                return t === e.id;
            }),
            prices: e.prices,
            variants:
                t === r.R.VARIANTS_GROUP
                    ? this.skus
                          .map((l) => {
                              let t = l.tenantMetadata?.collectibles;
                              if (null == t) return null;
                              let { items: r, item: o } = (0, a.T)(l) ?? {},
                                  [n] = l.selectedOptions;
                              return new i.x({
                                  baseVariantName: this.name,
                                  baseVariantSkuId: e.id,
                                  variantLabel: n?.optionValue ?? "",
                                  variantValue: t.optionSelectorDisplayValue ?? "",
                                  storeListingId: l.id,
                                  skuId: l.id,
                                  name: l.name,
                                  summary: l.summary,
                                  unpublishedAt: void 0,
                                  styles: void 0,
                                  type: t.type,
                                  premiumType: t.premiumType === c.oA2 ? null : t.premiumType,
                                  items: r ?? [o].filter((e) => null != e),
                                  categorySkuId: t.categorySkuId ?? "",
                                  isCategoryReward: d.MS.some((e) => {
                                      let { rewardSkuId: t } = e;
                                      return t === l.id;
                                  }),
                                  prices: l.prices,
                                  googleSkuIds: { [c.lid.MOBILE]: "", [c.lid.MOBILE_PREMIUM_TIER_2]: "" },
                                  eligibleOffers: void 0,
                                  variants: void 0,
                                  bundledProducts: void 0,
                              });
                          })
                          .filter((e) => null != e)
                    : void 0,
            googleSkuIds: { [c.lid.MOBILE]: "", [c.lid.MOBILE_PREMIUM_TIER_2]: "" },
            eligibleOffers: void 0,
            bundledProducts: e.bundledSkus
                ?.map((e) => {
                    let l = e.tenantMetadata?.collectibles;
                    return null == l
                        ? null
                        : new n.A({
                              type: l.type,
                              premiumType: l.premiumType === c.oA2 ? null : l.premiumType,
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
