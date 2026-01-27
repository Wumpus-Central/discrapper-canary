n.d(e, {
    A: () => y,
    e: () => f,
}),
    n(896048);
var l,
    r,
    i,
    u = n(284009),
    o = n.n(u),
    s = n(311907),
    a = n(713402),
    c = n(73153),
    d = n(557009),
    p = n(67480),
    f =
        (((r = {})[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED"),
        r);

function S(t) {
    return "subscription_listing:".concat(t);
}

function A(t) {
    return "application:".concat(t);
}

function b(t) {
    return "plan:".concat(t);
}

function O(t, e, n) {
    return "entitlement:".concat(t, ":").concat(n, ":").concat(e);
}

function g(t, e) {
    return "entitlement:".concat(e, ":").concat(t);
}
let I = new a.J(
        (t) => [A(t.application_id), ...t.subscription_listings_ids.map(S)],
        (t) => t.id,
    ),
    m = new a.J(
        (t) => [A(t.application_id), b(t.subscription_plans[0].id)],
        (t) => t.id,
    ),
    v = new a.J(
        (t) => [O(t.applicationId, t.isValid(null, p.A), t.guildId), g(t.isValid(null, p.A), t.guildId)],
        (t) => t.id,
    ),
    E = {},
    P = {};

function h(t) {
    var e, n;
    for (let l of (I.set(t.id, t), null != (e = t.subscription_listings) ? e : [])) {
        (n = l), m.set(n.id, n);
    }
}
class T extends (l = s.il) {
    getSubscriptionGroupListingsForApplicationFetchState(t) {
        var e;
        return null != (e = E[t]) ? e : 0;
    }
    getSubscriptionGroupListing(t) {
        return I.get(t);
    }
    getSubscriptionGroupListingForSubscriptionListing(t) {
        let e = I.values(S(t));
        return o()(e.length <= 1, "Found multiple group listings for listing"), e[0];
    }
    getSubscriptionListing(t) {
        return m.get(t);
    }
    getSubscriptionListingsForApplication(t) {
        return m.values(A(t));
    }
    getEntitlementsForGuildFetchState(t) {
        var e;
        return null != (e = P[t]) ? e : 0;
    }
    getSubscriptionListingForPlan(t) {
        let e = m.values(b(t));
        return o()(e.length <= 1, "Found multiple listings for plan"), e[0];
    }
    getApplicationEntitlementsForGuild(t, e) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return v.values(O(t, n, e));
    }
    getEntitlementsForGuild(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return v.values(g(e, t));
    }
}
(i = "displayName") in T
    ? Object.defineProperty(T, i, {
          value: "ApplicationSubscriptionStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (T[i] = "ApplicationSubscriptionStore");
let y = new T(c.h, {
    LOGOUT: function () {
        I.clear(), m.clear(), v.clear(), (E = {}), (P = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
        let { applicationId: e, groupListingId: n } = t;
        E[e] = 1;
        let l = I.get(n);
        if (null != l) for (let t of l.subscription_listings_ids) m.delete(t);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
        let { applicationId: e, groupListing: n } = t;
        (E[e] = 2), h(n);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
        let { applicationId: e } = t;
        E[e] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
        let { guildId: e } = t;
        P[e] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
        let { guildId: e, entitlements: n } = t;
        (P[e] = 2),
            n.forEach((t) => {
                let e = d.A.createFromServer(t);
                v.set(e.id, e);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
        let { guildId: e } = t;
        P[e] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (t) {
        let { groupListing: e } = t;
        h(e);
    },
});
