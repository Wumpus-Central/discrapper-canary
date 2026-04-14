l.d(t, { Gu: () => v });
var a = l(627968),
    n = l(64700),
    r = l(397927),
    i = l(166532),
    o = l(623020),
    s = l(927578),
    d = l(412463),
    c = l(492518),
    u = l(689614),
    p = l(652215),
    m = l(788868),
    h = l(985018),
    x = l(895375);
let b = [
        {
            key: i.pn.REVIEW,
            renderStep: (e) => (0, a.jsx)(o._, { ...e }),
            options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHq) },
        },
        {
            key: i.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, a.jsx)(d.eO, { ...e, originStep: i.pn.REVIEW, text: "Add Payment Steps Placeholder" }),
            options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHq) },
        },
        {
            key: i.pn.CONFIRM,
            renderStep: (e) => (0, a.jsx)(d.eO, { ...e, originStep: i.pn.REVIEW, text: "Confirm Step Placeholder" }),
            options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHq) },
        },
        {
            key: i.pn.PLAN_SELECT,
            renderStep: (e) =>
                (0, a.jsx)(d.eO, { ...e, originStep: i.pn.REVIEW, text: "Plan Select Step Placeholder" }),
            options: {
                useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHq),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
    ],
    y = () => (0, a.jsx)(r.Text, { variant: "text-sm/normal", children: "Purchase button is disabled for this story" }),
    f = {
        isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 },
        hideErrors: { label: "Hide Errors", type: "boolean", defaultValue: !0 },
    },
    g = (0, u.R)(),
    v = {
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
                            handleClose: o,
                            handleComplete: u,
                            isFetching: m,
                            sku: h,
                        } = (0, d.ud)({ skuId: t, isGift: l, applicationId: p.FYj }),
                        f = s.Ay.isPremiumSku(t);
                    return m || null == h || f
                        ? (0, a.jsx)(c.k, {})
                        : (0, a.jsxs)("div", {
                              className: x.Cd,
                              children: [
                                  (0, a.jsx)(d.dL, {
                                      stepConfigs: b,
                                      analyticsLocations: r,
                                      applicationId: p.FYj,
                                      initialPlanId: void 0,
                                      skuId: t,
                                      isGift: l,
                                      hideErrors: n,
                                      loadId: i,
                                      purchaseType: p.VVm.ONE_TIME,
                                      disablePurchases: !0,
                                      excludeSubscriptionPlansBySKU: !0,
                                      onClose: o,
                                      onComplete: u,
                                  }),
                                  (0, a.jsx)(y, {}),
                              ],
                          });
                },
                controls: {
                    skuId: { label: "SKU ID", type: "select", options: g.options, defaultValue: g.defaultValue },
                    ...f,
                },
            },
            {
                name: "Premium Review Step",
                id: "premium-checkout-review-step",
                component: (e) => {
                    let { skuId: t, isGift: l, hideErrors: r } = e,
                        {
                            analyticsLocations: i,
                            loadId: o,
                            handleClose: u,
                            handleComplete: h,
                            isFetching: f,
                            sku: g,
                        } = (0, d.ud)({ skuId: t, isGift: l, applicationId: m.tv }),
                        v = s.Ay.isPremiumSku(t),
                        _ = v ? m.zE[t] : void 0,
                        [E, C] = n.useState(_),
                        j = n.useRef(!1);
                    n.useEffect(() => {
                        j.current || null == _ || ((j.current = !0), C(_));
                    }, [_, E]);
                    let { isLoadedForPremiumSKUs: S, selectedPlan: T } = (0, d.n1)({ subscriptionPlanId: E });
                    return !f && null != g && S && v && null != T
                        ? (0, a.jsxs)("div", {
                              className: x.Cd,
                              children: [
                                  (0, a.jsx)(d.dL, {
                                      stepConfigs: b,
                                      analyticsLocations: i,
                                      applicationId: m.tv,
                                      initialPlanId: _,
                                      skuId: t,
                                      isGift: l,
                                      hideErrors: r,
                                      loadId: o,
                                      purchaseType: p.VVm.SUBSCRIPTION,
                                      disablePurchases: !0,
                                      onClose: u,
                                      onComplete: h,
                                      paymentContextOverrides: {},
                                  }),
                                  (0, a.jsx)(y, {}),
                              ],
                          })
                        : (0, a.jsx)(c.k, {});
                },
                controls: {
                    skuId: {
                        label: "SKU ID",
                        type: "select",
                        options: [
                            { value: m.pe.TIER_0, label: `${m.pe.TIER_0} (Nitro Basic)` },
                            { value: m.pe.TIER_2, label: `${m.pe.TIER_2} (Nitro Standard)` },
                        ],
                        defaultValue: m.pe.TIER_0,
                    },
                    ...f,
                },
            },
        ],
    };
