n.d(t, { r: () => b }), n(457529), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(342393),
    s = n(732955),
    o = n(397927),
    l = n(558179),
    c = n(156312),
    u = n(252561),
    d = n(825057);
let f = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    p = {
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
    _ = {
        appearance: {
            theme: "flat",
            variables: {
                spacingUnit: "12px",
                borderRadius: "36px",
            },
        },
    },
    h = {
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
    m = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : "undefined"),
    g = "``";
function E() {
    let [e, t] = i.useState(m(_)),
        [n, c] = i.useState(_),
        [p, E] = i.useState(m(h)),
        [b, y] = i.useState(h),
        [O, A] = i.useState(null),
        [v, S] = i.useState(
            (0, r.jsx)(u.a8, {
                errorLabel: f.CONFIGURABLE,
                elementOptions: _,
                children: (0, r.jsx)(a.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: h,
                }),
            }),
        ),
        I = () => {
            try {
                let t = JSON.parse(e),
                    n = JSON.parse(p);
                S(null),
                    S(
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(o.Text, {
                                    variant: "text-md/normal",
                                    className: d.cW,
                                    children: ["Element updated at: ", new Date().toString()],
                                }),
                                (0, r.jsx)(u.a8, {
                                    errorLabel: f.CONFIGURABLE,
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
                    c(t),
                    y(n),
                    A(null);
            } catch (e) {
                console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", e),
                    A("Error parsing JSON. Check console for more information.");
            }
        };
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(o.Text, {
                variant: "text-md/normal",
                className: d.cW,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, r.jsxs)(o.Text, {
                variant: "text-md/normal",
                className: d.cW,
                children: [
                    (0, r.jsx)("b", { children: "elements.options:" }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(u.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.PC,
                children: (0, r.jsx)(o.fs1, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, r.jsxs)(o.Text, {
                variant: "text-md/normal",
                className: d.cW,
                children: [
                    (0, r.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(u.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(u.Tu, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.PC,
                children: (0, r.jsx)(o.fs1, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: p,
                    onChange: E,
                    rows: 7,
                }),
            }),
            null != O &&
                (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "text-feedback-critical",
                    children: O,
                }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: d.Ut,
                children: (0, r.jsx)(s.$nd, {
                    variant: "primary",
                    size: "sm",
                    text: "Apply Changes",
                    onClick: I,
                }),
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                className: d.cW,
                children: "Current Element Options:",
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                children: (0, r.jsx)(l.A, {
                    className: d.wD,
                    children: "".concat(g, " ").concat(m(n), " ").concat(g),
                }),
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                className: d.cW,
                children: "Current Express Checkout Element Options:",
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                children: (0, r.jsx)(l.A, {
                    className: d.wD,
                    children: "".concat(g, " ").concat(m(b), " ").concat(g),
                }),
            }),
            v,
        ],
    });
}
let b = {
    name: "Stripe Components",
    id: "stripe-components",
    component: function () {
        return (0, r.jsx)(c.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, r.jsxs)(u.wn, {
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        children: "Stripe Express Checkout Buttons",
                    }),
                    (0, r.jsx)(u.Hq, {
                        label: f.DEFAULT,
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(u.a8, {
                                errorLabel: f.DEFAULT,
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
                        let t = f[e];
                        return (0, r.jsx)(
                            u.Hq,
                            {
                                label: t,
                                children: (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            className: d.cW,
                                            children: "expressCheckoutElement.options:",
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            children: (0, r.jsx)(l.A, {
                                                className: d.wD,
                                                children: "".concat(g).concat(m(p[e]), " ").concat(g),
                                            }),
                                        }),
                                        (0, r.jsx)(u.a8, {
                                            errorLabel: t,
                                            children: (0, r.jsx)(a.ExpressCheckoutElement, {
                                                onConfirm: (e) => {
                                                    console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                },
                                                options: p[e],
                                            }),
                                        }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    (0, r.jsx)(u.Hq, {
                        label: f.CONFIGURABLE,
                        children: (0, r.jsx)(E, {}),
                    }),
                ],
            }),
        });
    },
};
