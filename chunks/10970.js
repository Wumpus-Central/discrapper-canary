(n.d(t, { Z: () => x }), n(997841));
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(481060),
    a = n(601911),
    l = n(887818),
    o = n(824856),
    c = n(565138),
    d = n(430824),
    u = n(55563),
    m = n(171246),
    p = n(263519),
    g = n(63487),
    h = n(981631),
    f = n(388032),
    b = n(831169);
function x(e) {
    var t;
    let { app: n, currentSubscription: p, currentListing: h, alternativeListings: x, navigateToHome: j, subscriptionGroup: C, renewalSkuId: O } = e,
        E = (0, a.y)(n, 100),
        v = (0, m.KK)(C.flags),
        S = v ? s.QTo : s.tBG,
        T = v ? f.intl.string(f.t['46YF2N']) : f.intl.string(f.t.fFyGiI),
        N = null == (t = p.metadata) ? void 0 : t.application_subscription_guild_id,
        I = (0, r.e7)([d.Z], () => (v && null != N ? d.Z.getGuild(N) : void 0), [N, v]),
        y = (0, r.e7)(
            [u.Z],
            () => {
                if (null != O) return u.Z.get(O);
            },
            [O]
        ),
        A = (0, g.p)(p.currentPeriodEnd);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: b.header,
                children: [
                    null != E &&
                        (0, i.jsx)(s.Eep, {
                            src: E.href,
                            imageClassName: b.appIcon,
                            width: 48,
                            height: 48
                        }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.X6q, {
                                variant: 'heading-xl/semibold',
                                children: n.name
                            }),
                            (0, i.jsxs)('div', {
                                className: b.subInfo,
                                children: [
                                    (0, i.jsxs)(s.X6q, {
                                        variant: 'heading-md/normal',
                                        className: b.subInfoType,
                                        children: [
                                            (0, i.jsx)(S, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            ' ',
                                            T
                                        ]
                                    }),
                                    null != I &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(s.Text, {
                                                    variant: 'text-md/normal',
                                                    children: '\u2022'
                                                }),
                                                (0, i.jsxs)('span', {
                                                    className: b.guildSubscription,
                                                    children: [
                                                        (0, i.jsx)(c.Z, {
                                                            guild: I,
                                                            size: c.Z.Sizes.SMOL
                                                        }),
                                                        (0, i.jsx)(s.X6q, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'text-muted',
                                                            children: f.intl.format(f.t['7ZD8p6'], { guildName: I.name })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(l.Z, {
                children: (e) =>
                    (0, i.jsxs)('div', {
                        className: b.planNotice,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: f.intl.string(f.t['goe+ho'])
                            }),
                            e &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/normal',
                                            children: f.intl.format(f.t['Q8qJ+/'], {})
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/normal',
                                            children: f.intl.format(f.t.sqowY2, {})
                                        })
                                    ]
                                }),
                            (0, i.jsx)(l.Z.Toggle, { text: e ? f.intl.string(f.t['1Rkq/P']) : f.intl.string(f.t.WsTHkZ) })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: b.subscriptions,
                children: [
                    (0, i.jsx)(o.Z, {
                        storeListing: h,
                        className: b.activeSubscriptionCard,
                        cta: (0, i.jsxs)('div', {
                            className: b.activeSubscriptionCTA,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'eyebrow',
                                    color: 'text-brand',
                                    children: f.intl.string(f.t.fHIpOT)
                                }),
                                null != y &&
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'text-secondary',
                                        children: f.intl.format(f.t['OQk+jo'], { endDate: A })
                                    })
                            ]
                        })
                    }),
                    x.map((e) =>
                        e.skuId === O
                            ? (0, i.jsx)(
                                  o.Z,
                                  {
                                      storeListing: e,
                                      cta: (0, i.jsx)(s.Text, {
                                          variant: 'text-sm/semibold',
                                          color: 'text-secondary',
                                          children: f.intl.format(f.t.nn88hI, { startDate: A })
                                      })
                                  },
                                  e.id
                              )
                            : (0, i.jsx)(
                                  _,
                                  {
                                      storeListing: e,
                                      guildId: N,
                                      navigateToHome: j
                                  },
                                  e.id
                              )
                    )
                ]
            })
        ]
    });
}
function _(e) {
    let { storeListing: t, guildId: n, navigateToHome: r } = e,
        { openModal: a } = (0, p.Z)({
            analyticsLocation: h.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: r
        });
    return (0, i.jsx)(o.Z, {
        storeListing: t,
        cta: (0, i.jsx)(s.zxk, {
            variant: 'primary',
            size: 'sm',
            text: f.intl.string(f.t['+KwmBg']),
            onClick: a
        })
    });
}
