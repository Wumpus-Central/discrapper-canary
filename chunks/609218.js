n.d(t, {
    Z: () => S,
    p: () => I
}),
    n(953529);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(355467),
    u = n(37234),
    d = n(174609),
    f = n(703656),
    _ = n(626135),
    p = n(74538),
    h = n(357355),
    m = n(639119),
    g = n(197115),
    E = n(302945),
    b = n(474936),
    y = n(981631),
    O = n(388032),
    v = n(229191),
    I = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (e[(e.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER'), e;
    })({});
function S(e) {
    let { containerContext: t, image: n, title: o, description: I, enableSocialProof: S, analyticsLocationSection: T, upsellViewedTrackingData: A, onClose: N, onDisplay: C, onLearnMore: R } = e,
        P = (0, s.e7)([h.Z], () => h.Z.affinities),
        w = (0, s.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        !w && S && c.MH();
    }, [w, S]),
        i.useEffect(() => {
            _.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, A), null == C || C();
        }, [C, A]);
    let D = P.length > 1 && S,
        L = () => (2 === t ? v.hasTabParentContainer : 1 === t ? v.hasParentContainer : v.noParentContainer),
        x = () => {
            _.default.track(y.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: T,
                location_object: y.qAy.NAVIGATION_LINK
            }),
                null == R || R(),
                (0, d.Z)(),
                N(),
                (0, u.xf)(),
                (0, f.uL)(y.Z5c.APPLICATION_STORE);
        },
        M = (0, m.N)(),
        k = i.useCallback(() => {
            var e;
            return null != (e = (0, p.fr)(M)) ? e : O.intl.string(O.t.pj0XBA);
        }, [M]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.YMn, {
                backdropStyle: l.fCB.DARK,
                onClose: N,
                'aria-label': O.intl.string(O.t.cpT0Cg),
                isVisible: !0
            }),
            (0, r.jsxs)('div', {
                className: a()(v.container, L()),
                children: [
                    (0, r.jsx)(l.olH, {
                        onClick: N,
                        className: v.closeButton
                    }),
                    (0, r.jsxs)('div', {
                        className: v.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: v.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: 'Nitro Perk'
                            }),
                            (0, r.jsx)(l.X6q, {
                                className: a()(v.title, { [v.titleNoSocialProof]: !D }),
                                variant: 'heading-xl/bold',
                                children: o
                            }),
                            D && (0, r.jsx)(E.Z, { affinities: P }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: v.body,
                                children: I
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: v.ctaContainer,
                        children: [
                            (0, r.jsx)(l.zxk, {
                                className: v.secondaryCTA,
                                size: l.zxk.Sizes.SMALL,
                                color: l.zxk.Colors.CUSTOM,
                                look: l.zxk.Looks.LINK,
                                onClick: x,
                                children: O.intl.string(O.t.ZnqyZ2)
                            }),
                            (0, r.jsx)(g.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: T,
                                    object: y.qAy.BUTTON_CTA
                                },
                                subscriptionTier: b.Si.TIER_2,
                                size: l.zxk.Sizes.SMALL,
                                color: l.zxk.Colors.CUSTOM,
                                onClick: () => {
                                    N();
                                },
                                buttonText: k()
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
