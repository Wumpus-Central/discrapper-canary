n.d(t, { Z: () => S }), n(388685), n(642613);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(442837),
    o = n(544891),
    c = n(755721),
    d = n(481060),
    u = n(355467),
    m = n(232567),
    p = n(255078),
    h = n(594174),
    x = n(78839),
    g = n(246992),
    f = n(759027),
    b = n(981631),
    v = n(474936),
    j = n(711322),
    _ = n(451429);
let y = async () =>
        (
            await o.tn.get({
                url: b.ANM.BILLING_SUBSCRIPTIONS,
                query: {
                    include_inactive: !0,
                    limit: 5,
                },
                rejectWithError: !1,
            })
        ).body.map((e) => p.Z.createFromServer(e)),
    C = [
        {
            label: "Nitro Monthly",
            value: v.Xh.PREMIUM_MONTH_TIER_2,
        },
        {
            label: "Nitro Yearly",
            value: v.Xh.PREMIUM_YEAR_TIER_2,
        },
        {
            label: "Nitro Classic Monthly",
            value: v.Xh.PREMIUM_MONTH_TIER_1,
        },
        {
            label: "Nitro Classic Yearly",
            value: v.Xh.PREMIUM_YEAR_TIER_1,
        },
        {
            label: "Basic Monthly",
            value: v.Xh.PREMIUM_MONTH_TIER_0,
        },
        {
            label: "Basic Yearly",
            value: v.Xh.PREMIUM_YEAR_TIER_0,
        },
        {
            label: "Reverse Trial 1-week",
            value: v.dO,
        },
        {
            label: "Reverse Trial 2-week",
            value: v.xT,
        },
    ];
function S() {
    let e = (0, s.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        t = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        [n, r] = l.useState("511651880837840896"),
        [p, v] = l.useState([]),
        [S, E] = l.useState(!1),
        O = l.useCallback(async () => {
            try {
                E(!0), await (0, u.jg)(), await (0, m.In)(t.id), v(await y());
            } finally {
                E(!1);
            }
        }, [t]);
    l.useEffect(() => {
        O();
    }, [O]);
    let T = l.useMemo(() => p.filter((e) => e.status !== b.O0b.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [p]),
        N = async () => {
            await o.tn.post({
                url: "/debug/subscription",
                body: { plan_id: n },
                rejectWithError: !1,
            }),
                await O();
        },
        P = async () => {
            await o.tn.del({
                url: "/debug/subscription",
                rejectWithError: !1,
            }),
                await O();
        };
    return (0, a.jsx)(d.zJl, {
        className: _.panel,
        children: (0, a.jsxs)("div", {
            className: j.panelInner,
            children: [
                (0, a.jsxs)("div", {
                    className: j.headerWrapper,
                    children: [
                        (0, a.jsx)(d.Heading, {
                            variant: "heading-lg/semibold",
                            className: _.header,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, a.jsx)(c.zx, {
                            disabled: S,
                            look: c.zx.Looks.BLANK,
                            size: c.zx.Sizes.ICON,
                            onClick: O,
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
                (0, a.jsx)("section", {
                    className: i()([j.section, j.buttons]),
                    children:
                        null == e &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.PhF, {
                                    serialize: (e) => e,
                                    isSelected: (e) => e === n,
                                    options: C,
                                    select: r,
                                    popoutLayerContext: g.O$,
                                }),
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: N,
                                }),
                            ],
                        }),
                }),
                null != e &&
                    (0, a.jsx)(f.Z, {
                        subscription: e,
                        onUpdated: O,
                    }),
                (0, a.jsx)(d.Heading, {
                    variant: "heading-lg/semibold",
                    className: _.header,
                    children: "Bulk Actions",
                }),
                (0, a.jsx)("section", {
                    className: i()([j.section, j.buttons]),
                    children: (0, a.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: P,
                    }),
                }),
                T.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(d.Heading, {
                                variant: "heading-lg/semibold",
                                className: _.header,
                                children: "Previous Subscriptions",
                            }),
                            T.map((e) =>
                                (0, a.jsx)(
                                    f.Z,
                                    {
                                        subscription: e,
                                        onUpdated: O,
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
