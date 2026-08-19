"use strict";
n.d(t, {
    $Z: () => G,
    JX: () => v,
    Kh: () => P,
    Pp: () => S,
    Rw: () => m,
    SP: () => N,
    Xw: () => U,
    ZR: () => M,
    ap: () => T,
    d8: () => b,
    iR: () => w,
});
var i = n(158390),
    r = n(636537),
    a = n(228366),
    s = n(977445),
    l = n(937427),
    o = n(927813),
    d = n(240248),
    c = n(871123),
    u = n(832163),
    _ = n(652215);
let E = 30 * o.A.Millis.SECOND,
    A = 30 * o.A.Millis.MINUTE,
    h = 60 * o.A.Millis.MINUTE,
    I = 30 * o.A.Millis.SECOND,
    f = 5 * o.A.Millis.SECOND;
async function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { eager: i = !1, forceFetch: o = !1 } = n,
        d = u.A.getStorefrontFetchState(e),
        _ = d?.state === "loading",
        h = d?.state === "error" && null != d.fetchedAt && Date.now() - d.fetchedAt < E,
        I = d?.state === "fetched" && null != d.fetchedAt && Date.now() - d.fetchedAt < A;
    if (!(_ || h || I) || o)
        try {
            a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildOrApplicationId: e });
            let n = "application" === e.type ? e.applicationId : (0, c.mq)(e.guildId),
                i = {};
            null != n && (0, s.Fs)(n) && (i.test_mode = !0);
            let o = l.A.getPromotionIdOverride();
            null != o && (i.promotion_id_override = o);
            let d = "guild" === e.type && null == n && (0, s.pq)(),
                u = await r.Bo.get({ url: t, query: i, rejectWithError: !0, retries: 3 }),
                _ = u.body,
                E = (0, c.sq)(_);
            null != E.storefrontPricing &&
                a.h.dispatch({
                    type: "SKUS_PRICING_FETCH_SUCCESS",
                    priceId: { type: "application", applicationId: E.applicationId },
                    data: E.storefrontPricing,
                }),
                a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildOrApplicationId: e, storefront: E }),
                a.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: E.applicationId,
                    storefrontMetadata: (0, c.NE)(_),
                }),
                a.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: u.body.store_listings ?? [] }),
                d && (0, s.Fs)(E.applicationId) && (await p(e, t, { forceFetch: !0 }));
        } catch (t) {
            a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildOrApplicationId: e, eager: i });
        }
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return p({ type: "application", applicationId: e }, _.Rsh.SOCIAL_LAYER_STOREFRONT_BY_APPLICATION_ID(e), t);
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return p({ type: "guild", guildId: e }, _.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e), t);
}
async function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { withGoogleSkuIds: i = !1, countryCode: s, paymentGateway: o } = n;
    try {
        a.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e });
        let n = {};
        i && (n.with_google_sku_ids = !0), (0, d.uJ)(s) || (n.country_code = s), null != o && (n.payment_gateway = o);
        let u = l.A.getPromotionIdOverride();
        null != u && (n.promotion_id_override = u);
        let _ = await r.Bo.get({ url: t, query: n, rejectWithError: !0 });
        if (null == _.body) throw Error("Failed to fetch social layer storefront SKU");
        let E = _.body.store_listing,
            A = _.body.storefront_metadata;
        a.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            assets: Object.fromEntries(_.body.assets.map((e) => [e.id, e])),
        }),
            null != A &&
                a.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: E.sku.application_id,
                    storefrontMetadata: (0, c.NE)(A),
                }),
            a.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: E });
    } catch (t) {
        a.h.dispatch({ type: "STORE_LISTINGS_FETCH_FAIL", skuId: e });
    }
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return g(t, _.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(e, t), n);
}
function N(e, t, n) {
    a.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", applicationId: e, pageIndex: t, skuId: n });
}
let C = 5 * o.A.Millis.MINUTE,
    O = 30 * o.A.Millis.SECOND,
    R = 5 * o.A.Millis.MINUTE;
function L(e, t) {
    let n = e.get(t);
    return null == n && ((n = new i.A(O, R)), e.set(t, n)), n;
}
let y = new Map(),
    D = new Map();
async function v(e) {
    let t = u.A.getStorefrontEntries(e);
    if (t?.state === "loading") return;
    let n = L(y, e);
    if (
        !(t?.state === "error" && Date.now() - t.fetchedAt < n.current) &&
        !(t?.state === "fetched" && Date.now() - t.fetchedAt < C)
    )
        try {
            a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD", applicationId: e });
            let t = (await r.Bo.get({ url: _.Rsh.SOCIAL_LAYER_STOREFRONTS_ALL(e), rejectWithError: !0, retries: 3 }))
                .body;
            n.succeed(),
                a.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS",
                    applicationId: e,
                    entries: t.map(c.S4),
                });
        } catch (t) {
            n.fail(), a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE", applicationId: e });
        }
}
async function b(e, t) {
    let n = u.A.getStorefrontById(t);
    if (n?.state === "loading") return;
    let i = L(D, t);
    if (
        !(n?.state === "error" && null != n.fetchedAt && Date.now() - n.fetchedAt < i.current) &&
        !(n?.state === "fetched" && null != n.fetchedAt && Date.now() - n.fetchedAt < A)
    )
        try {
            a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD", storefrontId: t });
            let n = {};
            (0, s.Fs)(e) && (n.test_mode = !0);
            let o = l.A.getPromotionIdOverride();
            null != o && (n.promotion_id_override = o);
            let d = await r.Bo.get({
                    url: _.Rsh.SOCIAL_LAYER_STOREFRONT_BY_ID(e, t),
                    query: n,
                    rejectWithError: !0,
                    retries: 3,
                }),
                u = d.body,
                E = (0, c.sq)(u);
            null != E.storefrontPricing &&
                a.h.dispatch({
                    type: "SKUS_PRICING_FETCH_SUCCESS",
                    priceId: { type: "application", applicationId: E.applicationId },
                    data: E.storefrontPricing,
                }),
                a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS", storefrontId: t, storefront: E }),
                a.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: E.applicationId,
                    storefrontMetadata: (0, c.NE)(u),
                }),
                a.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: d.body.store_listings ?? [] }),
                i.succeed();
        } catch (n) {
            i.fail(),
                a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE", storefrontId: t }),
                u.A.getPreviewStorefrontId(e) === t && M(e, null);
        }
}
function M(e, t) {
    a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_SET_PREVIEW", applicationId: e, storefrontId: t });
}
async function P(e) {
    try {
        a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: e });
        let t = (await r.Bo.get({ url: _.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e), rejectWithError: !0 })).body,
            n =
                "guild-discord-announcement" === t.type
                    ? {
                          type: "guild-discord-announcement",
                          id: t.id,
                          applicationId: t.application_id,
                          applicationName: t.application_name,
                          assetFullyQualifiedURL: t.asset_fully_qualified_url,
                          videoAssetFullyQualifiedURL: t.video_asset_fully_qualified_url,
                          popoverTitle: t.popover_title,
                          popoverBody: t.popover_body,
                          popoverCta: t.popover_cta,
                      }
                    : {
                          type: "guild-application-announcement",
                          id: t.id,
                          applicationId: t.application_id,
                          applicationName: t.application_name,
                          assetId: t.asset_id,
                          backgroundImageAssetId: t.background_image_asset_id,
                      };
        a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS", guildId: e, announcement: n });
    } catch (t) {
        a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE", guildId: e });
    }
}
async function U() {
    let e = u.A.getConfigFetchState();
    if (
        !("loading" === e.state || ("success" === e.state && Date.now() - e.fetchedAt < h)) &&
        !("error" === e.state && Date.now() - e.fetchedAt < I)
    )
        try {
            a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
            let e = (await r.Bo.get({ url: _.Rsh.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: !0 })).body,
                t = null;
            if (null != e.promotion_end_datetime) {
                let n = new Date(e.promotion_end_datetime);
                Number.isNaN(n.getTime()) || (t = n);
            }
            let n =
                    e.storefronts?.map((e) => {
                        let t = null,
                            n = null != e.promotion_end_datetime ? new Date(e.promotion_end_datetime) : null;
                        return (
                            null == n || Number.isNaN(n.getTime()) || (t = n),
                            {
                                guildId: e.guild_id,
                                applicationId: e.application_id,
                                gameId: e.game_id,
                                collectiblesShopNavigationEnabled: !0 === e.collectibles_shop_navigation_enabled,
                                excludedPlatforms: e.excluded_platforms ?? [],
                                disableMobileAccountLinking: !0 === e.disable_mobile_account_linking,
                                promotionEndDatetime: t,
                                allowOrbsSpending: !0 === e.allow_orbs_spending,
                            }
                        );
                    }) ?? [],
                i = null;
            null != e.announcement_modal_config &&
                (i = {
                    version: e.announcement_modal_config.version,
                    applicationId: e.announcement_modal_config.application_id,
                }),
                a.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                    config: {
                        promotionalSkuIds: e.promotional_sku_ids,
                        promotionEndDatetime: t,
                        storefronts: n,
                        announcementModalConfig: i,
                    },
                });
        } catch {
            a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE" });
        }
}
function w(e, t) {
    let n = u.A.getSKUEligibility(t);
    "checking" !== n &&
        "eligible" !== n &&
        "ineligible" !== n &&
        (a.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: t }),
        setTimeout(() => {
            "checking" === u.A.getSKUEligibility(t) &&
                a.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    reason: "interaction_deadline",
                });
        }, f),
        r.Bo.post({ url: _.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t), rejectWithError: !0 })
            .then((e) => {
                a.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE",
                    skuId: t,
                    interactionId: e.body.interaction_id,
                });
            })
            .catch((e) => {
                a.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    httpStatus: e?.status,
                });
            }));
}
async function G() {
    try {
        let e =
                (await r.Bo.get({ url: _.Rsh.SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT, rejectWithError: !0 }))
                    .body ?? null,
            t = null;
        null != e &&
            (t = {
                applicationId: e.application_id,
                lightThemeLogoUrl: e.light_theme_logo_url ?? null,
                darkThemeLogoUrl: e.dark_theme_logo_url ?? null,
                backgroundUrl: e.background_url ?? null,
                titles: e.titles ?? null,
                subtitle: e.subtitle ?? null,
                features:
                    e.features?.map((e) => ({ assetUrl: e.asset_url, title: e.title, subtitle: e.subtitle })) ?? null,
                buttonText: e.button_text ?? null,
            }),
            a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_SUCCESS", config: t });
    } catch (e) {
        a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_FAILURE" });
    }
}
