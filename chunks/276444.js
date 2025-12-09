n.d(t, { Z: () => Y }), n(388685);
var r,
    i = n(275726),
    a = n(442837),
    o = n(570140),
    s = n(594174),
    l = n(281494),
    c = n(981631);
function u(e, t, n) {
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
let d = 5,
    f = null,
    p = new Set(),
    _ = new Map(),
    m = !1,
    h = new Set(),
    g = new Set(),
    E = new Map(),
    b = 0,
    y = null,
    O = [],
    v = !1,
    S = 0,
    I = !1,
    T = !1,
    A = null;
function C() {
    (f = null),
        (p = new Set()),
        (m = !1),
        (h = new Set()),
        (g = new Set()),
        (E = new Map()),
        (b = 0),
        (y = null),
        (O = []),
        (v = !1),
        (S = 0),
        (I = !1),
        (T = !1),
        (A = null),
        (_ = new Map());
}
let N = () => !0;
function P(e) {
    let {} = e;
    (A = null), (m = !0);
}
function R(e) {
    let { referrals_remaining: t, sent_user_ids: n, refresh_at: r, recipient_status: i, has_eligible_friends: a } = e;
    (I = !0), (T = a), (m = !1), (f = t), (p = new Set(n)), (A = r), (_ = i);
}
function D(e) {
    let {} = e;
    (I = !1), (T = !1), (A = null), (m = !1), (b += 1), (y = Date.now() + 1000 * Math.pow(2, b));
}
function w(e) {
    let { userTrialOffer: t } = e;
    (0, l.C$)(), E.set(t.id, t), p.add(t.user_id);
}
function x(e) {
    let { userTrialOffers: t } = e;
    for (let e of ((0, l.C$)(), t)) E.set(e.id, e), p.add(e.user_id);
}
function L(e) {
    h.add(e);
}
function j(e) {
    let { userTrialOffer: t } = e;
    null != t && (h.delete(t.id), g.add(t.id), E.set(t.id, t));
}
function M(e) {
    let { userTrialOfferId: t } = e;
    h.delete(t), g.add(t);
}
function k(e) {
    let { message: t } = e;
    Z(t);
}
function U(e) {
    let { messages: t } = e;
    t.forEach((e) => Z(e));
}
function G(e) {
    let { userTrialOfferId: t } = e;
    m || (0, l.C$)(), h.has(t) || (L(t), o.Z.wait(() => (0, l.IB)(t).catch(c.VqG)));
}
function Z(e) {
    let t = e.type === i.u.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    g.has(t) || h.has(t) || (L(t), o.Z.wait(() => (0, l.IB)(t).catch(c.VqG)));
}
function B() {
    v = !0;
}
function F(e) {
    let { users: t, nextIndex: n } = e;
    (v = !1), (O = t), (S = n);
}
function V() {
    v = !1;
}
class H extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], N);
    }
    checkAndFetchReferralsRemaining() {
        null == f && !m && b < d && (null == y || y < Date.now()) && (0, l.C$)();
    }
    getReferralsRemaining() {
        return this.checkAndFetchReferralsRemaining(), f;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), Array.from(p.values());
    }
    isFetchingReferralsRemaining() {
        return m;
    }
    getRelevantUserTrialOffer(e) {
        return E.get(e);
    }
    isResolving(e) {
        return h.has(e);
    }
    getEligibleUsers() {
        return O;
    }
    getFetchingEligibleUsers() {
        return v;
    }
    getNextIndexOfEligibleUsers() {
        return S;
    }
    getIsEligibleToSendReferrals() {
        return I;
    }
    getHasEligibleFriends() {
        return T;
    }
    getRefreshAt() {
        return A;
    }
    getAllRelevantReferralTrialOffers() {
        return Array.from(E.values());
    }
    getRecipientStatus() {
        return _;
    }
}
u(H, "displayName", "ReferralTrialStore");
let Y = new H(o.Z, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: G,
    BILLING_REFERRALS_REMAINING_FETCH_START: P,
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: R,
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: D,
    BILLING_CREATE_REFERRAL_SUCCESS: w,
    CREATE_REFERRALS_SUCCESS: x,
    BILLING_REFERRAL_RESOLVE_SUCCESS: j,
    BILLING_REFERRAL_RESOLVE_FAIL: M,
    REFERRALS_FETCH_ELIGIBLE_USER_START: B,
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: F,
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: V,
    LOAD_MESSAGES_SUCCESS: U,
    MESSAGE_CREATE: k,
    LOAD_MESSAGES_AROUND_SUCCESS: U,
    LOGOUT: C,
});
