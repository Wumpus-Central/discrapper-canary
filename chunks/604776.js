n.d(t, { Z: () => N }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(314794),
    o = n(544891),
    c = n(481060),
    d = n(959546),
    u = n(259580),
    m = n(55935),
    x = n(246992),
    h = n(981631),
    p = n(474936),
    b = n(123393),
    f = n(616257),
    v = n(173166);
let j = (e) => {
        var t;
        let { entitlement: n, active: r, onDelete: l } = e,
            s = (e) => (null != e ? (0, m.vc)(e, 'LLL') : '---');
        return (0, a.jsxs)('div', {
            className: i()(b.card, r ? v.gradientWrapperTier2 : ''),
            children: [
                (0, a.jsxs)(c.Text, {
                    variant: 'text-md/normal',
                    children: ['ID: ', n.id, ' ']
                }),
                !r &&
                    (0, a.jsxs)(c.Text, {
                        variant: 'text-md/normal',
                        children: ['SKU: ', null == (t = O.find((e) => e.value === n.skuId)) ? void 0 : t.label]
                    }),
                null != n.startsAt &&
                    null != n.endsAt &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsxs)(c.Text, {
                                variant: 'text-md/normal',
                                children: ['Start: ', s(n.startsAt), ' ']
                            }),
                            (0, a.jsxs)(c.Text, {
                                variant: 'text-md/normal',
                                children: ['End: ', s(n.endsAt), ' ']
                            })
                        ]
                    }),
                r &&
                    null != l &&
                    (0, a.jsx)(c.zxk, {
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
    g = async () =>
        (
            await o.tn.get({
                url: h.ANM.ENTITLEMENTS_FOR_APPLICATION(p.CL),
                oldFormErrors: !0,
                query: {
                    exclude_consumed: !0,
                    exclude_ended: !0
                },
                rejectWithError: !0
            })
        ).body.map((e) => d.Z.createFromServer(e)),
    _ = async (e) => {
        await o.tn.post({
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
            await o.tn.del({
                url: t,
                rejectWithError: !0
            });
    },
    C = async () => {
        await o.tn.post({
            url: '/debug/entitlements/fulfillment',
            rejectWithError: !1
        });
    },
    O = [
        {
            label: '1 hour',
            value: s.a.PREMIUM_TIER_2_1_HOUR
        },
        {
            label: '1 day',
            value: s.a.PREMIUM_TIER_2_1_DAY
        },
        {
            label: '3 days',
            value: s.a.PREMIUM_TIER_2_3_DAY
        }
    ];
function N() {
    let [e, t] = r.useState(!1),
        [n, l] = r.useState(!1),
        [o, d] = r.useState(s.a.PREMIUM_TIER_2_1_HOUR),
        [m, p] = r.useState([]),
        [N, E] = r.useState([]),
        [T, S] = r.useState([]),
        P = async (e) => {
            await _(e), await I();
        },
        w = async (e) => {
            await y(e), await I();
        },
        k = async () => {
            await C(), await I();
        },
        I = async () => {
            try {
                t(!0);
                let e = await g();
                p(e);
            } finally {
                t(!1);
            }
        },
        R = (e) => e.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === h.qc2.FRACTIONAL_REDEMPTION),
        Z = (e) => e.filter((e) => Object.values(s.a).includes(e.skuId) && null == e.startsAt);
    return (
        r.useEffect(() => {
            I();
        }, []),
        r.useEffect(() => {
            E(R(m)), S(Z(m));
        }, [m]),
        (0, a.jsx)(c.zJl, {
            className: f.panel,
            children: (0, a.jsxs)('div', {
                className: v.panelInner,
                children: [
                    (0, a.jsxs)('div', {
                        className: v.headerWrapper,
                        children: [
                            (0, a.jsx)(c.Text, {
                                style: { marginBottom: '8px' },
                                variant: 'text-lg/bold',
                                children: 'Manage Fractional Nitro'
                            }),
                            (0, a.jsxs)(c.P3F, {
                                onClick: () => l(!n),
                                className: b.clickableGroup,
                                children: [
                                    (0, a.jsx)('div', {
                                        children: (0, a.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: 'Info'
                                        })
                                    }),
                                    (0, a.jsx)(u.Z, { direction: n ? u.Z.Directions.UP : u.Z.Directions.DOWN })
                                ]
                            })
                        ]
                    }),
                    n &&
                        (0, a.jsxs)('div', {
                            style: { margin: '8px 0' },
                            children: [
                                (0, a.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    style: { fontStyle: 'italic' },
                                    color: 'text-muted',
                                    children: 'Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.'
                                }),
                                (0, a.jsx)('br', {}),
                                (0, a.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    style: { fontStyle: 'italic' },
                                    color: 'text-muted',
                                    children: "Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed."
                                })
                            ]
                        }),
                    (0, a.jsxs)('section', {
                        style: { marginBottom: '8px' },
                        className: i()([b.section, v.buttons]),
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: 'text-md/normal',
                                children: ' Fractional Premium SKU '
                            }),
                            (0, a.jsx)(c.PhF, {
                                serialize: (e) => e,
                                isSelected: (e) => e === o,
                                options: O,
                                select: d,
                                popoutLayerContext: x.O$
                            }),
                            (0, a.jsx)(c.zxk, {
                                size: c.zxk.Sizes.MEDIUM,
                                onClick: () => P(o),
                                children: 'Grant Fractional Nitro'
                            })
                        ]
                    }),
                    (0, a.jsxs)('section', {
                        className: b.section,
                        children: [
                            (0, a.jsxs)('div', {
                                style: { flexWrap: 'wrap' },
                                className: v.headerWrapper,
                                children: [
                                    (0, a.jsx)(c.Text, {
                                        style: { marginBottom: '8px' },
                                        variant: 'text-lg/semibold',
                                        children: 'Entitlements'
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: b.buttonGroup,
                                        children: [
                                            (0, a.jsx)(c.zxk, {
                                                disabled: e,
                                                size: c.zxk.Sizes.TINY,
                                                color: c.zxk.Colors.PRIMARY,
                                                look: c.zxk.Looks.OUTLINED,
                                                onClick: () => k(),
                                                children: 'Run fulfillment'
                                            }),
                                            (0, a.jsx)(c.zxk, {
                                                disabled: e,
                                                size: c.zxk.Sizes.TINY,
                                                color: c.zxk.Colors.RED,
                                                look: c.zxk.Looks.OUTLINED,
                                                onClick: () => w(),
                                                children: 'Delete all'
                                            }),
                                            (0, a.jsx)(c.zxk, {
                                                disabled: e,
                                                look: c.zxk.Looks.BLANK,
                                                size: c.zxk.Sizes.ICON,
                                                onClick: I,
                                                children: (0, a.jsx)('span', {
                                                    title: 'Refresh',
                                                    children: (0, a.jsx)(c.DuK, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            N.length > 0 &&
                                (0, a.jsxs)('div', {
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            style: { marginTop: '15px' },
                                            variant: 'text-md/bold',
                                            children: 'Active premium'
                                        }),
                                        (0, a.jsx)('div', {
                                            children: N.map((e) =>
                                                (0, a.jsx)(
                                                    j,
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
                            T.length > 0 &&
                                (0, a.jsxs)('div', {
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            style: { marginTop: '15px' },
                                            variant: 'text-md/bold',
                                            children: 'Unconsumed Fractional Premium'
                                        }),
                                        (0, a.jsx)('div', { children: T.map((e) => (0, a.jsx)(j, { entitlement: e }, e.id)) })
                                    ]
                                })
                        ]
                    })
                ]
            })
        })
    );
}
