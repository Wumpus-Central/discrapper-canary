"use strict";
n.d(t, { P7: () => f, aK: () => c, kZ: () => E, o: () => d, xM: () => p, xm: () => h }), n(321073);
var r,
    i,
    s = n(562465),
    a = n(73153);
n(843472);
var o = n(427157);
n(309010);
var l = n(728458),
    u = n(652215),
    c =
        (((r = {})[(r.REDEEMED = 1)] = "REDEEMED"),
        (r[(r.PENDING = 2)] = "PENDING"),
        (r[(r.CONVERTED = 3)] = "CONVERTED"),
        r),
    d = (((i = {})[(i.SUCCESS = 1)] = "SUCCESS"), (i[(i.FAIL = 2)] = "FAIL"), i);
let _ = new (class {
    cache;
    expiration;
    constructor() {
        (this.cache = new Map()), (this.expiration = Date.now() + 6e5);
    }
    set(e, t) {
        this.cache.set(e, t);
    }
    get(e) {
        return this._checkExpiration(), this.cache.get(e);
    }
    has(e) {
        return this._checkExpiration(), this.cache.has(e);
    }
    _checkExpiration() {
        this.expiration < Date.now() && this.cache.clear();
    }
})();
async function f(e, t, n) {
    let r = JSON.stringify({ index: e, searchQuery: t });
    if (_.has(r)) return _.get(r);
    let { users: i, next_index: a } = (
            await s.Bo.post({
                url: u.Rsh.GET_REFERRAL_ELIGIBLE_USERS,
                body: { index: e, limit: n ?? 10, search_query: t },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body,
        l = { users: i.map((e) => new o.A(e)), nextIndex: a };
    return _.set(r, l), l;
}
let p = () => (
    a.h.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_START" }),
    s.Bo.get({ url: u.Rsh.GET_REFERRALS_REMAINING, oldFormErrors: !0, rejectWithError: !1 }).then(
        (e) => {
            let t = new Map();
            if (null != e.body && null != e.body.recipient_status)
                for (let n in e.body.recipient_status) {
                    let r = e.body.recipient_status[n];
                    t.set(n, r);
                }
            a.h.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                referrals_remaining:
                    null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : [],
                refresh_at: e.body?.refresh_at ?? null,
                recipient_status: t,
                has_eligible_friends: e.body?.has_eligible_friends ?? !1,
                reminder_state_id: e.body?.reminder_state_id ?? null,
            });
        },
        (e) => {
            e?.status !== 404 && a.h.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL" });
        },
    )
);
async function h(e) {
    let t = [],
        n = new Map();
    for (let r of e)
        try {
            let e =
                (await s.Bo.post({ url: u.Rsh.CREATE_REFERRAL(r), oldFormErrors: !0, rejectWithError: !0 })).body ??
                null;
            null != e && t.push(e), n.set(r, 1);
        } catch (e) {
            l.A.captureException(e), n.set(r, 2);
        }
    return a.h.dispatch({ type: "CREATE_REFERRALS_SUCCESS", userTrialOffers: t }), n;
}
async function E(e) {
    try {
        let t =
            (await s.Bo.get({ url: u.Rsh.REFERRAL_OFFER_ID_RESOLVE(e), oldFormErrors: !0, rejectWithError: !1 }))
                .body ?? null;
        return a.h.dispatch({ type: "BILLING_REFERRAL_RESOLVE_SUCCESS", userTrialOffer: t }), { userTrialOffer: t };
    } catch (t) {
        a.h.dispatch({ type: "BILLING_REFERRAL_RESOLVE_FAIL", userTrialOfferId: e });
    }
}
