var i = n(284009),
    r = n.n(i),
    a = n(73153),
    s = n(781300),
    l = n(501957),
    o = n(448645),
    d = n(652215);
n.d(
    t,
    {},
    {
        B1: async function (e) {
            let {
                planId: t,
                currency: n,
                paymentSource: i,
                trialId: r,
                code: l,
                metadata: o,
                referralCode: d,
                loadId: c,
                giftInfoOptions: u,
                expectedInvoicePrice: _,
                expectedRenewalPrice: E,
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
                    giftInfoOptions: u,
                    expectedInvoicePrice: _,
                    expectedRenewalPrice: E,
                });
                return (
                    null != e.subscription &&
                        a.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", subscription: e.subscription }),
                    e
                );
            } catch (e) {
                throw (a.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", error: e }), e);
            }
        },
        ET: function () {
            a.h.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
        },
        Ir: async function (e, t, n, i, c, u) {
            try {
                let _ = (0, o.EL)(e);
                r()(null != _, "Expected existing premium plan");
                let E = (0, o.GX)(e, _.planId),
                    A = void 0 !== n ? n.toLowerCase() : e.currency;
                ((0, l.U)(e, t, u),
                    await s.nV(
                        e,
                        { status: d.Dmq.ACTIVE, paymentSource: i, items: E, currency: n },
                        { amount: 0, currency: A },
                        (0, o.UC)(E, A, i?.id),
                        t,
                        c,
                        u,
                    ),
                    a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" }));
            } catch (e) {
                throw (a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
            }
        },
        U: async function (e, t, n) {
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
        },
        r6: async function (e, t, n, i, r) {
            try {
                (await s.r6(e, t, n, i, r), a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" }));
            } catch (e) {
                throw (a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
            }
        },
        uK: async function (e, t, n, i, r) {
            try {
                (await s.uK(e, t, n, i, r), a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" }));
            } catch (e) {
                throw (a.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e);
            }
        },
    },
);
