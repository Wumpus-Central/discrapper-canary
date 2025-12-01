n.d(t, {
    Ld: () => u,
    O5: () => d,
    fG: () => p,
    fw: () => m,
    tq: () => _,
    v4: () => f,
});
var r = n(512722),
    i = n.n(r),
    a = n(570140),
    o = n(323321),
    s = n(74538),
    l = n(355467),
    c = n(981631);
async function u(e) {
    let {
        planId: t,
        currency: n,
        paymentSource: r,
        trialId: i,
        code: o,
        metadata: s,
        referralCode: c,
        loadId: u,
        expectedInvoicePrice: d,
        expectedRenewalPrice: f,
    } = e;
    a.Z.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_START" });
    try {
        let e = await l.XW({
            items: [
                {
                    planId: t,
                    quantity: 1,
                },
            ],
            paymentSource: r,
            trialId: i,
            code: o,
            currency: n,
            metadata: s,
            referralCode: c,
            loadId: u,
            expectedInvoicePrice: d,
            expectedRenewalPrice: f,
        });
        return (
            null != e.subscription &&
                a.Z.dispatch({
                    type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
                    subscription: e.subscription,
                }),
            e
        );
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
                error: e,
            }),
            e)
        );
    }
}
async function d(e, t, n, r, u, d) {
    try {
        let f = (0, s.Af)(e);
        i()(f, "Expected existing premium plan");
        let p = (0, s.XK)(e, f.planId),
            _ = void 0 !== n ? n.toLowerCase() : e.currency;
        (0, o.V)(e, t, d),
            await l.Mg(
                e,
                {
                    status: c.O0b.ACTIVE,
                    paymentSource: r,
                    items: p,
                    currency: n,
                },
                {
                    amount: 0,
                    currency: _,
                },
                (0, s.UX)(p, _, null == r ? void 0 : r.id),
                t,
                u,
                d,
            ),
            a.Z.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: e,
            }),
            e)
        );
    }
}
async function f(e, t, n) {
    try {
        await l.Mg(
            e,
            { status: c.O0b.ACTIVE },
            {
                amount: 0,
                currency: e.currency,
            },
            (0, s.UX)(e.items, e.currency, e.paymentSourceId),
            t,
            n,
        );
    } catch (e) {
        throw e;
    }
}
async function p(e, t, n, r, i) {
    try {
        await l.fG(e, t, n, r, i), a.Z.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: e,
            }),
            e)
        );
    }
}
async function _(e, t, n, r, i, o) {
    try {
        await l.tq(e, t, n, r, i, o), a.Z.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: e,
            }),
            e)
        );
    }
}
function m() {
    a.Z.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
}
