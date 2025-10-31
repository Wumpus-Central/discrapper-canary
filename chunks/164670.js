n.d(t, {
    Do: () => _,
    FE: () => f,
    K$: () => l,
    Uc: () => u,
    a7: () => p,
    wK: () => c,
    wQ: () => h,
    x6: () => d,
}),
    n(953529);
var r = n(392711),
    i = n.n(r),
    a = n(73346),
    o = n(591759),
    s = n(981631);
function l(e) {
    return null != e && e.productLine === s.POd.SOCIAL_LAYER_GAME_ITEM;
}
function c(e) {
    return null != e && e.features.has(s.GuildFeatures.SOCIAL_LAYER_STOREFRONT);
}
function u(e) {
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
        assets: i().keyBy(e.assets, "id"),
    };
}
function d(e) {
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
function f(e, t) {
    var n, r, i;
    if (
        null == t ||
        (null == e || null == (r = e.tenantMetadata) || null == (n = r.socialLayer) ? void 0 : n.carouselItems) ==
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
              primaryIconAsset: null != (i = o.Z.toURLSafe((0, a._W)(t, s.labelIconAssetId, 512, "png"))) ? i : void 0,
              primaryIconLabel: s.label,
          };
}
function _(e) {
    var t, n, r;
    let i = null == e ? void 0 : e.applicationId,
        s =
            null !=
            (r =
                null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer)
                    ? void 0
                    : t.cardImageAssetId)
                ? r
                : null == e
                  ? void 0
                  : e.thumbnailAssetId;
    if (null != s && null != i) return o.Z.toURLSafe((0, a._W)(i, s, 512, "png"));
}
function p(e) {
    var t, n;
    if (
        (null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer)
            ? void 0
            : t.cardBackgroundImageAssetId) != null &&
        (null == e ? void 0 : e.applicationId) != null
    )
        return o.Z.toURLSafe(
            (0, a._W)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"),
        );
}
function h(e, t) {
    return ""
        .concat(location.protocol)
        .concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT)
        .concat(s.Z5c.GAME_SHOP(e, t.id, t.slug));
}
