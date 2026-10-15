(n.d(t, { P7: () => f, aK: () => E, dy: () => T, kZ: () => S, o: () => A, xM: () => m, xm: () => g }), n(321073));
var i,
    r,
    a = n(158390),
    s = n(636537),
    l = n(73153);
n(148494);
var o = n(959165),
    d = n(889227);
n(309010);
var c = n(927813),
    u = n(38405),
    _ = n(652215),
    E =
        (((i = {})[(i.REDEEMED = 1)] = "REDEEMED"),
        (i[(i.PENDING = 2)] = "PENDING"),
        (i[(i.CONVERTED = 3)] = "CONVERTED"),
        (i[(i.REFERRER_REWARD_GRANTED = 4)] = "REFERRER_REWARD_GRANTED"),
        i),
    A = (((r = {})[(r.SUCCESS = 1)] = "SUCCESS"), (r[(r.FAIL = 2)] = "FAIL"), r);
let h = new (class {
    cache;
    expiration;
    constructor() {
        ((this.cache = new Map()), (this.expiration = Date.now() + 6e5));
    }
    set(e, t) {
        this.cache.set(e, t);
    }
    get(e) {
        return (this._checkExpiration(), this.cache.get(e));
    }
    has(e) {
        return (this._checkExpiration(), this.cache.has(e));
    }
    _checkExpiration() {
        this.expiration < Date.now() && this.cache.clear();
    }
})();
async function f(e, t, n) {
    let i = JSON.stringify({ index: e, searchQuery: t });
    if (h.has(i)) return h.get(i);
    let { users: r, next_index: a } = (
            await s.Bo.post({
                url: _.Rsh.GET_REFERRAL_ELIGIBLE_USERS,
                body: { index: e, limit: n ?? 10, search_query: t },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body,
        l = { users: r.map((e) => new d.A(e)), nextIndex: a };
    return (h.set(i, l), l);
}
let I = new a.A(30 * c.A.Millis.SECOND, 5 * c.A.Millis.MINUTE, !0),
    p = 0;
async function T(e) {
    if (!(Date.now() < p)) {
        l.h.dispatch({ type: "REFERRAL_RECIPIENT_ELIGIBILITY_FETCH_START", recipientIds: e });
        try {
            let t = await s.Bo.post({
                url: _.Rsh.GET_REFERRAL_ELIGIBLE_USERS,
                body: { index: 0, user_ids: e },
                oldFormErrors: !0,
                rejectWithError: !1,
            });
            (I.succeed(),
                (p = 0),
                l.h.dispatch({
                    type: "REFERRAL_RECIPIENT_ELIGIBILITY_FETCH_SUCCESS",
                    recipientIds: e,
                    eligibleRecipientIds: t.body.users.map((e) => e.id),
                }));
        } catch {
            ((p = Date.now() + I.fail()),
                l.h.dispatch({ type: "REFERRAL_RECIPIENT_ELIGIBILITY_FETCH_FAILURE", recipientIds: e }));
        }
    }
}
function m() {
    return (
        l.h.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_START" }),
        s.Bo.get({ url: _.Rsh.GET_REFERRALS_REMAINING, oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => {
                let t = new Map();
                if (null != e.body && null != e.body.recipient_status)
                    for (let n in e.body.recipient_status) {
                        let i = e.body.recipient_status[n];
                        t.set(n, i);
                    }
                l.h.dispatch({
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
                e?.status !== 404 && l.h.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL" });
            },
        )
    );
}
async function g(e) {
    let t = [],
        n = new Map();
    for (let i of e)
        try {
            let e = await s.Bo.post({ url: _.Rsh.CREATE_REFERRAL(i), oldFormErrors: !0, rejectWithError: !0 }),
                r = null != e.body ? o.A.createFromServer(e.body) : null;
            (null != r && t.push(r), n.set(i, 1));
        } catch (e) {
            (u.A.captureException(e), n.set(i, 2));
        }
    return (l.h.dispatch({ type: "CREATE_REFERRALS_SUCCESS", userTrialOffers: t }), n);
}
async function S(e) {
    try {
        let t = await s.Bo.get({ url: _.Rsh.REFERRAL_OFFER_ID_RESOLVE(e), oldFormErrors: !0, rejectWithError: !1 }),
            n = null != t.body ? o.A.createFromServer(t.body) : null;
        return (
            l.h.dispatch({ type: "BILLING_REFERRAL_RESOLVE_SUCCESS", userTrialOffer: n ?? void 0 }),
            { userTrialOffer: n }
        );
    } catch (t) {
        l.h.dispatch({ type: "BILLING_REFERRAL_RESOLVE_FAIL", userTrialOfferId: e });
    }
}
