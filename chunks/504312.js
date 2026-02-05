"use strict";
n.d(t, { Y: () => N }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(96337),
    o = n(997101),
    l = n(397927),
    u = n(169797),
    c = n(93159),
    d = n(812745),
    _ = n(652215),
    f = n(788868),
    p = n(749226);
let h = {
        name: "Primitive: Order Summary Accordion",
        id: "unified-checkout-order-summary",
        component: (e) => {
            let { label: t, hasDiscount: n, hasLineItems: i } = e,
                a = i
                    ? [
                          { id: 1, label: "Nitro Basic (Monthly)", amount: 299 },
                          { id: 2, label: "Server Boost", amount: 499 },
                      ]
                    : [];
            return (
                n && i && a.push({ id: 3, label: "Discount Applied", amount: -100 }),
                (0, r.jsx)("div", {
                    className: p.SG,
                    children: (0, r.jsx)(c.Vm, { label: t, lineItems: a, currency: _.Yri.USD }),
                })
            );
        },
        controls: {
            label: { label: "Label", type: "text", defaultValue: "Order Summary" },
            hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !0 },
            hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
        },
    },
    m = {
        name: "Primitive: Nitro Plan Select",
        id: "unified-checkout-nitro-plan-select",
        component: (e) => {
            let {
                    variant: t,
                    leftTitleDescriber: n,
                    leftPrimaryText: a,
                    leftSubtext: s,
                    leftShowSubtext: o,
                    leftSubtextStrikethrough: u,
                    rightTitleDescriber: d,
                    rightPrimaryText: _,
                    rightSubtext: f,
                    rightShowSubtext: h,
                    rightSubtextStrikethrough: m,
                } = e,
                [g, E] = i.useState(0);
            return (0, r.jsxs)("div", {
                className: p.Cd,
                children: [
                    (0, r.jsx)(c.q7, {
                        selection: g,
                        onChange: E,
                        planOptions: [
                            {
                                id: 0,
                                title: (0, r.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: n,
                                primaryText: a,
                                subtext: o ? (0, r.jsx)(c.Lo, { strikethrough: u, price: s }) : void 0,
                            },
                            {
                                id: 1,
                                title: (0, r.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: d,
                                primaryText: _,
                                subtext: h ? (0, r.jsx)(c.Lo, { strikethrough: m, price: f }) : void 0,
                            },
                        ],
                    }),
                    (0, r.jsxs)(l.Text, { variant: "text-sm/normal", children: ["Selected plan index: ", g] }),
                ],
            });
        },
        controls: {
            variant: {
                label: "Nitro Variant",
                type: "select",
                defaultValue: f.PremiumTypes.TIER_2,
                options: [
                    { label: "Nitro", value: f.PremiumTypes.TIER_2 },
                    { label: "Nitro Basic", value: f.PremiumTypes.TIER_0 },
                ],
            },
            leftTitleDescriber: { label: "Left Card - Title Describer", type: "text", defaultValue: "yearly" },
            leftPrimaryText: { label: "Left Card - Primary Text", type: "text", defaultValue: "$99.99" },
            leftSubtext: { label: "Left Card - Subtext", type: "text", defaultValue: "$119.99" },
            leftShowSubtext: { label: "Left Card - Show Subtext", type: "boolean", defaultValue: !0 },
            leftSubtextStrikethrough: { label: "Left Card - Subtext Strikethrough", type: "boolean", defaultValue: !0 },
            rightTitleDescriber: { label: "Right Card - Title Describer", type: "text", defaultValue: "monthly" },
            rightPrimaryText: { label: "Right Card - Primary Text", type: "text", defaultValue: "$9.99" },
            rightSubtext: { label: "Right Card - Subtext", type: "text", defaultValue: "$11.99" },
            rightShowSubtext: { label: "Right Card - Show Subtext", type: "boolean", defaultValue: !1 },
            rightSubtextStrikethrough: {
                label: "Right Card - Subtext Strikethrough",
                type: "boolean",
                defaultValue: !1,
            },
        },
    },
    g = {
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
                          { id: 2, label: "Server Boost", amount: 499, icon: (0, r.jsx)(l.tvc, { size: "xs" }) },
                      ]
                    : [];
            return (0, r.jsx)("div", {
                className: p.SG,
                children: (0, r.jsx)(c._D, {
                    label: t,
                    lineItems: i,
                    intervalType: f.WT.MONTH,
                    intervalCount: 1,
                    currency: _.Yri.USD,
                }),
            });
        },
        controls: {
            label: { label: "Label", type: "text", defaultValue: "Subscription Details" },
            hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
        },
    },
    E = {
        name: "Primitive: Purchase Item",
        id: "unified-checkout-purchase-item",
        component: (e) => {
            let {
                header: t,
                showHeader: n,
                label: i,
                description: a,
                price: s,
                hasPriceIcon: o,
                hasStrikethroughPrice: u,
                strikethroughPrice: d,
                hasGift: _,
                giftUsername: f,
                giftNickname: h,
            } = e;
            function m(e, p) {
                return (0, r.jsx)(c.f7, {
                    header: n ? t : void 0,
                    headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
                    label: `${i} ${p}`,
                    description: a,
                    price: s,
                    PriceIcon: o ? l.tvc : void 0,
                    strikethroughPrice: u ? d : void 0,
                    graphic: (0, r.jsx)(e, {}),
                    gift: _
                        ? { username: f, nickname: h, avatarUrl: "https://cdn.discordapp.com/embed/avatars/2.png" }
                        : void 0,
                });
            }
            return (0, r.jsxs)("div", {
                className: p.SG,
                children: [
                    m(c.JW, "Nitro"),
                    m(c.DH, "Nitro Basic"),
                    m(c.a6, "Boost"),
                    m(c.jw, "App"),
                    m(c.oo, "Nitro Credit"),
                ],
            });
        },
        controls: {
            header: { label: "Header", type: "text", defaultValue: "Marvel Rivals" },
            showHeader: { label: "Show Header", type: "boolean", defaultValue: !1 },
            label: { label: "Label", type: "text", defaultValue: "1 Month of" },
            description: { label: "Description", type: "text", defaultValue: "This is describing the item" },
            price: { label: "Price", type: "text", defaultValue: "$9.99" },
            hasPriceIcon: { label: "Has Price Icon", type: "boolean", defaultValue: !1 },
            hasStrikethroughPrice: { label: "Has Strikethrough Price", type: "boolean", defaultValue: !1 },
            strikethroughPrice: { label: "Strikethrough Price", type: "text", defaultValue: "$12.99" },
            hasGift: { label: "Has Gift", type: "boolean", defaultValue: !1 },
            giftUsername: { label: "Gift Username", type: "text", defaultValue: "moatmonster" },
            giftNickname: { label: "Gift Nickname", type: "text", defaultValue: "Matt" },
        },
    },
    A = {
        name: "Primitive: Payment Select",
        id: "unified-checkout-payment-select",
        component: (e) => {
            let { label: t, disabled: n, error: s, errorMessage: o } = e,
                u = [
                    { id: "visa-1234", label: "Visa ending in 1234", icon: d.Be.VISA },
                    { id: "mastercard-5678", label: "Mastercard ending in 5678", icon: d.Be.MASTERCARD },
                    { id: "paypal", label: "user@example.com", icon: d.Be.PAYPAL },
                    { id: "amex-9012", label: "Amex ending in 9012", icon: d.Be.AMEX },
                ],
                [_, f] = i.useState(u[0].id);
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.v7, {
                        label: t,
                        value: _,
                        options: u,
                        onChange: f,
                        onNew: a.noop,
                        disabled: n,
                        error: s ? o : void 0,
                    }),
                    (0, r.jsxs)(l.Text, { variant: "text-sm/normal", children: ["Selected payment: ", _ ?? "None"] }),
                ],
            });
        },
        controls: {
            label: { label: "Label", type: "text", defaultValue: "Payment Method" },
            disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
            error: { label: "Show Error", type: "boolean", defaultValue: !1 },
            errorMessage: {
                label: "Error Message",
                type: "text",
                defaultValue: "Please select a valid payment method",
            },
        },
    },
    I = { "nitro-wheel": l.tvc, gift: l.okO, orbs: l.Cp8 };
function T(e) {
    let { primaryButtonText: t, primaryButtonIcon: n, headerBadgeHasIcon: i, ...a } = e,
        s = i ? l.gqV : void 0;
    return (0, r.jsxs)(l.BJc, {
        gap: 16,
        align: "center",
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                children: "Click the button below to open the Unified Checkout modal",
            }),
            (0, r.jsx)(l.Button, {
                variant: "primary",
                text: "Open Unified Checkout Modal",
                onClick: () =>
                    (0, l.qfG)(
                        (e) =>
                            (0, r.jsx)(u.oH, {
                                ...e,
                                ...a,
                                title: a.title,
                                headerBadgeIcon: s,
                                primaryButtonProps: { onClick: e.onClose, text: t, icon: "none" !== n ? I[n] : void 0 },
                                onBackClick: e.onClose,
                                children: (0, r.jsx)(l.BJc, {
                                    gap: 16,
                                    children: (0, r.jsx)("div", {
                                        style: { border: "1px solid blue", height: 500 },
                                        children: "The Unified Checkout step content will go here.",
                                    }),
                                }),
                            }),
                        { dismissable: a.dismissable },
                    ),
            }),
        ],
    });
}
let y = s.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })),
    S = {
        name: "Modal: Unified Checkout Stateless Modal",
        id: "unified-checkout-stateless-modal",
        component: T,
        controls: {
            title: { label: "Title", type: "text", defaultValue: "Checkout" },
            primaryButtonText: { label: "Primary Button Text", type: "text", defaultValue: "Get Nitro Yearly" },
            primaryButtonIcon: {
                label: "Primary Button Icon",
                type: "select",
                defaultValue: "nitro-wheel",
                options: [
                    { label: "Nitro Wheel", value: "nitro-wheel" },
                    { label: "Gift", value: "gift" },
                    { label: "Orbs", value: "orbs" },
                    { label: "None", value: "none" },
                ],
            },
            countryCode: { label: "Country Code", type: "select", defaultValue: o.d.US, options: y },
            headerBadgeText: { label: "Header Pill Text", type: "text", defaultValue: "PROMO" },
            headerBadgeHasIcon: { label: "Header Badge Has Icon", type: "boolean", defaultValue: !1 },
            gradientColor: {
                label: "Gradient Color",
                type: "select",
                defaultValue: "nitro-pink",
                options: [
                    { label: "Nitro Pink", value: "nitro-pink" },
                    { label: "Nitro Green", value: "nitro-green" },
                    { label: "Purple", value: "purple" },
                    { label: "Blue", value: "blue" },
                ],
            },
            dismissable: { label: "Dismissable", type: "boolean", defaultValue: !0 },
        },
    };
function v(e) {
    let { variant: t, immediateDelivery: n } = e,
        [a, s] = i.useState(!1);
    return (0, r.jsx)(c._P, { ...t, immediateDelivery: n ? { value: a, onChange: s } : void 0 });
}
let C = {
        purchaseButtonText: "Subscribe",
        totalDue: 999,
        renewalPrice: 1099,
        currency: _.Yri.USD,
        period: "month",
        startDate: new Date(),
    },
    b = { type: c.I0.Subscription, props: C },
    N = {
        title: "Unified Checkout",
        stories: [
            S,
            h,
            m,
            g,
            E,
            A,
            {
                name: "Primitive: Legal Copy",
                id: "unified-checkout-legal-copy",
                component: v,
                controls: {
                    variant: {
                        label: "Variant",
                        type: "select",
                        defaultValue: b,
                        options: [
                            { label: "Subscription", value: b },
                            { label: "Subscription Trial", value: { type: c.I0.SubscriptionTrial, props: C } },
                            {
                                label: "Orbs Redemption",
                                value: { type: c.I0.OrbsRedemption, props: { purchaseButtonText: "Redeem" } },
                            },
                            {
                                label: "One-time Purchase",
                                value: { type: c.I0.OTP, props: { purchaseButtonText: "Purchase" } },
                            },
                        ],
                    },
                    immediateDelivery: { label: "Immediate Delivery", type: "boolean", defaultValue: !1 },
                },
            },
        ],
    };
