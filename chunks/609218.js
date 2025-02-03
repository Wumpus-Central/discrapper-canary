n.d(t, {
    Z: () => S,
    p: () => T
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(355467),
    c = n(37234),
    d = n(174609),
    f = n(703656),
    _ = n(626135),
    p = n(74538),
    h = n(357355),
    m = n(639119),
    g = n(197115),
    E = n(302945),
    v = n(474936),
    y = n(981631),
    I = n(388032),
    b = n(638916),
    T = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (e[(e.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER'), e;
    })({});
function S(e) {
    let { containerContext: t, image: n, title: a, description: T, enableSocialProof: S, analyticsLocationSection: A, upsellViewedTrackingData: N, onClose: C, onDisplay: R, onLearnMore: O } = e,
        D = (0, o.e7)([h.Z], () => h.Z.affinities),
        x = (0, o.e7)([h.Z], () => h.Z.hasFetched);
    r.useEffect(() => {
        !x && S && u.MH();
    }, [x, S]),
        r.useEffect(() => {
            _.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, N), null == R || R();
        }, [R, N]);
    let L = D.length > 1 && S,
        P = () => (2 === t ? b.hasTabParentContainer : 1 === t ? b.hasParentContainer : b.noParentContainer),
        w = () => {
            _.default.track(y.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: A,
                location_object: y.qAy.NAVIGATION_LINK
            }),
                null == O || O(),
                (0, d.Z)(),
                C(),
                (0, c.xf)(),
                (0, f.uL)(y.Z5c.APPLICATION_STORE);
        },
        M = (0, m.N)(),
        k = r.useCallback(() => {
            var e;
            return null !== (e = (0, p.fr)(M)) && void 0 !== e ? e : I.intl.string(I.t.pj0XBA);
        }, [M]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.YMn, {
                backdropStyle: l.fCB.DARK,
                onClose: C,
                'aria-label': I.intl.string(I.t.cpT0Cg),
                isVisible: !0
            }),
            (0, i.jsxs)('div', {
                className: s()(b.container, P()),
                children: [
                    (0, i.jsx)(l.olH, {
                        onClick: C,
                        className: b.closeButton
                    }),
                    (0, i.jsxs)('div', {
                        className: b.contentContainer,
                        children: [
                            (0, i.jsx)('img', {
                                className: b.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: 'Nitro Perk'
                            }),
                            (0, i.jsx)(l.X6q, {
                                className: s()(b.title, { [b.titleNoSocialProof]: !L }),
                                variant: 'heading-xl/bold',
                                children: a
                            }),
                            L && (0, i.jsx)(E.Z, { affinities: D }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: b.body,
                                children: T
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: b.ctaContainer,
                        children: [
                            (0, i.jsx)(l.zxk, {
                                className: b.secondaryCTA,
                                size: l.zxk.Sizes.SMALL,
                                color: l.zxk.Colors.CUSTOM,
                                look: l.zxk.Looks.LINK,
                                onClick: w,
                                children: I.intl.string(I.t.ZnqyZ2)
                            }),
                            (0, i.jsx)(g.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: A,
                                    object: y.qAy.BUTTON_CTA
                                },
                                subscriptionTier: v.Si.TIER_2,
                                size: l.zxk.Sizes.SMALL,
                                color: l.zxk.Colors.CUSTOM,
                                onClick: () => {
                                    C();
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
