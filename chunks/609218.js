r.d(n, {
    Z: function () {
        return A;
    },
    p: function () {
        return i;
    }
});
var i,
    a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(355467),
    f = r(37234),
    _ = r(174609),
    h = r(703656),
    p = r(626135),
    m = r(74538),
    g = r(357355),
    E = r(639119),
    v = r(197115),
    I = r(302945),
    T = r(474936),
    b = r(981631),
    y = r(388032),
    S = r(638916);
function A(e) {
    let { containerContext: n, image: r, title: i, description: o, enableSocialProof: A, analyticsLocationSection: N, upsellViewedTrackingData: C, onClose: R, onDisplay: O, onLearnMore: D } = e,
        L = (0, u.e7)([g.Z], () => g.Z.affinities),
        x = (0, u.e7)([g.Z], () => g.Z.hasFetched);
    s.useEffect(() => {
        !x && A && d.MH();
    }, [x, A]),
        s.useEffect(() => {
            p.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, C), null == O || O();
        }, [O, C]);
    let w = L.length > 1 && A,
        P = () => (2 === n ? S.hasTabParentContainer : 1 === n ? S.hasParentContainer : S.noParentContainer),
        M = () => {
            p.default.track(b.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: N,
                location_object: b.qAy.NAVIGATION_LINK
            }),
                null == D || D(),
                (0, _.Z)(),
                R(),
                (0, f.xf)(),
                (0, h.uL)(b.Z5c.APPLICATION_STORE);
        },
        k = (0, E.N)(),
        U = s.useCallback(() => {
            var e;
            return null !== (e = (0, m.fr)(k)) && void 0 !== e ? e : y.intl.string(y.t.pj0XBA);
        }, [k]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Backdrop, {
                backdropStyle: c.BackdropStyles.DARK,
                onClose: R,
                'aria-label': y.intl.string(y.t.cpT0Cg),
                isVisible: !0
            }),
            (0, a.jsxs)('div', {
                className: l()(S.container, P()),
                children: [
                    (0, a.jsx)(c.ModalCloseButton, {
                        onClick: R,
                        className: S.closeButton
                    }),
                    (0, a.jsxs)('div', {
                        className: S.contentContainer,
                        children: [
                            (0, a.jsx)('img', {
                                className: S.image,
                                width: r.width,
                                height: r.height,
                                src: r.url,
                                alt: 'Nitro Perk'
                            }),
                            (0, a.jsx)(c.Heading, {
                                className: l()(S.title, { [S.titleNoSocialProof]: !w }),
                                variant: 'heading-xl/bold',
                                children: i
                            }),
                            w && (0, a.jsx)(I.Z, { affinities: L }),
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                className: S.body,
                                children: o
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: S.ctaContainer,
                        children: [
                            (0, a.jsx)(c.Button, {
                                className: S.secondaryCTA,
                                size: c.Button.Sizes.SMALL,
                                color: c.Button.Colors.CUSTOM,
                                look: c.Button.Looks.LINK,
                                onClick: M,
                                children: y.intl.string(y.t.ZnqyZ2)
                            }),
                            (0, a.jsx)(v.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: N,
                                    object: b.qAy.BUTTON_CTA
                                },
                                subscriptionTier: T.Si.TIER_2,
                                size: c.Button.Sizes.SMALL,
                                color: c.Button.Colors.CUSTOM,
                                onClick: () => {
                                    R();
                                },
                                buttonText: U()
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (e[(e.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER');
})(i || (i = {}));
