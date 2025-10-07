n.d(t, {
    FE: () => u,
    K$: () => o,
    Uc: () => l,
    wK: () => s,
    x6: () => c,
}),
    n(953529);
var r = n(73346),
    i = n(591759),
    a = n(981631);
function o(e) {
    return null != e && e.productLine === a.POd.SOCIAL_LAYER_GAME_ITEM;
}
function s(e) {
    return null != e && e.features.has(a.oNc.SOCIAL_LAYER_STOREFRONT);
}
function l(e) {
    return {
        applicationId: e.application_id,
        title: e.title,
        logoAssetId: e.logo_asset_id,
        pages: e.pages.map((e) => ({
            title: e.title,
            leaderboard:
                null != e.leaderboard
                    ? {
                          title: e.leaderboard.title,
                          description: e.leaderboard.description,
                          backgroundImageAssetId: e.leaderboard.background_image_asset_id,
                      }
                    : void 0,
            skuIds: e.sku_ids,
            sections:
                null != e.sections
                    ? e.sections.map((e) => ({
                          title: e.title,
                          skuIds: e.sku_ids,
                      }))
                    : void 0,
        })),
    };
}
function c(e) {
    if (null != e)
        return {
            carouselItems: e.carousel_items.map((e) => ({
                thumbnailAssetId: e.thumbnail_asset_id,
                assetId: e.asset_id,
                backgroundAssetId: e.background_asset_id,
                youtubeVideoId: e.youtube_video_id,
                label: e.label,
                labelIconAssetId: e.label_icon_asset_id,
            })),
            label: e.label,
            expiresAt: null != e.expires_at ? new Date(e.expires_at) : void 0,
            cardImageAssetId: e.card_image_asset_id,
            cardBackgroundImageAssetId: e.card_background_image_asset_id,
        };
}
function u(e, t) {
    var n, a, o;
    if (
        (null == e || null == (a = e.tenantMetadata) || null == (n = a.socialLayer) ? void 0 : n.carouselItems) ==
            null ||
        0 === e.tenantMetadata.socialLayer.carouselItems.length
    )
        return {
            primaryIconAsset: void 0,
            primaryIconLabel: void 0,
        };
    let s = e.tenantMetadata.socialLayer.carouselItems[0];
    return null == s.labelIconAssetId
        ? {
              primaryIconAsset: void 0,
              primaryIconLabel: void 0,
          }
        : {
              primaryIconAsset: null != (o = i.Z.toURLSafe((0, r._W)(t, s.labelIconAssetId, 512, "png"))) ? o : void 0,
              primaryIconLabel: s.label,
          };
}
