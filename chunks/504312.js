n.d(t, {
    Y: () => w,
}),
    n(321073),
    n(896048),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    o = n(96337),
    s = n(997101),
    l = n(397927),
    c = n(169797),
    u = n(93159),
    d = n(812745),
    f = n(652215),
    p = n(788868),
    _ = n(749226);

function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}

function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let O = {
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
                    className: _.SG,
                    children: (0, r.jsx)(u.Vm, {
                        label: t,
                        lineItems: a,
                        currency: f.Yri.USD,
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
    v = {
        name: "Primitive: Nitro Plan Select",
        id: "unified-checkout-nitro-plan-select",
        component: (e) => {
            let {
                    variant: t,
                    leftTitleDescriber: n,
                    leftPrimaryText: a,
                    leftSubtext: o,
                    leftShowSubtext: s,
                    leftSubtextStrikethrough: c,
                    rightTitleDescriber: d,
                    rightPrimaryText: f,
                    rightSubtext: p,
                    rightShowSubtext: h,
                    rightSubtextStrikethrough: m,
                } = e,
                [g, E] = i.useState(0);
            return (0, r.jsxs)("div", {
                className: _.Cd,
                children: [
                    (0, r.jsx)(u.q7, {
                        selection: g,
                        onChange: E,
                        planOptions: [
                            {
                                id: 0,
                                title: (0, r.jsx)(u.ec, {
                                    size: "sm",
                                    color: "text-strong",
                                    premiumType: t,
                                }),
                                titleDescriber: n,
                                primaryText: a,
                                subtext: s
                                    ? (0, r.jsx)(u.Lo, {
                                          strikethrough: c,
                                          price: o,
                                      })
                                    : void 0,
                            },
                            {
                                id: 1,
                                title: (0, r.jsx)(u.ec, {
                                    size: "sm",
                                    color: "text-strong",
                                    premiumType: t,
                                }),
                                titleDescriber: d,
                                primaryText: f,
                                subtext: h
                                    ? (0, r.jsx)(u.Lo, {
                                          strikethrough: m,
                                          price: p,
                                      })
                                    : void 0,
                            },
                        ],
                    }),
                    (0, r.jsxs)(l.Text, {
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
                defaultValue: p.PremiumTypes.TIER_2,
                options: [
                    {
                        label: "Nitro",
                        value: p.PremiumTypes.TIER_2,
                    },
                    {
                        label: "Nitro Basic",
                        value: p.PremiumTypes.TIER_0,
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
    A = {
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
                              icon: (0, r.jsx)(l.tvc, {
                                  size: "xs",
                              }),
                          },
                      ]
                    : [];
            return (0, r.jsx)("div", {
                className: _.SG,
                children: (0, r.jsx)(u._D, {
                    label: t,
                    lineItems: i,
                    intervalType: p.WT.MONTH,
                    intervalCount: 1,
                    currency: f.Yri.USD,
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
    I = {
        name: "Primitive: Purchase Item",
        id: "unified-checkout-purchase-item",
        component: (e) => {
            let {
                header: t,
                showHeader: n,
                label: i,
                description: a,
                price: o,
                hasPriceIcon: s,
                hasStrikethroughPrice: c,
                strikethroughPrice: d,
                hasGift: f,
                giftUsername: p,
                giftNickname: h,
            } = e;

            function m(e, _) {
                return (0, r.jsx)(u.f7, {
                    header: n ? t : void 0,
                    headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
                    label: "".concat(i, " ").concat(_),
                    description: a,
                    price: o,
                    PriceIcon: s ? l.tvc : void 0,
                    strikethroughPrice: c ? d : void 0,
                    graphic: (0, r.jsx)(e, {}),
                    gift: f
                        ? {
                              username: p,
                              nickname: h,
                              avatarUrl: "https://cdn.discordapp.com/embed/avatars/2.png",
                          }
                        : void 0,
                });
            }
            return (0, r.jsxs)("div", {
                className: _.SG,
                children: [
                    m(u.JW, "Nitro"),
                    m(u.DH, "Nitro Basic"),
                    m(u.a6, "Boost"),
                    m(u.jw, "App"),
                    m(u.oo, "Nitro Credit"),
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
    S = {
        name: "Primitive: Payment Select",
        id: "unified-checkout-payment-select",
        component: (e) => {
            let { label: t, disabled: n, error: o, errorMessage: s } = e,
                c = [
                    {
                        id: "visa-1234",
                        label: "Visa ending in 1234",
                        icon: d.Be.VISA,
                    },
                    {
                        id: "mastercard-5678",
                        label: "Mastercard ending in 5678",
                        icon: d.Be.MASTERCARD,
                    },
                    {
                        id: "paypal",
                        label: "user@example.com",
                        icon: d.Be.PAYPAL,
                    },
                    {
                        id: "amex-9012",
                        label: "Amex ending in 9012",
                        icon: d.Be.AMEX,
                    },
                ],
                [f, p] = i.useState(c[0].id);
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(u.v7, {
                        label: t,
                        value: f,
                        options: c,
                        onChange: p,
                        onNew: a.noop,
                        disabled: n,
                        error: o ? s : void 0,
                    }),
                    (0, r.jsxs)(l.Text, {
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
    T = {
        "nitro-wheel": l.tvc,
        gift: l.okO,
        orbs: l.Cp8,
    };

function C(e) {
    let { primaryButtonText: t, primaryButtonIcon: n, headerBadgeHasIcon: i } = e,
        a = y(e, ["primaryButtonText", "primaryButtonIcon", "headerBadgeHasIcon"]),
        o = i ? l.gqV : void 0;
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
                            (0, r.jsx)(
                                c.oH,
                                E(m({}, e, a), {
                                    title: a.title,
                                    headerBadgeIcon: o,
                                    primaryButtonProps: {
                                        onClick: e.onClose,
                                        text: t,
                                        icon: "none" !== n ? T[n] : void 0,
                                    },
                                    onBackClick: e.onClose,
                                    children: (0, r.jsx)(l.BJc, {
                                        gap: 16,
                                        children: (0, r.jsx)("div", {
                                            style: {
                                                border: "1px solid blue",
                                                height: 500,
                                            },
                                            children: "The Unified Checkout step content will go here.",
                                        }),
                                    }),
                                }),
                            ),
                        {
                            dismissable: a.dismissable,
                        },
                    ),
            }),
        ],
    });
}
let N = o.A.map((e) => ({
        id: e.alpha2,
        value: e.alpha2,
        label: e.name,
    })),
    w = {
        title: "Unified Checkout",
        stories: [
            {
                name: "Modal: Unified Checkout Stateless Modal",
                id: "unified-checkout-stateless-modal",
                component: C,
                controls: {
                    title: {
                        label: "Title",
                        type: "text",
                        defaultValue: "Checkout",
                    },
                    primaryButtonText: {
                        label: "Primary Button Text",
                        type: "text",
                        defaultValue: "Get Nitro Yearly",
                    },
                    primaryButtonIcon: {
                        label: "Primary Button Icon",
                        type: "select",
                        defaultValue: "nitro-wheel",
                        options: [
                            {
                                label: "Nitro Wheel",
                                value: "nitro-wheel",
                            },
                            {
                                label: "Gift",
                                value: "gift",
                            },
                            {
                                label: "Orbs",
                                value: "orbs",
                            },
                            {
                                label: "None",
                                value: "none",
                            },
                        ],
                    },
                    countryCode: {
                        label: "Country Code",
                        type: "select",
                        defaultValue: s.d.US,
                        options: N,
                    },
                    headerBadgeText: {
                        label: "Header Pill Text",
                        type: "text",
                        defaultValue: "PROMO",
                    },
                    headerBadgeHasIcon: {
                        label: "Header Badge Has Icon",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    gradientColor: {
                        label: "Gradient Color",
                        type: "select",
                        defaultValue: "nitro-pink",
                        options: [
                            {
                                label: "Nitro Pink",
                                value: "nitro-pink",
                            },
                            {
                                label: "Nitro Green",
                                value: "nitro-green",
                            },
                            {
                                label: "Purple",
                                value: "purple",
                            },
                            {
                                label: "Blue",
                                value: "blue",
                            },
                        ],
                    },
                    dismissable: {
                        label: "Dismissable",
                        type: "boolean",
                        defaultValue: !0,
                    },
                },
            },
            O,
            v,
            A,
            I,
            S,
        ],
    };
