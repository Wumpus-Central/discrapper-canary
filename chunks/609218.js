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
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(355467),
    f = r(37234),
    p = r(174609),
    h = r(703656),
    _ = r(626135),
    m = r(74538),
    g = r(357355),
    E = r(639119),
    v = r(197115),
    y = r(302945),
    b = r(474936),
    I = r(981631),
    T = r(388032),
    S = r(638916);
function A(e) {
    let { containerContext: n, image: r, title: i, description: s, enableSocialProof: A, analyticsLocationSection: C, upsellViewedTrackingData: N, onClose: R, onDisplay: O, onLearnMore: D } = e,
        L = (0, u.e7)([g.Z], () => g.Z.affinities),
        x = (0, u.e7)([g.Z], () => g.Z.hasFetched);
    o.useEffect(() => {
        !x && A && d.MH();
    }, [x, A]),
        o.useEffect(() => {
            _.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, N), null == O || O();
        }, [O, N]);
    let w = L.length > 1 && A,
        P = () => (2 === n ? S.hasTabParentContainer : 1 === n ? S.hasParentContainer : S.noParentContainer),
        M = () => {
            _.default.track(I.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: C,
                location_object: I.qAy.NAVIGATION_LINK
            }),
                null == D || D(),
                (0, p.Z)(),
                R(),
                (0, f.xf)(),
                (0, h.uL)(I.Z5c.APPLICATION_STORE);
        },
        k = (0, E.N)(),
        U = o.useCallback(() => {
            var e;
            return null !== (e = (0, m.fr)(k)) && void 0 !== e ? e : T.intl.string(T.t.pj0XBA);
        }, [k]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Backdrop, {
                backdropStyle: c.BackdropStyles.DARK,
                onClose: R,
                'aria-label': T.intl.string(T.t.cpT0Cg),
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
                            w && (0, a.jsx)(y.Z, { affinities: L }),
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                className: S.body,
                                children: s
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
                                children: T.intl.string(T.t.ZnqyZ2)
                            }),
                            (0, a.jsx)(v.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: C,
                                    object: I.qAy.BUTTON_CTA
                                },
                                subscriptionTier: b.Si.TIER_2,
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
