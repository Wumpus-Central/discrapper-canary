n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var a,
    r,
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
let _ = {
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
function T(e) {
    var t, n, a;
    let { subscription: r, onUpdated: l } = e,
        [i, c] = s.useState(!1),
        [T, N] = s.useState(!1),
        [S, y] = s.useState(null),
        I = (e) => ((null == e && (e = r.status), e in _) ? _[e] : 'Unknown status '.concat(e)),
        E = (e) => {
            let t = new Date(e);
            return f.default.fromTimestamp(t.getTime());
        },
        Z = async (e) => {
            let { status: t = r.status, premiumStreakStart: n, endedAt: a } = e,
                i = {
                    subscription_status: t,
                    ...(null != n ? { premium_streak_started_at: E(n) } : null),
                    ...(null != a ? { ended_at: E(a) } : null)
                };
            await u.tn.patch({
                url: '/debug/subscriptions/'.concat(r.id),
                body: i,
                rejectWithError: !1
            }),
                l();
        },
        w = async () => {
            try {
                await u.tn.post({
                    url: '/debug/subscriptions/'.concat(r.id, '/transition'),
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
        k = (null === (t = g.GP[r.planIdFromItems]) || void 0 === t ? void 0 : t.premiumType) === g.p9.TIER_0,
        O = null === (n = r.metadata) || void 0 === n ? void 0 : n.ended_at,
        R = null != O ? new Date(O).toISOString().substring(0, 10) : '';
    return (0, o.jsx)(o.Fragment, {
        children: (0, o.jsxs)('div', {
            className: d()(j.card, k ? j.gradientWrapperTier0 : j.gradientWrapperTier2),
            children: [
                (0, o.jsxs)(h.Text, {
                    variant: 'text-md/normal',
                    children: [
                        'Type: ',
                        (() => {
                            let e = r.planIdFromItems;
                            return null == e ? 'No plan id' : e in g.GP ? g.GP[e].name : 'Unknown plan id '.concat(e);
                        })(),
                        ' '
                    ]
                }),
                (0, o.jsxs)(h.Text, {
                    variant: 'text-md/normal',
                    children: ['ID: ', r.id, ' ']
                }),
                r.status !== b.O0b.ACTIVE &&
                    (0, o.jsxs)(h.Text, {
                        variant: 'text-md/normal',
                        children: ['Dates: ', (0, x.vc)(r.createdAt, 'LL'), ' - ', (0, x.vc)(r.currentPeriodEnd, 'LL')]
                    }),
                (0, o.jsxs)(h.Text, {
                    style: { marginBottom: '15px' },
                    variant: 'text-md/normal',
                    children: ['Status: ', I()]
                }),
                null != r.metadata &&
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
                                    children: Object.entries(r.metadata).map((e) => {
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
                                N(!T);
                            },
                            className: v.collapsablePaneHeader,
                            children: [
                                (0, o.jsx)('div', {
                                    children: (0, o.jsx)(h.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Modifications'
                                    })
                                }),
                                (0, o.jsx)(m.Z, { direction: T ? m.Z.Directions.UP : m.Z.Directions.DOWN })
                            ]
                        }),
                        T &&
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(h.FormSection, {
                                        title: 'Status',
                                        tag: h.FormTitleTags.H3,
                                        className: v.formSection,
                                        children: (0, o.jsx)(h.Select, {
                                            serialize: (e) => I(e),
                                            isSelected: (e) => e === r.status,
                                            options: C,
                                            select: (e) => Z({ status: e }),
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
                                            null !== S &&
                                                (0, o.jsx)(h.FormErrorBlock, {
                                                    className: v.error,
                                                    onDismiss: () => y(null),
                                                    children: S
                                                })
                                        ]
                                    }),
                                    (0, o.jsx)(h.FormSection, {
                                        title: 'Override Premium Streak Start Date',
                                        tag: h.FormTitleTags.H3,
                                        className: v.formSection,
                                        children: (0, o.jsx)('input', {
                                            type: 'date',
                                            value: null === (a = r.premiumSince) || void 0 === a ? void 0 : a.toISOString().substring(0, 10),
                                            onChange: (e) => Z({ premiumStreakStart: e.target.value })
                                        })
                                    }),
                                    (0, o.jsx)(h.FormSection, {
                                        title: 'Override Metadata Ended At Date',
                                        tag: h.FormTitleTags.H3,
                                        className: v.formSection,
                                        children: (0, o.jsx)('input', {
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
((l = a || (a = {}))[(l.DEFAULT = 0)] = 'DEFAULT'), ((i = r || (r = {}))[(i.RENEW = 2)] = 'RENEW');
