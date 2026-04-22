n.d(t, { UU: () => p, uy: () => m });
var l = n(562465),
    i = n(73153),
    a = n(323082),
    r = n(501280),
    s = n(739508),
    o = n(490581),
    u = n(652215),
    c = n(985018);
async function d() {
    return await l.Bo.get({ url: u.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function p() {
    try {
        let e = await d(),
            { default: t } = await Promise.all([n.e("94678"), n.e("31696")]).then(n.bind(n, 464403)),
            l = await t({
                environment: u.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: u.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        i.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
            (function (e) {
                if (null != o.A.cashAppPayComponent) {
                    o.A.cashAppPayComponent?.unmount(),
                        (function () {
                            if (null == o.A.cashAppPayComponent)
                                throw Error("Adyen CashAppPay component must be created before mounting.");
                            o.A.cashAppPayComponent?.mount(`#${r.h}`);
                        })();
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
                                        (n = !1), (t = c.intl.string(c.t.TJ8dDB));
                                }
                                (0, a.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${r.h}`);
                i.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, s.pM)(e), i.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function m() {
    let e = o.A.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
