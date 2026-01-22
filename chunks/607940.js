n.d(t, {
    A: () => P,
    e: () => f,
}),
    n(896048);
var r,
    i = n(284009),
    a = n.n(i),
    s = n(311907),
    o = n(713402),
    l = n(73153),
    c = n(557009),
    u = n(67480);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var f = (function (e) {
    return (
        (e[(e.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (e[(e.FETCHING = 1)] = "FETCHING"),
        (e[(e.FETCHED = 2)] = "FETCHED"),
        e
    );
})({});
function p(e) {
    return "subscription_listing:".concat(e);
}
function _(e) {
    return "application:".concat(e);
}
function h(e) {
    return "plan:".concat(e);
}
function m(e, t, n) {
    return "entitlement:".concat(e, ":").concat(n, ":").concat(t);
}
function g(e, t) {
    return "entitlement:".concat(t, ":").concat(e);
}
let E = new o.J(
        (e) => [_(e.application_id), ...e.subscription_listings_ids.map(p)],
        (e) => e.id,
    ),
    b = new o.J(
        (e) => [_(e.application_id), h(e.subscription_plans[0].id)],
        (e) => e.id,
    ),
    y = new o.J(
        (e) => [m(e.applicationId, e.isValid(null, u.A), e.guildId), g(e.isValid(null, u.A), e.guildId)],
        (e) => e.id,
    ),
    O = {},
    A = {};
function v(e) {
    var t;
    for (let n of (E.set(e.id, e), null != (t = e.subscription_listings) ? t : [])) S(n);
}
function S(e) {
    b.set(e.id, e);
}
function I() {
    E.clear(), b.clear(), y.clear(), (O = {}), (A = {});
}
function T(e) {
    let { applicationId: t, groupListingId: n } = e;
    O[t] = 1;
    let r = E.get(n);
    if (null != r) for (let e of r.subscription_listings_ids) b.delete(e);
}
function C(e) {
    let { applicationId: t, groupListing: n } = e;
    (O[t] = 2), v(n);
}
function N(e) {
    let { applicationId: t } = e;
    O[t] = 2;
}
function R(e) {
    let { groupListing: t } = e;
    v(t);
}
class w extends (r = s.il) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var t;
        return null != (t = O[e]) ? t : 0;
    }
    getSubscriptionGroupListing(e) {
        return E.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = E.values(p(e));
        return a()(t.length <= 1, "Found multiple group listings for listing"), t[0];
    }
    getSubscriptionListing(e) {
        return b.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return b.values(_(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var t;
        return null != (t = A[e]) ? t : 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = b.values(h(e));
        return a()(t.length <= 1, "Found multiple listings for plan"), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return y.values(m(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return y.values(g(t, e));
    }
}
d(w, "displayName", "ApplicationSubscriptionStore");
let P = new w(l.h, {
    LOGOUT: I,
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: T,
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: C,
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: N,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
        let { guildId: t } = e;
        A[t] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
        let { guildId: t, entitlements: n } = e;
        (A[t] = 2),
            n.forEach((e) => {
                let t = c.A.createFromServer(e);
                y.set(t.id, t);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
        let { guildId: t } = e;
        A[t] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: R,
});
