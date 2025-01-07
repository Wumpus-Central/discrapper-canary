n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
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
    f = n(236990),
    p = n(509345);
let b = {
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
    g = [
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
function v(e) {
    var t, n, l;
    let { subscription: v, onUpdated: j } = e,
        [C, T] = a.useState(!1),
        [_, S] = a.useState(!1),
        N = (e) => ((null == e && (e = v.status), e in b) ? b[e] : 'Unknown status '.concat(e)),
        y = (e) => {
            let t = new Date(e);
            return u.default.fromTimestamp(t.getTime());
        },
        k = async (e) => {
            let { status: t = v.status, premiumStreakStart: n, endedAt: r } = e,
                a = {
                    subscription_status: t,
                    ...(null != n ? { premium_streak_started_at: y(n) } : null),
                    ...(null != r ? { ended_at: y(r) } : null)
                };
            await o.tn.patch({
                url: '/debug/subscriptions/'.concat(v.id),
                body: a,
                rejectWithError: !1
            }),
                j();
        },
        I = (null === (t = x.GP[v.planIdFromItems]) || void 0 === t ? void 0 : t.premiumType) === x.p9.TIER_0,
        E = null === (n = v.metadata) || void 0 === n ? void 0 : n.ended_at,
        w = null != E ? new Date(E).toISOString().substring(0, 10) : '';
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: i()(p.card, I ? p.gradientWrapperTier0 : p.gradientWrapperTier2),
            children: [
                (0, r.jsxs)(s.Text, {
                    variant: 'text-md/normal',
                    children: [
                        'Type: ',
                        (() => {
                            let e = v.planIdFromItems;
                            return null == e ? 'No plan id' : e in x.GP ? x.GP[e].name : 'Unknown plan id '.concat(e);
                        })(),
                        ' '
                    ]
                }),
                (0, r.jsxs)(s.Text, {
                    variant: 'text-md/normal',
                    children: ['ID: ', v.id, ' ']
                }),
                v.status !== m.O0b.ACTIVE &&
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-md/normal',
                        children: ['Dates: ', (0, d.vc)(v.createdAt, 'LL'), ' - ', (0, d.vc)(v.currentPeriodEnd, 'LL')]
                    }),
                (0, r.jsxs)(s.Text, {
                    style: { marginBottom: '15px' },
                    variant: 'text-md/normal',
                    children: ['Status: ', N()]
                }),
                null != v.metadata &&
                    (0, r.jsxs)('div', {
                        className: f.collapsablePane,
                        children: [
                            (0, r.jsxs)(s.Clickable, {
                                onClick: () => {
                                    T(!C);
                                },
                                className: f.collapsablePaneHeader,
                                children: [
                                    (0, r.jsx)('div', {
                                        children: (0, r.jsx)(s.Text, {
                                            variant: 'text-md/bold',
                                            children: 'Metadata'
                                        })
                                    }),
                                    (0, r.jsx)(c.Z, { direction: C ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                                ]
                            }),
                            C &&
                                (0, r.jsx)('ul', {
                                    style: { marginBottom: '15px' },
                                    children: Object.entries(v.metadata).map((e) => {
                                        let [t, n] = e;
                                        return (0, r.jsxs)(
                                            'li',
                                            {
                                                style: { margin: '8px 0' },
                                                children: [
                                                    (0, r.jsx)(s.Text, {
                                                        variant: 'text-md/bold',
                                                        children: t
                                                    }),
                                                    (0, r.jsx)(s.Text, {
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
                (0, r.jsxs)('div', {
                    className: f.collapsablePane,
                    children: [
                        (0, r.jsxs)(s.Clickable, {
                            onClick: () => {
                                S(!_);
                            },
                            className: f.collapsablePaneHeader,
                            children: [
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Modifications'
                                    })
                                }),
                                (0, r.jsx)(c.Z, { direction: _ ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        _ &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(s.FormSection, {
                                        title: 'Status',
                                        tag: s.FormTitleTags.H3,
                                        className: f.formSection,
                                        children: (0, r.jsx)(s.Select, {
                                            serialize: (e) => N(e),
                                            isSelected: (e) => e === v.status,
                                            options: g,
                                            select: (e) => k({ status: e }),
                                            popoutLayerContext: h.O$
                                        })
                                    }),
                                    (0, r.jsx)(s.FormSection, {
                                        title: 'Override Premium Streak Start Date',
                                        tag: s.FormTitleTags.H3,
                                        className: f.formSection,
                                        children: (0, r.jsx)('input', {
                                            type: 'date',
                                            value: null === (l = v.premiumSince) || void 0 === l ? void 0 : l.toISOString().substring(0, 10),
                                            onChange: (e) => k({ premiumStreakStart: e.target.value })
                                        })
                                    }),
                                    (0, r.jsx)(s.FormSection, {
                                        title: 'Override Metadata Ended At Date',
                                        tag: s.FormTitleTags.H3,
                                        className: f.formSection,
                                        children: (0, r.jsx)('input', {
                                            type: 'date',
                                            value: w,
                                            onChange: (e) => k({ endedAt: e.target.value })
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
