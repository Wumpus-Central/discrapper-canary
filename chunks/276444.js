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
    _ = new Set(),
    p = new Map(),
    h = !1,
    m = new Set(),
    g = new Set(),
    E = new Map(),
    b = 0,
    y = null,
    O = [],
    v = !1,
    I = 0,
    T = !1,
    S = !1,
    A = null;
function C() {
    (f = null),
        (_ = new Set()),
        (h = !1),
        (m = new Set()),
        (g = new Set()),
        (E = new Map()),
        (b = 0),
        (y = null),
        (O = []),
        (v = !1),
        (I = 0),
        (T = !1),
        (S = !1),
        (A = null),
        (p = new Map());
}
let N = () => !0;
function R(e) {
    let {} = e;
    (A = null), (h = !0);
}
function P(e) {
    let { referrals_remaining: t, sent_user_ids: n, refresh_at: r, recipient_status: i, has_eligible_friends: a } = e;
    (T = !0), (S = a), (h = !1), (f = t), (_ = new Set(n)), (A = r), (p = i);
}
function D(e) {
    let {} = e;
    (T = !1), (S = !1), (A = null), (h = !1), (b += 1), (y = Date.now() + 1000 * Math.pow(2, b));
}
function w(e) {
    let { userTrialOffer: t } = e;
    (0, l.C$)(), E.set(t.id, t), _.add(t.user_id);
}
function L(e) {
    let { userTrialOffers: t } = e;
    for (let e of ((0, l.C$)(), t)) E.set(e.id, e), _.add(e.user_id);
}
function x(e) {
    m.add(e);
}
function M(e) {
    let { userTrialOffer: t } = e;
    null != t && (m.delete(t.id), g.add(t.id), E.set(t.id, t));
}
function k(e) {
    let { userTrialOfferId: t } = e;
    m.delete(t), g.add(t);
}
function j(e) {
    let { message: t } = e;
    B(t);
}
function U(e) {
    let { messages: t } = e;
    t.forEach((e) => B(e));
}
function G(e) {
    let { userTrialOfferId: t } = e;
    h || (0, l.C$)(), m.has(t) || (x(t), o.Z.wait(() => (0, l.IB)(t).catch(c.VqG)));
}
function B(e) {
    let t = e.type === i.u.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    g.has(t) || m.has(t) || (x(t), o.Z.wait(() => (0, l.IB)(t).catch(c.VqG)));
}
function Z() {
    v = !0;
}
function F(e) {
    let { users: t, nextIndex: n } = e;
    (v = !1), (O = t), (I = n);
}
function V() {
    v = !1;
}
class H extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], N);
    }
    checkAndFetchReferralsRemaining() {
        null == f && !h && b < d && (null == y || y < Date.now()) && (0, l.C$)();
    }
    getReferralsRemaining() {
        return this.checkAndFetchReferralsRemaining(), f;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), Array.from(_.values());
    }
    isFetchingReferralsRemaining() {
        return h;
    }
    getRelevantUserTrialOffer(e) {
        return E.get(e);
    }
    isResolving(e) {
        return m.has(e);
    }
    getEligibleUsers() {
        return O;
    }
    getFetchingEligibleUsers() {
        return v;
    }
    getNextIndexOfEligibleUsers() {
        return I;
    }
    getIsEligibleToSendReferrals() {
        return T;
    }
    getHasEligibleFriends() {
        return S;
    }
    getRefreshAt() {
        return A;
    }
    getAllRelevantReferralTrialOffers() {
        return Array.from(E.values());
    }
    getRecipientStatus() {
        return p;
    }
}
u(H, "displayName", "ReferralTrialStore");
let Y = new H(o.Z, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: G,
    BILLING_REFERRALS_REMAINING_FETCH_START: R,
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: P,
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: D,
    BILLING_CREATE_REFERRAL_SUCCESS: w,
    CREATE_REFERRALS_SUCCESS: L,
    BILLING_REFERRAL_RESOLVE_SUCCESS: M,
    BILLING_REFERRAL_RESOLVE_FAIL: k,
    REFERRALS_FETCH_ELIGIBLE_USER_START: Z,
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: F,
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: V,
    LOAD_MESSAGES_SUCCESS: U,
    MESSAGE_CREATE: j,
    LOAD_MESSAGES_AROUND_SUCCESS: U,
    LOGOUT: C,
});
