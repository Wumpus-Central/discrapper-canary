n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(544891),
    s = n(481060),
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
    _ = [
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
    let { subscription: g, onUpdated: v } = e,
        [j, y] = a.useState(!1),
        [C, T] = a.useState(!1),
        [S, N] = a.useState(null),
        O = (e) => ((null == e && (e = g.status), e in f) ? f[e] : 'Unknown status '.concat(e)),
        k = (e) => {
            let t = new Date(e);
            return u.default.fromTimestamp(t.getTime());
        },
        E = async (e) => {
            let { status: t = g.status, premiumStreakStart: n, endedAt: r } = e,
                a = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({ subscription_status: t }, null != n ? { premium_streak_started_at: k(n) } : null, null != r ? { ended_at: k(r) } : null);
            await o.tn.patch({
                url: '/debug/subscriptions/'.concat(g.id),
                body: a,
                rejectWithError: !1
            }),
                v();
        },
        w = async () => {
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
                N(e.body.message);
            }
            v();
        },
        P = (null == (t = h.GP[g.planIdFromItems]) ? void 0 : t.premiumType) === h.p9.TIER_0,
        I = null == (n = g.metadata) ? void 0 : n.ended_at,
        Z = null != I ? new Date(I).toISOString().substring(0, 10) : '';
    return (0, r.jsxs)('div', {
        className: i()(b.card, P ? b.gradientWrapperTier0 : b.gradientWrapperTier2),
        children: [
            (0, r.jsxs)(s.Text, {
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
            (0, r.jsxs)(s.Text, {
                variant: 'text-md/normal',
                children: ['ID: ', g.id, ' ']
            }),
            g.status !== x.O0b.ACTIVE &&
                (0, r.jsxs)(s.Text, {
                    variant: 'text-md/normal',
                    children: ['Dates: ', (0, d.vc)(g.createdAt, 'LL'), ' - ', (0, d.vc)(g.currentPeriodEnd, 'LL')]
                }),
            (0, r.jsxs)(s.Text, {
                style: { marginBottom: '15px' },
                variant: 'text-md/normal',
                children: ['Status: ', O()]
            }),
            null != g.metadata &&
                (0, r.jsxs)('div', {
                    className: p.collapsablePane,
                    children: [
                        (0, r.jsxs)(s.P3F, {
                            onClick: () => {
                                y(!j);
                            },
                            className: p.collapsablePaneHeader,
                            children: [
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Metadata'
                                    })
                                }),
                                (0, r.jsx)(c.Z, { direction: j ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        j &&
                            (0, r.jsx)('ul', {
                                style: { marginBottom: '15px' },
                                children: Object.entries(g.metadata).map((e) => {
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
                className: p.collapsablePane,
                children: [
                    (0, r.jsxs)(s.P3F, {
                        onClick: () => {
                            T(!C);
                        },
                        className: p.collapsablePaneHeader,
                        children: [
                            (0, r.jsx)('div', {
                                children: (0, r.jsx)(s.Text, {
                                    variant: 'text-md/bold',
                                    children: 'Modifications'
                                })
                            }),
                            (0, r.jsx)(c.Z, { direction: C ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                        ]
                    }),
                    C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(s.hjN, {
                                    title: 'Status',
                                    tag: s.RB0.H3,
                                    className: p.formSection,
                                    children: (0, r.jsx)(s.PhF, {
                                        serialize: (e) => O(e),
                                        isSelected: (e) => e === g.status,
                                        options: _,
                                        select: (e) => E({ status: e }),
                                        popoutLayerContext: m.O$
                                    })
                                }),
                                (0, r.jsxs)(s.hjN, {
                                    title: 'Renew',
                                    tag: s.RB0.H3,
                                    className: p.formSection,
                                    children: [
                                        (0, r.jsx)(s.zxk, {
                                            size: s.zxk.Sizes.SMALL,
                                            onClick: (e) => w(),
                                            children: 'Renew Subscription'
                                        }),
                                        null !== S &&
                                            (0, r.jsx)(s.kzN, {
                                                className: p.error,
                                                onDismiss: () => N(null),
                                                children: S
                                            })
                                    ]
                                }),
                                (0, r.jsx)(s.hjN, {
                                    title: 'Override Premium Streak Start Date',
                                    tag: s.RB0.H3,
                                    className: p.formSection,
                                    children: (0, r.jsx)('input', {
                                        type: 'date',
                                        value: null == (l = g.premiumSince) ? void 0 : l.toISOString().substring(0, 10),
                                        onChange: (e) => E({ premiumStreakStart: e.target.value })
                                    })
                                }),
                                (0, r.jsx)(s.hjN, {
                                    title: 'Override Metadata Ended At Date',
                                    tag: s.RB0.H3,
                                    className: p.formSection,
                                    children: (0, r.jsx)('input', {
                                        type: 'date',
                                        value: Z,
                                        onChange: (e) => E({ endedAt: e.target.value })
                                    })
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
