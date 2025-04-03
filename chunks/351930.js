n.d(t, { Z: () => _ }), n(47120), n(230036);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(544891),
    s = n(481060),
    c = n(255078),
    d = n(246992),
    u = n(41340),
    m = n(981631),
    x = n(474936),
    h = n(616257),
    p = n(173166);
let b = async () =>
        (
            await o.tn.get({
                url: m.ANM.BILLING_SUBSCRIPTIONS,
                query: {
                    include_inactive: !0,
                    limit: 5
                },
                rejectWithError: !1
            })
        ).body.map((e) => c.Z.createFromServer(e)),
    f = [
        {
            label: 'Nitro Monthly',
            value: x.Xh.PREMIUM_MONTH_TIER_2
        },
        {
            label: 'Nitro Yearly',
            value: x.Xh.PREMIUM_YEAR_TIER_2
        },
        {
            label: 'Nitro Classic Monthly',
            value: x.Xh.PREMIUM_MONTH_TIER_1
        },
        {
            label: 'Nitro Classic Yearly',
            value: x.Xh.PREMIUM_YEAR_TIER_1
        },
        {
            label: 'Basic Monthly',
            value: x.Xh.PREMIUM_MONTH_TIER_0
        },
        {
            label: 'Basic Yearly',
            value: x.Xh.PREMIUM_YEAR_TIER_0
        },
        {
            label: 'Reverse Trial 1-week',
            value: x.dO
        },
        {
            label: 'Reverse Trial 2-week',
            value: x.xT
        }
    ];
function _() {
    let [e, t] = a.useState('511651880837840896'),
        [n, l] = a.useState([]),
        [c, x] = a.useState(!1),
        _ = async () => {
            try {
                x(!0);
                let e = await b();
                l(e);
            } finally {
                x(!1);
            }
        };
    a.useEffect(() => {
        _();
    }, []);
    let g = a.useMemo(() => n.find((e) => e.status === m.O0b.ACTIVE), [n]),
        v = a.useMemo(() => n.filter((e) => e.status !== m.O0b.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [n]),
        j = async () => {
            await o.tn.post({
                url: '/debug/subscription',
                body: { plan_id: e },
                rejectWithError: !1
            }),
                await _();
        },
        y = async () => {
            await o.tn.del({
                url: '/debug/subscription',
                rejectWithError: !1
            }),
                await _();
        };
    return (0, r.jsx)(s.zJl, {
        className: h.panel,
        children: (0, r.jsxs)('div', {
            className: p.panelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: p.headerWrapper,
                    children: [
                        (0, r.jsx)('div', {
                            children: (0, r.jsx)(s.Text, {
                                style: { marginBottom: '8px' },
                                variant: 'text-lg/bold',
                                children: 'Manage Subscription'
                            })
                        }),
                        (0, r.jsx)('div', {
                            children: (0, r.jsx)(s.zxk, {
                                disabled: c,
                                look: s.zxk.Looks.BLANK,
                                size: s.zxk.Sizes.ICON,
                                onClick: _,
                                children: (0, r.jsx)('span', {
                                    title: 'Refresh',
                                    children: (0, r.jsx)(s.DuK, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, r.jsx)('section', {
                    className: i()([p.section, p.buttons]),
                    children:
                        null == g &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    children: ' Subscription Type'
                                }),
                                (0, r.jsx)(s.PhF, {
                                    serialize: (e) => e,
                                    isSelected: (t) => t === e,
                                    options: f,
                                    select: t,
                                    popoutLayerContext: d.O$
                                }),
                                (0, r.jsx)(s.zxk, {
                                    size: s.zxk.Sizes.SMALL,
                                    onClick: j,
                                    children: 'Create Subscription'
                                })
                            ]
                        })
                }),
                (0, r.jsx)(s.Text, {
                    style: { marginBottom: '8px' },
                    variant: 'text-lg/bold',
                    children: 'Bulk action'
                }),
                (0, r.jsx)('section', {
                    className: i()([p.section, p.buttons]),
                    children: (0, r.jsx)(s.zxk, {
                        size: s.zxk.Sizes.SMALL,
                        onClick: y,
                        children: 'End All Subscriptions'
                    })
                }),
                null != g &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.Text, {
                                style: { marginTop: '15px' },
                                variant: 'text-md/normal',
                                children: 'Existing active subscription'
                            }),
                            (0, r.jsx)(u.Z, {
                                subscription: g,
                                onUpdated: _
                            })
                        ]
                    }),
                v.length > 0 &&
                    (0, r.jsxs)('div', {
                        style: { marginTop: '8px' },
                        children: [
                            (0, r.jsx)(s.Text, {
                                style: { marginTop: '15px' },
                                variant: 'text-md/normal',
                                children: 'Previous subscriptions'
                            }),
                            v.map((e) =>
                                (0, r.jsx)(
                                    u.Z,
                                    {
                                        subscription: e,
                                        onUpdated: _
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
