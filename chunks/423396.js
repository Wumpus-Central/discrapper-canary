"use strict";
n.d(t, { Gu: () => v });
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
    p = n(652215),
    h = n(788868),
    m = n(985018),
    g = n(749226);
let E = [
        {
            key: s.pn.REVIEW,
            renderStep: (e) => (0, r.jsx)(u._M, { ...e }),
            options: { useBreadcrumbLabel: () => m.intl.string(m.t.QBnNHq) },
        },
        {
            key: s.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, r.jsx)(d.eO, { ...e, originStep: s.pn.REVIEW, text: "Add Payment Steps Placeholder" }),
            options: { useBreadcrumbLabel: () => m.intl.string(m.t.QBnNHq) },
        },
        {
            key: s.pn.CONFIRM,
            renderStep: (e) => (0, r.jsx)(d.eO, { ...e, originStep: s.pn.REVIEW, text: "Confirm Step Placeholder" }),
            options: { useBreadcrumbLabel: () => m.intl.string(m.t.QBnNHq) },
        },
        {
            key: s.pn.PLAN_SELECT,
            renderStep: (e) =>
                (0, r.jsx)(d.eO, { ...e, originStep: s.pn.REVIEW, text: "Plan Select Step Placeholder" }),
            options: { useBreadcrumbLabel: () => m.intl.string(m.t.QBnNHq) },
        },
    ],
    A = () => (0, r.jsx)(a.Text, { variant: "text-sm/normal", children: "Purchase button is disabled for this story" }),
    I = (e) => {
        let { skuId: t, isGift: n, hideErrors: i } = e,
            {
                analyticsLocations: a,
                loadId: s,
                handleClose: u,
                handleComplete: f,
                isFetching: h,
                sku: m,
            } = (0, d.ud)({ skuId: t, isGift: n, applicationId: p.FYj }),
            I = (e, t, i) =>
                n
                    ? (0, r.jsx)(o.A, { step: i, onClose: () => t(!1) })
                    : (0, r.jsx)(l.A, { step: i, onClose: () => t(!1) }),
            T = c.Ay.isPremiumSku(t);
        return h || null == m || T
            ? (0, r.jsx)(_.k, {})
            : (0, r.jsxs)("div", {
                  className: g.Cd,
                  children: [
                      (0, r.jsx)(d.dL, {
                          stepConfigs: E,
                          analyticsLocations: a,
                          applicationId: p.FYj,
                          initialPlanId: void 0,
                          skuId: t,
                          isGift: n,
                          hideErrors: i,
                          loadId: s,
                          purchaseType: p.VVm.ONE_TIME,
                          disablePurchases: !0,
                          excludeSubscriptionPlansBySKU: !0,
                          renderHeader: I,
                          onClose: u,
                          onComplete: f,
                      }),
                      (0, r.jsx)(A, {}),
                  ],
              });
    },
    T = (e) => {
        let { skuId: t, isGift: n, hideErrors: a } = e,
            {
                analyticsLocations: s,
                loadId: o,
                handleClose: l,
                handleComplete: u,
                isFetching: f,
                sku: m,
            } = (0, d.ud)({ skuId: t, isGift: n, applicationId: h.tv }),
            I = c.Ay.isPremiumSku(t),
            T = I ? h.zE[t] : void 0,
            [y, S] = i.useState(T),
            v = i.useRef(!1);
        i.useEffect(() => {
            v.current || null == T || ((v.current = !0), S(T));
        }, [T, y]);
        let { isLoadedForPremiumSKUs: C, selectedPlan: b } = (0, d.n1)({ subscriptionPlanId: y });
        return !f && null != m && C && I && null != b
            ? (0, r.jsxs)("div", {
                  className: g.Cd,
                  children: [
                      (0, r.jsx)(d.dL, {
                          stepConfigs: E,
                          analyticsLocations: s,
                          applicationId: h.tv,
                          initialPlanId: T,
                          skuId: t,
                          isGift: n,
                          hideErrors: a,
                          loadId: o,
                          purchaseType: p.VVm.SUBSCRIPTION,
                          disablePurchases: !0,
                          onClose: l,
                          onComplete: u,
                          paymentContextOverrides: { selectedPlan: b, setSelectedPlanId: S },
                      }),
                      (0, r.jsx)(A, {}),
                  ],
              })
            : (0, r.jsx)(_.k, {});
    },
    y = {
        isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 },
        hideErrors: { label: "Hide Errors", type: "boolean", defaultValue: !0 },
    },
    S = (0, f.R)(),
    v = {
        title: "Checkout Review Step",
        stories: [
            {
                name: "Collectibles Review Step",
                id: "collectibles-checkout-review-step",
                component: I,
                controls: {
                    skuId: { label: "SKU ID", type: "select", options: S.options, defaultValue: S.defaultValue },
                    ...y,
                },
            },
            {
                name: "Premium Review Step",
                id: "premium-checkout-review-step",
                component: T,
                controls: {
                    skuId: {
                        label: "SKU ID",
                        type: "select",
                        options: [
                            { value: h.pe.TIER_0, label: `${h.pe.TIER_0} (Nitro Basic)` },
                            { value: h.pe.TIER_2, label: `${h.pe.TIER_2} (Nitro Standard)` },
                        ],
                        defaultValue: h.pe.TIER_0,
                    },
                    ...y,
                },
            },
        ],
    };
