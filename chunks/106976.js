n.d(t, {
    i1: () => d,
    rx: () => s,
    sB: () => p,
    vY: () => E
}),
    n(953529),
    n(388685);
var r = n(570140),
    i = n(821849),
    l = n(307643),
    o = n(981631);
function a(e) {
    return {
        id: e.id,
        type: o.epS.SUBSCRIPTION,
        application_id: e.application_id,
        product_line: o.POd.APPLICATION,
        name: e.name,
        summary: '',
        description: e.description,
        flags: e.sku_flags,
        manifests: [],
        available_regions: [],
        legal_notice: '',
        deleted: e.soft_deleted,
        price_tier: 0,
        show_age_gate: !1,
        restricted: !1
    };
}
function u(e) {
    var t;
    return {
        id: e.id,
        sku: a(e),
        summary: e.description,
        description: e.description,
        benefits: null != (t = e.store_listing_benefits) ? t : [],
        thumbnail: e.image_asset,
        published: e.published
    };
}
function c(e) {
    for (let t of (r.Z.dispatch({
        type: 'SKUS_FETCH_SUCCESS',
        skus: e.map(a)
    }),
    r.Z.dispatch({
        type: 'STORE_LISTINGS_FETCH_SUCCESS',
        storeListings: e.map(u)
    }),
    e))
        r.Z.dispatch({
            type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
            skuId: t.id,
            subscriptionPlans: t.subscription_plans
        });
}
async function s(e, t) {
    r.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS',
        applicationId: e,
        groupListingId: t
    });
    try {
        var n;
        let i = await l.jz(e, t);
        return (
            r.Z.dispatch({
                type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
                applicationId: e,
                groupListing: i
            }),
            c(null != (n = i.subscription_listings) ? n : []),
            i
        );
    } catch (t) {
        r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            applicationId: e
        });
    }
}
async function d(e) {
    r.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS',
        guildId: e
    });
    try {
        let t = await l.GF(e);
        r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS',
            guildId: e,
            entitlements: t
        });
    } catch (t) {
        r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE',
            guildId: e
        });
    }
}
function p(e) {
    r.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED',
        guildId: e
    });
}
async function E(e) {
    r.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: e
    });
    try {
        var t;
        let n = await l.a_(e);
        r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
            groupListing: n
        });
        let o = null != (t = n.subscription_listings) ? t : [];
        await Promise.all(
            o.map((t) => {
                if (t.subscription_plans[0].id === e) return i.GZ(t.id, void 0, void 0, !0);
            })
        ),
            c(o);
    } catch (e) {}
}
