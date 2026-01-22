n.d(t, {
    Vn: () => m,
    _D: () => h,
    qz: () => g,
    u1: () => E,
}),
    n(65821);
var r = n(562465),
    i = n(554146),
    a = n(73153),
    s = n(826673),
    o = n(594061),
    l = n(954571),
    c = n(723702),
    u = n(728458),
    d = n(652215);

function f(e, t, n) {
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

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = () => {
    let e = null;
    return (0, c.isAndroid)() ? (e = d.kM_.GOOGLE) : (0, c.isIOS)() && (e = d.kM_.APPLE), e;
};
async function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                      offerId: void 0,
                      paymentGatewayOverride: void 0,
                  },
        c = arguments.length > 3 ? arguments[3] : void 0,
        f = arguments.length > 4 ? arguments[4] : void 0;
    if (t) {
        a.h.dispatch({
            type: "BILLING_USER_OFFER_FETCH_START",
        });
        try {
            var h, m, g;
            null != e &&
                l.default.track(d.HAw.FETCH_USER_OFFER_STARTED, {
                    call_location: e,
                });
            let { offerId: t, paymentGatewayOverride: E } = n,
                b = void 0 !== E ? E : _(),
                y =
                    null != b || null != t
                        ? {
                              payment_gateway: b,
                              offer_id: t,
                          }
                        : {},
                O = await r.Bo.post({
                    url: d.Rsh.USER_OFFER,
                    body: y,
                    rejectWithError: !0,
                    retries: null != c ? c.retries : void 0,
                }),
                A = null != (h = O.body.user_trial_offer) ? h : null,
                v = null != (m = O.body.user_discount) ? m : null,
                S = null != (g = O.body.user_discount_offer) ? g : null;
            if (null != t && null != S && S.discount_id !== t) {
                let e = Error("Returned user discount offer does not match offer ID request parameter");
                throw (
                    (u.A.captureException(
                        e,
                        p(
                            {
                                extra: {
                                    offer_id: t,
                                    user_discount_offer: S,
                                },
                            },
                            f,
                        ),
                    ),
                    e)
                );
            }
            return (
                null == A &&
                    (0, s.k8)(i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (0, o.xB)(i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                a.h.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                    userTrialOffer: A,
                    userDiscount: v,
                    userDiscountOffer: S,
                }),
                {
                    userTrialOffer: A,
                    userDiscount: v,
                    userDiscountOffer: S,
                }
            );
        } catch (e) {
            a.h.dispatch({
                type: "BILLING_USER_OFFER_FETCH_FAIL",
            });
        }
    }
}
async function m() {
    a.h.dispatch({
        type: "BILLING_USER_OFFER_FETCH_START",
    });
    try {
        var e;
        let t =
            null !=
            (e = (
                await r.Bo.get({
                    url: d.Rsh.CHURN_USER_OFFER,
                    rejectWithError: !0,
                })
            ).body.offer)
                ? e
                : null;
        return (
            a.h.dispatch({
                type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                userDiscountOffer: t,
            }),
            {
                userDiscountOffer: t,
            }
        );
    } catch (e) {
        a.h.dispatch({
            type: "BILLING_USER_OFFER_FETCH_FAIL",
        });
    }
}
async function g() {
    let e = null;
    try {
        var t;
        (e =
            null !=
            (t = (
                await r.Bo.post({
                    url: d.Rsh.CHURN_USER_OFFER,
                    rejectWithError: !0,
                })
            ).body.offer)
                ? t
                : null),
            null != e &&
                a.h.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                    userDiscountOffer: e,
                });
    } catch (e) {}
    return e;
}

function E(e, t) {
    let n = null != e && null == e.expires_at ? e.id : void 0,
        i = null != t && null == t.expires_at ? t.id : void 0;
    if (void 0 !== n || void 0 !== i)
        return r.Bo.post({
            url: d.Rsh.USER_OFFER_ACKNOWLEDGED,
            body: {
                user_trial_offer_id: n,
                user_discount_offer_id: i,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then((e) => {
                var t, n, r;
                a.h.dispatch({
                    type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                    userTrialOffer: null != (t = e.body.user_trial_offer) ? t : null,
                    userDiscount: null != (n = e.body.user_discount) ? n : null,
                    userDiscountOffer: null != (r = e.body.user_discount_offer) ? r : null,
                });
            })
            .catch((e) => {
                404 === e.status &&
                    a.h.dispatch({
                        type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                        userTrialOffer: null,
                        userDiscount: null,
                        userDiscountOffer: null,
                    });
            });
}
