n.d(t, { Z: () => C }), n(388685), n(642613);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(544891),
    c = n(481060),
    d = n(355467),
    u = n(232567),
    m = n(255078),
    p = n(594174),
    h = n(78839),
    f = n(759027),
    b = n(981631),
    x = n(474936),
    g = n(68428),
    v = n(663618);
let j = async () =>
        (
            await o.tn.get({
                url: b.ANM.BILLING_SUBSCRIPTIONS,
                query: {
                    include_inactive: !0,
                    limit: 5,
                },
                rejectWithError: !1,
            })
        ).body.map((e) => m.Z.createFromServer(e)),
    y = [
        {
            id: "nitro-monthly",
            label: "Nitro Monthly",
            value: x.Xh.PREMIUM_MONTH_TIER_2,
        },
        {
            id: "nitro-yearly",
            label: "Nitro Yearly",
            value: x.Xh.PREMIUM_YEAR_TIER_2,
        },
        {
            id: "nitro-classic-monthly",
            label: "Nitro Classic Monthly",
            value: x.Xh.PREMIUM_MONTH_TIER_1,
        },
        {
            id: "nitro-classic-yearly",
            label: "Nitro Classic Yearly",
            value: x.Xh.PREMIUM_YEAR_TIER_1,
        },
        {
            id: "basic-monthly",
            label: "Basic Monthly",
            value: x.Xh.PREMIUM_MONTH_TIER_0,
        },
        {
            id: "basic-yearly",
            label: "Basic Yearly",
            value: x.Xh.PREMIUM_YEAR_TIER_0,
        },
        {
            id: "reverse-trial-1week",
            label: "Reverse Trial 1-week",
            value: x.dO,
        },
        {
            id: "reverse-trial-2week",
            label: "Reverse Trial 2-week",
            value: x.xT,
        },
        {
            id: "nitro-squad-monthly",
            label: "Nitro Squad Monthly",
            value: x.Xh.PREMIUM_GROUP_MONTH,
        },
    ];
function C() {
    let e = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        t = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        [n, i] = r.useState("511651880837840896"),
        [m, x] = r.useState([]),
        [C, _] = r.useState(!1),
        S = r.useCallback(async () => {
            try {
                _(!0), await (0, d.jg)(), await (0, u.In)(t.id), x(await j());
            } finally {
                _(!1);
            }
        }, [t]);
    r.useEffect(() => {
        S();
    }, [S]);
    let E = r.useMemo(() => m.filter((e) => e.status !== b.O0b.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [m]),
        T = async () => {
            await o.tn.post({
                url: "/debug/subscription",
                body: { plan_id: n },
                rejectWithError: !1,
            }),
                await S();
        },
        O = async () => {
            await o.tn.del({
                url: "/debug/subscription",
                rejectWithError: !1,
            }),
                await S();
        };
    return (0, a.jsx)(c.zJl, {
        className: v.panel,
        children: (0, a.jsxs)("div", {
            className: g.panelInner,
            children: [
                (0, a.jsxs)("div", {
                    className: g.headerWrapper,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-lg/semibold",
                            className: v.header,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, a.jsx)(c.hU, {
                            "aria-label": "Refresh",
                            icon: c.DuK,
                            size: "sm",
                            variant: "icon-only",
                            disabled: C,
                            onClick: S,
                        }),
                    ],
                }),
                (0, a.jsx)("section", {
                    className: l()([g.section, g.buttons]),
                    children:
                        null == e &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: n,
                                    options: y,
                                    onSelectionChange: i,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: T,
                                }),
                            ],
                        }),
                }),
                null != e &&
                    (0, a.jsx)(f.Z, {
                        subscription: e,
                        onUpdated: S,
                    }),
                (0, a.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    className: v.header,
                    children: "Bulk Actions",
                }),
                (0, a.jsx)("section", {
                    className: l()([g.section, g.buttons]),
                    children: (0, a.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: O,
                    }),
                }),
                E.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "heading-lg/semibold",
                                className: v.header,
                                children: "Previous Subscriptions",
                            }),
                            E.map((e) =>
                                (0, a.jsx)(
                                    f.Z,
                                    {
                                        subscription: e,
                                        onUpdated: S,
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
            ],
        }),
    });
}
