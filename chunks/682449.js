n.d(t, {
    UU: () => p,
    uy: () => g,
}),
    n(65821);
var r = n(562465),
    i = n(73153),
    a = n(384904),
    s = n(887555),
    o = n(501280),
    l = n(739508),
    c = n(490581),
    u = n(652215),
    d = n(985018);
async function f() {
    return await r.Bo.get({
        url: u.Rsh.BILLING_ADYEN_PAYMENT_METHODS,
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
async function p() {
    try {
        let { enabledPaymentTypes: e } = s.Ay.getCurrentConfig({ location: "40c266_2" }, { autoTrackExposure: !1 });
        if (!e.includes(u.hes.CASH_APP)) return;
        let t = await f(),
            { default: r } = await Promise.all([n.e("94678"), n.e("35511")]).then(n.bind(n, 847722)),
            a = await r({
                environment: u.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: u.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: t.body,
            });
        i.h.dispatch({
            type: "ADYEN_CREATE_CLIENT_SUCCESS",
            client: a,
        }),
            _(a);
    } catch (e) {
        (0, l.pM)(e), i.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function _(e) {
    if (null != c.A.cashAppPayComponent) {
        m(), h();
        return;
    }
    let t = e
        .create("cashapp", {
            showPayButton: !1,
            enableStoreDetails: !1,
            storePaymentMethod: !0,
            setStatusAutomatically: !1,
            onSubmit: (e) => {
                let { data: t, isValid: n } = e;
                if (n)
                    i.h.dispatch({
                        type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS",
                        data: t,
                    });
                else throw (0, a.i0)("Cash App Pay setup attempt is not valid.");
            },
            onError: (e) => {
                let t,
                    n = !0;
                if ("CANCEL" !== e.name) {
                    switch (e.message) {
                        case "Payment declined by CashAppPay":
                            n = !1;
                            break;
                        case "Something went wrong during customerRequest creation":
                            (n = !1), (t = d.intl.string(d.t.TJ8dDB));
                    }
                    (0, a.i0)(e.message, n, t);
                }
            },
        })
        .mount("#".concat(o.h));
    i.h.dispatch({
        type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS",
        component: t,
    });
}
function h() {
    var e;
    if (null == c.A.cashAppPayComponent) throw Error("Adyen CashAppPay component must be created before mounting.");
    null == (e = c.A.cashAppPayComponent) || e.mount("#".concat(o.h));
}
function m() {
    var e;
    null == (e = c.A.cashAppPayComponent) || e.unmount();
}
function g() {
    let e = c.A.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
