n.d(t, {
    M: () => I,
    Z: () => B
}),
    n(47120);
var i,
    o,
    a,
    r,
    _ = n(512722),
    c = n.n(_),
    l = n(442837),
    s = n(759174),
    d = n(570140),
    u = n(959546),
    p = n(55563),
    I = (((o = {})[(o.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (o[(o.FETCHING = 1)] = 'FETCHING'), (o[(o.FETCHED = 2)] = 'FETCHED'), o);
function f(e) {
    return 'subscription_listing:'.concat(e);
}
function m(e) {
    return 'application:'.concat(e);
}
function S(e) {
    return 'plan:'.concat(e);
}
function C(e, t, n) {
    return 'entitlement:'.concat(e, ':').concat(n, ':').concat(t);
}
function T(e, t) {
    return 'entitlement:'.concat(t, ':').concat(e);
}
let b = new s.h(
        (e) => [m(e.application_id), ...e.subscription_listings_ids.map(f)],
        (e) => e.id
    ),
    h = new s.h(
        (e) => [m(e.application_id), S(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    g = new s.h(
        (e) => [C(e.applicationId, e.isValid(null, p.Z), e.guildId), T(e.isValid(null, p.Z), e.guildId)],
        (e) => e.id
    ),
    N = {},
    x = {};
function E(e) {
    var t, n;
    for (let i of (b.set(e.id, e), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) {
        (n = i), h.set(n.id, n);
    }
}
class y extends (i = l.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var t;
        return null !== (t = N[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionGroupListing(e) {
        return b.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = b.values(f(e));
        return c()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return h.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return h.values(m(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var t;
        return null !== (t = x[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = h.values(S(e));
        return c()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return g.values(C(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return g.values(T(t, e));
    }
}
(r = 'ApplicationSubscriptionStore'),
    (a = 'displayName') in y
        ? Object.defineProperty(y, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (y[a] = r);
let B = new y(d.Z, {
    LOGOUT: function () {
        b.clear(), h.clear(), g.clear(), (N = {}), (x = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
        let { applicationId: t, groupListingId: n } = e;
        N[t] = 1;
        let i = b.get(n);
        if (null != i) for (let e of i.subscription_listings_ids) h.delete(e);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
        let { applicationId: t, groupListing: n } = e;
        (N[t] = 2), E(n);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
        let { applicationId: t } = e;
        N[t] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
        let { guildId: t } = e;
        x[t] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
        let { guildId: t, entitlements: n } = e;
        (x[t] = 2),
            n.forEach((e) => {
                let t = u.Z.createFromServer(e);
                g.set(t.id, t);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
        let { guildId: t } = e;
        x[t] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
        let { groupListing: t } = e;
        E(t);
    }
});
