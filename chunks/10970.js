n.d(t, { Z: () => E }), n(789020);
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(601911),
    a = n(887818),
    o = n(824856),
    c = n(565138),
    d = n(430824),
    u = n(55563),
    h = n(171246),
    m = n(263519),
    g = n(63487),
    x = n(981631),
    _ = n(388032),
    p = n(714402);
function E(e) {
    var t;
    let { app: n, currentSubscription: m, currentListing: x, alternativeListings: E, navigateToHome: N, subscriptionGroup: I, renewalSkuId: f } = e,
        T = (0, r.y)(n, 100),
        S = (0, h.KK)(I.flags),
        j = S ? l.QTo : l.tBG,
        v = S ? _.intl.string(_.t['46YF2N']) : _.intl.string(_.t.fFyGiI),
        b = null === (t = m.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        A = (0, s.e7)([d.Z], () => (S && null != b ? d.Z.getGuild(b) : void 0), [b, S]),
        O = (0, s.e7)(
            [u.Z],
            () => {
                if (null != f) return u.Z.get(f);
            },
            [f]
        ),
        R = (0, g.p)(m.currentPeriodEnd);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: p.header,
                children: [
                    null != T &&
                        (0, i.jsx)(l.Eep, {
                            src: T.href,
                            imageClassName: p.appIcon,
                            width: 48,
                            height: 48
                        }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(l.X6q, {
                                variant: 'heading-xl/semibold',
                                children: n.name
                            }),
                            (0, i.jsxs)('div', {
                                className: p.subInfo,
                                children: [
                                    (0, i.jsxs)(l.X6q, {
                                        variant: 'heading-md/normal',
                                        className: p.subInfoType,
                                        children: [
                                            (0, i.jsx)(j, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            ' ',
                                            v
                                        ]
                                    }),
                                    null != A &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(l.Text, {
                                                    variant: 'text-md/normal',
                                                    children: '\u2022'
                                                }),
                                                (0, i.jsxs)('span', {
                                                    className: p.guildSubscription,
                                                    children: [
                                                        (0, i.jsx)(c.Z, {
                                                            guild: A,
                                                            size: c.Z.Sizes.SMOL
                                                        }),
                                                        (0, i.jsx)(l.X6q, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'text-muted',
                                                            children: _.intl.format(_.t['7ZD8p6'], { guildName: A.name })
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
                        className: p.planNotice,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: _.intl.string(_.t['goe+ho'])
                            }),
                            e &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            children: _.intl.format(_.t['Q8qJ+/'], {})
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            children: _.intl.format(_.t.sqowY2, {})
                                        })
                                    ]
                                }),
                            (0, i.jsx)(a.Z.Toggle, { text: e ? _.intl.string(_.t['1Rkq/P']) : _.intl.string(_.t.WsTHkZ) })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: p.subscriptions,
                children: [
                    (0, i.jsx)(o.Z, {
                        storeListing: x,
                        className: p.activeSubscriptionCard,
                        cta: (0, i.jsxs)('div', {
                            className: p.activeSubscriptionCTA,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'eyebrow',
                                    color: 'text-brand',
                                    children: _.intl.string(_.t.fHIpOT)
                                }),
                                null != O &&
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'text-secondary',
                                        children: _.intl.format(_.t['OQk+jo'], { endDate: R })
                                    })
                            ]
                        })
                    }),
                    E.map((e) =>
                        e.skuId === f
                            ? (0, i.jsx)(
                                  o.Z,
                                  {
                                      storeListing: e,
                                      cta: (0, i.jsx)(l.Text, {
                                          variant: 'text-sm/semibold',
                                          color: 'text-secondary',
                                          children: _.intl.format(_.t.nn88hI, { startDate: R })
                                      })
                                  },
                                  e.id
                              )
                            : (0, i.jsx)(
                                  C,
                                  {
                                      storeListing: e,
                                      guildId: b,
                                      navigateToHome: N
                                  },
                                  e.id
                              )
                    )
                ]
            })
        ]
    });
}
function C(e) {
    let { storeListing: t, guildId: n, navigateToHome: s } = e,
        { openModal: r } = (0, m.Z)({
            analyticsLocation: x.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: s
        });
    return (0, i.jsx)(o.Z, {
        storeListing: t,
        cta: (0, i.jsx)(l.zxk, {
            size: l.zxk.Sizes.SMALL,
            onClick: r,
            children: _.intl.string(_.t['+KwmBg'])
        })
    });
}
