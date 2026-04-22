n.d(t, {
    $e: () => y,
    DD: () => p,
    LR: () => m,
    Rz: () => h,
    UU: () => d,
    _b: () => E,
    fB: () => A,
    gm: () => C,
    jR: () => f,
});
var l = n(562465),
    i = n(73153),
    a = n(323082),
    r = n(70142),
    s = n(739508),
    o = n(184015),
    u = n(723702),
    c = n(652215);
function d() {
    (0, o.j)().then((e) => {
        e.client
            .create({ authorization: c.Gg3.BRAINTREE.KEY })
            .then((e) => {
                new Promise((e, t) => {
                    let n = Date.now(),
                        l = () => {
                            Date.now() - n >= 5e3
                                ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                : null != r.A.getClient()
                                  ? e()
                                  : setTimeout(l, 1e3);
                        },
                        a = () => {
                            i.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", a), setTimeout(l, 0);
                        };
                    i.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", a);
                })
                    .then(() => {
                        m(), p();
                    })
                    .catch((e) => {
                        s.pM(e);
                    }),
                    i.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
            })
            .catch(() => i.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
    });
}
function p() {
    let e = r.A.getClient();
    if (null == e) throw Error("Braintree client must be initialized before creating Venmo client.");
    (0, o.j)().then((t) => {
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
function m() {
    let e = r.A.getClient();
    if (null == e) throw Error("braintree client must be initialized before calling this");
    (0, o.j)().then((t) => {
        t.paypal
            .create({ client: e })
            .then((e) => {
                if (null == e._navigateFrameToAuth)
                    throw Error(
                        "braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?",
                    );
                (e._navigateFrameToAuth = function (e) {
                    let t = this._formatPaymentResourceData(e);
                    return l.Bo.post({
                        url: c.Rsh.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
                        oldFormErrors: !0,
                        body: { return_url: t.returnUrl, cancel_url: t.cancelUrl },
                        rejectWithError: !1,
                    })
                        .then((e) => {
                            let t,
                                {
                                    body: { token: n },
                                } = e;
                            this._frameService.redirect(
                                ((t = c.Gg3.BRAINTREE.KEY.startsWith("production_")
                                    ? "https://www.paypal.com"
                                    : "https://sandbox.paypal.com"),
                                `${t}/agreements/approve?nolegacy=1&ba_token=${n}`),
                            );
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
function h() {
    let e = r.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    i.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, u.isDesktop)() && (t = (0, a.jf)(c.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: l, billingAddress: a } = e.details;
                i.h.dispatch({
                    type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
                    nonce: e.nonce,
                    email: t,
                    billingAddress: {
                        name: `${n} ${l}`,
                        line1: a.line1,
                        line2: a.line2,
                        city: a.city,
                        state: a.state,
                        country: a.countryCode,
                        postalCode: a.postalCode,
                    },
                });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                n === c.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? i.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (i.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      s.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            });
}
function A() {
    let e = r.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    i.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                i.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                [c.Q7O.VENMO_APP_CANCELED, c.Q7O.VENMO_DESKTOP_CANCELED, c.Q7O.VENMO_CANCELED].includes(n)
                    ? i.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (i.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      s.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
            });
}
function _(e, t) {
    if (null == e) return Promise.resolve();
    i.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
function C() {
    return _(r.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" });
}
function E() {
    return _(r.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" });
}
function y() {
    let e = r.A.getLastURL();
    null == e ? h() : (i.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e));
}
function f() {
    A();
}
