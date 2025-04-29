n.d(t, {
    D: () => v,
    Z: () => g
}),
    n(388685);
var a = n(255367),
    r = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(314794),
    o = n(481060),
    c = n(259580),
    d = n(55935),
    u = n(246992),
    m = n(232867),
    x = n(981631),
    h = n(123393),
    p = n(616257),
    b = n(173166);
let f = {
        [x.kNB.QUEST_REWARD]: 'Quest Reward',
        [x.kNB.DEVELOPER_GIFT]: 'Developer Gift',
        [x.kNB.INVOICE]: 'Invoice',
        [x.kNB.REVERSE_TRIAL]: 'Reverse Trial'
    },
    v = (e) => {
        var t;
        let { entitlement: n, active: r, onDelete: l } = e,
            s = (e) => (null != e ? (0, d.vc)(e, 'LLL') : '---');
        return (0, a.jsxs)('div', {
            className: i()(h.card, r ? b.gradientWrapperTier2 : ''),
            children: [
                (0, a.jsxs)(o.Text, {
                    variant: 'text-md/normal',
                    children: ['ID: ', n.id, ' ']
                }),
                !r &&
                    (0, a.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        children: ['SKU: ', null == (t = j.find((e) => e.value === n.skuId)) ? void 0 : t.label]
                    }),
                null != n.startsAt &&
                    null != n.endsAt &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsxs)(o.Text, {
                                variant: 'text-md/normal',
                                children: ['Start: ', s(n.startsAt), ' ']
                            }),
                            (0, a.jsxs)(o.Text, {
                                variant: 'text-md/normal',
                                children: ['End: ', s(n.endsAt), ' ']
                            })
                        ]
                    }),
                (0, a.jsxs)(o.Text, {
                    variant: 'text-md/normal',
                    children: [
                        'Entitlement source type: ',
                        (() => {
                            let e = n.sourceType;
                            return null != e && e in f ? f[e] : 'Unknown source type '.concat(e);
                        })()
                    ]
                }),
                r &&
                    null != l &&
                    (0, a.jsx)(o.zxk, {
                        className: h.deleteEntitlementButton,
                        size: o.zxk.Sizes.TINY,
                        color: o.zxk.Colors.RED,
                        look: o.zxk.Looks.OUTLINED,
                        onClick: l,
                        children: 'Delete'
                    })
            ]
        });
    },
    j = [
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
function g() {
    let [e, t] = r.useState(!1),
        [n, l] = r.useState(s.a.PREMIUM_TIER_2_1_HOUR),
        [d, f] = r.useState([]),
        [g, _] = r.useState([]),
        { refreshEntitlementList: y, grantFractionalPremium: C, deleteFractionalPremium: O, triggerNextEntitlementFulfillment: E, entitlements: N, loading: T } = (0, m.m)();
    r.useEffect(() => {
        y();
    }, [y]);
    let S = (e) => e.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === x.qc2.FRACTIONAL_REDEMPTION),
        P = (e) => e.filter((e) => Object.values(s.a).includes(e.skuId) && null == e.startsAt);
    return (
        r.useEffect(() => {
            f(S(N)), _(P(N));
        }, [N]),
        (0, a.jsx)(o.zJl, {
            className: p.panel,
            children: (0, a.jsxs)('div', {
                className: b.panelInner,
                children: [
                    (0, a.jsxs)('div', {
                        className: b.headerWrapper,
                        children: [
                            (0, a.jsx)(o.Text, {
                                style: { marginBottom: '8px' },
                                variant: 'text-lg/bold',
                                children: 'Manage Fractional Nitro'
                            }),
                            (0, a.jsxs)(o.P3F, {
                                onClick: () => t(!e),
                                className: h.clickableGroup,
                                children: [
                                    (0, a.jsx)('div', {
                                        children: (0, a.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            children: 'Info'
                                        })
                                    }),
                                    (0, a.jsx)(c.Z, { direction: e ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                                ]
                            })
                        ]
                    }),
                    e &&
                        (0, a.jsxs)('div', {
                            style: { margin: '8px 0' },
                            children: [
                                (0, a.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    style: { fontStyle: 'italic' },
                                    color: 'text-muted',
                                    children: 'Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.'
                                }),
                                (0, a.jsx)('br', {}),
                                (0, a.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    style: { fontStyle: 'italic' },
                                    color: 'text-muted',
                                    children: "Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed."
                                })
                            ]
                        }),
                    (0, a.jsxs)('section', {
                        style: { marginBottom: '8px' },
                        className: i()([h.section, b.buttons]),
                        children: [
                            (0, a.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: ' Fractional Premium SKU '
                            }),
                            (0, a.jsx)(o.PhF, {
                                serialize: (e) => e,
                                isSelected: (e) => e === n,
                                options: j,
                                select: l,
                                popoutLayerContext: u.O$
                            }),
                            (0, a.jsx)(o.zxk, {
                                size: o.zxk.Sizes.MEDIUM,
                                onClick: () => C(n),
                                children: 'Grant Fractional Nitro'
                            })
                        ]
                    }),
                    (0, a.jsxs)('section', {
                        className: h.section,
                        children: [
                            (0, a.jsxs)('div', {
                                style: { flexWrap: 'wrap' },
                                className: b.headerWrapper,
                                children: [
                                    (0, a.jsx)(o.Text, {
                                        style: { marginBottom: '8px' },
                                        variant: 'text-lg/semibold',
                                        children: 'Entitlements'
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: h.buttonGroup,
                                        children: [
                                            (0, a.jsx)(o.zxk, {
                                                disabled: T,
                                                size: o.zxk.Sizes.TINY,
                                                color: o.zxk.Colors.PRIMARY,
                                                look: o.zxk.Looks.OUTLINED,
                                                onClick: () => E(),
                                                children: 'Run fulfillment'
                                            }),
                                            (0, a.jsx)(o.zxk, {
                                                disabled: T,
                                                size: o.zxk.Sizes.TINY,
                                                color: o.zxk.Colors.RED,
                                                look: o.zxk.Looks.OUTLINED,
                                                onClick: () => O(),
                                                children: 'Delete all'
                                            }),
                                            (0, a.jsx)(o.zxk, {
                                                disabled: T,
                                                look: o.zxk.Looks.BLANK,
                                                size: o.zxk.Sizes.ICON,
                                                onClick: y,
                                                children: (0, a.jsx)('span', {
                                                    title: 'Refresh',
                                                    children: (0, a.jsx)(o.DuK, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            d.length > 0 &&
                                (0, a.jsxs)('div', {
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            style: { marginTop: '15px' },
                                            variant: 'text-md/bold',
                                            children: 'Active premium'
                                        }),
                                        (0, a.jsx)('div', {
                                            children: d.map((e) =>
                                                (0, a.jsx)(
                                                    v,
                                                    {
                                                        entitlement: e,
                                                        active: !0,
                                                        onDelete: () => O(e.id)
                                                    },
                                                    e.id
                                                )
                                            )
                                        })
                                    ]
                                }),
                            g.length > 0 &&
                                (0, a.jsxs)('div', {
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            style: { marginTop: '15px' },
                                            variant: 'text-md/bold',
                                            children: 'Unconsumed Fractional Premium'
                                        }),
                                        (0, a.jsx)('div', { children: g.map((e) => (0, a.jsx)(v, { entitlement: e }, e.id)) })
                                    ]
                                })
                        ]
                    })
                ]
            })
        })
    );
}
