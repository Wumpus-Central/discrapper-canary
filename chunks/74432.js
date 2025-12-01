n.d(t, { iZ: () => j }), n(388685);
var r = n(54381),
    i = n(575053),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(476365),
    c = n(483454),
    u = n(710845),
    d = n(409813),
    f = n(771206),
    p = n(938590),
    _ = n(590617),
    m = n(981631),
    h = n(701323),
    g = n(616926);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = new u.Z("PaymentElement.web.stories"),
    S = "Color Text",
    I = "Color Background",
    T = "Input Background Color",
    A = "Tab Background Color",
    C = (e) => ({
        key: d.h8.ADD_PAYMENT_STEPS,
        renderStep: () => (0, r.jsx)("div", {}),
        options: {
            renderHeader: !1,
            bodyClassName:
                "joined-payment-address-elements" === e
                    ? h.fullLengthPaymentElementStepModalBody
                    : h.paymentElementStepModalBody,
        },
    }),
    N = () => {
        let { elementsAppearanceOptions: e } = (0, l.M)();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    className: g.headerWithSpacing,
                    children: "Default Options",
                }),
                (0, r.jsx)("div", {
                    children: Object.entries(e).map((e) => {
                        let [t, n] = e;
                        return (0, r.jsx)(
                            p.T,
                            {
                                label: t,
                                value: n,
                            },
                            t,
                        );
                    }),
                }),
            ],
        });
    },
    P = (e) => {
        let {
                theme: t,
                colorText: n,
                colorBackground: a,
                inputBackgroundColor: u,
                tabBackgroundColor: p,
                storyType: E,
            } = e,
            y = (0, f.Z)(),
            { stripePaymentElementProps: S, stripeAddressElementProps: I } = (0, c.MM)({
                step: d.h8.PAYMENT_ELEMENT,
                handleStepChange: m.dG4,
                onBillingAddressChange: m.dG4,
                paymentElementsEnabled: !0,
                logger: v,
                shouldLogOnChangeEvents: !0,
                continueSessionToInitialStep: void 0,
            }),
            {
                elementsOptions: T,
                isLoading: A,
                setupError: P,
                customPaymentMethodIdsToSourceTypes: R,
            } = (0, l.S)({
                onSetupError: (e) => {
                    v.info("Stripe Payment Element options setup error: ", e);
                },
                elementsAppearanceOptions: {
                    theme: t,
                    colorText: n,
                    colorBackground: a,
                    inputBackgroundColor: u,
                    tabBackgroundColor: p,
                },
            });
        return A || null != P || null == y
            ? (0, r.jsx)(c.p7, {})
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)("div", {
                          style: { marginBottom: 16 },
                          children: (0, r.jsx)(s.M14, {
                              type: "info",
                              children:
                                  "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access.",
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: h.paymentElementStoryContainer,
                          children: [
                              (0, r.jsx)(_.H, {
                                  stepConfigs: [C(E)],
                                  children: (0, r.jsx)("div", {
                                      className: o()(h.paymentElementContainer, {
                                          [h.fullLengthPaymentElementContainer]:
                                              "joined-payment-address-elements" === E,
                                      }),
                                      children: (0, r.jsxs)(i.Elements, {
                                          stripe: y,
                                          options: b({}, T),
                                          children: [
                                              "stripe-address-element" === E
                                                  ? (0, r.jsx)("div", {
                                                        className: g.hidden,
                                                        children: (0, r.jsx)(
                                                            c.Q5,
                                                            O(b({}, S), {
                                                                customPaymentMethodIdsToSourceTypes: R,
                                                                step: d.h8.PAYMENT_ELEMENT,
                                                            }),
                                                        ),
                                                    })
                                                  : (0, r.jsx)(
                                                        c.Q5,
                                                        O(b({}, S), {
                                                            customPaymentMethodIdsToSourceTypes: R,
                                                            step: d.h8.PAYMENT_ELEMENT,
                                                        }),
                                                    ),
                                              ("joined-payment-address-elements" === E ||
                                                  "stripe-address-element" === E) &&
                                                  (0, r.jsx)(
                                                      c.wk,
                                                      O(b({}, I), {
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
                                                  ),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, r.jsx)(N, {}),
                          ],
                      }),
                  ],
              });
    },
    R = (e) => (0, r.jsx)(P, O(b({}, e), { storyType: "joined-payment-address-elements" })),
    w = (e) => (0, r.jsx)(P, O(b({}, e), { storyType: "stripe-payment-element" })),
    D = (e) => (0, r.jsx)(P, O(b({}, e), { storyType: "stripe-address-element" })),
    x = {
        theme: {
            label: "Theme",
            type: "select",
            options: ["flat", "stripe", "night"].map((e) => ({
                label: e.toLocaleUpperCase(),
                value: e,
            })),
            defaultValue: "flat",
        },
        colorText: {
            label: S,
            type: "text",
            defaultValue: "#2f3035",
        },
        colorBackground: {
            label: I,
            type: "text",
            defaultValue: "#ffffff",
        },
        inputBackgroundColor: {
            label: T,
            type: "text",
            defaultValue: "#00000014",
        },
        tabBackgroundColor: {
            label: A,
            type: "text",
            defaultValue: "#00000014",
        },
    },
    L = {
        name: "Joined Payment + Address",
        id: "joined-payment-address-elements",
        component: R,
        controls: b({}, x),
    },
    j = {
        title: "Payment Elements",
        stories: [
            {
                name: "Stripe Payment Element",
                id: "stripe-payment-element",
                component: w,
                controls: b({}, x),
            },
            {
                name: "Stripe Address Element",
                id: "stripe-address-element",
                component: D,
                controls: b({}, x),
            },
            L,
        ],
    };
