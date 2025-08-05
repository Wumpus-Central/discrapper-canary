(n.d(t, {
    Z: () => M,
    p: () => j
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
    w = n(338704),
    R = n(229191),
    P = n(946598),
    D = n(428946),
    L = n(42948),
    x = n(109194),
    k = n(352812),
    j = (function (e) {
        return ((e[(e.NONE = 0)] = 'NONE'), (e[(e.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (e[(e.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER'), e);
    })({});
function M(e) {
    let { containerContext: t, image: n, title: a, description: j, enableSocialProof: M, analyticsLocationSection: U, upsellViewedTrackingData: G, onClose: B, onDisplay: Z, onLearnMore: F, isEmojiPickerOverlay: V = !1 } = e,
        H = (0, s.e7)([b.Z], () => b.Z.affinities),
        Y = (0, s.e7)([b.Z], () => b.Z.hasFetched);
    (i.useEffect(() => {
        !Y && M && f.MH();
    }, [Y, M]),
        i.useEffect(() => {
            (m.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, G), null == Z || Z());
        }, [Z, G]));
    let W = H.length > 1 && M,
        K = () => (2 === t ? R.hasTabParentContainer : 1 === t ? R.hasParentContainer : R.noParentContainer),
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
        $ = i.useCallback(() => {
            var e;
            return null != (e = (0, E.fr)(q)) ? e : C.intl.string(C.t.pj0XBA);
        }, [q]),
        X = (0, y.Z)({ location: 'PremiumUpsellPickerOverlay' }),
        Q = (0, T.Z)();
    if (X) {
        let e;
        e = V ? ((0, g.rO)() ? D.Z : L.Z) : (0, g.rO)() ? x.Z : k.Z;
        let t = V ? 'nitro-pink' : 'green';
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.ZMr, {
                    onClick: B,
                    isVisible: !0
                }),
                (0, r.jsxs)(c.$, {
                    color: t,
                    className: w.container,
                    children: [
                        (0, r.jsxs)('div', {
                            className: w.content,
                            children: [
                                (0, r.jsx)(d.olH, {
                                    onClick: B,
                                    className: w.closeButton
                                }),
                                (0, r.jsxs)('div', {
                                    className: w.contentContainer,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: P.headerGraphic,
                                            children: (0, r.jsx)(d.zsu, {
                                                type: 'video',
                                                src: e,
                                                loop: !0,
                                                loopAt: 5
                                            })
                                        }),
                                        null != Q && (0, r.jsx)(l.C, { badge: { text: Q } }),
                                        (0, r.jsx)(d.X6q, {
                                            className: o()(w.title, { [w.withBadge]: null != Q }),
                                            variant: 'heading-xl/bold',
                                            color: 'header-primary',
                                            children: a
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-secondary',
                                            className: w.body,
                                            children: j
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
                                        defaultTextOverride: $(),
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
                className: o()(R.container, K()),
                children: [
                    (0, r.jsx)(d.olH, {
                        onClick: B,
                        className: R.closeButton
                    }),
                    (0, r.jsxs)('div', {
                        className: R.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: R.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: 'Nitro Perk'
                            }),
                            (0, r.jsx)(d.X6q, {
                                className: o()(R.title, { [R.titleNoSocialProof]: !W }),
                                variant: 'heading-xl/bold',
                                children: a
                            }),
                            W && (0, r.jsx)(S.Z, { affinities: H }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                className: R.body,
                                children: j
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: R.ctaContainer,
                        children: [
                            (0, r.jsx)(u.zx, {
                                className: R.secondaryCTA,
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
                                textOptions: { textOverride: $() }
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
