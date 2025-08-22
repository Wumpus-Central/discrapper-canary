n.d(t, { Z: () => N }), n(388685), n(642613);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(544891),
    c = n(755721),
    d = n(481060),
    u = n(355467),
    m = n(232567),
    x = n(255078),
    h = n(594174),
    p = n(78839),
    f = n(246992),
    v = n(759027),
    b = n(981631),
    j = n(474936),
    g = n(711322),
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
        ).body.map((e) => x.Z.createFromServer(e)),
    C = [
        {
            label: "Nitro Monthly",
            value: j.Xh.PREMIUM_MONTH_TIER_2,
        },
        {
            label: "Nitro Yearly",
            value: j.Xh.PREMIUM_YEAR_TIER_2,
        },
        {
            label: "Nitro Classic Monthly",
            value: j.Xh.PREMIUM_MONTH_TIER_1,
        },
        {
            label: "Nitro Classic Yearly",
            value: j.Xh.PREMIUM_YEAR_TIER_1,
        },
        {
            label: "Basic Monthly",
            value: j.Xh.PREMIUM_MONTH_TIER_0,
        },
        {
            label: "Basic Yearly",
            value: j.Xh.PREMIUM_YEAR_TIER_0,
        },
        {
            label: "Reverse Trial 1-week",
            value: j.dO,
        },
        {
            label: "Reverse Trial 2-week",
            value: j.xT,
        },
    ];
function N() {
    let e = (0, s.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()),
        t = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        [n, l] = r.useState("511651880837840896"),
        [x, j] = r.useState([]),
        [N, E] = r.useState(!1),
        O = r.useCallback(async () => {
            try {
                E(!0), await (0, u.jg)(), await (0, m.In)(t.id), j(await y());
            } finally {
                E(!1);
            }
        }, [t]);
    r.useEffect(() => {
        O();
    }, [O]);
    let T = r.useMemo(() => x.filter((e) => e.status !== b.O0b.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [x]),
        S = async () => {
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
            className: g.panelInner,
            children: [
                (0, a.jsxs)("div", {
                    className: g.headerWrapper,
                    children: [
                        (0, a.jsx)(d.X6q, {
                            variant: "heading-lg/semibold",
                            className: _.header,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, a.jsx)(c.zx, {
                            disabled: N,
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
                    className: i()([g.section, g.buttons]),
                    children:
                        null == e &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.PhF, {
                                    serialize: (e) => e,
                                    isSelected: (e) => e === n,
                                    options: C,
                                    select: l,
                                    popoutLayerContext: f.O$,
                                }),
                                (0, a.jsx)(d.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: S,
                                }),
                            ],
                        }),
                }),
                null != e &&
                    (0, a.jsx)(v.Z, {
                        subscription: e,
                        onUpdated: O,
                    }),
                (0, a.jsx)(d.X6q, {
                    variant: "heading-lg/semibold",
                    className: _.header,
                    children: "Bulk Actions",
                }),
                (0, a.jsx)("section", {
                    className: i()([g.section, g.buttons]),
                    children: (0, a.jsx)(d.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: P,
                    }),
                }),
                T.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(d.X6q, {
                                variant: "heading-lg/semibold",
                                className: _.header,
                                children: "Previous Subscriptions",
                            }),
                            T.map((e) =>
                                (0, a.jsx)(
                                    v.Z,
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
