a.d(t, {
    D: () => g,
    Z: () => _,
}),
    a(388685);
var n = a(951288),
    r = a(647438),
    l = a(120356),
    i = a.n(l),
    s = a(314794),
    o = a(755721),
    c = a(481060),
    d = a(259580),
    u = a(55935),
    m = a(246992),
    x = a(232867),
    h = a(981631),
    p = a(696450),
    v = a(711322),
    b = a(451429);
let f = {
        [h.kNB.QUEST_REWARD]: "Quest Reward",
        [h.kNB.DEVELOPER_GIFT]: "Developer Gift",
        [h.kNB.INVOICE]: "Invoice",
        [h.kNB.REVERSE_TRIAL]: "Reverse Trial",
        [h.kNB.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
    },
    g = (e) => {
        var t;
        let { entitlement: a, active: r, onDelete: l } = e,
            s = (e) => (null != e ? (0, u.vc)(e, "LLL") : "---");
        return (0, n.jsxs)("div", {
            className: i()(p.card, r ? v.gradientWrapperTier2 : ""),
            children: [
                (0, n.jsxs)(c.Text, {
                    variant: "text-md/normal",
                    children: ["ID: ", a.id, " "],
                }),
                !r &&
                    (0, n.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        children: ["SKU: ", null == (t = j.find((e) => e.value === a.skuId)) ? void 0 : t.label],
                    }),
                null != a.startsAt &&
                    null != a.endsAt &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsxs)(c.Text, {
                                variant: "text-md/normal",
                                children: ["Start: ", s(a.startsAt), " "],
                            }),
                            (0, n.jsxs)(c.Text, {
                                variant: "text-md/normal",
                                children: ["End: ", s(a.endsAt), " "],
                            }),
                        ],
                    }),
                (0, n.jsxs)(c.Text, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        (() => {
                            let e = a.sourceType;
                            return null != e && e in f ? f[e] : "Unknown source type ".concat(e);
                        })(),
                    ],
                }),
                r &&
                    null != l &&
                    (0, n.jsx)(o.zx, {
                        className: p.deleteEntitlementButton,
                        size: o.zx.Sizes.TINY,
                        color: o.zx.Colors.RED,
                        look: o.zx.Looks.OUTLINED,
                        onClick: l,
                        children: "Delete",
                    }),
            ],
        });
    },
    j = [
        {
            label: "1 hour",
            value: s.a.PREMIUM_TIER_2_1_HOUR,
        },
        {
            label: "1 day",
            value: s.a.PREMIUM_TIER_2_1_DAY,
        },
        {
            label: "3 days",
            value: s.a.PREMIUM_TIER_2_3_DAY,
        },
    ];
function _() {
    let [e, t] = r.useState(!1),
        [a, l] = r.useState(s.a.PREMIUM_TIER_2_1_HOUR),
        [u, f] = r.useState([]),
        [_, y] = r.useState([]),
        {
            refreshEntitlementList: C,
            grantFractionalPremium: N,
            deleteFractionalPremium: T,
            triggerNextEntitlementFulfillment: O,
            entitlements: E,
            loading: S,
        } = (0, x.m)();
    return (
        r.useEffect(() => {
            C();
        }, [C]),
        r.useEffect(() => {
            f(E.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === h.qc2.FRACTIONAL_REDEMPTION)),
                y(E.filter((e) => Object.values(s.a).includes(e.skuId) && null == e.startsAt));
        }, [E]),
        (0, n.jsx)(c.zJl, {
            className: b.panel,
            children: (0, n.jsxs)("div", {
                className: v.panelInner,
                children: [
                    (0, n.jsxs)("div", {
                        className: v.headerWrapper,
                        children: [
                            (0, n.jsx)(c.Text, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, n.jsxs)(c.P3F, {
                                onClick: () => t(!e),
                                className: p.clickableGroup,
                                children: [
                                    (0, n.jsx)("div", {
                                        children: (0, n.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            children: "Info",
                                        }),
                                    }),
                                    (0, n.jsx)(d.Z, { direction: e ? d.Z.Directions.UP : d.Z.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, n.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, n.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, n.jsx)("br", {}),
                                (0, n.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed.",
                                }),
                            ],
                        }),
                    (0, n.jsxs)("section", {
                        style: { marginBottom: "8px" },
                        className: i()([p.section, v.buttons]),
                        children: [
                            (0, n.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: " Fractional Premium SKU ",
                            }),
                            (0, n.jsx)(c.PhF, {
                                serialize: (e) => e,
                                isSelected: (e) => e === a,
                                options: j,
                                select: l,
                                popoutLayerContext: m.O$,
                            }),
                            (0, n.jsx)(c.zxk, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => N(a),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("section", {
                        className: p.section,
                        children: [
                            (0, n.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: v.headerWrapper,
                                children: [
                                    (0, n.jsx)(c.Text, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: p.buttonGroup,
                                        children: [
                                            (0, n.jsx)(o.zx, {
                                                disabled: S,
                                                size: o.zx.Sizes.TINY,
                                                color: o.zx.Colors.PRIMARY,
                                                look: o.zx.Looks.OUTLINED,
                                                onClick: () => O(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, n.jsx)(o.zx, {
                                                disabled: S,
                                                size: o.zx.Sizes.TINY,
                                                color: o.zx.Colors.RED,
                                                look: o.zx.Looks.OUTLINED,
                                                onClick: () => T(),
                                                children: "Delete all",
                                            }),
                                            (0, n.jsx)(o.zx, {
                                                disabled: S,
                                                look: o.zx.Looks.BLANK,
                                                size: o.zx.Sizes.ICON,
                                                onClick: C,
                                                children: (0, n.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, n.jsx)(c.DuK, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            u.length > 0 &&
                                (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(c.Text, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, n.jsx)("div", {
                                            children: u.map((e) =>
                                                (0, n.jsx)(
                                                    g,
                                                    {
                                                        entitlement: e,
                                                        active: !0,
                                                        onDelete: () => T(e.id),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            _.length > 0 &&
                                (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(c.Text, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, n.jsx)("div", {
                                            children: _.map((e) => (0, n.jsx)(g, { entitlement: e }, e.id)),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
