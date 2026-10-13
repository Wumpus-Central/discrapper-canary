t.d(e, { E: () => g, O: () => y });
var l = t(477900),
    n = t(582128),
    s = t(643909),
    r = t(503698),
    h = t.n(r),
    i = t(277984),
    c = t(942340),
    o = t(97352),
    u = t(158045),
    d = t(71532),
    m = t(56763),
    A = t(504560),
    p = t(783327),
    P = t(202541),
    E = t(660183),
    M = t(969933);
let C = { [P.WT.DAY]: "day", [P.WT.MONTH]: "month", [P.WT.YEAR]: "year" };
function T(a) {
    let { makePurchase: e, isSubmitting: t, setIsSubmitting: r } = a,
        c = (0, s.useElements)(),
        P = (0, p.S)(),
        [T, g] = n.useState(null),
        y = n.useRef(null),
        L = n.useRef(null),
        {
            checkoutInvoicePreview: _,
            checkoutPaymentSources: x,
            hasFiatCheckoutPaymentSources: I,
            expressCheckoutSubmitting: R,
            setExpressCheckoutSubmitting: S,
        } = (0, A.t4)((a) => ({
            checkoutInvoicePreview: a.checkoutInvoicePreview,
            hasFiatCheckoutPaymentSources: a.get("hasFiatCheckoutPaymentSources"),
            checkoutPaymentSources: a.get("checkoutPaymentSources"),
            expressCheckoutSubmitting: a.expressCheckoutSubmitting,
            setExpressCheckoutSubmitting: a.setExpressCheckoutSubmitting,
        })),
        v = t || R,
        f = n.useCallback(
            (a) => {
                (r(a), S(a));
            },
            [r, S],
        ),
        H = n.useCallback(() => {
            (g(null), (y.current = null), f(!1));
        }, [f]),
        D = n.useCallback(
            async (a) => {
                try {
                    (await e(a), f(!1));
                } catch (a) {
                    f(!1);
                }
            },
            [e, f],
        ),
        j = n.useCallback(() => {
            if (null != T && null != x && null != _ && x.some((a) => a.id === T.id)) {
                if (y.current !== T.id) ((y.current = T.id), L.current !== _.total ? f(!1) : D(T));
            }
        }, [T, x, _, D, f]),
        N = n.useCallback(
            async (a, e) => {
                let { stripe: t, elements: l, currentInvoiceTotal: n } = e;
                function s(e) {
                    (H(),
                        a.paymentFailed({
                            reason: "invalid_payment_data",
                            message: e ?? "There was an error with creating this payment method.",
                        }));
                }
                try {
                    (f(!0), (L.current = n));
                    let { error: a } = await l.submit();
                    if (null != a) {
                        (console.error("elements.submit failed: ", a), s(a.message));
                        return;
                    }
                    let { paymentMethod: e, error: r } = await t.createPaymentMethod({ elements: l });
                    if (null == e) {
                        (console.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: e,
                            error: r,
                        }),
                            s());
                        return;
                    }
                    let { billingAddressInfo: h } = (0, d.uK)(e),
                        c = e.id,
                        o = await (0, i.IC)({ stripePaymentMethodId: c, billingAddress: h });
                    g(o);
                } catch (a) {
                    (console.error("handleExpressCheckoutConfirm failed: ", a), s());
                }
            },
            [f, g, H],
        );
    n.useEffect(() => {
        null != T && j();
    }, [T, j]);
    let Z = n.useMemo(() => {
        if (null == _) return {};
        let a = (function (a) {
            let e = a.invoiceItems.find((a) => null != a.subscriptionPlanId);
            if (null == e) return null;
            let t = o.A.get(e.subscriptionPlanId);
            if (null == t) return null;
            let { subtotal: l, tax: n, total: s, taxInclusive: r } = a,
                h = C[t.interval],
                i = t.intervalCount,
                c = (0, u.Mn)(t.id),
                d = r ? s - n : l;
            return {
                lineItems:
                    n > 0
                        ? [
                              { name: c, amount: d },
                              { name: E.intl.string(E.t.jiRvC7), amount: n },
                          ]
                        : [{ name: c, amount: d }],
                applePay: {
                    recurringPaymentRequest: {
                        paymentDescription: c,
                        managementURL: `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}`,
                        regularBilling: {
                            amount: l,
                            label: c,
                            recurringPaymentIntervalUnit: h,
                            recurringPaymentIntervalCount: i,
                        },
                    },
                },
            };
        })(_);
        if (null == a) return {};
        let { lineItems: e, applePay: t } = a;
        return { billingAddressRequired: !0, lineItems: e, applePay: t };
    }, [_]);
    return null == P || null == c || null == _ || (I && !R)
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  v && (0, l.jsx)(m.I, {}),
                  (0, l.jsx)("div", {
                      className: h()({ [M.X]: v }),
                      children: (0, l.jsx)(s.ExpressCheckoutElement, {
                          onConfirm: (a) => N(a, { stripe: P, elements: c, currentInvoiceTotal: _.total }),
                          onCancel: H,
                          options: Z,
                      }),
                  }),
              ],
          });
}
function g(a) {
    let { makePurchase: e, isSubmitting: t, setIsSubmitting: r } = a,
        h = (0, p.S)(),
        { elementsAppearance: i } = (0, c.E)(),
        o = (0, A.t4)((a) => a.checkoutInvoicePreview),
        u = n.useMemo(
            () =>
                null == o
                    ? null
                    : {
                          mode: "payment",
                          paymentMethodCreation: "manual",
                          amount: o.total,
                          currency: String(o.currency).toLowerCase(),
                          appearance: i,
                      },
            [o, i],
        );
    return null == h || null == u
        ? null
        : (0, l.jsx)(s.Elements, {
              stripe: h,
              options: u,
              children: (0, l.jsx)(T, { makePurchase: e, isSubmitting: t, setIsSubmitting: r }),
          });
}
function y(a) {
    let { stripeExpressCheckoutComponent: e, primaryCheckoutButton: t } = a,
        { hasFiatCheckoutPaymentSources: n, expressCheckoutSubmitting: s } = (0, A.t4)((a) => ({
            hasFiatCheckoutPaymentSources: a.get("hasFiatCheckoutPaymentSources"),
            expressCheckoutSubmitting: a.expressCheckoutSubmitting,
        })),
        r = s || !n;
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", { className: h()(M.n, { [M.X]: !r }), children: e }), !r && t],
    });
}
