n.d(t, { Z: () => E });
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
class g extends (r = i.ZP.Store) {
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
        !0 === o.Z.hasFetchedMostRecentPremiumTypeSubscription() &&
            (e.mostRecentSubscription = o.Z.getMostRecentPremiumTypeSubscription()),
            !0 === o.Z.hasFetchedPreviousPremiumTypeSubscription() &&
                (e.prevSubscription = o.Z.getPreviousPremiumTypeSubscription()),
            (e.shouldRefetchCampaignEligibility = !0),
            (_ = e);
    }
    handleUserOfferUpdate() {
        !1 !== s.Z.lastFetchSuccessful() &&
            (_ = d(c({}, _), {
                userHasUnexpiredOffers: s.Z.hasAnyUnexpiredOffer(),
                userHasUnexpiredDiscount: s.Z.hasAnyUnexpiredDiscountOffer(),
                shouldRefetchCampaignEligibility: !0,
            }));
    }
}
l(g, "displayName", "MarketingCampaignEligibilityStore");
let E = new g(a.Z, {
    MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_SUCCESS: p,
    MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_FAILED: h,
    MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_STARTED: m,
});
