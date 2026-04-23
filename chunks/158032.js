"use strict";
n.d(t, { B1: () => c, ET: () => h, Ir: () => d, U: () => _, r6: () => f, uK: () => p });
var r = n(284009),
    i = n.n(r),
    s = n(73153),
    a = n(323082),
    o = n(501957),
    l = n(927578),
    u = n(652215);
async function c(e) {
    let {
        planId: t,
        currency: n,
        paymentSource: r,
        trialId: i,
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
            paymentSource: r,
            trialId: i,
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
async function d(e, t, n, r, c, d) {
    try {
        let _ = (0, l.EL)(e);
        i()(_, "Expected existing premium plan");
        let f = (0, l.GX)(e, _.planId),
            p = void 0 !== n ? n.toLowerCase() : e.currency;
        (0, o.U)(e, t, d),
            await a.nV(
                e,
                { status: u.Dmq.ACTIVE, paymentSource: r, items: f, currency: n },
                { amount: 0, currency: p },
                (0, l.UC)(f, p, r?.id),
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
async function f(e, t, n, r, i) {
    try {
        await a.r6(e, t, n, r, i), s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
async function p(e, t, n, r, i, o) {
    try {
        await a.uK(e, t, n, r, i, o), s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
function h() {
    s.h.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
}
