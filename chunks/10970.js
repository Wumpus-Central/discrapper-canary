n.d(t, { Z: () => _ }), n(997841);
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(601911),
    l = n(887818),
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
    let { app: n, currentSubscription: g, currentListing: h, alternativeListings: _, navigateToHome: x, subscriptionGroup: E, renewalSkuId: j } = e,
        C = (0, a.y)(n, 100),
        O = (0, m.KK)(E.flags),
        S = O ? s.QTo : s.tBG,
        v = O ? f.NW.string(f.t['46YF2N']) : f.NW.string(f.t.fFyGiI),
        T = null == (t = g.metadata) ? void 0 : t.application_subscription_guild_id,
        I = (0, i.e7)([d.Z], () => (O && null != T ? d.Z.getGuild(T) : void 0), [T, O]),
        y = (0, i.e7)(
            [u.Z],
            () => {
                if (null != j) return u.Z.get(j);
            },
            [j]
        ),
        A = (0, p.p)(g.currentPeriodEnd);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: b.header,
                children: [
                    null != C &&
                        (0, r.jsx)(s.Eep, {
                            src: C.href,
                            imageClassName: b.appIcon,
                            width: 48,
                            height: 48
                        }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-xl/semibold',
                                children: n.name
                            }),
                            (0, r.jsxs)('div', {
                                className: b.subInfo,
                                children: [
                                    (0, r.jsxs)(s.X6q, {
                                        variant: 'heading-md/normal',
                                        className: b.subInfoType,
                                        children: [
                                            (0, r.jsx)(S, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            ' ',
                                            v
                                        ]
                                    }),
                                    null != I &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-md/normal',
                                                    children: '\u2022'
                                                }),
                                                (0, r.jsxs)('span', {
                                                    className: b.guildSubscription,
                                                    children: [
                                                        (0, r.jsx)(c.Z, {
                                                            guild: I,
                                                            size: c.Z.Sizes.SMOL
                                                        }),
                                                        (0, r.jsx)(s.X6q, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'text-muted',
                                                            children: f.NW.format(f.t['7ZD8p6'], { guildName: I.name })
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
            (0, r.jsx)(l.Z, {
                children: (e) =>
                    (0, r.jsxs)('div', {
                        className: b.planNotice,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: f.NW.string(f.t['goe+ho'])
                            }),
                            e &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-md/normal',
                                            children: f.NW.format(f.t['Q8qJ+/'], {})
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-md/normal',
                                            children: f.NW.format(f.t.sqowY2, {})
                                        })
                                    ]
                                }),
                            (0, r.jsx)(l.Z.Toggle, { text: e ? f.NW.string(f.t['1Rkq/P']) : f.NW.string(f.t.WsTHkZ) })
                        ]
                    })
            }),
            (0, r.jsxs)('div', {
                className: b.subscriptions,
                children: [
                    (0, r.jsx)(o.Z, {
                        storeListing: h,
                        className: b.activeSubscriptionCard,
                        cta: (0, r.jsxs)('div', {
                            className: b.activeSubscriptionCTA,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'eyebrow',
                                    color: 'text-brand',
                                    children: f.NW.string(f.t.fHIpOT)
                                }),
                                null != y &&
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'text-secondary',
                                        children: f.NW.format(f.t['OQk+jo'], { endDate: A })
                                    })
                            ]
                        })
                    }),
                    _.map((e) =>
                        e.skuId === j
                            ? (0, r.jsx)(
                                  o.Z,
                                  {
                                      storeListing: e,
                                      cta: (0, r.jsx)(s.Text, {
                                          variant: 'text-sm/semibold',
                                          color: 'text-secondary',
                                          children: f.NW.format(f.t.nn88hI, { startDate: A })
                                      })
                                  },
                                  e.id
                              )
                            : (0, r.jsx)(
                                  N,
                                  {
                                      storeListing: e,
                                      guildId: T,
                                      navigateToHome: x
                                  },
                                  e.id
                              )
                    )
                ]
            })
        ]
    });
}
function N(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: a } = (0, g.Z)({
            analyticsLocation: h.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i
        });
    return (0, r.jsx)(o.Z, {
        storeListing: t,
        cta: (0, r.jsx)(s.zxk, {
            size: s.zxk.Sizes.SMALL,
            onClick: a,
            children: f.NW.string(f.t['+KwmBg'])
        })
    });
}
