n.d(t, { Z: () => en }), n(47120);
var i,
    r = n(275726),
    a = n(442837),
    s = n(570140),
    o = n(594174),
    l = n(281494),
    u = n(981631);
function c(e, t, n) {
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
    y = new Map(),
    I = 0,
    T = null,
    b = [],
    S = !1,
    A = 0,
    N = !1,
    C = null,
    R = !1,
    O = !1,
    D = !1,
    L = u.g2L.NOT_ELIGIBLE;
function x() {
    (f = null), (_ = new Map()), (p = new Set()), (m = new Set()), (g = !1), (E = new Set()), (v = new Set()), (y = new Map()), (I = 0), (T = null), (b = []), (S = !1), (A = 0), (N = !1), (C = null), (h = new Map()), (R = !1), (O = !1), (D = !1), (L = u.g2L.NOT_ELIGIBLE);
}
let P = () => !0;
function w(e) {
    let {} = e;
    (C = null), (g = !0);
}
function M(e) {
    let { referrals_remaining: t, sent_user_ids: n, refresh_at: i, recipient_status: r, has_eligible_friends: a, isUserEligibleForIncentive: s, isUserQualifiedForIncentive: o, userReferralIncentiveState: l } = e;
    (N = null == i && a), (g = !1), (f = t), (p = new Set(n)), (C = i), (h = r), (R = s && (a || h.size > 0)), (O = o), (L = l);
}
function k(e) {
    let {} = e;
    (N = !1), (C = null), (g = !1), (I += 1), (T = Date.now() + 1000 * Math.pow(2, I));
}
function U(e) {
    let { recipientId: t } = e;
    m.add(t);
}
function G(e) {
    let { recipientId: t, is_eligible: n } = e;
    _.set(t, n), m.delete(t);
}
function B(e) {
    let { recipientId: t } = e;
    _.set(t, !1), m.delete(t);
}
function Z(e) {
    let { userTrialOffer: t } = e;
    (0, l.C$)(), y.set(t.id, t), p.add(t.user_id);
}
function F(e) {
    let { userTrialOffers: t } = e;
    for (let e of ((0, l.C$)(), t)) y.set(e.id, e), p.add(e.user_id);
}
function V(e) {
    E.add(e);
}
function j(e) {
    let { userTrialOffer: t } = e;
    null != t && (E.delete(t.id), v.add(t.id), y.set(t.id, t));
}
function H(e) {
    let { userTrialOfferId: t } = e;
    E.delete(t), v.add(t);
}
function Y(e) {
    let { message: t } = e;
    z(t);
}
function W(e) {
    let { messages: t } = e;
    t.forEach((e) => z(e));
}
function K(e) {
    let { userTrialOfferId: t, recipientId: n } = e;
    g || (0, l.C$)(), m.has(n) || (0, l.Ve)(n), E.has(t) || (V(t), s.Z.wait(() => (0, l.IB)(t).catch(u.VqG)));
}
function z(e) {
    let t = e.type === r.u.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    v.has(t) || E.has(t) || (V(t), s.Z.wait(() => (0, l.IB)(t).catch(u.VqG)));
}
function q() {
    S = !0;
}
function Q(e) {
    let { users: t, nextIndex: n } = e;
    (S = !1), (b = t), (A = n);
}
function X() {
    S = !1;
}
function J(e) {
    let { isUserEligibleForIncentive: t } = e;
    (D = !1), null != t && (R = t);
}
function $() {
    D = !1;
}
function ee() {
    D = !0;
}
class et extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(o.default), this.syncWith([o.default], P);
    }
    checkAndFetchReferralsRemaining() {
        null == f && !g && I < d && (null == T || T < Date.now()) && (0, l.C$)();
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
        return y.get(e);
    }
    isResolving(e) {
        return E.has(e);
    }
    getEligibleUsers() {
        return b;
    }
    getFetchingEligibleUsers() {
        return S;
    }
    getNextIndexOfEligibleUsers() {
        return A;
    }
    getIsEligibleToSendReferrals() {
        return N;
    }
    getRefreshAt() {
        return C;
    }
    getAllRelevantReferralTrialOffers() {
        return Array.from(y.values());
    }
    getRecipientStatus() {
        return h;
    }
    getIsSenderEligibleForIncentive() {
        return R;
    }
    getIsSenderQualifiedForIncentive() {
        return O;
    }
    getIsFetchingReferralIncentiveEligibility() {
        return D;
    }
    getSenderIncentiveState() {
        return L;
    }
}
c(et, 'displayName', 'ReferralTrialStore');
let en = new et(s.Z, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: K,
    BILLING_REFERRALS_REMAINING_FETCH_START: w,
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: M,
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: k,
    BILLING_CREATE_REFERRAL_PREVIEW_START: U,
    BILLING_GET_REFERRAL_INCENTIVE_STATUS_SUCCESS: J,
    BILLING_GET_REFERRAL_INCENTIVE_STATUS_FAIL: $,
    BILLING_GET_REFERRAL_INCENTIVE_STATUS_START: ee,
    BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: G,
    BILLING_CREATE_REFERRAL_PREVIEW_FAIL: B,
    BILLING_CREATE_REFERRAL_SUCCESS: Z,
    CREATE_REFERRALS_SUCCESS: F,
    BILLING_REFERRAL_RESOLVE_SUCCESS: j,
    BILLING_REFERRAL_RESOLVE_FAIL: H,
    REFERRALS_FETCH_ELIGIBLE_USER_START: q,
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: Q,
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: X,
    LOAD_MESSAGES_SUCCESS: W,
    MESSAGE_CREATE: Y,
    LOAD_MESSAGES_AROUND_SUCCESS: W,
    LOGOUT: x
});
