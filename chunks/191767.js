n.d(t, { f: () => A }), n(415506), n(388685), n(35282), n(49124);
var a = n(951288),
    r = n(647438),
    l = n(289008),
    i = n(120356),
    o = n.n(i),
    s = n(442837),
    c = n(544891),
    d = n(159691),
    u = n(481060),
    m = n(355467),
    p = n(16084),
    h = n(801937),
    x = n(502109),
    f = n(241209),
    b = n(563132),
    g = n(586585),
    v = n(439021),
    j = n(853872),
    _ = n(622999),
    y = n(954824),
    C = n(237012),
    S = n(981631),
    E = n(231338),
    T = n(388032),
    O = n(306197),
    N = n(818033);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function w(e) {
    return (
        await c.tn.post({
            url: S.ANM.ORDER_SIGN(e),
            rejectWithError: !0,
        })
    ).body;
}
async function k(e) {
    try {
        let t = (
            await c.tn.get({
                url: S.ANM.ORDER_UPDATE(e),
                rejectWithError: !0,
            })
        ).body;
        console.log("Order data:", t);
        let n = t.billing_facet;
        if (null == n) throw Error("Order does not have billing facet information");
        let a = n.order_signing_deferral_context;
        if (null == a) throw Error("Order does not have payment redirect context");
        let r = a.stripe_3ds_context;
        if (null == r) throw Error("Order does not have 3DS context information");
        console.log("3DS Context:", r);
        let l = await (0, _.d2)();
        if (null == l) throw Error("Stripe not loaded");
        let i = r.client_secret;
        if (null == i || "" === i) throw Error("No client secret found in 3DS context");
        let { error: o, paymentIntent: s } = await l.confirmCardPayment(i, { payment_method: r.payment_method_id });
        if (null != o) throw Error("3DS authentication failed: ".concat(o.message));
        if (null == s) throw Error("No payment intent returned from 3DS authentication");
        console.log("3DS authentication completed successfully:", s);
    } catch (e) {
        throw (console.error("3DS completion error:", e), e);
    }
}
function R() {
    let [e, t] = r.useState(!1),
        [n, l] = r.useState(!1),
        [i, o] = r.useState(!1),
        [c, h] = r.useState(null),
        [x, f] = r.useState(null),
        [b, g] = r.useState(null),
        [v, _] = r.useState(!1),
        y = (0, s.e7)([j.Z], () => j.Z.paymentSources),
        S = (0, s.e7)([j.Z], () => j.Z.hasFetchedPaymentSources),
        T = (0, s.e7)([j.Z], () => j.Z.defaultPaymentSourceId);
    r.useEffect(() => {
        S || (0, m.tZ)();
    }, [S]),
        r.useEffect(() => {
            null != T && null == b && g(T);
        }, [T, b]);
    let N = r.useMemo(
            () =>
                Object.values(y).map((e) => {
                    let t = String(e.type);
                    if (e.type === E.He.CARD && "last4" in e) {
                        var n, a;
                        let r = null != (n = e.last4) ? n : "",
                            l = null != (a = e.brand) ? a : "Unknown";
                        t += " - ****".concat(r, " (").concat(l, ")");
                    } else null != e.brand && "" !== e.brand && (t += " - ".concat(e.brand));
                    return {
                        value: e.id,
                        label: t,
                    };
                }),
            [y],
        ),
        R = (0, u.nVN)({
            value: b,
            onChange: g,
        }),
        A = async () => {
            if (null == b || "" === b) return void h("Please select a payment source first.");
            t(!0), h(null), f(null), _(!1);
            try {
                let e = await (0, p.t_)("1420045362965512212", b, "US", !1, {
                    gift_style: null,
                    recipient_id: void 0,
                    custom_message: void 0,
                    emoji_id: void 0,
                    emoji_name: void 0,
                    sound_id: void 0,
                    reward_sku_ids: void 0,
                });
                f(e),
                    h("Order created successfully! Order ID: ".concat(e)),
                    console.log("Order created successfully with ID:", e);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                h("Failed to create order: ".concat(e)), console.error("Failed to create order:", t);
            } finally {
                t(!1);
            }
        },
        D = async () => {
            if (null == x || "" === x) return void h("No order ID available. Please create an order first.");
            l(!0);
            try {
                var e;
                let t = (await w(x)).billing_facet,
                    n =
                        (null == t || null == (e = t.order_signing_deferral_context) ? void 0 : e.stripe_3ds_context) !=
                        null;
                _(n);
                let a = "Order signed successfully! Order ID: ".concat(x);
                n &&
                    (a = "Order signing in progress! Order ID: ".concat(
                        x,
                        ". This order requires additional authentication (3DS).",
                    )),
                    h(a);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                h("Failed to sign order: ".concat(e)), console.error("Failed to sign order:", t);
            } finally {
                l(!1);
            }
        },
        Z = async () => {
            if (null == x || "" === x) return void h("No order ID available. Please create an order first.");
            o(!0);
            try {
                await k(x),
                    h("3DS authentication completed successfully! Order ID: ".concat(x)),
                    console.log("3DS authentication completed successfully for order:", x);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                h("Failed to complete 3DS: ".concat(e)), console.error("Failed to complete 3DS:", t);
            } finally {
                o(!1);
            }
        };
    return (0, a.jsxs)(C.$0, {
        children: [
            (0, a.jsx)(u.Heading, {
                variant: "heading-xl/semibold",
                children: "Order SKU Test",
            }),
            (0, a.jsxs)(C.E_, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: O.labelSpacing,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication with example parameters. Check the console for detailed logs.",
                    }),
                    (0, a.jsxs)("div", {
                        style: { marginBottom: "16px" },
                        children: [
                            (0, a.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                className: O.labelSpacing,
                                children: "Payment Source:",
                            }),
                            (0, a.jsx)(
                                u.PhF,
                                I(P({}, R), {
                                    options: N,
                                    placeholder: "Select a payment source...",
                                    isDisabled: !S,
                                    label: "Payment Source",
                                    clearable: !0,
                                }),
                            ),
                            !S &&
                                (0, a.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: O.labelSpacing,
                                    children: "Loading payment sources...",
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: "8px",
                            marginBottom: "8px",
                            flexWrap: "wrap",
                        },
                        children: [
                            (0, a.jsx)(d.zxk, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: A,
                                disabled: e || null == b || "" === b,
                            }),
                            (0, a.jsx)(d.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: n ? "Signing Order..." : "Sign Order",
                                onClick: D,
                                disabled: n || null == x || "" === x,
                            }),
                            (0, a.jsx)(d.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: i ? "Completing 3DS..." : "Complete 3DS",
                                onClick: Z,
                                disabled: i || null == x || "" === x || !v,
                            }),
                        ],
                    }),
                    null != c &&
                        (0, a.jsx)("div", {
                            className: O.labelSpacing,
                            children: c.split("\n").map((e, t) =>
                                (0, a.jsx)(
                                    u.Text,
                                    {
                                        variant: "text-md/normal",
                                        style: {
                                            display: "block",
                                            marginBottom: t < c.split("\n").length - 1 ? "4px" : "0",
                                        },
                                        children: e,
                                    },
                                    t,
                                ),
                            ),
                        }),
                ],
            }),
        ],
    });
}
function A() {
    return (0, a.jsx)(b.PaymentContextProvider, {
        stepConfigs: [],
        skuIDs: [],
        activeSubscription: null,
        children: (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(R, {}),
                (0, a.jsx)(D, {}),
                (0, a.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "text-feedback-info",
                    className: O.labelSpacing,
                    children:
                        "Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser.",
                }),
                (0, a.jsx)(Z, {}),
                (0, a.jsx)(B, {}),
                (0, a.jsx)(q, {}),
            ],
        }),
    });
}
function D() {
    let [e, t] = r.useState("discord://".concat(location.host, "/feature/apple-payment-link"));
    return (0, a.jsxs)(C.$0, {
        children: [
            (0, a.jsx)(u.Heading, {
                variant: "heading-xl/semibold",
                children: "Deeplinking",
            }),
            (0, a.jsxs)(C.E_, {
                label: "Test Deeplinking with a Custom Path",
                direction: "vertical",
                children: [
                    (0, a.jsx)(u.oil, {
                        value: e,
                        onChange: (e) => t(e),
                        placeholder: "Enter DeepLink Url",
                        fullWidth: !0,
                    }),
                    (0, a.jsx)(d.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: "Test Deeplink",
                        onClick: () => {
                            console.log("Opening deep link... ", e),
                                y.Z.launch(e, (e) => {
                                    console.log("onDone response: ", e);
                                });
                        },
                    }),
                ],
            }),
        ],
    });
}
function Z() {
    return (0, a.jsxs)(C.$0, {
        children: [
            (0, a.jsx)(u.Heading, {
                variant: "heading-xl/semibold",
                children: "Payment Request Components - Google Pay",
            }),
            (0, a.jsx)(C.E_, {
                label: "Google Pay - Default View",
                children: (0, a.jsx)(M, { paymentRequestWallet: "googlePay" }),
            }),
            (0, a.jsx)(C.E_, {
                label: "Google Pay - Connector View",
                children: (0, a.jsx)(M, {
                    paymentRequestWallet: "googlePay",
                    renderConnectorView: !0,
                }),
            }),
            (0, a.jsx)(C.E_, {
                label: "Google Pay - Add Payment Step Body Connector View",
                children: (0, a.jsx)(U, { paymentRequestWallet: "googlePay" }),
            }),
            (0, a.jsx)(u.Heading, {
                variant: "heading-xl/semibold",
                children: "Payment Request Components - Apple Pay",
            }),
            (0, a.jsx)(C.E_, {
                label: "Apple Pay - Default View",
                children: (0, a.jsx)(M, { paymentRequestWallet: "applePay" }),
            }),
            (0, a.jsx)(C.E_, {
                label: "Apple Pay - Connector View",
                children: (0, a.jsx)(M, {
                    renderConnectorView: !0,
                    paymentRequestWallet: "applePay",
                }),
            }),
            (0, a.jsx)(C.E_, {
                label: "Apple Pay - Add Payment Step Body Connector View",
                children: (0, a.jsx)(U, { paymentRequestWallet: "applePay" }),
            }),
        ],
    });
}
function M(e) {
    let t = r.useRef(null),
        n = {
            paymentLabel: T.intl.string(T.t.ZURqX0),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, a.jsx)(u.$jN, {
                style: { marginTop: 16 },
                type: u.RAz.PULSING_ELLIPSIS,
            }),
        };
    return e.renderStepBody
        ? (0, a.jsx)(v.t, P({}, n, e))
        : "applePay" === e.paymentRequestWallet
          ? (0, a.jsx)(x.Ch, P({}, n, e))
          : (0, a.jsx)(x.Tr, P({}, n, e));
}
function L(e) {
    let { children: t, footer: n, className: r } = e;
    return (0, a.jsx)("div", {
        className: o()(N.root, N.focusLock, N.small, N.rootWithShadow, O.modal, r),
        "aria-label": T.intl.string(T.t.eQ2bLp),
        children: (0, a.jsxs)("form", {
            className: O.form,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [
                (0, a.jsx)(u.hzk, {
                    className: O.scrollerContent,
                    children: t,
                }),
                n,
            ],
        }),
    });
}
function U(e) {
    let { paymentRequestWallet: t } = e,
        n = r.useRef(null),
        [l, i] = r.useState(!1);
    return (0, a.jsx)(L, {
        footer: (0, a.jsx)(g.Z, {
            primaryCTA: g.Z.CTAType.CONTINUE,
            primaryText: T.intl.string("applePay" === t ? T.t.WoXvJL : T.t.wnVVr0),
            primaryDisabled: !l,
            onPrimary: () => void (null != n.current && n.current.show()),
            onBack: () => {},
        }),
        children: (0, a.jsx)(M, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: n,
            onValidPaymentRequest: () => i(!0),
        }),
    });
}
function F(e) {
    let { children: t } = e;
    return (0, a.jsx)(L, {
        className: O.choosePaymentTypeModal,
        children: (0, a.jsx)("div", {
            className: O.choosePaymentTypeContainer,
            children: t,
        }),
    });
}
function B() {
    let e = {
        onChooseType: () => {},
        onStripePaymentMethodReceived: (e) => {
            console.log("onStripePaymentMethodReceived called: ", e);
        },
        isEligibleForTrial: !1,
    };
    return (0, a.jsxs)(C.$0, {
        children: [
            (0, a.jsx)(u.Heading, {
                variant: "heading-xl/semibold",
                children: "Choose Payment Source Type Component",
            }),
            (0, a.jsx)(C.E_, {
                label: "All Payment Request Wallets Enabled",
                children: (0, a.jsx)(F, {
                    children: (0, a.jsx)(
                        h.Z,
                        I(P({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: ["googlePay", "applePay"],
                        }),
                    ),
                }),
            }),
            (0, a.jsx)(C.E_, {
                label: "No Payment Wallets Enabled",
                children: (0, a.jsx)(F, {
                    children: (0, a.jsx)(
                        h.Z,
                        I(P({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                        }),
                    ),
                }),
            }),
            (0, a.jsx)(C.E_, {
                label: "Is Eligible for Trial",
                children: (0, a.jsx)(F, {
                    children: (0, a.jsx)(
                        h.Z,
                        I(P({}, e), {
                            isEligibleForTrial: !0,
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                        }),
                    ),
                }),
            }),
            (0, a.jsx)(C.E_, {
                label: "Only Stripe Card Enabled",
                children: (0, a.jsx)(F, {
                    children: (0, a.jsx)(
                        h.Z,
                        I(P({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                            paymentSourceTypeRestrictions: [E.He.CARD.valueOf()],
                        }),
                    ),
                }),
            }),
        ],
    });
}
let G = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    z = {
        GPAY_FILTERED: {
            wallets: {
                googlePay: "always",
                applePay: "never",
            },
        },
        APPLE_PAY_FILTERED: {
            wallets: {
                googlePay: "never",
                applePay: "always",
            },
        },
        APPLE_AND_GPAY_DISABLED: {
            wallets: {
                googlePay: "never",
                applePay: "never",
            },
        },
    },
    V = {
        appearance: {
            theme: "flat",
            variables: {
                spacingUnit: "12px",
                borderRadius: "36px",
            },
        },
    },
    H = {
        buttonType: {
            googlePay: "pay",
            applePay: "book",
        },
        buttonTheme: {
            applePay: "black",
            googlePay: "white",
        },
        buttonHeight: 40,
    },
    W = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : "undefined");
function K() {
    let [e, t] = r.useState(W(V)),
        [n, i] = r.useState(V),
        [o, s] = r.useState(W(H)),
        [c, m] = r.useState(H),
        [p, h] = r.useState(null),
        [x, b] = r.useState(
            (0, a.jsx)(C.DS, {
                errorLabel: G.CONFIGURABLE,
                elementOptions: V,
                children: (0, a.jsx)(l.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: H,
                }),
            }),
        );
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(u.Text, {
                variant: "text-md/normal",
                className: O.labelSpacing,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, a.jsxs)(u.Text, {
                variant: "text-md/normal",
                className: O.labelSpacing,
                children: [
                    (0, a.jsx)("b", { children: "elements.options:" }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)(C.lD, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: O.textarea,
                children: (0, a.jsx)(u.Kx8, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, a.jsxs)(u.Text, {
                variant: "text-md/normal",
                className: O.labelSpacing,
                children: [
                    (0, a.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)(C.lD, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)(C.lD, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: O.textarea,
                children: (0, a.jsx)(u.Kx8, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: o,
                    onChange: s,
                    rows: 7,
                }),
            }),
            null != p &&
                (0, a.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "text-danger",
                    children: p,
                }),
            (0, a.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: O.applyChangesButton,
                children: (0, a.jsx)(d.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: "Apply Changes",
                    onClick: () => {
                        try {
                            let t = JSON.parse(e),
                                n = JSON.parse(o);
                            b(null),
                                b(
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsxs)(u.Text, {
                                                variant: "text-md/normal",
                                                className: O.labelSpacing,
                                                children: ["Element updated at: ", new Date().toString()],
                                            }),
                                            (0, a.jsx)(C.DS, {
                                                errorLabel: G.CONFIGURABLE,
                                                elementOptions: t,
                                                children: (0, a.jsx)(l.ExpressCheckoutElement, {
                                                    onConfirm: (e) => {
                                                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                    },
                                                    options: n,
                                                }),
                                            }),
                                        ],
                                    }),
                                ),
                                i(t),
                                m(n),
                                h(null);
                        } catch (e) {
                            console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", e),
                                h("Error parsing JSON. Check console for more information.");
                        }
                    },
                }),
            }),
            (0, a.jsx)(u.Text, {
                variant: "text-md/normal",
                className: O.labelSpacing,
                children: "Current Element Options:",
            }),
            (0, a.jsx)(f.Z, {
                className: O.markdown,
                children: "".concat("``", " ").concat(W(n), " ").concat("``"),
            }),
            (0, a.jsx)(u.Text, {
                variant: "text-md/normal",
                className: O.labelSpacing,
                children: "Current Express Checkout Element Options:",
            }),
            (0, a.jsx)(f.Z, {
                className: O.markdown,
                children: "".concat("``", " ").concat(W(c), " ").concat("``"),
            }),
            x,
        ],
    });
}
function q() {
    return (0, a.jsxs)(C.$0, {
        children: [
            (0, a.jsx)(u.Heading, {
                variant: "heading-xl/semibold",
                children: "Stripe Express Checkout Buttons",
            }),
            (0, a.jsx)(C.E_, {
                label: G.DEFAULT,
                children: (0, a.jsx)("div", {
                    children: (0, a.jsx)(C.DS, {
                        errorLabel: G.DEFAULT,
                        children: (0, a.jsx)(l.ExpressCheckoutElement, {
                            onConfirm: (e) => {
                                console.log("ExpressCheckoutElement onConfirm event: ", e);
                            },
                            options: {},
                        }),
                    }),
                }),
            }),
            ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map((e) => {
                let t = G[e];
                return (0, a.jsx)(
                    C.E_,
                    {
                        label: t,
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    className: O.labelSpacing,
                                    children: "expressCheckoutElement.options:",
                                }),
                                (0, a.jsx)(f.Z, {
                                    className: O.markdown,
                                    children: "".concat("``").concat(W(z[e]), " ").concat("``"),
                                }),
                                (0, a.jsx)(C.DS, {
                                    errorLabel: t,
                                    children: (0, a.jsx)(l.ExpressCheckoutElement, {
                                        onConfirm: (e) => {
                                            console.log("ExpressCheckoutElement onConfirm event: ", e);
                                        },
                                        options: z[e],
                                    }),
                                }),
                            ],
                        }),
                    },
                    e,
                );
            }),
            (0, a.jsx)(C.E_, {
                label: G.CONFIGURABLE,
                children: (0, a.jsx)(K, {}),
            }),
        ],
    });
}
