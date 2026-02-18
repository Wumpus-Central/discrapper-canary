l.d(t, { r: () => y });
var a = l(627968),
    n = l(64700),
    r = l(342393),
    i = l(732955),
    s = l(397927),
    o = l(558179),
    u = l(156312),
    c = l(252561),
    d = l(825057);
let p = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    m = {
        GPAY_FILTERED: { wallets: { googlePay: "always", applePay: "never" } },
        APPLE_PAY_FILTERED: { wallets: { googlePay: "never", applePay: "always" } },
        APPLE_AND_GPAY_DISABLED: { wallets: { googlePay: "never", applePay: "never" } },
    },
    h = { appearance: { theme: "flat", variables: { spacingUnit: "12px", borderRadius: "36px" } } },
    x = {
        buttonType: { googlePay: "pay", applePay: "book" },
        buttonTheme: { applePay: "black", googlePay: "white" },
        buttonHeight: 40,
    },
    b = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : "undefined");
function g() {
    let [e, t] = n.useState(b(h)),
        [l, u] = n.useState(h),
        [m, g] = n.useState(b(x)),
        [y, E] = n.useState(x),
        [f, v] = n.useState(null),
        [S, j] = n.useState(
            (0, a.jsx)(c.a8, {
                errorLabel: p.CONFIGURABLE,
                elementOptions: h,
                children: (0, a.jsx)(r.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: x,
                }),
            }),
        );
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(s.Text, {
                variant: "text-md/normal",
                className: d.cW,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, a.jsxs)(s.Text, {
                variant: "text-md/normal",
                className: d.cW,
                children: [
                    (0, a.jsx)("b", { children: "elements.options:" }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)(c.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: d.PC,
                children: (0, a.jsx)(s.fs1, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, a.jsxs)(s.Text, {
                variant: "text-md/normal",
                className: d.cW,
                children: [
                    (0, a.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)(c.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)(c.Tu, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: d.PC,
                children: (0, a.jsx)(s.fs1, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: m,
                    onChange: g,
                    rows: 7,
                }),
            }),
            null != f &&
                (0, a.jsx)(s.Text, { variant: "text-md/normal", color: "text-feedback-critical", children: f }),
            (0, a.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: d.Ut,
                children: (0, a.jsx)(i.$nd, {
                    variant: "primary",
                    size: "sm",
                    text: "Apply Changes",
                    onClick: () => {
                        try {
                            let t = JSON.parse(e),
                                l = JSON.parse(m);
                            j(null),
                                j(
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsxs)(s.Text, {
                                                variant: "text-md/normal",
                                                className: d.cW,
                                                children: ["Element updated at: ", new Date().toString()],
                                            }),
                                            (0, a.jsx)(c.a8, {
                                                errorLabel: p.CONFIGURABLE,
                                                elementOptions: t,
                                                children: (0, a.jsx)(r.ExpressCheckoutElement, {
                                                    onConfirm: (e) => {
                                                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                    },
                                                    options: l,
                                                }),
                                            }),
                                        ],
                                    }),
                                ),
                                u(t),
                                E(l),
                                v(null);
                        } catch (e) {
                            console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", e),
                                v("Error parsing JSON. Check console for more information.");
                        }
                    },
                }),
            }),
            (0, a.jsx)(s.Text, { variant: "text-md/normal", className: d.cW, children: "Current Element Options:" }),
            (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                children: (0, a.jsx)(o.A, { className: d.wD, children: `\`\` ${b(l)} \`\`` }),
            }),
            (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                className: d.cW,
                children: "Current Express Checkout Element Options:",
            }),
            (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                children: (0, a.jsx)(o.A, { className: d.wD, children: `\`\` ${b(y)} \`\`` }),
            }),
            S,
        ],
    });
}
let y = {
    name: "Stripe Components",
    id: "stripe-components",
    component: function () {
        return (0, a.jsx)(u.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, a.jsxs)(c.wn, {
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        children: "Stripe Express Checkout Buttons",
                    }),
                    (0, a.jsx)(c.Hq, {
                        label: p.DEFAULT,
                        children: (0, a.jsx)("div", {
                            children: (0, a.jsx)(c.a8, {
                                errorLabel: p.DEFAULT,
                                children: (0, a.jsx)(r.ExpressCheckoutElement, {
                                    onConfirm: (e) => {
                                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                                    },
                                    options: {},
                                }),
                            }),
                        }),
                    }),
                    ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map((e) => {
                        let t = p[e];
                        return (0, a.jsx)(
                            c.Hq,
                            {
                                label: t,
                                children: (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            className: d.cW,
                                            children: "expressCheckoutElement.options:",
                                        }),
                                        (0, a.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            children: (0, a.jsx)(o.A, {
                                                className: d.wD,
                                                children: `\`\`${b(m[e])} \`\``,
                                            }),
                                        }),
                                        (0, a.jsx)(c.a8, {
                                            errorLabel: t,
                                            children: (0, a.jsx)(r.ExpressCheckoutElement, {
                                                onConfirm: (e) => {
                                                    console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                },
                                                options: m[e],
                                            }),
                                        }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    (0, a.jsx)(c.Hq, { label: p.CONFIGURABLE, children: (0, a.jsx)(g, {}) }),
                ],
            }),
        });
    },
};
