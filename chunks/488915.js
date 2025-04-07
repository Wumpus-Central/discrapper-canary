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
function O(e) {
    return 'application:'.concat(e);
}
function g(e) {
    return 'plan:'.concat(e);
}
function S(e, t, n) {
    return 'entitlement:'.concat(e, ':').concat(n, ':').concat(t);
}
function I(e, t) {
    return 'entitlement:'.concat(t, ':').concat(e);
}
let b = new c.h(
        (e) => [O(e.application_id), ...e.subscription_listings_ids.map(_)],
        (e) => e.id
    ),
    T = new c.h(
        (e) => [O(e.application_id), g(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    h = new c.h(
        (e) => [S(e.applicationId, e.isValid(null, f.Z), e.guildId), I(e.isValid(null, f.Z), e.guildId)],
        (e) => e.id
    ),
    N = {},
    C = {};
function y(e) {
    var t, n;
    for (let r of (b.set(e.id, e), null != (t = e.subscription_listings) ? t : [])) {
        (n = r), T.set(n.id, n);
    }
}
class m extends (r = s.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var t;
        return null != (t = N[e]) ? t : 0;
    }
    getSubscriptionGroupListing(e) {
        return b.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = b.values(_(e));
        return u()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return T.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return T.values(O(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var t;
        return null != (t = C[e]) ? t : 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = T.values(g(e));
        return u()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return h.values(S(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return h.values(I(t, e));
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
        b.clear(), T.clear(), h.clear(), (N = {}), (C = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
        let { applicationId: t, groupListingId: n } = e;
        N[t] = 1;
        let r = b.get(n);
        if (null != r) for (let e of r.subscription_listings_ids) T.delete(e);
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
                h.set(t.id, t);
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
