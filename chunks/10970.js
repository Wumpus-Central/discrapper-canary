n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(789020);
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    a = n(601911),
    l = n(887818),
    o = n(824856),
    c = n(565138),
    d = n(430824),
    u = n(55563),
    m = n(171246),
    g = n(263519),
    h = n(63487),
    p = n(981631),
    x = n(388032),
    f = n(494497);
function _(e) {
    var t;
    let { app: n, currentSubscription: g, currentListing: p, alternativeListings: _, navigateToHome: C, subscriptionGroup: T, renewalSkuId: S } = e,
        b = (0, a.y)(n, 100),
        I = (0, m.KK)(T.flags),
        N = I ? s.ServerIcon : s.UserIcon,
        v = I ? x.intl.string(x.t['46YF2N']) : x.intl.string(x.t.fFyGiI),
        A = null === (t = g.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        j = (0, r.e7)([d.Z], () => (I && null != A ? d.Z.getGuild(A) : void 0), [A, I]),
        O = (0, r.e7)(
            [u.Z],
            () => {
                if (null != S) return u.Z.get(S);
            },
            [S]
        ),
        R = (0, h.p)(g.currentPeriodEnd);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: f.header,
                children: [
                    null != b &&
                        (0, i.jsx)(s.Image, {
                            src: b.href,
                            imageClassName: f.appIcon,
                            width: 48,
                            height: 48
                        }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-xl/semibold',
                                children: n.name
                            }),
                            (0, i.jsxs)('div', {
                                className: f.subInfo,
                                children: [
                                    (0, i.jsxs)(s.Heading, {
                                        variant: 'heading-md/normal',
                                        className: f.subInfoType,
                                        children: [
                                            (0, i.jsx)(N, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            ' ',
                                            v
                                        ]
                                    }),
                                    null != j &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(s.Text, {
                                                    variant: 'text-md/normal',
                                                    children: '\u2022'
                                                }),
                                                (0, i.jsxs)('span', {
                                                    className: f.guildSubscription,
                                                    children: [
                                                        (0, i.jsx)(c.Z, {
                                                            guild: j,
                                                            size: c.Z.Sizes.SMOL
                                                        }),
                                                        (0, i.jsx)(s.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'text-muted',
                                                            children: x.intl.format(x.t['7ZD8p6'], { guildName: j.name })
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
                        className: f.planNotice,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: x.intl.string(x.t['goe+ho'])
                            }),
                            e &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/normal',
                                            children: x.intl.format(x.t['Q8qJ+/'], {})
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/normal',
                                            children: x.intl.format(x.t.sqowY2, {})
                                        })
                                    ]
                                }),
                            (0, i.jsx)(l.Z.Toggle, { text: e ? x.intl.string(x.t['1Rkq/P']) : x.intl.string(x.t.WsTHkZ) })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: f.subscriptions,
                children: [
                    (0, i.jsx)(o.Z, {
                        storeListing: p,
                        className: f.activeSubscriptionCard,
                        cta: (0, i.jsxs)('div', {
                            className: f.activeSubscriptionCTA,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'eyebrow',
                                    color: 'text-brand',
                                    children: x.intl.string(x.t.fHIpOT)
                                }),
                                null != O &&
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'text-secondary',
                                        children: x.intl.format(x.t['OQk+jo'], { endDate: R })
                                    })
                            ]
                        })
                    }),
                    _.map((e) =>
                        e.skuId === S
                            ? (0, i.jsx)(
                                  o.Z,
                                  {
                                      storeListing: e,
                                      cta: (0, i.jsx)(s.Text, {
                                          variant: 'text-sm/semibold',
                                          color: 'text-secondary',
                                          children: x.intl.format(x.t.nn88hI, { startDate: R })
                                      })
                                  },
                                  e.id
                              )
                            : (0, i.jsx)(
                                  E,
                                  {
                                      storeListing: e,
                                      guildId: A,
                                      navigateToHome: C
                                  },
                                  e.id
                              )
                    )
                ]
            })
        ]
    });
}
function E(e) {
    let { storeListing: t, guildId: n, navigateToHome: r } = e,
        { openModal: a } = (0, g.Z)({
            analyticsLocation: p.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: r
        });
    return (0, i.jsx)(o.Z, {
        storeListing: t,
        cta: (0, i.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: a,
            children: x.intl.string(x.t['+KwmBg'])
        })
    });
}
