n.d(t, {
    C$: () => v,
    Eo: () => O,
    Fe: () => p,
    Fz: () => _,
    IB: () => S,
    Ve: () => b,
    bq: () => g,
    iF: () => E,
    jy: () => y
}),
    n(47120),
    n(26686),
    n(653041);
var r = n(544891),
    i = n(570140),
    o = n(904245),
    a = n(598077),
    s = n(944486),
    l = n(960048),
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
let d = 10,
    f = 600000;
var p = (function (e) {
        return (e[(e.REDEEMED = 1)] = 'REDEEMED'), (e[(e.PENDING = 2)] = 'PENDING'), (e[(e.CONVERTED = 3)] = 'CONVERTED'), e;
    })({}),
    _ = (function (e) {
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
        u(this, 'cache', void 0), u(this, 'expiration', void 0), (this.cache = new Map()), (this.expiration = Date.now() + f);
    }
}
let m = new h(),
    g = () => (
        i.Z.dispatch({ type: 'BILLING_GET_REFERRAL_INCENTIVE_STATUS_START' }),
        r.tn
            .get({
                url: c.ANM.GET_REFERRAL_INCENTIVE_ELIGIBILITY,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    i.Z.dispatch({
                        type: 'BILLING_GET_REFERRAL_INCENTIVE_STATUS_SUCCESS',
                        isUserEligibleForIncentive: null != e.body ? e.body.is_eligible_for_incentive : null
                    });
                },
                () => {
                    i.Z.dispatch({ type: 'BILLING_GET_REFERRAL_INCENTIVE_STATUS_FAIL' });
                }
            )
    );
async function E(e, t, n) {
    let i = JSON.stringify({
        index: e,
        searchQuery: t
    });
    if (m.has(i)) return m.get(i);
    let { users: o, next_index: s } = (
            await r.tn.post({
                url: c.ANM.GET_REFERRAL_ELIGIBLE_USERS,
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
            users: o.map((e) => new a.Z(e)),
            nextIndex: s
        };
    return m.set(i, l), l;
}
let v = () => (
        i.Z.dispatch({ type: 'BILLING_REFERRALS_REMAINING_FETCH_START' }),
        r.tn
            .get({
                url: c.ANM.GET_REFERRALS_REMAINING,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    var t, n, r;
                    let o = new Map();
                    if (null != e.body && null != e.body.recipient_status)
                        for (let t in e.body.recipient_status) {
                            let n = e.body.recipient_status[t];
                            o.set(t, n);
                        }
                    i.Z.dispatch({
                        type: 'BILLING_REFERRALS_REMAINING_FETCH_SUCCESS',
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : [],
                        refresh_at: null !== (r = null === (t = e.body) || void 0 === t ? void 0 : t.refresh_at) && void 0 !== r ? r : null,
                        recipient_status: o,
                        has_eligible_friends: e.body.has_eligible_friends,
                        isUserEligibleForIncentive: e.body.is_eligible_for_incentive,
                        isUserQualifiedForIncentive: e.body.is_qualified_for_incentive,
                        userReferralIncentiveState: null === (n = e.body) || void 0 === n ? void 0 : n.referral_incentive_status
                    });
                },
                () => {
                    i.Z.dispatch({ type: 'BILLING_REFERRALS_REMAINING_FETCH_FAIL' });
                }
            )
    ),
    b = (e) => (
        i.Z.dispatch({
            type: 'BILLING_CREATE_REFERRAL_PREVIEW_START',
            recipientId: e
        }),
        r.tn
            .post({
                url: c.ANM.CREATE_REFERRAL_PREVIEW(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (t) => {
                    i.Z.dispatch({
                        type: 'BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS',
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    });
                },
                () => {
                    i.Z.dispatch({
                        type: 'BILLING_CREATE_REFERRAL_PREVIEW_FAIL',
                        recipientId: e
                    });
                }
            )
    );
async function y(e) {
    let t = [],
        n = new Map();
    for (let i of e)
        try {
            var o;
            let e = await r.tn.post({
                    url: c.ANM.CREATE_REFERRAL(i),
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
                a = null !== (o = e.body) && void 0 !== o ? o : null;
            null != a && t.push(a), n.set(i, 1);
        } catch (e) {
            l.Z.captureException(e), n.set(i, 2);
        }
    return (
        i.Z.dispatch({
            type: 'CREATE_REFERRALS_SUCCESS',
            userTrialOffers: t
        }),
        n
    );
}
async function O(e) {
    try {
        var t;
        let n = await r.tn.post({
                url: c.ANM.CREATE_REFERRAL(e),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            o = null !== (t = n.body) && void 0 !== t ? t : null;
        return (
            i.Z.dispatch({
                type: 'BILLING_CREATE_REFERRAL_SUCCESS',
                userTrialOffer: o
            }),
            { userTrialOffer: o }
        );
    } catch (e) {
        if ((i.Z.dispatch({ type: 'BILLING_CREATE_REFERRAL_FAIL' }), e.body.code === c.evJ.INVALID_MESSAGE_SEND_USER)) {
            let t = s.Z.getCurrentlySelectedChannelId();
            null != t && o.Z.sendClydeError(t, e.body.code);
        }
    }
}
async function S(e) {
    try {
        var t;
        let n = await r.tn.get({
                url: c.ANM.REFERRAL_OFFER_ID_RESOLVE(e),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            o = null !== (t = n.body) && void 0 !== t ? t : null;
        return (
            i.Z.dispatch({
                type: 'BILLING_REFERRAL_RESOLVE_SUCCESS',
                userTrialOffer: o
            }),
            { userTrialOffer: o }
        );
    } catch (t) {
        i.Z.dispatch({
            type: 'BILLING_REFERRAL_RESOLVE_FAIL',
            userTrialOfferId: e
        });
    }
}
