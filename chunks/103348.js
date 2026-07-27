"use strict";
n.d(t, { A: () => a });
var i = n(749394),
    r = n(32731);
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
    primaryCollectionStyles;
    primaryCollectionPdpBgUrl;
    primaryCollectionWillUnpublishAt;
    gameApplicationId;
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
            (this.primaryCollectionWillUnpublishAt = e.primaryCollectionWillUnpublishAt),
            (this.gameApplicationId = e.gameApplicationId);
    }
    static fromServer(e) {
        let { sku_ids: t, options: n, created_at: s, updated_at: l, skus: o, tenant_metadata: d, ...c } = e;
        return new a({
            ...c,
            skuIds: t,
            options: n.map((e) => ({ name: e.name, optionValues: e.option_values })),
            createdAt: new Date(s),
            updatedAt: new Date(l),
            skus: o.map((e) => r.A.createFromServer(e)),
            primaryCollectionId: d.collectibles.primary_collection_id,
            primaryCollectionStyles:
                null != d.collectibles.primary_collection_styles
                    ? i.A.fromServer(d.collectibles.primary_collection_styles)
                    : void 0,
            primaryCollectionPdpBgUrl: d.collectibles.primary_collection_pdp_bg_url,
            primaryCollectionWillUnpublishAt:
                null != d.collectibles.primary_collection_will_unpublish_at
                    ? new Date(d.collectibles.primary_collection_will_unpublish_at)
                    : void 0,
            gameApplicationId: d.guild_monetization?.game_server?.game_application_id,
        });
    }
}
