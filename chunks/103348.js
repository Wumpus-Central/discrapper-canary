"use strict";
n.d(t, { A: () => s });
var r = n(749394),
    i = n(260811);
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
    primaryCollectionStyles;
    primaryCollectionPdpBgUrl;
    primaryCollectionWillUnpublishAt;
    constructor(e) {
        (this.id = e.id),
            (this.skuIds = e.skuIds),
            (this.name = e.name),
            (this.summary = e.summary),
            (this.options = e.options),
            (this.createdAt = e.createdAt),
            (this.updatedAt = e.updatedAt),
            (this.skus = e.skus),
            (this.primaryCollectionId = e.primaryCollectionId),
            (this.primaryCollectionStyles = e.primaryCollectionStyles),
            (this.primaryCollectionPdpBgUrl = e.primaryCollectionPdpBgUrl),
            (this.primaryCollectionWillUnpublishAt = e.primaryCollectionWillUnpublishAt);
    }
    static fromServer(e) {
        let { sku_ids: t, options: n, created_at: a, updated_at: o, skus: l, tenant_metadata: u, ...d } = e;
        return new s({
            ...d,
            skuIds: t,
            options: n.map((e) => ({ name: e.name, optionValues: e.option_values })),
            createdAt: new Date(a),
            updatedAt: new Date(o),
            skus: l.map((e) => i.A.createFromServer(e)),
            primaryCollectionId: u.collectibles.primary_collection_id,
            primaryCollectionStyles:
                null != u.collectibles.primary_collection_styles
                    ? r.A.fromServer(u.collectibles.primary_collection_styles)
                    : void 0,
            primaryCollectionPdpBgUrl: u.collectibles.primary_collection_pdp_bg_url,
            primaryCollectionWillUnpublishAt:
                null != u.collectibles.primary_collection_will_unpublish_at
                    ? new Date(u.collectibles.primary_collection_will_unpublish_at)
                    : void 0,
        });
    }
}
