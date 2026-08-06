t.d(a, { $: () => C, E: () => E });
var l = t(477900),
    n = t(582128),
    r = t(643909),
    s = t(503698),
    i = t.n(s),
    c = t(277984),
    o = t(942340),
    d = t(71532),
    h = t(480642),
    u = t(316915),
    m = t(783327),
    p = t(106446);
function x(e) {
    let { makePurchase: a, isSubmitting: t, setIsSubmitting: s } = e,
        o = (0, r.useElements)(),
        x = (0, m.S)(),
        [E, C] = n.useState(null),
        v = n.useRef(null),
        {
            checkoutInvoicePreview: j,
            checkoutPaymentSources: g,
            hasFiatCheckoutPaymentSources: A,
            checkoutInvoiceHasTax: f,
            setDisableCTAs: b,
        } = (0, u.t4)((e) => {
            let a = null != e.checkoutInvoicePreview && e.checkoutInvoicePreview.tax > 0;
            return {
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                hasFiatCheckoutPaymentSources: e.get("hasFiatCheckoutPaymentSources"),
                checkoutPaymentSources: e.get("checkoutPaymentSources"),
                checkoutInvoiceHasTax: a,
                setDisableCTAs: e.setDisableCTAs,
            };
        }),
        y = n.useCallback(
            (e) => {
                s(e), b(e);
            },
            [s, b],
        ),
        I = n.useCallback(() => {
            C(null), (v.current = null), y(!1);
        }, [y]),
        M = n.useCallback(
            async (e) => {
                try {
                    await a(e), y(!1);
                } catch (e) {
                    y(!1);
                }
            },
            [a, y],
        ),
        T = n.useCallback(() => {
            if (null != E && null != g && null != j && g.some((e) => e.id === E.id)) {
                if (v.current !== E.id) (v.current = E.id), f ? y(!1) : M(E);
            }
        }, [E, g, j, M, y, f]),
        R = n.useCallback(
            async (e, a, t) => {
                try {
                    y(!0);
                    let { paymentMethod: l, error: n } = await a.createPaymentMethod({ elements: t });
                    if (null == l) {
                        console.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: l,
                            error: n,
                        }),
                            I(),
                            e.paymentFailed({
                                reason: "invalid_payment_data",
                                message: "There was an error with creating this payment method.",
                            });
                        return;
                    }
                    let { billingAddressInfo: r } = (0, d.uK)(l),
                        s = l.id,
                        i = await (0, c.IC)({ stripePaymentMethodId: s, billingAddress: r });
                    C(i);
                } catch (a) {
                    console.error("handleExpressCheckoutConfirm failed: ", a),
                        e.paymentFailed({
                            reason: "invalid_payment_data",
                            message: "There was an error with creating this payment method.",
                        }),
                        I();
                }
            },
            [y, C, I],
        );
    return (n.useEffect(() => {
        null != E && T();
    }, [E, T]),
    A || null == x || null == o)
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  t && (0, l.jsx)(h.Ig, {}),
                  (0, l.jsx)("div", {
                      className: i()({ [p.X]: t }),
                      children: (0, l.jsx)(r.ExpressCheckoutElement, {
                          onConfirm: (e) => R(e, x, o),
                          onCancel: I,
                          options: {},
                      }),
                  }),
              ],
          });
}
function E(e) {
    let { makePurchase: a, isSubmitting: t, setIsSubmitting: n } = e,
        {
            elementsOptions: s,
            isLoading: i,
            setupError: c,
            setupIntentSecret: d,
        } = (0, o.p)({
            onSetupError: (e) => {
                console.error("RootStripeExpressCheckout onSetupError", e);
            },
        }),
        h = (0, m.S)();
    return i || null != c || null == h || null == d
        ? null
        : (0, l.jsx)(r.Elements, {
              stripe: h,
              options: s,
              children: (0, l.jsx)(x, { makePurchase: a, isSubmitting: t, setIsSubmitting: n }),
          });
}
function C(e) {
    let { stripeExpressCheckoutComponent: a, primaryCheckoutButton: t, isSubmitting: n } = e,
        r = (0, u.t4)((e) => e.get("hasFiatCheckoutPaymentSources")),
        s = n || !r;
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", { className: i()(p.n, { [p.X]: !s }), children: a }), !s && t],
    });
}
