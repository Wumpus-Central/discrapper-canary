n.d(t, {
    Z: () => M,
    p: () => j,
}),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(313666),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(355467),
    f = n(37234),
    p = n(174609),
    _ = n(703656),
    m = n(626135),
    h = n(526167),
    g = n(74538),
    E = n(357355),
    b = n(283066),
    y = n(639119),
    O = n(638212),
    v = n(767714),
    S = n(717975),
    I = n(302945),
    T = n(474936),
    C = n(981631),
    A = n(388032),
    N = n(313655),
    P = n(90081),
    R = n(51766),
    w = n(526438),
    D = n(572637),
    x = n(371587),
    L = n(699653),
    j = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.PARENT_CONTAINER = 1)] = "PARENT_CONTAINER"),
            (e[(e.TAB_PARENT_CONTAINER = 2)] = "TAB_PARENT_CONTAINER"),
            e
        );
    })({});
function M(e) {
    let {
            containerContext: t,
            image: n,
            title: a,
            description: j,
            enableSocialProof: M,
            analyticsLocationSection: k,
            upsellViewedTrackingData: U,
            onClose: G,
            onDisplay: Z,
            onLearnMore: B,
            isEmojiPickerOverlay: F = !1,
        } = e,
        V = (0, l.e7)([E.Z], () => E.Z.affinities),
        H = (0, l.e7)([E.Z], () => E.Z.hasFetched);
    i.useEffect(() => {
        !H && M && d.MH();
    }, [H, M]),
        i.useEffect(() => {
            m.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, U), null == Z || Z();
        }, [Z, U]);
    let Y = V.length > 1 && M,
        W = () => (2 === t ? P.hasTabParentContainer : 1 === t ? P.hasParentContainer : P.noParentContainer),
        K = () => {
            m.default.track(C.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: k,
                location_object: C.qAy.NAVIGATION_LINK,
            }),
                null == B || B(),
                (0, p.Z)(),
                G(),
                (0, f.xf)(),
                (0, _.uL)(C.Z5c.APPLICATION_STORE);
        },
        z = (0, y.N)(),
        q = i.useCallback(() => {
            var e;
            return null != (e = (0, g.fr)(z, T.Si.TIER_2)) ? e : A.intl.string(A.t.pj0XBN);
        }, [z]),
        Q = (0, b.Z)({ location: "PremiumUpsellPickerOverlay" }),
        X = (0, S.Z)(T.Si.TIER_2);
    if (Q) {
        let e;
        e = F ? ((0, h.rO)() ? w.Z : D.Z) : (0, h.rO)() ? x.Z : L.Z;
        let t = F ? "nitro-pink" : "green";
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.ZMr, {
                    onClick: G,
                    isVisible: !0,
                }),
                (0, r.jsxs)(u.$1m, {
                    color: t,
                    className: N.container,
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.content,
                            children: [
                                (0, r.jsx)(u.olH, {
                                    "data-migration-pending": !0,
                                    onClick: G,
                                    className: N.closeButton,
                                }),
                                (0, r.jsxs)("div", {
                                    className: N.contentContainer,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: R.headerGraphic,
                                            children: (0, r.jsx)(u.zsu, {
                                                type: "video",
                                                src: e,
                                                loop: !0,
                                                loopAt: 5,
                                            }),
                                        }),
                                        null != X && (0, r.jsx)(s.C, { type: { text: X } }),
                                        (0, r.jsx)(u.Heading, {
                                            className: o()(N.title, { [N.withBadge]: null != X }),
                                            variant: "heading-xl/bold",
                                            color: "header-primary",
                                            children: a,
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            className: N.body,
                                            children: j,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: N.footer,
                            children: (0, r.jsxs)("div", {
                                className: N.buttonContainer,
                                children: [
                                    (0, r.jsx)(u.Button, {
                                        variant: "secondary",
                                        onClick: K,
                                        text: A.intl.string(A.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(O.Z, {
                                        premiumModalAnalyticsLocation: {
                                            section: k,
                                            object: C.qAy.BUTTON_CTA,
                                        },
                                        subscriptionTier: T.Si.TIER_2,
                                        onClick: () => {
                                            G();
                                        },
                                        defaultTextOverride: q(),
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
                onClick: G,
                isVisible: !0,
            }),
            (0, r.jsxs)("div", {
                className: o()(P.container, W()),
                children: [
                    (0, r.jsx)(u.olH, {
                        "data-migration-pending": !0,
                        onClick: G,
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
                            (0, r.jsx)(u.Heading, {
                                className: o()(P.title, { [P.titleNoSocialProof]: !Y }),
                                variant: "heading-xl/bold",
                                children: a,
                            }),
                            Y && (0, r.jsx)(I.Z, { affinities: V }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                className: P.body,
                                children: j,
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
                                onClick: K,
                                children: A.intl.string(A.t.ZnqyZ2),
                            }),
                            (0, r.jsx)(v.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: k,
                                    object: C.qAy.BUTTON_CTA,
                                },
                                subscriptionTier: T.Si.TIER_2,
                                size: c.zx.Sizes.SMALL,
                                color: c.zx.Colors.CUSTOM,
                                onClick: () => {
                                    G();
                                },
                                textOptions: { textOverride: q() },
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
