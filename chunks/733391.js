"use strict";
n.d(t, { Kh: () => S, Pp: () => A, Rw: () => m, SP: () => T, Xw: () => y, ap: () => E, iR: () => N, qf: () => I });
var i = n(636537),
    r = n(228366),
    s = n(927813),
    a = n(240248),
    o = n(871123),
    l = n(832163),
    u = n(652215);
let c = 30 * s.A.Millis.SECOND,
    d = 30 * s.A.Millis.MINUTE,
    _ = 60 * s.A.Millis.MINUTE,
    h = 30 * s.A.Millis.SECOND,
    f = 5 * s.A.Millis.SECOND;
async function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { eager: s = !1, forceFetch: a = !1 } = n,
        u = l.A.getStorefrontFetchState(e),
        _ = u?.state === "loading",
        h = u?.state === "error" && null != u.fetchedAt && Date.now() - u.fetchedAt < c,
        f = u?.state === "fetched" && null != u.fetchedAt && Date.now() - u.fetchedAt < d;
    if (!(_ || h || f) || a)
        try {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildOrApplicationId: e });
            let n = await i.Bo.get({ url: t, rejectWithError: !0, retries: 3 }),
                s = n.body,
                a = (0, o.sq)(s);
            null != a.storefrontPricing &&
                r.h.dispatch({
                    type: "SKUS_PRICING_FETCH_SUCCESS",
                    priceId: { type: "application", applicationId: a.applicationId },
                    data: a.storefrontPricing,
                }),
                r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildOrApplicationId: e, storefront: a }),
                r.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: a.applicationId,
                    storefrontMetadata: (0, o.NE)(s),
                }),
                r.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: n.body.store_listings ?? [] });
        } catch (t) {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildOrApplicationId: e, eager: s });
        }
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return p({ type: "application", applicationId: e }, u.Rsh.SOCIAL_LAYER_STOREFRONT_BY_APPLICATION_ID(e), t);
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return p({ type: "guild", guildId: e }, u.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e), t);
}
async function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { withGoogleSkuIds: s = !1, countryCode: l, paymentGateway: u } = n;
    try {
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e });
        let n = {};
        s && (n.with_google_sku_ids = !0), (0, a.uJ)(l) || (n.country_code = l), null != u && (n.payment_gateway = u);
        let c = await i.Bo.get({ url: t, query: n, rejectWithError: !0 });
        if (null == c.body || !c.ok) throw Error("Failed to fetch social layer storefront SKU");
        let d = c.body.store_listing,
            _ = c.body.storefront_metadata;
        r.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            assets: Object.fromEntries(c.body.assets.map((e) => [e.id, e])),
        }),
            null != _ &&
                r.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: d.sku.application_id,
                    storefrontMetadata: (0, o.NE)(_),
                }),
            r.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: d });
    } catch (t) {
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_FAIL", skuId: e });
    }
}
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return g(t, u.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(e, t), n);
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return g(t, u.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t), n);
}
function T(e, t, n) {
    r.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", guildId: e, pageIndex: t, skuId: n });
}
async function S(e) {
    try {
        r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: e });
        let t = (await i.Bo.get({ url: u.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e), rejectWithError: !0 })).body,
            n =
                "guild-discord-announcement" === t.type
                    ? {
                          type: "guild-discord-announcement",
                          id: t.id,
                          applicationId: t.application_id,
                          applicationName: t.application_name,
                          assetFullyQualifiedURL: t.asset_fully_qualified_url,
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
        r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS", guildId: e, announcement: n });
    } catch (t) {
        r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE", guildId: e });
    }
}
async function y() {
    let e = l.A.getConfigFetchState();
    if (
        !("loading" === e.state || ("success" === e.state && Date.now() - e.fetchedAt < _)) &&
        !("error" === e.state && Date.now() - e.fetchedAt < h)
    )
        try {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
            let e = (await i.Bo.get({ url: u.Rsh.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: !0 })).body,
                t = null;
            if (null != e.promotion_end_datetime) {
                let n = new Date(e.promotion_end_datetime);
                Number.isNaN(n.getTime()) || (t = n);
            }
            r.h.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                config: {
                    promotionalSkuIds: e.promotional_sku_ids,
                    promotionEndDatetime: t,
                    storefronts:
                        e.storefronts?.map((e) => ({
                            guildId: e.guild_id,
                            applicationId: e.application_id,
                            gameId: e.game_id,
                            collectiblesShopNavigationEnabled: !0 === e.collectibles_shop_navigation_enabled,
                            excludedPlatforms: e.excluded_platforms ?? [],
                            disableMobileAccountLinking: !0 === e.disable_mobile_account_linking,
                        })) ?? [],
                    announcementModalConfig:
                        null != e.announcement_modal_config
                            ? {
                                  version: e.announcement_modal_config.version,
                                  applicationId: e.announcement_modal_config.application_id,
                              }
                            : null,
                },
            });
        } catch {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE" });
        }
}
function N(e, t) {
    let n = l.A.getSKUEligibility(t);
    "checking" !== n &&
        "eligible" !== n &&
        "ineligible" !== n &&
        (r.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: t }),
        setTimeout(() => {
            "checking" === l.A.getSKUEligibility(t) &&
                r.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    reason: "interaction_deadline",
                });
        }, f),
        i.Bo.post({ url: u.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t), rejectWithError: !0 })
            .then((e) => {
                r.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE",
                    skuId: t,
                    interactionId: e.body.interaction_id,
                });
            })
            .catch((e) => {
                r.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    httpStatus: e?.status,
                });
            }));
}
