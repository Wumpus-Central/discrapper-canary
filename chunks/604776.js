n.d(t, {
    D: () => j,
    Z: () => _,
}),
    n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(314794),
    o = n(755721),
    c = n(481060),
    d = n(259580),
    u = n(55935),
    m = n(246992),
    x = n(232867),
    h = n(981631),
    p = n(696450),
    f = n(711322),
    v = n(451429);
let b = {
        [h.kNB.QUEST_REWARD]: "Quest Reward",
        [h.kNB.DEVELOPER_GIFT]: "Developer Gift",
        [h.kNB.INVOICE]: "Invoice",
        [h.kNB.REVERSE_TRIAL]: "Reverse Trial",
        [h.kNB.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
    },
    j = (e) => {
        var t;
        let { entitlement: n, active: r, onDelete: l } = e,
            s = (e) => (null != e ? (0, u.vc)(e, "LLL") : "---");
        return (0, a.jsxs)("div", {
            className: i()(p.card, r ? f.gradientWrapperTier2 : ""),
            children: [
                (0, a.jsxs)(c.Text, {
                    variant: "text-md/normal",
                    children: ["ID: ", n.id, " "],
                }),
                !r &&
                    (0, a.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        children: ["SKU: ", null == (t = g.find((e) => e.value === n.skuId)) ? void 0 : t.label],
                    }),
                null != n.startsAt &&
                    null != n.endsAt &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsxs)(c.Text, {
                                variant: "text-md/normal",
                                children: ["Start: ", s(n.startsAt), " "],
                            }),
                            (0, a.jsxs)(c.Text, {
                                variant: "text-md/normal",
                                children: ["End: ", s(n.endsAt), " "],
                            }),
                        ],
                    }),
                (0, a.jsxs)(c.Text, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        (() => {
                            let e = n.sourceType;
                            return null != e && e in b ? b[e] : "Unknown source type ".concat(e);
                        })(),
                    ],
                }),
                r &&
                    null != l &&
                    (0, a.jsx)(o.zx, {
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
    g = [
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
        [n, l] = r.useState(s.a.PREMIUM_TIER_2_1_HOUR),
        [u, b] = r.useState([]),
        [_, y] = r.useState([]),
        {
            refreshEntitlementList: C,
            grantFractionalPremium: N,
            deleteFractionalPremium: E,
            triggerNextEntitlementFulfillment: O,
            entitlements: T,
            loading: S,
        } = (0, x.m)();
    return (
        r.useEffect(() => {
            C();
        }, [C]),
        r.useEffect(() => {
            b(T.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === h.qc2.FRACTIONAL_REDEMPTION)),
                y(T.filter((e) => Object.values(s.a).includes(e.skuId) && null == e.startsAt));
        }, [T]),
        (0, a.jsx)(c.zJl, {
            className: v.panel,
            children: (0, a.jsxs)("div", {
                className: f.panelInner,
                children: [
                    (0, a.jsxs)("div", {
                        className: f.headerWrapper,
                        children: [
                            (0, a.jsx)(c.Text, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, a.jsxs)(c.P3F, {
                                onClick: () => t(!e),
                                className: p.clickableGroup,
                                children: [
                                    (0, a.jsx)("div", {
                                        children: (0, a.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            children: "Info",
                                        }),
                                    }),
                                    (0, a.jsx)(d.Z, { direction: e ? d.Z.Directions.UP : d.Z.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, a.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, a.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, a.jsx)("br", {}),
                                (0, a.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed.",
                                }),
                            ],
                        }),
                    (0, a.jsxs)("section", {
                        style: { marginBottom: "8px" },
                        className: i()([p.section, f.buttons]),
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: " Fractional Premium SKU ",
                            }),
                            (0, a.jsx)(c.PhF, {
                                serialize: (e) => e,
                                isSelected: (e) => e === n,
                                options: g,
                                select: l,
                                popoutLayerContext: m.O$,
                            }),
                            (0, a.jsx)(c.zxk, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => N(n),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("section", {
                        className: p.section,
                        children: [
                            (0, a.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: f.headerWrapper,
                                children: [
                                    (0, a.jsx)(c.Text, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: p.buttonGroup,
                                        children: [
                                            (0, a.jsx)(o.zx, {
                                                disabled: S,
                                                size: o.zx.Sizes.TINY,
                                                color: o.zx.Colors.PRIMARY,
                                                look: o.zx.Looks.OUTLINED,
                                                onClick: () => O(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, a.jsx)(o.zx, {
                                                disabled: S,
                                                size: o.zx.Sizes.TINY,
                                                color: o.zx.Colors.RED,
                                                look: o.zx.Looks.OUTLINED,
                                                onClick: () => E(),
                                                children: "Delete all",
                                            }),
                                            (0, a.jsx)(o.zx, {
                                                disabled: S,
                                                look: o.zx.Looks.BLANK,
                                                size: o.zx.Sizes.ICON,
                                                onClick: C,
                                                children: (0, a.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, a.jsx)(c.DuK, {
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
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, a.jsx)("div", {
                                            children: u.map((e) =>
                                                (0, a.jsx)(
                                                    j,
                                                    {
                                                        entitlement: e,
                                                        active: !0,
                                                        onDelete: () => E(e.id),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            _.length > 0 &&
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, a.jsx)("div", {
                                            children: _.map((e) => (0, a.jsx)(j, { entitlement: e }, e.id)),
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
