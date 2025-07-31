(n.d(t, {
    Z: () => U,
    p: () => j
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(834023),
    c = n(304789),
    u = n(780384),
    d = n(755721),
    _ = n(481060),
    f = n(355467),
    p = n(37234),
    h = n(410030),
    m = n(174609),
    g = n(703656),
    E = n(626135),
    b = n(526167),
    y = n(74538),
    O = n(357355),
    v = n(998076),
    I = n(639119),
    T = n(638212),
    S = n(767714),
    A = n(302945),
    N = n(474936),
    C = n(981631),
    R = n(388032),
    P = n(338704),
    w = n(229191),
    D = n(946598),
    L = n(428946),
    x = n(42948),
    M = n(109194),
    k = n(352812),
    j = (function (e) {
        return ((e[(e.NONE = 0)] = 'NONE'), (e[(e.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (e[(e.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER'), e);
    })({});
function U(e) {
    let { containerContext: t, image: n, title: a, description: j, enableSocialProof: U, analyticsLocationSection: G, upsellViewedTrackingData: B, onClose: V, onDisplay: F, onLearnMore: Z, isEmojiPickerOverlay: H = !1 } = e,
        Y = (0, s.e7)([O.Z], () => O.Z.affinities),
        W = (0, s.e7)([O.Z], () => O.Z.hasFetched);
    (i.useEffect(() => {
        !W && U && f.MH();
    }, [W, U]),
        i.useEffect(() => {
            (E.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, B), null == F || F());
        }, [F, B]));
    let K = Y.length > 1 && U,
        z = () => (2 === t ? w.hasTabParentContainer : 1 === t ? w.hasParentContainer : w.noParentContainer),
        q = () => {
            (E.default.track(C.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: G,
                location_object: C.qAy.NAVIGATION_LINK
            }),
                null == Z || Z(),
                (0, m.Z)(),
                V(),
                (0, p.xf)(),
                (0, g.uL)(C.Z5c.APPLICATION_STORE));
        },
        X = (0, I.N)(),
        Q = i.useCallback(() => {
            var e;
            return null != (e = (0, y.fr)(X)) ? e : R.intl.string(R.t.pj0XBA);
        }, [X]),
        J = (0, u.ap)((0, h.ZP)());
    if ((0, v.Z)({ location: 'PremiumUpsellPickerOverlay' })) {
        let e;
        e = H ? ((0, b.rO)() ? L.Z : x.Z) : (0, b.rO)() ? M.Z : k.Z;
        let t = H ? 'nitro-pink' : 'green';
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(_.ZMr, {
                    onClick: V,
                    isVisible: !0
                }),
                (0, r.jsxs)(c.$, {
                    color: t,
                    className: o()(P.container, z()),
                    children: [
                        (0, r.jsxs)('div', {
                            className: P.content,
                            children: [
                                (0, r.jsx)(_.olH, {
                                    onClick: V,
                                    className: P.closeButton
                                }),
                                (0, r.jsxs)('div', {
                                    className: P.contentContainer,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: D.headerGraphic,
                                            children: (0, r.jsx)(l.gM, {
                                                data: {
                                                    type: l.tK.LOOPING_VIDEO,
                                                    props: {
                                                        src: e,
                                                        loopAt: 5
                                                    }
                                                }
                                            })
                                        }),
                                        (0, r.jsx)(_.X6q, {
                                            className: P.title,
                                            variant: 'heading-xl/bold',
                                            color: 'header-primary',
                                            children: a
                                        }),
                                        (0, r.jsx)(_.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-secondary',
                                            className: P.body,
                                            children: j
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: P.footer,
                            children: (0, r.jsxs)('div', {
                                className: P.buttonContainer,
                                children: [
                                    (0, r.jsx)(d.zx, {
                                        color: J ? d.zx.Colors.PRIMARY : d.zx.Colors.WHITE,
                                        look: d.zx.Looks.LINK,
                                        onClick: q,
                                        children: (0, r.jsx)(_.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-primary',
                                            children: R.intl.string(R.t.ZnqyZ2)
                                        })
                                    }),
                                    (0, r.jsx)(T.Z, {
                                        premiumModalAnalyticsLocation: {
                                            section: G,
                                            object: C.qAy.BUTTON_CTA
                                        },
                                        subscriptionTier: N.Si.TIER_2,
                                        onClick: () => {
                                            V();
                                        },
                                        defaultTextOverride: Q()
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
                onClick: V,
                isVisible: !0
            }),
            (0, r.jsxs)('div', {
                className: o()(w.container, z()),
                children: [
                    (0, r.jsx)(_.olH, {
                        onClick: V,
                        className: w.closeButton
                    }),
                    (0, r.jsxs)('div', {
                        className: w.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: w.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: 'Nitro Perk'
                            }),
                            (0, r.jsx)(_.X6q, {
                                className: o()(w.title, { [w.titleNoSocialProof]: !K }),
                                variant: 'heading-xl/bold',
                                children: a
                            }),
                            K && (0, r.jsx)(A.Z, { affinities: Y }),
                            (0, r.jsx)(_.Text, {
                                variant: 'text-sm/medium',
                                className: w.body,
                                children: j
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: w.ctaContainer,
                        children: [
                            (0, r.jsx)(d.zx, {
                                className: w.secondaryCTA,
                                size: d.zx.Sizes.SMALL,
                                color: d.zx.Colors.CUSTOM,
                                look: d.zx.Looks.LINK,
                                onClick: q,
                                children: R.intl.string(R.t.ZnqyZ2)
                            }),
                            (0, r.jsx)(S.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: G,
                                    object: C.qAy.BUTTON_CTA
                                },
                                subscriptionTier: N.Si.TIER_2,
                                size: d.zx.Sizes.SMALL,
                                color: d.zx.Colors.CUSTOM,
                                onClick: () => {
                                    V();
                                },
                                textOptions: { textOverride: Q() }
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
