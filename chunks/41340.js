n.d(t, { Z: () => g }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(544891),
    s = n(481060),
    c = n(259580),
    d = n(55935),
    u = n(709054),
    h = n(246992),
    m = n(981631),
    x = n(474936),
    _ = n(252158),
    p = n(519335);
let f = {
        [m.O0b.UNPAID]: 'Unpaid',
        [m.O0b.ACTIVE]: 'Active',
        [m.O0b.PAST_DUE]: 'Past Due',
        [m.O0b.CANCELED]: 'Canceled',
        [m.O0b.ENDED]: 'Ended',
        [m.O0b.ACCOUNT_HOLD]: 'Account Hold',
        [m.O0b.BILLING_RETRY]: 'Billing Retry',
        [m.O0b.PAUSED]: 'Paused',
        [m.O0b.PAUSE_PENDING]: 'Pause Pending'
    },
    b = [
        {
            label: 'Unpaid',
            value: m.O0b.UNPAID
        },
        {
            label: 'Active',
            value: m.O0b.ACTIVE
        },
        {
            label: 'Past Due',
            value: m.O0b.PAST_DUE
        },
        {
            label: 'Canceled',
            value: m.O0b.CANCELED
        },
        {
            label: 'Ended',
            value: m.O0b.ENDED
        },
        {
            label: 'Account Hold',
            value: m.O0b.ACCOUNT_HOLD
        },
        {
            label: 'Billing Retry',
            value: m.O0b.BILLING_RETRY
        },
        {
            label: 'Paused',
            value: m.O0b.PAUSED
        },
        {
            label: 'Pause Pending',
            value: m.O0b.PAUSE_PENDING
        }
    ];
function g(e) {
    var t, n, l;
    let { subscription: g, onUpdated: v } = e,
        [j, C] = r.useState(!1),
        [N, T] = r.useState(!1),
        [E, y] = r.useState(null),
        S = (e) => ((null == e && (e = g.status), e in f) ? f[e] : 'Unknown status '.concat(e)),
        k = (e) => {
            let t = new Date(e);
            return u.default.fromTimestamp(t.getTime());
        },
        R = async (e) => {
            let { status: t = g.status, premiumStreakStart: n, endedAt: a } = e,
                r = {
                    subscription_status: t,
                    ...(null != n ? { premium_streak_started_at: k(n) } : null),
                    ...(null != a ? { ended_at: k(a) } : null)
                };
            await o.tn.patch({
                url: '/debug/subscriptions/'.concat(g.id),
                body: r,
                rejectWithError: !1
            }),
                v();
        },
        I = async () => {
            try {
                await o.tn.post({
                    url: '/debug/subscriptions/'.concat(g.id, '/transition'),
                    body: {
                        target_datetime: new Date().toISOString(),
                        payment_type: 0,
                        transition: 2,
                        send_reminder_email: !1
                    },
                    rejectWithError: !1
                });
            } catch (e) {
                y(e.body.message);
            }
            v();
        },
        O = (null === (t = x.GP[g.planIdFromItems]) || void 0 === t ? void 0 : t.premiumType) === x.p9.TIER_0,
        Z = null === (n = g.metadata) || void 0 === n ? void 0 : n.ended_at,
        w = null != Z ? new Date(Z).toISOString().substring(0, 10) : '';
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: i()(p.card, O ? p.gradientWrapperTier0 : p.gradientWrapperTier2),
            children: [
                (0, a.jsxs)(s.Text, {
                    variant: 'text-md/normal',
                    children: [
                        'Type: ',
                        (() => {
                            let e = g.planIdFromItems;
                            return null == e ? 'No plan id' : e in x.GP ? x.GP[e].name : 'Unknown plan id '.concat(e);
                        })(),
                        ' '
                    ]
                }),
                (0, a.jsxs)(s.Text, {
                    variant: 'text-md/normal',
                    children: ['ID: ', g.id, ' ']
                }),
                g.status !== m.O0b.ACTIVE &&
                    (0, a.jsxs)(s.Text, {
                        variant: 'text-md/normal',
                        children: ['Dates: ', (0, d.vc)(g.createdAt, 'LL'), ' - ', (0, d.vc)(g.currentPeriodEnd, 'LL')]
                    }),
                (0, a.jsxs)(s.Text, {
                    style: { marginBottom: '15px' },
                    variant: 'text-md/normal',
                    children: ['Status: ', S()]
                }),
                null != g.metadata &&
                    (0, a.jsxs)('div', {
                        className: _.collapsablePane,
                        children: [
                            (0, a.jsxs)(s.P3F, {
                                onClick: () => {
                                    C(!j);
                                },
                                className: _.collapsablePaneHeader,
                                children: [
                                    (0, a.jsx)('div', {
                                        children: (0, a.jsx)(s.Text, {
                                            variant: 'text-md/bold',
                                            children: 'Metadata'
                                        })
                                    }),
                                    (0, a.jsx)(c.Z, { direction: j ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                                ]
                            }),
                            j &&
                                (0, a.jsx)('ul', {
                                    style: { marginBottom: '15px' },
                                    children: Object.entries(g.metadata).map((e) => {
                                        let [t, n] = e;
                                        return (0, a.jsxs)(
                                            'li',
                                            {
                                                style: { margin: '8px 0' },
                                                children: [
                                                    (0, a.jsx)(s.Text, {
                                                        variant: 'text-md/bold',
                                                        children: t
                                                    }),
                                                    (0, a.jsx)(s.Text, {
                                                        variant: 'text-sm/normal',
                                                        children: n
                                                    })
                                                ]
                                            },
                                            t
                                        );
                                    })
                                })
                        ]
                    }),
                (0, a.jsxs)('div', {
                    className: _.collapsablePane,
                    children: [
                        (0, a.jsxs)(s.P3F, {
                            onClick: () => {
                                T(!N);
                            },
                            className: _.collapsablePaneHeader,
                            children: [
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(s.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Modifications'
                                    })
                                }),
                                (0, a.jsx)(c.Z, { direction: N ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        N &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(s.hjN, {
                                        title: 'Status',
                                        tag: s.RB0.H3,
                                        className: _.formSection,
                                        children: (0, a.jsx)(s.PhF, {
                                            serialize: (e) => S(e),
                                            isSelected: (e) => e === g.status,
                                            options: b,
                                            select: (e) => R({ status: e }),
                                            popoutLayerContext: h.O$
                                        })
                                    }),
                                    (0, a.jsxs)(s.hjN, {
                                        title: 'Renew',
                                        tag: s.RB0.H3,
                                        className: _.formSection,
                                        children: [
                                            (0, a.jsx)(s.zxk, {
                                                size: s.zxk.Sizes.SMALL,
                                                onClick: (e) => I(),
                                                children: 'Renew Subscription'
                                            }),
                                            null !== E &&
                                                (0, a.jsx)(s.kzN, {
                                                    className: _.error,
                                                    onDismiss: () => y(null),
                                                    children: E
                                                })
                                        ]
                                    }),
                                    (0, a.jsx)(s.hjN, {
                                        title: 'Override Premium Streak Start Date',
                                        tag: s.RB0.H3,
                                        className: _.formSection,
                                        children: (0, a.jsx)('input', {
                                            type: 'date',
                                            value: null === (l = g.premiumSince) || void 0 === l ? void 0 : l.toISOString().substring(0, 10),
                                            onChange: (e) => R({ premiumStreakStart: e.target.value })
                                        })
                                    }),
                                    (0, a.jsx)(s.hjN, {
                                        title: 'Override Metadata Ended At Date',
                                        tag: s.RB0.H3,
                                        className: _.formSection,
                                        children: (0, a.jsx)('input', {
                                            type: 'date',
                                            value: w,
                                            onChange: (e) => R({ endedAt: e.target.value })
                                        })
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    });
}
