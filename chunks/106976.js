i.d(e, {
    i1: () => u,
    rx: () => p,
    sB: () => _,
    vY: () => d
}),
    i(266796),
    i(47120);
var n = i(570140),
    r = i(821849),
    s = i(307643),
    o = i(981631);
function l(t) {
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
function a(t) {
    var e;
    return {
        id: t.id,
        sku: l(t),
        summary: t.description,
        description: t.description,
        benefits: null != (e = t.store_listing_benefits) ? e : [],
        thumbnail: t.image_asset,
        published: t.published
    };
}
function c(t) {
    for (let e of (n.Z.dispatch({
        type: 'SKUS_FETCH_SUCCESS',
        skus: t.map(l)
    }),
    n.Z.dispatch({
        type: 'STORE_LISTINGS_FETCH_SUCCESS',
        storeListings: t.map(a)
    }),
    t))
        n.Z.dispatch({
            type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
            skuId: e.id,
            subscriptionPlans: e.subscription_plans
        });
}
async function p(t, e) {
    n.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS',
        applicationId: t,
        groupListingId: e
    });
    try {
        var i;
        let r = await s.jz(t, e);
        return (
            n.Z.dispatch({
                type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
                applicationId: t,
                groupListing: r
            }),
            c(null != (i = r.subscription_listings) ? i : []),
            r
        );
    } catch (e) {
        n.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            applicationId: t
        });
    }
}
async function u(t) {
    n.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS',
        guildId: t
    });
    try {
        let e = await s.GF(t);
        n.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS',
            guildId: t,
            entitlements: e
        });
    } catch (e) {
        n.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE',
            guildId: t
        });
    }
}
function _(t) {
    n.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED',
        guildId: t
    });
}
async function d(t) {
    n.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: t
    });
    try {
        var e;
        let i = await s.a_(t);
        n.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
            groupListing: i
        });
        let o = null != (e = i.subscription_listings) ? e : [];
        await Promise.all(
            o.map((e) => {
                if (e.subscription_plans[0].id === t) return r.GZ(e.id, void 0, void 0, !0);
            })
        ),
            c(o);
    } catch (t) {}
}
