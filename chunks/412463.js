n.d(t, {
    dL: () => N,
    eO: () => C,
    n1: () => T,
    ud: () => I,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(835245),
    s = n(635358),
    o = n(417597),
    l = n(397927),
    c = n(73153),
    u = n(830382),
    d = n(73825),
    f = n(793574),
    p = n(688810),
    _ = n(937008),
    h = n(156312),
    m = n(491057),
    g = n(546042),
    E = n(97352),
    b = n(67480),
    y = n(582658);

function O(e, t, n) {
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

function A(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}

function v(e, t) {
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

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => {
        let { skuId: t, isGift: n, applicationId: r } = e,
            { analyticsLocations: l } = (0, p.Ay)(f.A.PAYMENT_FLOW_TEST_PAGE),
            c = i.useRef(null),
            d = i.useRef(null),
            [_, h] = i.useState(() => (0, a.A)());
        i.useEffect(() => {
            (c.current !== t || d.current !== n) && (h((0, a.A)()), (c.current = t), (d.current = n));
        }, [t, n]);
        let [m, g] = (0, o.yK)([b.A], () => [b.A.isFetching(t), b.A.get(t)]);
        return (
            i.useEffect(() => {
                null != g || m || (0, u.EX)(r, t, s.g.VARIANTS_GROUP).catch((e) => {});
            }, [r, t, g, m]),
            {
                loadId: _,
                analyticsLocations: l,
                handleClose: i.useCallback((e) => {}, []),
                handleComplete: i.useCallback(() => {}, []),
                isFetching: m,
                sku: g,
                skuId: t,
                isGift: n,
            }
        );
    },
    T = (e) => {
        let { subscriptionPlanId: t } = e;
        i.useEffect(() => {
            E.A.isLoadedForPremiumSKUs() || c.h.wait(() => (0, d.zS)());
        }, []);
        let n = (0, o.bG)([E.A], () => (null != t ? E.A.get(t) : null));
        return {
            isLoadedForPremiumSKUs: (0, o.bG)([E.A], () => E.A.isLoadedForPremiumSKUs()),
            selectedPlan: n,
        };
    },
    C = (e) =>
        (0, r.jsxs)("div", {
            style: {
                padding: 20,
            },
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: e.text,
                }),
                (0, r.jsx)("div", {
                    style: {
                        marginTop: 16,
                    },
                    children: (0, r.jsx)(l.MzZ, {
                        onClick: () => e.handleStepChange(e.originStep),
                        children: "← Go Back",
                    }),
                }),
            ],
        }),
    N = (e) => {
        let {
                analyticsLocations: t,
                applicationId: n,
                skuId: i,
                isGift: a,
                onClose: s,
                onComplete: o,
                initialPlanId: c,
                purchaseType: u,
                stepConfigs: d,
                loadId: f,
                excludeSubscriptionPlansBySKU: p,
                renderHeader: E,
                hideErrors: b,
                disablePurchases: O,
                paymentContextOverrides: v,
            } = e,
            I = b
                ? A(
                      {
                          purchasePreviewError: null,
                          purchaseError: null,
                      },
                      v,
                  )
                : A({}, v);
        O && (I.disablePurchasesForStorybook = !0);
        let T = "".concat(i, "-").concat(a, "-").concat(f);
        return (0, r.jsx)(
            h.PaymentContextProvider,
            {
                stepConfigs: d,
                applicationId: n,
                skuIDs: null != i ? [i] : [],
                isGift: a,
                activeSubscription: null,
                purchaseType: u,
                excludeSubscriptionPlansBySKU: p,
                children: (0, r.jsx)(
                    y.Y,
                    S(A({}, I), {
                        children: (0, r.jsx)(m.Qt, {
                            children: (0, r.jsx)(_.dX, {
                                isGift: a,
                                children: (0, r.jsx)(
                                    g.PaymentModal,
                                    {
                                        transitionState: l.ip4.ENTERED,
                                        onClose: s,
                                        onComplete: o,
                                        applicationId: n,
                                        skuId: i,
                                        initialPlanId: c,
                                        analyticsLocations: t,
                                        hideShadow: !0,
                                        renderHeader: E,
                                    },
                                    T,
                                ),
                            }),
                        }),
                    }),
                ),
            },
            T,
        );
    };
