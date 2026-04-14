"use strict";
n.d(t, { A: () => i });
var r = n(260811);
class i {
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
        let { sku_ids: t, options: n, created_at: s, updated_at: a, skus: o, tenant_metadata: l, ...u } = e;
        return new i({
            ...u,
            skuIds: t,
            options: n.map((e) => ({ name: e.name, optionValues: e.option_values })),
            createdAt: new Date(s),
            updatedAt: new Date(a),
            skus: o.map((e) => r.A.createFromServer(e)),
            primaryCollectionId: l.collectibles.primary_collection_id,
        });
    }
}
