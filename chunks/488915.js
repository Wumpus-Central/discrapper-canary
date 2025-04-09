n.d(t, {
    M: () => E,
    Z: () => P
}),
    n(388685);
var r,
    i,
    l,
    o,
    a = n(512722),
    u = n.n(a),
    s = n(442837),
    c = n(759174),
    d = n(570140),
    p = n(959546),
    f = n(55563),
    E = (((i = {})[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED'), i);
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
let T = new c.h(
        (e) => [S(e.application_id), ...e.subscription_listings_ids.map(_)],
        (e) => e.id
    ),
    h = new c.h(
        (e) => [S(e.application_id), O(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    b = new c.h(
        (e) => [I(e.applicationId, e.isValid(null, f.Z), e.guildId), g(e.isValid(null, f.Z), e.guildId)],
        (e) => e.id
    ),
    N = {},
    C = {};
function y(e) {
    var t, n;
    for (let r of (T.set(e.id, e), null != (t = e.subscription_listings) ? t : [])) {
        (n = r), h.set(n.id, n);
    }
}
class m extends (r = s.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var t;
        return null != (t = N[e]) ? t : 0;
    }
    getSubscriptionGroupListing(e) {
        return T.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = T.values(_(e));
        return u()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return h.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return h.values(S(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var t;
        return null != (t = C[e]) ? t : 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = h.values(O(e));
        return u()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return b.values(I(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return b.values(g(t, e));
    }
}
(o = 'ApplicationSubscriptionStore'),
    (l = 'displayName') in m
        ? Object.defineProperty(m, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[l] = o);
let P = new m(d.Z, {
    LOGOUT: function () {
        T.clear(), h.clear(), b.clear(), (N = {}), (C = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
        let { applicationId: t, groupListingId: n } = e;
        N[t] = 1;
        let r = T.get(n);
        if (null != r) for (let e of r.subscription_listings_ids) h.delete(e);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
        let { applicationId: t, groupListing: n } = e;
        (N[t] = 2), y(n);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
        let { applicationId: t } = e;
        N[t] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
        let { guildId: t } = e;
        C[t] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
        let { guildId: t, entitlements: n } = e;
        (C[t] = 2),
            n.forEach((e) => {
                let t = p.Z.createFromServer(e);
                b.set(t.id, t);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
        let { guildId: t } = e;
        C[t] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
        let { groupListing: t } = e;
        y(t);
    }
});
