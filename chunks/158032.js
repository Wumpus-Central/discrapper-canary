"use strict";
n.d(t, { B1: () => c, ET: () => h, Ir: () => d, U: () => _, r6: () => f, uK: () => p });
var r = n(284009),
    i = n.n(r),
    a = n(73153),
    s = n(501957),
    o = n(927578),
    l = n(384904),
    u = n(652215);
async function c(e) {
    let {
        planId: t,
        currency: n,
        paymentSource: r,
        trialId: i,
        code: s,
        metadata: o,
        referralCode: u,
        loadId: c,
        expectedInvoicePrice: d,
        expectedRenewalPrice: _,
    } = e;
    a.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_START" });
    try {
        let e = await l.Ky({
            items: [{ planId: t, quantity: 1 }],
            paymentSource: r,
            trialId: i,
            code: s,
            currency: n,
            metadata: o,
            referralCode: u,
            loadId: c,
            expectedInvoicePrice: d,
            expectedRenewalPrice: _,
        });
        return (
            null != e.subscription &&
                a.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", subscription: e.subscription }),
            e
        );
    } catch (e) {
        throw (a.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", error: e }), e);
    }
}
async function d(e, t, n, r, c, d) {
    try {
        let _ = (0, o.EL)(e);
        i()(_, "Expected existing premium plan");
        let f = (0, o.GX)(e, _.planId),
            p = void 0 !== n ? n.toLowerCase() : e.currency;
        (0, s.U)(e, t, d),
            await l.nV(
                e,
                { status: u.Dmq.ACTIVE, paymentSource: r, items: f, currency: n },
                { amount: 0, currency: p },
                (0, o.UC)(f, p, r?.id),
                t,
                c,
                d,
            ),
            a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
async function _(e, t, n) {
    try {
        await l.nV(
            e,
            { status: u.Dmq.ACTIVE },
            { amount: 0, currency: e.currency },
            (0, o.UC)(e.items, e.currency, e.paymentSourceId),
            t,
            n,
        );
    } catch (e) {
        throw e;
    }
}
async function f(e, t, n, r, i) {
    try {
        await l.r6(e, t, n, r, i), a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
async function p(e, t, n, r, i, s) {
    try {
        await l.uK(e, t, n, r, i, s), a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
function h() {
    a.h.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
}
