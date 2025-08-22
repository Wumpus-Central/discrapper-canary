n.d(t, { f: () => C }), n(388685), n(49124);
var r = n(951288),
    i = n(647438),
    a = n(289008),
    o = n(120356),
    s = n.n(o),
    l = n(680018),
    c = n(159691),
    u = n(481060),
    d = n(801937),
    f = n(502109),
    _ = n(241209),
    p = n(563132),
    h = n(586585),
    m = n(439021),
    g = n(954824),
    E = n(450272),
    b = n(231338),
    y = n(388032),
    O = n(403645),
    v = n(818033);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C() {
    return (0, r.jsx)(p.PaymentContextProvider, {
        stepConfigs: [],
        skuIDs: [],
        activeSubscription: null,
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(N, {}),
                (0, r.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "text-feedback-info",
                    className: O.labelSpacing,
                    children:
                        "Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser.",
                }),
                (0, r.jsx)(R, {}),
                (0, r.jsx)(L, {}),
                (0, r.jsx)(V, {}),
            ],
        }),
    });
}
function N() {
    let [e, t] = i.useState("discord://".concat(location.host, "/feature/apple-payment-link")),
        n = () => {
            console.log("Opening deep link... ", e),
                g.Z.launch(e, (e) => {
                    console.log("onDone response: ", e);
                });
        };
    return (0, r.jsxs)(E.$0, {
        children: [
            (0, r.jsx)(u.X6q, {
                variant: "heading-xl/semibold",
                children: "Deeplinking",
            }),
            (0, r.jsxs)(E.E_, {
                label: "Test Deeplinking with a Custom Path",
                direction: "vertical",
                children: [
                    (0, r.jsx)(u.oil, {
                        value: e,
                        onChange: (e) => t(e),
                        placeholder: "Enter DeepLink Url",
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(l.z, {
                        variant: "primary",
                        size: "sm",
                        text: "Test Deeplink",
                        onClick: n,
                    }),
                ],
            }),
        ],
    });
}
function R() {
    return (0, r.jsxs)(E.$0, {
        children: [
            (0, r.jsx)(u.X6q, {
                variant: "heading-xl/semibold",
                children: "Payment Request Components - Google Pay",
            }),
            (0, r.jsx)(E.E_, {
                label: "Google Pay - Default View",
                children: (0, r.jsx)(P, { paymentRequestWallet: "googlePay" }),
            }),
            (0, r.jsx)(E.E_, {
                label: "Google Pay - Connector View",
                children: (0, r.jsx)(P, {
                    paymentRequestWallet: "googlePay",
                    renderConnectorView: !0,
                }),
            }),
            (0, r.jsx)(E.E_, {
                label: "Google Pay - Add Payment Step Body Connector View",
                children: (0, r.jsx)(D, { paymentRequestWallet: "googlePay" }),
            }),
            (0, r.jsx)(u.X6q, {
                variant: "heading-xl/semibold",
                children: "Payment Request Components - Apple Pay",
            }),
            (0, r.jsx)(E.E_, {
                label: "Apple Pay - Default View",
                children: (0, r.jsx)(P, { paymentRequestWallet: "applePay" }),
            }),
            (0, r.jsx)(E.E_, {
                label: "Apple Pay - Connector View",
                children: (0, r.jsx)(P, {
                    renderConnectorView: !0,
                    paymentRequestWallet: "applePay",
                }),
            }),
            (0, r.jsx)(E.E_, {
                label: "Apple Pay - Add Payment Step Body Connector View",
                children: (0, r.jsx)(D, { paymentRequestWallet: "applePay" }),
            }),
        ],
    });
}
function P(e) {
    let t = i.useRef(null),
        n = {
            paymentLabel: y.intl.string(y.t.ZURqX1),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, r.jsx)(u.$jN, {
                style: { marginTop: 16 },
                type: u.RAz.PULSING_ELLIPSIS,
            }),
        };
    return e.renderStepBody
        ? (0, r.jsx)(m.t, T({}, n, e))
        : "applePay" === e.paymentRequestWallet
          ? (0, r.jsx)(f.Ch, T({}, n, e))
          : (0, r.jsx)(f.Tr, T({}, n, e));
}
function w(e) {
    let { children: t, footer: n, className: i } = e;
    return (0, r.jsx)("div", {
        className: s()(v.root, v.focusLock, v.small, v.rootWithShadow, O.modal, i),
        "aria-label": y.intl.string(y.t.eQ2bLi),
        children: (0, r.jsxs)("form", {
            className: O.form,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [
                (0, r.jsx)(u.hzk, {
                    className: O.scrollerContent,
                    children: t,
                }),
                n,
            ],
        }),
    });
}
function D(e) {
    let { paymentRequestWallet: t } = e,
        n = i.useRef(null),
        [a, o] = i.useState(!1),
        s = () => {
            null != n.current && n.current.show();
        };
    return (0, r.jsx)(w, {
        footer: (0, r.jsx)(h.Z, {
            primaryCTA: h.Z.CTAType.CONTINUE,
            primaryText: y.intl.string("applePay" === t ? y.t.WoXvJC : y.t.wnVVr6),
            primaryDisabled: !a,
            onPrimary: () => s(),
            onBack: () => {},
        }),
        children: (0, r.jsx)(P, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: n,
            onValidPaymentRequest: () => o(!0),
        }),
    });
}
function x(e) {
    let { children: t } = e;
    return (0, r.jsx)(w, {
        className: O.choosePaymentTypeModal,
        children: (0, r.jsx)("div", {
            className: O.choosePaymentTypeContainer,
            children: t,
        }),
    });
}
function L() {
    let e = {
        onChooseType: () => {},
        onStripePaymentMethodReceived: (e) => {
            console.log("onStripePaymentMethodReceived called: ", e);
        },
        isEligibleForTrial: !1,
    };
    return (0, r.jsxs)(E.$0, {
        children: [
            (0, r.jsx)(u.X6q, {
                variant: "heading-xl/semibold",
                children: "Choose Payment Source Type Component",
            }),
            (0, r.jsx)(E.E_, {
                label: "All Payment Request Wallets Enabled",
                children: (0, r.jsx)(x, {
                    children: (0, r.jsx)(
                        d.Z,
                        A(T({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: ["googlePay", "applePay"],
                        }),
                    ),
                }),
            }),
            (0, r.jsx)(E.E_, {
                label: "No Payment Wallets Enabled",
                children: (0, r.jsx)(x, {
                    children: (0, r.jsx)(
                        d.Z,
                        A(T({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                        }),
                    ),
                }),
            }),
            (0, r.jsx)(E.E_, {
                label: "Is Eligible for Trial",
                children: (0, r.jsx)(x, {
                    children: (0, r.jsx)(
                        d.Z,
                        A(T({}, e), {
                            isEligibleForTrial: !0,
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                        }),
                    ),
                }),
            }),
            (0, r.jsx)(E.E_, {
                label: "Only Stripe Card Enabled",
                children: (0, r.jsx)(x, {
                    children: (0, r.jsx)(
                        d.Z,
                        A(T({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                            paymentSourceTypeRestrictions: [b.He.CARD.valueOf()],
                        }),
                    ),
                }),
            }),
        ],
    });
}
let j = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    M = {
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
    k = {
        appearance: {
            theme: "flat",
            variables: {
                spacingUnit: "12px",
                borderRadius: "36px",
            },
        },
    },
    U = {
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
    G = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : "undefined"),
    B = "``";
function Z() {
    let [e, t] = i.useState(G(k)),
        [n, o] = i.useState(k),
        [s, d] = i.useState(G(U)),
        [f, p] = i.useState(U),
        [h, m] = i.useState(null),
        [g, b] = i.useState(
            (0, r.jsx)(E.DS, {
                errorLabel: j.CONFIGURABLE,
                elementOptions: k,
                children: (0, r.jsx)(a.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: U,
                }),
            }),
        ),
        y = () => {
            try {
                let t = JSON.parse(e),
                    n = JSON.parse(s);
                b(null),
                    b(
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(u.Text, {
                                    variant: "text-md/normal",
                                    className: O.labelSpacing,
                                    children: ["Element updated at: ", new Date().toString()],
                                }),
                                (0, r.jsx)(E.DS, {
                                    errorLabel: j.CONFIGURABLE,
                                    elementOptions: t,
                                    children: (0, r.jsx)(a.ExpressCheckoutElement, {
                                        onConfirm: (e) => {
                                            console.log("ExpressCheckoutElement onConfirm event: ", e);
                                        },
                                        options: n,
                                    }),
                                }),
                            ],
                        }),
                    ),
                    o(t),
                    p(n),
                    m(null);
            } catch (e) {
                console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", e),
                    m("Error parsing JSON. Check console for more information.");
            }
        };
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(u.Text, {
                variant: "text-md/normal",
                className: O.labelSpacing,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, r.jsxs)(u.Text, {
                variant: "text-md/normal",
                className: O.labelSpacing,
                children: [
                    (0, r.jsx)("b", { children: "elements.options:" }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(E.lD, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: O.textarea,
                children: (0, r.jsx)(c.Kx, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, r.jsxs)(u.Text, {
                variant: "text-md/normal",
                className: O.labelSpacing,
                children: [
                    (0, r.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(E.lD, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(E.lD, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: O.textarea,
                children: (0, r.jsx)(c.Kx, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: s,
                    onChange: d,
                    rows: 7,
                }),
            }),
            null != h &&
                (0, r.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "text-danger",
                    children: h,
                }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: O.applyChangesButton,
                children: (0, r.jsx)(l.z, {
                    variant: "primary",
                    size: "sm",
                    text: "Apply Changes",
                    onClick: y,
                }),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                className: O.labelSpacing,
                children: "Current Element Options:",
            }),
            (0, r.jsx)(_.Z, {
                className: O.markdown,
                children: "".concat(B, " ").concat(G(n), " ").concat(B),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                className: O.labelSpacing,
                children: "Current Express Checkout Element Options:",
            }),
            (0, r.jsx)(_.Z, {
                className: O.markdown,
                children: "".concat(B, " ").concat(G(f), " ").concat(B),
            }),
            g,
        ],
    });
}
function V() {
    return (0, r.jsxs)(E.$0, {
        children: [
            (0, r.jsx)(u.X6q, {
                variant: "heading-xl/semibold",
                children: "Stripe Express Checkout Buttons",
            }),
            (0, r.jsx)(E.E_, {
                label: j.DEFAULT,
                children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(E.DS, {
                        errorLabel: j.DEFAULT,
                        children: (0, r.jsx)(a.ExpressCheckoutElement, {
                            onConfirm: (e) => {
                                console.log("ExpressCheckoutElement onConfirm event: ", e);
                            },
                            options: {},
                        }),
                    }),
                }),
            }),
            ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map((e) => {
                let t = j[e];
                return (0, r.jsx)(
                    E.E_,
                    {
                        label: t,
                        children: (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    className: O.labelSpacing,
                                    children: "expressCheckoutElement.options:",
                                }),
                                (0, r.jsx)(_.Z, {
                                    className: O.markdown,
                                    children: "".concat(B).concat(G(M[e]), " ").concat(B),
                                }),
                                (0, r.jsx)(E.DS, {
                                    errorLabel: t,
                                    children: (0, r.jsx)(a.ExpressCheckoutElement, {
                                        onConfirm: (e) => {
                                            console.log("ExpressCheckoutElement onConfirm event: ", e);
                                        },
                                        options: M[e],
                                    }),
                                }),
                            ],
                        }),
                    },
                    e,
                );
            }),
            (0, r.jsx)(E.E_, {
                label: j.CONFIGURABLE,
                children: (0, r.jsx)(Z, {}),
            }),
        ],
    });
}
