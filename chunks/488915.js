i.d(e, {
    M: () => S,
    Z: () => E
}),
    i(47120);
var n,
    r,
    s,
    o,
    l = i(512722),
    a = i.n(l),
    c = i(442837),
    p = i(759174),
    u = i(570140),
    _ = i(959546),
    d = i(55563),
    S = (((r = {})[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED'), r);
function C(t) {
    return 'subscription_listing:'.concat(t);
}
function f(t) {
    return 'application:'.concat(t);
}
function I(t) {
    return 'plan:'.concat(t);
}
function T(t, e, i) {
    return 'entitlement:'.concat(t, ':').concat(i, ':').concat(e);
}
function N(t, e) {
    return 'entitlement:'.concat(e, ':').concat(t);
}
let g = new p.h(
        (t) => [f(t.application_id), ...t.subscription_listings_ids.map(C)],
        (t) => t.id
    ),
    P = new p.h(
        (t) => [f(t.application_id), I(t.subscription_plans[0].id)],
        (t) => t.id
    ),
    O = new p.h(
        (t) => [T(t.applicationId, t.isValid(null, d.Z), t.guildId), N(t.isValid(null, d.Z), t.guildId)],
        (t) => t.id
    ),
    b = {},
    m = {};
function h(t) {
    var e, i;
    for (let n of (g.set(t.id, t), null != (e = t.subscription_listings) ? e : [])) {
        (i = n), P.set(i.id, i);
    }
}
class L extends (n = c.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(t) {
        var e;
        return null != (e = b[t]) ? e : 0;
    }
    getSubscriptionGroupListing(t) {
        return g.get(t);
    }
    getSubscriptionGroupListingForSubscriptionListing(t) {
        let e = g.values(C(t));
        return a()(e.length <= 1, 'Found multiple group listings for listing'), e[0];
    }
    getSubscriptionListing(t) {
        return P.get(t);
    }
    getSubscriptionListingsForApplication(t) {
        return P.values(f(t));
    }
    getEntitlementsForGuildFetchState(t) {
        var e;
        return null != (e = m[t]) ? e : 0;
    }
    getSubscriptionListingForPlan(t) {
        let e = P.values(I(t));
        return a()(e.length <= 1, 'Found multiple listings for plan'), e[0];
    }
    getApplicationEntitlementsForGuild(t, e) {
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return O.values(T(t, i, e));
    }
    getEntitlementsForGuild(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return O.values(N(e, t));
    }
}
(o = 'ApplicationSubscriptionStore'),
    (s = 'displayName') in L
        ? Object.defineProperty(L, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (L[s] = o);
let E = new L(u.Z, {
    LOGOUT: function () {
        g.clear(), P.clear(), O.clear(), (b = {}), (m = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
        let { applicationId: e, groupListingId: i } = t;
        b[e] = 1;
        let n = g.get(i);
        if (null != n) for (let t of n.subscription_listings_ids) P.delete(t);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
        let { applicationId: e, groupListing: i } = t;
        (b[e] = 2), h(i);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
        let { applicationId: e } = t;
        b[e] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
        let { guildId: e } = t;
        m[e] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
        let { guildId: e, entitlements: i } = t;
        (m[e] = 2),
            i.forEach((t) => {
                let e = _.Z.createFromServer(t);
                O.set(e.id, e);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
        let { guildId: e } = t;
        m[e] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (t) {
        let { groupListing: e } = t;
        h(e);
    }
});
