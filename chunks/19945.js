"use strict";
l.d(t, { A: () => a });
var r = l(263791);
class a {
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
        let { sku_ids: t, options: l, created_at: n, updated_at: i, skus: s, tenant_metadata: o, ...d } = e;
        return new a({
            ...d,
            skuIds: t,
            options: l.map((e) => ({ name: e.name, optionValues: e.option_values })),
            createdAt: new Date(n),
            updatedAt: new Date(i),
            skus: s.map((e) => r.A.fromServer(e)),
            primaryCollectionId: o.collectibles.primary_collection_id,
        });
    }
}
