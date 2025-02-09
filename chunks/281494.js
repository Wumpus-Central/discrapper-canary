n.d(t, {
    C$: () => v,
    Eo: () => T,
    Fe: () => _,
    Fz: () => p,
    IB: () => b,
    Ve: () => y,
    bq: () => g,
    iF: () => E,
    jy: () => I
}),
    n(47120),
    n(653041);
var i = n(544891),
    r = n(570140),
    a = n(904245),
    s = n(598077),
    o = n(944486),
    l = n(960048),
    u = n(981631);
function c(e, t, n) {
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
let d = 10,
    f = 600000;
var _ = (function (e) {
        return (e[(e.REDEEMED = 1)] = 'REDEEMED'), (e[(e.PENDING = 2)] = 'PENDING'), (e[(e.CONVERTED = 3)] = 'CONVERTED'), e;
    })({}),
    p = (function (e) {
        return (e[(e.SUCCESS = 1)] = 'SUCCESS'), (e[(e.FAIL = 2)] = 'FAIL'), e;
    })({});
class h {
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
        c(this, 'cache', void 0), c(this, 'expiration', void 0), (this.cache = new Map()), (this.expiration = Date.now() + f);
    }
}
let m = new h(),
    g = () => (
        r.Z.dispatch({ type: 'BILLING_GET_REFERRAL_INCENTIVE_STATUS_START' }),
        i.tn
            .get({
                url: u.ANM.GET_REFERRAL_INCENTIVE_ELIGIBILITY,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    r.Z.dispatch({
                        type: 'BILLING_GET_REFERRAL_INCENTIVE_STATUS_SUCCESS',
                        isUserEligibleForIncentive: null != e.body ? e.body.is_eligible_for_incentive : null
                    });
                },
                () => {
                    r.Z.dispatch({ type: 'BILLING_GET_REFERRAL_INCENTIVE_STATUS_FAIL' });
                }
            )
    );
async function E(e, t, n) {
    let r = JSON.stringify({
        index: e,
        searchQuery: t
    });
    if (m.has(r)) return m.get(r);
    let { users: a, next_index: o } = (
            await i.tn.post({
                url: u.ANM.GET_REFERRAL_ELIGIBLE_USERS,
                body: {
                    index: e,
                    limit: null != n ? n : d,
                    search_query: t
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body,
        l = {
            users: a.map((e) => new s.Z(e)),
            nextIndex: o
        };
    return m.set(r, l), l;
}
let v = () => (
        r.Z.dispatch({ type: 'BILLING_REFERRALS_REMAINING_FETCH_START' }),
        i.tn
            .get({
                url: u.ANM.GET_REFERRALS_REMAINING,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    var t, n, i;
                    let a = new Map();
                    if (null != e.body && null != e.body.recipient_status)
                        for (let t in e.body.recipient_status) {
                            let n = e.body.recipient_status[t];
                            a.set(t, n);
                        }
                    r.Z.dispatch({
                        type: 'BILLING_REFERRALS_REMAINING_FETCH_SUCCESS',
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : [],
                        refresh_at: null !== (i = null === (t = e.body) || void 0 === t ? void 0 : t.refresh_at) && void 0 !== i ? i : null,
                        recipient_status: a,
                        has_eligible_friends: e.body.has_eligible_friends,
                        isUserEligibleForIncentive: e.body.is_eligible_for_incentive,
                        isUserQualifiedForIncentive: e.body.is_qualified_for_incentive,
                        userReferralIncentiveState: null === (n = e.body) || void 0 === n ? void 0 : n.referral_incentive_status
                    });
                },
                () => {
                    r.Z.dispatch({ type: 'BILLING_REFERRALS_REMAINING_FETCH_FAIL' });
                }
            )
    ),
    y = (e) => (
        r.Z.dispatch({
            type: 'BILLING_CREATE_REFERRAL_PREVIEW_START',
            recipientId: e
        }),
        i.tn
            .post({
                url: u.ANM.CREATE_REFERRAL_PREVIEW(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (t) => {
                    r.Z.dispatch({
                        type: 'BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS',
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    });
                },
                () => {
                    r.Z.dispatch({
                        type: 'BILLING_CREATE_REFERRAL_PREVIEW_FAIL',
                        recipientId: e
                    });
                }
            )
    );
async function I(e) {
    let t = [],
        n = new Map();
    for (let r of e)
        try {
            var a;
            let e = await i.tn.post({
                    url: u.ANM.CREATE_REFERRAL(r),
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
                s = null !== (a = e.body) && void 0 !== a ? a : null;
            null != s && t.push(s), n.set(r, 1);
        } catch (e) {
            l.Z.captureException(e), n.set(r, 2);
        }
    return (
        r.Z.dispatch({
            type: 'CREATE_REFERRALS_SUCCESS',
            userTrialOffers: t
        }),
        n
    );
}
async function T(e) {
    try {
        var t;
        let n = await i.tn.post({
                url: u.ANM.CREATE_REFERRAL(e),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            a = null !== (t = n.body) && void 0 !== t ? t : null;
        return (
            r.Z.dispatch({
                type: 'BILLING_CREATE_REFERRAL_SUCCESS',
                userTrialOffer: a
            }),
            { userTrialOffer: a }
        );
    } catch (e) {
        if ((r.Z.dispatch({ type: 'BILLING_CREATE_REFERRAL_FAIL' }), e.body.code === u.evJ.INVALID_MESSAGE_SEND_USER)) {
            let t = o.Z.getCurrentlySelectedChannelId();
            null != t && a.Z.sendClydeError(t, e.body.code);
        }
    }
}
async function b(e) {
    try {
        var t;
        let n = await i.tn.get({
                url: u.ANM.REFERRAL_OFFER_ID_RESOLVE(e),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            a = null !== (t = n.body) && void 0 !== t ? t : null;
        return (
            r.Z.dispatch({
                type: 'BILLING_REFERRAL_RESOLVE_SUCCESS',
                userTrialOffer: a
            }),
            { userTrialOffer: a }
        );
    } catch (t) {
        r.Z.dispatch({
            type: 'BILLING_REFERRAL_RESOLVE_FAIL',
            userTrialOfferId: e
        });
    }
}
