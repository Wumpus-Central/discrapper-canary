n.d(t, { Z: () => E }), n(789020);
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(601911),
    a = n(887818),
    o = n(824856),
    c = n(565138),
    d = n(430824),
    u = n(55563),
    m = n(171246),
    h = n(263519),
    g = n(63487),
    _ = n(981631),
    x = n(388032),
    p = n(494497);
function E(e) {
    var t;
    let { app: n, currentSubscription: h, currentListing: _, alternativeListings: E, navigateToHome: f, subscriptionGroup: T, renewalSkuId: N } = e,
        I = (0, l.y)(n, 100),
        S = (0, m.KK)(T.flags),
        b = S ? r.QTo : r.tBG,
        v = S ? x.intl.string(x.t['46YF2N']) : x.intl.string(x.t.fFyGiI),
        j = null === (t = h.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        A = (0, s.e7)([d.Z], () => (S && null != j ? d.Z.getGuild(j) : void 0), [j, S]),
        O = (0, s.e7)(
            [u.Z],
            () => {
                if (null != N) return u.Z.get(N);
            },
            [N]
        ),
        R = (0, g.p)(h.currentPeriodEnd);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: p.header,
                children: [
                    null != I &&
                        (0, i.jsx)(r.Eep, {
                            src: I.href,
                            imageClassName: p.appIcon,
                            width: 48,
                            height: 48
                        }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(r.X6q, {
                                variant: 'heading-xl/semibold',
                                children: n.name
                            }),
                            (0, i.jsxs)('div', {
                                className: p.subInfo,
                                children: [
                                    (0, i.jsxs)(r.X6q, {
                                        variant: 'heading-md/normal',
                                        className: p.subInfoType,
                                        children: [
                                            (0, i.jsx)(b, {
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
                                                (0, i.jsx)(r.Text, {
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
                                                        (0, i.jsx)(r.X6q, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'text-muted',
                                                            children: x.intl.format(x.t['7ZD8p6'], { guildName: A.name })
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
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: x.intl.string(x.t['goe+ho'])
                            }),
                            e &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-md/normal',
                                            children: x.intl.format(x.t['Q8qJ+/'], {})
                                        }),
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-md/normal',
                                            children: x.intl.format(x.t.sqowY2, {})
                                        })
                                    ]
                                }),
                            (0, i.jsx)(a.Z.Toggle, { text: e ? x.intl.string(x.t['1Rkq/P']) : x.intl.string(x.t.WsTHkZ) })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: p.subscriptions,
                children: [
                    (0, i.jsx)(o.Z, {
                        storeListing: _,
                        className: p.activeSubscriptionCard,
                        cta: (0, i.jsxs)('div', {
                            className: p.activeSubscriptionCTA,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'eyebrow',
                                    color: 'text-brand',
                                    children: x.intl.string(x.t.fHIpOT)
                                }),
                                null != O &&
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'text-secondary',
                                        children: x.intl.format(x.t['OQk+jo'], { endDate: R })
                                    })
                            ]
                        })
                    }),
                    E.map((e) =>
                        e.skuId === N
                            ? (0, i.jsx)(
                                  o.Z,
                                  {
                                      storeListing: e,
                                      cta: (0, i.jsx)(r.Text, {
                                          variant: 'text-sm/semibold',
                                          color: 'text-secondary',
                                          children: x.intl.format(x.t.nn88hI, { startDate: R })
                                      })
                                  },
                                  e.id
                              )
                            : (0, i.jsx)(
                                  C,
                                  {
                                      storeListing: e,
                                      guildId: j,
                                      navigateToHome: f
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
        { openModal: l } = (0, h.Z)({
            analyticsLocation: _.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: s
        });
    return (0, i.jsx)(o.Z, {
        storeListing: t,
        cta: (0, i.jsx)(r.zxk, {
            size: r.zxk.Sizes.SMALL,
            onClick: l,
            children: x.intl.string(x.t['+KwmBg'])
        })
    });
}
