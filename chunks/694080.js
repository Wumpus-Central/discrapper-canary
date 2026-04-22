"use strict";
n.d(t, { Vn: () => f, _D: () => _, qz: () => E, u1: () => h });
var r = n(562465),
    i = n(554146),
    s = n(73153),
    a = n(826673),
    o = n(594061),
    l = n(954571),
    u = n(723702),
    d = n(728458),
    c = n(652215);
async function _(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { offerId: void 0, paymentGatewayOverride: void 0 },
        _ = arguments.length > 3 ? arguments[3] : void 0,
        f = arguments.length > 4 ? arguments[4] : void 0;
    if (t) {
        s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
        try {
            let t;
            null != e && l.default.track(c.HAw.FETCH_USER_OFFER_STARTED, { call_location: e });
            let { offerId: E, paymentGatewayOverride: h } = n,
                p =
                    void 0 !== h
                        ? h
                        : ((t = null),
                          (0, u.isAndroid)() ? (t = c.kM_.GOOGLE) : (0, u.isIOS)() && (t = c.kM_.APPLE),
                          t),
                m = await r.Bo.post({
                    url: c.Rsh.USER_OFFER,
                    body: null != p || null != E ? { payment_gateway: p, offer_id: E } : {},
                    rejectWithError: !0,
                    retries: null != _ ? _.retries : void 0,
                }),
                g = m.body.user_trial_offer ?? null,
                A = m.body.user_discount ?? null,
                I = m.body.user_discount_offer ?? null;
            if (null != E && null != I && I.discount_id !== E) {
                let e = Error("Returned user discount offer does not match offer ID request parameter");
                throw (d.A.captureException(e, { extra: { offer_id: E, user_discount_offer: I }, ...f }), e);
            }
            return (
                null == g &&
                    (0, a.k8)(i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (0, o.xB)(i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                s.h.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                    userTrialOffer: g,
                    userDiscount: A,
                    userDiscountOffer: I,
                }),
                { userTrialOffer: g, userDiscount: A, userDiscountOffer: I }
            );
        } catch (e) {
            s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
        }
    }
}
async function f() {
    s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
    try {
        let e = (await r.Bo.get({ url: c.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null;
        return (
            s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: e }), { userDiscountOffer: e }
        );
    } catch (e) {
        s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
    }
}
async function E() {
    let e = null;
    try {
        (e = (await r.Bo.post({ url: c.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null),
            null != e && s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: e });
    } catch (e) {}
    return e;
}
function h(e, t) {
    let n = null != e && null == e.expires_at ? e.id : void 0,
        i = null != t && null == t.expires_at ? t.id : void 0;
    if (void 0 !== n || void 0 !== i)
        return r.Bo.post({
            url: c.Rsh.USER_OFFER_ACKNOWLEDGED,
            body: { user_trial_offer_id: n, user_discount_offer_id: i },
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
