n.d(t, { Z: () => q }), n(47120);
var r,
    i = n(275726),
    o = n(442837),
    a = n(570140),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = 5,
    f = null,
    _ = new Map(),
    p = new Set(),
    h = new Map(),
    m = new Set(),
    g = !1,
    E = new Set(),
    v = new Set(),
    b = new Map(),
    y = 0,
    O = null,
    I = [],
    S = !1,
    T = 0,
    N = !1,
    A = null;
function C() {
    (f = null), (_ = new Map()), (p = new Set()), (m = new Set()), (g = !1), (E = new Set()), (v = new Set()), (b = new Map()), (y = 0), (O = null), (I = []), (S = !1), (T = 0), (N = !1), (A = null), (h = new Map());
}
let R = () => !0;
function P(e) {
    let {} = e;
    (A = null), (g = !0);
}
function w(e) {
    let { referrals_remaining: t, sent_user_ids: n, refresh_at: r, recipient_status: i, has_eligible_friends: o } = e;
    (N = null == r && o), (g = !1), (f = t), (p = new Set(n)), (A = r), (h = i);
}
function D(e) {
    let {} = e;
    (N = !1), (A = null), (g = !1), (y += 1), (O = Date.now() + 1000 * Math.pow(2, y));
}
function L(e) {
    let { recipientId: t } = e;
    m.add(t);
}
function x(e) {
    let { recipientId: t, is_eligible: n } = e;
    _.set(t, n), m.delete(t);
}
function M(e) {
    let { recipientId: t } = e;
    _.set(t, !1), m.delete(t);
}
function k(e) {
    let { userTrialOffer: t } = e;
    (0, l.C$)(), b.set(t.id, t), p.add(t.user_id);
}
function j(e) {
    let { userTrialOffers: t } = e;
    for (let e of ((0, l.C$)(), t)) b.set(e.id, e), p.add(e.user_id);
}
function U(e) {
    E.add(e);
}
function G(e) {
    let { userTrialOffer: t } = e;
    null != t && (E.delete(t.id), v.add(t.id), b.set(t.id, t));
}
function B(e) {
    let { userTrialOfferId: t } = e;
    E.delete(t), v.add(t);
}
function V(e) {
    let { message: t } = e;
    H(t);
}
function F(e) {
    let { messages: t } = e;
    t.forEach((e) => H(e));
}
function Z(e) {
    let { userTrialOfferId: t, recipientId: n } = e;
    g || (0, l.C$)(), m.has(n) || (0, l.Ve)(n), E.has(t) || (U(t), a.Z.wait(() => (0, l.IB)(t).catch(c.VqG)));
}
function H(e) {
    let t = e.type === i.u.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    v.has(t) || E.has(t) || (U(t), a.Z.wait(() => (0, l.IB)(t).catch(c.VqG)));
}
function W() {
    S = !0;
}
function Y(e) {
    let { users: t, nextIndex: n } = e;
    (S = !1), (I = t), (T = n);
}
function K() {
    S = !1;
}
class z extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], R);
    }
    checkAndFetchReferralsRemaining() {
        null == f && !g && y < d && (null == O || O < Date.now()) && (0, l.C$)();
    }
    getReferralsRemaining() {
        return this.checkAndFetchReferralsRemaining(), f;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), Array.from(p.values());
    }
    isFetchingReferralsRemaining() {
        return g;
    }
    isFetchingRecipientEligibility(e) {
        return m.has(e);
    }
    getRecipientEligibility(e) {
        return _.has(e) || m.has(e) || (0, l.Ve)(e), _.get(e) || !1;
    }
    getRelevantUserTrialOffer(e) {
        return b.get(e);
    }
    isResolving(e) {
        return E.has(e);
    }
    getEligibleUsers() {
        return I;
    }
    getFetchingEligibleUsers() {
        return S;
    }
    getNextIndexOfEligibleUsers() {
        return T;
    }
    getIsEligibleToSendReferrals() {
        return N;
    }
    getRefreshAt() {
        return A;
    }
    getAllRelevantReferralTrialOffers() {
        return Array.from(b.values());
    }
    getRecipientStatus() {
        return h;
    }
}
u(z, 'displayName', 'ReferralTrialStore');
let q = new z(a.Z, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: Z,
    BILLING_REFERRALS_REMAINING_FETCH_START: P,
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: w,
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: D,
    BILLING_CREATE_REFERRAL_PREVIEW_START: L,
    BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: x,
    BILLING_CREATE_REFERRAL_PREVIEW_FAIL: M,
    BILLING_CREATE_REFERRAL_SUCCESS: k,
    CREATE_REFERRALS_SUCCESS: j,
    BILLING_REFERRAL_RESOLVE_SUCCESS: G,
    BILLING_REFERRAL_RESOLVE_FAIL: B,
    REFERRALS_FETCH_ELIGIBLE_USER_START: W,
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: Y,
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: K,
    LOAD_MESSAGES_SUCCESS: F,
    MESSAGE_CREATE: V,
    LOAD_MESSAGES_AROUND_SUCCESS: F,
    LOGOUT: C
});
