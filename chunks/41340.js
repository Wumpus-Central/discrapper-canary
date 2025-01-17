n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var r,
    a,
    l,
    i,
    o = n(200651),
    s = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(544891),
    h = n(481060),
    m = n(259580),
    x = n(55935),
    f = n(709054),
    p = n(246992),
    b = n(981631),
    g = n(474936),
    v = n(236990),
    j = n(509345);
let T = {
        [b.O0b.UNPAID]: 'Unpaid',
        [b.O0b.ACTIVE]: 'Active',
        [b.O0b.PAST_DUE]: 'Past Due',
        [b.O0b.CANCELED]: 'Canceled',
        [b.O0b.ENDED]: 'Ended',
        [b.O0b.ACCOUNT_HOLD]: 'Account Hold',
        [b.O0b.BILLING_RETRY]: 'Billing Retry',
        [b.O0b.PAUSED]: 'Paused',
        [b.O0b.PAUSE_PENDING]: 'Pause Pending'
    },
    C = [
        {
            label: 'Unpaid',
            value: b.O0b.UNPAID
        },
        {
            label: 'Active',
            value: b.O0b.ACTIVE
        },
        {
            label: 'Past Due',
            value: b.O0b.PAST_DUE
        },
        {
            label: 'Canceled',
            value: b.O0b.CANCELED
        },
        {
            label: 'Ended',
            value: b.O0b.ENDED
        },
        {
            label: 'Account Hold',
            value: b.O0b.ACCOUNT_HOLD
        },
        {
            label: 'Billing Retry',
            value: b.O0b.BILLING_RETRY
        },
        {
            label: 'Paused',
            value: b.O0b.PAUSED
        },
        {
            label: 'Pause Pending',
            value: b.O0b.PAUSE_PENDING
        }
    ];
function _(e) {
    var t, n, r;
    let { subscription: a, onUpdated: l } = e,
        [i, c] = s.useState(!1),
        [_, S] = s.useState(!1),
        [N, y] = s.useState(null),
        I = (e) => ((null == e && (e = a.status), e in T) ? T[e] : 'Unknown status '.concat(e)),
        k = (e) => {
            let t = new Date(e);
            return f.default.fromTimestamp(t.getTime());
        },
        E = async (e) => {
            let { status: t = a.status, premiumStreakStart: n, endedAt: r } = e,
                i = {
                    subscription_status: t,
                    ...(null != n ? { premium_streak_started_at: k(n) } : null),
                    ...(null != r ? { ended_at: k(r) } : null)
                };
            await u.tn.patch({
                url: '/debug/subscriptions/'.concat(a.id),
                body: i,
                rejectWithError: !1
            }),
                l();
        },
        w = async () => {
            try {
                await u.tn.post({
                    url: '/debug/subscriptions/'.concat(a.id, '/transition'),
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
            l();
        },
        Z = (null === (t = g.GP[a.planIdFromItems]) || void 0 === t ? void 0 : t.premiumType) === g.p9.TIER_0,
        R = null === (n = a.metadata) || void 0 === n ? void 0 : n.ended_at,
        O = null != R ? new Date(R).toISOString().substring(0, 10) : '';
    return (0, o.jsx)(o.Fragment, {
        children: (0, o.jsxs)('div', {
            className: d()(j.card, Z ? j.gradientWrapperTier0 : j.gradientWrapperTier2),
            children: [
                (0, o.jsxs)(h.Text, {
                    variant: 'text-md/normal',
                    children: [
                        'Type: ',
                        (() => {
                            let e = a.planIdFromItems;
                            return null == e ? 'No plan id' : e in g.GP ? g.GP[e].name : 'Unknown plan id '.concat(e);
                        })(),
                        ' '
                    ]
                }),
                (0, o.jsxs)(h.Text, {
                    variant: 'text-md/normal',
                    children: ['ID: ', a.id, ' ']
                }),
                a.status !== b.O0b.ACTIVE &&
                    (0, o.jsxs)(h.Text, {
                        variant: 'text-md/normal',
                        children: ['Dates: ', (0, x.vc)(a.createdAt, 'LL'), ' - ', (0, x.vc)(a.currentPeriodEnd, 'LL')]
                    }),
                (0, o.jsxs)(h.Text, {
                    style: { marginBottom: '15px' },
                    variant: 'text-md/normal',
                    children: ['Status: ', I()]
                }),
                null != a.metadata &&
                    (0, o.jsxs)('div', {
                        className: v.collapsablePane,
                        children: [
                            (0, o.jsxs)(h.Clickable, {
                                onClick: () => {
                                    c(!i);
                                },
                                className: v.collapsablePaneHeader,
                                children: [
                                    (0, o.jsx)('div', {
                                        children: (0, o.jsx)(h.Text, {
                                            variant: 'text-md/bold',
                                            children: 'Metadata'
                                        })
                                    }),
                                    (0, o.jsx)(m.Z, { direction: i ? m.Z.Directions.UP : m.Z.Directions.DOWN })
                                ]
                            }),
                            i &&
                                (0, o.jsx)('ul', {
                                    style: { marginBottom: '15px' },
                                    children: Object.entries(a.metadata).map((e) => {
                                        let [t, n] = e;
                                        return (0, o.jsxs)(
                                            'li',
                                            {
                                                style: { margin: '8px 0' },
                                                children: [
                                                    (0, o.jsx)(h.Text, {
                                                        variant: 'text-md/bold',
                                                        children: t
                                                    }),
                                                    (0, o.jsx)(h.Text, {
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
                (0, o.jsxs)('div', {
                    className: v.collapsablePane,
                    children: [
                        (0, o.jsxs)(h.Clickable, {
                            onClick: () => {
                                S(!_);
                            },
                            className: v.collapsablePaneHeader,
                            children: [
                                (0, o.jsx)('div', {
                                    children: (0, o.jsx)(h.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Modifications'
                                    })
                                }),
                                (0, o.jsx)(m.Z, { direction: _ ? m.Z.Directions.UP : m.Z.Directions.DOWN })
                            ]
                        }),
                        _ &&
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(h.FormSection, {
                                        title: 'Status',
                                        tag: h.FormTitleTags.H3,
                                        className: v.formSection,
                                        children: (0, o.jsx)(h.Select, {
                                            serialize: (e) => I(e),
                                            isSelected: (e) => e === a.status,
                                            options: C,
                                            select: (e) => E({ status: e }),
                                            popoutLayerContext: p.O$
                                        })
                                    }),
                                    (0, o.jsxs)(h.FormSection, {
                                        title: 'Renew',
                                        tag: h.FormTitleTags.H3,
                                        className: v.formSection,
                                        children: [
                                            (0, o.jsx)(h.Button, {
                                                size: h.Button.Sizes.SMALL,
                                                onClick: (e) => w(),
                                                children: 'Renew Subscription'
                                            }),
                                            null !== N &&
                                                (0, o.jsx)(h.FormErrorBlock, {
                                                    className: v.error,
                                                    onDismiss: () => y(null),
                                                    children: N
                                                })
                                        ]
                                    }),
                                    (0, o.jsx)(h.FormSection, {
                                        title: 'Override Premium Streak Start Date',
                                        tag: h.FormTitleTags.H3,
                                        className: v.formSection,
                                        children: (0, o.jsx)('input', {
                                            type: 'date',
                                            value: null === (r = a.premiumSince) || void 0 === r ? void 0 : r.toISOString().substring(0, 10),
                                            onChange: (e) => E({ premiumStreakStart: e.target.value })
                                        })
                                    }),
                                    (0, o.jsx)(h.FormSection, {
                                        title: 'Override Metadata Ended At Date',
                                        tag: h.FormTitleTags.H3,
                                        className: v.formSection,
                                        children: (0, o.jsx)('input', {
                                            type: 'date',
                                            value: O,
                                            onChange: (e) => E({ endedAt: e.target.value })
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
((l = r || (r = {}))[(l.DEFAULT = 0)] = 'DEFAULT'), ((i = a || (a = {}))[(i.RENEW = 2)] = 'RENEW');
