n.d(e, {
    M: () => f,
    Z: () => h,
}),
    n(388685);
var i,
    r,
    l,
    o = n(512722),
    a = n.n(o),
    u = n(442837),
    s = n(759174),
    c = n(570140),
    d = n(959546),
    p = n(55563),
    f =
        (((r = {})[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED"),
        r);
function S(t) {
    return "subscription_listing:".concat(t);
}
function O(t) {
    return "application:".concat(t);
}
function I(t) {
    return "plan:".concat(t);
}
function b(t, e, n) {
    return "entitlement:".concat(t, ":").concat(n, ":").concat(e);
}
function g(t, e) {
    return "entitlement:".concat(e, ":").concat(t);
}
let _ = new s.h(
        (t) => [O(t.application_id), ...t.subscription_listings_ids.map(S)],
        (t) => t.id,
    ),
    y = new s.h(
        (t) => [O(t.application_id), I(t.subscription_plans[0].id)],
        (t) => t.id,
    ),
    P = new s.h(
        (t) => [b(t.applicationId, t.isValid(null, p.Z), t.guildId), g(t.isValid(null, p.Z), t.guildId)],
        (t) => t.id,
    ),
    v = {},
    E = {};
function m(t) {
    var e, n;
    for (let i of (_.set(t.id, t), null != (e = t.subscription_listings) ? e : [])) {
        (n = i), y.set(n.id, n);
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
        let e = _.values(S(t));
        return a()(e.length <= 1, "Found multiple group listings for listing"), e[0];
    }
    getSubscriptionListing(t) {
        return y.get(t);
    }
    getSubscriptionListingsForApplication(t) {
        return y.values(O(t));
    }
    getEntitlementsForGuildFetchState(t) {
        var e;
        return null != (e = E[t]) ? e : 0;
    }
    getSubscriptionListingForPlan(t) {
        let e = y.values(I(t));
        return a()(e.length <= 1, "Found multiple listings for plan"), e[0];
    }
    getApplicationEntitlementsForGuild(t, e) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return P.values(b(t, n, e));
    }
    getEntitlementsForGuild(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return P.values(g(e, t));
    }
}
(l = "displayName") in T
    ? Object.defineProperty(T, l, {
          value: "ApplicationSubscriptionStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (T[l] = "ApplicationSubscriptionStore");
let h = new T(c.Z, {
    LOGOUT: function () {
        _.clear(), y.clear(), P.clear(), (v = {}), (E = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
        let { applicationId: e, groupListingId: n } = t;
        v[e] = 1;
        let i = _.get(n);
        if (null != i) for (let t of i.subscription_listings_ids) y.delete(t);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
        let { applicationId: e, groupListing: n } = t;
        (v[e] = 2), m(n);
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
        (E[e] = 2),
            n.forEach((t) => {
                let e = d.Z.createFromServer(t);
                P.set(e.id, e);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
        let { guildId: e } = t;
        E[e] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (t) {
        let { groupListing: e } = t;
        m(e);
    },
});
