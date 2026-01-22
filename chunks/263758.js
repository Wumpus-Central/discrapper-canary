n.d(t, { A: () => _ }), n(896048), n(638769);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(562465),
    c = n(397927),
    d = n(384904),
    u = n(803306),
    m = n(272207),
    p = n(287809),
    h = n(166403),
    f = n(556499),
    x = n(652215),
    b = n(788868),
    g = n(815907),
    v = n(661251);
let j = async () =>
        (
            await o.Bo.get({
                url: x.Rsh.BILLING_SUBSCRIPTIONS,
                query: {
                    include_inactive: !0,
                    limit: 5,
                },
                rejectWithError: !1,
            })
        ).body.map((e) => m.A.createFromServer(e)),
    y = [
        {
            id: "nitro-monthly",
            label: "Nitro Monthly",
            value: b.gD.PREMIUM_MONTH_TIER_2,
        },
        {
            id: "nitro-yearly",
            label: "Nitro Yearly",
            value: b.gD.PREMIUM_YEAR_TIER_2,
        },
        {
            id: "nitro-classic-monthly",
            label: "Nitro Classic Monthly",
            value: b.gD.PREMIUM_MONTH_TIER_1,
        },
        {
            id: "nitro-classic-yearly",
            label: "Nitro Classic Yearly",
            value: b.gD.PREMIUM_YEAR_TIER_1,
        },
        {
            id: "basic-monthly",
            label: "Basic Monthly",
            value: b.gD.PREMIUM_MONTH_TIER_0,
        },
        {
            id: "basic-yearly",
            label: "Basic Yearly",
            value: b.gD.PREMIUM_YEAR_TIER_0,
        },
        {
            id: "reverse-trial-1week",
            label: "Reverse Trial 1-week",
            value: b.gd,
        },
        {
            id: "reverse-trial-2week",
            label: "Reverse Trial 2-week",
            value: b.Uk,
        },
        {
            id: "nitro-squad-monthly",
            label: "Nitro Squad Monthly",
            value: b.gD.PREMIUM_GROUP_MONTH,
        },
    ];
function _() {
    let e = (0, s.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        t = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
        [n, i] = l.useState("511651880837840896"),
        [m, b] = l.useState([]),
        [_, A] = l.useState(!1),
        C = l.useCallback(async () => {
            try {
                A(!0), await (0, d.hP)(), await (0, u.eO)(t.id), b(await j());
            } finally {
                A(!1);
            }
        }, [t]);
    l.useEffect(() => {
        C();
    }, [C]);
    let S = l.useMemo(() => m.filter((e) => e.status !== x.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [m]),
        O = async () => {
            await o.Bo.post({
                url: "/debug/subscription",
                body: { plan_id: n },
                rejectWithError: !1,
            }),
                await C();
        },
        E = async () => {
            await o.Bo.del({
                url: "/debug/subscription",
                rejectWithError: !1,
            }),
                await C();
        };
    return (0, a.jsx)(c.IpV, {
        className: v.nd,
        children: (0, a.jsxs)("div", {
            className: g.l$,
            children: [
                (0, a.jsxs)("div", {
                    className: g.dL,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-lg/semibold",
                            className: v.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, a.jsx)(c.K0, {
                            "aria-label": "Refresh",
                            icon: c.fNY,
                            size: "sm",
                            variant: "icon-only",
                            disabled: _,
                            onClick: C,
                        }),
                    ],
                }),
                (0, a.jsx)("section", {
                    className: r()([g.uW, g.Uo]),
                    children:
                        null == e &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.l6P, {
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
                                    onClick: O,
                                }),
                            ],
                        }),
                }),
                null != e &&
                    (0, a.jsx)(f.A, {
                        subscription: e,
                        onUpdated: C,
                    }),
                (0, a.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    className: v.wx,
                    children: "Bulk Actions",
                }),
                (0, a.jsx)("section", {
                    className: r()([g.uW, g.Uo]),
                    children: (0, a.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: E,
                    }),
                }),
                S.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "heading-lg/semibold",
                                className: v.wx,
                                children: "Previous Subscriptions",
                            }),
                            S.map((e) =>
                                (0, a.jsx)(
                                    f.A,
                                    {
                                        subscription: e,
                                        onUpdated: C,
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
