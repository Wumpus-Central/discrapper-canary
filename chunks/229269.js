n.d(t, { f: () => A }), n(388685), n(49124);
var r = n(951288),
    i = n(647438),
    a = n(289008),
    o = n(120356),
    s = n.n(o),
    l = n(159691),
    c = n(481060),
    u = n(801937),
    d = n(502109),
    f = n(241209),
    _ = n(563132),
    p = n(586585),
    h = n(439021),
    m = n(954824),
    g = n(450272),
    E = n(231338),
    b = n(388032),
    y = n(53511),
    O = n(822054);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A() {
    return (0, r.jsx)(_.PaymentContextProvider, {
        stepConfigs: [],
        skuIDs: [],
        activeSubscription: null,
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(C, {}),
                (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "text-feedback-info",
                    className: y.labelSpacing,
                    children:
                        "Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser.",
                }),
                (0, r.jsx)(N, {}),
                (0, r.jsx)(x, {}),
                (0, r.jsx)(Z, {}),
            ],
        }),
    });
}
function C() {
    let [e, t] = i.useState("discord://".concat(location.host, "/feature/apple-payment-link")),
        n = () => {
            console.log("Opening deep link... ", e),
                m.Z.launch(e, (e) => {
                    console.log("onDone response: ", e);
                });
        };
    return (0, r.jsxs)(g.$0, {
        children: [
            (0, r.jsx)(c.X6q, {
                variant: "heading-xl/semibold",
                children: "Deeplinking",
            }),
            (0, r.jsxs)(g.E_, {
                label: "Test Deeplinking with a Custom Path",
                direction: "vertical",
                children: [
                    (0, r.jsx)(c.oil, {
                        value: e,
                        onChange: (e) => t(e),
                        placeholder: "Enter DeepLink Url",
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(l.zxk, {
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
function N() {
    return (0, r.jsxs)(g.$0, {
        children: [
            (0, r.jsx)(c.X6q, {
                variant: "heading-xl/semibold",
                children: "Payment Request Components - Google Pay",
            }),
            (0, r.jsx)(g.E_, {
                label: "Google Pay - Default View",
                children: (0, r.jsx)(R, { paymentRequestWallet: "googlePay" }),
            }),
            (0, r.jsx)(g.E_, {
                label: "Google Pay - Connector View",
                children: (0, r.jsx)(R, {
                    paymentRequestWallet: "googlePay",
                    renderConnectorView: !0,
                }),
            }),
            (0, r.jsx)(g.E_, {
                label: "Google Pay - Add Payment Step Body Connector View",
                children: (0, r.jsx)(w, { paymentRequestWallet: "googlePay" }),
            }),
            (0, r.jsx)(c.X6q, {
                variant: "heading-xl/semibold",
                children: "Payment Request Components - Apple Pay",
            }),
            (0, r.jsx)(g.E_, {
                label: "Apple Pay - Default View",
                children: (0, r.jsx)(R, { paymentRequestWallet: "applePay" }),
            }),
            (0, r.jsx)(g.E_, {
                label: "Apple Pay - Connector View",
                children: (0, r.jsx)(R, {
                    renderConnectorView: !0,
                    paymentRequestWallet: "applePay",
                }),
            }),
            (0, r.jsx)(g.E_, {
                label: "Apple Pay - Add Payment Step Body Connector View",
                children: (0, r.jsx)(w, { paymentRequestWallet: "applePay" }),
            }),
        ],
    });
}
function R(e) {
    let t = i.useRef(null),
        n = {
            paymentLabel: b.intl.string(b.t.ZURqX1),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, r.jsx)(c.$jN, {
                style: { marginTop: 16 },
                type: c.RAz.PULSING_ELLIPSIS,
            }),
        };
    return e.renderStepBody
        ? (0, r.jsx)(h.t, I({}, n, e))
        : "applePay" === e.paymentRequestWallet
          ? (0, r.jsx)(d.Ch, I({}, n, e))
          : (0, r.jsx)(d.Tr, I({}, n, e));
}
function P(e) {
    let { children: t, footer: n, className: i } = e;
    return (0, r.jsx)("div", {
        className: s()(O.root, O.focusLock, O.small, O.rootWithShadow, y.modal, i),
        "aria-label": b.intl.string(b.t.eQ2bLi),
        children: (0, r.jsxs)("form", {
            className: y.form,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [
                (0, r.jsx)(c.hzk, {
                    className: y.scrollerContent,
                    children: t,
                }),
                n,
            ],
        }),
    });
}
function w(e) {
    let { paymentRequestWallet: t } = e,
        n = i.useRef(null),
        [a, o] = i.useState(!1),
        s = () => {
            null != n.current && n.current.show();
        };
    return (0, r.jsx)(P, {
        footer: (0, r.jsx)(p.Z, {
            primaryCTA: p.Z.CTAType.CONTINUE,
            primaryText: b.intl.string("applePay" === t ? b.t.WoXvJC : b.t.wnVVr6),
            primaryDisabled: !a,
            onPrimary: () => s(),
            onBack: () => {},
        }),
        children: (0, r.jsx)(R, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: n,
            onValidPaymentRequest: () => o(!0),
        }),
    });
}
function D(e) {
    let { children: t } = e;
    return (0, r.jsx)(P, {
        className: y.choosePaymentTypeModal,
        children: (0, r.jsx)("div", {
            className: y.choosePaymentTypeContainer,
            children: t,
        }),
    });
}
function x() {
    let e = {
        onChooseType: () => {},
        onStripePaymentMethodReceived: (e) => {
            console.log("onStripePaymentMethodReceived called: ", e);
        },
        isEligibleForTrial: !1,
    };
    return (0, r.jsxs)(g.$0, {
        children: [
            (0, r.jsx)(c.X6q, {
                variant: "heading-xl/semibold",
                children: "Choose Payment Source Type Component",
            }),
            (0, r.jsx)(g.E_, {
                label: "All Payment Request Wallets Enabled",
                children: (0, r.jsx)(D, {
                    children: (0, r.jsx)(
                        u.Z,
                        S(I({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: ["googlePay", "applePay"],
                        }),
                    ),
                }),
            }),
            (0, r.jsx)(g.E_, {
                label: "No Payment Wallets Enabled",
                children: (0, r.jsx)(D, {
                    children: (0, r.jsx)(
                        u.Z,
                        S(I({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                        }),
                    ),
                }),
            }),
            (0, r.jsx)(g.E_, {
                label: "Is Eligible for Trial",
                children: (0, r.jsx)(D, {
                    children: (0, r.jsx)(
                        u.Z,
                        S(I({}, e), {
                            isEligibleForTrial: !0,
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                        }),
                    ),
                }),
            }),
            (0, r.jsx)(g.E_, {
                label: "Only Stripe Card Enabled",
                children: (0, r.jsx)(D, {
                    children: (0, r.jsx)(
                        u.Z,
                        S(I({}, e), {
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
let L = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    j = {
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
    M = {
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
    U = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : "undefined"),
    G = "``";
function B() {
    let [e, t] = i.useState(U(k)),
        [n, o] = i.useState(k),
        [s, u] = i.useState(U(M)),
        [d, _] = i.useState(M),
        [p, h] = i.useState(null),
        [m, E] = i.useState(
            (0, r.jsx)(g.DS, {
                errorLabel: L.CONFIGURABLE,
                elementOptions: k,
                children: (0, r.jsx)(a.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: M,
                }),
            }),
        ),
        b = () => {
            try {
                let t = JSON.parse(e),
                    n = JSON.parse(s);
                E(null),
                    E(
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(c.Text, {
                                    variant: "text-md/normal",
                                    className: y.labelSpacing,
                                    children: ["Element updated at: ", new Date().toString()],
                                }),
                                (0, r.jsx)(g.DS, {
                                    errorLabel: L.CONFIGURABLE,
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
                    _(n),
                    h(null);
            } catch (e) {
                console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", e),
                    h("Error parsing JSON. Check console for more information.");
            }
        };
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(c.Text, {
                variant: "text-md/normal",
                className: y.labelSpacing,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, r.jsxs)(c.Text, {
                variant: "text-md/normal",
                className: y.labelSpacing,
                children: [
                    (0, r.jsx)("b", { children: "elements.options:" }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(g.lD, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: y.textarea,
                children: (0, r.jsx)(c.Kx8, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, r.jsxs)(c.Text, {
                variant: "text-md/normal",
                className: y.labelSpacing,
                children: [
                    (0, r.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(g.lD, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(g.lD, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: y.textarea,
                children: (0, r.jsx)(c.Kx8, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: s,
                    onChange: u,
                    rows: 7,
                }),
            }),
            null != p &&
                (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "text-danger",
                    children: p,
                }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: y.applyChangesButton,
                children: (0, r.jsx)(l.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: "Apply Changes",
                    onClick: b,
                }),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                className: y.labelSpacing,
                children: "Current Element Options:",
            }),
            (0, r.jsx)(f.Z, {
                className: y.markdown,
                children: "".concat(G, " ").concat(U(n), " ").concat(G),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                className: y.labelSpacing,
                children: "Current Express Checkout Element Options:",
            }),
            (0, r.jsx)(f.Z, {
                className: y.markdown,
                children: "".concat(G, " ").concat(U(d), " ").concat(G),
            }),
            m,
        ],
    });
}
function Z() {
    return (0, r.jsxs)(g.$0, {
        children: [
            (0, r.jsx)(c.X6q, {
                variant: "heading-xl/semibold",
                children: "Stripe Express Checkout Buttons",
            }),
            (0, r.jsx)(g.E_, {
                label: L.DEFAULT,
                children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(g.DS, {
                        errorLabel: L.DEFAULT,
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
                let t = L[e];
                return (0, r.jsx)(
                    g.E_,
                    {
                        label: t,
                        children: (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    className: y.labelSpacing,
                                    children: "expressCheckoutElement.options:",
                                }),
                                (0, r.jsx)(f.Z, {
                                    className: y.markdown,
                                    children: "".concat(G).concat(U(j[e]), " ").concat(G),
                                }),
                                (0, r.jsx)(g.DS, {
                                    errorLabel: t,
                                    children: (0, r.jsx)(a.ExpressCheckoutElement, {
                                        onConfirm: (e) => {
                                            console.log("ExpressCheckoutElement onConfirm event: ", e);
                                        },
                                        options: j[e],
                                    }),
                                }),
                            ],
                        }),
                    },
                    e,
                );
            }),
            (0, r.jsx)(g.E_, {
                label: L.CONFIGURABLE,
                children: (0, r.jsx)(B, {}),
            }),
        ],
    });
}
