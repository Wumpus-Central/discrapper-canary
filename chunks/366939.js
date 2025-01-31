n.d(t, {
    Ld: () => u,
    O5: () => c,
    fG: () => f,
    fw: () => p,
    tq: () => _,
    v4: () => d
});
var i = n(512722),
    r = n.n(i),
    a = n(570140),
    s = n(74538),
    o = n(355467),
    l = n(981631);
async function u(e) {
    let { planId: t, currency: n, paymentSource: i, trialId: r, code: s, metadata: l, referralCode: u, loadId: c } = e;
    a.Z.dispatch({ type: 'PREMIUM_PAYMENT_SUBSCRIBE_START' });
    try {
        let e = await o.XW({
            items: [
                {
                    planId: t,
                    quantity: 1
                }
            ],
            paymentSource: i,
            trialId: r,
            code: s,
            currency: n,
            metadata: l,
            referralCode: u,
            loadId: c
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
async function c(e, t, n, i, u, c) {
    try {
        let d = (0, s.Af)(e);
        r()(d, 'Expected existing premium plan');
        let f = (0, s.XK)(e, d.planId);
        await o.Mg(
            e,
            {
                status: l.O0b.ACTIVE,
                paymentSource: i,
                items: f,
                currency: n
            },
            t,
            u,
            c
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
        await o.Mg(e, { status: l.O0b.ACTIVE }, t, n);
    } catch (e) {
        throw e;
    }
}
async function f(e, t, n, i) {
    try {
        await o.fG(e, t, n, i), a.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
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
async function _(e, t, n, i, r) {
    try {
        await o.tq(e, t, n, i, r), a.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
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
