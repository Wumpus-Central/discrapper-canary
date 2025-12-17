n.d(t, {
    M: () => f,
    Z: () => w,
}),
    n(388685);
var r,
    i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(759174),
    l = n(570140),
    c = n(959546),
    u = n(55563);
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
function m(e) {
    return "plan:".concat(e);
}
function h(e, t, n) {
    return "entitlement:".concat(e, ":").concat(n, ":").concat(t);
}
function g(e, t) {
    return "entitlement:".concat(t, ":").concat(e);
}
let E = new s.h(
        (e) => [_(e.application_id), ...e.subscription_listings_ids.map(p)],
        (e) => e.id,
    ),
    b = new s.h(
        (e) => [_(e.application_id), m(e.subscription_plans[0].id)],
        (e) => e.id,
    ),
    y = new s.h(
        (e) => [h(e.applicationId, e.isValid(null, u.Z), e.guildId), g(e.isValid(null, u.Z), e.guildId)],
        (e) => e.id,
    ),
    O = {},
    v = {};
function S(e) {
    var t;
    for (let n of (E.set(e.id, e), null != (t = e.subscription_listings) ? t : [])) I(n);
}
function I(e) {
    b.set(e.id, e);
}
function T() {
    E.clear(), b.clear(), y.clear(), (O = {}), (v = {});
}
function C(e) {
    let { applicationId: t, groupListingId: n } = e;
    O[t] = 1;
    let r = E.get(n);
    if (null != r) for (let e of r.subscription_listings_ids) b.delete(e);
}
function A(e) {
    let { applicationId: t, groupListing: n } = e;
    (O[t] = 2), S(n);
}
function N(e) {
    let { applicationId: t } = e;
    O[t] = 2;
}
function P(e) {
    let { groupListing: t } = e;
    S(t);
}
class R extends (r = o.yh) {
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
        return null != (t = v[e]) ? t : 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = b.values(m(e));
        return a()(t.length <= 1, "Found multiple listings for plan"), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return y.values(h(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return y.values(g(t, e));
    }
}
d(R, "displayName", "ApplicationSubscriptionStore");
let w = new R(l.Z, {
    LOGOUT: T,
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: C,
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: A,
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: N,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
        let { guildId: t } = e;
        v[t] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
        let { guildId: t, entitlements: n } = e;
        (v[t] = 2),
            n.forEach((e) => {
                let t = c.Z.createFromServer(e);
                y.set(t.id, t);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
        let { guildId: t } = e;
        v[t] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: P,
});
