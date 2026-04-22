l.d(t, { Wo: () => S });
var a = l(627968),
    n = l(342393),
    r = l(503698),
    i = l.n(r),
    o = l(534514),
    s = l(683071),
    d = l(942340),
    c = l(211528),
    u = l(626584),
    p = l(166532),
    m = l(87952),
    b = l(646443),
    h = l(785205),
    x = l(652215),
    y = l(935377),
    v = l(439519);
let g = new u.A("PaymentElement.web.stories"),
    f = () => {
        let { elementsAppearanceOptions: e } = (0, d.E)();
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(o.D, { variant: "heading-lg/semibold", className: v.tm, children: "Default Options" }),
                (0, a.jsx)("div", {
                    children: Object.entries(e).map((e) => {
                        let [t, l] = e;
                        return (0, a.jsx)(b.l, { label: t, value: l }, t);
                    }),
                }),
            ],
        });
    },
    _ = (e) => {
        let {
                theme: t,
                colorText: l,
                colorBackground: r,
                inputBackgroundColor: o,
                tabBackgroundColor: u,
                storyType: b,
            } = e,
            _ = (0, m.A)(),
            { stripePaymentElementProps: E, stripeAddressElementProps: C } = (0, c.wD)({
                step: p.pn.PAYMENT_ELEMENT,
                handleStepChange: x.tEg,
                onBillingAddressChange: x.tEg,
                paymentElementsEnabled: !0,
                logger: g,
                shouldLogOnChangeEvents: !0,
                continueSessionToInitialStep: void 0,
            }),
            {
                elementsOptions: S,
                isLoading: j,
                setupError: T,
                customPaymentMethodIdsToSourceTypes: P,
            } = (0, d.p)({
                onSetupError: (e) => {
                    g.info("Stripe Payment Element options setup error: ", e);
                },
                elementsAppearanceOptions: {
                    theme: t,
                    colorText: l,
                    colorBackground: r,
                    inputBackgroundColor: o,
                    tabBackgroundColor: u,
                },
            });
        return j || null != T || null == _
            ? (0, a.jsx)(c.eR, {})
            : (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)("div", {
                          style: { marginBottom: 16 },
                          children: (0, a.jsx)(s.w, {
                              type: "info",
                              children:
                                  "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access.",
                          }),
                      }),
                      (0, a.jsxs)("div", {
                          className: y.ny,
                          children: [
                              (0, a.jsx)(h.p, {
                                  stepConfigs: [
                                      {
                                          key: p.pn.ADD_PAYMENT_STEPS,
                                          renderStep: () => (0, a.jsx)("div", {}),
                                          options: {
                                              renderHeader: !1,
                                              bodyClassName: "joined-payment-address-elements" === b ? y.fF : y.u1,
                                          },
                                      },
                                  ],
                                  children: (0, a.jsx)("div", {
                                      className: i()(y.o6, { [y.X1]: "joined-payment-address-elements" === b }),
                                      children: (0, a.jsxs)(n.Elements, {
                                          stripe: _,
                                          options: { ...S },
                                          children: [
                                              "stripe-address-element" === b
                                                  ? (0, a.jsx)("div", {
                                                        className: v.R,
                                                        children: (0, a.jsx)(c.Wf, {
                                                            ...E,
                                                            customPaymentMethodIdsToSourceTypes: P,
                                                            step: p.pn.PAYMENT_ELEMENT,
                                                        }),
                                                    })
                                                  : (0, a.jsx)(c.Wf, {
                                                        ...E,
                                                        customPaymentMethodIdsToSourceTypes: P,
                                                        step: p.pn.PAYMENT_ELEMENT,
                                                    }),
                                              ("joined-payment-address-elements" === b ||
                                                  "stripe-address-element" === b) &&
                                                  (0, a.jsx)(c.KS, {
                                                      ...C,
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
                              (0, a.jsx)(f, {}),
                          ],
                      }),
                  ],
              });
    },
    E = {
        theme: {
            label: "Theme",
            type: "select",
            options: ["flat", "stripe", "night"].map((e) => ({ label: e.toLocaleUpperCase(), value: e })),
            defaultValue: "flat",
        },
        colorText: { label: "Color Text", type: "text", defaultValue: "#2f3035" },
        colorBackground: { label: "Color Background", type: "text", defaultValue: "#ffffff" },
        inputBackgroundColor: { label: "Input Background Color", type: "text", defaultValue: "#00000014" },
        tabBackgroundColor: { label: "Tab Background Color", type: "text", defaultValue: "#00000014" },
    },
    C = {
        name: "Joined Payment + Address",
        id: "joined-payment-address-elements",
        component: (e) => (0, a.jsx)(_, { ...e, storyType: "joined-payment-address-elements" }),
        controls: { ...E },
    },
    S = {
        title: "Payment Elements",
        stories: [
            {
                name: "Stripe Payment Element",
                id: "stripe-payment-element",
                component: (e) => (0, a.jsx)(_, { ...e, storyType: "stripe-payment-element" }),
                controls: { ...E },
            },
            {
                name: "Stripe Address Element",
                id: "stripe-address-element",
                component: (e) => (0, a.jsx)(_, { ...e, storyType: "stripe-address-element" }),
                controls: { ...E },
            },
            C,
        ],
    };
