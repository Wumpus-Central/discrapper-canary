"use strict";
n.d(t, { Vn: () => E, _D: () => c, qz: () => h, u1: () => m });
var i = n(636537),
    r = n(554146),
    s = n(228366),
    a = n(826673),
    o = n(594061),
    l = n(954571),
    d = n(723702),
    _ = n(38405),
    u = n(652215);
async function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { offerId: void 0, paymentGatewayOverride: void 0 },
        c = arguments.length > 3 ? arguments[3] : void 0,
        E = arguments.length > 4 ? arguments[4] : void 0;
    if (t) {
        s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
        try {
            let t;
            null != e && l.default.track(u.HAw.FETCH_USER_OFFER_STARTED, { call_location: e });
            let { offerId: h, paymentGatewayOverride: m } = n,
                f =
                    void 0 !== m
                        ? m
                        : ((t = null),
                          (0, d.isAndroid)() ? (t = u.kM_.GOOGLE) : (0, d.isIOS)() && (t = u.kM_.APPLE),
                          t),
                g = await i.Bo.post({
                    url: u.Rsh.USER_OFFER,
                    body: null != f || null != h ? { payment_gateway: f, offer_id: h } : {},
                    rejectWithError: !0,
                    retries: null != c ? c.retries : void 0,
                }),
                p = g.body.user_trial_offer ?? null,
                A = g.body.user_discount ?? null,
                I = g.body.user_discount_offer ?? null;
            if (null != h && null != I && I.discount_id !== h) {
                let e = Error("Returned user discount offer does not match offer ID request parameter");
                throw (_.A.captureException(e, { extra: { offer_id: h, user_discount_offer: I }, ...E }), e);
            }
            return (
                null == p &&
                    (0, a.k8)(r.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (0, o.xB)(r.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                s.h.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                    userTrialOffer: p,
                    userDiscount: A,
                    userDiscountOffer: I,
                }),
                { userTrialOffer: p, userDiscount: A, userDiscountOffer: I }
            );
        } catch (e) {
            s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
        }
    }
}
async function E() {
    s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
    try {
        let e = (await i.Bo.get({ url: u.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null;
        return (
            s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: e }), { userDiscountOffer: e }
        );
    } catch (e) {
        s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
    }
}
async function h() {
    let e = null;
    try {
        (e = (await i.Bo.post({ url: u.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null),
            null != e && s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: e });
    } catch (e) {}
    return e;
}
function m(e, t) {
    let n = null != e && null == e.expires_at ? e.id : void 0,
        r = null != t && null == t.expires_at ? t.id : void 0;
    if (void 0 !== n || void 0 !== r)
        return i.Bo.post({
            url: u.Rsh.USER_OFFER_ACKNOWLEDGED,
            body: { user_trial_offer_id: n, user_discount_offer_id: r },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then((e) => {
                s.h.dispatch({
                    type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                    userTrialOffer: e.body.user_trial_offer ?? null,
                    userDiscount: e.body.user_discount ?? null,
                    userDiscountOffer: e.body.user_discount_offer ?? null,
                });
            })
            .catch((e) => {
                404 === e.status &&
                    s.h.dispatch({
                        type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                        userTrialOffer: null,
                        userDiscount: null,
                        userDiscountOffer: null,
                    });
            });
}
