n.d(t, { Z: () => _ }), n(388685);
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
    x = n(981631),
    h = n(362786),
    p = n(474936),
    b = n(336579),
    f = n(173166);
let v = {
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
function _(e) {
    var t, n, l;
    let { subscription: h, onUpdated: _ } = e,
        [y, O] = r.useState(!1),
        [C, E] = r.useState(!1),
        [N, S] = r.useState(null),
        T = (e) => ((null == e && (e = h.status), e in v) ? v[e] : 'Unknown status '.concat(e)),
        P = (e) => {
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
                })({ subscription_status: t }, null != n ? { premium_streak_started_at: P(n) } : null, null != a ? { ended_at: P(a) } : null);
            await s.tn.patch({
                url: '/debug/subscriptions/'.concat(h.id),
                body: r,
                rejectWithError: !1
            }),
                _();
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
            _();
        },
        I = (null == (t = p.GP[h.planIdFromItems]) ? void 0 : t.premiumType) === p.p9.TIER_0,
        R = null == (n = h.metadata) ? void 0 : n.ended_at,
        Z = null != R ? new Date(R).toISOString().substring(0, 10) : '';
    return (0, a.jsxs)('div', {
        className: i()(f.card, I ? f.gradientWrapperTier0 : f.gradientWrapperTier2),
        children: [
            (0, a.jsxs)('div', {
                className: b.subscriptionTextContainer,
                children: [
                    (0, a.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        children: [
                            'Type: ',
                            (() => {
                                let e = h.planIdFromItems;
                                return null == e ? 'No plan id' : e in p.GP ? p.GP[e].name : 'Unknown plan id '.concat(e);
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
                        children: ['Status: ', T()]
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
                    className: b.collapsablePane,
                    children: [
                        (0, a.jsxs)(o.P3F, {
                            onClick: () => {
                                O(!y);
                            },
                            className: b.collapsablePaneHeader,
                            children: [
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(o.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Metadata'
                                    })
                                }),
                                (0, a.jsx)(c.Z, { direction: y ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        y &&
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
                className: b.collapsablePane,
                children: [
                    (0, a.jsxs)(o.P3F, {
                        onClick: () => {
                            E(!C);
                        },
                        className: b.collapsablePaneHeader,
                        children: [
                            (0, a.jsx)('div', {
                                children: (0, a.jsx)(o.Text, {
                                    variant: 'text-md/bold',
                                    children: 'Modifications'
                                })
                            }),
                            (0, a.jsx)(c.Z, { direction: C ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                        ]
                    }),
                    C &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(o.hjN, {
                                    title: 'Status',
                                    tag: o.RB0.H3,
                                    className: b.formSection,
                                    children: (0, a.jsx)(o.PhF, {
                                        serialize: (e) => T(e),
                                        isSelected: (e) => e === h.status,
                                        options: j,
                                        select: (e) => w({ status: e }),
                                        popoutLayerContext: m.O$
                                    })
                                }),
                                (0, a.jsxs)(o.hjN, {
                                    title: 'Renew',
                                    tag: o.RB0.H3,
                                    className: b.formSection,
                                    children: [
                                        (0, a.jsx)(o.zxk, {
                                            size: o.zxk.Sizes.SMALL,
                                            onClick: (e) => k(),
                                            children: 'Renew Subscription'
                                        }),
                                        null !== N &&
                                            (0, a.jsx)(o.kzN, {
                                                className: b.error,
                                                onDismiss: () => S(null),
                                                children: N
                                            })
                                    ]
                                }),
                                (0, a.jsx)(o.hjN, {
                                    title: 'Override Premium Streak Start Date',
                                    tag: o.RB0.H3,
                                    className: b.formSection,
                                    children: (0, a.jsx)('input', {
                                        type: 'date',
                                        value: null == (l = h.premiumSince) ? void 0 : l.toISOString().substring(0, 10),
                                        onChange: (e) => w({ premiumStreakStart: e.target.value })
                                    })
                                }),
                                (0, a.jsx)(o.hjN, {
                                    title: 'Override Metadata Ended At Date',
                                    tag: o.RB0.H3,
                                    className: b.formSection,
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
