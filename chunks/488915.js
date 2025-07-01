(n.d(e, {
    M: () => S,
    Z: () => C
}),
    n(388685));
var i,
    r,
    l,
    o,
    a = n(512722),
    s = n.n(a),
    u = n(442837),
    c = n(759174),
    d = n(570140),
    p = n(959546),
    f = n(55563),
    S = (((r = {})[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED'), r);
function O(t) {
    return 'subscription_listing:'.concat(t);
}
function I(t) {
    return 'application:'.concat(t);
}
function b(t) {
    return 'plan:'.concat(t);
}
function g(t, e, n) {
    return 'entitlement:'.concat(t, ':').concat(n, ':').concat(e);
}
function P(t, e) {
    return 'entitlement:'.concat(e, ':').concat(t);
}
let _ = new c.h(
        (t) => [I(t.application_id), ...t.subscription_listings_ids.map(O)],
        (t) => t.id
    ),
    y = new c.h(
        (t) => [I(t.application_id), b(t.subscription_plans[0].id)],
        (t) => t.id
    ),
    m = new c.h(
        (t) => [g(t.applicationId, t.isValid(null, f.Z), t.guildId), P(t.isValid(null, f.Z), t.guildId)],
        (t) => t.id
    ),
    v = {},
    E = {};
function h(t) {
    var e, n;
    for (let i of (_.set(t.id, t), null != (e = t.subscription_listings) ? e : [])) {
        ((n = i), y.set(n.id, n));
    }
}
class T extends (i = u.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(t) {
        var e;
        return null != (e = v[t]) ? e : 0;
    }
    getSubscriptionGroupListing(t) {
        return _.get(t);
    }
    getSubscriptionGroupListingForSubscriptionListing(t) {
        let e = _.values(O(t));
        return (s()(e.length <= 1, 'Found multiple group listings for listing'), e[0]);
    }
    getSubscriptionListing(t) {
        return y.get(t);
    }
    getSubscriptionListingsForApplication(t) {
        return y.values(I(t));
    }
    getEntitlementsForGuildFetchState(t) {
        var e;
        return null != (e = E[t]) ? e : 0;
    }
    getSubscriptionListingForPlan(t) {
        let e = y.values(b(t));
        return (s()(e.length <= 1, 'Found multiple listings for plan'), e[0]);
    }
    getApplicationEntitlementsForGuild(t, e) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return m.values(g(t, n, e));
    }
    getEntitlementsForGuild(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return m.values(P(e, t));
    }
}
((o = 'ApplicationSubscriptionStore'),
    (l = 'displayName') in T
        ? Object.defineProperty(T, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (T[l] = o));
let C = new T(d.Z, {
    LOGOUT: function () {
        (_.clear(), y.clear(), m.clear(), (v = {}), (E = {}));
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
        let { applicationId: e, groupListingId: n } = t;
        v[e] = 1;
        let i = _.get(n);
        if (null != i) for (let t of i.subscription_listings_ids) y.delete(t);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
        let { applicationId: e, groupListing: n } = t;
        ((v[e] = 2), h(n));
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
        let { applicationId: e } = t;
        v[e] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
        let { guildId: e } = t;
        E[e] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
        let { guildId: e, entitlements: n } = t;
        ((E[e] = 2),
            n.forEach((t) => {
                let e = p.Z.createFromServer(t);
                m.set(e.id, e);
            }));
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
        let { guildId: e } = t;
        E[e] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (t) {
        let { groupListing: e } = t;
        h(e);
    }
});
