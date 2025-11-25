n.d(t, { _: () => g });
var r = n(54381),
    i = n(473749),
    a = n(772848),
    o = n(100527),
    s = n(906732),
    l = n(409813),
    c = n(276442),
    u = n(155992),
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = [
        {
            key: l.h8.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, r.jsx)(
                    c.J,
                    h(_({}, e), {
                        breadcrumbSteps: [l.h8.ADD_PAYMENT_STEPS],
                        onReturn: () => {},
                    }),
                ),
            options: { renderHeader: !0 },
        },
        {
            key: l.h8.REVIEW,
            renderStep: (e) =>
                (0, r.jsx)(
                    u.Gy,
                    h(_({}, e), {
                        originStep: l.h8.ADD_PAYMENT_STEPS,
                        text: "Review Step Placeholder",
                    }),
                ),
            options: {},
        },
    ],
    g = {
        name: "Add Payment Step",
        id: "add-payment-step",
        component: (e) => {
            let { useStripeElements: t } = e,
                { analyticsLocations: n } = (0, s.ZP)(o.Z.PAYMENT_FLOW_TEST_PAGE),
                l = i.useMemo(() => (0, a.Z)(), []),
                c = i.useCallback(() => {}, []);
            return (0, r.jsx)(
                u.Vy,
                {
                    stepConfigs: m,
                    analyticsLocations: n,
                    applicationId: d.XAJ,
                    initialPlanId: void 0,
                    skuId: null,
                    isGift: !1,
                    hideErrors: !1,
                    loadId: l,
                    purchaseType: d.GZQ.ONE_TIME,
                    disablePurchases: !0,
                    excludeSubscriptionPlansBySKU: !0,
                    renderHeader: () => null,
                    onClose: c,
                    onComplete: () => {},
                    paymentContextOverrides: { paymentElementsEnabled: t },
                },
                "".concat(l, "-").concat(t),
            );
        },
        controls: {
            useStripeElements: {
                label: "Use Stripe Elements",
                type: "boolean",
                defaultValue: !1,
            },
        },
    };
