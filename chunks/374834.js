n.d(t, { pl: () => N }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(409813),
    s = n(742956),
    l = n(126982),
    c = n(710094),
    u = n(74538),
    d = n(155992),
    f = n(863886),
    p = n(3383),
    _ = n(981631),
    m = n(474936),
    h = n(388032),
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
let v = [
        {
            key: o.h8.REVIEW,
            renderStep: (e) => (0, r.jsx)(c.l, b({}, e)),
            options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHq) },
        },
        {
            key: o.h8.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, r.jsx)(
                    d.Gy,
                    O(b({}, e), {
                        originStep: o.h8.REVIEW,
                        text: "Add Payment Steps Placeholder",
                    }),
                ),
            options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHq) },
        },
        {
            key: o.h8.CONFIRM,
            renderStep: (e) =>
                (0, r.jsx)(
                    d.Gy,
                    O(b({}, e), {
                        originStep: o.h8.REVIEW,
                        text: "Confirm Step Placeholder",
                    }),
                ),
            options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHq) },
        },
        {
            key: o.h8.PLAN_SELECT,
            renderStep: (e) =>
                (0, r.jsx)(
                    d.Gy,
                    O(b({}, e), {
                        originStep: o.h8.REVIEW,
                        text: "Plan Select Step Placeholder",
                    }),
                ),
            options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHq) },
        },
    ],
    S = () =>
        (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: "Purchase button is disabled for this story",
        }),
    I = (e) => {
        let { skuId: t, isGift: n, hideErrors: i } = e,
            {
                analyticsLocations: a,
                loadId: o,
                handleClose: c,
                handleComplete: p,
                isFetching: m,
                sku: h,
            } = (0, d.a0)({
                skuId: t,
                isGift: n,
                applicationId: _.XAJ,
            }),
            E = (e, t, i) =>
                n
                    ? (0, r.jsx)(s.Z, {
                          step: i,
                          onClose: () => t(!1),
                      })
                    : (0, r.jsx)(l.Z, {
                          step: i,
                          onClose: () => t(!1),
                      }),
            b = u.ZP.isPremiumSku(t);
        return m || null == h || b
            ? (0, r.jsx)(f.T, {})
            : (0, r.jsxs)("div", {
                  className: g.verticalContainerCentered,
                  children: [
                      (0, r.jsx)(d.Vy, {
                          stepConfigs: v,
                          analyticsLocations: a,
                          applicationId: _.XAJ,
                          initialPlanId: void 0,
                          skuId: t,
                          isGift: n,
                          hideErrors: i,
                          loadId: o,
                          purchaseType: _.GZQ.ONE_TIME,
                          disablePurchases: !0,
                          excludeSubscriptionPlansBySKU: !0,
                          renderHeader: E,
                          onClose: c,
                          onComplete: p,
                      }),
                      (0, r.jsx)(S, {}),
                  ],
              });
    },
    T = (e) => {
        let { skuId: t, isGift: n, hideErrors: a } = e,
            {
                analyticsLocations: o,
                loadId: s,
                handleClose: l,
                handleComplete: c,
                isFetching: p,
                sku: h,
            } = (0, d.a0)({
                skuId: t,
                isGift: n,
                applicationId: m.CL,
            }),
            E = u.ZP.isPremiumSku(t),
            b = E ? m.mn[t] : void 0,
            [y, O] = i.useState(b),
            I = i.useRef(!1);
        i.useEffect(() => {
            I.current || null == b || ((I.current = !0), O(b));
        }, [b, y]);
        let { isLoadedForPremiumSKUs: T, selectedPlan: C } = (0, d.rC)({ subscriptionPlanId: y });
        return !p && null != h && T && E && null != C
            ? (0, r.jsxs)("div", {
                  className: g.verticalContainerCentered,
                  children: [
                      (0, r.jsx)(d.Vy, {
                          stepConfigs: v,
                          analyticsLocations: o,
                          applicationId: m.CL,
                          initialPlanId: b,
                          skuId: t,
                          isGift: n,
                          hideErrors: a,
                          loadId: s,
                          purchaseType: _.GZQ.SUBSCRIPTION,
                          disablePurchases: !0,
                          onClose: l,
                          onComplete: c,
                          paymentContextOverrides: {
                              selectedPlan: C,
                              setSelectedPlanId: O,
                          },
                      }),
                      (0, r.jsx)(S, {}),
                  ],
              })
            : (0, r.jsx)(f.T, {});
    },
    C = {
        isGift: {
            label: "Is Gift",
            type: "boolean",
            defaultValue: !1,
        },
        hideErrors: {
            label: "Hide Errors",
            type: "boolean",
            defaultValue: !0,
        },
    },
    A = (0, p.F)(),
    N = {
        title: "Checkout Review Step",
        stories: [
            {
                name: "Collectibles Review Step",
                id: "collectibles-checkout-review-step",
                component: I,
                controls: b(
                    {
                        skuId: {
                            label: "SKU ID",
                            type: "select",
                            options: A.options,
                            defaultValue: A.defaultValue,
                        },
                    },
                    C,
                ),
            },
            {
                name: "Premium Review Step",
                id: "premium-checkout-review-step",
                component: T,
                controls: b(
                    {
                        skuId: {
                            label: "SKU ID",
                            type: "select",
                            options: [
                                {
                                    value: m.Si.TIER_0,
                                    label: "".concat(m.Si.TIER_0, " (Nitro Basic)"),
                                },
                                {
                                    value: m.Si.TIER_2,
                                    label: "".concat(m.Si.TIER_2, " (Nitro Standard)"),
                                },
                            ],
                            defaultValue: m.Si.TIER_0,
                        },
                    },
                    C,
                ),
            },
        ],
    };
