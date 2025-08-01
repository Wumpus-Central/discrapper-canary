(n.d(t, {
    Z: () => G,
    p: () => U
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(446673),
    c = n(680018),
    u = n(834023),
    d = n(304789),
    _ = n(755721),
    f = n(481060),
    p = n(355467),
    h = n(37234),
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
    A = n(717975),
    N = n(302945),
    C = n(474936),
    R = n(981631),
    P = n(388032),
    w = n(338704),
    D = n(229191),
    L = n(946598),
    x = n(428946),
    M = n(42948),
    k = n(109194),
    j = n(352812),
    U = (function (e) {
        return ((e[(e.NONE = 0)] = 'NONE'), (e[(e.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (e[(e.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER'), e);
    })({});
function G(e) {
    let { containerContext: t, image: n, title: a, description: U, enableSocialProof: G, analyticsLocationSection: B, upsellViewedTrackingData: V, onClose: F, onDisplay: Z, onLearnMore: H, isEmojiPickerOverlay: Y = !1 } = e,
        W = (0, s.e7)([O.Z], () => O.Z.affinities),
        K = (0, s.e7)([O.Z], () => O.Z.hasFetched);
    (i.useEffect(() => {
        !K && G && p.MH();
    }, [K, G]),
        i.useEffect(() => {
            (E.default.track(R.rMx.PREMIUM_UPSELL_VIEWED, V), null == Z || Z());
        }, [Z, V]));
    let z = W.length > 1 && G,
        q = () => (2 === t ? D.hasTabParentContainer : 1 === t ? D.hasParentContainer : D.noParentContainer),
        X = () => {
            (E.default.track(R.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: B,
                location_object: R.qAy.NAVIGATION_LINK
            }),
                null == H || H(),
                (0, m.Z)(),
                F(),
                (0, h.xf)(),
                (0, g.uL)(R.Z5c.APPLICATION_STORE));
        },
        Q = (0, I.N)(),
        J = i.useCallback(() => {
            var e;
            return null != (e = (0, y.fr)(Q)) ? e : P.intl.string(P.t.pj0XBA);
        }, [Q]),
        $ = (0, v.Z)({ location: 'PremiumUpsellPickerOverlay' }),
        ee = (0, A.Z)();
    if ($) {
        let e;
        e = Y ? ((0, b.rO)() ? x.Z : M.Z) : (0, b.rO)() ? k.Z : j.Z;
        let t = Y ? 'nitro-pink' : 'green';
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.ZMr, {
                    onClick: F,
                    isVisible: !0
                }),
                (0, r.jsxs)(d.$, {
                    color: t,
                    className: o()(w.container, q()),
                    children: [
                        (0, r.jsxs)('div', {
                            className: w.content,
                            children: [
                                (0, r.jsx)(f.olH, {
                                    onClick: F,
                                    className: w.closeButton
                                }),
                                (0, r.jsxs)('div', {
                                    className: w.contentContainer,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: L.headerGraphic,
                                            children: (0, r.jsx)(u.gM, {
                                                data: {
                                                    type: u.tK.LOOPING_VIDEO,
                                                    props: {
                                                        src: e,
                                                        loopAt: 5
                                                    }
                                                }
                                            })
                                        }),
                                        null != ee && (0, r.jsx)(l.C, { badge: { text: ee } }),
                                        (0, r.jsx)(f.X6q, {
                                            className: o()(w.title, { [w.withBadge]: null != ee }),
                                            variant: 'heading-xl/bold',
                                            color: 'header-primary',
                                            children: a
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-secondary',
                                            className: w.body,
                                            children: U
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: w.footer,
                            children: (0, r.jsxs)('div', {
                                className: w.buttonContainer,
                                children: [
                                    (0, r.jsx)(c.z, {
                                        variant: 'secondary',
                                        onClick: X,
                                        text: P.intl.string(P.t.ZnqyZ2),
                                        fullWidth: !0
                                    }),
                                    (0, r.jsx)(T.Z, {
                                        premiumModalAnalyticsLocation: {
                                            section: B,
                                            object: R.qAy.BUTTON_CTA
                                        },
                                        subscriptionTier: C.Si.TIER_2,
                                        onClick: () => {
                                            F();
                                        },
                                        defaultTextOverride: J(),
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
            (0, r.jsx)(f.ZMr, {
                onClick: F,
                isVisible: !0
            }),
            (0, r.jsxs)('div', {
                className: o()(D.container, q()),
                children: [
                    (0, r.jsx)(f.olH, {
                        onClick: F,
                        className: D.closeButton
                    }),
                    (0, r.jsxs)('div', {
                        className: D.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: D.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: 'Nitro Perk'
                            }),
                            (0, r.jsx)(f.X6q, {
                                className: o()(D.title, { [D.titleNoSocialProof]: !z }),
                                variant: 'heading-xl/bold',
                                children: a
                            }),
                            z && (0, r.jsx)(N.Z, { affinities: W }),
                            (0, r.jsx)(f.Text, {
                                variant: 'text-sm/medium',
                                className: D.body,
                                children: U
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: D.ctaContainer,
                        children: [
                            (0, r.jsx)(_.zx, {
                                className: D.secondaryCTA,
                                size: _.zx.Sizes.SMALL,
                                color: _.zx.Colors.CUSTOM,
                                look: _.zx.Looks.LINK,
                                onClick: X,
                                children: P.intl.string(P.t.ZnqyZ2)
                            }),
                            (0, r.jsx)(S.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: B,
                                    object: R.qAy.BUTTON_CTA
                                },
                                subscriptionTier: C.Si.TIER_2,
                                size: _.zx.Sizes.SMALL,
                                color: _.zx.Colors.CUSTOM,
                                onClick: () => {
                                    F();
                                },
                                textOptions: { textOverride: J() }
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
