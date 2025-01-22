r.d(n, {
    Ld: function () {
        return c;
    },
    O5: function () {
        return d;
    },
    fG: function () {
        return p;
    },
    fw: function () {
        return _;
    },
    tq: function () {
        return h;
    },
    v4: function () {
        return f;
    }
});
var i = r(512722),
    a = r.n(i),
    o = r(570140),
    s = r(74538),
    l = r(355467),
    u = r(981631);
async function c(e) {
    let { planId: n, currency: r, paymentSource: i, trialId: a, code: s, metadata: u, referralCode: c, loadId: d } = e;
    o.Z.dispatch({ type: 'PREMIUM_PAYMENT_SUBSCRIBE_START' });
    try {
        let e = await l.XW({
            items: [
                {
                    planId: n,
                    quantity: 1
                }
            ],
            paymentSource: i,
            trialId: a,
            code: s,
            currency: r,
            metadata: u,
            referralCode: c,
            loadId: d
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
async function d(e, n, r, i, c, d) {
    try {
        let f = (0, s.Af)(e);
        a()(f, 'Expected existing premium plan');
        let p = (0, s.XK)(e, f.planId);
        await l.Mg(
            e,
            {
                status: u.O0b.ACTIVE,
                paymentSource: i,
                items: p,
                currency: r
            },
            n,
            c,
            d
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
async function f(e, n, r) {
    try {
        await l.Mg(e, { status: u.O0b.ACTIVE }, n, r);
    } catch (e) {
        throw e;
    }
}
async function p(e, n, r, i) {
    try {
        await l.fG(e, n, r, i), o.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
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
async function h(e, n, r, i, a) {
    try {
        await l.tq(e, n, r, i, a), o.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
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
function _() {
    o.Z.dispatch({ type: 'PREMIUM_PAYMENT_ERROR_CLEAR' });
}
