n.d(t, {
    Do: () => m,
    FE: () => h,
    K$: () => u,
    Uc: () => _,
    a7: () => g,
    ac: () => d,
    wK: () => f,
    wQ: () => E,
    x6: () => p,
}),
    n(953529);
var r = n(392711),
    i = n.n(r),
    a = n(430824),
    o = n(73346),
    s = n(591759),
    l = n(582113),
    c = n(981631);
function u(e) {
    return null != e && e.productLine === c.POd.SOCIAL_LAYER_GAME_ITEM;
}
function d() {
    let e = a.Z.getGuild(l.Kz);
    return null != e && e.features.has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : l.ON;
}
function f(e) {
    var t, n;
    return (
        e.id === d() ||
        (null != (n = null == (t = e.features) ? void 0 : t.has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT)) && n)
    );
}
function _(e) {
    return {
        applicationId: e.application_id,
        title: e.title,
        logoAssetId: e.logo_asset_id,
        lightThemeLogoAssetId: e.light_theme_logo_asset_id,
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
function p(e) {
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
function h(e, t) {
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
    let a = e.tenantMetadata.socialLayer.carouselItems[0];
    return null == a.labelIconAssetId
        ? {
              primaryIconAsset: void 0,
              primaryIconLabel: void 0,
          }
        : {
              primaryIconAsset: null != (i = s.Z.toURLSafe((0, o._W)(t, a.labelIconAssetId, 512, "png"))) ? i : void 0,
              primaryIconLabel: a.label,
          };
}
function m(e) {
    var t, n, r;
    let i = null == e ? void 0 : e.applicationId,
        a =
            null !=
            (r =
                null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer)
                    ? void 0
                    : t.cardImageAssetId)
                ? r
                : null == e
                  ? void 0
                  : e.thumbnailAssetId;
    if (null != a && null != i) return s.Z.toURLSafe((0, o._W)(i, a, 512, "png"));
}
function g(e) {
    var t, n;
    if (
        (null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer)
            ? void 0
            : t.cardBackgroundImageAssetId) != null &&
        (null == e ? void 0 : e.applicationId) != null
    )
        return s.Z.toURLSafe(
            (0, o._W)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"),
        );
}
function E(e, t) {
    return ""
        .concat(location.protocol)
        .concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT)
        .concat(c.Z5c.GAME_SHOP(e, t.id, t.slug));
}
