n.d(t, {
    D: () => j,
    Z: () => y,
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
    x = n(981631),
    f = n(696450),
    g = n(711322),
    b = n(451429);
let v = {
        [x.kNB.QUEST_REWARD]: "Quest Reward",
        [x.kNB.DEVELOPER_GIFT]: "Developer Gift",
        [x.kNB.INVOICE]: "Invoice",
        [x.kNB.REVERSE_TRIAL]: "Reverse Trial",
        [x.kNB.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [x.kNB.SUBSCRIPTION]: "Subscription",
        [x.kNB.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    j = (e) => {
        var t;
        let { entitlement: n, active: r, onDelete: i } = e,
            s = (e) => (null != e ? (0, m.vc)(e, "LLL") : "---");
        return (0, a.jsxs)("div", {
            className: l()(f.card, r ? g.gradientWrapperTier2 : ""),
            children: [
                (0, a.jsxs)(d.Text, {
                    variant: "text-md/normal",
                    children: ["ID: ", n.id, " "],
                }),
                !r &&
                    (0, a.jsxs)(d.Text, {
                        variant: "text-md/normal",
                        children: ["SKU: ", null == (t = _.find((e) => e.value === n.skuId)) ? void 0 : t.label],
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
                        className: f.deleteEntitlementButton,
                        size: c.zx.Sizes.TINY,
                        color: c.zx.Colors.RED,
                        look: c.zx.Looks.OUTLINED,
                        onClick: i,
                        children: "Delete",
                    }),
            ],
        });
    },
    _ = [
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
function y() {
    let [e, t] = r.useState(!1),
        [n, i] = r.useState(s.a.PREMIUM_TIER_2_1_HOUR),
        [m, v] = r.useState([]),
        [y, C] = r.useState([]),
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
            v(N.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === x.qc2.FRACTIONAL_REDEMPTION)),
                C(N.filter((e) => Object.values(s.a).includes(e.skuId) && null == e.startsAt));
        }, [N]),
        (0, a.jsx)(d.zJl, {
            className: b.panel,
            children: (0, a.jsxs)("div", {
                className: g.panelInner,
                children: [
                    (0, a.jsxs)("div", {
                        className: g.headerWrapper,
                        children: [
                            (0, a.jsx)(d.Text, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, a.jsxs)(d.P3F, {
                                onClick: () => t(!e),
                                className: f.clickableGroup,
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
                        className: l()([f.section, g.buttons]),
                        children: [
                            (0, a.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: " Fractional Premium SKU ",
                            }),
                            (0, a.jsx)(o.B6, {
                                serialize: (e) => e,
                                isSelected: (e) => e === n,
                                options: _,
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
                        className: f.section,
                        children: [
                            (0, a.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: g.headerWrapper,
                                children: [
                                    (0, a.jsx)(d.Text, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: f.buttonGroup,
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
                            y.length > 0 &&
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(d.Text, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, a.jsx)("div", {
                                            children: y.map((e) => (0, a.jsx)(j, { entitlement: e }, e.id)),
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
