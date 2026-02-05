n.d(t, { A: () => b, I: () => f });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(334279),
    o = n(421380),
    d = n(397927),
    c = n(147925),
    u = n(405269),
    m = n(367744),
    h = n(652215),
    x = n(753879),
    p = n(815907),
    g = n(661251);
let _ = {
        [h.GD.QUEST_REWARD]: "Quest Reward",
        [h.GD.DEVELOPER_GIFT]: "Developer Gift",
        [h.GD.INVOICE]: "Invoice",
        [h.GD.REVERSE_TRIAL]: "Reverse Trial",
        [h.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [h.GD.SUBSCRIPTION]: "Subscription",
        [h.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    f = (e) => {
        let t,
            { entitlement: n, active: s, onDelete: i } = e,
            r = (e) => (null != e ? (0, u.i$)(e, "LLL") : "---");
        return (0, a.jsxs)("div", {
            className: l()(x.Nr, s ? p.C1 : ""),
            children: [
                (0, a.jsxs)(d.Text, { variant: "text-md/normal", children: ["ID: ", n.id, " "] }),
                !s &&
                    (0, a.jsxs)(d.Text, {
                        variant: "text-md/normal",
                        children: ["SKU: ", v.find((e) => e.value === n.skuId)?.label],
                    }),
                null != n.startsAt &&
                    null != n.endsAt &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsxs)(d.Text, {
                                variant: "text-md/normal",
                                children: ["Start: ", r(n.startsAt), " "],
                            }),
                            (0, a.jsxs)(d.Text, { variant: "text-md/normal", children: ["End: ", r(n.endsAt), " "] }),
                        ],
                    }),
                (0, a.jsxs)(d.Text, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        null != (t = n.sourceType) && t in _ ? _[t] : `Unknown source type ${t}`,
                    ],
                }),
                s &&
                    null != i &&
                    (0, a.jsx)(o.$n, {
                        className: x.RW,
                        size: o.$n.Sizes.TINY,
                        color: o.$n.Colors.RED,
                        look: o.$n.Looks.OUTLINED,
                        onClick: i,
                        children: "Delete",
                    }),
            ],
        });
    },
    v = [
        { id: "1h", label: "1 hour", value: r.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: r.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: r.j.PREMIUM_TIER_2_3_DAY },
    ];
function b() {
    let [e, t] = s.useState(!1),
        [n, i] = s.useState(r.j.PREMIUM_TIER_2_1_HOUR),
        [u, _] = s.useState([]),
        [b, j] = s.useState([]),
        {
            refreshEntitlementList: A,
            grantFractionalPremium: C,
            deleteFractionalPremium: S,
            triggerNextEntitlementFulfillment: T,
            entitlements: y,
            loading: N,
        } = (0, m.o)();
    return (
        s.useEffect(() => {
            A();
        }, [A]),
        s.useEffect(() => {
            _(y.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === h.zF_.FRACTIONAL_REDEMPTION)),
                j(y.filter((e) => Object.values(r.j).includes(e.skuId) && null == e.startsAt));
        }, [y]),
        (0, a.jsx)(d.IpV, {
            className: g.nd,
            children: (0, a.jsxs)("div", {
                className: p.l$,
                children: [
                    (0, a.jsxs)("div", {
                        className: p.dL,
                        children: [
                            (0, a.jsx)(d.Text, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, a.jsxs)(d.DUT, {
                                onClick: () => t(!e),
                                className: x.As,
                                children: [
                                    (0, a.jsx)("div", {
                                        children: (0, a.jsx)(d.Text, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, a.jsx)(c.A, { direction: e ? c.A.Directions.UP : c.A.Directions.DOWN }),
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
                        className: l()([x.uW, p.Uo]),
                        children: [
                            (0, a.jsx)(d.l6P, {
                                label: "Fractional Premium SKU",
                                value: n,
                                options: v,
                                onSelectionChange: i,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(d.Button, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => C(n),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("section", {
                        className: x.uW,
                        children: [
                            (0, a.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: p.dL,
                                children: [
                                    (0, a.jsx)(d.Text, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: x.GC,
                                        children: [
                                            (0, a.jsx)(o.$n, {
                                                disabled: N,
                                                size: o.$n.Sizes.TINY,
                                                color: o.$n.Colors.PRIMARY,
                                                look: o.$n.Looks.OUTLINED,
                                                onClick: () => T(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, a.jsx)(o.$n, {
                                                disabled: N,
                                                size: o.$n.Sizes.TINY,
                                                color: o.$n.Colors.RED,
                                                look: o.$n.Looks.OUTLINED,
                                                onClick: () => S(),
                                                children: "Delete all",
                                            }),
                                            (0, a.jsx)(o.$n, {
                                                disabled: N,
                                                look: o.$n.Looks.BLANK,
                                                size: o.$n.Sizes.ICON,
                                                onClick: A,
                                                children: (0, a.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, a.jsx)(d.fNY, { size: "xs", color: "currentColor" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            u.length > 0 &&
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(d.Text, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, a.jsx)("div", {
                                            children: u.map((e) =>
                                                (0, a.jsx)(
                                                    f,
                                                    { entitlement: e, active: !0, onDelete: () => S(e.id) },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            b.length > 0 &&
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(d.Text, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, a.jsx)("div", {
                                            children: b.map((e) => (0, a.jsx)(f, { entitlement: e }, e.id)),
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
