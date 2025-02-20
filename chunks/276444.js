n.d(t, { Z: () => en }), n(47120);
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
    p = new Map(),
    _ = new Set(),
    h = new Map(),
    m = new Set(),
    g = !1,
    E = new Set(),
    v = new Set(),
    b = new Map(),
    y = 0,
    O = null,
    S = [],
    I = !1,
    T = 0,
    N = !1,
    A = null,
    C = !1,
    R = !1,
    P = !1,
    w = c.g2L.NOT_ELIGIBLE;
function D() {
    (f = null), (p = new Map()), (_ = new Set()), (m = new Set()), (g = !1), (E = new Set()), (v = new Set()), (b = new Map()), (y = 0), (O = null), (S = []), (I = !1), (T = 0), (N = !1), (A = null), (h = new Map()), (C = !1), (R = !1), (P = !1), (w = c.g2L.NOT_ELIGIBLE);
}
let x = () => !0;
function L(e) {
    let {} = e;
    (A = null), (g = !0);
}
function M(e) {
    let { referrals_remaining: t, sent_user_ids: n, refresh_at: r, recipient_status: i, has_eligible_friends: o, isUserEligibleForIncentive: a, isUserQualifiedForIncentive: s, userReferralIncentiveState: l } = e;
    (N = null == r && o), (g = !1), (f = t), (_ = new Set(n)), (A = r), (h = i), (C = a && (o || h.size > 0)), (R = s), (w = l);
}
function k(e) {
    let {} = e;
    (N = !1), (A = null), (g = !1), (y += 1), (O = Date.now() + 1000 * Math.pow(2, y));
}
function j(e) {
    let { recipientId: t } = e;
    m.add(t);
}
function U(e) {
    let { recipientId: t, is_eligible: n } = e;
    p.set(t, n), m.delete(t);
}
function G(e) {
    let { recipientId: t } = e;
    p.set(t, !1), m.delete(t);
}
function B(e) {
    let { userTrialOffer: t } = e;
    (0, l.C$)(), b.set(t.id, t), _.add(t.user_id);
}
function Z(e) {
    let { userTrialOffers: t } = e;
    for (let e of ((0, l.C$)(), t)) b.set(e.id, e), _.add(e.user_id);
}
function F(e) {
    E.add(e);
}
function V(e) {
    let { userTrialOffer: t } = e;
    null != t && (E.delete(t.id), v.add(t.id), b.set(t.id, t));
}
function H(e) {
    let { userTrialOfferId: t } = e;
    E.delete(t), v.add(t);
}
function W(e) {
    let { message: t } = e;
    z(t);
}
function Y(e) {
    let { messages: t } = e;
    t.forEach((e) => z(e));
}
function K(e) {
    let { userTrialOfferId: t, recipientId: n } = e;
    g || (0, l.C$)(), m.has(n) || (0, l.Ve)(n), E.has(t) || (F(t), a.Z.wait(() => (0, l.IB)(t).catch(c.VqG)));
}
function z(e) {
    let t = e.type === i.u.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    v.has(t) || E.has(t) || (F(t), a.Z.wait(() => (0, l.IB)(t).catch(c.VqG)));
}
function q() {
    I = !0;
}
function Q(e) {
    let { users: t, nextIndex: n } = e;
    (I = !1), (S = t), (T = n);
}
function X() {
    I = !1;
}
function J(e) {
    let { isUserEligibleForIncentive: t } = e;
    (P = !1), null != t && (C = t);
}
function $() {
    P = !1;
}
function ee() {
    P = !0;
}
class et extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], x);
    }
    checkAndFetchReferralsRemaining() {
        null == f && !g && y < d && (null == O || O < Date.now()) && (0, l.C$)();
    }
    getReferralsRemaining() {
        return this.checkAndFetchReferralsRemaining(), f;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), Array.from(_.values());
    }
    isFetchingReferralsRemaining() {
        return g;
    }
    isFetchingRecipientEligibility(e) {
        return m.has(e);
    }
    getRecipientEligibility(e) {
        return p.has(e) || m.has(e) || (0, l.Ve)(e), p.get(e) || !1;
    }
    getRelevantUserTrialOffer(e) {
        return b.get(e);
    }
    isResolving(e) {
        return E.has(e);
    }
    getEligibleUsers() {
        return S;
    }
    getFetchingEligibleUsers() {
        return I;
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
    getIsSenderEligibleForIncentive() {
        return C;
    }
    getIsSenderQualifiedForIncentive() {
        return R;
    }
    getIsFetchingReferralIncentiveEligibility() {
        return P;
    }
    getSenderIncentiveState() {
        return w;
    }
}
u(et, 'displayName', 'ReferralTrialStore');
let en = new et(a.Z, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: K,
    BILLING_REFERRALS_REMAINING_FETCH_START: L,
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: M,
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: k,
    BILLING_CREATE_REFERRAL_PREVIEW_START: j,
    BILLING_GET_REFERRAL_INCENTIVE_STATUS_SUCCESS: J,
    BILLING_GET_REFERRAL_INCENTIVE_STATUS_FAIL: $,
    BILLING_GET_REFERRAL_INCENTIVE_STATUS_START: ee,
    BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: U,
    BILLING_CREATE_REFERRAL_PREVIEW_FAIL: G,
    BILLING_CREATE_REFERRAL_SUCCESS: B,
    CREATE_REFERRALS_SUCCESS: Z,
    BILLING_REFERRAL_RESOLVE_SUCCESS: V,
    BILLING_REFERRAL_RESOLVE_FAIL: H,
    REFERRALS_FETCH_ELIGIBLE_USER_START: q,
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: Q,
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: X,
    LOAD_MESSAGES_SUCCESS: Y,
    MESSAGE_CREATE: W,
    LOAD_MESSAGES_AROUND_SUCCESS: Y,
    LOGOUT: D
});
