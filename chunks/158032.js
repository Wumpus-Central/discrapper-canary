"use strict";
n.d(t, { B1: () => c, ET: () => h, Ir: () => u, U: () => _, r6: () => E, uK: () => A });
var i = n(284009),
    r = n.n(i),
    a = n(228366),
    s = n(277984),
    l = n(501957),
    o = n(158045),
    d = n(652215);
async function c(e) {
    let {
        planId: t,
        currency: n,
        paymentSource: i,
        trialId: r,
        code: l,
        metadata: o,
        referralCode: d,
        loadId: c,
        expectedInvoicePrice: u,
        expectedRenewalPrice: _,
    } = e;
    a.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_START" });
    try {
        let e = await s.Ky({
            items: [{ planId: t, quantity: 1 }],
            paymentSource: i,
            trialId: r,
            code: l,
            currency: n,
            metadata: o,
            referralCode: d,
            loadId: c,
            expectedInvoicePrice: u,
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
async function u(e, t, n, i, c, u) {
    try {
        let _ = (0, o.EL)(e);
        r()(null != _, "Expected existing premium plan");
        let E = (0, o.GX)(e, _.planId),
            A = void 0 !== n ? n.toLowerCase() : e.currency;
        (0, l.U)(e, t, u),
            await s.nV(
                e,
                { status: d.Dmq.ACTIVE, paymentSource: i, items: E, currency: n },
                { amount: 0, currency: A },
                (0, o.UC)(E, A, i?.id),
                t,
                c,
                u,
            ),
            a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
async function _(e, t, n) {
    try {
        await s.nV(
            e,
            { status: d.Dmq.ACTIVE },
            { amount: 0, currency: e.currency },
            (0, o.UC)(e.items, e.currency, e.paymentSourceId),
            t,
            n,
        );
    } catch (e) {
        throw e;
    }
}
async function E(e, t, n, i, r) {
    try {
        await s.r6(e, t, n, i, r), a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
async function A(e, t, n, i, r) {
    try {
        await s.uK(e, t, n, i, r), a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
function h() {
    a.h.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
}
