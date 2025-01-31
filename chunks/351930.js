n.d(t, { Z: () => _ }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(544891),
    s = n(481060),
    c = n(255078),
    d = n(246992),
    u = n(41340),
    m = n(981631),
    h = n(474936),
    x = n(941469),
    p = n(509345);
let f = async () =>
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
    b = [
        {
            label: 'Nitro Monthly',
            value: h.Xh.PREMIUM_MONTH_TIER_2
        },
        {
            label: 'Nitro Yearly',
            value: h.Xh.PREMIUM_YEAR_TIER_2
        },
        {
            label: 'Nitro Classic Monthly',
            value: h.Xh.PREMIUM_MONTH_TIER_1
        },
        {
            label: 'Nitro Classic Yearly',
            value: h.Xh.PREMIUM_YEAR_TIER_1
        },
        {
            label: 'Basic Monthly',
            value: h.Xh.PREMIUM_MONTH_TIER_0
        },
        {
            label: 'Basic Yearly',
            value: h.Xh.PREMIUM_YEAR_TIER_0
        },
        {
            label: 'Reverse Trial 1-week',
            value: h.dO
        },
        {
            label: 'Reverse Trial 2-week',
            value: h.xT
        }
    ];
function _() {
    let [e, t] = l.useState('511651880837840896'),
        [n, r] = l.useState([]),
        [c, h] = l.useState(!1),
        _ = async () => {
            try {
                h(!0);
                let e = await f();
                r(e);
            } finally {
                h(!1);
            }
        };
    l.useEffect(() => {
        _();
    }, []);
    let g = l.useMemo(() => n.find((e) => e.status === m.O0b.ACTIVE), [n]),
        v = l.useMemo(() => n.filter((e) => e.status !== m.O0b.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [n]),
        j = async () => {
            await o.tn.post({
                url: '/debug/subscription',
                body: { plan_id: e },
                rejectWithError: !1
            }),
                await _();
        },
        C = async () => {
            await o.tn.del({
                url: '/debug/subscription',
                rejectWithError: !1
            }),
                await _();
        };
    return (0, a.jsx)(s.zJl, {
        className: i()(x.panel),
        children: (0, a.jsxs)('div', {
            className: p.panelInner,
            children: [
                (0, a.jsxs)('div', {
                    className: p.headerWrapper,
                    children: [
                        (0, a.jsx)('div', {
                            children: (0, a.jsx)(s.Text, {
                                style: { marginBottom: '8px' },
                                variant: 'text-lg/bold',
                                children: 'Manage Subscription'
                            })
                        }),
                        (0, a.jsx)('div', {
                            children: (0, a.jsx)(s.zxk, {
                                disabled: c,
                                look: s.zxk.Looks.BLANK,
                                size: s.zxk.Sizes.ICON,
                                onClick: _,
                                children: (0, a.jsx)('span', {
                                    title: 'Refresh',
                                    children: (0, a.jsx)(s.DuK, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, a.jsx)('section', {
                    className: i()([p.section, p.buttons]),
                    children:
                        null == g &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    children: ' Subscription Type'
                                }),
                                (0, a.jsx)(s.PhF, {
                                    serialize: (e) => e,
                                    isSelected: (t) => t === e,
                                    options: b,
                                    select: t,
                                    popoutLayerContext: d.O$
                                }),
                                (0, a.jsx)(s.zxk, {
                                    size: s.zxk.Sizes.SMALL,
                                    onClick: j,
                                    children: 'Create Subscription'
                                })
                            ]
                        })
                }),
                (0, a.jsx)(s.Text, {
                    style: { marginBottom: '8px' },
                    variant: 'text-lg/bold',
                    children: 'Bulk action'
                }),
                (0, a.jsx)('section', {
                    className: i()([p.section, p.buttons]),
                    children: (0, a.jsx)(s.zxk, {
                        size: s.zxk.Sizes.SMALL,
                        onClick: C,
                        children: 'End All Subscriptions'
                    })
                }),
                null != g &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(s.Text, {
                                style: { marginTop: '15px' },
                                variant: 'text-md/normal',
                                children: 'Existing active subscription'
                            }),
                            (0, a.jsx)(u.Z, {
                                subscription: g,
                                onUpdated: _
                            })
                        ]
                    }),
                v.length > 0 &&
                    (0, a.jsxs)('div', {
                        style: { marginTop: '8px' },
                        children: [
                            (0, a.jsx)(s.Text, {
                                style: { marginTop: '15px' },
                                variant: 'text-md/normal',
                                children: 'Previous subscriptions'
                            }),
                            v.map((e) =>
                                (0, a.jsx)(
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
