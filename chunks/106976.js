(n.d(e, {
    i1: () => d,
    rx: () => c,
    sB: () => p,
    vY: () => f
}),
    n(953529),
    n(388685));
var i = n(570140),
    r = n(821849),
    l = n(307643),
    o = n(981631);
function a(t) {
    return {
        id: t.id,
        type: o.epS.SUBSCRIPTION,
        application_id: t.application_id,
        product_line: o.POd.APPLICATION,
        name: t.name,
        summary: '',
        description: t.description,
        flags: t.sku_flags,
        manifests: [],
        available_regions: [],
        legal_notice: '',
        deleted: t.soft_deleted,
        price_tier: 0,
        show_age_gate: !1,
        restricted: !1
    };
}
function s(t) {
    var e;
    return {
        id: t.id,
        sku: a(t),
        summary: t.description,
        description: t.description,
        benefits: null != (e = t.store_listing_benefits) ? e : [],
        thumbnail: t.image_asset,
        published: t.published
    };
}
function u(t) {
    for (let e of (i.Z.dispatch({
        type: 'SKUS_FETCH_SUCCESS',
        skus: t.map(a)
    }),
    i.Z.dispatch({
        type: 'STORE_LISTINGS_FETCH_SUCCESS',
        storeListings: t.map(s)
    }),
    t))
        i.Z.dispatch({
            type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
            skuId: e.id,
            subscriptionPlans: e.subscription_plans
        });
}
async function c(t, e) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS',
        applicationId: t,
        groupListingId: e
    });
    try {
        var n;
        let r = await l.jz(t, e);
        return (
            i.Z.dispatch({
                type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
                applicationId: t,
                groupListing: r
            }),
            u(null != (n = r.subscription_listings) ? n : []),
            r
        );
    } catch (e) {
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            applicationId: t
        });
    }
}
async function d(t) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS',
        guildId: t
    });
    try {
        let e = await l.GF(t);
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS',
            guildId: t,
            entitlements: e
        });
    } catch (e) {
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE',
            guildId: t
        });
    }
}
function p(t) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED',
        guildId: t
    });
}
async function f(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: t
    });
    try {
        var n;
        let e = await l.a_(t);
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
            groupListing: e
        });
        let o = null != (n = e.subscription_listings) ? n : [];
        (await Promise.all(
            o.map((e) => {
                if (e.subscription_plans[0].id === t) return r.GZ(e.id, void 0, void 0, !0);
            })
        ),
            u(o));
    } catch (n) {
        'status' in n && 429 === n.status && e < 10 && (await f(t, e++));
    }
}
