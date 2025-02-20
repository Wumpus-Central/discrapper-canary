n.d(t, {
    M: () => p,
    Z: () => T
}),
    n(47120);
var i,
    r,
    l,
    o,
    s = n(512722),
    a = n.n(s),
    u = n(442837),
    d = n(759174),
    c = n(570140),
    h = n(959546),
    f = n(55563),
    p = (((r = {})[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED'), r);
function g(e) {
    return 'subscription_listing:'.concat(e);
}
function v(e) {
    return 'application:'.concat(e);
}
function C(e) {
    return 'plan:'.concat(e);
}
function E(e, t, n) {
    return 'entitlement:'.concat(e, ':').concat(n, ':').concat(t);
}
function O(e, t) {
    return 'entitlement:'.concat(t, ':').concat(e);
}
let m = new d.h(
        (e) => [v(e.application_id), ...e.subscription_listings_ids.map(g)],
        (e) => e.id
    ),
    S = new d.h(
        (e) => [v(e.application_id), C(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    _ = new d.h(
        (e) => [E(e.applicationId, e.isValid(null, f.Z), e.guildId), O(e.isValid(null, f.Z), e.guildId)],
        (e) => e.id
    ),
    b = {},
    I = {};
function y(e) {
    var t, n;
    for (let i of (m.set(e.id, e), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) {
        (n = i), S.set(n.id, n);
    }
}
class N extends (i = u.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var t;
        return null !== (t = b[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionGroupListing(e) {
        return m.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = m.values(g(e));
        return a()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return S.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return S.values(v(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var t;
        return null !== (t = I[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = S.values(C(e));
        return a()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return _.values(E(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return _.values(O(t, e));
    }
}
(o = 'ApplicationSubscriptionStore'),
    (l = 'displayName') in N
        ? Object.defineProperty(N, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[l] = o);
let T = new N(c.Z, {
    LOGOUT: function () {
        m.clear(), S.clear(), _.clear(), (b = {}), (I = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
        let { applicationId: t, groupListingId: n } = e;
        b[t] = 1;
        let i = m.get(n);
        if (null != i) for (let e of i.subscription_listings_ids) S.delete(e);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
        let { applicationId: t, groupListing: n } = e;
        (b[t] = 2), y(n);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
        let { applicationId: t } = e;
        b[t] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
        let { guildId: t } = e;
        I[t] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
        let { guildId: t, entitlements: n } = e;
        (I[t] = 2),
            n.forEach((e) => {
                let t = h.Z.createFromServer(e);
                _.set(t.id, t);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
        let { guildId: t } = e;
        I[t] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
        let { groupListing: t } = e;
        y(t);
    }
});
