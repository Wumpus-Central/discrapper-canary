(n.d(t, { Z: () => y }), n(388685));
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
    var t, n, l, p, y, C;
    let { subscription: O, onUpdated: N } = e,
        [T, E] = r.useState(!1),
        [S, P] = r.useState(!1),
        [w, I] = r.useState(!1),
        [k, R] = r.useState(!1),
        [A, Z] = r.useState(null),
        L = (e) => ((null == e && (e = O.status), e in j) ? j[e] : 'Unknown status '.concat(e)),
        D = (e) => {
            let t = new Date(e);
            return u.default.fromTimestamp(t.getTime());
        },
        M = async (e) => {
            let { status: t = O.status, premiumStreakStart: n, endedAt: a } = e,
                r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            a.forEach(function (t) {
                                var a;
                                ((a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = a));
                            }));
                    }
                    return e;
                })({ subscription_status: t }, null != n ? { premium_streak_started_at: D(n) } : null, null != a ? { ended_at: D(a) } : null);
            (await s.tn.patch({
                url: '/debug/subscriptions/'.concat(O.id),
                body: r,
                rejectWithError: !1
            }),
                N());
        },
        z = async () => {
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
                Z(e.body.message);
            }
            N();
        },
        B = (null == (t = b.GP[O.planIdFromItems]) ? void 0 : t.premiumType) === b.p9.TIER_0,
        F = null == (n = O.metadata) ? void 0 : n.ended_at,
        U = null != F ? new Date(F).toISOString().substring(0, 10) : '',
        G = null != O.trialId,
        V = (null == (l = O.metadata) ? void 0 : l.active_discount_id) != null;
    return (0, a.jsxs)('div', {
        className: i()(f.card, B ? f.gradientWrapperTier0 : f.gradientWrapperTier2),
        children: [
            G &&
                (0, a.jsx)(o.P3F, {
                    className: v.badge,
                    children: (0, a.jsx)(o.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: 'Has Trial'
                    })
                }),
            V &&
                (0, a.jsx)(o.P3F, {
                    className: v.badge,
                    children: (0, a.jsx)(o.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: 'Has Active Discount'
                    })
                }),
            (0, a.jsxs)('div', {
                className: v.subscriptionTextContainer,
                children: [
                    (0, a.jsxs)(o.Text, {
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
                    (0, a.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        children: ['ID: ', O.id, ' ']
                    }),
                    O.status !== h.O0b.ACTIVE &&
                        (0, a.jsxs)(o.Text, {
                            variant: 'text-md/normal',
                            children: ['Dates: ', (0, d.vc)(O.createdAt, 'LL'), ' - ', (0, d.vc)(O.currentPeriodEnd, 'LL')]
                        }),
                    (0, a.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        children: ['Status: ', L()]
                    }),
                    O.status === h.O0b.PAUSED &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)(o.Text, {
                                    variant: 'text-md/normal',
                                    children: ['Pause Reason: ', O.pauseReason in g ? g[O.pauseReason] : 'Unknown pause reason '.concat(O.pauseReason)]
                                }),
                                null != O.pauseEndsAt &&
                                    (0, a.jsxs)(o.Text, {
                                        variant: 'text-md/normal',
                                        children: ['Pause Ends At: ', (0, d.vc)(O.pauseEndsAt, 'LL')]
                                    })
                            ]
                        })
                ]
            }),
            G &&
                (0, a.jsxs)('div', {
                    className: v.collapsablePane,
                    children: [
                        (0, a.jsxs)(o.P3F, {
                            onClick: () => {
                                I(!w);
                            },
                            className: v.collapsablePaneHeader,
                            children: [
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(o.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Trial Info'
                                    })
                                }),
                                (0, a.jsx)(c.Z, { direction: w ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        w &&
                            (0, a.jsxs)('ul', {
                                style: { marginBottom: '15px' },
                                children: [
                                    (0, a.jsxs)('li', {
                                        style: { margin: '8px 0' },
                                        children: [
                                            (0, a.jsx)(o.Text, {
                                                variant: 'text-md/bold',
                                                children: 'trial_id'
                                            }),
                                            (0, a.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: O.trialId
                                            })
                                        ]
                                    }),
                                    (0, a.jsxs)('li', {
                                        style: { margin: '8px 0' },
                                        children: [
                                            (0, a.jsx)(o.Text, {
                                                variant: 'text-md/bold',
                                                children: 'trial_ends_at'
                                            }),
                                            (0, a.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: null != O.trialEndsAt ? (0, d.vc)(O.trialEndsAt, 'LL') : 'N/A'
                                            })
                                        ]
                                    })
                                ]
                            })
                    ]
                }),
            V &&
                (0, a.jsxs)('div', {
                    className: v.collapsablePane,
                    children: [
                        (0, a.jsxs)(o.P3F, {
                            onClick: () => {
                                R(!k);
                            },
                            className: v.collapsablePaneHeader,
                            children: [
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(o.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Active Discount Info'
                                    })
                                }),
                                (0, a.jsx)(c.Z, { direction: k ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        k &&
                            (0, a.jsxs)('ul', {
                                style: { marginBottom: '15px' },
                                children: [
                                    (0, a.jsxs)('li', {
                                        style: { margin: '8px 0' },
                                        children: [
                                            (0, a.jsx)(o.Text, {
                                                variant: 'text-md/bold',
                                                children: 'active_discount_id'
                                            }),
                                            (0, a.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: null == (p = O.metadata) ? void 0 : p.active_discount_id
                                            })
                                        ]
                                    }),
                                    (0, a.jsxs)('li', {
                                        style: { margin: '8px 0' },
                                        children: [
                                            (0, a.jsx)(o.Text, {
                                                variant: 'text-md/bold',
                                                children: 'active_discount_expires_at'
                                            }),
                                            (0, a.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: null == (y = O.metadata) ? void 0 : y.active_discount_expires_at
                                            })
                                        ]
                                    })
                                ]
                            })
                    ]
                }),
            null != O.metadata &&
                (0, a.jsxs)('div', {
                    className: v.collapsablePane,
                    children: [
                        (0, a.jsxs)(o.P3F, {
                            onClick: () => {
                                E(!T);
                            },
                            className: v.collapsablePaneHeader,
                            children: [
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(o.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Metadata'
                                    })
                                }),
                                (0, a.jsx)(c.Z, { direction: T ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        T &&
                            (0, a.jsx)('ul', {
                                style: { marginBottom: '15px' },
                                children: Object.entries(O.metadata).map((e) => {
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
                            P(!S);
                        },
                        className: v.collapsablePaneHeader,
                        children: [
                            (0, a.jsx)('div', {
                                children: (0, a.jsx)(o.Text, {
                                    variant: 'text-md/bold',
                                    children: 'Modifications'
                                })
                            }),
                            (0, a.jsx)(c.Z, { direction: S ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                        ]
                    }),
                    S &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(o.hjN, {
                                    title: 'Status',
                                    tag: o.RB0.H3,
                                    className: v.formSection,
                                    children: (0, a.jsx)(o.PhF, {
                                        serialize: (e) => L(e),
                                        isSelected: (e) => e === O.status,
                                        options: _,
                                        select: (e) => M({ status: e }),
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
                                            onClick: (e) => z(),
                                            children: 'Renew Subscription'
                                        }),
                                        null !== A &&
                                            (0, a.jsx)(o.kzN, {
                                                className: v.error,
                                                onDismiss: () => Z(null),
                                                children: A
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
                                            value: null == (C = O.premiumSince) ? void 0 : C.toISOString().substring(0, 10),
                                            onChange: (e) => M({ premiumStreakStart: e.target.value }),
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
                                        value: U,
                                        onChange: (e) => M({ endedAt: e.target.value })
                                    })
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
