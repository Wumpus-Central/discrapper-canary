"use strict";
n.d(t, { P7: () => p, aK: () => c, kZ: () => E, o: () => d, xM: () => h, xm: () => m }), n(321073);
var r = n(562465),
    i = n(73153);
n(843472);
var s = n(427157);
n(309010);
var a = n(728458),
    o = n(652215);
let l = 10,
    u = 6e5;
var c = (function (e) {
        return (
            (e[(e.REDEEMED = 1)] = "REDEEMED"),
            (e[(e.PENDING = 2)] = "PENDING"),
            (e[(e.CONVERTED = 3)] = "CONVERTED"),
            e
        );
    })({}),
    d = (function (e) {
        return (e[(e.SUCCESS = 1)] = "SUCCESS"), (e[(e.FAIL = 2)] = "FAIL"), e;
    })({});
class _ {
    cache;
    expiration;
    constructor() {
        (this.cache = new Map()), (this.expiration = Date.now() + u);
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
}
let f = new _();
async function p(e, t, n) {
    let i = JSON.stringify({ index: e, searchQuery: t });
    if (f.has(i)) return f.get(i);
    let { users: a, next_index: u } = (
            await r.Bo.post({
                url: o.Rsh.GET_REFERRAL_ELIGIBLE_USERS,
                body: { index: e, limit: n ?? l, search_query: t },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body,
        c = { users: a.map((e) => new s.A(e)), nextIndex: u };
    return f.set(i, c), c;
}
let h = () => (
    i.h.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_START" }),
    r.Bo.get({ url: o.Rsh.GET_REFERRALS_REMAINING, oldFormErrors: !0, rejectWithError: !1 }).then(
        (e) => {
            let t = new Map();
            if (null != e.body && null != e.body.recipient_status)
                for (let n in e.body.recipient_status) {
                    let r = e.body.recipient_status[n];
                    t.set(n, r);
                }
            i.h.dispatch({
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
            e?.status !== 404 && i.h.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL" });
        },
    )
);
async function m(e) {
    let t = [],
        n = new Map();
    for (let i of e)
        try {
            let e =
                (await r.Bo.post({ url: o.Rsh.CREATE_REFERRAL(i), oldFormErrors: !0, rejectWithError: !0 })).body ??
                null;
            null != e && t.push(e), n.set(i, 1);
        } catch (e) {
            a.A.captureException(e), n.set(i, 2);
        }
    return i.h.dispatch({ type: "CREATE_REFERRALS_SUCCESS", userTrialOffers: t }), n;
}
async function E(e) {
    try {
        let t =
            (await r.Bo.get({ url: o.Rsh.REFERRAL_OFFER_ID_RESOLVE(e), oldFormErrors: !0, rejectWithError: !1 }))
                .body ?? null;
        return i.h.dispatch({ type: "BILLING_REFERRAL_RESOLVE_SUCCESS", userTrialOffer: t }), { userTrialOffer: t };
    } catch (t) {
        i.h.dispatch({ type: "BILLING_REFERRAL_RESOLVE_FAIL", userTrialOfferId: e });
    }
}
