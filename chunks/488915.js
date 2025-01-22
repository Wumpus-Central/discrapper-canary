i.d(n, {
    M: function () {
        return e;
    }
}),
    i(47120);
var e,
    r,
    a,
    o,
    s,
    l,
    c = i(512722),
    d = i.n(c),
    u = i(442837),
    p = i(759174),
    _ = i(570140),
    C = i(959546),
    S = i(55563);
function f(t) {
    return 'subscription_listing:'.concat(t);
}
function I(t) {
    return 'application:'.concat(t);
}
function T(t) {
    return 'plan:'.concat(t);
}
function N(t, n, i) {
    return 'entitlement:'.concat(t, ':').concat(i, ':').concat(n);
}
function E(t, n) {
    return 'entitlement:'.concat(n, ':').concat(t);
}
((a = e || (e = {}))[(a.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (a[(a.FETCHING = 1)] = 'FETCHING'), (a[(a.FETCHED = 2)] = 'FETCHED');
let L = new p.h(
        (t) => [I(t.application_id), ...t.subscription_listings_ids.map(f)],
        (t) => t.id
    ),
    b = new p.h(
        (t) => [I(t.application_id), T(t.subscription_plans[0].id)],
        (t) => t.id
    ),
    h = new p.h(
        (t) => [N(t.applicationId, t.isValid(null, S.Z), t.guildId), E(t.isValid(null, S.Z), t.guildId)],
        (t) => t.id
    ),
    m = {},
    g = {};
function P(t) {
    var n;
    for (let i of (L.set(t.id, t), null !== (n = t.subscription_listings) && void 0 !== n ? n : []))
        (function (t) {
            b.set(t.id, t);
        })(i);
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
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return h.values(N(t, i, n));
    }
    getEntitlementsForGuild(t) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return h.values(E(n, t));
    }
}
(l = 'ApplicationSubscriptionStore'),
    (s = 'displayName') in (o = O)
        ? Object.defineProperty(o, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[s] = l),
    (n.Z = new O(_.Z, {
        LOGOUT: function () {
            L.clear(), b.clear(), h.clear(), (m = {}), (g = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: n, groupListingId: i } = t;
            m[n] = 1;
            let e = L.get(i);
            if (null != e) for (let t of e.subscription_listings_ids) b.delete(t);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
            let { applicationId: n, groupListing: i } = t;
            (m[n] = 2), P(i);
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
            let { guildId: n, entitlements: i } = t;
            (g[n] = 2),
                i.forEach((t) => {
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
