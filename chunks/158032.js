"use strict";
n.d(t, { B1: () => c, ET: () => p, Ir: () => d, U: () => _, r6: () => f, uK: () => h });
var i = n(284009),
    r = n.n(i),
    s = n(228366),
    a = n(753390),
    o = n(501957),
    l = n(428262),
    u = n(652215);
async function c(e) {
    let {
        planId: t,
        currency: n,
        paymentSource: i,
        trialId: r,
        code: o,
        metadata: l,
        referralCode: u,
        loadId: c,
        expectedInvoicePrice: d,
        expectedRenewalPrice: _,
    } = e;
    s.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_START" });
    try {
        let e = await a.Ky({
            items: [{ planId: t, quantity: 1 }],
            paymentSource: i,
            trialId: r,
            code: o,
            currency: n,
            metadata: l,
            referralCode: u,
            loadId: c,
            expectedInvoicePrice: d,
            expectedRenewalPrice: _,
        });
        return (
            null != e.subscription &&
                s.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", subscription: e.subscription }),
            e
        );
    } catch (e) {
        throw (s.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", error: e }), e);
    }
}
async function d(e, t, n, i, c, d) {
    try {
        let _ = (0, l.EL)(e);
        r()(_, "Expected existing premium plan");
        let f = (0, l.GX)(e, _.planId),
            h = void 0 !== n ? n.toLowerCase() : e.currency;
        (0, o.U)(e, t, d),
            await a.nV(
                e,
                { status: u.Dmq.ACTIVE, paymentSource: i, items: f, currency: n },
                { amount: 0, currency: h },
                (0, l.UC)(f, h, i?.id),
                t,
                c,
                d,
            ),
            s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
async function _(e, t, n) {
    try {
        await a.nV(
            e,
            { status: u.Dmq.ACTIVE },
            { amount: 0, currency: e.currency },
            (0, l.UC)(e.items, e.currency, e.paymentSourceId),
            t,
            n,
        );
    } catch (e) {
        throw e;
    }
}
async function f(e, t, n, i, r) {
    try {
        await a.r6(e, t, n, i, r), s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
async function h(e, t, n, i, r) {
    try {
        await a.uK(e, t, n, i, r), s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
function p() {
    s.h.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
}
