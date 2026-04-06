l.d(t, { Y: () => P }), l(321073);
var a = l(627968),
    n = l(64700),
    r = l(735438),
    i = l(96337),
    o = l(997101),
    s = l(417597),
    d = l(397927),
    c = l(384904),
    u = l(918022),
    p = l(169797),
    m = l(93159),
    h = l(826469),
    x = l(812745),
    b = l(71393),
    y = l(287809),
    f = l(295405),
    g = l(652215),
    v = l(788868),
    _ = l(895375);
let E = {
        name: "Primitive: Nitro Plan Select",
        id: "unified-checkout-nitro-plan-select",
        component: (e) => {
            let {
                    variant: t,
                    leftTitleDescriber: l,
                    leftPrimaryText: r,
                    leftSubtext: i,
                    leftShowSubtext: o,
                    leftSubtextStrikethrough: s,
                    rightTitleDescriber: c,
                    rightPrimaryText: u,
                    rightSubtext: p,
                    rightShowSubtext: h,
                    rightSubtextStrikethrough: x,
                } = e,
                [b, y] = n.useState(0);
            return (0, a.jsxs)("div", {
                className: _.Cd,
                children: [
                    (0, a.jsx)(m.q7, {
                        selection: b,
                        onChange: y,
                        planOptions: [
                            {
                                id: 0,
                                title: (0, a.jsx)(m.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: l,
                                primaryText: r,
                                subtext: o ? (0, a.jsx)(m.Lo, { strikethrough: s, price: i }) : void 0,
                            },
                            {
                                id: 1,
                                title: (0, a.jsx)(m.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: c,
                                primaryText: u,
                                subtext: h ? (0, a.jsx)(m.Lo, { strikethrough: x, price: p }) : void 0,
                            },
                        ],
                    }),
                    (0, a.jsxs)(d.Text, { variant: "text-sm/normal", children: ["Selected plan index: ", b] }),
                ],
            });
        },
        controls: {
            variant: {
                label: "Nitro Variant",
                type: "select",
                defaultValue: v.PremiumTypes.TIER_2,
                options: [
                    { label: "Nitro", value: v.PremiumTypes.TIER_2 },
                    { label: "Nitro Basic", value: v.PremiumTypes.TIER_0 },
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
    C = { "nitro-wheel": d.tvc, gift: d.okO, orbs: d.Cp8 },
    j = i.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })),
    S = {
        name: "Modal: Unified Checkout Stateless Modal",
        id: "unified-checkout-stateless-modal",
        component: function (e) {
            let { primaryButtonText: t, primaryButtonIcon: l, headerBadgeHasIcon: n, ...r } = e,
                i = n ? d.gqV : void 0;
            return (0, a.jsxs)(d.BJc, {
                gap: 16,
                align: "center",
                children: [
                    (0, a.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: "Click the button below to open the Unified Checkout modal",
                    }),
                    (0, a.jsx)(d.Button, {
                        variant: "primary",
                        text: "Open Unified Checkout Modal",
                        onClick: () =>
                            (0, d.qfG)(
                                (e) =>
                                    (0, a.jsx)(p.oH, {
                                        ...e,
                                        ...r,
                                        title: r.title,
                                        headerBadgeIcon: i,
                                        primaryButtonProps: {
                                            onClick: e.onClose,
                                            text: t,
                                            icon: "none" !== l ? C[l] : void 0,
                                        },
                                        onBackClick: e.onClose,
                                        children: (0, a.jsx)(d.BJc, {
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
            countryCode: { label: "Country Code", type: "select", defaultValue: o.d.US, options: j },
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
    T = {
        purchaseButtonText: "Subscribe",
        totalDue: 999,
        renewalPrice: 1099,
        currency: g.Yri.USD,
        interval: v.WT.MONTH,
        intervalCount: 1,
        startDate: new Date(),
    },
    A = {
        [m.I0.Subscription]: { type: m.I0.Subscription, ...T },
        [m.I0.SubscriptionTrial]: { type: m.I0.SubscriptionTrial, ...T },
        [m.I0.OrbsRedemption]: { type: m.I0.OrbsRedemption, purchaseButtonText: "Redeem" },
        [m.I0.Shop]: { type: m.I0.Shop, purchaseButtonText: "Purchase" },
        [m.I0.GiftNitro]: { type: m.I0.GiftNitro, purchaseButtonText: "Buy Gift" },
        [m.I0.GiftShop]: { type: m.I0.GiftShop, purchaseButtonText: "Buy Gift" },
        [m.I0.GiftGameShop]: {
            type: m.I0.GiftGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
        },
    },
    P = {
        title: "Unified Checkout",
        stories: [
            S,
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
                            className: _.SG,
                            children: (0, a.jsx)(m.Vm, { label: t, lineItems: r, currency: g.Yri.USD }),
                        })
                    );
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Order Summary" },
                    hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !0 },
                    hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
                },
            },
            E,
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
                                      icon: (0, a.jsx)(d.tvc, { size: "xs" }),
                                  },
                              ]
                            : [];
                    return (0, a.jsx)("div", {
                        className: _.SG,
                        children: (0, a.jsx)(m._D, {
                            label: t,
                            lineItems: n,
                            intervalType: v.WT.MONTH,
                            intervalCount: 1,
                            currency: g.Yri.USD,
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
                        hasStrikethroughPrice: s,
                        strikethroughPrice: c,
                        targetType: u,
                    } = e;
                    function p(e, p) {
                        let h = y.default.getCurrentUser(),
                            x = b.A.getGuildsArray()[0];
                        return (0, a.jsx)(m.f7, {
                            header: l ? t : void 0,
                            headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
                            label: `${n} ${p}`,
                            description: r,
                            price: i,
                            PriceIcon: o ? d.tvc : void 0,
                            priceSubText: s ? c : void 0,
                            priceSubTextHasStrikethrough: s,
                            graphic: (0, a.jsx)(e, {}),
                            target:
                                "gift" === u
                                    ? { type: "gift", user: h }
                                    : "guildSubscription" === u
                                      ? { type: "guildSubscription", guild: x }
                                      : void 0,
                        });
                    }
                    return (0, a.jsxs)("div", {
                        className: _.SG,
                        children: [
                            p(m.JW, "Nitro"),
                            p(m.DH, "Nitro Basic"),
                            p(m.a6, "Boost"),
                            p(m.jw, "App"),
                            p(m.oo, "Nitro Credit"),
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
                    let { disabled: t, error: l, errorMessage: i } = e,
                        o = [
                            { id: "visa-1234", label: "Visa ending in 1234", icon: x.Be.VISA },
                            { id: "mastercard-5678", label: "Mastercard ending in 5678", icon: x.Be.MASTERCARD },
                            { id: "paypal", label: "user@example.com", icon: x.Be.PAYPAL },
                            { id: "amex-9012", label: "Amex ending in 9012", icon: x.Be.AMEX },
                        ],
                        [s, c] = n.useState(o[0].id);
                    return (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(m.v7, {
                                value: s,
                                options: o,
                                onChange: c,
                                onNew: r.noop,
                                disabled: t,
                                error: l ? i : void 0,
                            }),
                            (0, a.jsxs)(d.Text, {
                                variant: "text-sm/normal",
                                children: ["Selected payment: ", s ?? "None"],
                            }),
                        ],
                    });
                },
                controls: {
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
                name: "Primitive: Payment Source Selector",
                id: "unified-checkout-payment-source-selector",
                component: (e) => {
                    let { label: t, giftCardsEnabled: l, disabled: r, hidePersonalInformation: i } = e,
                        o = (0, s.bG)([f.A], () => Object.values(f.A.paymentSources)),
                        [p, x] = n.useState(void 0);
                    n.useEffect(() => {
                        (0, c.$o)();
                    }, []);
                    let b = n.useMemo(() => o.map((e) => new h.A(e, !0, [])), [o]),
                        {
                            dropdownPaymentSources: y,
                            dropdownPaymentSourceId: g,
                            handleDropdownPaymentSourceChange: v,
                            giftCardCheckboxProps: _,
                        } = (0, u.Y)({
                            checkoutPaymentSources: b,
                            setPaymentSourceId: x,
                            location: "revenue_playground",
                        });
                    return (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(m.nL, {
                                label: t,
                                giftCardsEnabled: l,
                                giftCardCheckboxProps: _,
                                paymentSourceDropdownProps: {
                                    selectedPaymentSourceId: g,
                                    paymentSources: y,
                                    hidePersonalInformation: i,
                                    onChange: v,
                                },
                                disabled: r,
                            }),
                            (0, a.jsxs)(d.Text, {
                                variant: "text-sm/normal",
                                children: ["Effective payment source: ", p ?? "None"],
                            }),
                        ],
                    });
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Payment Method" },
                    giftCardsEnabled: { label: "Gift Cards Enabled", type: "boolean", defaultValue: !0 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    hidePersonalInformation: { label: "Hide Personal Information", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "Primitive: Legal Copy",
                id: "unified-checkout-legal-copy",
                component: function (e) {
                    let { type: t, immediateDelivery: l, paysafecard: r } = e,
                        [i, o] = n.useState(!1);
                    return (0, a.jsx)(m._P, {
                        variant: A[t],
                        immediateDelivery: l ? { value: i, onChange: o } : void 0,
                        paymentSourceType: r ? g.hes.PAYSAFE_CARD : g.hes.CARD,
                    });
                },
                controls: {
                    type: {
                        label: "Type",
                        type: "select",
                        defaultValue: m.I0.Subscription,
                        options: [
                            { label: "Subscription", value: m.I0.Subscription },
                            { label: "Subscription Trial", value: m.I0.SubscriptionTrial },
                            { label: "Orbs Redemption", value: m.I0.OrbsRedemption },
                            { label: "Shop", value: m.I0.Shop },
                            { label: "Nitro Gift", value: m.I0.GiftNitro },
                            { label: "Shop Gift", value: m.I0.GiftShop },
                            { label: "Game Shop Gift", value: m.I0.GiftGameShop },
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
                            (0, a.jsx)(d.Text, { variant: "text-sm/normal", children: "Stateless Component:" }),
                            (0, a.jsx)(m.y, { onClick: g.tEg }),
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)(d.Text, { variant: "text-sm/normal", children: "Link with Modal:" }),
                            (0, a.jsx)(m.Z4, { onComplete: g.tEg }),
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
                        children: (0, a.jsx)(m.me, {
                            headingComponent: (0, a.jsx)(m.ec, {
                                size: "sm",
                                color: "text-strong",
                                premiumType: v.PremiumTypes.TIER_2,
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
                    return (0, a.jsx)(m.s7, { storeCountry: t });
                },
                controls: {
                    storeCountry: { label: "Store Country", type: "select", defaultValue: o.d.US, options: j },
                },
            },
            {
                name: "Primitive: Store Relocation Notice",
                id: "checkout-store-relocation-notice",
                component: (e) => {
                    let { relocationCountry: t, relocationCurrencyCode: l } = e;
                    return (0, a.jsx)(m.ch, { relocationCountry: t, relocationCurrencyCode: l });
                },
                controls: {
                    relocationCountry: {
                        label: "Relocation Country",
                        type: "select",
                        defaultValue: o.d.US,
                        options: j,
                    },
                    relocationCurrencyCode: { label: "Relocation Currency Code", type: "text", defaultValue: "USD" },
                },
            },
        ],
    };
