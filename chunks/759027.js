(a.d(t, { Z: () => y }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(544891),
    o = a(481060),
    c = a(259580),
    d = a(55935),
    u = a(709054),
    m = a(246992),
    x = a(923576),
    p = a(981631),
    h = a(362786),
    b = a(474936),
    f = a(173166),
    v = a(909291);
let j = {
        [p.O0b.UNPAID]: 'Unpaid',
        [p.O0b.ACTIVE]: 'Active',
        [p.O0b.PAST_DUE]: 'Past Due',
        [p.O0b.CANCELED]: 'Canceled',
        [p.O0b.ENDED]: 'Ended',
        [p.O0b.ACCOUNT_HOLD]: 'Account Hold',
        [p.O0b.BILLING_RETRY]: 'Billing Retry',
        [p.O0b.PAUSED]: 'Paused',
        [p.O0b.PAUSE_PENDING]: 'Pause Pending'
    },
    g = {
        [h.Id.UNKNOWN]: 'Unknown',
        [h.Id.ADMIN]: 'Admin',
        [h.Id.USER]: 'User',
        [h.Id.FRACTIONAL_PREMIUM]: 'Fractional Premium',
        [h.Id.DEFERRED_START]: 'Deferred Start'
    },
    _ = [
        {
            label: 'Unpaid',
            value: p.O0b.UNPAID
        },
        {
            label: 'Active',
            value: p.O0b.ACTIVE
        },
        {
            label: 'Past Due',
            value: p.O0b.PAST_DUE
        },
        {
            label: 'Canceled',
            value: p.O0b.CANCELED
        },
        {
            label: 'Ended',
            value: p.O0b.ENDED
        },
        {
            label: 'Account Hold',
            value: p.O0b.ACCOUNT_HOLD
        },
        {
            label: 'Billing Retry',
            value: p.O0b.BILLING_RETRY
        },
        {
            label: 'Paused',
            value: p.O0b.PAUSED
        },
        {
            label: 'Pause Pending',
            value: p.O0b.PAUSE_PENDING
        }
    ];
function y(e) {
    var t, a, l, h, y, C, N;
    let { subscription: O, onUpdated: T } = e,
        [E, S] = r.useState(!1),
        [P, w] = r.useState(!1),
        [I, R] = r.useState(!1),
        [k, Z] = r.useState(!1),
        [A, D] = r.useState(null),
        L = (e) => ((null == e && (e = O.status), e in j) ? j[e] : 'Unknown status '.concat(e)),
        M = (e) => {
            let t = new Date(e);
            return u.default.fromTimestamp(t.getTime());
        },
        F = async (e) => {
            let { status: t = O.status, premiumStreakStart: a, endedAt: n } = e,
                r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(a);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(a).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                ((n = a[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n));
                            }));
                    }
                    return e;
                })({ subscription_status: t }, null != a ? { premium_streak_started_at: M(a) } : null, null != n ? { ended_at: M(n) } : null);
            (await s.tn.patch({
                url: '/debug/subscriptions/'.concat(O.id),
                body: r,
                rejectWithError: !1
            }),
                T());
        },
        B = async () => {
            try {
                await s.tn.post({
                    url: '/debug/subscriptions/'.concat(O.id, '/transition'),
                    body: {
                        target_datetime: new Date().toISOString(),
                        payment_type: 0,
                        transition: 2,
                        send_reminder_email: !1
                    },
                    rejectWithError: !1
                });
            } catch (e) {
                D(e.body.message);
            }
            T();
        },
        z = (null == (t = b.GP[O.planIdFromItems]) ? void 0 : t.premiumType) === b.p9.TIER_0,
        U = null == (a = O.metadata) ? void 0 : a.ended_at,
        G = null != U ? new Date(U).toISOString().substring(0, 10) : '',
        V = O.hasActiveTrial,
        H = (null == (l = O.metadata) ? void 0 : l.active_discount_id) != null;
    return (0, n.jsxs)('div', {
        className: i()(f.card, z ? f.gradientWrapperTier0 : f.gradientWrapperTier2),
        children: [
            V &&
                (0, n.jsx)(o.P3F, {
                    className: v.badge,
                    children: (0, n.jsx)(o.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: 'Has Trial'
                    })
                }),
            H &&
                (0, n.jsx)(o.P3F, {
                    className: v.badge,
                    children: (0, n.jsx)(o.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: 'Has Active Discount'
                    })
                }),
            (0, n.jsxs)('div', {
                className: v.subscriptionTextContainer,
                children: [
                    (0, n.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        children: [
                            'Type: ',
                            (() => {
                                let e = O.planIdFromItems;
                                return null == e ? 'No plan id' : e in b.GP ? b.GP[e].name : 'Unknown plan id '.concat(e);
                            })(),
                            ' '
                        ]
                    }),
                    (0, n.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        children: ['ID: ', O.id, ' ']
                    }),
                    O.status !== p.O0b.ACTIVE &&
                        (0, n.jsxs)(o.Text, {
                            variant: 'text-md/normal',
                            children: ['Dates: ', (0, d.vc)(O.createdAt, 'LL'), ' - ', (0, d.vc)(O.currentPeriodEnd, 'LL')]
                        }),
                    (0, n.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        children: ['Status: ', L()]
                    }),
                    O.status === p.O0b.PAUSED &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(o.Text, {
                                    variant: 'text-md/normal',
                                    children: ['Pause Reason: ', O.pauseReason in g ? g[O.pauseReason] : 'Unknown pause reason '.concat(O.pauseReason)]
                                }),
                                null != O.pauseEndsAt &&
                                    (0, n.jsxs)(o.Text, {
                                        variant: 'text-md/normal',
                                        children: ['Pause Ends At: ', (0, d.vc)(O.pauseEndsAt, 'LL')]
                                    })
                            ]
                        })
                ]
            }),
            V &&
                (0, n.jsxs)('div', {
                    className: v.collapsablePane,
                    children: [
                        (0, n.jsxs)(o.P3F, {
                            onClick: () => {
                                R(!I);
                            },
                            className: v.collapsablePaneHeader,
                            children: [
                                (0, n.jsx)('div', {
                                    children: (0, n.jsx)(o.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Trial Info'
                                    })
                                }),
                                (0, n.jsx)(c.Z, { direction: I ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        I &&
                            (0, n.jsxs)('ul', {
                                className: v.collapsiblePaneList,
                                children: [
                                    (0, n.jsxs)('li', {
                                        children: [
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-md/bold',
                                                children: 'trial_id'
                                            }),
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: O.trialId
                                            })
                                        ]
                                    }),
                                    (0, n.jsxs)('li', {
                                        children: [
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-md/bold',
                                                children: 'trial_ends_at'
                                            }),
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: null != O.trialEndsAt ? (0, d.vc)(O.trialEndsAt, 'LL') : 'N/A'
                                            })
                                        ]
                                    })
                                ]
                            })
                    ]
                }),
            H &&
                (0, n.jsxs)('div', {
                    className: v.collapsablePane,
                    children: [
                        (0, n.jsxs)(o.P3F, {
                            onClick: () => {
                                Z(!k);
                            },
                            className: v.collapsablePaneHeader,
                            children: [
                                (0, n.jsx)('div', {
                                    children: (0, n.jsx)(o.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Active Discount Info'
                                    })
                                }),
                                (0, n.jsx)(c.Z, { direction: k ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        k &&
                            (0, n.jsxs)('ul', {
                                className: v.collapsiblePaneList,
                                children: [
                                    (0, n.jsxs)('li', {
                                        children: [
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-md/bold',
                                                children: 'active_discount_id'
                                            }),
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: null == (h = O.metadata) ? void 0 : h.active_discount_id
                                            })
                                        ]
                                    }),
                                    (0, n.jsxs)('li', {
                                        children: [
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-md/bold',
                                                children: 'active_discount_expires_at'
                                            }),
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: (null == (y = O.metadata) ? void 0 : y.active_discount_expires_at) != null ? (0, d.vc)(new Date(null == (C = O.metadata) ? void 0 : C.active_discount_expires_at), 'LL') : 'N/A'
                                            })
                                        ]
                                    })
                                ]
                            })
                    ]
                }),
            null != O.metadata &&
                (0, n.jsxs)('div', {
                    className: v.collapsablePane,
                    children: [
                        (0, n.jsxs)(o.P3F, {
                            onClick: () => {
                                S(!E);
                            },
                            className: v.collapsablePaneHeader,
                            children: [
                                (0, n.jsx)('div', {
                                    children: (0, n.jsx)(o.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Metadata'
                                    })
                                }),
                                (0, n.jsx)(c.Z, { direction: E ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        E &&
                            (0, n.jsx)('ul', {
                                className: v.collapsiblePaneList,
                                children: Object.entries(O.metadata).map((e) => {
                                    let [t, a] = e;
                                    return (0, n.jsxs)(
                                        'li',
                                        {
                                            children: [
                                                (0, n.jsx)(o.Text, {
                                                    variant: 'text-md/bold',
                                                    children: t
                                                }),
                                                (0, n.jsx)(o.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: a
                                                })
                                            ]
                                        },
                                        t
                                    );
                                })
                            })
                    ]
                }),
            (0, n.jsxs)('div', {
                className: v.collapsablePane,
                children: [
                    (0, n.jsxs)(o.P3F, {
                        onClick: () => {
                            w(!P);
                        },
                        className: v.collapsablePaneHeader,
                        children: [
                            (0, n.jsx)('div', {
                                children: (0, n.jsx)(o.Text, {
                                    variant: 'text-md/bold',
                                    children: 'Modifications'
                                })
                            }),
                            (0, n.jsx)(c.Z, { direction: P ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                        ]
                    }),
                    P &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(o.hjN, {
                                    title: 'Status',
                                    tag: o.RB0.H3,
                                    className: v.formSection,
                                    children: (0, n.jsx)(o.PhF, {
                                        serialize: (e) => L(e),
                                        isSelected: (e) => e === O.status,
                                        options: _,
                                        select: (e) => F({ status: e }),
                                        popoutLayerContext: m.O$
                                    })
                                }),
                                (0, n.jsxs)(o.hjN, {
                                    title: 'Renew',
                                    tag: o.RB0.H3,
                                    className: v.formSection,
                                    children: [
                                        (0, n.jsx)(o.zxk, {
                                            variant: 'primary',
                                            size: 'sm',
                                            text: 'Renew Subscription',
                                            onClick: (e) => B()
                                        }),
                                        null !== A &&
                                            (0, n.jsx)(o.kzN, {
                                                className: v.error,
                                                onDismiss: () => D(null),
                                                children: A
                                            })
                                    ]
                                }),
                                (0, n.jsxs)(o.hjN, {
                                    title: 'Premium Streak Start Date',
                                    tag: o.RB0.H3,
                                    className: v.formSection,
                                    children: [
                                        (0, n.jsx)('input', {
                                            type: 'date',
                                            value: null == (N = O.premiumSince) ? void 0 : N.toISOString().substring(0, 10),
                                            onChange: (e) => F({ premiumStreakStart: e.target.value }),
                                            style: { marginBottom: '8px' }
                                        }),
                                        (0, n.jsx)(x.Z, {})
                                    ]
                                }),
                                (0, n.jsx)(o.hjN, {
                                    title: 'Metadata Ended At Date',
                                    tag: o.RB0.H3,
                                    className: v.formSection,
                                    children: (0, n.jsx)('input', {
                                        type: 'date',
                                        value: G,
                                        onChange: (e) => F({ endedAt: e.target.value })
                                    })
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
