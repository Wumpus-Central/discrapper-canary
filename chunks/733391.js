"use strict";
n.d(t, { Kh: () => A, Rw: () => m, SP: () => g, Xw: () => I, iR: () => T, qf: () => E });
var r = n(562465),
    i = n(73153),
    s = n(828596),
    a = n(927813),
    o = n(871123),
    l = n(832163),
    u = n(179935),
    c = n(652215);
let d = 30 * a.A.Millis.SECOND,
    _ = 30 * a.A.Millis.MINUTE,
    f = 60 * a.A.Millis.MINUTE,
    p = 30 * a.A.Millis.SECOND,
    h = 5 * a.A.Millis.SECOND;
async function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { eager: n = !1, forceFetch: a = !1 } = t,
        u = l.A.getStorefrontData(e),
        f = u?.state === "loading",
        p = u?.state === "error" && u?.fetchedAt != null && Date.now() - u.fetchedAt < d,
        h = u?.state === "fetched" && u?.fetchedAt != null && Date.now() - u.fetchedAt < _;
    if (!(f || p || h) || a)
        try {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildId: e });
            let t = await r.Bo.get({
                    url: c.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
                    rejectWithError: !0,
                    retries: 3,
                }),
                n = t.body;
            (0, s.l9)(n.application_id),
                i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildId: e, storefront: (0, o.sq)(n) }),
                i.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: t.body.store_listings ?? [] });
        } catch (t) {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildId: e, eager: n });
        }
}
async function E(e, t) {
    try {
        i.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: t }), (0, s.N4)([t]);
        let n = await r.Bo.get({ url: c.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t), rejectWithError: !0 });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
        i.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            assets: Object.fromEntries(n.body.assets.map((e) => [e.id, e])),
        }),
            i.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: n.body.store_listing });
    } catch (e) {
        i.h.dispatch({ type: "STORE_LISTINGS_FETCH_FAIL", skuId: t });
    }
}
function g(e, t, n) {
    i.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", guildId: e, pageIndex: t, skuId: n });
}
async function A(e) {
    try {
        i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: e });
        let t = (await r.Bo.get({ url: c.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e), rejectWithError: !0 })).body;
        i.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS",
            guildId: e,
            announcement: {
                id: t.id,
                applicationId: t.application_id,
                applicationName: t.application_name,
                assetId: t.asset_id,
                backgroundImageAssetId: t.background_image_asset_id,
            },
        });
    } catch (t) {
        i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE", guildId: e });
    }
}
async function I() {
    let e = l.A.getConfigFetchState();
    if (
        !("loading" === e.state || ("success" === e.state && Date.now() - e.fetchedAt < f)) &&
        !("error" === e.state && Date.now() - e.fetchedAt < p)
    )
        try {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
            let e = (await r.Bo.get({ url: c.Rsh.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: !0 })).body,
                t = null;
            if (null != e.promotion_end_datetime) {
                let n = new Date(e.promotion_end_datetime);
                Number.isNaN(n.getTime()) || (t = n);
            }
            i.h.dispatch({
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
                },
            });
        } catch {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE" });
        }
}
function T(e, t, n) {
    if (!(0, u.T)({ location: n })) return;
    let s = l.A.getSKUEligibility(t);
    "checking" !== s &&
        "eligible" !== s &&
        "ineligible" !== s &&
        (i.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: t }),
        setTimeout(() => {
            "checking" === l.A.getSKUEligibility(t) &&
                i.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    reason: "interaction_deadline",
                });
        }, h),
        r.Bo.post({ url: c.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t), rejectWithError: !0 })
            .then((e) => {
                i.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE",
                    skuId: t,
                    interactionId: e.body.interaction_id,
                });
            })
            .catch((e) => {
                i.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    httpStatus: e?.status,
                });
            }));
}
