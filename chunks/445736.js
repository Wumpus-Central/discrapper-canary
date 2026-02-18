l.d(t, { Wo: () => j });
var a = l(627968),
    n = l(342393),
    r = l(503698),
    i = l.n(r),
    s = l(397927),
    o = l(942340),
    u = l(211528),
    c = l(626584),
    d = l(166532),
    p = l(87952),
    m = l(646443),
    h = l(785205),
    x = l(652215),
    b = l(434598),
    g = l(749226);
let y = new c.A("PaymentElement.web.stories"),
    E = () => {
        let { elementsAppearanceOptions: e } = (0, o.E)();
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(s.Heading, { variant: "heading-lg/semibold", className: g.tm, children: "Default Options" }),
                (0, a.jsx)("div", {
                    children: Object.entries(e).map((e) => {
                        let [t, l] = e;
                        return (0, a.jsx)(m.l, { label: t, value: l }, t);
                    }),
                }),
            ],
        });
    },
    f = (e) => {
        let {
                theme: t,
                colorText: l,
                colorBackground: r,
                inputBackgroundColor: c,
                tabBackgroundColor: m,
                storyType: f,
            } = e,
            v = (0, p.A)(),
            { stripePaymentElementProps: S, stripeAddressElementProps: j } = (0, u.Lw)({
                step: d.pn.PAYMENT_ELEMENT,
                handleStepChange: x.tEg,
                onBillingAddressChange: x.tEg,
                paymentElementsEnabled: !0,
                logger: y,
                shouldLogOnChangeEvents: !0,
                continueSessionToInitialStep: void 0,
            }),
            {
                elementsOptions: T,
                isLoading: C,
                setupError: P,
                customPaymentMethodIdsToSourceTypes: R,
            } = (0, o.p)({
                onSetupError: (e) => {
                    y.info("Stripe Payment Element options setup error: ", e);
                },
                elementsAppearanceOptions: {
                    theme: t,
                    colorText: l,
                    colorBackground: r,
                    inputBackgroundColor: c,
                    tabBackgroundColor: m,
                },
            });
        return C || null != P || null == v
            ? (0, a.jsx)(u.eR, {})
            : (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)("div", {
                          style: { marginBottom: 16 },
                          children: (0, a.jsx)(s.wx6, {
                              type: "info",
                              children:
                                  "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access.",
                          }),
                      }),
                      (0, a.jsxs)("div", {
                          className: b.ny,
                          children: [
                              (0, a.jsx)(h.p, {
                                  stepConfigs: [
                                      {
                                          key: d.pn.ADD_PAYMENT_STEPS,
                                          renderStep: () => (0, a.jsx)("div", {}),
                                          options: {
                                              renderHeader: !1,
                                              bodyClassName: "joined-payment-address-elements" === f ? b.fF : b.u1,
                                          },
                                      },
                                  ],
                                  children: (0, a.jsx)("div", {
                                      className: i()(b.o6, { [b.X1]: "joined-payment-address-elements" === f }),
                                      children: (0, a.jsxs)(n.Elements, {
                                          stripe: v,
                                          options: { ...T },
                                          children: [
                                              "stripe-address-element" === f
                                                  ? (0, a.jsx)("div", {
                                                        className: g.R,
                                                        children: (0, a.jsx)(u.Wf, {
                                                            ...S,
                                                            customPaymentMethodIdsToSourceTypes: R,
                                                            step: d.pn.PAYMENT_ELEMENT,
                                                        }),
                                                    })
                                                  : (0, a.jsx)(u.Wf, {
                                                        ...S,
                                                        customPaymentMethodIdsToSourceTypes: R,
                                                        step: d.pn.PAYMENT_ELEMENT,
                                                    }),
                                              ("joined-payment-address-elements" === f ||
                                                  "stripe-address-element" === f) &&
                                                  (0, a.jsx)(u.KS, {
                                                      ...j,
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
                              (0, a.jsx)(E, {}),
                          ],
                      }),
                  ],
              });
    },
    v = {
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
    S = {
        name: "Joined Payment + Address",
        id: "joined-payment-address-elements",
        component: (e) => (0, a.jsx)(f, { ...e, storyType: "joined-payment-address-elements" }),
        controls: { ...v },
    },
    j = {
        title: "Payment Elements",
        stories: [
            {
                name: "Stripe Payment Element",
                id: "stripe-payment-element",
                component: (e) => (0, a.jsx)(f, { ...e, storyType: "stripe-payment-element" }),
                controls: { ...v },
            },
            {
                name: "Stripe Address Element",
                id: "stripe-address-element",
                component: (e) => (0, a.jsx)(f, { ...e, storyType: "stripe-address-element" }),
                controls: { ...v },
            },
            S,
        ],
    };
