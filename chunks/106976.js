n.d(t, {
    i1: () => c,
    rx: () => d,
    sB: () => h,
    vY: () => f
}),
    n(266796),
    n(47120);
var i = n(570140),
    r = n(821849),
    l = n(307643),
    o = n(981631);
function s(e) {
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
function a(e) {
    var t;
    return {
        id: e.id,
        sku: s(e),
        summary: e.description,
        description: e.description,
        benefits: null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
        thumbnail: e.image_asset,
        published: e.published
    };
}
function u(e) {
    for (let t of (i.Z.dispatch({
        type: 'SKUS_FETCH_SUCCESS',
        skus: e.map(s)
    }),
    i.Z.dispatch({
        type: 'STORE_LISTINGS_FETCH_SUCCESS',
        storeListings: e.map(a)
    }),
    e))
        i.Z.dispatch({
            type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
            skuId: t.id,
            subscriptionPlans: t.subscription_plans
        });
}
async function d(e, t) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS',
        applicationId: e,
        groupListingId: t
    });
    try {
        var n;
        let r = await l.jz(e, t);
        return (
            i.Z.dispatch({
                type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
                applicationId: e,
                groupListing: r
            }),
            u(null !== (n = r.subscription_listings) && void 0 !== n ? n : []),
            r
        );
    } catch (t) {
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            applicationId: e
        });
    }
}
async function c(e) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS',
        guildId: e
    });
    try {
        let t = await l.GF(e);
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS',
            guildId: e,
            entitlements: t
        });
    } catch (t) {
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE',
            guildId: e
        });
    }
}
function h(e) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED',
        guildId: e
    });
}
async function f(e) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: e
    });
    try {
        var t;
        let n = await l.a_(e);
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
            groupListing: n
        });
        let o = null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
        await Promise.all(
            o.map((t) => {
                if (t.subscription_plans[0].id === e) return r.GZ(t.id, void 0, void 0, !0);
            })
        ),
            u(o);
    } catch (e) {}
}
