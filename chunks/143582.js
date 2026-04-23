e.d(i, { Hc: () => S, _R: () => p, f5: () => d, vz: () => c });
var n = e(228366),
    l = e(73825),
    s = e(337095),
    a = e(652215);
function o(t) {
    return {
        id: t.id,
        type: a.Puh.SUBSCRIPTION,
        application_id: t.application_id,
        product_line: a.EZt.APPLICATION,
        name: t.name,
        summary: "",
        description: t.description,
        flags: t.sku_flags,
        manifests: [],
        available_regions: [],
        legal_notice: "",
        deleted: t.soft_deleted,
        price_tier: 0,
        show_age_gate: !1,
        restricted: !1,
    };
}
function r(t) {
    return {
        id: t.id,
        sku: o(t),
        summary: t.description,
        description: t.description,
        benefits: t.store_listing_benefits ?? [],
        thumbnail: t.image_asset,
        published: t.published,
    };
}
function u(t) {
    for (let i of (n.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t.map(o) }),
    n.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: t.map(r) }),
    t))
        n.h.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: i.id,
            subscriptionPlans: i.subscription_plans,
        });
}
async function c(t, i) {
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS", applicationId: t, groupListingId: i });
    try {
        let e = await s.fY(t, i);
        return (
            n.h.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                applicationId: t,
                groupListing: e,
            }),
            u(e.subscription_listings ?? []),
            e
        );
    } catch (i) {
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", applicationId: t });
    }
}
async function d(t) {
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS", guildId: t });
    try {
        let i = await s.dU(t);
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS", guildId: t, entitlements: i });
    } catch (i) {
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE", guildId: t });
    }
}
function S(t) {
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId: t });
}
async function p(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: t });
    try {
        let i = await s.q$(t);
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: i });
        let e = i.subscription_listings ?? [];
        await Promise.all(
            e.map((i) => {
                if (i.subscription_plans[0].id === t) return l.ur(i.id, void 0, void 0, !0);
            }),
        ),
            u(e);
    } catch (e) {
        if ("status" in e && 429 === e.status && i < 10) await p(t, ++i);
        else throw e;
    }
}
