(n.d(t, {
    Z: () => j,
    p: () => k
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(680018),
    c = n(834023),
    u = n(304789),
    d = n(755721),
    _ = n(481060),
    f = n(355467),
    p = n(37234),
    h = n(174609),
    m = n(703656),
    g = n(626135),
    E = n(526167),
    b = n(74538),
    y = n(357355),
    O = n(998076),
    v = n(639119),
    I = n(638212),
    T = n(767714),
    S = n(302945),
    A = n(474936),
    N = n(981631),
    C = n(388032),
    R = n(338704),
    P = n(229191),
    w = n(946598),
    D = n(428946),
    L = n(42948),
    x = n(109194),
    M = n(352812),
    k = (function (e) {
        return ((e[(e.NONE = 0)] = 'NONE'), (e[(e.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (e[(e.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER'), e);
    })({});
function j(e) {
    let { containerContext: t, image: n, title: a, description: k, enableSocialProof: j, analyticsLocationSection: U, upsellViewedTrackingData: G, onClose: B, onDisplay: V, onLearnMore: F, isEmojiPickerOverlay: Z = !1 } = e,
        H = (0, s.e7)([y.Z], () => y.Z.affinities),
        Y = (0, s.e7)([y.Z], () => y.Z.hasFetched);
    (i.useEffect(() => {
        !Y && j && f.MH();
    }, [Y, j]),
        i.useEffect(() => {
            (g.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, G), null == V || V());
        }, [V, G]));
    let W = H.length > 1 && j,
        K = () => (2 === t ? P.hasTabParentContainer : 1 === t ? P.hasParentContainer : P.noParentContainer),
        z = () => {
            (g.default.track(N.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: U,
                location_object: N.qAy.NAVIGATION_LINK
            }),
                null == F || F(),
                (0, h.Z)(),
                B(),
                (0, p.xf)(),
                (0, m.uL)(N.Z5c.APPLICATION_STORE));
        },
        q = (0, v.N)(),
        X = i.useCallback(() => {
            var e;
            return null != (e = (0, b.fr)(q)) ? e : C.intl.string(C.t.pj0XBA);
        }, [q]);
    if ((0, O.Z)({ location: 'PremiumUpsellPickerOverlay' })) {
        let e;
        e = Z ? ((0, E.rO)() ? D.Z : L.Z) : (0, E.rO)() ? x.Z : M.Z;
        let t = Z ? 'nitro-pink' : 'green';
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(_.ZMr, {
                    onClick: B,
                    isVisible: !0
                }),
                (0, r.jsxs)(u.$, {
                    color: t,
                    className: o()(R.container, K()),
                    children: [
                        (0, r.jsxs)('div', {
                            className: R.content,
                            children: [
                                (0, r.jsx)(_.olH, {
                                    onClick: B,
                                    className: R.closeButton
                                }),
                                (0, r.jsxs)('div', {
                                    className: R.contentContainer,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: w.headerGraphic,
                                            children: (0, r.jsx)(c.gM, {
                                                data: {
                                                    type: c.tK.LOOPING_VIDEO,
                                                    props: {
                                                        src: e,
                                                        loopAt: 5
                                                    }
                                                }
                                            })
                                        }),
                                        (0, r.jsx)(_.X6q, {
                                            className: R.title,
                                            variant: 'heading-xl/bold',
                                            color: 'header-primary',
                                            children: a
                                        }),
                                        (0, r.jsx)(_.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-secondary',
                                            className: R.body,
                                            children: k
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: R.footer,
                            children: (0, r.jsxs)('div', {
                                className: R.buttonContainer,
                                children: [
                                    (0, r.jsx)(l.z, {
                                        variant: 'secondary',
                                        onClick: z,
                                        text: C.intl.string(C.t.ZnqyZ2),
                                        fullWidth: !0
                                    }),
                                    (0, r.jsx)(I.Z, {
                                        premiumModalAnalyticsLocation: {
                                            section: U,
                                            object: N.qAy.BUTTON_CTA
                                        },
                                        subscriptionTier: A.Si.TIER_2,
                                        onClick: () => {
                                            B();
                                        },
                                        defaultTextOverride: X(),
                                        fullWidth: !0
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_.ZMr, {
                onClick: B,
                isVisible: !0
            }),
            (0, r.jsxs)('div', {
                className: o()(P.container, K()),
                children: [
                    (0, r.jsx)(_.olH, {
                        onClick: B,
                        className: P.closeButton
                    }),
                    (0, r.jsxs)('div', {
                        className: P.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: P.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: 'Nitro Perk'
                            }),
                            (0, r.jsx)(_.X6q, {
                                className: o()(P.title, { [P.titleNoSocialProof]: !W }),
                                variant: 'heading-xl/bold',
                                children: a
                            }),
                            W && (0, r.jsx)(S.Z, { affinities: H }),
                            (0, r.jsx)(_.Text, {
                                variant: 'text-sm/medium',
                                className: P.body,
                                children: k
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: P.ctaContainer,
                        children: [
                            (0, r.jsx)(d.zx, {
                                className: P.secondaryCTA,
                                size: d.zx.Sizes.SMALL,
                                color: d.zx.Colors.CUSTOM,
                                look: d.zx.Looks.LINK,
                                onClick: z,
                                children: C.intl.string(C.t.ZnqyZ2)
                            }),
                            (0, r.jsx)(T.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: U,
                                    object: N.qAy.BUTTON_CTA
                                },
                                subscriptionTier: A.Si.TIER_2,
                                size: d.zx.Sizes.SMALL,
                                color: d.zx.Colors.CUSTOM,
                                onClick: () => {
                                    B();
                                },
                                textOptions: { textOverride: X() }
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
