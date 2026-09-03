n.d(t, { P7: () => A, aK: () => u, kZ: () => f, o: () => _, xM: () => h, xm: () => I }), n(321073);
var i,
    r,
    a = n(636537),
    s = n(228366);
n(148494);
var l = n(959165),
    o = n(889227);
n(309010);
var d = n(38405),
    c = n(652215),
    u =
        (((i = {})[(i.REDEEMED = 1)] = "REDEEMED"),
        (i[(i.PENDING = 2)] = "PENDING"),
        (i[(i.CONVERTED = 3)] = "CONVERTED"),
        (i[(i.REFERRER_REWARD_GRANTED = 4)] = "REFERRER_REWARD_GRANTED"),
        i),
    _ = (((r = {})[(r.SUCCESS = 1)] = "SUCCESS"), (r[(r.FAIL = 2)] = "FAIL"), r);
let E = new (class {
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
async function A(e, t, n) {
    let i = JSON.stringify({ index: e, searchQuery: t });
    if (E.has(i)) return E.get(i);
    let { users: r, next_index: s } = (
            await a.Bo.post({
                url: c.Rsh.GET_REFERRAL_ELIGIBLE_USERS,
                body: { index: e, limit: n ?? 10, search_query: t },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body,
        l = { users: r.map((e) => new o.A(e)), nextIndex: s };
    return E.set(i, l), l;
}
function h() {
    return (
        s.h.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_START" }),
        a.Bo.get({ url: c.Rsh.GET_REFERRALS_REMAINING, oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => {
                let t = new Map();
                if (null != e.body && null != e.body.recipient_status)
                    for (let n in e.body.recipient_status) {
                        let i = e.body.recipient_status[n];
                        t.set(n, i);
                    }
                s.h.dispatch({
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
                e?.status !== 404 && s.h.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL" });
            },
        )
    );
}
async function I(e) {
    let t = [],
        n = new Map();
    for (let i of e)
        try {
            let e = await a.Bo.post({ url: c.Rsh.CREATE_REFERRAL(i), oldFormErrors: !0, rejectWithError: !0 }),
                r = null != e.body ? l.A.createFromServer(e.body) : null;
            null != r && t.push(r), n.set(i, 1);
        } catch (e) {
            d.A.captureException(e), n.set(i, 2);
        }
    return s.h.dispatch({ type: "CREATE_REFERRALS_SUCCESS", userTrialOffers: t }), n;
}
async function f(e) {
    try {
        let t = await a.Bo.get({ url: c.Rsh.REFERRAL_OFFER_ID_RESOLVE(e), oldFormErrors: !0, rejectWithError: !1 }),
            n = null != t.body ? l.A.createFromServer(t.body) : null;
        return (
            s.h.dispatch({ type: "BILLING_REFERRAL_RESOLVE_SUCCESS", userTrialOffer: n ?? void 0 }),
            { userTrialOffer: n }
        );
    } catch (t) {
        s.h.dispatch({ type: "BILLING_REFERRAL_RESOLVE_FAIL", userTrialOfferId: e });
    }
}
