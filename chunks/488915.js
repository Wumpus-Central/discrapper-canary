n.d(t, {
    M: function () {
        return i;
    }
}),
    n(47120);
var i,
    a,
    r,
    o,
    l,
    s,
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    p = n(759174),
    m = n(570140),
    _ = n(959546),
    f = n(55563);
function g(e) {
    return 'subscription_listing:'.concat(e);
}
function h(e) {
    return 'application:'.concat(e);
}
function I(e) {
    return 'plan:'.concat(e);
}
function b(e, t, n) {
    return 'entitlement:'.concat(e, ':').concat(n, ':').concat(t);
}
function v(e, t) {
    return 'entitlement:'.concat(t, ':').concat(e);
}
((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED');
let x = new p.h(
        (e) => [h(e.application_id), ...e.subscription_listings_ids.map(g)],
        (e) => e.id
    ),
    C = new p.h(
        (e) => [h(e.application_id), I(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    S = new p.h(
        (e) => [b(e.applicationId, e.isValid(null, f.Z), e.guildId), v(e.isValid(null, f.Z), e.guildId)],
        (e) => e.id
    ),
    N = {},
    y = {};
function T(e) {
    var t;
    for (let n of (x.set(e.id, e), null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
        (function (e) {
            C.set(e.id, e);
        })(n);
}
class j extends (a = u.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var t;
        return null !== (t = N[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionGroupListing(e) {
        return x.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = x.values(g(e));
        return d()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return C.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return C.values(h(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var t;
        return null !== (t = y[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = C.values(I(e));
        return d()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return S.values(b(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return S.values(v(t, e));
    }
}
(s = 'ApplicationSubscriptionStore'),
    (l = 'displayName') in (o = j)
        ? Object.defineProperty(o, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[l] = s),
    (t.Z = new j(m.Z, {
        LOGOUT: function () {
            x.clear(), C.clear(), S.clear(), (N = {}), (y = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            N[t] = 1;
            let i = x.get(n);
            if (null != i) for (let e of i.subscription_listings_ids) C.delete(e);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (N[t] = 2), T(n);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            N[t] = 2;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            y[t] = 1;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (y[t] = 2),
                n.forEach((e) => {
                    let t = _.Z.createFromServer(e);
                    S.set(t.id, t);
                });
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            y[t] = 0;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
            let { groupListing: t } = e;
            T(t);
        }
    }));
