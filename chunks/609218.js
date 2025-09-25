n.d(t, {
    Z: () => k,
    p: () => M,
}),
    n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(313666),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(355467),
    f = n(37234),
    _ = n(174609),
    p = n(703656),
    h = n(626135),
    m = n(526167),
    g = n(74538),
    E = n(357355),
    b = n(47280),
    y = n(998076),
    O = n(639119),
    v = n(638212),
    I = n(767714),
    T = n(717975),
    S = n(302945),
    A = n(474936),
    C = n(981631),
    N = n(388032),
    R = n(398068),
    P = n(885807),
    w = n(456208),
    D = n(428946),
    x = n(42948),
    L = n(109194),
    j = n(352812),
    M = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.PARENT_CONTAINER = 1)] = "PARENT_CONTAINER"),
            (e[(e.TAB_PARENT_CONTAINER = 2)] = "TAB_PARENT_CONTAINER"),
            e
        );
    })({});
function k(e) {
    let {
            containerContext: t,
            image: n,
            title: a,
            description: M,
            enableSocialProof: k,
            analyticsLocationSection: U,
            upsellViewedTrackingData: G,
            onClose: B,
            onDisplay: Z,
            onLearnMore: F,
            isEmojiPickerOverlay: V = !1,
        } = e,
        H = (0, l.e7)([E.Z], () => E.Z.affinities),
        Y = (0, l.e7)([E.Z], () => E.Z.hasFetched);
    i.useEffect(() => {
        !Y && k && d.MH();
    }, [Y, k]),
        i.useEffect(() => {
            h.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, G), null == Z || Z();
        }, [Z, G]);
    let W = H.length > 1 && k,
        K = () => (2 === t ? P.hasTabParentContainer : 1 === t ? P.hasParentContainer : P.noParentContainer),
        z = () => {
            h.default.track(C.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: U,
                location_object: C.qAy.NAVIGATION_LINK,
            }),
                null == F || F(),
                (0, _.Z)(),
                B(),
                (0, f.xf)(),
                (0, p.uL)(C.Z5c.APPLICATION_STORE);
        },
        q = (0, O.N)(),
        X = i.useCallback(() => {
            var e;
            return null != (e = (0, g.fr)(q, A.Si.TIER_2)) ? e : N.intl.string(N.t.pj0XBA);
        }, [q]),
        Q = (0, b.ZP)({ location: "PremiumUpsellPickerOverlay" }),
        J = (0, y.Z)({ location: "PremiumUpsellPickerOverlay" }),
        $ = Q || J,
        ee = (0, T.Z)(A.Si.TIER_2);
    if ($) {
        let e;
        e = V ? ((0, m.rO)() ? D.Z : x.Z) : (0, m.rO)() ? L.Z : j.Z;
        let t = V ? "nitro-pink" : "green";
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.ZMr, {
                    onClick: B,
                    isVisible: !0,
                }),
                (0, r.jsxs)(u.$1m, {
                    color: t,
                    className: R.container,
                    children: [
                        (0, r.jsxs)("div", {
                            className: R.content,
                            children: [
                                (0, r.jsx)(u.olH, {
                                    "data-migration-pending": !0,
                                    onClick: B,
                                    className: R.closeButton,
                                }),
                                (0, r.jsxs)("div", {
                                    className: R.contentContainer,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: w.headerGraphic,
                                            children: (0, r.jsx)(u.zsu, {
                                                type: "video",
                                                src: e,
                                                loop: !0,
                                                loopAt: 5,
                                            }),
                                        }),
                                        null != ee && (0, r.jsx)(s.C, { type: { text: ee } }),
                                        (0, r.jsx)(u.X6q, {
                                            className: o()(R.title, { [R.withBadge]: null != ee }),
                                            variant: "heading-xl/bold",
                                            color: "header-primary",
                                            children: a,
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/medium",
                                            color: "text-secondary",
                                            className: R.body,
                                            children: M,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: R.footer,
                            children: (0, r.jsxs)("div", {
                                className: R.buttonContainer,
                                children: [
                                    (0, r.jsx)(u.zxk, {
                                        variant: "secondary",
                                        onClick: z,
                                        text: N.intl.string(N.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(v.Z, {
                                        premiumModalAnalyticsLocation: {
                                            section: U,
                                            object: C.qAy.BUTTON_CTA,
                                        },
                                        subscriptionTier: A.Si.TIER_2,
                                        onClick: () => {
                                            B();
                                        },
                                        defaultTextOverride: X(),
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
            (0, r.jsx)(u.ZMr, {
                onClick: B,
                isVisible: !0,
            }),
            (0, r.jsxs)("div", {
                className: o()(P.container, K()),
                children: [
                    (0, r.jsx)(u.olH, {
                        "data-migration-pending": !0,
                        onClick: B,
                        className: P.closeButton,
                    }),
                    (0, r.jsxs)("div", {
                        className: P.contentContainer,
                        children: [
                            (0, r.jsx)("img", {
                                className: P.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: "Nitro Perk",
                            }),
                            (0, r.jsx)(u.X6q, {
                                className: o()(P.title, { [P.titleNoSocialProof]: !W }),
                                variant: "heading-xl/bold",
                                children: a,
                            }),
                            W && (0, r.jsx)(S.Z, { affinities: H }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                className: P.body,
                                children: M,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: P.ctaContainer,
                        children: [
                            (0, r.jsx)(c.zx, {
                                "data-migration-pending": !0,
                                className: P.secondaryCTA,
                                size: c.zx.Sizes.SMALL,
                                color: c.zx.Colors.CUSTOM,
                                look: c.zx.Looks.LINK,
                                onClick: z,
                                children: N.intl.string(N.t.ZnqyZ2),
                            }),
                            (0, r.jsx)(I.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: U,
                                    object: C.qAy.BUTTON_CTA,
                                },
                                subscriptionTier: A.Si.TIER_2,
                                size: c.zx.Sizes.SMALL,
                                color: c.zx.Colors.CUSTOM,
                                onClick: () => {
                                    B();
                                },
                                textOptions: { textOverride: X() },
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
