n.d(t, { Z: () => H }), n(47120);
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
    _ = new Set(),
    p = new Map(),
    h = !1,
    m = new Set(),
    g = new Set(),
    E = new Map(),
    b = 0,
    y = null,
    v = [],
    O = !1,
    I = 0,
    S = !1,
    T = null;
function N() {
    (f = null), (_ = new Set()), (h = !1), (m = new Set()), (g = new Set()), (E = new Map()), (b = 0), (y = null), (v = []), (O = !1), (I = 0), (S = !1), (T = null), (p = new Map());
}
let A = () => !0;
function C(e) {
    let {} = e;
    (T = null), (h = !0);
}
function R(e) {
    let { referrals_remaining: t, sent_user_ids: n, refresh_at: r, recipient_status: i, has_eligible_friends: o } = e;
    (S = null == r && o), (h = !1), (f = t), (_ = new Set(n)), (T = r), (p = i);
}
function P(e) {
    let {} = e;
    (S = !1), (T = null), (h = !1), (b += 1), (y = Date.now() + 1000 * Math.pow(2, b));
}
function w(e) {
    let { userTrialOffer: t } = e;
    (0, l.C$)(), E.set(t.id, t), _.add(t.user_id);
}
function D(e) {
    let { userTrialOffers: t } = e;
    for (let e of ((0, l.C$)(), t)) E.set(e.id, e), _.add(e.user_id);
}
function L(e) {
    m.add(e);
}
function x(e) {
    let { userTrialOffer: t } = e;
    null != t && (m.delete(t.id), g.add(t.id), E.set(t.id, t));
}
function M(e) {
    let { userTrialOfferId: t } = e;
    m.delete(t), g.add(t);
}
function k(e) {
    let { message: t } = e;
    G(t);
}
function j(e) {
    let { messages: t } = e;
    t.forEach((e) => G(e));
}
function U(e) {
    let { userTrialOfferId: t } = e;
    h || (0, l.C$)(), m.has(t) || (L(t), a.Z.wait(() => (0, l.IB)(t).catch(c.VqG)));
}
function G(e) {
    let t = e.type === i.u.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    g.has(t) || m.has(t) || (L(t), a.Z.wait(() => (0, l.IB)(t).catch(c.VqG)));
}
function B() {
    O = !0;
}
function F(e) {
    let { users: t, nextIndex: n } = e;
    (O = !1), (v = t), (I = n);
}
function V() {
    O = !1;
}
class Z extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], A);
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
        return v;
    }
    getFetchingEligibleUsers() {
        return O;
    }
    getNextIndexOfEligibleUsers() {
        return I;
    }
    getIsEligibleToSendReferrals() {
        return S;
    }
    getRefreshAt() {
        return T;
    }
    getAllRelevantReferralTrialOffers() {
        return Array.from(E.values());
    }
    getRecipientStatus() {
        return p;
    }
}
u(Z, 'displayName', 'ReferralTrialStore');
let H = new Z(a.Z, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: U,
    BILLING_REFERRALS_REMAINING_FETCH_START: C,
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: R,
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: P,
    BILLING_CREATE_REFERRAL_SUCCESS: w,
    CREATE_REFERRALS_SUCCESS: D,
    BILLING_REFERRAL_RESOLVE_SUCCESS: x,
    BILLING_REFERRAL_RESOLVE_FAIL: M,
    REFERRALS_FETCH_ELIGIBLE_USER_START: B,
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: F,
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: V,
    LOAD_MESSAGES_SUCCESS: j,
    MESSAGE_CREATE: k,
    LOAD_MESSAGES_AROUND_SUCCESS: j,
    LOGOUT: N
});
