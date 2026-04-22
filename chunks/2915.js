a.d(t, { A: () => E, I: () => y });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(334279),
    o = a(862482),
    d = a(834730),
    c = a(573613),
    u = a(939249),
    m = a(691885),
    h = a(821609),
    p = a(663417),
    x = a(147925),
    g = a(405269),
    v = a(367744),
    b = a(652215),
    _ = a(51846),
    f = a(214868),
    j = a(505206);
let A = {
        [b.GD.QUEST_REWARD]: "Quest Reward",
        [b.GD.DEVELOPER_GIFT]: "Developer Gift",
        [b.GD.INVOICE]: "Invoice",
        [b.GD.REVERSE_TRIAL]: "Reverse Trial",
        [b.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [b.GD.SUBSCRIPTION]: "Subscription",
        [b.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    y = (e) => {
        let t,
            { entitlement: a, active: l, onDelete: i } = e,
            r = (e) => (null != e ? (0, g.i$)(e, "LLL") : "---");
        return (0, n.jsxs)("div", {
            className: s()(_.Nr, l ? f.C1 : ""),
            children: [
                (0, n.jsxs)(d.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !l &&
                    (0, n.jsxs)(d.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", C.find((e) => e.value === a.skuId)?.label],
                    }),
                null != a.startsAt &&
                    null != a.endsAt &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsxs)(d.E, { variant: "text-md/normal", children: ["Start: ", r(a.startsAt), " "] }),
                            (0, n.jsxs)(d.E, { variant: "text-md/normal", children: ["End: ", r(a.endsAt), " "] }),
                        ],
                    }),
                (0, n.jsxs)(d.E, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        null != (t = a.sourceType) && t in A ? A[t] : `Unknown source type ${t}`,
                    ],
                }),
                l &&
                    null != i &&
                    (0, n.jsx)(o.$n, {
                        className: _.RW,
                        size: o.$n.Sizes.TINY,
                        color: o.$n.Colors.RED,
                        look: o.$n.Looks.OUTLINED,
                        onClick: i,
                        children: "Delete",
                    }),
            ],
        });
    },
    C = [
        { id: "1h", label: "1 hour", value: r.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: r.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: r.j.PREMIUM_TIER_2_3_DAY },
    ];
function E() {
    let [e, t] = l.useState(!1),
        [a, i] = l.useState(r.j.PREMIUM_TIER_2_1_HOUR),
        [g, A] = l.useState([]),
        [E, S] = l.useState([]),
        {
            refreshEntitlementList: N,
            grantFractionalPremium: k,
            deleteFractionalPremium: I,
            triggerNextEntitlementFulfillment: D,
            entitlements: T,
            loading: w,
        } = (0, v.o)();
    return (
        l.useEffect(() => {
            N();
        }, [N]),
        l.useEffect(() => {
            A(T.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === b.zF_.FRACTIONAL_REDEMPTION)),
                S(T.filter((e) => Object.values(r.j).includes(e.skuId) && null == e.startsAt));
        }, [T]),
        (0, n.jsx)(c.Ip, {
            className: j.nd,
            children: (0, n.jsxs)("div", {
                className: f.l$,
                children: [
                    (0, n.jsxs)("div", {
                        className: f.dL,
                        children: [
                            (0, n.jsx)(d.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, n.jsxs)(u.D, {
                                onClick: () => t(!e),
                                className: _.As,
                                children: [
                                    (0, n.jsx)("div", {
                                        children: (0, n.jsx)(d.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, n.jsx)(x.A, { direction: e ? x.A.Directions.UP : x.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, n.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, n.jsx)(d.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, n.jsx)("br", {}),
                                (0, n.jsx)(d.E, {
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
                        className: s()([_.uW, f.Uo]),
                        children: [
                            (0, n.jsx)(m.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: C,
                                onSelectionChange: i,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, n.jsx)(h.$, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => k(a),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("section", {
                        className: _.uW,
                        children: [
                            (0, n.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: f.dL,
                                children: [
                                    (0, n.jsx)(d.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: _.GC,
                                        children: [
                                            (0, n.jsx)(o.$n, {
                                                disabled: w,
                                                size: o.$n.Sizes.TINY,
                                                color: o.$n.Colors.PRIMARY,
                                                look: o.$n.Looks.OUTLINED,
                                                onClick: () => D(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, n.jsx)(o.$n, {
                                                disabled: w,
                                                size: o.$n.Sizes.TINY,
                                                color: o.$n.Colors.RED,
                                                look: o.$n.Looks.OUTLINED,
                                                onClick: () => I(),
                                                children: "Delete all",
                                            }),
                                            (0, n.jsx)(o.$n, {
                                                disabled: w,
                                                look: o.$n.Looks.BLANK,
                                                size: o.$n.Sizes.ICON,
                                                onClick: N,
                                                children: (0, n.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, n.jsx)(p.f, { size: "xs", color: "currentColor" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            g.length > 0 &&
                                (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(d.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, n.jsx)("div", {
                                            children: g.map((e) =>
                                                (0, n.jsx)(
                                                    y,
                                                    { entitlement: e, active: !0, onDelete: () => I(e.id) },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            E.length > 0 &&
                                (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(d.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, n.jsx)("div", {
                                            children: E.map((e) => (0, n.jsx)(y, { entitlement: e }, e.id)),
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
