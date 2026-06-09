"use strict";
n.d(t, { Kh: () => S, Pp: () => I, Rw: () => g, SP: () => T, Xw: () => y, ap: () => m, iR: () => N });
var i = n(636537),
    r = n(228366),
    s = n(977445),
    a = n(927813),
    o = n(240248),
    l = n(871123),
    u = n(832163),
    c = n(652215);
let d = 30 * a.A.Millis.SECOND,
    _ = 30 * a.A.Millis.MINUTE,
    h = 60 * a.A.Millis.MINUTE,
    f = 30 * a.A.Millis.SECOND,
    p = 5 * a.A.Millis.SECOND;
async function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { eager: a = !1, forceFetch: o = !1 } = n,
        c = u.A.getStorefrontFetchState(e),
        h = c?.state === "loading",
        f = c?.state === "error" && null != c.fetchedAt && Date.now() - c.fetchedAt < d,
        p = c?.state === "fetched" && null != c.fetchedAt && Date.now() - c.fetchedAt < _;
    if (!(h || f || p) || o)
        try {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildOrApplicationId: e });
            let n = "application" === e.type ? e.applicationId : (0, l.mq)(e.guildId),
                a = {};
            null != n && (0, s.Fs)(n) && (a.test_mode = !0);
            let o = "guild" === e.type && null == n && (0, s.pq)(),
                u = await i.Bo.get({ url: t, query: a, rejectWithError: !0, retries: 3 }),
                c = u.body,
                d = (0, l.sq)(c);
            null != d.storefrontPricing &&
                r.h.dispatch({
                    type: "SKUS_PRICING_FETCH_SUCCESS",
                    priceId: { type: "application", applicationId: d.applicationId },
                    data: d.storefrontPricing,
                }),
                r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildOrApplicationId: e, storefront: d }),
                r.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: d.applicationId,
                    storefrontMetadata: (0, l.NE)(c),
                }),
                r.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: u.body.store_listings ?? [] }),
                o && (0, s.Fs)(d.applicationId) && (await E(e, t, { forceFetch: !0 }));
        } catch (t) {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildOrApplicationId: e, eager: a });
        }
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return E({ type: "application", applicationId: e }, c.Rsh.SOCIAL_LAYER_STOREFRONT_BY_APPLICATION_ID(e), t);
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return E({ type: "guild", guildId: e }, c.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e), t);
}
async function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { withGoogleSkuIds: s = !1, countryCode: a, paymentGateway: u } = n;
    try {
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e });
        let n = {};
        s && (n.with_google_sku_ids = !0), (0, o.uJ)(a) || (n.country_code = a), null != u && (n.payment_gateway = u);
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
                    storefrontMetadata: (0, l.NE)(_),
                }),
            r.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: d });
    } catch (t) {
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_FAIL", skuId: e });
    }
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return A(t, c.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(e, t), n);
}
function T(e, t, n) {
    r.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", applicationId: e, pageIndex: t, skuId: n });
}
async function S(e) {
    try {
        r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: e });
        let t = (await i.Bo.get({ url: c.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e), rejectWithError: !0 })).body,
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
    let e = u.A.getConfigFetchState();
    if (
        !("loading" === e.state || ("success" === e.state && Date.now() - e.fetchedAt < h)) &&
        !("error" === e.state && Date.now() - e.fetchedAt < f)
    )
        try {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
            let e = (await i.Bo.get({ url: c.Rsh.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: !0 })).body,
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
    let n = u.A.getSKUEligibility(t);
    "checking" !== n &&
        "eligible" !== n &&
        "ineligible" !== n &&
        (r.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: t }),
        setTimeout(() => {
            "checking" === u.A.getSKUEligibility(t) &&
                r.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    reason: "interaction_deadline",
                });
        }, p),
        i.Bo.post({ url: c.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t), rejectWithError: !0 })
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
