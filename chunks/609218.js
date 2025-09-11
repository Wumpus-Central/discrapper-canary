n.d(t, {
    Z: () => U,
    p: () => M,
}),
    n(953529);
var r = n(951288),
    i = n(647438),
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
    y = n(47280),
    O = n(998076),
    v = n(639119),
    I = n(638212),
    T = n(767714),
    S = n(717975),
    A = n(302945),
    C = n(474936),
    N = n(981631),
    R = n(388032),
    P = n(124527),
    w = n(591867),
    D = n(525751),
    x = n(526438),
    L = n(572637),
    j = n(371587),
    k = n(699653),
    M = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.PARENT_CONTAINER = 1)] = "PARENT_CONTAINER"),
            (e[(e.TAB_PARENT_CONTAINER = 2)] = "TAB_PARENT_CONTAINER"),
            e
        );
    })({});
function U(e) {
    let {
            containerContext: t,
            image: n,
            title: a,
            description: M,
            enableSocialProof: U,
            analyticsLocationSection: G,
            upsellViewedTrackingData: B,
            onClose: Z,
            onDisplay: F,
            onLearnMore: V,
            isEmojiPickerOverlay: H = !1,
        } = e,
        Y = (0, s.e7)([b.Z], () => b.Z.affinities),
        W = (0, s.e7)([b.Z], () => b.Z.hasFetched);
    i.useEffect(() => {
        !W && U && f.MH();
    }, [W, U]),
        i.useEffect(() => {
            m.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, B), null == F || F();
        }, [F, B]);
    let K = Y.length > 1 && U,
        z = () => (2 === t ? w.hasTabParentContainer : 1 === t ? w.hasParentContainer : w.noParentContainer),
        q = () => {
            m.default.track(N.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: G,
                location_object: N.qAy.NAVIGATION_LINK,
            }),
                null == V || V(),
                (0, p.Z)(),
                Z(),
                (0, _.xf)(),
                (0, h.uL)(N.Z5c.APPLICATION_STORE);
        },
        X = (0, v.N)(),
        Q = i.useCallback(() => {
            var e;
            return null != (e = (0, E.fr)(X, C.Si.TIER_2)) ? e : R.intl.string(R.t.pj0XBA);
        }, [X]),
        J = (0, y.ZP)({ location: "PremiumUpsellPickerOverlay" }),
        $ = (0, O.Z)({ location: "PremiumUpsellPickerOverlay" }),
        ee = J || $,
        et = (0, S.Z)(C.Si.TIER_2);
    if (ee) {
        let e;
        e = H ? ((0, g.rO)() ? x.Z : L.Z) : (0, g.rO)() ? j.Z : k.Z;
        let t = H ? "nitro-pink" : "green";
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.ZMr, {
                    onClick: Z,
                    isVisible: !0,
                }),
                (0, r.jsxs)(c.$, {
                    color: t,
                    className: P.container,
                    children: [
                        (0, r.jsxs)("div", {
                            className: P.content,
                            children: [
                                (0, r.jsx)(d.olH, {
                                    "data-migration-pending": !0,
                                    onClick: Z,
                                    className: P.closeButton,
                                }),
                                (0, r.jsxs)("div", {
                                    className: P.contentContainer,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: D.headerGraphic,
                                            children: (0, r.jsx)(d.zsu, {
                                                type: "video",
                                                src: e,
                                                loop: !0,
                                                loopAt: 5,
                                            }),
                                        }),
                                        null != et && (0, r.jsx)(l.C, { type: { text: et } }),
                                        (0, r.jsx)(d.X6q, {
                                            className: o()(P.title, { [P.withBadge]: null != et }),
                                            variant: "heading-xl/bold",
                                            color: "header-primary",
                                            children: a,
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-md/medium",
                                            color: "text-secondary",
                                            className: P.body,
                                            children: M,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: P.footer,
                            children: (0, r.jsxs)("div", {
                                className: P.buttonContainer,
                                children: [
                                    (0, r.jsx)(d.zxk, {
                                        variant: "secondary",
                                        onClick: q,
                                        text: R.intl.string(R.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(I.Z, {
                                        premiumModalAnalyticsLocation: {
                                            section: G,
                                            object: N.qAy.BUTTON_CTA,
                                        },
                                        subscriptionTier: C.Si.TIER_2,
                                        onClick: () => {
                                            Z();
                                        },
                                        defaultTextOverride: Q(),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.ZMr, {
                onClick: Z,
                isVisible: !0,
            }),
            (0, r.jsxs)("div", {
                className: o()(w.container, z()),
                children: [
                    (0, r.jsx)(d.olH, {
                        "data-migration-pending": !0,
                        onClick: Z,
                        className: w.closeButton,
                    }),
                    (0, r.jsxs)("div", {
                        className: w.contentContainer,
                        children: [
                            (0, r.jsx)("img", {
                                className: w.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: "Nitro Perk",
                            }),
                            (0, r.jsx)(d.X6q, {
                                className: o()(w.title, { [w.titleNoSocialProof]: !K }),
                                variant: "heading-xl/bold",
                                children: a,
                            }),
                            K && (0, r.jsx)(A.Z, { affinities: Y }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/medium",
                                className: w.body,
                                children: M,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: w.ctaContainer,
                        children: [
                            (0, r.jsx)(u.zx, {
                                "data-migration-pending": !0,
                                className: w.secondaryCTA,
                                size: u.zx.Sizes.SMALL,
                                color: u.zx.Colors.CUSTOM,
                                look: u.zx.Looks.LINK,
                                onClick: q,
                                children: R.intl.string(R.t.ZnqyZ2),
                            }),
                            (0, r.jsx)(T.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: G,
                                    object: N.qAy.BUTTON_CTA,
                                },
                                subscriptionTier: C.Si.TIER_2,
                                size: u.zx.Sizes.SMALL,
                                color: u.zx.Colors.CUSTOM,
                                onClick: () => {
                                    Z();
                                },
                                textOptions: { textOverride: Q() },
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
