n.d(t, { E: () => C, O: () => g });
var a = n(477900),
    r = n(582128),
    i = n(643909),
    l = n(503698),
    u = n.n(l),
    s = n(277984),
    o = n(942340),
    c = n(97352),
    h = n(158045),
    m = n(71532),
    A = n(169797),
    p = n(661899),
    d = n(783327),
    y = n(202541),
    P = n(375708),
    S = n(969933);
let E = { [y.WT.DAY]: "day", [y.WT.MONTH]: "month", [y.WT.YEAR]: "year" };
function T(e) {
    let { makePurchase: t, isSubmitting: n, setIsSubmitting: l } = e,
        o = (0, i.useElements)(),
        y = (0, d.S)(),
        [T, C] = r.useState(null),
        g = r.useRef(null),
        b = r.useRef(null),
        {
            checkoutInvoicePreview: _,
            checkoutPaymentSources: M,
            hasFiatCheckoutPaymentSources: R,
            expressCheckoutSubmitting: f,
            setExpressCheckoutSubmitting: O,
        } = (0, p.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            hasFiatCheckoutPaymentSources: e.get("hasFiatCheckoutPaymentSources"),
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
            setExpressCheckoutSubmitting: e.setExpressCheckoutSubmitting,
        })),
        I = n || f,
        k = r.useCallback(
            (e) => {
                (l(e), O(e));
            },
            [l, O],
        ),
        L = r.useCallback(() => {
            (C(null), (g.current = null), k(!1));
        }, [k]),
        N = r.useCallback(
            async (e) => {
                try {
                    (await t(e), k(!1));
                } catch (e) {
                    k(!1);
                }
            },
            [t, k],
        ),
        Y = r.useCallback(() => {
            if (null != T && null != M && null != _ && M.some((e) => e.id === T.id)) {
                if (g.current !== T.id) ((g.current = T.id), b.current !== _.total ? k(!1) : N(T));
            }
        }, [T, M, _, N, k]),
        x = r.useCallback(
            async (e, t) => {
                let { stripe: n, elements: a, currentInvoiceTotal: r } = t;
                function i(t) {
                    (L(),
                        e.paymentFailed({
                            reason: "invalid_payment_data",
                            message: t ?? "There was an error with creating this payment method.",
                        }));
                }
                try {
                    (k(!0), (b.current = r));
                    let { error: e } = await a.submit();
                    if (null != e) {
                        (console.error("elements.submit failed: ", e), i(e.message));
                        return;
                    }
                    let { paymentMethod: t, error: l } = await n.createPaymentMethod({ elements: a });
                    if (null == t) {
                        (console.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: t,
                            error: l,
                        }),
                            i());
                        return;
                    }
                    let { billingAddressInfo: u } = (0, m.uK)(t),
                        o = t.id,
                        c = await (0, s.IC)({ stripePaymentMethodId: o, billingAddress: u });
                    C(c);
                } catch (e) {
                    (console.error("handleExpressCheckoutConfirm failed: ", e), i());
                }
            },
            [k, C, L],
        );
    r.useEffect(() => {
        null != T && Y();
    }, [T, Y]);
    let v = r.useMemo(() => {
        if (null == _) return {};
        let e = (function (e) {
            let t = e.invoiceItems.find((e) => null != e.subscriptionPlanId);
            if (null == t) return null;
            let n = c.A.get(t.subscriptionPlanId);
            if (null == n) return null;
            let { subtotal: a, tax: r, total: i, taxInclusive: l } = e,
                u = E[n.interval],
                s = n.intervalCount,
                o = (0, h.Mn)(n.id),
                m = l ? i - r : a;
            return {
                lineItems:
                    r > 0
                        ? [
                              { name: o, amount: m },
                              { name: P.intl.string(P.t.jiRvC7), amount: r },
                          ]
                        : [{ name: o, amount: m }],
                applePay: {
                    recurringPaymentRequest: {
                        paymentDescription: o,
                        managementURL: `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}`,
                        regularBilling: {
                            amount: a,
                            label: o,
                            recurringPaymentIntervalUnit: u,
                            recurringPaymentIntervalCount: s,
                        },
                    },
                },
            };
        })(_);
        if (null == e) return {};
        let { lineItems: t, applePay: n } = e;
        return { billingAddressRequired: !0, lineItems: t, applePay: n };
    }, [_]);
    return null == y || null == o || null == _ || (R && !f)
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  I && (0, a.jsx)(A.Ig, {}),
                  (0, a.jsx)("div", {
                      className: u()({ [S.X]: I }),
                      children: (0, a.jsx)(i.ExpressCheckoutElement, {
                          onConfirm: (e) => x(e, { stripe: y, elements: o, currentInvoiceTotal: _.total }),
                          onCancel: L,
                          options: v,
                      }),
                  }),
              ],
          });
}
function C(e) {
    let { makePurchase: t, isSubmitting: n, setIsSubmitting: l } = e,
        u = (0, d.S)(),
        { elementsAppearance: s } = (0, o.E)(),
        c = (0, p.t4)((e) => e.checkoutInvoicePreview),
        h = r.useMemo(
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
    return null == u || null == h
        ? null
        : (0, a.jsx)(i.Elements, {
              stripe: u,
              options: h,
              children: (0, a.jsx)(T, { makePurchase: t, isSubmitting: n, setIsSubmitting: l }),
          });
}
function g(e) {
    let { stripeExpressCheckoutComponent: t, primaryCheckoutButton: n } = e,
        { hasFiatCheckoutPaymentSources: r, expressCheckoutSubmitting: i } = (0, p.t4)((e) => ({
            hasFiatCheckoutPaymentSources: e.get("hasFiatCheckoutPaymentSources"),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
        })),
        l = i || !r;
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", { className: u()(S.n, { [S.X]: !l }), children: t }), !l && n],
    });
}
