n.d(t, { Z: () => g }), n(388685);
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
    h = n(474936),
    p = n(336579),
    b = n(173166);
let f = {
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
    v = [
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
function g(e) {
    var t, n, l;
    let { subscription: g, onUpdated: j } = e,
        [_, y] = r.useState(!1),
        [C, O] = r.useState(!1),
        [E, N] = r.useState(null),
        T = (e) => ((null == e && (e = g.status), e in f) ? f[e] : 'Unknown status '.concat(e)),
        S = (e) => {
            let t = new Date(e);
            return u.default.fromTimestamp(t.getTime());
        },
        P = async (e) => {
            let { status: t = g.status, premiumStreakStart: n, endedAt: a } = e,
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
                })({ subscription_status: t }, null != n ? { premium_streak_started_at: S(n) } : null, null != a ? { ended_at: S(a) } : null);
            await s.tn.patch({
                url: '/debug/subscriptions/'.concat(g.id),
                body: r,
                rejectWithError: !1
            }),
                j();
        },
        w = async () => {
            try {
                await s.tn.post({
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
                N(e.body.message);
            }
            j();
        },
        k = (null == (t = h.GP[g.planIdFromItems]) ? void 0 : t.premiumType) === h.p9.TIER_0,
        I = null == (n = g.metadata) ? void 0 : n.ended_at,
        R = null != I ? new Date(I).toISOString().substring(0, 10) : '';
    return (0, a.jsxs)('div', {
        className: i()(b.card, k ? b.gradientWrapperTier0 : b.gradientWrapperTier2),
        children: [
            (0, a.jsxs)(o.Text, {
                variant: 'text-md/normal',
                children: [
                    'Type: ',
                    (() => {
                        let e = g.planIdFromItems;
                        return null == e ? 'No plan id' : e in h.GP ? h.GP[e].name : 'Unknown plan id '.concat(e);
                    })(),
                    ' '
                ]
            }),
            (0, a.jsxs)(o.Text, {
                variant: 'text-md/normal',
                children: ['ID: ', g.id, ' ']
            }),
            g.status !== x.O0b.ACTIVE &&
                (0, a.jsxs)(o.Text, {
                    variant: 'text-md/normal',
                    children: ['Dates: ', (0, d.vc)(g.createdAt, 'LL'), ' - ', (0, d.vc)(g.currentPeriodEnd, 'LL')]
                }),
            (0, a.jsxs)(o.Text, {
                style: { marginBottom: '15px' },
                variant: 'text-md/normal',
                children: ['Status: ', T()]
            }),
            null != g.metadata &&
                (0, a.jsxs)('div', {
                    className: p.collapsablePane,
                    children: [
                        (0, a.jsxs)(o.P3F, {
                            onClick: () => {
                                y(!_);
                            },
                            className: p.collapsablePaneHeader,
                            children: [
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(o.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Metadata'
                                    })
                                }),
                                (0, a.jsx)(c.Z, { direction: _ ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        _ &&
                            (0, a.jsx)('ul', {
                                style: { marginBottom: '15px' },
                                children: Object.entries(g.metadata).map((e) => {
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
                className: p.collapsablePane,
                children: [
                    (0, a.jsxs)(o.P3F, {
                        onClick: () => {
                            O(!C);
                        },
                        className: p.collapsablePaneHeader,
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
                                    className: p.formSection,
                                    children: (0, a.jsx)(o.PhF, {
                                        serialize: (e) => T(e),
                                        isSelected: (e) => e === g.status,
                                        options: v,
                                        select: (e) => P({ status: e }),
                                        popoutLayerContext: m.O$
                                    })
                                }),
                                (0, a.jsxs)(o.hjN, {
                                    title: 'Renew',
                                    tag: o.RB0.H3,
                                    className: p.formSection,
                                    children: [
                                        (0, a.jsx)(o.zxk, {
                                            size: o.zxk.Sizes.SMALL,
                                            onClick: (e) => w(),
                                            children: 'Renew Subscription'
                                        }),
                                        null !== E &&
                                            (0, a.jsx)(o.kzN, {
                                                className: p.error,
                                                onDismiss: () => N(null),
                                                children: E
                                            })
                                    ]
                                }),
                                (0, a.jsx)(o.hjN, {
                                    title: 'Override Premium Streak Start Date',
                                    tag: o.RB0.H3,
                                    className: p.formSection,
                                    children: (0, a.jsx)('input', {
                                        type: 'date',
                                        value: null == (l = g.premiumSince) ? void 0 : l.toISOString().substring(0, 10),
                                        onChange: (e) => P({ premiumStreakStart: e.target.value })
                                    })
                                }),
                                (0, a.jsx)(o.hjN, {
                                    title: 'Override Metadata Ended At Date',
                                    tag: o.RB0.H3,
                                    className: p.formSection,
                                    children: (0, a.jsx)('input', {
                                        type: 'date',
                                        value: R,
                                        onChange: (e) => P({ endedAt: e.target.value })
                                    })
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
