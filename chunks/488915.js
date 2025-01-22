e.d(n, {
    M: function () {
        return i;
    }
}),
    e(47120);
var i,
    r,
    a,
    s,
    o,
    l,
    c = e(512722),
    d = e.n(c),
    u = e(442837),
    p = e(759174),
    _ = e(570140),
    C = e(959546),
    S = e(55563);
function f(t) {
    return 'subscription_listing:'.concat(t);
}
function I(t) {
    return 'application:'.concat(t);
}
function T(t) {
    return 'plan:'.concat(t);
}
function E(t, n, e) {
    return 'entitlement:'.concat(t, ':').concat(e, ':').concat(n);
}
function N(t, n) {
    return 'entitlement:'.concat(n, ':').concat(t);
}
((a = i || (i = {}))[(a.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (a[(a.FETCHING = 1)] = 'FETCHING'), (a[(a.FETCHED = 2)] = 'FETCHED');
let L = new p.h(
        (t) => [I(t.application_id), ...t.subscription_listings_ids.map(f)],
        (t) => t.id
    ),
    b = new p.h(
        (t) => [I(t.application_id), T(t.subscription_plans[0].id)],
        (t) => t.id
    ),
    h = new p.h(
        (t) => [E(t.applicationId, t.isValid(null, S.Z), t.guildId), N(t.isValid(null, S.Z), t.guildId)],
        (t) => t.id
    ),
    m = {},
    g = {};
function P(t) {
    var n;
    for (let e of (L.set(t.id, t), null !== (n = t.subscription_listings) && void 0 !== n ? n : []))
        (function (t) {
            b.set(t.id, t);
        })(e);
}
class O extends (r = u.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(t) {
        var n;
        return null !== (n = m[t]) && void 0 !== n ? n : 0;
    }
    getSubscriptionGroupListing(t) {
        return L.get(t);
    }
    getSubscriptionGroupListingForSubscriptionListing(t) {
        let n = L.values(f(t));
        return d()(n.length <= 1, 'Found multiple group listings for listing'), n[0];
    }
    getSubscriptionListing(t) {
        return b.get(t);
    }
    getSubscriptionListingsForApplication(t) {
        return b.values(I(t));
    }
    getEntitlementsForGuildFetchState(t) {
        var n;
        return null !== (n = g[t]) && void 0 !== n ? n : 0;
    }
    getSubscriptionListingForPlan(t) {
        let n = b.values(T(t));
        return d()(n.length <= 1, 'Found multiple listings for plan'), n[0];
    }
    getApplicationEntitlementsForGuild(t, n) {
        let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return h.values(E(t, e, n));
    }
    getEntitlementsForGuild(t) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return h.values(N(n, t));
    }
}
(l = 'ApplicationSubscriptionStore'),
    (o = 'displayName') in (s = O)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (n.Z = new O(_.Z, {
        LOGOUT: function () {
            L.clear(), b.clear(), h.clear(), (m = {}), (g = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: n, groupListingId: e } = t;
            m[n] = 1;
            let i = L.get(e);
            if (null != i) for (let t of i.subscription_listings_ids) b.delete(t);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
            let { applicationId: n, groupListing: e } = t;
            (m[n] = 2), P(e);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
            let { applicationId: n } = t;
            m[n] = 2;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
            let { guildId: n } = t;
            g[n] = 1;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
            let { guildId: n, entitlements: e } = t;
            (g[n] = 2),
                e.forEach((t) => {
                    let n = C.Z.createFromServer(t);
                    h.set(n.id, n);
                });
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
            let { guildId: n } = t;
            g[n] = 0;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (t) {
            let { groupListing: n } = t;
            P(n);
        }
    }));
