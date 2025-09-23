n.d(t, { f: () => E }), n(388685), n(49124);
var a = n(951288),
    r = n(647438),
    i = n(289008),
    l = n(120356),
    s = n.n(l),
    o = n(159691),
    c = n(481060),
    d = n(801937),
    u = n(502109),
    m = n(241209),
    h = n(563132),
    p = n(586585),
    x = n(439021),
    f = n(954824),
    b = n(237012),
    g = n(231338),
    j = n(388032),
    v = n(306197),
    _ = n(818033);
function y(e) {
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
function C(e, t) {
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
function E() {
    return (0, a.jsx)(h.PaymentContextProvider, {
        stepConfigs: [],
        skuIDs: [],
        activeSubscription: null,
        children: (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(N, {}),
                (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "text-feedback-info",
                    className: v.labelSpacing,
                    children:
                        "Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser.",
                }),
                (0, a.jsx)(S, {}),
                (0, a.jsx)(R, {}),
                (0, a.jsx)(M, {}),
            ],
        }),
    });
}
function N() {
    let [e, t] = r.useState("discord://".concat(location.host, "/feature/apple-payment-link"));
    return (0, a.jsxs)(b.$0, {
        children: [
            (0, a.jsx)(c.X6q, {
                variant: "heading-xl/semibold",
                children: "Deeplinking",
            }),
            (0, a.jsxs)(b.E_, {
                label: "Test Deeplinking with a Custom Path",
                direction: "vertical",
                children: [
                    (0, a.jsx)(c.oil, {
                        value: e,
                        onChange: (e) => t(e),
                        placeholder: "Enter DeepLink Url",
                        fullWidth: !0,
                    }),
                    (0, a.jsx)(o.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: "Test Deeplink",
                        onClick: () => {
                            console.log("Opening deep link... ", e),
                                f.Z.launch(e, (e) => {
                                    console.log("onDone response: ", e);
                                });
                        },
                    }),
                ],
            }),
        ],
    });
}
function S() {
    return (0, a.jsxs)(b.$0, {
        children: [
            (0, a.jsx)(c.X6q, {
                variant: "heading-xl/semibold",
                children: "Payment Request Components - Google Pay",
            }),
            (0, a.jsx)(b.E_, {
                label: "Google Pay - Default View",
                children: (0, a.jsx)(O, { paymentRequestWallet: "googlePay" }),
            }),
            (0, a.jsx)(b.E_, {
                label: "Google Pay - Connector View",
                children: (0, a.jsx)(O, {
                    paymentRequestWallet: "googlePay",
                    renderConnectorView: !0,
                }),
            }),
            (0, a.jsx)(b.E_, {
                label: "Google Pay - Add Payment Step Body Connector View",
                children: (0, a.jsx)(P, { paymentRequestWallet: "googlePay" }),
            }),
            (0, a.jsx)(c.X6q, {
                variant: "heading-xl/semibold",
                children: "Payment Request Components - Apple Pay",
            }),
            (0, a.jsx)(b.E_, {
                label: "Apple Pay - Default View",
                children: (0, a.jsx)(O, { paymentRequestWallet: "applePay" }),
            }),
            (0, a.jsx)(b.E_, {
                label: "Apple Pay - Connector View",
                children: (0, a.jsx)(O, {
                    renderConnectorView: !0,
                    paymentRequestWallet: "applePay",
                }),
            }),
            (0, a.jsx)(b.E_, {
                label: "Apple Pay - Add Payment Step Body Connector View",
                children: (0, a.jsx)(P, { paymentRequestWallet: "applePay" }),
            }),
        ],
    });
}
function O(e) {
    let t = r.useRef(null),
        n = {
            paymentLabel: j.intl.string(j.t.ZURqX1),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, a.jsx)(c.$jN, {
                style: { marginTop: 16 },
                type: c.RAz.PULSING_ELLIPSIS,
            }),
        };
    return e.renderStepBody
        ? (0, a.jsx)(x.t, y({}, n, e))
        : "applePay" === e.paymentRequestWallet
          ? (0, a.jsx)(u.Ch, y({}, n, e))
          : (0, a.jsx)(u.Tr, y({}, n, e));
}
function T(e) {
    let { children: t, footer: n, className: r } = e;
    return (0, a.jsx)("div", {
        className: s()(_.root, _.focusLock, _.small, _.rootWithShadow, v.modal, r),
        "aria-label": j.intl.string(j.t.eQ2bLi),
        children: (0, a.jsxs)("form", {
            className: v.form,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [
                (0, a.jsx)(c.hzk, {
                    className: v.scrollerContent,
                    children: t,
                }),
                n,
            ],
        }),
    });
}
function P(e) {
    let { paymentRequestWallet: t } = e,
        n = r.useRef(null),
        [i, l] = r.useState(!1);
    return (0, a.jsx)(T, {
        footer: (0, a.jsx)(p.Z, {
            primaryCTA: p.Z.CTAType.CONTINUE,
            primaryText: j.intl.string("applePay" === t ? j.t.WoXvJC : j.t.wnVVr6),
            primaryDisabled: !i,
            onPrimary: () => void (null != n.current && n.current.show()),
            onBack: () => {},
        }),
        children: (0, a.jsx)(O, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: n,
            onValidPaymentRequest: () => l(!0),
        }),
    });
}
function k(e) {
    let { children: t } = e;
    return (0, a.jsx)(T, {
        className: v.choosePaymentTypeModal,
        children: (0, a.jsx)("div", {
            className: v.choosePaymentTypeContainer,
            children: t,
        }),
    });
}
function R() {
    let e = {
        onChooseType: () => {},
        onStripePaymentMethodReceived: (e) => {
            console.log("onStripePaymentMethodReceived called: ", e);
        },
        isEligibleForTrial: !1,
    };
    return (0, a.jsxs)(b.$0, {
        children: [
            (0, a.jsx)(c.X6q, {
                variant: "heading-xl/semibold",
                children: "Choose Payment Source Type Component",
            }),
            (0, a.jsx)(b.E_, {
                label: "All Payment Request Wallets Enabled",
                children: (0, a.jsx)(k, {
                    children: (0, a.jsx)(
                        d.Z,
                        C(y({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: ["googlePay", "applePay"],
                        }),
                    ),
                }),
            }),
            (0, a.jsx)(b.E_, {
                label: "No Payment Wallets Enabled",
                children: (0, a.jsx)(k, {
                    children: (0, a.jsx)(
                        d.Z,
                        C(y({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                        }),
                    ),
                }),
            }),
            (0, a.jsx)(b.E_, {
                label: "Is Eligible for Trial",
                children: (0, a.jsx)(k, {
                    children: (0, a.jsx)(
                        d.Z,
                        C(y({}, e), {
                            isEligibleForTrial: !0,
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                        }),
                    ),
                }),
            }),
            (0, a.jsx)(b.E_, {
                label: "Only Stripe Card Enabled",
                children: (0, a.jsx)(k, {
                    children: (0, a.jsx)(
                        d.Z,
                        C(y({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                            paymentSourceTypeRestrictions: [g.He.CARD.valueOf()],
                        }),
                    ),
                }),
            }),
        ],
    });
}
let I = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    w = {
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
    A = {
        appearance: {
            theme: "flat",
            variables: {
                spacingUnit: "12px",
                borderRadius: "36px",
            },
        },
    },
    Z = {
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
    D = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : "undefined");
function L() {
    let [e, t] = r.useState(D(A)),
        [n, l] = r.useState(A),
        [s, d] = r.useState(D(Z)),
        [u, h] = r.useState(Z),
        [p, x] = r.useState(null),
        [f, g] = r.useState(
            (0, a.jsx)(b.DS, {
                errorLabel: I.CONFIGURABLE,
                elementOptions: A,
                children: (0, a.jsx)(i.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: Z,
                }),
            }),
        );
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(c.Text, {
                variant: "text-md/normal",
                className: v.labelSpacing,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, a.jsxs)(c.Text, {
                variant: "text-md/normal",
                className: v.labelSpacing,
                children: [
                    (0, a.jsx)("b", { children: "elements.options:" }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)(b.lD, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: v.textarea,
                children: (0, a.jsx)(c.Kx8, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, a.jsxs)(c.Text, {
                variant: "text-md/normal",
                className: v.labelSpacing,
                children: [
                    (0, a.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)(b.lD, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)(b.lD, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: v.textarea,
                children: (0, a.jsx)(c.Kx8, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: s,
                    onChange: d,
                    rows: 7,
                }),
            }),
            null != p &&
                (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "text-danger",
                    children: p,
                }),
            (0, a.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: v.applyChangesButton,
                children: (0, a.jsx)(o.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: "Apply Changes",
                    onClick: () => {
                        try {
                            let t = JSON.parse(e),
                                n = JSON.parse(s);
                            g(null),
                                g(
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsxs)(c.Text, {
                                                variant: "text-md/normal",
                                                className: v.labelSpacing,
                                                children: ["Element updated at: ", new Date().toString()],
                                            }),
                                            (0, a.jsx)(b.DS, {
                                                errorLabel: I.CONFIGURABLE,
                                                elementOptions: t,
                                                children: (0, a.jsx)(i.ExpressCheckoutElement, {
                                                    onConfirm: (e) => {
                                                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                    },
                                                    options: n,
                                                }),
                                            }),
                                        ],
                                    }),
                                ),
                                l(t),
                                h(n),
                                x(null);
                        } catch (e) {
                            console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", e),
                                x("Error parsing JSON. Check console for more information.");
                        }
                    },
                }),
            }),
            (0, a.jsx)(c.Text, {
                variant: "text-md/normal",
                className: v.labelSpacing,
                children: "Current Element Options:",
            }),
            (0, a.jsx)(m.Z, {
                className: v.markdown,
                children: "".concat("``", " ").concat(D(n), " ").concat("``"),
            }),
            (0, a.jsx)(c.Text, {
                variant: "text-md/normal",
                className: v.labelSpacing,
                children: "Current Express Checkout Element Options:",
            }),
            (0, a.jsx)(m.Z, {
                className: v.markdown,
                children: "".concat("``", " ").concat(D(u), " ").concat("``"),
            }),
            f,
        ],
    });
}
function M() {
    return (0, a.jsxs)(b.$0, {
        children: [
            (0, a.jsx)(c.X6q, {
                variant: "heading-xl/semibold",
                children: "Stripe Express Checkout Buttons",
            }),
            (0, a.jsx)(b.E_, {
                label: I.DEFAULT,
                children: (0, a.jsx)("div", {
                    children: (0, a.jsx)(b.DS, {
                        errorLabel: I.DEFAULT,
                        children: (0, a.jsx)(i.ExpressCheckoutElement, {
                            onConfirm: (e) => {
                                console.log("ExpressCheckoutElement onConfirm event: ", e);
                            },
                            options: {},
                        }),
                    }),
                }),
            }),
            ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map((e) => {
                let t = I[e];
                return (0, a.jsx)(
                    b.E_,
                    {
                        label: t,
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    className: v.labelSpacing,
                                    children: "expressCheckoutElement.options:",
                                }),
                                (0, a.jsx)(m.Z, {
                                    className: v.markdown,
                                    children: "".concat("``").concat(D(w[e]), " ").concat("``"),
                                }),
                                (0, a.jsx)(b.DS, {
                                    errorLabel: t,
                                    children: (0, a.jsx)(i.ExpressCheckoutElement, {
                                        onConfirm: (e) => {
                                            console.log("ExpressCheckoutElement onConfirm event: ", e);
                                        },
                                        options: w[e],
                                    }),
                                }),
                            ],
                        }),
                    },
                    e,
                );
            }),
            (0, a.jsx)(b.E_, {
                label: I.CONFIGURABLE,
                children: (0, a.jsx)(L, {}),
            }),
        ],
    });
}
