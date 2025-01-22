r.d(n, {
    C$: function () {
        return I;
    },
    Eo: function () {
        return A;
    },
    Fe: function () {
        return i;
    },
    Fz: function () {
        return a;
    },
    IB: function () {
        return C;
    },
    Ve: function () {
        return T;
    },
    bq: function () {
        return y;
    },
    iF: function () {
        return b;
    },
    jy: function () {
        return S;
    }
});
var i,
    a,
    o = r(47120);
var s = r(653041);
var l = r(544891),
    u = r(570140),
    c = r(904245),
    d = r(598077),
    f = r(944486),
    p = r(960048),
    h = r(981631);
function _(e, n, r) {
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
let m = 10,
    g = 600000;
!(function (e) {
    (e[(e.REDEEMED = 1)] = 'REDEEMED'), (e[(e.PENDING = 2)] = 'PENDING'), (e[(e.CONVERTED = 3)] = 'CONVERTED');
})(i || (i = {})),
    !(function (e) {
        (e[(e.SUCCESS = 1)] = 'SUCCESS'), (e[(e.FAIL = 2)] = 'FAIL');
    })(a || (a = {}));
class E {
    set(e, n) {
        this.cache.set(e, n);
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
        _(this, 'cache', void 0), _(this, 'expiration', void 0), (this.cache = new Map()), (this.expiration = Date.now() + g);
    }
}
let v = new E(),
    y = () => (
        u.Z.dispatch({ type: 'BILLING_GET_REFERRAL_INCENTIVE_STATUS_START' }),
        l.tn
            .get({
                url: h.ANM.GET_REFERRAL_INCENTIVE_ELIGIBILITY,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    u.Z.dispatch({
                        type: 'BILLING_GET_REFERRAL_INCENTIVE_STATUS_SUCCESS',
                        isUserEligibleForIncentive: null != e.body ? e.body.is_eligible_for_incentive : null
                    });
                },
                () => {
                    u.Z.dispatch({ type: 'BILLING_GET_REFERRAL_INCENTIVE_STATUS_FAIL' });
                }
            )
    );
async function b(e, n, r) {
    let i = JSON.stringify({
        index: e,
        searchQuery: n
    });
    if (v.has(i)) return v.get(i);
    let { users: a, next_index: o } = (
            await l.tn.post({
                url: h.ANM.GET_REFERRAL_ELIGIBLE_USERS,
                body: {
                    index: e,
                    limit: null != r ? r : m,
                    search_query: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body,
        s = {
            users: a.map((e) => new d.Z(e)),
            nextIndex: o
        };
    return v.set(i, s), s;
}
let I = () => (
        u.Z.dispatch({ type: 'BILLING_REFERRALS_REMAINING_FETCH_START' }),
        l.tn
            .get({
                url: h.ANM.GET_REFERRALS_REMAINING,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    var n, r, i;
                    let a = new Map();
                    if (null != e.body && null != e.body.recipient_status)
                        for (let n in e.body.recipient_status) {
                            let r = e.body.recipient_status[n];
                            a.set(n, r);
                        }
                    u.Z.dispatch({
                        type: 'BILLING_REFERRALS_REMAINING_FETCH_SUCCESS',
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : [],
                        refresh_at: null !== (i = null === (n = e.body) || void 0 === n ? void 0 : n.refresh_at) && void 0 !== i ? i : null,
                        recipient_status: a,
                        has_eligible_friends: e.body.has_eligible_friends,
                        isUserEligibleForIncentive: e.body.is_eligible_for_incentive,
                        isUserQualifiedForIncentive: e.body.is_qualified_for_incentive,
                        userReferralIncentiveState: null === (r = e.body) || void 0 === r ? void 0 : r.referral_incentive_status
                    });
                },
                () => {
                    u.Z.dispatch({ type: 'BILLING_REFERRALS_REMAINING_FETCH_FAIL' });
                }
            )
    ),
    T = (e) => (
        u.Z.dispatch({
            type: 'BILLING_CREATE_REFERRAL_PREVIEW_START',
            recipientId: e
        }),
        l.tn
            .post({
                url: h.ANM.CREATE_REFERRAL_PREVIEW(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (n) => {
                    u.Z.dispatch({
                        type: 'BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS',
                        recipientId: e,
                        is_eligible: null != n.body && n.body.is_eligible
                    });
                },
                () => {
                    u.Z.dispatch({
                        type: 'BILLING_CREATE_REFERRAL_PREVIEW_FAIL',
                        recipientId: e
                    });
                }
            )
    );
async function S(e) {
    let n = [],
        r = new Map();
    for (let a of e)
        try {
            var i;
            let e = await l.tn.post({
                    url: h.ANM.CREATE_REFERRAL(a),
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
                o = null !== (i = e.body) && void 0 !== i ? i : null;
            null != o && n.push(o), r.set(a, 1);
        } catch (e) {
            p.Z.captureException(e), r.set(a, 2);
        }
    return (
        u.Z.dispatch({
            type: 'CREATE_REFERRALS_SUCCESS',
            userTrialOffers: n
        }),
        r
    );
}
async function A(e) {
    try {
        var n;
        let r = await l.tn.post({
                url: h.ANM.CREATE_REFERRAL(e),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            i = null !== (n = r.body) && void 0 !== n ? n : null;
        return (
            u.Z.dispatch({
                type: 'BILLING_CREATE_REFERRAL_SUCCESS',
                userTrialOffer: i
            }),
            { userTrialOffer: i }
        );
    } catch (e) {
        if ((u.Z.dispatch({ type: 'BILLING_CREATE_REFERRAL_FAIL' }), e.body.code === h.evJ.INVALID_MESSAGE_SEND_USER)) {
            let n = f.Z.getCurrentlySelectedChannelId();
            null != n && c.Z.sendClydeError(n, e.body.code);
        }
    }
}
async function C(e) {
    try {
        var n;
        let r = await l.tn.get({
                url: h.ANM.REFERRAL_OFFER_ID_RESOLVE(e),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            i = null !== (n = r.body) && void 0 !== n ? n : null;
        return (
            u.Z.dispatch({
                type: 'BILLING_REFERRAL_RESOLVE_SUCCESS',
                userTrialOffer: i
            }),
            { userTrialOffer: i }
        );
    } catch (n) {
        u.Z.dispatch({
            type: 'BILLING_REFERRAL_RESOLVE_FAIL',
            userTrialOfferId: e
        });
    }
}
