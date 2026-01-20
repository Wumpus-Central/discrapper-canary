n.d(t, {
    D: () => g,
    Z: () => j,
}),
    n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(314794),
    o = n(755721),
    c = n(481060),
    d = n(259580),
    u = n(55935),
    m = n(232867),
    p = n(981631),
    h = n(557919),
    f = n(68428),
    b = n(663618);
let x = {
        [p.kNB.QUEST_REWARD]: "Quest Reward",
        [p.kNB.DEVELOPER_GIFT]: "Developer Gift",
        [p.kNB.INVOICE]: "Invoice",
        [p.kNB.REVERSE_TRIAL]: "Reverse Trial",
        [p.kNB.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [p.kNB.SUBSCRIPTION]: "Subscription",
        [p.kNB.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    g = (e) => {
        var t;
        let { entitlement: n, active: r, onDelete: i } = e,
            s = (e) => (null != e ? (0, u.vc)(e, "LLL") : "---");
        return (0, a.jsxs)("div", {
            className: l()(h.card, r ? f.gradientWrapperTier2 : ""),
            children: [
                (0, a.jsxs)(c.Text, {
                    variant: "text-md/normal",
                    children: ["ID: ", n.id, " "],
                }),
                !r &&
                    (0, a.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        children: ["SKU: ", null == (t = v.find((e) => e.value === n.skuId)) ? void 0 : t.label],
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
                            return null != e && e in x ? x[e] : "Unknown source type ".concat(e);
                        })(),
                    ],
                }),
                r &&
                    null != i &&
                    (0, a.jsx)(o.zx, {
                        className: h.deleteEntitlementButton,
                        size: o.zx.Sizes.TINY,
                        color: o.zx.Colors.RED,
                        look: o.zx.Looks.OUTLINED,
                        onClick: i,
                        children: "Delete",
                    }),
            ],
        });
    },
    v = [
        {
            id: "1h",
            label: "1 hour",
            value: s.a.PREMIUM_TIER_2_1_HOUR,
        },
        {
            id: "1d",
            label: "1 day",
            value: s.a.PREMIUM_TIER_2_1_DAY,
        },
        {
            id: "3d",
            label: "3 days",
            value: s.a.PREMIUM_TIER_2_3_DAY,
        },
    ];
function j() {
    let [e, t] = r.useState(!1),
        [n, i] = r.useState(s.a.PREMIUM_TIER_2_1_HOUR),
        [u, x] = r.useState([]),
        [j, y] = r.useState([]),
        {
            refreshEntitlementList: C,
            grantFractionalPremium: _,
            deleteFractionalPremium: S,
            triggerNextEntitlementFulfillment: E,
            entitlements: T,
            loading: O,
        } = (0, m.m)();
    return (
        r.useEffect(() => {
            C();
        }, [C]),
        r.useEffect(() => {
            x(T.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === p.qc2.FRACTIONAL_REDEMPTION)),
                y(T.filter((e) => Object.values(s.a).includes(e.skuId) && null == e.startsAt));
        }, [T]),
        (0, a.jsx)(c.zJl, {
            className: b.panel,
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
                                className: h.clickableGroup,
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
                        className: l()([h.section, f.buttons]),
                        children: [
                            (0, a.jsx)(c.PhF, {
                                label: "Fractional Premium SKU",
                                value: n,
                                options: v,
                                onSelectionChange: i,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => _(n),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("section", {
                        className: h.section,
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
                                        className: h.buttonGroup,
                                        children: [
                                            (0, a.jsx)(o.zx, {
                                                disabled: O,
                                                size: o.zx.Sizes.TINY,
                                                color: o.zx.Colors.PRIMARY,
                                                look: o.zx.Looks.OUTLINED,
                                                onClick: () => E(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, a.jsx)(o.zx, {
                                                disabled: O,
                                                size: o.zx.Sizes.TINY,
                                                color: o.zx.Colors.RED,
                                                look: o.zx.Looks.OUTLINED,
                                                onClick: () => S(),
                                                children: "Delete all",
                                            }),
                                            (0, a.jsx)(o.zx, {
                                                disabled: O,
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
                                                    g,
                                                    {
                                                        entitlement: e,
                                                        active: !0,
                                                        onDelete: () => S(e.id),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            j.length > 0 &&
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, a.jsx)("div", {
                                            children: j.map((e) => (0, a.jsx)(g, { entitlement: e }, e.id)),
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
