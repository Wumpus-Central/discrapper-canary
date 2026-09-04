n.d(t, { E: () => x, O: () => _ });
var r = n(477900),
    l = n(582128),
    o = n(643909),
    i = n(503698),
    a = n.n(i),
    s = n(277984),
    u = n(942340),
    c = n(97352),
    d = n(158045),
    h = n(71532),
    C = n(169797),
    m = n(721836),
    p = n(783327),
    f = n(202541),
    g = n(375708),
    E = n(969933);
let S = { [f.WT.DAY]: "day", [f.WT.MONTH]: "month", [f.WT.YEAR]: "year" };
function y(e) {
    let { makePurchase: t, isSubmitting: n, setIsSubmitting: i } = e,
        u = (0, o.useElements)(),
        f = (0, p.S)(),
        [y, x] = l.useState(null),
        _ = l.useRef(null),
        I = l.useRef(null),
        {
            checkoutInvoicePreview: A,
            checkoutPaymentSources: k,
            hasFiatCheckoutPaymentSources: v,
            expressCheckoutSubmitting: N,
            setExpressCheckoutSubmitting: j,
        } = (0, m.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            hasFiatCheckoutPaymentSources: e.get("hasFiatCheckoutPaymentSources"),
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
            setExpressCheckoutSubmitting: e.setExpressCheckoutSubmitting,
        })),
        w = n || N,
        T = l.useCallback(
            (e) => {
                i(e), j(e);
            },
            [i, j],
        ),
        F = l.useCallback(() => {
            x(null), (_.current = null), T(!1);
        }, [T]),
        P = l.useCallback(
            async (e) => {
                try {
                    await t(e), T(!1);
                } catch (e) {
                    T(!1);
                }
            },
            [t, T],
        ),
        b = l.useCallback(() => {
            if (null != y && null != k && null != A && k.some((e) => e.id === y.id)) {
                if (_.current !== y.id) (_.current = y.id), I.current !== A.total ? T(!1) : P(y);
            }
        }, [y, k, A, P, T]),
        O = l.useCallback(
            async (e, t) => {
                let { stripe: n, elements: r, currentInvoiceTotal: l } = t;
                function o(t) {
                    F(),
                        e.paymentFailed({
                            reason: "invalid_payment_data",
                            message: t ?? "There was an error with creating this payment method.",
                        });
                }
                try {
                    T(!0), (I.current = l);
                    let { error: e } = await r.submit();
                    if (null != e) {
                        console.error("elements.submit failed: ", e), o(e.message);
                        return;
                    }
                    let { paymentMethod: t, error: i } = await n.createPaymentMethod({ elements: r });
                    if (null == t) {
                        console.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: t,
                            error: i,
                        }),
                            o();
                        return;
                    }
                    let { billingAddressInfo: a } = (0, h.uK)(t),
                        u = t.id,
                        c = await (0, s.IC)({ stripePaymentMethodId: u, billingAddress: a });
                    x(c);
                } catch (e) {
                    console.error("handleExpressCheckoutConfirm failed: ", e), o();
                }
            },
            [T, x, F],
        );
    l.useEffect(() => {
        null != y && b();
    }, [y, b]);
    let R = l.useMemo(() => {
        if (null == A) return {};
        let e = (function (e) {
            let t = e.invoiceItems.find((e) => null != e.subscriptionPlanId);
            if (null == t) return null;
            let n = c.A.get(t.subscriptionPlanId);
            if (null == n) return null;
            let { subtotal: r, tax: l, total: o, taxInclusive: i } = e,
                a = S[n.interval],
                s = n.intervalCount,
                u = (0, d.Mn)(n.id),
                h = i ? o - l : r;
            return {
                lineItems:
                    l > 0
                        ? [
                              { name: u, amount: h },
                              { name: g.intl.string(g.t.jiRvC7), amount: l },
                          ]
                        : [{ name: u, amount: h }],
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
        })(A);
        if (null == e) return {};
        let { lineItems: t, applePay: n } = e;
        return { billingAddressRequired: !0, lineItems: t, applePay: n };
    }, [A]);
    return null == f || null == u || null == A || (v && !N)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  w && (0, r.jsx)(C.Ig, {}),
                  (0, r.jsx)("div", {
                      className: a()({ [E.X]: w }),
                      children: (0, r.jsx)(o.ExpressCheckoutElement, {
                          onConfirm: (e) => O(e, { stripe: f, elements: u, currentInvoiceTotal: A.total }),
                          onCancel: F,
                          options: R,
                      }),
                  }),
              ],
          });
}
function x(e) {
    let { makePurchase: t, isSubmitting: n, setIsSubmitting: i } = e,
        a = (0, p.S)(),
        { elementsAppearance: s } = (0, u.E)(),
        c = (0, m.t4)((e) => e.checkoutInvoicePreview),
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
        : (0, r.jsx)(o.Elements, {
              stripe: a,
              options: d,
              children: (0, r.jsx)(y, { makePurchase: t, isSubmitting: n, setIsSubmitting: i }),
          });
}
function _(e) {
    let { stripeExpressCheckoutComponent: t, primaryCheckoutButton: n } = e,
        { hasFiatCheckoutPaymentSources: l, expressCheckoutSubmitting: o } = (0, m.t4)((e) => ({
            hasFiatCheckoutPaymentSources: e.get("hasFiatCheckoutPaymentSources"),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
        })),
        i = o || !l;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", { className: a()(E.n, { [E.X]: !i }), children: t }), !i && n],
    });
}
