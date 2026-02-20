l.d(r, { A: () => o });
var t = l(263791);
class o {
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
        let { sku_ids: r, options: l, created_at: i, updated_at: n, skus: a, tenant_metadata: c, ...d } = e;
        return new o({
            ...d,
            skuIds: r,
            options: l.map((e) => ({ name: e.name, optionValues: e.option_values })),
            createdAt: new Date(i),
            updatedAt: new Date(n),
            skus: a.map((e) => t.A.fromServer(e)),
            primaryCollectionId: c.collectibles.primary_collection_id,
        });
    }
}
