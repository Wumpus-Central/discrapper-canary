l.d(t, { Gu: () => S });
var a = l(627968),
    n = l(64700),
    r = l(397927),
    i = l(166532),
    s = l(231018),
    o = l(685944),
    u = l(623020),
    c = l(927578),
    d = l(412463),
    p = l(492518),
    m = l(689614),
    h = l(652215),
    x = l(788868),
    b = l(985018),
    g = l(749226);
let y = [
        {
            key: i.pn.REVIEW,
            renderStep: (e) => (0, a.jsx)(u._, { ...e }),
            options: { useBreadcrumbLabel: () => b.intl.string(b.t.QBnNHq) },
        },
        {
            key: i.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, a.jsx)(d.eO, { ...e, originStep: i.pn.REVIEW, text: "Add Payment Steps Placeholder" }),
            options: { useBreadcrumbLabel: () => b.intl.string(b.t.QBnNHq) },
        },
        {
            key: i.pn.CONFIRM,
            renderStep: (e) => (0, a.jsx)(d.eO, { ...e, originStep: i.pn.REVIEW, text: "Confirm Step Placeholder" }),
            options: { useBreadcrumbLabel: () => b.intl.string(b.t.QBnNHq) },
        },
        {
            key: i.pn.PLAN_SELECT,
            renderStep: (e) =>
                (0, a.jsx)(d.eO, { ...e, originStep: i.pn.REVIEW, text: "Plan Select Step Placeholder" }),
            options: {
                useBreadcrumbLabel: () => b.intl.string(b.t.QBnNHq),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
    ],
    f = () => (0, a.jsx)(r.Text, { variant: "text-sm/normal", children: "Purchase button is disabled for this story" }),
    v = {
        isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 },
        hideErrors: { label: "Hide Errors", type: "boolean", defaultValue: !0 },
    },
    E = (0, m.R)(),
    S = {
        title: "Checkout Review Step",
        stories: [
            {
                name: "Collectibles Review Step",
                id: "collectibles-checkout-review-step",
                component: (e) => {
                    let { skuId: t, isGift: l, hideErrors: n } = e,
                        {
                            analyticsLocations: r,
                            loadId: i,
                            handleClose: u,
                            handleComplete: m,
                            isFetching: x,
                            sku: b,
                        } = (0, d.ud)({ skuId: t, isGift: l, applicationId: h.FYj }),
                        v = c.Ay.isPremiumSku(t);
                    return x || null == b || v
                        ? (0, a.jsx)(p.k, {})
                        : (0, a.jsxs)("div", {
                              className: g.Cd,
                              children: [
                                  (0, a.jsx)(d.dL, {
                                      stepConfigs: y,
                                      analyticsLocations: r,
                                      applicationId: h.FYj,
                                      initialPlanId: void 0,
                                      skuId: t,
                                      isGift: l,
                                      hideErrors: n,
                                      loadId: i,
                                      purchaseType: h.VVm.ONE_TIME,
                                      disablePurchases: !0,
                                      excludeSubscriptionPlansBySKU: !0,
                                      renderHeader: (e, t, n) =>
                                          l
                                              ? (0, a.jsx)(s.A, { step: n })
                                              : (0, a.jsx)(o.A, { step: n, onClose: () => t(!1) }),
                                      onClose: u,
                                      onComplete: m,
                                  }),
                                  (0, a.jsx)(f, {}),
                              ],
                          });
                },
                controls: {
                    skuId: { label: "SKU ID", type: "select", options: E.options, defaultValue: E.defaultValue },
                    ...v,
                },
            },
            {
                name: "Premium Review Step",
                id: "premium-checkout-review-step",
                component: (e) => {
                    let { skuId: t, isGift: l, hideErrors: r } = e,
                        {
                            analyticsLocations: i,
                            loadId: s,
                            handleClose: o,
                            handleComplete: u,
                            isFetching: m,
                            sku: b,
                        } = (0, d.ud)({ skuId: t, isGift: l, applicationId: x.tv }),
                        v = c.Ay.isPremiumSku(t),
                        E = v ? x.zE[t] : void 0,
                        [S, j] = n.useState(E),
                        T = n.useRef(!1);
                    n.useEffect(() => {
                        T.current || null == E || ((T.current = !0), j(E));
                    }, [E, S]);
                    let { isLoadedForPremiumSKUs: C, selectedPlan: P } = (0, d.n1)({ subscriptionPlanId: S });
                    return !m && null != b && C && v && null != P
                        ? (0, a.jsxs)("div", {
                              className: g.Cd,
                              children: [
                                  (0, a.jsx)(d.dL, {
                                      stepConfigs: y,
                                      analyticsLocations: i,
                                      applicationId: x.tv,
                                      initialPlanId: E,
                                      skuId: t,
                                      isGift: l,
                                      hideErrors: r,
                                      loadId: s,
                                      purchaseType: h.VVm.SUBSCRIPTION,
                                      disablePurchases: !0,
                                      onClose: o,
                                      onComplete: u,
                                      paymentContextOverrides: { selectedPlan: P, setSelectedPlanId: j },
                                  }),
                                  (0, a.jsx)(f, {}),
                              ],
                          })
                        : (0, a.jsx)(p.k, {});
                },
                controls: {
                    skuId: {
                        label: "SKU ID",
                        type: "select",
                        options: [
                            { value: x.pe.TIER_0, label: `${x.pe.TIER_0} (Nitro Basic)` },
                            { value: x.pe.TIER_2, label: `${x.pe.TIER_2} (Nitro Standard)` },
                        ],
                        defaultValue: x.pe.TIER_0,
                    },
                    ...v,
                },
            },
        ],
    };
