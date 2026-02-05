"use strict";
n.d(t, { Wo: () => L });
var r = n(627968),
    i = n(342393),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(942340),
    u = n(211528),
    c = n(626584),
    d = n(166532),
    _ = n(87952),
    f = n(646443),
    p = n(785205),
    h = n(652215),
    m = n(434598),
    g = n(749226);
let E = new c.A("PaymentElement.web.stories"),
    A = "Color Text",
    I = "Color Background",
    T = "Input Background Color",
    y = "Tab Background Color",
    S = (e) => ({
        key: d.pn.ADD_PAYMENT_STEPS,
        renderStep: () => (0, r.jsx)("div", {}),
        options: { renderHeader: !1, bodyClassName: "joined-payment-address-elements" === e ? m.fF : m.u1 },
    }),
    v = () => {
        let { elementsAppearanceOptions: e } = (0, l.E)();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(o.Heading, { variant: "heading-lg/semibold", className: g.tm, children: "Default Options" }),
                (0, r.jsx)("div", {
                    children: Object.entries(e).map((e) => {
                        let [t, n] = e;
                        return (0, r.jsx)(f.l, { label: t, value: n }, t);
                    }),
                }),
            ],
        });
    },
    C = (e) => {
        let {
                theme: t,
                colorText: n,
                colorBackground: a,
                inputBackgroundColor: c,
                tabBackgroundColor: f,
                storyType: A,
            } = e,
            I = (0, _.A)(),
            { stripePaymentElementProps: T, stripeAddressElementProps: y } = (0, u.Lw)({
                step: d.pn.PAYMENT_ELEMENT,
                handleStepChange: h.tEg,
                onBillingAddressChange: h.tEg,
                paymentElementsEnabled: !0,
                logger: E,
                shouldLogOnChangeEvents: !0,
                continueSessionToInitialStep: void 0,
            }),
            {
                elementsOptions: C,
                isLoading: b,
                setupError: N,
                customPaymentMethodIdsToSourceTypes: R,
            } = (0, l.p)({
                onSetupError: (e) => {
                    E.info("Stripe Payment Element options setup error: ", e);
                },
                elementsAppearanceOptions: {
                    theme: t,
                    colorText: n,
                    colorBackground: a,
                    inputBackgroundColor: c,
                    tabBackgroundColor: f,
                },
            });
        return b || null != N || null == I
            ? (0, r.jsx)(u.eR, {})
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)("div", {
                          style: { marginBottom: 16 },
                          children: (0, r.jsx)(o.wx6, {
                              type: "info",
                              children:
                                  "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access.",
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: m.ny,
                          children: [
                              (0, r.jsx)(p.p, {
                                  stepConfigs: [S(A)],
                                  children: (0, r.jsx)("div", {
                                      className: s()(m.o6, { [m.X1]: "joined-payment-address-elements" === A }),
                                      children: (0, r.jsxs)(i.Elements, {
                                          stripe: I,
                                          options: { ...C },
                                          children: [
                                              "stripe-address-element" === A
                                                  ? (0, r.jsx)("div", {
                                                        className: g.R,
                                                        children: (0, r.jsx)(u.Wf, {
                                                            ...T,
                                                            customPaymentMethodIdsToSourceTypes: R,
                                                            step: d.pn.PAYMENT_ELEMENT,
                                                        }),
                                                    })
                                                  : (0, r.jsx)(u.Wf, {
                                                        ...T,
                                                        customPaymentMethodIdsToSourceTypes: R,
                                                        step: d.pn.PAYMENT_ELEMENT,
                                                    }),
                                              ("joined-payment-address-elements" === A ||
                                                  "stripe-address-element" === A) &&
                                                  (0, r.jsx)(u.KS, {
                                                      ...y,
                                                      billingAddressInfo: {
                                                          email: "",
                                                          name: "",
                                                          country: "",
                                                          line1: "",
                                                          line2: "",
                                                          city: "",
                                                          postalCode: "",
                                                          state: "",
                                                      },
                                                  }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, r.jsx)(v, {}),
                          ],
                      }),
                  ],
              });
    },
    b = (e) => (0, r.jsx)(C, { ...e, storyType: "joined-payment-address-elements" }),
    N = (e) => (0, r.jsx)(C, { ...e, storyType: "stripe-payment-element" }),
    R = (e) => (0, r.jsx)(C, { ...e, storyType: "stripe-address-element" }),
    O = {
        theme: {
            label: "Theme",
            type: "select",
            options: ["flat", "stripe", "night"].map((e) => ({ label: e.toLocaleUpperCase(), value: e })),
            defaultValue: "flat",
        },
        colorText: { label: A, type: "text", defaultValue: "#2f3035" },
        colorBackground: { label: I, type: "text", defaultValue: "#ffffff" },
        inputBackgroundColor: { label: T, type: "text", defaultValue: "#00000014" },
        tabBackgroundColor: { label: y, type: "text", defaultValue: "#00000014" },
    },
    D = { name: "Joined Payment + Address", id: "joined-payment-address-elements", component: b, controls: { ...O } },
    L = {
        title: "Payment Elements",
        stories: [
            { name: "Stripe Payment Element", id: "stripe-payment-element", component: N, controls: { ...O } },
            { name: "Stripe Address Element", id: "stripe-address-element", component: R, controls: { ...O } },
            D,
        ],
    };
