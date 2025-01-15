n.d(t, {
    M: function () {
        return i;
    }
}),
    n(47120);
var i,
    r,
    a,
    o,
    s,
    c,
    l = n(512722),
    u = n.n(l),
    d = n(442837),
    p = n(759174),
    f = n(570140),
    _ = n(959546),
    m = n(55563);
function I(e) {
    return 'subscription_listing:'.concat(e);
}
function h(e) {
    return 'application:'.concat(e);
}
function S(e) {
    return 'plan:'.concat(e);
}
function b(e, t, n) {
    return 'entitlement:'.concat(e, ':').concat(n, ':').concat(t);
}
function g(e, t) {
    return 'entitlement:'.concat(t, ':').concat(e);
}
((a = i || (i = {}))[(a.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (a[(a.FETCHING = 1)] = 'FETCHING'), (a[(a.FETCHED = 2)] = 'FETCHED');
let T = new p.h(
        (e) => [h(e.application_id), ...e.subscription_listings_ids.map(I)],
        (e) => e.id
    ),
    C = new p.h(
        (e) => [h(e.application_id), S(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    N = new p.h(
        (e) => [b(e.applicationId, e.isValid(null, m.Z), e.guildId), g(e.isValid(null, m.Z), e.guildId)],
        (e) => e.id
    ),
    E = {},
    v = {};
function P(e) {
    var t;
    for (let n of (T.set(e.id, e), null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
        (function (e) {
            C.set(e.id, e);
        })(n);
}
class L extends (r = d.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var t;
        return null !== (t = E[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionGroupListing(e) {
        return T.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = T.values(I(e));
        return u()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return C.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return C.values(h(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var t;
        return null !== (t = v[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = C.values(S(e));
        return u()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return N.values(b(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return N.values(g(t, e));
    }
}
(c = 'ApplicationSubscriptionStore'),
    (s = 'displayName') in (o = L)
        ? Object.defineProperty(o, s, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[s] = c),
    (t.Z = new L(f.Z, {
        LOGOUT: function () {
            T.clear(), C.clear(), N.clear(), (E = {}), (v = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            E[t] = 1;
            let i = T.get(n);
            if (null != i) for (let e of i.subscription_listings_ids) C.delete(e);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (E[t] = 2), P(n);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            E[t] = 2;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            v[t] = 1;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (v[t] = 2),
                n.forEach((e) => {
                    let t = _.Z.createFromServer(e);
                    N.set(t.id, t);
                });
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            v[t] = 0;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
            let { groupListing: t } = e;
            P(t);
        }
    }));
