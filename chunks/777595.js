n.d(t, { e: () => g });
var r = n(627968),
    i = n(64700),
    a = n(835245),
    s = n(793574),
    o = n(688810),
    l = n(166532),
    c = n(735305),
    u = n(412463),
    d = n(652215);
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
function p(e) {
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
function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = [
        {
            key: l.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, r.jsx)(
                    c.x,
                    h(p({}, e), {
                        breadcrumbSteps: [l.pn.ADD_PAYMENT_STEPS],
                        onReturn: () => {},
                    }),
                ),
            options: { renderHeader: !0 },
        },
        {
            key: l.pn.REVIEW,
            renderStep: (e) =>
                (0, r.jsx)(
                    u.eO,
                    h(p({}, e), {
                        originStep: l.pn.ADD_PAYMENT_STEPS,
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
                { analyticsLocations: n } = (0, o.Ay)(s.A.PAYMENT_FLOW_TEST_PAGE),
                l = i.useMemo(() => (0, a.A)(), []),
                c = i.useCallback(() => {}, []);
            return (0, r.jsx)(
                u.dL,
                {
                    stepConfigs: m,
                    analyticsLocations: n,
                    applicationId: d.FYj,
                    initialPlanId: void 0,
                    skuId: null,
                    isGift: !1,
                    hideErrors: !1,
                    loadId: l,
                    purchaseType: d.VVm.ONE_TIME,
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
