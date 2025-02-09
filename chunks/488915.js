t.d(n, {
    M: () => I,
    Z: () => B
}),
    t(47120);
var i,
    o,
    r,
    a,
    l = t(512722),
    c = t.n(l),
    s = t(442837),
    _ = t(759174),
    d = t(570140),
    u = t(959546),
    p = t(55563),
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
function C(e, n, t) {
    return 'entitlement:'.concat(e, ':').concat(t, ':').concat(n);
}
function T(e, n) {
    return 'entitlement:'.concat(n, ':').concat(e);
}
let b = new _.h(
        (e) => [m(e.application_id), ...e.subscription_listings_ids.map(f)],
        (e) => e.id
    ),
    h = new _.h(
        (e) => [m(e.application_id), S(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    g = new _.h(
        (e) => [C(e.applicationId, e.isValid(null, p.Z), e.guildId), T(e.isValid(null, p.Z), e.guildId)],
        (e) => e.id
    ),
    x = {},
    N = {};
function v(e) {
    var n, t;
    for (let i of (b.set(e.id, e), null !== (n = e.subscription_listings) && void 0 !== n ? n : [])) {
        (t = i), h.set(t.id, t);
    }
}
class E extends (i = s.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var n;
        return null !== (n = x[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionGroupListing(e) {
        return b.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let n = b.values(f(e));
        return c()(n.length <= 1, 'Found multiple group listings for listing'), n[0];
    }
    getSubscriptionListing(e) {
        return h.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return h.values(m(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var n;
        return null !== (n = N[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionListingForPlan(e) {
        let n = h.values(S(e));
        return c()(n.length <= 1, 'Found multiple listings for plan'), n[0];
    }
    getApplicationEntitlementsForGuild(e, n) {
        let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return g.values(C(e, t, n));
    }
    getEntitlementsForGuild(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return g.values(T(n, e));
    }
}
(a = 'ApplicationSubscriptionStore'),
    (r = 'displayName') in E
        ? Object.defineProperty(E, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (E[r] = a);
let B = new E(d.Z, {
    LOGOUT: function () {
        b.clear(), h.clear(), g.clear(), (x = {}), (N = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
        let { applicationId: n, groupListingId: t } = e;
        x[n] = 1;
        let i = b.get(t);
        if (null != i) for (let e of i.subscription_listings_ids) h.delete(e);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
        let { applicationId: n, groupListing: t } = e;
        (x[n] = 2), v(t);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
        let { applicationId: n } = e;
        x[n] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
        let { guildId: n } = e;
        N[n] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
        let { guildId: n, entitlements: t } = e;
        (N[n] = 2),
            t.forEach((e) => {
                let n = u.Z.createFromServer(e);
                g.set(n.id, n);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
        let { guildId: n } = e;
        N[n] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
        let { groupListing: n } = e;
        v(n);
    }
});
