t.d(a, { E: () => C, O: () => E });
var l = t(477900),
    n = t(582128),
    r = t(643909),
    s = t(503698),
    i = t.n(s),
    c = t(277984),
    o = t(942340),
    h = t(71532),
    d = t(480642),
    u = t(87725),
    m = t(783327),
    p = t(106446);
function x(e) {
    let { makePurchase: a, isSubmitting: t, setIsSubmitting: s } = e,
        o = (0, r.useElements)(),
        x = (0, m.S)(),
        [C, E] = n.useState(null),
        g = n.useRef(null),
        {
            checkoutInvoicePreview: v,
            checkoutPaymentSources: j,
            hasFiatCheckoutPaymentSources: f,
            checkoutInvoiceHasTax: A,
            expressCheckoutSubmitting: b,
            setExpressCheckoutSubmitting: y,
        } = (0, u.t4)((e) => {
            let a = null != e.checkoutInvoicePreview && e.checkoutInvoicePreview.tax > 0;
            return {
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                hasFiatCheckoutPaymentSources: e.get("hasFiatCheckoutPaymentSources"),
                checkoutPaymentSources: e.get("checkoutPaymentSources"),
                checkoutInvoiceHasTax: a,
                expressCheckoutSubmitting: e.expressCheckoutSubmitting,
                setExpressCheckoutSubmitting: e.setExpressCheckoutSubmitting,
            };
        }),
        I = t || b,
        M = n.useCallback(
            (e) => {
                s(e), y(e);
            },
            [s, y],
        ),
        T = n.useCallback(() => {
            E(null), (g.current = null), M(!1);
        }, [M]),
        R = n.useCallback(
            async (e) => {
                try {
                    await a(e), M(!1);
                } catch (e) {
                    M(!1);
                }
            },
            [a, M],
        ),
        L = n.useCallback(() => {
            if (null != C && null != j && null != v && j.some((e) => e.id === C.id)) {
                if (g.current !== C.id) (g.current = C.id), A ? M(!1) : R(C);
            }
        }, [C, j, v, R, M, A]),
        S = n.useCallback(
            async (e, a, t) => {
                try {
                    M(!0);
                    let { paymentMethod: l, error: n } = await a.createPaymentMethod({ elements: t });
                    if (null == l) {
                        console.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: l,
                            error: n,
                        }),
                            T(),
                            e.paymentFailed({
                                reason: "invalid_payment_data",
                                message: "There was an error with creating this payment method.",
                            });
                        return;
                    }
                    let { billingAddressInfo: r } = (0, h.uK)(l),
                        s = l.id,
                        i = await (0, c.IC)({ stripePaymentMethodId: s, billingAddress: r });
                    E(i);
                } catch (a) {
                    console.error("handleExpressCheckoutConfirm failed: ", a),
                        e.paymentFailed({
                            reason: "invalid_payment_data",
                            message: "There was an error with creating this payment method.",
                        }),
                        T();
                }
            },
            [M, E, T],
        );
    return (n.useEffect(() => {
        null != C && L();
    }, [C, L]),
    null == x || null == o || (f && !b))
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  I && (0, l.jsx)(d.Ig, {}),
                  (0, l.jsx)("div", {
                      className: i()({ [p.X]: I }),
                      children: (0, l.jsx)(r.ExpressCheckoutElement, {
                          onConfirm: (e) => S(e, x, o),
                          onCancel: T,
                          options: {},
                      }),
                  }),
              ],
          });
}
function C(e) {
    let { makePurchase: a, isSubmitting: t, setIsSubmitting: n } = e,
        {
            elementsOptions: s,
            isLoading: i,
            setupError: c,
            setupIntentSecret: h,
        } = (0, o.p)({
            onSetupError: (e) => {
                console.error("RootStripeExpressCheckout onSetupError", e);
            },
        }),
        d = (0, m.S)();
    return i || null != c || null == d || null == h
        ? null
        : (0, l.jsx)(r.Elements, {
              stripe: d,
              options: s,
              children: (0, l.jsx)(x, { makePurchase: a, isSubmitting: t, setIsSubmitting: n }),
          });
}
function E(e) {
    let { stripeExpressCheckoutComponent: a, primaryCheckoutButton: t } = e,
        { hasFiatCheckoutPaymentSources: n, expressCheckoutSubmitting: r } = (0, u.t4)((e) => ({
            hasFiatCheckoutPaymentSources: e.get("hasFiatCheckoutPaymentSources"),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
        })),
        s = r || !n;
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", { className: i()(p.n, { [p.X]: !s }), children: a }), !s && t],
    });
}
