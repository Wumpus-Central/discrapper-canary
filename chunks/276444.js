var i,
    a = r(47120);
var s = r(275726),
    o = r(442837),
    l = r(570140),
    u = r(594174),
    c = r(281494),
    d = r(981631);
function f(e, n, r) {
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
let _ = 5,
    h = null,
    p = new Map(),
    m = new Set(),
    g = new Map(),
    E = new Set(),
    v = !1,
    I = new Set(),
    T = new Set(),
    b = new Map(),
    y = 0,
    S = null,
    A = [],
    N = !1,
    C = 0,
    R = !1,
    O = null,
    D = !1,
    L = !1,
    x = !1,
    w = d.g2L.NOT_ELIGIBLE;
function P() {
    (h = null), (p = new Map()), (m = new Set()), (E = new Set()), (v = !1), (I = new Set()), (T = new Set()), (b = new Map()), (y = 0), (S = null), (A = []), (N = !1), (C = 0), (R = !1), (O = null), (g = new Map()), (D = !1), (L = !1), (x = !1), (w = d.g2L.NOT_ELIGIBLE);
}
let M = () => !0;
function k(e) {
    let {} = e;
    (O = null), (v = !0);
}
function U(e) {
    let { referrals_remaining: n, sent_user_ids: r, refresh_at: i, recipient_status: a, has_eligible_friends: s, isUserEligibleForIncentive: o, isUserQualifiedForIncentive: l, userReferralIncentiveState: u } = e;
    (R = null == i && s), (v = !1), (h = n), (m = new Set(r)), (O = i), (g = a), (D = o && (s || g.size > 0)), (L = l), (w = u);
}
function B(e) {
    let {} = e;
    (R = !1), (O = null), (v = !1), (y += 1), (S = Date.now() + 1000 * Math.pow(2, y));
}
function G(e) {
    let { recipientId: n } = e;
    E.add(n);
}
function Z(e) {
    let { recipientId: n, is_eligible: r } = e;
    p.set(n, r), E.delete(n);
}
function F(e) {
    let { recipientId: n } = e;
    p.set(n, !1), E.delete(n);
}
function V(e) {
    let { userTrialOffer: n } = e;
    (0, c.C$)(), b.set(n.id, n), m.add(n.user_id);
}
function j(e) {
    let { userTrialOffers: n } = e;
    for (let e of ((0, c.C$)(), n)) b.set(e.id, e), m.add(e.user_id);
}
function H(e) {
    I.add(e);
}
function Y(e) {
    let { userTrialOffer: n } = e;
    null != n && (I.delete(n.id), T.add(n.id), b.set(n.id, n));
}
function W(e) {
    let { userTrialOfferId: n } = e;
    I.delete(n), T.add(n);
}
function K(e) {
    let { message: n } = e;
    Q(n);
}
function z(e) {
    let { messages: n } = e;
    n.forEach((e) => Q(e));
}
function q(e) {
    let { userTrialOfferId: n, recipientId: r } = e;
    !v && (0, c.C$)(), !E.has(r) && (0, c.Ve)(r), !I.has(n) && (H(n), l.Z.wait(() => (0, c.IB)(n).catch(d.VqG)));
}
function Q(e) {
    let n = e.type === s.u.PREMIUM_REFERRAL ? e.content : null;
    if (null == n) return !1;
    !T.has(n) && !I.has(n) && (H(n), l.Z.wait(() => (0, c.IB)(n).catch(d.VqG)));
}
function X() {
    N = !0;
}
function J(e) {
    let { users: n, nextIndex: r } = e;
    (N = !1), (A = n), (C = r);
}
function $() {
    N = !1;
}
function ee(e) {
    let { isUserEligibleForIncentive: n } = e;
    (x = !1), null != n && (D = n);
}
function et() {
    x = !1;
}
function en() {
    x = !0;
}
class er extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.default), this.syncWith([u.default], M);
    }
    checkAndFetchReferralsRemaining() {
        null == h && !v && y < _ && (null == S || S < Date.now()) && (0, c.C$)();
    }
    getReferralsRemaining() {
        return this.checkAndFetchReferralsRemaining(), h;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), Array.from(m.values());
    }
    isFetchingReferralsRemaining() {
        return v;
    }
    isFetchingRecipientEligibility(e) {
        return E.has(e);
    }
    getRecipientEligibility(e) {
        return !p.has(e) && !E.has(e) && (0, c.Ve)(e), p.get(e) || !1;
    }
    getRelevantUserTrialOffer(e) {
        return b.get(e);
    }
    isResolving(e) {
        return I.has(e);
    }
    getEligibleUsers() {
        return A;
    }
    getFetchingEligibleUsers() {
        return N;
    }
    getNextIndexOfEligibleUsers() {
        return C;
    }
    getIsEligibleToSendReferrals() {
        return R;
    }
    getRefreshAt() {
        return O;
    }
    getAllRelevantReferralTrialOffers() {
        return Array.from(b.values());
    }
    getRecipientStatus() {
        return g;
    }
    getIsSenderEligibleForIncentive() {
        return D;
    }
    getIsSenderQualifiedForIncentive() {
        return L;
    }
    getIsFetchingReferralIncentiveEligibility() {
        return x;
    }
    getSenderIncentiveState() {
        return w;
    }
}
f(er, 'displayName', 'ReferralTrialStore'),
    (n.Z = new er(l.Z, {
        BILLING_REFERRAL_TRIAL_OFFER_UPDATE: q,
        BILLING_REFERRALS_REMAINING_FETCH_START: k,
        BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: U,
        BILLING_REFERRALS_REMAINING_FETCH_FAIL: B,
        BILLING_CREATE_REFERRAL_PREVIEW_START: G,
        BILLING_GET_REFERRAL_INCENTIVE_STATUS_SUCCESS: ee,
        BILLING_GET_REFERRAL_INCENTIVE_STATUS_FAIL: et,
        BILLING_GET_REFERRAL_INCENTIVE_STATUS_START: en,
        BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: Z,
        BILLING_CREATE_REFERRAL_PREVIEW_FAIL: F,
        BILLING_CREATE_REFERRAL_SUCCESS: V,
        CREATE_REFERRALS_SUCCESS: j,
        BILLING_REFERRAL_RESOLVE_SUCCESS: Y,
        BILLING_REFERRAL_RESOLVE_FAIL: W,
        REFERRALS_FETCH_ELIGIBLE_USER_START: X,
        REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: J,
        REFERRALS_FETCH_ELIGIBLE_USER_FAIL: $,
        LOAD_MESSAGES_SUCCESS: z,
        MESSAGE_CREATE: K,
        LOAD_MESSAGES_AROUND_SUCCESS: z,
        LOGOUT: P
    }));
