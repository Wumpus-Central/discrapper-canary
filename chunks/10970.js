n.d(t, { Z: () => _ }), n(997841);
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(601911),
    a = n(887818),
    o = n(824856),
    c = n(565138),
    d = n(430824),
    u = n(55563),
    m = n(171246),
    g = n(263519),
    p = n(63487),
    h = n(981631),
    f = n(388032),
    b = n(831169);
function _(e) {
    var t;
    let { app: n, currentSubscription: g, currentListing: h, alternativeListings: _, navigateToHome: E, subscriptionGroup: j, renewalSkuId: C } = e,
        O = (0, l.y)(n, 100),
        S = (0, m.KK)(j.flags),
        v = S ? s.QTo : s.tBG,
        T = S ? f.intl.string(f.t['46YF2N']) : f.intl.string(f.t.fFyGiI),
        I = null == (t = g.metadata) ? void 0 : t.application_subscription_guild_id,
        N = (0, r.e7)([d.Z], () => (S && null != I ? d.Z.getGuild(I) : void 0), [I, S]),
        y = (0, r.e7)(
            [u.Z],
            () => {
                if (null != C) return u.Z.get(C);
            },
            [C]
        ),
        A = (0, p.p)(g.currentPeriodEnd);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: b.header,
                children: [
                    null != O &&
                        (0, i.jsx)(s.Eep, {
                            src: O.href,
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
                                            (0, i.jsx)(v, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            ' ',
                                            T
                                        ]
                                    }),
                                    null != N &&
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
                                                            guild: N,
                                                            size: c.Z.Sizes.SMOL
                                                        }),
                                                        (0, i.jsx)(s.X6q, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'text-muted',
                                                            children: f.intl.format(f.t['7ZD8p6'], { guildName: N.name })
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
            (0, i.jsx)(a.Z, {
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
                            (0, i.jsx)(a.Z.Toggle, { text: e ? f.intl.string(f.t['1Rkq/P']) : f.intl.string(f.t.WsTHkZ) })
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
                    _.map((e) =>
                        e.skuId === C
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
                                  x,
                                  {
                                      storeListing: e,
                                      guildId: I,
                                      navigateToHome: E
                                  },
                                  e.id
                              )
                    )
                ]
            })
        ]
    });
}
function x(e) {
    let { storeListing: t, guildId: n, navigateToHome: r } = e,
        { openModal: l } = (0, g.Z)({
            analyticsLocation: h.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: r
        });
    return (0, i.jsx)(o.Z, {
        storeListing: t,
        cta: (0, i.jsx)(s.zxk, {
            size: s.zxk.Sizes.SMALL,
            onClick: l,
            children: f.intl.string(f.t['+KwmBg'])
        })
    });
}
