n.d(t, { Z: () => C }), n(388685), n(642613);
var a = n(255367),
    r = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(544891),
    c = n(481060),
    d = n(355467),
    u = n(232567),
    m = n(255078),
    x = n(594174),
    h = n(78839),
    p = n(246992),
    b = n(759027),
    f = n(981631),
    v = n(474936),
    j = n(616257),
    g = n(173166);
let _ = async () =>
        (
            await o.tn.get({
                url: f.ANM.BILLING_SUBSCRIPTIONS,
                query: {
                    include_inactive: !0,
                    limit: 5
                },
                rejectWithError: !1
            })
        ).body.map((e) => m.Z.createFromServer(e)),
    y = [
        {
            label: 'Nitro Monthly',
            value: v.Xh.PREMIUM_MONTH_TIER_2
        },
        {
            label: 'Nitro Yearly',
            value: v.Xh.PREMIUM_YEAR_TIER_2
        },
        {
            label: 'Nitro Classic Monthly',
            value: v.Xh.PREMIUM_MONTH_TIER_1
        },
        {
            label: 'Nitro Classic Yearly',
            value: v.Xh.PREMIUM_YEAR_TIER_1
        },
        {
            label: 'Basic Monthly',
            value: v.Xh.PREMIUM_MONTH_TIER_0
        },
        {
            label: 'Basic Yearly',
            value: v.Xh.PREMIUM_YEAR_TIER_0
        },
        {
            label: 'Reverse Trial 1-week',
            value: v.dO
        },
        {
            label: 'Reverse Trial 2-week',
            value: v.xT
        }
    ];
function C() {
    let e = (0, s.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
        t = (0, s.e7)([x.default], () => x.default.getCurrentUser()),
        [n, l] = r.useState('511651880837840896'),
        [m, v] = r.useState([]),
        [C, O] = r.useState(!1),
        E = r.useCallback(async () => {
            try {
                O(!0), await (0, d.jg)(), await (0, u.In)(t.id), v(await _());
            } finally {
                O(!1);
            }
        }, [t]);
    r.useEffect(() => {
        E();
    }, [E]);
    let N = r.useMemo(() => m.filter((e) => e.status !== f.O0b.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [m]),
        T = async () => {
            await o.tn.post({
                url: '/debug/subscription',
                body: { plan_id: n },
                rejectWithError: !1
            }),
                await E();
        },
        S = async () => {
            await o.tn.del({
                url: '/debug/subscription',
                rejectWithError: !1
            }),
                await E();
        };
    return (0, a.jsx)(c.zJl, {
        className: j.panel,
        children: (0, a.jsxs)('div', {
            className: g.panelInner,
            children: [
                (0, a.jsxs)('div', {
                    className: g.headerWrapper,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            className: j.header,
                            children: null != e ? 'Active Subscription' : 'Subscription Type'
                        }),
                        (0, a.jsx)(c.zxk, {
                            disabled: C,
                            look: c.zxk.Looks.BLANK,
                            size: c.zxk.Sizes.ICON,
                            onClick: E,
                            children: (0, a.jsx)('span', {
                                title: 'Refresh',
                                children: (0, a.jsx)(c.DuK, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        })
                    ]
                }),
                (0, a.jsx)('section', {
                    className: i()([g.section, g.buttons]),
                    children:
                        null == e &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    serialize: (e) => e,
                                    isSelected: (e) => e === n,
                                    options: y,
                                    select: l,
                                    popoutLayerContext: p.O$
                                }),
                                (0, a.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: T,
                                    children: 'Create Subscription'
                                })
                            ]
                        })
                }),
                null != e &&
                    (0, a.jsx)(b.Z, {
                        subscription: e,
                        onUpdated: E
                    }),
                (0, a.jsx)(c.X6q, {
                    variant: 'heading-lg/semibold',
                    className: j.header,
                    children: 'Bulk Actions'
                }),
                (0, a.jsx)('section', {
                    className: i()([g.section, g.buttons]),
                    children: (0, a.jsx)(c.zxk, {
                        size: c.zxk.Sizes.SMALL,
                        onClick: S,
                        children: 'End All Subscriptions'
                    })
                }),
                N.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: 'heading-lg/semibold',
                                className: j.header,
                                children: 'Previous Subscriptions'
                            }),
                            N.map((e) =>
                                (0, a.jsx)(
                                    b.Z,
                                    {
                                        subscription: e,
                                        onUpdated: E
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
