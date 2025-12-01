n.d(t, { Z: () => C }), n(388685), n(642613);
var a = n(54381),
    l = n(473749),
    i = n(120356),
    r = n.n(i),
    s = n(442837),
    o = n(544891),
    c = n(481060),
    d = n(355467),
    u = n(232567),
    m = n(255078),
    p = n(594174),
    h = n(78839),
    x = n(246992),
    g = n(759027),
    f = n(981631),
    b = n(474936),
    v = n(711322),
    j = n(451429);
let _ = async () =>
        (
            await o.tn.get({
                url: f.ANM.BILLING_SUBSCRIPTIONS,
                query: {
                    include_inactive: !0,
                    limit: 5,
                },
                rejectWithError: !1,
            })
        ).body.map((e) => m.Z.createFromServer(e)),
    y = [
        {
            label: "Nitro Monthly",
            value: b.Xh.PREMIUM_MONTH_TIER_2,
        },
        {
            label: "Nitro Yearly",
            value: b.Xh.PREMIUM_YEAR_TIER_2,
        },
        {
            label: "Nitro Classic Monthly",
            value: b.Xh.PREMIUM_MONTH_TIER_1,
        },
        {
            label: "Nitro Classic Yearly",
            value: b.Xh.PREMIUM_YEAR_TIER_1,
        },
        {
            label: "Basic Monthly",
            value: b.Xh.PREMIUM_MONTH_TIER_0,
        },
        {
            label: "Basic Yearly",
            value: b.Xh.PREMIUM_YEAR_TIER_0,
        },
        {
            label: "Reverse Trial 1-week",
            value: b.dO,
        },
        {
            label: "Reverse Trial 2-week",
            value: b.xT,
        },
    ];
function C() {
    let e = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        t = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        [n, i] = l.useState("511651880837840896"),
        [m, b] = l.useState([]),
        [C, S] = l.useState(!1),
        E = l.useCallback(async () => {
            try {
                S(!0), await (0, d.jg)(), await (0, u.In)(t.id), b(await _());
            } finally {
                S(!1);
            }
        }, [t]);
    l.useEffect(() => {
        E();
    }, [E]);
    let N = l.useMemo(() => m.filter((e) => e.status !== f.O0b.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [m]),
        T = async () => {
            await o.tn.post({
                url: "/debug/subscription",
                body: { plan_id: n },
                rejectWithError: !1,
            }),
                await E();
        },
        O = async () => {
            await o.tn.del({
                url: "/debug/subscription",
                rejectWithError: !1,
            }),
                await E();
        };
    return (0, a.jsx)(c.zJl, {
        className: j.panel,
        children: (0, a.jsxs)("div", {
            className: v.panelInner,
            children: [
                (0, a.jsxs)("div", {
                    className: v.headerWrapper,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-lg/semibold",
                            className: j.header,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, a.jsx)(c.hU, {
                            "aria-label": "Refresh",
                            icon: c.DuK,
                            size: "sm",
                            variant: "icon-only",
                            disabled: C,
                            onClick: E,
                        }),
                    ],
                }),
                (0, a.jsx)("section", {
                    className: r()([v.section, v.buttons]),
                    children:
                        null == e &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    serialize: (e) => e,
                                    isSelected: (e) => e === n,
                                    options: y,
                                    select: i,
                                    popoutLayerContext: x.O$,
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
                    (0, a.jsx)(g.Z, {
                        subscription: e,
                        onUpdated: E,
                    }),
                (0, a.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    className: j.header,
                    children: "Bulk Actions",
                }),
                (0, a.jsx)("section", {
                    className: r()([v.section, v.buttons]),
                    children: (0, a.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: O,
                    }),
                }),
                N.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "heading-lg/semibold",
                                className: j.header,
                                children: "Previous Subscriptions",
                            }),
                            N.map((e) =>
                                (0, a.jsx)(
                                    g.Z,
                                    {
                                        subscription: e,
                                        onUpdated: E,
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
