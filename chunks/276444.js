n.d(t, { Z: () => W }), n(388685);
var r,
    i = n(275726),
    a = n(442837),
    o = n(570140),
    s = n(594174),
    l = n(281494),
    c = n(885145),
    u = n(981631);
function d(e, t, n) {
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
let f = 5,
    _ = null,
    p = new Set(),
    h = new Map(),
    m = !1,
    g = new Set(),
    E = new Set(),
    b = new Map(),
    y = 0,
    O = null,
    v = [],
    I = !1,
    T = 0,
    S = !1,
    A = !1,
    C = null;
function N() {
    (_ = null),
        (p = new Set()),
        (m = !1),
        (g = new Set()),
        (E = new Set()),
        (b = new Map()),
        (y = 0),
        (O = null),
        (v = []),
        (I = !1),
        (T = 0),
        (S = !1),
        (A = !1),
        (C = null),
        (h = new Map());
}
let R = () => !0;
function P(e) {
    let {} = e;
    (C = null), (m = !0);
}
function D(e) {
    let { referrals_remaining: t, sent_user_ids: n, refresh_at: r, recipient_status: i, has_eligible_friends: a } = e;
    (S = !0 === c.Z.getCurrentConfig({ location: "handleReferralsRemainingFetchSuccess" }).enabled || (null == r && a)),
        (A = a),
        (m = !1),
        (_ = t),
        (p = new Set(n)),
        (C = r),
        (h = i);
}
function w(e) {
    let {} = e;
    (S = !1), (A = !1), (C = null), (m = !1), (y += 1), (O = Date.now() + 1000 * Math.pow(2, y));
}
function x(e) {
    let { userTrialOffer: t } = e;
    (0, l.C$)(), b.set(t.id, t), p.add(t.user_id);
}
function L(e) {
    let { userTrialOffers: t } = e;
    for (let e of ((0, l.C$)(), t)) b.set(e.id, e), p.add(e.user_id);
}
function M(e) {
    g.add(e);
}
function j(e) {
    let { userTrialOffer: t } = e;
    null != t && (g.delete(t.id), E.add(t.id), b.set(t.id, t));
}
function k(e) {
    let { userTrialOfferId: t } = e;
    g.delete(t), E.add(t);
}
function U(e) {
    let { message: t } = e;
    Z(t);
}
function G(e) {
    let { messages: t } = e;
    t.forEach((e) => Z(e));
}
function B(e) {
    let { userTrialOfferId: t } = e;
    m || (0, l.C$)(), g.has(t) || (M(t), o.Z.wait(() => (0, l.IB)(t).catch(u.VqG)));
}
function Z(e) {
    let t = e.type === i.u.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    E.has(t) || g.has(t) || (M(t), o.Z.wait(() => (0, l.IB)(t).catch(u.VqG)));
}
function F() {
    I = !0;
}
function V(e) {
    let { users: t, nextIndex: n } = e;
    (I = !1), (v = t), (T = n);
}
function H() {
    I = !1;
}
class Y extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], R);
    }
    checkAndFetchReferralsRemaining() {
        null == _ && !m && y < f && (null == O || O < Date.now()) && (0, l.C$)();
    }
    getReferralsRemaining() {
        return this.checkAndFetchReferralsRemaining(), _;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), Array.from(p.values());
    }
    isFetchingReferralsRemaining() {
        return m;
    }
    getRelevantUserTrialOffer(e) {
        return b.get(e);
    }
    isResolving(e) {
        return g.has(e);
    }
    getEligibleUsers() {
        return v;
    }
    getFetchingEligibleUsers() {
        return I;
    }
    getNextIndexOfEligibleUsers() {
        return T;
    }
    getIsEligibleToSendReferrals() {
        return S;
    }
    getHasEligibleFriends() {
        return A;
    }
    getRefreshAt() {
        return C;
    }
    getAllRelevantReferralTrialOffers() {
        return Array.from(b.values());
    }
    getRecipientStatus() {
        return h;
    }
}
d(Y, "displayName", "ReferralTrialStore");
let W = new Y(o.Z, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: B,
    BILLING_REFERRALS_REMAINING_FETCH_START: P,
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: D,
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: w,
    BILLING_CREATE_REFERRAL_SUCCESS: x,
    CREATE_REFERRALS_SUCCESS: L,
    BILLING_REFERRAL_RESOLVE_SUCCESS: j,
    BILLING_REFERRAL_RESOLVE_FAIL: k,
    REFERRALS_FETCH_ELIGIBLE_USER_START: F,
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: V,
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: H,
    LOAD_MESSAGES_SUCCESS: G,
    MESSAGE_CREATE: U,
    LOAD_MESSAGES_AROUND_SUCCESS: G,
    LOGOUT: N,
});
