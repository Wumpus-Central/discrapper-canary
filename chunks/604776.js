n.d(t, {
    D: () => j,
    Z: () => C,
}),
    n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(314794),
    o = n(199849),
    c = n(755721),
    d = n(481060),
    u = n(259580),
    m = n(55935),
    p = n(246992),
    h = n(232867),
    f = n(981631),
    x = n(557919),
    b = n(68428),
    g = n(663618);
let v = {
        [f.kNB.QUEST_REWARD]: "Quest Reward",
        [f.kNB.DEVELOPER_GIFT]: "Developer Gift",
        [f.kNB.INVOICE]: "Invoice",
        [f.kNB.REVERSE_TRIAL]: "Reverse Trial",
        [f.kNB.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [f.kNB.SUBSCRIPTION]: "Subscription",
        [f.kNB.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    j = (e) => {
        var t;
        let { entitlement: n, active: r, onDelete: i } = e,
            s = (e) => (null != e ? (0, m.vc)(e, "LLL") : "---");
        return (0, a.jsxs)("div", {
            className: l()(x.card, r ? b.gradientWrapperTier2 : ""),
            children: [
                (0, a.jsxs)(d.Text, {
                    variant: "text-md/normal",
                    children: ["ID: ", n.id, " "],
                }),
                !r &&
                    (0, a.jsxs)(d.Text, {
                        variant: "text-md/normal",
                        children: ["SKU: ", null == (t = y.find((e) => e.value === n.skuId)) ? void 0 : t.label],
                    }),
                null != n.startsAt &&
                    null != n.endsAt &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsxs)(d.Text, {
                                variant: "text-md/normal",
                                children: ["Start: ", s(n.startsAt), " "],
                            }),
                            (0, a.jsxs)(d.Text, {
                                variant: "text-md/normal",
                                children: ["End: ", s(n.endsAt), " "],
                            }),
                        ],
                    }),
                (0, a.jsxs)(d.Text, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        (() => {
                            let e = n.sourceType;
                            return null != e && e in v ? v[e] : "Unknown source type ".concat(e);
                        })(),
                    ],
                }),
                r &&
                    null != i &&
                    (0, a.jsx)(c.zx, {
                        className: x.deleteEntitlementButton,
                        size: c.zx.Sizes.TINY,
                        color: c.zx.Colors.RED,
                        look: c.zx.Looks.OUTLINED,
                        onClick: i,
                        children: "Delete",
                    }),
            ],
        });
    },
    y = [
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
function C() {
    let [e, t] = r.useState(!1),
        [n, i] = r.useState(s.a.PREMIUM_TIER_2_1_HOUR),
        [m, v] = r.useState([]),
        [C, _] = r.useState([]),
        {
            refreshEntitlementList: S,
            grantFractionalPremium: E,
            deleteFractionalPremium: O,
            triggerNextEntitlementFulfillment: T,
            entitlements: N,
            loading: P,
        } = (0, h.m)();
    return (
        r.useEffect(() => {
            S();
        }, [S]),
        r.useEffect(() => {
            v(N.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === f.qc2.FRACTIONAL_REDEMPTION)),
                _(N.filter((e) => Object.values(s.a).includes(e.skuId) && null == e.startsAt));
        }, [N]),
        (0, a.jsx)(d.zJl, {
            className: g.panel,
            children: (0, a.jsxs)("div", {
                className: b.panelInner,
                children: [
                    (0, a.jsxs)("div", {
                        className: b.headerWrapper,
                        children: [
                            (0, a.jsx)(d.Text, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, a.jsxs)(d.P3F, {
                                onClick: () => t(!e),
                                className: x.clickableGroup,
                                children: [
                                    (0, a.jsx)("div", {
                                        children: (0, a.jsx)(d.Text, {
                                            variant: "text-md/normal",
                                            children: "Info",
                                        }),
                                    }),
                                    (0, a.jsx)(u.Z, { direction: e ? u.Z.Directions.UP : u.Z.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, a.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, a.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, a.jsx)("br", {}),
                                (0, a.jsx)(d.Text, {
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
                        className: l()([x.section, b.buttons]),
                        children: [
                            (0, a.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: " Fractional Premium SKU ",
                            }),
                            (0, a.jsx)(o.B6, {
                                serialize: (e) => e,
                                isSelected: (e) => e === n,
                                options: y,
                                select: i,
                                popoutLayerContext: p.O$,
                            }),
                            (0, a.jsx)(d.Button, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => E(n),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("section", {
                        className: x.section,
                        children: [
                            (0, a.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: b.headerWrapper,
                                children: [
                                    (0, a.jsx)(d.Text, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: x.buttonGroup,
                                        children: [
                                            (0, a.jsx)(c.zx, {
                                                disabled: P,
                                                size: c.zx.Sizes.TINY,
                                                color: c.zx.Colors.PRIMARY,
                                                look: c.zx.Looks.OUTLINED,
                                                onClick: () => T(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, a.jsx)(c.zx, {
                                                disabled: P,
                                                size: c.zx.Sizes.TINY,
                                                color: c.zx.Colors.RED,
                                                look: c.zx.Looks.OUTLINED,
                                                onClick: () => O(),
                                                children: "Delete all",
                                            }),
                                            (0, a.jsx)(c.zx, {
                                                disabled: P,
                                                look: c.zx.Looks.BLANK,
                                                size: c.zx.Sizes.ICON,
                                                onClick: S,
                                                children: (0, a.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, a.jsx)(d.DuK, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            m.length > 0 &&
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(d.Text, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, a.jsx)("div", {
                                            children: m.map((e) =>
                                                (0, a.jsx)(
                                                    j,
                                                    {
                                                        entitlement: e,
                                                        active: !0,
                                                        onDelete: () => O(e.id),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            C.length > 0 &&
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(d.Text, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, a.jsx)("div", {
                                            children: C.map((e) => (0, a.jsx)(j, { entitlement: e }, e.id)),
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
