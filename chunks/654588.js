n.d(t, { Z: () => y });
var r,
    i = n(442837),
    a = n(570140),
    o = n(594174),
    s = n(78839),
    l = n(431);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class _ {}
let p = {
    userHasUnexpiredOffers: new _(),
    userHasUnexpiredDiscount: new _(),
    mostRecentSubscription: new _(),
    prevSubscription: new _(),
    premiumSource: new _(),
    shouldRefetchCampaignEligibility: !0,
    isEligibleForCampaign: null,
    isFetchingCampaignEligibility: !1,
};
function h(e) {
    let { isEligible: t } = e;
    p = f(u({}, p), {
        shouldRefetchCampaignEligibility: !1,
        isEligibleForCampaign: t,
        isFetchingCampaignEligibility: !1,
    });
}
function m() {
    p = f(u({}, p), {
        shouldRefetchCampaignEligibility: !1,
        isEligibleForCampaign: null,
        isFetchingCampaignEligibility: !1,
    });
}
function g() {
    p = f(u({}, p), { isFetchingCampaignEligibility: !0 });
}
function E(e, t) {
    return (
        !(e instanceof _) &&
        ((null === e && null === t) || (null !== e && null !== t && e.id === t.id && e.status === t.status))
    );
}
class b extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, s.Z, o.default),
            this.syncWith([l.Z], this.handleUserOfferUpdate),
            this.syncWith([s.Z], this.handleSubscriptionUpdate),
            this.syncWith([o.default], this.handleUserUpdate);
    }
    get state() {
        return p;
    }
    handleUserUpdate() {
        var e, t;
        let n = u({}, p),
            r = null == (t = o.default.getCurrentUser()) || null == (e = t.premiumState) ? void 0 : e.premiumSource;
        n.premiumSource !== r && ((n.premiumSource = null != r ? r : null), (n.shouldRefetchCampaignEligibility = !0)),
            (p = n);
    }
    handleSubscriptionUpdate() {
        let e = u({}, p);
        if (!0 === s.Z.hasFetchedMostRecentPremiumTypeSubscription()) {
            let t = e.mostRecentSubscription,
                n = s.Z.getMostRecentPremiumTypeSubscription();
            E(t, n) || (e.shouldRefetchCampaignEligibility = !0), (e.mostRecentSubscription = n);
        }
        if (!0 === s.Z.hasFetchedPreviousPremiumTypeSubscription()) {
            let t = e.prevSubscription,
                n = s.Z.getPreviousPremiumTypeSubscription();
            E(t, n) || (e.shouldRefetchCampaignEligibility = !0), (e.prevSubscription = n);
        }
        p = e;
    }
    handleUserOfferUpdate() {
        !1 !== l.Z.lastFetchSuccessful() &&
            (p.userHasUnexpiredDiscount !== l.Z.hasAnyUnexpiredDiscountOffer() ||
                p.userHasUnexpiredOffers !== l.Z.hasAnyUnexpiredOffer()) &&
            (p = f(u({}, p), {
                userHasUnexpiredOffers: l.Z.hasAnyUnexpiredOffer(),
                userHasUnexpiredDiscount: l.Z.hasAnyUnexpiredDiscountOffer(),
                shouldRefetchCampaignEligibility: !0,
            }));
    }
}
c(b, "displayName", "MarketingCampaignEligibilityStore");
let y = new b(a.Z, {
    MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_SUCCESS: h,
    MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_FAILED: m,
    MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_STARTED: g,
});
