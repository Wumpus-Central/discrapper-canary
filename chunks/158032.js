n.d(t, {
    B1: () => u,
    ET: () => h,
    Ir: () => d,
    U: () => f,
    r6: () => p,
    uK: () => _,
});
var r = n(284009),
    i = n.n(r),
    a = n(73153),
    s = n(501957),
    o = n(927578),
    l = n(384904),
    c = n(652215);
async function u(e) {
    let {
        planId: t,
        currency: n,
        paymentSource: r,
        trialId: i,
        code: s,
        metadata: o,
        referralCode: c,
        loadId: u,
        expectedInvoicePrice: d,
        expectedRenewalPrice: f,
    } = e;
    a.h.dispatch({
        type: "PREMIUM_PAYMENT_SUBSCRIBE_START",
    });
    try {
        let e = await l.Ky({
            items: [
                {
                    planId: t,
                    quantity: 1,
                },
            ],
            paymentSource: r,
            trialId: i,
            code: s,
            currency: n,
            metadata: o,
            referralCode: c,
            loadId: u,
            expectedInvoicePrice: d,
            expectedRenewalPrice: f,
        });
        return (
            null != e.subscription &&
                a.h.dispatch({
                    type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
                    subscription: e.subscription,
                }),
            e
        );
    } catch (e) {
        throw (
            (a.h.dispatch({
                type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
                error: e,
            }),
            e)
        );
    }
}
async function d(e, t, n, r, u, d) {
    try {
        let f = (0, o.EL)(e);
        i()(f, "Expected existing premium plan");
        let p = (0, o.GX)(e, f.planId),
            _ = void 0 !== n ? n.toLowerCase() : e.currency;
        (0, s.U)(e, t, d),
            await l.nV(
                e,
                {
                    status: c.Dmq.ACTIVE,
                    paymentSource: r,
                    items: p,
                    currency: n,
                },
                {
                    amount: 0,
                    currency: _,
                },
                (0, o.UC)(p, _, null == r ? void 0 : r.id),
                t,
                u,
                d,
            ),
            a.h.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_SUCCESS",
            });
    } catch (e) {
        throw (
            (a.h.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: e,
            }),
            e)
        );
    }
}
async function f(e, t, n) {
    try {
        await l.nV(
            e,
            {
                status: c.Dmq.ACTIVE,
            },
            {
                amount: 0,
                currency: e.currency,
            },
            (0, o.UC)(e.items, e.currency, e.paymentSourceId),
            t,
            n,
        );
    } catch (e) {
        throw e;
    }
}
async function p(e, t, n, r, i) {
    try {
        await l.r6(e, t, n, r, i),
            a.h.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_SUCCESS",
            });
    } catch (e) {
        throw (
            (a.h.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: e,
            }),
            e)
        );
    }
}
async function _(e, t, n, r, i, s) {
    try {
        await l.uK(e, t, n, r, i, s),
            a.h.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_SUCCESS",
            });
    } catch (e) {
        throw (
            (a.h.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: e,
            }),
            e)
        );
    }
}

function h() {
    a.h.dispatch({
        type: "PREMIUM_PAYMENT_ERROR_CLEAR",
    });
}
