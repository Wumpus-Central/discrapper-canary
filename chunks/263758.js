n.d(t, { A: () => A });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(311907),
    o = n(562465),
    d = n(397927),
    c = n(384904),
    u = n(803306),
    m = n(272207),
    h = n(287809),
    x = n(166403),
    p = n(556499),
    g = n(652215),
    _ = n(788868),
    f = n(815907),
    v = n(661251);
let b = async () =>
        (
            await o.Bo.get({
                url: g.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => m.A.createFromServer(e)),
    j = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: _.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: _.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: _.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: _.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: _.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: _.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: _.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: _.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: _.gD.PREMIUM_GROUP_MONTH },
    ];
function A() {
    let e = (0, r.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        t = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
        [n, i] = s.useState("511651880837840896"),
        [m, _] = s.useState([]),
        [A, C] = s.useState(!1),
        S = s.useCallback(async () => {
            try {
                C(!0), await (0, c.hP)(), await (0, u.eO)(t.id), _(await b());
            } finally {
                C(!1);
            }
        }, [t]);
    s.useEffect(() => {
        S();
    }, [S]);
    let T = s.useMemo(() => m.filter((e) => e.status !== g.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [m]),
        y = async () => {
            await o.Bo.post({ url: "/debug/subscription", body: { plan_id: n }, rejectWithError: !1 }), await S();
        },
        N = async () => {
            await o.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await S();
        };
    return (0, a.jsx)(d.IpV, {
        className: v.nd,
        children: (0, a.jsxs)("div", {
            className: f.l$,
            children: [
                (0, a.jsxs)("div", {
                    className: f.dL,
                    children: [
                        (0, a.jsx)(d.Heading, {
                            variant: "heading-lg/semibold",
                            className: v.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, a.jsx)(d.K0, {
                            "aria-label": "Refresh",
                            icon: d.fNY,
                            size: "sm",
                            variant: "icon-only",
                            disabled: A,
                            onClick: S,
                        }),
                    ],
                }),
                (0, a.jsx)("section", {
                    className: l()([f.uW, f.Uo]),
                    children:
                        null == e &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.l6P, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: n,
                                    options: j,
                                    onSelectionChange: i,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: y,
                                }),
                            ],
                        }),
                }),
                null != e && (0, a.jsx)(p.A, { subscription: e, onUpdated: S }),
                (0, a.jsx)(d.Heading, { variant: "heading-lg/semibold", className: v.wx, children: "Bulk Actions" }),
                (0, a.jsx)("section", {
                    className: l()([f.uW, f.Uo]),
                    children: (0, a.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: N,
                    }),
                }),
                T.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(d.Heading, {
                                variant: "heading-lg/semibold",
                                className: v.wx,
                                children: "Previous Subscriptions",
                            }),
                            T.map((e) => (0, a.jsx)(p.A, { subscription: e, onUpdated: S }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
