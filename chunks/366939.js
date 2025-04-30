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
    a = n(570140),
    o = n(74538),
    s = n(355467),
    l = n(981631);
async function c(e) {
    let { planId: t, currency: n, paymentSource: r, trialId: i, code: o, metadata: l, referralCode: c, loadId: u } = e;
    a.Z.dispatch({ type: 'PREMIUM_PAYMENT_SUBSCRIBE_START' });
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
            code: o,
            currency: n,
            metadata: l,
            referralCode: c,
            loadId: u
        });
        return (
            null != e.subscription &&
                a.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS',
                    subscription: e.subscription
                }),
            e
        );
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function u(e, t, n, r, c, u) {
    try {
        let d = (0, o.Af)(e);
        i()(d, 'Expected existing premium plan');
        let f = (0, o.XK)(e, d.planId);
        await s.Mg(
            e,
            {
                status: l.O0b.ACTIVE,
                paymentSource: r,
                items: f,
                currency: n
            },
            t,
            c,
            u
        ),
            a.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function d(e, t, n) {
    try {
        await s.Mg(e, { status: l.O0b.ACTIVE }, t, n);
    } catch (e) {
        throw e;
    }
}
async function f(e, t, n, r) {
    try {
        await s.fG(e, t, n, r), a.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function _(e, t, n, r, i) {
    try {
        await s.tq(e, t, n, r, i), a.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
function p() {
    a.Z.dispatch({ type: 'PREMIUM_PAYMENT_ERROR_CLEAR' });
}
