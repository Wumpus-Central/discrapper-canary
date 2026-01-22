n.d(t, {
    P7: () => h,
    aK: () => d,
    kZ: () => E,
    o: () => f,
    xM: () => m,
    xm: () => g,
}),
    n(896048),
    n(457529),
    n(321073);
var r = n(562465),
    i = n(73153);
n(843472);
var a = n(427157);
n(309010);
var s = n(728458),
    o = n(652215);

function l(e, t, n) {
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
let c = 10,
    u = 6e5;
var d = (function (e) {
        return (
            (e[(e.REDEEMED = 1)] = "REDEEMED"),
            (e[(e.PENDING = 2)] = "PENDING"),
            (e[(e.CONVERTED = 3)] = "CONVERTED"),
            e
        );
    })({}),
    f = (function (e) {
        return (e[(e.SUCCESS = 1)] = "SUCCESS"), (e[(e.FAIL = 2)] = "FAIL"), e;
    })({});
class p {
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
    constructor() {
        l(this, "cache", void 0),
            l(this, "expiration", void 0),
            (this.cache = new Map()),
            (this.expiration = Date.now() + u);
    }
}
let _ = new p();
async function h(e, t, n) {
    let i = JSON.stringify({
        index: e,
        searchQuery: t,
    });
    if (_.has(i)) return _.get(i);
    let { users: s, next_index: l } = (
            await r.Bo.post({
                url: o.Rsh.GET_REFERRAL_ELIGIBLE_USERS,
                body: {
                    index: e,
                    limit: null != n ? n : c,
                    search_query: t,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body,
        u = {
            users: s.map((e) => new a.A(e)),
            nextIndex: l,
        };
    return _.set(i, u), u;
}
let m = () => (
    i.h.dispatch({
        type: "BILLING_REFERRALS_REMAINING_FETCH_START",
    }),
    r.Bo.get({
        url: o.Rsh.GET_REFERRALS_REMAINING,
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        (e) => {
            var t, n, r, a;
            let s = new Map();
            if (null != e.body && null != e.body.recipient_status)
                for (let t in e.body.recipient_status) {
                    let n = e.body.recipient_status[t];
                    s.set(t, n);
                }
            i.h.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                referrals_remaining:
                    null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : [],
                refresh_at: null != (t = null == (r = e.body) ? void 0 : r.refresh_at) ? t : null,
                recipient_status: s,
                has_eligible_friends: null != (n = null == (a = e.body) ? void 0 : a.has_eligible_friends) && n,
            });
        },
        (e) => {
            (null == e ? void 0 : e.status) !== 404 &&
                i.h.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL",
                });
        },
    )
);
async function g(e) {
    let t = [],
        n = new Map();
    for (let i of e)
        try {
            var a;
            let e =
                null !=
                (a = (
                    await r.Bo.post({
                        url: o.Rsh.CREATE_REFERRAL(i),
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                ).body)
                    ? a
                    : null;
            null != e && t.push(e), n.set(i, 1);
        } catch (e) {
            s.A.captureException(e), n.set(i, 2);
        }
    return (
        i.h.dispatch({
            type: "CREATE_REFERRALS_SUCCESS",
            userTrialOffers: t,
        }),
        n
    );
}
async function E(e) {
    try {
        var t;
        let n =
            null !=
            (t = (
                await r.Bo.get({
                    url: o.Rsh.REFERRAL_OFFER_ID_RESOLVE(e),
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
            ).body)
                ? t
                : null;
        return (
            i.h.dispatch({
                type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                userTrialOffer: n,
            }),
            {
                userTrialOffer: n,
            }
        );
    } catch (t) {
        i.h.dispatch({
            type: "BILLING_REFERRAL_RESOLVE_FAIL",
            userTrialOfferId: e,
        });
    }
}
