a.d(t, { A: () => N });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(311907),
    o = a(562465),
    d = a(573613),
    c = a(534514),
    u = a(408278),
    m = a(663417),
    h = a(691885),
    p = a(821609),
    x = a(803306),
    g = a(323082),
    v = a(272207),
    b = a(287809),
    _ = a(166403),
    f = a(556499),
    j = a(652215),
    A = a(788868),
    y = a(214868),
    C = a(505206);
let E = async () =>
        (
            await o.Bo.get({
                url: j.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => v.A.createFromServer(e)),
    S = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: A.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: A.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: A.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: A.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: A.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: A.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: A.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: A.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: A.gD.PREMIUM_GROUP_MONTH },
    ];
function N() {
    let e = (0, r.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        t = (0, r.bG)([b.default], () => b.default.getCurrentUser()),
        [a, i] = l.useState("511651880837840896"),
        [v, A] = l.useState([]),
        [N, k] = l.useState(!1),
        I = l.useCallback(async () => {
            try {
                k(!0), await (0, g.hP)(), await (0, x.eO)(t.id), A(await E());
            } finally {
                k(!1);
            }
        }, [t]);
    l.useEffect(() => {
        I();
    }, [I]);
    let D = l.useMemo(() => v.filter((e) => e.status !== j.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [v]),
        T = async () => {
            await o.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await I();
        },
        w = async () => {
            await o.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await I();
        };
    return (0, n.jsx)(d.Ip, {
        className: C.nd,
        children: (0, n.jsxs)("div", {
            className: y.l$,
            children: [
                (0, n.jsxs)("div", {
                    className: y.dL,
                    children: [
                        (0, n.jsx)(c.D, {
                            variant: "heading-lg/semibold",
                            className: C.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, n.jsx)(u.K, {
                            "aria-label": "Refresh",
                            icon: m.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: N,
                            onClick: I,
                        }),
                    ],
                }),
                (0, n.jsx)("section", {
                    className: s()([y.uW, y.Uo]),
                    children:
                        null == e &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(h.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: S,
                                    onSelectionChange: i,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, n.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: T,
                                }),
                            ],
                        }),
                }),
                null != e && (0, n.jsx)(f.A, { subscription: e, onUpdated: I }),
                (0, n.jsx)(c.D, { variant: "heading-lg/semibold", className: C.wx, children: "Bulk Actions" }),
                (0, n.jsx)("section", {
                    className: s()([y.uW, y.Uo]),
                    children: (0, n.jsx)(p.$, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: w,
                    }),
                }),
                D.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(c.D, {
                                variant: "heading-lg/semibold",
                                className: C.wx,
                                children: "Previous Subscriptions",
                            }),
                            D.map((e) => (0, n.jsx)(f.A, { subscription: e, onUpdated: I }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
