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
    l = n(446673),
    c = n(304789),
    u = n(755721),
    d = n(481060),
    f = n(355467),
    _ = n(37234),
    p = n(174609),
    h = n(703656),
    m = n(626135),
    g = n(526167),
    E = n(74538),
    b = n(357355),
    y = n(998076),
    O = n(639119),
    v = n(638212),
    I = n(767714),
    T = n(717975),
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
        H = (0, s.e7)([b.Z], () => b.Z.affinities),
        Y = (0, s.e7)([b.Z], () => b.Z.hasFetched);
    (i.useEffect(() => {
        !Y && j && f.MH();
    }, [Y, j]),
        i.useEffect(() => {
            (m.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, G), null == V || V());
        }, [V, G]));
    let W = H.length > 1 && j,
        K = () => (2 === t ? P.hasTabParentContainer : 1 === t ? P.hasParentContainer : P.noParentContainer),
        z = () => {
            (m.default.track(N.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: U,
                location_object: N.qAy.NAVIGATION_LINK
            }),
                null == F || F(),
                (0, p.Z)(),
                B(),
                (0, _.xf)(),
                (0, h.uL)(N.Z5c.APPLICATION_STORE));
        },
        q = (0, O.N)(),
        X = i.useCallback(() => {
            var e;
            return null != (e = (0, E.fr)(q)) ? e : C.intl.string(C.t.pj0XBA);
        }, [q]),
        Q = (0, y.Z)({ location: 'PremiumUpsellPickerOverlay' }),
        J = (0, T.Z)();
    if (Q) {
        let e;
        e = Z ? ((0, g.rO)() ? D.Z : L.Z) : (0, g.rO)() ? x.Z : M.Z;
        let t = Z ? 'nitro-pink' : 'green';
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.ZMr, {
                    onClick: B,
                    isVisible: !0
                }),
                (0, r.jsxs)(c.$, {
                    color: t,
                    className: R.container,
                    children: [
                        (0, r.jsxs)('div', {
                            className: R.content,
                            children: [
                                (0, r.jsx)(d.olH, {
                                    onClick: B,
                                    className: R.closeButton
                                }),
                                (0, r.jsxs)('div', {
                                    className: R.contentContainer,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: w.headerGraphic,
                                            children: (0, r.jsx)(d.zsu, {
                                                type: 'video',
                                                src: e,
                                                loop: !0,
                                                loopAt: 5
                                            })
                                        }),
                                        null != J && (0, r.jsx)(l.C, { badge: { text: J } }),
                                        (0, r.jsx)(d.X6q, {
                                            className: o()(R.title, { [R.withBadge]: null != J }),
                                            variant: 'heading-xl/bold',
                                            color: 'header-primary',
                                            children: a
                                        }),
                                        (0, r.jsx)(d.Text, {
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
                                    (0, r.jsx)(d.zxk, {
                                        variant: 'secondary',
                                        onClick: z,
                                        text: C.intl.string(C.t.ZnqyZ2),
                                        fullWidth: !0
                                    }),
                                    (0, r.jsx)(v.Z, {
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
            (0, r.jsx)(d.ZMr, {
                onClick: B,
                isVisible: !0
            }),
            (0, r.jsxs)('div', {
                className: o()(P.container, K()),
                children: [
                    (0, r.jsx)(d.olH, {
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
                            (0, r.jsx)(d.X6q, {
                                className: o()(P.title, { [P.titleNoSocialProof]: !W }),
                                variant: 'heading-xl/bold',
                                children: a
                            }),
                            W && (0, r.jsx)(S.Z, { affinities: H }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                className: P.body,
                                children: k
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: P.ctaContainer,
                        children: [
                            (0, r.jsx)(u.zx, {
                                className: P.secondaryCTA,
                                size: u.zx.Sizes.SMALL,
                                color: u.zx.Colors.CUSTOM,
                                look: u.zx.Looks.LINK,
                                onClick: z,
                                children: C.intl.string(C.t.ZnqyZ2)
                            }),
                            (0, r.jsx)(I.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: U,
                                    object: N.qAy.BUTTON_CTA
                                },
                                subscriptionTier: A.Si.TIER_2,
                                size: u.zx.Sizes.SMALL,
                                color: u.zx.Colors.CUSTOM,
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
