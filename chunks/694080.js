"use strict";
n.d(t, { Vn: () => p, _D: () => f, qz: () => h, u1: () => m });
var r = n(562465),
    i = n(554146),
    a = n(73153),
    s = n(826673),
    o = n(594061),
    l = n(954571),
    u = n(723702),
    c = n(728458),
    d = n(652215);
let _ = () => {
    let e = null;
    return (0, u.isAndroid)() ? (e = d.kM_.GOOGLE) : (0, u.isIOS)() && (e = d.kM_.APPLE), e;
};
async function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { offerId: void 0, paymentGatewayOverride: void 0 },
        u = arguments.length > 3 ? arguments[3] : void 0,
        f = arguments.length > 4 ? arguments[4] : void 0;
    if (t) {
        a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
        try {
            null != e && l.default.track(d.HAw.FETCH_USER_OFFER_STARTED, { call_location: e });
            let { offerId: t, paymentGatewayOverride: p } = n,
                h = void 0 !== p ? p : _(),
                m = null != h || null != t ? { payment_gateway: h, offer_id: t } : {},
                g = await r.Bo.post({
                    url: d.Rsh.USER_OFFER,
                    body: m,
                    rejectWithError: !0,
                    retries: null != u ? u.retries : void 0,
                }),
                E = g.body.user_trial_offer ?? null,
                A = g.body.user_discount ?? null,
                I = g.body.user_discount_offer ?? null;
            if (null != t && null != I && I.discount_id !== t) {
                let e = Error("Returned user discount offer does not match offer ID request parameter");
                throw (c.A.captureException(e, { extra: { offer_id: t, user_discount_offer: I }, ...f }), e);
            }
            return (
                null == E &&
                    (0, s.k8)(i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (0, o.xB)(i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                a.h.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                    userTrialOffer: E,
                    userDiscount: A,
                    userDiscountOffer: I,
                }),
                { userTrialOffer: E, userDiscount: A, userDiscountOffer: I }
            );
        } catch (e) {
            a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
        }
    }
}
async function p() {
    a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
    try {
        let e = (await r.Bo.get({ url: d.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null;
        return (
            a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: e }), { userDiscountOffer: e }
        );
    } catch (e) {
        a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
    }
}
async function h() {
    let e = null;
    try {
        (e = (await r.Bo.post({ url: d.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null),
            null != e && a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: e });
    } catch (e) {}
    return e;
}
function m(e, t) {
    let n = null != e && null == e.expires_at ? e.id : void 0,
        i = null != t && null == t.expires_at ? t.id : void 0;
    if (void 0 !== n || void 0 !== i)
        return r.Bo.post({
            url: d.Rsh.USER_OFFER_ACKNOWLEDGED,
            body: { user_trial_offer_id: n, user_discount_offer_id: i },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then((e) => {
                a.h.dispatch({
                    type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                    userTrialOffer: e.body.user_trial_offer ?? null,
                    userDiscount: e.body.user_discount ?? null,
                    userDiscountOffer: e.body.user_discount_offer ?? null,
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
