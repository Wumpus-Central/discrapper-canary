n.d(t, { Z: () => g }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(544891),
    s = n(481060),
    c = n(259580),
    d = n(55935),
    u = n(709054),
    m = n(246992),
    h = n(981631),
    x = n(474936),
    p = n(236990),
    f = n(509345);
let b = {
        [h.O0b.UNPAID]: 'Unpaid',
        [h.O0b.ACTIVE]: 'Active',
        [h.O0b.PAST_DUE]: 'Past Due',
        [h.O0b.CANCELED]: 'Canceled',
        [h.O0b.ENDED]: 'Ended',
        [h.O0b.ACCOUNT_HOLD]: 'Account Hold',
        [h.O0b.BILLING_RETRY]: 'Billing Retry',
        [h.O0b.PAUSED]: 'Paused',
        [h.O0b.PAUSE_PENDING]: 'Pause Pending'
    },
    _ = [
        {
            label: 'Unpaid',
            value: h.O0b.UNPAID
        },
        {
            label: 'Active',
            value: h.O0b.ACTIVE
        },
        {
            label: 'Past Due',
            value: h.O0b.PAST_DUE
        },
        {
            label: 'Canceled',
            value: h.O0b.CANCELED
        },
        {
            label: 'Ended',
            value: h.O0b.ENDED
        },
        {
            label: 'Account Hold',
            value: h.O0b.ACCOUNT_HOLD
        },
        {
            label: 'Billing Retry',
            value: h.O0b.BILLING_RETRY
        },
        {
            label: 'Paused',
            value: h.O0b.PAUSED
        },
        {
            label: 'Pause Pending',
            value: h.O0b.PAUSE_PENDING
        }
    ];
function g(e) {
    var t, n, r;
    let { subscription: g, onUpdated: v } = e,
        [j, C] = l.useState(!1),
        [N, T] = l.useState(!1),
        [E, y] = l.useState(null),
        S = (e) => ((null == e && (e = g.status), e in b) ? b[e] : 'Unknown status '.concat(e)),
        k = (e) => {
            let t = new Date(e);
            return u.default.fromTimestamp(t.getTime());
        },
        Z = async (e) => {
            let { status: t = g.status, premiumStreakStart: n, endedAt: a } = e,
                l = {
                    subscription_status: t,
                    ...(null != n ? { premium_streak_started_at: k(n) } : null),
                    ...(null != a ? { ended_at: k(a) } : null)
                };
            await o.tn.patch({
                url: '/debug/subscriptions/'.concat(g.id),
                body: l,
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
        w = null === (n = g.metadata) || void 0 === n ? void 0 : n.ended_at,
        R = null != w ? new Date(w).toISOString().substring(0, 10) : '';
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: i()(f.card, O ? f.gradientWrapperTier0 : f.gradientWrapperTier2),
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
                g.status !== h.O0b.ACTIVE &&
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
                        className: p.collapsablePane,
                        children: [
                            (0, a.jsxs)(s.P3F, {
                                onClick: () => {
                                    C(!j);
                                },
                                className: p.collapsablePaneHeader,
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
                    className: p.collapsablePane,
                    children: [
                        (0, a.jsxs)(s.P3F, {
                            onClick: () => {
                                T(!N);
                            },
                            className: p.collapsablePaneHeader,
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
                                        className: p.formSection,
                                        children: (0, a.jsx)(s.PhF, {
                                            serialize: (e) => S(e),
                                            isSelected: (e) => e === g.status,
                                            options: _,
                                            select: (e) => Z({ status: e }),
                                            popoutLayerContext: m.O$
                                        })
                                    }),
                                    (0, a.jsxs)(s.hjN, {
                                        title: 'Renew',
                                        tag: s.RB0.H3,
                                        className: p.formSection,
                                        children: [
                                            (0, a.jsx)(s.zxk, {
                                                size: s.zxk.Sizes.SMALL,
                                                onClick: (e) => I(),
                                                children: 'Renew Subscription'
                                            }),
                                            null !== E &&
                                                (0, a.jsx)(s.kzN, {
                                                    className: p.error,
                                                    onDismiss: () => y(null),
                                                    children: E
                                                })
                                        ]
                                    }),
                                    (0, a.jsx)(s.hjN, {
                                        title: 'Override Premium Streak Start Date',
                                        tag: s.RB0.H3,
                                        className: p.formSection,
                                        children: (0, a.jsx)('input', {
                                            type: 'date',
                                            value: null === (r = g.premiumSince) || void 0 === r ? void 0 : r.toISOString().substring(0, 10),
                                            onChange: (e) => Z({ premiumStreakStart: e.target.value })
                                        })
                                    }),
                                    (0, a.jsx)(s.hjN, {
                                        title: 'Override Metadata Ended At Date',
                                        tag: s.RB0.H3,
                                        className: p.formSection,
                                        children: (0, a.jsx)('input', {
                                            type: 'date',
                                            value: R,
                                            onChange: (e) => Z({ endedAt: e.target.value })
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
