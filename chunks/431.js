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
function _(e) {
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
function p(e, t) {
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
            : p(Object(t)).forEach(function (n) {
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
    b = E;
function y() {
    b.isFetching = !0;
}
function v(e) {
    let { userTrialOffer: t } = e;
    null != t ? (b.userTrialOffers[t.trial_id] = t) : N(), (b.userOffersLastFetchedAtDate = Date.now()), (b.isFetching = !1);
}
function O(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null == t && null == n && null == r && N(), null != t ? ((b.userTrialOffers[t.trial_id] = t), (b.userDiscountOffers = {})) : null != n ? ((b.userDiscountOffers[n.discount_id] = n), (b.userTrialOffers = {})) : null != r && ((b.userDiscountOffers[r.discount_id] = r), (b.userTrialOffers = {})), (b.userOffersLastFetchedAtDate = Date.now()), (b.isFetching = !1);
}
function I() {
    N(), (b.userOffersLastFetchedAtDate = Date.now()), (b.isFetching = !1);
}
function S(e) {
    let { userTrialOffer: t } = e;
    null != t ? (b.userTrialOffers[t.trial_id] = t) : (b.userTrialOffers = {}), (b.userOffersLastFetchedAtDate = Date.now());
}
function T(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null != t ? (b.userTrialOffers[t.trial_id] = t) : (b.userTrialOffers = {}), null != n ? (b.userDiscountOffers[n.discount_id] = n) : null != r ? (b.userDiscountOffers[r.discount_id] = r) : (b.userDiscountOffers = {}), (b.userOffersLastFetchedAtDate = Date.now());
}
function N() {
    (b.userTrialOffers = {}), (b.userDiscountOffers = {}), (b.userOffersLastFetchedAtDate = void 0), (b.userAnnualOfferLastFetchedAtDate = void 0), (b.isFetching = !1);
}
let A = () => !0;
function C() {
    return null != u.ZP.getPremiumTypeSubscription() && ((b.userDiscountOffers = {}), (b.userTrialOffers = {}), !0);
}
function R() {
    let e = l.default.getCurrentUser();
    !(0, c.I5)(e) && Object.keys(b.userDiscountOffers).length > 0 && (0, s.T)('UserOfferStore', !0);
}
function P() {
    var e;
    let t = null == (e = l.default.getCurrentUser()) ? void 0 : e.id;
    if (null == t) return !1;
    let n = a.Z.getAllRelevantReferralTrialOffers().filter((e) => e.user_id === t);
    if (n.length > 0) {
        let e = n[0];
        return (b.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class w extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (b = null != e ? e : E), this.waitFor(l.default), this.syncWith([l.default], A), this.syncWith([u.ZP], C), this.syncWith([a.Z], P);
    }
    getUserTrialOffer(e) {
        if (null !== e) return b.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return b.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != b.userTrialOffers[t]) return t;
        return null;
    }
    hasFetchedOffer() {
        return null != b.userOffersLastFetchedAtDate;
    }
    shouldFetchOffer() {
        var e;
        let t = b.userOffersLastFetchedAtDate,
            n = null != (e = b.isFetching) && e;
        return null == t ? !n : !n && Date.now() - m > t;
    }
    shouldFetchReferralOffer(e) {
        var t;
        let n = b.userOffersLastFetchedAtDate,
            r = null != (t = b.isFetching) && t;
        if (null == n) return !r;
        let i = Date.now() - g > n,
            o = (null != e ? e : 0) > n;
        return !r && (i || o);
    }
    shouldFetchAnnualOffer() {
        let e = b.userAnnualOfferLastFetchedAtDate;
        return null == e || Date.now() - m > e;
    }
    getAlmostExpiringTrialOffers(e) {
        let t = Object.values(d.nG).map((e) => e.id),
            n = l.default.getCurrentUser();
        return (0, c.I5)(n) ? [] : Object.values(b.userTrialOffers).filter((n) => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + d.ff);
    }
    getAcknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, c.I5)(t) ? [] : Object.values(b.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let t = l.default.getCurrentUser();
        return (0, c.I5)(t) ? [] : Object.values(null != (e = b.userDiscountOffers) ? e : {}).filter((e) => null == e.expires_at && !d.ee.includes(e.discount_id));
    }
    getUnacknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, c.I5)(t) ? [] : Object.values(b.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(b.userTrialOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(b.userDiscountOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    getReferrer(e) {
        var t;
        return null == e ? null : null == (t = b.userTrialOffers[e]) ? void 0 : t.referrer;
    }
    getState() {
        return b;
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
            if (null != t) return h(_({}, e), { userDiscountOffers: t });
        },
        (e) => {
            if (null != e) return (null == e ? void 0 : e.userAnnualOfferLastFetchedAtDate) == null ? h(_({}, e), { userAnnualOfferLastFetchedAtDate: void 0 }) : e;
        },
        (e) => {
            if (null != e) return (null == e ? void 0 : e.isFetching) == null ? h(_({}, e), { isFetching: !1 }) : e;
        }
    ]);
let D = new w(o.Z, {
    BILLING_USER_OFFER_FETCH_START: y,
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: v,
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: S,
    BILLING_USER_OFFER_FETCH_SUCCESS: O,
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: T,
    BILLING_USER_OFFER_FETCH_FAIL: I,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: R,
    LOGOUT: N
});
