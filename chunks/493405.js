"use strict";
n.d(t, {
    $e: () => y,
    DD: () => m,
    LR: () => E,
    Rz: () => g,
    UU: () => h,
    _b: () => S,
    fB: () => A,
    gm: () => T,
    jR: () => v,
});
var r = n(562465),
    i = n(73153),
    s = n(323082),
    a = n(70142),
    o = n(739508),
    l = n(184015),
    u = n(723702),
    c = n(652215);
let d = "https://www.paypal.com",
    _ = "https://sandbox.paypal.com";
function f(e) {
    let t = c.Gg3.BRAINTREE.KEY.startsWith("production_") ? d : _;
    return `${t}/agreements/approve?nolegacy=1&ba_token=${e}`;
}
function p() {
    return new Promise((e, t) => {
        let n = 5e3,
            r = Date.now(),
            s = () => {
                Date.now() - r >= n
                    ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                    : null != a.A.getClient()
                      ? e()
                      : setTimeout(s, 1e3);
            },
            o = () => {
                i.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", o), setTimeout(s, 0);
            };
        i.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", o);
    });
}
function h() {
    (0, l.j)().then((e) => {
        e.client
            .create({ authorization: c.Gg3.BRAINTREE.KEY })
            .then((e) => {
                p()
                    .then(() => {
                        E(), m();
                    })
                    .catch((e) => {
                        o.pM(e);
                    }),
                    i.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
            })
            .catch(() => i.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
    });
}
function m() {
    let e = a.A.getClient();
    if (null == e) throw Error("Braintree client must be initialized before creating Venmo client.");
    (0, l.j)().then((t) => {
        t.venmo
            .create({ client: e, allowDesktop: !0, paymentMethodUsage: "multi_use" })
            .then((e) => {
                i.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
            })
            .catch(() => {
                i.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
            });
    });
}
function E() {
    let e = a.A.getClient();
    if (null == e) throw Error("braintree client must be initialized before calling this");
    (0, l.j)().then((t) => {
        t.paypal
            .create({ client: e })
            .then((e) => {
                if (null == e._navigateFrameToAuth)
                    throw Error(
                        "braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?",
                    );
                (e._navigateFrameToAuth = function (e) {
                    let t = this._formatPaymentResourceData(e);
                    return r.Bo.post({
                        url: c.Rsh.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
                        oldFormErrors: !0,
                        body: { return_url: t.returnUrl, cancel_url: t.cancelUrl },
                        rejectWithError: !1,
                    })
                        .then((e) => {
                            let {
                                body: { token: t },
                            } = e;
                            this._frameService.redirect(f(t));
                        })
                        .catch(
                            (e) => (
                                this._frameService.close(),
                                (this._authorizationInProgress = !1),
                                Promise.reject(Error(e.body && e.body.message))
                            ),
                        );
                }),
                    i.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e });
            })
            .catch(() => i.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
    });
}
function g() {
    let e = a.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    i.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, u.isDesktop)() && (t = (0, s.jf)(c.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: r, billingAddress: s } = e.details;
                i.h.dispatch({
                    type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
                    nonce: e.nonce,
                    email: t,
                    billingAddress: {
                        name: `${n} ${r}`,
                        line1: s.line1,
                        line2: s.line2,
                        city: s.city,
                        state: s.state,
                        country: s.countryCode,
                        postalCode: s.postalCode,
                    },
                });
            })
            .catch((e) => {
                let { message: t, code: n, details: r } = e;
                n === c.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? i.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (i.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      o.pM(Error(`Braintree Paypal Error: ${t} ${n} ${r}`)));
            });
}
function A() {
    let e = a.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    i.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                i.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: r } = e;
                [c.Q7O.VENMO_APP_CANCELED, c.Q7O.VENMO_DESKTOP_CANCELED, c.Q7O.VENMO_CANCELED].includes(n)
                    ? i.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (i.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      o.pM(Error(`Braintree Venmo Error: ${t} ${n} ${r}`)));
            });
}
function I(e, t) {
    if (null == e) return Promise.resolve();
    i.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
function T() {
    return I(a.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" });
}
function S() {
    return I(a.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" });
}
function y() {
    let e = a.A.getLastURL();
    null == e ? g() : (i.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e));
}
function v() {
    A();
}
