"use strict";
n.d(t, { Vn: () => f, u1: () => T, sq: () => m, qz: () => p, _D: () => I });
var i = n(636537),
    r = n(554146),
    a = n(228366),
    s = n(826673),
    l = n(669316),
    o = n(959165),
    d = n(594061),
    c = n(354670),
    u = n(174459),
    _ = n(723702),
    E = n(38405);
n(202541);
var A = n(652215);
function h() {
    let e = null;
    return (0, _.isAndroid)() ? (e = A.kM_.GOOGLE) : (0, _.isIOS)() && (e = A.kM_.APPLE), e;
}
async function I(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { offerId: void 0, paymentGatewayOverride: void 0 },
        c = arguments.length > 3 ? arguments[3] : void 0,
        _ = arguments.length > 4 ? arguments[4] : void 0;
    if (t) {
        a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
        try {
            null != e && u.default.track(A.HAw.FETCH_USER_OFFER_STARTED, { call_location: e });
            let { offerId: t, paymentGatewayOverride: I } = n,
                f = void 0 !== I ? I : h(),
                p = await i.Bo.post({
                    url: A.Rsh.USER_OFFER,
                    body:
                        null != f || null != t
                            ? { payment_gateway: f, offer_id: t, allow_triggers: !0 }
                            : { allow_triggers: !0 },
                    rejectWithError: !0,
                    retries: null != c ? c.retries : void 0,
                }),
                T = p.body.user_trial_offer ?? null,
                m = p.body.user_discount_offer ?? null;
            if (null != t && null != m && m.discount_id !== t) {
                let e = Error("Returned user discount offer does not match offer ID request parameter");
                throw (E.A.captureException(e, { extra: { offer_id: t, user_discount_offer: m }, ..._ }), e);
            }
            return (
                null == T &&
                    (0, s.k8)(r.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (0, d.xB)(r.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                a.h.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                    userTrialOffer: null == T ? null : o.A.createFromServer(T),
                    userDiscountOffer: null != m ? l.A.createFromServer(m) : null,
                    shouldTriggerOffer: p.body.should_trigger_offer ?? null,
                }),
                !0
            );
        } catch (e) {
            a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
        }
    }
    return !1;
}
async function f() {
    a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
    try {
        let e = (await i.Bo.get({ url: A.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null,
            t = null != e ? l.A.createFromServer(e) : null;
        return (
            a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: t }), { userDiscountOffer: t }
        );
    } catch (e) {
        a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
    }
}
async function p() {
    let e = null;
    try {
        let t = (await i.Bo.post({ url: A.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null;
        null != t &&
            ((e = l.A.createFromServer(t)),
            a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: e }));
    } catch (e) {}
    return e;
}
function T(e, t) {
    let n = null == e || e.hasAcknowledged ? void 0 : e.id,
        r = null == t || t.hasAcknowledged() ? void 0 : t.id;
    if (void 0 !== n || void 0 !== r)
        return i.Bo.post({
            url: A.Rsh.USER_OFFER_ACKNOWLEDGED,
            body: { user_trial_offer_id: n, user_discount_offer_id: r },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then((e) => {
                let t = e.body.user_discount ?? null,
                    n = e.body.user_discount_offer ?? null,
                    i = e.body.user_trial_offer ?? null;
                a.h.dispatch({
                    type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                    userTrialOffer: null != i ? o.A.createFromServer(i) : null,
                    userDiscount: null != t ? l.A.createFromServer(t) : null,
                    userDiscountOffer: null != n ? l.A.createFromServer(n) : null,
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
function m(e, t, n) {
    if (!c.A.canTriggerUserOffer(e)) return;
    a.h.dispatch({ type: "BILLING_USER_OFFER_TRIGGER_ATTEMPT", triggerType: e });
    let r = n?.(),
        s = {
            payment_gateway: h(),
            trigger_type: e,
            trigger_location_stack: t,
            trigger_metadata: JSON.stringify(r),
            trigger_uptime_app: c.A.getUptimeForTrigger(),
        };
    i.Bo.post({ url: A.Rsh.USER_OFFER_TRIGGER, body: s, rejectWithError: !0 }).then((t) => {
        let n = t.body,
            i = n.offer?.user_trial_offer,
            r = n.offer?.user_discount_offer;
        a.h.dispatch({
            type: "BILLING_USER_OFFER_TRIGGER_SUCCESS",
            triggerType: e,
            retryAfter: n.retry_after,
            triggerSuccess: n.trigger_success,
            userTrialOffer: null != i ? o.A.createFromServer(i) : null,
            userDiscountOffer: null != r ? l.A.createFromServer(r) : null,
        });
    });
}
