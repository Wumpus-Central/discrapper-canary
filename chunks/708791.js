t.d(a, { E: () => j, O: () => A });
var l = t(477900),
    n = t(582128),
    r = t(643909),
    s = t(503698),
    i = t.n(s),
    c = t(277984),
    o = t(942340),
    u = t(97352),
    d = t(158045),
    h = t(71532),
    m = t(480642),
    p = t(87725),
    x = t(783327),
    C = t(202541),
    E = t(375708),
    g = t(106446);
let v = { [C.WT.DAY]: "day", [C.WT.MONTH]: "month", [C.WT.YEAR]: "year" };
function f(e) {
    let { makePurchase: a, isSubmitting: t, setIsSubmitting: s } = e,
        o = (0, r.useElements)(),
        C = (0, x.S)(),
        [f, j] = n.useState(null),
        A = n.useRef(null),
        b = n.useRef(null),
        {
            checkoutInvoicePreview: y,
            checkoutPaymentSources: I,
            hasFiatCheckoutPaymentSources: M,
            expressCheckoutSubmitting: T,
            setExpressCheckoutSubmitting: R,
        } = (0, p.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            hasFiatCheckoutPaymentSources: e.get("hasFiatCheckoutPaymentSources"),
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
            setExpressCheckoutSubmitting: e.setExpressCheckoutSubmitting,
        })),
        L = t || T,
        P = n.useCallback(
            (e) => {
                s(e), R(e);
            },
            [s, R],
        ),
        S = n.useCallback(() => {
            j(null), (A.current = null), P(!1);
        }, [P]),
        _ = n.useCallback(
            async (e) => {
                try {
                    await a(e), P(!1);
                } catch (e) {
                    P(!1);
                }
            },
            [a, P],
        ),
        U = n.useCallback(() => {
            if (null != f && null != I && null != y && I.some((e) => e.id === f.id)) {
                if (A.current !== f.id) (A.current = f.id), b.current !== y.total ? P(!1) : _(f);
            }
        }, [f, I, y, _, P]),
        k = n.useCallback(
            async (e, a) => {
                let { stripe: t, elements: l, currentInvoiceTotal: n } = a;
                function r(a) {
                    S(),
                        e.paymentFailed({
                            reason: "invalid_payment_data",
                            message: a ?? "There was an error with creating this payment method.",
                        });
                }
                try {
                    P(!0), (b.current = n);
                    let { error: e } = await l.submit();
                    if (null != e) {
                        console.error("elements.submit failed: ", e), r(e.message);
                        return;
                    }
                    let { paymentMethod: a, error: s } = await t.createPaymentMethod({ elements: l });
                    if (null == a) {
                        console.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: a,
                            error: s,
                        }),
                            r();
                        return;
                    }
                    let { billingAddressInfo: i } = (0, h.uK)(a),
                        o = a.id,
                        u = await (0, c.IC)({ stripePaymentMethodId: o, billingAddress: i });
                    j(u);
                } catch (e) {
                    console.error("handleExpressCheckoutConfirm failed: ", e), r();
                }
            },
            [P, j, S],
        );
    n.useEffect(() => {
        null != f && U();
    }, [f, U]);
    let w = n.useMemo(() => {
        if (null == y) return {};
        let e = (function (e) {
            let a = e.invoiceItems.find((e) => null != e.subscriptionPlanId);
            if (null == a) return null;
            let t = u.A.get(a.subscriptionPlanId);
            if (null == t) return null;
            let { subtotal: l, tax: n, total: r, taxInclusive: s } = e,
                i = v[t.interval],
                c = t.intervalCount,
                o = (0, d.Mn)(t.id),
                h = s ? r - n : l;
            return {
                lineItems:
                    n > 0
                        ? [
                              { name: o, amount: h },
                              { name: E.intl.string(E.t.jiRvC7), amount: n },
                          ]
                        : [{ name: o, amount: h }],
                applePay: {
                    recurringPaymentRequest: {
                        paymentDescription: o,
                        managementURL: `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}`,
                        regularBilling: {
                            amount: l,
                            label: o,
                            recurringPaymentIntervalUnit: i,
                            recurringPaymentIntervalCount: c,
                        },
                    },
                },
            };
        })(y);
        if (null == e) return {};
        let { lineItems: a, applePay: t } = e;
        return { billingAddressRequired: !0, lineItems: a, applePay: t };
    }, [y]);
    return null == C || null == o || null == y || (M && !T)
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  L && (0, l.jsx)(m.Ig, {}),
                  (0, l.jsx)("div", {
                      className: i()({ [g.X]: L }),
                      children: (0, l.jsx)(r.ExpressCheckoutElement, {
                          onConfirm: (e) => k(e, { stripe: C, elements: o, currentInvoiceTotal: y.total }),
                          onCancel: S,
                          options: w,
                      }),
                  }),
              ],
          });
}
function j(e) {
    let { makePurchase: a, isSubmitting: t, setIsSubmitting: s } = e,
        i = (0, x.S)(),
        { elementsAppearance: c } = (0, o.E)(),
        u = (0, p.t4)((e) => e.checkoutInvoicePreview),
        d = n.useMemo(
            () =>
                null == u
                    ? null
                    : {
                          mode: "payment",
                          paymentMethodCreation: "manual",
                          amount: u.total,
                          currency: String(u.currency).toLowerCase(),
                          appearance: c,
                      },
            [u, c],
        );
    return null == i || null == d
        ? null
        : (0, l.jsx)(r.Elements, {
              stripe: i,
              options: d,
              children: (0, l.jsx)(f, { makePurchase: a, isSubmitting: t, setIsSubmitting: s }),
          });
}
function A(e) {
    let { stripeExpressCheckoutComponent: a, primaryCheckoutButton: t } = e,
        { hasFiatCheckoutPaymentSources: n, expressCheckoutSubmitting: r } = (0, p.t4)((e) => ({
            hasFiatCheckoutPaymentSources: e.get("hasFiatCheckoutPaymentSources"),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
        })),
        s = r || !n;
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", { className: i()(g.n, { [g.X]: !s }), children: a }), !s && t],
    });
}
