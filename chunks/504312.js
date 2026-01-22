n.d(t, { Y: () => u }), n(321073), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(93159),
    o = n(652215),
    l = n(788868),
    c = n(749226);
let u = {
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
                        className: c.SG,
                        children: (0, r.jsx)(s.Vm, {
                            label: t,
                            lineItems: a,
                            currency: o.Yri.USD,
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
                        leftPrimaryText: o,
                        leftSubtext: l,
                        leftShowSubtext: u,
                        leftSubtextStrikethrough: d,
                        rightTitleDescriber: f,
                        rightPrimaryText: p,
                        rightSubtext: _,
                        rightShowSubtext: h,
                        rightSubtextStrikethrough: m,
                    } = e,
                    [g, E] = i.useState(0);
                return (0, r.jsxs)("div", {
                    className: c.Cd,
                    children: [
                        (0, r.jsx)(s.q7, {
                            selection: g,
                            onChange: E,
                            planOptions: [
                                {
                                    id: 0,
                                    title: (0, r.jsx)(s.ec, {
                                        size: "sm",
                                        color: "text-strong",
                                        premiumType: t,
                                    }),
                                    titleDescriber: n,
                                    primaryText: o,
                                    subtext: u
                                        ? (0, r.jsx)(s.Lo, {
                                              strikethrough: d,
                                              price: l,
                                          })
                                        : void 0,
                                },
                                {
                                    id: 1,
                                    title: (0, r.jsx)(s.ec, {
                                        size: "sm",
                                        color: "text-strong",
                                        premiumType: t,
                                    }),
                                    titleDescriber: f,
                                    primaryText: p,
                                    subtext: h
                                        ? (0, r.jsx)(s.Lo, {
                                              strikethrough: m,
                                              price: _,
                                          })
                                        : void 0,
                                },
                            ],
                        }),
                        (0, r.jsxs)(a.Text, {
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
                    defaultValue: l.PremiumTypes.TIER_2,
                    options: [
                        {
                            label: "Nitro",
                            value: l.PremiumTypes.TIER_2,
                        },
                        {
                            label: "Nitro Basic",
                            value: l.PremiumTypes.TIER_0,
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
                                  icon: (0, r.jsx)(a.tvc, { size: "xs" }),
                              },
                          ]
                        : [];
                return (0, r.jsx)("div", {
                    className: c.SG,
                    children: (0, r.jsx)(s._D, {
                        label: t,
                        lineItems: i,
                        intervalType: l.WT.MONTH,
                        intervalCount: 1,
                        currency: o.Yri.USD,
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
        {
            name: "Primitive: Purchase Item",
            id: "unified-checkout-purchase-item",
            component: (e) => {
                let {
                    header: t,
                    showHeader: n,
                    label: i,
                    description: o,
                    price: l,
                    hasPriceIcon: u,
                    hasStrikethroughPrice: d,
                    strikethroughPrice: f,
                    hasGift: p,
                    giftUsername: _,
                    giftNickname: h,
                } = e;
                function m(e, c) {
                    return (0, r.jsx)(s.f7, {
                        header: n ? t : void 0,
                        headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
                        label: "".concat(i, " ").concat(c),
                        description: o,
                        price: l,
                        PriceIcon: u ? a.tvc : void 0,
                        strikethroughPrice: d ? f : void 0,
                        graphic: (0, r.jsx)(e, {}),
                        gift: p
                            ? {
                                  username: _,
                                  nickname: h,
                                  avatarUrl: "https://cdn.discordapp.com/embed/avatars/2.png",
                              }
                            : void 0,
                    });
                }
                return (0, r.jsxs)("div", {
                    className: c.SG,
                    children: [
                        m(s.JW, "Nitro"),
                        m(s.DH, "Nitro Basic"),
                        m(s.a6, "Boost"),
                        m(s.jw, "App"),
                        m(s.oo, "Nitro Credit"),
                    ],
                });
            },
            controls: {
                header: {
                    label: "Header",
                    type: "text",
                    defaultValue: "Marvel Rivals",
                },
                showHeader: {
                    label: "Show Header",
                    type: "boolean",
                    defaultValue: !1,
                },
                label: {
                    label: "Label",
                    type: "text",
                    defaultValue: "1 Month of",
                },
                description: {
                    label: "Description",
                    type: "text",
                    defaultValue: "This is describing the item",
                },
                price: {
                    label: "Price",
                    type: "text",
                    defaultValue: "$9.99",
                },
                hasPriceIcon: {
                    label: "Has Price Icon",
                    type: "boolean",
                    defaultValue: !1,
                },
                hasStrikethroughPrice: {
                    label: "Has Strikethrough Price",
                    type: "boolean",
                    defaultValue: !1,
                },
                strikethroughPrice: {
                    label: "Strikethrough Price",
                    type: "text",
                    defaultValue: "$12.99",
                },
                hasGift: {
                    label: "Has Gift",
                    type: "boolean",
                    defaultValue: !1,
                },
                giftUsername: {
                    label: "Gift Username",
                    type: "text",
                    defaultValue: "moatmonster",
                },
                giftNickname: {
                    label: "Gift Nickname",
                    type: "text",
                    defaultValue: "Matt",
                },
            },
        },
    ],
};
