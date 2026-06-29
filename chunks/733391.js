"use strict";
n.d(t, { Kh: () => y, Pp: () => T, Rw: () => A, SP: () => S, Xw: () => C, ap: () => g, iR: () => N });
var i = n(636537),
    r = n(228366),
    s = n(977445),
    a = n(937427),
    o = n(927813),
    l = n(240248),
    u = n(871123),
    c = n(832163),
    d = n(652215);
let _ = 30 * o.A.Millis.SECOND,
    h = 30 * o.A.Millis.MINUTE,
    f = 60 * o.A.Millis.MINUTE,
    p = 30 * o.A.Millis.SECOND,
    E = 5 * o.A.Millis.SECOND;
async function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { eager: o = !1, forceFetch: l = !1 } = n,
        d = c.A.getStorefrontFetchState(e),
        f = d?.state === "loading",
        p = d?.state === "error" && null != d.fetchedAt && Date.now() - d.fetchedAt < _,
        E = d?.state === "fetched" && null != d.fetchedAt && Date.now() - d.fetchedAt < h;
    if (!(f || p || E) || l)
        try {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildOrApplicationId: e });
            let n = "application" === e.type ? e.applicationId : (0, u.mq)(e.guildId),
                o = {};
            null != n && (0, s.Fs)(n) && (o.test_mode = !0);
            let l = a.A.getPromotionIdOverride();
            null != l && (o.promotion_id_override = l);
            let c = "guild" === e.type && null == n && (0, s.pq)(),
                d = await i.Bo.get({ url: t, query: o, rejectWithError: !0, retries: 3 }),
                _ = d.body,
                h = (0, u.sq)(_);
            null != h.storefrontPricing &&
                r.h.dispatch({
                    type: "SKUS_PRICING_FETCH_SUCCESS",
                    priceId: { type: "application", applicationId: h.applicationId },
                    data: h.storefrontPricing,
                }),
                r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildOrApplicationId: e, storefront: h }),
                r.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: h.applicationId,
                    storefrontMetadata: (0, u.NE)(_),
                }),
                r.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: d.body.store_listings ?? [] }),
                c && (0, s.Fs)(h.applicationId) && (await m(e, t, { forceFetch: !0 }));
        } catch (t) {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildOrApplicationId: e, eager: o });
        }
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return m({ type: "application", applicationId: e }, d.Rsh.SOCIAL_LAYER_STOREFRONT_BY_APPLICATION_ID(e), t);
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return m({ type: "guild", guildId: e }, d.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e), t);
}
async function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { withGoogleSkuIds: s = !1, countryCode: o, paymentGateway: c } = n;
    try {
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e });
        let n = {};
        s && (n.with_google_sku_ids = !0), (0, l.uJ)(o) || (n.country_code = o), null != c && (n.payment_gateway = c);
        let d = a.A.getPromotionIdOverride();
        null != d && (n.promotion_id_override = d);
        let _ = await i.Bo.get({ url: t, query: n, rejectWithError: !0 });
        if (null == _.body || !_.ok) throw Error("Failed to fetch social layer storefront SKU");
        let h = _.body.store_listing,
            f = _.body.storefront_metadata;
        r.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            assets: Object.fromEntries(_.body.assets.map((e) => [e.id, e])),
        }),
            null != f &&
                r.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: h.sku.application_id,
                    storefrontMetadata: (0, u.NE)(f),
                }),
            r.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: h });
    } catch (t) {
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_FAIL", skuId: e });
    }
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return I(t, d.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(e, t), n);
}
function S(e, t, n) {
    r.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", applicationId: e, pageIndex: t, skuId: n });
}
async function y(e) {
    try {
        r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: e });
        let t = (await i.Bo.get({ url: d.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e), rejectWithError: !0 })).body,
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
async function C() {
    let e = c.A.getConfigFetchState();
    if (
        !("loading" === e.state || ("success" === e.state && Date.now() - e.fetchedAt < f)) &&
        !("error" === e.state && Date.now() - e.fetchedAt < p)
    )
        try {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
            let e = (await i.Bo.get({ url: d.Rsh.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: !0 })).body,
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
    let n = c.A.getSKUEligibility(t);
    "checking" !== n &&
        "eligible" !== n &&
        "ineligible" !== n &&
        (r.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: t }),
        setTimeout(() => {
            "checking" === c.A.getSKUEligibility(t) &&
                r.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    reason: "interaction_deadline",
                });
        }, E),
        i.Bo.post({ url: d.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t), rejectWithError: !0 })
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
