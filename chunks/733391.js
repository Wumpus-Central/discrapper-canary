"use strict";
n.d(t, {
    JX: () => L,
    Kh: () => w,
    Pp: () => S,
    Rw: () => I,
    SP: () => N,
    Xw: () => M,
    ZR: () => P,
    ap: () => A,
    d8: () => D,
    iR: () => x,
});
var i = n(158390),
    r = n(636537),
    s = n(228366),
    a = n(977445),
    o = n(937427),
    l = n(927813),
    u = n(240248),
    d = n(871123),
    c = n(832163),
    _ = n(652215);
let h = 30 * l.A.Millis.SECOND,
    f = 30 * l.A.Millis.MINUTE,
    E = 60 * l.A.Millis.MINUTE,
    p = 30 * l.A.Millis.SECOND,
    m = 5 * l.A.Millis.SECOND;
async function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { eager: i = !1, forceFetch: l = !1 } = n,
        u = c.A.getStorefrontFetchState(e),
        _ = u?.state === "loading",
        E = u?.state === "error" && null != u.fetchedAt && Date.now() - u.fetchedAt < h,
        p = u?.state === "fetched" && null != u.fetchedAt && Date.now() - u.fetchedAt < f;
    if (!(_ || E || p) || l)
        try {
            s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildOrApplicationId: e });
            let n = "application" === e.type ? e.applicationId : (0, d.mq)(e.guildId),
                i = {};
            null != n && (0, a.Fs)(n) && (i.test_mode = !0);
            let l = o.A.getPromotionIdOverride();
            null != l && (i.promotion_id_override = l);
            let u = "guild" === e.type && null == n && (0, a.pq)(),
                c = await r.Bo.get({ url: t, query: i, rejectWithError: !0, retries: 3 }),
                _ = c.body,
                h = (0, d.sq)(_);
            null != h.storefrontPricing &&
                s.h.dispatch({
                    type: "SKUS_PRICING_FETCH_SUCCESS",
                    priceId: { type: "application", applicationId: h.applicationId },
                    data: h.storefrontPricing,
                }),
                s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildOrApplicationId: e, storefront: h }),
                s.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: h.applicationId,
                    storefrontMetadata: (0, d.NE)(_),
                }),
                s.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: c.body.store_listings ?? [] }),
                u && (0, a.Fs)(h.applicationId) && (await g(e, t, { forceFetch: !0 }));
        } catch (t) {
            s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildOrApplicationId: e, eager: i });
        }
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return g({ type: "application", applicationId: e }, _.Rsh.SOCIAL_LAYER_STOREFRONT_BY_APPLICATION_ID(e), t);
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return g({ type: "guild", guildId: e }, _.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e), t);
}
async function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { withGoogleSkuIds: i = !1, countryCode: a, paymentGateway: l } = n;
    try {
        s.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e });
        let n = {};
        i && (n.with_google_sku_ids = !0), (0, u.uJ)(a) || (n.country_code = a), null != l && (n.payment_gateway = l);
        let c = o.A.getPromotionIdOverride();
        null != c && (n.promotion_id_override = c);
        let _ = await r.Bo.get({ url: t, query: n, rejectWithError: !0 });
        if (null == _.body || !_.ok) throw Error("Failed to fetch social layer storefront SKU");
        let h = _.body.store_listing,
            f = _.body.storefront_metadata;
        s.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            assets: Object.fromEntries(_.body.assets.map((e) => [e.id, e])),
        }),
            null != f &&
                s.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: h.sku.application_id,
                    storefrontMetadata: (0, d.NE)(f),
                }),
            s.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: h });
    } catch (t) {
        s.h.dispatch({ type: "STORE_LISTINGS_FETCH_FAIL", skuId: e });
    }
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return T(t, _.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(e, t), n);
}
function N(e, t, n) {
    s.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", applicationId: e, pageIndex: t, skuId: n });
}
let C = 5 * l.A.Millis.MINUTE,
    y = 30 * l.A.Millis.SECOND,
    v = 5 * l.A.Millis.MINUTE;
function R(e, t) {
    let n = e.get(t);
    return null == n && ((n = new i.A(y, v)), e.set(t, n)), n;
}
let O = new Map(),
    b = new Map();
async function L(e) {
    let t = c.A.getStorefrontEntries(e);
    if (t?.state === "loading") return;
    let n = R(O, e);
    if (
        !(t?.state === "error" && Date.now() - t.fetchedAt < n.current) &&
        !(t?.state === "fetched" && Date.now() - t.fetchedAt < C)
    )
        try {
            s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD", applicationId: e });
            let t = (await r.Bo.get({ url: _.Rsh.SOCIAL_LAYER_STOREFRONTS_ALL(e), rejectWithError: !0, retries: 3 }))
                .body;
            n.succeed(),
                s.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS",
                    applicationId: e,
                    entries: t.map(d.S4),
                });
        } catch (t) {
            n.fail(), s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE", applicationId: e });
        }
}
async function D(e, t) {
    let n = c.A.getStorefrontById(t);
    if (n?.state === "loading") return;
    let i = R(b, t);
    if (
        !(n?.state === "error" && null != n.fetchedAt && Date.now() - n.fetchedAt < i.current) &&
        !(n?.state === "fetched" && null != n.fetchedAt && Date.now() - n.fetchedAt < f)
    )
        try {
            s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD", storefrontId: t });
            let n = {};
            (0, a.Fs)(e) && (n.test_mode = !0);
            let l = o.A.getPromotionIdOverride();
            null != l && (n.promotion_id_override = l);
            let u = await r.Bo.get({
                    url: _.Rsh.SOCIAL_LAYER_STOREFRONT_BY_ID(e, t),
                    query: n,
                    rejectWithError: !0,
                    retries: 3,
                }),
                c = u.body,
                h = (0, d.sq)(c);
            null != h.storefrontPricing &&
                s.h.dispatch({
                    type: "SKUS_PRICING_FETCH_SUCCESS",
                    priceId: { type: "application", applicationId: h.applicationId },
                    data: h.storefrontPricing,
                }),
                s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS", storefrontId: t, storefront: h }),
                s.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: h.applicationId,
                    storefrontMetadata: (0, d.NE)(c),
                }),
                s.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: u.body.store_listings ?? [] }),
                i.succeed();
        } catch (n) {
            i.fail(),
                s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE", storefrontId: t }),
                c.A.getPreviewStorefrontId(e) === t && P(e, null);
        }
}
function P(e, t) {
    s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_SET_PREVIEW", applicationId: e, storefrontId: t });
}
async function w(e) {
    try {
        s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: e });
        let t = (await r.Bo.get({ url: _.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e), rejectWithError: !0 })).body,
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
        s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS", guildId: e, announcement: n });
    } catch (t) {
        s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE", guildId: e });
    }
}
async function M() {
    let e = c.A.getConfigFetchState();
    if (
        !("loading" === e.state || ("success" === e.state && Date.now() - e.fetchedAt < E)) &&
        !("error" === e.state && Date.now() - e.fetchedAt < p)
    )
        try {
            s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
            let e = (await r.Bo.get({ url: _.Rsh.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: !0 })).body,
                t = null;
            if (null != e.promotion_end_datetime) {
                let n = new Date(e.promotion_end_datetime);
                Number.isNaN(n.getTime()) || (t = n);
            }
            s.h.dispatch({
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
            s.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE" });
        }
}
function x(e, t) {
    let n = c.A.getSKUEligibility(t);
    "checking" !== n &&
        "eligible" !== n &&
        "ineligible" !== n &&
        (s.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: t }),
        setTimeout(() => {
            "checking" === c.A.getSKUEligibility(t) &&
                s.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    reason: "interaction_deadline",
                });
        }, m),
        r.Bo.post({ url: _.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t), rejectWithError: !0 })
            .then((e) => {
                s.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE",
                    skuId: t,
                    interactionId: e.body.interaction_id,
                });
            })
            .catch((e) => {
                s.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    httpStatus: e?.status,
                });
            }));
}
