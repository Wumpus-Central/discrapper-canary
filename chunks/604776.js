n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(314794),
    s = n(544891),
    c = n(481060),
    d = n(959546),
    u = n(259580),
    m = n(55935),
    x = n(246992),
    h = n(981631),
    p = n(474936),
    b = n(123393),
    f = n(616257),
    _ = n(173166);
let g = (e) => {
        var t;
        let { entitlement: n, active: a, onDelete: l } = e,
            o = (e) => (null != e ? (0, m.vc)(e, 'LLL') : '---');
        return (0, r.jsxs)('div', {
            className: i()(b.card, a ? _.gradientWrapperTier2 : ''),
            children: [
                (0, r.jsxs)(c.Text, {
                    variant: 'text-md/normal',
                    children: ['ID: ', n.id, ' ']
                }),
                !a &&
                    (0, r.jsxs)(c.Text, {
                        variant: 'text-md/normal',
                        children: ['SKU: ', null == (t = T.find((e) => e.value === n.skuId)) ? void 0 : t.label]
                    }),
                null != n.startsAt &&
                    null != n.endsAt &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(c.Text, {
                                variant: 'text-md/normal',
                                children: ['Start: ', o(n.startsAt), ' ']
                            }),
                            (0, r.jsxs)(c.Text, {
                                variant: 'text-md/normal',
                                children: ['End: ', o(n.endsAt), ' ']
                            })
                        ]
                    }),
                a &&
                    null != l &&
                    (0, r.jsx)(c.zxk, {
                        className: b.deleteEntitlementButton,
                        size: c.zxk.Sizes.TINY,
                        color: c.zxk.Colors.RED,
                        look: c.zxk.Looks.OUTLINED,
                        onClick: l,
                        children: 'Delete'
                    })
            ]
        });
    },
    v = async () =>
        (
            await s.tn.get({
                url: h.ANM.ENTITLEMENTS_FOR_APPLICATION(p.CL),
                oldFormErrors: !0,
                query: {
                    exclude_consumed: !0,
                    exclude_ended: !0
                },
                rejectWithError: !0
            })
        ).body.map((e) => d.Z.createFromServer(e)),
    j = async (e) => {
        await s.tn.post({
            url: '/debug/entitlements/fractional-premium',
            body: {
                count: 1,
                sku_id: e
            },
            rejectWithError: !1
        });
    },
    y = async (e) => {
        let t = '/debug/entitlements/fractional-premium';
        null != e && (t = ''.concat(t, '/').concat(e)),
            await s.tn.del({
                url: t,
                rejectWithError: !0
            });
    },
    C = async () => {
        await s.tn.post({
            url: '/debug/entitlements/fulfillment',
            rejectWithError: !1
        });
    },
    T = [
        {
            label: '1 hour',
            value: o.a.PREMIUM_TIER_2_1_HOUR
        },
        {
            label: '1 day',
            value: o.a.PREMIUM_TIER_2_1_DAY
        },
        {
            label: '3 days',
            value: o.a.PREMIUM_TIER_2_3_DAY
        }
    ];
function S() {
    let [e, t] = a.useState(!1),
        [n, l] = a.useState(!1),
        [s, d] = a.useState(o.a.PREMIUM_TIER_2_1_HOUR),
        [m, p] = a.useState([]),
        [S, N] = a.useState([]),
        [O, k] = a.useState([]),
        E = async (e) => {
            await j(e), await I();
        },
        w = async (e) => {
            await y(e), await I();
        },
        P = async () => {
            await C(), await I();
        },
        I = async () => {
            try {
                t(!0);
                let e = await v();
                p(e);
            } finally {
                t(!1);
            }
        },
        Z = (e) => e.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === h.qc2.FRACTIONAL_REDEMPTION),
        R = (e) => e.filter((e) => Object.values(o.a).includes(e.skuId) && null == e.startsAt);
    return (
        a.useEffect(() => {
            I();
        }, []),
        a.useEffect(() => {
            N(Z(m)), k(R(m));
        }, [m]),
        (0, r.jsx)(c.zJl, {
            className: f.panel,
            children: (0, r.jsxs)('div', {
                className: _.panelInner,
                children: [
                    (0, r.jsxs)('div', {
                        className: _.headerWrapper,
                        children: [
                            (0, r.jsx)(c.Text, {
                                style: { marginBottom: '8px' },
                                variant: 'text-lg/bold',
                                children: 'Manage Fractional Nitro'
                            }),
                            (0, r.jsxs)(c.P3F, {
                                onClick: () => l(!n),
                                className: b.clickableGroup,
                                children: [
                                    (0, r.jsx)('div', {
                                        children: (0, r.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: 'Info'
                                        })
                                    }),
                                    (0, r.jsx)(u.Z, { direction: n ? u.Z.Directions.UP : u.Z.Directions.DOWN })
                                ]
                            })
                        ]
                    }),
                    n &&
                        (0, r.jsxs)('div', {
                            style: { margin: '8px 0' },
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    style: { fontStyle: 'italic' },
                                    color: 'text-muted',
                                    children: 'Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.'
                                }),
                                (0, r.jsx)('br', {}),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    style: { fontStyle: 'italic' },
                                    color: 'text-muted',
                                    children: "Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed."
                                })
                            ]
                        }),
                    (0, r.jsxs)('section', {
                        style: { marginBottom: '8px' },
                        className: i()([b.section, _.buttons]),
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/normal',
                                children: ' Fractional Premium SKU '
                            }),
                            (0, r.jsx)(c.PhF, {
                                serialize: (e) => e,
                                isSelected: (e) => e === s,
                                options: T,
                                select: d,
                                popoutLayerContext: x.O$
                            }),
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.MEDIUM,
                                onClick: () => E(s),
                                children: 'Grant Fractional Nitro'
                            })
                        ]
                    }),
                    (0, r.jsxs)('section', {
                        className: b.section,
                        children: [
                            (0, r.jsxs)('div', {
                                style: { flexWrap: 'wrap' },
                                className: _.headerWrapper,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        style: { marginBottom: '8px' },
                                        variant: 'text-lg/semibold',
                                        children: 'Entitlements'
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: b.buttonGroup,
                                        children: [
                                            (0, r.jsx)(c.zxk, {
                                                disabled: e,
                                                size: c.zxk.Sizes.TINY,
                                                color: c.zxk.Colors.PRIMARY,
                                                look: c.zxk.Looks.OUTLINED,
                                                onClick: () => P(),
                                                children: 'Run fulfillment'
                                            }),
                                            (0, r.jsx)(c.zxk, {
                                                disabled: e,
                                                size: c.zxk.Sizes.TINY,
                                                color: c.zxk.Colors.RED,
                                                look: c.zxk.Looks.OUTLINED,
                                                onClick: () => w(),
                                                children: 'Delete all'
                                            }),
                                            (0, r.jsx)(c.zxk, {
                                                disabled: e,
                                                look: c.zxk.Looks.BLANK,
                                                size: c.zxk.Sizes.ICON,
                                                onClick: I,
                                                children: (0, r.jsx)('span', {
                                                    title: 'Refresh',
                                                    children: (0, r.jsx)(c.DuK, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            S.length > 0 &&
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            style: { marginTop: '15px' },
                                            variant: 'text-md/bold',
                                            children: 'Active premium'
                                        }),
                                        (0, r.jsx)('div', {
                                            children: S.map((e) =>
                                                (0, r.jsx)(
                                                    g,
                                                    {
                                                        entitlement: e,
                                                        active: !0,
                                                        onDelete: () => w(e.id)
                                                    },
                                                    e.id
                                                )
                                            )
                                        })
                                    ]
                                }),
                            O.length > 0 &&
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            style: { marginTop: '15px' },
                                            variant: 'text-md/bold',
                                            children: 'Unconsumed Fractional Premium'
                                        }),
                                        (0, r.jsx)('div', { children: O.map((e) => (0, r.jsx)(g, { entitlement: e }, e.id)) })
                                    ]
                                })
                        ]
                    })
                ]
            })
        })
    );
}
