l.d(t, { Y: () => j }), l(321073);
var a = l(627968),
    n = l(64700),
    r = l(735438),
    i = l(96337),
    o = l(997101),
    s = l(397927),
    u = l(169797),
    c = l(93159),
    d = l(812745),
    p = l(71393),
    m = l(287809),
    h = l(652215),
    x = l(788868),
    b = l(825092);
let y = {
        name: "Primitive: Nitro Plan Select",
        id: "unified-checkout-nitro-plan-select",
        component: (e) => {
            let {
                    variant: t,
                    leftTitleDescriber: l,
                    leftPrimaryText: r,
                    leftSubtext: i,
                    leftShowSubtext: o,
                    leftSubtextStrikethrough: u,
                    rightTitleDescriber: d,
                    rightPrimaryText: p,
                    rightSubtext: m,
                    rightShowSubtext: h,
                    rightSubtextStrikethrough: x,
                } = e,
                [y, g] = n.useState(0);
            return (0, a.jsxs)("div", {
                className: b.Cd,
                children: [
                    (0, a.jsx)(c.q7, {
                        selection: y,
                        onChange: g,
                        planOptions: [
                            {
                                id: 0,
                                title: (0, a.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: l,
                                primaryText: r,
                                subtext: o ? (0, a.jsx)(c.Lo, { strikethrough: u, price: i }) : void 0,
                            },
                            {
                                id: 1,
                                title: (0, a.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: d,
                                primaryText: p,
                                subtext: h ? (0, a.jsx)(c.Lo, { strikethrough: x, price: m }) : void 0,
                            },
                        ],
                    }),
                    (0, a.jsxs)(s.Text, { variant: "text-sm/normal", children: ["Selected plan index: ", y] }),
                ],
            });
        },
        controls: {
            variant: {
                label: "Nitro Variant",
                type: "select",
                defaultValue: x.PremiumTypes.TIER_2,
                options: [
                    { label: "Nitro", value: x.PremiumTypes.TIER_2 },
                    { label: "Nitro Basic", value: x.PremiumTypes.TIER_0 },
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
    g = { "nitro-wheel": s.tvc, gift: s.okO, orbs: s.Cp8 },
    f = i.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })),
    v = {
        name: "Modal: Unified Checkout Stateless Modal",
        id: "unified-checkout-stateless-modal",
        component: function (e) {
            let { primaryButtonText: t, primaryButtonIcon: l, headerBadgeHasIcon: n, ...r } = e,
                i = n ? s.gqV : void 0;
            return (0, a.jsxs)(s.BJc, {
                gap: 16,
                align: "center",
                children: [
                    (0, a.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: "Click the button below to open the Unified Checkout modal",
                    }),
                    (0, a.jsx)(s.Button, {
                        variant: "primary",
                        text: "Open Unified Checkout Modal",
                        onClick: () =>
                            (0, s.qfG)(
                                (e) =>
                                    (0, a.jsx)(u.oH, {
                                        ...e,
                                        ...r,
                                        title: r.title,
                                        headerBadgeIcon: i,
                                        primaryButtonProps: {
                                            onClick: e.onClose,
                                            text: t,
                                            icon: "none" !== l ? g[l] : void 0,
                                        },
                                        onBackClick: e.onClose,
                                        children: (0, a.jsx)(s.BJc, {
                                            gap: 16,
                                            children: (0, a.jsx)("div", {
                                                style: { border: "1px solid blue", height: 500 },
                                                children: "The Unified Checkout step content will go here.",
                                            }),
                                        }),
                                    }),
                                { dismissable: r.dismissable },
                            ),
                    }),
                ],
            });
        },
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
            countryCode: { label: "Country Code", type: "select", defaultValue: o.d.US, options: f },
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
    },
    E = {
        purchaseButtonText: "Subscribe",
        totalDue: 999,
        renewalPrice: 1099,
        currency: h.Yri.USD,
        interval: x.WT.MONTH,
        intervalCount: 1,
        startDate: new Date(),
    },
    S = {
        [c.I0.Subscription]: { type: c.I0.Subscription, ...E },
        [c.I0.SubscriptionTrial]: { type: c.I0.SubscriptionTrial, ...E },
        [c.I0.OrbsRedemption]: { type: c.I0.OrbsRedemption, purchaseButtonText: "Redeem" },
        [c.I0.Shop]: { type: c.I0.Shop, purchaseButtonText: "Purchase" },
        [c.I0.GiftNitro]: { type: c.I0.GiftNitro, purchaseButtonText: "Buy Gift" },
        [c.I0.GiftShop]: { type: c.I0.GiftShop, purchaseButtonText: "Buy Gift" },
        [c.I0.GiftGameShop]: {
            type: c.I0.GiftGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
        },
    },
    j = {
        title: "Unified Checkout",
        stories: [
            v,
            {
                name: "Primitive: Order Summary Accordion",
                id: "unified-checkout-order-summary",
                component: (e) => {
                    let { label: t, hasDiscount: l, hasLineItems: n } = e,
                        r = n
                            ? [
                                  { id: 1, label: "Nitro Basic (Monthly)", amount: 299 },
                                  { id: 2, label: "Server Boost", amount: 499 },
                              ]
                            : [];
                    return (
                        l && n && r.push({ id: 3, label: "Discount Applied", amount: -100 }),
                        (0, a.jsx)("div", {
                            className: b.SG,
                            children: (0, a.jsx)(c.Vm, { label: t, lineItems: r, currency: h.Yri.USD }),
                        })
                    );
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Order Summary" },
                    hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !0 },
                    hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
                },
            },
            y,
            {
                name: "Primitive: Subscription Details Accordion",
                id: "unified-checkout-subscription-details",
                component: (e) => {
                    let { label: t, hasLineItems: l } = e,
                        n = l
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
                                      icon: (0, a.jsx)(s.tvc, { size: "xs" }),
                                  },
                              ]
                            : [];
                    return (0, a.jsx)("div", {
                        className: b.SG,
                        children: (0, a.jsx)(c._D, {
                            label: t,
                            lineItems: n,
                            intervalType: x.WT.MONTH,
                            intervalCount: 1,
                            currency: h.Yri.USD,
                        }),
                    });
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Subscription Details" },
                    hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
                },
            },
            {
                name: "Primitive: Purchase Item",
                id: "unified-checkout-purchase-item",
                component: (e) => {
                    let {
                        header: t,
                        showHeader: l,
                        label: n,
                        description: r,
                        price: i,
                        hasPriceIcon: o,
                        hasStrikethroughPrice: u,
                        strikethroughPrice: d,
                        targetType: h,
                    } = e;
                    function x(e, x) {
                        let b = m.default.getCurrentUser(),
                            y = p.A.getGuildsArray()[0];
                        return (0, a.jsx)(c.f7, {
                            header: l ? t : void 0,
                            headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
                            label: `${n} ${x}`,
                            description: r,
                            price: i,
                            PriceIcon: o ? s.tvc : void 0,
                            priceSubText: u ? d : void 0,
                            priceSubTextHasStrikethrough: u,
                            graphic: (0, a.jsx)(e, {}),
                            target:
                                "gift" === h
                                    ? { type: "gift", user: b }
                                    : "guildSubscription" === h
                                      ? { type: "guildSubscription", guild: y }
                                      : void 0,
                        });
                    }
                    return (0, a.jsxs)("div", {
                        className: b.SG,
                        children: [
                            x(c.JW, "Nitro"),
                            x(c.DH, "Nitro Basic"),
                            x(c.a6, "Boost"),
                            x(c.jw, "App"),
                            x(c.oo, "Nitro Credit"),
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
                    targetType: {
                        label: "Target Type",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Gift", value: "gift" },
                            { label: "Guild Subscription", value: "guildSubscription" },
                        ],
                    },
                },
            },
            {
                name: "Primitive: Payment Select",
                id: "unified-checkout-payment-select",
                component: (e) => {
                    let { label: t, disabled: l, error: i, errorMessage: o } = e,
                        u = [
                            { id: "visa-1234", label: "Visa ending in 1234", icon: d.Be.VISA },
                            { id: "mastercard-5678", label: "Mastercard ending in 5678", icon: d.Be.MASTERCARD },
                            { id: "paypal", label: "user@example.com", icon: d.Be.PAYPAL },
                            { id: "amex-9012", label: "Amex ending in 9012", icon: d.Be.AMEX },
                        ],
                        [p, m] = n.useState(u[0].id);
                    return (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(c.v7, {
                                label: t,
                                value: p,
                                options: u,
                                onChange: m,
                                onNew: r.noop,
                                disabled: l,
                                error: i ? o : void 0,
                            }),
                            (0, a.jsxs)(s.Text, {
                                variant: "text-sm/normal",
                                children: ["Selected payment: ", p ?? "None"],
                            }),
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
            {
                name: "Primitive: Legal Copy",
                id: "unified-checkout-legal-copy",
                component: function (e) {
                    let { type: t, immediateDelivery: l, paysafecard: r } = e,
                        [i, o] = n.useState(!1);
                    return (0, a.jsx)(c._P, {
                        variant: S[t],
                        immediateDelivery: l ? { value: i, onChange: o } : void 0,
                        paymentSourceType: r ? h.hes.PAYSAFE_CARD : h.hes.CARD,
                    });
                },
                controls: {
                    type: {
                        label: "Type",
                        type: "select",
                        defaultValue: c.I0.Subscription,
                        options: [
                            { label: "Subscription", value: c.I0.Subscription },
                            { label: "Subscription Trial", value: c.I0.SubscriptionTrial },
                            { label: "Orbs Redemption", value: c.I0.OrbsRedemption },
                            { label: "Shop", value: c.I0.Shop },
                            { label: "Nitro Gift", value: c.I0.GiftNitro },
                            { label: "Shop Gift", value: c.I0.GiftShop },
                            { label: "Game Shop Gift", value: c.I0.GiftGameShop },
                        ],
                    },
                    immediateDelivery: { label: "Immediate Delivery", type: "boolean", defaultValue: !1 },
                    paysafecard: { label: "Paysafecard", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "Primitive: Gift Redemption Link",
                id: "unified-checkout-gift-redemption-link",
                component: function () {
                    return (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(s.Text, { variant: "text-sm/normal", children: "Stateless Component:" }),
                            (0, a.jsx)(c.y, { onClick: h.tEg }),
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)(s.Text, { variant: "text-sm/normal", children: "Link with Modal:" }),
                            (0, a.jsx)(c.Z4, { onComplete: h.tEg }),
                        ],
                    });
                },
            },
            {
                name: "Primitive: Plan Radio Group",
                id: "unified-checkout-plan-radio-group",
                component: function () {
                    let [e, t] = n.useState("yearly");
                    return (0, a.jsx)("div", {
                        children: (0, a.jsx)(c.me, {
                            headingComponent: (0, a.jsx)(c.ec, {
                                size: "sm",
                                color: "text-strong",
                                premiumType: x.PremiumTypes.TIER_2,
                            }),
                            planRadioOptions: [
                                { primaryText: "Yearly", subText: "$99.99", badgeText: "SAVE 16%", value: "yearly" },
                                { primaryText: "Monthly", subText: "$99.99", value: "monthly" },
                            ],
                            value: e,
                            onChange: (e) => t(e.value),
                        }),
                    });
                },
            },
            {
                name: "Primitive: Store Country Row",
                id: "checkout-store-country-row",
                component: (e) => {
                    let { storeCountry: t } = e;
                    return (0, a.jsx)(c.s7, { storeCountry: t });
                },
                controls: {
                    storeCountry: { label: "Store Country", type: "select", defaultValue: o.d.US, options: f },
                },
            },
        ],
    };
