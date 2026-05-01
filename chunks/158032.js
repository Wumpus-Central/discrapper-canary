r.d(t, { B1: () => l, ET: () => _, Ir: () => d, U: () => h, r6: () => p, uK: () => y });
var i = r(284009),
    n = r.n(i),
    s = r(228366),
    a = r(323082),
    o = r(501957),
    c = r(927578),
    u = r(652215);
async function l(e) {
    let {
        planId: t,
        currency: r,
        paymentSource: i,
        trialId: n,
        code: o,
        metadata: c,
        referralCode: u,
        loadId: l,
        expectedInvoicePrice: d,
        expectedRenewalPrice: h,
    } = e;
    s.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_START" });
    try {
        let e = await a.Ky({
            items: [{ planId: t, quantity: 1 }],
            paymentSource: i,
            trialId: n,
            code: o,
            currency: r,
            metadata: c,
            referralCode: u,
            loadId: l,
            expectedInvoicePrice: d,
            expectedRenewalPrice: h,
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
async function d(e, t, r, i, l, d) {
    try {
        let h = (0, c.EL)(e);
        n()(h, "Expected existing premium plan");
        let p = (0, c.GX)(e, h.planId),
            y = void 0 !== r ? r.toLowerCase() : e.currency;
        (0, o.U)(e, t, d),
            await a.nV(
                e,
                { status: u.Dmq.ACTIVE, paymentSource: i, items: p, currency: r },
                { amount: 0, currency: y },
                (0, c.UC)(p, y, i?.id),
                t,
                l,
                d,
            ),
            s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
async function h(e, t, r) {
    try {
        await a.nV(
            e,
            { status: u.Dmq.ACTIVE },
            { amount: 0, currency: e.currency },
            (0, c.UC)(e.items, e.currency, e.paymentSourceId),
            t,
            r,
        );
    } catch (e) {
        throw e;
    }
}
async function p(e, t, r, i, n) {
    try {
        await a.r6(e, t, r, i, n), s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
async function y(e, t, r, i, n, o) {
    try {
        await a.uK(e, t, r, i, n, o), s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
function _() {
    s.h.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
}
