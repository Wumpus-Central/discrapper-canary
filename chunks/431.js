n.d(t, { Z: () => D }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(276444),
    s = n(937579),
    l = n(594174),
    c = n(74538),
    u = n(78839),
    d = n(474936);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = 172800000,
    g = 600000,
    E = {
        userOffersLastFetchedAtDate: void 0,
        userAnnualOfferLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1
    },
    v = E;
function b() {
    v.isFetching = !0;
}
function y(e) {
    let { userTrialOffer: t } = e;
    null != t ? (v.userTrialOffers[t.trial_id] = t) : N(), (v.userOffersLastFetchedAtDate = Date.now()), (v.isFetching = !1);
}
function O(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null == t && null == n && null == r && N(), null != t ? ((v.userTrialOffers[t.trial_id] = t), (v.userDiscountOffers = {})) : null != n ? ((v.userDiscountOffers[n.discount_id] = n), (v.userTrialOffers = {})) : null != r && ((v.userDiscountOffers[r.discount_id] = r), (v.userTrialOffers = {})), (v.userOffersLastFetchedAtDate = Date.now()), (v.isFetching = !1);
}
function S() {
    N(), (v.userOffersLastFetchedAtDate = Date.now()), (v.isFetching = !1);
}
function I(e) {
    let { userTrialOffer: t } = e;
    null != t ? (v.userTrialOffers[t.trial_id] = t) : (v.userTrialOffers = {}), (v.userOffersLastFetchedAtDate = Date.now());
}
function T(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null != t ? (v.userTrialOffers[t.trial_id] = t) : (v.userTrialOffers = {}), null != n ? (v.userDiscountOffers[n.discount_id] = n) : null != r ? (v.userDiscountOffers[r.discount_id] = r) : (v.userDiscountOffers = {}), (v.userOffersLastFetchedAtDate = Date.now());
}
function N() {
    (v.userTrialOffers = {}), (v.userDiscountOffers = {}), (v.userOffersLastFetchedAtDate = void 0), (v.userAnnualOfferLastFetchedAtDate = void 0), (v.isFetching = !1);
}
let A = () => !0;
function C() {
    return null != u.ZP.getPremiumTypeSubscription() && ((v.userDiscountOffers = {}), (v.userTrialOffers = {}), !0);
}
function R() {
    let e = l.default.getCurrentUser();
    !(0, c.I5)(e) && Object.keys(v.userDiscountOffers).length > 0 && (0, s.T)('UserOfferStore', void 0, !0);
}
function P() {
    var e;
    let t = null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
    if (null == t) return !1;
    let n = a.Z.getAllRelevantReferralTrialOffers().filter((e) => e.user_id === t);
    if (n.length > 0) {
        let e = n[0];
        return (v.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class w extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (v = null != e ? e : E), this.waitFor(l.default), this.syncWith([l.default], A), this.syncWith([u.ZP], C), this.syncWith([a.Z], P);
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
        let t = v.userOffersLastFetchedAtDate,
            n = null !== (e = v.isFetching) && void 0 !== e && e;
        return null == t ? !n : !n && Date.now() - m > t;
    }
    shouldFetchReferralOffer(e) {
        var t;
        let n = v.userOffersLastFetchedAtDate,
            r = null !== (t = v.isFetching) && void 0 !== t && t;
        if (null == n) return !r;
        let i = Date.now() - g > n,
            o = (null != e ? e : 0) > n;
        return !r && (i || o);
    }
    shouldFetchAnnualOffer() {
        let e = v.userAnnualOfferLastFetchedAtDate;
        return null == e || Date.now() - m > e;
    }
    getAlmostExpiringTrialOffers(e) {
        let t = Object.values(d.nG).map((e) => e.id),
            n = l.default.getCurrentUser();
        return (0, c.I5)(n) ? [] : Object.values(v.userTrialOffers).filter((n) => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + d.ff);
    }
    getAcknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, c.I5)(t) ? [] : Object.values(v.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let t = l.default.getCurrentUser();
        return (0, c.I5)(t) ? [] : Object.values(null !== (e = v.userDiscountOffers) && void 0 !== e ? e : {}).filter((e) => null == e.expires_at && !d.ee.includes(e.discount_id));
    }
    getUnacknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, c.I5)(t) ? [] : Object.values(v.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(v.userTrialOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(v.userDiscountOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    getReferrer(e) {
        var t;
        return null == e ? null : null === (t = v.userTrialOffers[e]) || void 0 === t ? void 0 : t.referrer;
    }
    getState() {
        return v;
    }
    forceReset() {
        N();
    }
}
f(w, 'displayName', 'UserOfferStore'),
    f(w, 'persistKey', 'UserOfferStore'),
    f(w, 'migrations', [
        (e) => {
            let t = null == e ? void 0 : e.userDiscounts;
            if (null != t) return h(p({}, e), { userDiscountOffers: t });
        },
        (e) => {
            if (null != e) return (null == e ? void 0 : e.userAnnualOfferLastFetchedAtDate) == null ? h(p({}, e), { userAnnualOfferLastFetchedAtDate: void 0 }) : e;
        },
        (e) => {
            if (null != e) return (null == e ? void 0 : e.isFetching) == null ? h(p({}, e), { isFetching: !1 }) : e;
        }
    ]);
let D = new w(o.Z, {
    BILLING_USER_OFFER_FETCH_START: b,
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: y,
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: I,
    BILLING_USER_OFFER_FETCH_SUCCESS: O,
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: T,
    BILLING_USER_OFFER_FETCH_FAIL: S,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: R,
    LOGOUT: N
});
