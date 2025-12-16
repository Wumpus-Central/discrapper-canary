n.d(t, {
    $p: () => _,
    Do: () => v,
    FE: () => O,
    K$: () => m,
    Uc: () => E,
    X0: () => y,
    _Z: () => p,
    a7: () => S,
    ac: () => h,
    vg: () => T,
    wK: () => g,
    wQ: () => I,
    x6: () => b,
}),
    n(953529),
    n(467055),
    n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(973616),
    o = n(659181),
    s = n(430824),
    l = n(73346),
    c = n(591759),
    u = n(699955),
    d = n(582113),
    f = n(981631);
let p = l.$k ? "webp" : "jpg";
function _(e) {
    return null != e && d.Nx.has(e.id);
}
function m(e) {
    return null != e && e.productLine === f.POd.SOCIAL_LAYER_GAME_ITEM;
}
function h() {
    let e = s.Z.getGuild(d.Kz);
    return null != e && e.features.has(f.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : d.ON;
}
function g(e) {
    var t, n;
    return (
        e.id === h() ||
        (null != (n = null == (t = e.features) ? void 0 : t.has(f.GuildFeatures.SOCIAL_LAYER_STOREFRONT)) && n)
    );
}
function E(e) {
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
function b(e) {
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
function y(e) {
    return {
        skus: e.skus.map((e) => o.Z.createFromServer(e)),
        skusToRecommendationReasons: Object.fromEntries(
            Object.entries(e.skus_to_user_ids).map((e) => {
                let [t, n] = e;
                return [
                    t,
                    n.map((e) => ({
                        userId: e.user_id,
                        reason: e.reason,
                    })),
                ];
            }),
        ),
        application: a.ZP.createFromServer(e.application),
    };
}
function O(e, t) {
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
              primaryIconAsset: null != (i = c.Z.toURLSafe((0, l._W)(t, a.labelIconAssetId, 512, "webp"))) ? i : void 0,
              primaryIconLabel: a.label,
          };
}
function v(e) {
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
    if (null != a && null != i) return c.Z.toURLSafe((0, l._W)(i, a, 512, "webp"));
}
function S(e) {
    var t, n;
    if (
        (null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer)
            ? void 0
            : t.cardBackgroundImageAssetId) != null &&
        (null == e ? void 0 : e.applicationId) != null
    )
        return c.Z.toURLSafe(
            (0, l._W)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, p),
        );
}
function I(e, t) {
    return ""
        .concat(location.protocol)
        .concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT)
        .concat(f.Z5c.GAME_SHOP(e, t.id, t.slug));
}
function T(e, t) {
    let n = s.Z.getGuild(e);
    return null != n && g(n) && (0, u.ne)({ location: t });
}
