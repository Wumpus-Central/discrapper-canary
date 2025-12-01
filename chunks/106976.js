n.d(t, {
    i1: () => d,
    rx: () => u,
    sB: () => f,
    vY: () => p,
}),
    n(953529),
    n(388685);
var r = n(570140),
    i = n(821849),
    a = n(307643),
    o = n(981631);
function s(e) {
    return {
        id: e.id,
        type: o.epS.SUBSCRIPTION,
        application_id: e.application_id,
        product_line: o.POd.APPLICATION,
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
function l(e) {
    var t;
    return {
        id: e.id,
        sku: s(e),
        summary: e.description,
        description: e.description,
        benefits: null != (t = e.store_listing_benefits) ? t : [],
        thumbnail: e.image_asset,
        published: e.published,
    };
}
function c(e) {
    for (let t of (r.Z.dispatch({
        type: "SKUS_FETCH_SUCCESS",
        skus: e.map(s),
    }),
    r.Z.dispatch({
        type: "STORE_LISTINGS_FETCH_SUCCESS",
        storeListings: e.map(l),
    }),
    e))
        r.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
        });
}
async function u(e, t) {
    r.Z.dispatch({
        type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
        applicationId: e,
        groupListingId: t,
    });
    try {
        var n;
        let i = await a.jz(e, t);
        return (
            r.Z.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                applicationId: e,
                groupListing: i,
            }),
            c(null != (n = i.subscription_listings) ? n : []),
            i
        );
    } catch (t) {
        r.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: e,
        });
    }
}
async function d(e) {
    r.Z.dispatch({
        type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
        guildId: e,
    });
    try {
        let t = await a.GF(e);
        r.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: e,
            entitlements: t,
        });
    } catch (t) {
        r.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
            guildId: e,
        });
    }
}
function f(e) {
    r.Z.dispatch({
        type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
        guildId: e,
    });
}
async function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    r.Z.dispatch({
        type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
        planId: e,
    });
    try {
        var n;
        let t = await a.a_(e);
        r.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: t,
        });
        let o = null != (n = t.subscription_listings) ? n : [];
        await Promise.all(
            o.map((t) => {
                if (t.subscription_plans[0].id === e) return i.GZ(t.id, void 0, void 0, !0);
            }),
        ),
            c(o);
    } catch (n) {
        if ("status" in n && 429 === n.status && t < 10) await p(e, ++t);
        else throw n;
    }
}
