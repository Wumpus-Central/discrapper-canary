l.d(t, { r: () => f });
var a = l(627968),
    n = l(64700),
    r = l(342393),
    i = l(821609),
    o = l(834730),
    s = l(260598),
    d = l(534514),
    c = l(558179),
    u = l(156312),
    p = l(252561),
    m = l(76488);
let b = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    h = {
        GPAY_FILTERED: { wallets: { googlePay: "always", applePay: "never" } },
        APPLE_PAY_FILTERED: { wallets: { googlePay: "never", applePay: "always" } },
        APPLE_AND_GPAY_DISABLED: { wallets: { googlePay: "never", applePay: "never" } },
    },
    x = { appearance: { theme: "flat", variables: { spacingUnit: "12px", borderRadius: "36px" } } },
    y = {
        buttonType: { googlePay: "pay", applePay: "book" },
        buttonTheme: { applePay: "black", googlePay: "white" },
        buttonHeight: 40,
    },
    v = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : "undefined");
function g() {
    let [e, t] = n.useState(v(x)),
        [l, d] = n.useState(x),
        [u, h] = n.useState(v(y)),
        [g, f] = n.useState(y),
        [_, E] = n.useState(null),
        [C, S] = n.useState(
            (0, a.jsx)(p.a8, {
                errorLabel: b.CONFIGURABLE,
                elementOptions: x,
                children: (0, a.jsx)(r.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: y,
                }),
            }),
        );
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(o.E, {
                variant: "text-md/normal",
                className: m.cW,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, a.jsxs)(o.E, {
                variant: "text-md/normal",
                className: m.cW,
                children: [
                    (0, a.jsx)("b", { children: "elements.options:" }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)(p.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: m.PC,
                children: (0, a.jsx)(s.f, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, a.jsxs)(o.E, {
                variant: "text-md/normal",
                className: m.cW,
                children: [
                    (0, a.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)(p.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)(p.Tu, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: m.PC,
                children: (0, a.jsx)(s.f, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: u,
                    onChange: h,
                    rows: 7,
                }),
            }),
            null != _ && (0, a.jsx)(o.E, { variant: "text-md/normal", color: "text-feedback-critical", children: _ }),
            (0, a.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: m.Ut,
                children: (0, a.jsx)(i.$, {
                    variant: "primary",
                    size: "sm",
                    text: "Apply Changes",
                    onClick: () => {
                        try {
                            let t = JSON.parse(e),
                                l = JSON.parse(u);
                            S(null),
                                S(
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsxs)(o.E, {
                                                variant: "text-md/normal",
                                                className: m.cW,
                                                children: ["Element updated at: ", new Date().toString()],
                                            }),
                                            (0, a.jsx)(p.a8, {
                                                errorLabel: b.CONFIGURABLE,
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
                                d(t),
                                f(l),
                                E(null);
                        } catch (e) {
                            console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", e),
                                E("Error parsing JSON. Check console for more information.");
                        }
                    },
                }),
            }),
            (0, a.jsx)(o.E, { variant: "text-md/normal", className: m.cW, children: "Current Element Options:" }),
            (0, a.jsx)(o.E, {
                variant: "text-md/normal",
                children: (0, a.jsx)(c.A, { className: m.wD, children: `\`\` ${v(l)} \`\`` }),
            }),
            (0, a.jsx)(o.E, {
                variant: "text-md/normal",
                className: m.cW,
                children: "Current Express Checkout Element Options:",
            }),
            (0, a.jsx)(o.E, {
                variant: "text-md/normal",
                children: (0, a.jsx)(c.A, { className: m.wD, children: `\`\` ${v(g)} \`\`` }),
            }),
            C,
        ],
    });
}
let f = {
    name: "Stripe Components",
    id: "stripe-components",
    component: function () {
        return (0, a.jsx)(u.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, a.jsxs)(p.wn, {
                children: [
                    (0, a.jsx)(d.D, { variant: "heading-xl/semibold", children: "Stripe Express Checkout Buttons" }),
                    (0, a.jsx)(p.Hq, {
                        label: b.DEFAULT,
                        children: (0, a.jsx)("div", {
                            children: (0, a.jsx)(p.a8, {
                                errorLabel: b.DEFAULT,
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
                        let t = b[e];
                        return (0, a.jsx)(
                            p.Hq,
                            {
                                label: t,
                                children: (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(o.E, {
                                            variant: "text-md/normal",
                                            className: m.cW,
                                            children: "expressCheckoutElement.options:",
                                        }),
                                        (0, a.jsx)(o.E, {
                                            variant: "text-md/normal",
                                            children: (0, a.jsx)(c.A, {
                                                className: m.wD,
                                                children: `\`\`${v(h[e])} \`\``,
                                            }),
                                        }),
                                        (0, a.jsx)(p.a8, {
                                            errorLabel: t,
                                            children: (0, a.jsx)(r.ExpressCheckoutElement, {
                                                onConfirm: (e) => {
                                                    console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                },
                                                options: h[e],
                                            }),
                                        }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    (0, a.jsx)(p.Hq, { label: b.CONFIGURABLE, children: (0, a.jsx)(g, {}) }),
                ],
            }),
        });
    },
};
