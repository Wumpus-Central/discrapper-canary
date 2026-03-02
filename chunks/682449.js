"use strict";
n.d(t, { UU: () => _, uy: () => m });
var r = n(562465),
    i = n(73153),
    s = n(384904),
    a = n(501280),
    o = n(739508),
    l = n(490581),
    u = n(652215),
    c = n(985018);
async function d() {
    return await r.Bo.get({ url: u.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function _() {
    try {
        let e = await d(),
            { default: t } = await Promise.all([n.e("94678"), n.e("35511")]).then(n.bind(n, 847722)),
            r = await t({
                environment: u.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: u.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        i.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: r }), f(r);
    } catch (e) {
        (0, o.pM)(e), i.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function f(e) {
    if (null != l.A.cashAppPayComponent) {
        h(), p();
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
                if (n) i.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
                else throw (0, s.i0)("Cash App Pay setup attempt is not valid.");
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
                            (n = !1), (t = c.intl.string(c.t.TJ8dDB));
                    }
                    (0, s.i0)(e.message, n, t);
                }
            },
        })
        .mount(`#${a.h}`);
    i.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
}
function p() {
    if (null == l.A.cashAppPayComponent) throw Error("Adyen CashAppPay component must be created before mounting.");
    l.A.cashAppPayComponent?.mount(`#${a.h}`);
}
function h() {
    l.A.cashAppPayComponent?.unmount();
}
function m() {
    let e = l.A.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
