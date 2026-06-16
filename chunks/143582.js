i.d(t, { Hc: () => _, _R: () => c, f5: () => u, vz: () => d });
var n = i(228366),
    a = i(73825),
    l = i(337095),
    r = i(652215);
function s(e) {
    return {
        id: e.id,
        type: r.Puh.SUBSCRIPTION,
        application_id: e.application_id,
        product_line: r.EZt.APPLICATION,
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
function o(e) {
    return {
        id: e.id,
        sku: s(e),
        summary: e.description,
        description: e.description,
        benefits: e.store_listing_benefits ?? [],
        thumbnail: e.image_asset,
        published: e.published,
    };
}
function S(e) {
    for (let t of (n.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: e.map(s) }),
    n.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: e.map(o) }),
    e))
        n.h.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
        });
}
async function d(e, t) {
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS", applicationId: e, groupListingId: t });
    try {
        let i = await l.fY(e, t);
        return (
            n.h.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                applicationId: e,
                groupListing: i,
            }),
            S(i.subscription_listings ?? []),
            i
        );
    } catch (t) {
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", applicationId: e });
    }
}
async function u(e) {
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS", guildId: e });
    try {
        let t = await l.dU(e);
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS", guildId: e, entitlements: t });
    } catch (t) {
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE", guildId: e });
    }
}
function _(e) {
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId: e });
}
async function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: e });
    try {
        let t = await l.q$(e);
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: t });
        let i = t.subscription_listings ?? [];
        await Promise.all(
            i.map((t) => {
                if (t.subscription_plans[0].id === e) return a.ur(t.id, void 0, void 0, !0);
            }),
        ),
            S(i);
    } catch (i) {
        if ("status" in i && 429 === i.status && t < 10) await c(e, ++t);
        else throw i;
    }
}
