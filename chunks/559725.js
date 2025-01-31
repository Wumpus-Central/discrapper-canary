n.d(t, {
    cp: () => E,
    eI: () => p
}),
    n(411104);
var i = n(175145),
    r = n(544891),
    a = n(570140),
    s = n(355467),
    o = n(987032),
    l = n(559407),
    u = n(122289),
    c = n(439041),
    d = n(981631),
    f = n(388032);
async function _() {
    return await r.tn.get({
        url: d.ANM.BILLING_ADYEN_PAYMENT_METHODS,
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
async function p() {
    try {
        let { enabledPaymentTypes: e } = o.ZP.getCurrentConfig({ location: '40c266_2' }, { autoTrackExposure: !1 });
        if (!e.includes(d.HeQ.CASH_APP)) return;
        let t = await _(),
            n = await (0, i.Z)({
                environment: d.Ai1.ADYEN.KEY.startsWith('live_') ? 'live' : 'test',
                clientKey: d.Ai1.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: t.body
            });
        a.Z.dispatch({
            type: 'ADYEN_CREATE_CLIENT_SUCCESS',
            client: n
        }),
            h(n);
    } catch (e) {
        (0, u.q2)(e), a.Z.dispatch({ type: 'ADYEN_CREATE_CLIENT_FAIL' });
    }
}
function h(e) {
    if (null != c.Z.cashAppPayComponent) {
        g(), m();
        return;
    }
    let t = e
        .create('cashapp', {
            showPayButton: !1,
            enableStoreDetails: !1,
            storePaymentMethod: !0,
            setStatusAutomatically: !1,
            onSubmit: (e) => {
                let { data: t, isValid: n } = e;
                if (n)
                    a.Z.dispatch({
                        type: 'ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS',
                        data: t
                    });
                else throw (0, s.SQ)('Cash App Pay setup attempt is not valid.');
            },
            onError: (e) => {
                let t;
                let n = !0;
                if ('CANCEL' !== e.name) {
                    switch (e.message) {
                        case 'Payment declined by CashAppPay':
                            n = !1;
                            break;
                        case 'Something went wrong during customerRequest creation':
                            (n = !1), (t = f.intl.string(f.t.TJ8dDA));
                    }
                    (0, s.SQ)(e.message, n, t);
                }
            }
        })
        .mount('#'.concat(l.F));
    a.Z.dispatch({
        type: 'ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS',
        component: t
    });
}
function m() {
    var e;
    if (null == c.Z.cashAppPayComponent) throw Error('Adyen CashAppPay component must be created before mounting.');
    null === (e = c.Z.cashAppPayComponent) || void 0 === e || e.mount('#'.concat(l.F));
}
function g() {
    var e;
    null === (e = c.Z.cashAppPayComponent) || void 0 === e || e.unmount();
}
function E() {
    let e = c.Z.cashAppPayComponent;
    if (null == e) throw Error('Adyen CashAppPay component must be created before submitting.');
    e.submit();
}
