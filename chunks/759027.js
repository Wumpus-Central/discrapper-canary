n.d(t, { Z: () => y }), n(388685);
var a = n(255367),
    r = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(544891),
    o = n(481060),
    c = n(259580),
    d = n(55935),
    u = n(709054),
    m = n(246992),
    p = n(923576),
    x = n(981631),
    h = n(362786),
    b = n(474936),
    f = n(173166),
    v = n(909291);
let _ = {
        [x.O0b.UNPAID]: 'Unpaid',
        [x.O0b.ACTIVE]: 'Active',
        [x.O0b.PAST_DUE]: 'Past Due',
        [x.O0b.CANCELED]: 'Canceled',
        [x.O0b.ENDED]: 'Ended',
        [x.O0b.ACCOUNT_HOLD]: 'Account Hold',
        [x.O0b.BILLING_RETRY]: 'Billing Retry',
        [x.O0b.PAUSED]: 'Paused',
        [x.O0b.PAUSE_PENDING]: 'Pause Pending'
    },
    g = {
        [h.Id.UNKNOWN]: 'Unknown',
        [h.Id.ADMIN]: 'Admin',
        [h.Id.USER]: 'User',
        [h.Id.FRACTIONAL_PREMIUM]: 'Fractional Premium',
        [h.Id.DEFERRED_START]: 'Deferred Start'
    },
    j = [
        {
            label: 'Unpaid',
            value: x.O0b.UNPAID
        },
        {
            label: 'Active',
            value: x.O0b.ACTIVE
        },
        {
            label: 'Past Due',
            value: x.O0b.PAST_DUE
        },
        {
            label: 'Canceled',
            value: x.O0b.CANCELED
        },
        {
            label: 'Ended',
            value: x.O0b.ENDED
        },
        {
            label: 'Account Hold',
            value: x.O0b.ACCOUNT_HOLD
        },
        {
            label: 'Billing Retry',
            value: x.O0b.BILLING_RETRY
        },
        {
            label: 'Paused',
            value: x.O0b.PAUSED
        },
        {
            label: 'Pause Pending',
            value: x.O0b.PAUSE_PENDING
        }
    ];
function y(e) {
    var t, n, l;
    let { subscription: h, onUpdated: y } = e,
        [C, N] = r.useState(!1),
        [O, E] = r.useState(!1),
        [T, S] = r.useState(null),
        P = (e) => ((null == e && (e = h.status), e in _) ? _[e] : 'Unknown status '.concat(e)),
        I = (e) => {
            let t = new Date(e);
            return u.default.fromTimestamp(t.getTime());
        },
        w = async (e) => {
            let { status: t = h.status, premiumStreakStart: n, endedAt: a } = e,
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
                })({ subscription_status: t }, null != n ? { premium_streak_started_at: I(n) } : null, null != a ? { ended_at: I(a) } : null);
            await s.tn.patch({
                url: '/debug/subscriptions/'.concat(h.id),
                body: r,
                rejectWithError: !1
            }),
                y();
        },
        k = async () => {
            try {
                await s.tn.post({
                    url: '/debug/subscriptions/'.concat(h.id, '/transition'),
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
        R = (null == (t = b.GP[h.planIdFromItems]) ? void 0 : t.premiumType) === b.p9.TIER_0,
        A = null == (n = h.metadata) ? void 0 : n.ended_at,
        Z = null != A ? new Date(A).toISOString().substring(0, 10) : '';
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
                                let e = h.planIdFromItems;
                                return null == e ? 'No plan id' : e in b.GP ? b.GP[e].name : 'Unknown plan id '.concat(e);
                            })(),
                            ' '
                        ]
                    }),
                    (0, a.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        children: ['ID: ', h.id, ' ']
                    }),
                    h.status !== x.O0b.ACTIVE &&
                        (0, a.jsxs)(o.Text, {
                            variant: 'text-md/normal',
                            children: ['Dates: ', (0, d.vc)(h.createdAt, 'LL'), ' - ', (0, d.vc)(h.currentPeriodEnd, 'LL')]
                        }),
                    (0, a.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        children: ['Status: ', P()]
                    }),
                    h.status === x.O0b.PAUSED &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)(o.Text, {
                                    variant: 'text-md/normal',
                                    children: ['Pause Reason: ', h.pauseReason in g ? g[h.pauseReason] : 'Unknown pause reason '.concat(h.pauseReason)]
                                }),
                                null != h.pauseEndsAt &&
                                    (0, a.jsxs)(o.Text, {
                                        variant: 'text-md/normal',
                                        children: ['Pause Ends At: ', (0, d.vc)(h.pauseEndsAt, 'LL')]
                                    })
                            ]
                        })
                ]
            }),
            null != h.metadata &&
                (0, a.jsxs)('div', {
                    className: v.collapsablePane,
                    children: [
                        (0, a.jsxs)(o.P3F, {
                            onClick: () => {
                                N(!C);
                            },
                            className: v.collapsablePaneHeader,
                            children: [
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(o.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Metadata'
                                    })
                                }),
                                (0, a.jsx)(c.Z, { direction: C ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        C &&
                            (0, a.jsx)('ul', {
                                style: { marginBottom: '15px' },
                                children: Object.entries(h.metadata).map((e) => {
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
                            E(!O);
                        },
                        className: v.collapsablePaneHeader,
                        children: [
                            (0, a.jsx)('div', {
                                children: (0, a.jsx)(o.Text, {
                                    variant: 'text-md/bold',
                                    children: 'Modifications'
                                })
                            }),
                            (0, a.jsx)(c.Z, { direction: O ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                        ]
                    }),
                    O &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(o.hjN, {
                                    title: 'Status',
                                    tag: o.RB0.H3,
                                    className: v.formSection,
                                    children: (0, a.jsx)(o.PhF, {
                                        serialize: (e) => P(e),
                                        isSelected: (e) => e === h.status,
                                        options: j,
                                        select: (e) => w({ status: e }),
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
                                            onClick: (e) => k(),
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
                                            value: null == (l = h.premiumSince) ? void 0 : l.toISOString().substring(0, 10),
                                            onChange: (e) => w({ premiumStreakStart: e.target.value }),
                                            style: { marginBottom: '8px' }
                                        }),
                                        (0, a.jsx)(p.Z, {})
                                    ]
                                }),
                                (0, a.jsx)(o.hjN, {
                                    title: 'Metadata Ended At Date',
                                    tag: o.RB0.H3,
                                    className: v.formSection,
                                    children: (0, a.jsx)('input', {
                                        type: 'date',
                                        value: Z,
                                        onChange: (e) => w({ endedAt: e.target.value })
                                    })
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
