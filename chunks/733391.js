n.d(t, { Kh: () => S, Rw: () => I, SP: () => A, Xw: () => N, dS: () => R, iR: () => O, qf: () => T });
var i = n(636537),
    a = n(228366),
    r = n(927813),
    _ = n(871123),
    s = n(832163),
    l = n(652215);
let o = 30 * r.A.Millis.SECOND,
    E = 30 * r.A.Millis.MINUTE,
    d = 60 * r.A.Millis.MINUTE,
    c = 30 * r.A.Millis.SECOND,
    u = 5 * r.A.Millis.SECOND;
async function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { eager: n = !1, forceFetch: r = !1 } = t,
        d = s.A.getStorefrontData(e),
        c = d?.state === "loading",
        u = d?.state === "error" && d?.fetchedAt != null && Date.now() - d.fetchedAt < o,
        I = d?.state === "fetched" && d?.fetchedAt != null && Date.now() - d.fetchedAt < E;
    if (!(c || u || I) || r)
        try {
            a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildId: e });
            let t = await i.Bo.get({
                    url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
                    rejectWithError: !0,
                    retries: 3,
                }),
                n = t.body,
                r = (0, _.sq)(n);
            null != r.storefrontPricing &&
                a.h.dispatch({
                    type: "SKUS_PRICING_FETCH_SUCCESS",
                    priceId: { type: "application", applicationId: r.applicationId },
                    data: r.storefrontPricing,
                }),
                a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildId: e, storefront: r }),
                a.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: r.applicationId,
                    storefrontMetadata: (0, _.NE)(n),
                }),
                a.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: t.body.store_listings ?? [] });
        } catch (t) {
            a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildId: e, eager: n });
        }
}
async function T(e, t) {
    try {
        a.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: t });
        let n = await i.Bo.get({ url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t), rejectWithError: !0 });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
        let r = n.body.store_listing,
            s = n.body.storefront_metadata;
        a.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            assets: Object.fromEntries(n.body.assets.map((e) => [e.id, e])),
        }),
            null != s &&
                a.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: r.sku.application_id,
                    storefrontMetadata: (0, _.NE)(s),
                }),
            a.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: r });
    } catch (e) {
        a.h.dispatch({ type: "STORE_LISTINGS_FETCH_FAIL", skuId: t });
    }
}
function A(e, t, n) {
    a.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", guildId: e, pageIndex: t, skuId: n });
}
async function S(e) {
    try {
        a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: e });
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
        a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS", guildId: e, announcement: n });
    } catch (t) {
        a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE", guildId: e });
    }
}
async function N() {
    let e = s.A.getConfigFetchState();
    if (
        !("loading" === e.state || ("success" === e.state && Date.now() - e.fetchedAt < d)) &&
        !("error" === e.state && Date.now() - e.fetchedAt < c)
    )
        try {
            a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
            let e = (await i.Bo.get({ url: l.Rsh.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: !0 })).body,
                t = null;
            if (null != e.promotion_end_datetime) {
                let n = new Date(e.promotion_end_datetime);
                Number.isNaN(n.getTime()) || (t = n);
            }
            a.h.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                config: {
                    promotionalSkuIds: e.promotional_sku_ids,
                    promotionEndDatetime: t,
                    storefronts:
                        e.storefronts?.map((e) => ({
                            guildId: e.guild_id,
                            applicationId: e.application_id,
                            gameId: e.game_id,
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
            a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE" });
        }
}
function O(e, t) {
    let n = s.A.getSKUEligibility(t);
    "checking" !== n &&
        "eligible" !== n &&
        "ineligible" !== n &&
        (a.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: t }),
        setTimeout(() => {
            "checking" === s.A.getSKUEligibility(t) &&
                a.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    reason: "interaction_deadline",
                });
        }, u),
        i.Bo.post({ url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t), rejectWithError: !0 })
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
async function R() {
    a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_START" });
    try {
        let e = (await i.Bo.get({ url: l.Rsh.SOCIAL_LAYER_STOREFRONT_ELIGIBILITY, rejectWithError: !0 })).body;
        return a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS", affinity: (0, _.Ox)(e) }), e;
    } catch (e) {
        return a.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_FAILURE" }), null;
    }
}
