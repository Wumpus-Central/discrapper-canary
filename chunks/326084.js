"use strict";
n.d(t, { P7: () => E, aK: () => _, kZ: () => f, o: () => u, xM: () => h, xm: () => m }), n(321073);
var i,
    r,
    s = n(636537),
    a = n(228366);
n(720149);
var o = n(889227);
n(309010);
var l = n(38405),
    d = n(652215),
    _ =
        (((i = {})[(i.REDEEMED = 1)] = "REDEEMED"),
        (i[(i.PENDING = 2)] = "PENDING"),
        (i[(i.CONVERTED = 3)] = "CONVERTED"),
        i),
    u = (((r = {})[(r.SUCCESS = 1)] = "SUCCESS"), (r[(r.FAIL = 2)] = "FAIL"), r);
let c = new (class {
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
async function E(e, t, n) {
    let i = JSON.stringify({ index: e, searchQuery: t });
    if (c.has(i)) return c.get(i);
    let { users: r, next_index: a } = (
            await s.Bo.post({
                url: d.Rsh.GET_REFERRAL_ELIGIBLE_USERS,
                body: { index: e, limit: n ?? 10, search_query: t },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body,
        l = { users: r.map((e) => new o.A(e)), nextIndex: a };
    return c.set(i, l), l;
}
let h = () => (
    a.h.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_START" }),
    s.Bo.get({ url: d.Rsh.GET_REFERRALS_REMAINING, oldFormErrors: !0, rejectWithError: !1 }).then(
        (e) => {
            let t = new Map();
            if (null != e.body && null != e.body.recipient_status)
                for (let n in e.body.recipient_status) {
                    let i = e.body.recipient_status[n];
                    t.set(n, i);
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
async function m(e) {
    let t = [],
        n = new Map();
    for (let i of e)
        try {
            let e =
                (await s.Bo.post({ url: d.Rsh.CREATE_REFERRAL(i), oldFormErrors: !0, rejectWithError: !0 })).body ??
                null;
            null != e && t.push(e), n.set(i, 1);
        } catch (e) {
            l.A.captureException(e), n.set(i, 2);
        }
    return a.h.dispatch({ type: "CREATE_REFERRALS_SUCCESS", userTrialOffers: t }), n;
}
async function f(e) {
    try {
        let t =
            (await s.Bo.get({ url: d.Rsh.REFERRAL_OFFER_ID_RESOLVE(e), oldFormErrors: !0, rejectWithError: !1 }))
                .body ?? null;
        return a.h.dispatch({ type: "BILLING_REFERRAL_RESOLVE_SUCCESS", userTrialOffer: t }), { userTrialOffer: t };
    } catch (t) {
        a.h.dispatch({ type: "BILLING_REFERRAL_RESOLVE_FAIL", userTrialOfferId: e });
    }
}
