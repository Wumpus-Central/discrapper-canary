n.d(t, { Z: () => O }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(276444),
    o = n(937579),
    l = n(594174),
    u = n(74538),
    c = n(78839),
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
let _ = 172800000,
    p = 600000,
    h = {
        userOffersLastFetchedAtDate: void 0,
        userAnnualOfferLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1
    },
    m = h;
function g() {
    m.isFetching = !0;
}
function E(e) {
    let { userTrialOffer: t } = e;
    null != t ? (m.userTrialOffers[t.trial_id] = t) : T(), (m.userOffersLastFetchedAtDate = Date.now()), (m.isFetching = !1);
}
function v(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
    null == t && null == n && null == i && T(), null != t ? ((m.userTrialOffers[t.trial_id] = t), (m.userDiscountOffers = {})) : null != n ? ((m.userDiscountOffers[n.discount_id] = n), (m.userTrialOffers = {})) : null != i && ((m.userDiscountOffers[i.discount_id] = i), (m.userTrialOffers = {})), (m.userOffersLastFetchedAtDate = Date.now()), (m.isFetching = !1);
}
function y() {
    T(), (m.userOffersLastFetchedAtDate = Date.now()), (m.isFetching = !1);
}
function I(e) {
    let { userTrialOffer: t } = e;
    null != t ? (m.userTrialOffers[t.trial_id] = t) : (m.userTrialOffers = {}), (m.userOffersLastFetchedAtDate = Date.now());
}
function b(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
    null != t ? (m.userTrialOffers[t.trial_id] = t) : (m.userTrialOffers = {}), null != n ? (m.userDiscountOffers[n.discount_id] = n) : null != i ? (m.userDiscountOffers[i.discount_id] = i) : (m.userDiscountOffers = {}), (m.userOffersLastFetchedAtDate = Date.now());
}
function T() {
    (m.userTrialOffers = {}), (m.userDiscountOffers = {}), (m.userOffersLastFetchedAtDate = void 0), (m.userAnnualOfferLastFetchedAtDate = void 0), (m.isFetching = !1);
}
let S = () => !0;
function A() {
    return null != c.ZP.getPremiumTypeSubscription() && ((m.userDiscountOffers = {}), (m.userTrialOffers = {}), !0);
}
function N() {
    let e = l.default.getCurrentUser();
    !(0, u.I5)(e) && Object.keys(m.userDiscountOffers).length > 0 && (0, o.T)('UserOfferStore', void 0, !0);
}
function C() {
    var e;
    let t = null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
    if (null == t) return !1;
    let n = s.Z.getAllRelevantReferralTrialOffers().filter((e) => e.user_id === t);
    if (n.length > 0) {
        let e = n[0];
        return (m.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class R extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        (m = null != e ? e : h), this.waitFor(l.default), this.syncWith([l.default], S), this.syncWith([c.ZP], A), this.syncWith([s.Z], C);
    }
    getUserTrialOffer(e) {
        if (null !== e) return m.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return m.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != m.userTrialOffers[t]) return t;
        return null;
    }
    hasFetchedOffer() {
        return null != m.userOffersLastFetchedAtDate;
    }
    shouldFetchOffer() {
        var e;
        let t = m.userOffersLastFetchedAtDate,
            n = null !== (e = m.isFetching) && void 0 !== e && e;
        return null == t ? !n : !n && Date.now() - _ > t;
    }
    shouldFetchReferralOffer(e) {
        var t;
        let n = m.userOffersLastFetchedAtDate,
            i = null !== (t = m.isFetching) && void 0 !== t && t;
        if (null == n) return !i;
        let r = Date.now() - p > n,
            a = (null != e ? e : 0) > n;
        return !i && (r || a);
    }
    shouldFetchAnnualOffer() {
        let e = m.userAnnualOfferLastFetchedAtDate;
        return null == e || Date.now() - _ > e;
    }
    getAlmostExpiringTrialOffers(e) {
        let t = Object.values(d.nG).map((e) => e.id),
            n = l.default.getCurrentUser();
        return (0, u.I5)(n) ? [] : Object.values(m.userTrialOffers).filter((n) => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + d.ff);
    }
    getAcknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, u.I5)(t) ? [] : Object.values(m.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let t = l.default.getCurrentUser();
        return (0, u.I5)(t) ? [] : Object.values(null !== (e = m.userDiscountOffers) && void 0 !== e ? e : {}).filter((e) => null == e.expires_at && !d.ee.includes(e.discount_id));
    }
    getUnacknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, u.I5)(t) ? [] : Object.values(m.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(m.userTrialOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(m.userDiscountOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    getReferrer(e) {
        var t;
        return null == e ? null : null === (t = m.userTrialOffers[e]) || void 0 === t ? void 0 : t.referrer;
    }
    getState() {
        return m;
    }
    forceReset() {
        T();
    }
}
f(R, 'displayName', 'UserOfferStore'),
    f(R, 'persistKey', 'UserOfferStore'),
    f(R, 'migrations', [
        (e) => {
            let t = null == e ? void 0 : e.userDiscounts;
            if (null != t)
                return {
                    ...e,
                    userDiscountOffers: t
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
    ]);
let O = new R(a.Z, {
    BILLING_USER_OFFER_FETCH_START: g,
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: E,
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: I,
    BILLING_USER_OFFER_FETCH_SUCCESS: v,
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: b,
    BILLING_USER_OFFER_FETCH_FAIL: y,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: N,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: N,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: N,
    LOGOUT: T
});
