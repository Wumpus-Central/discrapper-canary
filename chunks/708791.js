n.d(t, { E: () => I, O: () => g });
var r = n(477900),
    l = n(582128),
    i = n(643909),
    o = n(503698),
    a = n.n(o),
    s = n(277984),
    u = n(942340),
    c = n(97352),
    d = n(158045),
    C = n(71532),
    h = n(169797),
    E = n(206441),
    m = n(783327),
    p = n(202541),
    _ = n(375708),
    f = n(969933);
let S = { [p.WT.DAY]: "day", [p.WT.MONTH]: "month", [p.WT.YEAR]: "year" };
function A(e) {
    let { makePurchase: t, isSubmitting: n, setIsSubmitting: o } = e,
        u = (0, i.useElements)(),
        p = (0, m.S)(),
        [A, I] = l.useState(null),
        g = l.useRef(null),
        N = l.useRef(null),
        {
            checkoutInvoicePreview: T,
            checkoutPaymentSources: y,
            hasFiatCheckoutPaymentSources: x,
            expressCheckoutSubmitting: P,
            setExpressCheckoutSubmitting: R,
        } = (0, E.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            hasFiatCheckoutPaymentSources: e.get("hasFiatCheckoutPaymentSources"),
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
            setExpressCheckoutSubmitting: e.setExpressCheckoutSubmitting,
        })),
        k = n || P,
        v = l.useCallback(
            (e) => {
                o(e), R(e);
            },
            [o, R],
        ),
        w = l.useCallback(() => {
            I(null), (g.current = null), v(!1);
        }, [v]),
        M = l.useCallback(
            async (e) => {
                try {
                    await t(e), v(!1);
                } catch (e) {
                    v(!1);
                }
            },
            [t, v],
        ),
        F = l.useCallback(() => {
            if (null != A && null != y && null != T && y.some((e) => e.id === A.id)) {
                if (g.current !== A.id) (g.current = A.id), N.current !== T.total ? v(!1) : M(A);
            }
        }, [A, y, T, M, v]),
        O = l.useCallback(
            async (e, t) => {
                let { stripe: n, elements: r, currentInvoiceTotal: l } = t;
                function i(t) {
                    w(),
                        e.paymentFailed({
                            reason: "invalid_payment_data",
                            message: t ?? "There was an error with creating this payment method.",
                        });
                }
                try {
                    v(!0), (N.current = l);
                    let { error: e } = await r.submit();
                    if (null != e) {
                        console.error("elements.submit failed: ", e), i(e.message);
                        return;
                    }
                    let { paymentMethod: t, error: o } = await n.createPaymentMethod({ elements: r });
                    if (null == t) {
                        console.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: t,
                            error: o,
                        }),
                            i();
                        return;
                    }
                    let { billingAddressInfo: a } = (0, C.uK)(t),
                        u = t.id,
                        c = await (0, s.IC)({ stripePaymentMethodId: u, billingAddress: a });
                    I(c);
                } catch (e) {
                    console.error("handleExpressCheckoutConfirm failed: ", e), i();
                }
            },
            [v, I, w],
        );
    l.useEffect(() => {
        null != A && F();
    }, [A, F]);
    let U = l.useMemo(() => {
        if (null == T) return {};
        let e = (function (e) {
            let t = e.invoiceItems.find((e) => null != e.subscriptionPlanId);
            if (null == t) return null;
            let n = c.A.get(t.subscriptionPlanId);
            if (null == n) return null;
            let { subtotal: r, tax: l, total: i, taxInclusive: o } = e,
                a = S[n.interval],
                s = n.intervalCount,
                u = (0, d.Mn)(n.id),
                C = o ? i - l : r;
            return {
                lineItems:
                    l > 0
                        ? [
                              { name: u, amount: C },
                              { name: _.intl.string(_.t.jiRvC7), amount: l },
                          ]
                        : [{ name: u, amount: C }],
                applePay: {
                    recurringPaymentRequest: {
                        paymentDescription: u,
                        managementURL: `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}`,
                        regularBilling: {
                            amount: r,
                            label: u,
                            recurringPaymentIntervalUnit: a,
                            recurringPaymentIntervalCount: s,
                        },
                    },
                },
            };
        })(T);
        if (null == e) return {};
        let { lineItems: t, applePay: n } = e;
        return { billingAddressRequired: !0, lineItems: t, applePay: n };
    }, [T]);
    return null == p || null == u || null == T || (x && !P)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  k && (0, r.jsx)(h.Ig, {}),
                  (0, r.jsx)("div", {
                      className: a()({ [f.X]: k }),
                      children: (0, r.jsx)(i.ExpressCheckoutElement, {
                          onConfirm: (e) => O(e, { stripe: p, elements: u, currentInvoiceTotal: T.total }),
                          onCancel: w,
                          options: U,
                      }),
                  }),
              ],
          });
}
function I(e) {
    let { makePurchase: t, isSubmitting: n, setIsSubmitting: o } = e,
        a = (0, m.S)(),
        { elementsAppearance: s } = (0, u.E)(),
        c = (0, E.t4)((e) => e.checkoutInvoicePreview),
        d = l.useMemo(
            () =>
                null == c
                    ? null
                    : {
                          mode: "payment",
                          paymentMethodCreation: "manual",
                          amount: c.total,
                          currency: String(c.currency).toLowerCase(),
                          appearance: s,
                      },
            [c, s],
        );
    return null == a || null == d
        ? null
        : (0, r.jsx)(i.Elements, {
              stripe: a,
              options: d,
              children: (0, r.jsx)(A, { makePurchase: t, isSubmitting: n, setIsSubmitting: o }),
          });
}
function g(e) {
    let { stripeExpressCheckoutComponent: t, primaryCheckoutButton: n } = e,
        { hasFiatCheckoutPaymentSources: l, expressCheckoutSubmitting: i } = (0, E.t4)((e) => ({
            hasFiatCheckoutPaymentSources: e.get("hasFiatCheckoutPaymentSources"),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
        })),
        o = i || !l;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", { className: a()(f.n, { [f.X]: !o }), children: t }), !o && n],
    });
}
