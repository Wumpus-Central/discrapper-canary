t.d(r, { Vn: () => g, u1: () => y, sq: () => F, qz: () => R, _D: () => h });
var l = t(636537),
    i = t(554146),
    n = t(73153),
    u = t(826673),
    o = t(669316),
    _ = t(959165),
    s = t(594061),
    a = t(354670),
    f = t(174459),
    c = t(723702),
    d = t(38405);
t(202541);
var p = t(652215);
function E() {
    let e = null;
    return ((0, c.isAndroid)() ? (e = p.kM_.GOOGLE) : (0, c.isIOS)() && (e = p.kM_.APPLE), e);
}
async function h(e) {
    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        t =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { offerId: void 0, paymentGatewayOverride: void 0 },
        a = arguments.length > 3 ? arguments[3] : void 0,
        c = arguments.length > 4 ? arguments[4] : void 0;
    if (r) {
        n.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
        try {
            null != e && f.default.track(p.HAw.FETCH_USER_OFFER_STARTED, { call_location: e });
            let { offerId: r, paymentGatewayOverride: h } = t,
                g = void 0 !== h ? h : E(),
                R = await l.Bo.post({
                    url: p.Rsh.USER_OFFER,
                    body:
                        null != g || null != r
                            ? { payment_gateway: g, offer_id: r, allow_triggers: !0 }
                            : { allow_triggers: !0 },
                    rejectWithError: !0,
                    retries: null != a ? a.retries : void 0,
                }),
                y = R.body.user_trial_offer ?? null,
                F = R.body.user_discount_offer ?? null;
            if (null != r && null != F && F.discount_id !== r) {
                let e = Error("Returned user discount offer does not match offer ID request parameter");
                throw (d.A.captureException(e, { extra: { offer_id: r, user_discount_offer: F }, ...c }), e);
            }
            return (
                null == y &&
                    (0, u.k8)(i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (0, s.xB)(i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                n.h.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                    userTrialOffer: null == y ? null : _.A.createFromServer(y),
                    userDiscountOffer: null != F ? o.A.createFromServer(F) : null,
                    shouldTriggerOffer: R.body.should_trigger_offer ?? null,
                }),
                !0
            );
        } catch (e) {
            n.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
        }
    }
    return !1;
}
async function g() {
    n.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
    try {
        let e = (await l.Bo.get({ url: p.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null,
            r = null != e ? o.A.createFromServer(e) : null;
        return (
            n.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: r }), { userDiscountOffer: r }
        );
    } catch (e) {
        n.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
    }
}
async function R() {
    let e = null;
    try {
        let r = (await l.Bo.post({ url: p.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null;
        null != r &&
            ((e = o.A.createFromServer(r)),
            n.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: e }));
    } catch (e) {}
    return e;
}
function y(e, r) {
    let t = null == e || e.hasAcknowledged ? void 0 : e.id,
        i = null == r || r.hasAcknowledged() ? void 0 : r.id;
    if (void 0 !== t || void 0 !== i)
        return l.Bo.post({
            url: p.Rsh.USER_OFFER_ACKNOWLEDGED,
            body: { user_trial_offer_id: t, user_discount_offer_id: i },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then((e) => {
                let r = e.body.user_discount ?? null,
                    t = e.body.user_discount_offer ?? null,
                    l = e.body.user_trial_offer ?? null;
                n.h.dispatch({
                    type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                    userTrialOffer: null != l ? _.A.createFromServer(l) : null,
                    userDiscount: null != r ? o.A.createFromServer(r) : null,
                    userDiscountOffer: null != t ? o.A.createFromServer(t) : null,
                });
            })
            .catch((e) => {
                404 === e.status &&
                    n.h.dispatch({
                        type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                        userTrialOffer: null,
                        userDiscount: null,
                        userDiscountOffer: null,
                    });
            });
}
function F(e, r, t) {
    if (!a.A.canTriggerUserOffer(e)) return;
    n.h.dispatch({ type: "BILLING_USER_OFFER_TRIGGER_ATTEMPT", triggerType: e });
    let i = t?.(),
        u = {
            payment_gateway: E(),
            trigger_type: e,
            trigger_location_stack: r,
            trigger_metadata: JSON.stringify(i),
            trigger_uptime_app: a.A.getUptimeForTrigger(),
        };
    l.Bo.post({ url: p.Rsh.USER_OFFER_TRIGGER, body: u, rejectWithError: !0 }).then((r) => {
        let t = r.body,
            l = t.offer?.user_trial_offer,
            i = t.offer?.user_discount_offer;
        n.h.dispatch({
            type: "BILLING_USER_OFFER_TRIGGER_SUCCESS",
            triggerType: e,
            retryAfter: t.retry_after,
            triggerSuccess: t.trigger_success,
            userTrialOffer: null != l ? _.A.createFromServer(l) : null,
            userDiscountOffer: null != i ? o.A.createFromServer(i) : null,
        });
    });
}
