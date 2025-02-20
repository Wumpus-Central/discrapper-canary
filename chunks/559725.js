n.d(t, {
    cp: () => E,
    eI: () => _
}),
    n(411104);
var r = n(175145),
    i = n(544891),
    o = n(570140),
    a = n(355467),
    s = n(987032),
    l = n(559407),
    c = n(122289),
    u = n(439041),
    d = n(981631),
    f = n(388032);
async function p() {
    return await i.tn.get({
        url: d.ANM.BILLING_ADYEN_PAYMENT_METHODS,
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
async function _() {
    try {
        let { enabledPaymentTypes: e } = s.ZP.getCurrentConfig({ location: '40c266_2' }, { autoTrackExposure: !1 });
        if (!e.includes(d.HeQ.CASH_APP)) return;
        let t = await p(),
            n = await (0, r.Z)({
                environment: d.Ai1.ADYEN.KEY.startsWith('live_') ? 'live' : 'test',
                clientKey: d.Ai1.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: t.body
            });
        o.Z.dispatch({
            type: 'ADYEN_CREATE_CLIENT_SUCCESS',
            client: n
        }),
            h(n);
    } catch (e) {
        (0, c.q2)(e), o.Z.dispatch({ type: 'ADYEN_CREATE_CLIENT_FAIL' });
    }
}
function h(e) {
    if (null != u.Z.cashAppPayComponent) {
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
                    o.Z.dispatch({
                        type: 'ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS',
                        data: t
                    });
                else throw (0, a.SQ)('Cash App Pay setup attempt is not valid.');
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
                            (n = !1), (t = f.NW.string(f.t.TJ8dDA));
                    }
                    (0, a.SQ)(e.message, n, t);
                }
            }
        })
        .mount('#'.concat(l.F));
    o.Z.dispatch({
        type: 'ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS',
        component: t
    });
}
function m() {
    var e;
    if (null == u.Z.cashAppPayComponent) throw Error('Adyen CashAppPay component must be created before mounting.');
    null === (e = u.Z.cashAppPayComponent) || void 0 === e || e.mount('#'.concat(l.F));
}
function g() {
    var e;
    null === (e = u.Z.cashAppPayComponent) || void 0 === e || e.unmount();
}
function E() {
    let e = u.Z.cashAppPayComponent;
    if (null == e) throw Error('Adyen CashAppPay component must be created before submitting.');
    e.submit();
}
