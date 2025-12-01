n.d(t, {
    Gy: () => C,
    Vy: () => N,
    a0: () => T,
    rC: () => A,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(772848),
    o = n(311570),
    s = n(399606),
    l = n(481060),
    c = n(570140),
    u = n(16084),
    d = n(821849),
    f = n(100527),
    p = n(906732),
    _ = n(987209),
    m = n(563132),
    h = n(107998),
    g = n(791785),
    E = n(509545),
    b = n(55563),
    y = n(676500);
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
function v(e) {
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
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = (e) => {
        let { skuId: t, isGift: n, applicationId: r } = e,
            { analyticsLocations: l } = (0, p.ZP)(f.Z.PAYMENT_FLOW_TEST_PAGE),
            c = i.useRef(null),
            d = i.useRef(null),
            [_, m] = i.useState(() => (0, a.Z)());
        i.useEffect(() => {
            (c.current !== t || d.current !== n) && (m((0, a.Z)()), (c.current = t), (d.current = n));
        }, [t, n]);
        let [h, g] = (0, s.Wu)([b.Z], () => [b.Z.isFetching(t), b.Z.get(t)]);
        return (
            i.useEffect(() => {
                null != g || h || (0, u.$N)(r, t, o.v.VARIANTS_GROUP).catch((e) => {});
            }, [r, t, g, h]),
            {
                loadId: _,
                analyticsLocations: l,
                handleClose: i.useCallback((e) => {}, []),
                handleComplete: i.useCallback(() => {}, []),
                isFetching: h,
                sku: g,
                skuId: t,
                isGift: n,
            }
        );
    },
    A = (e) => {
        let { subscriptionPlanId: t } = e;
        i.useEffect(() => {
            E.Z.isLoadedForPremiumSKUs() || c.Z.wait(() => (0, d.Y2)());
        }, []);
        let n = (0, s.e7)([E.Z], () => (null != t ? E.Z.get(t) : null));
        return {
            isLoadedForPremiumSKUs: (0, s.e7)([E.Z], () => E.Z.isLoadedForPremiumSKUs()),
            selectedPlan: n,
        };
    },
    C = (e) =>
        (0, r.jsxs)("div", {
            style: { padding: 20 },
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: e.text,
                }),
                (0, r.jsx)("div", {
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(l.Anchor, {
                        onClick: () => e.handleStepChange(e.originStep),
                        children: "\u2190 Go Back",
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
                onClose: o,
                onComplete: s,
                initialPlanId: c,
                purchaseType: u,
                stepConfigs: d,
                loadId: f,
                excludeSubscriptionPlansBySKU: p,
                renderHeader: E,
                hideErrors: b,
                disablePurchases: O,
                paymentContextOverrides: S,
            } = e,
            T = b
                ? v(
                      {
                          purchasePreviewError: null,
                          purchaseError: null,
                      },
                      S,
                  )
                : v({}, S);
        O && (T.disablePurchasesForStorybook = !0);
        let A = "".concat(i, "-").concat(a, "-").concat(f);
        return (0, r.jsx)(
            m.PaymentContextProvider,
            {
                stepConfigs: d,
                applicationId: n,
                skuIDs: null != i ? [i] : [],
                isGift: a,
                activeSubscription: null,
                purchaseType: u,
                excludeSubscriptionPlansBySKU: p,
                children: (0, r.jsx)(
                    y.$,
                    I(v({}, T), {
                        children: (0, r.jsx)(h.c1, {
                            children: (0, r.jsx)(_.KB, {
                                isGift: a,
                                children: (0, r.jsx)(
                                    g.PaymentModal,
                                    {
                                        transitionState: l.Dvm.ENTERED,
                                        onClose: o,
                                        onComplete: s,
                                        applicationId: n,
                                        skuId: i,
                                        initialPlanId: c,
                                        analyticsLocations: t,
                                        hideShadow: !0,
                                        renderHeader: E,
                                    },
                                    A,
                                ),
                            }),
                        }),
                    }),
                ),
            },
            A,
        );
    };
