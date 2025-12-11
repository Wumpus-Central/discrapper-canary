n.d(t, {
    $p: () => p,
    Do: () => y,
    FE: () => b,
    K$: () => _,
    Uc: () => g,
    _Z: () => f,
    a7: () => O,
    ac: () => m,
    vg: () => S,
    wK: () => h,
    wQ: () => v,
    x6: () => E,
}),
    n(953529);
var r = n(392711),
    i = n.n(r),
    a = n(973616),
    o = n(430824),
    s = n(73346),
    l = n(591759),
    c = n(699955),
    u = n(582113),
    d = n(981631);
let f = s.$k ? "webp" : "jpg";
function p(e) {
    return null != e && u.Nx.has(e.id);
}
function _(e) {
    return null != e && e.productLine === d.POd.SOCIAL_LAYER_GAME_ITEM;
}
function m() {
    let e = o.Z.getGuild(u.Kz);
    return null != e && e.features.has(d.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : u.ON;
}
function h(e) {
    var t, n;
    return (
        e.id === m() ||
        (null != (n = null == (t = e.features) ? void 0 : t.has(d.GuildFeatures.SOCIAL_LAYER_STOREFRONT)) && n)
    );
}
function g(e) {
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
        application: null != e.application ? a.ZP.createFromServer(e.application) : void 0,
    };
}
function E(e) {
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
function b(e, t) {
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
              primaryIconAsset: null != (i = l.Z.toURLSafe((0, s._W)(t, a.labelIconAssetId, 512, "webp"))) ? i : void 0,
              primaryIconLabel: a.label,
          };
}
function y(e) {
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
    if (null != a && null != i) return l.Z.toURLSafe((0, s._W)(i, a, 512, "webp"));
}
function O(e) {
    var t, n;
    if (
        (null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer)
            ? void 0
            : t.cardBackgroundImageAssetId) != null &&
        (null == e ? void 0 : e.applicationId) != null
    )
        return l.Z.toURLSafe(
            (0, s._W)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, f),
        );
}
function v(e, t) {
    return ""
        .concat(location.protocol)
        .concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT)
        .concat(d.Z5c.GAME_SHOP(e, t.id, t.slug));
}
function S(e, t) {
    let n = o.Z.getGuild(e);
    return null != n && h(n) && (0, c.ne)({ location: t });
}
