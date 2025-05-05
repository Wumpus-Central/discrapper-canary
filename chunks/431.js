n.d(t, { Z: () => M }), n(388685), n(825670);
var r,
    i = n(442837),
    a = n(570140),
    o = n(276444),
    s = n(937579),
    l = n(249689),
    c = n(579075),
    u = n(594174),
    d = n(580130),
    f = n(74538),
    _ = n(78839),
    p = n(474936);
function h(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = 172800000,
    y = 600000,
    O = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1
    },
    v = O;
function I() {
    v.isFetching = !0;
}
function S(e) {
    let { userTrialOffer: t } = e;
    null != t ? (v.userTrialOffers[t.trial_id] = t) : R(), (v.userOffersLastFetchedAtDate = Date.now()), (v.isFetching = !1);
}
function T(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null == t && null == n && null == r && R(), null != t ? ((v.userTrialOffers[t.trial_id] = t), (v.userDiscountOffers = {})) : null != n ? ((v.userDiscountOffers[n.discount_id] = n), (v.userTrialOffers = {})) : null != r && ((v.userDiscountOffers[r.discount_id] = r), (v.userTrialOffers = {})), (v.userOffersLastFetchedAtDate = Date.now()), (v.isFetching = !1), (v.lastFetchSuccessful = !0);
}
function A() {
    R(), (v.userOffersLastFetchedAtDate = Date.now()), (v.isFetching = !1), (v.lastFetchSuccessful = !1);
}
function N(e) {
    let { userTrialOffer: t } = e;
    null != t ? (v.userTrialOffers[t.trial_id] = t) : (v.userTrialOffers = {}), (v.userOffersLastFetchedAtDate = Date.now());
}
function C(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null != t ? (v.userTrialOffers[t.trial_id] = t) : (v.userTrialOffers = {}), null != n ? (v.userDiscountOffers[n.discount_id] = n) : null != r ? (v.userDiscountOffers[r.discount_id] = r) : (v.userDiscountOffers = {}), (v.userOffersLastFetchedAtDate = Date.now());
}
function R() {
    (v.userTrialOffers = {}), (v.userDiscountOffers = {}), (v.userOffersLastFetchedAtDate = void 0), (v.isFetching = !1);
}
let P = () => !0;
function w() {
    return null != _.ZP.getPremiumTypeSubscription() && ((v.userDiscountOffers = {}), (v.userTrialOffers = {}), !0);
}
function D() {
    let e = u.default.getCurrentUser();
    !(0, f.I5)(e) && Object.keys(v.userDiscountOffers).length > 0 && (0, s.T)('UserOfferStore', !0);
}
function L() {
    var e;
    let t = null == (e = u.default.getCurrentUser()) ? void 0 : e.id;
    if (null == t) return !1;
    let n = o.Z.getAllRelevantReferralTrialOffers().filter((e) => e.user_id === t);
    if (n.length > 0) {
        let e = n[0];
        return (v.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class x extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (v = null != e ? e : O), this.waitFor(u.default), this.syncWith([u.default], P), this.syncWith([_.ZP], w), this.syncWith([o.Z], L);
    }
    getUserTrialOffer(e) {
        if (null !== e) return v.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return v.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != v.userTrialOffers[t]) return t;
        return null;
    }
    hasFetchedOffer() {
        return null != v.userOffersLastFetchedAtDate;
    }
    shouldFetchOffer() {
        var e;
        let { enabled: t, ttl: n } = c.d.getCurrentConfig({ location: 'UserOfferStore.shouldFetchOffer' }),
            r = t ? n : b,
            i = v.userOffersLastFetchedAtDate,
            a = null != (e = v.isFetching) && e;
        return null == i ? !a : !a && Date.now() - r > i;
    }
    shouldFetchReferralOffer(e) {
        var t;
        let n = v.userOffersLastFetchedAtDate,
            r = null != (t = v.isFetching) && t;
        if (null == n) return !r;
        let i = Date.now() - y > n,
            a = (null != e ? e : 0) > n;
        return !r && (i || a);
    }
    getAlmostExpiringTrialOffers(e) {
        let t = Object.values(p.nG).map((e) => e.id),
            n = u.default.getCurrentUser();
        return (0, f.I5)(n) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(v.userTrialOffers).filter((n) => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + (0, f.xe)(n.trial_id));
    }
    getAcknowledgedOffers(e) {
        let t = u.default.getCurrentUser();
        return (0, f.I5)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(v.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let t = u.default.getCurrentUser();
        return (0, f.I5)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(null != (e = v.userDiscountOffers) ? e : {}).filter((e) => null == e.expires_at && !p.ee.includes(e.discount_id));
    }
    getUnacknowledgedOffers(e) {
        let t = u.default.getCurrentUser();
        return (0, f.I5)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(v.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(v.userTrialOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(v.userDiscountOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    canFractionalPremiumUserUseOffer() {
        let e = u.default.getCurrentUser();
        return (0, l.C)('user-offer-store', e) && d.Z.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == _.ZP.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        var t;
        return null == e ? null : null == (t = v.userTrialOffers[e]) ? void 0 : t.referrer;
    }
    getState() {
        return v;
    }
    forceReset() {
        R();
    }
    lastFetchSuccessful() {
        return v.lastFetchSuccessful;
    }
}
h(x, 'displayName', 'UserOfferStore'),
    h(x, 'persistKey', 'UserOfferStore'),
    h(x, 'migrations', [
        (e) => {
            let t = null == e ? void 0 : e.userDiscounts;
            if (null != t) return E(m({}, e), { userDiscountOffers: t });
        },
        (e) => {
            if (null != e) return Object.hasOwn(e, 'userAnnualOfferLastFetchedAtDate') && delete e.userAnnualOfferLastFetchedAtDate, e;
        },
        (e) => {
            if (null != e) return (null == e ? void 0 : e.isFetching) == null ? E(m({}, e), { isFetching: !1 }) : e;
        }
    ]);
let M = new x(a.Z, {
    BILLING_USER_OFFER_FETCH_START: I,
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: S,
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: N,
    BILLING_USER_OFFER_FETCH_SUCCESS: T,
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: C,
    BILLING_USER_OFFER_FETCH_FAIL: A,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: D,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: D,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: D,
    LOGOUT: R
});
