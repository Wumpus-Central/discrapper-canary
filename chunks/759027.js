n.d(t, { Z: () => y }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(544891),
    o = n(481060),
    c = n(259580),
    d = n(55935),
    u = n(709054),
    m = n(246992),
    x = n(923576),
    h = n(981631),
    p = n(362786),
    b = n(474936),
    f = n(173166),
    v = n(909291);
let j = {
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
    g = {
        [p.Id.UNKNOWN]: 'Unknown',
        [p.Id.ADMIN]: 'Admin',
        [p.Id.USER]: 'User',
        [p.Id.FRACTIONAL_PREMIUM]: 'Fractional Premium',
        [p.Id.DEFERRED_START]: 'Deferred Start'
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
function y(e) {
    var t, n, l;
    let { subscription: p, onUpdated: y } = e,
        [O, C] = r.useState(!1),
        [E, N] = r.useState(!1),
        [T, S] = r.useState(null),
        P = (e) => ((null == e && (e = p.status), e in j) ? j[e] : 'Unknown status '.concat(e)),
        w = (e) => {
            let t = new Date(e);
            return u.default.fromTimestamp(t.getTime());
        },
        k = async (e) => {
            let { status: t = p.status, premiumStreakStart: n, endedAt: a } = e,
                r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            a.forEach(function (t) {
                                var a;
                                (a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = a);
                            });
                    }
                    return e;
                })({ subscription_status: t }, null != n ? { premium_streak_started_at: w(n) } : null, null != a ? { ended_at: w(a) } : null);
            await s.tn.patch({
                url: '/debug/subscriptions/'.concat(p.id),
                body: r,
                rejectWithError: !1
            }),
                y();
        },
        I = async () => {
            try {
                await s.tn.post({
                    url: '/debug/subscriptions/'.concat(p.id, '/transition'),
                    body: {
                        target_datetime: new Date().toISOString(),
                        payment_type: 0,
                        transition: 2,
                        send_reminder_email: !1
                    },
                    rejectWithError: !1
                });
            } catch (e) {
                S(e.body.message);
            }
            y();
        },
        R = (null == (t = b.GP[p.planIdFromItems]) ? void 0 : t.premiumType) === b.p9.TIER_0,
        Z = null == (n = p.metadata) ? void 0 : n.ended_at,
        L = null != Z ? new Date(Z).toISOString().substring(0, 10) : '';
    return (0, a.jsxs)('div', {
        className: i()(f.card, R ? f.gradientWrapperTier0 : f.gradientWrapperTier2),
        children: [
            (0, a.jsxs)('div', {
                className: v.subscriptionTextContainer,
                children: [
                    (0, a.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        children: [
                            'Type: ',
                            (() => {
                                let e = p.planIdFromItems;
                                return null == e ? 'No plan id' : e in b.GP ? b.GP[e].name : 'Unknown plan id '.concat(e);
                            })(),
                            ' '
                        ]
                    }),
                    (0, a.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        children: ['ID: ', p.id, ' ']
                    }),
                    p.status !== h.O0b.ACTIVE &&
                        (0, a.jsxs)(o.Text, {
                            variant: 'text-md/normal',
                            children: ['Dates: ', (0, d.vc)(p.createdAt, 'LL'), ' - ', (0, d.vc)(p.currentPeriodEnd, 'LL')]
                        }),
                    (0, a.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        children: ['Status: ', P()]
                    }),
                    p.status === h.O0b.PAUSED &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)(o.Text, {
                                    variant: 'text-md/normal',
                                    children: ['Pause Reason: ', p.pauseReason in g ? g[p.pauseReason] : 'Unknown pause reason '.concat(p.pauseReason)]
                                }),
                                null != p.pauseEndsAt &&
                                    (0, a.jsxs)(o.Text, {
                                        variant: 'text-md/normal',
                                        children: ['Pause Ends At: ', (0, d.vc)(p.pauseEndsAt, 'LL')]
                                    })
                            ]
                        })
                ]
            }),
            null != p.metadata &&
                (0, a.jsxs)('div', {
                    className: v.collapsablePane,
                    children: [
                        (0, a.jsxs)(o.P3F, {
                            onClick: () => {
                                C(!O);
                            },
                            className: v.collapsablePaneHeader,
                            children: [
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(o.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Metadata'
                                    })
                                }),
                                (0, a.jsx)(c.Z, { direction: O ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        O &&
                            (0, a.jsx)('ul', {
                                style: { marginBottom: '15px' },
                                children: Object.entries(p.metadata).map((e) => {
                                    let [t, n] = e;
                                    return (0, a.jsxs)(
                                        'li',
                                        {
                                            style: { margin: '8px 0' },
                                            children: [
                                                (0, a.jsx)(o.Text, {
                                                    variant: 'text-md/bold',
                                                    children: t
                                                }),
                                                (0, a.jsx)(o.Text, {
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
                className: v.collapsablePane,
                children: [
                    (0, a.jsxs)(o.P3F, {
                        onClick: () => {
                            N(!E);
                        },
                        className: v.collapsablePaneHeader,
                        children: [
                            (0, a.jsx)('div', {
                                children: (0, a.jsx)(o.Text, {
                                    variant: 'text-md/bold',
                                    children: 'Modifications'
                                })
                            }),
                            (0, a.jsx)(c.Z, { direction: E ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                        ]
                    }),
                    E &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(o.hjN, {
                                    title: 'Status',
                                    tag: o.RB0.H3,
                                    className: v.formSection,
                                    children: (0, a.jsx)(o.PhF, {
                                        serialize: (e) => P(e),
                                        isSelected: (e) => e === p.status,
                                        options: _,
                                        select: (e) => k({ status: e }),
                                        popoutLayerContext: m.O$
                                    })
                                }),
                                (0, a.jsxs)(o.hjN, {
                                    title: 'Renew',
                                    tag: o.RB0.H3,
                                    className: v.formSection,
                                    children: [
                                        (0, a.jsx)(o.zxk, {
                                            size: o.zxk.Sizes.SMALL,
                                            onClick: (e) => I(),
                                            children: 'Renew Subscription'
                                        }),
                                        null !== T &&
                                            (0, a.jsx)(o.kzN, {
                                                className: v.error,
                                                onDismiss: () => S(null),
                                                children: T
                                            })
                                    ]
                                }),
                                (0, a.jsxs)(o.hjN, {
                                    title: 'Premium Streak Start Date',
                                    tag: o.RB0.H3,
                                    className: v.formSection,
                                    children: [
                                        (0, a.jsx)('input', {
                                            type: 'date',
                                            value: null == (l = p.premiumSince) ? void 0 : l.toISOString().substring(0, 10),
                                            onChange: (e) => k({ premiumStreakStart: e.target.value }),
                                            style: { marginBottom: '8px' }
                                        }),
                                        (0, a.jsx)(x.Z, {})
                                    ]
                                }),
                                (0, a.jsx)(o.hjN, {
                                    title: 'Metadata Ended At Date',
                                    tag: o.RB0.H3,
                                    className: v.formSection,
                                    children: (0, a.jsx)('input', {
                                        type: 'date',
                                        value: L,
                                        onChange: (e) => k({ endedAt: e.target.value })
                                    })
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
