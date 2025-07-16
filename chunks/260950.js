(a.d(t, { Z: () => N }), a(388685), a(642613));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(442837),
    o = a(544891),
    c = a(755721),
    d = a(481060),
    u = a(355467),
    m = a(232567),
    x = a(255078),
    p = a(594174),
    h = a(78839),
    b = a(246992),
    f = a(759027),
    v = a(981631),
    j = a(474936),
    g = a(616257),
    _ = a(173166);
let y = async () =>
        (
            await o.tn.get({
                url: v.ANM.BILLING_SUBSCRIPTIONS,
                query: {
                    include_inactive: !0,
                    limit: 5
                },
                rejectWithError: !1
            })
        ).body.map((e) => x.Z.createFromServer(e)),
    C = [
        {
            label: 'Nitro Monthly',
            value: j.Xh.PREMIUM_MONTH_TIER_2
        },
        {
            label: 'Nitro Yearly',
            value: j.Xh.PREMIUM_YEAR_TIER_2
        },
        {
            label: 'Nitro Classic Monthly',
            value: j.Xh.PREMIUM_MONTH_TIER_1
        },
        {
            label: 'Nitro Classic Yearly',
            value: j.Xh.PREMIUM_YEAR_TIER_1
        },
        {
            label: 'Basic Monthly',
            value: j.Xh.PREMIUM_MONTH_TIER_0
        },
        {
            label: 'Basic Yearly',
            value: j.Xh.PREMIUM_YEAR_TIER_0
        },
        {
            label: 'Reverse Trial 1-week',
            value: j.dO
        },
        {
            label: 'Reverse Trial 2-week',
            value: j.xT
        }
    ];
function N() {
    let e = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        t = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        [a, l] = r.useState('511651880837840896'),
        [x, j] = r.useState([]),
        [N, O] = r.useState(!1),
        T = r.useCallback(async () => {
            try {
                (O(!0), await (0, u.jg)(), await (0, m.In)(t.id), j(await y()));
            } finally {
                O(!1);
            }
        }, [t]);
    r.useEffect(() => {
        T();
    }, [T]);
    let E = r.useMemo(() => x.filter((e) => e.status !== v.O0b.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [x]),
        S = async () => {
            (await o.tn.post({
                url: '/debug/subscription',
                body: { plan_id: a },
                rejectWithError: !1
            }),
                await T());
        },
        P = async () => {
            (await o.tn.del({
                url: '/debug/subscription',
                rejectWithError: !1
            }),
                await T());
        };
    return (0, n.jsx)(d.zJl, {
        className: g.panel,
        children: (0, n.jsxs)('div', {
            className: _.panelInner,
            children: [
                (0, n.jsxs)('div', {
                    className: _.headerWrapper,
                    children: [
                        (0, n.jsx)(d.X6q, {
                            variant: 'heading-lg/semibold',
                            className: g.header,
                            children: null != e ? 'Active Subscription' : 'Subscription Type'
                        }),
                        (0, n.jsx)(c.zx, {
                            disabled: N,
                            look: c.zx.Looks.BLANK,
                            size: c.zx.Sizes.ICON,
                            onClick: T,
                            children: (0, n.jsx)('span', {
                                title: 'Refresh',
                                children: (0, n.jsx)(d.DuK, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        })
                    ]
                }),
                (0, n.jsx)('section', {
                    className: i()([_.section, _.buttons]),
                    children:
                        null == e &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(d.PhF, {
                                    serialize: (e) => e,
                                    isSelected: (e) => e === a,
                                    options: C,
                                    select: l,
                                    popoutLayerContext: b.O$
                                }),
                                (0, n.jsx)(d.zxk, {
                                    variant: 'primary',
                                    size: 'sm',
                                    text: 'Create Subscription',
                                    onClick: S
                                })
                            ]
                        })
                }),
                null != e &&
                    (0, n.jsx)(f.Z, {
                        subscription: e,
                        onUpdated: T
                    }),
                (0, n.jsx)(d.X6q, {
                    variant: 'heading-lg/semibold',
                    className: g.header,
                    children: 'Bulk Actions'
                }),
                (0, n.jsx)('section', {
                    className: i()([_.section, _.buttons]),
                    children: (0, n.jsx)(d.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: 'End All Subscriptions',
                        onClick: P
                    })
                }),
                E.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(d.X6q, {
                                variant: 'heading-lg/semibold',
                                className: g.header,
                                children: 'Previous Subscriptions'
                            }),
                            E.map((e) =>
                                (0, n.jsx)(
                                    f.Z,
                                    {
                                        subscription: e,
                                        onUpdated: T
                                    },
                                    e.id
                                )
                            )
                        ]
                    })
            ]
        })
    });
}
