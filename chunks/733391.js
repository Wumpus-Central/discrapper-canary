"use strict";
n.d(t, { Kh: () => g, Rw: () => h, SP: () => m, Xw: () => A, dS: () => T, iR: () => I, qf: () => E });
var i = n(636537),
    r = n(228366),
    s = n(927813),
    a = n(871123),
    o = n(832163),
    l = n(652215);
let u = 30 * s.A.Millis.SECOND,
    c = 30 * s.A.Millis.MINUTE,
    d = 60 * s.A.Millis.MINUTE,
    _ = 30 * s.A.Millis.SECOND,
    f = 5 * s.A.Millis.SECOND;
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { eager: n = !1, forceFetch: s = !1 } = t,
        d = o.A.getStorefrontData(e),
        _ = d?.state === "loading",
        f = d?.state === "error" && d?.fetchedAt != null && Date.now() - d.fetchedAt < u,
        h = d?.state === "fetched" && d?.fetchedAt != null && Date.now() - d.fetchedAt < c;
    if (!(_ || f || h) || s)
        try {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildId: e });
            let t = await i.Bo.get({
                    url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
                    rejectWithError: !0,
                    retries: 3,
                }),
                n = t.body,
                s = (0, a.sq)(n);
            null != s.storefrontPricing &&
                r.h.dispatch({
                    type: "SKUS_PRICING_FETCH_SUCCESS",
                    priceId: { type: "application", applicationId: s.applicationId },
                    data: s.storefrontPricing,
                }),
                r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildId: e, storefront: s }),
                r.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: s.applicationId,
                    storefrontMetadata: (0, a.NE)(n),
                }),
                r.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: t.body.store_listings ?? [] });
        } catch (t) {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildId: e, eager: n });
        }
}
async function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { withGoogleSkuIds: s = !1 } = n;
    try {
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e });
        let n = await i.Bo.get({ url: t, query: s ? { with_google_sku_ids: !0 } : void 0, rejectWithError: !0 });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
        let o = n.body.store_listing,
            l = n.body.storefront_metadata;
        r.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            assets: Object.fromEntries(n.body.assets.map((e) => [e.id, e])),
        }),
            null != l &&
                r.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: o.sku.application_id,
                    storefrontMetadata: (0, a.NE)(l),
                }),
            r.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: o });
    } catch (t) {
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_FAIL", skuId: e });
    }
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return p(t, l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t), n);
}
function m(e, t, n) {
    r.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", guildId: e, pageIndex: t, skuId: n });
}
async function g(e) {
    try {
        r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: e });
        let t = (await i.Bo.get({ url: l.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e), rejectWithError: !0 })).body,
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
async function A() {
    let e = o.A.getConfigFetchState();
    if (
        !("loading" === e.state || ("success" === e.state && Date.now() - e.fetchedAt < d)) &&
        !("error" === e.state && Date.now() - e.fetchedAt < _)
    )
        try {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
            let e = (await i.Bo.get({ url: l.Rsh.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: !0 })).body,
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
function I(e, t) {
    let n = o.A.getSKUEligibility(t);
    "checking" !== n &&
        "eligible" !== n &&
        "ineligible" !== n &&
        (r.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: t }),
        setTimeout(() => {
            "checking" === o.A.getSKUEligibility(t) &&
                r.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    reason: "interaction_deadline",
                });
        }, f),
        i.Bo.post({ url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t), rejectWithError: !0 })
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
async function T() {
    r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_START" });
    try {
        let e = (await i.Bo.get({ url: l.Rsh.SOCIAL_LAYER_STOREFRONT_ELIGIBILITY, rejectWithError: !0 })).body;
        return r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS", affinity: (0, a.Ox)(e) }), e;
    } catch (e) {
        return r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_FAILURE" }), null;
    }
}
