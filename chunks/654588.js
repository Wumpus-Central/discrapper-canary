n.d(t, { Z: () => b });
var r,
    i = n(442837),
    a = n(570140),
    o = n(78839),
    s = n(431);
function l(e, t, n) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class f {}
let _ = {
    userHasUnexpiredOffers: new f(),
    userHasUnexpiredDiscount: new f(),
    mostRecentSubscription: new f(),
    prevSubscription: new f(),
    shouldRefetchCampaignEligibility: !0,
    isEligibleForCampaign: null,
    isFetchingCampaignEligibility: !1,
};
function p(e) {
    let { isEligible: t } = e;
    _ = d(c({}, _), {
        shouldRefetchCampaignEligibility: !1,
        isEligibleForCampaign: t,
        isFetchingCampaignEligibility: !1,
    });
}
function h() {
    _ = d(c({}, _), {
        shouldRefetchCampaignEligibility: !1,
        isEligibleForCampaign: null,
        isFetchingCampaignEligibility: !1,
    });
}
function m() {
    _ = d(c({}, _), { isFetchingCampaignEligibility: !0 });
}
function g(e, t) {
    return (
        !(e instanceof f) &&
        ((null === e && null === t) || (null !== e && null !== t && e.id === t.id && e.status === t.status))
    );
}
class E extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, o.Z),
            this.syncWith([s.Z], this.handleUserOfferUpdate),
            this.syncWith([o.Z], this.handleSubscriptionUpdate);
    }
    get state() {
        return _;
    }
    handleSubscriptionUpdate() {
        let e = c({}, _);
        if (!0 === o.Z.hasFetchedMostRecentPremiumTypeSubscription()) {
            let t = e.mostRecentSubscription,
                n = o.Z.getMostRecentPremiumTypeSubscription();
            g(t, n) || (e.shouldRefetchCampaignEligibility = !0), (e.mostRecentSubscription = n);
        }
        if (!0 === o.Z.hasFetchedPreviousPremiumTypeSubscription()) {
            let t = e.prevSubscription,
                n = o.Z.getPreviousPremiumTypeSubscription();
            g(t, n) || (e.shouldRefetchCampaignEligibility = !0), (e.prevSubscription = n);
        }
        _ = e;
    }
    handleUserOfferUpdate() {
        !1 !== s.Z.lastFetchSuccessful() &&
            (_.userHasUnexpiredDiscount !== s.Z.hasAnyUnexpiredDiscountOffer() ||
                _.userHasUnexpiredOffers !== s.Z.hasAnyUnexpiredOffer()) &&
            (_ = d(c({}, _), {
                userHasUnexpiredOffers: s.Z.hasAnyUnexpiredOffer(),
                userHasUnexpiredDiscount: s.Z.hasAnyUnexpiredDiscountOffer(),
                shouldRefetchCampaignEligibility: !0,
            }));
    }
}
l(E, "displayName", "MarketingCampaignEligibilityStore");
let b = new E(a.Z, {
    MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_SUCCESS: p,
    MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_FAILED: h,
    MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_STARTED: m,
});
