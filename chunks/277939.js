n.d(t, { U: () => d }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(481060),
    s = n(902820),
    l = n(981631),
    c = n(474936),
    u = n(570810);
let d = {
    title: "Unified Checkout",
    stories: [
        {
            name: "Primitive: Order Summary Accordion",
            id: "unified-checkout-order-summary",
            component: (e) => {
                let { label: t, hasDiscount: n, hasLineItems: i } = e,
                    a = i
                        ? [
                              {
                                  id: 1,
                                  label: "Nitro Basic (Monthly)",
                                  amount: 299,
                              },
                              {
                                  id: 2,
                                  label: "Server Boost",
                                  amount: 499,
                              },
                          ]
                        : [];
                return (
                    n &&
                        i &&
                        a.push({
                            id: 3,
                            label: "Discount Applied",
                            amount: -100,
                        }),
                    (0, r.jsx)("div", {
                        className: u.orderSummaryContainer,
                        children: (0, r.jsx)(s.Q, {
                            label: t,
                            lineItems: a,
                            currency: l.pKx.USD,
                        }),
                    })
                );
            },
            controls: {
                label: {
                    label: "Label",
                    type: "text",
                    defaultValue: "Order Summary",
                },
                hasDiscount: {
                    label: "Has Discount",
                    type: "boolean",
                    defaultValue: !0,
                },
                hasLineItems: {
                    label: "Has Line Items",
                    type: "boolean",
                    defaultValue: !0,
                },
            },
        },
        {
            name: "Primitive: Nitro Plan Select",
            id: "unified-checkout-nitro-plan-select",
            component: (e) => {
                let {
                        variant: t,
                        leftTitleDescriber: n,
                        leftPrimaryText: a,
                        leftSubtext: l,
                        leftShowSubtext: c,
                        leftSubtextStrikethrough: d,
                        rightTitleDescriber: f,
                        rightPrimaryText: p,
                        rightSubtext: _,
                        rightShowSubtext: h,
                        rightSubtextStrikethrough: m,
                    } = e,
                    [g, E] = i.useState(0);
                return (0, r.jsxs)("div", {
                    className: u.verticalContainerCentered,
                    children: [
                        (0, r.jsx)(s.z, {
                            selection: g,
                            onChange: E,
                            planOptions: [
                                {
                                    id: 0,
                                    title: (0, r.jsx)(s.u2, {
                                        size: "sm",
                                        color: "text-strong",
                                        premiumType: t,
                                    }),
                                    titleDescriber: n,
                                    primaryText: a,
                                    subtext: c
                                        ? (0, r.jsx)(s.zl, {
                                              strikethrough: d,
                                              price: l,
                                          })
                                        : void 0,
                                },
                                {
                                    id: 1,
                                    title: (0, r.jsx)(s.u2, {
                                        size: "sm",
                                        color: "text-strong",
                                        premiumType: t,
                                    }),
                                    titleDescriber: f,
                                    primaryText: p,
                                    subtext: h
                                        ? (0, r.jsx)(s.zl, {
                                              strikethrough: m,
                                              price: _,
                                          })
                                        : void 0,
                                },
                            ],
                        }),
                        (0, r.jsxs)(o.Text, {
                            variant: "text-sm/normal",
                            children: ["Selected plan index: ", g],
                        }),
                    ],
                });
            },
            controls: {
                variant: {
                    label: "Nitro Variant",
                    type: "select",
                    defaultValue: c.PremiumTypes.TIER_2,
                    options: [
                        {
                            label: "Nitro",
                            value: c.PremiumTypes.TIER_2,
                        },
                        {
                            label: "Nitro Basic",
                            value: c.PremiumTypes.TIER_0,
                        },
                    ],
                },
                leftTitleDescriber: {
                    label: "Left Card - Title Describer",
                    type: "text",
                    defaultValue: "yearly",
                },
                leftPrimaryText: {
                    label: "Left Card - Primary Text",
                    type: "text",
                    defaultValue: "$99.99",
                },
                leftSubtext: {
                    label: "Left Card - Subtext",
                    type: "text",
                    defaultValue: "$119.99",
                },
                leftShowSubtext: {
                    label: "Left Card - Show Subtext",
                    type: "boolean",
                    defaultValue: !0,
                },
                leftSubtextStrikethrough: {
                    label: "Left Card - Subtext Strikethrough",
                    type: "boolean",
                    defaultValue: !0,
                },
                rightTitleDescriber: {
                    label: "Right Card - Title Describer",
                    type: "text",
                    defaultValue: "monthly",
                },
                rightPrimaryText: {
                    label: "Right Card - Primary Text",
                    type: "text",
                    defaultValue: "$9.99",
                },
                rightSubtext: {
                    label: "Right Card - Subtext",
                    type: "text",
                    defaultValue: "$11.99",
                },
                rightShowSubtext: {
                    label: "Right Card - Show Subtext",
                    type: "boolean",
                    defaultValue: !1,
                },
                rightSubtextStrikethrough: {
                    label: "Right Card - Subtext Strikethrough",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
        {
            name: "Primitive: Subscription Details Accordion",
            id: "unified-checkout-subscription-details",
            component: (e) => {
                let { label: t, hasLineItems: n } = e,
                    i = n
                        ? [
                              {
                                  id: 1,
                                  label: "Nitro Basic",
                                  amount: 299,
                                  tooltip:
                                      "You are purchasing a plan change. Your server boosts are being updated accordingly.",
                              },
                              {
                                  id: 2,
                                  label: "Server Boost",
                                  amount: 499,
                                  icon: (0, r.jsx)(a.SrA, { size: "xs" }),
                              },
                          ]
                        : [];
                return (0, r.jsx)("div", {
                    className: u.orderSummaryContainer,
                    children: (0, r.jsx)(s.Hg, {
                        label: t,
                        lineItems: i,
                        intervalType: c.rV.MONTH,
                        intervalCount: 1,
                        currency: l.pKx.USD,
                    }),
                });
            },
            controls: {
                label: {
                    label: "Label",
                    type: "text",
                    defaultValue: "Subscription Details",
                },
                hasLineItems: {
                    label: "Has Line Items",
                    type: "boolean",
                    defaultValue: !0,
                },
            },
        },
    ],
};
