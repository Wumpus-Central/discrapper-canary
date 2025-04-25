n.d(t, {
    M: () => f,
    Z: () => m
}),
    n(388685);
var r,
    i,
    l,
    o,
    a = n(512722),
    u = n.n(a),
    c = n(442837),
    s = n(759174),
    d = n(570140),
    p = n(959546),
    E = n(55563),
    f = (((i = {})[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED'), i);
function _(e) {
    return 'subscription_listing:'.concat(e);
}
function S(e) {
    return 'application:'.concat(e);
}
function O(e) {
    return 'plan:'.concat(e);
}
function I(e, t, n) {
    return 'entitlement:'.concat(e, ':').concat(n, ':').concat(t);
}
function g(e, t) {
    return 'entitlement:'.concat(t, ':').concat(e);
}
let T = new s.h(
        (e) => [S(e.application_id), ...e.subscription_listings_ids.map(_)],
        (e) => e.id
    ),
    b = new s.h(
        (e) => [S(e.application_id), O(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    h = new s.h(
        (e) => [I(e.applicationId, e.isValid(null, E.Z), e.guildId), g(e.isValid(null, E.Z), e.guildId)],
        (e) => e.id
    ),
    C = {},
    y = {};
function N(e) {
    var t, n;
    for (let r of (T.set(e.id, e), null != (t = e.subscription_listings) ? t : [])) {
        (n = r), b.set(n.id, n);
    }
}
class P extends (r = c.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var t;
        return null != (t = C[e]) ? t : 0;
    }
    getSubscriptionGroupListing(e) {
        return T.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = T.values(_(e));
        return u()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return b.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return b.values(S(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var t;
        return null != (t = y[e]) ? t : 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = b.values(O(e));
        return u()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return h.values(I(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return h.values(g(t, e));
    }
}
(o = 'ApplicationSubscriptionStore'),
    (l = 'displayName') in P
        ? Object.defineProperty(P, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (P[l] = o);
let m = new P(d.Z, {
    LOGOUT: function () {
        T.clear(), b.clear(), h.clear(), (C = {}), (y = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
        let { applicationId: t, groupListingId: n } = e;
        C[t] = 1;
        let r = T.get(n);
        if (null != r) for (let e of r.subscription_listings_ids) b.delete(e);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
        let { applicationId: t, groupListing: n } = e;
        (C[t] = 2), N(n);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
        let { applicationId: t } = e;
        C[t] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
        let { guildId: t } = e;
        y[t] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
        let { guildId: t, entitlements: n } = e;
        (y[t] = 2),
            n.forEach((e) => {
                let t = p.Z.createFromServer(e);
                h.set(t.id, t);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
        let { guildId: t } = e;
        y[t] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
        let { groupListing: t } = e;
        N(t);
    }
});
