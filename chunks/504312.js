n.d(t, {
    Y: () => f,
}),
    n(321073),
    n(896048),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(397927),
    o = n(93159),
    l = n(812745),
    c = n(652215),
    u = n(788868),
    d = n(749226);
let f = {
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
                        className: d.SG,
                        children: (0, r.jsx)(o.Vm, {
                            label: t,
                            lineItems: a,
                            currency: c.Yri.USD,
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
                        leftSubtextStrikethrough: u,
                        rightTitleDescriber: f,
                        rightPrimaryText: p,
                        rightSubtext: _,
                        rightShowSubtext: h,
                        rightSubtextStrikethrough: m,
                    } = e,
                    [g, E] = i.useState(0);
                return (0, r.jsxs)("div", {
                    className: d.Cd,
                    children: [
                        (0, r.jsx)(o.q7, {
                            selection: g,
                            onChange: E,
                            planOptions: [
                                {
                                    id: 0,
                                    title: (0, r.jsx)(o.ec, {
                                        size: "sm",
                                        color: "text-strong",
                                        premiumType: t,
                                    }),
                                    titleDescriber: n,
                                    primaryText: a,
                                    subtext: c
                                        ? (0, r.jsx)(o.Lo, {
                                              strikethrough: u,
                                              price: l,
                                          })
                                        : void 0,
                                },
                                {
                                    id: 1,
                                    title: (0, r.jsx)(o.ec, {
                                        size: "sm",
                                        color: "text-strong",
                                        premiumType: t,
                                    }),
                                    titleDescriber: f,
                                    primaryText: p,
                                    subtext: h
                                        ? (0, r.jsx)(o.Lo, {
                                              strikethrough: m,
                                              price: _,
                                          })
                                        : void 0,
                                },
                            ],
                        }),
                        (0, r.jsxs)(s.Text, {
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
                    defaultValue: u.PremiumTypes.TIER_2,
                    options: [
                        {
                            label: "Nitro",
                            value: u.PremiumTypes.TIER_2,
                        },
                        {
                            label: "Nitro Basic",
                            value: u.PremiumTypes.TIER_0,
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
                                  icon: (0, r.jsx)(s.tvc, {
                                      size: "xs",
                                  }),
                              },
                          ]
                        : [];
                return (0, r.jsx)("div", {
                    className: d.SG,
                    children: (0, r.jsx)(o._D, {
                        label: t,
                        lineItems: i,
                        intervalType: u.WT.MONTH,
                        intervalCount: 1,
                        currency: c.Yri.USD,
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
                    description: a,
                    price: l,
                    hasPriceIcon: c,
                    hasStrikethroughPrice: u,
                    strikethroughPrice: f,
                    hasGift: p,
                    giftUsername: _,
                    giftNickname: h,
                } = e;

                function m(e, d) {
                    return (0, r.jsx)(o.f7, {
                        header: n ? t : void 0,
                        headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
                        label: "".concat(i, " ").concat(d),
                        description: a,
                        price: l,
                        PriceIcon: c ? s.tvc : void 0,
                        strikethroughPrice: u ? f : void 0,
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
                    className: d.SG,
                    children: [
                        m(o.JW, "Nitro"),
                        m(o.DH, "Nitro Basic"),
                        m(o.a6, "Boost"),
                        m(o.jw, "App"),
                        m(o.oo, "Nitro Credit"),
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
        {
            name: "Primitive: Payment Select",
            id: "unified-checkout-payment-select",
            component: (e) => {
                let { label: t, disabled: n, error: c, errorMessage: u } = e,
                    d = [
                        {
                            id: "visa-1234",
                            label: "Visa ending in 1234",
                            icon: l.Be.VISA,
                        },
                        {
                            id: "mastercard-5678",
                            label: "Mastercard ending in 5678",
                            icon: l.Be.MASTERCARD,
                        },
                        {
                            id: "paypal",
                            label: "user@example.com",
                            icon: l.Be.PAYPAL,
                        },
                        {
                            id: "amex-9012",
                            label: "Amex ending in 9012",
                            icon: l.Be.AMEX,
                        },
                    ],
                    [f, p] = i.useState(d[0].id);
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(o.v7, {
                            label: t,
                            value: f,
                            options: d,
                            onChange: p,
                            onNew: a.noop,
                            disabled: n,
                            error: c ? u : void 0,
                        }),
                        (0, r.jsxs)(s.Text, {
                            variant: "text-sm/normal",
                            children: ["Selected payment: ", null != f ? f : "None"],
                        }),
                    ],
                });
            },
            controls: {
                label: {
                    label: "Label",
                    type: "text",
                    defaultValue: "Payment Method",
                },
                disabled: {
                    label: "Disabled",
                    type: "boolean",
                    defaultValue: !1,
                },
                error: {
                    label: "Show Error",
                    type: "boolean",
                    defaultValue: !1,
                },
                errorMessage: {
                    label: "Error Message",
                    type: "text",
                    defaultValue: "Please select a valid payment method",
                },
            },
        },
    ],
};
