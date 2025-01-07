var i,
    a = r(47120);
var s = r(442837),
    o = r(570140),
    l = r(276444),
    u = r(937579),
    c = r(594174),
    d = r(74538),
    f = r(78839),
    _ = r(474936);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = 172800000,
    m = 600000,
    g = {
        userOffersLastFetchedAtDate: void 0,
        userAnnualOfferLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1
    },
    E = g;
function v() {
    E.isFetching = !0;
}
function I(e) {
    let { userTrialOffer: n } = e;
    null != n ? (E.userTrialOffers[n.trial_id] = n) : A(), (E.userOffersLastFetchedAtDate = Date.now()), (E.isFetching = !1);
}
function T(e) {
    let { userTrialOffer: n, userDiscount: r, userDiscountOffer: i } = e;
    null == n && null == r && null == i && A(), null != n ? ((E.userTrialOffers[n.trial_id] = n), (E.userDiscountOffers = {})) : null != r ? ((E.userDiscountOffers[r.discount_id] = r), (E.userTrialOffers = {})) : null != i && ((E.userDiscountOffers[i.discount_id] = i), (E.userTrialOffers = {})), (E.userOffersLastFetchedAtDate = Date.now()), (E.isFetching = !1);
}
function b() {
    A(), (E.userOffersLastFetchedAtDate = Date.now()), (E.isFetching = !1);
}
function y(e) {
    let { userTrialOffer: n } = e;
    null != n ? (E.userTrialOffers[n.trial_id] = n) : (E.userTrialOffers = {}), (E.userOffersLastFetchedAtDate = Date.now());
}
function S(e) {
    let { userTrialOffer: n, userDiscount: r, userDiscountOffer: i } = e;
    null != n ? (E.userTrialOffers[n.trial_id] = n) : (E.userTrialOffers = {}), null != r ? (E.userDiscountOffers[r.discount_id] = r) : null != i ? (E.userDiscountOffers[i.discount_id] = i) : (E.userDiscountOffers = {}), (E.userOffersLastFetchedAtDate = Date.now());
}
function A() {
    (E.userTrialOffers = {}), (E.userDiscountOffers = {}), (E.userOffersLastFetchedAtDate = void 0), (E.userAnnualOfferLastFetchedAtDate = void 0), (E.isFetching = !1);
}
let N = () => !0;
function C() {
    return null != f.ZP.getPremiumTypeSubscription() && ((E.userDiscountOffers = {}), (E.userTrialOffers = {}), !0);
}
function R() {
    let e = c.default.getCurrentUser();
    !(0, d.I5)(e) && Object.keys(E.userDiscountOffers).length > 0 && (0, u.T)('UserOfferStore', void 0, !0);
}
function O() {
    var e;
    let n = null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
    if (null == n) return !1;
    let r = l.Z.getAllRelevantReferralTrialOffers().filter((e) => e.user_id === n);
    if (r.length > 0) {
        let e = r[0];
        return (E.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class D extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        (E = null != e ? e : g), this.waitFor(c.default), this.syncWith([c.default], N), this.syncWith([f.ZP], C), this.syncWith([l.Z], O);
    }
    getUserTrialOffer(e) {
        if (null !== e) return E.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return E.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let n of e) if (null != E.userTrialOffers[n]) return n;
        return null;
    }
    hasFetchedOffer() {
        return null != E.userOffersLastFetchedAtDate;
    }
    shouldFetchOffer() {
        var e;
        let n = E.userOffersLastFetchedAtDate,
            r = null !== (e = E.isFetching) && void 0 !== e && e;
        return null == n ? !r : !r && Date.now() - p > n;
    }
    shouldFetchReferralOffer(e) {
        var n;
        let r = E.userOffersLastFetchedAtDate,
            i = null !== (n = E.isFetching) && void 0 !== n && n;
        if (null == r) return !i;
        let a = Date.now() - m > r,
            s = (null != e ? e : 0) > r;
        return !i && (a || s);
    }
    shouldFetchAnnualOffer() {
        let e = E.userAnnualOfferLastFetchedAtDate;
        return null == e || Date.now() - p > e;
    }
    getAlmostExpiringTrialOffers(e) {
        let n = Object.values(_.nG).map((e) => e.id),
            r = c.default.getCurrentUser();
        return (0, d.I5)(r) ? [] : Object.values(E.userTrialOffers).filter((r) => n.includes(r.trial_id) && null != r.expires_at && null != r.subscription_trial && e.includes(r.subscription_trial.sku_id) && Date.parse(r.expires_at) < Date.now() + _.ff);
    }
    getAcknowledgedOffers(e) {
        let n = c.default.getCurrentUser();
        return (0, d.I5)(n) ? [] : Object.values(E.userTrialOffers).filter((n) => e.includes(n.trial_id) && null != n.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let n = c.default.getCurrentUser();
        return (0, d.I5)(n) ? [] : Object.values(null !== (e = E.userDiscountOffers) && void 0 !== e ? e : {}).filter((e) => null == e.expires_at && !_.ee.includes(e.discount_id));
    }
    getUnacknowledgedOffers(e) {
        let n = c.default.getCurrentUser();
        return (0, d.I5)(n) ? [] : Object.values(E.userTrialOffers).filter((n) => e.includes(n.trial_id) && null == n.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(E.userTrialOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(E.userDiscountOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    getReferrer(e) {
        var n;
        return null == e ? null : null === (n = E.userTrialOffers[e]) || void 0 === n ? void 0 : n.referrer;
    }
    getState() {
        return E;
    }
    forceReset() {
        A();
    }
}
h(D, 'displayName', 'UserOfferStore'),
    h(D, 'persistKey', 'UserOfferStore'),
    h(D, 'migrations', [
        (e) => {
            let n = null == e ? void 0 : e.userDiscounts;
            if (null != n)
                return {
                    ...e,
                    userDiscountOffers: n
                };
        },
        (e) => {
            if (null != e)
                return (null == e ? void 0 : e.userAnnualOfferLastFetchedAtDate) == null
                    ? {
                          ...e,
                          userAnnualOfferLastFetchedAtDate: void 0
                      }
                    : e;
        },
        (e) => {
            if (null != e)
                return (null == e ? void 0 : e.isFetching) == null
                    ? {
                          ...e,
                          isFetching: !1
                      }
                    : e;
        }
    ]),
    (n.Z = new D(o.Z, {
        BILLING_USER_OFFER_FETCH_START: v,
        BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: I,
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: y,
        BILLING_USER_OFFER_FETCH_SUCCESS: T,
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: S,
        BILLING_USER_OFFER_FETCH_FAIL: b,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: R,
        LOGOUT: A
    }));
