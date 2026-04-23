n.d(t, { B1: () => c, ET: () => m, Ir: () => d, U: () => p, r6: () => h, uK: () => C });
var i = n(284009),
    r = n.n(i),
    l = n(228366),
    s = n(323082),
    a = n(501957),
    u = n(927578),
    o = n(652215);
async function c(e) {
    let {
        planId: t,
        currency: n,
        paymentSource: i,
        trialId: r,
        code: a,
        metadata: u,
        referralCode: o,
        loadId: c,
        expectedInvoicePrice: d,
        expectedRenewalPrice: p,
    } = e;
    l.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_START" });
    try {
        let e = await s.Ky({
            items: [{ planId: t, quantity: 1 }],
            paymentSource: i,
            trialId: r,
            code: a,
            currency: n,
            metadata: u,
            referralCode: o,
            loadId: c,
            expectedInvoicePrice: d,
            expectedRenewalPrice: p,
        });
        return (
            null != e.subscription &&
                l.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", subscription: e.subscription }),
            e
        );
    } catch (e) {
        throw (l.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", error: e }), e);
    }
}
async function d(e, t, n, i, c, d) {
    try {
        let p = (0, u.EL)(e);
        r()(p, "Expected existing premium plan");
        let h = (0, u.GX)(e, p.planId),
            C = void 0 !== n ? n.toLowerCase() : e.currency;
        (0, a.U)(e, t, d),
            await s.nV(
                e,
                { status: o.Dmq.ACTIVE, paymentSource: i, items: h, currency: n },
                { amount: 0, currency: C },
                (0, u.UC)(h, C, i?.id),
                t,
                c,
                d,
            ),
            l.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (l.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
async function p(e, t, n) {
    try {
        await s.nV(
            e,
            { status: o.Dmq.ACTIVE },
            { amount: 0, currency: e.currency },
            (0, u.UC)(e.items, e.currency, e.paymentSourceId),
            t,
            n,
        );
    } catch (e) {
        throw e;
    }
}
async function h(e, t, n, i, r) {
    try {
        await s.r6(e, t, n, i, r), l.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (l.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
async function C(e, t, n, i, r, a) {
    try {
        await s.uK(e, t, n, i, r, a), l.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (l.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
    }
}
function m() {
    l.h.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
}
