(n.d(t, { Z: () => L }), n(388685), n(825670));
var r,
    i = n(442837),
    a = n(570140),
    o = n(276444),
    s = n(937579),
    l = n(249689),
    c = n(594174),
    u = n(580130),
    d = n(74538),
    f = n(78839),
    _ = n(474936);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 600000,
    b = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1
    },
    y = b;
function O() {
    y.isFetching = !0;
}
function v(e) {
    let { userTrialOffer: t } = e;
    (null != t ? (y.userTrialOffers[t.trial_id] = t) : N(), (y.userOffersLastFetchedAtDate = Date.now()), (y.isFetching = !1));
}
function I(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    (null == t && null == n && null == r && N(), null != t ? ((y.userTrialOffers[t.trial_id] = t), (y.userDiscountOffers = {})) : null != n ? ((y.userDiscountOffers[n.discount_id] = n), (y.userTrialOffers = {})) : null != r && ((y.userDiscountOffers[r.discount_id] = r), (y.userTrialOffers = {})), (y.userOffersLastFetchedAtDate = Date.now()), (y.isFetching = !1), (y.lastFetchSuccessful = !0));
}
function T() {
    (N(), (y.userOffersLastFetchedAtDate = Date.now()), (y.isFetching = !1), (y.lastFetchSuccessful = !1));
}
function S(e) {
    let { userTrialOffer: t } = e;
    (null != t ? (y.userTrialOffers[t.trial_id] = t) : (y.userTrialOffers = {}), (y.userOffersLastFetchedAtDate = Date.now()));
}
function A(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    (null != t ? (y.userTrialOffers[t.trial_id] = t) : (y.userTrialOffers = {}), null != n ? (y.userDiscountOffers[n.discount_id] = n) : null != r ? (y.userDiscountOffers[r.discount_id] = r) : (y.userDiscountOffers = {}), (y.userOffersLastFetchedAtDate = Date.now()));
}
function N() {
    ((y.userTrialOffers = {}), (y.userDiscountOffers = {}), (y.userOffersLastFetchedAtDate = void 0), (y.isFetching = !1));
}
let C = () => !0;
function R() {
    return null != f.Z.getPremiumTypeSubscription() && ((y.userDiscountOffers = {}), (y.userTrialOffers = {}), !0);
}
function P() {
    let e = c.default.getCurrentUser();
    !(0, d.I5)(e) && Object.keys(y.userDiscountOffers).length > 0 && (0, s.T)('UserOfferStore', !0);
}
function w() {
    var e;
    let t = null == (e = c.default.getCurrentUser()) ? void 0 : e.id;
    if (null == t) return !1;
    let n = o.Z.getAllRelevantReferralTrialOffers().filter((e) => e.user_id === t);
    if (n.length > 0) {
        let e = n[0];
        return ((y.userTrialOffers[e.trial_id] = e), !0);
    }
    return !1;
}
class D extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        ((y = null != e ? e : b), this.waitFor(c.default), this.syncWith([c.default], C), this.syncWith([f.Z], R), this.syncWith([o.Z], w));
    }
    getUserTrialOffer(e) {
        if (null !== e) return y.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return y.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != y.userTrialOffers[t]) return t;
        return null;
    }
    isFetchingOffer() {
        var e;
        return null != (e = y.isFetching) && e;
    }
    hasFetchedOffer() {
        return null != y.userOffersLastFetchedAtDate;
    }
    shouldFetchReferralOffer(e) {
        var t;
        let n = y.userOffersLastFetchedAtDate,
            r = null != (t = y.isFetching) && t;
        if (null == n) return !r;
        let i = Date.now() - E > n,
            a = (null != e ? e : 0) > n;
        return !r && (i || a);
    }
    getAlmostExpiringTrialOffers(e) {
        let t = Object.values(_.nG).map((e) => e.id),
            n = c.default.getCurrentUser();
        return (0, d.I5)(n) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(y.userTrialOffers).filter((n) => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + (0, d.xe)(n.trial_id));
    }
    getAcknowledgedOffers(e) {
        let t = c.default.getCurrentUser();
        return (0, d.I5)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(y.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let t = c.default.getCurrentUser();
        return (0, d.I5)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(null != (e = y.userDiscountOffers) ? e : {}).filter((e) => null == e.expires_at && !_.ee.includes(e.discount_id));
    }
    getUnacknowledgedOffers(e) {
        let t = c.default.getCurrentUser();
        return (0, d.I5)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(y.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(y.userTrialOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(y.userDiscountOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    canFractionalPremiumUserUseOffer() {
        let e = c.default.getCurrentUser();
        return (0, l.C)('user-offer-store', e) && u.Z.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == f.Z.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        var t;
        return null == e ? null : null == (t = y.userTrialOffers[e]) ? void 0 : t.referrer;
    }
    getState() {
        return y;
    }
    forceReset() {
        N();
    }
    lastFetchSuccessful() {
        return y.lastFetchSuccessful;
    }
}
(p(D, 'displayName', 'UserOfferStore'),
    p(D, 'persistKey', 'UserOfferStore'),
    p(D, 'migrations', [
        (e) => {
            let t = null == e ? void 0 : e.userDiscounts;
            if (null != t) return g(h({}, e), { userDiscountOffers: t });
        },
        (e) => {
            if (null != e) return (Object.hasOwn(e, 'userAnnualOfferLastFetchedAtDate') && delete e.userAnnualOfferLastFetchedAtDate, e);
        },
        (e) => {
            if (null != e) return (null == e ? void 0 : e.isFetching) == null ? g(h({}, e), { isFetching: !1 }) : e;
        }
    ]));
let L = new D(a.Z, {
    BILLING_USER_OFFER_FETCH_START: O,
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: v,
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: S,
    BILLING_USER_OFFER_FETCH_SUCCESS: I,
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: A,
    BILLING_USER_OFFER_FETCH_FAIL: T,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: P,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: P,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: P,
    LOGOUT: N
});
