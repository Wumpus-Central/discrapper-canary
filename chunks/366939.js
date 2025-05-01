n.d(t, {
    Ld: () => c,
    O5: () => u,
    fG: () => f,
    fw: () => p,
    tq: () => _,
    v4: () => d
});
var r = n(512722),
    i = n.n(r),
    o = n(570140),
    a = n(74538),
    s = n(355467),
    l = n(981631);
async function c(e) {
    let { planId: t, currency: n, paymentSource: r, trialId: i, code: a, metadata: l, referralCode: c, loadId: u, expectedInvoicePrice: d, expectedRenewalPrice: f } = e;
    o.Z.dispatch({ type: 'PREMIUM_PAYMENT_SUBSCRIBE_START' });
    try {
        let e = await s.XW({
            items: [
                {
                    planId: t,
                    quantity: 1
                }
            ],
            paymentSource: r,
            trialId: i,
            code: a,
            currency: n,
            metadata: l,
            referralCode: c,
            loadId: u,
            expectedInvoicePrice: d,
            expectedRenewalPrice: f
        });
        return (
            null != e.subscription &&
                o.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS',
                    subscription: e.subscription
                }),
            e
        );
    } catch (e) {
        throw (
            (o.Z.dispatch({
                type: 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function u(e, t, n, r, c, u) {
    try {
        let d = (0, a.Af)(e);
        i()(d, 'Expected existing premium plan');
        let f = (0, a.XK)(e, d.planId),
            _ = void 0 !== n ? n.toLowerCase() : e.currency;
        await s.Mg(
            e,
            {
                status: l.O0b.ACTIVE,
                paymentSource: r,
                items: f,
                currency: n
            },
            {
                amount: 0,
                currency: _
            },
            (0, a.UX)(f, _, null == r ? void 0 : r.id),
            t,
            c,
            u
        ),
            o.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (o.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function d(e, t, n) {
    try {
        await s.Mg(
            e,
            { status: l.O0b.ACTIVE },
            {
                amount: 0,
                currency: e.currency
            },
            (0, a.UX)(e.items, e.currency, e.paymentSourceId),
            t,
            n
        );
    } catch (e) {
        throw e;
    }
}
async function f(e, t, n, r, i) {
    try {
        await s.fG(e, t, n, r, i), o.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (o.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function _(e, t, n, r, i, a) {
    try {
        await s.tq(e, t, n, r, i, a), o.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (o.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
function p() {
    o.Z.dispatch({ type: 'PREMIUM_PAYMENT_ERROR_CLEAR' });
}
