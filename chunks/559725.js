r.d(n, {
    cp: function () {
        return y;
    },
    eI: function () {
        return m;
    }
});
var i = r(411104);
var a = r(175145),
    o = r(544891),
    s = r(570140),
    l = r(355467),
    u = r(987032),
    c = r(559407),
    d = r(122289),
    f = r(439041),
    p = r(981631),
    h = r(388032);
async function _() {
    return await o.tn.get({
        url: p.ANM.BILLING_ADYEN_PAYMENT_METHODS,
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
async function m() {
    try {
        let { enabledPaymentTypes: e } = u.ZP.getCurrentConfig({ location: '40c266_2' }, { autoTrackExposure: !1 });
        if (!e.includes(p.HeQ.CASH_APP)) return;
        let n = await _(),
            r = await (0, a.Z)({
                environment: p.Ai1.ADYEN.KEY.startsWith('live_') ? 'live' : 'test',
                clientKey: p.Ai1.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: n.body
            });
        s.Z.dispatch({
            type: 'ADYEN_CREATE_CLIENT_SUCCESS',
            client: r
        }),
            g(r);
    } catch (e) {
        (0, d.q2)(e), s.Z.dispatch({ type: 'ADYEN_CREATE_CLIENT_FAIL' });
    }
}
function g(e) {
    if (null != f.Z.cashAppPayComponent) {
        v(), E();
        return;
    }
    let n = e
        .create('cashapp', {
            showPayButton: !1,
            enableStoreDetails: !1,
            storePaymentMethod: !0,
            setStatusAutomatically: !1,
            onSubmit: (e) => {
                let { data: n, isValid: r } = e;
                if (r)
                    s.Z.dispatch({
                        type: 'ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS',
                        data: n
                    });
                else throw (0, l.SQ)('Cash App Pay setup attempt is not valid.');
            },
            onError: (e) => {
                let n;
                let r = !0;
                if ('CANCEL' !== e.name) {
                    switch (e.message) {
                        case 'Payment declined by CashAppPay':
                            r = !1;
                            break;
                        case 'Something went wrong during customerRequest creation':
                            (r = !1), (n = h.intl.string(h.t.TJ8dDA));
                    }
                    (0, l.SQ)(e.message, r, n);
                }
            }
        })
        .mount('#'.concat(c.F));
    s.Z.dispatch({
        type: 'ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS',
        component: n
    });
}
function E() {
    var e;
    if (null == f.Z.cashAppPayComponent) throw Error('Adyen CashAppPay component must be created before mounting.');
    null === (e = f.Z.cashAppPayComponent) || void 0 === e || e.mount('#'.concat(c.F));
}
function v() {
    var e;
    null === (e = f.Z.cashAppPayComponent) || void 0 === e || e.unmount();
}
function y() {
    let e = f.Z.cashAppPayComponent;
    if (null == e) throw Error('Adyen CashAppPay component must be created before submitting.');
    e.submit();
}
