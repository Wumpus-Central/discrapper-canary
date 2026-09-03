i.d(t, { Hc: () => u, _R: () => f, f5: () => o, vz: () => h });
var l = i(228366),
    a = i(73825),
    n = i(337095),
    s = i(652215);
function r(e) {
    return {
        id: e.id,
        type: s.Puh.SUBSCRIPTION,
        application_id: e.application_id,
        product_line: s.EZt.APPLICATION,
        name: e.name,
        summary: "",
        description: e.description,
        flags: e.sku_flags,
        manifests: [],
        available_regions: [],
        legal_notice: "",
        deleted: e.soft_deleted,
        price_tier: 0,
        show_age_gate: !1,
        restricted: !1,
    };
}
function c(e) {
    return {
        id: e.id,
        sku: r(e),
        summary: e.description,
        description: e.description,
        benefits: e.store_listing_benefits ?? [],
        thumbnail: e.image_asset,
        published: e.published,
    };
}
function d(e) {
    for (let t of (l.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: e.map(r) }),
    l.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: e.map(c) }),
    e))
        l.h.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
        });
}
async function h(e, t) {
    l.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS", applicationId: e, groupListingId: t });
    try {
        let i = await n.fY(e, t);
        return (
            l.h.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                applicationId: e,
                groupListing: i,
            }),
            d(i.subscription_listings ?? []),
            i
        );
    } catch (t) {
        l.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", applicationId: e });
    }
}
async function o(e) {
    l.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS", guildId: e });
    try {
        let t = await n.dU(e);
        l.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS", guildId: e, entitlements: t });
    } catch (t) {
        l.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE", guildId: e });
    }
}
function u(e) {
    l.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId: e });
}
async function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    l.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: e });
    try {
        let t = await n.q$(e);
        l.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: t });
        let i = t.subscription_listings ?? [];
        await Promise.all(
            i.map((t) => {
                if (t.subscription_plans[0].id === e) return a.ur(t.id, void 0, void 0, !0);
            }),
        ),
            d(i);
    } catch (i) {
        if ("status" in i && 429 === i.status && t < 10) await f(e, ++t);
        else throw i;
    }
}
