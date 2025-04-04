n.d(t, {
    cp: () => g,
    eI: () => _
}),
    n(411104);
var r = n(544891),
    i = n(570140),
    o = n(355467),
    a = n(987032),
    s = n(559407),
    l = n(122289),
    c = n(439041),
    u = n(981631),
    d = n(388032);
async function f() {
    return await r.tn.get({
        url: u.ANM.BILLING_ADYEN_PAYMENT_METHODS,
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
async function _() {
    try {
        let { enabledPaymentTypes: e } = a.ZP.getCurrentConfig({ location: '40c266_2' }, { autoTrackExposure: !1 });
        if (!e.includes(u.HeQ.CASH_APP)) return;
        let t = await f(),
            { default: r } = await Promise.all([n.e('77298'), n.e('23357')]).then(n.bind(n, 175145)),
            o = await r({
                environment: u.Ai1.ADYEN.KEY.startsWith('live_') ? 'live' : 'test',
                clientKey: u.Ai1.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: t.body
            });
        i.Z.dispatch({
            type: 'ADYEN_CREATE_CLIENT_SUCCESS',
            client: o
        }),
            p(o);
    } catch (e) {
        (0, l.q2)(e), i.Z.dispatch({ type: 'ADYEN_CREATE_CLIENT_FAIL' });
    }
}
function p(e) {
    if (null != c.Z.cashAppPayComponent) {
        m(), h();
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
                    i.Z.dispatch({
                        type: 'ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS',
                        data: t
                    });
                else throw (0, o.SQ)('Cash App Pay setup attempt is not valid.');
            },
            onError: (e) => {
                let t,
                    n = !0;
                if ('CANCEL' !== e.name) {
                    switch (e.message) {
                        case 'Payment declined by CashAppPay':
                            n = !1;
                            break;
                        case 'Something went wrong during customerRequest creation':
                            (n = !1), (t = d.NW.string(d.t.TJ8dDA));
                    }
                    (0, o.SQ)(e.message, n, t);
                }
            }
        })
        .mount('#'.concat(s.F));
    i.Z.dispatch({
        type: 'ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS',
        component: t
    });
}
function h() {
    var e;
    if (null == c.Z.cashAppPayComponent) throw Error('Adyen CashAppPay component must be created before mounting.');
    null == (e = c.Z.cashAppPayComponent) || e.mount('#'.concat(s.F));
}
function m() {
    var e;
    null == (e = c.Z.cashAppPayComponent) || e.unmount();
}
function g() {
    let e = c.Z.cashAppPayComponent;
    if (null == e) throw Error('Adyen CashAppPay component must be created before submitting.');
    e.submit();
}
