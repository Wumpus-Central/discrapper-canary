n.d(t, { Y: () => t_, _V: () => tT });
var l,
    i,
    r = n(477900),
    a = n(582128),
    s = n(643909);
n(284009);
var o = n(17928),
    u = n(691540),
    c = n(857250),
    d = n(97483),
    m = n(685094),
    p = n(228366),
    C = n(636537),
    h = n(277984),
    f = n(70142),
    E = n(739508),
    S = n(184015),
    y = n(723702),
    I = n(652215);
function A() {
    let e = f.A.getClient();
    null != e &&
        (0, S.j)().then((t) => {
            t.venmo
                .create({ client: e, allowDesktop: !0, paymentMethodUsage: "multi_use" })
                .then((e) => {
                    p.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
                })
                .catch(() => {
                    p.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
                });
        });
}
function g() {
    let e = f.A.getClient();
    null != e &&
        (0, S.j)().then((t) => {
            t.paypal
                .create({ client: e })
                .then((e) => {
                    if (null == e._navigateFrameToAuth)
                        throw Error(
                            "braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?",
                        );
                    (e._navigateFrameToAuth = function (e) {
                        let t = this._formatPaymentResourceData(e);
                        return C.Bo.post({
                            url: I.Rsh.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
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
                                    ((t = I.Gg3.BRAINTREE.KEY.startsWith("production_")
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
                        p.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e });
                })
                .catch(() => p.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
        });
}
function P() {
    let e = f.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    p.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, y.isDesktop)() && (t = (0, h.jf)(I.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: l, billingAddress: i } = e.details;
                p.h.dispatch({
                    type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
                    nonce: e.nonce,
                    email: t,
                    billingAddress: {
                        name: `${n} ${l}`,
                        line1: i.line1,
                        line2: i.line2,
                        city: i.city,
                        state: i.state,
                        country: i.countryCode,
                        postalCode: i.postalCode,
                    },
                });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                n === I.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? p.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (p.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      E.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            });
}
function v() {
    let e = f.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    p.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                p.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                [I.Q7O.VENMO_APP_CANCELED, I.Q7O.VENMO_DESKTOP_CANCELED, I.Q7O.VENMO_CANCELED].includes(n)
                    ? p.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (p.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      E.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
            });
}
function x(e, t) {
    if (null == e) return Promise.resolve();
    p.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var _ = n(391048),
    T = n(95477),
    N = n(812745),
    b = n(825755),
    j = n(375708);
class R extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && P();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && P();
    }
    componentWillUnmount() {
        x(f.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != f.A.getClient() && g();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(T.k, {
            label: j.intl.string(j.t.QQBAos),
            leading: { type: "image", src: (0, N.Nj)(N.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? j.intl.string(j.t.dte2M9) : j.intl.string(j.t.hopw7X),
        });
    }
}
let M = o.Ay.connectStores([f.A, b.A], () => ({
    braintreeEmail: b.A.braintreeEmail,
    paypalClient: f.A.getPayPalClient(),
}))(R);
var O = n(297264),
    L = n(834730),
    k = n(351665);
class w extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && v();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && v();
    }
    componentWillUnmount() {
        x(f.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != f.A.getClient() && A();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(N.Ay, { type: N.Ay.Types.VENMO, size: N.y3.MEDIUM, className: k.Z }),
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(O.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: k.y,
                                  children: j.intl.format(j.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(L.E, {
                                  variant: "text-md/medium",
                                  className: k.y,
                                  children: j.intl.string(j.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(L.E, {
                          variant: "text-md/medium",
                          className: k.y,
                          children: null == n ? j.intl.string(j.t["2ouZDU"]) : j.intl.string(j.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let U = o.Ay.connectStores([f.A, b.A], () => ({ venmoUsername: b.A.venmoUsername, venmoClient: f.A.getVenmoClient() }))(
    w,
);
var D = n(891197),
    G = n(964486),
    F = n(475743),
    B = n(721101),
    H = n(462887),
    W = n(602853),
    Y = n(661531),
    V = n(331322),
    K = n(736653),
    Z = n(818348),
    q = n(438983);
let z = function (e) {
    let t = (0, K.Ay)(),
        n = a.useRef(null),
        [l, i] = a.useState({}),
        o = (0, W.r)(Y.A.colors.BACKGROUND_BASE_LOWER).hex();
    switch (
        (a.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                l = window.getComputedStyle(e, "::placeholder"),
                r = t.getPropertyValue("font-family"),
                a = t.getPropertyValue("font-weight");
            i({
                base: {
                    fontFamily: r,
                    fontWeight: a,
                    color: t.getPropertyValue("color"),
                    fontSize: t.getPropertyValue("font-size"),
                    backgroundColor: o,
                    padding: "12px",
                    "::placeholder": { color: l.getPropertyValue("color") },
                    borderRadius: Y.A.radii.xs,
                },
            });
        }, [n, o]),
        e.type)
    ) {
        case Z.he.PRZELEWY24: {
            let i = (0, H.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: o, onP24BankChange: u, p24BankValue: c, billingAddressInfo: d } = e;
            return (0, r.jsx)("div", {
                className: q.rf,
                children: (0, r.jsxs)(V.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(T.k, {
                            label: j.intl.string(j.t["w/qqKK"]),
                            inputRef: n,
                            name: j.intl.string(j.t["w/qqKK"]),
                            placeholder: j.intl.string(j.t["w/qqKK"]),
                            onChange: (e) => o(e),
                            value: d.email,
                        }),
                        (0, r.jsx)(T.k, {
                            label: j.intl.string(j.t["yf7ms+"]),
                            name: j.intl.string(j.t["yf7ms+"]),
                            placeholder: j.intl.string(j.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: d.name,
                        }),
                        (0, r.jsxs)(V.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(L.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.De3b8t) }),
                                (0, r.jsx)(s.P24BankElement, {
                                    options: { value: c, style: l },
                                    onChange: (e) => u(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: q.je,
                                    children: (0, r.jsx)("img", { src: i, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case Z.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: a, epsBankValue: o, billingAddressInfo: u } = e,
                c = (0, H.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, r.jsx)("div", {
                className: q.rf,
                children: (0, r.jsxs)(V.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(T.k, {
                            label: j.intl.string(j.t.sN3wrd),
                            inputRef: n,
                            name: j.intl.string(j.t.sN3wrd),
                            placeholder: j.intl.string(j.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: u.name,
                        }),
                        (0, r.jsxs)(V.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(L.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.dFyV07) }),
                                (0, r.jsx)(s.EpsBankElement, {
                                    options: { value: o, style: l },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: q.je,
                                    children: (0, r.jsx)("img", { src: c, alt: "EPS" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        default:
            throw Error("unknown payment source type");
    }
};
var Q = n(71804);
n(202475);
var $ = n(31823);
n(211083);
var J = n(883645),
    X = n(936477);
n(601194);
var ee = n(87725),
    et = n(783327),
    en = n(626584),
    el = n(166532),
    ei = n(69494),
    er = n(901930),
    ea = n(19311),
    es = n(482132),
    eo = n(364840),
    eu = n(73825),
    ec = n(558620),
    ed = n(683433),
    em = n(36167),
    ep = n(951305),
    eC = (((l = {})[(l.UNKNOWN = 0)] = "UNKNOWN"), (l[(l.PENDING = 1)] = "PENDING"), (l[(l.DONE = 2)] = "DONE"), l);
let eh = 0,
    ef = null,
    eE = null,
    eS = null;
class ey extends o.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return eh;
    }
    get loadId() {
        return ef;
    }
    get skuId() {
        return eE;
    }
    get planId() {
        return eS;
    }
}
let eI = new ey(p.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (eh = 1), (ef = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        ef === e.loadId && ((eE = e.skuId ?? null), (eS = e.skuSubscriptionPlanId ?? null), (eh = 2));
    },
});
var eA = n(202541),
    eg = n(731075);
function eP(e) {
    let t,
        { step: n, onPurchaseComplete: l, onHandoffFailure: i } = e,
        {
            setSelectedSkuId: s,
            setSelectedPlanId: u,
            contextMetadata: c,
        } = (0, ee.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            contextMetadata: e.contextMetadata,
        })),
        {
            browserCheckoutState: d,
            browserCheckoutStateLoadId: m,
            browserCheckoutStateSkuId: p,
            browserCheckoutStatePlanId: C,
        } = (0, o.cf)([eI], () => ({
            browserCheckoutState: eI.browserCheckoutState,
            browserCheckoutStateLoadId: eI.loadId,
            browserCheckoutStateSkuId: eI.skuId,
            browserCheckoutStatePlanId: eI.planId,
        })),
        f = (0, ec.A)(),
        { isGift: E } = (0, ep.Pv)(),
        [S, y] = a.useState(!1);
    switch (n) {
        case el.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            t = I.do8.GOOGLE_PAY;
            break;
        case el.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            t = I.do8.APPLE_PAY;
    }
    return (
        a.useEffect(() => {
            let e = setTimeout(() => {
                S ||
                    (y(!0),
                    (0, h.Ze)(c.loadId),
                    (0, em.my)(
                        {
                            planId: f?.id ?? eA.gD.PREMIUM_MONTH_TIER_2,
                            isGift: E,
                            loadId: c.loadId,
                            paymentMethodType: t,
                        },
                        i,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [f, E, c, i, y, S, t]),
        a.useEffect(() => {
            null !== p && (eA.oz.includes(p) && ((0, eu.ur)(p), (0, h.hP)()), s(p)),
                null !== C && u(C),
                m === c.loadId && d === eC.DONE && l();
        }, [s, u, d, m, p, C, c, l]),
        (0, r.jsxs)("div", {
            className: eg.rf,
            children: [
                (0, r.jsx)(O.D, { variant: "heading-xl/bold", children: j.intl.string(j.t.C4HYfy) }),
                (0, r.jsx)(L.E, { variant: "text-md/normal", className: eg.h_, children: j.intl.string(j.t.xfG7Jp) }),
            ],
        })
    );
}
function ev(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, r.jsx)(eo.j, {
        children: (0, r.jsxs)("div", {
            className: eg.kL,
            children: [
                (0, r.jsx)(ed.A, { onClick: n }),
                (0, r.jsx)(ed.F, { onClick: t, children: j.intl.string(j.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var ex = n(153084),
    e_ = n(295405),
    eT = n(71319),
    eN = n(174459),
    eb = n(427262),
    ej = n(251913),
    eR = n(632638),
    eM = n(632088);
let eO = null,
    eL = null;
class ek extends o.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return eO;
    }
    get cashAppPayComponent() {
        return eL;
    }
}
let ew = new ek(p.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        eO = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        eO = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        eL = t;
    },
});
async function eU() {
    return await C.Bo.get({ url: I.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function eD() {
    try {
        let e = await eU(),
            { default: t } = await Promise.all([n.e("494678"), n.e("540002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: I.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: I.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        p.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
            (function (e) {
                if (null != ew.cashAppPayComponent) {
                    eF(), eG();
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
                            if (n) p.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
                            else throw (0, h.i0)("Cash App Pay setup attempt is not valid.");
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
                                    case "Error during initialization":
                                    case "Error rendering CashAppPay button":
                                        (n = !1), (t = j.intl.string(j.t.TJ8dDB));
                                }
                                (0, h.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${eM.h}`);
                p.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, E.pM)(e), p.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function eG() {
    let e = ew.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${eM.h}`);
    } catch (e) {}
}
function eF() {
    ew.cashAppPayComponent?.unmount();
}
function eB() {
    let e = ew.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var eH = n(678784);
function eW(e) {
    let { className: t } = e,
        n = (0, o.bG)([ew], () => ew.cashAppPayComponent),
        l = (0, o.bG)([b.A], () => b.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == l && null != n && (eG(), eB()),
            () => {
                eF();
            }
        ),
        [l, n],
    );
    let i = l?.paymentMethod?.cashtag ?? "",
        s = null != l && "" !== i;
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(N.Ay, { type: N.Ay.Types.CASH_APP, size: N.y3.MEDIUM, className: eH.K }),
            s
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(O.D, {
                              variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: eH.y,
                              children: j.intl.format(j.t["ze/1yE"], { cashtag: i }),
                          }),
                          (0, r.jsx)(L.E, {
                              variant: "text-md/medium",
                              className: eH.y,
                              children: j.intl.string(j.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, r.jsx)(L.E, {
                      variant: "text-md/medium",
                      className: eH.y,
                      children: null == n ? j.intl.string(j.t["CgVe/w"]) : j.intl.string(j.t["1MqcjI"]),
                  }),
        ],
    });
}
function eY(e) {
    return () => (null != b.A.error && (0, _.ET)(), e());
}
function eV(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        i = t;
    null != t && (i = eY(t));
    let a = n;
    return null != n && (a = eY(n)), (0, r.jsx)(ea.Ay, { ...l, onPrimary: i, onBack: a });
}
var eK = n(683071),
    eZ = n(503698),
    eq = n.n(eZ),
    ez = n(305866),
    eQ = n(287809),
    e$ = n(832208),
    eJ = n(281595),
    eX = n(513098),
    e0 = n(151167);
let e2 = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: i, onFocus: o, onBlur: u } = e,
        [c, d] = a.useState(N.Be.UNKNOWN),
        [m, p] = a.useState(!1),
        [C, h] = a.useState(!1),
        [f, E] = a.useState(null),
        [S, y] = a.useState({}),
        I = (0, s.useElements)(),
        A = a.useCallback(() => {
            if (null != I)
                switch (n) {
                    case "cardNumber": {
                        let e = I.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = I.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = I.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [I, n]),
        g = a.useCallback(
            (e) => {
                C || e.empty || h(!0), null != i && i(e.complete), null != e.error && p(!1);
            },
            [C, i],
        ),
        P = a.useCallback(() => {
            p(!0), o?.();
        }, [o]),
        v = a.useCallback(() => {
            p(!1), u?.();
        }, [u]),
        x = a.useCallback(() => {
            if (null != I)
                switch (n) {
                    case "cardNumber": {
                        let e = I.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            c !== e.brand && d(e.brand),
                                e.empty && C
                                    ? E(j.intl.string(j.t.eOIfuy))
                                    : null != e.error
                                      ? E(j.intl.string(j.t.x4pWtJ))
                                      : E(null),
                                g(e);
                        }),
                            e.on("focus", P),
                            e.on("blur", v);
                        break;
                    }
                    case "cardExpiry": {
                        let e = I.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && C) ? E(j.intl.string(j.t["9/zZdl"])) : E(null), g(e);
                        }),
                            e.on("focus", P),
                            e.on("blur", v);
                        break;
                    }
                    case "cardCvc": {
                        let e = I.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && C) ? E(j.intl.string(j.t.ro4isZ)) : E(null), g(e);
                        }),
                            e.on("focus", P),
                            e.on("blur", v);
                    }
                }
        }, [v, g, P, c, I, C, n]);
    a.useEffect(
        () => (
            x(),
            () => {
                A();
            }
        ),
        [x, A],
    );
    let _ = (0, W.r)(Y.A.colors.TEXT_SUBTLE).hex(),
        T = (0, W.r)(Y.A.colors.TEXT_STRONG).hex();
    function b() {
        return eq()(eX.vB, { [eX.Tn]: null !== f, [eX.iH]: m, [eX.yD]: "cardNumber" === n });
    }
    return (
        a.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                l = n.getPropertyValue("font-family");
            y({
                base: {
                    fontFamily: l,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: T,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: _ },
                },
            });
        }, [t, _, T]),
        (0, r.jsxs)("div", {
            className: eX.Zm,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", { ref: t, className: eq()(eX.iw, e0.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(N.Ay, { className: eX.Ie, type: c, flipped: l }),
                                    (0, r.jsx)(s.CardNumberElement, {
                                        options: { style: S, placeholder: j.intl.string(j.t.gPRHfw), disableLink: !1 },
                                        className: b(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(s.CardExpiryElement, {
                                options: { style: S, placeholder: j.intl.string(j.t.xeEWQ6) },
                                className: b(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(s.CardCvcElement, {
                                options: { style: S, placeholder: j.intl.string(j.t.wZz04F) },
                                className: b(),
                            });
                    }
                })(),
                (0, r.jsx)(eJ.U, { error: f }),
            ],
        })
    );
};
var e1 = n(719941),
    e4 = n(782328);
let e3 = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = a.useRef(t),
        [i, s] = a.useState(!1),
        [o, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [m, p] = a.useState({}),
        [C, h] = a.useState({}),
        { setFocusLockDisabled: f } = a.useContext(ez.M);
    a.useEffect(() => () => {
        void 0 !== f && f(!1);
    });
    let E = a.useCallback(() => {
        void 0 !== f && f(!0);
    }, [f]);
    function S(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let y = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || m.name) && "" === c.name && (t.name = j.intl.string(j.t.lIkVsi)), t;
        },
        [m, c],
    );
    return (
        a.useEffect(() => {
            let e = o.cardNumber && o.cardExpiry && o.cardCvc && 0 === Object.keys(y(!0)).length;
            l.current({ name: c.name }, !!e);
        }, [o, c, y]),
        (0, r.jsxs)("div", {
            children: [
                eQ.default.getCurrentUser()?.nsfwAllowed
                    ? (0, r.jsxs)("div", {
                          className: e1.Rm,
                          children: [
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.eo, e1.Ud) }),
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.DR, e1.Ud) }),
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.k4, e1.Ud) }),
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.a3, e1.Ud) }),
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.CY, e1.Ud) }),
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.Q5, e1.Ud) }),
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.YA, e1.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: e1.Rm,
                          children: [
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.aq, e1.Ud) }),
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.VX, e1.Ud) }),
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.Yi, e1.Ud) }),
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.qR, e1.Ud) }),
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.m2, e1.Ud) }),
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1.Ij, e1.Ud) }),
                              (0, r.jsx)("div", { className: eq()(N.y3.SMALL, e1._V, e1.Ud) }),
                          ],
                      }),
                (0, r.jsx)(e$.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => j.intl.string(j.t.cVyJ3o),
                                    getClassNameForLayout: () => e4.c6,
                                    renderInput: () =>
                                        (0, r.jsx)(e2, {
                                            stripeType: "cardNumber",
                                            flipped: i,
                                            updateCompleted: (e) => S("cardNumber", e),
                                            onFocus: E,
                                        }),
                                },
                            ],
                        },
                        {
                            fields: [
                                {
                                    id: "card-expiration-date",
                                    name: "cardExpiry",
                                    title: () => j.intl.string(j.t["CeBa/4"]),
                                    getClassNameForLayout: () => e4.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(e2, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => S("cardExpiry", e),
                                            onFocus: E,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => j.intl.string(j.t.Fd3rOz),
                                    getClassNameForLayout: () => e4.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(e2, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => S("cardCvc", e),
                                            onFocus: () => {
                                                E(), s(!0);
                                            },
                                            onBlur: () => {
                                                s(!1);
                                            },
                                        }),
                                },
                            ],
                        },
                        {
                            fields: [
                                {
                                    id: "card-name",
                                    name: "name",
                                    title: () => j.intl.string(j.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => j.intl.string(j.t["yf7ms+"]),
                                    getClassNameForLayout: () => e4.c6,
                                    renderInput: (e) => (0, r.jsx)(T.k, { ...e }),
                                },
                            ],
                        },
                    ],
                    errors: C,
                    formError: n,
                    values: c,
                    onFieldChange: function (e, t) {
                        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
                        let n = { ...c },
                            l = { ...m },
                            i = { name: C.name };
                        m[t] || "" === e || (l[t] = !0),
                            (n[t] = e),
                            l[t] && "" === e ? "name" === t && (i.name = j.intl.string(j.t.lIkVsi)) : delete i[t],
                            d(n),
                            p(l),
                            h(i);
                    },
                    onFieldBlur: function () {
                        h(y());
                    },
                }),
            ],
        })
    );
};
var e7 = n(198970),
    e6 = n(116673),
    e5 = n(773669),
    e8 =
        (((i = {}).SELECT_PLAN = "select_plan"),
        (i.PAYMENT_TYPE = "payment_type"),
        (i.PAYPAL = "paypal"),
        (i.PAYPAL_ADDRESS = "paypal_address"),
        (i.PAYMENT_REQUEST_INFO = "payment_request_info"),
        (i.CREDIT_CARD_INFORMATION = "credit_card_information"),
        (i.ADDRESS = "address"),
        (i.REVIEW = "review"),
        (i.CONFIRM = "confirm"),
        (i.AWAITING_AUTHENTICATION = "awaiting_authentication"),
        (i.VENMO = "venmo"),
        (i.VENMO_ADDRESS = "venmo_address"),
        i);
function e9(e) {
    if (null != e) {
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
var te = n(292234);
let tt = (e) => {
    let t,
        { billingAddressInfo: n, billingError: l, onBillingAddressChange: i, paymentSourceType: s } = e,
        u = null != l && (null == l.code || e9(l) === e8.ADDRESS),
        c = (0, o.bG)([e5.default], () => e5.default.locale);
    switch (s) {
        case I.hes.GIROPAY:
        case I.hes.PAYSAFE_CARD:
        case I.hes.GCASH:
        case I.hes.GRABPAY_MY:
        case I.hes.MOMO_WALLET:
        case I.hes.KAKAOPAY:
        case I.hes.GOPAY_WALLET:
        case I.hes.BANCONTACT:
            t = "en-US" === c ? e7.Ay.Layouts.MODAL_US_WITH_NAME : e7.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case I.hes.VENMO:
        case I.hes.CASH_APP:
            t = e7.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === c ? e7.Ay.Layouts.MODAL_US : e7.Ay.Layouts.MODAL_INTL;
    }
    let d = (0, e6.z)();
    0 === n.country.length && null != d && d.length > 0 && (n.country = d[0]);
    let m = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()?.storeCountry?.isLocked === !0)
        ? j.intl.string(j.t.Pg2hU0)
        : null;
    return (0, r.jsxs)(a.Fragment, {
        children: [
            u
                ? (0, r.jsx)("div", {
                      className: te.QK,
                      children: (0, r.jsx)(eK.w, { type: "critical", children: j.intl.string(j.t.vZ8y7l) }),
                  })
                : null,
            (0, r.jsx)(e7.Ay, {
                className: te.__invalid_formItem,
                onBillingAddressChange: i,
                error: l,
                layout: t,
                allowedBillingAddressCountries: d,
                countryHelperText: m,
                ...n,
            }),
        ],
    });
};
var tn = n(908166),
    tl = n(930767),
    ti = n(891640);
let tr = new en.A("AddPaymentFallbackComponents.tsx"),
    ta = [el.pn.CREDIT_CARD_INFORMATION, el.pn.ADDRESS];
function ts(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        l = null != t && (null == t.code || e9(t) === e8.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(a.Fragment, {
        children: [
            l
                ? (0, r.jsx)("div", {
                      className: te.QK,
                      children: (0, r.jsx)(eK.w, { type: "critical", children: j.intl.string(j.t["4vnhKV"]) }),
                  })
                : null,
            (0, r.jsx)(e3, { onCardInfoChange: n, error: t }),
        ],
    });
}
function to(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        i = (0, o.bG)([b.A], () => b.A.error);
    return (0, r.jsx)(tt, { billingAddressInfo: t, billingError: i, onBillingAddressChange: n, paymentSourceType: l });
}
function tu(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: l } = e,
        { billingAddressState: i, setBillingAddressState: a } = t;
    return n
        ? null
        : (0, r.jsx)(to, {
              billingAddressInfo: i.info,
              onBillingAddressChange: (e, t) => {
                  a({ info: { ...i.info, ...e }, isValid: t });
              },
              paymentSourceType: l,
          });
}
function tc(e) {
    let {
            paymentModalArgs: t,
            shouldUseManaModal: n,
            analyticsLocation: l,
            overwriteSubscriptionPaymentSource: i,
            handleStepChange: a,
            completeSteps: s,
            paymentMethodSteps: o,
            paymentElementSelectedType: u,
            returnToPaymentElementStep: c,
            stripeElementsRef: d,
            lastConfirmedSetupIntentRef: m,
            shouldUsePaymentElement: p,
        } = e,
        C = (0, et.S)(),
        { createSetupIntent: h } = (0, tn.x)(),
        {
            isSubmittingCurrentStep: f,
            billingAddressState: E,
            setIsSubmittingCurrentStep: S,
            hasRedirectURL: y,
            setHasRedirectURL: I,
            isAuthenticating: A,
        } = t;
    async function g() {
        S(!0);
        let e = p ? u : o.methodType,
            n = d.current,
            r = null != e && (0, ti.i)(e) ? ti.F[e] : null;
        if (null == r)
            throw new tl.v({
                message: "unknown Add Payment step not handled",
                extraSentryInformation: { paymentSourceType: e, analyticsLocation: l },
            });
        let a = r.submitAddressStep;
        try {
            let e = await a({
                ...t,
                analyticsLocation: l,
                stripe: C,
                shouldUsePaymentElement: p,
                stripeElements: n,
                lastConfirmedSetupIntentRef: m,
                createSetupIntent: h,
                overwriteSubscriptionPaymentSource: i,
            });
            "redirect-url" === e.responseType ? I(e.hasRedirectURL) : s(e.paymentSource), y || S(!1);
        } catch (e) {
            S(!1), tr.warn(`Error confirming submitting Address Step for Payment Source Type: ${P}`, e);
        }
    }
    let P = o.methodType,
        { backStep: v } = p
            ? { backStep: el.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case Z.he.CARD:
                          return { backStep: el.pn.CREDIT_CARD_INFORMATION };
                      case Z.he.PAYPAL:
                          return { backStep: el.pn.PAYPAL_INFORMATION };
                      case Z.he.VENMO:
                          return { backStep: el.pn.VENMO_INFORMATION };
                      case Z.he.EPS:
                          return { backStep: el.pn.EPS_INFORMATION };
                      case Z.he.PRZELEWY24:
                          return { backStep: el.pn.PRZELEWY24_INFORMATION };
                      case Z.he.CASH_APP:
                          return { backStep: el.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: el.pn.PAYMENT_ELEMENT };
                  }
              })(P),
        x = p ? () => c(void 0) : () => a(v);
    return (0, r.jsx)(eV, {
        onBack: x,
        primaryCTA: ea.Ay.CTAType.CONTINUE,
        primaryText: j.intl.string(j.t.PDTjLN),
        primarySubmitting: f,
        primaryDisabled: !E.isValid || A,
        onPrimary: g,
        shouldUseManaModal: n,
    });
}
let td = {
    SHARED_ADD_PAYMENT_STEPS: [el.pn.PAYMENT_ELEMENT],
    SHARED_CREDIT_CARD_STEPS: [el.pn.PAYMENT_ELEMENT, el.pn.ADDRESS],
    SHARED_PAYPAL_STEPS: [el.pn.PAYMENT_ELEMENT, el.pn.PAYPAL_INFORMATION, el.pn.ADDRESS],
    SHARED_VENMO_STEPS: [el.pn.PAYMENT_ELEMENT, el.pn.VENMO_INFORMATION, el.pn.ADDRESS],
    SHARED_CASH_APP_STEPS: [el.pn.PAYMENT_ELEMENT, el.pn.CASH_APP_INFORMATION, el.pn.ADDRESS],
    SHARED_PRZELEWY24_STEPS: [el.pn.PAYMENT_ELEMENT, el.pn.PRZELEWY24_INFORMATION, el.pn.ADDRESS],
    SHARED_EPS_STEPS: [el.pn.PAYMENT_ELEMENT, el.pn.EPS_INFORMATION, el.pn.ADDRESS],
    SHARED_IDEAL_STEPS: [el.pn.PAYMENT_ELEMENT, el.pn.ADDRESS],
    SHARED_TYPE_AND_ADDRESS_STEPS: [el.pn.PAYMENT_ELEMENT, el.pn.ADDRESS],
};
var tm = n(648335);
let tp = new en.A("PaymentElementStepFooter.tsx");
function tC(e) {
    let t = (0, et.S)(),
        {
            shouldUseManaModal: n,
            paymentModalArgs: l,
            handleStepChange: i,
            setPaymentMethodSteps: s,
            onBack: o,
            primarySubmitting: u,
            primaryDisabled: c,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: d,
        } = e,
        { setIsSubmittingCurrentStep: m, setBillingAddressState: p } = l,
        { paymentElementSelectedType: C, stripeElementsRef: f, remountAddressElement: E } = e,
        S = a.useCallback(async () => {
            m(!0);
            try {
                if (null == C || !(0, tm.eX)(C)) throw (0, h.ne)("Valid Payment Element source type not found", !0);
                let { steps: e, methodType: n } = d[C];
                s({ steps: e, methodType: n === Z.he.UNKNOWN ? C : n });
                let l = ti.F[C];
                if (null != l && null != l.submitPaymentElementStepHandler) {
                    await l.submitPaymentElementStepHandler({
                        stripe: t,
                        stripeElements: f.current,
                        remountAddressElement: E,
                        setBillingAddressState: p,
                    }),
                        i(l.stepAfterPaymentElement ?? el.pn.ADDRESS);
                    return;
                }
                let r = (0, tm.eI)(C);
                if (null != r) return void i(r);
                i(el.pn.ADDRESS);
            } catch (e) {
                tp.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                m(!1);
            }
        }, [C, d, f, E, i, t, s, m, p]);
    return (0, r.jsx)(eV, {
        onBack: o,
        primaryCTA: ea.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: j.intl.string(j.t.PDTjLN),
        primarySubmitting: u,
        primaryDisabled: c,
        onPrimary: S,
        shouldUseManaModal: n,
    });
}
var th = n(667648),
    tf = n(304082),
    tE = n(885352);
let tS = new en.A("AddPaymentStep.tsx"),
    ty = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tI = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tA(e) {
    let { onCardInfoChange: t } = e,
        n = (0, o.bG)([b.A], () => b.A.error);
    return (0, r.jsx)(ts, { billingError: n, onCardInfoChange: t });
}
function tg() {
    return (0, r.jsx)(M, {});
}
function tP() {
    return (0, r.jsx)(U, {});
}
function tv() {
    return (0, r.jsx)(eW, {});
}
function tx() {
    return (0, r.jsx)(D.N, {});
}
function t_(e) {
    let t,
        n,
        {
            paymentModalArgs: l,
            initialStep: i,
            prependSteps: C,
            appendSteps: E,
            onReturn: S,
            onComplete: y,
            onStepChange: A,
            breadcrumpSteps: g,
            currentBreadcrumpStep: x,
            header: _,
            analyticsData: T,
            analyticsLocation: N,
            hideBreadcrumbs: R = !1,
            useCheckoutStep: M = !1,
            isEligibleForTrial: O = !1,
            allowDesktopRedirectPurchase: L = !1,
            toastContent: k,
            continueSessionToInitialStep: w,
            overwriteSubscriptionPaymentSource: U = !1,
            shouldUseManaModal: D = !0,
        } = e,
        F = (0, et.S)(),
        { activitySessionId: B } = (0, $.V)(),
        { contextMetadata: H, clearFetchSetupIntent: W } = (0, ee.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            clearFetchSetupIntent: e.clearFetchSetupIntent,
        })),
        Y = (0, J.qv)();
    (0, G.l0)(W);
    let V = a.useMemo(
            () => (i === el.pn.PAYMENT_ELEMENT ? (L ? el.pn.AWAITING_BROWSER_CHECKOUT : el.pn.PAYMENT_ELEMENT) : i),
            [i, L],
        ),
        K = a.useMemo(() => (0, eb.Gn)(), []),
        {
            CREDIT_CARD_STEPS: q,
            CASH_APP_STEPS: en,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eo,
        } = (function (e) {
            let { prependSteps: t, appendSteps: n } = e,
                [l, i, r, s, o, u, c, d, m] = (0, a.useMemo)(
                    () =>
                        (function (e, t) {
                            let { prependSteps: n, appendSteps: l } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: i } = e;
                                return { steps: [...n, ...td[t], ...l], methodType: i };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: Z.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: Z.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: Z.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: Z.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: Z.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: Z.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: Z.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: Z.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: Z.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n },
                        ),
                    [t, n],
                ),
                p = (0, a.useMemo)(
                    () => ({
                        [Z.he.CARD]: r,
                        [Z.he.PAYPAL]: s,
                        [Z.he.PAYMENT_REQUEST]: i,
                        [Z.he.VENMO]: u,
                        [Z.he.CASH_APP]: m,
                        [Z.he.IDEAL]: o,
                        [Z.he.PRZELEWY24]: c,
                        [Z.he.EPS]: d,
                        [Z.he.BANCONTACT]: l,
                        [Z.he.GOPAY_WALLET]: l,
                        [Z.he.KAKAOPAY]: l,
                        [Z.he.GCASH]: l,
                        [Z.he.PAYSAFE_CARD]: l,
                        [Z.he.GRABPAY_MY]: l,
                        [Z.he.MOMO_WALLET]: l,
                        [Z.he.PIX]: l,
                    }),
                    [l, r, s, u, i, o, m, c, d],
                );
            return { CREDIT_CARD_STEPS: r, CASH_APP_STEPS: m, PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: p };
        })({ prependSteps: C, appendSteps: E }),
        [eu, ec] = a.useState(V),
        [ed, em] = a.useState(
            (function (e) {
                switch (e) {
                    case el.pn.CREDIT_CARD_INFORMATION:
                        return q;
                    case el.pn.CASH_APP_INFORMATION:
                        return en;
                    default:
                        return { steps: [el.pn.ADD_PAYMENT_STEPS] };
                }
            })(V),
        );
    a.useEffect(() => {
        (0, h.IV)();
    }, []);
    let ep = (0, o.bG)([b.A], () => b.A.redirectedPaymentSourceId),
        eC = (0, o.bG)([ew], () => ew.cashAppPayComponent),
        eh = { completeSteps: eZ, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        ef = a.useRef(eh);
    a.useEffect(() => {
        ef.current = eh;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = ef.current;
            !(async function () {
                if (null == ep) return;
                await (0, h.$o)();
                let n = e_.A.getPaymentSource(ep);
                null != n && (e(n), t(!1), b.A.clearRedirectedPaymentSourceId());
            })();
        }, [ep]);
    let eE = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                ec(e), t && A({ currentStep: eu, toStep: e });
            },
            [eu, A],
        ),
        eS = a.useCallback(
            (e) => {
                eN.default.track(I.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: H.loadId,
                    analytics_location: N,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [H.loadId, N],
        ),
        ey = (0, o.bG)([b.A], () => b.A.error),
        eI = a.useRef(ey);
    a.useEffect(() => {
        let e = eI.current;
        (eI.current = ey),
            null != ey &&
                ey !== e &&
                eN.default.track(I.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: H.loadId,
                    analytics_location: N,
                    payment_source_type: ed.methodType,
                    error_code: ey.code,
                    error_message: ey.message,
                });
    }, [ey, H.loadId, N, ed.methodType]);
    let eA = a.useCallback(
            (e) => {
                eS(e),
                    (0, u.P0)(
                        (0, c.o)(void 0 !== k ? k : j.intl.string(j.t["VJPg+l"]), d.Ck.SUCCESS, {
                            position: d.xJ.BOTTOM,
                        }),
                    ),
                    y(eu, e),
                    eE(V, !1);
            },
            [eE, V, eu, y, k, eS],
        ),
        {
            setPaymentSourceId: eg,
            creditCardState: ex,
            setCreditCardState: eT,
            setTokenState: ej,
            isSubmittingCurrentStep: eM,
            billingAddressState: eO,
            setBillingAddressState: eL,
            setIsSubmittingCurrentStep: ek,
            braintreeEmail: eU,
            braintreeNonce: eD,
            venmoUsername: eG,
            adyenPaymentData: eF,
            epsBankState: eH,
            setEpsBankState: eW,
            p24BankState: eY,
            setP24BankState: eK,
        } = l;
    function eZ(e) {
        eg(e.id), eA(e);
    }
    let eq = a.useCallback(
            (e, t) => {
                eL((n) => ({ info: { ...n.info, ...e }, isValid: t }));
            },
            [eL],
        ),
        ez = (0, th.wD)({
            step: eu,
            continueSessionToInitialStep: w,
            handleStepChange: eE,
            logger: tS,
            shouldLogOnChangeEvents: K || !1,
            onBillingAddressChange: eq,
        }),
        {
            shouldRenderPaymentElement: eQ,
            paymentElementReady: e$,
            paymentElementLoaded: eJ,
            paymentElementSelectedType: eX,
            returnToPaymentElementStep: e0,
            onBackFromPaymentElement: e2,
            stripeElementsRef: e1,
            stripePaymentElementProps: e4,
            stripeAddressElementProps: e3,
            remountAddressElement: e7,
            addressElementKey: e6,
        } = ez,
        e5 = a.useCallback(() => {
            eE(el.pn.ADDRESS), th.Ky.includes(eu) && e7();
        }, [eE, e7, eu]),
        e8 = a.useCallback(
            (e) => {
                e0(e);
            },
            [e0],
        ),
        e9 = M ? (0, r.jsx)(er.A, { className: tE._8 }) : null;
    switch (eu) {
        case el.pn.PAYMENT_ELEMENT:
            (t = null),
                (n = (0, r.jsx)(tC, {
                    handleStepChange: eE,
                    shouldUseManaModal: D,
                    setPaymentMethodSteps: em,
                    primarySubmitting: eM,
                    primaryDisabled: !e$,
                    onBack: () => {
                        e2(), S?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eo,
                    ...ez,
                }));
            break;
        case el.pn.CREDIT_CARD_INFORMATION:
            let te = async (e) => {
                ek(!0);
                try {
                    let t = await (0, h.YJ)(F, e);
                    ej({ token: t }), eE(el.pn.ADDRESS);
                } catch (e) {
                    tS.error(e.message ?? JSON.stringify(e));
                } finally {
                    ek(!1);
                }
            };
            t = (0, r.jsx)(tA, {
                onCardInfoChange: (e, t) => {
                    eT({ info: e, isValid: t }), eL((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tt = !ex.isValid;
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(eV, {
                        primaryCTA: ea.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: j.intl.string(j.t.PDTjLN),
                        primarySubmitting: eM,
                        primaryDisabled: tt,
                        onPrimary: () => te(t),
                        shouldUseManaModal: D,
                        onBack: null != S ? () => S() : void 0,
                    });
                },
            });
            break;
        case el.pn.AWAITING_BROWSER_CHECKOUT:
        case el.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case el.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tn = () => {
                em(q), eE(el.pn.PAYMENT_ELEMENT);
            };
            (t = (0, r.jsx)(eP, { step: eu, onPurchaseComplete: () => y(eu), onHandoffFailure: tn })),
                (n = (0, r.jsx)(ev, {
                    onPrimaryClick: tn,
                    onBackClick: () => {
                        e2(), null != S && S();
                    },
                }));
            break;
        case el.pn.EPS_INFORMATION:
            (t = (0, r.jsx)(z, {
                type: Z.he.EPS,
                onAccountHolderNameChange: (e) => eL({ info: { ...eO.info, name: e }, isValid: eO.isValid }),
                onEPSBankChange: (e) => eW(e),
                epsBankValue: eH,
                billingAddressInfo: eO.info,
            })),
                (n = (0, r.jsx)(eV, {
                    onBack: () => e8(Z.he.EPS),
                    primaryCTA: ea.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled: void 0 === eH || "" === eH || "" === eO.info.name,
                    onPrimary: () => e5(),
                    shouldUseManaModal: D,
                }));
            break;
        case el.pn.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(z, {
                type: Z.he.PRZELEWY24,
                onNameChange: (e) => eL({ info: { ...eO.info, name: e }, isValid: eO.isValid }),
                onEmailChange: (e) => eL({ info: { ...eO.info, email: e }, isValid: eO.isValid }),
                onP24BankChange: (e) => {
                    eK(e);
                },
                p24BankValue: eY,
                billingAddressInfo: eO.info,
            })),
                (n = (0, r.jsx)(eV, {
                    onBack: () => e8(Z.he.PRZELEWY24),
                    primaryCTA: ea.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eO.info.name ||
                        "" === eO.info.name ||
                        void 0 === eO.info.email ||
                        "" === eO.info.email ||
                        void 0 === eY ||
                        "" === eY,
                    onPrimary: () => e5(),
                    shouldUseManaModal: D,
                }));
            break;
        case el.pn.PAYPAL_INFORMATION:
            let tl = 0 !== eU.length && null != eD;
            (t = (0, r.jsx)(tg, {})),
                (n = (0, r.jsx)(eV, {
                    onBack: () => e8(Z.he.PAYPAL),
                    primaryCTA: ea.Ay.CTAType.CONTINUE,
                    primaryText: tl ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tl
                            ? e5()
                            : void (null == (e = f.A.getLastURL())
                                  ? P()
                                  : (p.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: D,
                }));
            break;
        case el.pn.VENMO_INFORMATION:
            let ti = 0 !== eG.length && null != eD;
            (t = (0, r.jsx)(tP, {})),
                (n = (0, r.jsx)(eV, {
                    onBack: () => e8(Z.he.VENMO),
                    primaryCTA: ea.Ay.CTAType.CONTINUE,
                    primaryText: ti ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t["4KoTLM"]),
                    onPrimary: () => (ti ? e5() : void v()),
                    shouldUseManaModal: D,
                }));
            break;
        case el.pn.CASH_APP_INFORMATION:
            let tr = null != eF;
            (t = (0, r.jsx)(tv, {})),
                (n = (0, r.jsx)(eV, {
                    onBack: () => e8(Z.he.CASH_APP),
                    primaryCTA: ea.Ay.CTAType.CONTINUE,
                    primaryText: tr ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t["9ALP8w"]),
                    onPrimary: () => (tr ? e5() : eB()),
                    primaryDisabled: null == eC,
                    shouldUseManaModal: D,
                }));
            break;
        case el.pn.ADDRESS:
            let ts = null != eX;
            (t = (0, r.jsx)(tu, {
                paymentModalArgs: l,
                paymentSourceType: ed.methodType ?? Z.he.CARD,
                shouldUsePaymentElement: ts,
            })),
                (n = (0, r.jsx)(tc, {
                    paymentModalArgs: l,
                    shouldUseManaModal: D,
                    analyticsLocation: N,
                    overwriteSubscriptionPaymentSource: U,
                    handleStepChange: eE,
                    completeSteps: eZ,
                    paymentMethodSteps: ed,
                    shouldUsePaymentElement: ts,
                    ...ez,
                }));
            break;
        case el.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(tx, {});
            break;
        default:
            throw new Q.v({ message: `Unexpected step: ${eu}`, extraSentryInformation: { currentStep: eu } });
    }
    let to = eQ ? "combined_stripe_elements" : void 0,
        tm = (0, r.jsxs)(m.Y, {
            className: tf.C9,
            staticClassName: tf.a2,
            animatedNodeClassName: tf.L2,
            fillParent: !0,
            overrideKey: to,
            step: eu,
            steps: ed.steps,
            sideMargin: 20,
            children: [
                eQ &&
                    (0, r.jsx)(th._i, {
                        step: eu,
                        analyticsContext:
                            null != T ? { activitySessionId: B, contextMetadata: H, analyticsData: T } : void 0,
                        paymentElementSelectedType: eX,
                        stripeElementsRef: e1,
                        stripePaymentElementProps: e4,
                        stripeAddressElementProps: e3,
                        addressElementKey: e6,
                        billingAddressInfo: eO.info,
                        onSetupError: () => {
                            e2(),
                                em({ steps: [...C, ...ta, ...E], methodType: Z.he.CARD }),
                                eE(el.pn.CREDIT_CARD_INFORMATION);
                        },
                        paymentElementFooter: eJ
                            ? (0, r.jsx)(X.Z4, {
                                  className: tE.SO,
                                  stackingBehavior: "stack",
                                  onComplete: () => {
                                      setTimeout(() => Y(el.pn.REVIEW), 0);
                                  },
                              })
                            : null,
                    }),
                t,
            ],
        }),
        tp = n;
    return M
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  O && (0, r.jsx)(ei.A, { className: tE.At, isEligibleForTrial: O }),
                  (0, r.jsxs)(es.dZ, { children: [e9, tm] }),
                  (0, r.jsx)(es.UX, { children: tp }),
              ],
          })
        : (0, r.jsx)(eR.A, {
              shouldUseManaModal: D,
              steps: g ?? ed.steps,
              currentStep: x ?? eu,
              overrideKey: to,
              paymentError: l.paymentError,
              header: _,
              hideBreadcrumbs: R,
              body: tm,
              footer: tp,
          });
}
function tT(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, o.cf)([e_.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : e_.A.defaultPaymentSourceId,
            paymentSources: e_.A.paymentSources,
            hasFetchedPaymentSources: e_.A.hasFetchedPaymentSources,
        })),
        i = (0, o.bG)([ew], () => ew.cashAppPayComponent),
        r = (0, o.bG)([B.A], () => B.A.data?.allowed_payment_source_types ?? null);
    (0, G.Ay)(() => {
        (0, S.j)().then((e) => {
            e.client
                .create({ authorization: I.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    new Promise((e, t) => {
                        let n = Date.now();
                        function l() {
                            Date.now() - n >= 5e3
                                ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                : null != f.A.getClient()
                                  ? e()
                                  : setTimeout(l, 1e3);
                        }
                        p.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", function e() {
                            p.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", e), setTimeout(l, 0);
                        });
                    })
                        .then(() => {
                            g(), A();
                        })
                        .catch((e) => {
                            E.pM(e);
                        }),
                        p.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => p.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            l || (0, h.$o)();
    }),
        a.useEffect(() => {
            null == i && null != r && r.includes(Z.he.CASH_APP) && eD();
        }, [r, i]);
    let [s, u] = a.useState(t),
        c = (0, F.Ay)(t);
    t !== c && null != t && null == s && u(t);
    let [d, m] = a.useState(() => ({ info: ty, isValid: !1 })),
        [C, y] = a.useState(() => ({ info: tI, isValid: !1 })),
        [P, v] = a.useState(""),
        [x, T] = a.useState(""),
        [N, j] = a.useState(() => ({ token: null })),
        [R, M, O, L, k] = (0, o.yK)([b.A], () => [
            b.A.braintreeEmail,
            b.A.braintreeNonce,
            b.A.error,
            b.A.venmoUsername,
            b.A.adyenPaymentData,
        ]),
        [w, U] = (0, o.yK)([ex.A], () => [ex.A.error, ex.A.isAwaitingAuthentication]);
    a.useEffect(() => {
        function e(e) {
            let { billingAddress: t } = e;
            y({ info: t, isValid: t.country.length > 0 });
        }
        return (
            p.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                p.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, _.ET)();
            }
        );
    }, []);
    let [D, H] = a.useState(!1),
        [W, Y] = a.useState(!1),
        [V, K] = a.useState(null),
        q = a.useRef(null),
        z = (0, o.bG)([ex.A], () => ex.A.isAwaitingAuthentication),
        [Q, $] = (0, o.yK)([eT.A], () => [eT.A.purchaseTokenAuthState, eT.A.purchaseTokenHash]);
    return (
        a.useEffect(() => {
            null != V && null != q.current && q.current.scrollIntoView({ behavior: "smooth" });
        }, [V]),
        {
            paymentSources: n,
            paymentSourceId: s,
            hasFetchedPaymentSources: l,
            setPaymentSourceId: u,
            creditCardState: d,
            setCreditCardState: m,
            tokenState: N,
            setTokenState: j,
            billingAddressState: C,
            setBillingAddressState: y,
            isSubmittingCurrentStep: D,
            setIsSubmittingCurrentStep: H,
            hasRedirectURL: W,
            setHasRedirectURL: Y,
            braintreeEmail: R,
            braintreeNonce: M,
            venmoUsername: L,
            adyenPaymentData: k,
            paymentError: null != w ? w : O,
            paymentAuthenticationState: U ? ej.oc.PENDING : null != w ? ej.oc.ERROR : ej.oc.NONE,
            purchaseError: V,
            setPurchaseError: K,
            purchaseErrorBlockRef: q,
            isAuthenticating: z,
            purchaseTokenAuthState: Q,
            purchaseTokenHash: $,
            epsBankState: x,
            setEpsBankState: T,
            p24BankState: P,
            setP24BankState: v,
        }
    );
}
