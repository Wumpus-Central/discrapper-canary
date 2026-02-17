"use strict";
n.d(t, { Gu: () => C });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(166532),
    o = n(231018),
    l = n(685944),
    u = n(623020),
    c = n(927578),
    d = n(412463),
    _ = n(492518),
    f = n(689614),
    h = n(652215),
    p = n(788868),
    g = n(985018),
    E = n(749226);
let A = [
        {
            key: s.pn.REVIEW,
            renderStep: (e) => (0, r.jsx)(u._M, { ...e }),
            options: { useBreadcrumbLabel: () => g.intl.string(g.t.QBnNHq) },
        },
        {
            key: s.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, r.jsx)(d.eO, { ...e, originStep: s.pn.REVIEW, text: "Add Payment Steps Placeholder" }),
            options: { useBreadcrumbLabel: () => g.intl.string(g.t.QBnNHq) },
        },
        {
            key: s.pn.CONFIRM,
            renderStep: (e) => (0, r.jsx)(d.eO, { ...e, originStep: s.pn.REVIEW, text: "Confirm Step Placeholder" }),
            options: { useBreadcrumbLabel: () => g.intl.string(g.t.QBnNHq) },
        },
        {
            key: s.pn.PLAN_SELECT,
            renderStep: (e) =>
                (0, r.jsx)(d.eO, { ...e, originStep: s.pn.REVIEW, text: "Plan Select Step Placeholder" }),
            options: { useBreadcrumbLabel: () => g.intl.string(g.t.QBnNHq) },
        },
    ],
    I = () => (0, r.jsx)(a.Text, { variant: "text-sm/normal", children: "Purchase button is disabled for this story" }),
    T = (e) => {
        let { skuId: t, isGift: n, hideErrors: i } = e,
            {
                analyticsLocations: a,
                loadId: s,
                handleClose: u,
                handleComplete: f,
                isFetching: p,
                sku: g,
            } = (0, d.ud)({ skuId: t, isGift: n, applicationId: h.FYj }),
            T = (e, t, i) => (n ? (0, r.jsx)(o.A, { step: i }) : (0, r.jsx)(l.A, { step: i, onClose: () => t(!1) })),
            y = c.Ay.isPremiumSku(t);
        return p || null == g || y
            ? (0, r.jsx)(_.k, {})
            : (0, r.jsxs)("div", {
                  className: E.Cd,
                  children: [
                      (0, r.jsx)(d.dL, {
                          stepConfigs: A,
                          analyticsLocations: a,
                          applicationId: h.FYj,
                          initialPlanId: void 0,
                          skuId: t,
                          isGift: n,
                          hideErrors: i,
                          loadId: s,
                          purchaseType: h.VVm.ONE_TIME,
                          disablePurchases: !0,
                          excludeSubscriptionPlansBySKU: !0,
                          renderHeader: T,
                          onClose: u,
                          onComplete: f,
                      }),
                      (0, r.jsx)(I, {}),
                  ],
              });
    },
    y = (e) => {
        let { skuId: t, isGift: n, hideErrors: a } = e,
            {
                analyticsLocations: s,
                loadId: o,
                handleClose: l,
                handleComplete: u,
                isFetching: f,
                sku: g,
            } = (0, d.ud)({ skuId: t, isGift: n, applicationId: p.tv }),
            T = c.Ay.isPremiumSku(t),
            y = T ? p.zE[t] : void 0,
            [S, v] = i.useState(y),
            C = i.useRef(!1);
        i.useEffect(() => {
            C.current || null == y || ((C.current = !0), v(y));
        }, [y, S]);
        let { isLoadedForPremiumSKUs: b, selectedPlan: N } = (0, d.n1)({ subscriptionPlanId: S });
        return !f && null != g && b && T && null != N
            ? (0, r.jsxs)("div", {
                  className: E.Cd,
                  children: [
                      (0, r.jsx)(d.dL, {
                          stepConfigs: A,
                          analyticsLocations: s,
                          applicationId: p.tv,
                          initialPlanId: y,
                          skuId: t,
                          isGift: n,
                          hideErrors: a,
                          loadId: o,
                          purchaseType: h.VVm.SUBSCRIPTION,
                          disablePurchases: !0,
                          onClose: l,
                          onComplete: u,
                          paymentContextOverrides: { selectedPlan: N, setSelectedPlanId: v },
                      }),
                      (0, r.jsx)(I, {}),
                  ],
              })
            : (0, r.jsx)(_.k, {});
    },
    S = {
        isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 },
        hideErrors: { label: "Hide Errors", type: "boolean", defaultValue: !0 },
    },
    v = (0, f.R)(),
    C = {
        title: "Checkout Review Step",
        stories: [
            {
                name: "Collectibles Review Step",
                id: "collectibles-checkout-review-step",
                component: T,
                controls: {
                    skuId: { label: "SKU ID", type: "select", options: v.options, defaultValue: v.defaultValue },
                    ...S,
                },
            },
            {
                name: "Premium Review Step",
                id: "premium-checkout-review-step",
                component: y,
                controls: {
                    skuId: {
                        label: "SKU ID",
                        type: "select",
                        options: [
                            { value: p.pe.TIER_0, label: `${p.pe.TIER_0} (Nitro Basic)` },
                            { value: p.pe.TIER_2, label: `${p.pe.TIER_2} (Nitro Standard)` },
                        ],
                        defaultValue: p.pe.TIER_0,
                    },
                    ...S,
                },
            },
        ],
    };
